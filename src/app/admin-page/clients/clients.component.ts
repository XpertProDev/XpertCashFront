import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-clients',
  imports: [
      CommonModule,
  ],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  isListView = true; // Par défaut on affiche la liste
  showDropdown = false; // Contrôle l'affichage du dropdown
  clients = [ // Déplace tes données dans un tableau
    { name: 'Koureissi SY', email: 'sydiakaridia00@gmail', address: 'Koulouba', phone: '78711623' },
    { name: 'Amadou Traore', email: 'Amadou@gmail', address: 'Koulouba', phone: '79632526' },
    { name: 'Mamoutou Daiby', email: 'Mamoutou@gmail', address: 'Koulouba', phone: '72464400' }
  ];

  toggleView(viewType: string) {
    this.isListView = viewType === 'list';
    this.showDropdown = true;
  }
}
