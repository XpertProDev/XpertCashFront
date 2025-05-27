import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Observable, switchMap, tap, throwError } from "rxjs";
import { Entreprise } from "../MODELS/entreprise-model";

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  private apiUrl: string = "http://localhost:8080/api/auth";

  private entrepriseSubject = new BehaviorSubject<Entreprise[]>([]);
  public entreprise$ = this.entrepriseSubject.asObservable(); 
  constructor(private http: HttpClient) { }

  // Ajouter une entreprise
  addEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  
    return this.http.post<Entreprise>(`${this.apiUrl}/entreprises`, entreprise, { headers }).pipe(
      catchError(error => {
        let errorMsg = 'Erreur inconnue';
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Erreur: ${error.error.message}`;
        } else if (error.status === 400) {
          errorMsg = error.error || 'Données invalides';
        }
        return throwError(() => new Error(errorMsg));
      }),
      tap((newEntreprise) => {
        const currentEntreprise = this.entrepriseSubject.value;
        this.entrepriseSubject.next([...currentEntreprise, newEntreprise]);
      })
    );
  }

  // List de tout les entreprises
  getListEntreprise(token: string): Observable<Entreprise[]> {
    if (!token) {
      console.error('Token vide ou non défini ! Vérifiez que l\'utilisateur est bien connecté.')
      return new Observable<Entreprise[]>();
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log("En-têtes envoyér : ", headers);

    return this.http.get<Entreprise[]>(`${this.apiUrl}/entreprises`, { headers }).pipe(
      tap((data) => {
        this.entrepriseSubject.next(data);
      })
    )
  }


  // Recuperer information d'une entreprise de la user connecter
  getEntrepriseById(id: number): Observable<Entreprise> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<Entreprise>(`${this.apiUrl}/entreprises/${id}`, { headers }).pipe(
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

  updateEntreprise(id: number, formData: FormData): Observable<any> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.patch(`${this.apiUrl}/updateEntreprise/${id}`, formData, { headers }).pipe(
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

  // Get entreprise d'un user
  getEntrepriseInfo(): Observable<Entreprise> {
    const token = localStorage.getItem('authToken');

    if (!token) {
      console.error('Aucun token trouvé');
      return throwError(() => new Error('Aucun token trouvé'));
    }

    const decodedToken = this.decodeJwt(token);
    const isTokenExpired = this.isTokenExpired(decodedToken);

    if (isTokenExpired) {
      return this.getNewTokenFromApi().pipe(
        switchMap((newTokenResponse) => {
          localStorage.setItem('authToken', newTokenResponse.token);

          const headers = new HttpHeaders({
            Authorization: `Bearer ${newTokenResponse.token}`
          });

          return this.http.get<Entreprise>(`${this.apiUrl}/myEntreprise`, { headers }).pipe(
            tap(entreprise => {
              localStorage.setItem('entreprise', JSON.stringify(entreprise));
            })
          );
        })
      );
    } else {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      return this.http.get<Entreprise>(`${this.apiUrl}/myEntreprise`, { headers }).pipe(
        tap(entreprise => {
          localStorage.setItem('entreprise', JSON.stringify(entreprise));
        })
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
  getNewTokenFromApi(): Observable<{ token: string }> {
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http.post<{ token: string }>(`${this.apiUrl}/refresh-token`, { refreshToken });
  }
}