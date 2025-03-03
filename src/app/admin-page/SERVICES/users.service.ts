import { Injectable } from '@angular/core';
import { Users } from '../MODELS/utilisateur.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap, throwError } from 'rxjs';

interface UserRequest {
  nomComplet: string;
  nomEntreprise: string;
  email: string;
  roleType: string;
  phone: string;
  pays: string;
  adresseEntreprise: string;
  logoEntreprise : string,
  boutiques : any
}



@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private apiUrl: string = "http://localhost:8080/api/auth";
  

  constructor(private http: HttpClient) {}

  //Inscription
    registerUser(user: Users): Observable<{ message?: string; error?: string }> {
      return this.http.post<{ message?: string; error?: string }>(`${this.apiUrl}/register`, user);
    }

    // Connexion
    connexionUser(credentials: { email: string; password: string }): Observable<{ message?: string; token?: string; error?: string }> {
      return this.http.post<{ message?: string; token?: string; error?: string }>(`${this.apiUrl}/login`, credentials);
    }

    // Déconnexion
    logoutUser(): void {
      localStorage.removeItem('authToken');  
      localStorage.removeItem('refreshToken');
    
      history.pushState(null, '', '/connexion');
      window.location.href = "/connexion";
    }
    


    //Information sur User
   
    //Information sur User
    getUserInfo(): Observable<UserRequest> {
      const token = localStorage.getItem('authToken');
      
      if (!token) {
        console.error('Aucun token trouvé');
        return throwError('Aucun token trouvé');
      }
      const decodedToken = this.decodeJwt(token);
      const isTokenExpired = this.isTokenExpired(decodedToken);
      
      if (isTokenExpired) {
        // rafraîchie Token
        return this.getNewTokenFromApi().pipe(
          switchMap((newTokenResponse) => {
            // update le token dans localStorage
            localStorage.setItem('authToken', newTokenResponse.token);

            const headers = new HttpHeaders({
              Authorization: `Bearer ${newTokenResponse.token}`
            });
            
            return this.http.get<UserRequest>(`${this.apiUrl}/user/info`, { headers });
          })
        );
      } else {
        // Si le token n'est pas expiré, on fait la requête normalement
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`
        });
        return this.http.get<UserRequest>(`${this.apiUrl}/user/info`, { headers });
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
    getNewTokenFromApi(): Observable<{ token: string }> {
      const refreshToken = localStorage.getItem('refreshToken');
      return this.http.post<{ token: string }>(`${this.apiUrl}/refresh-token`, { refreshToken });
    }
    
    
    

  // // Connexion
  //   ccc(credentials: { email: string; password: string }): Observable<{ message?: string; token?: string; error?: string }> {
  //     return this.http.post<{ message?: string; token?: string; error?: string }>(`${this.apiUrl}/login`, credentials);
  // }
  
}
