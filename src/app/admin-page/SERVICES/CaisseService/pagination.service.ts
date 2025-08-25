// pagination.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

@Injectable({ providedIn: 'root' })
export class PaginationService {
  private paginationState = new BehaviorSubject<PaginationState>({
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0
  });

  state$ = this.paginationState.asObservable();

  getState(): PaginationState {
    return this.paginationState.value;
  }

  updateState(newState: Partial<PaginationState>) {
    const current = this.paginationState.value;
    this.paginationState.next({ ...current, ...newState });
  }

  setPage(page: number) {
    const safe = Math.max(1, Math.floor(page));
    this.updateState({ currentPage: safe });
  }

  setItemsPerPage(size: number) {
    const safe = Math.max(1, Math.floor(size));
    this.updateState({ itemsPerPage: safe, currentPage: 1 });
  }

  setTotalItems(total: number) {
    const safe = Math.max(0, Math.floor(total));
    this.updateState({ totalItems: safe });
  }

  reset() {
    this.paginationState.next({ currentPage: 1, itemsPerPage: 10, totalItems: 0 });
  }
}
