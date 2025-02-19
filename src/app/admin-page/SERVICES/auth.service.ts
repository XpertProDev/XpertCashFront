// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'authToken';

  saveToken(token: string): void {
    console.log("Token sauvegardé dans localStorage :", token);
    localStorage.setItem(this.TOKEN_KEY, token);
  }  

  // Récupérer le token depuis le localStorage
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Supprimer le token lors de la déconnexion
  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // Méthode d'authentification simple (à améliorer par la suite)
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
