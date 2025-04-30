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
    'Mali': { indicatif: '+223', longueur: 8 },
    'Sénégal': { indicatif: '+221', longueur: 9 },
    'Côte d\'Ivoire': { indicatif: '+225', longueur: 10 }
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
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];

    if (paysInfo) {
      this.entrepriseIndicatif = `${paysInfo.indicatif} `;
      this.entrepriseMaxPhoneLength = this.entrepriseIndicatif.length + paysInfo.longueur;

      if (!this.entrepriseClientForm.get('telephone')?.value.startsWith(this.entrepriseIndicatif)) {
        this.entrepriseClientForm.get('telephone')?.setValue(this.entrepriseIndicatif);
      }

      this.updatePhoneValidator(paysInfo.longueur);
    }
  }

  private updatePhoneValidator(longueur: number): void {
    this.entrepriseClientForm.controls['telephone'].setValidators([
      Validators.required,
      Validators.pattern(`^\\${this.entrepriseIndicatif}\\d{${longueur}}$`)
    ]);
    this.entrepriseClientForm.controls['telephone'].updateValueAndValidity();
  }

  formatEntreprisePhoneNumber(): void {
    let valeur = this.entrepriseClientForm.get('telephone')?.value;
    
    if (!valeur.startsWith(this.entrepriseIndicatif)) {
      this.entrepriseClientForm.get('telephone')?.setValue(this.entrepriseIndicatif);
      return;
    }

    const chiffres = valeur.replace(this.entrepriseIndicatif, '').replace(/\D/g, '');
    const numeroFormate = this.entrepriseIndicatif + chiffres;
    this.entrepriseClientForm.get('telephone')?.setValue(
      numeroFormate.slice(0, this.entrepriseIndicatif.length + this.entrepriseMaxPhoneLength)
    );
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
}
