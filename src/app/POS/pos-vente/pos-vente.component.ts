import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ViewStateService } from '../pos-accueil/view-state.service';
import { Categorie } from 'src/app/admin-page/MODELS/categorie.model';
import { CategorieService } from 'src/app/admin-page/SERVICES/categorie.service';
import { ProduitDetailsResponseDTO } from 'src/app/admin-page/MODELS/produit-category.model';
import { CommandeStateService } from 'src/app/admin-page/SERVICES/commande-state.service';

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
  // selectedQuantities: Map<number, number> = new Map(); // Ajout de cette ligne
  showStockWarning = false;
  cart: Map<number, number> = new Map();

  totalAmount: number = 0;

  selectedPaymentMethod: string = 'Espèces'; // 'cash', 'card', 'account'
  enteredAmount: string = '';
  paymentAmount: number = 0;
  changeDue: number = 0;
  isAmountEntered: boolean = false;

  constructor(
    private router: Router,
    private viewState: ViewStateService,
    private categorieService: CategorieService,
    private commandeState: CommandeStateService
  ) {
    this.commandeState.activeCommandeId$.subscribe(() => {
      this.loadActiveCart();
    });
  }

  ngOnInit() {
    const savedView = localStorage.getItem('viewPreference');
    this.isListView = savedView ? savedView === 'list' : true;

    this.loadActiveCart();
    
    this.viewState.isListView$.subscribe(view => {
      this.isListView = view;
    });

    if (!this.categories.length) {
        this.loadCategories();
    }
  }

  private loadActiveCart() {
    this.cart = new Map(this.commandeState.getActiveCart());
  }

  private saveActiveCart() {
    this.commandeState.updateActiveCart(this.cart);
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
    this.totalAmount = this.getTotalCart(); // S'assurer que totalAmount est défini
    this.enteredAmount = '';
    this.paymentAmount = 0;
    this.changeDue = 0;
    this.isAmountEntered = false;
    this.selectedPaymentMethod = 'Espèces';
  }

  handlePaymentKeyPress(key: string): void {
    switch (key) {
      case 'backspace':
        this.enteredAmount = this.enteredAmount.slice(0, -1);
        break;
      case ',':
        if (!this.enteredAmount.includes(',')) {
          this.enteredAmount += ',';
        }
        break;
      case '+/-':
        // Optionnel: inverser le signe si nécessaire
        break;
      default:
        if (this.enteredAmount.length < 10) {
          this.enteredAmount += key;
        }
    }
    
    this.calculatePayment();
  }

  calculatePayment(): void {
    // Convertir l'entrée en nombre (gérer la virgule)
    const enteredValue = parseFloat(this.enteredAmount.replace(',', '.')) || 0;
    
    this.paymentAmount = enteredValue;
    this.isAmountEntered = enteredValue > 0;
    
    // Calculer la monnaie ou le restant
    if (this.paymentAmount >= this.totalAmount) {
      this.changeDue = this.paymentAmount - this.totalAmount;
    } else {
      this.changeDue = this.totalAmount - this.paymentAmount;
    }
  }

  selectPaymentMethod(method: string): void {
    this.selectedPaymentMethod = method;
  }

  // Ajouter complete Payment()
  completePayment(): void {
    // Logique pour finaliser le paiement
    console.log('Paiement complété:', {
      method: this.selectedPaymentMethod,
      amount: this.paymentAmount,
      change: this.changeDue
    });
    
    // Fermer le popup et réinitialiser le panier
    this.closePaymentPopup();
    this.cart.clear();
    this.saveActiveCart();
  }

  closePaymentPopup() {
    this.showPaymentPopup = false;
  }

  // Méthode pour ajouter un produit au panier
   addToCart(produit: ProduitDetailsResponseDTO): void {
    if (this.getAvailableStock(produit) <= 0) return;
    
    // Réinitialiser la saisie
    this.currentQuantityInput = '';
    
    // Toujours incrémenter de 1
    const currentQty = this.cart.get(produit.id) || 0;
    this.cart.set(produit.id, currentQty + 1);
    
    // Mettre à jour le produit sélectionné
    this.selectedProduct = produit;

    this.saveActiveCart(); // Sauvegarder dans le service
    this.updateCommandeTotals();
  }

  // Méthode pour diminuer la quantité
  decreaseQuantity(produit: ProduitDetailsResponseDTO) {
    const currentQty = this.cart.get(produit.id) || 0;
    if (currentQty > 0) {
      const newQty = currentQty - 1;
      this.cart.set(produit.id, newQty);
      
      // Mise à jour du champ de saisie si produit sélectionné
      if (this.selectedProduct?.id === produit.id) {
        this.currentQuantityInput = newQty > 0 ? newQty.toString() : '';
      }
    }
    this.saveActiveCart();
    this.updateCommandeTotals();
  }

  // Méthode pour obtenir la quantité sélectionnée
  getSelectedQuantity(produitId: number): number {
    return this.cart.get(produitId) || 0;
  }

  // Méthode pour supprimer un produit du panier
  removeProduct(productId: number) {
    this.cart.delete(productId);
    this.saveActiveCart();
    if (this.selectedProduct?.id === productId) {
      this.currentQuantityInput = '';
    }
    this.updateCommandeTotals();
  }

  updateCommandeTotals() {
    const totalItems = this.getTotalItems();
    const totalAmount = this.getTotalCart();
    
    // Correction: Utiliser la nouvelle méthode getActiveCommandeId()
    const activeId = this.commandeState.getActiveCommandeId();
    
    this.commandeState.updateCommandeTotals(
      activeId,
      totalItems,
      totalAmount
    );
  }

  getTotalItems(): number {
    let total = 0;
    this.cart.forEach(quantity => total += quantity);
    return total;
  }

  // Méthode pour obtenir les éléments du panier
  getCartItems() {
    const items = [];
    for (const [productId, quantity] of this.cart.entries()) {
      if (quantity > 0) {
        const product = this.displayedProducts.find(p => p.id === productId);
        if (product) items.push({ product, quantity });
      }
    }
    return items;
  }

  // Remplacer l'ancienne méthode par :
  getAvailableStock(produit: ProduitDetailsResponseDTO): number {
    const selectedQty = this.getSelectedQuantity(produit.id);
    return produit.quantite - selectedQty;
  }

  // Méthode pour calculer le total
  getTotalCart(): number {
    let total = 0;
    this.cart.forEach((quantity, productId) => {
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

  applyQuantityToProduct(): void {
    if (!this.selectedProduct || this.currentQuantityInput === '') return;

    const quantity = parseInt(this.currentQuantityInput, 10);
    if (isNaN(quantity)) return;

    // Vérifier le stock disponible
    const availableStock = this.selectedProduct.quantite;
    
    if (quantity > 0 && quantity <= availableStock) {
      this.cart.set(this.selectedProduct.id, quantity);
    } else {
      this.cart.set(this.selectedProduct.id, availableStock);
      this.currentQuantityInput = availableStock.toString();
      
      this.showStockWarning = true;
      setTimeout(() => this.showStockWarning = false, 3000);
    }
    this.saveActiveCart(); // Sauvegarder après modification
  }


}