import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/admin-page/SERVICES/users.service';
import { AuthService } from 'src/app/admin-page/SERVICES/auth.service';
import { HeaderNavComponent } from 'src/app/admin-page/Navigation/header-nav/header-nav.component';
import { CommonModule } from '@angular/common';

export interface ForgotPasswordResponse {
  message: string;
}

@Component({
  selector: 'app-connexion-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderNavComponent],
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss']
})
export class ConnexionPageComponent {
  loginForm!: FormGroup;
  errorMessage: string = '';
  isResetPassword: boolean = false;
  resetForm!: FormGroup;

  // Propriétés pour la popup (utilisées uniquement en cas d'erreur)
  showPopup: boolean = false;
  popupTitle: string = '';
  popupMessage: string = '';
  popupImage: string = '';
  popupType: 'success' | 'error' = 'success';

  isLoading: boolean = false;
  resetSuccessMessage: string | null = null;
  resetErrorMessage: string | null = null;

  showOtpVerification: boolean = false;
  otpForm!: FormGroup;
  resetEmailForOtp: string = '';
  otpErrorMessage: string = '';
  otpSuccessMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.resetForm = this.fb.group({
      resetEmail: ['', [Validators.required, Validators.email]]
    });

    this.initOptForm();
    
  }

  initOptForm() {
    this.otpForm = this.fb.group({
    digit1: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
    digit2: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
    digit3: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
    digit4: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
    digit5: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
    digit6: ['', [Validators.required, Validators.pattern(/[0-9]/)]]
  });
  }

  // Getter pour accéder facilement aux contrôles
  get rf() { return this.resetForm.controls; }

  goToInscription() {
    this.router.navigate(['/inscription']);
  }

  // Méthode pour basculer entre les vues
  toggleResetPassword() {
    this.isResetPassword = !this.isResetPassword;
  }

  openPopup(title: string, message: string, type: 'success' | 'error'): void {
    this.popupTitle = title;
    this.popupMessage = message;
    this.popupType = type;
    this.popupImage = type === 'success'
      ? 'assets/img/succcccc.png'
      : 'assets/img/error.png';
    this.showPopup = true;
  }

  closePopup(): void {
    this.showPopup = false;
  }

  submitForm(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = "Veuillez vérifier les informations saisies.";
      return;
    }
  
    this.isLoading = true;
    const credentials = this.loginForm.value;
  
    setTimeout(() => { 
      this.usersService.connexionUser(credentials).subscribe({
        next: (response) => {
          this.isLoading = false;
  
          if (response.token) {
            console.log("Token généré :", response.token);
            this.authService.saveToken(response.token);
            this.router.navigate(['/analytics']);
          } else {
            this.errorMessage = response.error || "Erreur de connexion, veuillez réessayer.";
            this.openPopup("Erreur de connexion", this.errorMessage, 'error');
          }
        },
        error: (error) => {
          this.isLoading = false;
          console.log("Erreur complète :", error);
          console.log("Réponse API :", error.error);
  
          let message = "Une erreur est survenue lors de la connexion.";
          if (error.status === 400 || error.status === 401) {
            if (typeof error.error === "string") {
              message = error.error;
            } else if (error.error?.error) {
              message = error.error.error;
            }
          }
          this.openPopup("❌ Oups, une erreur !", message, "error");
        }
      });
    }, 1000);
  }
  
  get f() { return this.loginForm.controls; }

  // Méthode de soumission du formulaire de réinitialisation

  submitResetForm(): void {
    this.resetSuccessMessage = null;
    this.resetErrorMessage = null;

    if (this.resetForm.invalid) {
      this.resetErrorMessage = 'Veuillez saisir une adresse email valide.';
      return;
    }

    const email = this.resetForm.get('resetEmail')?.value;
    this.isLoading = true;

    this.usersService.forgotPassword(email).subscribe({
      next: (response) => {
        this.isLoading = false;
        // this.resetSuccessMessage = `Un lien de réinitialisation a été envoyé à ${email}. Vérifiez votre boîte de réception.`;
        this.resetSuccessMessage = `Votre code de vérification a été envoyé par e-mail.`;
        this.resetEmailForOtp = email; 
        this.resetForm.reset();

        setTimeout(() => {
          this.isResetPassword = false; // Masquer la vue réinitialisation
          this.showOtpVerification = true; // Afficher la vue OTP
          this.resetSuccessMessage = null; // Effacer le message
        }, 3000);
      },
      error: (error) => {
        this.isLoading = false;
        
        if (error.status === 404) {
          this.resetErrorMessage = "Une erreur s'est produite. Veuillez réessayer plus tard.";
        } else {
          this.resetErrorMessage = "Aucun compte n'est associé à cet email.";
          // this.resetErrorMessage = "Une erreur s'est produite. Veuillez réessayer plus tard.";
        }
      }
    });
  }

  submitOtpForm(): void {
    if (this.otpForm.invalid) {
      this.otpErrorMessage = "Veuillez saisir un code complet à 6 chiffres";
      return;
    }

    this.isLoading = true;
    this.otpErrorMessage = '';
    
    // Concaténer les chiffres
    const code = Object.values(this.otpForm.value).join('');
    
    // Ici vous appelleriez normalement votre service de vérification OTP
    // this.usersService.verifyOtp(this.resetEmailForOtp, code).subscribe(...)
    
    // Simulation de succès
    setTimeout(() => {
      this.isLoading = false;
      this.otpSuccessMessage = "Votre email a été vérifié avec succès!";
      this.otpForm.reset();
      
      // Redirection après 3 secondes
      setTimeout(() => {
        this.router.navigate(['/connexion']);
      }, 3000);
    }, 1500);
  }

  // Ajouter pour la navigation entre les vues
  goBackToReset() {
    this.showOtpVerification = false;
    this.isResetPassword = true;
    this.otpErrorMessage = '';
    this.otpSuccessMessage = '';
    this.resetSuccessMessage = null;
  }

  goToLogin(): void {
    this.isResetPassword = false;
    this.showOtpVerification = false;
    this.resetSuccessMessage = null;
    this.resetErrorMessage = null;
    this.otpErrorMessage = '';
    this.otpSuccessMessage = '';
  }

  // Gestion du focus automatique
  onOtpInput(index: number, event: any) {
    const value = event.target.value;
    if (value && index < 6) {
      const nextInput = document.querySelector(`[formControlName="digit${index + 1}"]`) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }
  
}
