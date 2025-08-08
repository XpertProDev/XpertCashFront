// pos-journal-caisse.component.ts
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
  sortField: keyof CaisseResponse = 'dateOuverture';
  sortDirection: 'asc' | 'desc' = 'desc';
  searchTerm = '';
  statusFilter = '';

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
    
    if (!currentUser || !currentUser.id) {
      this.errorMessage = 'Utilisateur non identifié';
      this.isLoading = false;
      return;
    }

    this.posCaisseService.getHistoriqueCaissesByVendeur(currentUser.id).subscribe({
      next: (caisses) => {
        this.caisses = caisses.filter(c => c.boutiqueId == Number(this.currentBoutiqueId));
        this.sortCaisses();
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Erreur lors du chargement des caisses';
      }
    });
  }

  toggleSortDirection(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortCaisses();
  }

  sortCaisses(field: keyof CaisseResponse = this.sortField): void {
    this.sortField = field;
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
    let filtered = this.caisses;
    
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(c => 
        (c.nomVendeur?.toLowerCase().includes(term)) ||
        (c.statut?.toLowerCase().includes(term)) ||
        (c.montantCourant?.toString().includes(term)) ||
        (c.dateOuverture?.toString().includes(term))
      );
    }
    
    if (this.statusFilter) {
      filtered = filtered.filter(c => c.statut === this.statusFilter);
    }
    
    return filtered;
  }

  goBack(): void {
    this.router.navigate(['/pos-caisse']);
  }

  formatDate(dateInput: Date | string): string {
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