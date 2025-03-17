import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from '../SERVICES/produit.service';
import { SharedDataService } from '../SERVICES/shared-data.service';
import { UsersService } from '../SERVICES/users.service';
import { Produit } from '../MODELS/produit.model';
import { StockService } from '../SERVICES/stocks.service';
import { Stock } from '../MODELS/stock.model';

@Component({
  selector: 'app-add-stock-ajustement',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-stock-ajustement.component.html',
  styleUrl: './add-stock-ajustement.component.scss'
})
export class AddStockAjustementComponent {

  // Dans la classe du composant
  @ViewChild('productSelect') productSelect!: ElementRef;

  ajusteForm!: FormGroup;
  ajusteRetirerForm!: FormGroup;
  errorMessage: string = '';
  errorMessageError: string = '';

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


  // Contructor
  constructor(
      private sharedDataService: SharedDataService,
      private produitService: ProduitService,
      private fb: FormBuilder,
      private router: Router,
      private usersService: UsersService,
      private stockService: StockService,
      private cdRef: ChangeDetectorRef,
  ) {}

  goToStock() {
    this.router.navigate(['/stocks']);
  }

  ngOnInit(): void  {
    this.getBoutiqueName();
    this.getPartageInfoUser();
    this.loadProduits();
    // this.checkStocksVisibility();
    this.getAjusteForm();
    // this.getAjusteRetirerForm();
    // this.loadPendingAdjustments();
  }

  getBoutiqueName() {
    this.usersService.getUserInfo().subscribe(
      (userInfo) => {
        console.log(userInfo);
        if (userInfo && userInfo.boutiques && userInfo.boutiques.length > 0) {
          console.log(userInfo.boutiques[0]);
  
          this.boutiqueName = userInfo.boutiques[0].nomBoutique || 'Nom de la boutique non trouvé';
        } else {
          console.error('Aucune boutique trouvée pour cet utilisateur');
          this.boutiqueName = 'Aucune boutique';
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
  loadProduits(): void {
    const boutiqueId = this.usersService.getUserBoutiqueId();
    if (!boutiqueId) {
      console.error('L\'ID de la boutique est manquant');
      return;
    }
    this.produitService.getProduitsEntreprise(boutiqueId).subscribe({
      next: (produits: Produit[]) => {
        // Filtrer les produits dont la quantité est supérieure à 0
        this.tasks = produits
          .filter(prod => prod.enStock) 
          .map(prod => {
            const fullImageUrl = (prod.photo && prod.photo !== 'null' && prod.photo !== 'undefined')
              ? `http://localhost:8080${prod.photo}`
              : '';
    
            let createdAtDate: Date | null = null;
            if (prod.createdAt) {
              const cleanedDateStr = prod.createdAt.replace(' à ', ' ');
              const dateParts = cleanedDateStr.match(/^(\d{2})-(\d{2})-(\d{4}) (\d{2}):(\d{2})$/);
    
              if (dateParts) {
                const [, day, month, year, hours, minutes] = dateParts.map(Number);
                createdAtDate = new Date(year, month - 1, day, hours, minutes);
              } else {
                console.warn("Format de date invalide pour:", prod.createdAt);
              }
            }
            return {
              id: prod.id,
              codeGenerique: prod.codeGenerique || '',
              codeBare: prod.codeBare || 'Non numéro code barre',
              nom: prod.nom || 'Nom inconnu',
              description: prod.description || 'Non description',
              prixVente: prod.prixVente || 0,
              prixAchat: prod.prixAchat || 0,
              quantite: prod.quantite || 0,
              seuilAlert: prod.seuilAlert || 0,
              enStock: prod.enStock || false,
              photo: fullImageUrl,
              nomCategorie: prod.nomCategorie || 'Non catégorie',
              nomUnite: prod.nomUnite || 'Non unité',
              createdAt: prod.createdAt || new Date().toISOString(),
              categorieId: prod.categorieId,
              uniteId: prod.uniteId 
            };
          })
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des produits", err);
      }
    });
  }  

  // quantiteAjoute: number = 0;
  quantiteAjoute: number | null = null; 
  quantiteRetirer: number | null = null; 
  descriptionAjout: string = '';
  descriptionRetire: string = '';
  
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
        descriptionAjout: this.descriptionAjout // Ajout de la description ici
      }
    ];
  
    // Réinitialisation
    this.selectedProduct = null;
    this.quantiteAjoute = null;
    this.descriptionAjout = ''; // Réinitialiser le champ de description si besoin
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

  /**
   * Méthode pour ajouter du stock en regroupant les ajustements
   */
  AjouterDesQuan(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.pendingAdjustments.length > 0) {
      // Regrouper les quantités par produit
      const produitsQuantites: { [key: string]: number } = {};
      this.pendingAdjustments.forEach(adjustment => {
        produitsQuantites[adjustment.produitId] = Number(adjustment.quantiteAjoute);
      });

      // Récupérer la description depuis le formulaire Reactive
      const descriptionGlobal = this.ajusteForm.value.descriptionGlobal || '';

      const stockPayload = {
        produitsQuantites: produitsQuantites,
        description: descriptionGlobal
      };

      this.stockService.ajouterStock(stockPayload).subscribe({
        next: (response) => {
          // Mise à jour locale pour chaque produit concerné
          this.pendingAdjustments.forEach(adjustment => {
            const product = this.tasks.find(p => p.id === adjustment.produitId);
            if (product) {
              product.quantite = adjustment.stockApres;
            }
          });

          //Vider categorieGlobal
          this.ajusteForm.patchValue({ descriptionGlobal: '' });
        
          this.showSuccessModal();
          this.pendingAdjustments = [];
          this.stocksVisible = true;
        },
        error: (error) => {
          console.error('Erreur lors de l’ajustement global', error);
          this.showErrorModal('Erreur lors de l’ajustement global.');
        }
      });
    } else {
      this.showErrorModal("Aucun produit en attente d’être ajusté.");
    }
  }

  /**
   * Méthode pour retirer du stock en regroupant les ajustements
   */
  RetirerDesQuan(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.pendingAdjustments.length > 0) {
      // Regrouper les quantités à retirer par produit
      const produitsQuantites: { [key: string]: number } = {};
      this.pendingAdjustments.forEach(adjustment => {
        produitsQuantites[adjustment.produitId] = Number(adjustment.quantiteRetirer);
      });

      // Récupérer la description depuis le formulaire Reactive
      const descriptionGlobal = this.ajusteForm.value.descriptionGlobal || '';

      const stockPayload = {
        produitsQuantites: produitsQuantites,
        description: descriptionGlobal
      };

      this.stockService.retirerStock(stockPayload).subscribe({
        next: (response) => {
          // Mise à jour locale pour chaque produit concerné
          this.pendingAdjustments.forEach(adjustment => {
            const product = this.tasks.find(p => p.id === adjustment.produitId);
            if (product) {
              product.quantite = adjustment.stockApres;
            }
          });

          // Vider categorieGlobal
          this.ajusteForm.patchValue({ descriptionGlobal: '' });

          this.showSuccessModal();
          this.pendingAdjustments = [];
          this.stocksVisible = true;
        },
        error: (error) => {
          console.error('Erreur lors de la réduction globale', error);
          this.showErrorModal('Erreur lors de la réduction globale.');
        }
      });
    } else {
      this.showErrorModal("Aucun produit en attente d’être réduit.");
    }
  }
  
  // Méthode pour afficher une pop-up de succès
  showSuccessModal(): void {
    this.successMessage = '✅ Les produits ont été ajustés avec réussite ! ';
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
  

  
}
