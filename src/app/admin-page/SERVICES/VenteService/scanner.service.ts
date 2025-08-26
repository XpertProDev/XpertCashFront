// src/app/admin-page/SERVICES/scanner.service.ts
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScannerService {
  private scanSubject = new Subject<string>();
  private scanningSubject = new Subject<boolean>();
  private barcode = '';
  private timer: any;

  constructor() {
    this.setupScannerListener();
  }

//   private setupScannerListener(): void {
//     document.addEventListener('keydown', (event: KeyboardEvent) => {
//       // Ignorer les touches spéciales sauf Enter
//       if (event.key === 'Enter') {
//         if (this.barcode.length >= 6) { // Un code-barres valide a généralement au moins 6 caractères
//           this.scanSubject.next(this.barcode);
//           this.showScanIndicator();
//         }
//         this.barcode = '';
//         clearTimeout(this.timer);
//       } else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey) {
//         // Ajouter le caractère au code-barres en cours
//         this.barcode += event.key;
//         this.showScanIndicator();
        
//         // Réinitialiser le timer
//         clearTimeout(this.timer);
//         this.timer = setTimeout(() => {
//           this.barcode = ''; // Réinitialiser si trop de temps entre les frappes
//         }, 100);
//       }
//     });
//   }

// scanner.service.ts - version améliorée
private setupScannerListener(): void {
  document.addEventListener('keydown', (event: KeyboardEvent) => {
    // Mapper les touches en fonction de la disposition du clavier
    let key = event.key;
    
    // Gestion des claviers AZERTY (convertir certaines touches)
    if (this.isAzertyKeyboard()) {
      const azertyMap: {[key: string]: string} = {
        '&': '1', 'é': '2', '"': '3', "'": '4', '(': '5',
        '-': '6', 'è': '7', '_': '8', 'ç': '9', 'à': '0'
      };
      
      key = azertyMap[key] || key;
    }

    // Ignorer les touches spéciales sauf Enter
    if (key === 'Enter') {
      if (this.barcode.length >= 6) {
        this.scanSubject.next(this.barcode);
        this.showScanIndicator();
      }
      this.barcode = '';
      clearTimeout(this.timer);
    } else if (key.length === 1 && !event.ctrlKey && !event.metaKey) {
      // Ajouter le caractère au code-barres en cours
      this.barcode += key;
      this.showScanIndicator();
      
      // Réinitialiser le timer
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.barcode = ''; // Réinitialiser si trop de temps entre les frappes
      }, 100);
    }
  });
}

private isAzertyKeyboard(): boolean {
  // Détection simple basée sur la langue du navigateur
  return navigator.language.includes('fr') || 
         navigator.languages.some(lang => lang.includes('fr'));
}

  private showScanIndicator(): void {
    this.scanningSubject.next(true);
    setTimeout(() => this.scanningSubject.next(false), 100);
  }

  getScanObservable(): Observable<string> {
    return this.scanSubject.asObservable();
  }

  getScanningObservable(): Observable<boolean> {
    return this.scanningSubject.asObservable();
  }
}