import { Component, HostListener } from '@angular/core';
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
  ],
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent {
  searchText: string = '';
  tasks = [
    { codeProduit: 'P-0000', photo: 'assets/logo/logoxpertpro.png', nomProduit: 'Riz', nomCategory: 'Alimentation', description: 'Description de produit', prix: '300', prixAchat: 'Facture des ventes', quantite: '200', nomUnite: '60 000', alertSeuil: '60 000' , createdAt: '60 000' },
  ];
  
  filteredTasks() {
    return this.tasks.filter(task => 
      task.nomCategory.toLowerCase().includes(this.searchText.toLowerCase()) ||
      task.nomProduit.toLowerCase().includes(this.searchText.toLowerCase()) ||
      task.codeProduit.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  highlightMatch(text: string): string {
    if (!this.searchText) return text;
    const regex = new RegExp(`(${this.searchText})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  }

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

  downloadExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.tasks);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Tasks');
    XLSX.writeFile(workbook, 'Facture des produits.xlsx');
  }

  downloadPDF() {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Liste des tâches', 14, 22);
    
    const columns = ['Code', 'Photo', 'Nom du produit', 'Categorie', 'Description', 'Prix', 'Prix achat', 'Quantité', 'Unité', 'Alert seuil', 'Date & heure'];
    const rows = this.tasks.map(task => [
      task.codeProduit, task.nomProduit, task.nomCategory, task.photo,
      task.description, task.prix, task.prixAchat, task.quantite, 
      task.nomUnite, task.alertSeuil, task.createdAt
    ]);

    (doc as any).autoTable({
      head: [columns],
      body: rows,
      startY: 30
    });

    doc.save('Facture des ventes.pdf');
  }

  downloadCSV() {
    const headers = ['Code', 'Photo', 'Nom du produit', 'Categorie', 'Description', 'Prix', 'Prix achat', 'Quantité', 'Unité', 'Alert seuil', 'Date & heure'];
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
    link.download = 'Facture des produits.csv';
    link.click();
  }

  selectedFile: File | null = null;
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  showPopup: boolean = false;
  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  control = new FormControl('');
  categories: Categorie[] = [];
  filteredCategories!: Observable<Categorie[]>;

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

  constructor(
    private categorieService: CategorieService,
    private produitService: ProduitService
  ) {}

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
    this.filteredCategories = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
    
  }

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
  

  onCategorySelected(event: any): void {
    const selectedCategory = event.option.value;
    this.produit.category = selectedCategory;
  }

  displayFn(category: Categorie): string {
    return category ? category.nomCategory : '';
  }

  saveProduit() {
    if (this.selectedFile) {
      // Construire l'objet produit en respectant le nom de propriété attendu
      const produitToSave: any = {
        nomProduit: this.produit.nomProduit,
        description: this.produit.description,
        prix: this.produit.prix,
        prixAchat: this.produit.prixAchat,
        quantite: this.produit.quantite,
        alertSeuil: this.produit.alertSeuil,
        uniteMesure: { nomUnite: this.produit.uniteMesure.nomUnite },
        // Remplacer "category" par "categoryProduit"
        categoryProduit: { 
          id: this.produit.category.id, 
          nomCategory: this.produit.category.nomCategory 
        },
        photo: '' // sera mis à jour côté serveur
      };
  
      this.produitService.ajouterProduit(produitToSave, this.selectedFile).subscribe({
        next: (response) => {
          console.log('Produit ajouté avec succès : ', response);
          // Mettez à jour votre liste ou réinitialisez le formulaire
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
  
  
  
}
