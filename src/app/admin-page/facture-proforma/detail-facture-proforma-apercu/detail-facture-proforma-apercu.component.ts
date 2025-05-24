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

@Component({
  selector: 'app-detail-facture-proforma-apercu',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, CustomNumberPipe, EnLettresPipe],
  templateUrl: './detail-facture-proforma-apercu.component.html',
  styleUrl: './detail-facture-proforma-apercu.component.scss'
})
export class DetailFactureProformaApercuComponent implements OnInit {
  facture: FactureProForma | null = null;
  factureId!: number;
  
  // Variables entreprise
  nom!: string;
  siege!: string;
  email!: string;
  logo!: string;
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
    private route: ActivatedRoute,
    private factureService: FactureProFormaService,
    private entrepriseService: EntrepriseService,
    private usersService: UsersService,
    public router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.factureId = this.route.snapshot.params['id'];
    await this.getUserInfo();
    this.loadFacture();
  }

  async getUserInfo(): Promise<void> {
    const user = await this.usersService.getUserInfo().toPromise();
    if(user) {
      await this.getEntrepriseInfo(user.entrepriseId);
    }
  }

  async getEntrepriseInfo(entrepriseId: number): Promise<void> {
    const entreprise = await this.entrepriseService.getEntrepriseInfo().toPromise();
    if(entreprise) {
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
      this.siteWeb = entreprise.siteWeb;
      this.signataire = entreprise.signataire;
      this.signataireNom = entreprise.signataireNom;

      // Ajout du préfixe si nécessaire
      this.logo = 'http://localhost:8080' + entreprise.logo;
    }
  }

  loadFacture(): void {
    this.factureService.getFactureProformaById(this.factureId).subscribe({
      next: (data) => {
        this.facture = data;
      },
      error: (err) => console.error('Erreur chargement facture:', err)
    });
  }

  navigateBack(): void {
    this.router.navigate(['/detail-facture-proforma', this.factureId]);
  }
}