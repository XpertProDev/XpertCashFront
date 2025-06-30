import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../SERVICES/client-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { EntrepriseClientService } from '../../SERVICES/entreprise-clients-service';

@Component({
  selector: 'app-add-entreprise-client',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-entreprise-client.component.html',
  styleUrl: './add-entreprise-client.component.scss'
})
export class AddEntrepriseClientComponent implements OnInit, OnDestroy  {
  entrepriseClientForm!: FormGroup;
  errorMessageApi: string = '';
  errorMessage: string = '';
  successMessage: string = '';
  isSubmitting = false;
  private destroy$ = new Subject<void>();
  entrepriseIndicatif: string = '';
  entrepriseMaxPhoneLength: number = 0;

  paysIndicatifs: { [key: string]: { indicatif: string, longueur: number } } = {
    'Mali': { indicatif: '+223 ', longueur: 8 },
    'Sénégal': { indicatif: '+221 ', longueur: 9 },
    'Côte d\'Ivoire': { indicatif: '+225 ', longueur: 10 }
  };

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
          this.entrepriseClientForm.reset();
          setTimeout(() => this.router.navigate(['/clients']), 2000);
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
  goToClients() {
    this.router.navigate(['/clients']);
  }

  navigateBack() {
    this.router.navigate(['/clients'])
  }


}
