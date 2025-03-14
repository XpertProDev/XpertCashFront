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
    NgxBarcode6Module
  ],
  templateUrl: './fournisseurs.component.html',
  styleUrl: './fournisseurs.component.scss'
})
export class FournisseursComponent {
  codeBare = signal<string>('');
  showBarcode = false;

  // Configuration options for barcode
  barcodeOptions = {
    format: 'CODE128', // Format le plus commun
    lineColor: '#000000',
    width: 2,
    height: 50,
    displayValue: true,
    margin: 10
  };

  onCodeBarChange(): void {
    this.showBarcode = this.codeBare().length >= 2;
  }

    // elementType = 'svg';
  // value = '00000';
  // format = 'codabar';
  // lineColor = '#000000';
  // width = 2;
  // height = 100;
  // displayValue = true;
  // fontOptions = '';
  // font = 'monospace';
  // textAlign = 'center';
  // textPosition = 'bottom';
  // textMargin = 2;
  // fontSize = 20;
  // background = '#ffffff';
  // margin = 10;
  // marginTop = 10;
  // marginBottom = 10;
  // marginLeft = 10;
  // marginRight = 10;
}