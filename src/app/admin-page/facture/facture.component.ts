// import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AfterViewInit, ChangeDetectionStrategy, Component, HostListener, signal, ViewChild} from '@angular/core';
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
import { SharedDataService } from '../SERVICES/shared-data.service';
import { StockService } from '../SERVICES/stocks.service';
import { UsersService } from '../SERVICES/users.service';
import { Produit } from '../MODELS/produit.model';
import { Stock } from '../MODELS/stock.model';


export interface PeriodicElement {
  codeGenerique: string;
  nomProduit: string;
  stockActuel: number;
  quantiteAjoute: number;
  quantiteRetirer: number;
  stockApres: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codeGenerique: 'P-0000', nomProduit: 'NIDO', stockActuel: 200, quantiteAjoute: 89, quantiteRetirer: 20, stockApres: 234},
  {codeGenerique: 'P-0001', nomProduit: 'Bic', stockActuel: 200, quantiteAjoute: 89, quantiteRetirer: 20, stockApres: 234},
  {codeGenerique: 'P-0002', nomProduit: 'Chocolat', stockActuel: 200, quantiteAjoute: 89, quantiteRetirer: 20, stockApres: 234},
];

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

   // Dropdown pour l'export
   showExportDropdown = false;
   showDescription = false;
   
   // Liste filtrée des stocks ajustés
   adjustedStocks: Stock[] = [];
   stock: Stock | null = null

   constructor(
         private userService: UsersService,
         private produitService: ProduitService,
         private sharedDataService: SharedDataService,
         private stockService: StockService,
         private router: Router,
         private route: ActivatedRoute,
       ) {}

  // Pagination
  displayedColumns: string[] = ['codeGenerique','nomProduit', 'stockActuel', 'quantiteAjoute', 'quantiteRetirer', 'stockApres'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // Collaste 
  step = signal(0);

  setStep(index: number) {
    this.step.set(index);
  }

  nextStep() {
    this.step.update(i => i + 1);
  }

  prevStep() {
    this.step.update(i => i - 1);
  }

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
    this.getUserInfo();
    this.getBoutiqueName();
    this.getProduit();
    this.loadStockById();
    this.loadStockHistory();
  }

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

  getLastStockAction(): string {
    if (!this.stockHistory || this.stockHistory.length === 0) {
      // console.log('Aucune activité dans stockHistory');
      return 'Non activitité';
    }
    const lastStock = this.stockHistory[this.stockHistory.length - 1];
    // console.log('Dernière action stockée :', lastStock?.action);
    return lastStock?.action || 'Non activitité';
  }

  getDisplayedDescription(): string {
    const lastAction = (this.getLastStockAction() || '').toLowerCase();
    // console.log('Action en minuscule :', lastAction);
    console.log('descriptionAjout:', this.stock?.descriptionAjout, 'descriptionRetire:', this.stock?.descriptionRetire);
  
    if (lastAction.includes('ajout') && this.stock?.descriptionAjout) {
      return this.stock.descriptionAjout;
    } else if ((lastAction.includes('retire') || lastAction.includes('reduction')) && this.stock?.descriptionRetire) {
      return this.stock.descriptionRetire;
    }
    return 'Aucune description...';
  }

}


