import { CommonModule } from '@angular/common';
import { Component, HostListener, Inject, LOCALE_ID } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsersService } from '../SERVICES/users.service';
import { ProduitService } from '../SERVICES/produit.service';
import { Produit } from '../MODELS/produit.model';
import { SharedDataService } from '../SERVICES/shared-data.service';
import { StockService } from '../SERVICES/stocks.service';
import { Stock } from '../MODELS/stock.model';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-detail-stock',
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './detail-stock.component.html',
  styleUrl: './detail-stock.component.scss'
})
export class DetailStockComponent {
  boutiqueName: string = '';
  nomComplet: string = '';
  nomEntreprise = '';
  email: string = '';
  produit: Produit | undefined;
  stockHistory: any[] = [];



  // Dropdown pour l'export
  showExportDropdown = false;

  showDescription = true;

  constructor(@Inject(LOCALE_ID) private locale: string,
      private userService: UsersService,
      private produitService: ProduitService,
      private sharedDataService: SharedDataService,
      private stockService: StockService,
      private router: Router,
      private route: ActivatedRoute,
    ) {
      console.log('Langue actuelle:', this.locale);  // Devrait afficher 'fr-FR'
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

  ngOnInit(): void {
    this.getUserInfo();
    this.getBoutiqueName();
    this.getProduit();
    this.loadStockById();
    this.loadStockHistory();
  }

  // Liste filtrée des stocks ajustés
    adjustedStocks: Stock[] = [];
    stock: Stock | null = null

  // Méthode pour charger tous les stocks et ne conserver que ceux ajustés
  // Charge un seul stock ajusté (par exemple le premier)
  loadAdjustedStock(): void {
    const token = this.userService.getToken(); 
    if (!token) {
      console.error('Token introuvable');
      return;
    }
    this.stockService.getAllStocks(token).subscribe({
      next: (stocks: Stock[]) => {
        console.log("recuperer", stocks)
        // Filtre pour garder uniquement les stocks ayant des ajustements
        const adjustedStocks = stocks.filter(stock =>
          (stock.quantiteAjoute && stock.quantiteAjoute > 0) ||
          (stock.quantiteRetirer && stock.quantiteRetirer > 0)
        );
        // Sélectionne le premier stock ajusté (ou null s'il n'y en a pas)
        this.stock = adjustedStocks.length > 0 ? adjustedStocks[0] : null;
      },
      error: (error) => {
        console.error("Erreur lors du chargement du stock ajusté", error);
      }
    });
  }

  // Appeler le service pour récupérer le stock par ID
  loadStockById(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const stockId = idParam ? +idParam : null;
    
    if (!stockId) {
      console.error('ID du stock invalide');
      return;
    }
  
    const token = this.userService.getToken(); 
    if (!token) {
      console.error('Token introuvable');
      return;
    }
  
    this.stockService.getAllStocks(token).subscribe({
      next: (stocks: Stock[]) => {
        // Chercher le stock dont l'ID correspond
        const selectedStock = stocks.find(stock => stock.id === stockId);
        if (selectedStock) {
          console.log("Stock trouvé :", selectedStock);
          this.stock = selectedStock;
        } else {
          console.error(`Aucun stock trouvé avec l'ID ${stockId}`);
        }
      },
      error: (error) => {
        console.error("Erreur lors du chargement des stocks", error);
      }
    });
  }    



  getBoutiqueName() {
    this.userService.getUserInfo().subscribe(
      (userInfo) => {
        console.log(userInfo);
        if (userInfo && userInfo.boutiques && userInfo.boutiques.length > 0) {
          console.log(userInfo.boutiques[0]);
  
          this.boutiqueName = userInfo.boutiques[0].nomBoutique || 'Nom de la boutique non trouvé';
        } else {
          console.error('Aucune boutique trouvée pour cet utilisateur');
          this.boutiqueName = 'Aucune boutique';
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des informations utilisateur', error);
      }
    );
  }

  getPartageInfoUser() {
     // Partage de donner de user
     this.sharedDataService.boutiqueName$.subscribe(name => {
      console.log("AddProduitComponent - Nom boutique récupéré :", name);
      this.boutiqueName = name;
    });
  }


  getUserInfo(): void {
    this.userService.getUserInfo().subscribe({
      next: (user) => {
        this.nomComplet = user.nomComplet; 
        this.nomEntreprise = user.nomEntreprise
        this.email = user.email
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }

  getProduit(): void {
    const idParam = this.route.snapshot.paramMap.get('id'); // Récupère l'ID depuis l'URL
    const productId = idParam ? +idParam : 0; // Convertit en nombre, 0 si invalide
  
    if (productId > 0) { // Vérifie si l'ID est valide
      this.produitService.getProduitById(productId).subscribe({
        next: (data: Produit) => {
          console.log('Produit récupéré:', data);
          this.produit = data; // Stocke le produit
          this.loadStockHistory();  // Appel de l'historique une fois le produit récupéré
        },
        error: (err) => {
          console.error('Erreur lors de la récupération du produit:', err);
        }
      });
    } else {
      console.error('ID du produit invalide');
    }
  }  

  loadStockHistory(): void {
    const produitId = this.produit?.id;
    if (!produitId) {
      console.error('Produit non défini pour charger l\'historique');
      return;
    }
    const token = this.userService.getToken();
    if (!token) {
      console.error('Token introuvable');
      return;
    }
    this.stockService.getAllstockhistorique(produitId, token).subscribe({
      next: (data: any[]) => {
        console.log('Historique de stock:', data);
        this.stockHistory = data;
      },
      error: (error) => {
        console.error("Erreur lors du chargement de l'historique de stock", error);
      }
    });
  }
  
  // getLastStockAction(): string {
  //   if (!this.stockHistory || this.stockHistory.length === 0) {
  //     return 'Non activitité';
  //   }
    
  //   const lastStock = this.stockHistory[this.stockHistory.length - 1];
  //   // Vérification supplémentaire si lastStock est undefined
  //   if (!lastStock) {
  //     return 'Non activitité';
  //   }
    
  //   return lastStock.action || 'Non activitité';
  // }

  getLastStockAction(): string {
    if (!this.stockHistory || this.stockHistory.length === 0) {
      // console.log('Aucune activité dans stockHistory');
      return 'Non activitité';
    }
    const lastStock = this.stockHistory[this.stockHistory.length - 1];
    // console.log('Dernière action stockée :', lastStock?.action);
    return lastStock?.action || 'Non activitité';
  }


  downloadBoutiqueProduitPDF() {
    const doc = new jsPDF();

    if (!this.boutiqueName || !this.nomComplet || !this.email || !this.produit) {
      console.error("Informations incomplètes !");
      return;
    }

    let formattedDate = '';
    if (this.produit.createdAt) {
      const createdAt = new Date(this.produit.createdAt);
      formattedDate = createdAt.toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    } else {
      formattedDate = 'Date non disponible';
    }
  
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(`Fiche Produit et Stock`, 80, 15);
    doc.setFontSize(12);
    doc.text(`Informations de la boutique`, 14, 30);
    doc.setLineWidth(0.5);
    doc.line(14, 32, 195, 32); 
  
    // Informations sur la boutique
    doc.setFontSize(10);
    doc.text(`Nom de la Boutique : ${this.boutiqueName}`, 14, 40);
    doc.text(`Adresse : Rue 414`, 14, 45);
    doc.text(`Date de création : ${formattedDate}`, 14, 50); 
    doc.text(`Créé par : ${this.nomComplet}`, 14, 55);
    doc.text(`Email : ${this.email}`, 14, 60);
  
    doc.setLineWidth(0.5);
    doc.line(14, 65, 195, 65);
  
    doc.setFontSize(12);
    doc.text(`Détails du Produit N°: ${this.produit.codeGenerique}`, 14, 75) ;
    doc.line(14, 77, 195, 77);
  
    const columns = ['Mes produits', 'Stock actuel', 'Quantité à ajouter', 'Coût du produit', 'Stock après'];
  
    const rows = [[
      this.produit.nom || 'N/A',
      this.produit.quantite ?? 0,
      '_____',
      `${this.produit.prixAchat ?? 0}`,
      `${(this.produit.quantite ?? 0) + 0} `
    ]];
  
    autoTable(doc, {
      head: [columns],
      body: rows,
      startY: 80,
      theme: 'grid',
      headStyles: { fillColor: [64, 153, 255], textColor: [255, 255, 255], fontSize: 12 },
      bodyStyles: { fontSize: 10 }
    });
  
    const finalY = (doc as any).lastAutoTable?.finalY || 120;
    doc.setLineWidth(0.5);
    doc.line(14, finalY + 5, 195, finalY + 5);
  
    doc.setFontSize(10);
    doc.text('Signature:', 14, finalY + 15);
    doc.text('Approuvé par:', 100, finalY + 15);
    doc.text('Reçu par:', 140, finalY + 15);
  
    doc.save(`Fiche_Produit_${this.produit.nom}.pdf`);
  }

  
  
  getDisplayedDescription(): string {
    const lastAction = (this.getLastStockAction() || '').toLowerCase();
    // console.log('Action en minuscule :', lastAction);
    // console.log('descriptionAjout:', this.stock?.descriptionAjout, 'descriptionRetire:', this.stock?.descriptionRetire);
  
    if (lastAction.includes('ajout') && this.stock?.descriptionAjout) {
      return this.stock.descriptionAjout;
    } else if ((lastAction.includes('retire') || lastAction.includes('reduction')) && this.stock?.descriptionRetire) {
      return this.stock.descriptionRetire;
    }
    return 'Aucune description...';
  }

  // Méthode pour inverser l'état d'affichage
  toggleDescription() {
    this.showDescription = !this.showDescription;
  }

}