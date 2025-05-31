import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { EntrepriseService } from '../SERVICES/entreprise-service';
import { Entreprise } from '../MODELS/entreprise-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { ProfilService } from '../SERVICES/profil.service';
import { UpdateUserRequest } from '../MODELS/profil.model';
import { HttpErrorResponse } from '@angular/common/http';
import { UsersService } from '../SERVICES/users.service';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatExpansionModule, 
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './account-settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './account-settings.component.scss'
})
export class AccountSettingsComponent implements OnInit {
  // panelOpenState = false;
  form!: FormGroup;
  logo: string | null = null; 
  selectedLogoFile: File | null = null;
  entrepriseId: number | null = null;
  isLoading: boolean = false;
  showPreview: boolean = false;
  userId!: number;
  passwordForm!: FormGroup;
  successMessage: string | null = null;
  password: string = '';
  nomBoutiqueForm!: FormGroup;
  nomCompletForm!: FormGroup;
  photo: string = '';
  imageFile: File | null = null;
  // isUserFormVisible = false;
  @ViewChild('fileInput') fileInput!: ElementRef;
  showCurrentPassword: boolean = false;
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;
  errorMessage: string | null = null;
  // Methode pour cadre From
  isPasswordFormVisible = false;
  userName: string = '';
  nomEntreprise: string = '';
  email: string = '';
  phone: string = '';
  roleType: string = '';
  pays: string = '';
  nomBoutique: string = '';
  boutiqueAdresse: string = '';
  flagPays: string = '';
  personalCode: string = '';
  isNomBoutiqueFormVisible = false;
  isSending: boolean = false;
  isUserFormVisible = false;
  boutiques: any[] = [];
  paysFlags: { [key: string]: string } = {
    'Mali': '🇲🇱',
    'Sénégal': '🇸🇳',
    'Côte d\'Ivoire': '🇨\u200D',
  };

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
    private entrepriseService: EntrepriseService,
    private cdRef: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private profilService: ProfilService,
    private usersService: UsersService,
  ) {}

  ngOnInit() {
    this.initForm();
    this.getFormInit();
    this.getEntrepriseInfo();
    this.listenToPrefixSuffixChanges();
    this.getConnectedUserId();
    this.getUserInfo();
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

    getUserInfo(): void {
    this.usersService.getUserInfo().subscribe({
      next: (user) => {
        this.userName = user.nomComplet;
        this.personalCode = user.personalCode;
        this.nomEntreprise = user.nomEntreprise
        this.email = user.email;
        this.phone = user.phone;
        this.photo = user.photo ? `http://localhost:8080${user.photo}` : '';
        this.roleType = user.roleType;
        this.pays = user.pays;
        this.nomBoutique = user.boutiques?.length ? user.boutiques[0].nomBoutique : 'Aucune boutique';
        this.flagPays = this.paysFlags[this.pays] || '';
        this.boutiques = user.boutiques || [];
        console.log("Liste des boutiques:", this.boutiques);
        console.log("Infos utilisateur récupérées :", user);
        
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }

  private initForm(): void {
    this.passwordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });

    this.nomCompletForm = this.fb.group({
      nomComplet: ['', [Validators.required]],
      phone: ['', [Validators.pattern('^\\+?[0-9]{7,15}$')]], // Numéro valide
      password: ['', [Validators.required, Validators.minLength(6)]] // Mot de passe avec min 6 caractères
    });
  }

  // Validator pour vérifier que les deux nouveaux mots de passe correspondent
  private passwordMatchValidator(form: FormGroup): ValidationErrors | null {
    const newPassword = form.get('newPassword')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { mismatch: true };
  }

  get tauxTvaAffiche(): string {
    const tva = this.form.get('tauxTva')?.value;
    return tva !== null ? `${(tva * 100).toFixed(0)}%` : '';
  }

  getFormInit() {
    this.form = this.fb.group({
      nom: ['Entreprise'], 
      secteur: ['xxxx'],
      email: ['example@gmail.com'],
      adresse: ['xxxx'],
      pays: ['Bamako-Mali'],
      telephone: ['xx xx xx xx'],
      siteWeb: ['www.xpertpro.com'],
      banque: ['xxxx'],
      siege: ['xxxx'],
      nina: ['xxxx'],
      rccm: ['xxxx'],
      nif: ['xxxx'],
      signataire: ['Monsieur X'],
      signataireNom: ['Le Directeur Général']
    });
  }

  getEntrepriseInfo() {
    this.entrepriseService.getEntrepriseInfo().subscribe({
      next: (entreprise: Entreprise) => {
        this.entrepriseId = entreprise.id !== undefined ? entreprise.id : null;
        this.form.patchValue({
          nom: entreprise.nom,
          secteur: entreprise.secteur,
          email: entreprise.email,
          adresse: entreprise.adresse,
          pays: entreprise.pays,
          telephone: entreprise.telephone,
          siteWeb: entreprise.siteWeb,
          banque: entreprise.banque,
          siege: entreprise.siege,
          nina: entreprise.nina,
          rccm: entreprise.rccm,
          nif: entreprise.nif,
          signataire: entreprise.signataire,
          signataireNom: entreprise.signataireNom,
          logo: entreprise.logo,
          prefixe: entreprise.prefixe,
          suffixe: entreprise.suffixe,
          tauxTva: entreprise.tauxTva
        });
        // Construire l'URL complète du logo
        console.log('Logo path from server:', entreprise);

        console.log('Logo path from server:', entreprise.logo);
        // this.logoUrl = entreprise.logo ? `http://localhost:8080/${entreprise.logo}` : 'assets/img/logo.jpeg';
        this.logo = 'http://localhost:8080' + entreprise.logo;
        this.cdRef.markForCheck();
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des informations de l\'entreprise', error);
      }
    });
  }

  onChangeLogoClick(): void {
    this.fileInput.nativeElement.click();
  }

  openPreview(): void {
    this.showPreview = true;
  }

  closePreview(): void {
    this.showPreview = false;
  }

  // Gestionnaire de sélection de fichier
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedLogoFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = new Image();
        img.src = e.target.result;

        img.onload = () => {
          const MAX_SIZE = 800;
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          if (img.width > MAX_SIZE || img.height > MAX_SIZE) {
            const ratio = Math.min(MAX_SIZE / img.width, MAX_SIZE / img.height);
            canvas.width = img.width * ratio;
            canvas.height = img.height * ratio;
            ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
            this.logo = canvas.toDataURL('image/jpeg', 0.8);
          } else {
            this.logo = e.target.result;
          }
          this.cdRef.markForCheck();
          this.fileInput.nativeElement.value = '';
        };
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (!this.entrepriseId) {
      console.error('ID de l\'entreprise manquant');
      return;
    }

    this.isLoading = true;

    const formData = new FormData();
    const entrepriseData = this.form.value;
    formData.append('entreprise', JSON.stringify(entrepriseData));
    if (this.selectedLogoFile) {
      formData.append('logo', this.selectedLogoFile);
    }

    setTimeout(() => {
      this.entrepriseService.updateEntreprise(this.entrepriseId!, formData).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.snackBar.open(response, 'Fermer', { duration: 3000 });
          this.getEntrepriseInfo();
          this.selectedLogoFile = null;
        },
        error: (error) => {
          this.isLoading = false;
          const errorMessage = error.error || 'Erreur lors de la mise à jour';
          this.snackBar.open(errorMessage, 'Fermer', { duration: 3000 });
        }
      });
    }, 3000);
  }

  shouldShowPrefixe(): boolean {
    return !this.form.get('suffixe')?.value;
  }

  shouldShowSuffixe(): boolean {
    return !this.form.get('prefixe')?.value;
  }

    private listenToPrefixSuffixChanges(): void {
      this.form.get('prefixe')?.valueChanges.subscribe(() => {
        this.cdRef.markForCheck();
    });

    this.form.get('suffixe')?.valueChanges.subscribe(() => {
      this.cdRef.markForCheck();
    });
  }


  getLegalInfo(): string {
    const parts = [];
    
    if (this.form.get('nina')?.value) {
      parts.push(`NINA : ${this.form.get('nina')?.value}`);
    }
    
    if (this.form.get('rccm')?.value) {
      parts.push(`RCCM : ${this.form.get('rccm')?.value}`);
    }
    
    if (this.form.get('nif')?.value) {
      parts.push(`NIF : ${this.form.get('nif')?.value}`);
    }
    
    if (this.form.get('banque')?.value) {
      parts.push(`Banque : ${this.form.get('banque')?.value}`);
    }
    
    return parts.join(' ; ');
  }

  getAddressInfo(): string {
    const adresse = this.form.get('adresse')?.value;
    const pays = this.form.get('pays')?.value;
    
    if (adresse && pays) {
      return `Adresse : ${adresse} / ${pays}`;
    } else if (adresse) {
      return `Adresse : ${adresse}`;
    } else if (pays) {
      return `Adresse : ${pays}`;
    }
    
    return '';
  }

  // Méthode appelée lors de la soumission du formulaire
  updatePassword(): void {
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

onSubmitUpdateUser(): void {
  this.errorMessage = null;
  this.successMessage = null;
  this.isLoading = true;

  if (this.nomCompletForm.invalid) {
    this.errorMessage = "Veuillez remplir tous les champs correctement";
    return;
  }

  const { nomComplet, phone, password } = this.nomCompletForm.value;

  const userData = {
    nomComplet,
    phone,
    password
  };

  const formData = new FormData();
  formData.append('user', JSON.stringify(userData));

  if (this.imageFile) {
    formData.append('photo', this.imageFile);
  }

  // Correction 1 & 2 : Syntaxe correcte de subscribe + typage des paramètres
  setTimeout(() => {
    this.usersService.updateUser(this.userId, formData).subscribe({
      next: (response: any) => {
        console.log("✅ Réponse backend :", response);
        this.successMessage = typeof response === 'string'
          ? response
          : response?.message || "Profil mis à jour avec succès !";

        // Correction : Utiliser une chaîne par défaut si successMessage est null
        const message = this.successMessage || "Profil mis à jour avec succès !";
        this.snackBar.open(message, 'Fermer', { duration: 3000 });
        
        this.nomCompletForm.reset();
      },
      error: (error: any) => {
        console.error("❌ Erreur update :", error);
        if (error instanceof HttpErrorResponse) {
          this.errorMessage = error.error.message || error.error || "Erreur inconnue";
        }
        this.isLoading = false;
        
        // Correction : Utiliser une chaîne par défaut ici aussi
        const errorMsg = this.errorMessage || 'Erreur lors de la mise à jour';
        this.snackBar.open(errorMsg, 'Fermer', { duration: 3000 });
      }
    });
  }, 3000);
}

 

}
