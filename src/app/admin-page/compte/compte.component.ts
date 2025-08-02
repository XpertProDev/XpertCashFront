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
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { BoutiqueService } from '../SERVICES/boutique-service';
import { of, switchMap, take, throwError } from 'rxjs';

@Component({
  selector: 'app-compte',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
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

  entrepriseId!: number;
  messageNoClient = 'Aucun utilisateur disponible.';

  pageSize = 5;
  currentPage = 0;
  paginatedUsers: any[] = [];

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
  currentUserRole: string = '';

  constructor(
    private rolesService: RolesService,
    private usersService: UsersService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private boutiqueService: BoutiqueService,
  ) {}

  ngOnInit() {
    this.loadRoles();
    this.initForm();
    this.updatePaginatedUsers();
    this.loadBoutiques();
    // this.handleRoleTypeChanges();
    this.loadCurrentUserRole();
    
    
    this.usersService.getUserInfo().subscribe({
    next: (userData) => {
      if (userData && userData.id) {
        this.entrepriseId = userData.id; // Stocker dans une propriété de classe
        this.loadUsersOfEntreprise(this.entrepriseId);
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
      pays: ['', Validators.required],
      // boutiqueId: [null],
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
  
  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedUsers();
  }

  updatePaginatedUsers() {
    const startIndex = this.currentPage * this.pageSize;
    this.paginatedUsers = this.filteredUsers.slice(startIndex, startIndex + this.pageSize);
  }

loadRoles() {
  this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        console.error('🔐 Aucun token trouvé !');
        return throwError(() => new Error('Aucun token trouvé'));
      }
      return this.rolesService.getAllRoles();
    })
  ).subscribe({
    next: (data) => {
      this.roles = data;
    },
    error: (err) => {
      console.error('Erreur lors du chargement des rôles', err);
    }
  });
}


 loadUsersOfEntreprise(entrepriseId: number) {
  this.isLoading = true;
  const token = this.usersService.getToken(); 
  const connectedUserId = token ? this.usersService.extractUserIdFromToken(token) : null;

  this.usersService.getAllUsersOfEntreprise(entrepriseId).subscribe({
    next: (data) => {
      // ⚠️ Exclure l'utilisateur connecté
      const filteredData = data.filter(user => user.id !== connectedUserId);

      this.users = filteredData.map(user => ({
        ...user,
        flag: this.paysFlags[user.pays] || ''
      }));

      this.filteredUsers = this.users;
      this.updatePaginatedUsers();
      this.isLoading = false;

      console.log('Utilisateurs récupérés (hors connecté) :', this.users);
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
      pays: '',
      // boutiqueId: [null],
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
  this.isLoading = true;

  this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        this.errorMessage = "Vous devez être connecté pour ajouter un utilisateur.";
        this.isLoading = false;
        return throwError(() => new Error("Aucun token trouvé"));
      }
      console.log("Données envoyées :", request);
      return this.usersService.addUserToEntreprise(request, token);
    }),
    switchMap(response => {
      if (response.id) {
        this.successMessage = "Utilisateur ajouté avec succès !";
        this.userForm.reset();
        this.closePopup();

        // Redirection avec l'ID du nouvel utilisateur
        this.router.navigate(['/userPermission', response.id]);

        // Rafraîchir la liste avec l'ID stocké
        this.loadUsersOfEntreprise(this.entrepriseId);

        // Rafraîchir la liste des utilisateurs via getUserInfo
        return this.usersService.getUserInfo();
      } else {
        return of(null);
      }
    })
  ).subscribe({
    next: (userData) => {
      if (userData && userData.id) {
        const entrepriseId = userData.id;
        this.loadUsersOfEntreprise(entrepriseId);
      }
      this.isLoading = false;
      setTimeout(() => this.successMessage = null, 3000);
    },
    error: (err) => {
      console.error("Erreur lors de l'ajout utilisateur ou récupération info utilisateur :", err);
      this.errorMessage = err.message || "Une erreur est survenue";
      this.isLoading = false;
    }
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
    this.updatePaginatedUsers();
  }

  filterUsers(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.nomComplet.toLowerCase().includes(this.searchTerm)
    );
    this.currentPage = 0;
    this.updatePaginatedUsers();
  }

  clearSearch(inputElement: HTMLInputElement) {
    this.searchTerm = '';
    this.filteredUsers = this.users;
    this.currentPage = 0; // Réinitialiser à la première page
    this.updatePaginatedUsers();
    inputElement.value = '';
  }

  boutiques: any[] = [];
showBoutiqueSelect = false;

/*
handleRoleTypeChanges() {
  this.userForm.get('roleType')?.valueChanges.subscribe(role => {
    console.log('Rôle sélectionné :', role);

    if (role === 'VENDEUR') {
      this.showBoutiqueSelect = true;
      this.userForm.get('boutiqueId')?.setValidators(Validators.required);
      this.loadBoutiques();  // Charger les boutiques quand le rôle est VENDEUR
    } else {
      this.showBoutiqueSelect = false;
      this.userForm.get('boutiqueId')?.clearValidators();
      this.userForm.get('boutiqueId')?.setValue(null);
    }
    this.userForm.get('boutiqueId')?.updateValueAndValidity();
  });
}
*/

loadBoutiques() {
  this.boutiqueService.getBoutiquesByEntreprise().subscribe({
    next: (data) => {
      this.boutiques = data;
      console.log("Liste des boutiques :", data);
    },
    error: (err) => {
      console.error('Erreur lors du chargement des boutiques', err);
    }
  });
}

isRoleVisible(roleName: string): boolean {
  if (this.currentUserRole === 'ADMIN' && roleName === 'ADMIN' || roleName === 'VENDEUR') {
    return false;
  }

  if (this.currentUserRole === 'MANAGER' && roleName === 'MANAGER'|| roleName === 'ADMIN' || roleName === 'VENDEUR') {
    return false;
  }

  return true;
}

private loadCurrentUserRole(): void {
  this.usersService.getUserInfo()
    .pipe(take(1))
    .subscribe({
      next: (user) => {
        this.currentUserRole = user.roleType;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération du rôle utilisateur :', err);
      }
    });
}

}

