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
import { ProduitService } from '../SERVICES/produit.service';
import { Produit } from '../MODELS/produit.model';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import autoTable from 'jspdf-autotable';
import { UsersService } from '../SERVICES/users.service';
import { CustomNumberPipe } from '../MODELS/customNumberPipe';
import { MatDialog } from '@angular/material/dialog';
import { SuspendedBoutiqueDialogComponent } from './suspended-boutique-dialog.component';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { environment } from 'src/environments/environment';

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
    MatPaginatorModule,
    CustomNumberPipe,
    DragDropModule,
  ],
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
  boutiqueId!: number;
  private backendUrl = environment.apiBaseUrl;
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
  totalAllProducts: number = 0;

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

  // Pagination et tableau de données
  dataSource = new MatTableDataSource<Produit>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize = 5;
  currentPage = 0;
  // Dropdown pour l'export
  showExportDropdown = false;
  // Gestion de l'image uploadée
  urllink: string = "assets/img/appareil.jpg";
  newPhotoUrl: string | null = null;
  // selectedFile: File | null = null;
  entrepriseId: number | null = null;
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
    // this.getUserBoutiqueId();
    this.getUserInfo();
    // this.selectBoutique(null);

    // this.loadProduits();
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

  // Gestion de la pagination
  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

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

  // Récupère les informations utilisateur et stocke les données dans le localStorage
  getUserInfo(): void {
     
    this.usersService.getUserInfo().subscribe({
      next: (user) => {
        console.log('Données reçues:', user);
        localStorage.setItem('user', JSON.stringify(user));
        this.userName = user.nomComplet;
        this.nomEntreprise = user.nomEntreprise;
        // this.boutiques = user.boutiques;
        this.boutiques = user.boutiques ?? []; 
  
        // Récupération de l'ID entreprise
        this.entrepriseId = user.entrepriseId;

        this.selectBoutique(null);
  
        if (!this.entrepriseId) {
          console.error('Aucun ID entreprise trouvé !');
          return;
        }

        if (this.selectedBoutique) {
          const boutiqueId = this.selectedBoutique.id;
          
        }
        this.allProducts = [...this.tasks];
  
        // if (this.boutiques.length > 0) {
        //   this.selectedBoutique = this.boutiques[0];
        //   this.loadProduits(this.selectedBoutique.id);
        // }
  
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


  // Ajoutez cette méthode pour changer de boutique
  selectBoutique(boutique: any | null): void {
    if (boutique && !boutique.actif) {
      this.showSuspendedBoutiqueDialog();
      return;
    }
  
    this.previousSelectedBoutique = this.selectedBoutique;
  
    if (boutique === null) {
      this.selectedBoutique = boutique;
      this.boutiqueActuelle = "Toutes les boutiques";
      this.loadAllProduits();
    } else {
      console.log("Boutique sélectionnée:", boutique); // 🛠 Debug ici
      this.selectedBoutique = boutique;
      this.boutiqueActuelle = boutique.nomBoutique ? boutique.nomBoutique : "Boutique sans nom"; // ✅ Correction ici
      this.loadProduits(boutique.id);
    }
    
    this.currentPage = 0;
    console.log("Boutique actuelle:", this.boutiqueActuelle);
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
        this.tasks = produits.map(prod => {
          // Reprenez ici la même logique de mapping que dans loadProduits()
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
        produits.forEach(prod => {
          if (prod.boutiques) {
            prod.boutiques.forEach(b => {
              counts[b.id] = (counts[b.id] || 0) + 1;
            });
          }
        });
        this.productCounts = counts;
        this.totalAllProducts = produits.length;

        this.dataSource.data = this.tasks;
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
        
        this.showNoProductsMessage = this.tasks.length === 0;
        this.allProducts = [...this.tasks]; // <-- Ajouter cette ligne
        this.resetFilters(); // <-- Réinitialiser les filtres
      },
      error: (err) => {
         // Ajouter cette ligne
        console.error("Erreur :", err);
        this.showNoProductsMessage = this.tasks.length === 0;
      }
    });
  }

  // Charge les produits depuis le backend et effectue le mapping pour l'affichage
  loadProduits(boutiqueId: number): void {
    
    this.showNoProductsMessage = false;
    if (!boutiqueId) {
      console.error('L\'ID de la boutique est manquant');
      return;
    }

    this.produitService.getProduitsEntreprise(boutiqueId).subscribe({
      next: (produits: Produit[]) => {
        this.tasks = produits.map(prod => {
          // Conversion de la photo
          const fullImageUrl = (prod.photo && prod.photo !== 'null' && prod.photo !== 'undefined')
            ? `${this.apiUrl}${prod.photo}`
            : '';

          // Conversion de la date
          let createdAt = '';
          if (prod.createdAt) {
            if (prod.createdAt.includes('à')) {
              // Format français "jj-mm-yyyy à hh:mm"
              const [datePart, timePart] = prod.createdAt.split(' à ');
              // ... (votre code actuel)
            } else {
              // Si c'est une date ISO (ex: "2024-05-20T12:34:56Z")
              createdAt = new Date(prod.createdAt).toISOString();
            }
          }

          // Mapping complet
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
        }).sort((a, b) => {
          const dateA = new Date(a.createdAt ?? new Date().toISOString()).getTime();
          const dateB = new Date(b.createdAt ?? new Date().toISOString()).getTime();
          return dateB - dateA;
        })

        this.productCounts[boutiqueId] = produits.length;

        this.dataSource.data = this.tasks;
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
        this.isLoading = false;
        this.allProducts = [...this.tasks];
        this.resetFilters();
        
        this.showNoProductsMessage = this.tasks.length === 0;
      },
      error: (err) => {
        this.isLoading = false;
        
        if (err.message === 'BOUTIQUE_DESACTIVEE') {
          this.showSuspendedBoutiqueDialog();
          // Réinitialiser la sélection à la précédente
          this.selectedBoutique = this.previousSelectedBoutique;
          return;
        }
        console.error("Erreur :", err);
        this.showNoProductsMessage = this.tasks.length === 0;
      }
    });
  }

  rafraichirProduits(): void {
    this.showNoProductsMessage = false;
    if (!this.selectedBoutique?.id) return;

    this.isLoading = true;
    const start = Date.now();

    this.produitService.getProduitsEntreprise(this.selectedBoutique.id).subscribe({
      next: (produits: Produit[]) => {
        const elapsed = Date.now() - start;
        const delay = Math.max(500 - elapsed, 0); // minimum 500 ms

        setTimeout(() => {
          // Traitement des produits (ton code actuel)
          this.tasks = produits.map(prod => {
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
          }).sort((a, b) => {
            const dateA = new Date(a.createdAt ?? new Date().toISOString()).getTime();
            const dateB = new Date(b.createdAt ?? new Date().toISOString()).getTime();
            return dateB - dateA;
          });

          this.dataSource.data = this.tasks;
          if (this.paginator) {
            this.dataSource.paginator = this.paginator;
          }

          this.isLoading = false;
          this.allProducts = [...this.tasks];
          this.applyFilters();
        }, delay); 
      },
      error: (err) => {
        this.isLoading = false;
        
        if (err.message === 'BOUTIQUE_DESACTIVEE') {
          this.showSuspendedBoutiqueDialog();
          this.selectedBoutique = this.previousSelectedBoutique;
        } else {
          console.error("Erreur :", err);
        }
      }
    });
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
    const template = `
      | Nom produit* | Description | Catégorie* | Prix Vente* | Prix Achat* | Quantité* | Unité | Code Barre | Type Produit | Seuil Alert |
      |--------------|-------------|------------|------------|------------|----------|-------|------------|--------------|-------------|
      | Ex: T-Shirt  |             | Vêtements  | 25.99      | 15.50      | 100      | Pièce | 123456789  | PHYSIQUE     | 10          |
    `;

    const blob = new Blob([template], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'modele-import-produits.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  // Gestion de la sélection de fichier
  onFileSelected(event: any) {
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
    }
  }

  uploadExcel() {
    if (!this.selectedFile || !this.entrepriseId) return;
    
    this.isImporting = true;
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
        this.isImporting = false;
        
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
        this.isImporting = false;
        this.importSuccess = false;
        
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

  
}
