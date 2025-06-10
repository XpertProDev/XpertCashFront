import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-edit-entreprise',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './detail-edit-entreprise.component.html',
  styleUrl: './detail-edit-entreprise.component.scss'
})
export class DetailEditEntrepriseComponent {

  entrepriseForm!: FormGroup;
  errorMessage: string = '';
  errorMessageApi: string = '';
  successMessage = '';

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  getFormEntreprise() {
    this.entrepriseForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.email]],
      telephone: ['', [Validators.pattern(/^\d+$/)]],
      pays: [''],
      adresse: [''],
      siege: [''],
      secteur: ['']
    });
  }

  initializeForm() {
    
  }

  goToClients() {
    this.router.navigate(['/clients']);
  }

  onSubmit() {}

}
