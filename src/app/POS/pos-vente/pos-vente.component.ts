import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ViewStateService } from '../pos-accueil/view-state.service';
import { Categorie } from 'src/app/admin-page/MODELS/categorie.model';
import { CategorieService } from 'src/app/admin-page/SERVICES/categorie.service';

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

  loadCategories() {
    this.categorieService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        console.log('Catégories chargées:', this.categories);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des catégories', error);
      }
    });
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    // Implémentez ici le filtrage des produits
  }

  openPaymentPopup() {
    this.showPaymentPopup = true;
  }

  closePaymentPopup() {
    this.showPaymentPopup = false;
  }

}
