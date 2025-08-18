import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CaisseResponse } from '../../MODELS/CaisseModel/caisse.model';

@Injectable({ providedIn: 'root' })
export class CaisseStateService {
  private caisseCreatedSource = new BehaviorSubject<CaisseResponse | null>(null);
  private refreshCaissesSource = new BehaviorSubject<boolean>(false);
  
  caisseCreated$ = this.caisseCreatedSource.asObservable();
  refreshCaisses$ = this.refreshCaissesSource.asObservable();

  notifyCaisseCreated(caisse: CaisseResponse) {
    this.caisseCreatedSource.next(caisse);
  }

  triggerRefresh() {
    this.refreshCaissesSource.next(true);
  }
}