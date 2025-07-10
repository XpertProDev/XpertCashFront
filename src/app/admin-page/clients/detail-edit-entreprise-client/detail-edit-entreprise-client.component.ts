import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../SERVICES/client-service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { EntrepriseClientService } from '../../SERVICES/entreprise-clients-service';
import { CommonModule } from '@angular/common';
import { Clients } from '../../MODELS/clients-model';
import { Entreprise } from '../../MODELS/entreprise-model';
import { TruncateEmailPipe } from '../../MODELS/truncate-email.pipe';

@Component({
  selector: 'app-detail-edit-entreprise-client',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    TruncateEmailPipe,
  ],
  templateUrl: './detail-edit-entreprise-client.component.html',
  styleUrl: './detail-edit-entreprise-client.component.scss'
})
export class DetailEditEntrepriseClientComponent {
  currentClientId: number | null = null;
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
  clientsAffilies: Clients[] = [];
  indicatif: string = '';
  maxPhoneLength: number = 0;
  isLoading = false;
  
  // Définissez les indicatifs par pays
  paysIndicatifs: { [key: string]: { indicatif: string, longueur: number, exemple: string } } = {
  'Mali': { indicatif: '+223 ', longueur: 8, exemple: '+223 12345678' },
  'Sénégal': { indicatif: '+221 ', longueur: 9, exemple: '+221 123456789' },
  'Côte d\'Ivoire': { indicatif: '+225 ', longueur: 10, exemple: '+225 0123456789' }
};

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
    this.currentClientId = id;
    this.getClient(id);
    this.getFormEntreprise();
  }

  onPaysChange(event: any): void {
  const paysSelectionne = event.target.value;
  const paysInfo = this.paysIndicatifs[paysSelectionne];
  
  if (paysInfo) {
    this.indicatif = paysInfo.indicatif;
    
    // Mettre à jour le validateur
    this.updatePhoneValidator(paysInfo.longueur);
    
    // Mettre à jour la valeur du téléphone
    const telephoneControl = this.entrepriseClientForm.get('telephone');
    if (!telephoneControl?.value.startsWith(this.indicatif)) {
      telephoneControl?.setValue(this.indicatif);
    }
  }
}

formatPhoneNumber(): void {
  const telephoneControl = this.entrepriseClientForm.get('telephone');
  let valeur = telephoneControl?.value || '';
  
  if (this.indicatif && !valeur.startsWith(this.indicatif)) {
    // Réinitialiser si l'indicatif est modifié manuellement
    telephoneControl?.setValue(this.indicatif);
    return;
  }

  // Nettoyer les caractères non numériques
  const chiffres = valeur.replace(/\D/g, '');
  
  // Réappliquer l'indicatif + chiffres
  telephoneControl?.setValue(
    this.indicatif + chiffres.slice(this.indicatif.replace(/\D/g, '').length)
  );
}

updatePhoneValidator(longueur: number): void {
  const regex = new RegExp(`^${this.indicatif.replace('+', '\\+')}\\d{${longueur}}$`);
  
  this.entrepriseClientForm.get('telephone')?.setValidators([
    Validators.pattern(regex)
  ]);
  
  this.entrepriseClientForm.get('telephone')?.updateValueAndValidity();
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

  // Modifier getClient() pour récupérer les clients affiliés
  getClient(id: number) {
    this.clientService.getClientById(id).subscribe({
      next: (client) => {
        this.client = client;
        this.initializeForm();
        
        // Filtrer les clients affiliés
        this.getClientsAffilies();
      },
      error: (err) => console.error('Erreur lors de la récupération:', err)
    });
  }

  // Nouvelle méthode pour récupérer les clients affiliés
  getClientsAffilies() {
    if (!this.client?.entrepriseClient?.id) return;
    
    const entrepriseId = this.client.entrepriseClient.id;
    
    this.clientService.getClientsByEntreprise(entrepriseId).subscribe({
      next: (clients) => {
        this.clientsAffilies = clients;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des clients affiliés:', err);
      }
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
        secteur: this.client.entrepriseClient.secteur || '',
        
      });

      // Initialiser l'indicatif si pays existant
      if (this.client.entrepriseClient.pays && this.paysIndicatifs[this.client.entrepriseClient.pays]) {
            this.indicatif = this.paysIndicatifs[this.client.entrepriseClient.pays].indicatif;
            this.updatePhoneValidator(this.paysIndicatifs[this.client.entrepriseClient.pays].longueur);
          }

          // Formater le téléphone
          this.entrepriseClientForm.patchValue({
            telephone: this.client.entrepriseClient.telephone || this.indicatif
          });
        }
  }

  // list clients 
  getListClients() {
    const token = localStorage.getItem('accessToken');
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
    this.router.navigate(['/detail-entreprise-client', clientId]);
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
      
      // Activer l'indicateur de chargement
      this.isLoading = true;

      // Ajouter un délai de 3 secondes avant la modification
      setTimeout(() => {
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
                  
                  // Ajout du message de succès
                  this.successMessage = 'Entreprise mise à jour avec succès !';
                  
                  // Option 1 : Recharger les données du client
                  this.getClient(this.client.id!);
                  
                  // Désactiver l'indicateur de chargement
                  this.isLoading = false;
                  
                  // Effacer le message de succès après 3 secondes
                  setTimeout(() => {
                      this.successMessage = '';
                  }, 3000);
              },
              error: (err) => {
                  console.error('Erreur lors de la mise à jour:', err);
                  this.errorMessage = err.error?.message || 'Erreur lors de la modification';
                  this.isLoading = false;
              }
              });
          } else {
              this.errorMessage = 'Veuillez corriger les erreurs dans le formulaire';
              this.isLoading = false;
          }
      }, 3000); // Délai de 3 secondes
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
      prefixe: this.client.entrepriseClient?.prefixe,
      suffixe: this.client.entrepriseClient?.suffixe,
      tauxTva: this.client.entrepriseClient?.tauxTva

    };
  }

}

