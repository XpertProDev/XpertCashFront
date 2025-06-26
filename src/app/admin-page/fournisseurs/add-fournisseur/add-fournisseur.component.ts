import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FactureService } from '../../SERVICES/facture.service';
import { FournisseurService } from '../../SERVICES/fournisseur-service';
import imageCompression from 'browser-image-compression';

@Component({
  selector: 'app-add-fournisseur',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-fournisseur.component.html',
  styleUrl: './add-fournisseur.component.scss'
})
export class AddFournisseurComponent {
  fournisseurForm!: FormGroup;
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  errorMessageApi = '';
  indicatif: string = '';
  maxPhoneLength: number = 0;
  image: string | null = null; 
 selectedLogoFile?: File;

  @ViewChild('fileInput') fileInput!: ElementRef;

  paysIndicatifs: { [key: string]: { indicatif: string, longueur: number } } = {
    'Mali': { indicatif: '+223 ', longueur: 8 },
    'Sénégal': { indicatif: '+221 ', longueur: 9 },
    'Côte d\'Ivoire': { indicatif: '+225 ', longueur: 10 }
  };

  constructor(
    private fb: FormBuilder,
    private fournisseurService: FournisseurService,
    private router: Router,
     private cdRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.getInitForm();
  }

  getInitForm() {
    this.fournisseurForm = this.fb.group({
      nomComplet: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.email]],
      adresse: [''],
      pays: [''],
      telephone: [''],
      ville: [''],
      nomSociete: [''],
      photo: [null],
    });
  }

  onPaysChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    const pays = select.value;
    const paysInfo = this.paysIndicatifs[pays];
  
    if (paysInfo) {
      this.indicatif = paysInfo.indicatif;
      this.maxPhoneLength = paysInfo.longueur;
  
      const ctrl = this.fournisseurForm.get('telephone')!;
      // préfixe si nécessaire
      if (!ctrl.value?.startsWith(this.indicatif)) {
        ctrl.setValue(this.indicatif);
      }
      this.updatePhoneValidator(paysInfo.longueur);
    }
  }

  private updatePhoneValidator(longueur: number): void {
    const ctrl = this.fournisseurForm.get('telephone')!;
    // on impose exactement {longueur} chiffres après l’indicatif
    const regex = new RegExp(`^\\${this.indicatif}\\d{${longueur}}$`);
    ctrl.setValidators([
      Validators.required,
      Validators.pattern(regex)
    ]);
    ctrl.updateValueAndValidity();
  }  

  formatPhoneNumber() {
    const ctrl = this.fournisseurForm.get('telephone')!;
    let raw = ctrl.value as string;
    const pays = this.fournisseurForm.get('pays')?.value as string; 
    const paysInfo = this.paysIndicatifs[pays];
  
    // 1) Retirer l’indicatif s’il est déjà présent
    if (paysInfo && raw.startsWith(paysInfo.indicatif)) {
      raw = raw.substring(paysInfo.indicatif.length);
    }
    // 2) Conserver que les chiffres
    const cleaned = raw.replace(/\D/g, '');
  
    // 3) Remonter l’indicatif + espace + chiffres
    const formatted = paysInfo
      ? `${paysInfo.indicatif}${cleaned}`.slice(0, paysInfo.indicatif.length + paysInfo.longueur)
      : cleaned;
  
    // 4) Mettre à jour sans retrigger
    ctrl.setValue(formatted, { emitEvent: false });
  }
  
  ajouterFournisseur() {
  if (this.fournisseurForm.invalid) {
    this.fournisseurForm.markAllAsTouched();
    return;
  }

  this.isLoading = true;
  this.errorMessage = '';
  this.successMessage = '';

  const fournisseurData = {
    ...this.fournisseurForm.value,
    telephone: this.fournisseurForm.value.telephone.replace(/\s/g, '')
  };

  // Passe aussi this.selectedLogoFile au service
  this.fournisseurService.addFournisseur(fournisseurData, this.selectedLogoFile).subscribe({
    next: (response) => {
      this.isLoading = false;
      this.successMessage = 'Fournisseur ajouté avec succès!';
      setTimeout(() => this.router.navigate(['/fournisseurs']), 2000);
    },
    error: (error) => {
      this.isLoading = false;
      this.errorMessage = error.error?.error || 'Une erreur est survenue';
    }
  });
}


  goToFournisseur() {
    this.router.navigate(['/fournisseurs']);
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

      this.selectedLogoFile = compressedFile; // Stocke le fichier compressé à envoyer

      // Affichage preview en base64
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.image = e.target.result; // Base64 pour afficher l'image dans l'interface
        this.cdRef.markForCheck();
      };
      reader.readAsDataURL(compressedFile);

    } catch (error) {
      console.error("Erreur lors de la compression ou du traitement :", error);
    }
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

}
function ViewChild(arg0: string): (target: AddFournisseurComponent, propertyKey: "fileInput") => void {
  throw new Error('Function not implemented.');
}

