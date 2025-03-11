import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
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
import { ColorFormats } from 'ngx-color-picker/lib/formats';

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
  ],
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
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

  // Dropdown pour l'export
  showExportDropdown = false;

  // Gestion de l'image uploadée
  urllink: string = "assets/img/appareil.jpg";
  newPhotoUrl: string | null = null;
  selectedFile: File | null = null;

  constructor(
    private categorieService: CategorieService,
    private produitService: ProduitService,
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService,
  ) {}

  ngOnInit(): void {
    this.getUserBoutiqueId();
    this.getUserInfo();
    this.loadProduits();
  }

  goToAddProduit() {
    this.router.navigate(['/addProduit']);
  }

  // Permet de mettre en évidence le texte recherché
  highlightMatch(text: string): string {
    if (!this.searchText) return text;
    const regex = new RegExp(`(${this.searchText})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
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
      doc.text('Liste des produits', 60, 30);
      doc.setLineWidth(0.5);
      doc.line(14, 35, 195, 35);
      
      const columns = ['Code', 'Nom produit', 'Description', 'Catégorie', 'Prix vente', 'Prix achat', 'En Stock', 'Unite', 'Seuil Alert'];
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
        task.nomCategorie ? `${task.nomCategorie}` : 'Non catégorie',
        task.prixVente ?? 0,
        task.prixAchat ?? 0,
        task.quantite ?? 0,
        task.nomUnite ? `${task.nomUnite}` : 'Non Unité',
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
        this.boutiqueName = user.boutiques[0].nomBoutique || 'Nom de la boutique non trouvé';
        this.addressBoutique = user.boutiques[0].adresse|| 'Adresse de la boutique non trouvé';
  
        const boutiqueId = this.usersService.getUserBoutiqueId();
        if (boutiqueId) {
          this.loadProduits();
        } else {
          console.error("L'ID de la boutique est manquant");
        }
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des informations utilisateur :", err);
      }
    });
  }

  // Charge les produits depuis le backend et effectue le mapping pour l'affichage
  loadProduits(): void {
    const boutiqueId = this.usersService.getUserBoutiqueId();
    if (!boutiqueId) {
      console.error('L\'ID de la boutique est manquant');
      return;
    }
    this.produitService.getProduitsEntreprise(boutiqueId).subscribe({
      next: (produits: Produit[]) => {
        console.log('Produits récupérés:', produits);
        this.tasks = produits.map(prod => {
          // const fullImageUrl = `http://localhost:8080${prod.photo}`;
          const fullImageUrl = (prod.photo && prod.photo !== 'null' && prod.photo !== 'undefined')
          ? `http://localhost:8080${prod.photo}`
          : '';
          console.log('Image URL:', fullImageUrl);

          // Vérifier si `createdAt` est défini
          let createdAtDate: Date | null = null;
          if (prod.createdAt) {
            const cleanedDateStr = prod.createdAt.replace(' à ', ' '); // Remplacer "à" par un espace
            const dateParts = cleanedDateStr.match(/^(\d{2})-(\d{2})-(\d{4}) (\d{2}):(\d{2})$/);
            
            if (dateParts) {
              const [, day, month, year, hours, minutes] = dateParts.map(Number);
              createdAtDate = new Date(year, month - 1, day, hours, minutes);
            } else {
              console.warn("Format de date invalide pour:", prod.createdAt);
            }
          }
          console.log("Date récupérée:", prod.createdAt);

          return {
            id: prod.id,
            codeGenerique: prod.codeGenerique || '',
            codeBare: prod.codeBare || 'Non numéro code barre',
            nom: prod.nom || 'Nom inconnu',
            description: prod.description || 'Non description',
            prixVente: prod.prixVente || 0,
            prixAchat: prod.prixAchat || 0,
            quantite: prod.quantite || 0,
            seuilAlert: prod.seuilAlert || 0,
            enStock: prod.enStock || false,
            photo: fullImageUrl,
            nomCategorie: prod.nomCategorie || 'Non catégorie',
            nomUnite: prod.nomUnite || 'Non unité',
            createdAt: prod.createdAt || new Date().toISOString(),
            categorieId: prod.categorieId,
            uniteId: prod.uniteId 
          };
        })
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        
        
        this.dataSource.data = this.tasks;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des produits", err);
      }
    });
  }
  
  // Detail de produit 
  // openProductDetail(productId: number) {}

  openProduitDetail(productId: number): void {
    this.router.navigate(['/detail-produit', productId]);
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
      <rect width="100%" height="100%" fill="#f0f0f0"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="100" fill="#333">
        ${letter.toUpperCase()}
      </text>
    </svg>
  `;
  return 'data:image/svg+xml;base64,' + btoa(svg);
}

  
}
