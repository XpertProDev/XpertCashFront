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
  nomCompletForm!: FormGroup;
  isLoading = false;
  errorMessage: string | null = null;
  successMessage: string | null = null;
  userId!: number;
  nomComplet: string = '';
  password: string = '';

  userName: string = '';
  nomEntreprise: string = '';
  email: string = '';
  phone: string = '';
  roleType: string = '';
  pays: string = '';
  nomBoutique: string = '';
  boutiqueAdresse: string = '';
  flagPays: string = '';
  isNomBoutiqueFormVisible = false;
  isUserFormVisible = false;

  paysFlags: { [key: string]: string } = {
    'Mali': '🇲🇱',
    'Sénégal': '🇸🇳',
    'Côte d\'Ivoire': '🇨\u200D',
    'Guinée': '🇬🇳',
    'Burkina Faso': '🇧🇫',
    'Togo': '🇹🇬',
    'Niger': '🇳\u200D',
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

    toggleNomBoutiqueForm() {
    this.isNomBoutiqueFormVisible = !this.isNomBoutiqueFormVisible;
  }

  toggleUserForm() {
    this.isUserFormVisible = !this.isUserFormVisible;
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
      nomBoutique: ['', [Validators.required]],
      adresse: ['', [Validators.required]]
    });

    this.nomCompletForm = this.fb.group({
      nomComplet: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{7,15}$')]], // Numéro valide
      password: ['', [Validators.required, Validators.minLength(6)]] // Mot de passe avec min 6 caractères
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

  get adresseControl() {
    return this.nomBoutiqueForm.get('adresse');
  }

  get nomCompletControl() {
    return this.nomCompletForm.get('nomComplet');
  }

  get phoneControl() {
    return this.nomCompletForm.get('phone');
  }

  get passwordControl() {
    return this.nomCompletForm.get('password');
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

  


  onSubmitNomBoutique(): void {
    this.errorMessage = null;
    this.successMessage = null;
    
    if (this.nomBoutiqueForm.invalid) {
      this.errorMessage = "Veuillez remplir tous les champs correctement";
      return;
    }
  
    const nomBoutique = this.nomBoutiqueForm.value.nomBoutique;
    const adresse = this.nomBoutiqueForm.value.adresse;
  
    this.usersService.updateBoutique(this.userId, { nomBoutique, adresse }).subscribe({
      next: (response) => {
        this.successMessage = response.message ? response.message : "Boutique mise à jour avec succès !";
        this.isNomBoutiqueFormVisible = false;
        this.nomBoutiqueForm.reset();
        setTimeout(() => this.successMessage = null, 10000);
      },
      error: (error) => {
        if (error instanceof HttpErrorResponse) {
          this.errorMessage = error.error.message || error.error || "Erreur inconnue";
        }
        setTimeout(() => this.errorMessage = null, 10000);
      },
    });
  }

  updateBoutique(id: number, nomBoutique: string, adresse: string): void {
    const updates = { nomBoutique, adresse };
    this.usersService.updateBoutique(id, updates).subscribe(
      response => {
        if (response.message) {
          console.log(response.message);
        } else if (response.error) {
          console.error(response.error);
        }
      },
      error => {
        console.error('Erreur lors de la mise à jour de la boutique:', error);
      }
    );
  }


  onSubmitUpdateUser(): void {
    this.errorMessage = null;
    this.successMessage = null;
    
    if (this.nomCompletForm.invalid) {
      this.errorMessage = "Veuillez remplir tous les champs correctement";
      return;
    }
  
    const { nomComplet, phone, password } = this.nomCompletForm.value;
  
    this.usersService.updateUser(this.userId, { nomComplet, phone, password }).subscribe({
      next: (response) => {
        if (response && response.message) {
          this.successMessage = response.message;
        } else {
          this.successMessage = "Profil mis à jour avec succès !";
        }
        this.isUserFormVisible = false;
        this.nomCompletForm.reset();
        setTimeout(() => this.successMessage = null, 10000);
      },
      error: (error) => {
        if (error instanceof HttpErrorResponse) {
          this.errorMessage = error.error.message || error.error || "Erreur inconnue";
        }
        setTimeout(() => this.errorMessage = null, 10000);
      },
    });
  }

  updateUser(id: number, nomComplet: string, phone: string, password: string): void {
    const updates = { nomComplet, phone, password };
    this.usersService.updateUser(id, updates).subscribe(
      response => {
        if (response.message) {
          console.log(response.message);
        } else if (response.error) {
          console.error(response.error);
        }
      },
      error => {
        console.error('Erreur lors de la mise à jour de la boutique:', error);
      }
    );
  }
  
  
}
