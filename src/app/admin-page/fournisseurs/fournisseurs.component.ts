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
import { TruncateEmailPipe } from '../MODELS/truncate-email.pipe';
import { environment } from 'src/environments/environment';
import { FournisseurService } from '../SERVICES/fournisseur-service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; // Import ajouté

@Component({
  selector: 'app-fournisseurs',
  standalone: true, 
  imports: [
    FormsModule,
    CommonModule,
    MatPaginatorModule,
    RouterLink,
    TruncateEmailPipe,
  ],
  templateUrl: './fournisseurs.component.html',
  styleUrl: './fournisseurs.component.scss'
})
export class FournisseursComponent {
  isListView = true;
  showDropdown = false;
  searchText = ''; // Modifié de searchQuery à searchText
  fournisseursLoaded = false;
  
  // Pagination
  pageSize = 6;
  currentPage = 0;
  sortField = 'nom';
  sortDirection: 'asc' | 'desc' = 'asc';
  fournisseurs: Fournisseurs[] = [];
  private imgUrl = environment.imgUrl;
  
  constructor(
        private produitService: ProduitService,
        private fournisseurService: FournisseurService,
        private fb: FormBuilder,
        private router: Router,
        private usersService: UsersService,
        private stockService: StockService,
        private cdRef: ChangeDetectorRef,
        private transfertService: TransfertService,
        private sanitizer: DomSanitizer // Injection ajoutée
  ) {}
  
  ngOnInit(): void  {
    const savedView = localStorage.getItem('fournisseurView');
    this.isListView = savedView !== 'grid';
    this.loadFournisseurs();
  }

  loadFournisseurs(): void {
    this.fournisseursLoaded = false;
    this.fournisseurService.getAllFournisseurs().subscribe({
      next: (fournisseurs: Fournisseurs[]) => {
        this.fournisseurs = fournisseurs.reverse();
        //photo de fournisseur specifique pour chaque fournisseur
        this.fournisseurs.forEach(fournisseur => {
          if (fournisseur.photo) {
            fournisseur.photo = `${this.imgUrl}${fournisseur.photo}`;
          } else {
            fournisseur.photo = 'assets/img/profil.png'; // Chemin par défaut si pas de photo
          }
        });
        console.log('Fournisseurs:', this.fournisseurs);
        this.fournisseursLoaded = true;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des fournisseurs", err);
        this.fournisseurs = [];
        this.fournisseursLoaded = true;
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

  // Nouvelle méthode pour mettre en évidence les correspondances
  highlightMatch(text: string | null | undefined): SafeHtml {
    if (!text) return '';
    if (!this.searchText.trim()) return text;
    
    const escapedSearch = this.searchText.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedSearch})`, 'gi');
    
    return this.sanitizer.bypassSecurityTrustHtml(
      text.replace(regex, '<mark>$1</mark>')
    );
  }

  // Filtrage des fournisseurs
  get filteredFournisseurs(): Fournisseurs[] {
    if (!this.searchText.trim()) return this.fournisseurs;
    
    const searchLower = this.searchText.toLowerCase().trim();
    return this.fournisseurs.filter(fournisseur => 
      (fournisseur.nomComplet?.toLowerCase().includes(searchLower)) ||
      (fournisseur.email?.toLowerCase().includes(searchLower)) ||
      (fournisseur.adresse?.toLowerCase().includes(searchLower)) ||
      (fournisseur.telephone?.includes(searchLower))
    );
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.fournisseursLoaded = true;
  }

  // Mise à jour pour utiliser la liste filtrée
  get paginatedFournisseurs(): Fournisseurs[] {
    const start = this.currentPage * this.pageSize;
    return this.filteredFournisseurs.slice(start, start + this.pageSize);
  }

  // Méthode pour ouvrir le détail d'un fournisseur
  openDetail(fournisseurId: number) {
    this.router.navigate(['/detail-fournisseur', fournisseurId]);
  }
}