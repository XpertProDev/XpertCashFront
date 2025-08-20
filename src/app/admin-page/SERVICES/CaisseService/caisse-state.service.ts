import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CaisseResponse } from '../../MODELS/CaisseModel/caisse.model';

@Injectable({ providedIn: 'root' })
export class CaisseStateService {
  private caisseCreatedSource = new BehaviorSubject<CaisseResponse | null>(null);
  private refreshCaissesSource = new BehaviorSubject<boolean>(false);
  private showAllCaissesSource = new BehaviorSubject<boolean>(false);

  caisseCreated$ = this.caisseCreatedSource.asObservable();
  refreshCaisses$ = this.refreshCaissesSource.asObservable();
  showAllCaisses$ = this.showAllCaissesSource.asObservable();

  notifyCaisseCreated(caisse: CaisseResponse) { this.caisseCreatedSource.next(caisse); }
  triggerRefresh() { this.refreshCaissesSource.next(true); }

  // contrôle direct
  showAllCaisses(value: boolean) {
    this.showAllCaissesSource.next(!!value);
    console.log('[CaisseStateService] showAllCaisses ->', !!value);
  }

  // toggle
  toggleShowAllCaisses() {
    const next = !this.showAllCaissesSource.getValue();
    this.showAllCaissesSource.next(next);
    console.log('[CaisseStateService] toggle ->', next);
  }

  // debug helper (optionnel)
  getShowAllCaissesValue() {
    return this.showAllCaissesSource.getValue();
  }
}
