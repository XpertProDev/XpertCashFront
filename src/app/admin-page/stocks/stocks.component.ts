import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
          private router: Router
  ) {}

  // Mise en évidence du texte recherché dans le tableau
  highlightMatch(text: string): string {
    if (!this.searchText) return text;
    const regex = new RegExp(`(${this.searchText})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  }

  filteredTasks(): any[] {
    const filtered = this.tasks.filter(task => 
      // task.nomProduit?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      task.codeProduit?.toLowerCase().includes(this.searchText.toLowerCase())
    );
  
    const startIndex = this.currentPage * this.pageSize;
    return filtered.slice(startIndex, startIndex + this.pageSize);
  }

  ngOnInit() {
    
  }

  paginatedTasks: any[] = []; 
  pageSize = 5; 
  currentPage = 0; 

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }
}
