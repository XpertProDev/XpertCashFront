import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail-facture-proforma',
  imports: [ FormsModule, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './detail-facture-proforma.component.html',
  styleUrl: './detail-facture-proforma.component.scss'
})
export class DetailFactureProformaComponent implements OnInit {
  isLoading: boolean = false;
  remiseTVAActive: boolean = false;
  remisePourcentage: number = 0;
  tva: number = 0;
  errorMessage: string = '';


  ngOnInit(): void {}

  // Toggle remise / TVA
  onToggleRemiseTVA() {
    if (!this.remiseTVAActive) {
      this.remisePourcentage = 0;
      this.tva = 0;
    }
  }

  submitUpdateForm() {}

}
