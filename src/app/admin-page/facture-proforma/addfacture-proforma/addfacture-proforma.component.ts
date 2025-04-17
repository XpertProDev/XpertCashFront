import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { ClientService } from '../../SERVICES/client-service';
import { Clients } from '../../MODELS/clients-model';
import { FactureProFormaService } from '../../SERVICES/factureproforma-service';
import { Produit } from '../../MODELS/produit.model';
import { ProduitService } from '../../SERVICES/produit.service';
import { UsersService } from '../../SERVICES/users.service';

@Component({
  selector: 'app-addfacture-proforma',
  // standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ],
  templateUrl: './addfacture-proforma.component.html',
  styleUrl: './addfacture-proforma.component.scss'
})

export class AddfactureProformaComponent implements OnInit {

  pendingAdjustments: any[] = [];
  description: string = '';
  typeDestinataire: string = 'client';
  selectedClientId: number | null = null;
  selectedEntrepriseId: number | null = null;
  nomEntreprise: string = '';
  boutiqueIds: number[] | undefined;
  produits: Produit[] = [];
  lignesFacture: { produitId: number | null; quantite: number }[] = [
    { produitId: null, quantite: 1 }
  ];

  clients: Clients[] = [];
  totalClients = 0;
  noClientsAvailable = false;
  entreprises: any[] = [];

  remiseTVAActive: boolean = false;
  remisePourcentage: number = 0;
  tva: number = 0;
  entrepriseId: number = 0;
  userEntrepriseId: number | null = null;
  isLoading: boolean = false;
  facturesproforma: any[] = [];



  constructor(
    private router: Router,
    private clientService: ClientService,
    private factureProFormaService: FactureProFormaService,
    private produitService: ProduitService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.getListClients();
    this.getListEntreprise();
    this.getProduits();
    this.getUserInfo();
  }

  // Toggle remise / TVA
  onToggleRemiseTVA() {
    if (!this.remiseTVAActive) {
      this.remisePourcentage = 0;
      this.tva = 0;
    }
  }

  // Ligne de produit
  ajouterLigneFacture() {
    this.lignesFacture.push({ produitId: null, quantite: 1 });
  }

  // Supprimer ligne
  supprimerLigneFacture(index: number) {
    if (this.lignesFacture.length > 1) {
      this.lignesFacture.splice(index, 1);
    }
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
          if (this.lignesFacture.length === 0) {
            this.lignesFacture.push({ produitId: data[0]?.id || 0, quantite: 1 });
          }
        },
        error: (err) => console.error('Erreur récupération produits :', err)
      });
    }
  }

  getStockActuel(produitId: number | null): number {
    if (!produitId) return 0;
    const produit = this.produits.find(p => p.id === produitId);
    return produit?.quantite ?? 0;
  }

  // Création de facture
  creerFactureProforma() {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('Token manquant');
      return;
    }
  
    const facture: any = {
      description: this.description,
      lignesFacture: this.lignesFacture.map(ligne => ({
        produit: { id: ligne.produitId },
        quantite: ligne.quantite
      }))
    };
  
    // Ajout du client ou de l'entreprise
    if (this.typeDestinataire === 'client' && this.selectedClientId) {
      facture.client = { id: this.selectedClientId };
    } else if (this.typeDestinataire === 'entreprise' && this.selectedEntrepriseId) {
      facture.entrepriseClient = { id: this.selectedEntrepriseId };
    } else {
      console.error('Destinataire non spécifié');
      return;
    }
  
    // Préparer les query params dynamiquement
    const queryParams: string[] = [];
  
    if (this.remiseTVAActive) {
      if (this.remisePourcentage) {
        queryParams.push(`remisePourcentage=${this.remisePourcentage}`);
      }
      if (this.tva) {
        queryParams.push(`tva=${this.tva}`);
      }
    }
  
    const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
  
    this.factureProFormaService.creerFactureProforma(
      facture,
      this.remiseTVAActive ? this.remisePourcentage : undefined,
      this.remiseTVAActive
    ).subscribe({
      next: (res) => {
        console.log('Facture créée avec succès:', res);
        this.router.navigate(['/facture-proforma']);
      },
      error: (err) => console.error('Erreur création facture :', err)
    });
    
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

  
}
