import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
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
  ],
  templateUrl: './add-stock-ajustement.component.html',
  styleUrl: './add-stock-ajustement.component.scss'
})
export class AddStockAjustementComponent {

  // Nom boutique 
  boutiqueName: string = '';
  selectedAction: string = 'ajouter';

  // Variable pour contrôler l'affichage des stocks ajustés après un rafraîchissement
  stocksVisible: boolean = false;


  // Contructor
  constructor(
      private sharedDataService: SharedDataService,
      private produitService: ProduitService,
      private fb: FormBuilder,
      private router: Router,
      private usersService: UsersService,
      private stockService: StockService
  ) {}

  ngOnInit(): void  {
    this.getBoutiqueName();
    this.getPartageInfoUser();
    this.loadProduits();
    // Charger les stocks ajustés dès le chargement du composant
    this.loadAdjustedStocks(); 
    // Vérifier si la liste doit être visible après un rafraîchissement
    this.checkStocksVisibility();
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
  AjouterDesQuan(): void {
    if (this.selectedProduct && this.quantiteAjoute && this.quantiteAjoute > 0) {
      const product = this.selectedProduct;
      const stock = {
        quantiteAjoute: this.quantiteAjoute,
        descriptionAjout: this.descriptionAjout
      };
  
      this.stockService.ajouterStock(product.id, stock).subscribe({
        next: (response) => {
          console.log('Stock ajouté avec succès', response);
          // Mise à jour locale de la quantité du produit
          product.quantite = Number(product.quantite) + Number(this.quantiteAjoute);
          // Recharge la liste des stocks ajustés
          this.loadAdjustedStocks();
          // Réinitialise les champs de saisie
          this.quantiteAjoute = null;
          this.descriptionAjout = '';
          this.selectedProduct = null;
          // Affiche la liste dans la session en cours
          this.stocksVisible = true;

          // this.isProductAdded = true;
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout du stock', error);
        }
      });
    } else {
      console.error('Veuillez sélectionner un produit et entrer une quantité valide.');
    }
  }

  RetirerDesQuan(): void {
    if (this.selectedProduct && this.quantiteRetirer && this.quantiteRetirer > 0) {
      const product = this.selectedProduct;
      const stock = {
        quantiteRetirer: this.quantiteRetirer,
        descriptionRetire: this.descriptionRetire
      };
  
      this.stockService.retirerStock(product.id, stock).subscribe({
        next: (response) => {
          console.log('Stock retirer avec succès', response);
          // Mise à jour locale de la quantité du produit
          product.quantite = Number(product.quantite) - Number(this.quantiteRetirer);
          // Recharge la liste des stocks ajustés
          this.loadAdjustedStocks();
          // Réinitialise les champs de saisie
          this.quantiteRetirer = null;
          this.descriptionRetire = '';
          this.selectedProduct = null;
          // Affiche la liste dans la session en cours
          this.stocksVisible = true;

          // this.isProductAdded = true;
        },
        error: (error) => {
          console.error('Erreur lors de reduction du stock', error);
        }
      });
    } else { 
      console.error('Veuillez sélectionner un produit et entrer une quantité pour reduire.');
    }
  }
  
  // Getter pour calculer stockApres en temps réel
  // get stockApresDisplay(): number | string {
  //   if (!this.selectedProduct) {
  //     return '';
  //   }
  //   const stockActuel = Number(this.selectedProduct.quantite);
  //   if (this.quantiteAjoute === null || this.quantiteAjoute === 0) {
  //     return stockActuel;
  //   }
  //   const ajout = Number(this.quantiteAjoute);
  //   return stockActuel + ajout;
  // }
  
  
  
  // // Getter pour calculer stockApres en temps réel
  // get stockApresDisplayReduire(): number | string {
  //   if (!this.selectedProduct || this.quantiteRetirer === null || this.quantiteRetirer === 0) {
  //     return '';
  //   }
  //   const stockActuel = Number(this.selectedProduct.quantite);
  //   const redui = Number(this.quantiteRetirer);
  //   return stockActuel - redui;
  // }

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

  /* A ne pas pas supprimer
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
[value]="stockApres"
  */

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
  
}
