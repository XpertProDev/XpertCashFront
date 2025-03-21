import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  ) {}

  ngOnInit() {}

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
 

}
