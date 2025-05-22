import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProduitService } from '../../SERVICES/produit.service';
import { Produit } from '../../MODELS/produit.model';
import { FactureProForma, StatutFactureProForma } from '../../MODELS/FactureProForma.model';
import { FactureProFormaService } from '../../SERVICES/factureproforma-service';
import { CustomNumberPipe } from '../../MODELS/customNumberPipe';
import { UsersService } from '../../SERVICES/users.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as pdfjsLib from 'pdfjs-dist';
import { EntrepriseService } from '../../SERVICES/entreprise-service';
import { firstValueFrom } from 'rxjs';
import { EnLettresPipe } from '../../MODELS/number-to-words.pipe';

// Ajouter cette interface pour les pièces jointes
interface EmailAttachment {
  name: string;
  file: File;
}

type EventType = 'creation' | 'modification' | 'approbation' | 'envoi' | 'validation';

// Interface modifiée
interface HistoricalEvent {
  date: Date;
  user: { nomComplet: string }; // Maintenant obligatoire
  type: EventType;
  description: string;
  status?: StatutFactureProForma;
}

@Component({
  selector: 'app-detail-facture-proforma',
  imports: [ FormsModule, CommonModule, ReactiveFormsModule, CustomNumberPipe,  EnLettresPipe],
  templateUrl: './detail-facture-proforma.component.html',
  styleUrl: './detail-facture-proforma.component.scss'
})
export class DetailFactureProformaComponent implements OnInit {
  private enLettresPipe = new EnLettresPipe();
  isLoading: boolean = false;
  activeRemise: boolean = false;
  activeTva: boolean = false;
  remisePourcentage: number = 0;
  tva: number = 0;
  errorMessage: string = '';
  nomEntreprise: string = '';
  produits: Produit[] = [];
  pendingAdjustments: any[] = [];
  newProduitId: number | null = null;
  inputLignes: { produitId: number | null; quantite: number; ligneDescription: string | null; isDuplicate: boolean }[] = [{
    produitId: null, quantite: 1, ligneDescription: null, isDuplicate: false
  }];
  confirmedLignes: {produitId: number | null;quantite: number;ligneDescription: string | null;}[] = [];
  factureId!: number;
  showDuplicatePopup: boolean = false;
  showStatusConfirmation = false;
  pendingStatut: StatutFactureProForma | null = null;
  showEmailPopup: boolean = false;
  previewPDFUrl: string | null = null;
  loadingPreview: boolean = false;
  selectedStatutLabel = '';
  statusOptions = StatutFactureProForma;
  dateRelance?: string;
  users: any[] = [];
  filteredUsers: any[] = [];
  emailDestinataires: string = '';
  emailSujet: string = '';
  emailMessage: string = '';
  // methodeEnvoi: string = 'EMAIL';
  methodeEnvoi: 'physique' | 'email' = 'physique'; // Valeur par défaut
  // Variables pour le déplacement
  isDragging = false;
  startX = 0;
  startY = 0;
  initialX = 0;
  initialY = 0;
  popupOffset = { x: 0, y: 0 };
  // attachments: File[] = [];
  selectedFile: File | null = null;
  // Variables pour la gestion des emails
  emailDestinatairesList: string[] = [];
  currentEmail = '';
  emailCcList: string[] = [];
  currentCcEmail: string = '';
  emailUtilisateur: string = '';
  facture: FactureProForma | null = null;
  nom: string | null = null;
  siege!: string;
  email: string = '';
  logo: string | null = null; 
  secteur!: string;
  telephone!: string;
  adresse!: string;
  nif!: string;
  banque!: string;
  nina!: string;
  pays!: string;
  rccm!: string;
  siteWeb!: string; 
  signataire!: string
  signataireNom!: string;
  userEntrepriseId!: number | null;
  historicalEvents: HistoricalEvent[] = [];
  isSending: boolean = false;
  attachments: EmailAttachment[] = [];
  currentAttachment: File | null = null;
  @ViewChild('editableContent', { static: false }) editableContent!: ElementRef;
  @ViewChild('subjectInput', { static: false }) subjectInput!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(
      private router: Router,
      private produitService: ProduitService,
      private route: ActivatedRoute,
      private factureProFormaService: FactureProFormaService,
      private usersService: UsersService,
      private cdr: ChangeDetectorRef,
      private renderer: Renderer2,
      private entrepriseService: EntrepriseService,
    ) {}

  ngOnInit(): void {
    this.getUserEntrepriseInfo(); 
    this.getProduits();
    this.getUserInfo();
    
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.factureId = +idParam;
      this.getUserInfo();
    }
  }

  get isValidated(): boolean {
    return this.factureProForma.statut === this.statusOptions.VALIDE;
  }

  factureProForma: FactureProForma = {
    id: 0,
    numeroFacture: '',
    siege: '',
    dateCreation: '',
    description: '',
    totalHT: 0,
    tva: false,
    totalFacture: 0,
    lignesFacture: [],
    statut: StatutFactureProForma.BROUILLON,
  } as FactureProForma;

  // Calcul du montant de la remise
  onRemiseChange() {
    // Force la mise à jour des valeurs
    this.remisePourcentage = Number(this.remisePourcentage);
  }

  // Calcul du montant de la remise
  getMontantRemise(): number {
    return (this.getTotalHT() * this.remisePourcentage) / 100;
  }

  // Calcul du montant HT après remise
  getTotalApresRemise(): number {
    return this.getTotalHT() - this.getMontantRemise();
  }

  // Exemple pour la TVA
  getMontantTVA(): number {
    if (!this.activeTva) return 0;
    const base = this.getTotalApresRemise();
    return base * 0.18; // 18% de TVA
  }

  getTotalCommercial() : number {
    return this.getTotalApresRemise();
  }

  getTotalTTC(): number {
    return this.getTotalApresRemise() + this.getMontantTVA();
  }

  // Modifier load Historical Events pour inclure tous les statuts
  private loadHistoricalEvents() {
    this.factureProFormaService.getHistoriqueFacture(this.factureId).subscribe({
      next: (historique: any) => {
        this.historicalEvents = historique.historiqueActions.map((action: any) => ({
          date: new Date(action.date),
          user: { nomComplet: action.utilisateur },
          type: this.mapActionType(action.action),
          description: action.details,
          status: this.mapActionToStatus(action.action)
        }));
        
        // Ajouter la création si manquante
        if (!this.historicalEvents.some(e => e.type === 'creation')) {
          this.historicalEvents.push({
            date: new Date(this.factureProForma.dateCreation),
            user: { nomComplet: this.factureProForma.utilisateurCreateur?.nomComplet || 'Système' },
            type: 'creation',
            description: 'Création de la facture'
          });
        }

        // Trier par date
        this.historicalEvents.sort((a, b) => b.date.getTime() - a.date.getTime());
      },
      error: (err) => console.error('Erreur historique', err)
  });
}

  private mapActionType(action: string): EventType {
    const mapping: Record<string, EventType> = {
      'Création': 'creation',
      'Modification': 'modification',
      'Approbation': 'approbation',
      'Validation': 'validation',
      'Envoi': 'envoi',
      'Annulation': 'modification'
    };
    return mapping[action] || 'modification';
  }

  private mapActionToStatus(action: string): StatutFactureProForma | undefined {
    const statusMap: Record<string, StatutFactureProForma> = {
      'Facture approuvée': StatutFactureProForma.APPROUVE,
      'Facture envoyée': StatutFactureProForma.ENVOYE,
      'Facture validée': StatutFactureProForma.VALIDE
    };
    return statusMap[action];
  }

  loadFactureProforma(id: number): void {
    this.factureProFormaService.getFactureProformaById(id).subscribe({
      next: (data) => {
        this.factureProForma = data;
        this.loadHistoricalEvents();

         // Initialise les lignes confirmées avec les données existantes
        this.confirmedLignes = data.lignesFacture.map(l => ({
          produitId: l.produit.id,
          quantite: l.quantite,
          ligneDescription: l.ligneDescription ?? ''
        }));
      
        // Correction 1 : Utilisez l'opérateur de coalescence null
        this.activeRemise = (data.remise ?? 0) > 0;
        
        // Correction 2 : Ajoutez une vérification de totalHT
        this.remisePourcentage = this.activeRemise 
          ? ((data.remise ?? 0) / (data.totalHT || 1)) * 100 
          : 0;

        this.activeTva = data.tva;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur:', err);
        this.errorMessage = 'Impossible de charger la facture';
        this.isLoading = false;
      }
    });
  }

  getPrixVente(produitId: number | null): number {
    if (!produitId) return 0;
    const produit = this.produits.find(p => p.id === produitId);
    if (!produit) {
      console.error('Produit non trouvé pour ID:', produitId);
      return 0;
    }
    return produit.prixVente || 0;
  }

  // Calcule le montant total pour une ligne
  getMontantTotal(ligne: any): number {
    const prix = this.getPrixVente(ligne.produitId);
    return prix * (ligne.quantite || 0);
  }

  getTotalHT(): number {
    const totalConfirmed = this.confirmedLignes.reduce((total, ligne) => 
      total + this.getMontantTotal(ligne), 0);
    
    const totalInput = this.inputLignes.reduce((total, ligne) => {
      if (ligne.produitId && ligne.quantite > 0) {
        return total + this.getMontantTotal(ligne);
      }
      return total;
    }, 0);
  
    return totalConfirmed + totalInput;
  }

  // Liste Produits
  async getProduits() {
    return new Promise<void>((resolve) => {
      if (this.userEntrepriseId) {
        this.produitService.getProduitsParEntreprise(this.userEntrepriseId).subscribe({
          next: (data: Produit[]) => {
            this.produits = data;
            resolve();
            console.log('PRODUITS RÉCUPÉRÉS:', this.produits); // <=== Ajoutez ceci
          },
          error: (err) => console.error('Erreur récupération produits :', err)
        });
      }
    });
  }

  getUserInfo(): void {
    this.usersService.getUserInfo().subscribe({
      next: (user) => {
        this.nomEntreprise = user.nomEntreprise;
        this.userEntrepriseId = user.entrepriseId;
        this.siege = user.siege;
        this.email = user.email;



        if (this.email && !this.emailCcList.includes(this.email)) {
            this.emailCcList.push(this.email);
          }

        

         this.getProduits().then(() => { 
          this.loadFactureProforma(this.factureId); 
        });

  
        console.log("Infos utilisateur récupérées :", user);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }

  // Méthode pour fermer le popup
  closePopup() {
    this.showDuplicatePopup = false;
    // Tu peux aussi forcer la MAJ si besoin :
    this.updateCalculs();
  }

  // Méthode de mise à jour des calculs
  updateCalculs() {
    this.inputLignes = [...this.inputLignes];
  }

  // Méthode pour récupérer le nom du produit
  getProduitNom(produitId: number | null): string {
    if (!produitId) return '';
    const produit = this.produits.find(p => p.id === produitId);
    return produit?.nom || '';
  }

  // Toggle remise / TVA
  onToggleRemise() {
    if (!this.activeRemise) {
      this.remisePourcentage = 0;
    }
  }

  // Toggle remise / TVA
  onToggleTVA() {
    if (!this.activeTva) {
      this.tva = 0;
    }
  }

  ajouterLigneFacture(index: number) {
    const ligne = this.inputLignes[index];
    
    if (ligne.produitId && ligne.quantite > 0) {
      const produitExiste = this.confirmedLignes.some(
        l => l.produitId === ligne.produitId
      );
  
      if (produitExiste) {
        this.showDuplicatePopup = true;
        return;
      }
  
      this.confirmedLignes.push({...ligne});
      this.inputLignes = [{
        produitId: null, quantite: 1,
        ligneDescription: null,
        isDuplicate: false
      }];
    }
  }

  supprimerLigneConfirmee(index: number) {
    // Mettez à jour factureProForma.lignesFacture directement
    this.factureProForma.lignesFacture.splice(index, 1);
    // Optionnel : mettre à jour confirmedLignes si vous l'utilisez pour la vue
    this.confirmedLignes.splice(index, 1);
  }
  
  trackByFn(index: number, item: any): number {
    return index;
  }

  getFirstApprobateurName(): string | undefined {
    return this.factureProForma?.approbateurs?.[0]?.nomComplet;
  }

  cleanFactureForUpdate(facture: FactureProForma): any {
    return {
      client: facture.client ? { id: facture.client.id } : null,
      description: facture.description,
      lignesFacture: facture.lignesFacture.map(line => ({
        // Pour chaque ligne, retourner uniquement les propriétés nécessaires
        id: line.id,
        produit: { id: line.produit.id },
        quantite: line.quantite,
        prixUnitaire: line.prixUnitaire,
        ligneDescription: line.ligneDescription
      }))
      // Ajouter ici les autres propriétés autorisées si nécessaire
    };
  }
  
  submitUpdateForm() {
    const payload = {
      client: this.factureProForma.client ? { id: this.factureProForma.client.id } : null,
      description: this.factureProForma.description,
      // Utilisez confirmedLignes puisque c'est là que se trouvent les modifications (ajouts, suppressions, etc.)
      lignesFacture: this.confirmedLignes.map(l => ({
        produit: { id: l.produitId },
        quantite: l.quantite,
        prixUnitaire: this.getPrixVente(l.produitId),
        ligneDescription: l.ligneDescription
      }))
    };
    
    // Si vous avez aussi des lignes en cours d'ajout dans inputLignes, vous pouvez les concaténer :
    const nouvellesLignes = this.inputLignes
      .filter(l => l.produitId && l.quantite > 0)
      .map(l => ({
        produit: { id: l.produitId! },
        quantite: l.quantite,
        prixUnitaire: this.getPrixVente(l.produitId!),
        ligneDescription: l.ligneDescription
      }));
    
    payload.lignesFacture = [
      ...payload.lignesFacture,
      ...nouvellesLignes
    ];
    
    this.factureProFormaService.updateFactureProforma(
      this.factureId,
      this.activeRemise ? this.remisePourcentage : undefined,
      this.activeTva,
      payload as Partial<FactureProForma>
    ).subscribe({
      next: (res) => {
        console.log('Mise à jour réussie !', res);
        
        this.router.navigate(['/facture-proforma']);
      },
      error: (err) => {
        console.error('Échec de la mise à jour', err);
        this.errorMessage = err.error.message || 'Erreur lors de la modification';
      }
    });
  }

  // Ajouter ces méthodes
  canApprove(): boolean {
    return this.factureProForma.statut === StatutFactureProForma.BROUILLON;
  }

  canSendToApproval(): boolean {
    return this.factureProForma.statut === StatutFactureProForma.APPROBATION;
  }

  canSend(): boolean {
    return this.factureProForma.statut === StatutFactureProForma.APPROUVE;
  }

  canValidate(): boolean {
    return this.factureProForma.statut === StatutFactureProForma.ENVOYE;
  }

  openStatusConfirmation(newStatut: StatutFactureProForma): void {
     if (newStatut === StatutFactureProForma.ENVOYE) {
      this.openEmailPopup(); // Appeler la méthode qui gère la popup
      return;
    }

    if (this.isStatusTransitionAllowed(newStatut)) {
      this.pendingStatut = newStatut;
      this.selectedStatutLabel = this.getStatusLabel(newStatut);
      this.showStatusConfirmation = true;

      if (newStatut === StatutFactureProForma.APPROBATION) {
        this.loadUsersOfEntreprise(this.userEntrepriseId!);
      }
    }
  }

  async loadPDFPreview(url: string) {
    this.loadingPreview = true;
    this.previewPDFUrl = null;

    try {
      const pdf = await pdfjsLib.getDocument(url).promise;
      const page = await pdf.getPage(1);
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      if (!context) {
        throw new Error('Context Canvas 2D non disponible');
      }

      const viewport = page.getViewport({ scale: 0.5 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({
        canvasContext: context,
        viewport: viewport
      }).promise;

      this.previewPDFUrl = canvas.toDataURL();
    } catch (error) {
      console.error('Erreur de prévisualisation PDF:', error);
      // Optionnel : Afficher un message à l'utilisateur
    } finally {
      this.loadingPreview = false;
    }
  }

  async openEmailPopup() {
    this.showEmailPopup = true;

    // Générer le PDF et l'ajouter aux pièces jointes
    const pdfFile = await this.generatePDFAttachment();
    this.attachments = []; // Réinitialiser les pièces jointes existantes
    this.attachments.push({ name: pdfFile.name, file: pdfFile });
  }

  // Modifier la configuration des transitions
  private isStatusTransitionAllowed(newStatut: StatutFactureProForma): boolean {
    if (!this.factureProForma?.statut) return false;

    const allowedTransitions: Record<StatutFactureProForma, StatutFactureProForma[]> = {
      [StatutFactureProForma.BROUILLON]: [
        StatutFactureProForma.APPROUVE,
        StatutFactureProForma.APPROBATION,
        StatutFactureProForma.ENVOYE,
        StatutFactureProForma.VALIDE // Si vous voulez autoriser la validation directe
      ],
      [StatutFactureProForma.APPROBATION]: [
        StatutFactureProForma.APPROUVE,
        StatutFactureProForma.BROUILLON
      ],
      [StatutFactureProForma.APPROUVE]: [
        StatutFactureProForma.ENVOYE,
        StatutFactureProForma.BROUILLON,
        StatutFactureProForma.VALIDE // Optionnel
      ],
      [StatutFactureProForma.ENVOYE]: [
        StatutFactureProForma.VALIDE,
        StatutFactureProForma.APPROUVE,
        StatutFactureProForma.BROUILLON // Optionnel
      ],
      [StatutFactureProForma.VALIDE]: []
    };

    const currentStatut = this.factureProForma.statut as StatutFactureProForma;
    return allowedTransitions[currentStatut]?.includes(newStatut) || false;
  }

  // Ajouter cette méthode publique pour le template
  canTransitionTo(targetStatus: StatutFactureProForma): boolean {
    return this.isStatusTransitionAllowed(targetStatus);
  }

  confirmStatusChange(): void {
    if (!this.pendingStatut) return;
    const selectedUsers = this.users.filter(u => u.selected).map(u => u.id); 
  
    // Préparez toujours vos valeurs de remise & tva
    const remisePourKg = this.activeRemise ? this.remisePourcentage : 0;
    const tvaFlag     = this.activeTva;
  
    // Construisez votre payload de statut
    const modifications: Partial<FactureProForma> = {
      statut: this.pendingStatut,
      ...(this.pendingStatut === StatutFactureProForma.ENVOYE && this.dateRelance
        ? { dateRelance: this.dateRelance }
        : {}),
      // facultatif : remettez vos approbateurs à vide quand on sort d'Approbation
      ...(this.pendingStatut !== StatutFactureProForma.APPROBATION && {
        approbateurs: []
      })
    };
  
    this.factureProFormaService.updateFactureProforma(
      this.factureId,
      remisePourKg,
      tvaFlag,
      modifications,
      this.pendingStatut === StatutFactureProForma.APPROBATION ? selectedUsers : undefined
    ).subscribe({
      next: (updatedFacture) => {
         // Mettre à jour l'historique immédiatement
          const newEvent: HistoricalEvent = {
            date: new Date(),
            user: this.getCurrentUser(),
            type: this.getEventType(this.pendingStatut!),
            description: this.getStatusDescription(this.pendingStatut!),
            status: this.pendingStatut!
          };
             // On retire l’éventuel event existant pour ce même statut…
          this.historicalEvents = this.historicalEvents
            .filter(e => e.status !== newEvent.status);

          // …et on l’ajoute en tête
          this.historicalEvents.unshift(newEvent);

             // mise à jour locale
          this.factureProForma = updatedFacture;
          // rechargez/remettez vos flags localement
          this.activeRemise = (updatedFacture.remise ?? 0) > 0;
          this.remisePourcentage = this.activeRemise
            ? ((updatedFacture.remise ?? 0) / (updatedFacture.totalHT || 1)) * 100
            : 0;
          this.activeTva    = updatedFacture.tva;
          this.showStatusConfirmation = false;
          this.pendingStatut = null;
          this.dateRelance = undefined;
        },
        error: err => {
          console.error('Erreur de mise à jour', err);
          alert('Échec de la mise à jour du statut');
          this.showStatusConfirmation = false;
        }
      });
  }  

  private getStatusDescription(status: StatutFactureProForma): string {
    const descriptions = {
        [StatutFactureProForma.BROUILLON]: 'Retour au brouillon',
        [StatutFactureProForma.APPROBATION]: 'Demande d\'approbation envoyée',
        [StatutFactureProForma.APPROUVE]: 'Facture approuvée',
        [StatutFactureProForma.ENVOYE]: 'Facture envoyée au client',
        [StatutFactureProForma.VALIDE]: 'Facture validée définitivement'
    };
    return descriptions[status];
  }

  // Ajouter ces méthodes helper
  private getCurrentUser() {
      // À adapter selon votre système d'authentification
      return { nomComplet: 'Utilisateur Actuel', id: 123 };
  }

  // Dans la classe du composant
  private getEventType(status: StatutFactureProForma): EventType {
    const statusMap: Record<StatutFactureProForma, EventType> = {
      [StatutFactureProForma.BROUILLON]: 'modification',
      [StatutFactureProForma.APPROBATION]: 'approbation',
      [StatutFactureProForma.APPROUVE]: 'approbation',
      [StatutFactureProForma.ENVOYE]: 'envoi',
      [StatutFactureProForma.VALIDE]: 'validation'
    };

    return statusMap[status] || 'modification';
  }

  cancelStatusChange(): void {
    this.showStatusConfirmation = false;
    this.pendingStatut = null;
  }

  private getStatusLabel(statut: StatutFactureProForma): string {
    const labels: Record<StatutFactureProForma, string> = {
      [StatutFactureProForma.BROUILLON]: 'Brouillon',
      [StatutFactureProForma.APPROBATION]: 'Approbation',
      [StatutFactureProForma.APPROUVE]: 'Approuvé',
      [StatutFactureProForma.ENVOYE]: 'Envoyé',
      [StatutFactureProForma.VALIDE]: 'Validé'
    };
    return labels[statut];
  }

  loadUsersOfEntreprise(entrepriseId: number) {
    if (entrepriseId == null) {
      console.error('ID d’entreprise invalide:', entrepriseId);
      return;
    }

    this.isLoading = true;
    this.usersService.getAllUsersOfEntreprise(entrepriseId).subscribe({
      next: (data) => {
        this.users = data.map(user => ({
          ...user,
          selected: false
        }));
        this.filteredUsers = this.users;
        this.isLoading = false;
        console.log('Utilisateurs récupérés:', this.users);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des utilisateurs', err);
        this.isLoading = false;
      }
    });
  }

  // Méthode appelée au changement de <select>
  onProduitChange(produitId: number | null, ligne: any, index: number) {
    ligne.produitId = produitId;
    ligne.isDuplicate = false;

    if (produitId) {
      // Vérifie dans les lignes déjà confirmées…
      const inConfirmed = this.confirmedLignes.some(l => l.produitId === produitId);
      // …et dans les autres lignes en cours (hors index courant)
      const inInput     = this.inputLignes
                            .filter((_, i) => i !== index)
                            .some(l => l.produitId === produitId);

      if (inConfirmed || inInput) {
        this.showDuplicatePopup = true;
        ligne.isDuplicate = true;
        // on retarde la remise à null pour laisser Angular traiter le change event
        setTimeout(() => {
          ligne.produitId = null;
          ligne.ligneDescription = null;
          ligne.isDuplicate = false;
          this.updateCalculs();
        }, 0);
        return;
      }

      // Si pas doublon, on met à jour la description
      const prod = this.produits.find(p => p.id === produitId);
      ligne.ligneDescription = prod?.description ?? null;
    } else {
      ligne.ligneDescription = null;
    }

    this.updateCalculs();
  }

  getAnnulerDetail() {
    this.router.navigate(['/facture-proforma']);
  }

  async confirmEmailSend() {
    this.isSending = true;
  
    // Simuler un chargement de 3 secondes
    await new Promise(resolve => setTimeout(resolve, 3000));
  try {
    // Mettre à jour la facture d'abord
    const payload: Partial<FactureProForma> = {
      statut: StatutFactureProForma.ENVOYE,
      methodeEnvoi: this.methodeEnvoi.toUpperCase() as 'EMAIL' | 'PHYSIQUE',
      // Corriger la conversion de date
      dateRelance: this.dateRelance ? new Date(this.dateRelance).toISOString() : undefined
    };

    const updatedFacture = await this.factureProFormaService.updateFactureProforma(
      this.factureId,
      this.activeRemise ? this.remisePourcentage : undefined,
      this.activeTva,
      payload
    ).toPromise();

    if (this.methodeEnvoi === 'email') {
      await this.handleEmailSending();
    }

    this.showEmailPopup = false;
    this.router.navigate(['/facture-proforma']);
  } catch (error) {
    this.handleError(error);
  }
  }

  private async handleEmailSending() {
    // Collecter les données de l'email
    const emailData = {
      to: this.emailDestinatairesList.join(','),
      cc: this.emailCcList.join(','),
      subject: this.subjectInput.nativeElement.value.trim(),
      body: this.editableContent.nativeElement.innerHTML,
      attachments: await this.prepareAttachments()
    };
    console.log("les donner du mail", emailData);
    
    // Envoyer l'email via le service
    await this.factureProFormaService.envoyerFactureEmail(
      this.factureId,
      emailData
    ).toPromise();

    // Réinitialiser le formulaire
    this.resetEmailForm();
  }

  private async prepareAttachments(): Promise<File[]> {
    return Promise.all(this.attachments.map(async (attachment) => {
      return attachment.file;
    }));
  }


  private async processEmailSending() {
      // Validation des champs email
      if (this.currentEmail.trim()) {
          this.emailDestinatairesList.push(this.currentEmail.trim());
          this.currentEmail = '';
      }

      if (this.emailDestinatairesList.length === 0) {
          throw new Error('Veuillez ajouter au moins un destinataire');
      }

      const sujet = this.subjectInput.nativeElement.value.trim();
      const corps = this.editableContent.nativeElement.innerHTML;

      if (!sujet || !corps) {
          throw new Error('Sujet et contenu du mail sont obligatoires');
      }

      // Envoi de l'email via le service
      await this.factureProFormaService.envoyerFactureEmail(
          this.factureId,
          {
              to: this.emailDestinatairesList.join(','),
              cc: this.emailCcList.join(','),
              subject: sujet,
              body: corps
          }
      ).toPromise();

      // Réinitialisation du formulaire email
      this.emailDestinatairesList = [];
      this.currentEmail = '';
      this.editableContent.nativeElement.innerHTML = '';
  }

  private handleError(error: any) {
    console.error('Erreur:', error);
    this.errorMessage = error.message || 'Une erreur est survenue';
    this.showEmailPopup = false;
  }

  // Méthodes helper
  private resetEmailForm() {
  this.emailDestinatairesList = [];
  this.emailCcList = [];
  this.emailCcList = [];
  this.currentEmail = '';
  this.attachments = [];
  this.editableContent.nativeElement.innerHTML = ''; // Réinitialiser le contenu éditable
  }

  // Début du drag
  startDrag(event: MouseEvent): void {
    event.preventDefault();
    this.isDragging = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.initialX = this.popupOffset.x;
    this.initialY = this.popupOffset.y;

    // Écouteurs d'événements globaux
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  // Mouvement de la souris
  onMouseMove = (event: MouseEvent): void => {
  if (!this.isDragging) return;
  
  // Utilisez requestAnimationFrame pour fluidité
  requestAnimationFrame(() => {
    const deltaX = event.clientX - this.startX;
    const deltaY = event.clientY - this.startY;
    this.popupOffset.x = this.initialX + deltaX;
    this.popupOffset.y = this.initialY + deltaY;
    
    // Force la détection de changement
    this.cdr.detectChanges();
  });
  }

  // Fin du drag
  onMouseUp = (): void => {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  // Modifiez la méthode triggerFileInput
  triggerFileInput(): void {
      if (this.fileInput?.nativeElement) {
          this.fileInput.nativeElement.click();
      }
  }

  // Corriger la méthode onFileSelected
  onFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
          const newFiles = Array.from(input.files);
          
          newFiles.forEach(newFile => {
              const isDuplicate = this.attachments.some(
                  existing => existing.name === newFile.name
              );
              
              if (!isDuplicate) {
                  // Créer un objet EmailAttachment correct
                  this.attachments.push({ 
                      name: newFile.name,
                      file: newFile
                  });
              }
          });
          
          input.value = '';
      }
  }

  // Supprime une pièce jointe
  removeAttachment(index: number): void {
      this.attachments.splice(index, 1);
  }

  // Ajouter un email
  addEmail(): void {
    const email = this.currentEmail.trim();
    if (email && this.validateEmail(email)) {
      if (!this.emailDestinatairesList.includes(email)) {
        this.emailDestinatairesList.push(email);
      }
      this.currentEmail = '';
    }
  }

  addCcEmail(): void {
    const email = this.currentCcEmail.trim();

    if (email && this.validateEmail(email)) {
      if (!this.emailCcList.includes(email)) {
        this.emailCcList.push(email);
      }
      this.currentCcEmail = '';
    }
  }

  // Supprimer un email
  removeEmail(index: number): void {
    this.emailDestinatairesList.splice(index, 1);
  }

   removeCcEmail(index: number): void {
    this.emailCcList.splice(index, 1);
  }

  // Validation simple d'email
  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Gestion de la touche retour
  handleBackspace(): void {
    if (!this.currentEmail && this.emailDestinatairesList.length > 0) {
      this.emailDestinatairesList.pop();
    }
  }

    handleCcBackspace(): void {
    if (!this.currentCcEmail && this.emailCcList.length > 0) {
      this.emailCcList.pop();
    }
  }

  // Ajouter cette méthode
  onMethodeEnvoiChange() {
    if (this.methodeEnvoi === 'physique') {
      // Réinitialiser les champs email si besoin
      this.emailDestinatairesList = [];
      this.currentEmail = '';
    }
  }

  async generatePDFAttachment(): Promise<File> {
    try {
      const entreprise = await firstValueFrom(this.entrepriseService.getEntrepriseInfo());
      this.nomEntreprise = entreprise.nom ?? '—';
      this.siege = entreprise.siege ?? '—';
      this.email = entreprise.email ?? '—';
      this.logo = 'http://localhost:8080' + (entreprise.logo?.startsWith('/') ? entreprise.logo : '/' + entreprise.logo);
      this.secteur = entreprise.secteur ?? '—';
      this.telephone = entreprise.telephone ?? '—';
      this.adresse = entreprise.adresse ?? '—';
      this.nif      = entreprise.nif      ?? '—';
      this.banque   = entreprise.banque   ?? '—';
      this.nina     = entreprise.nina     ?? '—';
      this.pays     = entreprise.pays     ?? '—';
      this.rccm     = entreprise.rccm     ?? '—';
      this.siteWeb  = entreprise.siteWeb  ?? '—';
      this.signataire  = entreprise.signataire  ?? '—';
      this.signataireNom  = entreprise.signataireNom  ?? '—';
    } catch (error) {
      console.error('Erreur de récupération des infos entreprise :', error);
    }

    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    /*************** ——— 1. HEADER ——— ****************/
    try {
      if (this.logo) {
          const imgData = await this.getBase64ImageFromURL(this.logo);
          const formatMatch = imgData.match(/^data:image\/(png|jpeg);/);
          const format = formatMatch ? formatMatch[1].toUpperCase() : 'PNG';
          doc.addImage(imgData, format, 15, 10, 47, 17);

      }
    } catch (imgErr) {
      console.error('Erreur lors du chargement ou de l’ajout du logo :', imgErr);
    }

    /*************** ——— 1. INFOS SOCIÉTÉ ——— ****************/
    const infoX = 70;
    const infoY_EmailTel = 22;
    doc.setFontSize(10);

    doc.setFont('helvetica', 'bold');
    doc.text(this.nomEntreprise || 'Nom Entreprise', infoX, 12);

    doc.setFont('helvetica', 'normal');
    doc.text(`Secteur : ${this.secteur || 'default'}`,  infoX, 17);
    doc.text(`Email : ${this.email || 'default'}`, infoX, infoY_EmailTel);

    // Calcul d’un X décalé pour le téléphone, selon la largeur de l’email
    const emailText = `Email : ${this.email || 'default'}`;
    const emailWidth = doc.getTextWidth(emailText);
    const spacing = 5;

    doc.text(
      `Téléphone : ${this.telephone || 'default'}`,
      infoX + emailWidth + spacing,
      infoY_EmailTel
    );
    // ► 1) Calcul de la position Y immédiatement après la dernière info
    const lastInfoY = 27;
    const gapBelowInfo = 5;
    const sepY = lastInfoY + gapBelowInfo;

    // ► 2) Double séparateur (<hr>)
    doc.setDrawColor(200);
    doc.line(15, sepY,     195, sepY);
    doc.line(15, sepY + 2, 195, sepY + 2);

    /*************** ——— 2. TITRE PRINCIPAL ——— ****************/
    const gapBelowSep = 10;
    const titleY = sepY + gapBelowSep;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    const numeroFacture = this.factureProForma.numeroFacture || 'XXX‑XX‑XXXX';
    doc.text(`FACTURE PROFORMA ${numeroFacture}`, 105, titleY, { align: 'center' });

    doc.setDrawColor(0);
    doc.line(60, titleY + 2, 150, titleY + 2);

    /*************** ——— 3. DATE & LIEU ——— ****************/
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    doc.text(
      `${this.siege || 'default'}, le ${
        this.factureProForma.dateCreation
          ? new Date(this.factureProForma.dateCreation).toLocaleDateString('fr-FR')
          : ''
      }`,
      195,
      titleY + 10,
      { align: 'right' }
    );

    /*************** ——— 3. INFOS CLIENT & OBJET ——— ****************/
    const label = 'Client :';
    const labelX = 15;
    const labelY = 65;

    doc.setFont('helvetica', 'bold');
    doc.text(label, labelX, labelY);

    const labelWidth = doc.getTextWidth(label);
    doc.line(labelX, labelY + 0.8, labelX + labelWidth, labelY + 0.8);

    doc.setFont('helvetica', 'normal');
    doc.text(
      this.factureProForma.client?.nomComplet ||
        this.factureProForma.entrepriseClient?.nom ||
        'Non spécifié',
      35,
      labelY
    );

    const objectLabel = 'OBJECT :';
    const objectLabelX = 15;
    const objectLabelY = 72;

    doc.setFont('helvetica', 'bold');
    doc.text(objectLabel, objectLabelX, objectLabelY);

    const objectLabelWidth = doc.getTextWidth(objectLabel);
    doc.line(objectLabelX, objectLabelY + 0.8, objectLabelX + objectLabelWidth, objectLabelY + 0.8);

    doc.setFont('helvetica', 'normal');
    doc.text(this.factureProForma.description || 'Objet', 35, objectLabelY);

    /*************** ——— 4. TABLE PRODUITS ——— ****************/
    const headers = [
      ['Désignation', 'Description', 'Prix Unitaire (FCFA)', 'Quantité', 'Montant (FCFA)'],
    ];
    const data = this.confirmedLignes.map((ligne) => [
      this.getProduitNom(ligne.produitId) || 'N/A',
      ligne.ligneDescription || '',
      this.getPrixVente(ligne.produitId).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
      ligne.quantite.toString(),
      this.getMontantTotal(ligne).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    ]);

    (doc as any).autoTable({
      head: headers,
      body: data,
      startY: 80,
      theme: 'grid',
      styles: { fontSize: 9, cellPadding: 2, halign: 'center',},
      headStyles: { fillColor: [242, 242, 242], textColor: [0, 0, 0], fontSize: 10, halign: 'center',},
      alternateRowStyles: { fillColor: [249, 249, 249] },
      margin: { left: 15, right: 15 },
      columnStyles: {
        0: { halign: 'left' },
        1: { halign: 'left' }, 
      },
    });

    /*************** ——— 5. TOTAUX ——— ****************/
      
    let y = (doc as any).lastAutoTable.finalY + 11;
    doc.setFontSize(10);

    const labelXCenter = (100 + 150) / 2;
    const valueXCenter = (150 + 195) / 2;

    const addTotalLine = (label: string, value: string, isBold = false) => {
      if (isBold) {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
      }
      doc.text(label, labelXCenter, y, { align: 'center' });
      doc.text(value, valueXCenter, y, { align: 'center' });
      if (isBold) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
      }
      y += 6;
    };

    addTotalLine(
      'Total HT',
      `${this.getTotalHT().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} CFA`
    );

    if (this.activeRemise) {
      addTotalLine(
        `Remise (${this.remisePourcentage || 10}%)`,
        `${this.getMontantRemise().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} CFA`
      );
    }

    addTotalLine(
      'Montant commercial',
      `${this.getTotalCommercial().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} CFA`
    );

    if (this.activeTva) {
      addTotalLine(
        'TVA (18%)',
        `${this.getMontantTVA().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} CFA`
      );
    }

    addTotalLine(
      'Montant TTC',
      `${this.getTotalTTC().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} CFA`,
      true
    );

    /*************** ——— 6. MONTANT EN LETTRES ——— ****************/

    y += 18;
    const libelle = 'Arrêté la présente facture à la somme de : ';
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(libelle, 15, y);

    // largeur du libellé pour connaître le point de départ du texte en lettres
    const libelleWidth = doc.getTextWidth(libelle);
    const startX = 15 + libelleWidth;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    const montantLettreRaw =
    this.enLettresPipe.transform(this.getTotalTTC());

    const maxWidth = 195 - startX; 

    const lines = doc.splitTextToSize(montantLettreRaw, maxWidth);

    doc.text(lines[0], startX, y);

    for (let i = 1; i < lines.length; i++) {
      y += 6;
      doc.text(lines[i], 15, y);
    }

    /*************** ——— 7. SIGNATURE / CACHET ——— ****************/
    // 1. Texte du nom (en bas)
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const nom = this.signataireNom || 'Nom du signataire';
    const nomWidth = doc.getTextWidth(nom);

    // ➤ On déplace le bloc vers la droite (ex : centré autour de x = 160mm)
    const blocCenterX = 180;
    const nomX = blocCenterX - nomWidth / 2;

    // Texte du rôle (juste au-dessus)
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    const signataire = this.signataire || 'Directeur';
    const signataireWidth = doc.getTextWidth(signataire);
    const signataireX = blocCenterX - signataireWidth / 2;

    // Dessiner (moins d’espace entre les 2 lignes : 10 au lieu de 15)
    y += 50;
    doc.text(signataire, signataireX, y);
    y += 10;  // réduit l’espace vertical
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(nom, nomX, y);
    y += 10; // espace sous le nom classique

    doc.setFontSize(9);
    doc.setFont('times', 'italic');

    const nomSignatureWidth = doc.getTextWidth(nom);
    const nomSignatureX = blocCenterX - nomSignatureWidth / 2;

    // Ombre légère (gris, décalé)
    doc.setTextColor(150, 150, 150);
    doc.text(nom, nomSignatureX + 0.5, y + 0.5);

    // Texte principal en noir, italique
    doc.setTextColor(0, 0, 0);
    doc.text(nom, nomSignatureX, y);

    // Ligne ondulée sous le texte (signature stylisée)
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.5);

    const waveStartX = nomSignatureX;
    const waveEndX = nomSignatureX + nomSignatureWidth;
    const waveY = y + 3; // un peu sous le texte
    const waveLength = 5;  // longueur d’une vague complète
    const amplitude = 1;   // hauteur de la vague

    let previousX = waveStartX;
    let previousY = waveY;

    for (let x = waveStartX + 0.5; x <= waveEndX; x += 0.5) {
      // Calculer y avec une sinusoïde pour l’effet ondulé
      const yOffset = amplitude * Math.sin(((x - waveStartX) / waveLength) * 2 * Math.PI);
      const currentY = waveY + yOffset;
      doc.line(previousX, previousY, x, currentY);
      previousX = x;
      previousY = currentY;
    }

    // Séparateur presque pleine largeur
    const margin = 10;
    const pageWidth = doc.internal.pageSize.width;
    const x1 = margin;
    const x2 = pageWidth - margin;
    const pageHeight = doc.internal.pageSize.height;
    const footerYStart = pageHeight - 20;
    const separatorY = footerYStart - 5;
    doc.setLineWidth(0.2);
    doc.setDrawColor(150);
    doc.line(x1, separatorY, x2, separatorY);

    /*************** ——— 8. FOOTER  ——— ****************/

    doc.setFontSize(9);
    doc.setFont('Roboto', 'normal');  
    doc.setTextColor(100);

    doc.text(this.siteWeb || 'www.votre-entreprise.com', 105, footerYStart, { align: 'center' });

    doc.text(
      `NINA : ${this.nina || 'default'} ; RCCM : ${this.rccm || 'default'} ; NIF : ${
        this.nif || 'default'
      } ; Banque : ${this.banque || 'default'}`,
      105,
      footerYStart + 5,
      { align: 'center' }
    );

    doc.text(
      `Adresse : ${this.adresse || 'default'} / ${this.siege || 'default'} - ${
        this.pays || 'default'
      }`,
      105,
      footerYStart + 10,
      { align: 'center' }
    );

    doc.setTextColor(0);


    const pdfBlob = doc.output('blob');
    return new File(
      [pdfBlob],
      `Facture proforma - ${this.factureProForma.numeroFacture || 'XXX-XX-XXXX'}.pdf`,
      { type: 'application/pdf' }
    );
  }

  getUserEntrepriseInfo(): void {
    this.entrepriseService.getEntrepriseInfo().subscribe({
      next: (entreprise) => {
        console.log("Entreprise reçue :", entreprise);
        this.userEntrepriseId = entreprise.id ?? null;

        this.nom = entreprise.nom; 
        this.siege = entreprise.siege;
        this.email = entreprise.email;
        this.logo = entreprise.logo;
        this.secteur = entreprise.secteur;
        this.telephone = entreprise.telephone;
        this.adresse = entreprise.adresse;
        this.nif = entreprise.nif;
        this.banque = entreprise.banque;
        this.nina = entreprise.nina;
        this.pays = entreprise.pays;
        this.rccm = entreprise.rccm;
        this.siteWeb = entreprise.siteWeb;
        this.signataire = entreprise.signataire;
        this.signataireNom = entreprise.signataireNom;

        this.logo = 'http://localhost:8080' + entreprise.logo;

          // ✅ Appelle ici loadUsersOfEntreprise une fois qu'on a l'ID
      if (this.userEntrepriseId) {
        this.loadUsersOfEntreprise(this.userEntrepriseId);
      } else {
        console.error('ID entreprise manquant après chargement');
        console.log("Entreprise reçue :", JSON.stringify(entreprise, null, 2));

      }
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }

  loadFontScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'assets/fonts/police/brittany.js';
      script.onload = () => resolve();
      script.onerror = () => reject('Erreur lors du chargement de la police');
      document.body.appendChild(script);
    });
  }

  async getBase64ImageFromURL(url: string): Promise<string> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur lors du chargement de l'image : ${response.statusText}`);
    }
    const blob = await response.blob();
    console.log(`Type MIME de l'image chargée : ${blob.type}`);
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

}
