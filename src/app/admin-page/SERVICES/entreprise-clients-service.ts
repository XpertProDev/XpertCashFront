import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EntrepriseClient } from "../MODELS/entreprise-clients-model";
import { catchError, Observable, tap, throwError } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class EntrepriseClientService {
  private apiUrl: string = "http://localhost:8080/api/auth";

  constructor(private http: HttpClient) { }

  addEntrepriseClient(entrepriseClient: EntrepriseClient): Observable<EntrepriseClient> {
      const token = localStorage.getItem('authToken') || '';
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
    
      return this.http.post<EntrepriseClient>(`${this.apiUrl}/entreprises`, entrepriseClient, { headers }).pipe(
        catchError(error => {
          let errorMsg = 'Erreur inconnue';
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Erreur: ${error.error.message}`;
          } else if (error.status === 400) {
            errorMsg = error.error || 'Données invalides';
          }
          return throwError(() => new Error(errorMsg));
        }),
      );
  }

  updateEntrepriseClient(id: number, entrepriseClient: EntrepriseClient): Observable<EntrepriseClient> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  
    return this.http.put<EntrepriseClient>(
      `${this.apiUrl}/cliententrepriseupdate/${id}`, 
      entrepriseClient, 
      { headers }
    ).pipe(
      // Ajouter un opérateur pour rafraîchir les données
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

}