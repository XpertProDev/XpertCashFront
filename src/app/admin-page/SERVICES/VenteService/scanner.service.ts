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
  private processing = false;
  private isScannerEnabled = true;

  constructor() {
    this.setupScannerListener();
  }

  private setupScannerListener(): void {
    // écoute en capture pour pouvoir stopper la propagation avant les handlers normaux
    document.addEventListener('keydown', (event: KeyboardEvent) => {
       // Ignorer si le scanner est désactivé
      if (!this.isScannerEnabled) {
        return;
      }

      // Ignore si on est dans un champ de texte (utilisateur tape dans un input)
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return; // ne pas interférer si l'utilisateur tape volontairement
      }

      // Stopper la propagation pour éviter que d'autres handlers (HostListener du component)
      // traitent les mêmes touches du scanner.
      try {
        event.stopImmediatePropagation();
      } catch (e) { /* ignore si non supporté */ }
      event.preventDefault();

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

      // marquer qu'un scan est en cours (optionnel)
      this.processing = true;

      // Ignorer les touches spéciales sauf Enter
      if (key === 'Enter') {
        if (this.barcode.length >= 1) { // tu as déjà 6 dans ton code; tu peux adapter
          this.scanSubject.next(this.barcode);
          this.showScanIndicator();
        }
        this.barcode = '';
        clearTimeout(this.timer);
        this.processing = false;
      } else if (key.length === 1 && !event.ctrlKey && !event.metaKey) {
        // Ajouter le caractère au code-barres en cours
        this.barcode += key;
        this.showScanIndicator();

        // Réinitialiser le timer (augmenté un peu pour Mac)
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.barcode = ''; // Réinitialiser si trop de temps entre les frappes
          this.processing = false;
        }, 250); // 250ms -> 300ms selon la config du scanner / machine
      }
    }, true); // <-- true pour listener en capture
  }

  private isAzertyKeyboard(): boolean {
      // Détection simple basée sur la langue du navigateur
      return navigator.language.includes('fr') || 
              navigator.languages.some(lang => lang.includes('fr'));
  }
  public isProcessingScan(): boolean {
      return this.processing;
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

  public enableScanner(): void {
    this.isScannerEnabled = true;
  }

  public disableScanner(): void {
    this.isScannerEnabled = false;
  }
}