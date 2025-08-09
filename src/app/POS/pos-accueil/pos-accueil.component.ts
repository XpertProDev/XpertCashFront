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

@Component({
  selector: 'app-pos-accueil',
  standalone: true,
  imports: [ FormsModule, CommonModule, RouterModule, ClickOutsideDirective],
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

  selectedBoutiqueId: number | null = null;
  selectedBoutiqueName: string = 'Ma boutique name';
  private boutiqueSub?: Subscription;
  private boutiques: any[] = [];
  private boutiquesLoaded = false;

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
    const found = this.boutiques.find(b => b.id === id);
    if (found) {
      this.selectedBoutiqueName = found.nomBoutique;
    } else {
      // Si non trouvée, tenter une requête directe
      this.boutiqueService.getBoutiqueById(id).subscribe({
        next: (boutique) => this.selectedBoutiqueName = boutique.nomBoutique,
        error: () => this.selectedBoutiqueName = 'Boutique inconnue'
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




}