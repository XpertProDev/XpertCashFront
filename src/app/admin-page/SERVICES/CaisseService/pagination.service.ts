// pagination.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PaginationService {
  private paginationState = new BehaviorSubject({
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0
  });

  state$ = this.paginationState.asObservable();

  getState() {
    return this.paginationState.value;
  }

  updateState(newState: Partial<{ currentPage: number; itemsPerPage: number; totalItems: number }>) {
    const currentState = this.paginationState.value;
    this.paginationState.next({ ...currentState, ...newState });
  }
  
  // SUPPRIMEZ CETTE MÉTHODE - ELLE N'APPARTIENT PAS À CE SERVICE
  // getSelectedBoutiqueId(): number | null {
  //   return this.selectedBoutiqueSubject.value;
  // }
}