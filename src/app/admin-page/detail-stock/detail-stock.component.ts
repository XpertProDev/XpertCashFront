import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsersService } from '../SERVICES/users.service';
import { ProduitService } from '../SERVICES/produit.service';
import { Produit } from '../MODELS/produit.model';
import { SharedDataService } from '../SERVICES/shared-data.service';

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

  /////// ngOnInit()
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


}
