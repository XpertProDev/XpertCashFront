import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoutiqueService } from '../SERVICES/boutique-service';
import { Boutique } from '../MODELS/boutique-model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
  errorMessageApi: string | null = null;
  successMessageTimeout: any;
  updateTimeout: any;
  isEditing = false;
  showTransferModal = false;
  allBoutiques: Boutique[] = [];
  filteredBoutiques: Boutique[] = [];
  searchTerm = '';
  showCopyModal = false;
  copySearchTerm = '';
  filteredCopyBoutiques: Boutique[] = [];

  control = new FormControl();

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

  // Méthodes pour gérer le popup de copie
  toggleCopyModal(): void {
      this.showCopyModal = !this.showCopyModal;
      if (this.showCopyModal) {
          // Réinitialiser la recherche
          this.copySearchTerm = '';
          this.filterCopyBoutiques();
      }
  }

  // Sélectionner une boutique pour la copie
  selectCopyBoutique(boutique: Boutique): void {
      console.log('Boutique sélectionnée pour la copie :', boutique);
      
      // Ici vous pouvez implémenter la logique de copie
      // Exemple: this.copyProductsToBoutique(boutique.id);
      
      // Fermer le modal après sélection
      this.closeCopyModal();
      
      // Afficher un message de succès
      this.successMessage = `Produits copiés vers ${boutique.nomBoutique} avec succès!`;
      setTimeout(() => this.successMessage = null, 5000);
  }

  // Filtrer les boutiques pour la copie
  filterCopyBoutiques(): void {
      if (!this.copySearchTerm) {
          this.filteredCopyBoutiques = [...this.allBoutiques];
          return;
      }
      
      const term = this.copySearchTerm.toLowerCase();
      this.filteredCopyBoutiques = this.allBoutiques.filter(b => 
          b.nomBoutique.toLowerCase().includes(term)
      );
  }

  closeCopyModal(): void {
      this.showCopyModal = false;
  }

  toggleEditing(): void {
    this.isEditing = !this.isEditing;
    
    if (this.isEditing) {
      this.control.enable();
      this.boutiqueForm.enable();
    } else {
      // Réinitialiser les erreurs en sortant du mode édition
      this.errorMessage = '';
      this.control.disable();
      this.boutiqueForm.disable();
    }
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

      // Démarrer un timer pour le délai minimum de 3 secondes
      const minDelay = 3000;
      const startTime = Date.now();

      const operation$ = this.pendingStatusChange 
          ? this.boutiqueService.activerBoutique(this.boutique.id)
          : this.boutiqueService.desactiverBoutique(this.boutique.id);

      operation$.subscribe({
          next: () => {
              const elapsed = Date.now() - startTime;
              const remainingDelay = Math.max(minDelay - elapsed, 0);
              
              // Attendre le temps restant pour compléter les 3 secondes
              setTimeout(() => {
                  this.loadBoutique();
                  this.isUpdating = false;
              }, remainingDelay);
          },
          error: (err) => {
              const elapsed = Date.now() - startTime;
              const remainingDelay = Math.max(minDelay - elapsed, 0);
              
              setTimeout(() => {
                  console.error(err);
                  this.isUpdating = false;
                  if (this.checkboxRef) {
                      this.checkboxRef.checked = !this.pendingStatusChange;
                  }
                  this.showErrorMessage();
              }, remainingDelay);
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

  navigateBack(){
    this.router.navigate(['/boutique']);
  }

  toggleTransferModal(): void {
    this.showTransferModal = !this.showTransferModal;
    if (this.showTransferModal) {
        this.loadAllBoutiques();
    }
  }

  toggleCopierModal(): void {
    this.showTransferModal = !this.showTransferModal;
    if (this.showTransferModal) {
        this.loadAllBoutiques();
    }
  }

  closeTransferModal(): void {
    this.showTransferModal = false;
    this.searchTerm = '';
  }

  // Charger toutes les boutiques (sauf la boutique actuelle)
  loadAllBoutiques(): void {
    this.boutiqueService.getBoutiquesByEntreprise().subscribe({
        next: (boutiques) => {
            this.allBoutiques = boutiques.filter(b => b.id !== this.boutique?.id);
            
            // Initialiser les deux listes filtrées
            this.filteredCopyBoutiques = [...this.allBoutiques];
            this.filteredBoutiques = [...this.allBoutiques];
        },
        error: (err) => {
            console.error('Erreur lors du chargement des boutiques', err);
        }
    });
  }

  // Filtrer les boutiques selon la recherche
  filterBoutiques(): void {
      if (!this.searchTerm) {
          this.filteredBoutiques = [...this.allBoutiques];
          return;
      }
      
      const term = this.searchTerm.toLowerCase();
      this.filteredBoutiques = this.allBoutiques.filter(b => 
          b.nomBoutique.toLowerCase().includes(term)
      );
  }



  // Sélectionner une boutique pour le transfert
  selectBoutique(boutique: Boutique): void {
      console.log('Boutique sélectionnée pour le transfert :', boutique);
      // Ici vous pouvez implémenter la logique de transfert
      
      // Fermer le modal après sélection
      this.closeTransferModal();
  }
  

}
