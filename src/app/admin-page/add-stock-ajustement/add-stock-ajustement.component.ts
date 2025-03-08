import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from '../SERVICES/produit.service';
import { SharedDataService } from '../SERVICES/shared-data.service';
import { UsersService } from '../SERVICES/users.service';
import { Produit } from '../MODELS/produit.model';
import { StockService } from '../SERVICES/stocks.service';

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
        console.log('Produits récupérés:', produits);
        this.tasks = produits.map(prod => {
          // const fullImageUrl = `http://localhost:8080${prod.photo}`;
          const fullImageUrl = (prod.photo && prod.photo !== 'null' && prod.photo !== 'undefined')
          ? `http://localhost:8080${prod.photo}`
          : '';
          console.log('Image URL:', fullImageUrl);

          // Vérifier si `createdAt` est défini
          let createdAtDate: Date | null = null;
          if (prod.createdAt) {
            const cleanedDateStr = prod.createdAt.replace(' à ', ' '); // Remplacer "à" par un espace
            const dateParts = cleanedDateStr.match(/^(\d{2})-(\d{2})-(\d{4}) (\d{2}):(\d{2})$/);
            
            if (dateParts) {
              const [, day, month, year, hours, minutes] = dateParts.map(Number);
              createdAtDate = new Date(year, month - 1, day, hours, minutes);
            } else {
              console.warn("Format de date invalide pour:", prod.createdAt);
            }
          }
          console.log("Date récupérée:", prod.createdAt);

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
        }).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des produits", err);
      }
    });
  }


  // quantiteAjoute: number = 0;
  quantiteAjoute: number | null = null; // On peut initialiser à null pour afficher le champ vide
  descriptionAjout: string = '';
  // Ajoutez une variable pour contrôler la visibilité
  isProductAdded: boolean = false;
  
  // Méthode pour ajouter le stock
  AjouterDesQuan(): void {
    if (this.selectedProduct && this.quantiteAjoute! > 0) {
      const stock = {
        quantiteAjoute: this.quantiteAjoute,
        descriptionAjout: this.descriptionAjout
      };

      // Appel du service pour ajouter le stock
      this.stockService.ajouterStock(this.selectedProduct.id, stock).subscribe({
        next: (response) => {
          console.log('Stock ajouté avec succès', response);
          // Mettre à jour la variable isProductAdded
          this.isProductAdded = true;
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout du stock', error);
        }
      });
    } else {
      console.error('Veuillez sélectionner un produit et entrer une quantité valide.');
    }
  }

  // Getter pour calculer stockApres en temps réel
  get stockApresDisplay(): number | string {
    if (!this.selectedProduct || this.quantiteAjoute === null || this.quantiteAjoute === 0) {
      return '';
    }
    const stockActuel = Number(this.selectedProduct.quantite);
    const ajout = Number(this.quantiteAjoute);
    return stockActuel + ajout;
  }
  
}
