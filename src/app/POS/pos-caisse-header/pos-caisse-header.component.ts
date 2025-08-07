import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from 'src/app/admin-page/MODELS/CaisseModel/safe-html.pipe';
import { ClickOutsideDirective } from 'src/app/admin-page/MODELS/click-outside.directive';
import { Router, RouterModule } from '@angular/router';
import { BoutiqueService } from 'src/app/admin-page/SERVICES/boutique-service';
import { PosCaisseService } from 'src/app/admin-page/SERVICES/CaisseService/pos-caisse-service';
import { CaisseResponse, OuvrirCaisseRequest } from 'src/app/admin-page/MODELS/CaisseModel/caisse.model';

@Component({
  selector: 'app-pos-caisse-header',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterModule, SafeHtmlPipe],
  templateUrl: './pos-caisse-header.component.html',
  styleUrl: './pos-caisse-header.component.scss'
})
export class PosCaisseHeaderComponent {

  showModal = false;
    boutiques: any[] = [];
    selectedBoutiqueId: number | null = null;
    montantOuverture: number = 0;
    isLoading = false;
    errorMessage: string | null = null;
    caisses: CaisseResponse[] = [];
  
    selectedBoutiqueIdForList: number | null = null;
    isLoadingCaisses = false;
  
    openMenuId: number | null = null;
  
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
        
        if (this.boutiques.length > 0) {
          this.selectedBoutiqueIdForList = this.boutiques[0].id;
          
          if (this.selectedBoutiqueIdForList !== null) {
            this.loadDerniereCaisseVendeur(this.selectedBoutiqueIdForList);
          }
        }
      },
      error: (error) => {
        console.error('Erreur lors du chargement des boutiques', error);
        this.errorMessage = 'Erreur lors du chargement des boutiques';
      }
    });
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

  // Ajouter cette nouvelle méthode dans PosCaisseComponent
  loadDerniereCaisseVendeur(boutiqueId: number): void {
    this.isLoadingCaisses = true;
    this.caisses = [];
    this.errorMessage = null;
    
    this.posCaisseService.getDerniereCaisseVendeur(boutiqueId).subscribe({
      next: (response) => {
        if (typeof response === 'string') {
          // Cas où le backend retourne un message texte
          this.errorMessage = response;
        } else if (response && 'id' in response) {
          // Cas normal où on reçoit un objet CaisseResponse
          this.caisses = [response];
        } else {
          // Cas inattendu
          this.errorMessage = 'Réponse inattendue du serveur';
        }
        this.isLoadingCaisses = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement de la dernière caisse', error);
        this.isLoadingCaisses = false;
        this.errorMessage = error.message || 'Erreur lors du chargement de la dernière caisse';
      }
    });
  }

  onBoutiqueChange(): void {
    if (this.selectedBoutiqueIdForList !== null) {
      this.loadDerniereCaisseVendeur(this.selectedBoutiqueIdForList);
    } else {
      this.caisses = [];
    }
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


  goToPosJournalCaisse() {
    this.router.navigate(['/pos-caisse/pos-journal-caisse'])
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

}
