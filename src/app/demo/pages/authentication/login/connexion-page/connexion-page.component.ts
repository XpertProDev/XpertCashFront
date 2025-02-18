import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/admin-page/MODELS/utilisateur.model';
import { UsersService } from 'src/app/admin-page/SERVICES/users.service';

@Component({
  selector: 'app-connexion-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './connexion-page.component.html',
  styleUrl: './connexion-page.component.scss'
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

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  // Ouvre la popup avec titre, message et type (success ou error)
  openPopup(title: string, message: string, type: 'success' | 'error'): void {
    this.popupTitle = title;
    this.popupMessage = message;
    this.popupType = type;
    // Choix de l'image en fonction du type
    if (type === 'success') {
      this.popupImage = 'assets/img/succcccc.png'; // Remplacez par le chemin de votre image de succès
    } else {
      this.popupImage = 'assets/img/error.png'; // Remplacez par le chemin de votre image d'erreur
    }
    this.showPopup = true;
  }

  // Ferme la popup et redirige si l'inscription a réussi
  closePopup(): void {
    this.showPopup = false;
    if (this.popupType === 'success') {
      this.router.navigate(['/accueilll']);
    }
  }

  submitForm(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = "Veuillez vérifier les informations saisies.";
      return;
    }
  
    // Récupérer les valeurs du formulaire
    const credentials = this.loginForm.value;
  
    this.usersService.ccc(credentials).subscribe({
      next: (response) => {
        if (response.token) {
          // ✅ Stocker le token dans le localStorage ou sessionStorage
          localStorage.setItem('authToken', response.token);
  
          // ✅ Ouvrir la popup de succès
          this.openPopup("Connexion réussie !", response.message ?? "Connexion réussie.", 'success');

  
          // ✅ Redirection après la fermeture de la popup
          setTimeout(() => {
            this.router.navigate(['/analytics']); // 🔄 Change "/dashboard" par ta page d'accueil après connexion
          }, 1500);
        } else {
          this.errorMessage = response.error || "Erreur de connexion, veuillez réessayer.";
          this.openPopup("Erreur de connexion", this.errorMessage, 'error');
        }
      },
      error: (error) => {
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
  }
  

  // submitForm(): void {
  //   if (this.loginForm.invalid) {
  //     this.errorMessage = "Veuillez vérifier les informations saisies.";
  //     return;
  //   }
  
  //   const credentials = this.loginForm.value;
  
  //   this.usersService.ccc(credentials).subscribe({
  //     next: (response) => {
  //       if (response && response.token) {
  //         // Stocker le token dans le localStorage ou sessionStorage
  //         localStorage.setItem('token', response.token);
  
  //         // Afficher la popup de succès
  //         this.openPopup("Connexion réussie !", "Bienvenue sur votre espace.", 'success');
  //       } else {
  //         this.errorMessage = response.error || "Erreur de connexion.";
  //         this.openPopup("Erreur de connexion", this.errorMessage, 'error');
  //       }
  //     },
  //     error: (error) => {
  //       console.log("Erreur complète :", error);
  //       console.log("Réponse API :", error.error);
  
  //       let message = "Une erreur est survenue lors de la connexion.";
  
  //       if (error.status === 400 || error.status === 401) {
  //         if (typeof error.error === "string") {
  //           // Extraction avancée du message d'erreur
  //           const match = error.error.match(/interpolatedMessage='([^']+)'/);
  //           message = match ? match[1] : error.error;
  //         } else if (error.error?.error) {
  //           message = error.error.error;
  //         }
  //       }
  
  //       this.openPopup("❌ Oups, une erreur !", message, "error");
  //     }
  //   });
  // }
  

  // Getter pour faciliter l'accès aux contrôles dans le template


  goToregister() {
    this.router.navigate(['/inscription']);
  }
  get f() { return this.loginForm.controls; }
}
