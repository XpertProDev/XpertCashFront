import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CaisseResponse, OuvrirCaisseRequest } from 'src/app/admin-page/MODELS/CaisseModel/caisse.model';
import { SafeHtmlPipe } from 'src/app/admin-page/MODELS/CaisseModel/safe-html.pipe';
import { ClickOutsideDirective } from 'src/app/admin-page/MODELS/click-outside.directive';
import { BoutiqueService } from 'src/app/admin-page/SERVICES/boutique-service';
import { BoutiqueStateService } from 'src/app/admin-page/SERVICES/CaisseService/boutique-state.service';
import { PosCaisseService } from 'src/app/admin-page/SERVICES/CaisseService/pos-caisse-service';

@Component({
  selector: 'app-pos-caisse',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, SafeHtmlPipe],
  templateUrl: './pos-caisse.component.html',
  styleUrl: './pos-caisse.component.scss'
})
export class PosCaisseComponent {
  showModal = false;
  boutiques: any[] = [];
  selectedBoutiqueId: number | null = null;
  montantOuverture: number = 0;
  isLoading = false;
  errorMessage: string | null = null;

  // selectedBoutiqueIdForList: number | null = null;
  caisses: CaisseResponse[] = [];
  isLoadingCaisses = false;

  openMenuId: number | null = null;

  constructor(
    private boutiqueService: BoutiqueService,
    private posCaisseService: PosCaisseService,
    private boutiqueState: BoutiqueStateService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadBoutiques();

    // Écoute les changements de boutique
    this.boutiqueState.selectedBoutique$.subscribe(boutiqueId => {
      // this.selectedBoutiqueIdForList = boutiqueId;
      if (boutiqueId !== null) {
        this.loadDerniereCaisseVendeur(boutiqueId);
      } else {
        this.caisses = [];
      }
    });
  }

  loadBoutiques(): void {
    this.boutiqueService.getBoutiquesByEntreprise().subscribe({
      next: (boutiques) => {
        this.boutiques = boutiques;
        if (this.boutiques.length > 0) {
          // this.selectedBoutiqueIdForList = this.boutiques[0].id;
          // if (this.selectedBoutiqueIdForList !== null) {
          //   // Utiliser la nouvelle méthode ici
          //   this.loadDerniereCaisseVendeur(this.selectedBoutiqueIdForList);
          // }
        }
      },
      error: (error) => {
        console.error('Erreur lors du chargement des boutiques', error);
        this.errorMessage = 'Erreur lors du chargement des boutiques';
      }
    });
  }

  // Ajoutez cette méthode dans la classe PosCaisseComponent
  loadDerniereCaisseVendeur(boutiqueId: number): void {
    this.isLoadingCaisses = true;
    this.caisses = []; // Réinitialiser la liste
    
    this.posCaisseService.getDerniereCaisseVendeur(boutiqueId).subscribe({
      next: (response) => {
        // Gérer les différents types de réponse
        if (typeof response === 'string') {
          // Cas où le backend retourne un message texte
          this.caisses = [];
          this.errorMessage = response;
        } else {
          // Cas normal où on reçoit un objet CaisseResponse
          this.caisses = [response]; // Mettre dans un tableau pour l'affichage
        }
        this.isLoadingCaisses = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement de la dernière caisse', error);
        this.isLoadingCaisses = false;
        this.errorMessage = error.message || 'Erreur lors du chargement de la dernière caisse';
      }
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedBoutiqueId = null;
    this.montantOuverture = 0;
    this.errorMessage = null;
  }

  // Nouvelle méthode pour charger les caisses
  loadCaisses(boutiqueId: number): void {
    this.isLoadingCaisses = true;
    this.caisses = [];
    
    this.posCaisseService.getCaissesByBoutique(boutiqueId).subscribe({
      next: (caisses) => {
        this.caisses = caisses;
        this.isLoadingCaisses = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des caisses', error);
        this.isLoadingCaisses = false;
        this.errorMessage = 'Erreur lors du chargement des caisses';
      }
    });
  }

  onCaisseButtonClick(caisse: CaisseResponse): void {
    if (caisse.statut === 'OUVERTE') {
        // Mettre à jour la boutique sélectionnée globalement
        this.boutiqueState.setSelectedBoutique(caisse.boutiqueId);

        // Puis naviguer vers l'accueil POS en passant la caisse (si tu veux)
        this.router.navigate(['/pos-accueil'], {
            state: { caisse: caisse }
        });
    } else if (caisse.statut === 'FERMEE') {
        this.openModalWithBoutique(caisse.boutiqueId);
        // Optionnel : définir la boutique aussi quand on ouvre le modal
        this.boutiqueState.setSelectedBoutique(caisse.boutiqueId);
    }
  }

  getBoutiqueName(boutiqueId: number | null): string {
    if (!boutiqueId) return 'Boutique non spécifiée';
    const boutique = this.boutiques.find(b => b.id === boutiqueId);
    return boutique ? boutique.nomBoutique : 'Boutique inconnue';
  }

  openModalWithBoutique(boutiqueId: number | null): void {
    this.showModal = true;
    this.selectedBoutiqueId = boutiqueId;
    this.montantOuverture = 0;
    this.errorMessage = null;
  }

  toggleMenu(caisseId: number): void {
    // si on reclique sur la même, on referme
    this.openMenuId = this.openMenuId === caisseId ? null : caisseId;
  }

  allCaisseClose(caisse: CaisseResponse) {
    console.log('Btn 1 clicked pour', caisse);
    // … votre logique
  }

  goToPosJournalCaisse() {
    this.router.navigate(['/pos-caisse/pos-journal-caisse'])
  }

  getButtonText(caisse: CaisseResponse): string {
    if (caisse.statut === 'OUVERTE') {
        return 'Continuer la vente';
    } else if (caisse.statut === 'FERMEE') {
        return 'Ouvrir la caisse';
    }
    return 'Action inconnue';
  }

  getStatusText(caisse: CaisseResponse): string {
    if (caisse.statut === 'OUVERTE') {
        return 'Ouverte';
    } else if (caisse.statut === 'FERMEE') {
        // Vérifiez si la date de fermeture est présente
        if (caisse.dateFermeture) {
            const fermetureDate = new Date(caisse.dateFermeture);
            const options: Intl.DateTimeFormatOptions = { 
                day: '2-digit', 
                month: '2-digit', 
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            };
            const formattedDate = fermetureDate.toLocaleString('fr-FR', options);
            return `Fermée le ${formattedDate}`;
        } else {
            return 'Fermée';
        }
    }
    return 'Statut inconnu';
  }

  submitForm() {
    // Vérification du montant
    if (this.montantOuverture < 0) {
        this.errorMessage = 'Le montant ne peut pas être négatif';
        return;
    }

    if (!this.selectedBoutiqueId) {
        this.errorMessage = 'Veuillez sélectionner une boutique';
        return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    const request: OuvrirCaisseRequest = {
        boutiqueId: this.selectedBoutiqueId,
        montantInitial: this.montantOuverture
    };

    this.posCaisseService.ouvrirCaisse(request).subscribe({
        next: (response) => {
            console.log('Caisse ouverte avec succès', response);
            this.isLoading = false;
            this.closeModal();

            this.loadDerniereCaisseVendeur(request.boutiqueId);

            // Si vous préférez charger toutes les caisses (pas seulement la dernière), appelez plutôt :
            // this.loadCaisses(request.boutiqueId);
        },
        error: (error) => {
            console.error('Erreur lors de l\'ouverture de la caisse', error);
            this.isLoading = false;
            
            let rawError = '';
            if (error.error?.error) rawError = error.error.error;
            else if (error.error?.message) rawError = error.error.message;
            else if (error.message) rawError = error.message;
            else rawError = 'Erreur inconnue lors de l\'ouverture de la caisse';
            
            const prefixIndex = rawError.indexOf(': ');
            this.errorMessage = prefixIndex > 0 
                ? rawError.substring(prefixIndex + 2) 
                : rawError;
        }
    });
  }

  
}