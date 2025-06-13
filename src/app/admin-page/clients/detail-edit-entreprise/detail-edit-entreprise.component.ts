import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EntrepriseClient } from '../../MODELS/entreprise-clients-model';
import { EntrepriseClientService } from '../../SERVICES/entreprise-clients-service';
import { FactureProFormaService } from '../../SERVICES/factureproforma-service';
import { CustomNumberPipe } from '../../MODELS/customNumberPipe';

@Component({
  selector: 'app-detail-edit-entreprise',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CustomNumberPipe
  ],
  templateUrl: './detail-edit-entreprise.component.html',
  styleUrl: './detail-edit-entreprise.component.scss'
})
export class DetailEditEntrepriseComponent {
  entrepriseForm!: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  entrepriseId!: number;
  entrepriseData!: EntrepriseClient;
  indicatif: string = '';
  maxPhoneLength: number = 0;
  facturesEntreprise: any[] = [];
  loadingFactures = false;
  errorFactures = '';

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
  ) {}

 ngOnInit() {
    this.initializeForm();
    this.route.params.subscribe(params => {
      this.entrepriseId = +params['id'];
      this.loadEntrepriseData();
    });
  }

  private loadFacturesEntreprise() {
    this.loadingFactures = true;
    this.factureService.getFacturesByClient(undefined, this.entrepriseId).subscribe({
      next: (factures) => {
        this.facturesEntreprise = factures;
        this.loadingFactures = false;
      },
      error: (err) => {
        this.errorFactures = 'Erreur lors du chargement des factures';
        this.loadingFactures = false;
        console.error(err);
      }
    });
  }

  loadEntrepriseData() {
    this.entrepriseService.getEntrepriseById(this.entrepriseId).subscribe({
      next: (data) => {
        this.entrepriseData = data;
        
        // Nettoyer le numéro de téléphone existant
        let cleanPhone = data.telephone;
        if (data.telephone && data.telephone.includes(' ')) {
          cleanPhone = data.telephone.replace(/\s/g, '');
        }

        this.entrepriseForm.patchValue({
          nom: data.nom,
          email: data.email,
          telephone: cleanPhone, // Utiliser le numéro nettoyé
          pays: data.pays,
          adresse: data.adresse,
          siege: data.siege,
          secteur: data.secteur
        });

        this.loadFacturesEntreprise();

        // Initialiser l'indicatif si pays existant
        if (data.pays && this.paysIndicatifs[data.pays]) {
          this.indicatif = this.paysIndicatifs[data.pays].indicatif;
          this.maxPhoneLength = this.indicatif.length + this.paysIndicatifs[data.pays].longueur;
          this.updatePhoneValidator(this.paysIndicatifs[data.pays].longueur);
        }
      },
      error: (err) => {
        this.errorMessage = err.message || 'Erreur lors du chargement';
        setTimeout(() => this.router.navigate(['/clients']), 3000);
      }
    });
  }

  // Calcul du total des factures
  // getTotalFactures(): number {
  //   return this.facturesEntreprise.reduce((sum: number, facture: any) => 
  //     sum + facture.totalFacture, 0
  //   );
  // }

  getTotalFactures(): number {
    const total = this.facturesEntreprise.reduce((sum: number, facture: any) => 
      sum + facture.totalFacture, 0
    );
    
    // Arrondir à l'entier le plus proche
    return Math.round(total);
  }

  onPaysChange(event: any): void {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
  
    if (paysInfo) {
      this.indicatif = `${paysInfo.indicatif} `;
      this.maxPhoneLength = this.indicatif.length + paysInfo.longueur;
  
      // Mise à jour de la valeur du téléphone
      if (!this.entrepriseForm.get('telephone')?.value.startsWith(this.indicatif)) {
        this.entrepriseForm.get('telephone')?.setValue(this.indicatif);
      }
  
      this.updatePhoneValidator(paysInfo.longueur);
    }
  }

  updatePhoneValidator(longueur?: number): void {
    const validators = [];
    
    if (this.indicatif) {
      // Permettre des espaces optionnels après l'indicatif
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

    // Supprimer TOUS les caractères non numériques après l'indicatif
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
      telephone: [''], // Validation dynamique
      pays: [''], // Devenu obligatoire
      adresse: [''],
      siege: [''],
      secteur: ['']
    });
  }

  goToClients() {
    this.router.navigate(['/clients']);
  }

  onSubmit() {
    if (this.entrepriseForm.invalid) return;

    const updatedData: EntrepriseClient = {
      ...this.entrepriseData,
      ...this.entrepriseForm.value
    };

    this.entrepriseService.updateEntrepriseClient(this.entrepriseId, updatedData).subscribe({
      next: () => {
        this.successMessage = 'Entreprise modifiée avec succès!';
        this.errorMessage = '';
        setTimeout(() => this.router.navigate(['/clients']), 2000);
      },
      error: (err) => {
        this.errorMessage = err.message || 'Erreur lors de la modification';
        this.successMessage = '';
      }
    });
  }

}
