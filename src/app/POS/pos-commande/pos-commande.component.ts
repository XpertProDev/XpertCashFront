import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClickOutsideDirective } from 'src/app/admin-page/MODELS/click-outside.directive';
import { environment } from 'src/environments/environment';
import { ViewStateService } from '../pos-accueil/view-state.service';

@Component({
  selector: 'app-pos-commande',
  imports: [FormsModule, CommonModule],
  templateUrl: './pos-commande.component.html',
  styleUrl: './pos-commande.component.scss'
})
export class PosCommandeComponent {
  private apiUrl = environment.imgUrl;
  isListView = true;
  showDropdown = false;

  constructor(
    private router: Router,
    private viewState: ViewStateService
  ) {}

  ngOnInit() {
    this.viewState.isListView$.subscribe(view => {
      this.isListView = view;
    });
  }

  toggleView(viewType: 'grid' | 'list') {
    this.isListView = viewType === 'grid';
    this.showDropdown = true;
    
    // Stocker la préférence dans le localStorage
    localStorage.setItem('viewPreference', viewType);
  }

}
