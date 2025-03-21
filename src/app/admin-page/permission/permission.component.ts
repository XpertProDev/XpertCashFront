import { Component, OnInit } from '@angular/core';
import { Permission } from '../MODELS/permition.interface';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Users } from '../MODELS/utilisateur.model';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../SERVICES/users.service';
import { UserNewRequest } from '../MODELS/user-new-request.model';

@Component({
  selector: 'app-permission',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './permission.component.html',
  styleUrl: './permission.component.scss'
})
export class PermissionComponent implements OnInit {

  user: UserNewRequest | undefined;;

  constructor(
      private usersService: UsersService,
      private route: ActivatedRoute,
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
      name: 'Voir Flux Comptable',
      imgUrl: 'assets/img/comptabilite.png',
      selected: false
    },
    { 
      id: 4,
      name: 'Approvisionner stock',
      imgUrl: 'assets/img/approvisionnement.png',
      selected: false
    },
    { 
      id: 5,
      name: 'Gerer magasins',
      imgUrl: 'assets/img/boutique.png',
      selected: false
    },
    { 
      id: 6,
      name: 'Gerer personnel',
      imgUrl: 'assets/img/directeur.png',
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
  // permission.component.ts
  // permission.component.ts
  getUserParId() {
    const userId = this.route.snapshot.params['userId'];
    
    this.usersService.getUserById(userId).subscribe({
      next: (user: UserNewRequest) => {
        console.log('Réponse complète:', user);
        this.user = user;

        this.permissions.forEach(p => p.selected = false);
        
        // Ajouter la vérification de null/undefined
        if (user.role && user.role.permissions) {
          user.role.permissions.forEach(backendPermission => {
            const frontendId = this.mapBackendToFrontendPermission(backendPermission.type);
            const permission = this.permissions.find(p => p.id === frontendId);
            if (permission) {
              console.log(`Activation de la permission : ${permission.name}`);
              permission.selected = true;
            } else {
              console.warn(`Aucune correspondance trouvée pour : ${backendPermission.type}`);
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
      'VOIR_FLUX_COMPTABLE': 3,   // Voir Flux Comptable
      'APPROVISIONNER_STOCK': 4,  // Approvisionner stock
      'GERER_MAGASINS': 5,        // Gerer magasins
      'GERER_PERSONNEL': 6        // Gerer personnel
    };
    return mapping[backendType] ?? -1;
  }


}
