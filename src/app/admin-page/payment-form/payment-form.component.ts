import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, Subscription } from 'rxjs';
import { ModuleService } from '../SERVICES/Module-Service';
import { ModulePaiementModel } from '../MODELS/module-paiement-model';
import { Module } from '../MODELS/Module-model'; // Import ajouté
import { CommonModule } from '@angular/common';
import { CustomNumberPipe } from '../MODELS/customNumberPipe';

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
  paymentForm!: FormGroup;
  planType: string = '';
  planDetails: any = null;
  isLoading = false;
  private subscription: Subscription = new Subscription();
  errorMessage: string = '';
  successMessage = '';
  isSubmitting = false;
  allSucceeded = true;

  paymentError: string | null = null;
  private activationCounter = 0; // Ajouté
  private totalModules = 0; // Ajouté

  cardNumberDisplay: string = '•••• •••• •••• ••••';
  cardExpiryDisplay: string = '••/••';
  cardNameDisplay: string = 'NOM TITULAIRE';
  cardCvcDisplay: string = '•••';
  cardFlipped: boolean = false;

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
  ) {}

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      nomModule: ['', Validators.required],
      dureeMois: [0, Validators.required],
      numeroCarte: ['', [Validators.required, Validators.pattern(/^[\d\s]{16,19}$/)]],
      dateExpiration: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvc: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
      nomCompletProprietaire: ['', Validators.required],
      emailProprietaireCarte: ['', [Validators.required, Validators.email]],
      pays: ['ML', Validators.required],
      adresse: ['', Validators.required],
      ville: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });

    this.route.paramMap
      .pipe(distinctUntilChanged((prev, curr) => prev.get('plan') === curr.get('plan')))
      .subscribe(params => {
        this.planType = this.route.snapshot.paramMap.get('plan') || '';
        this.resetPlanDetails();
        this.loadPlanDetails();
      });
  }

  resetPlanDetails() {
    this.planDetails = null;
    // this.isLoading = true;
    this.cardPreview = {};
    
    if (this.paymentForm) {
      this.paymentForm.reset({
        pays: 'ML',
        acceptTerms: false
      });
    }
    
    this.cdr.detectChanges();
    
    this.cardNumberDisplay = '•••• •••• •••• ••••';
    this.cardExpiryDisplay = '••/••';
    this.cardNameDisplay = 'NOM TITULAIRE';
    this.cardCvcDisplay = '•••';
    this.cardFlipped = false;
  }

  loadPlanDetails() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.moduleService.getModulesEntreprise().subscribe({
      next: (modules: Module[]) => {
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
        }

        this.planDetails = {
          name,
          duration,
          pricePerModule: paidModules,
          subtotal,
          taxes: 0,
          total: subtotal
        };

        if (this.paymentForm) {
          this.paymentForm.patchValue({
            nomModule: this.planType,
            dureeMois: this.planType === 'TCHAKEDA_PLUS' ? 3 : 12
          });
        }

        // this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading modules', error);
        // this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }


  formatExpDate(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    
    if (value.length > 4) value = value.substring(0, 4);
    if (value.length > 2) value = value.replace(/^(\d{2})/, '$1/');
    
    this.paymentForm.get('dateExpiration')?.setValue(value, { emitEvent: false });
    this.cardExpiryDisplay = value || '••/••';
  }

  // Ajoutez cette nouvelle méthode pour le nom
  formatCardHolderName(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.cardNameDisplay = value.toUpperCase() || 'NOM TITULAIRE';
  }

  // Ajoutez cette méthode pour le CVC
  onCvcInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    if (value.length > 4) value = value.substring(0, 4);
    this.cardCvcDisplay = value || '•••';
  }

  // Ajoutez cette méthode pour retourner la carte
  flipCard(flip: boolean): void {
    this.cardFlipped = flip;
  }

  onSubmit() {
    if (!this.paymentForm || this.paymentForm.invalid || !this.planDetails) return;
    
    // this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';
    this.activationCounter = 0;
    this.allSucceeded = true;
    this.isLoading = true;

    const formData = this.paymentForm.value;
    const modulesToActivate = this.planDetails.pricePerModule.map((mod: any) => mod.nom);
    this.totalModules = modulesToActivate.length;

    setTimeout(() => {
      modulesToActivate.forEach((moduleName: string) => {
        const demande: ModulePaiementModel = {
            nomModule: moduleName,
            dureeMois: formData.dureeMois,
            numeroCarte: formData.numeroCarte.replace(/\s/g, ''),
            cvc: formData.cvc,
            dateExpiration: formData.dateExpiration.replace('/', ''),
            nomCompletProprietaire: formData.nomCompletProprietaire,
            emailProprietaireCarte: formData.emailProprietaireCarte,
            pays: formData.pays,
            adresse: formData.adresse,
            ville: formData.ville
          };
        
        this.moduleService.activerModule(demande).subscribe({
          next: (response: string) => {
            this.activationCounter++;
            this.successMessage = response;
            this.checkIfAllDone();
            this.isLoading = false;
          },
          error: (err) => {
            this.activationCounter++;
            this.errorMessage = err.message; 
            this.allSucceeded = false;
            this.checkIfAllDone();
            this.isLoading = false;
          }
        });
      });
    }, 3000);
  }

  // Ajoutez cette nouvelle méthode
  private checkIfAllDone() {
    if (this.activationCounter === this.totalModules) {
      setTimeout(() => {
        // this.isSubmitting = false;
        
        if (this.allSucceeded) {
          // Réinitialiser le formulaire
          this.paymentForm.reset({
            pays: 'ML',
            acceptTerms: false
          });
          
          // Réappliquer les valeurs du plan
          if (this.planDetails) {
            this.paymentForm.patchValue({
              nomModule: this.planType,
              dureeMois: this.planType === 'TCHAKEDA_PLUS' ? 3 : 12
            });
          }
          
          this.cardPreview = {};
          this.successMessage = ''; // Effacer le message de succès

          this.cardNumberDisplay = '•••• •••• •••• ••••';
          this.cardExpiryDisplay = '••/••';
          this.cardNameDisplay = 'NOM TITULAIRE';
          this.cardCvcDisplay = '•••';
          this.cardFlipped = false;
        }
      }, 3000);
    }
  }

  private handleError(err: any) {
    console.error('Payment error', err);
    
    if (err.error instanceof ErrorEvent) {
      // Erreur client
      this.errorMessage = err.error.message;
    } else {
      // Erreur serveur
      this.errorMessage = this.getUserFriendlyError(err);
    }
    
    // Effacer le message après 5 secondes
    setTimeout(() => {
      this.errorMessage = ''; // Utiliser une chaîne vide au lieu de null
    }, 5000);
  }

  private getUserFriendlyError(error: any): string {
    if (error.status === 402) {
      return 'Paiement refusé. Vérifiez vos informations bancaires.';
    } else if (error.status === 400) {
      return 'Données de paiement invalides.';
    } else if (error.status === 403) {
      return 'Action non autorisée. Seuls les administrateurs peuvent activer des modules.';
    } else if (error.status === 404) {
      return 'Module non trouvée.';
    } else if (error.status === 500) {
      return 'Erreur interne du serveur. Veuillez réessayer plus tard.';
    }
    return 'Une erreur inattendue est survenue. Veuillez réessayer.';
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

cardType: string = 'inconnue';


formatCardNumber(event: Event): void {
  const input = event.target as HTMLInputElement;
  let value = input.value.replace(/\D/g, '');

  if (value.length > 16) value = value.substring(0, 16);

  const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');

  this.paymentForm.get('numeroCarte')?.setValue(formattedValue, { emitEvent: false });

  this.cardNumberDisplay = formattedValue || '•••• •••• •••• ••••';

  this.cardType = this.detectCardType(value);
}

detectCardType(cardNumber: string): string {
  if (/^4/.test(cardNumber)) return 'visa';
  if (/^5[1-5]/.test(cardNumber) || /^2(2[2-9]|[3-6][0-9]|7[01]|720)/.test(cardNumber)) return 'mastercard';
  if (/^3[47]/.test(cardNumber)) return 'amex';
  if (/^6(?:011|5)/.test(cardNumber)) return 'discover';
  return 'inconnue';
}



}