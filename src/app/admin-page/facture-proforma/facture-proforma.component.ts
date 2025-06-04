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
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { EntrepriseService } from '../SERVICES/entreprise-service';

@Component({
  selector: 'app-facture-proforma',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomNumberPipe,
    MatInputModule,
    MatPaginatorModule,
  ],
  templateUrl: './facture-proforma.component.html',
  styleUrl: './facture-proforma.component.scss',
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
    // Variables existantes...
    isListView = true;
    showDropdown = false;
    searchTerm: string = '';
    filteredFactures: any[] = [];

    // Pagination
    pageSize = 6;
    currentPage = 0;
    sortField: string = 'numeroFacture'; // Au lieu de 'any'
    sortDirection: 'asc' | 'desc' = 'asc';
    // Ajouter dans la classe
    selectedStatut: string | null = null;
    statuts = [
      { value: 'BROUILLON', label: 'Brouillon' },
      { value: 'APPROUVE', label: 'Approuvé' },
      { value: 'ENVOYE', label: 'Envoyé' },
      { value: 'VALIDE', label: 'Validé' }
    ];


    constructor(
      private router: Router,
      private clientService: ClientService,
      private factureProFormaService: FactureProFormaService,
      private produitService: ProduitService,
      private usersService: UsersService,
    ) {}

  ngOnInit(): void{
    const savedView = localStorage.getItem('factureView');
    this.isListView = savedView !== 'grid';
    this.getUserInfo();
  }

  toggleView(viewType: 'list' | 'grid') {
    this.isListView = viewType === 'list';
    localStorage.setItem('factureView', viewType);
  }

  goToAddProduit() {
    this.router.navigate(['/addfacture-proforma']);
  }

  clearSearch(): void {
    this.searchTerm = '';
  }

  // Corriger la signature de la méthode sort
  sort(field: string) { // Spécifier le type string explicitement
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field; // Maintenant le type correspond
      this.sortDirection = 'asc';
    }

    this.facturesproforma.sort((a, b) => {
      const valueA = a[field]?.toString().toLowerCase() ?? '';
      const valueB = b[field]?.toString().toLowerCase() ?? '';
      return valueA.localeCompare(valueB) * (this.sortDirection === 'asc' ? 1 : -1);
    });
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  // Méthode pour filtrer par statut
  selectStatut(statut: string | null): void {
    this.selectedStatut = statut;
    this.currentPage = 0;
    
    // Filtrer les factures ici plutôt que dans le template
    if (statut) {
      this.filteredFactures = this.facturesproforma.filter(f => f.statut === statut);
    } else {
      this.filteredFactures = [...this.facturesproforma];
    }
  }

  // Modifier le getter paginatedFactures
  get paginatedFactures(): any[] {
    const start = this.currentPage * this.pageSize;
    return this.filteredFactures.slice(start, start + this.pageSize);
  }

  getTotalFacture(facture: any): number {
      return facture.ligneFactureProforma?.reduce((acc: number, ligne: any) => acc + ligne.montantTotal, 0) || 0;
  }

  getUserInfo(): void {
    this.usersService.getUserInfo().subscribe({
      next: (user) => {
        this.nomEntreprise = user.nomEntreprise;
        this.userEntrepriseId = user.entrepriseId;
        this.loadFactproformaOfEntreprise(this.userEntrepriseId);
        // Initialiser avec toutes les factures
        this.filteredFactures = [...this.facturesproforma];
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
        this.filteredFactures = [...this.facturesproforma];
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

  getImageSrc(statut: string): string {
    switch (statut) {
      case 'BROUILLON"':
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-Gris.png';

      case 'APPROUVE':
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-bleu-.png';

      case 'ENVOYE':
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-orange.png';
      
      case 'VALIDE':
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-Vert.png';

      default:
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-Gris.png'; 
    }
  }

  getStatutClass(statut: string): string {
    switch (statut) {
      case 'BROUILLON':
        return 'etat-gris';
      case 'APPROUVE':
        return 'etat-bleu';
      case 'ENVOYE':
        return 'etat-orange';
      case 'VALIDE':
        return 'etat-vert'; 
      default:
        return 'etat-gris';
    }
  }

  
}
