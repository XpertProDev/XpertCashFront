// fournisseurs.component.ts
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxBarcode6Module } from 'ngx-barcode6';

@Component({
  selector: 'app-fournisseurs',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './fournisseurs.component.html',
  styleUrl: './fournisseurs.component.scss'
})
export class FournisseursComponent {
  
  
}