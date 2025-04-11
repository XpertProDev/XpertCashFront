import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../SERVICES/client-service';

@Component({
  selector: 'app-detail-edit-entreprise-client',
  imports: [],
  templateUrl: './detail-edit-entreprise-client.component.html',
  styleUrl: './detail-edit-entreprise-client.component.scss'
})
export class DetailEditEntrepriseClientComponent {

  constructor(
      // private clientService: ClientService,
      private router: Router,
  ) {}
  
  ngOnInit() {
    
  }

  // entreprise client id routing
  openEntrepriseClientDetail(clientId: number): void {
    this.router.navigate(['/detail-entreprise', clientId]);
  }
}
