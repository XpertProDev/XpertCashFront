import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProduitService } from '../../SERVICES/produit.service';
import { Produit } from '../../MODELS/produit.model';
import { FactureProForma } from '../../MODELS/FactureProForma.model';
import { FactureProFormaService } from '../../SERVICES/factureproforma-service';

@Component({
  selector: 'app-detail-facture-proforma',
  imports: [ FormsModule, CommonModule, ReactiveFormsModule, RouterLink, ],
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
  produits: Produit[] = [];
  // Nouvelle variable pour stocker les ajustements locaux
  pendingAdjustments: any[] = [];
  factureProForma!: FactureProForma;

  constructor(
      private router: Router,
      private produitService: ProduitService,
      private route: ActivatedRoute,
      private factureProFormaService: FactureProFormaService,
    ) {}

  ngOnInit(): void {
    this.getProduits();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadFactureProforma(+id);
    }
    this.getProduits();
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
          console.log('Produits récupérés :', data);
        },
        error: (err) => console.error('Erreur récupération produits :', err)
      });
    }
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
