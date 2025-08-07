import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CaisseResponse } from 'src/app/admin-page/MODELS/CaisseModel/caisse.model';
import { BoutiqueStateService } from 'src/app/admin-page/SERVICES/CaisseService/boutique-state.service';
import { PosCaisseService } from 'src/app/admin-page/SERVICES/CaisseService/pos-caisse-service';
import { UsersService } from 'src/app/admin-page/SERVICES/users.service';

@Component({
  selector: 'app-pos-journal-caisse',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pos-journal-caisse.component.html',
  styleUrl: './pos-journal-caisse.component.scss'
})
export class PosJournalCaisseComponent {
  caisses: CaisseResponse[] = [];
  isLoading = true;
  errorMessage: string | null = null;
  currentBoutiqueId: number | null = null;
  currentBoutiqueName = '';
  sortField: keyof CaisseResponse = 'dateOuverture';
  sortDirection: 'asc' | 'desc' = 'desc';
  searchTerm = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private boutiqueState: BoutiqueStateService,
    private posCaisseService: PosCaisseService
  ) {}

  ngOnInit(): void {
    this.boutiqueState.selectedBoutique$.subscribe(boutiqueId => {
      this.currentBoutiqueId = boutiqueId;
      this.loadCaisses();
    });
  }

loadCaisses(): void {
  this.isLoading = true;
  this.errorMessage = null;
  
  const currentUser = this.usersService.getCurrentUser();
  console.log('Utilisateur courant:', currentUser);
  
  if (!currentUser || !currentUser.id) {
    this.errorMessage = 'Utilisateur non identifié';
    this.isLoading = false;
    return;
  }

  const userId = currentUser.id;
  console.log('ID utilisateur:', userId);
  console.log('Boutique sélectionnée:', this.currentBoutiqueId);

  this.posCaisseService.getHistoriqueCaissesByVendeur(userId).subscribe({
    next: (caisses) => {
      console.log('Caisses récupérées:', caisses);
      // this.caisses = caisses.filter(c => c.boutiqueId === this.currentBoutiqueId);
      this.caisses = caisses.filter(c => c.boutiqueId == Number(this.currentBoutiqueId));
      console.log('Caisses après filtrage:', this.caisses);
      this.sortCaisses();
      this.isLoading = false;
    },
    error: (error) => {
      console.error('Erreur', error);
      this.isLoading = false;
      this.errorMessage = error.message || 'Erreur lors du chargement des caisses';
    }
  });
}

  sortCaisses(field: keyof CaisseResponse = this.sortField): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'desc';
    }

    this.caisses.sort((a, b) => {
      const valueA = a[this.sortField];
      const valueB = b[this.sortField];
      
      if (valueA === null || valueA === undefined) return 1;
      if (valueB === null || valueB === undefined) return -1;
      
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return this.sortDirection === 'asc' 
          ? valueA.localeCompare(valueB) 
          : valueB.localeCompare(valueA);
      }
      
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return this.sortDirection === 'asc' 
          ? valueA - valueB 
          : valueB - valueA;
      }
      
      if (valueA instanceof Date && valueB instanceof Date) {
        return this.sortDirection === 'asc' 
          ? valueA.getTime() - valueB.getTime()
          : valueB.getTime() - valueA.getTime();
      }
      
      return 0;
    });
  }

  get filteredCaisses(): CaisseResponse[] {
    if (!this.searchTerm) return this.caisses;
    
    const term = this.searchTerm.toLowerCase();
    return this.caisses.filter(c => 
      (c.nomVendeur?.toLowerCase().includes(term)) ||
      (c.statut?.toLowerCase().includes(term)) ||
      (c.montantCourant?.toString().includes(term)) ||
      (c.dateOuverture?.toString().includes(term))
    );
  }

  goBack(): void {
    this.router.navigate(['/pos-caisse']);
  }

  formatDate(dateInput: Date | string): string {
    // Si c'est déjà un objet Date, utilisez-le directement
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
