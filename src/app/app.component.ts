import { ChangeDetectorRef, Component, HostListener, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { SpinnerComponent } from './theme/shared/components/spinner/spinner.component';
import { MatDialog } from '@angular/material/dialog';
import { UnlockDialogComponent } from './unlock-dialog/unlock-dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterModule, SpinnerComponent, CommonModule, UnlockDialogComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  private router = inject(Router);
  private inactivityTimer: any;
  isLocked = false;
  isDialogOpen = false;

  constructor(private dialog: MatDialog, private cdRef: ChangeDetectorRef) {
    this.checkLockStatus();
    this.resetTimer();
  }

  @HostListener('window:mousemove')
  @HostListener('window:keydown')
  @HostListener('window:click')
  resetTimer() {
    if (this.isLocked) return;

    clearTimeout(this.inactivityTimer);
    this.inactivityTimer = setTimeout(() => this.lockScreen(), 30 * 1000);
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
        this.isDialogOpen = false;
        localStorage.removeItem('isLocked');
      
        this.dialog.closeAll();
    
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
    const wasLocked = localStorage.getItem('isLocked') === 'true';
    const user = JSON.parse(localStorage.getItem('user') || 'null');

    if (!user || !user.personalCode) {
        console.warn("⚠️ Aucun utilisateur trouvé, pas de verrouillage.");
        localStorage.removeItem('isLocked');
        return;
    }

    if (wasLocked) {
        this.lockScreen();
    }
}


  ngOnInit() {
    this.checkLockStatus();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}




