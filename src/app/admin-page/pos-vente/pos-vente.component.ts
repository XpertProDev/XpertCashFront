import { Component, HostListener } from '@angular/core';
import { BarcodeScanService } from 'src/app/admin-page/SERVICES/barcode-scan.service';

@Component({
  selector: 'app-pos-vente',
  templateUrl: './pos-vente.component.html',
  styleUrls: ['./pos-vente.component.css']
})
export class PosVenteComponent {
  private scanBuffer: string = '';
  private scanTimer: any = null;
  private lastScanTime: number = 0;

  constructor(
    private barcodeScanService: BarcodeScanService
  ) {
    // S'abonner au scan service
    this.barcodeScanService.barcodeScanned$.subscribe(barcode => {
      this.handleBarcodeScan(barcode);
    });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Ajout pour scan code-barres
    this.handleBarcodeKeyboard(event);
  }

  // Ajout : gestion du scan clavier
  handleBarcodeKeyboard(event: KeyboardEvent) {
    // Ignore si popup ouvert
    if (this.showDetailPopup || this.showClientPopup || this.showAddClientPopup) return;

    const now = Date.now();
    // Si plus de 100ms entre deux touches, reset le buffer
    if (now - this.lastScanTime > 100) this.scanBuffer = '';
    this.lastScanTime = now;

    // On ne prend que les chiffres et Enter
    if (/^[0-9]$/.test(event.key)) {
      this.scanBuffer += event.key;
      // On limite à 30 caractères pour éviter les débordements
      if (this.scanBuffer.length > 30) this.scanBuffer = this.scanBuffer.slice(-30);
    } else if (event.key === 'Enter' && this.scanBuffer.length > 4) {
      // On considère qu'un scan est terminé par Enter et au moins 5 chiffres
      const barcode = this.scanBuffer;
      this.scanBuffer = '';
      this.barcodeScanService.scan(barcode);
    }
  }

  // Ajout : méthode pour gérer le scan
  handleBarcodeScan(barcode: string) {
    // Recherche du produit par codeBare
    const produit = this.allProducts.find(p => p.codeBare === barcode);
    if (produit) {
      // Ajoute au panier (incrémente la quantité)
      const currentQty = this.cart.get(produit.id) || 0;
      this.cart.set(produit.id, currentQty + 1);
      this.saveActiveCart();
      this.updateCommandeTotals();
      // Optionnel : feedback visuel (ex: flash sur le produit)
    } else {
      // Optionnel : feedback produit non trouvé
      // alert('Produit non trouvé pour le code-barres : ' + barcode);
    }
  }
}