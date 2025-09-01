// src/app/admin-page/SERVICES/scanner.service.ts
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface ScanResult {
  code: string;
  success: boolean;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ScannerService {
  private scanSubject = new Subject<string>();
  private scanningSubject = new Subject<boolean>();
  private barcode = '';
  private timer: any;
  private isEnabled = true;
  private isUserTyping = false;
  private lastKeyTime = 0;
  private readonly SCAN_TIMEOUT = 150; // 150ms pour détecter la fin du scan
  private isScanning = false; // Flag pour éviter les scans multiples

  constructor() {
    this.setupScannerListener();
  }

  private setupScannerListener(): void {
    // listener global en phase de capture pour intercepter avant d'autres handlers
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      this.handleKeyEvent(event);
    }, true); // capture phase
  }

  private handleKeyEvent(event: KeyboardEvent): void {
    if (!this.isEnabled) return;

    // Si l'utilisateur est en train de taper volontairement, on n'interprète pas les frappes comme un scan
    if (this.isUserTyping) {
      return;
    }

    const now = Date.now();
    const timeSinceLastKey = now - this.lastKeyTime;
    this.lastKeyTime = now;

    // Ignorer si on est dans un champ de saisie (user tape)
    const target = event.target as HTMLElement | null;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
      // Ne pas traiter comme scan
      return;
    }

    // Si l'utilisateur tape normalement (délai > 200ms entre touches) => considérer comme saisie normale
    if (timeSinceLastKey > 200) {
      this.resetScan();
      return;
    }

    // Détection d'un scan: touches très rapides
    if (timeSinceLastKey < this.SCAN_TIMEOUT) {
      const key = this.mapAzertyKey(event.key); // Mapper les touches AZERTY -> chiffres si besoin

      // stopper la propagation pour empêcher d'autres handlers (ex: HostListener dans le composant POS)
      try {
        event.preventDefault();
        // stopImmediatePropagation est utile pour empêcher d'autres listeners sur le même événement
        // (surtout parce qu'on est en phase de capture)
        (event as any).stopImmediatePropagation?.();
      } catch (err) {
        // ignore si non supporté
      }

      if (key === 'Enter') {
        // Fin du scan
        if (this.barcode.length >= 3 && !this.isScanning) {
          this.isScanning = true;
          this.scanningSubject.next(true);
          // émet le code lu
          this.scanSubject.next(this.barcode);
          // petit délai pour indiquer la fin du scan
          setTimeout(() => {
            this.scanningSubject.next(false);
            this.isScanning = false;
          }, 100);
        }
        this.resetScan();
      } else if (key.length === 1 && !event.ctrlKey && !event.metaKey) {
        // Ajouter caractère dans le buffer de scan
        this.barcode += key;

        // Réinitialiser le timer de fin de scan
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          // si timeout => on considère que le scan est terminé / invalide
          this.resetScan();
        }, 500);
      }
    }
  }

  // Mapper les touches AZERTY vers QWERTY (ex: '&' => '1', etc.)
  private mapAzertyKey(key: string): string {
    const azertyMap: {[key: string]: string} = {
      '&': '1', 'é': '2', '"': '3', "'": '4', '(': '5',
      '-': '6', 'è': '7', '_': '8', 'ç': '9', 'à': '0',
      'ù': '0', '²': '2', '°': '0'
    };
    return azertyMap[key] || key;
  }

  private resetScan(): void {
    this.barcode = '';
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.isScanning = false;
  }

  getScanObservable(): Observable<string> {
    return this.scanSubject.asObservable();
  }

  getScanningObservable(): Observable<boolean> {
    return this.scanningSubject.asObservable();
  }

  setUserTyping(typing: boolean): void {
    this.isUserTyping = typing;
    // console.log('Scanner: User typing:', typing);
  }

  enableScanner(): void {
    this.isEnabled = true;
  }

  disableScanner(): void {
    this.isEnabled = false;
  }

  simulateScan(code: string): void {
    this.scanSubject.next(code);
  }

  destroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}
