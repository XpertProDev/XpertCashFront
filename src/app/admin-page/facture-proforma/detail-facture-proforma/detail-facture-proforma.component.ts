import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProduitService } from '../../SERVICES/produit.service';
import { Produit } from '../../MODELS/produit.model';
import { FactureProForma } from '../../MODELS/FactureProForma.model';
import { FactureProFormaService } from '../../SERVICES/factureproforma-service';
import { CustomNumberPipe } from '../../MODELS/customNumberPipe';
import { RoundPipe } from '../../MODELS/round.pipe';
import { UsersService } from '../../SERVICES/users.service';

@Component({
  selector: 'app-detail-facture-proforma',
  imports: [ FormsModule, CommonModule, ReactiveFormsModule, RouterLink, CustomNumberPipe, RoundPipe],
  templateUrl: './detail-facture-proforma.component.html',
  styleUrl: './detail-facture-proforma.component.scss'
})
export class DetailFactureProformaComponent implements OnInit {
  isLoading: boolean = false;
  activeRemise: boolean = false;
  activeTva: boolean = false;
  remisePourcentage: number = 0;
  tva: number = 0;
  errorMessage: string = '';
  userEntrepriseId: number | null = null;
  nomEntreprise: string = '';
  produits: Produit[] = [];
  // Nouvelle variable pour stocker les ajustements locaux
  pendingAdjustments: any[] = [];
  newProduitId: number | null = null;
  inputLignes: { produitId: number | null; quantite: number }[] = [{ produitId: null, quantite: 1 }];

  constructor(
      private router: Router,
      private produitService: ProduitService,
      private route: ActivatedRoute,
      private factureProFormaService: FactureProFormaService,
      private usersService: UsersService,
    ) {}

  ngOnInit(): void {
    this.getProduits();
    this.getUserInfo();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadFactureProforma(+id);
    }
  }

  factureProForma: FactureProForma = {
    id: 0,
    numeroFacture: '',
    dateCreation: '',
    description: '',
    totalHT: 0,
    tva: false,
    totalFacture: 0,
    lignesFacture: []
  } as FactureProForma;

  // Calcul du montant de la remise
  get montantRemise(): number {
    return this.factureProForma?.remise || 0;
  }

  // Calcul du montant TVA
  get montantTVA(): number {
    return this.activeTva ? (this.factureProForma?.totalHT || 0) * 0.18 : 0;
  }

  // Calcul du montant commercial (HT après remise)
  get montantCommercial(): number {
    return (this.factureProForma?.totalHT || 0) - this.montantRemise;
  }

  // Calcul du total TTC
  get totalTTC(): number {
    return this.montantCommercial + this.montantTVA;
  }

  loadFactureProforma(id: number): void {
    this.factureProFormaService.getFactureProformaById(id).subscribe({
      next: (data) => {
        this.factureProForma = data;
        this.activeRemise = !!data.remise && data.remise > 0;
        this.remisePourcentage = this.activeRemise 
          ? (data.remise! / data.totalHT) * 100 
          : 0;
        this.activeTva = data.tva;
        this.tva = this.activeTva ? 18 : 0;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur:', err);
        this.errorMessage = 'Impossible de charger la facture';
        this.isLoading = false;
      }
    });
  }

  // Liste Produits
  getProduits() {
    const token = localStorage.getItem('authToken');
    if (token && this.userEntrepriseId) {
      this.produitService.getProduitsParEntreprise(this.userEntrepriseId).subscribe({
        next: (data: Produit[]) => {
          this.produits = data;
          console.log('PRODUITS RÉCUPÉRÉS:', this.produits); // <=== Ajoutez ceci
        },
        error: (err) => console.error('Erreur récupération produits :', err)
      });
    } else {
      console.error('Token manquant ou entreprise ID non défini');
    }
  }

  getUserInfo(): void {
    this.usersService.getUserInfo().subscribe({
      next: (user) => {
        this.nomEntreprise = user.nomEntreprise;
        this.userEntrepriseId = user.entrepriseId;
  
        console.log("Infos utilisateur récupérées :", user);
  
        this.getProduits();
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }

  // Méthode de mise à jour des calculs
  updateCalculs() {
    this.inputLignes = [...this.inputLignes];
  }

  // Méthode pour récupérer le nom du produit
  getProduitNom(produitId: number | null): string {
    if (!produitId) return '';
    const produit = this.produits.find(p => p.id === produitId);
    return produit?.nom || '';
  }

  // Toggle remise / TVA
  onToggleRemise() {
    if (!this.activeRemise) {
      this.remisePourcentage = 0;
    }
  }

  // Toggle remise / TVA
  onToggleTVA() {
    if (!this.activeTva) {
      this.tva = 0;
    }
  }

  removePendingAdjustment() {}

  ajouterLigneFacture() {}

  submitUpdateForm() {}

}
