import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatPaginator, MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router, RouterLink } from "@angular/router";
import { ClientService } from "../SERVICES/client-service";
import { Clients } from "../MODELS/clients-model";


@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    RouterLink,
  ],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  
})
export class ClientsComponent implements OnInit  {

  isListView = true;
  showDropdown = false; 

  // Pagination et tableau de données
  // Client 
  dataSource = new MatTableDataSource<Clients>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize = 6;
  currentPage = 0;
  totalClients = 0;
  clients: Clients[] = [];
  sortField = 'nomComplet';
  sortDirection: 'asc' | 'desc' = 'asc';
  noClientsAvailable = false;
  messageNoClient = 'Aucun client disponible.';

  constructor(
    private clientService: ClientService,
    private router: Router,
  ) {}

  ngOnInit() {
    // Récupérer la préférence depuis le localStorage
    const savedView = localStorage.getItem('viewPreference');
    this.isListView = savedView !== 'grid'; 
    this.getListClients();
  }

  // Gestion de la pagination
  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  toggleView(viewType: 'list' | 'grid') {
    this.isListView = viewType === 'list';
    this.showDropdown = true;
    
    // Stocker la préférence dans le localStorage
    localStorage.setItem('viewPreference', viewType);
  }


  // Modifie la fonction sort
  sort(field: keyof Clients) {
    if (this.sortField === field) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        this.sortField = field;
        this.sortDirection = 'asc';
    }

    this.clients.sort((a, b) => {
        const modifier = this.sortDirection === 'asc' ? 1 : -1;
        // Gestion des valeurs undefined/null
        const valueA = a[field]?.toString().toLowerCase() ?? '';
        const valueB = b[field]?.toString().toLowerCase() ?? '';
        return valueA.localeCompare(valueB) * modifier;
    });
  }

  // list clients 
  getListClients() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.clientService.getListClients().subscribe({
        next: (data) => {
          console.log('Données brutes:', data);
          this.clients = data.map(client => ({
            ...client,
            entrepriseClient: client.entrepriseClient ? { 
              id: client.entrepriseClient.id,
              nom: client.entrepriseClient.nom
            } : null
          }));
          
          // 1. Trier par id décroissant pour que les plus récents (id élevés) soient en tête
          this.clients = data.sort((a, b) => {
            // si vous avez un champ createdAt : return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            return (b.id ?? 0) - (a.id ?? 0);
          });
  
          this.totalClients = this.clients.length;
          this.noClientsAvailable = this.clients.length === 0;
  
          // 2. Mettre à jour la source de données du tableau/paginator
          this.dataSource.data = this.clients;
          this.dataSource.paginator = this.paginator;

          // Vérifiez un client spécifique
          if (this.clients.length > 0) {
            console.log('Exemple de client:', this.clients[0]);
            console.log('Entreprise associée:', this.clients[0].entrepriseClient);
          }
  
          console.log('Clients récupérées (triées) :', this.clients);
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des clients :', err);
        }
      });
    } else {
      console.error('Aucun token trouvé !');
    }
  }

  get paginatedClients(): Clients[] {
    const startIndex = this.currentPage * this.pageSize;
    return this.clients.slice(startIndex, startIndex + this.pageSize);
  }

  // boutique id routing
  openClientDetail(clientId: number): void {
    this.router.navigate(['/detail-client', clientId]);
  }


}
