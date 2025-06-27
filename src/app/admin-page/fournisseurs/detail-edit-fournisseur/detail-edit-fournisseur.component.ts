import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FournisseurService } from '../../SERVICES/fournisseur-service';
import { Fournisseurs } from '../../MODELS/fournisseurs-model';
import { ActivatedRoute } from '@angular/router';
import imageCompression from 'browser-image-compression';
import { environment } from 'src/environments/environment';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-detail-edit-fournisseur',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatExpansionModule, 
    MatFormFieldModule,
  ],
  templateUrl: './detail-edit-fournisseur.component.html',
  styleUrl: './detail-edit-fournisseur.component.scss'
})
export class DetailEditFournisseurComponent {
  private imgUrl = environment.imgUrl
  fournisseurEditForm!: FormGroup;
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  errorMessageApi = '';
  isEditing = false;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  fournisseurPhotoUrl: string | null = null;
  newPhotoUrl: string | null = null;
  fournisseur!: Fournisseurs;
  control = new FormControl();
  selectedFile: File | null = null;
  selectedCompressedFile: File | null = null;
  indicatif: string = '';
  maxPhoneLength: number = 0;
  
  // countryDialCodes = {
  //   'Mali': '+223',
  //   'Sénégal': '+221',
  //   'Côte d\'Ivoire': '+225'
  // };

  paysIndicatifs: { [key: string]: { indicatif: string, longueur: number } } = {
    'Mali': { indicatif: '+223', longueur: 8 },
    'Sénégal': { indicatif: '+221', longueur: 9 },
    'Côte d\'Ivoire': { indicatif: '+225', longueur: 10 }
  };

  constructor(
    private fb: FormBuilder,
    private fournisseurService: FournisseurService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getInitForm();
    this.loadFournisseur();
    this.fournisseurEditForm.disable();
    this.control.disable();

    this.fournisseurEditForm.get('pays')?.valueChanges.subscribe(pays => {
      this.formatPhoneNumber();
    });
  }

  startEditing(): void {
    this.isEditing = true;
    this.fournisseurEditForm.enable(); // Active tous les champs du formulaire
  }

  getInitForm() {
    this.fournisseurEditForm = this.fb.group({
      nomComplet: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.email]],
      adresse: [''],
      pays: [''],
      telephone: [''],
      description: [''],
      ville: [''],
      nomSociete: [''],
      photo: [null]
    });
  }
  
  onPaysChange(event: any): void {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
    
    if (paysInfo) {
      this.indicatif = `${paysInfo.indicatif} `;
      this.maxPhoneLength = this.indicatif.length + paysInfo.longueur;
      
      if (!this.fournisseurEditForm.get('telephone')?.value.startsWith(this.indicatif)) {
        this.fournisseurEditForm.get('telephone')?.setValue(this.indicatif);
      }
      
      this.updatePhoneValidator(paysInfo.longueur);
    }
  }

  updatePhoneValidator(longueur: number): void {
    const validators = [];
    
    if (this.indicatif) {
      const regex = new RegExp(`^\\${this.indicatif}\\s*\\d{${longueur}}$`);
      validators.push(Validators.pattern(regex));
    }
    
    this.fournisseurEditForm.get('telephone')?.setValidators(validators);
    this.fournisseurEditForm.get('telephone')?.updateValueAndValidity();
  }
  
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.selectedFile = file;
      
      // Vérification du format
      const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!allowedFormats.includes(file.type)) {
        this.errorMessage = 'Seuls les formats JPG, PNG sont acceptés';
        return;
      }

      this.testImageCompression(file);
      
      
      // Aperçu de l'image
      const reader = new FileReader();
      reader.onload = (e) => {
        this.newPhotoUrl = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
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
    const compressedBlob = await imageCompression(file, options);
    console.log('Taille après compression:', compressedBlob.size / 1024, 'Ko');

    if (!compressedBlob.type.startsWith('image/')) {
      console.error('Le fichier compressé n\'est pas un format d\'image valide.');
      this.errorMessage = 'Erreur de compression : Le fichier n\'est pas une image.';
      return null;
    }

    // Extraire le nom de base sans extension
    const originalName = file.name.split('.').slice(0, -1).join('.') || 'image';

    // Déterminer la bonne extension selon le type MIME
    let extension = 'png';
    if (compressedBlob.type === 'image/jpeg') extension = 'jpg';
    else if (compressedBlob.type === 'image/png') extension = 'png';
    else if (compressedBlob.type === 'image/webp') extension = 'webp';

    const finalFileName = `${originalName}.${extension}`;

    // on recre img avec la bonne extension
    const compressedFile = new File([compressedBlob], finalFileName, {
      type: compressedBlob.type,
      lastModified: Date.now(),
    });

    return compressedFile;

  } catch (error) {
    console.error('Erreur lors de la compression:', error);
    return null;
  }
}


  // formatPhoneNumber() {
  //   const ctrl = this.fournisseurEditForm.get('telephone')!;
  //   let raw = ctrl.value as string;
  //   const pays = this.fournisseurEditForm.get('pays')?.value;
  //   const dialCode = this.countryDialCodes[pays as keyof typeof this.countryDialCodes] || '';

  //   // Nettoyer le numéro
  //   const cleaned = raw.replace(/\D/g, '');

  //   // Formater selon le pays
  //   let formatted = cleaned;
  //   if (dialCode && cleaned.startsWith(dialCode.replace('+', ''))) {
  //     formatted = dialCode + ' ' + cleaned.substring(dialCode.length);
  //   } else if (dialCode) {
  //     formatted = dialCode + ' ' + cleaned;
  //   }

  //   ctrl.setValue(formatted, { emitEvent: false });
  // }

  formatPhoneNumber(): void {
    let valeur = this.fournisseurEditForm.get('telephone')?.value;
    
    if (!valeur.startsWith(this.indicatif)) {
      this.fournisseurEditForm.get('telephone')?.setValue(this.indicatif);
      return;
    }

    const chiffres = valeur.replace(this.indicatif, '').replace(/\D/g, '');
    const numeroFormate = this.indicatif + chiffres;
    
    this.fournisseurEditForm.get('telephone')?.setValue(
      numeroFormate.slice(0, this.maxPhoneLength)
    );
  }

  goToFournisseur() {
    this.router.navigate(['/fournisseurs']);
  }

  // detail-edit-fournisseur.component.ts
  private loadFournisseur(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.fournisseurService.getFournisseurById(id).subscribe({
      next: (resp) => {
        // resp = { fournisseur: {...} }
        const data = resp.fournisseur;
        this.fournisseur = data;
      
        // Initialiser l'indicatif si pays existant
        if (data.pays && this.paysIndicatifs[data.pays]) {
          const paysInfo = this.paysIndicatifs[data.pays];
          this.indicatif = `${paysInfo.indicatif} `;
          this.maxPhoneLength = this.indicatif.length + paysInfo.longueur;
          
          // Formater le téléphone
          let telephone = data.telephone || '';
          if (telephone && !telephone.startsWith(this.indicatif)) {
            telephone = this.indicatif + telephone.replace(/\D/g, '');
          }
          data.telephone = telephone.slice(0, this.maxPhoneLength);
        }

        this.fournisseurEditForm.patchValue({
          nomComplet: data.nomComplet,
          email: data.email,
          adresse: data.adresse,
          pays: data.pays,
          telephone: data.telephone,
          description: data.description,
          ville: data.ville,
          nomSociete: data.nomSociete,
        });
        // this.fournisseurPhotoUrl = data.photo;
        this.fournisseurPhotoUrl = data.photo ? `${this.imgUrl}${data.photo}` : '';
        // Correction ici : utiliser l'URL complète
        // this.fournisseurPhotoUrl = data.photo 
        //   ? `${environment.apiBaseUrl}${data.photo}` 
        //   : null;
      },
      error: (err) => console.error('Erreur de chargement', err)
    });
  }

  // Méthode pour déclencher l'input file
  triggerFileInput(): void {
    if (!this.isEditing) return;
    this.fileInput.nativeElement.click();
  }

  toggleEditing(): void {
  this.isEditing = !this.isEditing;
  
  if (this.isEditing) {
    this.fournisseurEditForm.enable();
  } else {
    // Réinitialiser les modifications
    this.selectedCompressedFile = null;
    this.newPhotoUrl = null;
    this.loadFournisseur();
    this.fournisseurEditForm.disable();
  }
}

async modifierFournisseur() {
  this.isLoading = true;
  this.errorMessage = '';
  this.successMessage = '';

  try {
    const formValue = this.fournisseurEditForm.value;

    // Ajout du délai de 3 secondes avant la modification
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Créez un nouvel objet sans propriétés indésirables
    const cleanedData: Fournisseurs = {
      id: this.fournisseur.id,
      nomComplet: formValue.nomComplet,
      email: formValue.email,
      adresse: formValue.adresse,
      pays: formValue.pays,
      telephone: formValue.telephone,
      description: formValue.description,
      ville: formValue.ville,
      nomSociete: formValue.nomSociete,
      photo: this.fournisseur.photo, // conservez la photo existante
      createdAt: this.fournisseur.createdAt
    };
    
    // Préparer les données pour l'API
    const updatedFournisseur: Fournisseurs = {
      id: this.fournisseur.id,
      nomComplet: formValue.nomComplet,
      email: formValue.email,
      adresse: formValue.adresse,
      pays: formValue.pays,
      telephone: formValue.telephone,
      description: formValue.description,
      ville: formValue.ville,
      nomSociete: formValue.nomSociete,
      photo: this.fournisseur.photo,
      createdAt: this.fournisseur.createdAt
    };

    // Appeler le service
    await this.fournisseurService.updateFournisseur(
      this.fournisseur.id,
      updatedFournisseur,
      this.selectedCompressedFile || undefined
    ).toPromise();

    this.successMessage = 'Fournisseur mis à jour avec succès!';
    
    // Réinitialiser après succès
    this.selectedCompressedFile = null;
    this.newPhotoUrl = null;
    setTimeout(() => {
      // Désactiver le mode édition après 2 secondes
      this.isEditing = false;
      this.fournisseurEditForm.disable();
      
      // Recharger les données
      this.loadFournisseur();
    }, 500);
    
    // Désactiver le mode édition après 2s
    // setTimeout(() => {
    //   this.isEditing = false;
    //   this.fournisseurEditForm.disable();
    // }, 3000);

  } catch (error: any) {
    console.error('Update error:', error);
    this.errorMessage = error.error?.message || 'Erreur lors de la mise à jour';
  } finally {
    this.isLoading = false;
  }
}


  

}
 