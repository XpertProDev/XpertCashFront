import { Injectable } from '@angular/core';
import { Users } from '../MODELS/utilisateur.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap, throwError } from 'rxjs';
import { UserNewRequest } from '../MODELS/user-new-request.model';

interface UserRequest {
  //id: UserRequest;
  id: number;
  nomComplet: string;
  nomEntreprise: string;
  email: string;
  roleType: string;
  phone: string;
  pays: string;
  adresseEntreprise: string;
  logoEntreprise : string,
  boutiques: {
    id: number;
    nomBoutique: string;
    telephone: string;
    email: string;
    adresse: string; // Ajout du champ adresse
  }[];
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private apiUrl: string = "http://localhost:8080/api/auth";
  

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer le token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

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

  addUserToEntreprise(userData: any, token: string): Observable<string> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.post<string>(`${this.apiUrl}/addNewUsers`, userData, { headers });
  }
    

  // // Connexion
  //   ccc(credentials: { email: string; password: string }): Observable<{ message?: string; token?: string; error?: string }> {
  //     return this.http.post<{ message?: string; token?: string; error?: string }>(`${this.apiUrl}/login`, credentials);
  // }
  

  updateBoutique(id: number, updates: { nomBoutique: string; adresse: string }): Observable<{ message?: string; error?: string }> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('Aucun token trouvé');
      return throwError('Aucun token trouvé');
    }
    
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    
    return this.http.put<{ message?: string; error?: string }>(`${this.apiUrl}/updatedBoutique/${id}`, updates, { headers });
  }

  updateUser(id: number, updates: { nomComplet: string; phone: string; password: string }): Observable<{ message?: string; error?: string }> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('Aucun token trouvé');
      return throwError('Aucun token trouvé');
    }
    
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    
    return this.http.patch<{ message?: string; error?: string }>(`${this.apiUrl}/updateUsers/${id}`, updates, { headers });
  }


  getAllUsersOfEntreprise(entrepriseId: number): Observable<any[]> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('Aucun token trouvé');
      return throwError('Aucun token trouvé');
    }
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.get<any[]>(`${this.apiUrl}/entreprise/${entrepriseId}/allusers`, { headers });
  }

  
  getUserById(userId: number): Observable<UserNewRequest> {
    return this.http.get<UserNewRequest>(`${this.apiUrl}/user/${userId}`);
  }

  // Methode pour le service permission
  assignPermissionsToUser(userId: number, permissions: { [key: string]: boolean }): Observable<UserNewRequest> {
    const url = `${this.apiUrl}/${userId}/permissions`;
    return this.http.post<UserNewRequest>(url, permissions);
  }

  //Ajout de la boutique
  addBoutique(boutique: any): Observable<any> {
    const token = localStorage.getItem('authToken');
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
    const token = localStorage.getItem('authToken');
    
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
    const token = localStorage.getItem('authToken');
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
  
}
