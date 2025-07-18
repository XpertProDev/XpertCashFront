import { Component, HostListener, OnInit } from '@angular/core';
import { FactureReelService } from '../SERVICES/facturereel-service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../SERVICES/users.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CustomNumberPipe } from '../MODELS/customNumberPipe';
import { ModuleService } from '../SERVICES/Module-Service';

@Component({
  selector: 'app-facture-reel',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    CustomNumberPipe
  ],
  templateUrl: './facture-reel.component.html',
  styleUrls: ['./facture-reel.component.scss']
})
export class FactureReelComponent implements OnInit {
  factureReel: any[] = [];
  userEntrepriseId: number | null = null;
  errorMessage: string = '';
  facturesLoaded = false;
  searchTerm: string = '';
  accesAutorise: boolean = false;
  chargementFini: boolean = false;
  messageErreur: string = "";
  tempsRestantEssai: string | null = null;

  factureCounts: { [key: string]: number } = {};
  totalAllFactures: number = 0;
  
  // Pagination
  pageSize = 10;
  currentPage = 0;

  isListView = false;
  showDropdown = false;

  sortField: string = 'numeroFacture';
  sortDirection: 'asc' | 'desc' = 'asc';

  selectedStatut: string | null = null;
  statutsPaiement = [
    { value: 'EN_ATTENTE', label: 'Non payé' },
    { value: 'PARTIELLEMENT_PAYEE', label: 'Part. Payé' },
    { value: 'PAYEE', label: 'Payé' }
  ];
  
  constructor(
    private factureReelService: FactureReelService,
    private usersService: UsersService,
    private router: Router,
    private moduleService: ModuleService,
  ) {}

  ngOnInit(): void {
    const savedView = localStorage.getItem('factureReelView');
    if (savedView) {
      this.isListView = savedView === 'list';
    }

    this.getUserInfo();
    this.verifierAcces();
  }

  toggleView(viewType: 'list' | 'grid'): void {
    this.isListView = viewType === 'list';
    this.showDropdown = false;
    // Sauvegarder la préférence
    localStorage.setItem('factureReelView', viewType);
  }

  sort(field: string): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }

    this.factureReel.sort((a, b) => {
      // Gestion des propriétés imbriquées
      const getValue = (obj: any, path: string) => 
        path.split('.').reduce((o, p) => o?.[p], obj);
      
      const valueA = getValue(a, field)?.toString().toLowerCase() ?? '';
      const valueB = getValue(b, field)?.toString().toLowerCase() ?? '';
      
      return valueA.localeCompare(valueB) * (this.sortDirection === 'asc' ? 1 : -1);
    });
  }

  getUserInfo(): void {
    this.usersService.getUserInfo().subscribe({
      next: (user) => {
        this.userEntrepriseId = user.entrepriseId;
        this.getAllFactureReelOfEntreprise(this.userEntrepriseId);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
        this.facturesLoaded = true;
      }
    });
  }

  getAllFactureReelOfEntreprise(entrepriseId: number): void {
    this.facturesLoaded = false;
    this.factureReelService.getAlFactproreelOfEntreprise(entrepriseId).subscribe(
      (response: any[]) => {
        this.factureReel = response;
        this.errorMessage = "";
        this.facturesLoaded = true;

        this.calculateFactureCounts();
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des factures réelles:', error);

        if (error.error && error.error.error && typeof error.error.error === 'string') {
          let msg = error.error.error;

          // Supprime le début standardisé "Une erreur est survenue : " s'il est présent
          if (msg.startsWith("Une erreur est survenue :")) {
            msg = msg.replace("Une erreur est survenue :", "").trim();
          }

          this.errorMessage = msg;
        } else {
          this.errorMessage = "Une erreur est survenue.";
        }

        this.factureReel = [];
        this.facturesLoaded = true;
      }
    );
  }

  calculateFactureCounts(): void {
    // Réinitialiser les compteurs
    this.factureCounts = {};
    this.totalAllFactures = this.factureReel.length;

    // Compter par statut
    this.factureReel.forEach(facture => {
      const statut = facture.statutPaiement;
      if (statut) {
        this.factureCounts[statut] = (this.factureCounts[statut] || 0) + 1;
      }
    });
  }

  selectStatut(statut: string | null): void {
    this.selectedStatut = statut;
    this.currentPage = 0;
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  get paginatedFacturesReel(): any[] {
    const start = this.currentPage * this.pageSize;
    return this.filteredFacturesReel.slice(start, start + this.pageSize);
  }

  getLibelleStatut(statut: string): string {
    switch (statut) {
      case 'EN_ATTENTE':
        return 'Non payé';
      case 'PARTIELLEMENT_PAYEE':
        return 'Part. payée';
      case 'PAYEE':
      case 'PAYE':
        return 'Payée';
      default:
        return 'Inconnu';
    }
  }

  clearSearch(): void {
    this.searchTerm = '';
  }

  getImageSrc(statut: string): string {
    switch (statut) {
      case 'EN_ATTENTE':
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-orange.png';
      case 'PARTIELLEMENT_PAYEE':
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-bleu-.png';
      case 'PAYEE':
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-Vert.png';
      default:
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-Gris.png';
    }
  }

  getStatutClass(statut: string): string {
    switch (statut) {
      case 'EN_ATTENTE':
        return 'etat-orange';
      case 'PARTIELLEMENT_PAYEE':
        return 'etat-bleu';
      case 'PAYEE':
        return 'etat-vert';
      default:
        return 'etat-gris';
    }
  }

  showDetails(factureId: number): void {
    this.router.navigate(['/facture-reel-details', factureId]);
  }

  // Getter pour les factures filtrées
  get filteredFacturesReel(): any[] {
    let result = [...this.factureReel];
    
    // Filtre par statut
    if (this.selectedStatut) {
      result = result.filter(f => f.statutPaiement === this.selectedStatut);
    }
    
    // Filtre par recherche
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(f => 
        (f.numeroFacture?.toLowerCase().includes(term)) ||
        (f.client?.nom?.toLowerCase().includes(term)) ||
        (f.entrepriseClient?.nom?.toLowerCase().includes(term))
      );
    }
    
    return result;
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

  redirigerAccueil(): void {
    this.router.navigate(['/']);
  }

   // Trier
    typeSelectionne: 'jour' | 'mois' | 'annee' | 'personnalise' = 'jour';
    dateDebut: string = '';
    dateFin: string = '';
    factures: any[] = [];

    dropdownOuvert = false;



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

    @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
    if (!target.closest('.filter-dropdown-wrapper') && !target.closest('.filter-toggle-icon')) {
      this.dropdownOuvert = false;
      this.reinitialiserFiltre();
    }
  }



reinitialiserFiltre() {
  this.typeSelectionne = 'jour'; 
  this.dateDebut = '';
  this.dateFin = '';
  this.dropdownOuvert = false;

  this.factureReelService.getFacturesParPeriode('jour').subscribe({
    next: (data) => {
      this.factureReel = data;
      this.currentPage = 0;
    },
    error: (err) => {
      console.error('Erreur lors du chargement des factures:', err);
    }
  });
}

   appliquerFiltre() {
    if (this.typeSelectionne === 'personnalise' && (!this.dateDebut || !this.dateFin)) {
      alert("Veuillez sélectionner une date de début et de fin.");
      return;
    }

    this.factureReelService
      .getFacturesParPeriode(this.typeSelectionne, this.dateDebut, this.dateFin)
      .subscribe({
        next: (data) => {
          this.factureReel = data;
          this.currentPage = 0;
          this.dropdownOuvert = false;
        },
        error: (err) => {
          console.error('Erreur de chargement des factures:', err);
        }
      });
  }

}