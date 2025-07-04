import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, startWith } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ModuleService } from '../SERVICES/Module-Service';
import { CustomNumberPipe } from '../MODELS/customNumberPipe';

interface Country {
  code: string;
  name: string;
}

@Component({
  selector: 'app-payment-form',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, CustomNumberPipe],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.scss'
})
export class PaymentFormComponent {
  paymentForm!: FormGroup;
  countries: Country[] = [
    { code: 'ML', name: 'Mali' },
    { code: 'CI', name: 'Côte d\'Ivoire' },
    { code: 'SN', name: 'Sénégal' },
    // ajoutez d'autres pays au besoin
  ];
  cardPreview: any = {};

  moduleCode: string = '';
  moduleName: string = '';
  modulePrice: number = 0;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private moduleService: ModuleService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.moduleCode = params['moduleCode'];
      this.loadModuleDetails();
    });

    this.intPaymentForm();
    

    // Suivi des changements pour la prévisualisation
    this.paymentForm.valueChanges.subscribe(val => {
      this.cardPreview = {
        number: val.cardNumber?.replace(/\s/g, ''),
        name: val.cardName,
        expiry: val.expDate
      };
    });
  }

  loadModuleDetails() {
    // Récupérer tous les modules et trouver celui correspondant au code
    this.moduleService.getModulesEntreprise().subscribe({
      next: (modules) => {
        const foundModule = modules.find(module => module.code === this.moduleCode);
        if (foundModule) {
          this.moduleName = foundModule.nom;
          this.modulePrice = foundModule.prix;
        }
      },
      error: (err) => console.error('Erreur chargement modules', err)
    });
  }

  intPaymentForm() {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvc: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
      cardName: ['', Validators.required],
      country: ['ML', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      saveInfo: [false],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    
    if (value.length > 16) value = value.substring(0, 16);
    
    // Formatage en groupes de 4
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    
    this.paymentForm.get('cardNumber')?.setValue(value, { emitEvent: true });
  }

  formatExpDate(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    
    if (value.length > 4) value = value.substring(0, 4);
    if (value.length > 2) value = value.replace(/^(\d{2})/, '$1/');
    
    this.paymentForm.get('expDate')?.setValue(value, { emitEvent: true });
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      const formData = {
        ...this.paymentForm.value,
        cardNumber: this.paymentForm.value.cardNumber.replace(/\s/g, '')
      };
      
      console.log('Données de paiement :', formData);
      // Envoyer au backend
    }
  }
}
