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
  if (key === 'terminee') {
    return cat === 'terminee';
  }
  if (key === 'annuler') {
    return cat === 'annuler';
  }

  // fallback : si filtre inconnu, ne rien montrer
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
  const cat = this.determineVenteCategory(vente);

  switch (cat) {
    case 'payer': return 'Payer';
    case 'annuler': return 'Annuler';
    case 'terminee': return 'Terminée';
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

  /**
 * Détermine la catégorie générique d'une vente : 'payer' | 'annuler' | 'en-cours' | 'terminee' | 'unknown'
 */
private determineVenteCategory(v: VenteResponse): 'payer' | 'annuler' | 'en-cours' | 'terminee' | 'unknown' {
  const vAny = v as any;

  // champs candidats (convertis en string normalisé)
  const candidates = [
    vAny.paymentStatus,
    vAny.statut,
    vAny.etat,
    vAny.status,
    // si isPaid/paye sont booléens -> les forçons en string 'payer'
    vAny.isPaid ? 'payer' : undefined,
    vAny.paye ? 'payer' : undefined
  ].filter(Boolean).map(x => this.normalizeStr(x));

  // helpers pour tester la présence de mots-clés
  const has = (terms: string[]) => candidates.some(c => terms.some(t => c.includes(t)));

  // vérifier 'payer' / 'paid' / variantes
  if (has(['payer', 'paid', 'paye', 'payed', 'settled', 'completed', 'completed'])) {
    return 'payer';
  }

  // vérifier 'annuler' / cancelled
  if (has(['annul', 'cancel', 'void'])) {
    return 'annuler';
  }

  // vérifier terminé/finished/done
  if (has(['termine', 'terminé', 'finished', 'done', 'completed'])) {
    return 'terminee';
  }

  // vérifier en cours / pending / draft / in_progress
  if (has(['en cours', 'encours', 'pending', 'in_progress', 'ongoing', 'draft'])) {
    return 'en-cours';
  }

  // si aucun champ textuel mais montant payé > 0 ou montantPaye present, on peut déduire
  if ((vAny.isPaid === true) || (typeof vAny.montantPaye === 'number' && vAny.montantPaye > 0)) {
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
    
    // Construire la requête
    const request: RemboursementRequest = {
      venteId: this.activeVenteId!,
      produitsQuantites: this.getProduitsQuantites(),
      motif: this.motifRemboursement,
      rescodePin: this.pin.join('')
    };

    // Appel au service
    this.posCommandeService.rembourserVente(request).subscribe({
      next: (response) => {
        this.closeAllPopups();
        this.loadVentesAndFilter(this.currentFilterKey);
        alert('Remboursement effectué avec succès');
      },
      error: (error) => {
        console.error('Erreur remboursement', error);
        alert('Erreur lors du remboursement: ' + error.error?.message || error.message);
      },
      complete: () => this.isProcessing = false
    });
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

}
