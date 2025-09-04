import { CommonModule } from '@angular/common';
import { Component, HostListener, ChangeDetectorRef } from '@angular/core';
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
import { BehaviorSubject, combineLatest, finalize, map, Observable, of, startWith, Subscription, switchMap, take, throwError } from 'rxjs';
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
import { CfaCurrencyPipe } from 'src/app/admin-page/MODELS/cfa-currency.pipe';
import { ScannerService } from 'src/app/admin-page/SERVICES/VenteService/scanner.service';
import { SearchService } from 'src/app/admin-page/SERVICES/SearchService';
import { CalculatorService } from 'src/app/admin-page/SERVICES/VenteService/calculator.service';

interface DiscountMode {
  active: boolean;
  type: 'CFA' | '%';
  value: number;
  productId?: number; // Produit en cours de modification
}

@Component({
  selector: 'app-pos-vente',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, MatAutocompleteModule, NgxBarcode6Module, CfaCurrencyPipe],
  templateUrl: './pos-vente.component.html',
  styleUrl: './pos-vente.component.scss'
})
export class PosVenteComponent {
  private barcodeIndex: Map<string, ProduitDetailsResponseDTO> = new Map();
  isListView = true;
  showDropdown = false;
  showPaymentPopup = false;
  categories: Categorie[] = [];
  selectedCategoryId: number | null = null;
  displayedProducts: ProduitDetailsResponseDTO[] = [];
  
  // Cache pour les compteurs de catégories
  private categoryCountCache: Map<number, number> = new Map();
  private lastBoutiqueId: number | null = null;

  currentPage: number = 0;
  pageSize: number = 20;
  totalPages: number = 0;
  isLoadingMore: boolean = false;

  scanInProgress = false;

  searchTerm: string = '';
  private searchSub!: Subscription;
  private calcActiveSub!: Subscription;
  private isCalculatorActive = true;
  
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

  showScanError = false;
  scanErrorMessage = '';

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
  isComposingNewQuantity: boolean = false;

  isDragging = false;
  startX = 0;
  startY = 0;
  initialX = 0;
  initialY = 0;
  popupOffset = { x: 0, y: 0 };

  showDiscountInput = false;
  discountValue: number = 0;
  discountType: 'CFA' | '%' = 'CFA';
  discountButtonText = 'Remise';
  selectedProductForDiscount: ProduitDetailsResponseDTO | null = null;

  discountMode: DiscountMode = {
    active: false,
    type: 'CFA',
    value: 0
  };

  globalDiscount = {
    active: false,
    type: 'CFA' as 'CFA' | '%',
    value: 0
  };

  // Liste des remises par produit
  productDiscounts: Map<number, number> = new Map();
  lastSelectedForDiscount: number | null = null;

  inputMode: 'quantity' | 'discount' = 'quantity'; // Nouveau flag

  // Méthode pour basculer entre les modes
  setInputMode(mode: 'quantity' | 'discount') {
    this.inputMode = mode;
  }

  currentDiscountInput: string = '';
  disablePhysicalKeyboard = false;
  userRole: string | null = null;
  canAddClient = false;

  // Propriétés pour la validation des scans
  private lastScannedCode: string | null = null;
  private lastScanTime: number = 0;

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
    private boutiqueState: BoutiqueStateService,
    private scannerService: ScannerService,
    private searchService: SearchService,
    private calculator: CalculatorService,
    private cdr: ChangeDetectorRef
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
    this.loadUserRole();
       // Charger toutes les catégories avec leurs compteurs
    this.categorieService.getCategoriesWithCounts().subscribe({
      next: (categories) => {
        this.categories = categories;
        console.log('Catégories avec compteurs chargées :', this.categories);
        
        // Charger seulement la première page de chaque catégorie
        this.categories.forEach(categorie => {
          this.loadProduitsByCategorie(categorie.id!, 0, this.pageSize);
        });
      },
      error: (err) => {
        console.error('Erreur lors du chargement des catégories', err);
      }
    });

 

    // this.calcActiveSub = this.calculatorService.isActive$.subscribe(active => {
    //   this.isCalculatorActive = active;
    // });

    this.searchSub = this.searchService.search$.subscribe(term => {
      this.searchTerm = term;
    });
     
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
    // this.boutiqueState.selectedBoutique$.subscribe(id => this.selectedBoutiqueId = id);
    this.boutiqueState.selectedBoutique$.subscribe(id => {
      console.log('🏪 Boutique sélectionnée:', id);
      this.selectedBoutiqueId = id;
      
      // Vider le cache car la boutique a changé
      this.clearCategoryCountCache();
      this.lastBoutiqueId = id;
      
      // recalculer les compteurs visible pour l'UI
      this.recomputeCategoryCountsForBoutique();
      // Forcer la détection de changement pour mettre à jour l'affichage
      this.cdr.detectChanges();
    });

    // Abonnement aux scans (déjà présent) -> aussi suivre l'indicateur de scan
    this.scannerService.getScanObservable().subscribe(barcode => {
      this.handleBarcodeScan(barcode);
    });

    // Nouveau : pour bloquer le HostListener pendant un scan
    this.scannerService.getScanningObservable().subscribe(scanning => {
      this.scanInProgress = scanning;
    });

    // Désactiver le scanner quand on est en mode saisie
    this.scannerService.setUserTyping(true);

     // S'abonner à l'état de la calculatrice
    this.calculator.isActive$.subscribe(active => {
      if (active) {
        this.scannerService.disableScanner();
      } else {
        this.scannerService.enableScanner();
      }
    });

  }

  private loadUserRole(): void {
    this.usersService.getUserInfo().subscribe({
      next: (user) => {
        if (user && user.roleType) {
          this.userRole = user.roleType;
          this.canAddClient = ['ADMIN', 'MANAGER'].includes(this.userRole);
        }
      },
      error: () => {
        const localUser = this.usersService.getCurrentUser();
        if (localUser && localUser.roleType) {
          this.userRole = localUser.roleType;
          this.canAddClient = ['ADMIN', 'MANAGER'].includes(this.userRole);
        }
      }
    });
  }

   ngOnDestroy() {
    if (this.searchSub) this.searchSub.unsubscribe();
    if (this.calcActiveSub) this.calcActiveSub.unsubscribe();
    // this.scannerService.enableScanner();
  }

  private loadCategories(): void {
    this.categorieService.getCategoriesWithCounts().subscribe({
      next: (categories) => {
        this.categories = categories;
        console.log('Catégories avec compteurs chargées (loadCategories):', this.categories);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des catégories:', error);
      }
    });
  }

  private indexProductsByBarcode(): void {
    this.barcodeIndex.clear();
    this.allProducts.forEach(product => {
      if (product.codeBare) {
        this.barcodeIndex.set(product.codeBare.toString().toLowerCase(), product);
      }
    });
  }

  private handleBarcodeScan(barcode: string): void {
    console.log('=== SCAN DEBUG ===');
    console.log('Code scanné:', barcode);
    
    // Vérifier que ce n'est pas un scan en double
    if (!this.isValidScan(barcode)) {
      console.log('Scan ignoré - possible doublon ou invalide');
      return;
    }
    
    console.log('Nombre total de produits:', this.allProducts.length);
    console.log('Produits avec code-barres:', this.allProducts.filter(p => p.codeBare).length);
    
    const normalizedBarcode = barcode.toLowerCase();
    console.log('Code normalisé:', normalizedBarcode);
    
    // Recherche plus flexible du produit
    const product = this.allProducts.find(p => {
      if (!p.codeBare) return false;
      
      const productCode = p.codeBare.toString().toLowerCase();
      const scannedCode = normalizedBarcode;
      
      console.log(`Comparaison: "${productCode}" vs "${scannedCode}"`);
      
      // Correspondance exacte
      if (productCode === scannedCode) return true;
      
      // Correspondance partielle (au cas où il y a des espaces ou caractères spéciaux)
      if (productCode.includes(scannedCode) || scannedCode.includes(productCode)) return true;
      
      return false;
    });

    if (product) {
      console.log('Produit trouvé:', product);
      console.log('Ajout au panier...');
      this.addToCart(product);
      // this.showScanSuccess(product.nom); 
    } else {
      console.log('Aucun produit trouvé');
      console.log('Codes-barres disponibles:', this.allProducts.map(p => p.codeBare).filter(Boolean));
      this.showScanError = true;
      this.scanErrorMessage = `Aucun produit trouvé avec le code: ${barcode}`;
      
      setTimeout(() => {
        this.showScanError = false;
      }, 1000);
    }
  }

  // Méthode pour valider un scan et éviter les doublons
  // private isValidScan(barcode: string): boolean {
  //   // Vérifier que le code n'est pas vide
  //   if (!barcode || barcode.trim().length < 3) {
  //     return false;
  //   }

  //   // Vérifier que ce n'est pas le même code que le dernier scan
  //   const currentTime = Date.now();
  //   if (this.lastScannedCode === barcode && (currentTime - this.lastScanTime) < 1000) {
  //     console.log('Scan ignoré - même code scanné trop rapidement');
  //     return false;
  //   }

  //   // Mettre à jour le dernier scan
  //   this.lastScannedCode = barcode;
  //   this.lastScanTime = currentTime;

  //   return true;
  // }


  private isValidScan(barcode: string): boolean {
    // Vérifier que le code n'est pas vide
    if (!barcode || barcode.trim().length < 3) {
      return false;
    }

    // Vérifier que ce n'est pas exactement le même code que le dernier scan
    // mais avec un délai beaucoup plus court pour permettre les scans rapides
    const currentTime = Date.now();
    if (this.lastScannedCode === barcode && (currentTime - this.lastScanTime) < 50) {
      console.log('Scan ignoré - même code scanné trop rapidement');
      return false;
    }

    // Mettre à jour le dernier scan
    this.lastScannedCode = barcode;
    this.lastScanTime = currentTime;

    return true;
  }

  // Nouvelle méthode pour afficher le succès du scan
  // private showScanSuccess(productName: string): void {
  //   // Optionnel: afficher un toast de succès
  //   console.log(`Produit "${productName}" ajouté au panier via scan`);
    
  //   // Feedback visuel temporaire
  //   this.showScanError = false;
  //   this.scanErrorMessage = '';
    
  //   // Afficher un message de succès
  //   setTimeout(() => {
  //     this.showScanError = true;
  //     this.scanErrorMessage = `Produit "${productName}" ajouté au panier !`;
  //     setTimeout(() => {
  //       this.showScanError = false;
  //     }, 2000);
  //   }, 100);
  // }

  // Méthode de test pour simuler un scan (utile pour debug)
  // testScan(code: string): void {
  //   console.log('Test de scan avec le code:', code);
  //   this.handleBarcodeScan(code);
  // }

  // Méthode pour tester le scanner avec différents codes
  // testScannerWithCodes(): void {
  //   console.log('=== TEST SCANNER AVEC DIFFÉRENTS CODES ===');
    
  //   // Test avec des codes courts
  //   this.testScan('123');
  //   this.testScan('456');
    
  //   // Test avec le code que vous avez dans votre bouton
  //   this.testScan('6920484370182');
    
  //   // Test avec des codes aléatoires
  //   this.testScan('987654321');
  //   this.testScan('ABCDEF123');
  // }

  // Méthode pour vérifier l'état du scanner
  // checkScannerStatus(): void {
  //   console.log('=== ÉTAT DU SCANNER ===');
  //   console.log('ScannerService disponible:', !!this.scannerService);
  //   console.log('scanInProgress:', this.scanInProgress);
  //   console.log('Produits chargés:', this.allProducts.length);
  //   console.log('Produits avec code-barres:', this.allProducts.filter(p => p.codeBare).length);
    
  //   // Afficher quelques codes-barres disponibles
  //   const codesWithProducts = this.allProducts
  //     .filter(p => p.codeBare)
  //     .slice(0, 5)
  //     .map(p => ({ id: p.id, nom: p.nom, code: p.codeBare }));
    
  //   console.log('Exemples de codes-barres:', codesWithProducts);
  // }

  private loadActiveCart() {
    this.cart = new Map(this.commandeState.getActiveCart());
  }

  private saveActiveCart() {
    this.commandeState.updateActiveCart(this.cart);
  }

loadProduitsByCategorie(categorieId: number, page: number = 0, size: number = 20) {
  if (page > 0) {
    this.isLoadingMore = true;
  }
  
  this.categorieService.getProduitsByCategorie(categorieId, page, size).subscribe({
    next: (res) => {
      console.log(`Page ${page + 1}/${res.totalPages} pour catégorie ${categorieId}`);

      // Mapper les produits
      const mappedProducts = res.produits.map(produit => new ProduitDetailsResponseDTO({
        id: produit.id,
        nom: produit.nom,
        prixVente: produit.prixVente,
        prixAchat: produit.prixAchat,
        quantite: produit.quantite,
        seuilAlert: produit.seuilAlert,
        categorieId: produit.categorieId || 0,
        uniteId: produit.uniteId,
        codeBare: produit.codeBare,
        photo: produit.photo,
        enStock: produit.enStock,
        nomCategorie: produit.nomCategorie || '',
        nomUnite: produit.nomUnite || '',
        typeProduit: produit.typeProduit || '',
        createdAt: produit.createdAt || '',
        lastUpdated: produit.lastUpdated || '',
        datePreemption: produit.datePreemption,
        boutiqueId: produit.boutiqueId,
        nomBoutique: produit.nomBoutique || '',
        description: produit.description || '',
        codeGenerique: produit.codeGenerique || '',
        boutiques: produit.boutiques || []
      }));

      // Si c'est la première page ET qu'une catégorie spécifique est sélectionnée
      if (page === 0 && this.selectedCategoryId !== null) {
        // Remplacer les produits affichés pour cette catégorie
        this.displayedProducts = mappedProducts;
        
        // MAIS garder tous les produits dans allProducts et juste mettre à jour cette catégorie
        this.allProducts = this.allProducts.filter(p => p.categorieId !== this.selectedCategoryId);
        this.addProductsWithoutDuplicates(mappedProducts);
      } else {
        // Sinon, ajouter à la suite (pour "Toutes les catégories" ou pages suivantes)
        this.displayedProducts.push(...mappedProducts);
        this.addProductsWithoutDuplicates(mappedProducts);
      }

      // Mettre à jour les informations de pagination
      this.totalPages = res.totalPages;
      this.currentPage = page;
      
      // Nettoyer les doublons potentiels
      this.removeDuplicateProducts();
      
      // Vider le cache car les produits ont changé
      this.clearCategoryCountCache();
      
      // Indexer les produits pour le scanner
      this.indexProductsByBarcode();
      
      // Recalculer les compteurs
      this.recomputeCategoryCountsForBoutique();
      
      // Forcer la mise à jour de l'affichage pour les compteurs
      this.cdr.detectChanges();
      
      // Désactiver l'indicateur de chargement
      this.isLoadingMore = false;
    },
    error: (err) => {
      this.isLoadingMore = false;
      console.error(`Erreur lors du chargement de la page ${page} pour la catégorie ${categorieId}`, err);
    }
  });
}



  // Méthode pour recharger et vérifier les produits
  // reloadProductsForScan(): void {
  //   console.log('=== RECHARGEMENT PRODUITS POUR SCAN ===');
  //   this.loadCategories();
  // }

showAllProducts() {
  this.selectedCategoryId = null;
  this.currentPage = 0;
  this.totalPages = 0;
  
  // Vider les produits affichés et tous les produits
  this.displayedProducts = [];
  this.allProducts = [];
  
  console.log('Chargement de la première page de chaque catégorie...');
  
  // Charger la première page de chaque catégorie
  this.categories.forEach(categorie => {
    this.loadProduitsByCategorie(categorie.id!, 0, this.pageSize);
  });
}

// Méthode pour charger plus de produits de toutes les catégories
private loadMoreProductsFromAllCategories() {
  if (this.isLoadingMore) return; // Éviter les appels multiples
  
  this.isLoadingMore = true;
  console.log('Chargement de plus de produits de toutes les catégories...');
  
  // Charger la page suivante de chaque catégorie qui a encore des pages
  let hasMoreData = false;
  
  this.categories.forEach(categorie => {
    // Calculer combien de pages ont déjà été chargées pour cette catégorie
    const productsInCategory = this.allProducts.filter(p => p.categorieId === categorie.id).length;
    const pagesLoaded = Math.ceil(productsInCategory / this.pageSize);
    
    // Si il y a encore des pages à charger pour cette catégorie
    if (productsInCategory > 0 && pagesLoaded * this.pageSize < (categorie.produitCount || 0)) {
      hasMoreData = true;
      this.loadProduitsByCategorie(categorie.id!, pagesLoaded, this.pageSize);
    }
  });
  
  if (!hasMoreData) {
    console.log('Toutes les données ont été chargées');
  }
  
  this.isLoadingMore = false;
}




selectCategory(categoryId: number | undefined) {
  if (categoryId === undefined) return;

  this.selectedCategoryId = categoryId;
  this.currentPage = 0; // Réinitialiser à la première page
  
  // Vider le cache AVANT de charger les nouveaux produits
  // pour éviter d'afficher des compteurs incorrects
  this.clearCategoryCountCache();
  
  // S'assurer que tous les produits de toutes les catégories sont chargés
  this.ensureAllCategoriesLoaded();
  
  // Filtrer l'affichage pour la catégorie sélectionnée
  const categoryProducts = this.allProducts.filter(p => p.categorieId === categoryId);
  this.displayedProducts = categoryProducts;
  
  // Forcer la mise à jour de l'affichage
  this.cdr.detectChanges();
}



onScroll() {
  // Si aucune catégorie n'est sélectionnée (mode "Toutes les catégories")
  if (this.selectedCategoryId === null) {
    // Charger plus de produits de toutes les catégories
    this.loadMoreProductsFromAllCategories();
    return;
  }
  
  // Si une catégorie spécifique est sélectionnée
  if (this.currentPage + 1 < this.totalPages) {
    console.log(`Chargement de la page ${this.currentPage + 1} pour la catégorie ${this.selectedCategoryId}`);
    this.loadProduitsByCategorie(this.selectedCategoryId, this.currentPage + 1, this.pageSize);
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

  onDiscountInputChange(event: any) {
  this.currentDiscountInput = event.target.value;
  // Utilisez parseFloat pour gérer les grands nombres
  this.discountMode.value = parseFloat(this.currentDiscountInput) || 0;
  this.updateCommandeTotals();
}

  // Méthode pour gérer les touches du keypad en mode remise
  handleDiscountKeyPress(key: string) {
    switch (key) {
      case 'backspace':
        this.currentDiscountInput = this.currentDiscountInput.slice(0, -1);
        break;
      case ',':
        break;
      default:
        // Augmentez la limite de 5 à 10
        if (this.currentDiscountInput.length < 10) {
          this.currentDiscountInput += key;
        }
    }
    this.discountMode.value = parseInt(this.currentDiscountInput, 10) || 0;
    this.updateCommandeTotals();
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

  /** Retourne la liste visible en appliquant boutique + catégorie + autres filtres */
 getVisibleProducts(): ProduitDetailsResponseDTO[] {
    let products = [...this.allProducts];

    // filtrer par boutique si nécessaire
    if (this.selectedBoutiqueId) {
      products = products.filter(p => p.boutiqueId === this.selectedBoutiqueId);
    }

    // filtrer par catégorie si sélectionnée
    if (this.selectedCategoryId !== null && this.selectedCategoryId !== undefined) {
      products = products.filter(p => p.categorieId === this.selectedCategoryId);
    }

    // filtrer par terme de recherche si présent
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      const termLower = this.searchTerm.toLowerCase();
      products = products.filter(p => p.nom.toLowerCase().includes(termLower));
    }

    // filtrer les produits en stock si besoin
    products = products.filter(p => p.enStock);

    return products;
}


  /** Retourne le nombre de produits de la catégorie pour la boutique sélectionnée */
  getCategoryProductCount(category: any): number {
    if (!category || !category.produits || !category.produits.length) return 0;

    // si aucune boutique sélectionnée, renvoyer le total de la catégorie
    if (!this.selectedBoutiqueId) {
      return category.produits.length;
    }

    // filtrer les produits de la catégorie par boutique
    return category.produits.filter((p: ProduitDetailsResponseDTO) =>
      // attention: certains produits peuvent avoir boutiqueId null, on gère ça
      p.boutiqueId !== null && p.boutiqueId === this.selectedBoutiqueId
    ).length;
  }

  /** Retourne le nombre de produits de la catégorie pour la boutique sélectionnée (pour l'affichage) */
  getCategoryProductCountForDisplay(category: any): number {
    if (!category) return 0;
    
    // Si aucune boutique sélectionnée, utiliser le compteur de l'API
    if (!this.selectedBoutiqueId) {
      return category.produitCount || 0;
    }
    
    // Vérifier si le cache est valide pour cette boutique
    if (this.lastBoutiqueId === this.selectedBoutiqueId && this.categoryCountCache.has(category.id)) {
      return this.categoryCountCache.get(category.id)!;
    }
    
    // Si les produits ne sont pas encore chargés, retourner 0 temporairement
    if (this.allProducts.length === 0) {
      console.log(`⏳ Produits pas encore chargés pour catégorie ${category.nom}`);
      return 0;
    }
    
    // Calculer en temps réel depuis allProducts pour la boutique sélectionnée
    const filteredProducts = this.allProducts.filter((p: ProduitDetailsResponseDTO) => {
      const matchesCategory = p.categorieId === category.id;
      
      // Vérifier si le produit appartient à la boutique sélectionnée
      let matchesBoutique = false;
      
      if (p.boutiqueId === this.selectedBoutiqueId) {
        matchesBoutique = true;
      } else if (p.boutiques && p.boutiques.length > 0) {
        matchesBoutique = p.boutiques.some(b => b.id === this.selectedBoutiqueId);
      }
      
      return matchesCategory && matchesBoutique;
    });
    
    const count = filteredProducts.length;
    
    // Mettre en cache le résultat
    this.categoryCountCache.set(category.id, count);
    
    console.log(`📊 Catégorie ${category.nom}: ${count} produits trouvés pour boutique ${this.selectedBoutiqueId} (sur ${category.produitCount || 0} au total)`);
    
    return count;
  }

  /** Retourne le tooltip pour expliquer le compteur affiché */
  getCategoryProductCountTooltip(category: any): string {
    if (!category) return '';
    
    const count = this.getCategoryProductCountForDisplay(category);
    
    if (!this.selectedBoutiqueId) {
      return `${count} produits au total dans cette catégorie`;
    }
    
    // Trouver le nom de la boutique sélectionnée
    const boutiqueName = this.getBoutiqueName(this.selectedBoutiqueId);
    return `${count} produits dans ${boutiqueName}`;
  }

  /** Retourne le nom de la boutique à partir de son ID */
  getBoutiqueName(boutiqueId: number): string {
    // Pour l'instant, retourner un nom simple
    // TODO: Implémenter la récupération du nom depuis le service
    return `Boutique ${boutiqueId}`;
  }

  /** Vider le cache des compteurs de catégories */
  private clearCategoryCountCache(): void {
    this.categoryCountCache.clear();
    console.log('🗑️ Cache des compteurs de catégories vidé');
  }

  /** Vérifier que tous les produits sont chargés pour toutes les catégories */
  private ensureAllCategoriesLoaded(): void {
    this.categories.forEach(categorie => {
      const categoryProducts = this.allProducts.filter(p => p.categorieId === categorie.id);
      if (categoryProducts.length === 0) {
        console.log(`📦 Chargement des produits pour catégorie ${categorie.nom}`);
        this.loadProduitsByCategorie(categorie.id!, 0, this.pageSize);
      }
    });
  }

  /** Éviter les doublons lors de l'ajout de produits */
  private addProductsWithoutDuplicates(newProducts: ProduitDetailsResponseDTO[]): void {
    // Créer un Set des IDs existants pour une vérification rapide
    const existingIds = new Set(this.allProducts.map(p => p.id));
    
    // Filtrer les nouveaux produits pour éviter les doublons
    const uniqueNewProducts = newProducts.filter(p => !existingIds.has(p.id));
    
    if (uniqueNewProducts.length > 0) {
      this.allProducts.push(...uniqueNewProducts);
      console.log(`✅ Ajout de ${uniqueNewProducts.length} nouveaux produits (${newProducts.length - uniqueNewProducts.length} doublons évités)`);
    } else {
      console.log(`⚠️ Tous les ${newProducts.length} produits étaient déjà présents`);
    }
  }

  /** Nettoyer les doublons existants dans allProducts */
  private removeDuplicateProducts(): void {
    const beforeCount = this.allProducts.length;
    const uniqueProducts = this.allProducts.filter((product, index, self) => 
      index === self.findIndex(p => p.id === product.id)
    );
    
    if (uniqueProducts.length !== beforeCount) {
      this.allProducts = uniqueProducts;
      console.log(`🧹 Nettoyage des doublons : ${beforeCount} → ${uniqueProducts.length} produits (${beforeCount - uniqueProducts.length} doublons supprimés)`);
    }
  }

  /** Recalculer les compteurs produits par catégorie pour la boutique sélectionnée */
  private recomputeCategoryCountsForBoutique() {
    const boutiqueId = this.selectedBoutiqueId;
    
    // Vider le cache car les données ont changé
    this.clearCategoryCountCache();
    
    (this.categories || []).forEach(cat => {
      const total = Array.isArray(cat.produits)
        ? cat.produits.filter((p: ProduitDetailsResponseDTO) =>
            !boutiqueId ? true : (p.boutiqueId !== null && p.boutiqueId === boutiqueId)
          ).length
        : 0;

      // écrire sur l'objet existant (type-safe après modification du modèle)
      cat.produitCountBoutique = total;
    });
  }

  calculatePayment(): void {
    // recalculer le total courant (au cas où remises ont changé)
    this.totalAmount = this.getTotalCart();

    const enteredValue = parseFloat(this.enteredAmount.replace(',', '.')) || 0;
    this.paymentAmount = enteredValue;
    this.isAmountEntered = enteredValue > 0;

    // différence signée : positive = monnaie à rendre, négative = restant à payer
    this.changeDue = +(this.paymentAmount - this.totalAmount);

    // si tu préfères toujours conserver valeur positive pour l'affichage, 
    // fais Math.abs ici, mais laisse aussi un flag pour savoir si c'est "monnaie" ou "restant"
  }


  selectPaymentMethod(method: string): void {
    this.selectedPaymentMethod = method;
  }

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

  // Mettre à jour addToCart pour gérer la remise
addToCart(produit: ProduitDetailsResponseDTO): void {
  if (this.getAvailableStock(produit) <= 0) return;

  // Désactiver la calculatrice pour éviter les conflits d'input
  this.calculator.setActive(false);
  
  // Gestion de la remise
  if (this.discountMode.active) {
    this.applyDiscount(produit);
    return;
  }

  // Ajout normal au panier
  const currentQty = this.cart.get(produit.id) || 0;
  this.cart.set(produit.id, currentQty + 1);
  this.saveActiveCart();
  this.selectedProduct = produit;
  this.isComposingNewQuantity = false;

  // this.quantityMode = true;
  // this.currentQuantityInput = (this.cart.get(produit.id) || 0).toString();
}

// --- mettre à jour calculateItemTotal pour tenir compte de la remise live ---
calculateItemTotal(item: { product: ProduitDetailsResponseDTO, quantity: number }): number {
  const basePrice = item.product.prixVente * item.quantity;
  const discount = this.productDiscounts.get(item.product.id) || 0;
  return basePrice - discount;
}

// Obtenir le sous-total (sans remise)
getSubtotal(): number {
  let total = 0;
  this.cart.forEach((quantity, productId) => {
    const product = this.allProducts.find(p => p.id === productId);
    if (product) {
      total += quantity * product.prixVente;
    }
  });
  return total;
}

// --- getTotalDiscount : somme des remises par ligne (inclut remise temporaire) ---
getTotalDiscount(): number {
  let total = 0;
  this.cart.forEach((quantity, productId) => {
    const product = this.allProducts.find(p => p.id === productId);
    if (product && quantity > 0) {
      total += this.computeDiscountForItem(product, quantity);
    }
  });
  return total;
}

  // Mettre à jour le total général
  getTotalCart(): number {
    const subtotal = this.getSubtotal();               // total sans remises
    const productDiscount = this.getTotalDiscount();   // somme des remises de lignes
    const baseAfterProductDiscounts = subtotal - productDiscount;

    let total = baseAfterProductDiscounts;

    if (this.globalDiscount.active && this.globalDiscount.value > 0) {
      if (this.globalDiscount.type === 'CFA') {
        total -= this.globalDiscount.value;
      } else {
        // appliquer le pourcentage SUR la base après remises produits
        total -= baseAfterProductDiscounts * (this.globalDiscount.value / 100);
      }
    }

    return Math.max(0, total);
  }


  // Supprimer aussi la remise quand on retire un produit
  removeProduct(productId: number) {
    this.cart.delete(productId);
    this.productDiscounts.delete(productId);
    this.saveActiveCart();
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
  
  handleKeyPress(key: string): void {
    // Désactiver la calculatrice dès qu'on utilise le clavier de vente
    this.calculator.setActive(false);

    if (this.inputMode === 'discount') {
      this.handleDiscountKeyPress(key); // Gestion remise
    } else {
      if (!this.selectedProduct) return; // Vérifiez si un produit est sélectionné

    // Réinitialiser le champ si c'est le premier chiffre d'une nouvelle saisie
    if (!this.isComposingNewQuantity) {
      this.currentQuantityInput = '';
      this.isComposingNewQuantity = true;
    }

    switch (key) {
      case 'backspace':
        this.currentQuantityInput = this.currentQuantityInput.slice(0, -1);
        break;
      case '+/-':
        // Inversion du signe
        break;
      default:
        if (this.currentQuantityInput.length < 5) {
          this.currentQuantityInput += key;
        }
    }

    this.applyQuantityToProduct();
    }
  }

  calculateDiscountedPrice(item: { product: ProduitDetailsResponseDTO, quantity: number }): number {
    const basePrice = item.product.prixVente * item.quantity;
    const discount = item.product.remise || 0;
    return basePrice - discount;
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
          codeGenerique: result.codeGenerique ?? '',
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
    return quantite <= 10;
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

  activateQuantityMode() {
    if (this.selectedProduct) {
      this.quantityMode = true;
      this.currentQuantityInput = (this.cart.get(this.selectedProduct.id) || 0).toString();
    }
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

// Sélection client particulier
selectClient(client: Clients) {
  this.selectedClient = client;
  this.selectedEntreprise = null; // annule toute entreprise sélectionnée
  console.log('Client sélectionné:', client);
  this.closeListClientPopup();
}

// Sélection entreprise cliente
selectEntreprise(entreprise: EntrepriseClient) {
  this.selectedEntreprise = entreprise;
  this.selectedClient = null; // annule tout client particulier
  console.log('Entreprise sélectionnée:', entreprise);
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
    // Si la calculatrice est active, on ne fait rien ici.
    // L'événement sera capturé par le listener de PosAccueilComponent.
    if (this.isCalculatorActive) {
      return;
    }

      // IMPORTANT: Vérifier si un scan est en cours AVANT de traiter les touches
    if (this.scanInProgress) {
      return; // Ignorer complètement si un scan est en cours
    }

    if (this.showPaymentPopup) {
      this.handlePaymentKeyPressPhysical(event);
    } else {
      this.handleKeyPressPhysical(event);
    }
  }

  handleKeyPressPhysical(event: KeyboardEvent) {

    // Indiquer au scanner qu'on est en train d'utiliser le clavier normalement
    this.scannerService.setUserTyping(true);

    // Réactiver le scanner après un court délai
    setTimeout(() => {
      this.scannerService.setUserTyping(false);
    }, 1000); // 1 seconde de délai
    
    // Ignorer si un scan matériel est en cours
    if (this.scanInProgress) return;

    // Ignorer si le focus est dans un input / textarea (user tape)
    const ae = document.activeElement as HTMLElement | null;
    if (ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA' || ae.isContentEditable)) {
      return;
    }

    if (this.disablePhysicalKeyboard || this.discountMode.active) return;
    // condition pour ignorer si le champ de remise est actif
    if (this.discountMode.active) return;
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
    this.scannerService.setUserTyping(true);
    setTimeout(() => {
      this.scannerService.setUserTyping(false);
    }, 1000);
    
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
  let clientNom: string | undefined = undefined;
  let clientNumero: string | undefined = undefined;
  let clientId: number | null = null;
  let entrepriseClientId: number | null = null;

  if (this.selectedClient) {
    clientNom = this.selectedClient.nomComplet || undefined;
    clientNumero = this.selectedClient.telephone || undefined;
    clientId = this.selectedClient.id;
  } else if (this.selectedEntreprise) {
    clientNom = this.selectedEntreprise.nom || undefined;
    clientNumero = this.selectedEntreprise.telephone || undefined;
    entrepriseClientId = this.selectedEntreprise.id ?? null;
  }
  // si aucun client sélectionné, clientId et entrepriseClientId restent null → client passant

  const request: VenteRequest = {
    boutiqueId: this.selectedBoutiqueId,
    produitsQuantites,
    description: 'Vente POS',
    clientNom: clientNom,
    clientNumero: clientNumero,
    clientId: clientId,
    entrepriseClientId: entrepriseClientId,
    modePaiement: modePaiementEnum ?? undefined,
  };

  // Ajouter les remises par produit
  const remises: { [id: string]: number } = {};
  this.getCartItems().forEach(item => {
    let discountAmount = this.productDiscounts.get(item.product.id) || 0;

    if ((!discountAmount || discountAmount === 0)
        && this.discountMode.active
        && this.discountMode.productId === item.product.id) {

      if (this.discountMode.type === 'CFA') {
        discountAmount = Math.max(0, this.discountMode.value || 0);
      } else {
        const pct = Math.max(0, this.discountMode.value || 0) / 100;
        discountAmount = Math.round(item.product.prixVente * item.quantity * pct);
      }
    }

    if (discountAmount > 0) {
      const totalSansRemise = item.product.prixVente * item.quantity;
      remises[item.product.id] = (discountAmount / totalSansRemise) * 100;
    }
  });
  if (Object.keys(remises).length > 0) {
    request.remises = remises;
  }

  // Ajouter la remise globale
  if (this.globalDiscount.active && this.globalDiscount.value > 0) {
    if (this.globalDiscount.type === 'CFA') {
      const subtotal = this.getSubtotal();
      if (subtotal > 0) {
        request.remiseGlobale = (this.globalDiscount.value / subtotal) * 100;
      }
    } else {
      request.remiseGlobale = this.globalDiscount.value;
    }
  }

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

 // Réinitialiser la sélection
  clearCustomerSelection(event: Event) {
  event.stopPropagation(); // éviter que le popup se réouvre
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

  // Basculer l'affichage du champ remise
  toggleDiscountInput() {
    this.showDiscountInput = !this.showDiscountInput;
    
    if (this.showDiscountInput) {
      this.discountButtonText = 'Annuler';
    } else {
      this.resetDiscount();
    }
  }

  // Réinitialiser l'état de remise
  resetDiscount() {
    this.showDiscountInput = false;
    this.discountValue = 0;
    this.discountType = 'CFA';
    this.discountButtonText = 'Remise';
    this.selectedProductForDiscount = null;
  }

  // Basculer le mode remise
  toggleDiscountMode() {
    this.discountMode.active = !this.discountMode.active;
    
    if (this.discountMode.active) {
      // Si aucun produit ciblé : essayer d'auto-sélectionner un produit logique
      if (!this.discountMode.productId) {
        // priorise le dernier produit ciblé si existant
        if (this.lastSelectedForDiscount) {
          this.discountMode.productId = this.lastSelectedForDiscount;
        } else {
          const items = this.getCartItems();
          // si il n'y a qu'une seule ligne dans le panier, l'utiliser
          if (items.length === 1) {
            this.discountMode.productId = items[0].product.id;
          }
        }
      }
    } else {
      this.resetDiscountMode();
    }

    // forcer recalcul affichage
    this.updateCommandeTotals();
  }

  // Changer le type de remise (CFA ou %)
  setDiscountType(type: 'CFA' | '%') {
    this.discountMode.type = type;
    this.updateCommandeTotals();
  }

  selectProductForDiscount(product: ProduitDetailsResponseDTO) {
    this.lastSelectedForDiscount = product.id;
    this.discountMode.productId = product.id;
    this.discountMode.active = true;

    const existing = this.productDiscounts.get(product.id) || 0;
    if (existing > 0) {
      const pct = Math.round((existing / product.prixVente) * 100);
      if (pct > 0 && pct <= 100) {
        this.discountMode.type = '%';
        this.discountMode.value = pct;
      } else {
        this.discountMode.type = 'CFA';
        this.discountMode.value = existing;
      }
    } else {
      this.discountMode.value = 0;
    }

    this.updateCommandeTotals();
  }

  // --- apply discount : corriger pour stocker la remise en CFA *totale par ligne* (et pas seulement par unité) ---
  applyDiscount(produit: ProduitDetailsResponseDTO) {
    // Autoriser la valeur 0 pour supprimer la remise
    if (this.discountMode.value < 0) return;

    const qty = this.getSelectedQuantity(produit.id) || 0;
    if (qty <= 0) return;

    let discountAmount = 0;

    if (this.discountMode.value > 0) {
      if (this.discountMode.type === '%') {
        // Calculer le montant de remise en pourcentage
        discountAmount = produit.prixVente * qty * (this.discountMode.value / 100);
      } else {
        // CFA : montant fixe
        discountAmount = this.discountMode.value;
      }
    }

    // Limiter la remise au montant maximum possible
    const maxDiscount = produit.prixVente * qty;
    if (discountAmount > maxDiscount) discountAmount = maxDiscount;

    // Stocker la remise (0 effacera la remise existante)
    if (discountAmount > 0) {
      this.productDiscounts.set(produit.id, discountAmount);
    } else {
      this.productDiscounts.delete(produit.id);
    }

    this.resetDiscountMode();
    this.updateCommandeTotals();
  }

  resetDiscountMode() {
    this.discountMode = {
      active: false,
      type: 'CFA',
      value: 0
    };
  }

  // Modifier une remise existante
  editDiscount(produit: ProduitDetailsResponseDTO) {
    const currentDiscount = this.productDiscounts.get(produit.id) || 0;
    
    // Convertir en pourcentage si nécessaire pour l'affichage
    let displayValue = currentDiscount;
    let type: 'CFA' | '%' = 'CFA';
    
    if (currentDiscount > 0) {
      const percentage = Math.round((currentDiscount / produit.prixVente) * 100);
      if (percentage > 0 && percentage <= 100) {
        displayValue = percentage;
        type = '%';
      }
    }
    
    this.discountMode = {
      active: true,
      type: type,
      value: displayValue,
      productId: produit.id
    };

    // mémoriser pour usages futurs (auto-select)
    this.lastSelectedForDiscount = produit.id;

    // mise à jour immédiate de l'UI
    this.updateCommandeTotals();
  }


  // --- getProductDiscount : retourner la remise actuelle affichée (live si en cours d'édition) ---
  getProductDiscount(productId: number): number {
    // si edition live pour ce product
    if (this.discountMode.active && this.discountMode.productId === productId) {
      const product = this.allProducts.find(p => p.id === productId);
      const qty = this.cart.get(productId) || 0;
      return this.computeDiscountForItem(product, qty);
    }
    return this.productDiscounts.get(productId) || 0;
  }

  // --- utilitaire : calcule la remise effective (temporaire ou persistée) pour un produit donné et une quantité ---
  private computeDiscountForItem(product: ProduitDetailsResponseDTO | undefined, quantity: number): number {
    if (!product || quantity <= 0) return 0;

    // Si on est en mode édition (live) pour ce produit, calculer la remise temporaire
    if (this.discountMode.active && this.discountMode.productId === product.id) {
      if (this.discountMode.type === 'CFA') {
        // valeur CFA interprétée comme montant total de remise pour la ligne
        const val = Math.max(0, this.discountMode.value || 0);
        return Math.min(val, product.prixVente * quantity);
      } else {
        // pourcentage appliqué au total de la ligne
        const pct = Math.max(0, this.discountMode.value || 0) / 100;
        const discount = Math.round(product.prixVente * quantity * pct);
        return Math.min(discount, product.prixVente * quantity);
      }
    }

    // sinon, prendre la remise persistée (productDiscounts contient montant en CFA pour la ligne)
    return this.productDiscounts.get(product.id) || 0;
  }

  // Méthodes pour la remise globale
  toggleGlobalDiscount() {
    this.globalDiscount.active = !this.globalDiscount.active;
    if (this.globalDiscount.active) {
      // Désactiver les remises par produit
      this.discountMode.active = false;
      this.productDiscounts.clear();
    }
    this.updateCommandeTotals();
  }

  setGlobalDiscountType(type: 'CFA' | '%') {
    this.globalDiscount.type = type;
    this.updateCommandeTotals();
  }

  onGlobalDiscountInputChange() {
    if (this.globalDiscount.value < 0) this.globalDiscount.value = 0;
    this.updateCommandeTotals();
    // si le popup de paiement est ouvert, recalculer la monnaie / restant
    if (this.showPaymentPopup) {
      this.calculatePayment();
    }
  }


  getGlobalDiscountAmount(): number {
    if (!this.globalDiscount.active || this.globalDiscount.value <= 0) {
      return 0;
    }

    if (this.globalDiscount.type === 'CFA') {
      return this.globalDiscount.value;
    } else {
      return this.getSubtotal() * (this.globalDiscount.value / 100);
    }
  }


  // Ouvrir le popup
  openListClientPopup(): void {
    this.showClientPopup = true;
    this.loadClients();
    this.loadEntreprisesForPopup(); // Charger les entreprises
  }

  isEditingDiscount(productId: number): boolean {
    return this.discountMode.active && this.discountMode.productId === productId;
  }

  saveDiscount(produit: ProduitDetailsResponseDTO) {
    this.applyDiscount(produit);
    this.updateCommandeTotals();
    
    // Réinitialiser le champ de remise
    this.currentDiscountInput = '';
    this.discountMode.value = 0;
  }

  formatDate(dateStr: string | null): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR');
  }

  isNearExpiry(dateStr: string | null): boolean {
    if (!dateStr) return false;
    const date = new Date(dateStr);
    const now = new Date();
    const oneMonthLater = new Date();
    oneMonthLater.setMonth(now.getMonth() + 1);
    return date <= oneMonthLater;
  }

  //Récupérer les produits filtrés selon la boutique sélectionnée
  getFilteredProductsByBoutique(): ProduitDetailsResponseDTO[] {
    if (!this.selectedBoutiqueId) return [];

    let products = this.allProducts.filter(p => p.boutiqueId === this.selectedBoutiqueId);

    if (this.selectedCategoryId !== null && this.selectedCategoryId !== undefined) {
      products = products.filter(p => p.categorieId === this.selectedCategoryId);
    }

    return products;
  }

  // Mettre à jour les gestionnaires d'événements de focus
  onInputFocus() {
    this.scannerService.setUserTyping(true);
  }

  onInputBlur() {
    // Si on était en mode édition de remise pour un produit spécifique
    if (this.inputMode === 'discount' && this.isEditingDiscount(this.discountMode.productId!)) {
      const productToDiscount = this.allProducts.find(p => p.id === this.discountMode.productId);
      if (productToDiscount) {
        // Appliquer la remise directement
        this.applyDiscount(productToDiscount);
        
        // Réinitialiser le champ de saisie et la valeur temporaire
        this.currentDiscountInput = '';
        this.discountMode.value = 0;
        
        // Mettre à jour les totaux
        this.updateCommandeTotals();
      }
    }

    // Attendre un peu avant de réactiver le scanner
    setTimeout(() => {
      this.scannerService.setUserTyping(false);
    }, 500);
  }

  // Dans PosVenteComponent
  notifyUserTyping() {
    this.scannerService.setUserTyping(true);
    
    // Réactiver le scanner après un court délai
    setTimeout(() => {
      this.scannerService.setUserTyping(false);
    }, 1000);
  }


}