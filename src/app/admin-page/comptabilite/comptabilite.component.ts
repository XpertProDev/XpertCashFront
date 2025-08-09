import { Component, OnInit } from '@angular/core';
import { VersementComptableDTO } from '../MODELS/CaisseModel/comptable.model';
import { VersementComptableService } from '../SERVICES/CaisseService/versementcomptable.service';
import { CommonModule } from '@angular/common';
import { UsersService } from '../SERVICES/users.service';
import { UserRequest } from '../MODELS/user-request';
import { FactureReelService } from '../SERVICES/facturereel-service';

import { SharedModule } from 'src/app/theme/shared/shared.module';

// 3rd party import

import {  NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-comptabilite',
  standalone: true,
  imports: [CommonModule, SharedModule, NgApexchartsModule],
  templateUrl: './comptabilite.component.html',
  styleUrl: './comptabilite.component.scss'
})

export class ComptabiliteComponent implements OnInit {
  // Définition des variables
  versements: any[] = [];
  mouvements: any[] = [];   // Contiendra uniquement les versements validés
  factures: any[] = [];
  boutiqueId!: number;
  errorMessage: string | null = null;
  activeTab: string = 'versements'; // Définit l'onglet actif, initialisé sur 'versements'

  constructor(
    private versementComptableService: VersementComptableService,
    private userService: UsersService,
    private facturesService: FactureReelService
  ) {}

  ngOnInit(): void {
    this.getUserInfo(); // Appel pour récupérer les informations de l'utilisateur
  }

  getUserInfo(): void {
    // Récupération des informations de l'utilisateur
    this.userService.getUserInfo().subscribe({
      next: (user: any) => {
        if (user.boutiques && user.boutiques.length > 0) {
          this.boutiqueId = user.boutiques[0].id; // On prend l'ID de la première boutique
          this.getVersements();  // Récupérer les versements
          this.getFactures();    // Récupérer les factures
        } else {
          this.errorMessage = 'Aucune boutique disponible pour cet utilisateur.';
        }
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des informations utilisateur:', err);
        this.errorMessage = 'Erreur lors de la récupération des informations utilisateur.';
      }
    });
  }

  getVersements(): void {
    if (this.boutiqueId) {
      // Appel à l'API pour récupérer les versements
      this.versementComptableService.getVersementsParBoutique(this.boutiqueId).subscribe({
        next: (data) => {
          this.versements = data;
          this.mouvements = this.versements.filter(versement => versement.statut === 'VALIDE'); // Filtrer les versements validés
          this.errorMessage = null;  // Réinitialiser l'erreur si la requête réussit
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des versements:', err);
          this.errorMessage = 'Erreur lors de la récupération des versements.';
        }
      });
    } else {
      this.errorMessage = 'Aucun boutiqueId fourni.';
    }
  }

  getFactures(): void {
    if (this.boutiqueId) {
      // Appel à l'API pour récupérer les factures
      this.facturesService.getAlFactproreelOfEntreprise(this.boutiqueId).subscribe({
        next: (data) => {
          this.factures = data;
          this.errorMessage = null;  // Réinitialiser l'erreur si la requête réussit
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des factures:', err);
          this.errorMessage = 'Erreur lors de la récupération des factures.';
        }
      });
    } else {
      this.errorMessage = 'Aucun boutiqueId fourni.';
    }
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab; // Change l'onglet actif
  }
}
