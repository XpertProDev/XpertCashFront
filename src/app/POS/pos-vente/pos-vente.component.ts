import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ViewStateService } from '../pos-accueil/view-state.service';
import { Categorie } from 'src/app/admin-page/MODELS/categorie.model';
import { CategorieService } from 'src/app/admin-page/SERVICES/categorie.service';
import { ProduitDetailsResponseDTO } from 'src/app/admin-page/MODELS/produit-category.model';

@Component({
  selector: 'app-pos-vente',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
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

  constructor(
    private router: Router,
    private viewState: ViewStateService,
    private categorieService: CategorieService
  ) {}

  ngOnInit() {
    // Récupérer l'état initial
    const savedView = localStorage.getItem('viewPreference');
    this.isListView = savedView ? savedView === 'list' : true;
    
    // S'abonner aux changements
    this.viewState.isListView$.subscribe(view => {
      this.isListView = view;
    });

    // Récupérez les catégories
    if (!this.categories.length) {
        this.loadCategories();
    }
  }

  // loadCategories() {
  //   this.categorieService.getCategories().subscribe({
  //     next: (categories) => {
  //       this.categories = categories;
  //       console.log('Catégories chargées:', this.categories);
  //     },
  //     error: (error) => {
  //       console.error('Erreur lors du chargement des catégories', error);
  //     }
  //   });
  // }

  loadCategories() {
    this.categorieService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        console.log('Catégories chargées:', this.categories);
        
        // Afficher tous les produits au démarrage
        this.displayedProducts = [];
        this.categories.forEach(categorie => {
          if (categorie.produits) {
            this.displayedProducts = [...this.displayedProducts, ...categorie.produits];
          }
        });
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
    
    // Si le chemin est absolu
    if (photoPath.startsWith('http')) {
      return photoPath;
    }
    
    // Si le chemin commence par /uploads
    if (photoPath.startsWith('/uploads')) {
      return environment.imgUrl.replace('/api', '') + photoPath;
    }
    
    return photoPath;
  }

  openPaymentPopup() {
    this.showPaymentPopup = true;
  }

  closePaymentPopup() {
    this.showPaymentPopup = false;
  }

}
