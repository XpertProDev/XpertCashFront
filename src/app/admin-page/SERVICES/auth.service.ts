// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly ACCESS_TOKEN_KEY = 'accessToken';
  private readonly REFRESH_TOKEN_KEY = 'refreshToken';

  // Sauvegarder les deux tokens
saveTokens(accessToken: string, refreshToken: string): void {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
}
saveAccessToken(token: string): void {
  localStorage.setItem('accessToken', token);
}


  // Récupérer l'accessToken
getAccessToken(): string | null {
  const token = localStorage.getItem('accessToken');
  console.log('🪪 Token lu depuis localStorage :', token);
  return token;
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
  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated();
  }
}

