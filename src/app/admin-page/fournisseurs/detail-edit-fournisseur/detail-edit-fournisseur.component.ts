import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FournisseurService } from '../../SERVICES/fournisseur-service';
import { Fournisseurs } from '../../MODELS/fournisseurs-model';
import { ActivatedRoute } from '@angular/router';
import imageCompression from 'browser-image-compression';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail-edit-fournisseur',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './detail-edit-fournisseur.component.html',
  styleUrl: './detail-edit-fournisseur.component.scss'
})
export class DetailEditFournisseurComponent {
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
  
  countryDialCodes = {
    'Mali': '+223',
    'Sénégal': '+221',
    'Côte d\'Ivoire': '+225'
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
  
  onPaysChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    const pays = select.value;
    const dialCode = this.countryDialCodes[pays as keyof typeof this.countryDialCodes];
    
    if (dialCode) {
      const currentPhone = this.fournisseurEditForm.get('telephone')?.value || '';
      if (!currentPhone.startsWith(dialCode)) {
        this.fournisseurEditForm.get('telephone')?.setValue(dialCode);
      }
    }
  }
  
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      
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

  async testImageCompression(file: File) {
      if (!file) {
        console.log('Aucun fichier sélectionné.');
        return;
      }
    
      console.log('Taille originale:', file.size / 1024, 'Ko');
    
      // Options de compression
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1000,
        useWebWorker: true,
      };
    
      try {
        const compressedFile = await imageCompression(file, options);
        console.log('Taille après compression:', compressedFile.size / 1024, 'Ko');
    
        // Vérifier si le fichier est bien en PNG/JPEG après compression
        if (compressedFile.type !== 'image/png' && compressedFile.type !== 'image/jpeg') {
          console.error('Le fichier compressé n\'est pas un format supporté (PNG ou JPEG).');
          this.errorMessage = 'Erreur de compression : Le format de l\'image n\'est pas valide.';
          return;
        }
    
        // Lire l'image compressée et afficher l'aperçu
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newPhotoUrl = e.target?.result as string;
          console.log('Image compressée prête à être affichée !');
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error('Erreur lors de la compression:', error);
      }
  }

  formatPhoneNumber() {
    const ctrl = this.fournisseurEditForm.get('telephone')!;
    let raw = ctrl.value as string;
    const pays = this.fournisseurEditForm.get('pays')?.value;
    const dialCode = this.countryDialCodes[pays as keyof typeof this.countryDialCodes] || '';
  
    // 1) On retire le dialCode existant pour ne pas le dupliquer
    if (dialCode && raw.startsWith(dialCode)) {
      raw = raw.substring(dialCode.length);
    }
    // 2) On ne conserve que les chiffres
    const cleaned = raw.replace(/\D/g, '');
  
    // 3) On remet le dialCode + un espace + le bloc de chiffres
    const formatted = dialCode 
      ? `${dialCode} ${cleaned}` 
      : cleaned;
  
    // 4) On remet la valeur sans retrigger d'événement
    ctrl.setValue(formatted, { emitEvent: false });
  }

  goToFournisseur() {
    this.router.navigate(['/fournisseurs']);
  }

  // private loadFournisseur(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.fournisseurService.getFournisseurById(id).subscribe({
  //     next: (data) => {
  //       this.fournisseur = data;
  //       // Mettre à jour les valeurs du formulaire
  //       this.fournisseurEditForm.patchValue({
  //         nomComplet: data.nomComplet,
  //         email: data.email,
  //         adresse: data.adresse,
  //         pays: data.pays,
  //         telephone: data.telephone,
  //         description: data.description,
  //         ville: data.ville,
  //         nomSociete: data.nomSociete
  //       });
  //       // Mettre à jour la photo
  //       this.fournisseurPhotoUrl = data.photo 
  //         ? `${environment.apiBaseUrl}/${data.photo}` 
  //         : null;
  //     },
  //     error: (err) => console.error('Erreur de chargement', err)
  //   });
  // }

  // detail-edit-fournisseur.component.ts
  private loadFournisseur(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.fournisseurService.getFournisseurById(id).subscribe({
      next: (resp) => {
        // resp = { fournisseur: {...} }
        const data = resp.fournisseur;
        this.fournisseur = data;
        this.fournisseurEditForm.patchValue({
          nomComplet: data.nomComplet,
          email: data.email,
          adresse: data.adresse,
          pays: data.pays,
          telephone: data.telephone,
          description: data.description,
          ville: data.ville,
          nomSociete: data.nomSociete
        });
        this.fournisseurPhotoUrl = data.photo;
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
      this.control.enable(); // Activer le contrôle
      this.fournisseurEditForm.enable();
    } else {
      this.control.disable(); // Désactiver le contrôle
      this.fournisseurEditForm.disable();
      this.loadFournisseur();
    }
  }

  modifierFournisseur() {}

  

}
 