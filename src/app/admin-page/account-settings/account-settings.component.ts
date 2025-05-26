import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
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
  panelOpenState = false;
  form!: FormGroup; 
  // L'URL du logo
  logoUrl: string = 'assets/img/logo.jpeg';
  // Référence à l'input file
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getFormInit();
  }

  getFormInit() {
    this.form = this.fb.group({
      nomEntreprise: ['Entreprise'], 
      secteur: ['xxxx'],
      email: ['example@gmail.com'],
      adresse: ['xxxx'],
      pays: ['Bamako-Mali'],
      telephone: ['xx xx xx xx'],
      siteWeb: ['www.xpertpro.com'],
      banque: ['xxxx'],
      nina: ['xxxx'],
      rccm: ['xxxx'],
      nif: ['xxxx'],
      signataire: ['Monsieur X'],
      post: ['Le Directeur Général']
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
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = new Image();
        img.src = e.target.result;
        
        img.onload = () => {
          // Redimensionner l'image si nécessaire
          const MAX_SIZE = 800;
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          if(img.width > MAX_SIZE || img.height > MAX_SIZE) {
            const ratio = Math.min(MAX_SIZE/img.width, MAX_SIZE/img.height);
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
}
