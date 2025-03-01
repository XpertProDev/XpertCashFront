import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/admin-page/MODELS/utilisateur.model';
import { HeaderNavComponent } from 'src/app/admin-page/Navigation/header-nav/header-nav.component';
import { SharedDataService } from 'src/app/admin-page/SERVICES/shared-data.service';
import { UsersService } from 'src/app/admin-page/SERVICES/users.service';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderNavComponent],
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  registerForm!: FormGroup;
  entrepriseName: string = '';
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
    private router: Router,
    private sharedDataService: SharedDataService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nomComplet: ['', Validators.required],
      nomEntreprise: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pays: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(8)]], 
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      nomBoutique: ['']
    }, { validator: this.passwordMatchValidator });
  }

  // Validation personnalisée pour vérifier que "password" et "confirmPassword" correspondent
  passwordMatchValidator(form: AbstractControl) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
    return null;
  }

  // Mise à jour dynamique du nom d'entreprise
  updateEntrepriseName(event: Event): void {
    this.entrepriseName = (event.target as HTMLInputElement).value.toLowerCase();
    this.registerForm.get('nomEntreprise')?.setValue(this.entrepriseName);
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
      this.router.navigate(['/connexion']);
    }
  }

  submitForm(): void {
    if (this.registerForm.invalid) {
      this.errorMessage = "Veuillez vérifier les informations saisies.";
      return;
    }
  
    this.isLoading = true;
    // Exclure 'confirmPassword' des données envoyées
    const { confirmPassword, ...userData } = this.registerForm.value;
  
    // On suppose que l'interface Users correspond aux champs attendus par le back-end
    const user = userData;
  
    setTimeout(() => { // Simuler un délai de 2 secondes
      this.usersService.registerUser(user).subscribe({
        next: (response: any) => {
          console.log("Réponse API :", response); 
          this.isLoading = false;
  
          if (response && response.message) {
            // Mettre à jour le service partagé avec le nom de la boutique reçu (response.nomBoutique)
            if(response.nomBoutique) {
              console.log("Boutique dans la réponse :", response.nomBoutique);
              this.sharedDataService.setBoutiqueName(response.nomBoutique);
            } else {
              console.error("La réponse ne contient pas 'nomBoutique'.");
            }
            this.openPopup("Inscription réussie !", response.message, 'success');
          } else {
            this.errorMessage = response.error || "Erreur d'inscription, veuillez vérifier les champs.";
            this.openPopup("Erreur d'inscription", this.errorMessage, 'error');
          }
        },
        error: (error) => {
          this.isLoading = false;
          console.error("Erreur complète :", error);
          let message = "Une erreur est survenue lors de l'inscription.";
  
          if (error.status === 400 || error.status === 500) {
            if (typeof error.error === "string") {
              const match = error.error.match(/interpolatedMessage='([^']+)'/);
              message = match ? match[1] : error.error;
            } else if (error.error?.error) {
              message = error.error.error;
            }
          }
  
          this.openPopup("❌ Oups, une erreur !", message, "error");
        }
      });
    }, 2000);
  }

  get f() { return this.registerForm.controls; }
}
