import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Roles } from '../MODELS/roles.model';
import { RolesService } from '../SERVICES/roles.service';
import { UserNewRequest } from '../MODELS/user-new-request.model';
import { UsersService } from '../SERVICES/users.service';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Users } from '../MODELS/utilisateur.model';

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

  constructor(
    private rolesService: RolesService,
    private usersService: UsersService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.loadRoles();
    this.initForm();
  }

  initForm() {
    this.userForm = this.fb.group({
      nomComplet: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
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

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  onSubmit(): void {
    this.errorMessage = null;
    this.successMessage = null;
  
    if (this.userForm.invalid) {
      this.errorMessage = "Veuillez remplir tous les champs correctement";
      return;
    }
  
    const request: UserNewRequest = this.userForm.value;
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      this.errorMessage = "Token non disponible";
      return;
    }
  
    // Activer le loader
    this.isLoading = true;
  
    this.usersService.addUserToEntreprise(request, token).subscribe({
      next: (response) => {
        const res = response as string;
        if (typeof res === 'string' && res.includes('succès')) {
          this.successMessage = res;
        } else {
          this.successMessage = "Création de compte réussie !";
        }
        this.userForm.reset();
        this.isLoading = false; 
        this.closePopup();
        setTimeout(() => this.successMessage = null, 1000);
      },      
      error: (error) => {
        this.isLoading = false; 
        if (error instanceof HttpErrorResponse) {
          if (error.error && typeof error.error === 'object') {
            this.errorMessage = Object.values(error.error).join(', ') || "Erreur inconnue";
          } else {
            this.errorMessage = error.error || "Erreur inconnue";
          }
        } else {
          this.errorMessage = "Erreur lors de l'ajout de l'utilisateur";
        }
        setTimeout(() => this.errorMessage = null, 10000);
      }           
    });
  }
  
  

}

// sydiakaridia38@gmail.com