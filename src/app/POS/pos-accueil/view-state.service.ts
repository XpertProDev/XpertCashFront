import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewStateService {
  private isListViewSubject = new BehaviorSubject<boolean>(true);
  isListView$ = this.isListViewSubject.asObservable();

  setViewPreference(isList: boolean) {
    this.isListViewSubject.next(isList);
    localStorage.setItem('viewPreference', isList ? 'list' : 'grid');
  }
}