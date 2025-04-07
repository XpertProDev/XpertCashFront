import { trigger, transition, query, style, stagger, animate } from "@angular/animations";
import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

interface Client {
  name: string;
  email: string;
  address: string;
  phone: string;
}

@Component({
  selector: 'app-clients',
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
  ],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  // animations: [
  //   trigger('viewAnimation', [
  //     transition('* <=> *', [
  //       query(':enter', [
  //         style({ opacity: 0, transform: 'translateY(20px)' }),
  //         stagger('50ms', [
  //           animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  //         ])
  //       ], { optional: true }),
  //       query(':leave', [
  //         animate('200ms', style({ opacity: 0 }))
  //       ], { optional: true })
  //     ])
  //   ])
  // ]
})
export class ClientsComponent implements OnInit  {

  isListView = true;
  showDropdown = false; 

  // Pagination et tableau de données
    dataSource = new MatTableDataSource<Client>();
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    pageSize = 6;
    currentPage = 0;

  ngOnInit() {
    // Récupérer la préférence depuis le localStorage
    const savedView = localStorage.getItem('viewPreference');
    this.isListView = savedView !== 'grid'; // 'grid' si trouvé, sinon liste par défaut
  }
  
  clients = [ // Déplace tes données dans un tableau
    { name: 'Koureissi SY', email: 'sydiakaridia00@gmail.com', address: 'Koulouba', phone: '+223 78711623'},
    { name: 'Koureissi SY', email: 'sydiakaridia00@gmail.com', address: 'Koulouba', phone: '+223 78711623'},
    { name: 'Amadou Traore', email: 'Amadou@gmail.com', address: 'Koulouba', phone: '+223 79632526'},
    { name: 'Amadou Traore', email: 'Amadou@gmail.com', address: 'Koulouba', phone: '+223 79632526'},
    { name: 'Mamoutou Daiby', email: 'Mamoutou@gmail.com', address: 'Koulouba', phone: '+223 72464400'},
    { name: 'Mamoutou Daiby', email: 'Mamoutou@gmail.com', address: 'Koulouba', phone: '+223 72464400'},
  ];

   // Gestion de la pagination
   onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  toggleView(viewType: 'list' | 'grid') {
    this.isListView = viewType === 'list';
    this.showDropdown = true;
    
    // Stocker la préférence dans le localStorage
    localStorage.setItem('viewPreference', viewType);
  }

  sortField = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';

  // Modifie la fonction sort
  sort(field: keyof Client) { // Spécifie le type de field
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }

    this.clients.sort((a, b) => {
      const modifier = this.sortDirection === 'asc' ? 1 : -1;
      const valueA = a[field].toString().toLowerCase();
      const valueB = b[field].toString().toLowerCase();
      return valueA.localeCompare(valueB) * modifier;
    });
  }

}
