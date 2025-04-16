import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../SERVICES/client-service';
import { FactureProFormaService } from '../SERVICES/factureproforma-service';
import { ProduitService } from '../SERVICES/produit.service';
import { UsersService } from '../SERVICES/users.service';
import { Clients } from '../MODELS/clients-model';
import { Produit } from '../MODELS/produit.model';
import { CustomNumberPipe } from '../MODELS/customNumberPipe';

@Component({
  selector: 'app-facture-proforma',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomNumberPipe,
  ],
  templateUrl: './facture-proforma.component.html',
  styleUrl: './facture-proforma.component.scss'
})
export class FactureProformaComponent implements OnInit {

   pendingAdjustments: any[] = [];
    description: string = '';
    typeDestinataire: string = 'client';
    selectedClientId: number | null = null;
    selectedEntrepriseId: number | null = null;
    nomEntreprise: string = '';
    boutiqueIds: number[] | undefined;
  
    produits: Produit[] = [];
    lignesFacture: { produitId: number; quantite: number }[] = [
      { produitId: 0, quantite: 1 }
    ];
  
    clients: Clients[] = [];
    totalClients = 0;
    noClientsAvailable = false;
    entreprises: any[] = [];
  
    remiseTVAActive: boolean = false;
    remisePourcentage: number = 0;
    tva: number = 0;
    entrepriseId: number = 0;
    userEntrepriseId: number | null = null;
    isLoading: boolean = false;
    facturesproforma: any[] = [];

  searchTerm: string = '';

    constructor(
      private router: Router,
      private clientService: ClientService,
          private factureProFormaService: FactureProFormaService,
          private produitService: ProduitService,
          private usersService: UsersService
    ) {}

  ngOnInit(): void{

    this.getUserInfo();
  }


  goToAddProduit() {
    this.router.navigate(['/addfacture-proforma']);
  }

  clearSearch(): void {
    this.searchTerm = '';
  }


  getUserInfo(): void {
    this.usersService.getUserInfo().subscribe({
      next: (user) => {
        this.nomEntreprise = user.nomEntreprise;
        this.userEntrepriseId = user.entrepriseId;
        this.loadFactproformaOfEntreprise(this.userEntrepriseId);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }


  loadFactproformaOfEntreprise(userEntrepriseId: number) {
    this.isLoading = true;
    this.factureProFormaService.getAlFactproformaOfEntreprise(userEntrepriseId).subscribe({
      next: (data) => {
        this.facturesproforma = data.map(facturesproforma => ({
          ...facturesproforma,
        }));
        this.isLoading = false;
        console.log('Facture proforma récupérés:', this.facturesproforma);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des facture proforma', err);
        this.isLoading = false;
      }
    });
  }

  showDetails(factureId: number): void {
    // Redirige vers la page de détail
    this.router.navigate(['/facture-proforma-details', factureId]);
  }
}
