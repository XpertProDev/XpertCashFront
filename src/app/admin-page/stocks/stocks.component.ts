import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieService } from '../SERVICES/categorie.service';
import { ProduitService } from '../SERVICES/produit.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UsersService } from '../SERVICES/users.service';
import { map, startWith } from 'rxjs';
import { Produit } from '../MODELS/produit.model';
import { StocksService } from '../SERVICES/stocks.service';

@Component({
  selector: 'app-stocks',
  imports: [
      CommonModule, 
      ReactiveFormsModule, 
      FormsModule, 
      MatSelectModule, 
      MatFormFieldModule, 
      MatAutocompleteModule,
      MatInputModule,
      //AsyncPipe,
      MatPaginatorModule,
  ],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.scss'
})
export class StocksComponent implements OnInit {

  searchText: string = '';
  tasks: any[] = [];
  imagePopup: string | null = null;
  nomEntreprise: string = '';
  adresseEntreprise: string = '';
  logoEntreprise: string ='';
  stocks: any = [];
  errorMessage: string = '';

  downloadExcel() {}

  downloadPDF() {}

  downloadCSV() {}


  
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

  openImage(imageUrl: string): void {
    this.imagePopup = imageUrl;
  }
  
  closeImage(): void {
    this.imagePopup = null;
  }

  dataSource = new MatTableDataSource<any>(); // Gère les données avec pagination
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private categorieService: CategorieService,
    private produitService: ProduitService,
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService,
    private stocksService: StocksService
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('authToken') || '';
  
    // Récupérer tout le stock via le service
    this.stocksService.getAllStock(token).subscribe(
      (data) => {
        this.stocks = data.map(stock => ({
          ...stock,
          produit: {
            ...stock.produit,  // On garde les données du produit existantes
            codeProduit: stock.produit?.codeProduit || 'Code inconnu',  // On s'assure que le code produit existe
            nomProduit: stock.produit?.nomProduit || 'Nom inconnu',  // Nom du produit
            photo: stock.produit?.photo ? `http://localhost:8080${stock.produit.photo}` : 'assets/img/lait.jpeg',
            prix: stock.produit?.prix || 0,  // Prix
            prixAchat: stock.produit?.prixAchat || 0,  // Prix d'achat
            alertSeuil: stock.produit?.alertSeuil || 0,  // Seuil d'alerte
            category: stock.produit?.category || { nomCategory: 'Catégorie inconnue' },  // Catégorie du produit
          }
        }));
      },
      (error) => {
        this.errorMessage = error.message || 'Erreur lors de la récupération du stock';
        console.error(this.errorMessage);
      }
    );
  }
  
  

  // Charger la liste des produits
  loadProduits(): void {
    this.produitService.getProduitsEntreprise().subscribe({
      next: (produits: Produit[]) => {
        console.log('Produits récupérés:', produits);

        this.tasks = produits.map(prod => {
          const fullImageUrl = `http://localhost:8080${prod.photo}`;
          return {
            ...prod,
            photo: fullImageUrl,
            nomCategory: prod.category?.nomCategory ?? 'Catégorie inconnue',
            nomUnite: prod.uniteMesure?.nomUnite
          };
        });

      },
      error: (err) => {
        console.error('Erreur lors de la récupération des produits', err);
      }
    });
  }

  
  // Mise en évidence du texte recherché dans le tableau
  highlightMatch(text: string): string {
    if (!this.searchText) return text;
    const regex = new RegExp(`(${this.searchText})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  }

  filteredTasks(): any[] {
    const sortedTasks = [...this.tasks] // Copie du tableau pour éviter de modifier l'original
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  
    const filtered = sortedTasks.filter(task => 
      task.nomProduit?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      task.codeProduit?.toLowerCase().includes(this.searchText.toLowerCase())
    );
  
    const startIndex = this.currentPage * this.pageSize;
    return filtered.slice(startIndex, startIndex + this.pageSize);
  }
  
  getImageBase64(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        const reader = new FileReader();
        reader.onloadend = function () {
          resolve(reader.result as string);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.onerror = function () {
        reject(new Error('Erreur lors du chargement de l\'image'));
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    });
  }
  


  paginatedTasks: any[] = []; 
  pageSize = 5; 
  currentPage = 0;  

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }
}
