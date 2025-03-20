import { Component } from '@angular/core';
import { Permission } from '../MODELS/permition.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-permission',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './permission.component.html',
  styleUrl: './permission.component.scss'
})
export class PermissionComponent {

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
      name: 'Gerer magasins',
      imgUrl: 'assets/img/boutique.png',
      selected: false
    },
    { 
      id: 5,
      name: 'Approvisionner stock',
      imgUrl: 'assets/img/approvisionnement.png',
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

  get selectedCount() {
    return this.selectedPermissions.length;
  }

  togglePermission(permission: Permission) {
    permission.selected = !permission.selected;
  }


}
