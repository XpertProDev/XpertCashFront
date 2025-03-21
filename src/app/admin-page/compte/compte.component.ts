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

  paysFlags: { [key: string]: string } = {
    'Mali': '🇲🇱',
    'Sénégal': '🇸🇳',
    'Côte d\'Ivoire': '🇨🇮',
    'Guinée': '🇬🇳',
    'Burkina Faso': '🇧🇫',
    'Togo': '🇹🇬',
    'Niger': '🇳🇪',
    'Bénin': '🇧🇯',
    'Mauritanie': '🇲🇷',
    'Gabon': '🇬🇦',
    'Cameroun': '🇨🇲',
   
  };

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
    console.log("Token utilisé :", token);
  
    this.usersService.addUserToEntreprise(request, token).subscribe({
      next: (response) => {
        console.log("Réponse du serveur :", response);
  
        if (typeof response === 'string' && response.includes('succès')) {
          this.successMessage = response;
        } else {
          this.successMessage = "Utilisateur ajouté avec succès !";
        }
  
        // Réinitialisation des champs du formulaire
        this.userForm.reset();
  
        this.isLoading = false;
        this.closePopup();
        setTimeout(() => this.successMessage = null, 3000);
      },
    });
  }

  openPermissionDetail(userId: number): void {
    this.router.navigate(['/permission', userId]);
  }
  

}

