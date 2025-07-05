import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, Subscription } from 'rxjs';
import { ModuleService } from '../SERVICES/Module-Service';
import { CustomNumberPipe } from '../MODELS/customNumberPipe';
import { CommonModule } from '@angular/common';
import { ModulePaiementModel } from '../MODELS/module-paiement-model';

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

  isProcessing = false;
  paymentError: string | null = null;

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
      nomModule: [''],
      dureeMois: [''],
      numeroCarte: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      dateExpiration: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvc: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
      nomCompletProprietaire: ['', Validators.required],
      emailProprietaireCarte: ['', Validators.email],
      pays: ['ML', Validators.required],
      adresse: ['', Validators.required],
      ville: [''],
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

  // formatCardNumber(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   let value = input.value.replace(/\D/g, '');
    
  //   if (value.length > 16) value = value.substring(0, 16);
  //   value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
  //   this.paymentForm.get('cardNumber')?.setValue(value, { emitEvent: true });
  // }

  formatExpDate(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    
    if (value.length > 4) value = value.substring(0, 4);
    if (value.length > 2) value = value.replace(/^(\d{2})/, '$1/');
    this.paymentForm.get('expDate')?.setValue(value, { emitEvent: true });
  }

  onSubmit() {
    if (this.paymentForm.invalid || this.isProcessing) return;
    
    this.isProcessing = true;
    this.paymentError = null;

    const formData = this.paymentForm.value;
    const demande: ModulePaiementModel = {
      nomModule: this.planType,
      dureeMois: this.planType === 'TCHAKEDA_PLUS' ? 3 : 12,
      numeroCarte: formData.cardNumber.replace(/\s/g, ''),
      cvc: formData.cvc,
      dateExpiration: formData.expDate.replace('/', ''),
      nomCompletProprietaire: formData.cardName,
      emailProprietaireCarte: formData.email,
      pays: formData.country,
      adresse: `${formData.address1}${formData.address2 ? ', ' + formData.address2 : ''}`,
      ville: formData.city
    };

    this.moduleService.activerModule(demande).subscribe({
      next: (response) => {
        this.router.navigate(['/payment-success'], {
          state: { 
            transaction: response.referenceTransaction,
            amount: this.planDetails.total
          }
        });
      },
      error: (err) => {
        console.error('Payment error', err);
        this.isProcessing = false;
        this.paymentError = this.getUserFriendlyError(err);
      }
    });
  }

  private getUserFriendlyError(error: any): string {
    if (error.status === 402) {
      return 'Paiement refusé. Vérifiez vos informations bancaires.';
    } else if (error.status === 400) {
      return 'Données de paiement invalides.';
    } else if (error.status === 403) {
      return 'Action non autorisée. Seuls les administrateurs peuvent activer des modules.';
    }
    return 'Une erreur inattendue est survenue. Veuillez réessayer.';
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}