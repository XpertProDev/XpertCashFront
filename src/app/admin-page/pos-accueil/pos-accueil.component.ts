import { Component, OnInit, OnDestroy } from '@angular/core';
import { BarcodeScannerService, BarcodeScanResult } from '../../POS/pos-vente/barcode-scanner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pos-accueil',
  templateUrl: './pos-accueil.component.html',
  styleUrls: ['./pos-accueil.component.css']
})
export class PosAccueilComponent implements OnInit, OnDestroy {
  isScanning = false;
  scanMessage = '';
  private scanTimeout: any;
  private scanSubscription: any;

  constructor(
    private barcodeScanner: BarcodeScannerService,
    private router: Router
  ) { }

  ngOnInit() {
    // S'abonner aux résultats du scanner
    this.scanSubscription = this.barcodeScanner.scanResult$.subscribe((result: BarcodeScanResult | null) => {
      if (result && result.success) {
        this.handleBarcodeScan(result.code);
      }
    });
  }

  private handleBarcodeScan(barcode: string): void {
    // Afficher le message de scan
    this.isScanning = true;
    this.scanMessage = `Code scanné: ${barcode}`;
    
    // Masquer le message après 100ms
    if (this.scanTimeout) {
      clearTimeout(this.scanTimeout);
    }
    
    this.scanTimeout = setTimeout(() => {
      this.isScanning = false;
      this.scanMessage = '';
    }, 100);

    // Rediriger vers la page de vente avec le code-barres
    this.router.navigate(['/pos-accueil'], { 
      queryParams: { barcode: barcode } 
    });
  }

  ngOnDestroy() {
    if (this.scanTimeout) {
      clearTimeout(this.scanTimeout);
    }
    if (this.scanSubscription) {
      this.scanSubscription.unsubscribe();
    }
  }
}