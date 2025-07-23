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
import { FacturePreviewService } from '../../SERVICES/facture-preview-service';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

// Ajouter cette interface pour les pièces jointes
interface EmailAttachment {
  name: string;
  file: File;
}

type EventType = 'creation' | 'modification' | 'approbation' | 'envoi' | 'validation' | 'annulation'; // Ajouté 'annulation'

interface Note {
  id: number;
  content: string;
  dateCreation: Date;
  auteur: string;
  modifiee?: boolean;
  dateModification?: Date;
  numeroIdentifiant: string;
}

// Interface modifiée
interface HistoricalEvent {
  date: Date;
  montant: number;
    user: {
    nomComplet: string;
    photo?: string | null;
  };
  type: EventType;
  description: string;
  status?: StatutFactureProForma;
  Montant?: number; // Montant de la facture
  dateRelance?: string;
}

@Component({
  selector: 'app-detail-facture-proforma',
  imports: [ FormsModule, CommonModule, ReactiveFormsModule, CustomNumberPipe, DragDropModule], //EnLettresPipe,
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
  errorMessage: string | null = null;
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
  justification?: string;
  users: any[] = [];
  filteredUsers: any[] = [];
  emailDestinataires: string = '';
  emailSujet: string = '';
  emailMessage: string = '';
  // methodeEnvoi: string = 'EMAIL';
  // methodeEnvoi: 'physique' | 'email' = 'physique';
  methodeEnvoi: 'physique' | 'email' | 'autre' = 'physique';
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
  role: string | null = null;
  entrprisePhone: string | null = null;
  noteEditingIndex: number | null = null;
  activeMenuIndex: number | null = null;

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
  successMessage: string | null = null;
  tauxTva?: number | null;

  showAnnulationConfirmation = false;
  annulationReason = '';
  // canAddNote = true; 

  isNotebookOpen = false;
  isAddNotePopupOpen = false;
  newNote = '';
  notes: Note[] = [];
  noteModification: string = '';
  isAddNoteInputVisible: boolean = false;
  infoMessage: string | null = null;
  confirmDeleteIndex: number | null = null;
  private apiUrl = environment.imgUrl;
  whatsappPrepared: boolean = false;
  
  selectedSousMethode: string | null = null;
  whatsappNumber: string = '';


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
      private previewService: FacturePreviewService,
      private dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.getUserEntrepriseInfo(); 
    this.getProduits();
    this.getUserInfo();
    this.setDefaultDateRelance();
    
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.factureId = +idParam;
      this.getUserInfo();
      this.loadNotes();
      

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
    dateRelance: '',
    justification:'',
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
    return base * (this.tauxTva ?? 0);
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
           user: {
              nomComplet: action.utilisateur || 'Utilisateur inconnu',
             photo: action.photo ? `${this.apiUrl}${action.photo}` : null

            },
        type: this.mapActionType(action.action),
        description: action.details,
        status: this.mapActionToStatus(action.action),
        dateRelance: action.action === 'Envoi' ? new Date(historique.dateRelance) : null
      }));

      // Ajouter la création si manquante
      if (!this.historicalEvents.some(e => e.type === 'creation')) {
        this.historicalEvents.push({
          date: new Date(this.factureProForma.dateCreation),
          montant: this.factureProForma.totalHT,
         user: {
            nomComplet: this.factureProForma.utilisateurCreateur?.nomComplet || 'Système',
            photo: this.factureProForma.utilisateurCreateur?.photo || null
          },

          type: 'creation',
          description: 'Création de la facture ' + this.factureProForma.totalFacture,
        });
        console.log( "les information ", this.historicalEvents);
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
      'Approbation': 'approbation', // Ajout explicite
      'Approuver': 'approbation',   // Si le backend utilise ce libellé
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
        this.nom = user.nomComplet;
        this.role = user.roleType
       
        if (this.email && !this.emailCcList.includes(this.email)) {
            this.emailCcList.push(this.email);
          }

        

         this.getProduits().then(() => { 
          this.loadFactureProforma(this.factureId); 
        });

  
        //console.log("Infos utilisateur récupérées :", user);
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
     this.errorMessage = null;
    this.successMessage = null;
    const payload = {
      client: this.factureProForma.client ? { id: this.factureProForma.client.id } : null,
      description: this.factureProForma.description,

      // Utilisez confirmedLignes puisque c'est là que se trouvent les modifications (ajouts, suppressions, etc.)
      lignesFacture: this.confirmedLignes.map(l => ({
        produit: { id: l.produitId },
        quantite: l.quantite,
        prixUnitaire: this.getPrixVente(l.produitId),
        ligneDescription: l.ligneDescription
      })),
      remise: this.activeRemise ? this.remisePourcentage : null,
      noteModification: this.noteModification || null,
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
      
      
      payload as unknown as Partial<FactureProForma>
    ).subscribe({
      next: (res) => {
        console.log('Mise à jour réussie !', res);
        
        this.router.navigate(['/facture-proforma']);
      },
      error: (err) => {
        console.error('Échec de la mise à jour', err);
        const fullError = err.error?.error || 'Erreur lors de la modification';
        const splitMessage = fullError.split(':');
        this.errorMessage = splitMessage.length > 1 ? splitMessage[1].trim() : fullError;
      }
    });
  }

  // Ouvrir la confirmation d'annulation
  openAnnulationConfirmation(): void {
    // Vérifier si on peut ajouter une note
    // this.canAddNote = this.factureProForma.statut !== this.statusOptions.VALIDE;
    this.annulationReason = '';
    this.showAnnulationConfirmation = true;
  }

  closeAnnulationPopup(): void {
    this.showAnnulationConfirmation = false;
  }

  // Annuler la procédure d'annulation
  cancelAnnulation(): void {
    this.showAnnulationConfirmation = false;
  }

  // Confirmer l'annulation
  confirmAnnulation(): void {
    // if (this.canAddNote && !this.annulationReason.trim()) {
    //   this.errorMessage = 'Veuillez saisir une raison pour l\'annulation';
    //   return;
    // }

    const payload: Partial<FactureProForma> = {
      statut: StatutFactureProForma.ANNULE,
      noteModification: this.annulationReason
    };

    this.updateFactureStatut(payload);
  }

  get isAnnule(): boolean {
    return this.factureProForma?.statut === this.statusOptions.ANNULE;
  }

  // Méthode générique pour mettre à jour le statut
  private updateFactureStatut(payload: Partial<FactureProForma>): void {
    this.factureProFormaService.updateFactureProforma(
      this.factureId,
      undefined,
      undefined,
      payload
    ).subscribe({
      next: (updatedFacture) => {
        this.factureProForma = updatedFacture;
        this.showAnnulationConfirmation = false;
        this.loadHistoricalEvents();
        this.successMessage = 'Facture annulée avec succès';
        setTimeout(() => this.successMessage = null, 3000);
      },
      error: (err) => {
        console.error('Erreur lors de l\'annulation', err);
        this.errorMessage = err.error?.message || 'Échec de l\'annulation';
        this.showAnnulationConfirmation = false;
      }
    });
  }
    
  submitNote() {
    this.errorMessage = null;
    this.successMessage = null;

    if (this.noteEditingIndex !== null && this.notes[this.noteEditingIndex]) {
      // Cas modification d'une note existante
      const noteToUpdate = this.notes[this.noteEditingIndex];
      console.log('Note à modifier dans submitNote:', noteToUpdate);
      const noteId = Number(noteToUpdate.id);
      if (!noteId) {
        this.errorMessage = 'ID invalide pour la note sélectionnée';
        return;
      }


      this.factureProFormaService.updateNote(
        this.factureId,
        noteId,
        this.noteModification || ''
      ).subscribe({
        next: (res) => {
          console.log('Note mise à jour avec succès !', res);
          this.successMessage = 'Note modifiée avec succès.';
          this.loadNotes();

              const derniereNoteId = res?.noteId || res?.id || null;
              if (derniereNoteId) {
                this.factureProFormaService.getNoteById(this.factureId, derniereNoteId).subscribe({
                  next: (note) => {
                    this.notes.unshift(note);
                  },
                  error: (err) => {
                    console.error('Erreur lors de la récupération de la note ajoutée', err);
                  }
                });
              } else {
                console.warn('ID de la note non retourné dans la réponse.');
              }

          // Mise à jour locale de la note
          this.notes[this.noteEditingIndex!].content = this.noteModification;
          this.notes[this.noteEditingIndex!].dateModification = new Date();

          // Réinitialisation
          this.noteModification = '';
          this.isAddNoteInputVisible = false;
          this.noteEditingIndex = null;
        },
        error: (err) => {
          console.error('Échec de la mise à jour de la note', err);
          const fullError = err.error?.error || 'Erreur lors de la modification de la note';
          const splitMessage = fullError.split(':');
          this.errorMessage = splitMessage.length > 1 ? splitMessage[1].trim() : fullError;
        }
      });
    } else {
      // Cas ajout d'une nouvelle note
      const payload = {
        noteModification: this.noteModification || null,
        //numeroIdentifiant
        
      };

      const nouvelleNote: Note = {
        id: Date.now(), // ou un ID généré par le backend
        content: this.noteModification,
        dateCreation: new Date(),
        auteur: this.getCurrentUser().nomComplet || 'Utilisateur inconnu',
        numeroIdentifiant: this.noteModification || '', // Ajout du champ requis
      };

      this.factureProFormaService.updateFactureProforma(
        this.factureId,
        undefined,
        undefined,
        payload as Partial<FactureProForma>
      ).subscribe({
        next: (res) => {
          console.log('Note ajoutée avec succès !', res);
          this.successMessage = 'Note enregistrée avec succès.';
          this.loadNotes();
          this.notes.unshift(nouvelleNote);
          this.noteModification = '';
          this.isAddNoteInputVisible = false;
        },
        error: (err) => {
          console.error('Échec de l\'ajout de la note', err);
          const fullError = err.error?.error || 'Erreur lors de l\'ajout de la note';
          const splitMessage = fullError.split(':');
          this.errorMessage = splitMessage.length > 1 ? splitMessage[1].trim() : fullError;
        }
      });
    }
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
    this.attachments = []; 
    this.attachments.push({ name: pdfFile.name, file: pdfFile });

    // Récupérer l'email du client s'il existe
    this.emailDestinatairesList = [];

    
    if (this.factureProForma.client?.email) {
      const clientEmail = this.factureProForma.client.email;
      if (!this.emailDestinatairesList.includes(clientEmail)) {
        this.emailDestinatairesList.push(clientEmail);
      }
    }
    
    // Récupérer l'email de l'entreprise si elle existe
    if (this.factureProForma.entrepriseClient?.email) {
      const entrepriseEmail = this.factureProForma.entrepriseClient.email;
      if (!this.emailDestinatairesList.includes(entrepriseEmail)) {
        this.emailDestinatairesList.push(entrepriseEmail);
      }
    }
  }
get destinataire() {
  const entreprise = this.factureProForma.entrepriseClient;
  const client = this.factureProForma.client;

  return {
    nom: entreprise?.nom ?? client?.nomComplet ?? '',
    adresse: entreprise?.adresse ?? client?.adresse ?? '',
    siege: entreprise?.siege ?? '', 
    ville: entreprise ? '' : client?.ville ?? '',
    pays: entreprise?.pays ?? client?.pays ?? '',
    telephone: entreprise?.telephone ?? client?.telephone ?? '',
    email: entreprise?.email ?? client?.email ?? '',
  };
}
get labelNom(): string {
  return this.factureProForma.entrepriseClient ? 'Entreprise' : 'Nom';
}







  // Modifier la configuration des transitions
  private isStatusTransitionAllowed(newStatut: StatutFactureProForma): boolean {
    if (!this.factureProForma?.statut) return false;

    // Correction pour allowedTransitions
    const allowedTransitions: Record<StatutFactureProForma, StatutFactureProForma[]> = {
      [StatutFactureProForma.BROUILLON]: [
        StatutFactureProForma.APPROUVE,
        StatutFactureProForma.APPROBATION,
        StatutFactureProForma.ENVOYE,
        StatutFactureProForma.VALIDE,
        StatutFactureProForma.ANNULE // Ajouté
      ],
      [StatutFactureProForma.APPROBATION]: [
        StatutFactureProForma.APPROUVE,
        StatutFactureProForma.BROUILLON,
        StatutFactureProForma.ANNULE // Ajouté
      ],
      [StatutFactureProForma.APPROUVE]: [
        StatutFactureProForma.ENVOYE,
        StatutFactureProForma.BROUILLON,
        StatutFactureProForma.VALIDE,
        StatutFactureProForma.ANNULE // Ajouté
      ],
      [StatutFactureProForma.ENVOYE]: [
        StatutFactureProForma.VALIDE,
        StatutFactureProForma.APPROUVE,
        StatutFactureProForma.BROUILLON,
        StatutFactureProForma.ANNULE // Ajouté
      ],
      [StatutFactureProForma.VALIDE]: [
        StatutFactureProForma.ANNULE // Ajouté (si applicable)
      ],
      [StatutFactureProForma.ANNULE]: [] // Nouvelle entrée
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
            montant: this.factureProForma.totalHT,
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
          // this.loadFactureProforma(this.factureId);
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
      [StatutFactureProForma.VALIDE]: 'Facture validée définitivement',
      [StatutFactureProForma.ANNULE]: 'Facture annulée' // Ajouté
    };
    return descriptions[status];
  }

  // Ajouter ces méthodes helper
  private getCurrentUser() {
      return { nomComplet: 'Utilisateur Actuel', id: 123 };
  }

  // Dans la classe du composant
  private getEventType(status: StatutFactureProForma): EventType {
    const statusMap: Record<StatutFactureProForma, EventType> = {
      [StatutFactureProForma.BROUILLON]: 'modification',
      [StatutFactureProForma.APPROBATION]: 'approbation',
      [StatutFactureProForma.APPROUVE]: 'approbation',
      [StatutFactureProForma.ENVOYE]: 'envoi',
      [StatutFactureProForma.VALIDE]: 'validation',
      [StatutFactureProForma.ANNULE]: 'annulation' // Ajouté
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
      [StatutFactureProForma.VALIDE]: 'Validé',
      [StatutFactureProForma.ANNULE]: 'Annulé' // Ajouté
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



  onMethodeEnvoiChange() {
    this.selectedSousMethode = null;
  }

async confirmEmailSend() {
    this.isSending = true;

    try {
        // Normaliser la méthode en majuscules dès le début
        const methode = (this.methodeEnvoi ?? '').toUpperCase();

        // Vérification stricte des valeurs autorisées
        if (!['PHYSIQUE', 'EMAIL', 'AUTRE'].includes(methode)) {
            throw new Error("Méthode d'envoi invalide.");
        }

        // Si méthode 'AUTRE', justification obligatoire
        if (methode === 'AUTRE' && !(this.justification ?? '').trim().length) {
            throw new Error("Veuillez fournir une justification pour la méthode 'Autre'.");
        }

        const payload: Partial<FactureProForma> = {
            statut: StatutFactureProForma.ENVOYE,
            methodeEnvoi: methode as 'EMAIL' | 'PHYSIQUE' | 'AUTRE',
            dateRelance: this.dateRelance ? new Date(this.dateRelance).toISOString() : undefined,
            justification: methode === 'AUTRE' ? (this.justification ?? '').trim() : undefined
        };

        // Appel au service pour mise à jour
        const updatedFacture = await this.factureProFormaService.updateFactureProforma(
            this.factureId,
            this.activeRemise ? this.remisePourcentage : undefined,
            this.activeTva,
            payload
        ).toPromise();

        // Comportement selon la méthode sélectionnée
        if (methode === 'EMAIL') {
            await this.handleEmailSending();
        } else if (methode === 'AUTRE' && this.selectedSousMethode?.toLowerCase() === 'whatsapp') {
            await this.prepareWhatsApp();
        } else if (methode === 'PHYSIQUE') {
            console.log('📦 Facture envoyée par voie physique.');
        }

        this.showEmailPopup = false;
        this.router.navigate(['/facture-proforma']);

    } catch (error) {
        this.handleError(error);
    } finally {
        this.isSending = false;
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

  // // Ajouter cette méthode
  // onMethodeEnvoiChange() {
  //   if (this.methodeEnvoi === 'physique') {
  //     // Réinitialiser les champs email si besoin
  //     // this.emailDestinatairesList = [];
  //     // this.currentEmail = '';
  //   }
  // }

  async generatePDFAttachment(): Promise<File> {
    try {
      const entreprise = await firstValueFrom(this.entrepriseService.getEntrepriseInfo());
      this.nomEntreprise = entreprise.nom ?? '—';
      this.siege = entreprise.siege ?? '—';
      this.email = entreprise.email ?? '—';
      // Ensure logo path is correct for http access
      this.logo = entreprise.logo
  ? (
      entreprise.logo.startsWith('http') || entreprise.logo.startsWith('data:image/')
        ? entreprise.logo
        : `${this.apiUrl.replace(/\/$/, '')}/${entreprise.logo.replace(/^\//, '')}`
    )
  : null;

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
      // Assuming signataireSignature is a URL or base64 for the graphic signature
      // this.signataireSignature = entreprise.signataireSignature ?? null;

      // Assuming you have these properties for calculations and display:
      // this.activeRemise = entreprise.activeRemise ?? false;
      // this.remisePourcentage = entreprise.remisePourcentage ?? 0; // Or get from factureProForma if discount is per invoice
      // this.activeTva = entreprise.activeTva ?? false; // Or get from factureProForma/products
      // this.tvaRate = entreprise.tvaRate ?? 0.18; // Or get from config/factureProForma
      // this.tvaLabel = entreprise.tvaLabel ?? 'TVA (18 %)'; // Optional: For customizable TVA label
    } catch (error) {
      console.error('Erreur de récupération des infos entreprise :', error);
    }

    const doc = new jsPDF({ unit: 'mm', format: 'a4' });

    /*************** ——— 1. HEADER ——— ****************/
    try {
      if (this.logo) {
          const imgData = this.logo.startsWith('data:image/') ? this.logo : await this.getBase64ImageFromURL(this.logo);
          const formatMatch = imgData.match(/^data:image\/(png|jpeg|gif);/);
          const format = formatMatch ? formatMatch[1].toUpperCase() : 'PNG';
          doc.addImage(imgData, format, 15, 10, 47, 17);
      }
    } catch (imgErr) {
      console.error('Erreur lors du chargement ou de l’ajout du logo :', imgErr);
    }

    /*************** ——— 1. INFOS SOCIÉTÉ ——— ****************/
    const infoX = 70;
    const infoY_Start = 12;
    doc.setFontSize(10);

    doc.setFont('helvetica', 'bold');
    doc.text(this.nomEntreprise || 'Nom Entreprise', infoX, infoY_Start);

    doc.setFont('helvetica', 'normal');
    doc.text(`Secteur : ${this.secteur || 'default'}`,  infoX, infoY_Start + 5);

    const emailText = `Email : ${this.email || 'default'}`;
    doc.text(emailText, infoX, infoY_Start + 10);

    const emailWidth = doc.getTextWidth(emailText);
    const spacing = 5;
     doc.text(
      `Téléphone : ${this.telephone || 'default'}`,
      infoX + emailWidth + spacing,
      infoY_Start + 10
     );

    const lastInfoY = infoY_Start + 10;
    const gapBelowInfo = 7;
    const sepY = lastInfoY + gapBelowInfo;

    doc.setDrawColor(200);
    doc.line(15, sepY,     195, sepY);
    doc.line(15, sepY + 1.5, 195, sepY + 1.5);

    /*************** ——— 2. TITRE PRINCIPAL ——— ****************/
    const gapBelowSep = 8;
    const titleY = sepY + gapBelowSep;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(85, 85, 85);
    const numeroFacture = this.factureProForma.numeroFacture || 'XXX‑XX‑XXXX';
    doc.text(`FACTURE PROFORMA ${numeroFacture}`, 105, titleY, { align: 'center' });

    doc.setDrawColor(0);
    const titleLineWidth = 90;
    const titleLineX = 105 - titleLineWidth / 2;
    // doc.line(titleLineX, titleY + 1.5, titleLineX + titleLineWidth, titleY + 1.5);


    /*************** ——— 3. DATE & LIEU ——— ****************/
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    doc.text(
      `${this.siege || 'default'}, le ${
        this.factureProForma.dateCreation
          ? new Date(this.factureProForma.dateCreation).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })
          : ''
      }`,
      195,
      titleY + 10,
      { align: 'right' }
    );

    /*************** ——— 3. INFOS CLIENT & OBJET ——— ****************/
    const clientObjectBlockY = titleY + 20;

  const labelX = 15;
  let currentY = clientObjectBlockY;

  if (this.factureProForma) {
    const isClient = !!this.factureProForma.client;
    const isEntreprise = !!this.factureProForma.entrepriseClient;

    const label = isClient ? 'Doit :' : isEntreprise ? 'Doit :' : 'Doit :';
    const nom = isClient
      ? this.factureProForma.client?.nomComplet ?? 'Non spécifié'
      : isEntreprise
        ? this.factureProForma.entrepriseClient?.nom ?? 'Non spécifié'
        : 'Non spécifié';

    doc.setFont('helvetica', 'bold');
    doc.text(label, labelX, currentY);

    doc.setFont('helvetica', 'normal');
    doc.text(
      nom,
      labelX + doc.getTextWidth(label) + 2,
      currentY
    );
  }


    currentY += 7;

    const objectLabel = 'Objet :';

    doc.setFont('helvetica', 'bold');
    doc.text(objectLabel, labelX, currentY);

  
    doc.setFont('helvetica', 'normal');
    doc.text(
      this.factureProForma.description || 'Objet',
      labelX + doc.getTextWidth(objectLabel) + 2,
      currentY
    );

    /*************** ——— 4. TABLE PRODUITS & TOTAUX ——— ****************/
    const tableStartY = currentY + 10;

    const headers = [
      ['Désignation', 'Description', 'Prix Unitaire (FCFA)', 'Quantité', 'Montant (FCFA)'],
    ];

    // Data rows for products
    const data = this.confirmedLignes.map((ligne) => [
      this.getProduitNom(ligne.produitId) || 'N/A',
      ligne.ligneDescription || '',
      this.getPrixVente(ligne.produitId).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
      ligne.quantite.toString(),
      this.getMontantTotal(ligne).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    ]);

    // --- Calculate Totals including conditional Remise and TVA ---
    const totalHT = this.getTotalHT();
    const montantRemise = this.getMontantRemise(); // Calculate remise amount
    const isRemiseActive = this.activeRemise && montantRemise > 0;

    const totalCommercial = isRemiseActive ? totalHT - montantRemise : totalHT;
    const safeTotalCommercial = Math.max(0, totalCommercial);

    const montantTVA = this.getMontantTVA();
    const isTvaActive = this.activeTva && montantTVA > 0;

    const totalTTC = safeTotalCommercial + montantTVA;


    // --- Add Total Rows to the table data ---

    // Add Total HT row (always display)
    data.push([
        { content: 'Total HT', colSpan: 4, styles: { fontStyle: 'normal', halign: 'center' } }, // Label right-aligned
        { content: totalHT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '), styles: { halign: 'right' } } // Value right-aligned
    ] as any);

    // Conditionally add Remise row
    if (isRemiseActive) {
        const remiseLabel = `Remise (${this.remisePourcentage ? this.remisePourcentage + ' %' : 'Montant'})`;
        data.push([
           { content: remiseLabel, colSpan: 4, styles: { fontStyle: 'normal', halign: 'center' } }, // Label right-aligned
           { content: montantRemise.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '), styles: { halign: 'right' } } // Value right-aligned
        ] as any);

        // Add Montant Commercial row (typically shown if remise applies)
         data.push([
            { content: 'Montant Commercial', colSpan: 4, styles: { fontStyle: 'normal', halign: 'center' } }, // Label right-aligned
            { content: safeTotalCommercial.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '), styles: { halign: 'right' } } // Value right-aligned
         ] as any);
    }


    // Conditionally add TVA row
    if (isTvaActive) {
      const tauxPourcent = Math.round((this.tauxTva ?? 0) * 100); 

        data.push([
            {
                content: `TVA (${tauxPourcent} %)`,
                colSpan: 4,
                styles: { fontStyle: 'normal', halign: 'center' }
            },
            {
                content: montantTVA.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '), styles: { halign: 'right' }
              
            }
        ] as any);
    }

    // Add Montant TTC row (always display)
     data.push([
        { content: 'Montant TTC', colSpan: 4, styles: { fontStyle: 'normal', halign: 'center' } },
        { content: totalTTC.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '), styles: { fontStyle: 'normal', halign: 'right' } } 
    ] as any);


    (doc as any).autoTable({
      head: headers,
      body: data,
      startY: tableStartY,
      theme: 'grid',
      styles: { fontSize: 9, cellPadding: 2, lineWidth: 0.1, lineColor: [221, 221, 221]},
      headStyles: { fillColor: [242, 242, 242], textColor: [0, 0, 0], fontSize: 8, halign: 'center', fontStyle: 'bold'},
      bodyStyles: { textColor: [0,0,0], fillColor: null },

      margin: { left: 15, right: 15 },
      columnStyles: {
        // Define column widths and alignment
        0: { halign: 'left', cellWidth: 30 },
        1: { halign: 'left', cellWidth: 60 },
        2: { halign: 'center', cellWidth: 33 },
        3: { halign: 'center', cellWidth: 20 },
        4: { halign: 'right', cellWidth: 35 },
      },
      tableStyle: { borderColor: [200, 200, 200], borderWidth: 0.1 }
    });


    /*************** ——— 5. MONTANT EN LETTRES ——— ****************/

    let y_after_table = (doc as any).lastAutoTable.finalY;
    let y_amount_in_words = y_after_table + 18; 

    const libelle = 'Arrêté la présente facture à la somme de : ';
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.text(libelle, 15, y_amount_in_words);

    const libelleWidth = doc.getTextWidth(libelle);
    const startX = 15 + libelleWidth;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);

    // Amount in words is always the final TTC amount
    const amountForWords = totalTTC;
    const montantLettreRaw = this.enLettresPipe.transform(amountForWords);

    const maxWidth = 195 - startX;

    const lines = doc.splitTextToSize(montantLettreRaw, maxWidth);

    doc.text(lines[0], startX, y_amount_in_words);
    let currentAmountInWordsY = y_amount_in_words;

    for (let i = 1; i < lines.length; i++) {
      currentAmountInWordsY += 6;
      doc.text(lines[i], 15, currentAmountInWordsY);
    }


    /*************** ——— 6. SIGNATURE / CACHET ——— ****************/

    let y_signature_block = currentAmountInWordsY + 30;
    const min_y_signature = doc.internal.pageSize.height - 70;
    y_signature_block = Math.max(y_signature_block, min_y_signature);


    const blocCenterX = 180;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    const signataire = this.signataire || 'Directeur';
    const signataireWidth = doc.getTextWidth(signataire);
    const signataireX = blocCenterX - signataireWidth / 2;
    doc.text(signataire, signataireX, y_signature_block);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const nom = this.signataireNom || 'Nom du signataire';
    const nomWidth = doc.getTextWidth(nom);
    const nomX = blocCenterX - nomWidth / 2;
    doc.text(nom, nomX, y_signature_block + 8);


    // if (this.signataireSignature) { ... add signature image logic here ... }


    /*************** ——— 7. FOOTER  ——— ****************/

    const margin = 15;
const pageWidth = doc.internal.pageSize.width;
const x1 = margin;
const x2 = pageWidth - margin;
const pageHeight = doc.internal.pageSize.height;
const footerYStart = pageHeight - 20;
const separatorY = footerYStart - 5;

doc.setLineWidth(0.2);
doc.setDrawColor(150);
doc.line(x1, separatorY, x2, separatorY);

doc.setFontSize(8);
doc.setFont('helvetica', 'normal');
doc.setTextColor(100);

let currentFooterY = footerYStart;

// — Site Web —
if (this.siteWeb) {
  doc.text(this.siteWeb, 105, currentFooterY, { align: 'center' });
  currentFooterY += 4;
}

// — Identifiants divers (NINA, RCCM, etc.) —
const parts = [];
if (this.nina) parts.push(`NINA : ${this.nina}`);
if (this.rccm) parts.push(`RCCM : ${this.rccm}`);
if (this.nif) parts.push(`NIF : ${this.nif}`);
if (this.banque) parts.push(`Banque : ${this.banque}`);

if (parts.length > 0) {
  doc.text(parts.join(' ; '), 105, currentFooterY, { align: 'center' });
  currentFooterY += 4;
}

// — Adresse —
const adresse = this.adresse;
const siege = this.siege;
const pays = this.pays;

let adresseLine = '';
if (adresse && siege && pays) {
  adresseLine = `Adresse : ${adresse} / ${siege}-${pays}`;
} else if (adresse && siege) {
  adresseLine = `Adresse : ${adresse} / ${siege}`;
} else if (adresse && pays) {
  adresseLine = `Adresse : ${adresse} / ${pays}`;
} else if (siege && pays) {
  adresseLine = `Adresse : ${siege} / ${pays}`;
} else if (adresse) {
  adresseLine = `Adresse : ${adresse}`;
} else if (siege) {
  adresseLine = `Adresse : ${siege}`;
} else if (pays) {
  adresseLine = `Adresse : ${pays}`;
}

if (adresseLine) {
  doc.text(adresseLine, 105, currentFooterY, { align: 'center' });
  currentFooterY += 4;
}

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
        this.loadFactureProforma(this.factureId);

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
        this.tauxTva = entreprise.tauxTva;


        this.logo = `${this.apiUrl}${entreprise.logo}`;


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
    //console.log(`Type MIME de l'image chargée : ${blob.type}`);
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  goToPreview(): void {
    this.router.navigate(['/detail-facture-proforma-apercu', this.factureId]);
  }

  apercuFactureProformaDansDetail(): void {
    const lignes = [
      ...this.confirmedLignes.map(l => ({
        produit: {
          id: l.produitId!,
          nom: this.getProduitNom(l.produitId!)
        },
        quantite: l.quantite,
        ligneDescription: l.ligneDescription,
        prixUnitaire: this.getPrixVente(l.produitId)
      })),
      ...this.inputLignes
        .filter(l => l.produitId && l.quantite > 0)
        .map(l => ({
          produit: {
            id: l.produitId!,
            nom: this.getProduitNom(l.produitId!)
          },
          quantite: l.quantite,
          ligneDescription: l.ligneDescription,
          prixUnitaire: this.getPrixVente(l.produitId)
        }))
    ];

    const preview: FactureProForma = {
      ...this.factureProForma,
      totalHT: this.getTotalHT(),
      remise: this.activeRemise ? this.remisePourcentage : 0,
      tva: this.activeTva,
      totalFacture: this.getTotalTTC(),
      lignesFacture: lignes as any
    };

    this.previewService.setPreview(preview);
    this.router.navigate(['/detail-facture-proforma-apercu']);
  }


loadNotes() {
  this.factureProFormaService.getNotesFactureProforma(this.factureId).subscribe({
    next: (response: any) => {
      console.log("Réponse des notes :", response);

      const notesValides = response?.filter((note: any) => note.note?.trim());

      if (!notesValides || notesValides.length === 0) {
        this.infoMessage = "Aucune note trouvée pour cette facture";
        this.notes = [];
        return;
      }

       // Tri
      notesValides.sort((a: any, b: any) => {
        const dateA = new Date(a.dateCreation).getTime();
        const dateB = new Date(b.dateCreation).getTime();
        return dateB - dateA;
      });
      

      this.notes = notesValides.map((note: any) => ({
        id: note.id,
        content: note.note,
        dateCreation: note.dateCreation ? new Date(note.dateCreation) : null,
        auteur: note.auteur,
        modifiee: note.modifiee,
        numeroIdentifiant: note.numeroIdentifiant || note.id
      }));

      this.infoMessage = null;
    },
    error: (err) => {
      console.error("Erreur lors du chargement des notes", err);
      this.infoMessage = err.error?.message || "Erreur lors de la récupération des notes.";
    }
  });
}



toggleNotebook() {
  this.isNotebookOpen = !this.isNotebookOpen;
  this.activeMenuIndex = null;
}
  
  
 // Et dans la classe
toggleAddNoteInput() {
  this.isAddNoteInputVisible = !this.isAddNoteInputVisible;
  this.activeMenuIndex = null;
}



    addNote() {
    if (this.newNote.trim()) {
      this.notes.push({
        id: Date.now(),
        content: this.newNote.trim(),
        dateCreation: new Date(),
        auteur: this.getCurrentUser().nomComplet,
        numeroIdentifiant: this.newNote.trim(),
      });
      this.newNote = '';
      this.isAddNotePopupOpen = false;
    }
  }

  closeNoteInput() {
  this.noteModification = '';
  this.isAddNoteInputVisible = false;
}

  toggleNoteMenu(index: number): void {
    this.activeMenuIndex = this.activeMenuIndex === index ? null : index;
    this.confirmDeleteIndex = null;
  }

  editNote(index: number): void {
    const note = this.notes[index];
    console.log('Note sélectionnée pour modification:', note);
    this.noteModification = note.content;
    this.isAddNoteInputVisible = true;
    this.activeMenuIndex = null;
    this.noteEditingIndex = index;
  }


  askDelete(index: number) {
    this.confirmDeleteIndex = index;
  }

  confirmDelete(index: number) {
    this.errorMessage = null;
    const note = this.notes[index];
    if (!note || !note.id) return;

    this.factureProFormaService.deletNoteFactureProforma(this.factureId, note.id)
      .subscribe({
        next: () => {
          // Rechercher la note par ID, pour éviter les erreurs d'index après suppression
          const idIndex = this.notes.findIndex(n => n.id === note.id);
          if (idIndex !== -1) {
            this.notes.splice(idIndex, 1);
          }
          this.confirmDeleteIndex = null;
          this.activeMenuIndex = null;
          console.log('Note supprimée avec succès');
          this.loadHistoricalEvents();
          this.loadNotes();
        },
        error: (err) => {
          console.error('Erreur lors de la suppression de la note :', err);
          //affiche erre errorMessage
          this.errorMessage = err.error?.message || 'Erreur lors de la suppression de la note.';
          this.activeMenuIndex = null;

        }

        
      });
  }


  cancelDelete() {
    this.confirmDeleteIndex = null;
    this.activeMenuIndex = null;
  }

  private setDefaultDateRelance(): void {
    const now = new Date();
    const in72h = new Date(now.getTime() + 72 * 60 * 60 * 1000);
    this.dateRelance = this.formatDateForInput(in72h);
  }

  private formatDateForInput(date: Date): string {
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }

  navigateBack() {
    this.router.navigate(['/facture-proforma'])
  }

  // selectSousMethode(methode: string) {
  //     this.selectedSousMethode = methode;
      
  //     if (methode === 'whatsapp') {
  //         this.prepareWhatsApp();
  //     }
  // }

  selectSousMethode(methode: string) {
    this.selectedSousMethode = methode;
    this.whatsappPrepared = false; // Réinitialiser l'état
  }

  // async prepareWhatsApp() {
  //     try {
  //         // Générer le PDF
  //         const pdfFile = await this.generatePDFAttachment();
  //         const pdfUrl = URL.createObjectURL(pdfFile);
          
  //         // Téléphone par défaut
  //         let phone = this.destinataire.telephone || '';
          
  //         // Nettoyer le numéro
  //         phone = phone.replace(/\D/g, '');
          
  //         // Créer le lien WhatsApp
  //         const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent('Bonjour, veuillez trouver notre facture proforma en pièce jointe.')}`;
          
  //         // Ouvrir dans un nouvel onglet
  //         window.open(whatsappLink, '_blank');
          
  //         // Télécharger automatiquement le PDF pour l'utilisateur
  //         const a = document.createElement('a');
  //         a.href = pdfUrl;
  //         a.download = pdfFile.name;
  //         document.body.appendChild(a);
  //         a.click();
  //         document.body.removeChild(a);
          
  //         // Fermer le popup après 2 secondes
  //         setTimeout(() => {
  //             this.showEmailPopup = false;
  //             this.methodeEnvoi = 'physique'; // Réinitialiser
  //             this.selectedSousMethode = null;
  //         }, 2000);
          
  //     } catch (error) {
  //         console.error('Erreur WhatsApp:', error);
  //         this.errorMessage = "Erreur lors de la préparation du partage WhatsApp";
  //     }
  // }

  // Modifiez la méthode onMethodeEnvoiChange
  
  async prepareWhatsApp() {
    try {
        // Générer le PDF
        const pdfFile = await this.generatePDFAttachment();
        const pdfUrl = URL.createObjectURL(pdfFile);

        // Télécharger le PDF automatiquement
        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = pdfFile.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Marquer comme préparé et afficher les instructions
        this.whatsappPrepared = true;
    } catch (error) {
        console.error('Erreur WhatsApp:', error);
        this.errorMessage = "Erreur lors de la préparation du partage WhatsApp";
    }
}

openWhatsApp() {
    // Ouvrir WhatsApp Web ou l'application mobile sans numéro spécifique
    const whatsappLink = 'https://web.whatsapp.com/';
    window.open(whatsappLink, '_blank');

    // Option pour mobile (peut ne pas fonctionner sur tous les navigateurs)
    // const mobileLink = 'whatsapp://';
    // window.open(mobileLink, '_blank');

    // Fermer le popup après ouverture
    setTimeout(() => {
        this.showEmailPopup = false;
        this.methodeEnvoi = 'autre'; // Réinitialiser
        this.selectedSousMethode = null;
        this.whatsappPrepared = false;
    }, 1000);
}



  prepareEmailContent() {}


dropConfirmed(event: CdkDragDrop<any[]>) {
  if (event.previousIndex !== event.currentIndex) {
    moveItemInArray(this.confirmedLignes, event.previousIndex, event.currentIndex);
    this.saveNewOrder();
  }
}

private saveNewOrder() {
  // Optionnel : Sauvegarder le nouvel ordre dans le backend
  console.log('Nouvel ordre des produits:', this.confirmedLignes);
}


}