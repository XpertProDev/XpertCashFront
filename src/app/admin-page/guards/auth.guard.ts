import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { UsersService } from '../SERVICES/users.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const usersService = inject(UsersService);

  return usersService.getValidAccessToken().pipe(
    map(token => {
      if (token) {
        return true;
      } else {
        router.navigate(['/connexion']);
        return false;
      }
    }),
    catchError(() => {
      router.navigate(['/connexion']);
      return of(false);
    })
  );
};
