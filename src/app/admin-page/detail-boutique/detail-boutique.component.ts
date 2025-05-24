import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoutiqueService } from '../SERVICES/boutique-service';
import { Boutique } from '../MODELS/boutique-model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-boutique',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './detail-boutique.component.html',
  styleUrl: './detail-boutique.component.scss'
})
export class DetailBoutiqueComponent implements OnInit {
  isModificationFormVisible = false;
  boutique: Boutique | null = null;
  isLoading = false;
  errorMessage: string | null = null;
  boutiqueForm!: FormGroup;
  successMessage: string | null = null;
  successMessageTimeout: any;
  updateTimeout: any;

  isUpdating = false;
  isUpdating_boutique = false;
  showConfirmationModal = false;
  confirmationTitle = '';
  confirmationMessage = '';
  pendingStatusChange: boolean | null = null;
  private checkboxRef?: HTMLInputElement;

  constructor(
    private route: ActivatedRoute,
    private boutiqueService: BoutiqueService,
    private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {

  }

  ngOnInit(): void {
    this.initForm();
    this.loadBoutique();
  }

  private initForm(): void {
    this.boutiqueForm = this.fb.group({
      nomBoutique: ['', Validators.required],
      adresse: [''],
      email: [''],
      telephone: ['', [Validators.pattern(/^\d{8,15}$/)]],
    });
  }

  private loadBoutique(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (!id) {
      this.errorMessage = 'ID de boutique invalide';
      this.isLoading = false;
      return;
    }

    this.boutiqueService.getBoutiqueById(+id).subscribe({
      next: (boutique) => {
        this.boutique = boutique;
        this.boutiqueForm.patchValue({
          nomBoutique: boutique.nomBoutique,
          adresse: boutique.adresse,
          email: boutique.email,
          telephone: boutique.telephone
        });
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Échec du chargement des données';
        this.isLoading = false;
      }
    });
  }

  getStatusText(): string {
    return this.boutique?.actif ? 'Actif' : 'Inactif';
  }
 
  getStatusColor(): string {
      return this.boutique?.actif ? '#008000' : '#ff0000';
  }

// Modifiez la méthode existante
  toggleBoutiqueStatus(event: Event): void {
    event.preventDefault();
    this.checkboxRef = event.target as HTMLInputElement;
    const newStatus = this.checkboxRef.checked;
    this.pendingStatusChange = newStatus;

    this.confirmationTitle = newStatus 
      ? 'Activation de la boutique' 
      : 'Désactivation de la boutique';

    this.confirmationMessage = newStatus
      ? 'Êtes-vous sûr de vouloir activer cette boutique ? Les utilisateurs pourront y accéder.'
      : 'Êtes-vous sûr de vouloir désactiver cette boutique ? L\'accès sera bloqué.';

    this.showConfirmationModal = true;
  }

  // Ajoutez ces nouvelles méthodes
  cancelAction(): void {
    this.showConfirmationModal = false;
    if (this.checkboxRef) {
      this.checkboxRef.checked = !this.checkboxRef.checked;
    }
    this.pendingStatusChange = null;
  }

  handleStatusChange(): void {
    if (!this.boutique || this.pendingStatusChange === null) return;

    this.isUpdating = true;
    this.showConfirmationModal = false;

    const operation$ = this.pendingStatusChange 
      ? this.boutiqueService.activerBoutique(this.boutique.id)
      : this.boutiqueService.desactiverBoutique(this.boutique.id);

    operation$.subscribe({
      next: () => {
        this.loadBoutique();
        this.isUpdating = false;
      },
      error: (err) => {
        console.error(err);
        this.isUpdating = false;
        if (this.checkboxRef) {
          this.checkboxRef.checked = !this.pendingStatusChange;
        }
        this.showErrorMessage();
      }
    });
  }

  private showSuccessMessage(action: string): void {
    // Implémenter une notification ou message temporaire
    alert(`Boutique ${action} avec succès !`);
  }

  private showErrorMessage(): void {
    alert('Échec de la mise à jour du statut');
  }

  onSubmitBoutique(): void {
    if (this.boutiqueForm.invalid || !this.boutique) return;

    this.isUpdating_boutique = true;
    this.errorMessage = null;
    this.successMessage = null;

    // Clear les timeouts précédents
    clearTimeout(this.successMessageTimeout);
    clearTimeout(this.updateTimeout);

    this.boutiqueService.updateBoutique(this.boutique.id, this.boutiqueForm.value)
      .subscribe({
          next: (response) => {
            if (this.boutique) {
              this.boutique = { 
                ...this.boutique, 
                ...this.boutiqueForm.value 
              };
            }
            
            // Clear les timeouts précédents
            clearTimeout(this.successMessageTimeout);
            clearTimeout(this.updateTimeout);

            // Désactiver le loading après 2 secondes
            this.updateTimeout = setTimeout(() => {
              this.isUpdating_boutique = false;
              // Afficher le message de succès après la fin du loading
              this.successMessage = 'Boutique mise à jour avec succès !';
              this.successMessageTimeout = setTimeout(() => {
                this.successMessage = null;
              }, 5000);
            }, 2000);
          },error: (err) => {
          this.isUpdating_boutique = false;
          this.errorMessage = err.error?.message || 'Erreur lors de la mise à jour';
        }
      });
  }

  toggleModificationForm() {
    this.isModificationFormVisible = !this.isModificationFormVisible;
    this.cd.detectChanges(); // Force la mise à jour du DOM
  }

  

}
