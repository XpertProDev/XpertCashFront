import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/admin-page/SERVICES/users.service';
import { AuthService } from 'src/app/admin-page/SERVICES/auth.service';
import { HeaderNavComponent } from 'src/app/admin-page/Navigation/header-nav/header-nav.component';
import { CommonModule } from '@angular/common';

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

  // Propriétés pour la popup (utilisées uniquement en cas d'erreur)
  showPopup: boolean = false;
  popupTitle: string = '';
  popupMessage: string = '';
  popupImage: string = '';
  popupType: 'success' | 'error' = 'success';

  isLoading: boolean = false;

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
  }

  goToInscription() {
    this.router.navigate(['/inscription']);
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
            // Connexion réussie : pas de popup, navigation directe
            this.router.navigate(['/analytics']);
          } else {
            // Si la réponse ne contient pas de token, on affiche l'erreur
            this.errorMessage = response.error || "Erreur de connexion, veuillez réessayer.";
            // Affichage de la popup en cas d'erreur
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
          // Affichage de la popup en cas d'erreur
          this.openPopup("❌ Oups, une erreur !", message, "error");
        }
      });
    }, 2000);
  }
  
  get f() { return this.loginForm.controls; }
}
