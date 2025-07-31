import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ViewStateService } from '../pos-accueil/view-state.service';
import { Categorie } from 'src/app/admin-page/MODELS/categorie.model';
import { CategorieService } from 'src/app/admin-page/SERVICES/categorie.service';
import { ProduitDetailsResponseDTO } from 'src/app/admin-page/MODELS/produit-category.model';

@Component({
  selector: 'app-pos-vente',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './pos-vente.component.html',
  styleUrl: './pos-vente.component.scss'
})
export class PosVenteComponent {
  isListView = true;
  showDropdown = false;
  showPaymentPopup = false;
  categories: Categorie[] = [];
  selectedCategoryId: number | null = null;
  displayedProducts: ProduitDetailsResponseDTO[] = [];
  // Ajoutez cette propriété pour suivre les quantités sélectionnées
  selectedQuantities: Map<number, number> = new Map();

  constructor(
    private router: Router,
    private viewState: ViewStateService,
    private categorieService: CategorieService
  ) {}

  ngOnInit() {
    // Récupérer l'état initial
    const savedView = localStorage.getItem('viewPreference');
    this.isListView = savedView ? savedView === 'list' : true;
    
    // S'abonner aux changements
    this.viewState.isListView$.subscribe(view => {
      this.isListView = view;
    });

    // Récupérez les catégories
    if (!this.categories.length) {
        this.loadCategories();
    }
  }

  loadCategories() {
    this.categorieService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        console.log('Catégories chargées:', this.categories);
        
        // Afficher tous les produits au démarrage
        this.displayedProducts = [];
        this.categories.forEach(categorie => {
          if (categorie.produits) {
            this.displayedProducts = [...this.displayedProducts, ...categorie.produits];
          }
        });
      },
      error: (error) => {
        console.error('Erreur lors du chargement des catégories', error);
      }
    });
  }

  showAllProducts() {
    this.selectedCategoryId = null;
    this.displayedProducts = [];
    this.categories.forEach(categorie => {
      if (categorie.produits) {
        this.displayedProducts = [...this.displayedProducts, ...categorie.produits];
      }
    });
  }

  selectCategory(categoryId: number | undefined) {
  if (categoryId === undefined) return;
  
  this.selectedCategoryId = categoryId;
  
  const selectedCategory = this.categories.find(c => c.id === categoryId);
  
  if (selectedCategory && selectedCategory.produits) {
    this.displayedProducts = selectedCategory.produits;
  } else {
    this.displayedProducts = [];
  }
}

  getProductImage(photoPath: string): string {
    if (!photoPath || photoPath === '') {
      return 'assets/img/default-product.png';
    }
    
    // Si le chemin est absolu
    if (photoPath.startsWith('http')) {
      return photoPath;
    }
    
    // Si le chemin commence par /uploads
    if (photoPath.startsWith('/uploads')) {
      return environment.imgUrl.replace('/api', '') + photoPath;
    }
    
    return photoPath;
  }

  openPaymentPopup() {
    this.showPaymentPopup = true;
  }

  closePaymentPopup() {
    this.showPaymentPopup = false;
  }

  // Méthode pour ajouter un produit au panier
  addToCart(produit: ProduitDetailsResponseDTO) {
    const currentQty = this.selectedQuantities.get(produit.id) || 0;
    
    // Vérifiez que la quantité ne dépasse pas le stock
    if (currentQty < produit.quantite) {
      this.selectedQuantities.set(produit.id, currentQty + 1);
    } else {
      console.log('Stock insuffisant');
      // Vous pouvez ajouter une notification ici
    }
  }

  // Méthode pour diminuer la quantité
  decreaseQuantity(produit: ProduitDetailsResponseDTO) {
    console.log('Decreasing quantity for product:', produit.id);
    
    const currentQty = this.selectedQuantities.get(produit.id) || 0;
    
    if (currentQty > 0) {
      this.selectedQuantities.set(produit.id, currentQty - 1);
      console.log('New quantity:', currentQty - 1);
    } else {
      console.log('Quantity already at 0');
    }
  }

  // Méthode pour obtenir la quantité sélectionnée
  getSelectedQuantity(produitId: number): number {
    return this.selectedQuantities.get(produitId) || 0;
  }

  // Méthode pour obtenir les éléments du panier
  getCartItems(): { product: ProduitDetailsResponseDTO; quantity: number }[] {
    const items: { product: ProduitDetailsResponseDTO; quantity: number }[] = [];
    
    this.selectedQuantities.forEach((quantity, productId) => {
      if (quantity > 0) {
        const product = this.displayedProducts.find(p => p.id === productId);
        if (product) {
          items.push({ product, quantity });
        }
      }
    });
    
    return items;
  }

  // Méthode pour supprimer un produit du panier
  removeProduct(productId: number) {
    this.selectedQuantities.delete(productId);
  }

  // Méthode pour calculer le total
  getTotalCart(): number {
    let total = 0;
    this.selectedQuantities.forEach((quantity, productId) => {
      const product = this.displayedProducts.find(p => p.id === productId);
      if (product) {
        total += quantity * product.prixVente;
      }
    });
    return total;
  }

}
