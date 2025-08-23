import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../SERVICES/auth.service';
import { UpdateUserRequest } from '../MODELS/profil.model';
import { ProfilService } from '../SERVICES/profil.service';
import { CommonModule } from '@angular/common';
import { UsersService } from '../SERVICES/users.service';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import imageCompression from 'browser-image-compression';

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
  photo: string | null = null;


  imageFile: File | null = null;

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
  qrCodeUrl: string = '';
  isNomBoutiqueFormVisible = false;
  isUserFormVisible = false;
  boutiques: any[] = [];

  private imgUrl = environment.imgUrl;

  newPhotoUrl: string | null = null;


  isModalOpen = false;

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

  // toggleNomBoutiqueForm() {
  //   this.isNomBoutiqueFormVisible = !this.isNomBoutiqueFormVisible;
  // }

  toggleUserForm() {
    this.isUserFormVisible = !this.isUserFormVisible;
  }

  constructor(
    private fb: FormBuilder,
    private profilService: ProfilService,
    private usersService: UsersService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getConnectedUserId();
    this.getUserInfo();

     const savedPhoto = localStorage.getItem('photo');
      if (savedPhoto) {
        this.photo = savedPhoto;
      }
      const savedQrCode = localStorage.getItem('qrCodeUrl');
      if (savedQrCode) {
        this.qrCodeUrl = savedQrCode;
      }
  }

  private initForm(): void {
    this.passwordForm = this.fb.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });

    this.nomBoutiqueForm = this.fb.group({
      selectedBoutique: ['', [Validators.required]],
      nomBoutique: ['', [Validators.required]],
      adresse: ['']
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
        this.personalCode = user.personalCode;
        this.nomEntreprise = user.nomEntreprise
        this.email = user.email;
        this.phone = user.phone;
        this.photo = user.photo ? `${this.imgUrl}${user.photo}` : '';
        this.qrCodeUrl = user.qrCodeUrl ? `${this.imgUrl}${user.qrCodeUrl}` : '';
        this.roleType = user.roleType;
        this.pays = user.pays;
        this.nomBoutique = user.boutiques?.length ? user.boutiques[0].nomBoutique : 'Aucune boutique';
        this.flagPays = this.paysFlags[this.pays] || '';
        this.boutiques = user.boutiques || [];
        console.log("Liste des boutiques:", this.boutiques);
        console.log("Infos utilisateur récupérées :", user);
        console.log("QR Code URL construite :", this.qrCodeUrl);

        
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }

  onBoutiqueSelect() {
    const boutiqueId = this.nomBoutiqueForm.get('selectedBoutique')?.value;
    const selectedBoutique = this.boutiques.find(b => b.id === boutiqueId);
    
    if (selectedBoutique) {
      this.nomBoutiqueForm.patchValue({
        nomBoutique: selectedBoutique.nomBoutique,
        adresse: selectedBoutique.adresse
      });
    }
  }

  // onSubmitNomBoutique(): void {
  //   this.errorMessage = null;
  //   this.successMessage = null;
    
  //   if (this.nomBoutiqueForm.invalid) {
  //     this.errorMessage = "Veuillez remplir tous les champs correctement";
  //     return;
  //   }
  
  //   const boutiqueId = this.nomBoutiqueForm.value.selectedBoutique;
  //   const nomBoutique = this.nomBoutiqueForm.value.nomBoutique;
  //   const adresse = this.nomBoutiqueForm.value.adresse;
  
  //   this.usersService.updateBoutique(boutiqueId, { nomBoutique, adresse }).subscribe({
  //     next: (response) => {
  //       // Mettre à jour le tableau local
  //       const index = this.boutiques.findIndex(b => b.id === boutiqueId);
  //       if (index > -1) {
  //         this.boutiques[index] = { 
  //           ...this.boutiques[index], 
  //           nomBoutique: nomBoutique,
  //           adresse: adresse 
  //         };
  //       }
  
  //       this.successMessage = "Boutique mise à jour avec succès !";
  //       this.isNomBoutiqueFormVisible = false;
  //       this.nomBoutiqueForm.reset();
  //       setTimeout(() => this.successMessage = null, 10000);
  //     },
  //     error: (error) => {
  //       if (error instanceof HttpErrorResponse) {
  //         this.errorMessage = error.error.message || error.error || "Erreur inconnue";
  //       }
  //       setTimeout(() => this.errorMessage = null, 10000);
  //     },
  //   });
  // }

  // private refreshBoutiques(): void {
  //   this.usersService.getUserInfo().subscribe({
  //     next: (user) => {
  //       this.boutiques = user.boutiques || [];
  //     },
  //     error: (err) => {
  //       console.error("Erreur rafraîchissement boutiques:", err);
  //     }
  //   });
  // }

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

    // Création de l'objet DTO à envoyer
    const userData = {
      nomComplet,
      phone,
      password
    };

    // Construction du FormData
    const formData = new FormData();
    formData.append('user', JSON.stringify(userData)); // 'user' correspond à @RequestPart("user") côté Spring

    if (this.imageFile) {
      formData.append('photo', this.imageFile); // 'photo' correspond à @RequestPart("photo") côté Spring
    }

    this.usersService.updateUser(this.userId, formData).subscribe({
      next: (response) => {
        console.log("✅ Réponse backend :", response);
        this.successMessage = typeof response === 'string'
          ? response
          : response?.message || "Profil mis à jour avec succès !";

        this.nomCompletForm.reset();
        this.isUserFormVisible = false;
        setTimeout(() => this.successMessage = null, 10000);
      },
      error: (error) => {
        console.error("❌ Erreur update :", error);
        if (error instanceof HttpErrorResponse) {
          this.errorMessage = error.error.message || error.error || "Erreur inconnue";
        }
        setTimeout(() => this.errorMessage = null, 10000);
      }
    });
  }

   async testImageCompression(file: File): Promise<File | null> {
  if (!file) {
    console.log('Aucun fichier sélectionné.');
    return null;
  }

  console.log('Taille originale:', file.size / 1024, 'Ko');

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1000,
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(file, options);
    console.log('Taille après compression:', compressedFile.size / 1024, 'Ko');

    if (!compressedFile.type.startsWith('image/')) {
      console.error('Le fichier compressé n\'est pas un format d\'image valide.');
      this.errorMessage = 'Erreur de compression : Le fichier n\'est pas une image.';
      return null;
    }


    return compressedFile;

  } catch (error) {
    console.error('Erreur lors de la compression:', error);
    return null;
  }
  }


async onFileSelected(event: Event): Promise<void> {
  const input = event.target as HTMLInputElement;

  if (input.files && input.files[0]) {
    const file = input.files[0];

    try {
      const compressedFile = await this.testImageCompression(file);

      if (!compressedFile) {
        console.error("Compression échouée ou image invalide.");
        return;
      }

      this.imageFile = compressedFile;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64 = e.target.result;
        this.photo = base64;
        localStorage.setItem('photo', base64);
        window.dispatchEvent(new Event('storage-photo-update'));
      };
      reader.readAsDataURL(compressedFile);

      const formData = new FormData();

      // Récupérer l'extension du fichier d'origine
      const extension = file.name.split('.').pop();
      const nomFichierFinal = `photo_profil_${Date.now()}.${extension}`;

      // Ajouter le fichier avec un nom explicite
      formData.append('photo', this.imageFile, nomFichierFinal);

      this.usersService.updateUser(this.userId, formData).subscribe({
        next: (response) => {
          console.log("✅ Image mise à jour :", response);
          if (response.photo) {
            this.photo = response.photo;
          }
          this.successMessage = "Photo de profil mise à jour avec succès !";
          setTimeout(() => this.successMessage = null, 5000);
        },
        error: (error) => {
          console.error("❌ Erreur mise à jour :", error);
          this.errorMessage = "Échec de la mise à jour de la photo.";
          setTimeout(() => this.errorMessage = null, 5000);
        }
      });

    } catch (error) {
      console.error("Erreur lors de la compression ou de l'envoi :", error);
      this.errorMessage = "Erreur lors de la compression ou de l'envoi.";
      setTimeout(() => this.errorMessage = null, 5000);
    }
  }
}


  changerPhoto(event: Event) {
    event.stopPropagation();
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  visualiserPhoto(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('camera-icon')) return;

    this.isModalOpen = true;
  }

  fermerModal() {
    this.isModalOpen = false;
  }
  
  showCode = false;
   toggleCodeVisibility() {
    this.showCode = !this.showCode;
  }


@HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent): void {
  const target = event.target as HTMLElement;
  const clickedInside = target.closest('.profile-img-wrapper, .dropdown-menu');

  if (!clickedInside) {
    this.menuOuvert = false;
  }
}

menuOuvert: boolean = false;
toggleMenu(event: MouseEvent): void {
  event.stopPropagation(); 
  this.menuOuvert = !this.menuOuvert;
}

afficherConfirmation: boolean = false;

supprimerPhoto(event: MouseEvent): void {
  event.stopPropagation();
  this.afficherConfirmation = true;
}

confirmerSuppression(): void {
  const formData = new FormData();
  formData.append('deletePhoto', 'true');
  formData.append('user', JSON.stringify({}));

  this.usersService.updateUser(this.userId, formData).subscribe({
    next: () => {
      this.photo = null;
      localStorage.removeItem('photo');
      window.dispatchEvent(new Event('storage-photo-update'));
      this.afficherConfirmation = false;
    },
    error: (err) => {
      console.error('Erreur suppression photo', err);
      this.afficherConfirmation = false;
    }
  });
}

annulerSuppression(): void {
  this.afficherConfirmation = false;
}

@ViewChild('video') videoElement!: ElementRef;
@ViewChild('canvas') canvasElement!: ElementRef;


cameraActive = false;
ouvrirCamera(event: MouseEvent): void {
  event.stopPropagation();
  this.cameraActive = true;

  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      this.videoElement.nativeElement.srcObject = stream;
    })
    .catch((err) => {
      console.error("Erreur ouverture caméra :", err);
    });
}
fermerCamera(): void {
  this.cameraActive = false;

  const stream = this.videoElement.nativeElement.srcObject;
  const tracks = stream?.getTracks();

  tracks?.forEach((track: any) => track.stop());
  this.videoElement.nativeElement.srcObject = null;
}

async prendrePhoto(): Promise<void> {
  const video = this.videoElement.nativeElement;
  const canvas = this.canvasElement.nativeElement;

  const width = video.videoWidth;
  const height = video.videoHeight;

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, width, height);

  // Récupère l'image en base64
  const base64DataUrl = canvas.toDataURL('image/jpeg');

  // Convertir base64 → Blob → File
  const blob = await (await fetch(base64DataUrl)).blob();
  const file = new File([blob], `photo_profil_${Date.now()}.jpg`, {
    type: 'image/jpeg'
  });

  try {
    const compressedFile = await this.testImageCompression(file);

    if (!compressedFile) {
      console.error("Compression échouée ou image invalide.");
      return;
    }

    this.imageFile = compressedFile;

    // Affichage dans le profil (base64 preview)
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const base64 = e.target.result;
      this.photo = base64;
      localStorage.setItem('photo', base64);
      window.dispatchEvent(new Event('storage-photo-update'));
    };
    reader.readAsDataURL(compressedFile);

    const formData = new FormData();
    formData.append('photo', this.imageFile, this.imageFile.name);

    this.usersService.updateUser(this.userId, formData).subscribe({
      next: (response) => {
        console.log("✅ Image mise à jour depuis caméra :", response);
        this.successMessage = "Photo prise et mise à jour avec succès !";
        this.fermerCamera();
        setTimeout(() => this.successMessage = null, 5000);
      },
      error: (error) => {
        console.error("❌ Erreur de mise à jour :", error);
        this.errorMessage = "Erreur lors de l'envoi de la photo.";
        setTimeout(() => this.errorMessage = null, 5000);
      }
    });

  } catch (error) {
    console.error("Erreur lors du traitement de la photo :", error);
    this.errorMessage = "Erreur lors de la prise ou de l'envoi.";
    setTimeout(() => this.errorMessage = null, 5000);
  }
}

  
isExpanded = false;

toggleExpand(event: Event) {
    event.stopPropagation();
    this.isExpanded = !this.isExpanded;
  }

  @HostListener('document:click')
  onClick() {
    if (this.isExpanded) {
      this.isExpanded = false;
    }
  }
}
