// guest.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './admin-page/SERVICES/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      // Redirige vers le tableau de bord si déjà connecté
      this.router.navigate(['/analytics']);
      return false;
    }
    return true;
  }
}