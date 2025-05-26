import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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

  constructor(
    private fb: FormBuilder,
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
      pays: ['xxxx'],
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
}
