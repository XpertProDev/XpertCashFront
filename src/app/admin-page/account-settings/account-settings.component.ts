import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { EntrepriseService } from '../SERVICES/entreprise-service';
import { Entreprise } from '../MODELS/entreprise-model';

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
    ReactiveFormsModule
  ],
  templateUrl: './account-settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './account-settings.component.scss'
})
export class AccountSettingsComponent implements OnInit {
  // panelOpenState = false;
  form!: FormGroup;
  logoUrl: string = 'assets/img/logo.jpeg';
  selectedLogoFile: File | null = null;
  entrepriseId: number | null = null;

  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private entrepriseService: EntrepriseService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getFormInit();
    this.getEntrepriseInfo();
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

  // initializeForm() {
  //   this.form = this.fb.group({
  //     nom: [''],
  //     secteur: [''],
  //     email: [''],
  //     adresse: [''],
  //     pays: [''],
  //     telephone: [''],
  //     siteWeb: [''],
  //     banque: [''],
  //     siege: [''],
  //     nina: [''],
  //     rccm: [''],
  //     nif: [''],
  //     signataire: [''],
  //     signataireNom: ['']
  //   });
  // }

  getEntrepriseInfo() {
    this.entrepriseService.getEntrepriseInfo().subscribe({
      next: (entreprise: Entreprise) => {
        // this.entrepriseId = entreprise.id;
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
          signataireNom: entreprise.signataireNom
        });
        this.logoUrl = entreprise.logo || 'assets/img/logo.jpeg';
        this.cdRef.markForCheck();
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des informations de l\'entreprise', error);
      }
    });
  }

  // Gestionnaire de clic pour le lien "ICI"
  onChangeLogoClick(): void {
    this.fileInput.nativeElement.click();
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
            this.logoUrl = canvas.toDataURL('image/jpeg', 0.8);
          } else {
            this.logoUrl = e.target.result;
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

    const formData = new FormData();
    const entrepriseData = this.form.value;
    formData.append('entreprise', JSON.stringify(entrepriseData));
    if (this.selectedLogoFile) {
      formData.append('logo', this.selectedLogoFile);
    }

    this.entrepriseService.updateEntreprise(this.entrepriseId, formData).subscribe({
      next: (response) => {
        console.log('Entreprise mise à jour avec succès', response);
        // Optionnel : Afficher un message de succès à l'utilisateur
        this.selectedLogoFile = null; // Réinitialiser le fichier sélectionné
      },
      error: (error) => {
        console.error('Erreur lors de la mise à jour de l\'entreprise', error);
        // Optionnel : Afficher un message d'erreur à l'utilisateur
      }
    });
  }
}
