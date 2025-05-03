// fournisseurs.component.ts
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ProduitService } from '../SERVICES/produit.service';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from '../SERVICES/users.service';
import { StockService } from '../SERVICES/stocks.service';
import { TransfertService } from '../SERVICES/transfert-service';
import { Fournisseurs } from '../MODELS/fournisseurs-model';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-fournisseurs',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatPaginatorModule,
    RouterLink,
  ],
  templateUrl: './fournisseurs.component.html',
  styleUrl: './fournisseurs.component.scss'
})
export class FournisseursComponent {
  isListView = true;
  showDropdown = false;
  searchQuery = '';
  
  // Pagination
  pageSize = 6;
  currentPage = 0;
  sortField = 'nom';
  sortDirection: 'asc' | 'desc' = 'asc';
  fournisseurs: Fournisseurs[] = [];


    constructor(
        private produitService: ProduitService,
        private fb: FormBuilder,
        private router: Router,
        private usersService: UsersService,
        private stockService: StockService,
        private cdRef: ChangeDetectorRef,
        private transfertService: TransfertService,
        // private fournisseurService: FournisseurService,
    ) {}
    

  ngOnInit(): void  {
    const savedView = localStorage.getItem('fournisseurView');
    this.isListView = savedView !== 'grid';
    this.loadFournisseurs();
  }

  loadFournisseurs(): void {
    this.produitService.getFournisseurs().subscribe({
      next: (fournisseurs: Fournisseurs[]) => {
        this.fournisseurs = fournisseurs;
        console.log('Fournisseurs:', this.fournisseurs);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des fournisseurs", err);
        this.fournisseurs = [];
      }
    });
  }

  toggleView(viewType: 'list' | 'grid') {
    this.isListView = viewType === 'list';
    localStorage.setItem('fournisseurView', viewType);
  }


  sort(field: keyof Fournisseurs) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }

    this.fournisseurs.sort((a, b) => {
      const valueA = a[field]?.toString().toLowerCase() ?? '';
      const valueB = b[field]?.toString().toLowerCase() ?? '';
      return valueA.localeCompare(valueB) * (this.sortDirection === 'asc' ? 1 : -1);
    });
  }

  applyFilter() {
    // Implémentez la logique de filtrage si nécessaire
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  get paginatedFournisseurs(): Fournisseurs[] {
    const start = this.currentPage * this.pageSize;
    return this.fournisseurs.slice(start, start + this.pageSize);
  }

  // Méthode pour ouvrir le détail d'un fournisseur
  openDetail(id: number) {
    this.router.navigate(['/detail-fournisseur', id]);
  }
  
  
}