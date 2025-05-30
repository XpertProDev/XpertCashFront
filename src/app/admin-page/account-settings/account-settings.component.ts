import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { EntrepriseService } from '../SERVICES/entreprise-service';
import { Entreprise } from '../MODELS/entreprise-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

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

  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private entrepriseService: EntrepriseService,
    private cdRef: ChangeDetectorRef,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getFormInit();
    this.getEntrepriseInfo();
    this.listenToPrefixSuffixChanges();
  
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
      signataireNom: ['Le Directeur Général'],
      prefixe: ['xxxx'],
      suffixe: ['xxxx'],
     tauxTva: [null]

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

 

 

}
