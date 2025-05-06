import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FactureService } from '../../SERVICES/facture.service';
import { FournisseurService } from '../../SERVICES/fournisseur-service';

@Component({
  selector: 'app-add-fournisseur',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-fournisseur.component.html',
  styleUrl: './add-fournisseur.component.scss'
})
export class AddFournisseurComponent {
  fournisseurForm!: FormGroup;
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  errorMessageApi = '';
  countryDialCodes = {
    'Mali': '+223',
    'Sénégal': '+221',
    'Côte d\'Ivoire': '+225'
  };

  constructor(
    private fb: FormBuilder,
    private fournisseurService: FournisseurService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getInitForm();
  }

  getInitForm() {
    this.fournisseurForm = this.fb.group({
      nomComplet: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.email]],
      adresse: [''],
      pays: [''],
      telephone: [''],
      ville: ['']
    });
  }

  onPaysChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    const pays = select.value;
    const dialCode = this.countryDialCodes[pays as keyof typeof this.countryDialCodes];
    
    if (dialCode) {
      const currentPhone = this.fournisseurForm.get('telephone')?.value || '';
      if (!currentPhone.startsWith(dialCode)) {
        this.fournisseurForm.get('telephone')?.setValue(dialCode);
      }
    }
  }

  formatPhoneNumber() {
    const ctrl = this.fournisseurForm.get('telephone')!;
    let raw = ctrl.value as string;
    const pays = this.fournisseurForm.get('pays')?.value;
    const dialCode = this.countryDialCodes[pays as keyof typeof this.countryDialCodes] || '';
  
    // 1) On retire le dialCode existant pour ne pas le dupliquer
    if (dialCode && raw.startsWith(dialCode)) {
      raw = raw.substring(dialCode.length);
    }
    // 2) On ne conserve que les chiffres
    const cleaned = raw.replace(/\D/g, '');
  
    // 3) On remet le dialCode + un espace + le bloc de chiffres
    const formatted = dialCode 
      ? `${dialCode} ${cleaned}` 
      : cleaned;
  
    // 4) On remet la valeur sans retrigger d'événement
    ctrl.setValue(formatted, { emitEvent: false });
  }
  
  ajouterFournisseur() {
    if (this.fournisseurForm.invalid) {
      this.fournisseurForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const fournisseurData = {
      ...this.fournisseurForm.value,
      telephone: this.fournisseurForm.value.telephone.replace(/\s/g, '')
    };

    this.fournisseurService.addFournisseur(fournisseurData).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.successMessage = 'Fournisseur ajouté avec succès!';
        setTimeout(() => this.router.navigate(['/fournisseurs']), 2000);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.error || 'Une erreur est survenue';
      }
    });
  }

  goToFournisseur() {
    this.router.navigate(['/fournisseurs']);
  }

}
