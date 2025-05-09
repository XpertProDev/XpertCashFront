import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntrepriseService } from '../../SERVICES/entreprise-service';

@Component({
  selector: 'app-facture-reel-details',
  imports: [],
  templateUrl: './facture-reel-details.component.html',
  styleUrl: './facture-reel-details.component.scss'
})
export class FactureReelDetailsComponent implements OnInit {

  nom: string | null = null;
  siege!: string;
  email!: string;
  logo: string | null = null; 
  secteur!: string;
  telephone!: string;
  adresse!: string;
  nif!: string;
  banque!: string;
  nina!: string;
  pays!: string;
  rccm!: string;

  ngOnInit(): void {
    this.getUserEntrepriseInfo();
  }

  constructor(
    private router: Router,
    private entrepriseService: EntrepriseService
  ){}

  getUserEntrepriseInfo(): void {
    this.entrepriseService.getEntrepriseInfo().subscribe({
      next: (entreprise) => {
        console.log("Entreprise reçue :", entreprise);
        this.nom = entreprise.nom; 
        this.siege = entreprise.siege;
        this.email = entreprise.email;
        this.logo = entreprise.logo;
        this.secteur = entreprise.secteur;
        this.telephone = entreprise.telephone;
        this.adresse = entreprise.adresse;
        this.nif = entreprise.nif;
        this.banque = entreprise.banque;
        this.nina = entreprise.nina;
        this.pays = entreprise.pays;
        this.rccm = entreprise.rccm;

  
        // Ajout du préfixe si nécessaire
        this.logo = 'http://localhost:8080' + entreprise.logo;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }


  navigateBack() {
    this.router.navigate(['/facture-reel']);
  }



}
