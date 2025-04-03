import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
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
import { StockService } from '../SERVICES/stocks.service';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import autoTable from 'jspdf-autotable';
import { ChangeDetectorRef } from '@angular/core';
import { CustomNumberPipe } from '../MODELS/customNumberPipe';
import { MatDialog } from '@angular/material/dialog';
import { SuspendedBoutiqueDialogComponent } from '../produits/suspended-boutique-dialog.component';


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
      RouterLink,
      CustomNumberPipe
  ],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.scss'
})
export class StocksComponent implements OnInit {
  boutiqueId!: number;
  backendUrl: string = 'http://localhost:8080';
  searchText: string = '';
  tasks: Produit[] = [];
  imagePopup: string | null = null;
  nomEntreprise: string = '';
  adresseEntreprise: string = '';
  logoEntreprise: string = '';
  userName: string = '';
  boutiqueName: string = '';
  addressBoutique : string = '';

  // Pagination et tableau de données
  dataSource = new MatTableDataSource<Produit>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize = 5;
  currentPage = 0;

  selectedBoutique: any = null;
  boutiques: any[] = [];

  // Dropdown pour l'export
  showExportDropdown = false;

  // Gestion de l'image uploadée
  urllink: string = "assets/img/appareil.jpg";
  newPhotoUrl: string | null = null;
  selectedFile: File | null = null;
  showDescription: boolean = false;

  constructor(
    private categorieService: CategorieService,
    private produitService: ProduitService,
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getUserBoutiqueId();
    this.getUserInfo();
    // this.loadProduits();
  }


  // Permet de mettre en évidence le texte recherché
  highlightMatch(text: string): string {
    if (!this.searchText) return text;
    const regex = new RegExp(`(${this.searchText})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  // Retourne la liste filtrée et paginée des produits
  filteredProducts(): Produit[] {
    const sortedProducts = [...this.tasks].sort((a, b) => {
      const dateA = new Date(a.createdAt || new Date()).getTime();
      const dateB = new Date(b.createdAt || new Date()).getTime();

      return dateB - dateA;
    });
    const filtered = sortedProducts.filter(product =>
      (product.nom && product.nom.toLowerCase().includes(this.searchText.toLowerCase())) ||
      (product.codeGenerique && product.codeGenerique.toLowerCase().includes(this.searchText.toLowerCase()))
    );
    const startIndex = this.currentPage * this.pageSize;
    return filtered.slice(startIndex, startIndex + this.pageSize);
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
      ? `${this.backendUrl}/logoUpload/${this.logoEntreprise}`
      : `${this.backendUrl}/logoUpload/651.jpg`;
    const entreprise = this.nomEntreprise || "Nom non disponible";
    
    this.getImageBase64(logoUrl).then((logoBase64) => {
      doc.addImage(logoBase64, 'PNG', 14, 5, 30, 30);
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.text(`Nom de l'entreprise: ${entreprise}`, 60, 20);
      doc.text('Liste des produits en Stock', 60, 30);
      doc.setLineWidth(0.5);
      doc.line(14, 35, 195, 35);
      
      const columns = ['Code', 'Nom produit', 'Description', 'Catégorie', 'Quantité'];
      const startIndex = this.currentPage * this.pageSize;
      const pageTasks = this.tasks.slice(startIndex, startIndex + this.pageSize);
      
      if (!Array.isArray(pageTasks) || pageTasks.length === 0) {
        console.error("Aucun produit trouvé sur cette page !");
        return;
      }
      
      const rows = pageTasks.map(task => [
        task.codeGenerique || '',
        task.nom || '',
        task.description || '',
        task.nomCategorie ? `Catégorie ${task.nomCategorie}` : 'Catégorie inconnue',
        //task.prixVente ?? 0,
        task.quantite ?? 0
      ]);
      
      
      autoTable(doc, {
        head: [columns],
        body: rows,
        startY: 40,
        theme: 'grid',
        headStyles: { fillColor: [100, 100, 255], textColor: [255, 255, 255], fontSize: 12 },
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
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.newPhotoUrl = e.target?.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

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
        localStorage.setItem('user', JSON.stringify(user));
        this.userName = user.nomComplet;
        this.nomEntreprise = user.nomEntreprise;
        this.boutiques = user.boutiques; // Récupération de toutes les boutiques
        
        // Sélectionner la première boutique par défaut
        if (this.boutiques.length > 0) {
          this.selectedBoutique = this.boutiques[0];
          this.boutiqueName = this.selectedBoutique.nomBoutique;
          this.addressBoutique = this.selectedBoutique.adresse;
          this.loadProduits(this.selectedBoutique.id);
        }
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des informations utilisateur :", err);
      }
    });
  }

  // Charge les produits depuis le backend et effectue le mapping pour l'affichage
  loadProduits(boutiqueId: number): void {
    // const boutiqueId = this.usersService.getUserBoutiqueId();
    if (!boutiqueId) {
      console.error("L'ID de la boutique est manquant");
      return;
    }
    this.produitService.getProduitsEntreprise(boutiqueId).subscribe({
      next: (produits: Produit[]) => {
        console.log("Produits récupérés:", produits);

        this.tasks = produits
          .filter(prod => prod.enStock) // Garder seulement les produits en stock
          .map(prod => {
            // const fullImageUrl = prod.photo && prod.photo !== "null" && prod.photo !== "undefined" ? `http://localhost:8080${prod.photo}` : "";
          // Vérifier si la photo est valide
          const hasPhoto = prod.photo && prod.photo !== 'null' && prod.photo !== 'undefined';
          const fullImageUrl = hasPhoto ? `http://localhost:8080${prod.photo}` : '';

            return {
              id: prod.id,
              codeGenerique: prod.codeGenerique || "",
              codeBare: prod.codeBare || "Non numéro code barre",
              nom: prod.nom || "Nom inconnu",
              description: prod.description || "Non description",
              prixVente: prod.prixVente || 0,
              prixAchat: prod.prixAchat || 0,
              quantite: prod.quantite || 0,
              seuilAlert: prod.seuilAlert || 0,
              enStock: prod.enStock || false,
              // photo: fullImageUrl,
              photo: fullImageUrl ? fullImageUrl : this.generateLetterAvatar(prod.nom),
              nomCategorie: prod.nomCategorie || "Non catégorie",
              nomUnite: prod.nomUnite || "Non unité",
              createdAt: prod.createdAt || new Date().toISOString(), // Assurer une valeur par défaut
              categorieId: prod.categorieId,
              uniteId: prod.uniteId,
              boutiqueId: prod.boutiqueId,
            };
          })
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

        this.dataSource.data = this.tasks;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des produits", err);
      },
    });
  }

  // Ajoute cette méthode pour la sélection des boutiques
  // selectBoutique(boutique: any): void {
  //   this.selectedBoutique = boutique;
  //   this.boutiqueName = boutique.nomBoutique;
  //   this.addressBoutique = boutique.adresse;
  //   this.loadProduits(boutique.id);
  //   this.currentPage = 0; // Réinitialiser la pagination
  // }

  selectBoutique(boutique: any | null): void {
    if (boutique && !boutique.actif) {
      this.showSuspendedBoutiqueDialog();
      return; // Ne pas changer la sélection si la boutique est désactivée
    }
  
    this.selectedBoutique = boutique;
  
    if (boutique === null) {
      // Charger tous les produits en stock de l'entreprise
      this.loadAllProduits();
    } else {
      // Charger les produits pour la boutique sélectionnée
      this.boutiqueName = boutique.nomBoutique;
      this.addressBoutique = boutique.adresse;
      this.loadProduits(boutique.id);
    }
    this.currentPage = 0;
  }

  loadAllProduits(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const entrepriseId = user.entrepriseId;
    if (!entrepriseId) {
      console.error('ID entreprise manquant');
      return;
    }
  
    // Adaptez cette requête selon votre service pour obtenir tous les produits de l'entreprise
    this.produitService.getProduitsByEntrepriseId(entrepriseId).subscribe({
      next: (produits: Produit[]) => {
        this.tasks = produits
          .filter(prod => prod.enStock)  // seulement les produits en stock
          .map(prod => {
            const hasPhoto = prod.photo && prod.photo !== 'null' && prod.photo !== 'undefined';
            const fullImageUrl = hasPhoto ? `${this.backendUrl}${prod.photo}` : '';
            return {
              ...prod,
              photo: fullImageUrl ? fullImageUrl : this.generateLetterAvatar(prod.nom)
            };
          }).sort((a, b) => {
            const dateA = new Date(a.createdAt ?? new Date().toISOString()).getTime();
            const dateB = new Date(b.createdAt ?? new Date().toISOString()).getTime();
            return dateB - dateA;
          });
  
        this.dataSource.data = this.tasks;
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
      },
      error: (err) => console.error("Erreur lors de la récupération des produits", err),
    });
  }
  
  

  generateLetterAvatar(nom: string): string {
    const letter = nom ? nom.charAt(0).toUpperCase() : '?';
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <rect width="100" height="100" fill="#0671e4ac"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#fff" font-size="50">${letter}</text>
      </svg>
    `;
    // Encodage du SVG en base64 pour pouvoir l'utiliser comme data URL
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  }


  openStockDetail(productId: number): void {
    this.router.navigate(['/detail-stock', productId]);
  }

  // Ajoutez cette méthode dans la classe ProduitsComponent
  // getBoutiqueTextColor(index: number, isActive: boolean): string {
  //   // Génère des couleurs différentes selon l'index
  //   const hue = (index * 137.508) % 360; // 137.508 pour une bonne répartition des couleurs
  //   return isActive ? '#ffffff' : `hsl(${hue}, 70%, 40%)`; // Texte blanc si actif, couleur vive sinon
  // }
  //  ? getBoutiqueTextColor(i, boutique.id === selectedBoutique?.id) : '#999'

  public showSuspendedBoutiqueDialog(): void {
    this.dialog.open(SuspendedBoutiqueDialogComponent, {
      width: '400px',
      disableClose: true,
      data: { 
        onClose: () => {
          // Vous pouvez ici remettre à null ou conserver la boutique précédemment sélectionnée
          this.selectedBoutique = null;
        }
      }
    });
  }
  
  
  
}
