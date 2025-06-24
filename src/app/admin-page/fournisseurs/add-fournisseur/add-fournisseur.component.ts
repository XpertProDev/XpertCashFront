import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FactureService } from '../../SERVICES/facture.service';
import { FournisseurService } from '../../SERVICES/fournisseur-service';

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
  selectedLogoFile: File | null = null;

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
      ville: ['']
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

    this.fournisseurService.addFournisseur(fournisseurData).subscribe({
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
            this.image = canvas.toDataURL('image/jpeg', 0.8);
          } else {
            this.image = e.target.result;
          }
          this.cdRef.markForCheck();
          this.fileInput.nativeElement.value = '';
        };
      };
      reader.readAsDataURL(file);
    }
  }

}
function ViewChild(arg0: string): (target: AddFournisseurComponent, propertyKey: "fileInput") => void {
  throw new Error('Function not implemented.');
}

