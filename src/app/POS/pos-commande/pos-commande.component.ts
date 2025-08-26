import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom, Subject, takeUntil } from 'rxjs';
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
  @ViewChild('selectAllCheckbox') selectAllCheckbox!: ElementRef<HTMLInputElement>;
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


  // état du header checkbox
  allSelected = false;

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

  activeVenteLoading = false;

  private scannerBuffer: string = '';
  private lastKeyTime: number = 0;

  // snapshot map pour garder une copie initiale des lignes par venteId
  private venteLineSnapshots: Map<number, any[]> = new Map<number, any[]>();
  // clé pour localStorage (changer version si tu modifies le format)
  private readonly SNAPSHOT_KEY = 'vente_line_snapshots_v1';

  private pendingRemboursementItem: any = null;

  constructor(
    public router: Router,
    private viewState: ViewStateService,
    private commandeState: CommandeStateService,
    private categorieService: CategorieService,
    private posCommandeService: PosCommandeService,
    private usersService: UsersService
  ) {}

  ngOnInit() {

    this.loadSnapshotsFromStorage();

    window.addEventListener('keydown', this.handleScannerInput.bind(this));

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
    window.removeEventListener('keydown', this.handleScannerInput.bind(this));
  }

  ngAfterViewInit() {
    // s'assure que l'état visuel du checkbox est correct une fois la vue initialisée
    this.updateSelectAllState();
  }

  /** Toggle quand on clique le checkbox header */
  toggleSelectAll(checked: boolean) {
    if (!this.activeVenteItems || this.activeVenteItems.length === 0) return;

    this.activeVenteItems.forEach(item => {
      item.selected = !!checked;
    });

    // mettre à jour la sélection dérivée & l'état du header
    this.updateSelectedItems();
    this.updateSelectAllState();
  }

  /** Charger snapshots depuis localStorage au démarrage */
  private loadSnapshotsFromStorage(): void {
    try {
      const raw = localStorage.getItem(this.SNAPSHOT_KEY);
      if (!raw) return;
      const obj = JSON.parse(raw) as Record<string, any[]>;
      Object.keys(obj).forEach(k => {
        const id = Number(k);
        if (!Number.isNaN(id)) {
          this.venteLineSnapshots.set(id, obj[k]);
        }
      });
      console.debug('Loaded vente snapshots from storage', this.venteLineSnapshots);
    } catch (e) {
      console.warn('Failed to load vente snapshots from storage', e);
    }
  }

  /** Sauvegarder snapshots en localStorage */
  private saveSnapshotsToStorage(): void {
    try {
      const obj: Record<string, any[]> = {};
      this.venteLineSnapshots.forEach((v, k) => obj[String(k)] = v);
      localStorage.setItem(this.SNAPSHOT_KEY, JSON.stringify(obj));
      console.debug('Saved vente snapshots to storage');
    } catch (e) {
      console.warn('Failed to save vente snapshots to storage', e);
    }
  }

  /** Mise à jour pratique du snapshot pour une vente (appelée après fetch initial ou remboursement) */
  private ensureSnapshotForVente(venteId: number, lignes: any[] | null): void {
    if (this.venteLineSnapshots.has(venteId)) return;
    if (!lignes || !Array.isArray(lignes)) return;
    try {
      this.venteLineSnapshots.set(venteId, JSON.parse(JSON.stringify(lignes)));
    } catch {
      this.venteLineSnapshots.set(venteId, lignes.map(l => ({ ...l })));
    }
    this.saveSnapshotsToStorage();
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

    // Tri décroissant par createdAt (plus récent d'abord)
    this.commandes.sort((a, b) => {
      const ta = new Date(a.createdAt).getTime();
      const tb = new Date(b.createdAt).getTime();
      return tb - ta;
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
        // assigner d'abord les ventes reçues
        this.allVentes = ventes || [];

        // --- conserver un snapshot initial des lignes pour chaque vente (si pas déjà présent) ---
        // utiliser uniquement 'lignes' (conforme à ton model)
        this.allVentes.forEach(v => {
          const rawLines = (v.lignes ?? []) as any[];
          if (!this.venteLineSnapshots.has(v.venteId)) {
            try {
              this.venteLineSnapshots.set(v.venteId, JSON.parse(JSON.stringify(rawLines)));
            } catch {
              this.venteLineSnapshots.set(v.venteId, rawLines.map(l => ({ ...l })));
            }
          }
        });

        // persister après avoir initialisé les snapshots
        this.saveSnapshotsToStorage();
        this.applyVentesFilter(key);

        // si on a des ventes filtrées, s'assurer que la première soit active
        if (this.ventes.length > 0) {
          const first = this.ventes[0];
          if (!this.activeVente || this.activeVente.venteId !== first.venteId) {
            this.setActiveVente(first.venteId);
          }
        } else {
          // aucune vente pour ce filtre : nettoyer l'état actif
          this.activeVenteId = null;
          this.activeVente = null;
          this.activeVenteItems = [];
          this.updateSelectedItems();
        }
      },
      error: (err) => {
        console.error('Erreur chargement ventes', err);
        this.allVentes = [];
        this.ventes = [];
      }
    });
  }

  // private applyVentesFilter(key: FilterKey) {
  //   // filtre flexible selon le contenu de VenteResponse
  //   this.ventes = this.allVentes.filter(v => this.matchesVenteStatus(v, key));
  // }

  private applyVentesFilter(key: FilterKey) {
    this.ventes = this.allVentes.filter(v => this.matchesVenteStatus(v, key));

    // Tri décroissant par date (dateVente > createdAt > fallback sur venteId)
    this.ventes.sort((a, b) => {
      const ta = this.getTimeFromVente(a);
      const tb = this.getTimeFromVente(b);
      return tb - ta; // tb - ta => ordre décroissant
    });
  }

  /** Retourne un timestamp à partir d'une vente (robuste aux champs manquants) */
  private getTimeFromVente(v: any): number {
    const candidates = [v.dateVente, v.createdAt, v.date || v.timestamp];
    for (const c of candidates) {
      if (c !== undefined && c !== null) {
        const dt = new Date(c);
        if (!Number.isNaN(dt.getTime())) return dt.getTime();
      }
    }
    // fallback : si pas de date, utilise venteId numérique sinon 0
    const idNum = Number(v.venteId ?? v.id);
    return Number.isNaN(idNum) ? 0 : idNum;
  }

  private matchesVenteStatus(v: VenteResponse, key: FilterKey): boolean {
    const cat = this.determineVenteCategory(v);

    if (key === 'en-cours') return cat === 'en-cours';
    if (key === 'payer') return cat === 'payer';
    if (key === 'annuler') return cat === 'annuler';

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

  // Version corrigée et typée — coller à la place de l'ancienne
  async loadActiveVenteDetails(): Promise<void> {
    // Si pas d'ID actif, nettoyer et retourner
    if (!this.activeVenteId) {
      this.activeVenteItems = [];
      this.updateSelectedItems();
      return;
    }

    // Indiquer qu'on charge la vente active (utile pour éviter le "flash" UI)
    this.activeVenteLoading = true;

    try {
      console.debug('loadActiveVenteDetails - starting for id', this.activeVenteId);

      // Helper pour récupérer la vente complète depuis un endpoint getVenteById si disponible,
      // sinon retomber sur getVentesByVendeur et trouver l'élément
      const ensureFullVente = async (): Promise<any> => {
        try {
          const svcAny = this.posCommandeService as any;
          if (typeof svcAny.getVenteById === 'function') {
            return await firstValueFrom(svcAny.getVenteById(this.activeVenteId));
          }
          if (typeof this.posCommandeService.getVentesByVendeur === 'function') {
            const vendeurId = this.usersService.getCurrentUser()?.id;
            if (!vendeurId) return this.activeVente;
            const all = await firstValueFrom(this.posCommandeService.getVentesByVendeur(vendeurId) as any);
            if (Array.isArray(all)) {
              return all.find((v: any) => v.venteId === this.activeVenteId) || this.activeVente;
            }
          }
        } catch (err) {
          console.warn('ensureFullVente error', err);
        }
        return this.activeVente;
      };

      // Tenter de récupérer la version complète
      const fullVente = await ensureFullVente();
      if (fullVente && (!this.activeVente || fullVente.venteId !== this.activeVente.venteId)) {
        console.debug('Fetched fullVente from API for id', this.activeVenteId, fullVente);
        this.activeVente = fullVente;
        const idx = this.allVentes.findIndex(v => v.venteId === this.activeVenteId);
        if (idx >= 0) this.allVentes[idx] = fullVente;
      } else {
        console.debug('Using existing activeVente (no fetch or unchanged)');
      }

      // Récupérer les lignes depuis différents champs possibles
      const raw: any = this.activeVente || {};
      const lignes: any[] = raw.lignes ?? raw.lines ?? raw.items ?? raw.lignesVente ?? [];

      console.debug('lines used for building items:', lignes);

      // utilitaires pour extraire des nombres depuis objets avec clés variées
      const resolveNumberFrom = (obj: any, keys: string[]): number | null => {
        if (!obj) return null;
        for (const k of keys) {
          if (Object.prototype.hasOwnProperty.call(obj, k) && obj[k] !== undefined && obj[k] !== null) {
            const v = obj[k];
            const n = (typeof v === 'number') ? v : Number(String(v).replace(',', '.'));
            if (!Number.isNaN(n)) return n;
          }
        }
        return null;
      };

      const qtyKeysOriginal = ['quantiteOriginale','quantiteInitiale','initialQuantity','originalQuantity','quantiteAvantRemboursement','qtyOriginal','original_qty','qty_initial'];
      const qtyKeysCurrent  = ['quantite','quantity','qty','quantite_actuelle','currentQuantity','current_qty'];
      const priceKeysOriginal = ['prixOriginal','prixAvantRemboursement','unitPriceOriginal','prixUnitaireOriginal','originalPrice'];
      const priceKeysCurrent  = ['prixUnitaire','prix','price','unitPrice','prix_unitaire'];

      // snapshot pour cette vente (si disponible)
      const snapshot = this.venteLineSnapshots.get(this.activeVenteId!) ?? [];

      const findInSnapshot = (ligne: any) => {
        if (!snapshot || snapshot.length === 0) return null;
        // tenter de matcher par id produit
        const prodId = ligne.produitId ?? ligne.productId ?? ligne.idProduit ?? null;
        if (prodId != null) {
          const found = snapshot.find((s: any) =>
            (s.produitId ?? s.productId ?? s.idProduit) === prodId
          );
          if (found) return found;
        }
        // fallback par nom (tolérance minime)
        const name = (ligne.nomProduit ?? ligne.productName ?? ligne.name ?? '').toString().toLowerCase();
        if (name) {
          return snapshot.find((s: any) => {
            const sname = (s.nomProduit ?? s.productName ?? s.name ?? '').toString().toLowerCase();
            return sname && sname === name;
          }) || null;
        }
        return null;
      };

      const isCancelledSale = this.activeVente ? this.determineVenteCategory(this.activeVente) === 'annuler' : false;
      console.debug('isCancelledSale:', isCancelledSale, 'activeVente.status:', this.activeVente?.status);

      // Construire activeVenteItems en normalisant current/original
      this.activeVenteItems = (lignes || []).map((ligne: any) => {
        const currentQty  = resolveNumberFrom(ligne, qtyKeysCurrent)  ?? resolveNumberFrom(ligne, qtyKeysOriginal) ?? 0;
        const currentPrice = resolveNumberFrom(ligne, priceKeysCurrent) ?? resolveNumberFrom(ligne, priceKeysOriginal) ?? (ligne.prixUnitaire ?? 0);

        let originalQty  = resolveNumberFrom(ligne, qtyKeysOriginal) ?? null;
        let originalPrice = resolveNumberFrom(ligne, priceKeysOriginal) ?? null;

        // compléter les originaux depuis le snapshot si manquant
        if ((originalQty === null || originalPrice === null) && snapshot && snapshot.length > 0) {
          const snapLine = findInSnapshot(ligne);
          if (snapLine) {
            if (originalQty === null) originalQty = resolveNumberFrom(snapLine, qtyKeysOriginal) ?? resolveNumberFrom(snapLine, qtyKeysCurrent) ?? originalQty;
            if (originalPrice === null) originalPrice = resolveNumberFrom(snapLine, priceKeysOriginal) ?? resolveNumberFrom(snapLine, priceKeysCurrent) ?? originalPrice;
          }
        }

        const productObj = {
          id: ligne.produitId ?? ligne.productId ?? ligne.idProduit ?? null,
          nom: ligne.nomProduit ?? ligne.productName ?? ligne.name ?? 'Produit',
          prixVente: currentPrice ?? 0
        };

        return {
          product: productObj,
          quantity: currentQty ?? 0,
          originalQuantity: originalQty,
          currentQuantity: currentQty,
          originalPrice: originalPrice,
          currentPrice: currentPrice,
          selected: false,
          editing: false, // <-- Ajoutez cette ligne
          editQuantity: 0, // <-- Ajoutez cette ligne
          __rawLine: ligne
        } as any;
      });

      // si pas vente annulée, supprimer lignes avec quantité 0 (après remboursement)
      if (!isCancelledSale) {
        this.activeVenteItems = this.activeVenteItems.filter(it => (it.quantity ?? 0) > 0);
      }

      // sélection par défaut si onglet "annuler"
      if (this.currentFilterKey === 'annuler') {
        this.activeVenteItems.forEach(it => it.selected = true);
      } else {
        this.activeVenteItems.forEach(it => it.selected = false);
      }

      console.debug('activeVenteItems built:', this.activeVenteItems);

      // Mettre à jour la sélection dérivée
      this.updateSelectedItems();
    } catch (err) {
      console.error('Erreur dans loadActiveVenteDetails', err);
      // En cas d'erreur, on vide pour éviter d'afficher de l'ancien contenu
      this.activeVenteItems = [];
      this.updateSelectedItems();
    } finally {
      // Toujours désactiver le flag de chargement
      this.activeVenteLoading = false;
    }
  }

  setActiveVente(venteId: number) {
    // définir l'id actif
    this.activeVenteId = venteId;
    // trouver la vente rapide (peut être incomplète)
    this.activeVente = this.ventes.find(v => v.venteId === venteId) || null;

    // --- important: vider immédiatement les items & selection pour éviter le 'flash' ---
    this.activeVenteItems = [];
    this.selectedItems = [];
    this.updateSelectedItems();

    // lancer le chargement complet (async)
    this.loadActiveVenteDetails();
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
          (v.clientNom && String(v.clientNom).toLowerCase().includes(this.searchTerm)) ||
          (v.numeroFacture && v.numeroFacture.toLowerCase().includes(this.searchTerm))
        );
      }
    }
  }

  getVenteStatus(vente: VenteResponse): string {
    if (vente.status) {
      switch (vente.status.toUpperCase()) {
        case 'EN_COURS': return 'En cours';
        case 'PARTIELLEMENT_REMBOURSEE': return 'Partiellement remboursée';
        case 'REMBOURSEE': return 'Annulée'; // afficher "Annulée" si backend dit REMBOURSEE
        case 'ANNULEE': return 'Annulée';
        case 'PAYEE':
        case 'PAYER':
          return 'Payée';
        default:
          // si status inconnu, retombe sur la catégorie
          break;
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

  // remplace entirely determineVenteCategory
  private determineVenteCategory(v: VenteResponse): 'payer' | 'annuler' | 'en-cours' | 'unknown' {
    // 1) Si le backend fournit un status, on s'en sert (priorité)
    if (v.status) {
      switch (v.status.toUpperCase()) {
        case 'EN_COURS':
          return 'en-cours';
        case 'PARTIELLEMENT_REMBOURSEE':
          // encore considéré comme "payer" côté filtre (partiel = pas totalement annulée)
          return 'payer';
        case 'REMBOURSEE':
          // Vente entièrement remboursée -> la considérer comme "annuler" pour le filtrage
          return 'annuler';
        case 'ANNULEE':
          return 'annuler';
        case 'PAYEE':
        case 'PAYER': // possible variantes
          return 'payer';
        default:
          // laisser continuer au fallback
          break;
      }
    }

    // 2) Fallback : si on a les lignes, et que toutes les quantités = 0 => annuler
    const lignes = (v.lignes || []) as Array<any>;
    if (lignes.length > 0) {
      const totalQuantites = lignes.reduce((sum, l) => sum + (l.quantite || 0), 0);
      if (totalQuantites === 0) return 'annuler';
    }

    // 3) Ancienne logique heuristique (texte, champs alternatifs)
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

    if (has(['payer', 'paid', 'paye', 'payed', 'settled'])) {
      return 'payer';
    }
    if (has(['annul', 'cancel', 'void', 'annulee', 'rembourse'])) {
      return 'annuler';
    }
    if (has(['en cours', 'encours', 'pending', 'in_progress', 'ongoing', 'draft'])) {
      return 'en-cours';
    }

    // 4) Fallback sur montants
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

  /** Appelée après toute modification individuelle pour recalculer selectedItems */
  updateSelectedItems(): void {
    this.selectedItems = this.activeVenteItems.filter(item => item.selected);
    this.updateSelectAllState();
  }

  /** Met à jour allSelected et l'état indéterminé visuel */
  private updateSelectAllState(): void {
    if (!this.activeVenteItems || !this.selectAllCheckbox) {
      this.allSelected = false;
      return;
    }

    const total = this.activeVenteItems.length;
    const selectedCount = this.activeVenteItems.filter(i => i.selected).length;

    this.allSelected = (selectedCount === total && total > 0);

    // indeterminate = some selected but not all
    try {
      const el = this.selectAllCheckbox.nativeElement;
      el.indeterminate = selectedCount > 0 && selectedCount < total;
    } catch (e) {
      // si ViewChild pas encore prêt ou environnement ne supporte pas, ignore
    }
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
      next: (isValid: boolean) => {
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

    let produitsQuantites: { [key: number]: number } = {};
    if (this.pendingRemboursementItem) {
      // Utilise la quantité à rembourser calculée
      produitsQuantites[this.pendingRemboursementItem.product.id] = this.pendingRemboursementItem.qtyToRefund;
    } else {
      produitsQuantites = this.getProduitsQuantites();
    }

    const request: RemboursementRequest = {
      venteId: this.activeVenteId!,
      produitsQuantites,
      motif: this.motifRemboursement,
      rescodePin: this.pin.join('')
    };

    this.posCommandeService.rembourserVente(request).subscribe({
      next: (response) => {
        this.pendingRemboursementItem = null;
        this.closeAllPopups();
        this.loadVentesAndFilter(this.currentFilterKey);
        this.activeVente = response;
        this.loadActiveVenteDetails();
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
      // quantité effectivement remboursable (currentQuantity) — fallback à item.quantity
      const qtyToRefund = item.currentQuantity ?? item.quantity ?? 0;
      quantites[item.product.id] = qtyToRefund;
    });

    return quantites;
  }

  // Fermer toutes les popups
  closeAllPopups(): void {
    this.showCancelPopup = false;
    this.showMotifPopup = false;
    this.motifRemboursement = '';
    this.selectedItems = [];
    this.pendingRemboursementItem = null;
    this.activeVenteItems.forEach(item => item.selected = false);
  }

  // Calculer le montant total sélectionné
  getSelectedAmount(): number {
    return this.selectedItems.reduce((total, item) => {
      const qtyToRefund = item.currentQuantity ?? item.quantity ?? 0;
      const price = item.currentPrice ?? item.product.prixVente ?? 0;
      return total + (qtyToRefund * price);
    }, 0);
  }

  // Calculer le total des items sélectionnés
  getSelectedItemsCount(): number {
    return this.selectedItems.reduce((total, item) => {
      const qtyToRefund = item.currentQuantity ?? item.quantity ?? 0;
      return total + qtyToRefund;
    }, 0);
  }

  getUpdatedTotalItems(vente: VenteResponse | null): number {
    if (!vente) return 0;

    // si on n'est pas sur la vente active, retourner le backend
    if (!this.activeVenteId || vente.venteId !== this.activeVenteId) {
      return this.getTotalItems(vente);
    }

    // si on est en train de charger les lignes, retourner le total backend pour éviter le flash
    if (this.activeVenteLoading) {
      return vente.lignes?.reduce((s, l) => s + (l.quantite || 0), 0) || vente.montantTotal ? this.getTotalItems(vente) : 0;
    }

    // sinon calculer à partir de activeVenteItems
    return this.activeVenteItems.reduce((sum, item) => {
      const qty = item.selected ? 0 : (item.currentQuantity ?? item.quantity ?? 0);
      return sum + qty;
    }, 0);
  }

  getUpdatedTotalAmount(vente: VenteResponse | null): number {
    if (!vente) return 0;

    if (!this.activeVenteId || vente.venteId !== this.activeVenteId) {
      return vente.montantTotal ?? 0;
    }

    // éviter d'utiliser la liste momentanément obsolète
    if (this.activeVenteLoading) {
      return vente.montantTotal ?? 0;
    }

    return this.activeVenteItems.reduce((total, item) => {
      const qty = item.selected ? 0 : (item.currentQuantity ?? item.quantity ?? 0);
      const price = item.currentPrice ?? item.product.prixVente ?? 0;
      return total + (qty * price);
    }, 0);
  }

  /** Retourne true si la vente active est considérée comme annulée */
  public isActiveVenteAnnule(): boolean {
    if (!this.activeVente) return false;
    try {
      // utilise la logique existante pour déterminer la catégorie ('annuler'|'payer'|'en-cours')
      return this.determineVenteCategory(this.activeVente) === 'annuler';
    } catch {
      // fallback : tenter d'utiliser getVenteStatus si determineVenteCategory non disponible
      return this.getVenteStatus(this.activeVente).toLowerCase().includes('annul');
    }
  }

  // Méthode pour basculer entre mode édition et affichage
  toggleQuantityEdit(item: any): void {
    if (item.editing) {
      // Si on est déjà en mode édition, valider les changements
      this.validateQuantityEdit(item);
    } else {
      // Activer le mode édition
      item.editing = true;
      item.editQuantity = item.quantity; // Initialiser avec la valeur actuelle
    }
  }

  // Méthode pour valider la modification de quantité
  validateQuantityEdit(item: any): void {
    if (item.editQuantity && item.editQuantity > 0) {
      item.quantity = item.editQuantity;
      
      // Mettre à jour les totaux si nécessaire
      this.updateSelectedItems();
    }
    
    // Désactiver le mode édition
    item.editing = false;
  }

  startEditQuantity(item: any) {
    item.editing = true;
    item.editQuantity = item.quantity;
  }

  onValidateQuantityEdit(item: any) {
    // Sauvegarde la quantité initiale avant modification
    const initialQuantity = item.quantity;

    if (item.editQuantity >= 1 && item.editQuantity < initialQuantity) {
      // Calcule la quantité à rembourser
      const qtyToRefund = initialQuantity - item.editQuantity;

      // Mets à jour la quantité affichée
      item.quantity = item.editQuantity;

      // Prépare l'item pour remboursement partiel
      this.pendingRemboursementItem = {
        ...item,
        qtyToRefund
      };

      this.showCancelPopup = true;
      this.pin = ['', '', '', ''];
      this.isCodeWrong = false;
      setTimeout(() => {
      const firstInput = document.getElementById('0') as HTMLInputElement;
      firstInput?.focus();
    }, 0);
    } else {
      item.editing = false;
    }
  }


   private handleScannerInput(event: KeyboardEvent): void {
    console.log(event.key);
    const now = Date.now();

    if (now - this.lastKeyTime > 100) {
      this.scannerBuffer = '';
    }

    this.lastKeyTime = now;

    if (/^\d$/.test(event.key)) { 
      this.scannerBuffer += event.key;

      if (this.scannerBuffer.length === 4) {
        this.pin = this.scannerBuffer.split('');
        this.verifyCode();
        this.scannerBuffer = '';
      }
    }

    if (event.key === 'Enter' && this.scannerBuffer.length === 4) {
      this.pin = this.scannerBuffer.split('');
      this.verifyCode();
      this.scannerBuffer = '';
    }
  }


}