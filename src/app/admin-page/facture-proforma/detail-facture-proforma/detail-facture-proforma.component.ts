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
  imports: [ FormsModule, CommonModule, ReactiveFormsModule, RouterLink, CustomNumberPipe],
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
  confirmedLignes: { produitId: number | null; quantite: number }[] = [];
  factureId!: number;

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
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.factureId = +idParam;
      this.getUserInfo();
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
  onRemiseChange() {
    // Force la mise à jour des valeurs
    this.remisePourcentage = Number(this.remisePourcentage);
  }

  // Calcul du montant de la remise
  getMontantRemise(): number {
    return (this.getTotalHT() * this.remisePourcentage) / 100;
  }

  // Calcul du montant HT après remise
  getTotalApresRemise(): number {
    return this.getTotalHT() - this.getMontantRemise();
  }

  // Exemple pour la TVA
  getMontantTVA(): number {
    if (!this.activeTva) return 0;
    const base = this.getTotalApresRemise();
    return base * 0.18; // 18% de TVA
  }

  getTotalCommercial() : number {
    return this.getTotalApresRemise();
  }

  getTotalTTC(): number {
    return this.getTotalApresRemise() + this.getMontantTVA();
  }

  loadFactureProforma(id: number): void {
    this.factureProFormaService.getFactureProformaById(id).subscribe({
      next: (data) => {
        this.factureProForma = data;
      
        // Correction 1 : Utilisez l'opérateur de coalescence null
        this.activeRemise = (data.remise ?? 0) > 0;
        
        // Correction 2 : Ajoutez une vérification de totalHT
        this.remisePourcentage = this.activeRemise 
          ? ((data.remise ?? 0) / (data.totalHT || 1)) * 100 
          : 0;

        this.activeTva = data.tva;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur:', err);
        this.errorMessage = 'Impossible de charger la facture';
        this.isLoading = false;
      }
    });
  }

  getPrixVente(produitId: number | null): number {
    if (!produitId) return 0;
    const produit = this.produits.find(p => p.id === produitId);
    return produit?.prixVente || 0;
  }

  // Calcule le montant total pour une ligne
  getMontantTotal(ligne: any): number {
    const prix = this.getPrixVente(ligne.produitId);
    return prix * (ligne.quantite || 0);
  }

  getTotalHT(): number {
    // Total des lignes existantes
    const totalFacture = this.factureProForma.lignesFacture.reduce((total, ligne) => 
      total + (ligne.prixUnitaire * ligne.quantite), 0);
  
    // Total des nouvelles lignes ajoutées localement
    const totalInput = this.inputLignes.reduce((total, ligne) => {
      if (ligne.produitId && ligne.quantite > 0) {
        return total + this.getMontantTotal(ligne);
      }
      return total;
    }, 0);
  
    return totalFacture + totalInput;
  }

  // Liste Produits
  async getProduits() {
    return new Promise<void>((resolve) => {
      const token = localStorage.getItem('authToken');
      if (token && this.userEntrepriseId) {
        this.produitService.getProduitsParEntreprise(this.userEntrepriseId).subscribe({
          next: (data: Produit[]) => {
            this.produits = data;
            resolve();
            console.log('PRODUITS RÉCUPÉRÉS:', this.produits); // <=== Ajoutez ceci
          },
          error: (err) => console.error('Erreur récupération produits :', err)
        });
      } else {
        console.error('Token manquant ou entreprise ID non défini');
      }
    });
  }

  getUserInfo(): void {
    this.usersService.getUserInfo().subscribe({
      next: (user) => {
        this.nomEntreprise = user.nomEntreprise;
        this.userEntrepriseId = user.entrepriseId;

        this.getProduits().then(() => { 
          this.loadFactureProforma(this.factureId); 
        });
  
        console.log("Infos utilisateur récupérées :", user);
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
