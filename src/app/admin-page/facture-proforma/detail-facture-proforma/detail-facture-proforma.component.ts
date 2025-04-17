import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProduitService } from '../../SERVICES/produit.service';
import { Produit } from '../../MODELS/produit.model';

@Component({
  selector: 'app-detail-facture-proforma',
  imports: [ FormsModule, CommonModule, ReactiveFormsModule, RouterLink, ],
  templateUrl: './detail-facture-proforma.component.html',
  styleUrl: './detail-facture-proforma.component.scss'
})
export class DetailFactureProformaComponent implements OnInit {
  isLoading: boolean = false;
  remiseTVAActive: boolean = false;
  remisePourcentage: number = 0;
  tva: number = 0;
  errorMessage: string = '';
  userEntrepriseId: number | null = null;
  produits: Produit[] = [];
  // Nouvelle variable pour stocker les ajustements locaux
  pendingAdjustments: any[] = [];

  constructor(
      private router: Router,
      // private clientService: ClientService,
      // private factureProFormaService: FactureProFormaSer vice,
      private produitService: ProduitService,
      // private usersService: UsersService
    ) {}

  ngOnInit(): void {
    this.getProduits();
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
  onToggleRemiseTVA() {
    if (!this.remiseTVAActive) {
      this.remisePourcentage = 0;
      this.tva = 0;
    }
  }

  removePendingAdjustment() {}  

  ajouterLigneFacture() {}

  submitUpdateForm() {}

}
