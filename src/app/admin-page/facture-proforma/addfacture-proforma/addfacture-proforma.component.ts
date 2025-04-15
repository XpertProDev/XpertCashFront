import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addfacture-proforma',
  imports: [
       FormsModule,
        CommonModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
  ],
  templateUrl: './addfacture-proforma.component.html',
  styleUrl: './addfacture-proforma.component.scss'
})
export class AddfactureProformaComponent {
 
  remiseTVAActive: boolean = false;
  remisePourcentage: number | null = null;
  tva: number | null = null; 
  
    constructor(
      private router: Router,
    ) {}

    onToggleRemiseTVA() {
      if (this.remiseTVAActive) {
        this.tva = 18;
      } else {
        this.remisePourcentage = null;
        this.tva = null;
      }
    }

    goToFacture() {
      this.router.navigate(['/facture-proforma']);
    }



}
