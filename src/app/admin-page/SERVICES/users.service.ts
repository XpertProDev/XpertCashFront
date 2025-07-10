import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Users } from '../MODELS/utilisateur.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, switchMap, tap, throwError } from 'rxjs';
import { UserNewRequest } from '../MODELS/user-new-request.model';
import { UserRequest } from '../MODELS/user-request';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

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
    private authService: AuthService,
     private router: Router,
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
  }>(`${this.apiUrl}/login`, credentials);
}




  // Déconnexion
  logoutUser(): void {
    localStorage.removeItem('accessToken');  
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('isLocked');
    localStorage.removeItem('user');
    this.isLocked = false;
    this.router.navigate(['/connexion']);

  }
  
  
  
  //Information sur User
getUserInfo(): Observable<UserRequest> {
  const token = localStorage.getItem('accessToken');

  if (!token || token === 'null' || token.trim() === '') {
    console.error('❌ Aucun token valide trouvé dans le localStorage');
    return throwError(() => new Error('Aucun token valide trouvé'));
  }

  const decodedToken = this.decodeJwt(token);
  const isTokenExpired = this.isTokenExpired(decodedToken);

  if (isTokenExpired) {
    console.warn('⏳ Token expiré, tentative de refresh...');

    return this.getNewTokenFromApi().pipe(
      switchMap((newTokenResponse: RefreshTokenResponse) => {
        const newAccessToken = newTokenResponse.accessToken;

        if (!newAccessToken || newAccessToken.trim() === '') {
          console.error('❌ Le token rafraîchi est vide ou invalide');
          return throwError(() => new Error('Token rafraîchi invalide'));
        }

        localStorage.setItem('accessToken', newAccessToken);

        const headers = new HttpHeaders({
          Authorization: `Bearer ${newAccessToken}`
        });

        return this.http.get<UserRequest>(`${this.apiUrl}/user/info`, { headers }).pipe(
          tap(user => localStorage.setItem('user', JSON.stringify(user)))
        );
      }),
      catchError(err => {
        alert('Session expirée, veuillez vous reconnecter');
        this.logoutUser();
        return throwError(() => new Error('Session expirée'));
      })
    );
  } else {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    console.log('➡️ Requête avec token existant :', headers.get('Authorization'));

    return this.http.get<UserRequest>(`${this.apiUrl}/user/info`, { headers }).pipe(
      tap(user => localStorage.setItem('user', JSON.stringify(user)))
    );
  }
}



  
    
  // Simpl dcodage JWT pour vérifier si le token est expiré
  decodeJwt(token: string): any {
    return JSON.parse(atob(token.split('.')[1]));
  }
  
  // Vérifier si le token est expiré
  isTokenExpired(decodedToken: any): boolean {
    const expirationDate = new Date(decodedToken.exp * 1000);
    return expirationDate < new Date();
  }
    
  // Rafraîchir le token avec un refresh token (si applicable)
 getNewTokenFromApi(): Observable<RefreshTokenResponse> {
  const refreshToken = this.authService.getRefreshToken();
  return this.http.post<RefreshTokenResponse>(`${this.apiUrl}/refresh-token`, { refreshToken });
}

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
    const token = localStorage.getItem('accessToken');
    
    if (!token) {
      console.error('Aucun token trouvé');
      return throwError('Aucun token trouvé');
    }
    
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    
    return this.http.put<{ message?: string; error?: string }>(`${this.apiUrl}/updatedBoutique/${id}`, updates, { headers });
  }

  updateUser(id: number, formData: FormData): Observable<any> {
    const token = localStorage.getItem('accessToken');
    
    if (!token) {
      console.error('Aucun token trouvé');
      return throwError('Aucun token trouvé');
    }
    
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    
    return this.http.patch(`${this.apiUrl}/updateUsers/${id}`, formData, { headers, responseType: 'text' });
  }


  getAllUsersOfEntreprise(entrepriseId: number): Observable<any[]> {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          console.error("Aucun token trouvé, requête annulée.");
          return throwError(() => new Error("Aucun token trouvé"));
        }
      
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`
        });
  
    return this.http.get<any[]>(`${this.apiUrl}/entreprise/${entrepriseId}/allusers`, { headers });
  }

  
getUserById(userId: number): Observable<UserNewRequest> {
const token = localStorage.getItem('accessToken') || '';
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<UserNewRequest>(`${this.apiUrl}/user/${userId}`, { headers });
}


  // Methode pour le service permission
  assignPermissionsToUser(userId: number, permissions: { [key: string]: boolean }): Observable<UserNewRequest> {
    const token = localStorage.getItem('accessToken') || '';
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.post<UserNewRequest>(`${this.apiUrl}/${userId}/permissions`, permissions, { headers });
  }


  //Ajout de la boutique
  addBoutique(boutique: any): Observable<any> {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.error("Aucun token trouvé, requête annulée.");
      return throwError(() => new Error("Aucun token trouvé"));
    }
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    console.log("Envoi de la requête POST à :", `${this.apiUrl}/ajouterBoutique`, "avec données :", boutique);
  
    return this.http.post<any>(`${this.apiUrl}/ajouterBoutique`, boutique, { headers });
  }
  
  // LL recuperation de boutique dans e/ses
  getBoutiquesByEntreprise(): Observable<any[]> {
    const token = localStorage.getItem('accessToken');
    
    if (!token) {
      console.error('Aucun token trouvé');
      return throwError('Aucun token trouvé');
    }
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.get<any[]>(`${this.apiUrl}/boutiqueEntreprise`, { headers });
  }

  // Service pour suspendre user
  suspendUser(userId: number, suspend: boolean): Observable<any> {
    const token = localStorage.getItem('accessToken');
    if (!token) {
        return throwError('Aucun token trouvé');
    }

    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });

    return this.http.put(
        `${this.apiUrl}/suspendre/${userId}`,
        null,
        { 
            headers,
            params: { suspend: suspend.toString() },
            responseType: 'text' // <-- Ajoutez ceci
        }
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
  
}
