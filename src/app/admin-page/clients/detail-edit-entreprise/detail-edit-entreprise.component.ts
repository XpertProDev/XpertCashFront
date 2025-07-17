import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EntrepriseClient } from '../../MODELS/entreprise-clients-model';
import { EntrepriseClientService } from '../../SERVICES/entreprise-clients-service';
import { FactureProFormaService } from '../../SERVICES/factureproforma-service';
import { CustomNumberPipe } from '../../MODELS/customNumberPipe';
import { MatTabsModule } from '@angular/material/tabs';
import { environment } from 'src/environments/environment';
import { EntrepriseService } from '../../SERVICES/entreprise-service';

@Component({
  selector: 'app-detail-edit-entreprise',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CustomNumberPipe,
    MatTabsModule
  ],
  templateUrl: './detail-edit-entreprise.component.html',
  styleUrl: './detail-edit-entreprise.component.scss'
})
export class DetailEditEntrepriseComponent {
  public imgUrl = environment.imgUrl;
  entrepriseForm!: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  entrepriseId!: number;
  entrepriseData!: EntrepriseClient;
  indicatif: string = '';
  maxPhoneLength: number = 0;
  facturesEntreprise: any[] = [];
  isLoading = false;
  loadingFactures = false;
  errorFactures = '';
  isEditing = false;
  control = new FormControl();
  selectedFactureId: number | null = null;
  factureDetails: any = null;
  entrepriseEmitter: any = {};
  factureCount: number = 0;

  // Propriétés pour l'aperçu de facture
  entrepriseNom: string = 'Nom entreprise';
  entrepriseSecteur: string = 'Secteur';
  entrepriseEmail: string = 'email@entreprise.com';
  entrepriseTelephone: string = '+223 00 00 00 00';
  entrepriseSiege: string = 'Siège social';
  entrepriseLogo: string = 'assets/img/entreprise-icon.png';
  entrepriseSiteWeb: string = 'www.entreprise.com';
  entrepriseNina: string = 'NINA';
  entrepriseRccm: string = 'RCCM';
  entrepriseNif: string = 'NIF';
  entrepriseBanque: string = 'Banque';
  entrepriseAdresse: string = 'Adresse';
  entreprisePays: string = 'Pays';
  entrepriseSignataireNom: string = 'Nom signataire';
  entrepriseSignataire: string = 'Fonction signataire';

  newPhotoUrl: string | null = null;
  selectedFile: File | null = null;
  clientPhotoUrl: string | null = null;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  // Définition des indicatifs par pays
  paysIndicatifs: { [key: string]: { indicatif: string, longueur: number } } = {
    'Mali': { indicatif: '+223', longueur: 8 },
    'Sénégal': { indicatif: '+221', longueur: 9 },
    'Côte d\'Ivoire': { indicatif: '+225', longueur: 10 }
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private entrepriseService: EntrepriseClientService,
    private factureService: FactureProFormaService,
    private entrepriseService2: EntrepriseService 
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.route.params.subscribe(params => {
      this.entrepriseId = +params['id'];
      this.loadEntrepriseData();
      this.loadFacturesEntreprise();
    });
    this.loadEntrepriseEmitter();
    this.entrepriseForm.disable();
    this.control.disable();
  }

  loadEntrepriseEmitter(): void {
    this.entrepriseService2.getEntrepriseInfo().subscribe({
      next: (entreprise) => {
        this.entrepriseEmitter = entreprise;
      },
      error: (err) => {
        console.error('Erreur chargement infos entreprise émettrice', err);
      }
    });
  }

  loadFacturesEntreprise() {
    this.loadingFactures = true;
    this.factureService.getFacturesByClient(undefined, this.entrepriseId).subscribe({
      next: (factures) => {
        this.facturesEntreprise = factures;
        this.factureCount = factures.length;
        this.loadingFactures = false;
        
        // Sélectionner la première facture par défaut
        if (this.facturesEntreprise.length > 0) {
          this.onSelectFacture(this.facturesEntreprise[0]);
        }
      },
      error: (err) => {
        this.errorFactures = 'Erreur lors du chargement des factures';
        this.loadingFactures = false;
        console.error(err);
      }
    });
  }

  onSelectFacture(facture: any): void {
    this.selectedFactureId = facture.id;
    this.loadFactureDetails(facture.id);
  }

  loadFactureDetails(factureId: number): void {
    this.factureService.getFactureProformaById(factureId).subscribe({
      next: (details: any) => {
        this.factureDetails = details;
      },
      error: (err) => {
        console.error('Erreur chargement détails facture', err);
      }
    });
  }

  getTotalFactures(): number {
    const total = this.facturesEntreprise.reduce((sum: number, facture: any) => 
      sum + facture.totalFacture, 0
    );
    return Math.round(total);
  }

  onPaysChange(event: any): void {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
  
    if (paysInfo) {
      this.indicatif = `${paysInfo.indicatif} `;
      this.maxPhoneLength = this.indicatif.length + paysInfo.longueur;
  
      if (!this.entrepriseForm.get('telephone')?.value.startsWith(this.indicatif)) {
        this.entrepriseForm.get('telephone')?.setValue(this.indicatif);
      }
  
      this.updatePhoneValidator(paysInfo.longueur);
    }
  }

  updatePhoneValidator(longueur: number): void {
    const validators = [];
    
    if (this.indicatif) {
      const regex = new RegExp(`^\\${this.indicatif}\\s*\\d{${longueur}}$`);
      validators.push(Validators.pattern(regex));
    }
    
    this.entrepriseForm.get('telephone')?.setValidators(validators);
    this.entrepriseForm.get('telephone')?.updateValueAndValidity();
  }

  formatPhoneNumber(): void {
    let valeur = this.entrepriseForm.get('telephone')?.value;
    
    if (!valeur.startsWith(this.indicatif)) {
      this.entrepriseForm.get('telephone')?.setValue(this.indicatif);
      return;
    }

    const chiffres = valeur.replace(this.indicatif, '').replace(/\D/g, '');
    const numeroFormate = this.indicatif + chiffres;
    
    this.entrepriseForm.get('telephone')?.setValue(
      numeroFormate.slice(0, this.maxPhoneLength)
    );
  }

  initializeForm() {
    this.entrepriseForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.email]],
      telephone: [''],
      pays: [''],
      adresse: [''],
      siege: [''],
      secteur: ['']
    });
  }

  loadEntrepriseData() {
    this.entrepriseService.getEntrepriseById(this.entrepriseId).subscribe({
      next: (data) => {
        this.entrepriseData = data;
        
        // Mettre à jour les propriétés d'aperçu
        this.entrepriseNom = data.nom;
        this.entrepriseSecteur = data.secteur || '';
        this.entrepriseEmail = data.email || '';
        this.entrepriseTelephone = data.telephone || '';
        this.entrepriseSiege = data.siege || '';
        this.entrepriseAdresse = data.adresse || '';
        this.entreprisePays = data.pays || '';

        let cleanPhone = data.telephone;
        if (data.telephone && data.telephone.includes(' ')) {
          cleanPhone = data.telephone.replace(/\s/g, '');
        }

        this.entrepriseForm.patchValue({
          nom: data.nom,
          email: data.email,
          telephone: cleanPhone,
          pays: data.pays,
          adresse: data.adresse,
          siege: data.siege,
          secteur: data.secteur
        });

        if (data.pays && this.paysIndicatifs[data.pays]) {
          this.indicatif = this.paysIndicatifs[data.pays].indicatif;
          this.maxPhoneLength = this.indicatif.length + this.paysIndicatifs[data.pays].longueur;
          this.updatePhoneValidator(this.paysIndicatifs[data.pays].longueur);
        }
      },
      error: (err) => {
        this.errorMessage = err.message || 'Erreur lors du chargement';
      }
    });
  }

  toggleEditing(): void {
    this.isEditing = !this.isEditing;
    
    if (this.isEditing) {
      this.entrepriseForm.enable();
    } else {
      this.entrepriseForm.disable();
      this.loadEntrepriseData();
    }
  }

  goToClients() {
    if (this.isEditing) {
      this.toggleEditing();
    } else {
      this.router.navigate(['/clients']);
    }
  }

  // Méthode pour déclencher l'input file
  triggerFileInput(): void {
    if (!this.isEditing) return;
    this.fileInput.nativeElement.click();
  }

  onSubmit() {
      if (this.entrepriseForm.invalid) return;
      
      // Réinitialiser les messages
      this.errorMessage = '';
      this.successMessage = '';
      
      // Activer l'indicateur de chargement
      this.isLoading = true;

      // Ajouter un délai de 3 secondes avant la modification
      setTimeout(() => {
          const updatedData: EntrepriseClient = {
              ...this.entrepriseData,
              ...this.entrepriseForm.value
          };

          this.entrepriseService.updateEntrepriseClient(this.entrepriseId, updatedData).subscribe({
              next: () => {
                  // Afficher le message de succès immédiatement
                  this.successMessage = 'Entreprise modifiée avec succès!';
                  this.errorMessage = '';
                  this.isLoading = false;
                  
                  // Attendre 2 secondes avant de désactiver le mode édition
                  setTimeout(() => {
                      // Désactiver le mode édition après 2 secondes
                      this.isEditing = false;
                      this.entrepriseForm.disable();
                      
                      // Recharger les données
                      this.loadEntrepriseData();
                  }, 2000);
              },
              error: (err) => {
                  this.errorMessage = err.message || 'Erreur lors de la modification';
                  this.successMessage = '';
                  this.isLoading = false;
              }
          });
      }, 3000); // Délai initial de 3 secondes
  }

  navigateBack() {
    this.router.navigate(['/clients'])
  }

entrepriseClient: EntrepriseClient | null = null;

showConfirmationModalE = false;
isDeletingE = false;

deleteEntreprise() {
  if (!this.entrepriseClient && !this.entrepriseId) {
    console.error("Entreprise cliente ou ID non disponible.");
    return;
  }

  this.showConfirmationModalE = true;
}

async confirmDeleteE(): Promise<void> {
  this.showConfirmationModalE = false;

  if (!this.entrepriseClient && !this.entrepriseId) {
    this.errorMessage = "Entreprise non disponible pour suppression.";
    return;
  }

  this.isDeletingE = true;
  this.errorMessage = '';
  this.successMessage = '';

  try {
    const idToDelete = this.entrepriseClient?.id || this.entrepriseId;
    // Un seul appel delete, on récupère le message (string) ici
    const message = await this.entrepriseService.deleteEntreprise(idToDelete).toPromise();
    this.successMessage = message || 'Entreprise supprimée avec succès !';

    setTimeout(() => {
      this.router.navigate(['/clients']);
    }, 2000); 
  } catch (err: any) {
    let message = err?.error?.error || 'Erreur lors de la suppression.';
    const prefix = "Une erreur est survenue : ";
    if (message.startsWith(prefix)) {
      message = message.substring(prefix.length);
    }
    this.errorMessage = message;
  } finally {
    this.isDeletingE = false;
    setTimeout(() => {
      this.errorMessage = '';
      this.successMessage = '';
    }, 5000);
  }
}


}