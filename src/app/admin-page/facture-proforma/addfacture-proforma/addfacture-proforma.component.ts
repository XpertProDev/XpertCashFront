import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { ClientService } from '../../SERVICES/client-service';
import { Clients } from '../../MODELS/clients-model';
import { FactureProFormaService } from '../../SERVICES/factureproforma-service';
import { Produit } from '../../MODELS/produit.model';
import { ProduitService } from '../../SERVICES/produit.service';
import { UsersService } from '../../SERVICES/users.service';
import { Observable, map, startWith } from 'rxjs';
import { CustomNumberPipe } from '../../MODELS/customNumberPipe';
import { FacturePreviewService } from '../../SERVICES/facture-preview-service';
import { FactureProForma } from '../../MODELS/FactureProForma.model';
import { FormStateService } from '../../SERVICES/form-state.service';
import { ProduitFormComponent } from '../../produits/produit-form/produit-form.component';
import { MatIconModule } from '@angular/material/icon';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { ClientFormComponent } from '../../clients/client-form/client-form.component';
import { EntrepriseFormComponent } from '../../clients/entreprise-form/entreprise-form.component';
import { Entreprise } from '../../MODELS/entreprise-model';

@Component({
  selector: 'app-addfacture-proforma',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    CustomNumberPipe,
    MatIconModule,
    NgxBarcode6Module,
    ProduitFormComponent,
    ClientFormComponent,
    EntrepriseFormComponent,
  ],
  templateUrl: './addfacture-proforma.component.html',
  styleUrls: ['./addfacture-proforma.component.scss']
})
export class AddfactureProformaComponent implements OnInit {
  pendingAdjustments: any[] = [];
  description: string = '';
  dateFacture: string = '';
  siege: string = '';
  typeDestinataire: string = 'client';
  selectedClientId: number | null = null;
  selectedEntrepriseId: number | null = null;
  selectedEntreprise: { id: number; nom: string } | null = null;
  nomEntreprise: string = '';
  boutiqueIds: number[] | undefined;
  produits: Produit[] = [];
  inputLignes: { produitId: number | null; quantite: number; ligneDescription: string | null; isDuplicate: boolean; }[] = [{
    produitId: null,
    quantite: 0,
    ligneDescription: null,
    isDuplicate: false,
  }];
  confirmedLignes: {
    produitId: number | null;
    quantite: number;
    ligneDescription: string | null;
    isDuplicate: boolean;
  }[] = [];
  clients: Clients[] = [];
  totalClients = 0;
  noClientsAvailable = false;
  entreprises: any[] = [];
  activeRemise: boolean = false;
  activeTva: boolean = false;
  remisePourcentage: number = 0;
  tva: number = 0;
  entrepriseId: number = 0;
  userEntrepriseId: number | null = null;
  isLoading: boolean = false;
  facturesproforma: any[] = [];
  totalHT: number = 0;
  showDuplicatePopup: boolean = false;
  showExistingInvoiceError = false;
  errorMessage = '';
  hasDuplicateError = false;
  duplicateIndex: number | null = null;

  // Ajouts pour mat-autocomplete
  productControl = new FormControl();
  filteredProduits: Observable<Produit[]>;

  // Ajouter ces variables
  showProductFormPanel: boolean = false;
  panelAnimationState: 'hidden' | 'visible' = 'hidden';

  clientControl = new FormControl();
  filteredClients: Observable<Clients[]>;
  showClientFormPanel: boolean = false;

  entrepriseControl = new FormControl();
  filteredEntreprises: Observable<any[]>;
  showEntrepriseFormPanel: boolean = false;

  constructor(
    private router: Router,
    private clientService: ClientService,
    private factureProFormaService: FactureProFormaService,
    private produitService: ProduitService,
    private usersService: UsersService,
    private previewService: FacturePreviewService,
    private formStateService: FormStateService,
    private cdr: ChangeDetectorRef
  ) {
    // Initialisation du filtre pour l'autocomplete
    this.filteredProduits = this.productControl.valueChanges.pipe(
      startWith(null),
      map(value => typeof value === 'string' ? value : value?.nom),
      map(name => name ? this._filterProduits(name) : this.produits.slice())
    );

    this.filteredClients = this.clientControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value?.nomComplet)),
      map(name => (name ? this._filterClients(name) : this.clients.slice()))
    );

    // Ajoutez après les autres initialisations
    this.filteredEntreprises = this.entrepriseControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value?.nom)),
      map(name => (name ? this._filterEntreprises(name) : this.entreprises.slice()))
    );
  }

  private _filterClients(name: string): Clients[] {
    const filterValue = name.toLowerCase();
    return this.clients.filter(client =>
      client.nomComplet.toLowerCase().includes(filterValue) ||
      (client.entrepriseClient?.nom.toLowerCase().includes(filterValue))
    );
  }

  displayClient(client: Clients): string {
    if (!client) return '';
    return client.entrepriseClient 
      ? `${client.nomComplet} - ${client.entrepriseClient.nom}`
      : client.nomComplet;
  }

  onClientSelected(event: MatAutocompleteSelectedEvent) { 
    if (event.option.value === null) {
      this.openClientFormPanel(); // Ouvre le formulaire pour créer un client
    } else {
      this.selectedClientId = event.option.value.id;
      // Optionnel : autres actions liées à la sélection
    }
  }

  onClientFocus() {
    if (!this.clientControl.value) {
      this.clientControl.setValue('');
    }
  }

  private _filterEntreprises(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.entreprises.filter(entreprise => 
      entreprise.nom.toLowerCase().includes(filterValue)
    );
  }

  displayEntreprise(entreprise: any): string {
    return entreprise && entreprise.nom ? entreprise.nom : '';
  }

  onEntrepriseSelected(event: MatAutocompleteSelectedEvent) {
    if (event.option.value === null) {
      this.openEntrepriseFormPanel();
    } else {
      this.selectedEntreprise = event.option.value;
    }
  }

  onEntrepriseFocus() {
    if (!this.entrepriseControl.value) {
      this.entrepriseControl.setValue('');
    }
  }

  async ngOnInit(): Promise<void> {
    this.getUserInfo();
    await Promise.all([
      this.getListClients(),
      this.getListEntreprise(),
      this.getProduits()
    ]);

    const savedState = this.formStateService.getState();
    if (savedState) {
      this.typeDestinataire = savedState.typeDestinataire;
      this.selectedClientId = savedState.selectedClientId;
      this.selectedEntreprise = savedState.selectedEntreprise;
      this.description = savedState.description;
      this.inputLignes = savedState.inputLignes;
      this.confirmedLignes = savedState.confirmedLignes;
      this.activeRemise = savedState.activeRemise;
      this.remisePourcentage = savedState.remisePourcentage;
      this.activeTva = savedState.activeTva;

      if (savedState.clientControl) {
        this.clientControl.setValue(savedState.clientControl);
      }

      if (savedState.entrepriseControl) {
        this.entrepriseControl.setValue(savedState.entrepriseControl);
      }
    }
  }

  navigateBack() {
    this.router.navigate(['/addfacture-proforma']);
  }

  onToggleRemise() {
    if (!this.activeRemise) {
      this.remisePourcentage = 0;
    }
  }

  onToggleTVA() {
    if (!this.activeTva) {
      this.tva = 0;
    }
  }

  onRemiseChange() {
    this.remisePourcentage = Number(this.remisePourcentage);
  }

  getMontantRemise(): number {
    return (this.getTotalHT() * this.remisePourcentage) / 100;
  }
  

  getTotalApresRemise(): number {
    return this.getTotalHT() - this.getMontantRemise();
  }

  getMontantTVA(): number {
    return this.activeTva ? (this.getTotalApresRemise() * 0.18) : 0;
  }

  getTotalCommercial(): number {
    return this.getTotalApresRemise();
  }

  getTotalTTC(): number {
    return this.getTotalApresRemise() + this.getMontantTVA();
  }

  updateCalculs() {
    this.inputLignes = [...this.inputLignes];
    this.confirmedLignes = [...this.confirmedLignes];
  }

  closePopup() {
    if (this.duplicateIndex !== null) {
      const idx = this.duplicateIndex;
      this.inputLignes[idx] = {
        produitId: null,
        quantite: 1,
        ligneDescription: null,
        isDuplicate: false
      };
      this.duplicateIndex = null;
    }
    this.showDuplicatePopup = false;
    this.updateCalculs();
    this.cdr.detectChanges();
  }

  trackByFn(index: number, item: any): number {
    return index;
  }

  supprimerLigneConfirmee(index: number) {
    this.confirmedLignes.splice(index, 1);
    this.confirmedLignes = [...this.confirmedLignes];
  }

  getProduitNom(produitId: number | null): string {
    if (!produitId) return '';
    const produit = this.produits.find(p => p.id === produitId);
    return produit?.nom || '';
  }

  goToFacture() {
    this.description = '';
    this.typeDestinataire = 'client';
    this.selectedClientId = null;
    this.selectedEntrepriseId = null;
    this.selectedEntreprise = null;
    this.inputLignes = [{
      produitId: null,
      quantite: 0,
      ligneDescription: null,
      isDuplicate: false,
    }];
    this.confirmedLignes = [];
    this.activeRemise = false;
    this.remisePourcentage = 0;
    this.activeTva = false;
    this.formStateService.clearState();
    this.router.navigate(['/facture-proforma']);
  }

  getListClients() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.clientService.getListClients().subscribe({
        next: (data) => {
          this.clients = data.map(client => ({
            ...client,
            entrepriseClient: client.entrepriseClient
              ? { id: client.entrepriseClient.id, nom: client.entrepriseClient.nom }
              : null
          })).sort((a, b) => (b.id ?? 0) - (a.id ?? 0));

          this.clientControl.setValue(null);
          this.totalClients = this.clients.length;
          this.noClientsAvailable = this.clients.length === 0;
        },
        error: (err) => console.error('Erreur récupération clients :', err)
      });
    } else {
      console.error('Token manquant pour clients');
    }
  }

  getListEntreprise() {
    const token = this.usersService.getToken();
    if (token) {
      this.clientService.getListEntreprises().subscribe({
        next: (data) => {
          this.entreprises = data.sort((a: any, b: any) => (b.id ?? 0) - (a.id ?? 0));
          this.entrepriseControl.setValue(null);
        },
        error: (err) => console.error('Erreur récupération entreprises :', err)
      });
    } else {
      console.error('Token manquant pour entreprises');
    }
  }

  getProduits() {
    const token = localStorage.getItem('authToken');
    if (token && this.userEntrepriseId) {
      this.produitService.getProduitsParEntreprise(this.userEntrepriseId!).subscribe({
        next: (data: Produit[]) => {
          console.log('Produits récupérés :', data);
          this.produits = data;
        },
        error: (err) => console.error('Erreur récupération produits :', err)
      });
    }
  }

  getPrixVente(produitId: number | null): number {
    if (!produitId) return 0;
    const produit = this.produits.find(p => p.id === produitId);
    return produit?.prixVente || 0;
  }

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

  creerFactureProforma() {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('Token manquant');
      return;
    }

    if (!this.selectedClientId && !this.selectedEntreprise) {
      this.errorMessage = 'Sélectionnez un client ou une entreprise';
      this.showExistingInvoiceError = true;
      return;
    }

    const allLignes = [...this.confirmedLignes];
    const currentLine = this.inputLignes[0];
    if (currentLine.produitId && currentLine.quantite > 0) {
      const produitExiste = allLignes.some(l => l.produitId === currentLine.produitId);
      if (produitExiste) {
        this.showDuplicatePopup = true;
        return;
      }
      allLignes.push(currentLine);
    }

    if (allLignes.length === 0) {
      alert('Ajoutez au moins un produit');
      return;
    }

    const dateSeule = this.dateFacture.includes('T')
      ? this.dateFacture.split('T')[0]
      : this.dateFacture;

    const facture: any = {
      description: this.description,
      lignesFacture: allLignes.map(ligne => ({
        produit: { id: ligne.produitId },
        quantite: ligne.quantite,
        ligneDescription: ligne.ligneDescription,
      }))
    };

    if (this.dateFacture) {
      facture.dateFacture = dateSeule;
    }

    if (this.typeDestinataire === 'client' && this.selectedClientId) {
      facture.client = { id: this.selectedClientId };
    } else if (this.typeDestinataire === 'entreprise' && this.selectedEntreprise) {
      facture.entrepriseClient = { id: this.selectedEntreprise.id };
    } else {
      console.error('Destinataire non spécifié');
      return;
    }

    this.factureProFormaService.creerFactureProforma(
      facture,
      this.activeRemise ? this.remisePourcentage : undefined,
      this.activeTva,
      (this.activeRemise || this.activeTva)
    ).subscribe({
      next: (res) => {
        console.log('Facture créée avec succès:', res);
        this.formStateService.clearState();
        this.confirmedLignes = [];
        this.inputLignes = [{
          produitId: null,
          quantite: 1,
          ligneDescription: null,
          isDuplicate: false
        }];
        this.router.navigate(['/facture-proforma']);
      },
      error: (err) => {
        const serverMessage = typeof err.error === 'string'
          ? err.error
          : err.error?.message;
        this.errorMessage = serverMessage || 'Erreur lors de la création : erreur inconnue';
        this.showExistingInvoiceError = true;
      }
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

  onProduitChange(produitId: number | null, ligne: any, index: number) {
    ligne.produitId = produitId;
    ligne.isDuplicate = false;

    if (produitId) {
      const isInConfirmed = this.confirmedLignes.some(l => l.produitId === produitId);
      const isInInput = this.inputLignes.some((l, i) => i !== index && l.produitId === produitId);

      if (isInConfirmed || isInInput) {
        this.duplicateIndex = index;
        this.showDuplicatePopup = true;
        setTimeout(() => {
          ligne.produitId = null;
          ligne.ligneDescription = null;
          this.updateCalculs();
          this.cdr.detectChanges();
        }, 0);
        return;
      }

      const produit = this.produits.find(p => p.id === produitId);
      ligne.ligneDescription = produit?.description || null;
    } else {
      ligne.ligneDescription = null;
    }

    this.updateCalculs();
  }

  ajouterLigneFacture(index: number) {
    const ligne = this.inputLignes[index];

    if (ligne.produitId && ligne.quantite > 0) {
      const allLignes = [...this.confirmedLignes, ...this.inputLignes];
      const produitExiste = allLignes.filter(l => l !== ligne)
        .some(l => l.produitId === ligne.produitId);

      if (produitExiste) {
        this.duplicateIndex = index;
        this.showDuplicatePopup = true;
        ligne.isDuplicate = true;
        setTimeout(() => ligne.isDuplicate = false, 500);
        return;
      }

      this.confirmedLignes.push({ ...ligne });
      this.inputLignes = [{
        produitId: null,
        quantite: 1,
        ligneDescription: null,
        isDuplicate: false
      }];
      this.productControl.setValue(null); // Réinitialiser l'autocomplete
    }
  }

  apercuFactureProforma(): void {
    this.formStateService.saveState({
      typeDestinataire: this.typeDestinataire,
      selectedClientId: this.selectedClientId,
      selectedEntreprise: this.selectedEntreprise,
      description: this.description,
      inputLignes: this.inputLignes,
      confirmedLignes: this.confirmedLignes,
      activeRemise: this.activeRemise,
      remisePourcentage: this.remisePourcentage,
      activeTva: this.activeTva,
      clientControl: this.clientControl.value,
      entrepriseControl: this.entrepriseControl.value
    });

    const lignes = [
      ...this.confirmedLignes.map(l => ({
        produit: {
          id: l.produitId!,
          nom: this.getProduitNom(l.produitId!)
        },
        quantite: l.quantite,
        ligneDescription: l.ligneDescription,
        prixUnitaire: this.getPrixVente(l.produitId),
      })),
      ...this.inputLignes
        .filter(l => l.produitId && l.quantite > 0)
        .map(l => ({
          produit: {
            id: l.produitId!,
            nom: this.getProduitNom(l.produitId!)
          },
          quantite: l.quantite,
          ligneDescription: l.ligneDescription,
          prixUnitaire: this.getPrixVente(l.produitId),
        }))
    ];

    const preview: FactureProForma = {
      id: 0,
      numeroFacture: '—',
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
      entrepriseClient: this.typeDestinataire === 'entreprise' && this.selectedEntreprise
        ? { id: this.selectedEntreprise.id, nom: this.selectedEntreprise.nom }
        : undefined,
    };

    this.previewService.setPreview(preview);
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

onProduitAjoute(nouveauProduit: Produit) {
  // Ajouter le nouveau produit à la liste des produits
  this.produits.push(nouveauProduit);

  // Mettre à jour la ligne de facture actuelle
  if (this.inputLignes.length > 0) {
    this.inputLignes[0].produitId = nouveauProduit.id;
    this.inputLignes[0].ligneDescription = nouveauProduit.description || null;
    this.inputLignes[0].quantite = 1; // Quantité par défaut
    this.inputLignes[0].isDuplicate = false;

    // Mettre à jour l'autocomplete pour afficher le nom du nouveau produit
    this.productControl.setValue(nouveauProduit);

    // Forcer la mise à jour des options filtrées
    this.filteredProduits = this.productControl.valueChanges.pipe(
      startWith(nouveauProduit),
      map(value => (typeof value === 'string' ? value : value?.nom)),
      map(name => (name ? this._filterProduits(name) : this.produits.slice()))
    );

    // Déclencher une mise à jour de l'interface utilisateur
    this.updateCalculs();
    this.cdr.detectChanges();
  }

  // Fermer le panneau du formulaire
  this.closeProductFormPanel();
}

  // Méthode appelée au focus
  onFocus() {
  if (!this.productControl.value) {
    this.productControl.setValue('');
  }
}


  // Méthodes pour mat-autocomplete
  // private _filterProduits(name: string): Produit[] {
  //   const filterValue = name.toLowerCase();
  //   return this.produits.filter(produit => produit.nom.toLowerCase().includes(filterValue));
  // }

  // Logique de filtrage
private _filterProduits(name: string): Produit[] {
  if (!name) {
    return this.produits.slice();
  }
  const filterValue = name.toLowerCase();
  return this.produits.filter(produit => produit.nom.toLowerCase().includes(filterValue));
}

  // displayProduit(produit: Produit): string {
  //   return produit ? produit.nom : '';
  // }
  
  // Affichage du nom du produit dans l'input
  displayProduit(produit: Produit): string {
    return produit && produit.nom ? produit.nom : '';
  }

  // Méthode pour ouvrir le panneau
  openProductFormPanel(): void {
    this.showProductFormPanel = true;
    this.panelAnimationState = 'visible';
  }

  // Méthode pour fermer le panneau
  closeProductFormPanel(): void {
    this.panelAnimationState = 'hidden';
    setTimeout(() => {
      this.showProductFormPanel = false;
    }, 300); // Correspond à la durée de l'animation
  }

  openClientFormPanel() {
    this.showClientFormPanel = true;
    this.panelAnimationState = 'visible';
  }

  closeClientFormPanel() {
    this.panelAnimationState = 'hidden';
    setTimeout(() => {
      this.showClientFormPanel = false;
    }, 300);
  }

  openEntrepriseFormPanel() {
    this.showEntrepriseFormPanel = true;
    this.panelAnimationState = 'visible';
  }

  closeEntrepriseFormPanel() {
    this.panelAnimationState = 'hidden';
    setTimeout(() => {
      this.showEntrepriseFormPanel = false;
    }, 300);
  }

onProduitSelected(event: MatAutocompleteSelectedEvent) {
  const selectedProduit: Produit = event.option.value;

  // Si c'est l'option de création de produit
  if (selectedProduit === null) {
    this.openProductFormPanel();
    return;
  }

  if (selectedProduit && selectedProduit.id) {
    const ligne = this.inputLignes[0];
    ligne.produitId = selectedProduit.id;
    ligne.ligneDescription = selectedProduit.description || null;
    ligne.quantite = ligne.quantite || 1; // Assurer une quantité par défaut
    ligne.isDuplicate = false;

    // Vérifier les doublons
    const isInConfirmed = this.confirmedLignes.some(l => l.produitId === selectedProduit.id);
    if (isInConfirmed) {
      this.duplicateIndex = 0;
      this.showDuplicatePopup = true;
      setTimeout(() => {
        ligne.produitId = null;
        ligne.ligneDescription = null;
        ligne.quantite = 1;
        this.productControl.setValue(null);
        this.updateCalculs();
        this.cdr.detectChanges();
      }, 0);
      return;
    }

    // Mettre à jour l'autocomplete
    this.productControl.setValue(selectedProduit);
    this.updateCalculs();
    this.cdr.detectChanges();
  }
}

// Méthode appelée lors de la réception de l’événement clientAjoute
  onClientAjoute(nouveauClient: Clients) {
    // Ajouter le nouveau client à la liste
    this.clients.push(nouveauClient);

    // Optionnel : trier par ID décroissant
    this.clients.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));

    // Pré-sélectionner le nouveau client dans l’autocomplete
    this.clientControl.setValue(nouveauClient);

    // Mettre à jour les options filtrées
    this.filteredClients = this.clientControl.valueChanges.pipe(
      startWith(nouveauClient),
      map(value => (typeof value === 'string' ? value : value?.nomComplet)),
      map(name => (name ? this._filterClients(name) : this.clients.slice()))
    );

    // Forcer la mise à jour de l’interface utilisateur
    this.cdr.detectChanges();

    // Fermer le panneau du formulaire client (si applicable)
    this.closeClientFormPanel();
  }

  // Méthode appelée lors de la réception de l’événement entrepriseAjoute
  onEntrepriseAjoute(nouvelleEntreprise: Entreprise) {
    // Ajouter la nouvelle entreprise à la liste
    this.entreprises.push(nouvelleEntreprise);

    // Optionnel : trier par ID décroissant
    this.entreprises.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));

    // Pré-sélectionner la nouvelle entreprise dans l’autocomplete
    this.entrepriseControl.setValue(nouvelleEntreprise);

    // Mettre à jour les options filtrées
    this.filteredEntreprises = this.entrepriseControl.valueChanges.pipe(
      startWith(nouvelleEntreprise),
      map(value => (typeof value === 'string' ? value : value?.nom)),
      map(name => (name ? this._filterEntreprises(name) : this.entreprises.slice()))
    );

    // Forcer la mise à jour de l’interface utilisateur
    this.cdr.detectChanges();

    // Fermer le panneau du formulaire
    this.closeEntrepriseFormPanel();
  }


  
}