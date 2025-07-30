import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ClickOutsideDirective } from 'src/app/admin-page/MODELS/click-outside.directive';
import { environment } from 'src/environments/environment';
import { ViewStateService } from './view-state.service';
import { Observable } from 'rxjs';

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

  commandes: string[] = ['001']; // Liste initiale
  activeCommande: string = '001'; // Commande active
  showCommandeDropdown = false;

  constructor(
    private router: Router,
    private viewState: ViewStateService
  ) {
    this.isListView$ = this.viewState.isListView$;
  }

  ngOnInit() {
    const currentRoute = this.router.url;
    this.activeButton = currentRoute.includes('/commandes') ? 'commande' : 'vente';
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
    // Génère un nouvel ID de commande (ex: 005, 006...)
    const newId = (this.commandes.length + 1).toString().padStart(3, '0');
    this.commandes.push(newId);
    this.activeCommande = newId;
  }

  setActiveCommande(commande: string) {
    this.activeCommande = commande;
  }

  get visibleCommandes() {
    // Affiche les 4 dernières commandes
    return this.commandes.slice(-4);
  }

  get hiddenCommandes() {
    // Commandes non visibles dans la barre principale
    return this.commandes.length > 4 
      ? this.commandes.slice(0, this.commandes.length - 4) 
      : [];
  }

  toggleCommandePopup() {
    
  }
  

}
