import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProduitService } from '../../SERVICES/produit.service';
import { Produit } from '../../MODELS/produit.model';
import { FactureProForma, StatutFactureProForma } from '../../MODELS/FactureProForma.model';
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
  siege: string = '';
  produits: Produit[] = [];
  // Nouvelle variable pour stocker les ajustements locaux
  pendingAdjustments: any[] = [];
  newProduitId: number | null = null;
  // inputLignes: { 
  //   produitId: number | null; quantite: number 
  // }[] = [{ produitId: null, quantite: 1 }];
  // confirmedLignes: { produitId: number | null; quantite: number }[] = [];

  inputLignes: { produitId: number | null; quantite: number; ligneDescription: string | null; }[] = [{
    produitId: null, quantite: 1,
    ligneDescription: null 
  }];

  confirmedLignes: {
    produitId: number | null;
    quantite: number;
    ligneDescription: string | null;
  }[] = [];

  factureId!: number;
  showDuplicatePopup: boolean = false;

  // Ajouter ces variables dans la classe
  showStatusConfirmation = false;
  pendingStatut: StatutFactureProForma | null = null;
  selectedStatutLabel = '';
  statusOptions = StatutFactureProForma;

  dateRelance?: string;

  users: any[] = [];
  filteredUsers: any[] = [];

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
    this.loadUsersOfEntreprise(this.userEntrepriseId!);
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.factureId = +idParam;
      this.getUserInfo();
    }
  }

  factureProForma: FactureProForma = {
    id: 0,
    numeroFacture: '',
    siege: '',
    dateCreation: '',
    description: '',
    totalHT: 0,
    tva: false,
    totalFacture: 0,
    lignesFacture: [],
    statut: StatutFactureProForma.BROUILLON,
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
          quantite: l.quantite,
          ligneDescription: l.ligneDescription ?? ''
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
        this.siege = user.siege;

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
      this.inputLignes = [{
        produitId: null, quantite: 1,
        ligneDescription: null
      }];
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

  getFirstApprobateurName(): string | undefined {
    return this.factureProForma?.approbateurs?.[0]?.nomComplet;
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
        prixUnitaire: line.prixUnitaire,
        ligneDescription: line.ligneDescription
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
        produit: { id: l.produitId },
        quantite: l.quantite,
        prixUnitaire: this.getPrixVente(l.produitId),
        ligneDescription: l.ligneDescription
      }))
    };
    
    // Si vous avez aussi des lignes en cours d'ajout dans inputLignes, vous pouvez les concaténer :
    const nouvellesLignes = this.inputLignes
      .filter(l => l.produitId && l.quantite > 0)
      .map(l => ({
        produit: { id: l.produitId! },
        quantite: l.quantite,
        prixUnitaire: this.getPrixVente(l.produitId!),
        ligneDescription: l.ligneDescription
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

  // Ajouter ces méthodes
  canApprove(): boolean {
    return this.factureProForma.statut === StatutFactureProForma.BROUILLON;
  }

  canSendToApproval(): boolean {
    return this.factureProForma.statut === StatutFactureProForma.APPROBATION;
  }

  canSend(): boolean {
    return this.factureProForma.statut === StatutFactureProForma.APPROUVE;
  }

  canValidate(): boolean {
    return this.factureProForma.statut === StatutFactureProForma.ENVOYE;
  }

  openStatusConfirmation(newStatut: StatutFactureProForma): void {
    if (this.isStatusTransitionAllowed(newStatut)) {
      this.pendingStatut = newStatut;
      this.selectedStatutLabel = this.getStatusLabel(newStatut);
      this.showStatusConfirmation = true;

      if (newStatut === StatutFactureProForma.APPROBATION) {
        this.loadUsersOfEntreprise(this.userEntrepriseId!);
      }
    }
  }

  // Modifier la configuration des transitions
  private isStatusTransitionAllowed(newStatut: StatutFactureProForma): boolean {
    if (!this.factureProForma?.statut) return false;

    const allowedTransitions: Record<StatutFactureProForma, StatutFactureProForma[]> = {
      [StatutFactureProForma.BROUILLON]: [
        StatutFactureProForma.APPROUVE,
        StatutFactureProForma.APPROBATION,
        StatutFactureProForma.ENVOYE,
        StatutFactureProForma.VALIDE // Si vous voulez autoriser la validation directe
      ],
      [StatutFactureProForma.APPROBATION]: [
        StatutFactureProForma.APPROUVE,
        StatutFactureProForma.BROUILLON
      ],
      [StatutFactureProForma.APPROUVE]: [
        StatutFactureProForma.ENVOYE,
        StatutFactureProForma.BROUILLON,
        StatutFactureProForma.VALIDE // Optionnel
      ],
      [StatutFactureProForma.ENVOYE]: [
        StatutFactureProForma.VALIDE,
        StatutFactureProForma.APPROUVE,
        StatutFactureProForma.BROUILLON // Optionnel
      ],
      [StatutFactureProForma.VALIDE]: []
    };

    const currentStatut = this.factureProForma.statut as StatutFactureProForma;
    return allowedTransitions[currentStatut]?.includes(newStatut) || false;
  }

  // Ajouter cette méthode publique pour le template
  canTransitionTo(targetStatus: StatutFactureProForma): boolean {
    return this.isStatusTransitionAllowed(targetStatus);
  }

  confirmStatusChange(): void {
    if (!this.pendingStatut) return;

    const selectedUsers = this.users
    .filter(user => user.selected)
    .map(user => user.id);

    const modifications: Partial<FactureProForma> = {
      statut: this.pendingStatut,
      ...(this.pendingStatut === StatutFactureProForma.ENVOYE && this.dateRelance
        ? { dateRelance: this.dateRelance }
        : {})
    };

    // const modifications: Partial<FactureProForma> = {
    //   statut: this.pendingStatut,
    //   // Réinitialise les approbateurs si on revient en arrière
    //   ...(this.pendingStatut === StatutFactureProForma.BROUILLON && {
    //     approbateurs: [],
    //     utilisateurApprobateur: null
    //   })
    // };
    
    this.factureProFormaService.updateFactureProforma(
      this.factureId,
      undefined,
      undefined,
      {
        statut: this.pendingStatut,
        // Réinitialiser les approbateurs si on change de statut
        ...(this.pendingStatut !== StatutFactureProForma.APPROBATION && {
          approbateurs: []
        })
      },
      this.pendingStatut === StatutFactureProForma.APPROBATION ? selectedUsers : undefined
    ).subscribe({
      next: (updatedFacture) => {
        if (this.pendingStatut === StatutFactureProForma.APPROBATION) {
          updatedFacture.approbateurs = this.users.filter(u => selectedUsers.includes(u.id));
        }
        this.factureProForma = updatedFacture;
        
        this.showStatusConfirmation = false;
        this.pendingStatut = null;
        this.dateRelance = undefined;
      },
      error: (err) => {
        console.error('Erreur de mise à jour', err);
        alert('Échec de la mise à jour du statut');
        this.showStatusConfirmation = false;
      }
    });
  }

  cancelStatusChange(): void {
    this.showStatusConfirmation = false;
    this.pendingStatut = null;
  }

  private getStatusLabel(statut: StatutFactureProForma): string {
    const labels: Record<StatutFactureProForma, string> = {
      [StatutFactureProForma.BROUILLON]: 'Brouillon',
      [StatutFactureProForma.APPROBATION]: 'Approbation',
      [StatutFactureProForma.APPROUVE]: 'Approuvé',
      [StatutFactureProForma.ENVOYE]: 'Envoyé',
      [StatutFactureProForma.VALIDE]: 'Validé'
    };
    return labels[statut];
  }
    
  
  loadUsersOfEntreprise(entrepriseId: number) {
    this.isLoading = true;
    this.usersService.getAllUsersOfEntreprise(entrepriseId).subscribe({
      next: (data) => {
        this.users = data.map(user => ({
          ...user,
          selected: false
        }));
        this.filteredUsers = this.users; // Mise à jour des utilisateurs filtrés
        this.isLoading = false;
        console.log('Utilisateurs récupérés:', this.users);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des utilisateurs', err);
        this.isLoading = false;
      }
    });
  }

}
