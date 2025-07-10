import { Component, OnInit } from '@angular/core';
import { Permission } from '../MODELS/permition.interface';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Users } from '../MODELS/utilisateur.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsersService } from '../SERVICES/users.service';
import { UserNewRequest } from '../MODELS/user-new-request.model';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-permission',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    // RouterLink,
  ],
  templateUrl: './permission.component.html',
  styleUrl: './permission.component.scss'
})
export class PermissionComponent implements OnInit {

  user: UserNewRequest | undefined;
  enabledLien?: boolean;

  errorMessage: string | null = null;
  successMessage: string | null = null;
  validationError: string | null = null;
  originalSelectedPermissions: Set<number> = new Set();
  isLoading: boolean = false;
  isEditing: boolean = false;

  showConfirmationModal = false;
  confirmationTitle = '';
  confirmationMessage = '';
  pendingAction: 'suspend' | 'activate' | null = null;
  private checkboxRef?: HTMLInputElement;

  constructor(
      private usersService: UsersService,
      private route: ActivatedRoute,
      private router: Router,
    ) {}

  permissions: Permission[] = [
    { 
      id: 1,
      name: 'Gerer produit',
      imgUrl: 'assets/img/gestion-des-produits.png',
      selected: false
    },
    { 
      id: 2,
      name: 'Vendre produit',
      imgUrl: 'assets/img/vendre.png',
      selected: false
    },
    { 
      id: 3,
      name: 'Approvisonner Stock',
      imgUrl: 'assets/img/comptabilite.png',
      selected: false
    },
    { 
      id: 4,
      name: 'Gestion de facture',
      imgUrl: 'assets/img/approvisionnement.png',
      selected: false
    },
    { 
      id: 5,
      name: 'Gerer les cliens',
      imgUrl: 'assets/img/directeur.png',


      selected: false
    },
    { 
      id: 6,
      name: 'Gerer les utilisateurs',
      imgUrl: 'assets/img/directeur.png',
      selected: false
    },
    { 
      id: 7,
      name: 'Gerer boutiques',
      imgUrl: 'assets/img/boutique.png',
      selected: false
    },
     { 
      id: 8,
      name: 'Activer boutiques',
      imgUrl: 'assets/img/boutique.png',
      selected: false
    },
     { 
      id: 9,
      name: 'Desactver boutiques',
      imgUrl: 'assets/img/boutique.png',
      selected: false
    },
  ];

  get selectedPermissions() {
    return this.permissions.filter(p => p.selected);
  }

  ngOnInit() {
    this.getUserParId();
  }

  get selectedCount() {
    return this.selectedPermissions.length;
  }

  togglePermission(permission: Permission) {
    permission.selected = !permission.selected;
    console.log(`Permission "${permission.name}" changée à :`, permission.selected);
  }
  

  // permission.component.ts
  getUserParId() {
    const userId = this.route.snapshot.params['userId'];
    
    this.usersService.getUserById(userId).subscribe({
      next: (user: UserNewRequest) => {
        this.user = user;
        this.originalSelectedPermissions.clear();
  
        this.permissions.forEach(p => p.selected = false);
        
        if (user.role?.permissions) {
          user.role.permissions.forEach(backendPermission => {
            const frontendId = this.mapBackendToFrontendPermission(backendPermission.type);
            const permission = this.permissions.find(p => p.id === frontendId);
            if (permission) {
              permission.selected = true;
              this.originalSelectedPermissions.add(permission.id);
            }
          });
        }
      },
      error: (err) => console.error('Erreur:', err)
    });
  }

  private mapBackendToFrontendPermission(backendType: string): number {
    const mapping: { [key: string]: number } = {
      'GERER_PRODUITS': 1,        // Gerer produit
      'VENDRE_PRODUITS': 2,       // Vendre produit
      'APPROVISIONNER_STOCK': 3,   // Voir Flux Comptable
      'Gestion_Facture': 4,  // Approvisionner stock
      'GERER_CLIENTS': 5,        // Gerer magasins
      'GERER_UTILISATEURS': 6,        // Gerer personnel
      'GERER_BOUTIQUE': 7,
      'ACTIVER_BOUTIQUE': 8,
      'DESACTIVER_BOUTIQUE': 9
    };
    return mapping[backendType] ?? -1;
  }

  private mapFrontendToBackendPermission(frontendId: number): string {
    const mapping: { [key: number]: string } = {
      1: 'GERER_PRODUITS',
      2: 'VENDRE_PRODUITS',
      3: 'APPROVISIONNER_STOCK',
      4: 'Gestion_Facture',
      5: 'GERER_CLIENTS',
      6: 'GERER_UTILISATEURS',
      7: 'GERER_BOUTIQUE',
      8:'ACTIVER_BOUTIQUE',
      9:'DESACTIVER_BOUTIQUE'

    };
    return mapping[frontendId] ?? '';
  }


  // Ajouter cette méthode pour gérer l'envoi
  savePermissions() {
    const userId = this.route.snapshot.params['userId'];
    const permissionsMap: { [key: string]: boolean } = {};

    // Réinitialiser les messages
    this.successMessage = null;
    this.errorMessage = null;
    this.validationError = null;

    // Compter les permissions sélectionnées
    const selectedCount = this.permissions.filter(p => p.selected).length;
    
    // Validation personnalisée
    if (selectedCount === 0) {
      this.validationError = "Vous devez attribuer au moins une permission à l'utilisateur";
      
      // Disparition automatique après 5 secondes
      setTimeout(() => {
        this.validationError = null;
      }, 3500);
      return;
    }
    
    // Vérifier les changements
    const hasChanges = this.permissions.some(permission => {
      const backendType = this.mapFrontendToBackendPermission(permission.id);
      const wasSelected = this.originalSelectedPermissions.has(permission.id);
      return permission.selected !== wasSelected;
    });

    if (!hasChanges) {
      this.validationError = "Ces permissions sont déjà attribuées à l'utilisateur";
      
      // Disparition automatique après 5 secondes
      setTimeout(() => {
        this.validationError = null;
      }, 3500);
      return;
    }

    // Suite de la logique d'envoi...
    this.permissions.forEach(permission => {
      const backendType = this.mapFrontendToBackendPermission(permission.id);
      if (backendType) {
        permissionsMap[backendType] = permission.selected;
      }
    });

    this.usersService.assignPermissionsToUser(userId, permissionsMap).subscribe({
      next: (updatedUser) => {
        this.successMessage = 'Permissions sauvegardées avec succès !';
        console.log('Permissions mises à jour!', updatedUser);
        
        // Disparition automatique après 3 secondes
        setTimeout(() => {
          this.successMessage = null;
        }, 15000);

        this.getUserParId();
      },
      error: (err) => {
        this.errorMessage = 'Une erreur est survenue lors de la sauvegarde';
        console.error('Erreur:', err);
        
        // Disparition automatique après 5 secondes
        setTimeout(() => {
          this.errorMessage = null;
        }, 15000);
      }
    });
  }

  // Suspendre user
  onSuspendChange(event: Event) {
    event.preventDefault();
    this.checkboxRef = event.target as HTMLInputElement;
    this.pendingAction = this.user?.enabledLien ? 'suspend' : 'activate';
    
    this.confirmationTitle = this.pendingAction === 'suspend' 
      ? 'Suspendre l\'utilisateur' 
      : 'Activer l\'utilisateur';
    
    this.confirmationMessage = this.pendingAction === 'suspend'
      ? 'Êtes-vous sûr de vouloir suspendre cet utilisateur ? Il ne pourra plus accéder au système.'
      : 'Êtes-vous sûr de vouloir réactiver cet utilisateur ?';
    
    this.showConfirmationModal = true;
  }

  // Ajoutez ces nouvelles méthodes
  cancelAction() {
    this.showConfirmationModal = false;
    if (this.checkboxRef) {
      this.checkboxRef.checked = !this.checkboxRef.checked;
    }
    this.pendingAction = null;
  }

  handleSuspendAction() {
    if (!this.pendingAction || !this.checkboxRef) return;

    const userId = this.route.snapshot.params['userId'];
    const isChecked = this.pendingAction === 'suspend';

    this.usersService.suspendUser(userId, isChecked).subscribe({
      next: (response: string) => {
        this.successMessage = response;
        if (this.user) {
          this.user.enabledLien = !isChecked;
        }
        this.showConfirmationModal = false;
        setTimeout(() => this.successMessage = null, 5000);
      },
      error: (err) => {
        this.errorMessage = err.error || "Erreur lors de l'opération";
        console.error(err);
        this.checkboxRef!.checked = !isChecked;
        this.showConfirmationModal = false;
        setTimeout(() => this.errorMessage = null, 5000);
      }
    });
  }
  
  private showSuccessMessage(isChecked: boolean) {
    this.successMessage = `Utilisateur ${isChecked ? 'suspendu' : 'réactivé'} avec succès`;
    setTimeout(() => this.successMessage = null, 5000);
  }
  
  private handleError(error: any) {
    console.error('Erreur:', error);
    this.errorMessage = error.error?.message || 'Erreur serveur';
    setTimeout(() => this.errorMessage = null, 5000);
  }
  
  // Ajoutez cette méthode dans la classe :
  private confirmAction(message: string): Promise<boolean> {
    return new Promise((resolve) => {
      resolve(confirm(message)); 
    });
  }

  navigateBack() {
    this.router.navigate(['/utilisateur']);
  }

  toggleEditing(): void {}


}
