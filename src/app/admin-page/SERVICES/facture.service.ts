import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Facture } from "../MODELS/facture.model";
import { catchError, map, Observable, of, switchMap, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { UsersService } from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class FactureService {
 private apiUrl = environment.apiBaseUrl;
  private boutiques: any[] = []; // Ajouter la propriété boutiques

  constructor(private http: HttpClient, private usersService: UsersService) { }

 getFactures(): Observable<Facture[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get<Facture[]>(`${this.apiUrl}/factures`, { headers });
    }),
    catchError(error => {
      console.error('Erreur lors de la récupération des factures:', error);
      return throwError(() => error);
    })
  );
}


  getFacturesByBoutique(boutiqueId: number): Observable<Facture[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get<Facture[]>(`${this.apiUrl}/factures/${boutiqueId}`, { headers }).pipe(
        map((factures: Facture[]) => factures || []),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) return of([]);
          return throwError(() => error);
        })
      );
    }),
    catchError(error => {
      console.error('Erreur lors de la récupération des factures par boutique:', error);
      return throwError(() => error);
    })
  );
}


  private getBoutiqueNameById(id: number): string {
    const boutique = this.boutiques.find((b: any) => b.id === id); // Ajouter le type
    return boutique?.nomBoutique || 'Boutique inconnue';
  }

  // Ajouter une méthode pour initialiser les boutiques
  setBoutiques(boutiques: any[]): void {
    this.boutiques = boutiques;
  }

}