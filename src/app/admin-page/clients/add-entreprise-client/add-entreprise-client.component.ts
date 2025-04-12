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
  successMessage: string = '';
  isSubmitting = false;
  private destroy$ = new Subject<void>();

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

  private initializeForm(): void {
    this.entrepriseClientForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      adresse: [''],
      email: ['', [Validators.email]],
      telephone: ['', [Validators.pattern(/^[0-9]+$/)]]
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
          this.errorMessageApi = err.message || 'Erreur lors de l\'ajout de l\'entreprise';
          this.isSubmitting = false;
        },
        complete: () => {
          this.isSubmitting = false;
        }
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
