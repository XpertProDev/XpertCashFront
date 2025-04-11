import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../SERVICES/client-service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { EntrepriseClientService } from '../../SERVICES/entreprise-clients-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-edit-entreprise-client',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './detail-edit-entreprise-client.component.html',
  styleUrl: './detail-edit-entreprise-client.component.scss'
})
export class DetailEditEntrepriseClientComponent {

  entrepriseClientEditForm!: FormGroup;
  errorMessageApi: string = '';
  successMessage: string = '';
  isSubmitting = false;
  private destroy$ = new Subject<void>();

  constructor(
      private router: Router,
      private fb: FormBuilder,
      private entrepriseClientService: EntrepriseClientService,
  ) {}
  
  ngOnInit() {
    
  }

  // Annuler et revenir à la liste
  goToClients() {
    this.router.navigate(['/clients']);
  }

}
