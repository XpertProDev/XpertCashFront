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
  showTypeDropdown = false;
  currentListType: 'clients' | 'entreprises' = 'clients';
  entreprises: EntrepriseClient[] = [];
  messageNoEntreprise = 'Aucune entreprise disponible.';

  constructor(
    private clientService: ClientService,
    private router: Router,
    private entrepriseService: EntrepriseService,
  ) {}

  ngOnInit() {
    // Récupérer les préférences depuis localStorage
    const savedView = localStorage.getItem('viewPreference');
  this.isListView = savedView !== 'grid'; 
    
    const savedListType = localStorage.getItem('listTypePreference');
    if (savedListType === 'clients' || savedListType === 'entreprises') {
      this.currentListType = savedListType;
    }

    if (this.currentListType === 'clients') {
      this.getListClients();
    } else {
      this.getListEntreprises(); // Charger les entreprises si c'est le type sélectionné
    }
  }

  // Gestion de la pagination
  onPageChange(event: PageEvent): void {
    if (this.currentListType === 'clients') {
      this.currentPageClients = event.pageIndex;
    } else {
      this.currentPageEntreprises = event.pageIndex;
    }
    
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
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
    this.showTypeDropdown = false;
    localStorage.setItem('listTypePreference', type);
    
    if (type === 'entreprises' && this.entreprises.length === 0) {
      this.getListEntreprises();
    } else if (type === 'clients' && this.clients.length === 0) {
      this.getListClients();
    }
  }

  getListEntreprises() {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Utiliser le service EntrepriseService au lieu de ClientService
      this.entrepriseService.getListEntreprises().subscribe({
        next: (data: EntrepriseClient[]) => {
          console.log('Entreprises récupérées:', data);
          this.entreprises = data;
          
          this.entreprises = this.entreprises.sort((a: EntrepriseClient, b: EntrepriseClient) => 
            (b.id ?? 0) - (a.id ?? 0)
          );
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des entreprises :', err);
        }
      });
    } else {
      console.error('Aucun token trouvé !');
    }
  }

  // Ajoutez ce getter pour la pagination des entreprises
  get paginatedEntreprises(): EntrepriseClient[] {
    const startIndex = this.currentPageEntreprises * this.pageSize;
    return this.entreprises.slice(startIndex, startIndex + this.pageSize);
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
  const token = localStorage.getItem('authToken');
  if (token) {
    this.clientService.getListClients().subscribe({
      next: (data) => {
        console.log('📥 Données brutes:', data);

        this.clients = data.map(client => {
          return {
            ...client,
            photoUrl: client.photo 
            ? `${this.apiUrl}${client.photo}` 
            : `/assets/images/default-avatar.png`,
            
            entrepriseClient: client.entrepriseClient ? { 
              id: client.entrepriseClient.id
            } : null
          };
        });

        console.log('🖼️ URLs des photos clients :', this.clients.map(c => c.photoUrl));

        // Tri décroissant par ID
        this.clients = this.clients.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));

        this.totalClients = this.clients.length;
        this.noClientsAvailable = this.clients.length === 0;

        this.dataSource.data = this.clients;
        this.dataSource.paginator = this.paginator;

        if (this.clients.length > 0) {
          console.log('👤 Exemple client :', this.clients[0]);
        }

      },
      error: (err) => {
        console.error('❌ Erreur récupération clients :', err);
      }
    });
  } else {
    console.error('🔐 Aucun token trouvé !');
  }
}



  //liste entreprise client
  get paginatedClients(): Clients[] {
    const startIndex = this.currentPageClients * this.pageSize;
    return this.clients.slice(startIndex, startIndex + this.pageSize);
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
