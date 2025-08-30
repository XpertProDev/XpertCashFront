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
    // Utiliser un listener global pour capturer tous les événements clavier
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      this.handleKeyEvent(event);
    }, true); // true = capture phase pour intercepter avant les autres handlers
  }

  private handleKeyEvent(event: KeyboardEvent): void {
    if (!this.isEnabled) return;

    const now = Date.now();
    const timeSinceLastKey = now - this.lastKeyTime;
    this.lastKeyTime = now;

    // Ignorer si on est dans un champ de saisie
    const target = event.target as HTMLElement;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
      console.log('Scanner: Ignoré - dans un champ de saisie');
      return;
    }

    // Si l'utilisateur tape normalement (délai > 200ms entre touches)
    if (timeSinceLastKey > 200) {
      console.log('Scanner: Ignoré - utilisateur tape normalement');
      this.resetScan();
      return;
    }

    // Scanner détecté (délai < 150ms entre touches)
    if (timeSinceLastKey < this.SCAN_TIMEOUT) {
      console.log('Scanner: Événement de scan détecté, délai:', timeSinceLastKey, 'ms');
      
      const key = this.mapAzertyKey(event.key); // Mapper les touches AZERTY
      
      if (key === 'Enter') {
        if (this.barcode.length >= 3 && !this.isScanning) {
          console.log('Scanner: Code complet détecté:', this.barcode);
          this.isScanning = true;
          this.scanningSubject.next(true);
          this.scanSubject.next(this.barcode);
          
          setTimeout(() => {
            this.scanningSubject.next(false);
            this.isScanning = false;
          }, 100);
        } else if (this.isScanning) {
          console.log('Scanner: Scan déjà en cours, ignoré');
        } else {
          console.log('Scanner: Code trop court:', this.barcode);
        }
        this.resetScan();
      } else if (key.length === 1 && !event.ctrlKey && !event.metaKey) {
        this.barcode += key;
        console.log('Scanner: Caractère ajouté:', key, 'Buffer:', this.barcode);
        
        // Réinitialiser le timer
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          console.log('Scanner: Timeout, reset buffer');
          this.resetScan();
        }, 500); // 500ms pour détecter la fin du scan
      }
    }
  }

  // Mapper les touches AZERTY vers QWERTY
  private mapAzertyKey(key: string): string {
    const azertyMap: {[key: string]: string} = {
      '&': '1', 'é': '2', '"': '3', "'": '4', '(': '5',
      '-': '6', 'è': '7', '_': '8', 'ç': '9', 'à': '0',
      'ù': '0', '²': '2', '°': '0'
    };
    
    return azertyMap[key] || key;
  }

  // Réinitialiser l'état du scan
  private resetScan(): void {
    this.barcode = '';
    clearTimeout(this.timer);
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
    console.log('Scanner: User typing:', typing);
  }

  enableScanner(): void {
    this.isEnabled = true;
    console.log('Scanner: Activé');
  }

  disableScanner(): void {
    this.isEnabled = false;
    console.log('Scanner: Désactivé');
  }

  // Méthode de test pour simuler un scan
  simulateScan(code: string): void {
    console.log('Scanner: Simulation de scan avec:', code);
    this.scanSubject.next(code);
  }

  destroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    console.log('Scanner: Service détruit');
  }
}