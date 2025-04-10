import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Facture } from "../MODELS/facture.model";
import { catchError, Observable, of, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  getFactures(): Observable<Facture[]> {
    return this.http.get<Facture[]>(`${this.apiUrl}/factures`);
  }

  getFacturesByBoutique(boutiqueId: number): Observable<Facture[]> {
    return this.http.get<Facture[]>(`${this.apiUrl}/factures/${boutiqueId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return of([]); // Retourne un tableau vide si aucune facture
        }
        return throwError(error);
      })
    );
  }

}