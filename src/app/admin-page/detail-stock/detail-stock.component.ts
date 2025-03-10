import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsersService } from '../SERVICES/users.service';
import { ProduitService } from '../SERVICES/produit.service';
import { Produit } from '../MODELS/produit.model';
import { SharedDataService } from '../SERVICES/shared-data.service';
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

  // Dropdown pour l'export
  showExportDropdown = false;

  constructor(
      private userService: UsersService,
      private produitService: ProduitService,
      private sharedDataService: SharedDataService,
      private router: Router,
      private route: ActivatedRoute,
    ) {}
    
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
  }

  // Nom boutique 
  boutiqueName: string = '';

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

  nomComplet: string = '';
  nomEntreprise = '';
  email: string = '';
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

  produit: Produit | undefined;
  getProduit(): void {
    const idParam = this.route.snapshot.paramMap.get('id'); // Récupère l'ID depuis l'URL
    const productId = idParam ? +idParam : 0; // Convertit en nombre, 0 si invalide

    if (productId > 0) { // Vérifie si l'ID est valide
      this.produitService.getProduitById(productId).subscribe({
        next: (data: Produit) => {
          console.log('Produit récupéré:', data);
          this.produit = data; // Stocke le produit
        },
        error: (err) => {
          console.error('Erreur lors de la récupération du produit:', err);
        }
      }); 
    } else {
      console.error('ID du produit invalide');
    }
  }

  
  downloadBoutiqueProduitPDF() {
    const doc = new jsPDF();

    // Vérification des données
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
  
    // Ajout du titre
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
  
    // Définition des colonnes du tableau
    const columns = ['Mes produits', 'Stock actuel', 'Quantité à ajouter', 'Coût du produit', 'Stock après'];
  
    // Définition des valeurs pour le tableau
    const rows = [[
      this.produit.nom || 'N/A',
      this.produit.quantite ?? 0,
      '_____',
      `${this.produit.prixAchat ?? 0} €`,
      `${(this.produit.quantite ?? 0) + 0} `
    ]];
  
    // Génération du tableau avec autoTable
    autoTable(doc, {
      head: [columns],
      body: rows,
      startY: 80,
      theme: 'grid',
      headStyles: { fillColor: [64, 153, 255], textColor: [255, 255, 255], fontSize: 12 },
      bodyStyles: { fontSize: 10 }
    });
  
    // Ligne de séparation avant la signature
    const finalY = (doc as any).lastAutoTable?.finalY || 120;
    doc.setLineWidth(0.5);
    doc.line(14, finalY + 5, 195, finalY + 5);
  
    // Ajout des champs Signature, Approuvé par, Reçu par
    doc.setFontSize(10);
    doc.text('Signature:', 14, finalY + 15);
    doc.text('Approuvé par:', 100, finalY + 15);
    doc.text('Reçu par:', 140, finalY + 15);
  
    // Sauvegarde du PDF
    doc.save(`Fiche_Produit_${this.produit.nom}.pdf`);
  }
  

}
