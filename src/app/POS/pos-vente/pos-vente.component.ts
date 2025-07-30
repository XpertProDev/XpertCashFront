import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ViewStateService } from '../pos-accueil/view-state.service';

@Component({
  selector: 'app-pos-vente',
  imports: [FormsModule, CommonModule],
  templateUrl: './pos-vente.component.html',
  styleUrl: './pos-vente.component.scss'
})
export class PosVenteComponent {
  isListView = true;
  showDropdown = false;

  constructor(
    private router: Router,
    private viewState: ViewStateService
  ) {}

  ngOnInit() {
    // Récupérer l'état initial
    const savedView = localStorage.getItem('viewPreference');
    this.isListView = savedView ? savedView === 'list' : true;
    
    // S'abonner aux changements
    this.viewState.isListView$.subscribe(view => {
      this.isListView = view;
    });
  }

  // toggleView(viewType: 'grid' | 'list') {
  //   this.isListView = viewType === 'grid';
  //   this.showDropdown = true;
    
  //   // Stocker la préférence dans le localStorage
  //   localStorage.setItem('viewPreference', viewType);
  // }

  // toggleView(viewType: 'grid' | 'list') {
  //   this.isListView = viewType === 'grid';
  //   this.showDropdown = true;
    
  //   // Stocker la préférence dans le localStorage
  //   localStorage.setItem('viewPreference', viewType);
  // }

}
