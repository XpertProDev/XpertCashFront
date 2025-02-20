// connexion-page.component.ts
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

  // Propriétés pour la popup
  showPopup: boolean = false;
  popupTitle: string = '';
  popupMessage: string = '';
  popupImage: string = '';
  popupType: 'success' | 'error' = 'success';
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private authService: AuthService, // Injection du AuthService
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
    if (this.popupType === 'success') {
      this.router.navigate(['/produit']);
    }
  }

  submitForm(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = "Veuillez vérifier les informations saisies.";
      return;
    }
  
    this.isLoading = true; // Début du chargement
    const credentials = this.loginForm.value;
  
    setTimeout(() => { // ici on retarde l'exécution de la requête pour 2 secondes
      this.usersService.connexionUser(credentials).subscribe({
        next: (response) => {
          this.isLoading = false; 
  
          if (response.token) {
            console.log("Token généré :", response.token);
            this.authService.saveToken(response.token);
  
            this.openPopup("Connexion réussie !", response.message ?? "Connexion réussie.", 'success');
  
            setTimeout(() => {
              this.router.navigate(['/produit']); 
            }, 1500);
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
    }, 2000); 
  }
  
  

  get f() { return this.loginForm.controls; }
}
