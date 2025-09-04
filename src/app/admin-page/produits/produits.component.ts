import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { CategorieService } from '../SERVICES/categorie.service';
import { ProduitEntreprisePaginatedResponse, ProduitService, ProduitStockPaginatedResponse } from '../SERVICES/produit.service';
import { Boutique, Produit } from '../MODELS/produit.model';
import { Categorie } from '../MODELS/categorie.model';
// MatPaginator et PageEvent ne sont plus nécessaires avec la pagination personnalisée
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import autoTable from 'jspdf-autotable';
import { UsersService } from '../SERVICES/users.service';
import { CustomNumberPipe } from '../MODELS/customNumberPipe';
import { MatDialog } from '@angular/material/dialog';
import { SuspendedBoutiqueDialogComponent } from './suspended-boutique-dialog.component';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    // RouterLink,
    MatInputModule,
    // MatPaginatorModule n'est plus nécessaire avec la pagination personnalisée
    CustomNumberPipe,
    DragDropModule,
  ],
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
  boutiqueId!: number;
  private backendUrl = environment.apiBaseUrl;
  isLoadingCounts: boolean = false;
  searchText: string = '';
  tasks: Produit[] = [];
  imagePopup: string | null = null;
  nomEntreprise: string = '';
  adresseEntreprise: string = '';
  logoEntreprise: string = '';
  userName: string = '';
  boutiqueName: string = '';
  addressBoutique : string = '';
  showDescription: boolean = false;
  selectedBoutique: any = null;
  previousSelectedBoutique: any | null = null;
  boutiqueActuelle: string = "Toutes les boutiques";
  boutiques: any[] = []; 
  private apiUrl = environment.imgUrl;
  isDataLoaded = false; 
  isLoading = false;
  showNoProductsMessage = false;
  productCounts: { [boutiqueId: number]: number } = {};

  showFilterDropdown = false;
  selectedFilters: any[] = [];
  allProducts: Produit[] = [];   // Tous les produits chargés
  sortColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  showExcelImportModal = false;
  selectedFile: File | null = null;
  isImporting = false;
  importMessage = '';
  importSuccess = false;
  importErrors: string[] = [];

  selectedBoutiquesForImport: number[] = [];
  isAllBoutiquesSelected = false;

  showBoutiqueError: boolean = false;

  showBoutiqueSelectionPanel: boolean = false;

  isPopupVisible = false;
  categories: (Categorie & { selected?: boolean })[] = [];

  currentPageEnterprise: number = 0;
  pageSizeEnterprise: number = 20;
  totalElementsEnterprise: number = 0;

  currentPageBoutique: number = 0;
  pageSizeBoutique: number = 20;
  totalElementsBoutique: number = 0;

  currentPage = 0;
  pageSize = 20;
  totalElements = 0;
  totalPages = 0;
  // Pagination et tableau de données
  dataSource = new MatTableDataSource<Produit>();
  // @ViewChild(MatPaginator) paginator!: MatPaginator; // Plus nécessaire avec la pagination personnalisée
  // Dropdown pour l'export
  showExportDropdown = false;
  // Gestion de l'image uploadée
  urllink: string = "assets/img/appareil.jpg";
  newPhotoUrl: string | null = null;
  // selectedFile: File | null = null;
  entrepriseId: number | null = null;

  // HostListener pour fermer les dropdowns
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    
    // Fermer le dropdown de filtre
    if (!target.closest('.container_inputSearch') && 
        !target.closest('.filter-dropdown') &&
        !target.closest('.trier')) {
      this.showFilterDropdown = false;
    }
    
    // Fermer le dropdown d'export
    if (!target.closest('.export-container')) {
      this.showExportDropdown = false;
    }
  }

  constructor(
    private categorieService: CategorieService,
    private produitService: ProduitService,
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.getUserInfo();
    this.fetchCategories();
  }

    // Méthodes de gestion des filtres
  toggleFilterDropdown(): void {
    this.showFilterDropdown = !this.showFilterDropdown;
    this.showExportDropdown = false;
  }

  applyFilters(): void {
    let filtered = [...this.allProducts];
    const searchLower = this.searchText.toLowerCase();

    if (this.searchText) {
      if (this.selectedFilters.length > 0) {
        filtered = filtered.filter(product => {
          return this.selectedFilters.every(filter => {
            const key = filter.type as keyof Produit;
            const value = product[key]?.toString().toLowerCase() || '';
            return value.includes(searchLower);
          });
        });
      } else {
        filtered = filtered.filter(product => 
          Object.values(product).some(val => 
            val?.toString().toLowerCase().includes(searchLower)
        ));
      }
    }

    this.tasks = filtered;
    this.currentPage = 0;
  }

  addFilter(filter: any): void {
    if (this.isFilterSelected(filter.type)) {
      this.selectedFilters = [];
    } else {
      this.selectedFilters = [filter];
    }
    this.showFilterDropdown = false;
    this.applyFilters();
    
    setTimeout(() => {
      if (this.searchInput?.nativeElement) {
        this.searchInput.nativeElement.focus();
      }
    }, 0);
  }

  isFilterSelected(filterType: string): boolean {
    return this.selectedFilters.some(f => f.type === filterType);
  }

  focusSearchInput(): void {
    if (this.searchInput?.nativeElement) {
      this.searchInput.nativeElement.focus();
    }
  }

  removeFilter(filter: any): void {
    this.selectedFilters = this.selectedFilters.filter(f => f !== filter);
    this.applyFilters();
  }

  getSearchPlaceholder(): string {
    if (this.selectedFilters.length > 0) {
      return `Par ${this.selectedFilters.map(f => f.label).join(', ')}...`;
    }
    return "Recherche...";
  }

  resetFilters(): void {
    this.selectedFilters = [];
    this.searchText = '';
    this.tasks = [...this.allProducts];
    this.currentPage = 0;
    this.showFilterDropdown = false;
  }

  goToAddProduit() {
    this.router.navigate(['/addProduit']);
  }

  // Permet de mettre en évidence le texte recherché
  highlightMatch(text: string): string {
    if (!this.searchText) return text;
    const regex = new RegExp(`(${this.searchText})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  // Retourne la liste filtrée et paginée des produits
  // filteredProducts(): Produit[] {
  //   const sortedProducts = [...this.tasks].sort((a, b) => {
  //     const dateA = new Date(a.createdAt || new Date()).getTime();
  //     const dateB = new Date(b.createdAt || new Date()).getTime();

  //     return dateB - dateA;
  //   });
  //   const filtered = sortedProducts.filter(product =>
  //     (product.nom && product.nom.toLowerCase().includes(this.searchText.toLowerCase())) ||
  //     (product.codeGenerique && product.codeGenerique.toLowerCase().includes(this.searchText.toLowerCase())) ||
  //     (product.codeBare && product.codeBare.toLowerCase().includes(this.searchText.toLowerCase())) 
  //   );
  //   const startIndex = this.currentPage * this.pageSize;
  //   return filtered.slice(startIndex, startIndex + this.pageSize);
  // }

  filteredProducts(): Produit[] {
    const startIndex = this.currentPage * this.pageSize;
    return this.tasks.slice(startIndex, startIndex + this.pageSize);
  }

  // Affichage/Masquage du dropdown d'export
  toggleExportDropdown() {
    this.showExportDropdown = !this.showExportDropdown;
  }

  // Masque le dropdown si l'utilisateur clique en dehors
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.export-container')) {
      this.showExportDropdown = false;
    }
  }

  // Permet de convertir une image en base64 pour l'ajouter dans le PDF
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

  // Téléchargement en Excel
  downloadExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.tasks);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Produits');
    XLSX.writeFile(workbook, 'Produits.xlsx');
  }

  // Téléchargement en PDF
  downloadPDF() {
    if (!this.tasks || this.tasks.length === 0) {
      console.error("Aucun produit à afficher dans le PDF !");
      return;
    }
    const doc = new jsPDF();
    const logoUrl = this.logoEntreprise
      ? `${this.apiUrl}${this.logoEntreprise}`
      : `${this.apiUrl}/logoUpload/651.jpg`;
    const entreprise = this.nomEntreprise || "Nom non disponible";
    
    
    this.getImageBase64(logoUrl).then((logoBase64) => {
      const imageType = logoBase64.startsWith('data:image/png') ? 'PNG' : 'JPEG';
      doc.addImage(logoBase64, imageType, 14, 5, 30, 30);

      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.text(`Nom de l'entreprise: ${entreprise}`, 60, 20);
      doc.text('Liste des produits', 60, 30);
      doc.setLineWidth(0.5);
      doc.line(14, 35, 195, 35);
      
      const columns = ['Code', 'Nom produit', 'Description', 'Catégorie', 'Prix vente', 'Prix achat', 'En Stock', 'Unite', 'Seuil Alert'];
      const startIndex = this.currentPage * this.pageSize;
      const pageTasks = this.tasks.slice(startIndex, startIndex + this.pageSize);
      
      if (!Array.isArray(pageTasks) || pageTasks.length === 0) {
        console.error("Aucun produit trouvée sur cette page !");
        return;
      }
      
      const rows = pageTasks.map(task => [
        task.codeGenerique || '',
        task.nom || '',
        task.description || '',
        task.nomCategorie ? `${task.nomCategorie}` : 'Aucune categorie',
        task.prixVente ?? 0,
        task.prixAchat ?? 0,
        task.quantite ?? 0,
        task.nomUnite ? `${task.nomUnite}` : 'Sans unité',
        task.seuilAlert ?? 0,
      ]);
      
      
      autoTable(doc, {
        head: [columns],
        body: rows,
        startY: 40,
        theme: 'grid',
        headStyles: { fillColor: [64, 153, 255], textColor: [255, 255, 255], fontSize: 12 },
        bodyStyles: { fontSize: 10 }
      });
      
      const finalY = (doc as any).lastAutoTable?.finalY || 60;
      doc.setLineWidth(0.5);
      doc.line(14, finalY + 5, 195, finalY + 5);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.text(`Nom de Boutique: ${this.boutiqueName}`, 14, finalY + 10);
      doc.text(`Adress: ${this.addressBoutique}`, 14, finalY + 15);
      
      doc.save('Produits.pdf');
    }).catch((error) => {
      console.error("Erreur lors du chargement du logo :", error);
    });
  }

  // Téléchargement en CSV
  downloadCSV() {
    const headers = ['Code', 'Photo', 'Nom produit', 'Catégorie', 'Description', 'Prix Vente', 'Prix Achat', 'Quantité', 'Unité', 'Seuil Alerte', 'Date & heure'];
    const rows = this.tasks.map(task => [
      task.codeGenerique || '',
      task.photo,
      task.nom,
      task.nomCategorie || '',
      task.description,
      task.prixVente,
      task.prixAchat,
      task.quantite,
      task.nomUnite || '',
      task.seuilAlert,
      task.createdAt
    ]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(',')),
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Produits.csv';
    link.click();
  }

  // Gestion de la pagination personnalisée
  goToPage(page: number | string): void {
    // Ignorer les clics sur les points de suspension
    if (page === '...') {
      return;
    }
    
    const pageNumber = page as number;
    if (pageNumber >= 0 && pageNumber < this.totalPages) {
      this.currentPage = pageNumber;
      
      if (this.selectedBoutique) {
        // si vue boutique
        this.loadProduitsPaginated(this.selectedBoutique.id, pageNumber, this.pageSize);
      } else {
        // vue "Toutes les boutiques"
        this.loadAllProduitsPaginated(pageNumber, this.pageSize);
      }
    }
  }

  onPageSizeChange(): void {
    this.currentPage = 0; // Retourner à la première page
    
    if (this.selectedBoutique) {
      // si vue boutique
      this.loadProduitsPaginated(this.selectedBoutique.id, 0, this.pageSize);
    } else {
      // vue "Toutes les boutiques"
      this.loadAllProduitsPaginated(0, this.pageSize);
    }
  }

  getPageInfo(): string {
    const start = this.currentPage * this.pageSize + 1;
    const end = Math.min((this.currentPage + 1) * this.pageSize, this.totalElements);
    return `${start} - ${end} / ${this.totalElements}`;
  }

  getVisiblePages(): (number | string)[] {
    const pages: (number | string)[] = [];
    const totalPages = this.totalPages;
    const current = this.currentPage;
    
    if (totalPages <= 7) {
      // Si moins de 7 pages, afficher toutes les pages
      for (let i = 0; i < totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Logique pour afficher les pages avec des points de suspension
      if (current <= 3) {
        // Début de la liste
        for (let i = 0; i < 5; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages - 1);
      } else if (current >= totalPages - 4) {
        // Fin de la liste
        pages.push(0);
        pages.push('...');
        for (let i = totalPages - 5; i < totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Milieu de la liste
        pages.push(0);
        pages.push('...');
        for (let i = current - 1; i <= current + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages - 1);
      }
    }
    
    return pages;
  }

  // Méthode syncPaginator supprimée car plus nécessaire avec la pagination personnalisée

  // Gestion de l'upload d'image pour ajouter une photo
  // onFileSelected(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files.length > 0) {
  //     this.selectedFile = input.files[0];
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       this.newPhotoUrl = e.target?.result as string;
  //     };
  //     reader.readAsDataURL(this.selectedFile);
  //   }
  // }

  // Récupère l'ID de la boutique depuis le localStorage
  getUserBoutiqueId(): number | null {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.boutiques && user.boutiques.length > 0) {
      return user.boutiques[0]?.id || null;
    } else {
      console.error('Aucune boutique trouvée pour cet utilisateur');
      return null;
    }
  }

  // Dans getUserInfo, ajoutez l'appel pour charger les compteurs initiaux
  getUserInfo(): void {
    this.usersService.getUserInfo().subscribe({
      next: async (user) => {
        console.log('Données reçues:', user);
        localStorage.setItem('user', JSON.stringify(user));
        this.userName = user.nomComplet;
        this.nomEntreprise = user.nomEntreprise;
        this.boutiques = user.boutiques ?? []; 

        // Récupération de l'ID entreprise
        this.entrepriseId = user.entrepriseId;

        // Charger les compteurs avant de sélectionner une boutique
        await this.loadAllBoutiquesCounts();
        this.selectBoutique(null);

        if (!this.entrepriseId) {
          console.error('Aucun ID entreprise trouvé !');
          return;
        }

        this.addressBoutique = this.selectedBoutique?.adresse || 'Adresse non trouvée';
        
        setTimeout(() => {
          this.showNoProductsMessage = this.tasks.length === 0;
          this.cdr.detectChanges();
        }, 500);
      },
      error: (err) => {
        this.boutiques = [];
        console.error("Erreur lors de la récupération des informations utilisateur :", err);
        setTimeout(() => {
          this.showNoProductsMessage = this.tasks.length === 0;
          this.cdr.detectChanges();
        }, 500);
      }
    });
  }

  async selectBoutique(boutique: any | null): Promise<void> {
    if (boutique && !boutique.actif) {
      this.showSuspendedBoutiqueDialog();
      return;
    }

    this.previousSelectedBoutique = this.selectedBoutique;

    if (boutique === null) {
      this.selectedBoutique = boutique;
      this.boutiqueActuelle = "Toutes les boutiques";
      // Charger les compteurs avant d'afficher les produits
      await this.loadAllBoutiquesCounts();
      this.loadAllProduitsPaginated(0, this.pageSize);
    } else {
      this.selectedBoutique = boutique;
      this.boutiqueActuelle = boutique.nomBoutique ? boutique.nomBoutique : "Boutique sans nom";
      this.loadProduitsPaginated(boutique.id, 0, this.pageSize);
    }
    
    this.currentPage = 0;
  }

  // Ajoutez cette nouvelle méthode
  loadAllProduits(): void {
    
    this.showNoProductsMessage = false;
    if (!this.entrepriseId) {
      console.error('ID entreprise manquant');
      return;
    }

    this.produitService.getProduitsByEntrepriseId(this.entrepriseId).subscribe({
      next: (produits: Produit[]) => {
      // Filtrer les produits qui appartiennent à au moins une boutique non entrepôt et active
          const boutiquesValidesIds = this.boutiques
            .filter(b => b.typeBoutique !== 'ENTREPOT' && b.actif)
            .map(b => b.id);

          const produitsFiltres = produits.filter(prod => {
            return prod.boutiques?.some(b => boutiquesValidesIds.includes(b.id));
          });

          this.tasks = produitsFiltres.map(prod => {
            const fullImageUrl = (prod.photo && prod.photo !== 'null' && prod.photo !== 'undefined')
              ? `${this.apiUrl}${prod.photo}`
              : '';

            return {
              ...prod,
              photo: fullImageUrl,
              createdAt: this.formatDate(prod.createdAt?.toString() || ''),
            } as Produit;
          }).sort((a, b) => {
            const dateA = new Date(a.createdAt ?? new Date().toISOString()).getTime();
            const dateB = new Date(b.createdAt ?? new Date().toISOString()).getTime();
            return dateB - dateA;
          });

          const counts: { [id: number]: number } = {};
          produitsFiltres.forEach(prod => {
            prod.boutiques?.forEach(b => {
              if (boutiquesValidesIds.includes(b.id)) {
                counts[b.id] = (counts[b.id] || 0) + 1;
              }
            });
          });
          this.productCounts = counts;

          this.dataSource.data = this.tasks;
          // Configuration du paginator supprimée car plus nécessaire avec la pagination personnalisée
          
          this.showNoProductsMessage = this.tasks.length === 0;
          this.allProducts = [...this.tasks];
          this.resetFilters();
        }
        ,
      error: (err) => {
        console.error("Erreur :", err);
        this.showNoProductsMessage = this.tasks.length === 0;
      }
    });
  }

  private async loadAllBoutiquesCounts(): Promise<void> {
    if (!this.entrepriseId) return;

    this.isLoadingCounts = true;
    
    // Réinitialiser temporairement les compteurs pour éviter l'affichage de valeurs incorrectes
    const previousCounts = { ...this.productCounts };
    this.boutiquesActivesSansEntrepots.forEach(b => {
      this.productCounts[b.id] = 0;
    });

    try {
      const requests = this.boutiquesActivesSansEntrepots.map(boutique => 
        this.produitService.getProduitsEntreprisePaginated(boutique.id, 0, 1).toPromise()
      );

      const responses = await Promise.all(requests);
      
      responses.forEach((response, index) => {
        if (response) {
          const boutiqueId = this.boutiquesActivesSansEntrepots[index].id;
          this.productCounts[boutiqueId] = response.totalProduitsActifs;
        }
      });
      
      this.cdr.detectChanges();
    } catch (err) {
      console.error('Erreur lors du chargement des compteurs:', err);
      // Restaurer les anciennes valeurs en cas d'erreur
      this.productCounts = previousCounts;
    } finally {
      this.isLoadingCounts = false;
    }
  }

  // Pour le mode "Toutes les boutiques"
  async loadAllProduitsPaginated(page: number = 0, size: number = 20): Promise<void> {
    this.showNoProductsMessage = false;
    if (!this.entrepriseId) {
      console.error('ID entreprise manquant');
      return;
    }

    this.isLoading = true;

    // Attendre que tous les compteurs soient chargés
    await this.loadAllBoutiquesCounts();

    this.produitService.getProduitsByEntrepriseIdPaginated(this.entrepriseId, page, size).subscribe({
      next: (response: ProduitEntreprisePaginatedResponse) => {
        this.tasks = response.content.map(prod => {
          const fullImageUrl = (prod.photo && prod.photo !== 'null' && prod.photo !== 'undefined')
            ? `${this.apiUrl}${prod.photo}`
            : '';

          return {
            ...prod,
            photo: fullImageUrl,
            createdAt: this.formatDate(prod.createdAt?.toString() || ''),
          } as Produit;
        });

        // Mettre à jour les informations de pagination
        this.currentPage = response.pageNumber;
        this.pageSize = response.pageSize;
        this.totalElements = response.totalElements;
        this.totalPages = response.totalPages;

        // this.currentPageEnterprise = response.pageNumber;
        // this.pageSizeEnterprise = response.pageSize;
        // this.totalElementsEnterprise = response.totalElements;

        this.dataSource.data = this.tasks;
        // syncPaginator() supprimé car plus nécessaire avec la pagination personnalisée
        
        this.showNoProductsMessage = this.tasks.length === 0;
        this.allProducts = [...this.tasks];
        this.resetFilters();
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Erreur :", err);
        this.showNoProductsMessage = this.tasks.length === 0;
        this.isLoading = false;
      }
    });
  }

// Pour le mode boutique
  loadProduitsPaginated(boutiqueId: number, page: number = 0, size: number = 20): void {
    this.showNoProductsMessage = false;
    
    if (!boutiqueId) {
      console.error('L\'ID de la boutique est manquant');
      return;
    }

    const boutique = this.boutiques.find(b => b.id === boutiqueId);
    if (boutique?.typeBoutique === 'ENTREPOT') {
      this.tasks = [];
      this.dataSource.data = [];
      this.productCounts[boutiqueId] = 0;
      this.showNoProductsMessage = true;
      this.isLoading = false;
      return;
    }

    this.isLoading = true;
    
    this.produitService.getProduitsEntreprisePaginated(boutiqueId, page, size).subscribe({
      next: (response: ProduitStockPaginatedResponse) => {
        this.tasks = response.content.map(prod => {
          // Mapper les produits
          const fullImageUrl = (prod.photo && prod.photo !== 'null' && prod.photo !== 'undefined')
            ? `${this.apiUrl}${prod.photo}`
            : '';

          let createdAt = '';
          if (prod.createdAt) {
            if (prod.createdAt.includes('à')) {
              const [datePart, timePart] = prod.createdAt.split(' à ');
              // format personnalisé si besoin
            } else {
              createdAt = new Date(prod.createdAt).toISOString();
            }
          }

          return {
            id: prod.id,
            codeGenerique: prod.codeGenerique || '',
            codeBare: prod.codeBare || '',
            nom: prod.nom || 'Nom inconnu',
            description: prod.description || '',
            prixVente: prod.prixVente || 0,
            prixAchat: prod.prixAchat || 0,
            quantite: prod.quantite || 0,
            seuilAlert: prod.seuilAlert || 0,
            enStock: prod.enStock || false,
            photo: fullImageUrl,
            nomCategorie: prod.nomCategorie || '',
            nomUnite: prod.nomUnite || '',
            createdAt: createdAt,
            categorieId: prod.categorieId || 0,
            uniteId: prod.uniteId || 0,
            typeProduit: prod.typeProduit || 'Non défini',
            boutiques: prod.boutiques || []
          } as Produit;
        });

        // Mettre à jour les informations de pagination
        this.currentPage = response.pageNumber;
        this.pageSize = response.pageSize;
        this.totalElements = response.totalElements;
        this.totalPages = response.totalPages;

        // this.currentPageBoutique = response.pageNumber;
        // this.pageSizeBoutique = response.pageSize;
        // this.totalElementsBoutique = response.totalElements;

        this.productCounts[boutiqueId] = response.totalProduitsActifs;

        this.dataSource.data = this.tasks;
        // Configuration du paginator supprimée car plus nécessaire avec la pagination personnalisée
        this.isLoading = false;
        this.allProducts = [...this.tasks];
        this.resetFilters();
        
        this.showNoProductsMessage = this.tasks.length === 0;
      },
      error: (err) => {
        this.isLoading = false;
        
        if (err.message === 'BOUTIQUE_DESACTIVEE') {
          this.showSuspendedBoutiqueDialog();
          this.selectedBoutique = this.previousSelectedBoutique;
          return;
        }
        console.error("Erreur :", err);
        this.showNoProductsMessage = this.tasks.length === 0;
      }
    });
  }

  // Charge les produits depuis le backend et effectue le mapping pour l'affichage
  loadProduits(boutiqueId: number, page: number = 0, size: number = 20): void {
    this.showNoProductsMessage = false;
    
    if (!boutiqueId) {
      console.error('L\'ID de la boutique est manquant');
      return;
    }

    const boutique = this.boutiques.find(b => b.id === boutiqueId);
    if (boutique?.typeBoutique === 'ENTREPOT') {
      this.tasks = [];
      this.dataSource.data = [];
      this.productCounts[boutiqueId] = 0;
      this.showNoProductsMessage = true;
      this.isLoading = false;
      return;
    }

    this.isLoading = true;
    
    this.produitService.getProduitsEntreprisePaginated(boutiqueId, page, size).subscribe({
      next: (response: ProduitStockPaginatedResponse) => {
        // Mapper les produits comme avant
        this.tasks = response.content.map(prod => {
          const fullImageUrl = (prod.photo && prod.photo !== 'null' && prod.photo !== 'undefined')
            ? `${this.apiUrl}${prod.photo}`
            : '';

          let createdAt = '';
          if (prod.createdAt) {
            if (prod.createdAt.includes('à')) {
              const [datePart, timePart] = prod.createdAt.split(' à ');
              // format personnalisé si besoin
            } else {
              createdAt = new Date(prod.createdAt).toISOString();
            }
          }

          return {
            id: prod.id,
            codeGenerique: prod.codeGenerique || '',
            codeBare: prod.codeBare || '',
            nom: prod.nom || 'Nom inconnu',
            description: prod.description || '',
            prixVente: prod.prixVente || 0,
            prixAchat: prod.prixAchat || 0,
            quantite: prod.quantite || 0,
            seuilAlert: prod.seuilAlert || 0,
            enStock: prod.enStock || false,
            photo: fullImageUrl,
            nomCategorie: prod.nomCategorie || '',
            nomUnite: prod.nomUnite || '',
            createdAt: createdAt,
            categorieId: prod.categorieId || 0,
            uniteId: prod.uniteId || 0,
            typeProduit: prod.typeProduit || 'Non défini',
            boutiques: prod.boutiques || []
          } as Produit;
        });

        // Mettre à jour les informations de pagination
        this.currentPage = response.pageNumber;
        this.pageSize = response.pageSize;
        this.totalElements = response.totalElements;
        this.totalPages = response.totalPages;

        this.productCounts[boutiqueId] = response.totalProduitsActifs;

        this.dataSource.data = this.tasks;
        // Configuration du paginator supprimée car plus nécessaire avec la pagination personnalisée
        this.isLoading = false;
        this.allProducts = [...this.tasks];
        this.resetFilters();
        
        this.showNoProductsMessage = this.tasks.length === 0;
      },
      error: (err) => {
        this.isLoading = false;
        
        if (err.message === 'BOUTIQUE_DESACTIVEE') {
          this.showSuspendedBoutiqueDialog();
          this.selectedBoutique = this.previousSelectedBoutique;
          return;
        }
        console.error("Erreur :", err);
        this.showNoProductsMessage = this.tasks.length === 0;
      }
    });
  }

  async rafraichirProduits(): Promise<void> {
    this.showNoProductsMessage = false;
    
    if (this.selectedBoutique) {
      this.loadProduitsPaginated(this.selectedBoutique.id, this.currentPage, this.pageSize);
    } else {
      // Rafraîchir les compteurs avant de charger les produits
      await this.loadAllBoutiquesCounts();
      this.loadAllProduitsPaginated(this.currentPage, this.pageSize);
    }
  }
  
  public showSuspendedBoutiqueDialog(): void {
    this.dialog.open(SuspendedBoutiqueDialogComponent, {
      width: '400px',
      disableClose: true,
      data: { 
        onClose: () => {
          // Forcer la mise à jour de l'affichage
          this.selectedBoutique = this.previousSelectedBoutique;
        }
      }
    });
  }
  
  // Ajoutez cette méthode si nécessaire
  private formatDate(dateStr: string): string {
    try {
      const [datePart, timePart] = dateStr.split(' à ');
      const [day, month, year] = datePart.split('-');
      const [hours, minutes] = timePart.split(':');
      return new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day),
        parseInt(hours),
        parseInt(minutes)
      ).toISOString();
    } catch {
      return new Date().toISOString();
    }
  }
  
  // Detail de produit 
  // openProductDetail(productId: number) {}

  openProduitDetail(productId: number): void {
    const boutiqueId = this.selectedBoutique?.id;
    this.router.navigate(['/detail-produit', productId], { 
      queryParams: { boutiqueId: boutiqueId } 
    });
  }
  
  // Méthode qui retourne l'image à afficher pour un produit
  getImageUrl(product: Produit): string {
    // Vérifier si une image est bien fournie
    if (product.photo && product.photo.trim() !== '') {
      return product.photo;
    } else {
      // Récupérer la première lettre du nom (par défaut 'P' si non défini)
      const firstLetter = product.nom ? product.nom.trim().charAt(0) : 'P';
      return this.generateInitialImage(firstLetter);
    }
  }

  // Méthode qui génère une image SVG (sous forme de Data URL) avec la première lettre du nom
  generateInitialImage(letter: string): string {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <rect width="100%" height="100%" fill="#0671e4ac"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="100" fill="#fff">
          ${letter.toUpperCase()}
        </text> 
      </svg>
    `;
    return 'data:image/svg+xml;base64,' + btoa(svg);
  }

  getBoutiqueNames(boutiques: any[] | undefined): string {
    if (!boutiques || boutiques.length === 0) return 'Aucune boutique';
    
    const maxDisplay = 2; // Nombre de boutiques à afficher avant troncature
    if (boutiques.length > maxDisplay) {
      const displayed = boutiques.slice(0, maxDisplay).map(b => b.nom);
      return `${displayed.join(', ')}, ...`; // Ajoute les points de suspension
    }
    return boutiques.map(b => b.nom).join(', ');
  }

  // Ajoutez cette méthode dans la classe ProduitsComponent
  // getBoutiqueTextColor(index: number, isActive: boolean): string {
  //   // Génère des couleurs différentes selon l'index
  //   const hue = (index * 137.508) % 360; // 137.508 pour une bonne répartition des couleurs
  //   return isActive ? '#ffffff' : `hsl(${hue}, 70%, 40%)`; // Texte blanc si actif, couleur vive sinon
  // }
  // sur html
  //  ? getBoutiqueTextColor(i, boutique.id === selectedBoutique?.id) : '#999'

  onDrop(event: CdkDragDrop<any[]>) {
    const previousIndex = this.boutiques.findIndex(boutique => boutique === event.item.data);
    const currentIndex = event.currentIndex;
    moveItemInArray(this.boutiques, previousIndex, currentIndex);
  }

  openExcelImportModal() {
    this.resetImportState();
    this.showExcelImportModal = true;
  }

  closeExcelImportModal() {
    this.showExcelImportModal = false;
    this.resetImportState();
  }

  resetImportState() {
    this.selectedFile = null;
    this.isImporting = false;
    this.importMessage = '';
    this.importSuccess = false;
    this.importErrors = [];
  }

  // Télécharger le modèle Excel
  downloadExcelTemplate() {
    // Création du workbook
    const wb = XLSX.utils.book_new();
    
    // Données du modèle
    const data = [
      // En-têtes avec mise en forme
      ['Nom produit*', 'Description', 'Catégorie*', 'Prix Vente*', 'Prix Achat*', 'Quantité*', 'Unité', 'Code Barre', 'Type Produit', 'Date Preemption', 'Seuil Alert'],
      // Ligne d'exemple
      ['T-Shirt', 'T-shirt en coton', 'Vêtements', 25.99, 15.50, 100, 'Pièce', 123456789, 'PHYSIQUE', '29-12-2026', 10],
      // Ligne de note explicative
      // ['', '', '', '', '', '', '', '', '', '', '']
    ];
    
    // Création de la worksheet avec les données
    const ws = XLSX.utils.aoa_to_sheet(data);
    
    // Largeurs de colonnes personnalisées
    const colWidths = [
      { wch: 20 }, // Nom produit
      { wch: 25 }, // Description
      { wch: 15 }, // Catégorie
      { wch: 12 }, // Prix Vente
      { wch: 12 }, // Prix Achat
      { wch: 10 }, // Quantité
      { wch: 10 }, // Unité
      { wch: 15 }, // Code Barre
      { wch: 12 }, // Type Produit
      { wch: 12 }, // Date preemption
      { wch: 12 }  // Seuil Alert
    ];
    ws['!cols'] = colWidths;
    
    // Ajout de la worksheet au workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Modèle Produits');
    
    // Génération du fichier
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
    // Téléchargement
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'modele-import-produits.xlsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  validateExcelDates(file: File): Promise<boolean> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Vérifier le format des dates (colonne 9)
        for (let i = 1; i < jsonData.length; i++) {
          const row = jsonData[i] as any[];
          if (row[9]) {
            if (!/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-\d{4}$/.test(row[9])) {
              resolve(false);
              return;
            }
          }
        }
        resolve(true);
      };
      reader.readAsArrayBuffer(file);
    });
  }

  // Gestion de la sélection de fichier
  async onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      // Vérifier la taille du fichier (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        this.importMessage = 'Le fichier est trop volumineux (max 5MB)';
        this.importSuccess = false;
        return;
      }
      
      // Vérifier l'extension
      const validExtensions = ['.xlsx', '.xls'];
      const extension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
      
      if (!validExtensions.includes(extension)) {
        this.importMessage = 'Format de fichier non supporté';
        this.importSuccess = false;
        return;
      }
      
      this.selectedFile = file;

      // Ajouter la validation
      const isValid = await this.validateExcelDates(file);
      if (!isValid) {
        this.importMessage = 'Format de date invalide. Utilisez dd-MM-yyyy';
        this.importSuccess = false;
        this.selectedFile = null;
        return;
      }
    }
  }

  uploadExcel() {
    if (!this.selectedFile || !this.entrepriseId) return;
    
    // this.isImporting = true;
    this.importMessage = '';
    this.importErrors = [];
    
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('entrepriseId', this.entrepriseId.toString());
    
    if (this.selectedBoutique?.id) {
      formData.append('boutiqueId', this.selectedBoutique.id.toString());
    }

      // Vérifier qu'au moins une boutique est sélectionnée
    if (this.selectedBoutiquesForImport.length === 0) {
      this.importMessage = "Veuillez sélectionner au moins une boutique";
      this.importSuccess = false;
      return;
    }
    
    this.produitService.importProduitsFromExcel(formData, this.selectedBoutiquesForImport).subscribe({
      next: (response: any) => {
        // this.isImporting = false;
        
        // Correction clé ici : utiliser 'count' au lieu de 'successCount'
        if (response.count > 0) {
          this.importSuccess = true;
          this.importMessage = `Importation réussie ! ${response.count} produits ajoutés.`;
        } else {
          this.importSuccess = false;
          this.importMessage = "Aucun produit ajouté";
        }
        
        if (response.errors) {
          this.importErrors = response.errors;
        }
        
        // Rafraîchir les données
        // setTimeout(() => {
        //   if (this.selectedBoutique) {
        //     this.loadProduits(this.selectedBoutique.id);
        //   } else {
        //     this.loadAllProduits();
        //   }
        // }, 2000);
        // Fermer le modal après 3 secondes seulement si l'import est réussi
        if (this.importSuccess) {
          setTimeout(() => {
            if (this.selectedBoutique) {
            this.loadProduits(this.selectedBoutique.id);
          } else {
            this.loadAllProduits();
            this.closeExcelImportModal();
          }
          }, 2000);
        }
      },
      error: (error) => {
        // this.isImporting = false;
        this.importSuccess = false;

        if (this.importMessage.includes('Date') || this.importMessage.includes('Preemption')) {
          this.importMessage += '. Format de date invalide. Utilisez dd-MM-yyyy.';
        }
        
        // Gestion améliorée des erreurs
        if (error.error) {
          if (error.error.error) {
            this.importMessage = error.error.error;
          } else if (error.error.message) {
            this.importMessage = error.error.message;
          }
          
          if (error.error.errors) {
            this.importErrors = error.error.errors;
          }
        } else {
          this.importMessage = 'Erreur inconnue lors de l\'importation';
        }
      }
    });
  }

  toggleBoutiqueSelection(id: number): void {
    const index = this.selectedBoutiquesForImport.indexOf(id);
    if (index === -1) {
      this.selectedBoutiquesForImport.push(id);
    } else {
      this.selectedBoutiquesForImport.splice(index, 1);
    }
  }

  toggleAllBoutiques(): void {
    if (this.isAllBoutiquesSelected) {
      this.selectedBoutiquesForImport = [];
    } else {
      this.selectedBoutiquesForImport = this.boutiques
        .filter(b => b.actif)
        .map(b => b.id);
    }
    this.isAllBoutiquesSelected = !this.isAllBoutiquesSelected;
  }

  // Méthodes pour gérer le panel
  toggleBoutiqueSelectionPanel(): void {
    this.showBoutiqueSelectionPanel = !this.showBoutiqueSelectionPanel;
  }

  areAllBoutiquesSelected(): boolean {
    return this.boutiques.length > 0 && 
          this.boutiques.every(b => this.selectedBoutiquesForImport.includes(b.id));
  }

  toggleSelectAllBoutiques(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.selectedBoutiquesForImport = this.boutiques.map(b => b.id);
    } else {
      this.selectedBoutiquesForImport = [];
    }
  }

  confirmBoutiqueSelection(): void {
    this.toggleBoutiqueSelectionPanel();
  }

  getSelectedBoutiquesText(): string {
    if (this.selectedBoutiquesForImport.length === 0) {
      return '';
    }

    if (this.selectedBoutiquesForImport.length === this.boutiques.length) {
      return 'Toutes les boutiques';
    }

    const selectedNames = this.boutiques
      .filter(b => this.selectedBoutiquesForImport.includes(b.id))
      .map(b => b.nomBoutique);

    return selectedNames.join(', ');
  }
  
  get boutiquesSansEntrepots(): any[] {
    return this.boutiques?.filter(b => b.typeBoutique !== 'ENTREPOT') || [];
  }

  get boutiquesActivesSansEntrepots(): Boutique[] {
    return this.boutiques?.filter(b => b.typeBoutique !== 'ENTREPOT' && b.actif) || [];
  }

  get totalAllProducts(): number {
    if (this.isLoadingCounts) return 0;
    if (!this.boutiquesActivesSansEntrepots.length) return 0;
    
    return this.boutiquesActivesSansEntrepots
      .map(b => this.productCounts[b.id] || 0)
      .reduce((acc, curr) => acc + curr, 0);
  }

  fetchCategories(): void {
    this.categorieService.getCategories().pipe(
      catchError(err => {
        console.error("Erreur de chargement des catégories", err);
        return [];
      })
    ).subscribe((data: Categorie[]) => {
      this.categories = data.map((cat: Categorie) => ({
        ...cat,
        selected: false
      }));
    });
  }

  get isAnySelected(): boolean {
    return this.categories.some(cat => cat.selected);
  }
  onCheckboxChange(): void {
    // Juste pour déclencher la détection de changement
  }
  cancelSelection(): void {
  if (this.isAnySelected) {
    // Si y a des cochés, décocher tout
    this.categories.forEach(cat => cat.selected = false);
  } else {
    // Sinon fermer popup
    this.isPopupVisible = false;
  }
}

  @ViewChild('popupContainer') popupContainer!: ElementRef;
  // Masque le dropdown si l'utilisateur clique en dehors
 @HostListener('document:click', ['$event'])
  _onClickOutside(event: MouseEvent) {
    if (this.isPopupVisible && this.popupContainer && !this.popupContainer.nativeElement.contains(event.target)) {
      this.isPopupVisible = false;
    }
  }

successMessage: string | null = null;
errorMessageApi: string | null = null;

togglePopup(): void {
  this.successMessage = null;
  this.errorMessageApi = null;
  this.isPopupVisible = !this.isPopupVisible;
}

deleteSelection(): void {
  // Réinitialiser les messages avant chaque action
  this.successMessage = null;
  this.errorMessageApi = null;

  const selectedIds = this.categories.filter(c => c.selected && c.id !== undefined).map(c => c.id!);
  console.log("🔴 À supprimer :", selectedIds);

  if (selectedIds.length === 0) {
    this.errorMessageApi = "Veuillez sélectionner au moins une catégorie.";
    this.clearMessagesAfterDelay();
    return;
  }

  if (selectedIds.length > 1) {
    this.errorMessageApi = "Vous ne pouvez supprimer qu'une seule catégorie à la fois.";
    this.clearMessagesAfterDelay();
    return;
  }

  const idToDelete = selectedIds[0];

  this.categorieService.deleteCategorie(idToDelete).subscribe({
    next: (message: string) => {
      this.successMessage = message || "Catégorie supprimée avec succès.";
      this.errorMessageApi = null;

      this.categories = this.categories.filter(c => c.id !== idToDelete);
      this.isPopupVisible = false;

      this.clearMessagesAfterDelay();
    },
    error: (error) => {
      this.successMessage = null;

      if (error.error && typeof error.error === 'string') {
        this.errorMessageApi = error.error;
      } else if (error.status === 403) {
        this.errorMessageApi = "Accès refusé. Seuls les administrateurs ou managers peuvent supprimer une catégorie.";
      } else if (error.status === 409) {
        this.errorMessageApi = "Cette catégorie contient des produits. Veuillez d'abord les supprimer.";
      } else {
        this.errorMessageApi = "Erreur inattendue lors de la suppression.";
      }

      this.clearMessagesAfterDelay();
    }
  });
}

private clearMessagesAfterDelay(): void {
  setTimeout(() => {
    this.successMessage = null;
    this.errorMessageApi = null;
  }, 4000); // 4 secondes
}







}
