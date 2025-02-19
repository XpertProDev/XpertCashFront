import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import { map, Observable, startWith } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { Categorie } from '../MODELS/categorie.model';
import { CategorieService } from '../SERVICES/categorie.service';
import { ProduitService } from '../SERVICES/produit.service';
import { Produit } from '../MODELS/produit.model';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-produits',
  imports: [ 
    CommonModule, 
    ReactiveFormsModule, 
    FormsModule, 
    MatSelectModule, 
    MatFormFieldModule, 
    MatAutocompleteModule,
    MatInputModule,
    AsyncPipe,
    MatPaginatorModule,
  ],
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
  // Recherche et affichage des produits
  searchText: string = '';
  // Liste des produits récupérés depuis le backend
  tasks: any[] = [];



  constructor(
    private categorieService: CategorieService,
    private produitService: ProduitService,
  ) {}


  // Méthode de filtrage pour la recherche dans le tableau
  // filteredTasks() {
  //   return this.tasks.filter(task => 
  //     task.nomCategory?.toLowerCase().includes(this.searchText.toLowerCase()) ||
  //     task.nomProduit?.toLowerCase().includes(this.searchText.toLowerCase()) ||
  //     task.codeProduit?.toLowerCase().includes(this.searchText.toLowerCase())
  //   );
  // }

  // Mise en évidence du texte recherché dans le tableau
  highlightMatch(text: string): string {
    if (!this.searchText) return text;
    const regex = new RegExp(`(${this.searchText})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  }

  // Gestion du dropdown d'export
  showExportDropdown = false;
  toggleExportDropdown() {
    this.showExportDropdown = !this.showExportDropdown;
  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) { 
    const target = event.target as HTMLElement;
    if (!target.closest('.export-container')) {
      this.showExportDropdown = false;
    }
  }

  // Méthodes pour télécharger en Excel, PDF et CSV
  downloadExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.tasks);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Tasks');
    XLSX.writeFile(workbook, 'Facture_des_produits.xlsx');
  }

  downloadPDF() {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Liste des produits', 14, 22);
    
    const columns = ['Code', 'Photo', 'Nom du produit', 'Catégorie', 'Description', 'Prix', 'Prix achat', 'Quantité', 'Unité', 'Alert seuil', 'Date & heure'];
    const rows = this.tasks.map(task => [
      task.codeProduit, task.photo, task.nomProduit, task.nomCategory,
      task.description, task.prix, task.prixAchat, task.quantite, 
      task.nomUnite, task.alertSeuil, task.createdAt
    ]);

    (doc as any).autoTable({
      head: [columns],
      body: rows,
      startY: 30
    });

    doc.save('Facture_des_produits.pdf');
  }

  downloadCSV() {
    const headers = ['Code', 'Photo', 'Nom du produit', 'Catégorie', 'Description', 'Prix', 'Prix achat', 'Quantité', 'Unité', 'Alert seuil', 'Date & heure'];
    const rows = this.tasks.map(task => [
      task.codeProduit, task.photo, task.nomProduit, task.nomCategory,
      task.description, task.prix, task.prixAchat, task.quantite, 
      task.nomUnite, task.alertSeuil, task.createdAt
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Facture_des_produits.csv';
    link.click();
  }

  // Gestion du fichier sélectionné dans le formulaire d'ajout de produit
  selectedFile: File | null = null;
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  // Gestion du popup d'ajout de produit
  showPopup: boolean = false;
  openPopup() {
    this.showPopup = true;
  }
  closePopup() {
    this.showPopup = false;
  }

  // Pour l'autocomplete des catégories
  control = new FormControl('');
  categories: Categorie[] = [];
  filteredCategories!: Observable<Categorie[]>;

  // Objet produit utilisé dans le formulaire d'ajout
  produit = {
    nomProduit: '',
    description: '',
    prix: 0,
    prixAchat: 0,
    quantite: 0,
    alertSeuil: 0,
    uniteMesure: { id: 0, nomUnite: '' },
    category: { id: 0, nomCategory: '' },
    photo: ''
  };

  ngOnInit() {
    const token = localStorage.getItem('authToken') || '';
    if (token) {
      this.categorieService.getCategories(token).subscribe({
        next: (data: Categorie[]) => {
          this.categories = data;
          this.filteredCategories = this.control.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || ''))
          );
        },
        error: (err) => {
          console.error("Erreur lors de la récupération des catégories :", err);
        }
      });
    } else {
      console.error("Aucun token trouvé, vérifiez la connexion !");
    }
    // Initialisation de l'autocomplete (au cas où)
    this.filteredCategories = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
    // Charger la liste des produits de l'entreprise
    this.loadProduits();
  }

  // Méthode pour récupérer les produits via le service et mapper les données pour l'affichage
  // loadProduits(): void {
  //   this.produitService.getProduitsEntreprise().subscribe({
  //     next: (produits: Produit[]) => {
  //       console.log("Liste des produits récupérés :", produits);
  
  //       this.dataSource.data = produits.map(prod => ({
  //         ...prod,
  //         nomCategory: prod.categoryProduit?.nomCategory,
  //         nomUnite: prod.uniteMesure?.nomUnite
  //       }));
  
  //       this.dataSource.paginator = this.paginator;
  //     },
  //     error: (err) => {
  //       console.error("Erreur lors de la récupération des produits", err);
  //     }
  //   });
  // }  


  // Méthode de filtrage utilisée pour l'autocomplete des catégories
  
  private _filter(value: string | Categorie): Categorie[] {
    let filterValue: string;
    if (typeof value === 'string') {
      filterValue = value.toLowerCase().replace(/\s/g, '');
    } else if (value && typeof value === 'object' && value.nomCategory) {
      filterValue = value.nomCategory.toLowerCase().replace(/\s/g, '');
    } else {
      filterValue = '';
    }
    return this.categories.filter(category =>
      category.nomCategory.toLowerCase().replace(/\s/g, '').includes(filterValue)
    );
  }

  // Lorsqu'une catégorie est sélectionnée dans l'autocomplete
  onCategorySelected(event: any): void {
    const selectedCategory = event.option.value;
    this.produit.category = selectedCategory;
  }

  // Fonction d'affichage pour l'autocomplete
  displayFn(category: Categorie): string {
    return category ? category.nomCategory : '';
  }

  // Méthode pour sauvegarder un produit via le service
  saveProduit() {
    if (this.selectedFile) {
      // Construire l'objet produit en respectant le nom de propriété attendu par le backend
      const produitToSave: any = {
        nomProduit: this.produit.nomProduit,
        description: this.produit.description,
        prix: this.produit.prix,
        prixAchat: this.produit.prixAchat,
        quantite: this.produit.quantite,
        alertSeuil: this.produit.alertSeuil,
        uniteMesure: { nomUnite: this.produit.uniteMesure.nomUnite },
        // Le backend attend "categoryProduit" et non "category"
        categoryProduit: { 
          id: this.produit.category.id, 
          nomCategory: this.produit.category.nomCategory 
        },
        photo: '' // Ce champ sera mis à jour côté serveur après le traitement de l'image
      };
  
      this.produitService.ajouterProduit(produitToSave, this.selectedFile).subscribe({
        next: (response) => {
          console.log('Produit ajouté avec succès : ', response);
          // Vous pouvez rafraîchir la liste des produits après l'ajout
          this.loadProduits();
          this.closePopup();
        },
        error: (err) => {
          console.error('Erreur lors de l’ajout du produit : ', err);
        }
      });
    } else {
      console.error("Aucun fichier sélectionné !");
    }
  }

  dataSource = new MatTableDataSource<any>(); // Gère les données avec pagination
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  loadProduits(): void {
    this.produitService.getProduitsEntreprise().subscribe({
      next: (produits: Produit[]) => {
        this.tasks = produits.map(prod => ({
          ...prod,
          nomCategory: prod.categoryProduit?.nomCategory,
          nomUnite: prod.uniteMesure?.nomUnite
        }));
        
        this.dataSource.data = this.tasks;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des produits", err);
      }
    });
  }


  // tasks: any[] = [];
  paginatedTasks: any[] = []; // Liste des produits affichés selon la pagination
  pageSize = 5; // Nombre de produits par page (modifiable)
  currentPage = 0; // Page actuelle

  
  filteredTasks(): any[] {
    const filtered = this.tasks.filter(task => 
      task.nomCategory?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      task.nomProduit?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      task.codeProduit?.toLowerCase().includes(this.searchText.toLowerCase())
    );
  
    const startIndex = this.currentPage * this.pageSize;
    return filtered.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }
  
  
  

}
