import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail-stock',
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './detail-stock.component.html',
  styleUrl: './detail-stock.component.scss'
})
export class DetailStockComponent {

  // Dropdown pour l'export
  showExportDropdown = false;
    
  // Affichage/Masquage du dropdown d'export
  toggleExportDropdown() {
    this.showExportDropdown = !this.showExportDropdown;
  }
  
  // Masque le dropdown si l'utilisateur clique en dehors
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.export-container')) {
      this.showExportDropdown = false;
    }
  }

}
