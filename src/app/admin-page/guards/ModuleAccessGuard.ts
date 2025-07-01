import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ModuleService } from '../SERVICES/Module-Service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ModuleAccessGuard implements CanActivate {

  constructor(
    private moduleService: ModuleService,
    private router: Router,
     private snackBar: MatSnackBar
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean | UrlTree> {

    const codeModule = route.data['codeModule'] as string;

    if (!codeModule) {
      console.error('Aucun codeModule spécifié dans la route');
      return of(this.router.parseUrl('/'));
    }

   return this.moduleService.getModulesEntreprise().pipe(
    map(modules => {
    const module = modules.find(m => m.code === codeModule);

    if (module && module.actif) {
      return true;
    } else {
      this.snackBar.open('Accès refusé : module inactif ou essai terminé.', 'Fermer', {
         duration: 5000
        });
      return this.router.parseUrl('/');
    }
  }),
  catchError(err => {
    console.error('Erreur de vérification du module', err);
    this.snackBar.open('Erreur lors de la vérification du module.', 'Fermer', { duration: 3000 });
    return of(this.router.parseUrl('/'));
  })
);

  }
}
