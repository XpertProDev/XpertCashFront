import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class LockService {
  private appComponent!: AppComponent;

  constructor() {
  this.lockAudio.volume = 0.3;
  this.unlockAudio.volume = 0.3;
}

  private lockAudio = new Audio('assets/sounds/lock.mp3');
  private unlockAudio = new Audio('assets/sounds/lock.mp3');

  // 🔐 État réactif du verrouillage
  private isLockedSubject = new BehaviorSubject<boolean>(false);
  isLocked$ = this.isLockedSubject.asObservable();

  registerApp(app: AppComponent) {
    this.appComponent = app;
    this.isLockedSubject.next(app.isLocked); // init état
  }

  lockNow() {
    if (this.appComponent) {
      this.appComponent.lockScreen();
      this.isLockedSubject.next(true);
    }
  }

  unlock() {
    this.isLockedSubject.next(false);
  }

  updateLockState(value: boolean) {
    this.isLockedSubject.next(value);
  }

playSound(type: 'lock' | 'unlock') {
  const audio = type === 'lock' ? this.lockAudio : this.unlockAudio;
  audio.currentTime = 0;
  audio.play().catch(err => {
    console.warn(`🔇 Échec audio ${type}:`, err);
  });
}


}
