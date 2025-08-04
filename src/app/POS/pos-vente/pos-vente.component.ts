import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
import { BehaviorSubject, combineLatest, map, Observable, of, startWith, switchMap, throwError } from 'rxjs';
import { Entreprise } from 'src/app/admin-page/MODELS/entreprise-model';
import { EntrepriseService } from 'src/app/admin-page/SERVICES/entreprise-service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-pos-vente',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, MatAutocompleteModule],
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

  // Propriétés ajoutées
  clients: Clients[] = [];
  searchText = '';
  sortField = 'nomComplet';
  sortDirection: 'asc' | 'desc' = 'asc';

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

  constructor(
    private router: Router,
    private viewState: ViewStateService,
    private categorieService: CategorieService,
    private commandeState: CommandeStateService,
    private clientService: ClientService,
    private usersService: UsersService,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private entrepriseService: EntrepriseService
  ) {
    this.commandeState.activeCommandeId$.subscribe(() => {
      this.loadActiveCart();
    });

    this.initClientForm();
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
    this.goTopaiement()
    
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
    // même logique, pas besoin de différencier TouchEvent / MouseEvent
    if (this.getAvailableStock(produit) <= 0) return;
    this.selectedProductForDetail = produit;
    this.longPressTimer = setTimeout(() => {
      this.showDetailPopup = true;
      this.longPressTimer = null;
    }, 500);
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

  // ouvrir le popup client list
  openListClientPopup(): void {
    this.showClientPopup = true;
    this.loadClients();
  }

  loadClients() {
    this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          console.error('Aucun token valide trouvé !');
          return throwError(() => new Error('Aucun token trouvé'));
        }
        return this.clientService.getListClients();
      })
    ).subscribe({
      next: (data) => {
        this.clients = data.map(client => {
          return {
            ...client,
            photo: client.photo 
              ? `${environment.imgUrl}${client.photo}` 
              : `/assets/img/profil.png`,
            entrepriseClient: client.entrepriseClient 
              ? { id: client.entrepriseClient.id } 
              : null
          };
        });
        // Trier initialement
        this.sort('nomComplet');
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
    if (!this.searchText.trim()) return this.clients;
    
    const searchLower = this.searchText.toLowerCase().trim();
    return this.clients.filter(client => 
      (client.nomComplet?.toLowerCase().includes(searchLower)) ||
      (client.email?.toLowerCase().includes(searchLower)) ||
      (client.adresse?.toLowerCase().includes(searchLower)) ||
      (client.telephone?.includes(searchLower))
    );
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

  selectClient(client: Clients) {
    // Logique pour sélectionner le client
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
    if (this.clientForm.invalid) {
      // Gérer les erreurs
      return;
    }

    const client: Clients = this.clientForm.value;
    
    // Gérer l'entreprise sélectionnée si nécessaire
    if (this.isEntrepriseSelected) {
      const selected = this.control.value as Entreprise;
      if (selected && selected.id) {
        client.entrepriseClient = { id: selected.id } as Entreprise;
      }
    }
    
    this.clientService.addClient(client).subscribe({
      next: res => {
        // Fermer le popup et recharger la liste des clients
        this.closeAddClientPopup();
        this.loadClients();
      },
      error: err => {
        console.error('Erreur lors de l\'ajout du client:', err);
      }
    });
  }


}