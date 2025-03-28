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

  toggleBoutiqueStatus(event: any): void {
    if (!this.boutique) return;

    const newStatus = event.target.checked;
    this.isUpdating = true;

    const operation$ = newStatus 
        ? this.boutiqueService.activerBoutique(this.boutique.id)
        : this.boutiqueService.desactiverBoutique(this.boutique.id);

    operation$.subscribe({
        next: () => {
            // Rafraîchir les données après modification
            this.loadBoutique(); 
            this.isUpdating = false;
        },
        error: (err) => {
            console.error(err);
            event.target.checked = !newStatus;
            this.isUpdating = false;
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
