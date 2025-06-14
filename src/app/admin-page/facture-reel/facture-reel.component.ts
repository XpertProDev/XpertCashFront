import { Component, OnInit } from '@angular/core';
import { FactureReelService } from '../SERVICES/facturereel-service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../SERVICES/users.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CustomNumberPipe } from '../MODELS/customNumberPipe';

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
  
  // Pagination
  pageSize = 6;
  currentPage = 0;

  constructor(
    private factureReelService: FactureReelService,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(): void {
    this.usersService.getUserInfo().subscribe({
      next: (user) => {
        this.userEntrepriseId = user.entrepriseId;
        this.getAllFactureReelOfEntreprise(this.userEntrepriseId);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }

  getAllFactureReelOfEntreprise(entrepriseId: number): void {
    this.factureReelService.getAlFactproreelOfEntreprise(entrepriseId).subscribe(
      (response: any[]) => {
        this.factureReel = response;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des factures réelles:', error);
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
}