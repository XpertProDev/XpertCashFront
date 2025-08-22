import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ClickOutsideDirective } from 'src/app/admin-page/MODELS/click-outside.directive';
import { environment } from 'src/environments/environment';
import { ViewStateService } from './view-state.service';
import { Observable, Subscription } from 'rxjs';
import { UsersService } from 'src/app/admin-page/SERVICES/users.service';
import { CommandeStateService } from 'src/app/admin-page/SERVICES/commande-state.service';
import { PosCaisseService } from 'src/app/admin-page/SERVICES/CaisseService/pos-caisse-service';
import { FermerCaisseRequest } from 'src/app/admin-page/MODELS/CaisseModel/caisse.model';
import { BoutiqueStateService } from 'src/app/admin-page/SERVICES/CaisseService/boutique-state.service';
import { BoutiqueService } from 'src/app/admin-page/SERVICES/boutique-service';
import { CfaCurrencyPipe } from 'src/app/admin-page/MODELS/cfa-currency.pipe';

@Component({
  selector: 'app-pos-accueil',
  standalone: true,
  imports: [ FormsModule, CommonModule, RouterModule, ClickOutsideDirective, CfaCurrencyPipe],
  templateUrl: './pos-accueil.component.html',
  styleUrl: './pos-accueil.component.scss'
})
export class PosAccueilComponent {
  private apiUrl = environment.imgUrl;
  // isListView = true;
  showDropdown = false;
  public isListView$: Observable<boolean>;
  activeButton: 'vente' | 'commande' = 'vente';
  showMenuDropdown = false;
  userName: string = '';
  nomEntreprise = '';
  photo: string | null = null;
  photoUrl: string | null = null;
  commandes: string[] = ['001']; // Liste initiale
  activeCommande: string = '001'; // Commande active
  // showCommandeDropdown = false;
  showCommandePopup = false;
  private commandeSubscription: Subscription;

  private boutiqueSub?: Subscription;
  private boutiques: any[] = [];

  selectedBoutiqueId: number | null = null;
  selectedBoutiqueName: string = '';         // vide par défaut
  private boutiquesLoaded = false;
  isBoutiqueNameLoaded = false;              // <- nouveau flag


  isDraggingPopup = false;
  startXPopup = 0;
  startYPopup = 0;
  initialXPopup = 0;
  initialYPopup = 0;
  popupOffsetPopup = { x: 0, y: 0 };

  showFermerCaissePopup = false;
  caisseDetails: any = null;
  isLoadingCaisseDetails = false;
  fermetureErrorMessage: string | null = null;

  constructor(
    private router: Router,
    private viewState: ViewStateService,
    private userService: UsersService,
    private posCaisseService: PosCaisseService,
    private commandeState: CommandeStateService,
    private boutiqueState: BoutiqueStateService,
    private boutiqueService: BoutiqueService
  ) {
    this.isListView$ = this.viewState.isListView$;
    
    // Initialiser avec les commandes actuelles
    this.commandes = this.commandeState.getAllCommandesIds();
    
    // S'abonner aux mises à jour des commandes
    this.commandeState.commandeUpdated$.subscribe(() => {
      this.commandes = this.commandeState.getAllCommandesIds();
    });

    this.commandeState.activeCommandeId$.subscribe(id => {
      this.activeCommande = id;
    });
    
    this.commandeSubscription = this.commandeState.activeCommandeId$.subscribe(id => {
      this.activeCommande = id;
    });
  }

  ngOnInit() {

    const currentRoute = this.router.url;
    this.activeButton = currentRoute.includes('/commandes') ? 'commande' : 'vente';
    this.getUserInfo();

    this.loadBoutiques();

    // Charger toutes les boutiques une fois (pour résoudre id -> nom)
    this.boutiqueService.getBoutiquesByEntreprise().subscribe({
      next: (list) => {
        this.boutiques = list || [];
        this.boutiquesLoaded = true;
        // si on avait déjà un id, mettre à jour le nom
        if (this.selectedBoutiqueId !== null) {
          this.updateBoutiqueName(this.selectedBoutiqueId);
        }
      },
      error: (err) => console.error('Erreur chargement boutiques', err)
    });

    // S'abonner aux changements de boutique
    this.boutiqueSub = this.boutiqueState.selectedBoutique$.subscribe(id => {
      this.selectedBoutiqueId = id;
      if (id === null) {
        this.selectedBoutiqueName = 'Sélectionnez une boutique';
      } else {
        this.updateBoutiqueName(id);
      }
    });

    // Si on arrive par navigation avec une caisse passée en state, on peut setter aussi
    const nav = this.router.getCurrentNavigation()?.extras?.state as any;
    if (nav?.caisse?.boutiqueId) {
      this.boutiqueState.setSelectedBoutique(nav.caisse.boutiqueId);
    }
  }

  private loadBoutiques(): void {
    this.boutiqueService.getBoutiquesByEntreprise().subscribe({
      next: (list) => {
        this.boutiques = list || [];
        this.boutiquesLoaded = true;
        
        // Vérifier si une boutique est déjà sélectionnée dans le state
        const currentBoutiqueId = this.boutiqueState.getCurrentValue();
        if (currentBoutiqueId) {
          this.updateBoutiqueName(currentBoutiqueId);
        }
      },
      error: (err) => console.error('Erreur chargement boutiques', err)
    });
  }

  private updateBoutiqueName(id: number): void {
    // reset du flag pendant le chargement
    this.isBoutiqueNameLoaded = false;
    const found = this.boutiques.find(b => b.id === id);
    if (found) {
      this.selectedBoutiqueName = found.nomBoutique || '';
      this.isBoutiqueNameLoaded = true;
    } else {
      // Si non trouvée, tenter une requête directe
      this.boutiqueService.getBoutiqueById(id).subscribe({
        next: (boutique) => {
          this.selectedBoutiqueName = boutique?.nomBoutique || 'Boutique inconnue';
          this.isBoutiqueNameLoaded = true;
        },
        error: () => {
          this.selectedBoutiqueName = 'Boutique inconnue';
          this.isBoutiqueNameLoaded = true;
        }
      });
    }
  }

  ngOnDestroy() {
    this.boutiqueSub?.unsubscribe();
  }

  // ngOnDestroy() {
  //   // Nettoyer la souscription
  //   if (this.commandeSubscription) {
  //     this.commandeSubscription.unsubscribe();
  //   }
  // }

  toggleView(viewType: 'grid' | 'list') {
    this.viewState.setViewPreference(viewType === 'grid');
    this.showDropdown = true;
  }

  onClickCommandes() {
    this.activeButton = 'commande';
    this.router.navigate(['/pos-accueil/commandes']);
  }

  onClickVente() {
    this.activeButton = 'vente';
    this.router.navigate(['/pos-accueil']);
  }

  toggleMenuDropdown() {
    this.showMenuDropdown = !this.showMenuDropdown;
  }

  addCommande() {
  const newId = this.commandeState.addNewCommande();
  // Récupère la liste mise à jour du service
  this.commandes = this.commandeState.getAllCommandesIds(); 
  this.setActiveCommande(newId);
  this.showCommandePopup = false;
}

  // addCommande() {
  //   const newId = this.commandeState.addNewCommande();
  //   this.commandes.push(newId);
  //   this.setActiveCommande(newId);
  // }

  setActiveCommande(cmd: string) {
    this.commandeState.setActiveCommande(cmd);
    this.activeCommande = cmd;
    this.showCommandePopup = false; // Fermer le popup après sélection
  }

  get visibleCommandes() {
    const start = Math.max(0, this.commandes.length - 6);
    return this.commandes.slice(start);
  }

  get hiddenCommandes() {
    // Commandes non visibles dans la barre principale
    return this.commandes.length > 6 
      ? this.commandes.slice(0, this.commandes.length - 6) 
      : [];
  }
    
  getUserInfo(): void {
    this.userService.getUserInfo().subscribe({
      next: (user) => {
      this.userName = user.nomComplet.charAt(0).toUpperCase();
        this.nomEntreprise = user.nomEntreprise;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }
 
  onLogout(): void {
    console.log("Début de la procédure de déconnexion...");

    // Récupérer l'ID de la boutique active depuis le service BoutiqueStateService
    const boutiqueId = this.boutiqueState.getCurrentValue();

    if (!boutiqueId) {
      console.error("Aucune boutique active détectée.");
      this.router.navigate(['/analytics']);
      return;
    }

    this.userService.getUserInfo().subscribe({
      next: (user) => {
        console.log('Utilisateur récupéré:', user);
        const userPermissions = user.permissions; 

        // Vérifier si l'utilisateur a uniquement la permission "VENDRE_PRODUITS"
        if (userPermissions.length === 1 && userPermissions.includes("VENDRE_PRODUITS")) {
          console.log('L\'utilisateur a uniquement la permission "VENDRE_PRODUITS". Tentative de fermeture de la caisse...');
          
          // Fermer la caisse pour la boutique active
          this.posCaisseService.fermerCaisse(boutiqueId).subscribe({
            next: (response) => {
              console.log('Caisse fermée avec succès:', response);
              // Déconnexion de l'utilisateur
              this.userService.logoutUser();  
              console.log('Déconnexion de l\'utilisateur...');
              this.router.navigate(['/connexion']).then(success => {
                console.log("Déconnexion réussie ?", success);
              });
            },
            error: (err) => {
              console.error('Erreur lors de la fermeture de la caisse:', err.message);
              // Si une erreur se produit lors de la fermeture de la caisse, rediriger vers la page d'analytics.
              this.router.navigate(['/analytics']).then(success => {
                console.log("Navigation vers analytics réussie ?", success);
              });
            }
          });
        } else {
          console.log('L\'utilisateur n\'a pas uniquement la permission "VENDRE_PRODUITS", fermeture de la caisse et redirection vers analytics...');
          
          // Fermer la caisse pour la boutique active
          this.posCaisseService.fermerCaisse(boutiqueId).subscribe({
            next: (response) => {
              console.log('Caisse fermée avec succès:', response);
              // Redirection vers analytics après fermeture de la caisse
              this.router.navigate(['/analytics']).then(success => {
                console.log("Navigation vers analytics réussie ?", success);
              });
            },
            error: (err) => {
              console.error('Erreur lors de la fermeture de la caisse:', err.message);
              // Si une erreur se produit lors de la fermeture de la caisse, rediriger vers la page d'analytics.
              this.router.navigate(['/analytics']).then(success => {
                console.log("Navigation vers analytics réussie ?", success);
              });
            }
          });
        }
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des informations utilisateur:', err);
        // Gestion des erreurs de récupération des infos utilisateur
        this.router.navigate(['/analytics']);
      }
    });
  }

  prepareFermerCaisse(): void {
    this.isLoadingCaisseDetails = true;
    this.fermetureErrorMessage = null;
    this.caisseDetails = null;
    
    const boutiqueId = this.boutiqueState.getCurrentValue();
    
    if (!boutiqueId) {
      this.fermetureErrorMessage = "Aucune boutique sélectionnée";
      this.isLoadingCaisseDetails = false;
      return;
    }

    this.posCaisseService.getDerniereCaisseVendeur(boutiqueId).subscribe({
      next: (response) => {
        if (typeof response === 'string') {
          this.fermetureErrorMessage = response;
        } else {
          this.caisseDetails = response;
          // Vérifier si la caisse est ouverte
          if (this.caisseDetails.statut !== 'OUVERTE') {
            this.fermetureErrorMessage = "Aucune caisse ouverte pour cette boutique";
          } else {
            this.showFermerCaissePopup = true;
          }
        }
        this.isLoadingCaisseDetails = false;
      },
      error: (err) => {
        this.fermetureErrorMessage = "Erreur lors du chargement des détails de la caisse: " + err.message;
        this.isLoadingCaisseDetails = false;
      }
    });
  }

  formatDate(dateString: string | Date | null): string {
    if (!dateString) return 'N/A';
    
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Date invalide';
    
    return date.toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Nouvelle méthode pour confirmer la fermeture
  confirmFermerCaisse(): void {
    if (!this.caisseDetails?.id) return;
    
    const caisseId = this.caisseDetails.id;
    this.isLoadingCaisseDetails = true;
    
    this.posCaisseService.fermerCaisse(caisseId).subscribe({
      next: (response) => {
        this.showFermerCaissePopup = false;
        this.handlePostFermeture();
      },
      error: (err) => {
        this.fermetureErrorMessage = "Échec de la fermeture de la caisse";
        this.isLoadingCaisseDetails = false;
      }
    });
  }

  // Méthode pour gérer la redirection après fermeture
  private handlePostFermeture(): void {
    this.userService.getUserInfo().subscribe({
      next: (user) => {
        const permissions = user.permissions;
        if (permissions.length === 1 && permissions.includes("VENDRE_PRODUITS")) {
          this.userService.logoutUser();
          this.router.navigate(['/connexion']);
        } else {
          this.router.navigate(['/analytics']);
        }
      },
      error: () => this.router.navigate(['/analytics'])
    });
  }

  startDragPopup(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation(); // Empêche la propagation à l'overlay
    
    this.isDraggingPopup = true;
    this.startXPopup = event.clientX;
    this.startYPopup = event.clientY;
    this.initialXPopup = this.popupOffsetPopup.x;
    this.initialYPopup = this.popupOffsetPopup.y;

    document.addEventListener('mousemove', this.onMouseMovePopup);
    document.addEventListener('mouseup', this.onMouseUpPopup);
  }

  onMouseMovePopup = (event: MouseEvent): void => {
    if (!this.isDraggingPopup) return;
    
    requestAnimationFrame(() => {
      const deltaX = event.clientX - this.startXPopup;
      const deltaY = event.clientY - this.startYPopup;
      this.popupOffsetPopup.x = this.initialXPopup + deltaX;
      this.popupOffsetPopup.y = this.initialYPopup + deltaY;
    });
  }

  onMouseUpPopup = (): void => {
    this.isDraggingPopup = false;
    document.removeEventListener('mousemove', this.onMouseMovePopup);
    document.removeEventListener('mouseup', this.onMouseUpPopup);
  }

  closePopup(event?: MouseEvent) {
    if (event) event.stopPropagation();
    this.showCommandePopup = false;
  }

  getMontantObtenu(): number {
    if (!this.caisseDetails) return 0;
    return (this.caisseDetails.montantCourant || 0) - (this.caisseDetails.montantInitial || 0);
  }



}