import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FournisseurService } from '../../SERVICES/fournisseur-service';

@Component({
  selector: 'app-detail-edit-fournisseur',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './detail-edit-fournisseur.component.html',
  styleUrl: './detail-edit-fournisseur.component.scss'
})
export class DetailEditFournisseurComponent {
  fournisseurEditForm!: FormGroup;
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
    this.fournisseurEditForm = this.fb.group({
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
      const currentPhone = this.fournisseurEditForm.get('telephone')?.value || '';
      if (!currentPhone.startsWith(dialCode)) {
        this.fournisseurEditForm.get('telephone')?.setValue(dialCode);
      }
    }
  }
  
  formatPhoneNumber() {
    let phone = this.fournisseurEditForm.get('telephone')?.value;
    const pays = this.fournisseurEditForm.get('pays')?.value;
    const dialCode = this.countryDialCodes[pays as keyof typeof this.countryDialCodes];

    if (dialCode && phone.startsWith(dialCode)) {
      phone = phone.substring(dialCode.length).replace(/\D/g, '');
      const formatted = phone.replace(/(\d{2})(?=\d)/g, '$1 ');
      this.fournisseurEditForm.get('telephone')?.setValue(dialCode + ' ' + formatted, { emitEvent: false });
    }
  }

  modifierFournisseur() {}

  goToFournisseur() {
    this.router.navigate(['/fournisseurs']);
  }

}
