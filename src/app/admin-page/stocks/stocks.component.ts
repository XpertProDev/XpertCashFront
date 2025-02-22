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
  logoEntreprise: string ='';
  stocks: any = [];
  errorMessage: string = '';
  totalQuantity: number = 0;
  totalPrice: number = 0;
  
  calculateTotals() {
    this.totalQuantity = this.stocks.reduce((acc: any, stock: { quantite: any; }) => acc + stock.quantite, 0);
    this.totalPrice = this.stocks.reduce((acc: number, stock: { produit: { prix: number; }; quantite: number; }) => acc + (stock.produit.prix * stock.quantite), 0);
  }


  downloadExcel() {}

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
        // Trier les stocks en inversant l'ordre pour que le dernier ajout soit en haut
        this.stocks = data.map(stock => ({
          ...stock,
          produit: {
            ...stock.produit,  // On garde les données du produit existantes
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
        // Inverser l'ordre des stocks pour que les plus récents soient en haut
        this.stocks = this.stocks.reverse();
  
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
        console.log('infol\'entreprise:', this.nomEntreprise, this.adresseEntreprise);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération d\'info entreprise', err);
      }
    });
  }
  
  
  

  
// Mise en évidence du texte recherché dans le tableau
    highlightMatch(text: string): string {
      if (!this.searchText) return text;
      const regex = new RegExp(`(${this.searchText})`, 'gi');
      return text.replace(regex, '<strong>$1</strong>');
    }

    filteredStocks(): any[] {
      const sortedStocks = [...this.stocks]  
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()); 

      const filtered = sortedStocks.filter(stock => 
        stock.produit.nomProduit?.toLowerCase().includes(this.searchText.toLowerCase()) ||
        stock.produit.codeProduit?.toLowerCase().includes(this.searchText.toLowerCase())
      );

      const startIndex = this.currentPage * this.pageSize; 
      return filtered.slice(startIndex, startIndex + this.pageSize);
    }

  
 
  


  paginatedTasks: any[] = []; 
  pageSize = 5; 
  currentPage = 0;  

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }



  downloadPDF() {
    if (!this.stocks || this.stocks.length === 0) {
      console.error("Aucun stock à afficher dans le PDF !");
      return;
    }
  
    const doc = new jsPDF();
  
    // Définir l'URL du logo (par défaut ou dynamique)
    const logoUrl = this.logoEntreprise
      ? `http://localhost:8080/logoUpload/${this.logoEntreprise}`
      : `http://localhost:8080/logoUpload/651.jpg`;
  
    // Récupérer les informations de l’entreprise
    const entreprise = this.nomEntreprise ? this.nomEntreprise : "Nom non disponible";
    const adress = this.adresseEntreprise ? this.adresseEntreprise : "Adresse non disponible";
  
    // Récupérer la date et l'heure actuelles
    const dateGenerated = new Date();
    const formattedDate = dateGenerated.toLocaleString();  // Format "12/02/2025, 10:30:45"
  
    // Calculer les Totaux : Quantité Totale et Prix Total
    const totalQuantity = this.stocks.reduce((total: any, stock: { quantite: any; }) => total + stock.quantite, 0);
    const totalPrice = this.stocks.reduce((total: number, stock: { produit: { prix: number; }; quantite: number; }) => total + (stock.produit.prix * stock.quantite), 0);
  
    // Charger le logo avant de générer le PDF
    this.getImageBase64(logoUrl).then((logoBase64) => {
      // Ajouter le logo
      doc.addImage(logoBase64, 'PNG', 14, 5, 30, 30);
  
      // Ajouter les informations de l'entreprise
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.text(`Nom de l'entreprise: ${entreprise}`, 60, 20);
      doc.text('Stocks', 60, 30);
  
      // --- Ajout des totaux en haut à droite ---
      doc.setFontSize(9); // Réduire la taille des totaux
      doc.setFont('helvetica', 'bold');
  
      // Déplacer les totaux plus haut (au lieu de 40, les mettre à ~27-30)
      doc.text(`Quantité Totale: ${totalQuantity}`, 140, 25); 
  
      // Mettre le prix total en rouge
      doc.setTextColor(255, 0, 0); // Couleur rouge
      doc.text(`Prix Total: ${totalPrice.toFixed(2)} €`, 140, 30);
  
      // Réinitialiser la couleur pour le texte suivant
      doc.setTextColor(0, 0, 0); // Retour à la couleur noire
  
      // Ligne de séparation
      doc.setLineWidth(0.5);
      doc.line(14, 35, 195, 35);
  
      // Colonnes du tableau
      const columns = ['Code', 'Nom du produit', 'Catégorie', 'Description', 'Prix', 'Quantité'];
  
      // Récupérer uniquement les stocks de la page actuelle
      const startIndex = this.currentPage * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      const pageStocks = this.stocks.slice(startIndex, endIndex);
  
      if (!Array.isArray(pageStocks) || pageStocks.length === 0) {
        console.error("Aucun stock trouvé sur cette page !");
        return;
      }
  
      // Mapper les données des produits
      const rows = pageStocks.map(stock => [
        stock.produit.codeProduit, 
        stock.produit.nomProduit, 
        stock.produit.category?.nomCategory || 'Catégorie inconnue',
        stock.produit.description || 'Description non disponible', 
        stock.produit.prix, 
        stock.quantite
      ]);
  
      // Ajouter le tableau des produits
      autoTable(doc, {
        head: [columns],
        body: rows,
        startY: 40,
        theme: 'grid',
        headStyles: { fillColor: [100, 100, 255], textColor: [255, 255, 255], fontSize: 12 },
        bodyStyles: { fontSize: 10 }
      });
  
      // Récupérer la dernière position Y après le tableau
      const finalY = (doc as any).lastAutoTable?.finalY || 60;
  
      // Ajouter une ligne de séparation après le tableau
      doc.setLineWidth(0.5);
      doc.line(14, finalY + 5, 195, finalY + 5);
  
      // Ajouter un pied de page avec la date et l'heure de génération
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.text(`Adresse: ${adress}`, 14, finalY + 10);
      doc.text('Contact: 123-456-7890 | email@entreprise.com', 14, finalY + 15);
  
      // Ajouter la date en bas
      doc.setFontSize(8);  // Plus petit
      doc.text(`Date de génération: ${formattedDate}`, 14, finalY + 25); 
  
      // Sauvegarder le PDF
      doc.save('Facture_des_produits.pdf');
    }).catch((error) => {
      console.error("Erreur lors du chargement du logo :", error);
    });
  }
  
  
  

  // Méthode pour charger l'image en base64
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
