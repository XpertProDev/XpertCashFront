import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrepriseService } from '../../SERVICES/entreprise-service';
import { FactureReelService } from '../../SERVICES/facturereel-service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomNumberPipe } from '../../MODELS/customNumberPipe';
import { EnLettresPipe } from '../../MODELS/number-to-words.pipe';
import { FactureReelle, LigneFactureDTO, PaiementDTO } from '../../MODELS/FactureReelle.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { title } from 'process';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-facture-reel-details',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomNumberPipe, EnLettresPipe, ReactiveFormsModule, MatButtonModule],
  templateUrl: './facture-reel-details.component.html',
  styleUrl: './facture-reel-details.component.scss'
})
export class FactureReelDetailsComponent implements OnInit {
  // facture: any | null = null;
  
  nom: string | null = null;
  siege!: string;
  email!: string;
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
  signataire!: string;
  signataireNom!: string;
  tauxTva?: number | null;
  totauxParMode: { [key: string]: number } = {};

  @Input() nomComplet: string = '';
  @Input() role: 'Validateur' | 'Createur' = 'Createur';

  facture: FactureReelle | null = null;
  totalTVA: number = 0;
  montantCommercial: number = 0;

  paiementForm: FormGroup;
  montantRestant: number = 0;
  historiquePaiements: PaiementDTO[] = [];
  isLoading: boolean = false;
  isLoadingFacture: boolean = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;
  errorMessageFactureAnuller: string | null = null;
  successMessageFactureAnuller: string | null = null;
  montant: number = 0;
  private messageSubscription: Subscription | null = null;
  private apiUrl = environment.imgUrl;
  fallbackLogo = `${this.apiUrl}/defaultLogo/Votre.png`;

  modesPaiementVisibles: { mode: string, montant: number }[] = [];
  showAnnulationConfirmation: boolean = false;

  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private factureService: FactureReelService,
    private entrepriseService: EntrepriseService,
    private fb: FormBuilder,
    private dialog: MatDialog,
  ){
    this.paiementForm = this.fb.group({
      montant: ['', [Validators.required, Validators.min(0.01)]],
      modePaiement: ['', Validators.required]
    });
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input) return;

    const cleaned = input.value.replace(/\s/g, '');
    const parsed = parseInt(cleaned, 10);

    if (!isNaN(parsed)) {
      // Met à jour le champ FormControl
      this.paiementForm.get('montant')?.setValue(parsed, { emitEvent: false });

      // Met à jour visuellement le champ avec format
      input.value = this.customNumberTransform(parsed);
    } else {
      this.paiementForm.get('montant')?.setValue(null, { emitEvent: false });
    }
  }

  // Fonction utilitaire de formatage (tu peux réutiliser ta pipe ici si tu veux)
  customNumberTransform(value: number): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  ngOnInit(): void {
    // 1) Charger les infos de l’entreprise (en-tête)
    this.getUserEntrepriseInfo();

    // 2) Récupérer l’ID de la facture depuis l’URL et lancer la requête API
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const factureId = +idParam;
      this.loadFactureReelle(factureId);
    } else {
      // Si pas d’ID dans l’URL, rediriger ou afficher message d’erreur
      console.error('Aucun ID de facture passé en paramètre');
      this.router.navigate(['/facture-reel']);
    }

    this.paiementForm = this.fb.group({
      montant: ['', [Validators.required, Validators.min(0.01)]],
      modePaiement: ['', Validators.required]
    });
    
  }

  loadFactureReelle(id: number): void {
    this.factureService.getFactureReelleById(id).subscribe({
      next: (data: FactureReelle) => {
        console.log('les donner de facture :', data);
        // sum est un nombre, ligne est une LigneFacture
        data.totalHT = data.lignesFacture
          .reduce((sum: number, ligne: LigneFactureDTO) => sum + ligne.montantTotal, 0);

        data.tauxRemise = data.remise > 0
          ? (data.remise / data.totalHT!) * 100
          : 0;

        if (data.tva) {
          this.totalTVA = (data.totalHT! - data.remise) * (this.tauxTva ?? 0);
          this.montantCommercial = data.totalHT! - data.remise;
        }

        this.facture = data;

        this.loadMontantRestant();
        this.loadHistoriquePaiements();
      
        // Ajouter le calcul du statut
        this.updatePaymentStatus();
      },
      error: (err) => {
        console.error('Erreur', err);
        this.router.navigate(['/facture-reel']);
      }
    });
  }

  // Nouvelle méthode pour mettre à jour le statut
  private updatePaymentStatus() {
    if (!this.facture) return;
    
    if (this.montantRestant <= 0) {
      this.facture.statutPaiement = 'PAYEE';
    } else if (this.montantRestant < this.facture.totalFacture) {
      this.facture.statutPaiement = 'PARTIELLEMENT_PAYEE';
    } else {
      this.facture.statutPaiement = 'EN_ATTENTE';
    }
  }

voirProforma() {
  if (this.facture?.factureProFormaId) {
    this.router.navigate(['/facture-proforma-details', this.facture.factureProFormaId]);
  } else {
    console.error('Aucune facture proforma associée trouvée');
    // Option: Afficher un message à l'utilisateur
    this.errorMessage = "Aucune facture proforma associée";
  }
}

  loadMontantRestant() {
    if (!this.facture) return;
    
    this.factureService.getMontantRestant(this.facture.id).subscribe({
      next: (montant) => {
        this.montantRestant = montant;
        this.updatePaymentStatus(); // Mettre à jour le statut après avoir reçu le montant restant
      },
      error: (err) => console.error(err)
    });
  }

  getStatutText(statut: string | undefined): string {
    if (!statut) return 'Inconnu';
    
    switch(statut) {
      case 'PAYEE': return 'Payée';
      case 'PARTIELLEMENT_PAYEE': return 'Partiellement payée';
      case 'EN_ATTENTE': return 'Non payé ';
      default: return statut;
    }
  }

  getModeText(mode: string): string {
    switch(mode) {
      case 'CASH': return 'Espèce';
      case 'CHEQUE': return 'Chèque';
      case 'CARD': return 'Carte de crédit';
      case 'VIREMENT': return 'Virement bancaire';
      case 'MOBILE': return 'Mobile Money';
      default: return mode;
    }
  }

  getModeIconClass(mode: string): string {
    switch (mode) {
      case 'CASH': return 'ri-cash-line text-green';
      case 'CHEQUE': return 'ri-bill-line text-blue';
      case 'CARD': return 'ri-bank-card-line text-purple';
      case 'VIREMENT': return 'ri-bank-fill text-navy';
      case 'MOBILE': return 'ri-smartphone-line text-orange';
      default: return 'ri-question-line text-gray';
    }
  }

  // loadHistoriquePaiements() {
  //   if (!this.facture) return;
    
  //   this.factureService.getHistoriquePaiements(this.facture.id).subscribe({
  //     next: (paiements) => this.historiquePaiements = paiements.reverse(),
  //     error: (err) => console.error(err)
  //   });
  // }

  loadHistoriquePaiements() {
    if (!this.facture) return;
    
    this.factureService.getHistoriquePaiements(this.facture.id).subscribe({
      next: (paiements) => {
        this.historiquePaiements = paiements.reverse();
        this.calculerTotauxParMode(); // Nouvelle fonction
      },
      error: (err) => console.error(err)
    });
  }

  calculerTotauxParMode(): void {
    const totaux: { [key: string]: number } = {};
    
    // Calcul des totaux
    this.historiquePaiements.forEach(paiement => {
      totaux[paiement.modePaiement] = (totaux[paiement.modePaiement] || 0) + paiement.montant;
    });
    
    // Création du tableau des modes visibles
    this.modesPaiementVisibles = Object.entries(totaux)
      .filter(([_, montant]) => montant > 0)
      .map(([mode, montant]) => ({ mode, montant }));
    
    // Tri pour un affichage cohérent
    this.modesPaiementVisibles.sort((a, b) => b.montant - a.montant);
  }

  getIconClass(mode: string): string {
    switch (mode) {
      case 'CASH': return 'ri-cash-line text-green';
      case 'CHEQUE': return 'ri-bill-line text-blue';
      case 'CARD': return 'ri-bank-card-line text-purple';
      case 'VIREMENT': return 'ri-bank-fill text-navy';
      case 'MOBILE': return 'ri-smartphone-line text-orange';
      default: return 'ri-question-line text-gray';
    }
  }

  enregistrerPaiement() {
    if (this.paiementForm.invalid || !this.facture) return;

    // Réinitialiser les messages avant chaque tentative
    this.errorMessage = null;
    this.successMessage = null;
    this.clearMessageTimer(); // Annuler tout timer existant
    
    this.isLoading = true;
    const montantPaiement = this.paiementForm.get('montant')?.value;
    
    // Validation supplémentaire du montant
    if (montantPaiement > this.montantRestant) {
      this.errorMessage = "Le montant saisi est supérieur au montant restant à payer.";
      this.startMessageTimer(3000);
      this.isLoading = false;
      return;
    }

    this.factureService.enregistrerPaiement(
      this.facture.id, 
      montantPaiement, 
      this.paiementForm.get('modePaiement')?.value
    ).subscribe({
      next: () => {
        this.successMessage = "Paiement enregistré avec succès.";
        this.paiementForm.reset();
        
        // Recharger les données de la facture pour mettre à jour le statut
        this.loadFactureReelle(this.facture!.id);
        
        this.startMessageTimer(3000);
      },
      error: (err: HttpErrorResponse) => {
        // Gestion spécifique du succès avec réponse texte
        if (err.status === 200 && err.error?.text) {
          this.successMessage = err.error.text;
          this.paiementForm.reset();
          
          // Recharger les données de la facture pour mettre à jour le statut
          this.loadFactureReelle(this.facture!.id);
        } 
        // Gestion des erreurs standards
        else if (err.error?.message) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = "Une erreur inconnue est survenue";
        }
        
        this.isLoading = false;
        this.startMessageTimer(3000);
      }
    });
  }

 // Méthode pour démarrer le timer de fermeture automatique
  private startMessageTimer(duration: number) {
    this.clearMessageTimer(); // Nettoyer tout timer existant
    
    this.messageSubscription = timer(duration).subscribe(() => {
      this.successMessage = null;
      this.errorMessage = null;
      this.messageSubscription = null;
    });
  }

  // Méthode pour annuler le timer
  private clearMessageTimer() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
      this.messageSubscription = null;
    }
  }

  ngOnDestroy() {
    this.clearMessageTimer();
  }

  getUserEntrepriseInfo(): void {
    this.entrepriseService.getEntrepriseInfo().subscribe({
      next: (entreprise) => {
        this.nom = entreprise.nom;
        this.siege = entreprise.siege;
        this.email = entreprise.email;
        this.logo = entreprise.logo ? `${this.apiUrl}${entreprise.logo}` : null;
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
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des infos entreprise :', err);
      }
    });
  }

  navigateBack() {
    this.router.navigate(['/facture-reel']);
  }

  getLegalInfo(): string {
    const parts: string[] = [];
    if (this.nina) { parts.push(`NINA : ${this.nina}`); }
    if (this.rccm) { parts.push(`RCCM : ${this.rccm}`); }
    if (this.nif) { parts.push(`NIF : ${this.nif}`); }
    if (this.banque) { parts.push(`Banque : ${this.banque}`); }
    return parts.join(' ; ');
  }

  getAddressInfo(): string {
    const adresse = this.adresse;
    const siege = this.siege;
    const pays = this.pays;

    if (adresse && siege && pays) { return `Adresse : ${adresse} / ${siege}-${pays}`; }
    if (adresse && siege) { return `Adresse : ${adresse} / ${siege}`; }
    if (adresse && pays) { return `Adresse : ${adresse} / ${pays}`; }
    if (siege && pays)  { return `Adresse : ${siege} / ${pays}`; }
    if (adresse)        { return `Adresse : ${adresse}`; }
    if (siege)          { return `Adresse : ${siege}`; }
    if (pays)           { return `Adresse : ${pays}`; }
    return '';
  }

  annulerFacture() {
    // Afficher la popup de confirmation
    this.showAnnulationConfirmation = true;
  }

  cancelAnnulation() {
    // Cacher la popup
    this.showAnnulationConfirmation = false;
  }

  confirmAnnulation() {
    // Cacher la popup
    this.showAnnulationConfirmation = false;
    
    this.isLoadingFacture = true;
    
    if (!this.facture) {
      this.isLoadingFacture = false;
      return;
    }

    this.factureService.annulerFactureReelle(this.facture.id).subscribe({
      next: (factureAnnulee) => {
        // Mettre à jour la facture locale avec le nouveau statut
        this.facture = factureAnnulee;
        this.successMessageFactureAnuller = 'Facture annulée avec succès';
        // Rediriger après 2 secondes
        setTimeout(() => {
          this.router.navigate(['/facture-reel']);
        }, 2000);
      },
      error: (err) => {
        // this.errorMessage = err.error?.message || 'Erreur lors de l\'annulation de facture le paiement est déjà commencer';
        this.errorMessageFactureAnuller = err.error?.message || 'Vous pouvez pas annuler cette facture le paiement est déjà commencer';
        this.isLoadingFacture = false;
      }
    });
  }

async download() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  // Filigrane "NON PAYÉ" en rotation (arrière-plan)
  if (this.facture?.statutPaiement === 'EN_ATTENTE') {
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    
    // Créer un canvas pour le filigrane
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Taille du canvas (en pixels)
    canvas.width = pageWidth * 4;
    canvas.height = pageHeight * 4;
    
    // Configuration du filigrane
    ctx.font = "bold 120px Arial";
    ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    // Position centrale
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Rotation de 45 degrés
    ctx.translate(centerX, centerY);
    ctx.rotate(-45 * Math.PI / 180);
    ctx.translate(-centerX, -centerY);
    
    // Dessiner le texte
    ctx.fillText("NON PAYÉ", centerX, centerY);
    
    // Convertir le canvas en image
    const watermarkImage = canvas.toDataURL('image/png');
    
    // Ajouter l'image au PDF
    doc.addImage(watermarkImage, 'PNG', 0, 0, pageWidth, pageHeight);
  }

  // Logo
  try {
    if (this.logo) {
      const imgData = this.logo.startsWith('data:image/') 
        ? this.logo 
        : await this.getImageFromUrl(this.logo);
      const formatMatch = imgData.match(/^data:image\/(png|jpeg|jpg|gif);/);
      const format = formatMatch ? formatMatch[1].toUpperCase() : 'PNG';
      doc.addImage(imgData, format, 15, 10, 47, 17);
    }
  } catch (imgErr) {
    console.error('Erreur de chargement du logo', imgErr);
  }

  // Infos entreprise
  const infoX = 70;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text(this.nom || 'Nom Entreprise', infoX, 12);
  doc.setFont('helvetica', 'normal');
  doc.text(`Secteur : ${this.secteur || ''}`, infoX, 17);
  doc.text(`Email : ${this.email || ''}`, infoX, 22);
  doc.text(`Téléphone : ${this.telephone || ''}`, infoX + 60, 22);

  // Séparateurs
  doc.setDrawColor(200);
  doc.line(15, 27, 195, 27);
  doc.line(15, 28.5, 195, 28.5);

  // Titre
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(85, 85, 85);
  doc.text(`FACTURE : ${this.facture?.numeroFacture}`, 105, 36, { align: 'center' });

  // Badge de statut de paiement
  if (this.facture?.statutPaiement) {
    const status = this.facture.statutPaiement;
    const statusText = this.getStatutText(status);
    
    // Définir les couleurs selon le statut
    let bgColor: [number, number, number] = [108, 117, 125]; // Gris par défaut
    let textColor: [number, number, number] = [255, 255, 255]; // Texte blanc
    
    switch(status) {
      case 'PAYEE':
        bgColor = [40, 167, 69]; // Vert
        break;
      case 'PARTIELLEMENT_PAYEE':
        bgColor = [255, 193, 7]; // Orange
        textColor = [0, 0, 0]; // Texte noir
        break;
      case 'EN_ATTENTE':
        bgColor = [220, 53, 69]; // Rouge
        break;
    }

    // Calculer la position
    const textWidth = doc.getTextWidth(statusText);
    const badgeWidth = textWidth + 6;
    const badgeX = 195 - 15 - badgeWidth; // 15mm de marge droite
    const badgeY = 30; // Position verticale ajustée
    
    // Dessiner le badge
    doc.setFillColor(...bgColor);
    doc.rect(badgeX, badgeY, badgeWidth, 8, 'F');
    
    // Écrire le texte du badge
    doc.setTextColor(...textColor);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text(statusText, badgeX + 3, badgeY + 5);
    
    // Réinitialiser la couleur du texte
    doc.setTextColor(85, 85, 85);
  }

  // Date
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const dateStr = this.facture?.dateCreation 
    ? new Date(this.facture.dateCreation).toLocaleDateString('fr-FR', { 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric' 
      })
    : '';
  doc.text(`${this.siege || ''}, le ${dateStr}`, 195, 46, { align: 'right' });

  // Client
  const clientY = 56;
  if (this.facture) {
    const clientName = this.facture.client?.nom || 
                      this.facture.entrepriseClient?.nom || 
                      'Non spécifié';
    doc.setFont('helvetica', 'bold');
    doc.text('Doit :', 15, clientY);
    doc.setFont('helvetica', 'normal');
    doc.text(clientName, 15 + doc.getTextWidth('Doit :') + 2, clientY);
  }

  // Objet
  doc.setFont('helvetica', 'bold');
  doc.text('Objet :', 15, clientY + 7);
  doc.setFont('helvetica', 'normal');
  doc.text(this.facture?.description || '', 15 + doc.getTextWidth('Objet :') + 2, clientY + 7);

  // Tableau des produits
  const tableStartY = clientY + 17;
  const customNumberPipe = new CustomNumberPipe();
  const tableData = this.facture?.lignesFacture.map(ligne => [
    ligne.produitNom,
    ligne.ligneDescription,
    customNumberPipe.transform(ligne.prixUnitaire),
    ligne.quantite.toString(),
    customNumberPipe.transform(ligne.montantTotal)
  ]) || [];

  // Totaux
  tableData.push([
    { content: 'Total HT', colSpan: 4, styles: { fontStyle: 'normal', halign: 'center' } },
    { content: customNumberPipe.transform(this.facture?.totalHT || 0), styles: { halign: 'right' } }
  ] as any);

  // Remise
  if (this.facture?.remise && this.facture.remise > 0) {
    const remisePourcent = this.facture.totalHT > 0 
    ? Math.round((this.facture.remise / this.facture.totalHT) * 100) 
    : 0;
    tableData.push([
      { content: `Remise ${remisePourcent}%`, colSpan: 4, styles: { fontStyle: 'normal', halign: 'center' } },
      { content: customNumberPipe.transform(this.facture.remise), styles: { halign: 'right' } }
    ] as any);
    
    const montantCommercial = this.facture.totalHT - this.facture.remise;

    tableData.push([
      { content: 'Montant Commercial', colSpan: 4, styles: { fontStyle: 'normal', halign: 'center' } },
      { content: customNumberPipe.transform(montantCommercial), styles: { halign: 'right' } }
    ] as any);
  }

  // TVA
  if (this.facture?.tva && this.tauxTva) {
    const tauxPourcent = Math.round(this.tauxTva * 100);
    tableData.push([
      { content: `TVA (${tauxPourcent} %)`, colSpan: 4, styles: { fontStyle: 'normal', halign: 'center' } },
      { content: customNumberPipe.transform(this.totalTVA), styles: { halign: 'right' } }
    ] as any);
    
    tableData.push([
      { content: 'Montant TTC', colSpan: 4, styles: { fontStyle: 'normal', halign: 'center' } },
      { content: customNumberPipe.transform(this.facture.totalFacture || 0), styles: { halign: 'right' } }
    ] as any);
  }

  // Génération du tableau
  (doc as any).autoTable({
    head: [['Désignation', 'Description', 'Prix Unitaire (FCFA)', 'Quantité', 'Montant (FCFA)']],
    body: tableData,
    startY: tableStartY,
    theme: 'grid',
    styles: { 
      fontSize: 9, 
      cellPadding: 2, 
      lineWidth: 0.1, 
      lineColor: [221, 221, 221]
    },
    headStyles: { 
      fillColor: [242, 242, 242], 
      textColor: [0, 0, 0], 
      fontSize: 8, 
      fontStyle: 'bold'
    },
    margin: { left: 15, right: 15 },
    columnStyles: {
      0: { cellWidth: 30 },
      1: { cellWidth: 60 },
      2: { cellWidth: 33 },
      3: { cellWidth: 20 },
      4: { cellWidth: 35 },
    }
  });

  // Montant en lettres
  const tableEndY = (doc as any).lastAutoTable.finalY;
  const amountY = tableEndY + 18;
  const libelle = 'Arrêté la présente facture à la somme de : ';
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text(libelle, 15, amountY);
  
  const enLettresPipe = new EnLettresPipe();
  const amountText = enLettresPipe.transform(this.facture?.totalFacture || 0);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text(amountText, 15 + doc.getTextWidth(libelle), amountY);

// Signature
const signatureY = amountY + 30;
doc.setFontSize(9);
doc.setFont('helvetica');
let clientName = 'Nom du client';
if (this.facture) {
  clientName = this.facture.client?.nom || this.facture.entrepriseClient?.nom || 'Non spécifié';
}
doc.setFont('helvetica', 'bold');
doc.text('Pour acquit :', 29, signatureY);
doc.setFont('helvetica', 'normal');
doc.text(clientName, 29, signatureY + 16);

doc.setFont('helvetica');
doc.text(this.signataire || '', 180, signatureY, { align: 'right' });
doc.text(this.signataireNom || 'Nom du signataire', 183, signatureY + 16, { align: 'right' });

  // Footer
  const footerY = doc.internal.pageSize.height - 20;
  doc.setLineWidth(0.2);
  doc.setDrawColor(150);
  doc.line(15, footerY - 5, 195, footerY - 5);
  doc.setFontSize(8);
  doc.setTextColor(100);
  
  if (this.siteWeb) {
    doc.text(this.siteWeb, 105, footerY, { align: 'center' });
  }
  
  const legalInfo = this.getLegalInfo();
  if (legalInfo) {
    doc.text(legalInfo, 105, footerY + 4, { align: 'center' });
  }
  
  const addressInfo = this.getAddressInfo();
  if (addressInfo) {
    doc.text(addressInfo, 105, footerY + 8, { align: 'center' });
  }

  // Téléchargement
  doc.save(`Facture_${this.facture?.numeroFacture}.pdf`);
}

  private getImageFromUrl(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.setAttribute('crossOrigin', 'anonymous');
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = error => reject(error);
      img.src = url;
    });
  }

}
