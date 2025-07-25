import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { map, catchError, of } from "rxjs";
import { UsersService } from "../SERVICES/users.service";

export const roleGuard: CanActivateFn = () => {
  const router = inject(Router);
  const usersService = inject(UsersService);

  return usersService.getUserInfo().pipe(
    map(user => {
      const role = user.roleType;
      const permissions = user.permissions || [];

      const hasAccess =
        role === 'ADMIN' ||
        role === 'MANAGER' ||
        permissions.includes('GERER_UTILISATEURS');

      if (hasAccess) {
        return true;
      }

      router.navigate(['/unauthorized']);
      return false;
    }),
    catchError(() => {
      router.navigate(['/unauthorized']);
      return of(false);
    })
  );
};

