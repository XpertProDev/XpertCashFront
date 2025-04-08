import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatPaginator, MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { RouterLink } from "@angular/router";
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

  constructor(
    private clientService: ClientService,
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
          this.clients = data;
          this.totalClients = data.length;
          console.log('Clients récupérées:', this.clients);
        },
      })
    } else {
      console.error('Aucun token trouvé !');
    }
  }

  get paginatedClients(): Clients[] {
    const startIndex = this.currentPage * this.pageSize;
    return this.clients.slice(startIndex, startIndex + this.pageSize);
  }

}
