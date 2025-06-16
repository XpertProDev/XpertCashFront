import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Facture } from "../MODELS/facture.model";
import { catchError, map, Observable, of, throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FactureService {
 private apiUrl = environment.apiBaseUrl;
  private boutiques: any[] = []; // Ajouter la propriété boutiques

  constructor(private http: HttpClient) { }

  getFactures(): Observable<Facture[]> {
    return this.http.get<Facture[]>(`${this.apiUrl}/factures`);
  }

  getFacturesByBoutique(boutiqueId: number): Observable<Facture[]> {
    return this.http.get<Facture[]>(`${this.apiUrl}/factures/${boutiqueId}`).pipe(
      map((factures: Facture[]) => factures || []), // Garantit un tableau même si null
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) return of([]);
        return throwError(error);
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