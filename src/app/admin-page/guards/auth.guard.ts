import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

// Vérifier si l'utilisateur est authentifié via le token
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Vérification si le token d'authentification est présent dans localStorage
  const token = localStorage.getItem('authToken');

  if (!token) {
    // Si aucun token, redirige vers la page de connexion
    router.navigate(['/connexion']);
    return false;
  }

  // Si le token est présent, l'utilisateur peut accéder à la route
  return true;
};
