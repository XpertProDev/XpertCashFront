import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClickOutsideDirective } from 'src/app/admin-page/MODELS/click-outside.directive';
import { environment } from 'src/environments/environment';
import { ViewStateService } from '../pos-accueil/view-state.service';
import { ProduitDetailsResponseDTO } from 'src/app/admin-page/MODELS/produit-category.model';
import { CategorieService } from 'src/app/admin-page/SERVICES/categorie.service';
import { CommandeStateService } from 'src/app/admin-page/SERVICES/commande-state.service';

@Component({
  selector: 'app-pos-commande',
  imports: [FormsModule, CommonModule],
  templateUrl: './pos-commande.component.html',
  styleUrl: './pos-commande.component.scss'
})
export class PosCommandeComponent {
  private apiUrl = environment.imgUrl;
  isListView = true;
  showDropdown = false;
  commandes: any[] = [];
  products: ProduitDetailsResponseDTO[] = [];
  activeCommandeId: string = '';

  constructor(
    private router: Router,
    private viewState: ViewStateService,
    private commandeState: CommandeStateService,
    private categorieService: CategorieService
  ) {}

  ngOnInit() {
    this.viewState.isListView$.subscribe(view => {
      this.isListView = view;
    });

    this.commandeState.activeCommandeId$.subscribe(id => {
      this.activeCommandeId = id;
      this.loadCommandes();
    });
    
    this.loadProducts();
  }

  loadProducts() {
    this.categorieService.getCategories().subscribe({
      next: (categories) => {
        this.products = [];
        categories.forEach(categorie => {
          if (categorie.produits) {
            this.products = [...this.products, ...categorie.produits];
          }
        });
        this.loadCommandes();
      },
      error: (error) => console.error('Erreur chargement produits', error)
    });
  }

  loadCommandes() {
    this.commandes = this.commandeState.getAllCommandesIds().map(id => {
      const commande = this.commandeState.getCommandeDetails(id);
      let totalItems = 0;
      let totalAmount = 0;

      // Calculer les totaux
      if (commande?.cart) {
        commande.cart.forEach((quantity, productId) => {
          const product = this.products.find(p => p.id === productId);
          if (product) {
            totalItems += quantity;
            totalAmount += quantity * product.prixVente;
          }
        });
        
        // Mettre à jour les totaux dans le service
        this.commandeState.updateCommandeTotals(id, totalItems, totalAmount);
      }

      return {
        id,
        totalItems,
        totalAmount,
        createdAt: commande?.createdAt || new Date()
      };
    });
  }

  removeCommande(id: string) {
    this.commandeState.removeCommande(id);
    this.loadCommandes();
  }

  setActiveCommande(id: string) {
    this.commandeState.setActiveCommande(id);
  }

  toggleView(viewType: 'grid' | 'list') {
    this.isListView = viewType === 'grid';
    this.showDropdown = true;
    
    // Stocker la préférence dans le localStorage
    localStorage.setItem('viewPreference', viewType);
  }

  pagePosVente() {
    // this.router.navigate(['/pos-accueil']);
  }

}
