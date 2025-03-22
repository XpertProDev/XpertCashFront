import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../SERVICES/users.service';

@Component({
  selector: 'app-boutique',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './boutique.component.html',
  styleUrl: './boutique.component.scss'
})
export class BoutiqueComponent {

  showPopup = false;
  boutiques: any[] = [];
  filteredBoutiques: any[] = [];

  isLoading: boolean = false;
  
  boutiqueForm!: FormGroup;
  errorMessage: string | null = null; 
  successMessage: string | null = null;
  
  // users: any[] = [];
  filteredUsers: any[] = [];
  
  indicatif: string = '';
  maxPhoneLength: number = 8;
  
  isAscending: boolean = true;
  searchTerm: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.fetchBoutiques()
  }

  initForm() {
    this.boutiqueForm = this.fb.group({
      nomBoutique: ['', Validators.required],
      emailBoutique: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      adresseBoutique: ['', Validators.required],
      telephoneBoutique: ['', [Validators.required, Validators.pattern(/^\d{8,15}$/)]],
    });
  }
  
  updatePhoneValidator(longueur: number): void {
    this.boutiqueForm.controls['phone'].setValidators([
      Validators.required,
      Validators.pattern(`^\\+\\d{1,3}\\s?\\d{${longueur}}$`)
    ]);
    this.boutiqueForm.controls['phone'].updateValueAndValidity();
  }
   
  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.resetForm();
  }

  private resetForm() {
    this.boutiqueForm.patchValue({
      nomBoutique: '',
      emailBoutique: '',
      adresseBoutique: '',
      telephoneBoutique: ''
    });
  
    this.boutiqueForm.markAsPristine();
    this.boutiqueForm.markAsUntouched();
    this.boutiqueForm.updateValueAndValidity();
  }
  
  onSubmit(): void {}

  fetchBoutiques(): void {
    this.usersService.getBoutiquesByEntreprise().subscribe({
      next: (data) => {
        this.boutiques = data;
        this.filteredBoutiques = [...data];
        console.log('Boutiques récupérées:', this.boutiques);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des boutiques:', err);
      }
    });
  }


  filterBoutiques(): void {
    const term = this.searchTerm.toLowerCase();
  
    if (!term) {
      this.filteredBoutiques = [...this.boutiques]; // Réafficher toutes les boutiques si le champ est vide
      return;
    }
  
    this.filteredBoutiques = this.boutiques.filter(boutique =>
      boutique.nomBoutique.toLowerCase().includes(term) ||
      boutique.adresse.toLowerCase().includes(term) 
    );
  }
  
  

  clearSearch(): void {
    this.searchTerm = '';
    this.filteredBoutiques = this.boutiques; // Réinitialise la liste affichée
  }
 

}
