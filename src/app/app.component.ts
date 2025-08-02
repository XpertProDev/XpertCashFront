import { ChangeDetectorRef, Component, HostListener, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { SpinnerComponent } from './theme/shared/components/spinner/spinner.component';
import { MatDialog } from '@angular/material/dialog';
import { UnlockDialogComponent } from './unlock-dialog/unlock-dialog.component';
import { CommonModule } from '@angular/common';
import { UsersService } from './admin-page/SERVICES/users.service';
import { SessionExpiredModalComponent } from './theme/shared/session-expired-modal/session-expired-modal.component';
import { ModalService } from './admin-page/SERVICES/modalService';
import { LockService } from './admin-page/SERVICES/lock.service';
import { tap } from 'rxjs';
import { UserRequest } from './admin-page/MODELS/user-request';

@Component({
  selector: 'app-root',
  imports: [RouterModule, SpinnerComponent, CommonModule, UnlockDialogComponent, SessionExpiredModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  
})

export class AppComponent implements OnInit {
  private router = inject(Router);
  private inactivityTimer: any;
  isLocked = false;
  isDialogOpen = false;

constructor(
  private dialog: MatDialog,
  private cdRef: ChangeDetectorRef,
  private usersService: UsersService,
  private modalService: ModalService,
  private lockService: LockService
) {
  window.addEventListener('user-logged-out', () => {
    this.isLocked = false;
    clearTimeout(this.inactivityTimer);
    this.isDialogOpen = false;
    this.dialog.closeAll();
  });
}

  @HostListener('window:mousemove')
  @HostListener('window:keydown')
  @HostListener('window:click')
  resetTimer() {
    if (this.isLocked) return;
    if (!this.isLoggedIn) return; 

    clearTimeout(this.inactivityTimer);
    this.inactivityTimer = setTimeout(() => this.lockScreen(), 2.75 * 60 * 60 * 1000);
  }

  lockScreen() {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
  
    
    if (!user || !user.personalCode) {
      console.warn("⚠️ Aucun utilisateur connecté, pas de verrouillage.");
      return;
    }
  
    if (user.actif === false) {
      console.log("L'utilisateur est désactivé, aucun déverrouillage requis.");
      return;
    }
  
    this.isLocked = true;
    this.lockService.updateLockState(true);
    this.lockService.playSound('lock');
    localStorage.setItem('isLocked', 'true');
    this.isDialogOpen = true;
  
    const dialogRef = this.dialog.open(UnlockDialogComponent, {
      disableClose: true,
      data: { 
        message: 'Veuillez entrer votre Code PIN pour déverrouiller',
        userPersonalCode: user.personalCode,
      }
    });
  
    dialogRef.afterOpened().subscribe(() => {
      setTimeout(() => {
        const input = document.querySelector('.popup input') as HTMLInputElement;
        if (input) input.focus();
      }, 100);
    });
  
    dialogRef.afterClosed().subscribe(codeEntered => {
      if (codeEntered === user.personalCode) {
        console.log("Code correct, déverrouillage...");
        this.isLocked = false;
        this.lockService.updateLockState(false);
        this.lockService.playSound('lock');
        this.isDialogOpen = false;
        localStorage.removeItem('isLocked');
      
        this.dialog.closeAll();
        this.resetTimer();
    
        console.log("isLocked:", this.isLocked);
      } else {
        console.warn("⛔ Code incorrect, veuillez réessayer.");
        
        // Vérifie si isLocked est encore vrai avant de rouvrir le pop-up
        setTimeout(() => {
          if (this.isLocked) {
            this.lockScreen();
          }
        }, 500);
      }
    });
    
  }
  

checkLockStatus() {
   if (!this.isLoggedIn) {
    localStorage.removeItem('isLocked');
    return;
  }

    const wasLocked = localStorage.getItem('isLocked') === 'true';
    const user = JSON.parse(localStorage.getItem('user') || 'null');

    if (!user || !user.personalCode) {
        console.warn("⚠️ Aucun utilisateur trouvée, pas de verrouillage.");
        localStorage.removeItem('isLocked');
        return;
    }

    if (wasLocked) {
        this.lockScreen();
    }
}

get isLoggedIn(): boolean {
  return !!localStorage.getItem('user');
}



ngOnInit() {
  this.lockService.registerApp(this);
  this.checkLockStatus();
    this.checkAccountStatus();


  this.router.events.subscribe((evt) => {
    if (evt instanceof NavigationEnd) {
      window.scrollTo(0, 0);
    }
  });

  this.modalService.sessionExpiredModal$.subscribe(() => {
    console.log('✅ Session expirée détectée, affichage de la modale');
    this.showSessionModal = true;
  });
}

showSessionModal = false;

  handleSessionConfirm() {
    this.usersService.logoutUser();
    this.showSessionModal = false;
  }

  showBlockedPopup: boolean = false;
  isAdmin: boolean = false;
  userEmail: string = '';


   onLogout(): void {
    this.usersService.logoutUser();
  }

  private checkAccountStatus(): void {
    this.usersService.getUserInfo()
      .pipe(tap(user => console.log('[checkAccountStatus] user:', user)))
      .subscribe((user: UserRequest) => {
        this.userEmail = user.email;
        this.isAdmin = user.roleType?.toUpperCase() === 'ADMIN';
        const now = Date.now();
  
        const createdAt = this.isAdmin
          ? user.createdAt
          : user.adminCreatedAt;
  
        const parsedCreatedAt = createdAt ? Date.parse(createdAt) : null;
        const diffInHours = parsedCreatedAt ? (now - parsedCreatedAt) / (1000 * 60 * 60) : 0;
  
        const adminActivated = this.isAdmin
          ? user.adminActivated
          : user.adminActivated;
  
        console.log(`[${this.isAdmin ? 'Admin' : 'User'}] adminActivated=${adminActivated}, hours since admin creation=${diffInHours}`);
  
        this.showBlockedPopup = adminActivated === false && diffInHours > 24;
  
        console.log('=> showBlockedPopup =', this.showBlockedPopup);
      });
  }

}
