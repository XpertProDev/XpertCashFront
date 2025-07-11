import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../SERVICES/users.service';
import { catchError, map, of } from 'rxjs';

export const guestGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const usersService = inject(UsersService);

  return usersService.getValidAccessToken().pipe(
    map(token => {
      if (token) {
        router.navigate(['/analytics']);
        return false;
      } else {
        return true;
      }
    }),
    catchError(() => {
      // En cas d’erreur, on considère pas connecté donc accès autorisé
      return of(true);
    })
  );
};
