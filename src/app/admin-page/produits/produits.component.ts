import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import { map, Observable, startWith } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {AsyncPipe} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { Categorie } from '../MODELS/categorie.model';
import { CategorieService } from '../SERVICES/categorie.service';


@Component({
  selector: 'app-produits',
  // SharedModule, NgApexchartsModule, ProductSaleComponent,
  imports: [ 
    CommonModule, 
    ReactiveFormsModule, 
    FormsModule, 
    MatSelectModule, 
    MatFormFieldModule, 
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    AsyncPipe,
  ],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.scss'
})
export class ProduitsComponent {
  searchText: string = '';
    tasks = [
      { codeProduit: 'P-0000', photo: 'img.jpg',  nomProduit: 'Riz',  nomCategory: 'Alimentation', description: 'Description de produit', prix: '300', prixAchat: 'Facture des ventes', quantite: '200', nomUnite: '60 000', alertSeuil: '60 000' , createdAt: '60 000' },
    ];
  
    // Fonction de filtrage
    filteredTasks() {
      return this.tasks.filter(task => 
        task.nomCategory.toLowerCase().includes(this.searchText.toLowerCase()) ||
        task.nomProduit.toLowerCase().includes(this.searchText.toLowerCase()) ||
        task.codeProduit.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  
    // Fonction pour mettre en gras la correspondance dans une chaîne de texte
    highlightMatch(text: string): string {
      if (!this.searchText) return text; // Si aucune recherche, renvoie le texte d'origine
      
      // Création d'une expression régulière pour rechercher le texte en ignorant la casse
      const regex = new RegExp(`(${this.searchText})`, 'gi');
      
      // Remplacement de la correspondance par la même valeur mais avec <strong> pour mettre en gras
      return text.replace(regex, '<strong>$1</strong>');
    }
    // Pour l'exportation des fichier en format
  
    showExportDropdown = false;
  
    // Méthode pour basculer l'affichage du dropdown
    toggleExportDropdown() {
      this.showExportDropdown = !this.showExportDropdown;
    }
  
    // Méthode pour fermer le dropdown si on clique à l'extérieur
    @HostListener('document:click', ['$event'])
    onClickOutside(event: MouseEvent) { 
      const target = event.target as HTMLElement;
      if (!target.closest('.export-container')) {
        this.showExportDropdown = false;
      }
    }
  
    // Télécharger en format Excel
    downloadExcel() {
      console.log('Télécharger en format Excel');
      // Logique pour Excel
      const worksheet = XLSX.utils.json_to_sheet(this.tasks); // Remplacez `this.tasks` par vos données
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Tasks');
      XLSX.writeFile(workbook, 'Facture des produits.xlsx');
    }
    // Télécharger en format PDF
    downloadPDF() {
      console.log("Téléchargement PDF en cours..."); 
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text('Liste des tâches', 14, 22);
      
      const columns = ['Code', 'Photo', 'Nom du produit', 'Categorie', 'Description', 'Prix', 'Prix achat', 'Quantité', 'Unité', 'Alert seuil', 'Date & heure'];
      const rows = this.tasks.map(task => [
        task.codeProduit,
        task.nomProduit,
        task.nomCategory,
        task.photo,
        task.description,
        task.prix,
        task.prixAchat,
        task.quantite,
        task.nomUnite,
        task.alertSeuil,
        task.createdAt
      ]);
    
      (doc as any).autoTable({
        head: [columns],
        body: rows,
        startY: 30
      });
    
      doc.save('Facture des ventes.pdf');
    }
    // Télécharger en format CSV
    downloadCSV() {
      const headers = ['Code', 'Photo', 'Nom du produit', 'Categorie', 'Description', 'Prix', 'Prix achat', 'Quantité', 'Unité', 'Alert seuil', 'Date & heure'];
      const rows = this.tasks.map(task => [
        task.codeProduit,
        task.photo,
        task.nomProduit,
        task.nomCategory,
        task.description,
        task.prix,
        task.prixAchat,
        task.quantite,
        task.nomUnite,
        task.alertSeuil,
        task.createdAt,
      ]);
  
      // Convertir les données en format CSV
      const csvContent = [
        headers.join(','), // En-têtes
        ...rows.map(row => row.join(',')), // Données
      ].join('\n');
  
      // Créer un fichier CSV et le télécharger
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'Facture des produits.csv';
      link.click();
    }

    // La creation de l'image 
    selectedFile: File | null = null;
    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
          this.selectedFile = input.files[0];
      }
    }
  

  showPopup: boolean = false;

  // Méthode pour ouvrir le pop-up
  openPopup() {
    this.showPopup = true;
  }

  // Méthode pour fermer le pop-up
  closePopup() {
    this.showPopup = false;
  }


  // CATEGORIE
  control = new FormControl('');
  categories: Categorie[] = [];
  filteredCategories!: Observable<Categorie[]>;

  constructor(private categorieService: CategorieService) {}

  ngOnInit() {
    const token = localStorage.getItem('jwt_token') || '';
    this.categorieService.getCategories(token).subscribe((data) => {
      this.categories = data;
      this.filteredCategories = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || ''))
      );
    });
  }

  private _filter(value: string): Categorie[] {
    const filterValue = value.toLowerCase().replace(/\s/g, '');
    return this.categories.filter(category =>
      category.nomCategory.toLowerCase().replace(/\s/g, '').includes(filterValue)
    );
  }
}
