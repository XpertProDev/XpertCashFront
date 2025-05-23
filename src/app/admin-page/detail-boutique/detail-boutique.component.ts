import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoutiqueService } from '../SERVICES/boutique-service';
import { Boutique } from '../MODELS/boutique-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-boutique',
  imports: [
    CommonModule
  ],
  templateUrl: './detail-boutique.component.html',
  styleUrl: './detail-boutique.component.scss'
})
export class DetailBoutiqueComponent implements OnInit {

  boutique: Boutique | null = null;
  isLoading = false;
  errorMessage: string | null = null;

  isUpdating = false;
  showConfirmationModal = false;
  confirmationTitle = '';
  confirmationMessage = '';
  pendingStatusChange: boolean | null = null;
  private checkboxRef?: HTMLInputElement;

  constructor(
    private route: ActivatedRoute,
    private boutiqueService: BoutiqueService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.loadBoutique();
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

}
