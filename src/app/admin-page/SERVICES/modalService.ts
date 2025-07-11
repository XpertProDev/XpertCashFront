import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private sessionExpiredModalSubject = new Subject<void>();

  // Observable que le composant va écouter
  sessionExpiredModal$ = this.sessionExpiredModalSubject.asObservable();

  // Méthode appelée depuis l'interceptor ou service
  triggerSessionExpiredModal(): void {
    this.sessionExpiredModalSubject.next();
  }
}
