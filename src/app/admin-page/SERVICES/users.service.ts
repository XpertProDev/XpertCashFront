import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Users } from '../MODELS/utilisateur.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { UserNewRequest } from '../MODELS/user-new-request.model';
import { UserRequest } from '../MODELS/user-request';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ModalService } from './modalService';

interface RefreshTokenResponse {
  accessToken: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private apiUrl = environment.apiBaseUrl;
  public isLocked: boolean = false;

  constructor(
    private http: HttpClient,
    // private authService: AuthService,
     private router: Router,
     private modalService: ModalService
   ) {}

  

  // Méthode pour récupérer le token
  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  //Inscription
  registerUser(user: Users): Observable<{ message?: string; error?: string }> {
    return this.http.post<{ message?: string; error?: string }>(`${this.apiUrl}/register`, user);
  }

  // Connexion
connexionUser(credentials: { email: string; password: string }): Observable<{
  accessToken?: string;
  refreshToken?: string;
  message?: string;
  error?: string;
}> {
  return this.http.post<{
    accessToken?: string;
    refreshToken?: string;
    message?: string;
    error?: string;
  }>(`${this.apiUrl}/login`, credentials, { withCredentials: true });
}




  // Déconnexion
  logoutUser(): void {
    localStorage.removeItem('accessToken');  
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('isLocked');
    localStorage.removeItem('user');
    localStorage.removeItem('photo');
    window.dispatchEvent(new Event('storage-photo-update'));
    this.isLocked = false;
    window.dispatchEvent(new Event('user-logged-out'));
    this.router.navigate(['/connexion']);
  }
  
  
  
  //Information sur User
getUserInfo(): Observable<UserRequest> {
  return this.getValidAccessToken().pipe(
    switchMap((token) => {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get<UserRequest>(`${this.apiUrl}/user/info`, { headers }).pipe(
        tap(user => localStorage.setItem('user', JSON.stringify(user)))
      );
    })
  );
}
getValidAccessToken(): Observable<string> {
  const token = localStorage.getItem('accessToken');

  if (!token || token === 'null' || token.trim() === '') {
    console.error('❌ Aucun token valide trouvé dans le localStorage');
    return throwError(() => new Error('Aucun token valide trouvé'));
  }

  const decodedToken = this.decodeJwt(token);
  const isTokenExpired = this.isTokenExpired(decodedToken);

  if (!isTokenExpired) {
    return of(token);
  }

  console.warn('⏳ Token expiré, tentative de refresh...');

  return this.getNewTokenFromApi().pipe(
    map((response: RefreshTokenResponse) => {
      const newToken = response.accessToken;
      if (!newToken || newToken.trim() === '') {
        throw new Error('Token rafraîchi invalide');
      }
      localStorage.setItem('accessToken', newToken);
      return newToken;
    }),
    catchError(err => {
      if (!this.sessionExpiredHandled) {
        this.sessionExpiredHandled = false;
        this.modalService.triggerSessionExpiredModal();
      }
      return throwError(() => new Error('Session expirée'));
    })
  );
}




  
    
  // Simpl dcodage JWT pour vérifier si le token est expiré
  decodeJwt(token: string): any {
    return JSON.parse(atob(token.split('.')[1]));
  }
  
// Vérifier si le token est expiré (avec marge de sécurité de 30 secondes)
isTokenExpired(decodedToken: any): boolean {
  const expirationDate = new Date(decodedToken.exp * 1000);
  return expirationDate.getTime() < new Date().getTime() + 30 * 1000;
}
    
  // Rafraîchir le token avec un refresh token (si applicable)
getNewTokenFromApi(): Observable<RefreshTokenResponse> {
  const refreshToken = localStorage.getItem('refreshToken');

  if (!refreshToken || refreshToken.trim() === '') {
    console.error('❌ Aucun refresh token trouvé');
    return throwError(() => new Error('Refresh token manquant'));
  }

  return this.http.post<RefreshTokenResponse>(
    `${this.apiUrl}/refresh-token`,
    { refreshToken } // Le backend doit l'accepter dans le body
  );
}


private sessionExpiredHandled = false;





  getUserBoutiqueId(): number | null {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log('Utilisateur récupéré de localStorage:', user); // Vérification du contenu de 'user'
  
    // Si l'utilisateur et la liste des boutiques existent
    if (user && user.boutiques && user.boutiques.length > 0) {
      // Si l'utilisateur a plusieurs boutiques, choisir celle par défaut (par exemple la première)
      const boutiqueId = user.boutiques[0].id; // Id de la première boutique
      console.log('ID de la boutique récupéré:', boutiqueId);
      return boutiqueId;
    } else {
      console.error('Aucune boutique trouvée pour cet utilisateur');
      return null;
    }
  }
    
    // Méthode pour extraire l'ID de l'utilisateur connecté depuis le token
  extractUserIdFromToken(token: string): number | null {
    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Décodage du payload du token
      return decodedToken.sub ? parseInt(decodedToken.sub, 10) : null; // Assurez-vous que 'sub' contient l'ID
    } catch (error) {
      console.error('Erreur lors de l\'extraction de l\'ID depuis le token :', error);
      return null;
    }
  }

  // addUserToEntreprise(userData: any, token: string): Observable<string> {
  //   const headers = { Authorization: `Bearer ${token}` };
  //   return this.http.post<string>(`${this.apiUrl}/addNewUsers`, userData, { headers });
  // }
  
  addUserToEntreprise(userData: any, token: string): Observable<UserNewRequest> {
  const headers = { Authorization: `Bearer ${token}` };
  return this.http.post<UserNewRequest>(`${this.apiUrl}/addNewUsers`, userData, { headers });
}

  // // Connexion
  //   ccc(credentials: { email: string; password: string }): Observable<{ message?: string; token?: string; error?: string }> {
  //     return this.http.post<{ message?: string; token?: string; error?: string }>(`${this.apiUrl}/login`, credentials);
  // }
  

updateBoutique(id: number, updates: { nomBoutique: string; adresse: string }): Observable<{ message?: string; error?: string }> {
  return this.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return throwError(() => new Error('Aucun token trouvé'));
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      return this.http.put<{ message?: string; error?: string }>(`${this.apiUrl}/updatedBoutique/${id}`, updates, { headers });
    }),
    catchError(error => {
      console.error('Erreur lors de la mise à jour de la boutique:', error);
      return throwError(() => error);
    })
  );
}


updateUser(id: number, formData: FormData): Observable<any> {
  return this.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return throwError(() => new Error('Aucun token trouvé'));
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      return this.http.patch(`${this.apiUrl}/updateUsers/${id}`, formData, { headers, responseType: 'text' });
    }),
    catchError(error => {
      console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
      return throwError(() => error);
    })
  );
}

//Delet user
deleteUserFromEntreprise(userId: number): Observable<any> {
  return this.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        console.error('Token non trouvé');
        return throwError(() => new Error('Token JWT manquant'));
      }

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      return this.http.delete(`${this.apiUrl}/delete/${userId}`, { headers });
    }),
    catchError(error => {
      console.error('Erreur lors de la suppression de l\'utilisateur:', error);
      return throwError(() => error);
    })
  );
}




  getAllUsersOfEntreprise(entrepriseId: number): Observable<any[]> {
  return this.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        console.error("Aucun token trouvé, requête annulée.");
        return throwError(() => new Error("Aucun token trouvé"));
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      return this.http.get<any[]>(`${this.apiUrl}/entreprise/${entrepriseId}/allusers`, { headers });
    }),
    catchError(error => {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
      return throwError(() => error);
    })
  );
}


  
getUserById(userId: number): Observable<UserNewRequest> {
  return this.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
      return this.http.get<UserNewRequest>(`${this.apiUrl}/user/${userId}`, { headers });
    }),
    catchError(error => {
      console.error(`Erreur lors de la récupération de l'utilisateur ${userId}:`, error);
      return throwError(() => error);
    })
  );
}




  // Methode pour le service permission
assignPermissionsToUser(userId: number, permissions: { [key: string]: boolean }): Observable<UserNewRequest> {
  return this.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
      return this.http.post<UserNewRequest>(`${this.apiUrl}/${userId}/permissions`, permissions, { headers });
    })
  );
}



  //Ajout de la boutique
addBoutique(boutique: any): Observable<any> {
  return this.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      console.log("Envoi de la requête POST à :", `${this.apiUrl}/ajouterBoutique`, "avec données :", boutique);

      return this.http.post<any>(`${this.apiUrl}/ajouterBoutique`, boutique, { headers });
    })
  );
}

  
  // LL recuperation de boutique dans e/ses
  getBoutiquesByEntreprise(): Observable<any[]> {
    return this.getValidAccessToken().pipe(
      switchMap((token: string) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`
        });

        return this.http.get<any[]>(`${this.apiUrl}/boutiqueEntreprise`, { headers });
      })
    );
  }


  // Service pour suspendre user
suspendUser(userId: number, suspend: boolean): Observable<any> {
  return this.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      return this.http.put(
        `${this.apiUrl}/suspendre/${userId}`,
        null,
        {
          headers,
          params: { suspend: suspend.toString() },
          responseType: 'text' // si l'API retourne du texte brut
        }
      );
    })
  );
}


    // Ajouter cette méthode dans UsersService
  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email });
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password`, { token, newPassword });
  }

  validateOtp(email: string, code: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/validate-otp`, { email, code });
  }
  

  // Verification de role
  isAdminOrManager(): Observable<boolean> {
  return this.getUserInfo().pipe(
    map(user => ['ADMIN', 'MANAGER'].includes(user.roleType)),
    catchError(() => of(false))
  );
}

}
