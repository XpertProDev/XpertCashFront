import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProduitService } from '../../SERVICES/produit.service';
import { Produit } from '../../MODELS/produit.model';
import { FactureProForma, StatutFactureProForma } from '../../MODELS/FactureProForma.model';
import { FactureProFormaService } from '../../SERVICES/factureproforma-service';
import { CustomNumberPipe } from '../../MODELS/customNumberPipe';
import { RoundPipe } from '../../MODELS/round.pipe';
import { UsersService } from '../../SERVICES/users.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as pdfjsLib from 'pdfjs-dist';

@Component({
  selector: 'app-detail-facture-proforma',
  imports: [ FormsModule, CommonModule, ReactiveFormsModule, CustomNumberPipe],
  templateUrl: './detail-facture-proforma.component.html',
  styleUrl: './detail-facture-proforma.component.scss'
})
export class DetailFactureProformaComponent implements OnInit {
  isLoading: boolean = false;
  activeRemise: boolean = false;
  activeTva: boolean = false;
  remisePourcentage: number = 0;
  tva: number = 0;
  errorMessage: string = '';
  userEntrepriseId: number | null = null;
  nomEntreprise: string = '';
  siege: string = '';
  produits: Produit[] = [];
  // Nouvelle variable pour stocker les ajustements locaux
  pendingAdjustments: any[] = [];
  newProduitId: number | null = null;
  // inputLignes: { 
  //   produitId: number | null; quantite: number 
  // }[] = [{ produitId: null, quantite: 1 }];
  // confirmedLignes: { produitId: number | null; quantite: number }[] = [];
  inputLignes: { produitId: number | null; quantite: number; ligneDescription: string | null; isDuplicate: boolean }[] = [{
    produitId: null, quantite: 1, ligneDescription: null, isDuplicate: false
  }];
  confirmedLignes: {
    produitId: number | null;
    quantite: number;
    ligneDescription: string | null;
  }[] = [];
  factureId!: number;
  showDuplicatePopup: boolean = false;
  // Ajouter ces variables dans la classe
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

  // Nouvelles variables pour l'email
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

  // Piece joindre
  attachments: File[] = [];
  selectedFile: File | null = null;

  // Variables pour la gestion des emails
  emailDestinatairesList: string[] = [];
  currentEmail = '';

  @ViewChild('editableContent', { static: false }) editableContent!: ElementRef;
  @ViewChild('subjectInput', { static: false }) subjectInput!: ElementRef;

    // Ajoutez cette propriété en haut de votre classe
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(
      private router: Router,
      private produitService: ProduitService,
      private route: ActivatedRoute,
      private factureProFormaService: FactureProFormaService,
      private usersService: UsersService,
      private cdr: ChangeDetectorRef,
      private renderer: Renderer2
    ) {}

  ngOnInit(): void {
    this.getProduits();
    this.getUserInfo();
    this.loadUsersOfEntreprise(this.userEntrepriseId!);
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.factureId = +idParam;
      this.getUserInfo();
    }
  }

  // dans DetailFactureProformaComponent
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

  loadFactureProforma(id: number): void {
    this.factureProFormaService.getFactureProformaById(id).subscribe({
      next: (data) => {
        this.factureProForma = data;

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
      const token = localStorage.getItem('authToken');
      if (token && this.userEntrepriseId) {
        this.produitService.getProduitsParEntreprise(this.userEntrepriseId).subscribe({
          next: (data: Produit[]) => {
            this.produits = data;
            resolve();
            console.log('PRODUITS RÉCUPÉRÉS:', this.produits); // <=== Ajoutez ceci
          },
          error: (err) => console.error('Erreur récupération produits :', err)
        });
      } else {
        console.error('Token manquant ou entreprise ID non défini');
      }
    });
  }

  getUserInfo(): void {
    this.usersService.getUserInfo().subscribe({
      next: (user) => {
        this.nomEntreprise = user.nomEntreprise;
        this.userEntrepriseId = user.entrepriseId;
        this.siege = user.siege;

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

  // Modifier la partie de génération des données du tableau
  // async generatePDF(preview: boolean = false): Promise<string> {
  // const doc = new jsPDF();
  
  // // Contenu du PDF
  // doc.setFontSize(18);
  // doc.text(`FACTURE PRO FORMA - ${this.factureProForma.numeroFacture}`, 15, 20);
  
  // // Ajouter le tableau avec autoTable
  // const headers = [['Produit', 'Quantité', 'Prix Unitaire', 'Total']];
  // const data = this.confirmedLignes.map(ligne => [
  //   this.getProduitNom(ligne.produitId),
  //   ligne.quantite.toString(),
  //   this.getPrixVente(ligne.produitId).toLocaleString('fr-FR') + ' CFA',
  //   this.getMontantTotal(ligne).toLocaleString('fr-FR') + ' CFA'
  // ]);

  // (doc as any).autoTable({
  //   head: headers,
  //   body: data,
  //   startY: 30,
  //   theme: 'grid'
  // });

  // if (preview) {
  //   const pdfBlob = doc.output('blob');
  //   return URL.createObjectURL(pdfBlob);
  // }
  
  // doc.save(`Facture proforma - N˚${this.factureProForma.numeroFacture}.pdf`);
  // return '';
  // }

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
    // const pdfUrl = await this.generatePDF(true);
    // await this.loadPDFPreview(pdfUrl);
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

  // confirmStatusChange(): void {
  //   if (!this.pendingStatut) return;

  //   const selectedUsers = this.users
  //   .filter(user => user.selected)
  //   .map(user => user.id);

  //   const modifications: Partial<FactureProForma> = {
  //     statut: this.pendingStatut,
  //     ...(this.pendingStatut === StatutFactureProForma.ENVOYE && this.dateRelance
  //       ? { dateRelance: this.dateRelance }
  //       : {})
  //   };

  //   // const modifications: Partial<FactureProForma> = {
  //   //   statut: this.pendingStatut,
  //   //   // Réinitialise les approbateurs si on revient en arrière
  //   //   ...(this.pendingStatut === StatutFactureProForma.BROUILLON && {
  //   //     approbateurs: [],
  //   //     utilisateurApprobateur: null
  //   //   })
  //   // };
    
  //   this.factureProFormaService.updateFactureProforma(
  //     this.factureId,
  //     undefined,
  //     undefined,
  //     {
  //       statut: this.pendingStatut,
  //       // Réinitialiser les approbateurs si on change de statut
  //       ...(this.pendingStatut !== StatutFactureProForma.APPROBATION && {
  //         approbateurs: []
  //       })
  //     },
  //     this.pendingStatut === StatutFactureProForma.APPROBATION ? selectedUsers : undefined
  //   ).subscribe({
  //     next: (updatedFacture) => {
  //       if (this.pendingStatut === StatutFactureProForma.APPROBATION) {
  //         updatedFacture.approbateurs = this.users.filter(u => selectedUsers.includes(u.id));
  //       }
  //       this.factureProForma = updatedFacture;
        
  //       this.showStatusConfirmation = false;
  //       this.pendingStatut = null;
  //       this.dateRelance = undefined;
  //     },
  //     error: (err) => {
  //       console.error('Erreur de mise à jour', err);
  //       alert('Échec de la mise à jour du statut');
  //       this.showStatusConfirmation = false;
  //     }
  //   });
  // }

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
      next: updatedFacture => {
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
    this.isLoading = true;
    this.usersService.getAllUsersOfEntreprise(entrepriseId).subscribe({
      next: (data) => {
        this.users = data.map(user => ({
          ...user,
          selected: false
        }));
        this.filteredUsers = this.users; // Mise à jour des utilisateurs filtrés
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
    try {
        // Préparation des données communes
        const payload: Partial<FactureProForma> = {
            statut: StatutFactureProForma.ENVOYE,
            methodeEnvoi: this.methodeEnvoi.toUpperCase() as 'EMAIL' | 'PHYSIQUE',
            ...(this.dateRelance && { dateRelance: new Date(this.dateRelance).toISOString() })
        };

        // Mise à jour de la facture
        const remise = this.activeRemise ? this.remisePourcentage : 0;
        const tva = this.activeTva;

        await this.factureProFormaService.updateFactureProforma(
            this.factureId,
            remise,
            tva,
            payload
        ).toPromise();

        // Traitement spécifique à l'email
        if (this.methodeEnvoi === 'email') {
            await this.processEmailSending();
        }

        this.showEmailPopup = false;
        this.refreshInvoiceData();

    } catch (error) {
        this.handleError(error);
    }
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
              subject: sujet,
              body: corps
          }
      ).toPromise();

      // Réinitialisation du formulaire email
      this.emailDestinatairesList = [];
      this.currentEmail = '';
      this.editableContent.nativeElement.innerHTML = '';
  }

  private refreshInvoiceData() {
      this.factureProFormaService.getFactureProformaById(this.factureId)
          .subscribe(facture => {
              this.factureProForma = facture;
              this.cdr.detectChanges();
          });
  }

  private handleError(error: any) {
      console.error('Erreur:', error);
      this.errorMessage = error.message || 'Une erreur est survenue';
      setTimeout(() => this.errorMessage = '', 5000);
  }

  // Méthodes helper
  private resetEmailForm() {
    this.emailDestinatairesList = [];
    this.currentEmail = '';
    this.showEmailPopup = false;
  }

  private handleEmailError(err: any) {
    console.error("❌ Erreur d'envoi email :", err);
    this.errorMessage = err?.error?.message || 'Échec de l\'envoi de l\'email';
    this.showEmailPopup = false;
  }

  private handleUpdateError(err: any) {
    console.error("❌ Erreur de mise à jour :", err);
    this.errorMessage = err?.error?.message || 'Échec de la mise à jour du statut';
    this.showEmailPopup = false;
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

  // Gère la sélection de fichiers
  onFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
          const newFiles = Array.from(input.files);
          
          // Vérifier les doublons
          newFiles.forEach(newFile => {
              const isDuplicate = this.attachments.some(
                  existingFile => existingFile.name === newFile.name
              );
              
              if (!isDuplicate) {
                  this.attachments.push(newFile);
              }
          });
          
          input.value = ''; // Réinitialise l'input
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

  // Supprimer un email
  removeEmail(index: number): void {
    this.emailDestinatairesList.splice(index, 1);
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

  // Ajouter cette méthode
  onMethodeEnvoiChange() {
    if (this.methodeEnvoi === 'physique') {
      // Réinitialiser les champs email si besoin
      this.emailDestinatairesList = [];
      this.currentEmail = '';
    }
  }


}