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
  showDuplicatePopup: boolean = false;

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

         // Initialise les lignes confirmées avec les données existantes
        this.confirmedLignes = data.lignesFacture.map(l => ({
          produitId: l.produit.id,
          quantite: l.quantite
        }));
      
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
    if (!produit) {
      console.error('Produit non trouvé pour ID:', produitId);
      return 0;
    }
    return produit.prixVente || 0;
  }

  // Calcule le montant total pour une ligne
  getMontantTotal(ligne: any): number {
    const prix = this.getPrixVente(ligne.produitId);
    return prix * (ligne.quantite || 0);
  }

  getTotalHT(): number {
    const totalConfirmed = this.confirmedLignes.reduce((total, ligne) => 
      total + this.getMontantTotal(ligne), 0);
    
    const totalInput = this.inputLignes.reduce((total, ligne) => {
      if (ligne.produitId && ligne.quantite > 0) {
        return total + this.getMontantTotal(ligne);
      }
      return total;
    }, 0);
  
    return totalConfirmed + totalInput;
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

    // Méthode pour fermer le popup
    closePopup() {
      this.showDuplicatePopup = false;
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


  ajouterLigneFacture(index: number) {
    const ligne = this.inputLignes[index];
    
    if (ligne.produitId && ligne.quantite > 0) {
      const produitExiste = this.confirmedLignes.some(
        l => l.produitId === ligne.produitId
      );
  
      if (produitExiste) {
        this.showDuplicatePopup = true;
        return;
      }
  
      this.confirmedLignes.push({...ligne});
      this.inputLignes = [{ produitId: null, quantite: 1 }];
    }
  }

  supprimerLigneConfirmee(index: number) {
    // Mettez à jour factureProForma.lignesFacture directement
    this.factureProForma.lignesFacture.splice(index, 1);
    // Optionnel : mettre à jour confirmedLignes si vous l'utilisez pour la vue
    this.confirmedLignes.splice(index, 1);
  }
  
  
  trackByFn(index: number, item: any): number {
    return index;
  }

  cleanFactureForUpdate(facture: FactureProForma): any {
    return {
      client: facture.client ? { id: facture.client.id } : null,
      description: facture.description,
      lignesFacture: facture.lignesFacture.map(line => ({
        // Pour chaque ligne, retourner uniquement les propriétés nécessaires
        id: line.id,
        produit: { id: line.produit.id },
        quantite: line.quantite,
        prixUnitaire: line.prixUnitaire
      }))
      // Ajouter ici les autres propriétés autorisées si nécessaire
    };
  }
  
  submitUpdateForm() {
    const payload = {
      client: this.factureProForma.client ? { id: this.factureProForma.client.id } : null,
      description: this.factureProForma.description,
      // Utilisez confirmedLignes puisque c'est là que se trouvent les modifications (ajouts, suppressions, etc.)
      lignesFacture: this.confirmedLignes.map(l => ({
        // Si une ligne existait déjà, vous pouvez éventuellement inclure l'id
        // id: l.id, // si disponible
        produit: { id: l.produitId },
        quantite: l.quantite,
        prixUnitaire: this.getPrixVente(l.produitId)
      }))
    };
    
    // Si vous avez aussi des lignes en cours d'ajout dans inputLignes, vous pouvez les concaténer :
    const nouvellesLignes = this.inputLignes
      .filter(l => l.produitId && l.quantite > 0)
      .map(l => ({
        produit: { id: l.produitId! },
        quantite: l.quantite,
        prixUnitaire: this.getPrixVente(l.produitId!)
      }));
    
    payload.lignesFacture = [
      ...payload.lignesFacture,
      ...nouvellesLignes
    ];
    
    this.factureProFormaService.updateFactureProforma(
      this.factureId,
      this.activeRemise ? this.remisePourcentage : undefined,
      this.activeTva,
      payload as Partial<FactureProForma>
    ).subscribe({
      next: (res) => {
        console.log('Mise à jour réussie !', res);
        this.router.navigate(['/facture-proforma']);
      },
      error: (err) => {
        console.error('Échec de la mise à jour', err);
        this.errorMessage = err.error.message || 'Erreur lors de la modification';
      }
    });
  }
  
  
  

}
