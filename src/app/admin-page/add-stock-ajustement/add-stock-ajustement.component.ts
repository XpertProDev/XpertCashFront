

// et aussi la partie frontend 
 
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from '../SERVICES/produit.service';
import { SharedDataService } from '../SERVICES/shared-data.service';
import { UsersService } from '../SERVICES/users.service';
import { Produit } from '../MODELS/produit.model';
import { StockService } from '../SERVICES/stocks.service';
import { Stock } from '../MODELS/stock.model';
import { CustomNumberPipe } from '../MODELS/customNumberPipe';
import { map, Observable, startWith, Subject, takeUntil } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Transfert } from '../MODELS/tranfert-model';
import { TransfertService } from '../SERVICES/transfert-service';

@Component({
  selector: 'app-add-stock-ajustement',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomNumberPipe,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ],
  templateUrl: './add-stock-ajustement.component.html',
  styleUrl: './add-stock-ajustement.component.scss'
})
export class AddStockAjustementComponent {

  // Dans la classe du composant
  @ViewChild('productSelect') productSelect!: ElementRef;

  private destroy$ = new Subject<void>();

  ajusteForm!: FormGroup;
  ajusteRetirerForm!: FormGroup;
  errorMessage: string = '';
  errorMessageError: string = '';

  // Selectionner des boutique 
  selectedDestinationBoutique: any = null;

  // Nom boutique 
  boutiqueName: string = '';
  selectedAction: string = 'ajouter';

  // Variable pour contrôler l'affichage des stocks ajustés après un rafraîchissement
  stocksVisible: boolean = false;

  // Nouvelle variable pour stocker les ajustements locaux
  pendingAdjustments: any[] = [];

  // Pop up de message
  successMessage: string = '';

  // Description Global
  descriptionGlobal: string = '';
  codeFournisseurGlobal: string = '';
  boutiqueIdSelected: number | null = null; 

  controlBoutique = new FormControl('');
  controlBoutiqueTransfert = new FormControl('');
  streetsBoutique: { id: number, name: string, actif: boolean }[] = [];
  streetsBoutiqueTransfert: { id: number, name: string, actif: boolean }[] = [];
  // streetsBoutiqueTransfert: { id: number, name: string }[] = []; 
  filteredStreetsBoutique!: Observable<string[]>;
  filteredStreetsBoutiqueTransfert!: Observable<any[]>;

  showPopupBoutique = false;

  // Contructor
  constructor(
      private sharedDataService: SharedDataService,
      private produitService: ProduitService,
      private fb: FormBuilder,
      private router: Router,
      private usersService: UsersService,
      private stockService: StockService,
      private cdRef: ChangeDetectorRef,
      private transfertService: TransfertService,
  ) {}

  goToStock() {
    this.router.navigate(['/stocks']);
  }

  ngOnInit(): void  {
    this.getBoutiqueName();
    this.getPartageInfoUser();
    // Convertir explicitement null en undefined avec l'opérateur de coalescence nulle
    // this.loadProduits(this.usersService.getUserBoutiqueId() ?? undefined);
    this.getAjusteForm();
    this.getControleBoutique();
  }

  getControleBoutique() : void {
    this.controlBoutique.valueChanges
    .pipe(takeUntil(this.destroy$))
    .subscribe(value => {
      if (!value) {
        this.handleBoutiqueDeselection();
      }
    });
  }

  // Nouvelle méthode pour gérer la désélection
  private handleBoutiqueDeselection(): void {
    this.boutiqueIdSelected = null;
    this.tasks = [];
    this.pendingAdjustments = [];
    this.selectedProduct = null;
    this.cdRef.detectChanges();
  }

  // Ajouter ngOnDestroy
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  checkBoutiqueSelection(): void {
    if (!this.controlBoutique.value) {
      this.handleBoutiqueDeselection();
    }
  }

  getBoutiqueName(): void {
    this.usersService.getUserInfo().subscribe(
      (userInfo) => {
        if (userInfo && userInfo.boutiques) {
          // Modification ici : ajout de la propriété actif
          this.streetsBoutique = userInfo.boutiques
            .filter((boutique: any) => boutique.actif) // Filtre les boutiques actives
            .map((boutique: any) => ({
              id: boutique.id,
              name: boutique.nomBoutique,
              actif: boutique.actif // Ajout de la propriété manquante
            }));

          // Ancien code gardé en commentaire :
          // this.streetsBoutique = userInfo.boutiques.map((boutique: any) => ({
          //   id: boutique.id,
          //   name: boutique.nomBoutique
          // }));

          this.streetsBoutiqueTransfert = [...this.streetsBoutique];
          this.getFilteredStreetsBoutique();
          this.getFilteredStreetsBoutiqueTransfert();
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des informations utilisateur', error);
      }
    );
  }

  getPartageInfoUser() {
     // Partage de donner de user
     this.sharedDataService.boutiqueName$.subscribe(name => {
      console.log("AddProduitComponent - Nom boutique récupéré :", name);
      this.boutiqueName = name;
    });
  }

  // select de produit
  selectedProduct: Produit | null = null;
  tasks: Produit[] = [];

  // Charge les produits depuis le backend et effectue le mapping pour l'affichage
  loadProduits(boutiqueId: number): void {
    if (!boutiqueId) {
      this.tasks = []; // Réinitialiser la liste si aucun ID
      return;
    }
  
    this.produitService.getProduitsEntreprise(boutiqueId).subscribe({
      next: (produits: Produit[]) => {
        this.tasks = produits
          .filter(prod => prod.enStock)
          .map(prod => ({ ...prod })) // Simplifié le mapping
          .sort((a, b) => {
            const parseDate = (dateStr: string | undefined): number => {
              try {
                return dateStr ? new Date(dateStr).getTime() : 0;
              } catch {
                return 0;
              }
            };
          
            return parseDate(b.createdAt) - parseDate(a.createdAt);
          });
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des produits", err);
        this.tasks = [];
      }
    });
  } 
  
  // quantiteAjoute: number = 0;
  quantiteAjoute: number | null = null; 
  quantiteRetirer: number | null = null; 
  descriptionAjout: string = '';
  descriptionRetire: string = '';
  codeFournisseur: string = '';
  
  // Ajoutez une variable pour contrôler la visibilité
  // isProductAdded: boolean = false;

  // Méthode pour ajouter le stock (ne modifie pas showAdjustedStocks)

  get f() {
    return this.ajusteForm.controls;
  }
  get r() { return this.ajusteRetirerForm.controls; }



  get stockApres(): number | string {
    if (!this.selectedProduct) return '';
    const stockActuel = Number(this.selectedProduct.quantite);
    if (this.selectedAction === 'ajouter' && this.quantiteAjoute) {
      return stockActuel + Number(this.quantiteAjoute);
    } else if (this.selectedAction === 'reduire' && this.quantiteRetirer) {
      return stockActuel - Number(this.quantiteRetirer);
    } else if (this.selectedAction === 'transfert' && this.quantiteRetirer) {
      return stockActuel - this.quantiteRetirer;
    }
    return '';
  }

  // Liste filtrée des stocks ajustés
  adjustedStocks: Stock[] = [];

  // Méthode pour charger tous les stocks et ne conserver que ceux ajustés
  loadAdjustedStocks(): void {
    // Récupérer le token (ou tout autre mécanisme d'authentification que vous utilisez)
    const token = this.usersService.getToken(); 
    if (!token) {
      console.error('Token introuvable');
      return; // Vous pouvez également rediriger l'utilisateur ou afficher un message d'erreur
    }
    this.stockService.getAllStocks(token).subscribe({
      next: (stocks: Stock[]) => {
        // Filtrer pour garder uniquement les stocks ayant une quantité ajoutée ou retirée supérieure à 0
        this.adjustedStocks = stocks.filter(stock =>
          (stock.quantiteAjoute && stock.quantiteAjoute > 0) ||
          (stock.quantiteRetirer && stock.quantiteRetirer > 0)
        );
      },
      error: (error) => {
        console.error("Erreur lors du chargement des stocks ajustés", error);
      }
    });
  }

  // qui contient les produits chargés pour retrouver le nom.
  getProductName(stock: Stock): string {
    if (stock.produitId) {
      console.log('ProduitId dans stock:', stock.produitId);
      const produit = this.tasks.find(prod => prod.id === stock.produitId);
      if (produit) {
        console.log('Produit trouvé:', produit);
        return produit.nom;
        // return `${produit.nom} - ${produit.prixVente}`;
      } else {
        console.warn('Produit non trouvé dans tasks pour l\'id:', stock.produitId);
        return 'Produit inconnu';
      }
    }
    console.warn('Aucun produitId présent dans le stock:', stock);
    return 'Produit inconnu';
  }

  // qui contient les produits chargés pour retrouver le nom.
  getProductPrixVente(stock: Stock): string {
    if (stock.produitId) {
      console.log('ProduitId dans stock:', stock.produitId);
      const produit = this.tasks.find(prod => prod.id === stock.produitId);
      if (produit) {
        console.log('Produit trouvé:', produit);
        // return produit.nom && produit.prixVente;
        return `${produit.prixVente}`;
      } else {
        console.warn('Produit non trouvé dans tasks pour l\'id:', stock.produitId);
        return 'Produit inconnu';
      }
    }
    console.warn('Aucun produitId présent dans le stock:', stock);
    return 'Produit inconnu';
  }

  // Vérifier si les stocks doivent être visibles
  checkStocksVisibility(): void {
    const stocksVisibility = localStorage.getItem('stocksVisibility');
    if (stocksVisibility === 'true') {
      this.stocksVisible = true;
    } else {
      this.stocksVisible = false;
    }
  }

  getAjusteForm() {
    this.ajusteForm = this.fb.group({
      descriptionGlobal: ['', [Validators.minLength(2), Validators.maxLength(100)]],
      codeFournisseur: ['', [Validators.minLength(4), Validators.maxLength(100)]],

    });
  }

  // getAjusteRetirerForm() {
  //   this.ajusteRetirerForm = this.fb.group({
  //     descriptionRetire: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]]
  //   })
  // }

  // Méthode pour ajouter un ajustement à la liste
  addToPendingAdjustments() {
    if (this.errorMessage) return;
  
    if (!this.selectedProduct) {
      this.errorMessage = 'Veuillez sélectionner un produit';
      return;
    }
  
    if (!this.quantiteAjoute || this.quantiteAjoute <= 0) {
      this.errorMessage = 'Quantité invalide';
      return;
    }
  
    // Ajout dans la liste avec descriptionAjout incluse
    this.pendingAdjustments = [
      ...this.pendingAdjustments,
      {
        produitId: this.selectedProduct.id,
        produitNom: this.selectedProduct.nom,
        quantiteAjoute: this.quantiteAjoute,
        stockActuel: this.selectedProduct.quantite,
        stockApres: this.stockApres,
        prixVente: this.selectedProduct.prixVente,
        descriptionAjout: this.descriptionAjout ,
        codeFournisseur: this.codeFournisseur
      }
    ];

    // Réinitialisation
    this.selectedProduct = null;
    this.quantiteAjoute = null;
    this.descriptionAjout = ''; // Réinitialiser le champ de description si besoin
    this.codeFournisseur
  }

  // Méthode pour ajouter un ajustement à la liste
  reduireToPendingAdjustments() {
    if (this.errorMessage) return;
  
    if (!this.selectedProduct) {
      this.errorMessage = 'Veuillez sélectionner un produit';
      return;
    }
  
    if (!this.quantiteRetirer || this.quantiteRetirer <= 0) {
      this.errorMessage = 'Quantité invalide';
      return;
    }
  
    // Ajout dans la liste avec descriptionAjout incluse
    this.pendingAdjustments = [
      ...this.pendingAdjustments,
      {
        produitId: this.selectedProduct.id,
        produitNom: this.selectedProduct.nom,
        quantiteRetirer: this.quantiteRetirer,
        stockActuel: this.selectedProduct.quantite,
        stockApres: this.stockApres,
        prixVente: this.selectedProduct.prixVente,
        descriptionretire: this.descriptionRetire // Ajout de la description ici
      }
    ];
  
    // Réinitialisation
    this.selectedProduct = null;
    this.quantiteRetirer = null;
    this.descriptionRetire = ''; // Réinitialiser le champ de description si besoin
  } 

  // Méthode pour charger depuis localStorage
  loadPendingAdjustments() {
    const saved = localStorage.getItem('pendingAdjustments');
    this.pendingAdjustments = saved ? JSON.parse(saved) : [];
  }

  checkExistingProduct() {
    if (!this.selectedProduct) {
      this.errorMessage = '';
      return;
    }
  
    const exists = this.pendingAdjustments.some(
      item => item.produitNom === this.selectedProduct!.nom
    );
  
    if (exists) {
      this.errorMessage = `${this.selectedProduct.nom} est déjà dans la liste !`;
      this.selectedProduct = null; // Désélectionne le produit
    } else {
      this.errorMessage = '';
    }
  }

  clearSelections() {
    this.errorMessage = '';
    
    // Réinitialisation avec nouvel objet
    this.selectedProduct = null;
    this.quantiteAjoute = null;
  
    // Force la mise à jour du cycle de changement
    setTimeout(() => {
      this.cdRef.detectChanges();
      this.cdRef.markForCheck();
    });

    // Réinitialisation manuelle du DOM
    if (this.productSelect) {
      this.productSelect.nativeElement.selectedIndex = 0;
    }
  }

  compareProducts(a: Produit | null, b: Produit | null): boolean {
    // Cas où les deux valeurs sont null
    if (a === null && b === null) return true;
    
    // Cas où l'une des valeurs est null
    if (!a || !b) return false;
    
    // Comparaison normale par ID
    return a.id === b.id;
  }

  /* Méthode pour ajouter du stock en regroupant les ajustements */
  AjouterDesQuan(): void {
    this.errorMessage = '';
    this.successMessage = '';
    const adjustmentsToProcess = [...this.pendingAdjustments];
  
    // Ajouter le produit sélectionné actuel s'il est valide
    if (this.selectedProduct && this.quantiteAjoute && this.quantiteAjoute > 0) {
      const existingIndex = adjustmentsToProcess.findIndex(
        item => item.produitId === this.selectedProduct!.id
      );
  
      if (existingIndex === -1) {
        adjustmentsToProcess.push({
          produitId: this.selectedProduct.id,
          produitNom: this.selectedProduct.nom,
          quantiteAjoute: this.quantiteAjoute,
          stockActuel: this.selectedProduct.quantite,
          stockApres: this.selectedProduct.quantite + this.quantiteAjoute,
          prixVente: this.selectedProduct.prixVente
          
        });
      }
    }
  
    if (adjustmentsToProcess.length > 0) {
      const produitsQuantites = adjustmentsToProcess.reduce((acc, adjustment) => {
        acc[adjustment.produitId] = adjustment.quantiteAjoute;
        return acc;
      }, {} as { [key: string]: number });
  
      const descriptionGlobal = this.ajusteForm.value.descriptionGlobal || '';
      const codeFournisseur = this.ajusteForm.value.codeFournisseur || '';

  
      this.stockService.ajouterStock({
        produitsQuantites: produitsQuantites,
        codeFournisseur: codeFournisseur,

      }).subscribe({
        next: (response) => {
          // Mise à jour locale
          adjustmentsToProcess.forEach(adjustment => {
            const product = this.tasks.find(p => p.id === adjustment.produitId);
            if (product) product.quantite = adjustment.stockApres;
          });
  
          this.clearForm();
          this.showSuccessModal();
        },
        error: (error) => {
          console.error('Erreur détaillée:', error);
          this.showErrorModal(this.getErrorMessage(error));
        }
      });
    } else {
      this.showErrorModal('Veuillez sélectionner au moins un produit avec une quantité valide');
    }
  }

  /* Méthode pour retirer du stock en regroupant les ajustements */
  RetirerDesQuan(): void {
    this.errorMessage = '';
    this.successMessage = '';
    const adjustmentsToProcess = [...this.pendingAdjustments];
  
    // Ajouter le produit sélectionné actuel s'il est valide
    if (this.selectedProduct && this.quantiteRetirer && this.quantiteRetirer > 0) {
      const existingIndex = adjustmentsToProcess.findIndex(
        item => item.produitId === this.selectedProduct!.id
      );
  
      if (existingIndex === -1) {
        // Vérifier que le stock ne devient pas négatif
        const newStock = this.selectedProduct.quantite - this.quantiteRetirer;
        
        if (newStock < 0) {
          this.showErrorModal('Le stock ne peut pas devenir négatif');
          return;
        }
  
        adjustmentsToProcess.push({
          produitId: this.selectedProduct.id,
          produitNom: this.selectedProduct.nom,
          quantiteRetirer: this.quantiteRetirer,
          stockActuel: this.selectedProduct.quantite,
          stockApres: newStock,
          prixVente: this.selectedProduct.prixVente
        });
      }
    }
  
    if (adjustmentsToProcess.length > 0) {
      const produitsQuantites = adjustmentsToProcess.reduce((acc, adjustment) => {
        acc[adjustment.produitId] = adjustment.quantiteRetirer;
        return acc;
      }, {} as { [key: string]: number });
  
      const descriptionGlobal = this.ajusteForm.value.descriptionGlobal || '';
  
      this.stockService.retirerStock({
        produitsQuantites: produitsQuantites,
        description: descriptionGlobal
      }).subscribe({
        next: (response) => {
          // Mise à jour locale
          adjustmentsToProcess.forEach(adjustment => {
            const product = this.tasks.find(p => p.id === adjustment.produitId);
            if (product) product.quantite = adjustment.stockApres;
          });
  
          this.clearForm();
          this.showSuccessModal();
        },
        error: (error) => {
          console.error('Erreur détaillée:', error);
          this.showErrorModal(this.getErrorMessage(error));
        }
      });
    } else {
      this.showErrorModal('Veuillez sélectionner au moins un produit avec une quantité valide');
    }
  }

  private clearForm() {
    this.pendingAdjustments = [];
    this.selectedProduct = null;
    this.quantiteAjoute = null;
    this.quantiteRetirer = null;
    this.ajusteForm.reset();
  }
  
  private getErrorMessage(error: any): string {
    if (error.status === 400) {
      return error.error.message || 'Quantité invalide ou stock insuffisant'; 
    }
    if (error.status === 404) {
      return 'Produit non trouvé';
    }
    return 'Erreur technique - Veuillez réessayer plus tard';
  }

  // private validateCurrentSelection(): boolean {
  //   if (!this.selectedProduct) return false;
  
  //   if (this.selectedAction === 'ajouter') {
  //     return this.quantiteAjoute !== null 
  //       && this.quantiteAjoute > 0 
  //       && this.selectedProduct.quantite + this.quantiteAjoute >= 0;
  //   }
  
  //   if (this.selectedAction === 'reduire') {
  //     return this.quantiteRetirer !== null 
  //       && this.quantiteRetirer > 0 
  //       && this.selectedProduct.quantite - this.quantiteRetirer >= 0;
  //   }
  
  //   return false;
  // }
  
  // Méthode pour afficher une pop-up de succès
  showSuccessModal(): void {
    this.successMessage = 'Les produits ont été ajustés avec réussite ! ';
    setTimeout(() => {
      this.successMessage = '';
    }, 5000);
  }
  
  // Méthode pour afficher une pop-up d'erreur
  showErrorModal(message: string): void {
    this.errorMessageError = message;
    setTimeout(() => {
      this.errorMessageError = '';
    }, 3000);
  }
  
  removePendingAdjustment(index: number): void {
    // Supprime l'élément de la liste à l'index fourni
    this.pendingAdjustments.splice(index, 1);
  }  
  
  // Modifiez onBoutiqueSelected
  onBoutiqueSelected(event: any): void {
    const selectedBoutique = this.streetsBoutique.find(b => b.name === event.option.value);
    
    if (selectedBoutique) {
      this.boutiqueIdSelected = selectedBoutique.id;
      this.loadProduits(selectedBoutique.id);
      this.pendingAdjustments = []; // Réinitialiser les ajustements
      this.selectedProduct = null; // Réinitialiser la sélection
    }
  }

  getFilteredStreetsBoutique() {
    this.filteredStreetsBoutique = this.controlBoutique.valueChanges.pipe(
      startWith(''),
      map(value => this._filterBoutique(value || ''))
    );
  }

  /*
  private _filterBoutique(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streetsBoutique.map(b => b.name).filter(street => this._normalizeValue(street).includes(filterValue));
  }
  */

  private _filterBoutique(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streetsBoutique
      .filter(b => b.actif) // Ne garder que les boutiques actives
      .map(b => b.name)
      .filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  
  onFocusBoutiqueInput(): void {
    this.controlBoutique.setValue(''); 
  }

  displayFnBoutique(boutique?: string): string {
    return boutique ? boutique : '';
  }

  // OnBoutiqueSelected Transfert
  onBoutiqueSelectedTransfert(event: any): void {
    this.selectedDestinationBoutique = event.option.value;
  }

  getFilteredStreetsBoutiqueTransfert() {
    this.filteredStreetsBoutiqueTransfert = this.controlBoutiqueTransfert.valueChanges.pipe(
      startWith(''),
      map(value => this._filterBoutiqueTransfert(value || ''))
    );
  }

  private _filterBoutiqueTransfert(value: string): any[] {
    if (typeof value === 'string') {
      const filterValue = this._normalizeValueTransfert(value);
      return this.streetsBoutiqueTransfert
        .filter(b => 
          this._normalizeValueTransfert(b.name).includes(filterValue) &&
          b.id !== this.boutiqueIdSelected // <-- Exclure la boutique source
        );
    }
    return this.streetsBoutiqueTransfert;
  }

  // private _filterBoutiqueTransfert(value: string): any[] {
  //   if (typeof value === 'string') {
  //     const filterValue = this._normalizeValueTransfert(value);
  //     return this.streetsBoutiqueTransfert.filter(b => 
  //       this._normalizeValueTransfert(b.name).includes(filterValue)
  //     );
  //   }
  //   return this.streetsBoutiqueTransfert;
  // }

  private _normalizeValueTransfert(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  
  onFocusBoutiqueInputTransfert(): void {
    this.controlBoutiqueTransfert.setValue(''); 
  }

  displayFnBoutiqueTransfert(boutique?: any): string {
    return boutique?.name || '';
  }

  // Nouvelle méthode pour valider un transfert unique

  validateSingleTransfer(): any {
    if (!this.boutiqueIdSelected || !this.selectedDestinationBoutique?.id) {
        return { valid: false, error: 'Veuillez sélectionner les boutiques' };
    }

    // Ajout de la vérification des boutiques identiques
    if (this.boutiqueIdSelected === this.selectedDestinationBoutique.id) {
      return { valid: false, error: 'La source et la destination doivent être différentes' };
    }
    
    if (!this.selectedProduct) {
        return { valid: false, error: 'Veuillez sélectionner un produit' };
    }

    const quantite = this.quantiteRetirer || 0;
    if (quantite <= 0 || quantite > this.selectedProduct.quantite) {
        return { valid: false, error: 'Quantité invalide' };
    }

    return { 
        valid: true,
        transfert: {
            produitId: this.selectedProduct.id,
            quantite: quantite,
            boutiqueSourceId: this.boutiqueIdSelected,
            boutiqueDestinationId: this.selectedDestinationBoutique.id
        }
    };
  }

  // Méthode de transfert principale
  async transfererProduits() {
      let transfersToProcess = [...this.pendingAdjustments];

      // Si liste vide, vérifier le transfert unique
      if (transfersToProcess.length === 0) {
          const validation = this.validateSingleTransfer();
          if (!validation.valid) {
              this.errorMessage = validation.error;
              return;
          }
          transfersToProcess = [validation.transfert];
      }

      try {
          const token = this.usersService.getToken();
          if (!token) throw new Error('Non authentifié');

          // Envoi des transferts
          for (const transfert of transfersToProcess) {
              await this.transfertService.effectuerTransfert(transfert).toPromise();
              
              // Mise à jour locale
              const product = this.tasks.find(p => p.id === transfert.produitId);
              if (product) product.quantite -= transfert.quantite;
          }

          // Réinitialisation
          this.pendingAdjustments = [];
          this.selectedProduct = null;
          this.quantiteRetirer = null;
          this.controlBoutiqueTransfert.reset();

          this.successMessage = 'Transfert(s) effectué(s) avec succès';
          setTimeout(() => this.successMessage = '', 3000);

      } catch (error: any) {
          console.error('Erreur:', error);
          this.errorMessage = error.error?.message || 'Erreur lors du transfert';
          setTimeout(() => this.errorMessage = '', 5000);
      }
  }

  transfertToPendingAdjustments() {
    const validation = this.validateSingleTransfer();
    if (!validation.valid) {
        this.errorMessage = validation.error;
        return;
    }

    // Vérification doublon
    const exists = this.pendingAdjustments.some(t => 
        t.produitId === validation.transfert.produitId &&
        t.boutiqueDestinationId === validation.transfert.boutiqueDestinationId
    );

    if (exists) {
        this.errorMessage = 'Ce transfert est déjà dans la liste';
        return;
    }

    // Ajout avec les informations complètes
    const newStock = this.selectedProduct!.quantite - validation.transfert.quantite;
    this.pendingAdjustments.push({
    ...validation.transfert,
    produitNom: this.selectedProduct!.nom,
    stockActuel: this.selectedProduct!.quantite,
    stockApres: newStock, // Calcul dynamique
    boutiqueDestinationName: this.selectedDestinationBoutique.name
});

    // Réinitialisation des champs (sans vider la liste)
    this.selectedProduct = null;
    this.quantiteRetirer = null;
    this.selectedDestinationBoutique = null;
    this.controlBoutiqueTransfert.reset();
    this.errorMessage = '';
}
  
}
