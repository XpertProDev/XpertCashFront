import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatPaginator, MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router, RouterLink } from "@angular/router";
import { ClientService } from "../SERVICES/client-service";
import { Clients } from "../MODELS/clients-model";
import { TruncateEmailPipe } from "../MODELS/truncate-email.pipe";
import { EntrepriseClient } from "../MODELS/entreprise-clients-model";
import { EntrepriseService } from "../SERVICES/entreprise-service";
import { ClickOutsideDirective } from "../MODELS/click-outside.directive";
import { environment } from "src/environments/environment";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { UsersService } from "../SERVICES/users.service";
import { switchMap, throwError } from "rxjs";


@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    RouterLink,
    TruncateEmailPipe,
    ClickOutsideDirective
  ],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  
})
export class ClientsComponent implements OnInit  {
  // API URL de limage est http://31.207.34.194:8080
  private apiUrl = environment.imgUrl;
  isListView = true;
  showDropdown = false;
  showPopup = false;

  // Pagination et tableau de données
  // Client 
  dataSource = new MatTableDataSource<Clients>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize = 6;
  currentPage = 0;
  currentPageClients = 0;
  currentPageEntreprises = 0;
  totalClients = 0;
  totalEntrepriseClients = 0;
  totalPages = 0;
  clients: Clients[] = [];
  entrepriseClient: EntrepriseClient[] = [];
  sortField = 'nomComplet';
  sortDirection: 'asc' | 'desc' = 'asc';
  noClientsAvailable = false;
  messageNoClient = 'Aucun client disponible.';
  // showTypeDropdown = false;
  currentListType: 'clients' | 'entreprises' = 'clients';
  entreprises: EntrepriseClient[] = [];
  messageNoEntreprise = 'Aucune entreprise disponible.';
  clientsLoaded = false;
  entreprisesLoaded = false;
  searchText = '';

  constructor(
    private clientService: ClientService,
    private router: Router,
    private entrepriseService: EntrepriseService,
    private sanitizer: DomSanitizer,
    private usersService: UsersService,
  ) {}

  ngOnInit() {
    const savedView = localStorage.getItem('viewPreference');
    this.isListView = savedView !== 'grid'; 
    
    const savedListType = localStorage.getItem('listTypePreference');
    if (savedListType === 'clients' || savedListType === 'entreprises') {
      this.currentListType = savedListType;
    }

    // if (this.currentListType === 'clients') {
    //   this.getListClients();
    // } else {
    //   this.getListEntreprises();
    // }
    this.getListClients();
    this.getListEntreprises();
    this.updateTotalPages();
  }

  highlightMatch(text: string | null | undefined): SafeHtml {
    if (!text) return '';
    if (!this.searchText.trim()) return text;
    
    const escapedSearch = this.searchText.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedSearch})`, 'gi');
    
    return this.sanitizer.bypassSecurityTrustHtml(
      text.replace(regex, '<mark>$1</mark>')
    );
  }

  // Gestionnaires de filtrage
  get filteredClients(): Clients[] {
    if (!this.searchText.trim()) return this.clients;
    
    const searchLower = this.searchText.toLowerCase().trim();
    const filtered = this.clients.filter(client => 
      (client.nomComplet?.toLowerCase().includes(searchLower)) ||
      (client.email?.toLowerCase().includes(searchLower)) ||
      (client.adresse?.toLowerCase().includes(searchLower)) ||
      (client.telephone?.includes(searchLower))
    );
    
    // Mettre à jour la pagination après filtrage
    setTimeout(() => this.updateTotalPages(), 0);
    return filtered;
  }

  get filteredEntreprises(): EntrepriseClient[] {
    if (!this.searchText.trim()) return this.entreprises;
    
    const searchLower = this.searchText.toLowerCase().trim();
    const filtered = this.entreprises.filter(entreprise => 
      (entreprise.nom?.toLowerCase().includes(searchLower)) ||
      (entreprise.email?.toLowerCase().includes(searchLower)) ||
      (entreprise.adresse?.toLowerCase().includes(searchLower)) ||
      (entreprise.telephone?.includes(searchLower)) ||
      (entreprise.pays?.toLowerCase().includes(searchLower)) ||
      (entreprise.siege?.toLowerCase().includes(searchLower)) ||
      (entreprise.secteur?.toLowerCase().includes(searchLower))
    );
    
    // Mettre à jour la pagination après filtrage
    setTimeout(() => this.updateTotalPages(), 0);
    return filtered;
  }

  onPageChange(event: PageEvent): void {
    if (this.currentListType === 'clients') {
      this.currentPageClients = event.pageIndex;
    } else {
      this.currentPageEntreprises = event.pageIndex;
    }
    
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    
    // Forcez la détection des changements
    setTimeout(() => {
      this.clientsLoaded = true;
      this.entreprisesLoaded = true;
    }, 0);
  }

  // Méthodes pour la pagination personnalisée
  goToPage(page: number): void {
    if (this.currentListType === 'clients') {
      this.currentPageClients = page;
      this.currentPage = page;
    } else {
      this.currentPageEntreprises = page;
      this.currentPage = page;
    }
    this.updateTotalPages();
  }

  onPageSizeChange(): void {
    // Réinitialiser à la première page quand on change la taille
    if (this.currentListType === 'clients') {
      this.currentPageClients = 0;
    } else {
      this.currentPageEntreprises = 0;
    }
    this.currentPage = 0;
    this.updateTotalPages();
  }

  updateTotalPages(): void {
    const totalItems = this.currentListType === 'clients' ? this.filteredClients.length : this.filteredEntreprises.length;
    this.totalPages = Math.ceil(totalItems / this.pageSize);
  }

  getPageInfo(): string {
    const totalItems = this.currentListType === 'clients' ? this.filteredClients.length : this.filteredEntreprises.length;
    const currentPageIndex = this.currentListType === 'clients' ? this.currentPageClients : this.currentPageEntreprises;
    const startItem = currentPageIndex * this.pageSize + 1;
    const endItem = Math.min((currentPageIndex + 1) * this.pageSize, totalItems);
    return `${startItem}-${endItem} sur ${totalItems}`;
  }

  getVisiblePages(): (number | string)[] {
    const currentPageIndex = this.currentListType === 'clients' ? this.currentPageClients : this.currentPageEntreprises;
    const pages: (number | string)[] = [];
    const maxVisible = 6;
    
    if (this.totalPages <= maxVisible) {
      for (let i = 0; i < this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPageIndex <= 2) {
        for (let i = 0; i < 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(this.totalPages - 1);
      } else if (currentPageIndex >= this.totalPages - 3) {
        pages.push(0);
        pages.push('...');
        for (let i = this.totalPages - 4; i < this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(0);
        pages.push('...');
        for (let i = currentPageIndex - 1; i <= currentPageIndex + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(this.totalPages - 1);
      }
    }
    
    return pages;
  }

  toggleView(viewType: 'list' | 'grid') {
    this.isListView = viewType === 'list';
    this.showDropdown = true;
    
    // Stocker la préférence dans le localStorage
    localStorage.setItem('viewPreference', viewType);
  }

  setListType(type: 'clients' | 'entreprises') {
    // Réinitialisez la page courante selon le type
    this.currentPage = type === 'clients' ? this.currentPageClients : this.currentPageEntreprises;
    
    this.currentListType = type;
    // this.showTypeDropdown = false;
    localStorage.setItem('listTypePreference', type);

    this.clientsLoaded = false;
    this.entreprisesLoaded = false;
    
    // Mettre à jour le nombre total de pages
    this.updateTotalPages();

    if (type === 'entreprises') {
      this.getListEntreprises();
    } else {
      this.getListClients();
    }
  }

 getListEntreprises() {
  this.entreprisesLoaded = false;

  this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        console.error('Aucun token valide trouvé !');
        return throwError(() => new Error('Aucun token trouvé'));
      }
      return this.entrepriseService.getListEntreprises();
    })
  ).subscribe({
    next: (data: EntrepriseClient[]) => {
      console.log('Entreprises récupérées:', data);
      this.entreprises = data.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
      this.entreprisesLoaded = true;
      this.updateTotalPages();
    },
    error: (err) => {
      console.error('Erreur lors de la récupération des entreprises :', err);
      this.entreprisesLoaded = true;
    }
  });
}


  // Modifie la fonction sort
  sort(field: string) {
    // Déterminer si le champ existe dans le type actuel
    const isValidField = 
      (this.currentListType === 'clients' && this.clients.length > 0 && field in this.clients[0]) ||
      (this.currentListType === 'entreprises' && this.entreprises.length > 0 && field in this.entreprises[0]);

    if (!isValidField) return;

    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }

    if (this.currentListType === 'clients') {
      this.clients.sort((a: any, b: any) => {
        const modifier = this.sortDirection === 'asc' ? 1 : -1;
        const valueA = a[field]?.toString().toLowerCase() ?? '';
        const valueB = b[field]?.toString().toLowerCase() ?? '';
        return valueA.localeCompare(valueB) * modifier;
      });
    } else {
      this.entreprises.sort((a: any, b: any) => {
        const modifier = this.sortDirection === 'asc' ? 1 : -1;
        const valueA = a[field]?.toString().toLowerCase() ?? '';
        const valueB = b[field]?.toString().toLowerCase() ?? '';
        return valueA.localeCompare(valueB) * modifier;
      });
    }
  }

  // list clients 
  getListClients() {
  this.clientsLoaded = false;

  this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        console.error('🔐 Aucun token valide trouvé !');
        return throwError(() => new Error('Aucun token trouvé'));
      }
      return this.clientService.getListClients();
    })
  ).subscribe({
    next: (data) => {
      console.log('📥 Données brutes:', data);

      this.clients = data.map(client => {
        return {
          ...client,
          photo: client.photo 
            ? `${this.apiUrl}${client.photo}` 
            : `/assets/img/profil.png`,
          entrepriseClient: client.entrepriseClient 
            ? { id: client.entrepriseClient.id } 
            : null
        };
      });

      console.log('🖼️ URLs des photos clients :', this.clients.map(c => c.photo));

      this.clients = this.clients.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
      this.totalClients = this.clients.length;
      this.noClientsAvailable = this.clients.length === 0;

      this.dataSource.data = this.clients;
      this.dataSource.paginator = this.paginator;

      if (this.clients.length > 0) {
        console.log('👤 Exemple client :', this.clients[0]);
      }

      this.clientsLoaded = true;
      this.updateTotalPages();
    },
    error: (err) => {
      console.error('❌ Erreur récupération clients :', err);
      this.clientsLoaded = true;
    }
  });
}


  // Mettre à jour les getters paginés pour utiliser les listes filtrées
  get paginatedClients(): Clients[] {
    const startIndex = this.currentPageClients * this.pageSize;
    return this.filteredClients.slice(startIndex, startIndex + this.pageSize);
  }

  get paginatedEntreprises(): EntrepriseClient[] {
    const startIndex = this.currentPageEntreprises * this.pageSize;
    return this.filteredEntreprises.slice(startIndex, startIndex + this.pageSize);
  }

  // client id routing
  openClientDetail(clientId: number): void {
    this.router.navigate(['/detail-client', clientId]);
  }
  
  // entreprise client id routing
  openEntrepriseClientDetail(clientId: number, event: MouseEvent): void {
    event.stopPropagation(); 
    this.router.navigate(['/detail-entreprise-client', clientId]);
  }

  // Ajoutez cette méthode pour ouvrir les détails d'une entreprise
  openEntrepriseDetail(entrepriseId: number | undefined): void {
    if (entrepriseId === undefined) {
      console.error("ID d'entreprise non défini");
      return;
    }
    this.router.navigate(['/detail-entreprise', entrepriseId]);
  }

  // Ouvre/ferme le popup choix d'ajoute client
  openPopup() { this.showPopup = true; }
  closePopup() { this.showPopup = false; }

  // Méthode pour gérer le changement de recherche
  onSearchChange(): void {
    // Réinitialiser à la première page lors de la recherche
    this.currentPageClients = 0;
    this.currentPageEntreprises = 0;
    this.currentPage = 0;
    this.updateTotalPages();
  }

  // Méthode helper pour gérer le clic sur les numéros de page
  onPageClick(page: number | string): void {
    if (typeof page === 'number') {
      this.goToPage(page);
    }
  }


}
