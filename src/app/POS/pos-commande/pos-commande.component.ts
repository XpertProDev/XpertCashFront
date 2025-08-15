import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
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

type FilterKey = 'en-cours' | 'payer' | 'terminee' | 'annuler';

@Component({
  selector: 'app-pos-commande',
  imports: [FormsModule, CommonModule, CfaCurrencyPipe],
  templateUrl: './pos-commande.component.html',
  styleUrl: './pos-commande.component.scss'
})
export class PosCommandeComponent implements OnDestroy {
  private apiUrl = environment.imgUrl;
  private destroy$ = new Subject<void>();

  // view state
  isListView = true;
  showDropdown = false;
  showFilterDropdown = false;

  // commandes locales
  commandes: any[] = [];
  products: ProduitDetailsResponseDTO[] = [];
  activeCommandeId: string = '';

  activeCommandeCart: Map<number, number> = new Map();
  activeCommandeTotal = 0;
  activeCommandeItems: { product: ProduitDetailsResponseDTO, quantity: number }[] = [];

  // ventes backend
  allVentes: VenteResponse[] = [];
  ventes: VenteResponse[] = [];
  activeVenteId: number | null = null;
  activeVenteItems: any[] = [];
  activeVente: VenteResponse | null = null;

  // filtre
  filterOptions = [
    { key: 'en-cours' as FilterKey, label: 'En cours' },
    { key: 'payer' as FilterKey, label: 'Payer' },
    // { key: 'terminee' as FilterKey, label: 'Terminer' }, // <-- retiré
    { key: 'annuler' as FilterKey, label: 'Annuler' }
  ];
  currentFilterKey: FilterKey = 'en-cours';
  currentFilterLabel = 'En cours';

  // recherche
  searchTerm = '';

  showCancelPopup = false;
  pin: string[] = ['', '', '', ''];
  isCodeWrong = false;

  constructor(
    public router: Router,
    private viewState: ViewStateService,
    private commandeState: CommandeStateService,
    private categorieService: CategorieService,
    private posCommandeService: PosCommandeService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.viewState.isListView$.pipe(takeUntil(this.destroy$)).subscribe(view => {
      this.isListView = view;
    });

    // charger produits + commandes locales par défaut (en-cours)
    this.applyFilter(this.currentFilterKey);

    // s'abonner aux events venant du state
    this.commandeState.commandeUpdated$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.loadCommandes();
      this.loadActiveCommandeDetails();
    });

    this.commandeState.activeCommandeId$.pipe(takeUntil(this.destroy$)).subscribe(id => {
      this.activeCommandeId = id;
      this.loadActiveCommandeDetails();
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /* ---------------- Filter / UI ---------------- */
  toggleFilterDropdown() {
    this.showFilterDropdown = !this.showFilterDropdown;
  }
  closeFilterDropdown() {
    this.showFilterDropdown = false;
  }
  selectFilter(key: FilterKey) {
    this.showFilterDropdown = false;
    this.applyFilter(key);
  }

  private applyFilter(key: FilterKey) {
    this.currentFilterKey = key;
    const opt = this.filterOptions.find(o => o.key === key);
    this.currentFilterLabel = opt ? opt.label : 'Filtre';

    if (key === 'en-cours') {
      // commandes locales
      this.loadProducts();
    } else {
      // ventes backend (charger si pas déjà chargé, puis filtrer)
      this.loadVentesAndFilter(key);
    }
  }

  /* ---------------- Chargement produits / commandes locales ---------------- */
  loadProducts() {
    this.categorieService.getCategories().pipe(takeUntil(this.destroy$)).subscribe({
      next: (categories) => {
        this.products = [];
        categories.forEach(categorie => {
          if (categorie.produits) {
            this.products = [...this.products, ...categorie.produits];
          }
        });
        // Charger commandes locales
        this.loadCommandes();
        this.loadActiveCommandeDetails();
      },
      error: (error) => console.error('Erreur chargement produits', error)
    });
  }

  loadCommandes() {
    this.commandes = this.commandeState.getAllCommandesIds().map(id => {
      const commande = this.commandeState.getCommandeDetails(id);
      let totalItems = 0;
      let totalAmount = 0;

      if (commande?.cart) {
        commande.cart.forEach((quantity, productId) => {
          const product = this.products.find(p => p.id === productId);
          if (product) {
            totalItems += quantity;
            totalAmount += quantity * product.prixVente;
          }
        });

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

  /* ---------------- Ventes backend ---------------- */
  private loadVentesAndFilter(key: FilterKey) {
    const vendeurId = this.usersService.getCurrentUser()?.id;
    if (!vendeurId) {
      console.warn('Utilisateur non connecté — impossible de charger ventes');
      this.allVentes = [];
      this.ventes = [];
      return;
    }

    // on récupère toujours les ventes du backend (on peut cacher cache si nécessaire)
    this.posCommandeService.getVentesByVendeur(vendeurId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (ventes) => {
        this.allVentes = ventes || [];
        this.applyVentesFilter(key);
        // si on vient d'activer la vue ventes, positionne la première vente active
        if (this.ventes.length > 0 && !this.activeVente) {
          this.setActiveVente(this.ventes[0].venteId);
        }
      },
      error: (err) => {
        console.error('Erreur chargement ventes', err);
        this.allVentes = [];
        this.ventes = [];
      }
    });
  }

  private applyVentesFilter(key: FilterKey) {
    // filtre flexible selon le contenu de VenteResponse
    this.ventes = this.allVentes.filter(v => this.matchesVenteStatus(v, key));
  }

  private matchesVenteStatus(v: VenteResponse, key: FilterKey): boolean {
    // normalize keys/values to lowercase for comparaison
    const possible = [
      (v as any).statut,
      (v as any).etat,
      (v as any).status,
      (v as any).paymentStatus,
      (v as any).isPaid ? 'payer' : undefined,
      (v as any).paye ? 'payer' : undefined
    ].filter(Boolean).map(x => String(x).toLowerCase());

    const mapKeyToTerms: Record<FilterKey, string[]> = {
      'en-cours': ['en cours', 'pending', 'in_progress', 'ongoing', 'draft'],
      'payer': ['payer', 'paid', 'payed', 'completed', 'settled'],
      'terminee': ['terminee', 'finished', 'done', 'completed'],
      'annuler': ['annuler', 'cancelled', 'canceled', 'void']
    };

    const targetTerms = mapKeyToTerms[key];

    // if vente has no status-like fields, assume:
    if (!possible.length) {
      // consider 'payer' as vente where montantTotal > 0 and maybe un champ payé — fallback: show all for non-en-cours
      if (key === 'en-cours') return false;
      return true;
    }

    // check any of possible values contains any of targetTerms
    return possible.some(pVal => targetTerms.some(term => pVal.includes(term)));
  }

  loadVentes() {
    const vendeurId = this.usersService.getCurrentUser()?.id;
    if (!vendeurId) return;
    this.posCommandeService.getVentesByVendeur(vendeurId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (ventes) => {
        this.allVentes = ventes || [];
        this.ventes = [...this.allVentes];
      },
      error: (err) => console.error('Erreur chargement ventes', err)
    });
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

  /* ---------------- Commande manip ---------------- */
  setActiveCommande(id: string) {
    this.commandeState.setActiveCommande(id);
    this.loadActiveCommandeDetails(); // déjà existant
    this.updateActiveCommandeItems(); // forcer update immédiat
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

// signature de onSearch — attend une chaîne (template ref fournit une string)
onSearch(term: string) {
  this.searchTerm = (term || '').trim().toLowerCase();

  if (this.currentFilterKey === 'en-cours') {
    // recharger les commandes originales avant filter pour ne pas écraser la source
    this.loadCommandes();
    if (this.searchTerm) {
      this.commandes = this.commandes.filter(c =>
        String(c.id).toLowerCase().includes(this.searchTerm) ||
        String(c.totalAmount).toLowerCase().includes(this.searchTerm) ||
        String(c.totalItems).toLowerCase().includes(this.searchTerm)
      );
    }
  } else {
    // recharge la liste complète depuis allVentes puis filtre
    this.applyVentesFilter(this.currentFilterKey);
    if (this.searchTerm) {
      this.ventes = this.ventes.filter(v =>
        String(v.venteId).toLowerCase().includes(this.searchTerm) ||
        String(v.montantTotal).toLowerCase().includes(this.searchTerm) ||
        (v.clientNom && String(v.clientNom).toLowerCase().includes(this.searchTerm))
      );
    }
  }
}

/**
 * Récupère un label de statut pour une vente de façon robuste.
 * Utilise des champs potentiels (statut, etat, status, paymentStatus...) sans casser le typage.
 */
// getVenteStatus(vente: VenteResponse): string {
//   const v = vente as any;
//   const candidates = [
//     v.statut,
//     v.etat,
//     v.status,
//     v.paymentStatus,
//     v.isPaid ? (v.isPaid === true ? 'Payer' : undefined) : undefined,
//     v.paye ? (v.paye === true ? 'Payer' : undefined) : undefined
//   ].filter(Boolean).map((x: any) => String(x));

//   if (candidates.length) {
//     // renvoie la première correspondance lisible
//     return candidates[0];
//   }

//   // fallback lisible
//   return '—';
// }

  getVenteStatus(vente: VenteResponse): string {
    const v = vente as any; // Assertion pour accéder dynamiquement aux propriétés
    
    // Vérification du statut de paiement
    if (v.paymentStatus?.toLowerCase() === 'paid' || v.isPaid || v.paye) {
      return 'Payer';
    }
    
    // Logique pour les autres statuts
    const candidates = [
      v.statut,
      v.etat,
      v.status,
      v.paymentStatus,
      v.isPaid ? 'Payer' : undefined,
      v.paye ? 'Payer' : undefined
    ].filter(Boolean).map(x => String(x));

    return candidates.length ? candidates[0] : '—';
  }


  /* ---------------- Helpers UI ---------------- */
  toggleView(viewType: 'grid' | 'list') {
    this.isListView = viewType === 'grid';
    this.showDropdown = true;
    localStorage.setItem('viewPreference', viewType);
  }

  pagePosVente() {
    // this.router.navigate(['/pos-accueil']);
  }

  openCancelPopup(): void {
    this.showCancelPopup = true;
    this.pin = ['', '', '', ''];
    this.isCodeWrong = false;
  }

  closeCancelPopup(): void {
    this.showCancelPopup = false;
  }

  goToNext(currentInput: HTMLInputElement, nextInput?: HTMLInputElement): void {
    if (currentInput.value && nextInput) {
      nextInput.focus();
    }
  }

  handleBackspace(event: KeyboardEvent, index: number, currentInput: HTMLInputElement, prevInput?: HTMLInputElement): void {
    if (event.key === 'Backspace' && !currentInput.value && prevInput) {
      prevInput.focus();
    }
  }

  verifyCode(): void {
    const enteredPin = this.pin.join('');
    // Remplacer par votre logique de vérification réelle
    if (enteredPin === '1234') {
      this.removeCommande(this.activeCommandeId);
      this.closeCancelPopup();
    } else {
      this.isCodeWrong = true;
      setTimeout(() => this.isCodeWrong = false, 500);
    }
  }
}
