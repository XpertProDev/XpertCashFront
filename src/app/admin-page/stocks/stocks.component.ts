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
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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
  logoEntreprise: string = '';
  stocks: any[] = [];
  errorMessage: string = '';
  totalQuantity: number = 0;
  totalPrice: number = 0;

  // Pagination
  pageSize = 5;
  currentPage = 0;
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
        // Map stocks data and enrich them with additional product details
        this.stocks = data.map(stock => ({
          ...stock,
          produit: {
            ...stock.produit,
            codeProduit: stock.produit?.codeProduit || 'Code inconnu',
            nomProduit: stock.produit?.nomProduit || 'Nom inconnu',
            photo: stock.produit?.photo ? `http://localhost:8080${stock.produit.photo}` : 'assets/img/lait.jpeg',
            prix: stock.produit?.prix || 0,
            prixAchat: stock.produit?.prixAchat || 0,
            alertSeuil: stock.produit?.alertSeuil || 0,
            category: stock.produit?.category || { nomCategory: 'Catégorie inconnue' },
          }
        }));
        
        this.calculateTotals();
        this.stocks = this.stocks.reverse(); // Inverser pour afficher les derniers en premier
        

        // Mettre à jour le DataSource avec les stocks et activer la pagination
        this.dataSource = new MatTableDataSource(this.stocks);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        this.errorMessage = error.message || 'Erreur lors de la récupération du stock';
        console.error(this.errorMessage);
      }
    );
    
    this.usersService.getUserInfo().subscribe({
      next: (userInfo) => {
        this.nomEntreprise = userInfo.nomEntreprise;
        this.adresseEntreprise = userInfo.adresseEntreprise;
        this.logoEntreprise = userInfo.logoEntreprise;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération d\'info entreprise', err);
      }
    });
  }

  openImage(imageUrl: string): void {
    this.imagePopup = imageUrl;
  }
  
  closeImage(): void {
    this.imagePopup = null;
  }

  downloadExcel() {}

  downloadCSV() {}
  // Calcul des Totaux : Quantité Totale et Prix Total
  calculateTotals() {
    // Afficher les données pour diagnostiquer le problème
    console.log('Stocks:', this.stocks);
  
    // Calcul de la quantité totale avec gestion des valeurs nulles ou indéfinies
    this.totalQuantity = this.stocks.reduce((acc: number, stock: { quantite: number }) => {
      const quantite = stock.quantite || 0; // S'assurer que quantite est valide
      console.log(`Quantité: ${quantite}`); // Vérifier chaque quantité
      return acc + quantite;
    }, 0);
  
    // Calcul du prix total avec vérification des données
    this.totalPrice = this.stocks.reduce((acc: number, stock: { produit: { prix: number }, quantite: number }) => {
      const prix = stock.produit.prix || 0; // S'assurer que prix est valide
      const quantite = stock.quantite || 0; // S'assurer que quantite est valide
      console.log(`Prix: ${prix}, Quantité: ${quantite}`); // Vérifier chaque prix et quantité
      return acc + (prix * quantite);
    }, 0);
    
    console.log(`Total Quantité: ${this.totalQuantity}`);
    console.log(`Total Prix: ${this.totalPrice}`);
  }
  

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

  // Recherche dans le tableau avec highlight
  highlightMatch(text: string): string {
    if (!this.searchText) return text;
    const regex = new RegExp(`(${this.searchText})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  }

  // Filtrer les stocks en fonction du texte de recherche
  filteredStocks(): any[] {
    const sortedStocks = [...this.stocks].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    const filtered = sortedStocks.filter(stock =>
      stock.produit.nomProduit?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      stock.produit.codeProduit?.toLowerCase().includes(this.searchText.toLowerCase())
    );

    // Paginer les résultats filtrés
    const startIndex = this.currentPage * this.pageSize;
    return filtered.slice(startIndex, startIndex + this.pageSize);
  }

  // Mise à jour de la pagination
  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  // Méthode pour générer le PDF
  downloadPDF() {
    if (!this.stocks || this.stocks.length === 0) {
      console.error("Aucun stock à afficher dans le PDF !");
      return;
    }

    const doc = new jsPDF();

    // Définir l'URL du logo
    const logoUrl = this.logoEntreprise ? `http://localhost:8080/logoUpload/${this.logoEntreprise}` : `http://localhost:8080/logoUpload/651.jpg`;

    // Récupérer les informations de l'entreprise
    const entreprise = this.nomEntreprise || "Nom non disponible";
    const adress = this.adresseEntreprise || "Adresse non disponible";

    const dateGenerated = new Date();
    const formattedDate = dateGenerated.toLocaleString();

    // Calculer les Totaux
    this.calculateTotals();

    // Ajouter le logo au PDF
    this.getImageBase64(logoUrl).then((logoBase64) => {
      doc.addImage(logoBase64, 'PNG', 14, 5, 30, 30);
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.text(`Nom de l'entreprise: ${entreprise}`, 60, 20);
      doc.text('Stocks', 60, 30);

      // Ajouter les totaux
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.text(`Quantité Totale: ${this.totalQuantity}`, 140, 25);
      doc.setTextColor(255, 0, 0);
      doc.text(`Prix Total: ${this.totalPrice.toFixed(2)} €`, 140, 30);
      doc.setTextColor(0, 0, 0);

      // Tableau des stocks
      const columns = ['Code', 'Nom du produit', 'Catégorie', 'Description', 'Prix', 'Quantité'];
      const rows = this.filteredStocks().map(stock => [
        stock.produit.codeProduit,
        stock.produit.nomProduit,
        stock.produit.category?.nomCategory || 'Catégorie inconnue',
        stock.produit.description || 'Description non disponible',
        stock.produit.prix,
        stock.quantite
      ]);

      autoTable(doc, {
        head: [columns],
        body: rows,
        startY: 40,
        theme: 'grid',
        headStyles: { fillColor: [100, 100, 255], textColor: [255, 255, 255], fontSize: 12 },
        bodyStyles: { fontSize: 10 }
      });

      // Ajouter un pied de page
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.text(`Adresse: ${adress}`, 14, 180);
      doc.text(`Date de génération: ${formattedDate}`, 14, 190);

      // Sauvegarder le PDF
      doc.save('Facture_des_produits.pdf');
    }).catch((error) => {
      console.error("Erreur lors du chargement du logo :", error);
    });
  }

  // Charger l'image en base64
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
}

