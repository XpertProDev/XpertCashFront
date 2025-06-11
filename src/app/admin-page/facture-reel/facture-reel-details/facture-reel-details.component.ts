import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrepriseService } from '../../SERVICES/entreprise-service';
import { FactureReelService } from '../../SERVICES/facturereel-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomNumberPipe } from '../../MODELS/customNumberPipe';
import { EnLettresPipe } from '../../MODELS/number-to-words.pipe';
import { FactureReelle, LigneFactureDTO } from '../../MODELS/FactureReelle.model';

@Component({
  selector: 'app-facture-reel-details',
  imports: [CommonModule, FormsModule, CustomNumberPipe, EnLettresPipe],
  templateUrl: './facture-reel-details.component.html',
  styleUrl: './facture-reel-details.component.scss'
})
export class FactureReelDetailsComponent implements OnInit {
  // facture: any | null = null;
  
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
  siteWeb!: string;
  signataire!: string;
  signataireNom!: string;
  tauxTva?: number | null;

  facture: FactureReelle | null = null;
  totalTVA: number = 0;
  montantCommercial: number = 0;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private factureService: FactureReelService,
    private entrepriseService: EntrepriseService
  ){}

  ngOnInit(): void {
    // 1) Charger les infos de l’entreprise (en-tête)
    this.getUserEntrepriseInfo();

    // 2) Récupérer l’ID de la facture depuis l’URL et lancer la requête API
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const factureId = +idParam;
      this.loadFactureReelle(factureId);
    } else {
      // Si pas d’ID dans l’URL, rediriger ou afficher message d’erreur
      console.error('Aucun ID de facture passé en paramètre');
      this.router.navigate(['/facture-reel']);
    }
  }

  loadFactureReelle(id: number): void {
  this.factureService.getFactureReelleById(id).subscribe({
    next: (data: FactureReelle) => {
      console.log('Type de dateCreation :', typeof data.dateCreation, data.dateCreation);
      // sum est un nombre, ligne est une LigneFacture
      data.totalHT = data.lignesFacture
        .reduce((sum: number, ligne: LigneFactureDTO) => sum + ligne.montantTotal, 0);

      data.tauxRemise = data.remise > 0
        ? (data.remise / data.totalHT!) * 100
        : 0;

      if (data.tva) {
        this.totalTVA = (data.totalHT! - data.remise) * (this.tauxTva ?? 0);
        this.montantCommercial = data.totalHT! - data.remise;
      }

      this.facture = data;
    },
    error: (err) => {
      console.error('Erreur', err);
      this.router.navigate(['/facture-reel']);
    }
  });
}


  getUserEntrepriseInfo(): void {
    this.entrepriseService.getEntrepriseInfo().subscribe({
      next: (entreprise) => {
        this.nom = entreprise.nom;
        this.siege = entreprise.siege;
        this.email = entreprise.email;
        this.logo = entreprise.logo ? 'http://localhost:8080' + entreprise.logo : null;
        this.secteur = entreprise.secteur;
        this.telephone = entreprise.telephone;
        this.adresse = entreprise.adresse;
        this.nif = entreprise.nif;
        this.banque = entreprise.banque;
        this.nina = entreprise.nina;
        this.pays = entreprise.pays;
        this.rccm = entreprise.rccm;
        this.siteWeb = entreprise.siteWeb;
        this.signataire = entreprise.signataire;
        this.signataireNom = entreprise.signataireNom;
        this.tauxTva = entreprise.tauxTva;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des infos entreprise :', err);
      }
    });
  }

  navigateBack() {
    this.router.navigate(['/facture-reel']);
  }

  getLegalInfo(): string {
    const parts: string[] = [];
    if (this.nina) { parts.push(`NINA : ${this.nina}`); }
    if (this.rccm) { parts.push(`RCCM : ${this.rccm}`); }
    if (this.nif) { parts.push(`NIF : ${this.nif}`); }
    if (this.banque) { parts.push(`Banque : ${this.banque}`); }
    return parts.join(' ; ');
  }

  getAddressInfo(): string {
    const adresse = this.adresse;
    const siege = this.siege;
    const pays = this.pays;

    if (adresse && siege && pays) { return `Adresse : ${adresse} / ${siege}-${pays}`; }
    if (adresse && siege) { return `Adresse : ${adresse} / ${siege}`; }
    if (adresse && pays) { return `Adresse : ${adresse} / ${pays}`; }
    if (siege && pays)  { return `Adresse : ${siege} / ${pays}`; }
    if (adresse)        { return `Adresse : ${adresse}`; }
    if (siege)          { return `Adresse : ${siege}`; }
    if (pays)           { return `Adresse : ${pays}`; }

    return '';
  }

}
