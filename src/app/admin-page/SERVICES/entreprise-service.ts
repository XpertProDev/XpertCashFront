import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Observable, switchMap, tap, throwError } from "rxjs";
import { Entreprise } from "../MODELS/entreprise-model";
import { EntrepriseClient } from "../MODELS/entreprise-clients-model";
import { environment } from "src/environments/environment";
import { UsersService } from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
    private apiUrl = environment.apiBaseUrl;
  

  private entrepriseSubject = new BehaviorSubject<Entreprise[]>([]);
  public entreprise$ = this.entrepriseSubject.asObservable(); 
  constructor(private http: HttpClient, private usersService: UsersService) { }

  // Dans client.service.ts
// Dans entreprise.service.ts
 getListEntreprises(): Observable<EntrepriseClient[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.get<EntrepriseClient[]>(`${this.apiUrl}/entreprises`, { headers });
    }),
    catchError(error => {
      let errorMsg = 'Erreur inconnue';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Erreur: ${error.error.message}`;
      } else if (error.status === 404) {
        errorMsg = 'Aucune entreprise trouvée';
      }
      return throwError(() => new Error(errorMsg));
    })
  );
}


  // Ajouter une entreprise
 addEntreprise(entreprise: Entreprise): Observable<Entreprise> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });

      return this.http.post<Entreprise>(`${this.apiUrl}/entreprise-clients`, entreprise, { headers });
    }),
    tap((newEntreprise) => {
      const currentEntreprise = this.entrepriseSubject.value;
      this.entrepriseSubject.next([...currentEntreprise, newEntreprise]);
    }),
    catchError(error => {
      let errorMsg = 'Erreur inconnue';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Erreur: ${error.error.message}`;
      } else if (error.status === 400) {
        errorMsg = error.error || 'Données invalides';
      }
      return throwError(() => new Error(errorMsg));
    })
  );
}


  // List de tout les entreprises
 getListEntreprise(): Observable<Entreprise[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        console.error('Token vide ou non défini ! Vérifiez que l\'utilisateur est bien connecté.');
        return throwError(() => new Error('Token manquant'));
      }
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log("En-têtes envoyés : ", headers);

      return this.http.get<Entreprise[]>(`${this.apiUrl}/entreprises`, { headers });
    }),
    tap(data => {
      this.entrepriseSubject.next(data);
    }),
    catchError(error => {
      console.error('Erreur lors de la récupération des entreprises:', error);
      return throwError(() => error);
    })
  );
}



  // Recuperer information d'une entreprise de la user connecter
 getEntrepriseById(id: number): Observable<Entreprise> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        console.error('Token manquant');
        return throwError(() => new Error('Token manquant'));
      }
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.get<Entreprise>(`${this.apiUrl}/entreprises/${id}`, { headers });
    }),
    catchError(error => {
      let errorMsg = 'Erreur inconnue';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Erreur: ${error.error.message}`;
      } else if (error.status === 404) {
        errorMsg = 'Entreprise non trouvée';
      }
      return throwError(() => new Error(errorMsg));
    })
  );
}


  updateEntreprise(id: number, formData: FormData): Observable<string> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        return throwError(() => new Error('Token manquant'));
      }

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      return this.http.patch(`${this.apiUrl}/updateEntreprise/${id}`, formData, {
        headers,
        responseType: 'text' // réponse en texte brut
      });
    }),
    catchError(error => {
      let errorMsg = 'Erreur inconnue';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Erreur: ${error.error.message}`;
      } else if (error.status === 400) {
        errorMsg = error.error || 'Données invalides';
      }
      return throwError(() => new Error(errorMsg));
    })
  );
}


  // updateEntreprise(id: number, formData: FormData): Observable<any> {
  //   const token = localStorage.getItem('accessToken') || '';
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });

  //   return this.http.patch(`${this.apiUrl}/updateEntreprise/${id}`, formData, { headers }).pipe(
  //     catchError(error => {
  //       let errorMsg = 'Erreur inconnue';
  //       if (error.error instanceof ErrorEvent) {
  //         errorMsg = `Erreur: ${error.error.message}`;
  //       } else if (error.status === 400) {
  //         errorMsg = error.error || 'Données invalides';
  //       }
  //       return throwError(() => new Error(errorMsg));
  //     })
  //   );
  // }

  // Get entreprise d'un user
  getEntrepriseInfo(): Observable<Entreprise> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        return throwError(() => new Error('Aucun token trouvé'));
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      return this.http.get<Entreprise>(`${this.apiUrl}/myEntreprise`, { headers }).pipe(
        tap(entreprise => {
          localStorage.setItem('entreprise', JSON.stringify(entreprise));
        })
      );
    }),
    catchError(error => {
      console.error('Erreur récupération info entreprise:', error);
      return throwError(() => error);
    })
  );
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

 
}