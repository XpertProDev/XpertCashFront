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
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const savedView = localStorage.getItem('viewPreference');
    this.isListView = savedView !== 'grid'; 
    
    const savedListType = localStorage.getItem('listTypePreference');
    if (savedListType === 'clients' || savedListType === 'entreprises') {
      this.currentListType = savedListType;
    }

    if (this.currentListType === 'clients') {
      this.getListClients();
    } else {
      this.getListEntreprises();
    }
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
    return this.clients.filter(client => 
      (client.nomComplet?.toLowerCase().includes(searchLower)) ||
      (client.email?.toLowerCase().includes(searchLower)) ||
      (client.adresse?.toLowerCase().includes(searchLower)) ||
      (client.telephone?.includes(searchLower))
    );
  }

  get filteredEntreprises(): EntrepriseClient[] {
    if (!this.searchText.trim()) return this.entreprises;
    
    const searchLower = this.searchText.toLowerCase().trim();
    return this.entreprises.filter(entreprise => 
      (entreprise.nom?.toLowerCase().includes(searchLower)) ||
      (entreprise.email?.toLowerCase().includes(searchLower)) ||
      (entreprise.adresse?.toLowerCase().includes(searchLower)) ||
      (entreprise.telephone?.includes(searchLower)) ||
      (entreprise.pays?.toLowerCase().includes(searchLower)) ||
      (entreprise.siege?.toLowerCase().includes(searchLower)) ||
      (entreprise.secteur?.toLowerCase().includes(searchLower))
    );
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
    
    // if (type === 'entreprises' && this.entreprises.length === 0) {
    //   this.getListEntreprises();
    // } else if (type === 'clients' && this.clients.length === 0) {
    //   this.getListClients();
    // }

    if (type === 'entreprises') {
      this.getListEntreprises();
    } else {
      this.getListClients();
    }
  }

  getListEntreprises() {
    this.entreprisesLoaded = false;
    const token = localStorage.getItem('accessToken');
    if (token) {
      // Utiliser le service EntrepriseService au lieu de ClientService
      this.entrepriseService.getListEntreprises().subscribe({
        next: (data: EntrepriseClient[]) => {
          console.log('Entreprises récupérées:', data);
          this.entreprises = data;
          
          this.entreprises = this.entreprises.sort((a: EntrepriseClient, b: EntrepriseClient) => 
            (b.id ?? 0) - (a.id ?? 0)
          );
          this.entreprisesLoaded = true;
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des entreprises :', err);
          this.entreprisesLoaded = true;
        }
      });
    } else {
      console.error('Aucun token trouvé !');
      this.entreprisesLoaded = true;
    }
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
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.clientService.getListClients().subscribe({
        next: (data) => {
          console.log('📥 Données brutes:', data);

          this.clients = data.map(client => {
            return {
              ...client,
              photo: client.photo 
              ? `${this.apiUrl}${client.photo}` 
              : `/assets/img/profil.png`,
              
              entrepriseClient: client.entrepriseClient ? { 
                id: client.entrepriseClient.id
              } : null
            };
          });

          console.log('🖼️ URLs des photos clients :', this.clients.map(c => c.photo));

          // Tri décroissant par ID
          this.clients = this.clients.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));

          this.totalClients = this.clients.length;
          this.noClientsAvailable = this.clients.length === 0;

          this.dataSource.data = this.clients;
          this.dataSource.paginator = this.paginator;

          if (this.clients.length > 0) {
            console.log('👤 Exemple client :', this.clients[0]);
          }

          this.clientsLoaded = true;
        },
        error: (err) => {
          console.error('❌ Erreur récupération clients :', err);
          this.clientsLoaded = true;
        }
      });
    } else {
      console.error('🔐 Aucun token trouvé !');
      this.clientsLoaded = true;
    }
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


}
