import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EntrepriseClient } from '../../MODELS/entreprise-clients-model';
import { EntrepriseClientService } from '../../SERVICES/entreprise-clients-service';

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
  successMessage: string = '';
  entrepriseId!: number;
  entrepriseData!: EntrepriseClient;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private entrepriseService: EntrepriseClientService
  ) {}

 ngOnInit() {
    this.initializeForm();
    this.route.params.subscribe(params => {
      this.entrepriseId = +params['id'];
      this.loadEntrepriseData();
    });
  }

  loadEntrepriseData() {
    this.entrepriseService.getEntrepriseById(this.entrepriseId).subscribe({
      next: (data) => {
        this.entrepriseData = data;
        this.entrepriseForm.patchValue({
          nom: data.nom,
          email: data.email,
          telephone: data.telephone,
          pays: data.pays,
          adresse: data.adresse,
          siege: data.siege,
          secteur: data.secteur
        });
      },
      error: (err) => {
        this.errorMessage = err.message || 'Erreur lors du chargement';
        setTimeout(() => this.router.navigate(['/clients']), 3000);
      }
    });
  }

  initializeForm() {
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

  goToClients() {
    this.router.navigate(['/clients']);
  }

  onSubmit() {
    if (this.entrepriseForm.invalid) return;

    const updatedData: EntrepriseClient = {
      ...this.entrepriseData,
      ...this.entrepriseForm.value
    };

    this.entrepriseService.updateEntrepriseClient(this.entrepriseId, updatedData).subscribe({
      next: () => {
        this.successMessage = 'Entreprise modifiée avec succès!';
        this.errorMessage = '';
        setTimeout(() => this.router.navigate(['/clients']), 2000);
      },
      error: (err) => {
        this.errorMessage = err.message || 'Erreur lors de la modification';
        this.successMessage = '';
      }
    });
  }

}
