import { Component, OnInit } from '@angular/core';
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
  
  // Pagination
  pageSize = 6;
  currentPage = 0;
  

  constructor(
    private factureReelService: FactureReelService,
    private usersService: UsersService,
    private router: Router,
    private moduleService: ModuleService,
  ) {}

  ngOnInit(): void {
    this.getUserInfo();
    this.verifierAcces();
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





  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  get paginatedFacturesReel(): any[] {
    const start = this.currentPage * this.pageSize;
    return this.factureReel.slice(start, start + this.pageSize);
  }

  getLibelleStatut(statut: string): string {
    switch (statut) {
      case 'EN_ATTENTE':
        return 'En attente';
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


accesAutorise: boolean = false;
chargementFini: boolean = false;
messageErreur: string = "";
tempsRestantEssai: string | null = null;

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
}