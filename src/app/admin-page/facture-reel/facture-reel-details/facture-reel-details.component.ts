import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-facture-reel-details',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomNumberPipe, EnLettresPipe, ReactiveFormsModule],
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

  facture: FactureReelle | null = null;
  totalTVA: number = 0;
  montantCommercial: number = 0;

  paiementForm: FormGroup;
  montantRestant: number = 0;
  historiquePaiements: PaiementDTO[] = [];
  isLoading: boolean = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;
montant: number = 0;
  private messageSubscription: Subscription | null = null;
  
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private factureService: FactureReelService,
    private entrepriseService: EntrepriseService,
    private fb: FormBuilder,
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
        console.log('Type de dateCreation :', typeof data.dateCreation, data.dateCreation);
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
      case 'EN_ATTENTE': return 'En attente';
      default: return statut;
    }
  }

  getModeText(mode: string): string {
    switch(mode) {
      case 'CASH': return 'Espèce';
      case 'CHEQUE': return 'Chèque';
      case 'CARD': return 'Carte de crédit';
      case 'VIREMENT': return 'Virement bancaires';
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



  loadHistoriquePaiements() {
    if (!this.facture) return;
    
    this.factureService.getHistoriquePaiements(this.facture.id).subscribe({
      next: (paiements) => this.historiquePaiements = paiements.reverse(),
      error: (err) => console.error(err)
    });
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
        this.logo = entreprise.logo ? 'http://localhost:8080' + entreprise.logo : null;
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

}
