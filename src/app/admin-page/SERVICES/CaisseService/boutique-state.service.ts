import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BoutiqueStateService {
  private selectedBoutiqueSubject = new BehaviorSubject<number | null>(null);
  selectedBoutique$ = this.selectedBoutiqueSubject.asObservable();

  setSelectedBoutique(boutiqueId: number | null) {
    this.selectedBoutiqueSubject.next(boutiqueId);
  }
}