import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { EntrepriseClientService } from '../../SERVICES/entreprise-clients-service';

@Component({
  selector: 'app-entreprise-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule, 
  ],
  templateUrl: './entreprise-form.component.html',
  styleUrl: './entreprise-form.component.scss'
})
export class EntrepriseFormComponent {
  @Output() entrepriseAjoute = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  entrepriseClientForm!: FormGroup;
    errorMessageApi: string = '';
    errorMessage: string = '';
    successMessage: string = '';
    isSubmitting = false;
    private destroy$ = new Subject<void>();
    entrepriseIndicatif: string = '';
    entrepriseMaxPhoneLength: number = 0;
  
    paysIndicatifs: { [key: string]: { indicatif: string, longueur: number } } = {
  'Mali': { indicatif: '+223', longueur: 8 },
  'Sénégal': { indicatif: '+221', longueur: 9 },
  'Côte d\'Ivoire': { indicatif: '+225', longueur: 10 },
  'Burkina Faso': { indicatif: '+226', longueur: 8 },
  'Niger': { indicatif: '+227', longueur: 8 },
  'France': { indicatif: '+33', longueur: 9 },
  'Belgique': { indicatif: '+32', longueur: 9 },
  'Suisse': { indicatif: '+41', longueur: 9 },
  'Canada': { indicatif: '+1', longueur: 10 },
  'États-Unis': { indicatif: '+1', longueur: 10 },
  'Maroc': { indicatif: '+212', longueur: 9 },
  'Algérie': { indicatif: '+213', longueur: 9 },
  'Tunisie': { indicatif: '+216', longueur: 8 },
  'Togo': { indicatif: '+228', longueur: 8 },
  'Bénin': { indicatif: '+229', longueur: 8 },
  'Guinée': { indicatif: '+224', longueur: 9 },
  'Tchad': { indicatif: '+235', longueur: 8 },
  'Cameroun': { indicatif: '+237', longueur: 9 },
  'RDC': { indicatif: '+243', longueur: 9 },
  'Gabon': { indicatif: '+241', longueur: 9 },
  'Afrique du Sud': { indicatif: '+27', longueur: 9 },
  'Rwanda': { indicatif: '+250', longueur: 9 },
  'Kenya': { indicatif: '+254', longueur: 9 },
  'Nigéria': { indicatif: '+234', longueur: 10 },
  'Ghana': { indicatif: '+233', longueur: 9 },
  'Éthiopie': { indicatif: '+251', longueur: 9 },
  'Égypte': { indicatif: '+20', longueur: 10 },
  'Inde': { indicatif: '+91', longueur: 10 },
  'Chine': { indicatif: '+86', longueur: 11 },
  'Mexique': { indicatif: '+52', longueur: 10 },
  'Allemagne': { indicatif: '+49', longueur: 10 },
  'Espagne': { indicatif: '+34', longueur: 9 },
  'Italie': { indicatif: '+39', longueur: 10 },
  'Royaume-Uni': { indicatif: '+44', longueur: 10 },
  'Pays-Bas': { indicatif: '+31', longueur: 9 },
  'Portugal': { indicatif: '+351', longueur: 9 }
  };

  paysKeys: string[] = Object.keys(this.paysIndicatifs);

  
    constructor(
        private router: Router,
        private fb: FormBuilder,
        private entrepriseClientService: EntrepriseClientService,
    ) {}
  
    ngOnInit(): void {
      this.initializeForm();
      
    }
  
    ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }

    // Ajoutez cette méthode
    resetForm(): void {
      this.entrepriseClientForm.reset({
        pays: '' // Réinitialisez le champ pays
      });
      this.errorMessageApi = '';
      this.successMessage = '';
      this.entrepriseIndicatif = '';
      this.entrepriseMaxPhoneLength = 0;
    }
  
    // Ajouter ces méthodes
    onEntreprisePaysChange(event: any): void {
      const paysSelectionne = event.target.value as string;
      const paysInfo = this.paysIndicatifs[paysSelectionne];
      if (!paysInfo) return;
    
      this.entrepriseIndicatif    = paysInfo.indicatif;
      this.entrepriseMaxPhoneLength = paysInfo.longueur;
    
      const ctrl = this.entrepriseClientForm.get('telephone')!;
      if (!ctrl.value?.startsWith(this.entrepriseIndicatif)) {
        ctrl.setValue(this.entrepriseIndicatif);
      }
      this.updatePhoneValidator(paysInfo.longueur);
    }
  
    // Méthode de mise à jour du validateur
    private updatePhoneValidator(longueur: number): void {
      const ctrl = this.entrepriseClientForm.get('telephone')!;
      const regex = new RegExp(`^\\${this.entrepriseIndicatif.trim()}\\s\\d{${longueur}}$`);
      ctrl.setValidators([Validators.required, Validators.pattern(regex)]);
      ctrl.updateValueAndValidity();
    }
    
  
    // Formatage "en direct" du numéro
    formatEntreprisePhoneNumber(): void {
      const ctrl = this.entrepriseClientForm.get('telephone')!;
      let valeur = ctrl.value as string;
    
      if (!valeur.startsWith(this.entrepriseIndicatif)) {
        ctrl.setValue(this.entrepriseIndicatif);
        return;
      }
    
      // Retirer tout sauf les chiffres après l’indicatif
      const chiffres = valeur.replace(this.entrepriseIndicatif, '').replace(/\D/g, '');
    
      // Reformater avec espace conservé
      const numeroFormate = `${this.entrepriseIndicatif}${chiffres}`.slice(0, this.entrepriseIndicatif.length + this.entrepriseMaxPhoneLength);
      ctrl.setValue(numeroFormate, { emitEvent: false });
    }
    
  
    private initializeForm(): void {
      this.entrepriseClientForm = this.fb.group({
        nom: ['', [Validators.required, Validators.minLength(2)]],
        adresse: [''],
        email: ['', [Validators.email]],
        telephone: [''],
        pays: [''],
        siege: [''],
        secteur: ['']
      });
    }
  
    ajouterEntrepriseClient(): void {
      this.errorMessageApi = '';
      this.successMessage = '';

      if (this.entrepriseClientForm.invalid) {
        this.markAllAsTouched();
        return;
      }

      this.isSubmitting = true;
      const entrepriseClient = this.entrepriseClientForm.value;

      this.entrepriseClientService.addEntrepriseClient(entrepriseClient)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            this.successMessage = 'Entreprise ajoutée avec succès!';
            this.isSubmitting = false;

            // Créer un objet Entreprise à partir des données du formulaire et de la réponse
            const newEntreprise = {
              id: response.id || response.id, // Ajustez selon la structure de la réponse
              nom: entrepriseClient.nom,
              adresse: entrepriseClient.adresse,
              email: entrepriseClient.email,
              telephone: entrepriseClient.telephone,
              pays: entrepriseClient.pays,
              siege: entrepriseClient.siege,
              secteur: entrepriseClient.secteur,
              // Ajoutez d'autres propriétés si nécessaire
            };

            // Émettre l'événement avec la nouvelle entreprise
            this.entrepriseAjoute.emit(newEntreprise);
            this.resetForm();

            this.entrepriseClientForm.reset();
            this.closeForm();
          },
          error: (err) => {
            this.errorMessageApi = err.error?.error || err.message || 'Erreur lors de l\'ajout de l\'entreprise';
            this.isSubmitting = false;
          },
        });
    }
  
  private markAllAsTouched(): void {
    Object.values(this.entrepriseClientForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
  
    // Annuler et revenir à la liste

  closeForm(): void {
    this.close.emit();
  }
  
  // Méthode utilitaire pour marquer tous les champs comme touchés
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

}
