import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ViewStateService } from '../pos-accueil/view-state.service';
import { Categorie } from 'src/app/admin-page/MODELS/categorie.model';
import { CategorieService } from 'src/app/admin-page/SERVICES/categorie.service';
import { ProduitDetailsResponseDTO } from 'src/app/admin-page/MODELS/produit-category.model';
import { CommandeStateService } from 'src/app/admin-page/SERVICES/commande-state.service';
import { Clients } from 'src/app/admin-page/MODELS/clients-model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ClientService } from 'src/app/admin-page/SERVICES/client-service';
import { UsersService } from 'src/app/admin-page/SERVICES/users.service';
import { BehaviorSubject, combineLatest, finalize, map, Observable, of, startWith, switchMap, take, throwError } from 'rxjs';
import { Entreprise } from 'src/app/admin-page/MODELS/entreprise-model';
import { EntrepriseService } from 'src/app/admin-page/SERVICES/entreprise-service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { EntrepriseClient } from 'src/app/admin-page/MODELS/entreprise-clients-model';
import { ProduitService } from 'src/app/admin-page/SERVICES/produit.service';
import { Produit } from 'src/app/admin-page/MODELS/produit.model';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { VenteService } from 'src/app/admin-page/SERVICES/VenteService/vente-service';
import { BoutiqueStateService } from 'src/app/admin-page/SERVICES/CaisseService/boutique-state.service';
import { VenteRequest, VenteResponse } from 'src/app/admin-page/MODELS/VenteModel/vente-model';

@Component({
  selector: 'app-pos-vente',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, MatAutocompleteModule, NgxBarcode6Module],
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

  longPressTimer: any = null;
  selectedProductForDetail: ProduitDetailsResponseDTO | null = null;
  showDetailPopup: boolean = false;
  showClientPopup: boolean = false;
  lastTap: number = 0;
  tapDelay: number = 300;

  allProducts: ProduitDetailsResponseDTO[] = [];

  clientType: 'individuel' | 'entreprise' = 'individuel';
  entrepriseForm!: FormGroup;
  entrepriseIndicatif: string = '';
  entrepriseMaxPhoneLength: number = 0;

  // Propriétés ajoutées
  clients: Clients[] = [];
  searchText = '';
  sortField = 'nomComplet';
  sortDirection: 'asc' | 'desc' = 'asc';

  currentListTypePopup: 'clients' | 'entreprises' = 'clients';
  entreprisesPopup: EntrepriseClient[] = [];
  // filteredEntreprisesPopup: EntrepriseClient[] = [];

  clientForm!: FormGroup;
  isEntrepriseSelected = false;
  showAddClientPopup = false;
  paysIndicatifs: { [key: string]: { indicatif: string, longueur: number } } = {
    'Mali': { indicatif: '+223', longueur: 8 },
    'Sénégal': { indicatif: '+221', longueur: 9 },
    'Côte d\'Ivoire': { indicatif: '+225', longueur: 10 },
    'Burkina Faso': { indicatif: '+226', longueur: 8 },
    'Niger': { indicatif: '+227', longueur: 8 },
    'France': { indicatif: '+33', longueur: 9 },
    'Belgique': { indicatif: '+32', longueur: 9 },
    'Suisse': { indicatif: '+41', longueur: 9 },
    'Canada': { indicatif: '+1', longueur: 10 },
    'États-Unis': { indicatif: '+1', longueur: 10 },
    'Maroc': { indicatif: '+212', longueur: 9 },
    'Algérie': { indicatif: '+213', longueur: 9 },
    'Tunisie': { indicatif: '+216', longueur: 8 },
    'Togo': { indicatif: '+228', longueur: 8 },
    'Bénin': { indicatif: '+229', longueur: 8 },
    'Guinée': { indicatif: '+224', longueur: 9 },
    'Tchad': { indicatif: '+235', longueur: 8 },
    'Cameroun': { indicatif: '+237', longueur: 9 },
    'RDC': { indicatif: '+243', longueur: 9 },
    'Gabon': { indicatif: '+241', longueur: 9 },
    'Afrique du Sud': { indicatif: '+27', longueur: 9 },
    'Rwanda': { indicatif: '+250', longueur: 9 },
    'Kenya': { indicatif: '+254', longueur: 9 },
    'Nigéria': { indicatif: '+234', longueur: 10 },
    'Ghana': { indicatif: '+233', longueur: 9 },
    'Éthiopie': { indicatif: '+251', longueur: 9 },
    'Égypte': { indicatif: '+20', longueur: 10 },
    'Inde': { indicatif: '+91', longueur: 10 },
    'Chine': { indicatif: '+86', longueur: 11 },
    'Mexique': { indicatif: '+52', longueur: 10 },
    'Allemagne': { indicatif: '+49', longueur: 10 },
    'Espagne': { indicatif: '+34', longueur: 9 },
    'Italie': { indicatif: '+39', longueur: 10 },
    'Royaume-Uni': { indicatif: '+44', longueur: 10 },
    'Pays-Bas': { indicatif: '+31', longueur: 9 },
    'Portugal': { indicatif: '+351', longueur: 9 }
  };
  paysKeys: string[] = Object.keys(this.paysIndicatifs);
  indicatif: string = '';
  maxPhoneLength: number = 0;

  control = new FormControl();
  filteredOptions: Observable<Entreprise[]> = of([]);
  optionsEntreprise$ = new BehaviorSubject<Entreprise[]>([]);

  currentListType: 'clients' | 'entreprises' = 'clients';

  selectedBoutiqueId: number | null = null;
  isSubmittingVente = false;
  venteErrorMessage: string | null = null;

  selectedClient: Clients | null = null;
  selectedEntreprise: EntrepriseClient | null = null;

  isDragging = false;
  startX = 0;
  startY = 0;
  initialX = 0;
  initialY = 0;
  popupOffset = { x: 0, y: 0 };

  constructor(
    private router: Router,
    private viewState: ViewStateService,
    private categorieService: CategorieService,
    private commandeState: CommandeStateService,
    private clientService: ClientService,
    private usersService: UsersService,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private entrepriseService: EntrepriseService,
    private produitService: ProduitService,
    private venteService: VenteService, 
    private boutiqueState: BoutiqueStateService
  ) {
    this.commandeState.activeCommandeId$.subscribe(() => {
      this.loadActiveCart();
    });

    this.initClientForm();
    this.initForms();
  }

  private initForms() {
    this.initClientForm();
    this.initEntrepriseForm();
  }

  // Initialiser le formulaire client
  initClientForm() {
    this.clientForm = this.fb.group({
      nomComplet: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.email]],
      telephone: ['', Validators.required],
      adresse: [''],
      poste: [''],
      pays: [''],
      ville: ['']
    });
  }

  initEntrepriseForm() {
    this.entrepriseForm = this.fb.group({
        nom: ['', [Validators.required, Validators.minLength(2)]],
        adresse: [''],
        email: ['', [Validators.email]],
        telephone: ['', Validators.required],
        pays: [''],
        siege: [''],
        secteur: ['']
    });
  }

  // Gestion du clic/tape sur un produit
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

    this.boutiqueState.selectedBoutique$.pipe(take(1)).subscribe(id => {
      // take(1) prend la valeur initiale ; si tu veux updates continues, retire take(1)
      this.selectedBoutiqueId = id;
    });

  // Si tu veux suivre à tout moment :
  this.boutiqueState.selectedBoutique$.subscribe(id => this.selectedBoutiqueId = id);

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

        // 1. Reconstruire la liste complète
        this.allProducts = [];
        this.categories.forEach(categorie => {
          if (categorie.produits) {
            this.allProducts.push(...categorie.produits);
          }
        });

        // 2. Initialiser displayedProducts avec tous les produits
        this.showAllProducts();
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
    const enteredValue = parseFloat(this.enteredAmount.replace(',', '.')) || 0;
    
    this.paymentAmount = enteredValue;
    this.isAmountEntered = enteredValue > 0;
    
    // Toujours calculer la différence
    this.changeDue = Math.abs(this.totalAmount - this.paymentAmount);
  }

  selectPaymentMethod(method: string): void {
    this.selectedPaymentMethod = method;
  }

  // completePayment(): void {
  //   // Logique pour finaliser le paiement
  //   console.log('Paiement complété:', {
  //     method: this.selectedPaymentMethod,
  //     amount: this.paymentAmount,
  //     change: this.changeDue
  //   });
  //   this.submitVente()
  //   // this.goTopaiement()
    
  //   // Fermer le popup et réinitialiser le panier
  //   this.closePaymentPopup();
  //   this.cart.clear();
  //   this.saveActiveCart();
  // } 

  completePayment(): void {
    // protection double-click / UI feedback
    if (this.isSubmittingVente) return;

    this.isSubmittingVente = true;
    // Lance l'enregistrement : submitVente() gère la navigation et la réinitialisation au next/error
    this.submitVente();
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
    const items: { product: ProduitDetailsResponseDTO, quantity: number }[] = [];
    for (const [productId, quantity] of this.cart.entries()) {
      if (quantity > 0) {
        const product = this.allProducts.find(p => p.id === productId);
        if (product) {
          items.push({ product, quantity });
        }
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
      const product = this.allProducts.find(p => p.id === productId);
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

  // Début de l'appui
startPress(event: Event, produit: ProduitDetailsResponseDTO): void {
  if (this.getAvailableStock(produit) <= 0) return;

  this.longPressTimer = setTimeout(() => {
    // Appel au service pour récupérer les données à jour
    this.produitService.getProduitById(produit.id).subscribe({
      next: (result: Produit) => {
        // Mapping Produit => ProduitDetailsResponseDTO
        const mappedProduct = new ProduitDetailsResponseDTO({
          ...result,
          categorieId: result.categorieId ?? 0,
          seuilAlert: result.seuilAlert ?? 0,
          nomCategorie: result.nomCategorie ?? '',
          nomUnite: result.nomUnite ?? '',
          typeProduit: result.typeProduit ?? '',
          createdAt: result.createdAt ?? '',
          lastUpdated: result.lastUpdated ?? '',
          datePreemption: result.datePreemption ?? null,
          boutiqueId: result.boutiqueId ?? null,
          description: result.description ?? '',
          codeBare: result.codeBare ?? '',
          codeGenerique: result.codeGenerique ?? ''
        });

        this.selectedProductForDetail = mappedProduct;
        this.showDetailPopup = true;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération du produit :', err);
      }
    });

    this.longPressTimer = null;
  }, 500);
}

getNomBoutiqueCourante(produit: ProduitDetailsResponseDTO): string {
  const boutique = produit.boutiques?.find(b => b.id === produit.boutiqueId);
  return boutique?.nom || 'Boutique inconnue';
}

isQuantiteCritique(produit: ProduitDetailsResponseDTO): boolean {
  const quantite = this.getQuantiteDansBoutiqueCourante(produit);

  if (produit.seuilAlert == null || produit.seuilAlert === 0) {
    return true;
  }
  return quantite <= produit.seuilAlert;
}

getQuantiteClass(produit: ProduitDetailsResponseDTO): string {
  return this.isQuantiteCritique(produit) ? 'alert-low-stock' : 'safe-stock';
}



getQuantiteDansBoutiqueCourante(produit: ProduitDetailsResponseDTO): number {
  const boutique = produit.boutiques?.find(b => b.id === produit.boutiqueId);
  return boutique?.quantite ?? 0;
}






  endPress(): void {
    if (this.longPressTimer) {
      clearTimeout(this.longPressTimer);
      this.longPressTimer = null;
    }
  }

  goTopaiement() {
    this.router.navigate(['/pos-accueil/paiement'])
  }

  // Fermer le popup
  closeDetailPopup(): void {
    this.showDetailPopup = false;
    this.selectedProductForDetail = null;
  }

  loadClients() {
    this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) return throwError(() => new Error('Aucun token trouvé'));
        return this.clientService.getListClients();
      })
    ).subscribe({
      next: (data) => {
        this.clients = data.map(client => ({
          ...client,
          photo: client.photo 
            ? `${environment.imgUrl}${client.photo}` 
            : `assets/img/profil.png`,
          entrepriseClient: client.entrepriseClient 
            ? { id: client.entrepriseClient.id } 
            : null
        })).sort((a, b) => {
          const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return dateB - dateA;
        });
      },
      error: (err) => {
        console.error('Erreur récupération clients :', err);
      }
    });
  }

  // Fermer le popup client list
  closeListClientPopup(): void {
    this.showClientPopup = false;
  }

  highlightMatch(text: string | null | undefined): SafeHtml {
    if (!text) return '';
    if (!this.searchText.trim()) return text;
    
    const escapedSearch = this.searchText.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedSearch})`, 'gi');
    
    return this.sanitizer.bypassSecurityTrustHtml(
      text.replace(regex, '<mark>$1</mark>')
    );
  }

  get filteredClients(): Clients[] {
    let clients = this.clients;
    
    if (this.searchText.trim()) {
      const searchLower = this.searchText.toLowerCase().trim();
      clients = clients.filter(client => 
        (client.nomComplet?.toLowerCase().includes(searchLower)) ||
        (client.email?.toLowerCase().includes(searchLower)) ||
        (client.adresse?.toLowerCase().includes(searchLower)) ||
        (client.telephone?.includes(searchLower))
      );
    }
    
    return clients.sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA; // Tri décroissant
    });
  }

  sort(field: string) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }

    this.clients.sort((a: any, b: any) => {
      const modifier = this.sortDirection === 'asc' ? 1 : -1;
      const valueA = a[field]?.toString().toLowerCase() ?? '';
      const valueB = b[field]?.toString().toLowerCase() ?? '';
      return valueA.localeCompare(valueB) * modifier;
    });
  }

  // selectClient(client: Clients) {
  //   // Logique pour sélectionner le client
  //   console.log('Client sélectionné:', client);
  //   this.closeListClientPopup();
  // }

  selectClient(client: Clients) {
    this.selectedClient = client;
    this.selectedEntreprise = null; // Réinitialiser l'entreprise sélectionnée
    console.log('Client sélectionné:', client);
    this.closeListClientPopup();
  }

  // Gestion du changement de pays
  onPaysChange(event: any): void {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
    
    if (!paysInfo) return;
    
    this.indicatif = paysInfo.indicatif;
    this.maxPhoneLength = paysInfo.longueur;
    
    const ctrl = this.clientForm.get('telephone');
    let currentValue = ctrl?.value ?? '';
    
    const prefix = this.indicatif.replace(/\D/g, '');
    const valueNumerique = currentValue.replace(/\D/g, '');
    
    if (!valueNumerique.startsWith(prefix)) {
      ctrl?.setValue(this.indicatif);
    } else {
      const reste = valueNumerique.slice(prefix.length, prefix.length + this.maxPhoneLength);
      ctrl?.setValue(this.indicatif + reste);
    }
    
    this.updatePhoneValidator(paysInfo.longueur);
  }

  private updatePhoneValidator(longueur: number): void {
    const ctrl = this.clientForm.get('telephone');
    const regex = new RegExp(`^\\${this.indicatif}\\s?\\d{${longueur}}$`);
    ctrl?.setValidators([Validators.required, Validators.pattern(regex)]);
    ctrl?.updateValueAndValidity();
  }

  // Formatage du numéro de téléphone
  formatPhoneNumber(): void {
    let valeur = this.clientForm.get('telephone')?.value;
    
    if (!valeur.startsWith(this.indicatif)) {
      this.clientForm.get('telephone')?.setValue(this.indicatif);
      return;
    }
    
    const chiffres = valeur.replace(this.indicatif, '').replace(/\D/g, '');
    const numeroFormate = this.indicatif + chiffres;
    this.clientForm.get('telephone')?.setValue(numeroFormate.slice(0, this.indicatif.length + this.maxPhoneLength));
  }

  // Charger les entreprises pour l'autocomplete
  loadEntreprises() {
    this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          console.error('Aucun token valide trouvé !');
          return throwError(() => new Error('Aucun token trouvé'));
        }
        return this.entrepriseService.getListEntreprise();
      })
    ).subscribe({
      next: (entreprises) => {
        this.optionsEntreprise$.next(entreprises);
        this.setupAutocomplete();
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des entreprises :', error);
      }
    });
  }

  // Configurer l'autocomplete
  private setupAutocomplete() {
    this.filteredOptions = combineLatest([
      this.control.valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value?.nom)
      ),
      this.optionsEntreprise$
    ]).pipe(
      map(([name, entreprises]) => 
        name ? this._filter(name, entreprises) : entreprises
      )
    );
  }

  private _filter(name: string, entreprises: Entreprise[]): Entreprise[] {
    const filterValue = name.toLowerCase();
    return entreprises.filter(e =>
        e.nom.toLowerCase().includes(filterValue)
    );
  }

  // Affichage du nom de l'entreprise dans l'autocomplete
  displayFnEntreprise(e?: Entreprise): string {
    return e ? e.nom : '';
  }

  // Sélection d'une entreprise dans l'autocomplete
  onEntrepriseSelected(event: any): void {
    // Logique pour gérer la sélection
  }

  // Ouvrir/fermer le popup d'ajout de client
  openAddClient() {
    this.showAddClientPopup = true;
    this.loadEntreprises();
  }

  closeAddClientPopup() {
    this.showAddClientPopup = false;
    this.clientForm.reset();
  }

  // Ajouter un nouveau client
  ajouterClientDansPopup() {
    if (this.clientForm.invalid) return;

    const client: Clients = this.clientForm.value;
    
    if (this.isEntrepriseSelected) {
      const selected = this.control.value as Entreprise;
      if (selected && selected.id) {
        client.entrepriseClient = { id: selected.id } as Entreprise;
      }
    }
    
    this.clientService.addClient(client).subscribe({
      next: (res: any) => {
        const newClient: Clients = {
          ...client,
          id: res.id,
          createdAt: new Date() // Utilisez un objet Date directement
        };
        
        this.closeAddClientPopup();
        this.clients = [newClient, ...this.clients];
        this.currentListTypePopup = 'clients';
        this.searchText = '';
      },
      error: err => {
        console.error('Erreur lors de l\'ajout du client:', err);
      }
    });
  }

  setClientType(type: 'individuel' | 'entreprise') {
    this.clientType = type;
  }

  onEntreprisePaysChange(event: any): void {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
    
    if (!paysInfo) return;
    
    this.entrepriseIndicatif = paysInfo.indicatif;
    this.entrepriseMaxPhoneLength = paysInfo.longueur;
    
    const ctrl = this.entrepriseForm.get('telephone');
    let currentValue = ctrl?.value ?? '';
    
    const prefix = this.entrepriseIndicatif.replace(/\D/g, '');
    const valueNumerique = currentValue.replace(/\D/g, '');
    
    if (!valueNumerique.startsWith(prefix)) {
        ctrl?.setValue(this.entrepriseIndicatif);
    } else {
        const reste = valueNumerique.slice(prefix.length, prefix.length + this.entrepriseMaxPhoneLength);
        ctrl?.setValue(this.entrepriseIndicatif + reste);
    }
    
    this.updateEntreprisePhoneValidator(paysInfo.longueur);
  }

  private updateEntreprisePhoneValidator(longueur: number): void {
    const ctrl = this.entrepriseForm.get('telephone');
    const regex = new RegExp(`^\\${this.entrepriseIndicatif}\\s?\\d{${longueur}}$`);
    ctrl?.setValidators([Validators.required, Validators.pattern(regex)]);
    ctrl?.updateValueAndValidity();
  }

  // Formatage du numéro pour les entreprises
  formatEntreprisePhoneNumber(): void {
    let valeur = this.entrepriseForm.get('telephone')?.value;
    
    if (!valeur.startsWith(this.entrepriseIndicatif)) {
        this.entrepriseForm.get('telephone')?.setValue(this.entrepriseIndicatif);
        return;
    }
    
    const chiffres = valeur.replace(this.entrepriseIndicatif, '').replace(/\D/g, '');
    const numeroFormate = this.entrepriseIndicatif + chiffres;
    this.entrepriseForm.get('telephone')?.setValue(numeroFormate.slice(0, this.entrepriseIndicatif.length + this.entrepriseMaxPhoneLength));
  }

  ajouterEntrepriseDansPopup() {
    if (this.entrepriseForm.invalid) {
      return;
    }

    const entreprise = this.entrepriseForm.value;
    
    this.entrepriseService.addEntreprise(entreprise).subscribe({
      next: (res: EntrepriseClient) => {
        // Fermer le popup d'ajout
        this.closeAddClientPopup();
        
        // Ajouter la nouvelle entreprise à la liste
        this.entreprisesPopup = [res, ...this.entreprisesPopup];
        
        // Basculer sur l'onglet des entreprises
        this.currentListTypePopup = 'entreprises';
        
        // Réinitialiser le champ de recherche
        this.searchText = '';
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout de l\'entreprise:', err);
      }
    });
  }

  // loadEntreprisesForPopup() {
  //   this.usersService.getValidAccessToken().pipe(
  //     switchMap(token => {
  //       if (!token) {
  //         console.error('Aucun token valide trouvé !');
  //         return throwError(() => new Error('Aucun token trouvé'));
  //       }
  //       return this.entrepriseService.getListEntreprises();
  //     })
  //   ).subscribe({
  //     next: (data: EntrepriseClient[]) => {
  //       this.entreprisesPopup = data;
  //       // Pas besoin d'initialiser filteredEntreprisesPopup ici
  //       // car le getter s'en chargera dynamiquement
  //     },
  //     error: (err) => {
  //       console.error('Erreur récupération entreprises :', err);
  //     }
  //   });
  // }

  loadEntreprisesForPopup() {
    this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          console.error('Aucun token valide trouvé !');
          return throwError(() => new Error('Aucun token trouvé'));
        }
        return this.entrepriseService.getListEntreprises();
      })
    ).subscribe({
      next: (data: EntrepriseClient[]) => {
        // Trier par date de création descendante
        this.entreprisesPopup = data.sort((a, b) => {
          const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return dateB - dateA;
        });
      },
      error: (err) => {
        console.error('Erreur récupération entreprises :', err);
      }
    });
  }

  // Basculer entre clients/entreprises dans le popup
  setListTypePopup(type: 'clients' | 'entreprises') {
    this.currentListTypePopup = type;
    this.searchText = ''; // Réinitialiser la recherche
  }

  // Filtrer les entreprises
  get filteredEntreprisesPopup(): EntrepriseClient[] {
    let entreprises = this.entreprisesPopup;
    
    if (this.searchText.trim()) {
      const searchLower = this.searchText.toLowerCase().trim();
      entreprises = entreprises.filter(entreprise => 
        (entreprise.nom?.toLowerCase().includes(searchLower)) ||
        (entreprise.email?.toLowerCase().includes(searchLower)) ||
        (entreprise.adresse?.toLowerCase().includes(searchLower)) ||
        (entreprise.telephone?.includes(searchLower))
      );
    }
    
    // Trier par date de création descendante (le plus récent en premier)
    return entreprises.sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    });
  }

  // Ouvrir le popup
  openListClientPopup(): void {
    this.showClientPopup = true;
    this.loadClients();
    this.loadEntreprisesForPopup(); // Charger les entreprises
  }

  // Sélectionner une entreprise
  // selectEntreprise(entreprise: EntrepriseClient) {
  //   console.log('Entreprise sélectionnée:', entreprise);
  //   this.closeListClientPopup();
  // }

  selectEntreprise(entreprise: EntrepriseClient) {
    this.selectedEntreprise = entreprise;
    this.selectedClient = null; // Réinitialiser le client sélectionné
    console.log('Entreprise sélectionnée:', entreprise);
    this.closeListClientPopup();
  }

  getSelectedCustomerName(): string {
    if (this.selectedClient) {
      return this.selectedClient.nomComplet || 'Client sans nom';
    }
    if (this.selectedEntreprise) {
      return this.selectedEntreprise.nom || 'Entreprise sans nom';
    }
    return 'Client';
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.showPaymentPopup) {
      this.handlePaymentKeyPressPhysical(event);
    } else {
      this.handleKeyPressPhysical(event);
    }
  }

  handleKeyPressPhysical(event: KeyboardEvent) {
    // Ignorer si un popup est ouvert ou si on est dans un champ de saisie
    if (this.showDetailPopup || this.showClientPopup || this.showAddClientPopup) return;
    
    const key = event.key;
    switch (key) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.handleKeyPress(key);
        break;
      case ',':
      case '.':
        this.handleKeyPress(',');
        break;
      case 'Backspace':
        this.handleKeyPress('backspace');
        break;
      case '-':
      case '+':
        this.handleKeyPress('+/-');
        break;
    }
  }

  handlePaymentKeyPressPhysical(event: KeyboardEvent) {
    const key = event.key;
    switch (key) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.handlePaymentKeyPress(key);
        break;
      case ',':
      case '.':
        this.handlePaymentKeyPress(',');
        break;
      case 'Backspace':
        this.handlePaymentKeyPress('backspace');
        break;
      case '-':
      case '+':
        this.handlePaymentKeyPress('+/-');
        break;
      case 'Enter':
        if (this.isAmountEntered) {
          this.completePayment();
        }
        break;
    }
  }

  private buildVenteRequestFromCart(): VenteRequest | null {
    if (!this.selectedBoutiqueId) {
      this.venteErrorMessage = 'Aucune boutique sélectionnée.';
      return null;
    }

    const produitsQuantites: { [k: string]: number } = {};
    this.cart.forEach((qty, productId) => {
      if (qty > 0) produitsQuantites[String(productId)] = qty;
    });

    if (Object.keys(produitsQuantites).length === 0) {
      this.venteErrorMessage = 'Le panier est vide.';
      return null;
    }

    const modePaiementEnum = this.mapPaymentMethodToEnum(this.selectedPaymentMethod);

    // Récupérer les informations du client/entreprise
    let clientNom = undefined;
    let clientNumero = undefined;

    if (this.selectedClient) {
      clientNom = this.selectedClient.nomComplet || undefined;
      clientNumero = this.selectedClient.telephone || undefined;
    } else if (this.selectedEntreprise) {
      clientNom = this.selectedEntreprise.nom || undefined;
      clientNumero = this.selectedEntreprise.telephone || undefined;
    }

    const request: VenteRequest = {
      boutiqueId: this.selectedBoutiqueId,
      produitsQuantites,
      description: 'Vente POS',
      clientNom: clientNom,     // Utilisez le bon nom de champ
      clientNumero: clientNumero, // Utilisez le bon nom de champ
      modePaiement: modePaiementEnum ?? undefined,
    };

    return request;
  }

  submitVente() {
    this.venteErrorMessage = null;

    const request = this.buildVenteRequestFromCart();
    if (!request) return;

    // Affiche clairement la requête qui sera envoyée
    console.log('→ Envoi de la requête vente:', request);
    // Also show boutique id and cart for extra confidence
    console.log('selectedBoutiqueId=', this.selectedBoutiqueId, 'cart=', Array.from(this.cart.entries()));

    this.isSubmittingVente = true;

    this.venteService.enregistrerVente(request).pipe(
      finalize(() => this.isSubmittingVente = false)
    ).subscribe({
      next: (res: VenteResponse) => {
        console.log('Vente enregistrée', res);
        // UX : succès
        // alert('Vente enregistrée avec succès (ID: ' + res.venteId + ')');

        // Réinitialiser l'UI : vider cart, sauvegarder état
        this.cart.clear();
        this.saveActiveCart();
        this.updateCommandeTotals();

        // Naviguer / afficher reçu (optionnel)
        this.router.navigate(['/pos-accueil/paiement'], {
          state: {
            vente: res,
            paymentAmount: this.paymentAmount,
            changeDue: this.changeDue,
            paymentMethod: this.selectedPaymentMethod
          }
        });

        // fermer popup de paiement si ouvert
        this.showPaymentPopup = false;
      },
      error: (err: any) => {
        // Affiche tout pour debug
        console.error('Erreur enregistrement vente (subscribe) :', err);

        // Si err est un HttpErrorResponse (erreur réseau / serveur), extraire message du serveur
        const original = err?.original ?? err;
        let serverMsg = null;

        // Cas : on reçoit HttpErrorResponse avec original.error = { exception, error: "..." }
        if (original?.error) {
          // Many backends return either { error: "..."} or { message: "..."} or {exception:.., error:..}
          serverMsg = original.error.error || original.error.message || original.message;
        }

        // Sinon on prend err.message
        this.venteErrorMessage = serverMsg || err?.message || 'Erreur inconnue lors de l\'enregistrement de la vente';

        // Affiche à l'utilisateur
        alert('Erreur : ' + this.venteErrorMessage);

        // NE PAS vider le panier : laisser l'utilisateur réessayer
      }
    });
  }

  private mapPaymentMethodToEnum(uiMethod: string | null | undefined): string | null {
    if (!uiMethod) return null;

    const m = uiMethod.trim().toLowerCase();

    if (m === 'espèces' || m === 'espèces ' || m === 'especes' || m === 'especes' || m === 'espèces') {
      return 'ESPECES';
    }
    if (m === 'carte' || m === 'card') {
      return 'CARTE';
    }
    if (m === 'mobile money' || m === 'mobile_money' || m.includes('mobile')) {
      return 'MOBILE_MONEY';
    }
    if (m === 'chèque' || m === 'cheque' || m === 'cheque') {
      return 'CHEQUE';
    }
    // 'Compte client' / 'Compte' -> on n'a pas d'enum spécifique -> AUTRE
    if (m.includes('compte') || m.includes('client') || m.includes('compte client')) {
      return 'AUTRE';
    }

    // fallback conservative
    return 'AUTRE';
  }

  clearCustomerSelection(event: MouseEvent) {
    event.stopPropagation();
    this.selectedClient = null;
    this.selectedEntreprise = null;
  }

  // Méthodes pour le déplacement
  startDrag(event: MouseEvent): void {
    event.preventDefault();
    this.isDragging = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.initialX = this.popupOffset.x;
    this.initialY = this.popupOffset.y;

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove = (event: MouseEvent): void => {
    if (!this.isDragging) return;
    
    requestAnimationFrame(() => {
      const deltaX = event.clientX - this.startX;
      const deltaY = event.clientY - this.startY;
      this.popupOffset.x = this.initialX + deltaX;
      this.popupOffset.y = this.initialY + deltaY;
    });
  }

  onMouseUp = (): void => {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }



}