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
import { RemboursementRequest, VenteResponse } from 'src/app/admin-page/MODELS/VenteModel/vente-model';
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

  selectedItems: any[] = [];
  motifRemboursement: string = '';
  showMotifPopup: boolean = false;
  isProcessing: boolean = false;
  
  // filtre
filterOptions = [
  { key: 'en-cours' as FilterKey, label: 'En cours' },
  { key: 'payer' as FilterKey, label: 'Payées' },
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
        console.debug('Ventes API raw:', ventes);
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
  const cat = this.determineVenteCategory(v);

  if (key === 'en-cours') {
    return cat === 'en-cours';
  }
  if (key === 'payer') {
    return cat === 'payer';
  }
  if (key === 'annuler') {
    return cat === 'annuler';
  }

  return false;
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

getVenteStatus(vente: VenteResponse): string {
  if (vente.status) {
    switch (vente.status.toUpperCase()) {
      case 'EN_COURS': return 'En cours';
      case 'PARTIELLEMENT_REMBOURSEE': return 'Partiellement payée';
      case 'REMBOURSEE': return 'Payée'; // REMBOURSEE est affiché comme "Payée"
      case 'ANNULEE': return 'Annulée';
      default: return vente.status;
    }
  }
  
  const cat = this.determineVenteCategory(vente);
  switch (cat) {
    case 'payer': return 'Payée';
    case 'annuler': return 'Annulée';
    case 'en-cours': return 'En cours';
    default: return '—';
  }
}

  private normalizeStr(val: any): string {
    if (val === null || val === undefined) return '';
    const s = String(val).toLowerCase();
    // enlever accents pour meilleure robustesse (ex : 'annulé' -> 'annule')
    try {
      return s.normalize('NFD').replace(/\p{Diacritic}/gu, '');
    } catch {
      // fallback si l'environnement ne supporte pas \p{Diacritic}
      return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
  }

private determineVenteCategory(v: VenteResponse): 'payer' | 'annuler' | 'en-cours' | 'unknown' {
  // Priorité au nouveau champ 'status'
  if (v.status) {
    switch (v.status.toUpperCase()) {
      case 'EN_COURS': 
        return 'en-cours';
      case 'PARTIELLEMENT_REMBOURSEE':
      case 'REMBOURSEE': // REMBOURSEE est considéré comme "payer"
        return 'payer';
      case 'ANNULEE': 
        return 'annuler';
    }
  }
  
  // Fallback pour l'ancienne logique
  const vAny = v as any;
  const candidates = [
    vAny.paymentStatus,
    vAny.statut,
    vAny.etat,
    vAny.status,
    vAny.isPaid ? 'payer' : undefined,
    vAny.paye ? 'payer' : undefined
  ].filter(Boolean).map(x => this.normalizeStr(x));

  const has = (terms: string[]) => candidates.some(c => terms.some(t => c.includes(t)));
  
  if (has(['payer', 'paid', 'paye', 'payed', 'settled', 'remboursee', 'partiellement_remboursee'])) {
    return 'payer';
  }
  if (has(['annul', 'cancel', 'void', 'annulee'])) {
    return 'annuler';
  }
  if (has(['en cours', 'encours', 'pending', 'in_progress', 'ongoing', 'draft'])) {
    return 'en-cours';
  }
  
  // Fallback: vérifier les montants
  if (typeof v.montantPaye === 'number' && v.montantPaye > 0) {
    return 'payer';
  }
  
  return 'unknown';
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

  // Méthode pour mettre à jour les éléments sélectionnés
  updateSelectedItems(): void {
    this.selectedItems = this.activeVenteItems.filter(item => item.selected);
  }

  // Ouvrir la popup d'annulation
  openCancelPopup(): void {
    if (this.selectedItems.length === 0) {
      alert('Veuillez sélectionner au moins un produit à rembourser');
      return;
    }
    
    this.showCancelPopup = true;
    this.pin = ['', '', '', ''];
    this.isCodeWrong = false;
  }

  // Vérifier le code PIN
  verifyCode(): void {
    const enteredPin = this.pin.join('');
    
    this.usersService.verifyCode(enteredPin, ['ADMIN', 'MANAGER']).subscribe({
      next: (isValid: boolean) => { // Ajout du type explicitement
        if (isValid) {
          this.showCancelPopup = false;
          this.showMotifPopup = true;
        } else {
          this.handleInvalidPin();
        }
      },
      error: () => this.handleInvalidPin()
    });
  }

  private handleInvalidPin(): void {
    this.isCodeWrong = true;
    setTimeout(() => this.isCodeWrong = false, 500);
  }

  // Confirmer le remboursement
  confirmRemboursement(): void {
    if (!this.motifRemboursement.trim()) {
      alert('Veuillez saisir un motif');
      return;
    }

    this.isProcessing = true;
    
    const request: RemboursementRequest = {
      venteId: this.activeVenteId!,
      produitsQuantites: this.getProduitsQuantites(),
      motif: this.motifRemboursement,
      rescodePin: this.pin.join('')
    };

    this.posCommandeService.rembourserVente(request).subscribe({
      next: (response) => {
        // Recharger les ventes pour le filtre actuel
        this.loadVentesAndFilter(this.currentFilterKey);
        
        // Mettre à jour la vente active
        this.activeVente = response;
        this.loadActiveVenteDetails();
        
        this.closeAllPopups();
      },
      error: (error) => {
        console.error('Erreur remboursement', error);
        alert('Erreur lors du remboursement: ' + error.error?.message || error.message);
      },
      complete: () => this.isProcessing = false
    });
  }

  // Nouvelle méthode pour mettre à jour le statut localement
  private updateVenteStatus(venteId: number, newStatus: string) {
    const vente = this.allVentes.find(v => v.venteId === venteId);
    if (vente) {
      vente.status = newStatus;
      this.applyVentesFilter(this.currentFilterKey);
    }
    
    if (this.activeVenteId === venteId) {
      this.activeVente!.status = newStatus;
    }
  }

  // Helper pour construire produitsQuantites
  private getProduitsQuantites(): { [key: number]: number } {
    const quantites: { [key: number]: number } = {};
    
    this.selectedItems.forEach(item => {
      quantites[item.product.id] = item.quantity;
    });
    
    return quantites;
  }

  // Fermer toutes les popups
  closeAllPopups(): void {
    this.showCancelPopup = false;
    this.showMotifPopup = false;
    this.motifRemboursement = '';
    this.selectedItems = [];
    
    // Réinitialiser les sélections
    this.activeVenteItems.forEach(item => item.selected = false);
  }

  // Calculer le montant total sélectionné
  getSelectedAmount(): number {
    return this.selectedItems.reduce((total, item) => {
      return total + (item.quantity * item.product.prixVente);
    }, 0);
  }

  // Calculer le total des items sélectionnés
  getSelectedItemsCount(): number {
    return this.selectedItems.reduce((total, item) => total + item.quantity, 0);
  }

  // Calculer la nouvelle quantité totale après remboursement
  getUpdatedTotalItems(vente: VenteResponse | null): number {
    if (!vente) return 0;
    
    if (!this.activeVenteId || vente.venteId !== this.activeVenteId) {
      return this.getTotalItems(vente);
    }
    
    return this.getTotalItems(vente) - this.getSelectedItemsCount();
  }

  // Calculer le nouveau montant total après remboursement
  getUpdatedTotalAmount(vente: VenteResponse | null): number {
    if (!vente) return 0;
    
    // Si c'est la vente active, calculer à partir des items locaux
    if (this.activeVenteId && vente.venteId === this.activeVenteId) {
      return this.activeVenteItems.reduce(
        (total, item) => total + (item.quantity * item.product.prixVente),
        0
      );
    }
    
    // Sinon utiliser le montant du backend
    return vente.montantTotal || 0;
  }

}
