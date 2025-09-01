// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

// export interface BarcodeScanResult {
//   code: string;
//   timestamp: number;
//   success: boolean;
//   message?: string;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class BarcodeScannerService {
//   private isScanning = false;
//   private currentScanBuffer = '';
//   private scanTimeout: any;
//   private readonly SCAN_TIMEOUT = 100; // 100ms pour détecter la fin du scan
//   private readonly MIN_BARCODE_LENGTH = 8; // Longueur minimale d'un code-barres
//   private readonly MAX_BARCODE_LENGTH = 20; // Longueur maximale d'un code-barres

//   private scanResultSubject = new BehaviorSubject<BarcodeScanResult | null>(null);
//   public scanResult$ = this.scanResultSubject.asObservable();

//   constructor() {
//     this.initializeScanner();
//   }

//   private initializeScanner(): void {
//     // Écouter les événements clavier pour capturer les scans
//     document.addEventListener('keydown', this.handleKeyDown.bind(this));
//   }

//   private handleKeyDown(event: KeyboardEvent): void {
//     // Ignorer si on est dans un champ de saisie
//     if (this.isInputField(event.target as HTMLElement)) {
//       return;
//     }

//     // Démarrer le scan si c'est le premier caractère
//     if (!this.isScanning) {
//       this.startScan();
//     }

//     // Ajouter le caractère au buffer
//     this.addToScanBuffer(event.key);
//   }

//   private isInputField(element: HTMLElement): boolean {
//     if (!element) return false;
    
//     const tagName = element.tagName.toLowerCase();
//     const inputTypes = ['input', 'textarea', 'select'];
    
//     if (inputTypes.includes(tagName)) return true;
    
//     // Vérifier si l'élément a l'attribut contenteditable
//     if (element.getAttribute('contenteditable') === 'true') return true;
    
//     // Vérifier les classes CSS communes pour les champs de saisie
//     const inputClasses = ['input', 'form-control', 'search-input', 'input_focus'];
//     return inputClasses.some(cls => element.classList.contains(cls));
//   }

//   private startScan(): void {
//     this.isScanning = true;
//     this.currentScanBuffer = '';
    
//     // Émettre un événement de début de scan
//     this.scanResultSubject.next({
//       code: '',
//       timestamp: Date.now(),
//       success: false,
//       message: 'Scanning...'
//     });
//   }

//   private addToScanBuffer(key: string): void {
//     // Réinitialiser le timeout à chaque nouveau caractère
//     if (this.scanTimeout) {
//       clearTimeout(this.scanTimeout);
//     }

//     // Ajouter le caractère au buffer
//     this.currentScanBuffer += key;

//     // Définir un timeout pour détecter la fin du scan
//     this.scanTimeout = setTimeout(() => {
//       this.completeScan();
//     }, this.SCAN_TIMEOUT);
//   }

//   private completeScan(): void {
//     if (!this.isScanning) return;

//     const code = this.currentScanBuffer.trim();
    
//     // Valider le code-barres
//     if (this.isValidBarcode(code)) {
//       this.scanResultSubject.next({
//         code: code,
//         timestamp: Date.now(),
//         success: true,
//         message: 'Code scanné avec succès'
//       });
//     } else {
//       this.scanResultSubject.next({
//         code: code,
//         timestamp: Date.now(),
//         success: false,
//         message: 'Code-barres invalide'
//       });
//     }

//     // Réinitialiser l'état
//     this.isScanning = false;
//     this.currentScanBuffer = '';
//     this.scanTimeout = null;
//   }

//   private isValidBarcode(code: string): boolean {
//     if (!code || code.length < this.MIN_BARCODE_LENGTH || code.length > this.MAX_BARCODE_LENGTH) {
//       return false;
//     }

//     // Vérifier que le code ne contient que des caractères valides
//     const validChars = /^[0-9A-Za-z\-\.\/\+\s]+$/;
//     return validChars.test(code);
//   }

//   // Méthode publique pour simuler un scan (utile pour les tests)
//   public simulateScan(code: string): void {
//     this.scanResultSubject.next({
//       code: code,
//       timestamp: Date.now(),
//       success: true,
//       message: 'Scan simulé'
//     });
//   }

//   // Méthode pour nettoyer les ressources
//   public destroy(): void {
//     if (this.scanTimeout) {
//       clearTimeout(this.scanTimeout);
//     }
//     document.removeEventListener('keydown', this.handleKeyDown.bind(this));
//   }
// }
