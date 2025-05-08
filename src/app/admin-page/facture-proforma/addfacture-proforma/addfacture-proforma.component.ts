import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Router, RouterLink } from '@angular/router';
import { ClientService } from '../../SERVICES/client-service';
import { Clients } from '../../MODELS/clients-model';
import { FactureProFormaService } from '../../SERVICES/factureproforma-service';
import { Produit } from '../../MODELS/produit.model';
import { ProduitService } from '../../SERVICES/produit.service';
import { UsersService } from '../../SERVICES/users.service';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { CustomNumberPipe } from '../../MODELS/customNumberPipe';
import { FacturePreviewService } from '../../SERVICES/facture-preview-service';
import { FactureProForma } from '../../MODELS/FactureProForma.model';

@Component({
  selector: 'app-addfacture-proforma',
  // standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    CustomNumberPipe,
  ],
  templateUrl: './addfacture-proforma.component.html',
  styleUrl: './addfacture-proforma.component.scss'
})

export class AddfactureProformaComponent implements OnInit {

  pendingAdjustments: any[] = [];
  description: string = '';
  siege: string = '';
  typeDestinataire: string = 'client';
  selectedClientId: number | null = null;
  selectedEntrepriseId: number | null = null;
  nomEntreprise: string = '';
  boutiqueIds: number[] | undefined;
  produits: Produit[] = [];
  inputLignes: { produitId: number | null; quantite: number; ligneDescription: string | null; }[] = [{
    produitId: null, quantite: 0,
    ligneDescription: null 
  }];
  confirmedLignes: {
    produitId: number | null;
    quantite: number;
    ligneDescription: string | null;
  }[] = [];
  clients: Clients[] = [];
  totalClients = 0;
  noClientsAvailable = false;
  entreprises: any[] = [];
  activeRemise: boolean = true;
  activeTva: boolean = false;
  remisePourcentage: number = 0;
  tva: number = 0;
  entrepriseId: number = 0;
  userEntrepriseId: number | null = null;
  isLoading: boolean = false;
  facturesproforma: any[] = [];
  totalHT: number = 0;
  showDuplicatePopup: boolean = false;
  // apiUrl: any;
  // http: any;


  constructor(
    private router: Router,
    private clientService: ClientService,
    private factureProFormaService: FactureProFormaService,
    private produitService: ProduitService,
    private usersService: UsersService,
    private previewService: FacturePreviewService,
  ) {}

  ngOnInit(): void {
    this.getListClients();
    this.getListEntreprise();
    this.getProduits();
    this.getUserInfo();
  }

  // Toggle remise / TVA
  // onToggleRemiseTVA() {
  //   if (!this.remiseTVAActive) {
  //     this.remisePourcentage = 0;
  //     this.tva = 0;
  //   }
  // }

  // onToggleRemiseTVA() {}

  // Toggle remise / TVA
  onToggleRemise() {
    if (!this.activeRemise) {
      this.remisePourcentage = 0; // Réinitialise si désactivé
    }
  }
  
  onToggleTVA() {
    if (!this.activeTva) {
      this.tva = 0; // Réinitialise si désactivé
    }
  }

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
    return this.activeTva ? (this.getTotalApresRemise() * 0.18) : 0;
  }

  getTotalCommercial() : number {
    return this.getTotalApresRemise();
  }

  getTotalTTC(): number {
    return this.getTotalApresRemise() + this.getMontantTVA();
  }

  // ajouterLigneFacture(index: number) {
  //   const ligne = this.inputLignes[index];
    
  //   if (ligne.produitId && ligne.quantite > 0) {
  //     // Vérifier si le produit existe déjà dans la liste confirmée
  //     const produitExiste = this.confirmedLignes.some(
  //       l => l.produitId === ligne.produitId
  //     );
  
  //     if (produitExiste) {
  //       this.showDuplicatePopup = true; // Afficher le popup
  //       return; // Ne pas ajouter le produit
  //     }
  
  //     const nouvelleLigne = {
  //       ...ligne,
  //       montantTotal: this.getMontantTotal(ligne)
  //     };
      
  //     this.confirmedLignes.push(nouvelleLigne);
  //     // Réinitialiser la ligne d'entrée après ajout
  //     this.inputLignes = [{ produitId: null, quantite: 1 }];
      
  //     this.confirmedLignes = [...this.confirmedLignes];
  //   }
  // }

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
      // On clone bien avec description
      this.confirmedLignes.push({
        produitId: ligne.produitId,
        quantite: ligne.quantite,
        ligneDescription: ligne.ligneDescription
      });
      // Réinitialisation
      this.inputLignes = [{
        produitId: null,
        quantite: 1,
        ligneDescription: null
      }];
    }
  }
  

  updateCalculs() {
    // Force la mise à jour des valeurs
    this.inputLignes = [...this.inputLignes];
    this.confirmedLignes = [...this.confirmedLignes];
  }

  // Méthode pour fermer le popup
  closePopup() {
    this.showDuplicatePopup = false;
  }

  trackByFn(index: number, item: any): number {
    return index; // ou un identifiant unique si disponible
  }

  // Supprimer ligne
  supprimerLigneConfirmee(index: number) {
    this.confirmedLignes.splice(index, 1);
    this.confirmedLignes = [...this.confirmedLignes]; // Force la mise à jour
  }

  getProduitNom(produitId: number | null): string {
    if (!produitId) return '';
    const produit = this.produits.find(p => p.id === produitId);
    return produit?.nom || '';
  }

  goToFacture() {
    this.router.navigate(['/facture-proforma']);
  }

  // Liste Clients
  getListClients() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.clientService.getListClients().subscribe({
        next: (data) => {
          this.clients = data.map(client => ({
            ...client,
            entrepriseClient: client.entrepriseClient
              ? {
                  id: client.entrepriseClient.id,
                  nom: client.entrepriseClient.nom
                }
              : null
          })).sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
          this.totalClients = this.clients.length;
          this.noClientsAvailable = this.clients.length === 0;
        },
        error: (err) => console.error('Erreur récupération clients :', err)
      });
    } else {
      console.error('Token manquant pour clients');
    }
  }

  // Liste Entreprises
  getListEntreprise() {
    const token = this.usersService.getToken(); 
    if (token) {
      this.clientService.getListEntreprises().subscribe({
        next: (data) => {
          this.entreprises = data.sort((a: any, b: any) => (b.id ?? 0) - (a.id ?? 0));
        },
        error: (err) => console.error('Erreur récupération entreprises :', err)
      });
    } else {
      console.error('Token manquant pour entreprises');
    }
  }
  
  // Liste Produits
  getProduits() {
    const token = localStorage.getItem('authToken');
    if (token && this.userEntrepriseId) {
      this.produitService.getProduitsParEntreprise(this.userEntrepriseId).subscribe({
        next: (data: Produit[]) => {
          console.log('Produits récupérés :', data);
          this.produits = data;
          // if (this.lignesFacture.length === 0) {
          //   this.lignesFacture.push({ produitId: data[0]?.id || 0, quantite: 1 });
          // }
        },
        error: (err) => console.error('Erreur récupération produits :', err)
      });
    }
  }

  // getStockActuel(produitId: number | null): number {
  //   if (!produitId) return 0;
  //   const produit = this.produits.find(p => p.id === produitId);
  //   return produit?.quantite ?? 0;
  // }

  // Récupère le prix unitaire d'un produit
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
    // Calcul des lignes confirmées
    const totalConfirmed = this.confirmedLignes.reduce((total, ligne) => 
      total + this.getMontantTotal(ligne), 0);
    
    // Calcul des lignes en cours d'édition
    const totalInput = this.inputLignes.reduce((total, ligne) => {
      if (ligne.produitId && ligne.quantite > 0) {
        return total + this.getMontantTotal(ligne);
      }
      return total;
    }, 0);
  
    return totalConfirmed + totalInput;
  }

  // Création de facture
  creerFactureProforma() {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('Token manquant');
      return;
    }

    const allLignes = [...this.confirmedLignes];

    const currentLine = this.inputLignes[0];
    if (currentLine.produitId && currentLine.quantite > 0) {
      // Vérifier si le produit existe déjà
      const produitExiste = allLignes.some(l => l.produitId === currentLine.produitId);
      
      if (produitExiste) {
        this.showDuplicatePopup = true;
        return;
      }
      
      allLignes.push(currentLine);
    }

    // Vérifier qu'il y a au moins une ligne valide
    if (allLignes.length === 0) {
      alert('Ajoutez au moins un produit');
      return;
    }

    const facture: any = {
      description: this.description,
      lignesFacture: allLignes.map(ligne => ({
        produit: { id: ligne.produitId},
        quantite: ligne.quantite,
        ligneDescription: ligne.ligneDescription,
      }))
    };

    if (this.typeDestinataire === 'client' && this.selectedClientId) {
      facture.client = { id: this.selectedClientId };
    } else if (this.typeDestinataire === 'entreprise' && this.selectedEntrepriseId) {
      facture.entrepriseClient = { id: this.selectedEntrepriseId };
    } else {
      console.error('Destinataire non spécifié');
      return;
    }

    // Appel du service avec 4 paramètres
    this.factureProFormaService.creerFactureProforma(
      facture,
      this.activeRemise ? this.remisePourcentage : undefined,
      this.activeTva,
      (this.activeRemise || this.activeTva)
    ).subscribe({
      next: (res) => {
        console.log('Facture créée avec succès:', res);
        this.router.navigate(['/facture-proforma']);
      },
      error: (err) => console.error('Erreur création facture :', err)
    });

    this.confirmedLignes = [];
    this.inputLignes = [{
      produitId: null, quantite: 1,
      ligneDescription: null
    }];
  }

  removePendingAdjustment(index: number): void {
    this.pendingAdjustments.splice(index, 1);
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


  // apercuFactureProforma(): void {
  //   this.router.navigate(['/facture-proforma-apercu']);
  // }

  apercuFactureProforma(): void {
    // 1) Construire l'objet FactureProForma en mémoire
    const lignes = [
      ...this.confirmedLignes.map(l => ({
        produit: { id: l.produitId! },
        quantite: l.quantite,
        ligneDescription: l.ligneDescription,
        prixUnitaire: this.getPrixVente(l.produitId),
      })),
      // si inputLignes non vide et valide, on peut l’ajouter
      ...this.inputLignes
        .filter(l => l.produitId && l.quantite > 0)
        .map(l => ({
          produit: { id: l.produitId! },
          quantite: l.quantite,
          ligneDescription: l.ligneDescription,
          prixUnitaire: this.getPrixVente(l.produitId),
        }))
    ];

    const preview: FactureProForma = {
      id: 0,
      numeroFacture: '—', // vous pouvez générer ou laisser vide pour l’aperçu
      dateCreation: new Date().toISOString(),
      siege: this.siege,
      description: this.description,
      totalHT: this.getTotalHT(),
      remise: this.activeRemise ? this.remisePourcentage : 0,
      tva: this.activeTva,
      totalFacture: this.getTotalTTC(),
      lignesFacture: lignes as any,
      client: this.typeDestinataire === 'client' && this.selectedClientId
        ? { id: this.selectedClientId, nomComplet: this.getClientName(this.selectedClientId) }
        : undefined,
      entrepriseClient: this.typeDestinataire === 'entreprise' && this.selectedEntrepriseId
        ? { id: this.selectedEntrepriseId, nom: this.getEntrepriseName(this.selectedEntrepriseId) }
        : undefined
    };

    // 2) Pousser vers le service
    this.previewService.setPreview(preview);

    // 3) Naviguer vers l’aperçu
    this.router.navigate(['/facture-proforma-apercu']);
  }

  private getClientName(id: number): string {
    const c = this.clients.find(c => c.id === id);
    return c ? c.nomComplet : '';
  }
  private getEntrepriseName(id: number): string {
    const e = this.entreprises.find(e => e.id === id);
    return e ? e.nom : '';
  }

  
}
