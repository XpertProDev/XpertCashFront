import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const guestGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('authToken');

  if (token) {
    // Si déjà connecté, redirige vers le tableau de bord par exemple
    router.navigate(['/analytics']);
    return false;
  }

  return true;
};
