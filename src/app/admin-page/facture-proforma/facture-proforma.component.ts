import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facture-proforma',
  imports: [
      CommonModule,
        FormsModule,
        ReactiveFormsModule,
  ],
  templateUrl: './facture-proforma.component.html',
  styleUrl: './facture-proforma.component.scss'
})
export class FactureProformaComponent implements OnInit {
  searchTerm: string = '';

    constructor(
      private router: Router,
    ) {}

  ngOnInit(){}


  goToAddProduit() {
    this.router.navigate(['/addfacture-proforma']);
  }

  clearSearch(): void {
    this.searchTerm = '';
  }
}
