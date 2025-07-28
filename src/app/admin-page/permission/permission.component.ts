import { Component, OnInit } from '@angular/core';
import { Permission } from '../MODELS/permition.interface';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Users } from '../MODELS/utilisateur.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsersService } from '../SERVICES/users.service';
import { UserNewRequest } from '../MODELS/user-new-request.model';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AuthService } from '../SERVICES/auth.service';
import { UserRequest } from '../MODELS/user-request';

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

  isAdmin: boolean = false;
  isTargetManager: boolean = false;



  constructor(
      private usersService: UsersService,
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService,
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
    {
      id: 10,
      name: 'Gerer fournisseurs',
      imgUrl: 'assets/img/fournisseur.png',
      selected: false
    },
    {
      id: 11,
      name: 'Gerer la comptabilité',
      imgUrl: 'assets/img/comptabilite 2.png',
      selected: false
    }
  ];

  get selectedPermissions() {
    return this.permissions.filter(p => p.selected);
  }

 ngOnInit() {
  this.usersService.getUserInfo().subscribe({
    next: (currentUser: UserRequest) => {
      this.isAdmin = currentUser.roleType === 'ADMIN'; // ou currentUser.role === 'ADMIN', adapte selon structure
      this.getUserParId(); // 👈 Appelle ça ensuite
    },
    error: (err) => {
      console.error("Erreur récupération user connecté", err);
      this.getUserParId(); // Appelle quand même si erreur
    }
  });
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

      // ✅ Vérifier si la personne consultée est un Manager
      this.isTargetManager = user.role?.name === 'MANAGER';

      if (user.role?.permissions) {
        user.role.permissions.forEach(backendPermission => {
          const frontendId = this.mapBackendToFrontendPermission(backendPermission.type);

          // 🚫 Ne PAS afficher GERER_UTILISATEURS sauf si Admin connecté ET Manager ciblé
          if (frontendId === 6 && (!this.isAdmin || !this.isTargetManager)) {
            return;
          }

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
      'GERER_PRODUITS': 1,
      'VENDRE_PRODUITS': 2,
      'APPROVISIONNER_STOCK': 3,
      'GESTION_FACTURATION': 4,
      'GERER_CLIENTS': 5,
      'GERER_UTILISATEURS': 6,
      'GERER_BOUTIQUE': 7,
      'ACTIVER_BOUTIQUE': 8,
      'DESACTIVER_BOUTIQUE': 9,
      'GERER_FOURNISSEURS': 10,
      'COMPTABILITE': 11,
    };
    return mapping[backendType] ?? -1;
  }

  private mapFrontendToBackendPermission(frontendId: number): string {
    const mapping: { [key: number]: string } = {
      1: 'GERER_PRODUITS',
      2: 'VENDRE_PRODUITS',
      3: 'APPROVISIONNER_STOCK',
      4: 'GESTION_FACTURATION',
      5: 'GERER_CLIENTS',
      6: 'GERER_UTILISATEURS',
      7: 'GERER_BOUTIQUE',
      8:'ACTIVER_BOUTIQUE',
      9:'DESACTIVER_BOUTIQUE',
      10: 'GERER_FOURNISSEURS',
      11: 'COMPTABILITE'


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

  // Vérifier les changements
  const hasChanges = this.permissions.some(permission => {
    const wasSelected = this.originalSelectedPermissions.has(permission.id);
    return permission.selected !== wasSelected;
  });

  if (!hasChanges) {
    this.validationError = "Ces permissions sont déjà attribuées à l'utilisateur";
    setTimeout(() => {
      this.validationError = null;
    }, 3500);
    return;
  }

  // Préparer l'objet à envoyer
  this.permissions.forEach(permission => {
    const backendType = this.mapFrontendToBackendPermission(permission.id);
    if (backendType) {
      permissionsMap[backendType] = permission.selected;
    }
  });

  // Compter les permissions sélectionnées après les changements
  const selectedCount = this.permissions.filter(p => p.selected).length;

  this.usersService.assignPermissionsToUser(userId, permissionsMap).subscribe({
    next: (updatedUser) => {
      // Message conditionnel
      this.successMessage = selectedCount === 0
        ? "Toutes les permissions ont été retirées de l'utilisateur."
        : "Permissions sauvegardées avec succès !";

      console.log('Permissions mises à jour!', updatedUser);
      
      setTimeout(() => {
        this.successMessage = null;
      }, 15000);

      this.getUserParId();
    },
    error: (err) => {
      this.errorMessage = 'Une erreur est survenue lors de la sauvegarde';
      console.error('Erreur:', err);
      
      setTimeout(() => {
        this.errorMessage = null;
      }, 15000);
    }
  });
}


  // Vérifier si le bouton de sauvegarde doit être désactivé
get isSaveDisabled(): boolean {
  // Aucune permission modifiée → désactiver
  return !this.permissions.some(permission => {
    const wasSelected = this.originalSelectedPermissions.has(permission.id);
    return permission.selected !== wasSelected;
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
    let errorMsg = "Erreur lors de l'opération";

    if (err.error) {
      try {
        const parsed = typeof err.error === 'string' ? JSON.parse(err.error) : err.error;
        errorMsg = parsed.error || parsed.message || JSON.stringify(parsed);
      } catch {
        errorMsg = err.error;
      }
    } else if (err.message) {
      errorMsg = err.message;
    }

    this.errorMessage = errorMsg;
    console.error(err);

    this.checkboxRef!.checked = !isChecked;
    this.showConfirmationModal = false;
    setTimeout(() => this.errorMessage = null, 5000);
  }
});

}



  navigateBack() {
    this.router.navigate(['/utilisateur']);
  }

  

deleteUser(userId: number | undefined) {
   if (!userId) {
    console.warn('ID utilisateur invalide');
    this.errorMessage = "Impossible de supprimer l'utilisateur : ID invalide";
    setTimeout(() => this.errorMessage = null, 5000);
    return;
  }

  if (!confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) return;

  this.isLoading = true;
  this.usersService.deleteUserFromEntreprise(userId).subscribe({
    next: () => {
      this.successMessage = "Utilisateur supprimé avec succès.";
      this.isLoading = false;
      setTimeout(() => {
        this.successMessage = null;
        this.router.navigate(['/utilisateur']);
      }, 2000);
    },
    error: (err) => {
      this.isLoading = false;
      let errorMsg = "Erreur lors de la suppression de l'utilisateur";
      
      if (err.error) {
        try {
          const parsed = typeof err.error === 'string' ? JSON.parse(err.error) : err.error;
          errorMsg = parsed.error || parsed.message || JSON.stringify(parsed);
        } catch {
          errorMsg = err.error;
        }
      } else if (err.message) {
        errorMsg = err.message;
      }
      
      this.errorMessage = errorMsg;
      setTimeout(() => this.errorMessage = null, 5000);
    }
  });
}

}
