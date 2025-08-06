import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CaisseResponse, OuvrirCaisseRequest } from 'src/app/admin-page/MODELS/CaisseModel/caisse.model';
import { SafeHtmlPipe } from 'src/app/admin-page/MODELS/CaisseModel/safe-html.pipe';
import { BoutiqueService } from 'src/app/admin-page/SERVICES/boutique-service';
import { PosCaisseService } from 'src/app/admin-page/SERVICES/CaisseService/pos-caisse-service';

@Component({
  selector: 'app-pos-caisse',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, SafeHtmlPipe],
  templateUrl: './pos-caisse.component.html',
  styleUrl: './pos-caisse.component.scss'
})
export class PosCaisseComponent {
  showModal = false;
  boutiques: any[] = [];
  selectedBoutiqueId: number | null = null;
  montantOuverture: number = 0;
  isLoading = false;
  errorMessage: string | null = null;

  selectedBoutiqueIdForList: number | null = null;
  caisses: CaisseResponse[] = [];
  isLoadingCaisses = false;

  constructor(
    private boutiqueService: BoutiqueService,
    private posCaisseService: PosCaisseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBoutiques();
  }

  loadBoutiques(): void {
    this.boutiqueService.getBoutiquesByEntreprise().subscribe({
      next: (boutiques) => {
        this.boutiques = boutiques;
        
        // Sélection automatique de la première boutique si elle existe
        if (this.boutiques.length > 0) {
          this.selectedBoutiqueIdForList = this.boutiques[0].id;
          
          // Vérification de type avant l'appel
          if (this.selectedBoutiqueIdForList !== null) {
            this.loadCaisses(this.selectedBoutiqueIdForList);
          }
        }
      },
      error: (error) => {
        console.error('Erreur lors du chargement des boutiques', error);
        this.errorMessage = 'Erreur lors du chargement des boutiques';
      }
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedBoutiqueId = null;
    this.montantOuverture = 0;
    this.errorMessage = null;
  }

  // Nouvelle méthode pour charger les caisses
  loadCaisses(boutiqueId: number): void {
    this.isLoadingCaisses = true;
    this.caisses = [];
    
    this.posCaisseService.getCaissesByBoutique(boutiqueId).subscribe({
      next: (caisses) => {
        this.caisses = caisses;
        this.isLoadingCaisses = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des caisses', error);
        this.isLoadingCaisses = false;
        this.errorMessage = 'Erreur lors du chargement des caisses';
      }
    });
  }

  // Gestion du changement de boutique
  onBoutiqueChange(): void {
    // Vérification de type avant l'appel
    if (this.selectedBoutiqueIdForList !== null) {
      this.loadCaisses(this.selectedBoutiqueIdForList);
    } else {
      this.caisses = []; // Réinitialiser la liste si aucune boutique sélectionnée
    }
  }

  submitForm() {
    if (!this.selectedBoutiqueId) {
      this.errorMessage = 'Veuillez sélectionner une boutique';
      return;
    }

    if (this.montantOuverture < 0) {
      this.errorMessage = 'Le montant ne peut pas être négatif';
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    const request: OuvrirCaisseRequest = {
      boutiqueId: this.selectedBoutiqueId,
      montantInitial: this.montantOuverture
    };

    this.posCaisseService.ouvrirCaisse(request).subscribe({
      next: (response) => {
        console.log('Caisse ouverte avec succès', response);
        this.isLoading = false;
        this.closeModal();
        
        // Rediriger vers l'interface de vente
        // this.router.navigate(['/pos/vente'], {
        //   state: { caisse: response }
        // });
      },
      error: (error) => {
      console.error('Erreur lors de l\'ouverture de la caisse', error);
      this.isLoading = false;
      
      let rawError = '';
      
      if (error.error?.error) rawError = error.error.error;
      else if (error.error?.message) rawError = error.error.message;
      else if (error.message) rawError = error.message;
      else rawError = 'Erreur inconnue lors de l\'ouverture de la caisse';
      
      // Supprime le préfixe avant " : "
      const prefixIndex = rawError.indexOf(': ');
      this.errorMessage = prefixIndex > 0 
        ? rawError.substring(prefixIndex + 2) 
        : rawError;
    }
    });
  }

  onCaisseButtonClick(caisse: CaisseResponse): void {
    if (caisse.statut === 'OUVERTE') {
      this.router.navigate(['/pos-accueil'], {
        state: { caisse: caisse }
      });
    }
  }

  
}