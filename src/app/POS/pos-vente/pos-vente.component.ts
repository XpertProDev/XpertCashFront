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
  
  // Déclaration des nouvelles propriétés
  currentQuantityInput: string = '';
  selectedProduct: ProduitDetailsResponseDTO | null = null;
  quantityMode: boolean = true;
  selectedQuantities: Map<number, number> = new Map(); // Ajout de cette ligne
  showStockWarning = false;

  constructor(
    private router: Router,
    private viewState: ViewStateService,
    private categorieService: CategorieService
  ) {}

  ngOnInit() {
    const savedView = localStorage.getItem('viewPreference');
    this.isListView = savedView ? savedView === 'list' : true;
    
    this.viewState.isListView$.subscribe(view => {
      this.isListView = view;
    });

    if (!this.categories.length) {
        this.loadCategories();
    }
  }

  loadCategories() {
    this.categorieService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
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
    
    if (photoPath.startsWith('http')) {
      return photoPath;
    }
    
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
  addToCart(produit: ProduitDetailsResponseDTO): void {
    this.selectProduct(produit);
    
    if (this.currentQuantityInput) {
      this.applyQuantityToProduct();
    } else {
      const currentQty = this.getSelectedQuantity(produit.id);
      this.selectedQuantities.set(produit.id, currentQty + 1);
    }
  }

  // Méthode pour diminuer la quantité
  decreaseQuantity(produit: ProduitDetailsResponseDTO) {
    const currentQty = this.selectedQuantities.get(produit.id) || 0;
    
    if (currentQty > 0) {
      this.selectedQuantities.set(produit.id, currentQty - 1);
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

  // getAvailableStock(produit: ProduitDetailsResponseDTO): number {
  //   const selectedQty = this.selectedQuantities.get(produit.id) || 0;
  //   return produit.quantite - selectedQty;
  // }

  getAvailableStock(produit: ProduitDetailsResponseDTO): number {
    // Stock total initial (non affecté par les sélections)
    return produit.quantite;
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

  // Méthode pour gérer les touches du clavier
  handleKeyPress(key: string): void {
    if (!this.selectedProduct || !this.quantityMode) return;

    switch (key) {
      case 'backspace':
        this.currentQuantityInput = this.currentQuantityInput.slice(0, -1);
        break;
      case '+/-':
        // Inversion du signe (optionnel)
        break;
      default:
        // Augmentez la limite à 5 chiffres
        if (this.currentQuantityInput.length < 5) {
          this.currentQuantityInput += key;
        }
    }

    this.applyQuantityToProduct();
  }

  // Appliquer la quantité au produit sélectionné
  // applyQuantityToProduct(): void {
  //   if (!this.selectedProduct || this.currentQuantityInput === '') return;

  //   const quantity = parseInt(this.currentQuantityInput, 10);
  //   if (isNaN(quantity)) return; // Correction de la syntaxe ici

  //   const availableStock = this.getAvailableStock(this.selectedProduct);
    
  //   if (quantity > 0 && quantity <= availableStock) {
  //     this.selectedQuantities.set(this.selectedProduct.id, quantity);
  //   }
  // }

applyQuantityToProduct(): void {
  if (!this.selectedProduct || this.currentQuantityInput === '') return;

  const quantity = parseInt(this.currentQuantityInput, 10);
  if (isNaN(quantity)) return;

  // Vérifier le stock disponible
  const availableStock = this.selectedProduct.quantite; // Stock total initial
  
  if (quantity > 0 && quantity <= availableStock) {
    this.selectedQuantities.set(this.selectedProduct.id, quantity);
  } else {
    this.selectedQuantities.set(this.selectedProduct.id, availableStock);
    this.currentQuantityInput = availableStock.toString();
    
    this.showStockWarning = true;
    setTimeout(() => this.showStockWarning = false, 3000);
    // Vous pouvez ajouter une notification à l'utilisateur ici
  }
}

  // Sélectionner un produit et initialiser la quantité
  selectProduct(produit: ProduitDetailsResponseDTO): void {
    if (this.getAvailableStock(produit) <= 0) return;

    this.selectedProduct = produit;
    const currentQty = this.getSelectedQuantity(produit.id);
    this.currentQuantityInput = currentQty > 0 ? currentQty.toString() : '';
  }

  // Suppression des méthodes inutilisées
  // remove: applyQuantity(), addToCartWithQuantity(), handleProductClick()
  // et resetQuantityInput() car elles ne sont pas utilisées dans le flux principal
}