import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
import { ModuleService } from '../SERVICES/Module-Service';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-facture-proforma',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomNumberPipe,
    MatInputModule,
    MatPaginatorModule,

    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
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
    // filteredFactures: any[] = [];
    facturesLoaded = false;

    searchText: string = '';

    factureCounts: { [key: string]: number } = {};
    totalAllFactures: number = 0;

    // Pagination
    pageSize = 10;
    currentPage = 0;
    facturesFiltrees: any[] = [];  // résultats backend filtrés
    filteredFacturess: any[] = [];
    sortField: string = 'numeroFacture'; // Au lieu de 'any'
    sortDirection: 'asc' | 'desc' = 'asc';
    // Ajouter dans la classe
    selectedStatut: string | null = null;
    statuts = [
      { value: 'BROUILLON', label: 'Brouillon' },
      { value: 'APPROUVE', label: 'Approuvé' },
      { value: 'ENVOYE', label: 'Envoyé' },
      { value: 'VALIDE', label: 'Validé' },
      { value: 'ANNULE', label: 'Annulé' },
    ];

    accesAutorise: boolean = false;
    chargementFini: boolean = false;
    messageErreur: string = "";
    tempsRestantEssai: string | null = null;

     // Trier
    typeSelectionne: 'jour' | 'mois' | 'annee' | 'personnalise' = 'jour';
    dateDebut: string = '';
    dateFin: string = '';
    factures: any[] = [];

    dropdownOuvert = false;

    constructor(
      private router: Router,
      private clientService: ClientService,
      private factureProFormaService: FactureProFormaService,
      private produitService: ProduitService,
      private usersService: UsersService,
      private moduleService: ModuleService,
      private route: ActivatedRoute,
    ) {}

  ngOnInit(): void{
    const savedView = localStorage.getItem('factureView');
    this.isListView = savedView !== 'grid';
    this.getUserInfo();
    this.verifierAcces();

    this.route.queryParams.subscribe(params => {
      const etatParam = params['etat'];
      if (etatParam && this.statuts.some(s => s.value === etatParam)) {
        this.selectStatut(etatParam);
      }
    });
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
  // sort(field: string) { // Spécifier le type string explicitement
  //   if (this.sortField === field) {
  //     this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  //   } else {
  //     this.sortField = field;
  //     this.sortDirection = 'asc';
  //   }

  //   this.facturesproforma.sort((a, b) => {
  //     const valueA = a[field]?.toString().toLowerCase() ?? '';
  //     const valueB = b[field]?.toString().toLowerCase() ?? '';
  //     return valueA.localeCompare(valueB) * (this.sortDirection === 'asc' ? 1 : -1);
  //   });
  // }

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

  get filteredFactures(): any[] {
    let result = [...this.facturesproforma];

    // Filtre par statut
    if (this.selectedStatut) {
        result = result.filter(f => f.statut === this.selectedStatut);
    }

    // Filtre par texte
    if (this.searchText.trim()) {
        const searchLower = this.searchText.toLowerCase().trim();
        result = result.filter(f => 
            (f.numeroFacture?.toLowerCase().includes(searchLower)) ||
            (f.client?.toLowerCase().includes(searchLower)) ||
            (f.entrepriseClient?.toLowerCase().includes(searchLower)) ||
            (f.totalFacture?.toString().includes(this.searchText))
        );
    }

    // Tri
    // if (this.sortField) {
    //     result.sort((a, b) => {
    //         let valueA = a[this.sortField];
    //         let valueB = b[this.sortField];

    //         // Cas particulier pour les dates
    //         if (this.sortField === 'dateCreation') {
    //             valueA = new Date(valueA).getTime();
    //             valueB = new Date(valueB).getTime();
    //             return (valueA - valueB) * (this.sortDirection === 'asc' ? 1 : -1);
    //         }

    //         valueA = (valueA ?? '').toString().toLowerCase();
    //         valueB = (valueB ?? '').toString().toLowerCase();
    //         return valueA.localeCompare(valueB) * (this.sortDirection === 'asc' ? 1 : -1);
    //     });
    // }

    return result;
}

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  // Méthode pour filtrer par statut
  selectStatut(statut: string | null): void {
    this.selectedStatut = statut;
    this.currentPage = 0;
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
        // this.filteredFactures = [...this.facturesproforma];
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
        this.facturesLoaded = true;
      }
    });
  }

  loadFactproformaOfEntreprise(userEntrepriseId: number) {
    this.isLoading = true;
    this.facturesLoaded = false;
    this.factureProFormaService.getAlFactproformaOfEntreprise(userEntrepriseId).subscribe({
        next: (data) => {
            this.facturesproforma = data.map(facturesproforma => ({
                ...facturesproforma,
            }));
            
            // Calculer les comptages après le chargement
            this.calculateFactureCounts();
            
            this.isLoading = false;
            this.facturesLoaded = true;
        },
        error: (err) => {
            console.error('Erreur lors du chargement des facture proforma', err);
            this.isLoading = false;
            this.facturesLoaded = true;
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
      
      case 'ANNULE':
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-rouge.png';

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
      case 'ANNULE':
        return 'etat-rouge'; 
      default:
        return 'etat-gris';
    }
  }

  verifierAcces(): void {
    this.moduleService.getModulesEntreprise().subscribe({
      next: (modules) => {
        const moduleFacturation = modules.find(m => m.code === 'GESTION_FACTURATION');

        if (moduleFacturation?.actif) {
          this.accesAutorise = true;
          this.tempsRestantEssai = moduleFacturation.tempsRestantEssai || null;
        } else {
          this.accesAutorise = false;
          this.messageErreur = moduleFacturation?.tempsRestantEssai
            ? "Votre période d'essai est terminée."
            : "Ce module est inactif.";
        }

        this.chargementFini = true;
      },
      error: (err) => {
        this.accesAutorise = false;
        this.messageErreur = "Erreur lors de la vérification d'accès.";
        this.chargementFini = true;
      }
    });
  }

  onSearchChange(): void {
      this.currentPage = 0; // Réinitialiser à la première page
      // Le filtrage sera géré automatiquement par le getter filteredFactures
    }

  redirigerAccueil(): void {
    this.router.navigate(['/']);
  }

  calculateFactureCounts(): void {
    // Réinitialiser les compteurs
    this.factureCounts = {};
    this.totalAllFactures = this.facturesproforma.length;

    // Compter par statut
    this.facturesproforma.forEach(facture => {
      const statut = facture.statut;
      if (statut) {
        this.factureCounts[statut] = (this.factureCounts[statut] || 0) + 1;
      }
    });
  }

  


    typesPeriode = [
    { value: 'jour', label: 'Par jour' },
    { value: 'mois', label: 'Par mois' },
    { value: 'annee', label: 'Par année' },
    { value: 'personnalise', label: 'Personnalisé' }
  ];

   get labelTypeSelectionne(): string {
    return this.typesPeriode.find(t => t.value === this.typeSelectionne)?.label || 'Filtrer';
  }

   toggleDropdown() {
    this.dropdownOuvert = !this.dropdownOuvert;
  }

  choisirType(type: any) {
    this.typeSelectionne = type;
    this.dateDebut = '';
    this.dateFin = '';
  }

  appliquerFiltre() {
    if (this.typeSelectionne === 'personnalise' && (!this.dateDebut || !this.dateFin)) {
      alert("Veuillez sélectionner une date de début et de fin.");
      return;
    }

    this.factureProFormaService
      .getFacturesParPeriode(this.typeSelectionne, this.dateDebut, this.dateFin)
      .subscribe({
        next: (data) => {
          console.log("lhhhhhh",data);
          this.facturesproforma = data;
          this.currentPage = 0;
          this.dropdownOuvert = false;
        },
        error: (err) => {
          console.error('Erreur de chargement des factures:', err);
        }
      });
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
  if (!target.closest('.filter-dropdown-wrapper') && !target.closest('.filter-toggle-icon')) {
    this.dropdownOuvert = false;
    this.reinitialiserFiltre();
  }
}

reinitialiserFiltre() {
  this.typeSelectionne = 'annee'; 
  this.dateDebut = '';
  this.dateFin = '';
  this.dropdownOuvert = false;

  this.factureProFormaService.getFacturesParPeriode('annee').subscribe({
    next: (data) => {
      this.facturesproforma = data;
      this.currentPage = 0;
    },
    error: (err) => {
      console.error('Erreur lors du chargement des factures:', err);
    }
  });
}

}