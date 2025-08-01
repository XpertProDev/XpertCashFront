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

  constructor(
    private router: Router,
    private viewState: ViewStateService,
    private userService: UsersService,
    
    private commandeState: CommandeStateService
  ) {
    this.isListView$ = this.viewState.isListView$;
    this.commandes = this.commandeState.getAllCommandesIds();
    
    this.commandeSubscription = this.commandeState.activeCommandeId$.subscribe(id => {
      this.activeCommande = id;
    });
  }

  ngOnInit() {
    const currentRoute = this.router.url;
    this.activeButton = currentRoute.includes('/commandes') ? 'commande' : 'vente';
    this.getUserInfo();
  }

  ngOnDestroy() {
    // Nettoyer la souscription
    if (this.commandeSubscription) {
      this.commandeSubscription.unsubscribe();
    }
  }

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


}
