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
import { VenteResponse } from 'src/app/admin-page/MODELS/VenteModel/vente-model';
import { UsersService } from 'src/app/admin-page/SERVICES/users.service';
import { PosCommandeService } from 'src/app/admin-page/SERVICES/VenteService/pos-commande-service';
import { CfaCurrencyPipe } from 'src/app/admin-page/MODELS/cfa-currency.pipe';

@Component({
  selector: 'app-pos-commande',
  imports: [FormsModule, CommonModule, CfaCurrencyPipe],
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

  activeCommandeCart: Map<number, number> = new Map();
  activeCommandeTotal = 0;
  activeCommandeItems: { product: ProduitDetailsResponseDTO, quantity: number }[] = [];

  ventes: VenteResponse[] = [];
  activeVenteId: number | null = null;
  activeVenteItems: any[] = [];

  activeVente: VenteResponse | null = null;

  constructor(
    public router: Router,
    private viewState: ViewStateService,
    private commandeState: CommandeStateService,
    private categorieService: CategorieService,
    private posCommandeService: PosCommandeService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.viewState.isListView$.subscribe(view => {
      this.isListView = view;
    });

    // Charger les produits d'abord
    this.loadProducts();

    // S'abonner aux mises à jour des commandes
    this.commandeState.commandeUpdated$.subscribe(() => {
      this.loadCommandes();
      this.loadActiveCommandeDetails();
    });

    // S'abonner aux changements de commande active
    this.commandeState.activeCommandeId$.subscribe(id => {
      this.activeCommandeId = id;
      this.loadActiveCommandeDetails();
    });

    this.loadVentes();
  }

  loadVentes() {
    const vendeurId = this.usersService.getCurrentUser()?.id;
    if (vendeurId) {
      this.posCommandeService.getVentesByVendeur(vendeurId).subscribe({
        next: (ventes) => {
          this.ventes = ventes;
          if (ventes.length > 0) {
            this.setActiveVente(ventes[0].venteId);
          }
        },
        error: (error) => console.error('Erreur chargement ventes', error)
      });
    }
  }

  setActiveVente(venteId: number) {
    this.activeVenteId = venteId;
    this.activeVente = this.ventes.find(v => v.venteId === venteId) || null;
    this.loadActiveVenteDetails();
  }

  loadActiveVenteDetails() {
    if (!this.activeVente) {
      this.activeVenteItems = [];
      return;
    }
    
    this.activeVenteItems = (this.activeVente.lignes || []).map(ligne => ({
      product: {
        id: ligne.produitId,
        nom: ligne.nomProduit,
        prixVente: ligne.prixUnitaire
      },
      quantity: ligne.quantite
    }));
  }

  getTotalItems(vente: VenteResponse): number {
    return vente.lignes?.reduce((sum, ligne) => sum + ligne.quantite, 0) || 0;
  }

  setActiveCommande(id: string) {
    this.commandeState.setActiveCommande(id);
    this.loadActiveCommandeDetails(); // Recharger les détails quand on change de commande
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
        // Charger les détails après avoir les produits
        this.loadCommandes();
        this.loadActiveCommandeDetails();
      },
      error: (error) => console.error('Erreur chargement produits', error)
    });
  }

  loadActiveCommandeDetails() {
    if (!this.activeCommandeId) return;
    
    const commande = this.commandeState.getCommandeDetails(this.activeCommandeId);
    if (commande) {
      this.activeCommandeCart = commande.cart;
      this.activeCommandeTotal = commande.totalAmount || 0;
      this.updateActiveCommandeItems();
    }
  }

  updateActiveCommandeItems() {
    this.activeCommandeItems = [];
    
    if (!this.activeCommandeCart || !this.products.length) return;
    
    this.activeCommandeCart.forEach((quantity, productId) => {
      if (quantity > 0) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
          this.activeCommandeItems.push({ product, quantity });
        }
      }
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

  removeProductFromCommande(productId: number) {
    const commande = this.commandeState.getCommandeDetails(this.activeCommandeId);
    if (commande) {
      commande.cart.delete(productId);
      const totalItems = this.calculateTotalItems(commande.cart);
      const totalAmount = this.calculateTotalAmount(commande.cart);
      this.commandeState.updateCommandeTotals(this.activeCommandeId, totalItems, totalAmount);
      
      // Ajouter cette ligne pour actualiser la liste
      this.loadCommandes();
      
      this.loadActiveCommandeDetails();
    }
  }

  private calculateTotalItems(cart: Map<number, number>): number {
    let total = 0;
    cart.forEach(quantity => total += quantity);
    return total;
  }

  private calculateTotalAmount(cart: Map<number, number>): number {
    let total = 0;
    cart.forEach((quantity, productId) => {
      const product = this.products.find(p => p.id === productId);
      if (product) {
        total += quantity * product.prixVente;
      }
    });
    return total;
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
