import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef,NgZone, OnInit, ViewChild } from '@angular/core';
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
import { UsersService } from '../SERVICES/users.service';
import { UpdateUserRequest } from '../MODELS/profil.model';
import { HttpErrorResponse } from '@angular/common/http';


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
  photoUrl: string | ArrayBuffer | null = 'assets/img/profil.png';
  photo: string = '';
  isModalOpen = false;
  private photoRefreshToken = new Date().getTime();
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
  showPasswordInPersonalForm: boolean = false;
  paysFlags: { [key: string]: string } = {
    'Mali': '🇲🇱',
    'Sénégal': '🇸🇳',
    'Côte d\'Ivoire': '🇨🇮',
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
    private zone: NgZone,
  ) {
    window.addEventListener('profilePhotoUpdated', (event: any) => {
        const newPhoto = event.detail.photoUrl;
        localStorage.setItem('userPhoto', newPhoto);
    });
  }

  ngOnInit() {
    this.initForm();
    this.initForm();
    this.getFormInit();
    this.getEntrepriseInfo();
    this.listenToPrefixSuffixChanges();
    this.getConnectedUserId();
    this.getUserInfo();

    const savedPhoto = localStorage.getItem('photo');
    if (savedPhoto) {
        this.photo = savedPhoto;
    }

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
        // this.photo = user.photo ? `http://localhost:8080${user.photo}` : '';
        this.photo = user.photo ? `http://localhost:8080${user.photo}` : 'assets/img/profil.png';
        this.roleType = user.roleType;
        this.pays = user.pays;
        this.nomBoutique = user.boutiques?.length ? user.boutiques[0].nomBoutique : 'Aucune boutique';
        this.flagPays = this.paysFlags[this.pays] || '';
        this.boutiques = user.boutiques || [];
        console.log("Liste des boutiques:", this.boutiques);
        console.log("Infos utilisateur récupérées :", user);
        this.nomCompletForm.patchValue({
        nomComplet: user.nomComplet,
        phone: user.phone,
        password: '' // On laisse le mot de passe vide
      });
        
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }

  togglePasswordVisibilityInPersonalForm(): void {
    this.showPasswordInPersonalForm = !this.showPasswordInPersonalForm;
  }

  private initForm(): void {
    this.passwordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });

    this.nomCompletForm = this.fb.group({
      nomComplet: [''],
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

 
  updatePassword(): void {
      // Réinitialise les messages
      this.errorMessage = null;
      this.successMessage = null;
    
      // Vérifie la validité du formulaire
      if (this.passwordForm.invalid) {
          const errorMsg = "Veuillez remplir tous les champs correctement";
          this.snackBar.open(errorMsg, 'Fermer', { duration: 3000 });
          return;
      }
    
      const { currentPassword, newPassword, confirmPassword } = this.passwordForm.value;
    
      // Double vérification de la correspondance des mots de passe
      if (newPassword !== confirmPassword) {
          const errorMsg = "Les nouveaux mots de passe ne correspondent pas";
          this.snackBar.open(errorMsg, 'Fermer', { duration: 3000 });
          return;
      }
    
      // Active l'état de chargement
      this.isLoading = true;
    
      // Prépare la requête
      const request: UpdateUserRequest = {
          password: currentPassword,
          newPassword: newPassword
      };
    
      // Appel au service
      this.profilService.updatePassword(this.userId, request).subscribe({
          next: (response) => {
              this.isLoading = false;
              this.cdRef.detectChanges();
              const successMsg = response.includes('succès') ? response : "Mot de passe modifié !";
              this.snackBar.open(successMsg, 'Fermer', { duration: 3000 });
              this.isPasswordFormVisible = false;
              this.passwordForm.reset();
          },
          error: (error) => {
              this.isLoading = false;
              let errorMsg = "Erreur inconnue";
              if (error instanceof HttpErrorResponse) {
                  errorMsg = error.error.message || error.error || errorMsg;
              }
              this.snackBar.open(errorMsg, 'Fermer', { duration: 3000 });
          }
      });
  }
 
   onSubmitUpdateUser(): void {
    this.errorMessage = null;
    this.successMessage = null;
    this.isLoading = true;

    if (this.nomCompletForm.invalid) {
      this.errorMessage = "Veuillez remplir tous les champs correctement";
      this.isLoading = false; // Désactivation immédiate si formulaire invalide
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

    this.usersService.updateUser(this.userId, formData).subscribe({
    next: (response: any) => {
      this.isLoading = false;
      this.cdRef.detectChanges();

      const messages = typeof response === 'string'
          ? response
          : response?.message ;
        
      
      this.zone.run(() => {
        const message = messages;
        this.snackBar.open(message, 'Fermer', { duration: 3000 });
        this.nomCompletForm.reset();
      });
    },
    error: (error: any) => {
      this.isLoading = false;
      this.cdRef.detectChanges();

      let errorMsgs = 'Erreur lors de la mise à jour';
        if (error instanceof HttpErrorResponse) {
          errorMsgs = error.error.message || error.error || errorMsgs;
        }
      
      this.zone.run(() => {
        const errorMsg =  errorMsgs;
        this.snackBar.open(errorMsg, 'Fermer', { duration: 3000 });
      });
    }
  });
  }

  changerPhoto(event: Event) {
    event.stopPropagation();
    const fileInput = document.getElementById('profilePhotoInput') as HTMLInputElement;
    fileInput.click();
  }

  visualiserPhoto(event: Event): void {
      const target = event.target as HTMLElement;
      if (target.classList.contains('camera-icon')) return;
      this.isModalOpen = true;
  }

  fermerModal(): void {
      this.isModalOpen = false;
  }
  onProfilePhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.imageFile = file;

      // Prévisualisation locale immédiate
      const reader = new FileReader();
      reader.onload = (e: any) => {
          this.photo = e.target.result;
      };
      reader.readAsDataURL(file);

      // Envoi au serveur
      const formData = new FormData();
      formData.append('photo', file);

      this.usersService.updateUser(this.userId, formData).subscribe({
          next: (response) => {
            console.log("Réponse serveur:", response);
            this.snackBar.open("Photo mise à jour avec succès", 'Fermer', { duration: 3000 });
            
            // RECHARGEZ les données utilisateur après mise à jour
            this.getUserInfo();
            // this.refreshPhoto();
          },
          error: (error) => {
              this.snackBar.open("Échec de la mise à jour", 'Fermer', { duration: 3000 });
          }
      });
    }
  }


}
