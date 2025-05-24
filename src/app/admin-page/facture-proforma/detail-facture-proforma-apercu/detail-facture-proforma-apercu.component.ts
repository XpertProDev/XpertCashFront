import { Component, OnInit } from '@angular/core';
import { FactureProForma } from '../../MODELS/FactureProForma.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrepriseService } from '../../SERVICES/entreprise-service';
import { FactureProFormaService } from '../../SERVICES/factureproforma-service';
import { UsersService } from '../../SERVICES/users.service';
import { EnLettresPipe } from '../../MODELS/number-to-words.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomNumberPipe } from '../../MODELS/customNumberPipe';
import { FacturePreviewService } from '../../SERVICES/facture-preview-service';

@Component({
  selector: 'app-detail-facture-proforma-apercu',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomNumberPipe, EnLettresPipe],
  templateUrl: './detail-facture-proforma-apercu.component.html',
  styleUrl: './detail-facture-proforma-apercu.component.scss'
})
export class DetailFactureProformaApercuComponent implements OnInit {
  facture: FactureProForma | null = null;

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

  constructor(
    private previewService: FacturePreviewService,
    public router: Router,
    private entrepriseService: EntrepriseService
  ) {}

  ngOnInit(): void {
    this.getFacturePreview();
    this.getUserEntrepriseInfo();
  }

  getFacturePreview() {
    this.previewService.getPreview().subscribe(data => {
      if (!data) {
        this.router.navigate(['/facture-proforma']);
      } else {
        this.facture = data;
      }
    });
  }

  navigateBack() {
    if (this.facture?.id) {
      this.router.navigate(['/facture-proforma-details', this.facture.id]);
    } else {
      console.error('ID de la facture non disponible');
      // Optionnel : Naviguer vers une page par défaut, par exemple :
      this.router.navigate(['/facture-proforma']);
    }
  }

  getUserEntrepriseInfo(): void {
    this.entrepriseService.getEntrepriseInfo().subscribe({
      next: (entreprise) => {
        this.nom = entreprise.nom;
        this.siege = entreprise.siege;
        this.email = entreprise.email;
        this.logo = 'http://localhost:8080' + entreprise.logo;
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
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }
}