import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, Subscription } from 'rxjs';
import { ModuleService } from '../SERVICES/Module-Service';
import { CustomNumberPipe } from '../MODELS/customNumberPipe';
import { CommonModule } from '@angular/common';

interface Country {
  code: string;
  name: string;
}

@Component({
  selector: 'app-payment-form',
   imports: [FormsModule, CommonModule, ReactiveFormsModule, CustomNumberPipe],
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit, OnDestroy {
  paymentForm: FormGroup;
  planType: string = '';
  planDetails: any = null;
  isLoading = true;
  private subscription: Subscription = new Subscription();

  countries: Country[] = [
    { code: 'ML', name: 'Mali' },
    { code: 'CI', name: 'Côte d\'Ivoire' },
    { code: 'SN', name: 'Sénégal' },
  ];

  cardPreview: any = {};

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private moduleService: ModuleService,
    private cdr: ChangeDetectorRef
  ) {
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

  ngOnInit(): void {
    this.route.paramMap
      .pipe(distinctUntilChanged((prev, curr) => prev.get('plan') === curr.get('plan')))
      .subscribe(params => {
        // Utilisation de snapshot pour une récupération fiable
        this.planType = this.route.snapshot.paramMap.get('plan') || '';
        console.log('Plan type from snapshot:', this.planType);
        this.resetPlanDetails();
        this.loadPlanDetails();
      });
  }

  resetPlanDetails() {
    this.planDetails = null;
    this.isLoading = true;
    this.cardPreview = {};
    this.paymentForm.reset({
      country: 'ML',
      saveInfo: false,
      acceptTerms: false
    });
    this.cdr.detectChanges();
  }

  loadPlanDetails() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.moduleService.getModulesEntreprise().subscribe({
      next: (modules) => {
        console.log('Modules reçus:', modules);
        
        const paidModules = modules.filter(m => m.payant);
        const totalMensuel = paidModules.reduce((sum, module) => sum + (module.prix || 0), 0);
        
        let name = '';
        let duration = '';
        let subtotal = 0;
        
        if (this.planType === 'TCHAKEDA_PLUS') {
          name = 'Tchakeda Plus';
          duration = '3 mois';
          subtotal = totalMensuel * 3;
        } else if (this.planType === 'PRO') {
          name = 'Pro';
          duration = '1 an';
          subtotal = totalMensuel * 12 * 0.9;
        } else {
          console.error('Type de plan inconnu:', this.planType);
        }

        this.planDetails = {
          name,
          duration,
          pricePerModule: paidModules,
          subtotal,
          taxes: 0,
          total: subtotal
        };

        console.log('Plan details:', this.planDetails);
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading modules', error);
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    
    if (value.length > 16) value = value.substring(0, 16);
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
        cardNumber: this.paymentForm.value.cardNumber.replace(/\s/g, ''),
        planType: this.planType,
        planDetails: this.planDetails
      };
      
      console.log('Payment data:', formData);
      // Envoyer au backend
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}