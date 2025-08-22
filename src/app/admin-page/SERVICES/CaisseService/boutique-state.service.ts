import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BoutiqueStateService {
  private readonly STORAGE_KEY = 'selectedBoutiqueId';

  // initialisation avec la valeur sessionStorage (ou migration depuis localStorage)
  private selectedBoutiqueSubject = new BehaviorSubject<number | null>(this.loadInitial());
  selectedBoutique$ = this.selectedBoutiqueSubject.asObservable();

  constructor() {
    // rien d'autre à faire ici (loadInitial a déjà effectué la migration si nécessaire)
  }

  /** Charge la valeur initiale depuis sessionStorage.
   *  Si une valeur existe dans localStorage (ancienne app), on la migre vers sessionStorage. */
  private loadInitial(): number | null {
    // migration depuis localStorage (si nécessaire)
    const legacy = localStorage.getItem(this.STORAGE_KEY);
    if (legacy !== null) {
      try {
        // transférer dans sessionStorage puis supprimer l'ancien
        sessionStorage.setItem(this.STORAGE_KEY, legacy);
      } catch (e) {
        console.warn('Impossible de migrer la boutique depuis localStorage', e);
      }
      localStorage.removeItem(this.STORAGE_KEY);
    }

    const saved = sessionStorage.getItem(this.STORAGE_KEY);
    return saved !== null ? Number(saved) : null;
  }

  setSelectedBoutique(boutiqueId: number | null): void {
    if (boutiqueId !== null) {
      sessionStorage.setItem(this.STORAGE_KEY, boutiqueId.toString());
    } else {
      sessionStorage.removeItem(this.STORAGE_KEY);
    }
    this.selectedBoutiqueSubject.next(boutiqueId);
  }

  /** retourne la valeur actuelle (ou null si aucune) */
  getCurrentValue(): number | null {
    const saved = sessionStorage.getItem(this.STORAGE_KEY);
    return saved !== null ? Number(saved) : null;
  }
}
