import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EntrepriseClient } from "../MODELS/entreprise-clients-model";
import { catchError, Observable, switchMap, tap, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { UsersService } from "./users.service";


@Injectable({
  providedIn: 'root'
})
export class EntrepriseClientService {
    private apiUrl = environment.apiBaseUrl;
  

  constructor(private http: HttpClient, private usersService: UsersService) { }

 addEntrepriseClient(entrepriseClient: EntrepriseClient): Observable<EntrepriseClient> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        return throwError(() => new Error('Token manquant'));
      }

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });

      return this.http.post<EntrepriseClient>(`${this.apiUrl}/entreprise-clients`, entrepriseClient, { headers });
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


 updateEntrepriseClient(id: number, entrepriseClient: EntrepriseClient): Observable<EntrepriseClient> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        return throwError(() => new Error('Token manquant'));
      }

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });

      return this.http.put<EntrepriseClient>(
        `${this.apiUrl}/cliententrepriseupdate/${id}`, 
        entrepriseClient, 
        { headers }
      );
    }),
    tap(updated => console.log('Entreprise mise à jour:', updated)),
    catchError(error => {
      let errorMsg = 'Erreur lors de la modification';
      if (error.status === 400) {
        errorMsg = error.error || 'Données invalides';
      } else if (error.status === 404) {
        errorMsg = 'Entreprise non trouvée';
      }
      return throwError(() => new Error(errorMsg));
    })
  );
}


  getEntrepriseById(id: number): Observable<EntrepriseClient> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        return throwError(() => new Error('Token manquant'));
      }

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      return this.http.get<EntrepriseClient>(`${this.apiUrl}/entreprises/${id}`, { headers });
    }),
    catchError(error => {
      let errorMsg = 'Erreur lors de la récupération';
      if (error.status === 404) {
        errorMsg = 'Entreprise non trouvée';
      }
      return throwError(() => new Error(errorMsg));
    })
  );
}

 //Delete entreprise
  deleteEntreprise(id: number): Observable<string> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        return throwError(() => new Error('Token manquant'));
      }
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.delete<string>(`${this.apiUrl}/entrepriseClients/${id}`, {
        headers,
        responseType: 'text' as 'json' 
      });
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


}