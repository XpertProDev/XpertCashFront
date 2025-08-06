import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoutiqueService } from 'src/app/admin-page/SERVICES/boutique-service';
import { UsersService } from 'src/app/admin-page/SERVICES/users.service';

@Component({
  selector: 'app-pos-caisse',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './pos-caisse.component.html',
  styleUrl: './pos-caisse.component.scss'
})
export class PosCaisseComponent {
  showModal = false;
  boutiques: any[] = []; // Liste des boutiques
  selectedBoutiqueId: number | null = null; // Boutique sélectionnée
  montantOuverture: number = 0; // Montant à l'ouverture

  constructor(
    private boutiqueService: BoutiqueService,
  ) {}

  ngOnInit(): void {
    this.loadBoutiques();
  }

  // Charge les boutiques depuis l'API
  loadBoutiques(): void {
    this.boutiqueService.getBoutiquesByEntreprise().subscribe({
      next: (boutiques) => {
        this.boutiques = boutiques;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des boutiques', error);
      }
    });
  }

  // Ouvre le popup
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    // Réinitialise les valeurs
    this.selectedBoutiqueId = null;
    this.montantOuverture = 0;
  }

  submitForm() {
    if (!this.selectedBoutiqueId) {
      alert('Veuillez sélectionner une boutique');
      return;
    }

    console.log("Caisse créée !", {
      boutiqueId: this.selectedBoutiqueId,
      montant: this.montantOuverture
    });
    
    this.closeModal();
  }
  
}
