import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from 'src/app/admin-page/MODELS/CaisseModel/safe-html.pipe';
import { ClickOutsideDirective } from 'src/app/admin-page/MODELS/click-outside.directive';
import { Router, RouterModule } from '@angular/router';
import { BoutiqueService } from 'src/app/admin-page/SERVICES/boutique-service';
import { PosCaisseService } from 'src/app/admin-page/SERVICES/CaisseService/pos-caisse-service';
import { CaisseResponse, OuvrirCaisseRequest } from 'src/app/admin-page/MODELS/CaisseModel/caisse.model';
import { BoutiqueStateService } from 'src/app/admin-page/SERVICES/CaisseService/boutique-state.service';
import { CaisseStateService } from 'src/app/admin-page/SERVICES/CaisseService/caisse-state.service';
import { UsersService } from 'src/app/admin-page/SERVICES/users.service';

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

  // selectedBoutiqueIdForList: number | null = null;
  selectedBoutiqueIdForList: number = 0; 
  isLoadingCaisses = false;

  openMenuId: number | null = null;

  constructor(
    private boutiqueService: BoutiqueService,
    private caisseState: CaisseStateService,
    private posCaisseService: PosCaisseService,
    private boutiqueState: BoutiqueStateService,
    private router: Router,
    private usersService: UsersService,
  ) {}

  ngOnInit(): void {
    this.loadBoutiques();

    // Initialiser avec la boutique sauvegardée
    const savedBoutiqueId = this.boutiqueState.getCurrentValue();
    if (savedBoutiqueId) {
      this.selectedBoutiqueIdForList = savedBoutiqueId;
    }
  }
  
  loadBoutiques(): void {
    // On récupère d'abord l'utilisateur courant
    this.usersService.getUserInfo().subscribe({
      next: (user) => {
        if (user && user.roleType === 'VENDEUR') {
          // Vendeur : ne récupérer que les boutiques qui lui sont assignées
          this.boutiques = user.boutiques || [];
          // Sélectionne la première boutique assignée (ou 0 si aucune)
          this.selectedBoutiqueIdForList = this.getValidBoutiqueId();
          this.boutiqueState.setSelectedBoutique(this.selectedBoutiqueIdForList);
          if (this.selectedBoutiqueIdForList) {
            this.loadDerniereCaisseVendeur(this.selectedBoutiqueIdForList);
          }
        } else {
          // Admin / Manager : récupérer toutes les boutiques de l'entreprise
          this.boutiqueService.getBoutiquesByEntreprise().subscribe({
            next: (boutiques) => {
              this.boutiques = boutiques;
              this.selectedBoutiqueIdForList = this.getValidBoutiqueId();
              this.boutiqueState.setSelectedBoutique(this.selectedBoutiqueIdForList);
              if (this.selectedBoutiqueIdForList) {
                this.loadDerniereCaisseVendeur(this.selectedBoutiqueIdForList);
              }
            },
            error: (err) => {
              console.error('Erreur lors du chargement des boutiques', err);
              this.errorMessage = 'Erreur lors du chargement des boutiques';
            }
          });
        }
      },
      error: (err) => {
        console.error('Impossible de récupérer l\'utilisateur courant', err);
        // Fallback : charger toutes les boutiques (ou laisser vide)
        this.boutiqueService.getBoutiquesByEntreprise().subscribe({
          next: (boutiques) => this.boutiques = boutiques,
          error: () => this.boutiques = []
        });
      }
    });
  }

  private getValidBoutiqueId(): number {
    return this.boutiqueState.getCurrentValue() || 
          (this.boutiques.length > 0 ? this.boutiques[0].id : 0);
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
  
  const currentBoutiqueId = boutiqueId; // Sauvegarder l'ID actuel

  this.posCaisseService.getDerniereCaisseVendeur(boutiqueId).subscribe({
    next: (response) => {
      // Vérifier si la sélection n'a pas changé pendant la requête
      if (this.selectedBoutiqueIdForList !== currentBoutiqueId) {
        this.isLoadingCaisses = false;
        return;
      }

      if (typeof response === 'string') {
        this.errorMessage = response;
      } else if (response && response.boutiqueId === boutiqueId) { // Filtrer par boutique
        this.caisses = [response];
      } else {
        this.errorMessage = 'Aucune caisse disponible pour cette boutique';
      }
      this.isLoadingCaisses = false;
    },
    error: (error) => {
      // Vérifier si la sélection n'a pas changé pendant la requête
      if (this.selectedBoutiqueIdForList !== currentBoutiqueId) {
        this.isLoadingCaisses = false;
        return;
      }
      
      console.error('Erreur lors du chargement de la dernière caisse', error);
      this.isLoadingCaisses = false;
      this.errorMessage = error.message || 'Erreur lors du chargement de la dernière caisse';
    }
  });
}

// Modifier onBoutiqueChange
  onBoutiqueChange(): void {
    if (this.selectedBoutiqueIdForList === null) return;
    
    this.boutiqueState.setSelectedBoutique(this.selectedBoutiqueIdForList);
    this.caisses = [];
    this.errorMessage = null;
    this.loadDerniereCaisseVendeur(this.selectedBoutiqueIdForList);
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

        // CORRECTION : Utiliser triggerRefresh() au lieu de notifyCaissesUpdated()
        this.caisseState.notifyCaisseCreated(response);
        this.caisseState.triggerRefresh();
        
        // Rediriger vers l'interface de vente
        // this.router.navigate(['/pos/vente'], {
        //   state: { caisse: response }
        // });
        // Recharger les caisses pour la boutique actuellement sélectionnée
        if (this.selectedBoutiqueIdForList !== null) {
          this.loadDerniereCaisseVendeur(this.selectedBoutiqueIdForList);
        }
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

  goToDashboard() {
    this.router.navigate(['/analytics'])
  }

}
