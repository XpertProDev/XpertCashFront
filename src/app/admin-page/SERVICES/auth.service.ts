// auth.service.ts
import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly ACCESS_TOKEN_KEY = 'accessToken';
  private readonly REFRESH_TOKEN_KEY = 'refreshToken';

  constructor(private usersService: UsersService) {}

  // Sauvegarder les deux tokens
saveTokens(accessToken: string, refreshToken: string): void {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
}
saveAccessToken(token: string): void {
  localStorage.setItem('accessToken', token);
}


  // Récupérer l'accessToken
getAccessToken(): void {
  this.usersService.getValidAccessToken().subscribe({
    next: (token) => {
      console.log('🪪 Token lu depuis localStorage (async) :', token);
      // utilise le token ici
    },
    error: (err) => {
      console.error('Erreur lors de la récupération du token :', err);
    }
  });
}



  // Récupérer le refreshToken
getRefreshToken(): string | null {
  return localStorage.getItem('refreshToken');
}

  // Supprimer les tokens à la déconnexion
removeTokens(): void {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
}

  // Méthode d'authentification simple
 isAuthenticated(): Observable<boolean> {
  return this.usersService.getValidAccessToken().pipe(
    map(token => !!token),
    catchError(() => of(false))
  );
}


 isLoggedIn(): Observable<boolean> {
  return this.isAuthenticated();
}


  // ici
  
}

