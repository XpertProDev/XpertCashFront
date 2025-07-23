// import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, signal, ViewChild} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProduitService } from '../SERVICES/produit.service';
// import { SharedDataService } from '../SERVICES/shared-data.service';
import { StockService } from '../SERVICES/stocks.service';
import { UsersService } from '../SERVICES/users.service';
import { Produit } from '../MODELS/produit.model';
import { Stock } from '../MODELS/stock.model';
import { Facture, ProduitFacture } from '../MODELS/facture.model';
import { FactureService } from '../SERVICES/facture.service';
import { ViewChildren, QueryList } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomNumberPipe } from '../MODELS/customNumberPipe';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FactureWithDataSource } from '../MODELS/facture-with-data-source';
import { SuspendedBoutiqueDialogComponent } from '../produits/suspended-boutique-dialog.component';
import { forkJoin } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

//FactureWithDataSource


export interface PeriodicElement {
  codeGenerique: string;
  nomProduit: string;
  stockActuel: number;
  quantiteAjoute: number;
  quantiteRetirer: number;
  stockApres: number;
  codeFournisseur: string

}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {codeGenerique: 'P-0000', nomProduit: 'NIDO', stockActuel: 200, quantiteAjoute: 89, quantiteRetirer: 20, stockApres: 234},
//   {codeGenerique: 'P-0001', nomProduit: 'Bic', stockActuel: 200, quantiteAjoute: 89, quantiteRetirer: 20, stockApres: 234},
//   {codeGenerique: 'P-0002', nomProduit: 'Chocolat', stockActuel: 200, quantiteAjoute: 89, quantiteRetirer: 20, stockApres: 234},
// ];

@Component({
  selector: 'app-facture',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatTableModule, 
    MatPaginatorModule,
    CommonModule,
    FormsModule,
    CustomNumberPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './facture.component.html',
  styleUrl: './facture.component.scss'
})


export class FactureComponent  implements AfterViewInit {

  boutiqueName: string = '';
  nomComplet: string = '';
  nomEntreprise = '';
  email: string = '';
  produit: Produit | undefined;
  stockHistory: any[] = [];

  showNoFactureMessage = false;
  noFacturesMessage = 'Aucune facture disponible.';
  factures: FactureWithDataSource[] = [];

  // Ajouter ces nouvelles propriétés
  searchTerm: string = '';
  filteredFactures: FactureWithDataSource[] = [];

  // Dropdown pour l'export
  showExportDropdown = false;
  showDescription = true;
  
  // Liste filtrée des stocks ajustés
  adjustedStocks: Stock[] = [];
  stock: Stock | null = null
  factureDataSource = new MatTableDataSource<any>();
  selectedBoutique: any = null;
  boutiques: any[] = [];
  entrepriseId!: number;

  userInfo: any;

  factureCounts: { [boutiqueId: number]: number } = {};
  totalAllFactures: number = 0;

  private apiUrl = environment.imgUrl;
  

   constructor(
         private userService: UsersService,
        //  private produitService: ProduitService,
        //  private sharedDataService: SharedDataService,
        //  private stockService: StockService,
        //  private router: Router,
        //  private route: ActivatedRoute,
         private factureService: FactureService,
         private changeDetectorRef: ChangeDetectorRef,
        private dialog: MatDialog
      ) {
        this.dataSource = new MatTableDataSource<ProduitFacture>();
       }

  // Pagination
  displayedColumns: string[] = ['codeGenerique', 'nomProduit', 'prixUnitair', 'quantite', 'total'];
  dataSource: MatTableDataSource<ProduitFacture>;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChildren(MatPaginator) paginators!: QueryList<MatPaginator>;
  
  totalFactures = 0;
  pageSize = 10;
  currentPage = 0;
  paginatedFactures: FactureWithDataSource[] = [];

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedFactures();
  }

  // Ajouter cette méthode
  private updatePaginatedFactures(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedFactures = this.filteredFactures.slice(startIndex, endIndex);
    
    // Forcer la mise à jour du paginator
    this.changeDetectorRef.detectChanges();
  }

  ngAfterViewInit() {
    this.paginators.changes.subscribe(() => {
      // Associe chaque paginator à la dataSource de la facture correspondante
      this.factures.forEach((facture, index) => {
        const paginator = this.paginators.toArray()[index];
        if (facture.dataSource && paginator) {
          facture.dataSource.paginator = paginator;
        }
      });
    }); 
  }

  // Collaste 
  step = signal(-1);

  setStep(index: number) {
    this.step.set(index);
  }

  // nextStep() {
  //   this.step.update(i => i + 1);
  // }

  // prevStep() {
  //   this.step.update(i => i - 1);
  // }

  // Affichage/Masquage du dropdown d'export
  
  toggleExportDropdown(event: Event) {
    event.stopPropagation(); 
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

  // Méthode pour inverser l'état d'affichage
  toggleDescription(event: Event) {
    event.stopPropagation();
    this.showDescription = !this.showDescription;
  }

  ngOnInit(): void {
    this.getBoutiqueName();
    this.getUserInfo();
    // this.getPartageInfoUser();
    // List des factures 
    // this.loadFactures();
  }

  boutiquePhone: string = '';
  boutiqueEmail: string = '';

  // Boutique Name
  getBoutiqueName() {
    this.userService.getUserInfo().subscribe(
      (userInfo) => {
        console.log(userInfo);
        if (userInfo && userInfo.boutiques && userInfo.boutiques.length > 0) {
          const boutique = userInfo.boutiques[0];
          this.boutiqueName = boutique.nomBoutique || 'Nom de la boutique non trouvé';
          this.boutiquePhone = boutique.telephone || 'Téléphone non trouvé';
          this.boutiqueEmail = boutique.email || 'Email non trouvé';
        } else {
          console.error('Aucune boutique trouvée pour cet utilisateur');
          this.boutiqueName = 'Aucune boutique';
          this.boutiquePhone = 'N/A';
          this.boutiqueEmail = 'N/A';
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des informations utilisateur', error);
      }
    );
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Ajouter la méthode de filtrage
  applyFilter() {
    if (!this.searchTerm) {
      this.filteredFactures = [...this.factures];
    } else {
      const searchTermLower = this.searchTerm.toLowerCase();
      this.filteredFactures = this.factures.filter(facture => 
        facture.numeroFacture.toLowerCase().includes(searchTermLower)
      );
    }
    this.currentPage = 0;
    this.updatePaginatedFactures();
    
    // Réinitialiser le paginator
    if (this.paginator) {
      this.paginator.firstPage();
    }
  }

  // Méthode pour obtenir les produits formatés
  getFormattedProduits(facture: Facture): any[] {
    return facture.produits.map(p => ({
      ...p,
      quantiteAjoute: facture.type === 'AJOUT' ? p.quantite : 0,
      quantiteRetirer: facture.type === 'RETRAIT' ? p.quantite : 0
    }));
  }


  // Permet de mettre en évidence le texte recherché
  highlightMatch(text: string): string {
    if (!this.searchTerm) return text;
    const regex = new RegExp(`(${this.searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  getColor(type: string): string {
    if (type === 'AJOUTER') {
      return '#008000';
    } else if (type === 'Réduction') {
      return '#ff0000';
    }
    return '#000';
  }  

  getBoutiqueNamesForFacture(facture: FactureWithDataSource): string {
    // Si une boutique spécifique est sélectionnée
    if (this.selectedBoutique) {
      return this.selectedBoutique.nomBoutique;
    }
    
    // Pour "Toutes les boutiques", utiliser les IDs de la facture
    if (facture.boutiqueIds?.length > 0) {
      return facture.boutiqueIds
        .map(id => this.boutiques.find(b => b.id === id)?.nomBoutique || 'Boutique inconnue')
        .join(', ');
    }
    
    // Fallback si aucune information n'est disponible
    return 'Non spécifié';
  }

  // Nouvelle méthode pour mettre à jour les données paginées
  private updatePagination() {
    this.totalFactures = this.filteredFactures.length;
    const startIndex = this.currentPage * this.pageSize;
    this.paginatedFactures = this.filteredFactures.slice(startIndex, startIndex + this.pageSize);
  }

// Fonction principale pour charger l'image en base64
async loadImageAsBase64(url: string): Promise<string> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Erreur de chargement de l\'image: ' + response.statusText);
    }

    const blob = await response.blob();
    const mimeType = blob.type;

    // Vérifie si l'image est un PNG
    if (mimeType !== 'image/png' && mimeType !== 'image/jpeg' && mimeType !== 'image/webp'  && mimeType !== 'image/jpg'  && mimeType !== 'image/avif') {
      throw new Error('Le fichier n\'est ni PNG, ni JPEG, ni WEBP');
    }

    const base64String = await this.blobToBase64(blob);
    return base64String;
  } catch (error) {
    console.error('Erreur lors du chargement de l\'image:', error);
    throw error;
  }
}


// Helper pour convertir un Blob en Base64
blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);  // Convertir en base64
    reader.onerror = (error) => reject('Erreur de lecture du fichier : ' + error);  // Gérer les erreurs de lecture
    reader.readAsDataURL(blob);
  });
}

  
  

  
  

  async downloadPDFWithJsPDF(facture: any, boutiqueName: string): Promise<void> {
    const boutiqueNames = facture.boutiqueNames?.join(', ') || 'Toutes les boutiques';
    const doc = new jsPDF();
    doc.setFontSize(9);

    const logoPath = this.userInfo?.logoEntreprise;

    if (logoPath) {
      const fullLogoUrl = `${this.apiUrl}${logoPath}`;

      const logoWidth = 20; 
       const logoHeight = 15;
  
      try {
        const logoBase64 = await this.loadImageAsBase64(fullLogoUrl);
  
        // Forcer le type MIME pour le PNG
        doc.addImage(logoBase64, 'jpg', 170, 10, logoWidth, logoHeight);
      } catch (error) {
        console.error('Erreur lors de l\'ajout du logo au PDF:', error);
      }
    } else {
      console.warn('Logo de l’entreprise non disponible.');
    }
    
    



    const transform = (value: number): string => {
      if (value == null) return '';
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

    let y = 15;
    doc.setFont('helvetica', 'bold');
    doc.text('Facture No :', 10, y);
    doc.setTextColor(6, 114, 228);
    doc.text(facture?.numeroFacture || 'FAC-XXXXXX', 30, y);
    
    y += 8;
    doc.setTextColor(0, 0, 0);
    doc.text('Informations de la boutique', 10, y);
    
    y += 5;
    doc.line(10, y, 200, y);
    y += 10;

    doc.setFont('helvetica', 'bold');
    doc.text('Boutique :', 10, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(6, 114, 228);
    doc.text(boutiqueName || 'N/A', 30, y);

    y += 8;
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text('Téléphone :', 10, y);
    doc.setFont('helvetica', 'normal');
    doc.text(this.boutiquePhone || 'N/A', 30, y);

    y += 8;
    doc.setFont('helvetica', 'bold');
    doc.text('Email :', 10, y);
    doc.setFont('helvetica', 'normal');
    doc.text(this.boutiqueEmail || 'N/A', 22, y);

    y += 8;
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text('Date de création :', 10, y);
    doc.setFont('helvetica', 'normal');
    
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    };
    
    doc.text(formatDate(facture?.dateFacture || ''), 40, y);

    y += 8;
    doc.setFont('helvetica', 'bold');
    doc.text('Créé par:', 10, y);
    doc.setFont('helvetica', 'normal');
    doc.text(facture?.nomUtilisateur || 'N/A', 27, y);

    y += 8;
    doc.setFont('helvetica', 'bold');
    doc.text('Type de mouvement :', 10, y);
    doc.setFont('helvetica', 'normal');

    let typeMouvement = facture?.type || 'N/A';
    const couleurMouvement: [number, number, number] = 
        typeMouvement === 'AJOUTER' ? [0, 150, 0] : [255, 0, 0];

    doc.setTextColor(...couleurMouvement);
    doc.text(typeMouvement, 45, y);
    doc.setTextColor(0, 0, 0);

    y += 12;
    doc.setFont('helvetica', 'bold');
    doc.text('Informations sur les produits', 10, y);
    
    y += 5;
    doc.line(10, y, 200, y);
    y += 10;

    
    doc.setTextColor(153, 153, 153);
    doc.text('Produits', 10, y);
    y += 10;


    doc.setFillColor(6, 114, 228);
    doc.setTextColor(255, 255, 255);
    doc.rect(10, y, 190, 10, 'F');
    doc.text('Code', 15, y + 7);
    doc.text('Désignation', 50, y + 7);
    doc.text('Prix unitaire', 100, y + 7);
    doc.text('Quantité', 140, y + 7);
    doc.text('Total', 170, y + 7);

    y += 15;
    doc.setTextColor(0, 0, 0);
    const produits = facture?.produits || [];
    produits.forEach((produit: { codeGenerique: any; nomProduit: any; prixUnitair: number; quantite: { toString: () => any; }; total: any; }, index: number) => {
        doc.text(produit.codeGenerique || `P-${index + 1}`, 15, y);
        doc.text(produit.nomProduit, 50, y);
        doc.text(transform(Number(produit.prixUnitair.toFixed(3))), 100, y);
        doc.text(produit.quantite.toString(), 140, y);
        doc.setTextColor(255, 0, 0);
        doc.text(transform(Number((produit.total || 0).toFixed(3))), 170, y);
        doc.setTextColor(0, 0, 0);
        y += 10;
    });

    y += 10;
    doc.line(10, y, 200, y);
    y += 15;

    doc.setFont('helvetica', 'bold');
    doc.text('Signature', 20, y);
    doc.text('Approuvé par', 90, y);
    doc.text('Reçu par', 160, y);

    // Générer un PDF avec un nom unique
    doc.save(`Facture_${facture?.numeroFacture || 'XXXXXX'}.pdf`);
  }

  getUserInfo(): void {
      this.userService.getUserInfo().subscribe({
        next: (user) => {
          this.userInfo = user;
          this.boutiques = user.boutiques;
          this.entrepriseId = user.entrepriseId;
          this.factureService.setBoutiques(this.boutiques);
          
          if (this.boutiques.length > 0) {
            this.selectedBoutique = null;
            this.showNoFactureMessage = false; // Ajouter cette ligne
            this.loadAllFactures();
          } else {
            this.noFacturesMessage = 'Aucune boutique trouvée.'; // Modifier cette ligne
            this.showNoFactureMessage = true; // Modifier cette ligne
          }
          this.showNoFactureMessage = false;
        },
        error: (err) => {
          console.error("Erreur lors de la récupération des informations utilisateur :", err);
          this.showNoFactureMessage = true; // Ajouter cette ligne
        }
      });
    }

  selectBoutique(boutique: any | null): void {
    if (boutique && !boutique.actif) {
      this.showSuspendedBoutiqueDialog();
      return;
    }
    this.selectedBoutique = boutique;
    if (boutique === null) {
      this.loadAllFactures();
    } else {
      this.loadFactures(boutique.id);
    }
    this.currentPage = 0;
  }

  // Dans loadFactures()
  loadFactures(boutiqueId: number): void {
    this.showNoFactureMessage = false;
    this.factureService.getFacturesByBoutique(boutiqueId).subscribe({
      next: (data) => {
        const facturesWithBoutique = data.map(f => ({
          ...f,
          boutiqueIds: [boutiqueId] // Ajoute l'ID de la boutique à chaque facture
        }));
        this.factureCounts[boutiqueId] = data.length;
        this.processFactures(facturesWithBoutique);
      },
      error: (error) => {
        console.error('Erreur:', error);
        this.processFactures([]);
        this.showNoFactureMessage = true;
      }
    });
  }

  // Dans loadAllFactures()
  loadAllFactures(): void {
    this.showNoFactureMessage = false;
    const requests = this.boutiques.map(b => 
      this.factureService.getFacturesByBoutique(b.id)
    );
    forkJoin(requests).subscribe({
      next: (responses) => {
        const allFactures = responses.flatMap((factures, index) => {
          const boutiqueId = this.boutiques[index].id;
          return factures.map(f => ({
            ...f,
            boutiqueIds: [boutiqueId] // Ajoute l'ID de la boutique à chaque facture
          }));
        });

        // Calculer les comptages
        const counts: { [id: number]: number } = {};
        responses.forEach((factures, index) => {
          const boutiqueId = this.boutiques[index].id;
          counts[boutiqueId] = factures.length;
        });
        this.factureCounts = counts;
        this.totalAllFactures = responses.reduce((acc, factures) => acc + factures.length, 0);

        this.processFactures(allFactures);
      },
      error: (error) => {
        console.error('Erreur:', error);
        this.showNoFactureMessage = true;
      }
    });
  }

  private processFactures(data: Facture[] | null): void {
    if (!data || !Array.isArray(data)) {
      this.showNoFactureMessage = true;
      // this.noFacturesAvailable = true;
      this.factures = [];
      this.filteredFactures = [];
      return;
    }
  
    this.factures = data.reverse().map(facture => ({
      ...facture,
      boutiqueIds: facture.boutiqueIds || [],
      boutiqueNames: this.getBoutiqueNames(facture.boutiqueIds),
      dataSource: new MatTableDataSource(this.getFormattedProduits(facture)),
      totalSum: this.getFormattedProduits(facture).reduce((acc, p) => acc + (p.total || 0), 0)
    }));
  
    this.filteredFactures = [...this.factures];
    this.showNoFactureMessage = this.factures.length === 0;
    this.updatePaginatedFactures();
  }

  private getBoutiqueNames(ids: number[] = []): string[] {
    return ids
      .map(id => this.boutiques.find(b => b.id === id)?.nomBoutique || 'Boutique inconnue' )
      .filter(name => !!name) as string[];
  }

  // facture.component.ts
  showSuspendedBoutiqueDialog(): void {
    this.dialog.open(SuspendedBoutiqueDialogComponent, {
      width: '400px',
      disableClose: true,
      data: { onClose: () => this.selectedBoutique = null }
    });
  }


}


