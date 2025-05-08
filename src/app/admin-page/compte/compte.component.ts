import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Roles } from '../MODELS/roles.model';
import { RolesService } from '../SERVICES/roles.service';
import { UserNewRequest } from '../MODELS/user-new-request.model';
import { UsersService } from '../SERVICES/users.service';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Users } from '../MODELS/utilisateur.model';
import { log } from 'console';

@Component({
  selector: 'app-compte',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.scss'
})
export class CompteComponent  implements OnInit {

  showPopup = false;
  roles: Roles[] = [];
  // roles: any[] = [];
  selectedRole: string = '';

  isLoading: boolean = false;

  userForm!: FormGroup;
  errorMessage: string | null = null; 
  successMessage: string | null = null;

  users: any[] = [];
  filteredUsers: any[] = [];

  paysFlags: { [key: string]: string } = {
    'Mali': '🇲🇱',
    'Sénégal': '🇸🇳',
    'Côte d\'Ivoire': '🇨🇮',
    'Guinée': '🇬🇳',
    'Burkina Faso': '🇧🇫',
    'Niger': '🇳🇪',
  };

  indicatif: string = '';
  maxPhoneLength: number = 8;

  paysIndicatifs: { [key: string]: { indicatif: string, longueur: number } } = {
    'Mali': { indicatif: '+223', longueur: 8 },
    'Sénégal': { indicatif: '+221', longueur: 9 },
    'Côte d\'Ivoire': { indicatif: '+225', longueur: 10 },
    'Guinée': { indicatif: '+224', longueur: 9 },
    'Burkina Faso': { indicatif: '+226', longueur: 8 },
    'Niger': { indicatif: '+227', longueur: 8 },
  };

  isAscending: boolean = true;
  searchTerm: string = '';

  constructor(
    private rolesService: RolesService,
    private usersService: UsersService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.loadRoles();
    this.initForm();
    
    this.usersService.getUserInfo().subscribe({
      next: (userData) => {
        if (userData && userData.id) {
          const entrepriseId = userData.id;
          this.loadUsersOfEntreprise(entrepriseId);
        } else {
          console.error("Impossible de récupérer l'ID de l'entreprise.");
        }
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des informations utilisateur :", err);
      }
    });
    
    this.filteredUsers = this.users;
  }


  initForm() {
    this.userForm = this.fb.group({
      nomComplet: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      roleType: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{8,15}$/)]],
      pays: ['', Validators.required]
    });
  }

  onPaysChange(event: any): void {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
  
    if (paysInfo) {
      this.indicatif = `${paysInfo.indicatif} `;  
  
      this.maxPhoneLength = this.indicatif.length + paysInfo.longueur;
  
      this.userForm.controls['phone'].setValue(this.indicatif);
  
      this.updatePhoneValidator(paysInfo.longueur);
    }
  }
  
  updatePhoneValidator(longueur: number): void {
    this.userForm.controls['phone'].setValidators([
      Validators.required,
      Validators.pattern(`^\\+\\d{1,3}\\s?\\d{${longueur}}$`)
    ]);
    this.userForm.controls['phone'].updateValueAndValidity();
  }
  
  formatPhoneNumber(): void {
    let valeur = this.userForm.controls['phone'].value;
  
    if (!valeur.startsWith(this.indicatif)) {
      this.userForm.controls['phone'].setValue(this.indicatif);
    }
  
    let regex = new RegExp(`^\\${this.indicatif}(\\d*)$`);
    let match = valeur.match(regex);
  
    if (match) {
      let chiffres = match[1].replace(/\D/g, '');
      this.userForm.controls['phone'].setValue(this.indicatif + chiffres);
    }
  }
  
  

  loadRoles() {
    const token = localStorage.getItem('authToken'); 
    if (token) {
      this.rolesService.getAllRoles(token).subscribe({
        next: (data) => {
          this.roles = data;
        },
        error: (err) => {
          console.error('Erreur lors du chargement des rôles', err);
        }
      });
    }
  }

  loadUsersOfEntreprise(entrepriseId: number) {
    this.isLoading = true;
    this.usersService.getAllUsersOfEntreprise(entrepriseId).subscribe({
      next: (data) => {
        this.users = data.map(user => ({
          ...user,
          flag: this.paysFlags[user.pays] || ''
        }));
        this.filteredUsers = this.users; // Mise à jour des utilisateurs filtrés
        this.isLoading = false;
        console.log('Utilisateurs récupérés:', this.users);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des utilisateurs', err);
        this.isLoading = false;
      }
    });
  }

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.resetForm();
  }

  private resetForm() {
    this.userForm.patchValue({
      nomComplet: '',
      email: '',
      roleType: '',
      phone: '',
      pays: ''
    });
  
    this.userForm.markAsPristine();
    this.userForm.markAsUntouched();
    this.userForm.updateValueAndValidity();
  }

  onSubmit(): void {
    this.errorMessage = null;
    this.successMessage = null;
  
    if (this.userForm.invalid) {
      this.errorMessage = "Veuillez remplir tous les champs correctement.";
      return;
    }
  
    const request: UserNewRequest = this.userForm.value;
    const token = localStorage.getItem('authToken');
  
    if (!token) {
      this.errorMessage = "Vous devez être connecté pour ajouter un utilisateur.";
      return;
    }
  
    this.isLoading = true;
  
    console.log("Données envoyées :", request);
    //console.log("Token utilisé :", token);
  
    this.usersService.addUserToEntreprise(request, token).subscribe({
      next: (response) => {
        //console.log("Réponse du serveur :", response);
  
        if (typeof response === 'string' && response.includes('succès')) {
          this.successMessage = response;
        } else {
          this.successMessage = "Utilisateur ajouté avec succès !";
        }
  
        this.userForm.reset();
  
        // Rafraîchir la liste des utilisateurs
        this.usersService.getUserInfo().subscribe({
          next: (userData) => {
            if (userData && userData.id) {
              const entrepriseId = userData.id;
              this.loadUsersOfEntreprise(entrepriseId);
            }
          },
          error: (err) => {
            console.error("Erreur lors de la récupération des informations utilisateur :", err);
          }
        });
  
        this.isLoading = false;
        this.closePopup();
        setTimeout(() => this.successMessage = null, 3000);
      },
    });
  }

  openPermissionDetail(userId: number): void {
    this.router.navigate(['/userPermission', userId]);
  }

  sortRoles() {
    this.users = this.users.sort((a, b) => {
      if (this.isAscending) {
        if (a.role?.name < b.role?.name) return -1;
        if (a.role?.name > b.role?.name) return 1;
      } else {
        if (a.role?.name > b.role?.name) return -1;
        if (a.role?.name < b.role?.name) return 1;
      }
      return 0;
    });
    this.isAscending = !this.isAscending;
  }

  filterUsers(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.nomComplet.toLowerCase().includes(this.searchTerm)
    );
  }

  clearSearch(inputElement: HTMLInputElement) {
    this.searchTerm = '';
    this.filteredUsers = this.users;
    inputElement.value = '';
  }
  

}

