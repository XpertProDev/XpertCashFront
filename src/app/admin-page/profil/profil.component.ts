import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../SERVICES/auth.service';
import { UpdateUserRequest } from '../MODELS/profil.model';
import { ProfilService } from '../SERVICES/profil.service';
import { CommonModule } from '@angular/common';
import { UsersService } from '../SERVICES/users.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profil',
  imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
  ],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent  implements OnInit{
  passwordForm!: FormGroup;
  nomBoutiqueForm!: FormGroup;
  isLoading = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;
  userId!: number;

  userName: string = '';
  nomEntreprise: string = '';
  email: string = '';
  phone: string = '';
  roleType: string = '';
  pays: string = '';
  nomBoutique: string = '';
  flagPays: string = '';
  isNomBoutiqueFormVisible = false;

  paysFlags: { [key: string]: string } = {
    'Mali': '🇲🇱',
    'Sénégal': '🇸🇳',
    'Côte d\'Ivoire': '🇨🇮',
    'Guinée': '🇬🇳',
    'Burkina Faso': '🇧🇫',
    'Togo': '🇹🇬',
    'Niger': '🇳🇪',
    'Bénin': '🇧🇯',
    'Mauritanie': '🇲🇷',
    'Gabon': '🇬🇦',
    'Cameroun': '🇨🇲',
   
  };

  // Methode de eye
  showCurrentPassword: boolean = false;
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;

  // Methode pour cadre From
  isPasswordFormVisible = false;

  

  toggleCurrentPasswordVisibility() {
    this.showCurrentPassword = !this.showCurrentPassword;
  }
  
  toggleNewPasswordVisibility() {
    this.showNewPassword = !this.showNewPassword;
  }
  
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  togglePasswordForm() {
    this.isPasswordFormVisible = !this.isPasswordFormVisible;
  }
  

  constructor(
    private fb: FormBuilder,
    private profilService: ProfilService,
    private usersService: UsersService,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getConnectedUserId();
    this.getUserInfo();
  }

  private initForm(): void {
    this.passwordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });

    this.nomBoutiqueForm = this.fb.group({
      nomBoutique: ['', [Validators.required]]
    });
  }

  // Récupère l'id de l'utilisateur connecté via UsersService ou le localStorage
  private getConnectedUserId(): void {
    this.usersService.getUserInfo().subscribe({
      next: (userInfo) => {
        if (userInfo && (userInfo as any).id) {
          this.userId = (userInfo as any).id;
        } else {
          const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
          if (storedUser && storedUser.id) {
            this.userId = storedUser.id;
          } else {
            this.errorMessage = "Utilisateur non authentifié.";
          }
        }
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur:", err);
        this.errorMessage = "Impossible de récupérer l'utilisateur connecté.";
      }
    });
  }

  get currentPassword() {
    return this.passwordForm.get('currentPassword');
  }
  
  get newPassword() {
    return this.passwordForm.get('newPassword');
  }
  
  get confirmPassword() {
    return this.passwordForm.get('confirmPassword');
  }

  get nomBoutiqueControl() {
    return this.nomBoutiqueForm.get('nomBoutique');
  }

  // Validator pour vérifier que les deux nouveaux mots de passe correspondent
  private passwordMatchValidator(form: FormGroup): ValidationErrors | null {
    const newPassword = form.get('newPassword')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { mismatch: true };
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit(): void {
    // Réinitialise les messages
    this.errorMessage = null;
    this.successMessage = null;
  
    // Vérifie la validité du formulaire
    if (this.passwordForm.invalid) {
      this.errorMessage = "Veuillez remplir tous les champs correctement";
      return;
    }
  
    const { currentPassword, newPassword, confirmPassword } = this.passwordForm.value;
  
    // Double vérification de la correspondance des mots de passe
    if (newPassword !== confirmPassword) {
      this.errorMessage = "Les nouveaux mots de passe ne correspondent pas";
      return;
    }
  
    // Active l'état de chargement
    // this.isLoading = true;
  
    // Prépare la requête
    const request: UpdateUserRequest = {
      password: currentPassword,
      newPassword: newPassword
    };
  
    // Appel au service
    this.profilService.updatePassword(this.userId, request).subscribe({
      next: (response) => {
        // Si le serveur retourne du texte, le traiter ici
        this.successMessage = response.includes('succès') ? response : "Mot de passe modifié !";
        this.isPasswordFormVisible = false;
        this.passwordForm.reset();
        setTimeout(() => this.successMessage = null, 10000);
      },
      error: (error) => {
        // Gérer les erreurs de parsing ou autres
        if (error instanceof HttpErrorResponse) {
          this.errorMessage = error.error.message || error.error || "Erreur inconnue";
        }
        setTimeout(() => this.errorMessage = null, 10000);
      },
      // complete: () => {
      //   this.isLoading = false;
      // }
    });
  }

  

  getUserInfo(): void {
    this.usersService.getUserInfo().subscribe({
      next: (user) => {
        this.userName = user.nomComplet;
        this.nomEntreprise = user.nomEntreprise
        this.email = user.email;
        this.phone = user.phone;
        this.roleType = user.roleType;
        this.pays = user.pays;
        this.nomBoutique = user.boutiques?.length ? user.boutiques[0].nomBoutique : 'Aucune boutique';
        this.flagPays = this.paysFlags[this.pays] || '';
        console.log("Infos utilisateur récupérées :", user);
        
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }
  
}
