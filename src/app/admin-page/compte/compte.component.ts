import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Roles } from '../MODELS/roles.model';
import { RolesService } from '../SERVICES/roles.service';

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
export class CompteComponent {

  showPopup = false;
  roles: Roles[] = [];
  selectedRole: string = '';

  constructor(private rolesService: RolesService) {}

  ngOnInit() {
    this.loadRoles();
  }

  loadRoles() {
    const token = localStorage.getItem('authToken'); 
    if (token) {
      this.rolesService.getAllRoles(token).subscribe({
        next: (data) => {
          this.roles = data;
          console.log('Rôles récupérés:', data);
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

}
