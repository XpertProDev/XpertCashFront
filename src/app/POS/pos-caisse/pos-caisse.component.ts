import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pos-caisse',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './pos-caisse.component.html',
  styleUrl: './pos-caisse.component.scss'
})
export class PosCaisseComponent {
  showModal = false; // Contrôle l'affichage du popup

  // Ouvre le popup
  openModal() {
    this.showModal = true;
  }

  // Ferme le popup
  closeModal() {
    this.showModal = false;
  }

  // Soumet le formulaire (exemple)
  submitForm() {
    console.log("Caisse créée !");
    this.closeModal();
  }
}
