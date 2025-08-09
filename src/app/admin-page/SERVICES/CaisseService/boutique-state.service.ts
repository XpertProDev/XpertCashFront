import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BoutiqueStateService {
  private selectedBoutiqueSubject = new BehaviorSubject<number | null>(null);
  selectedBoutique$ = this.selectedBoutiqueSubject.asObservable();

  constructor() {
    // Récupérer l'ID de la boutique depuis le localStorage au démarrage
    const savedBoutiqueId = localStorage.getItem('selectedBoutiqueId');
    if (savedBoutiqueId) {
      this.selectedBoutiqueSubject.next(parseInt(savedBoutiqueId, 10));
    }
  }

  setSelectedBoutique(boutiqueId: number | null): void {
    // Sauvegarder dans le localStorage
    if (boutiqueId !== null) {
      localStorage.setItem('selectedBoutiqueId', boutiqueId.toString());
    } else {
      localStorage.removeItem('selectedBoutiqueId');
    }
    this.selectedBoutiqueSubject.next(boutiqueId);
  }

  getCurrentValue(): number {
    const saved = localStorage.getItem('selectedBoutiqueId');
    return saved ? parseInt(saved, 10) : 0;
  }
}