import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../SERVICES/client-service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { EntrepriseClientService } from '../../SERVICES/entreprise-clients-service';
import { CommonModule } from '@angular/common';
import { Clients } from '../../MODELS/clients-model';
import { Entreprise } from '../../MODELS/entreprise-model';

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
  entrepriseClientForm!: FormGroup;


  errorMessage: string = '';
  errorMessageApi: string = '';
  successMessage = '';
  isListView = true;
  showDropdown = false;
  showPopup = false;
  clients: Clients[] = [];
  sortField = 'nomComplet';
  sortDirection: 'asc' | 'desc' = 'asc';
  noClientsAvailable = false;
  messageNoClient = 'Aucun client disponible.';
  client: Clients = {
    entrepriseClient: {} // Initialisation par défaut
  } as Clients;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private entrepriseClientService: EntrepriseClientService,
  ) {}

  ngOnInit() {
    // Récupérer la préférence depuis le localStorage
    const savedView = localStorage.getItem('viewPreference');
    this.isListView = savedView !== 'grid'; 
    this.getListClients();
    const id = +this.route.snapshot.params['id'];
    this.getClient(id);
    this.getFormEntreprise();
  }

  getFormEntreprise() {
    this.entrepriseClientForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.email]],
      telephone: ['', [Validators.pattern(/^\d+$/)]],
      adresse: [''],
      pays: [''],
      siege: [''],
      secteur: ['']
    });
  }

  getClient(id: number) {
    this.clientService.getClientById(id).subscribe({
      next: (client) => {
        this.client = client;
        this.initializeForm(); // Initialiser le formulaire après récupération
      },
      error: (err) => console.error('Erreur lors de la récupération:', err)
    });
  }

  toggleView(viewType: 'list' | 'grid') {
    this.isListView = viewType === 'list';
    this.showDropdown = true;
    
    // Stocker la préférence dans le localStorage
    localStorage.setItem('viewPreference', viewType);
  }

  initializeForm() {
    if (this.client?.entrepriseClient) {
      this.entrepriseClientForm.patchValue({
        nom: this.client.entrepriseClient.nom || '',
        email: this.client.entrepriseClient.email || '',
        telephone: this.client.entrepriseClient.telephone || '',
        adresse: this.client.entrepriseClient.adresse || '',
        pays: this.client.entrepriseClient.pays || '',
        siege: this.client.entrepriseClient.siege || '',
        secteur: this.client.entrepriseClient.secteur || ''
      });
    }
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

  // client id routing
  openClientDetail(clientId: number): void {
    this.router.navigate(['/detail-client', clientId]);
  }
  
  // entreprise client id routing
  openEntrepriseClientDetail(clientId: number, event: MouseEvent): void {
    event.stopPropagation(); 
    this.router.navigate(['/detail-entreprise', clientId]);
  }

   // Ouvre/ferme le popup choix d'ajoute client
   openPopup() { this.showPopup = true; }
   closePopup() { this.showPopup = false; }

  goToClients() {
      this.router.navigate(['/clients']);
  }

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.entrepriseClientForm.valid && this.client?.entrepriseClient?.id) {
      const updatedEntreprise = this.getFormData();
  
      this.entrepriseClientService.updateEntrepriseClient(
        this.client.entrepriseClient.id,
        updatedEntreprise
      ).subscribe({
        next: (updatedEntreprise) => {
          console.log('Entreprise mise à jour:', updatedEntreprise);
          this.client.entrepriseClient = { 
            ...this.client.entrepriseClient, 
            ...updatedEntreprise 
          };
          // Option 1 : Recharger les données du client
          this.getClient(this.client.id!);
          
          // Option 2 : Naviguer vers la liste (avec rafraîchissement)
          this.router.navigate(['/clients']);
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour:', err);
          alert(err.message || 'Erreur lors de la modification');
        }
      });
    } else {
      alert('Veuillez corriger les erreurs dans le formulaire');
    }
  }

  private getFormData(): Entreprise {
    return {
      id: this.client.entrepriseClient?.id,
      nom: this.entrepriseClientForm.get('nom')?.value,
      pays: this.client.entrepriseClient?.pays,
      email: this.entrepriseClientForm.get('email')?.value,
      telephone: this.entrepriseClientForm.get('telephone')?.value,
      adresse: this.entrepriseClientForm.get('adresse')?.value,
      siege: this.client.entrepriseClient?.siege,
      secteur: this.client.entrepriseClient?.secteur,
      logo: this.client.entrepriseClient?.logo,
      nif: this.client.entrepriseClient?.nif,
      nina: this.client.entrepriseClient?.nina,
      banque: this.client.entrepriseClient?.banque,
      rccm: this.client.entrepriseClient?.rccm,
      siteWeb: this.client.entrepriseClient?.siteWeb,
      signataire: this.client.entrepriseClient?.signataire,
      signataireNom: this.client.entrepriseClient?.signataireNom,

    };
  }

}

