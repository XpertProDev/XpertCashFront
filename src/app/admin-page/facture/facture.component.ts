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
import { SharedDataService } from '../SERVICES/shared-data.service';
import { StockService } from '../SERVICES/stocks.service';
import { UsersService } from '../SERVICES/users.service';
import { Produit } from '../MODELS/produit.model';
import { Stock } from '../MODELS/stock.model';
import { Facture, FactureWithDataSource, ProduitFacture } from '../MODELS/facture.model';
import { FactureService } from '../SERVICES/facture.service';
import { ViewChildren, QueryList } from '@angular/core';



export interface PeriodicElement {
  codeGenerique: string;
  nomProduit: string;
  stockActuel: number;
  quantiteAjoute: number;
  quantiteRetirer: number;
  stockApres: number;
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
  // Les Facture 
  // factures: Facture[] = [];

  factures: FactureWithDataSource[] = [];

   // Dropdown pour l'export
   showExportDropdown = false;
   showDescription = false;
   
   // Liste filtrée des stocks ajustés
   adjustedStocks: Stock[] = [];
   stock: Stock | null = null

   factureDataSource = new MatTableDataSource<any>();

   constructor(
         private userService: UsersService,
         private produitService: ProduitService,
         private sharedDataService: SharedDataService,
         private stockService: StockService,
         private router: Router,
         private route: ActivatedRoute,
         private factureService: FactureService,
         private changeDetectorRef: ChangeDetectorRef,
       ) {
        this.dataSource = new MatTableDataSource<ProduitFacture>();
       }

  // Pagination
  displayedColumns: string[] = ['codeGenerique', 'nomProduit', 'prixUnitair', 'quantite', 'total'];
  dataSource: MatTableDataSource<ProduitFacture>;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChildren(MatPaginator) paginators!: QueryList<MatPaginator>;
  


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
  step = signal(0);

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
    this.getPartageInfoUser();
    // List des factures 
    this.loadFactures();
  }

  // Boutique Name
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

  // Partage de donner de user
  getPartageInfoUser() {
      this.sharedDataService.boutiqueName$.subscribe(name => {
      console.log("AddProduitComponent - Nom boutique récupéré :", name);
      this.boutiqueName = name;
    });
  }

  // loadFactures() {
  //   this.factureService.getFactures().subscribe({
  //     next: (data) => {
  //       this.factures = data.reverse();
  //       this.changeDetectorRef.markForCheck();
  //     },
  //     error: (error) => {
  //       console.error('Erreur lors de la récupération des factures', error);
  //     }
  //   });
  // }

  loadFactures() {
    this.factureService.getFactures().subscribe({
      next: (data) => {
        this.factures = data.reverse().map(facture => ({
          ...facture,
          dataSource: new MatTableDataSource(this.getFormattedProduits(facture))
        })) as FactureWithDataSource[];
        this.changeDetectorRef.markForCheck();
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des factures', error);
      }
    });
  }  

  // Méthode pour obtenir les produits formatés
  getFormattedProduits(facture: Facture): any[] {
    return facture.produits.map(p => ({
      ...p,
      quantiteAjoute: facture.type === 'AJOUT' ? p.quantite : 0,
      quantiteRetirer: facture.type === 'RETRAIT' ? p.quantite : 0
    }));
  }
  

}


