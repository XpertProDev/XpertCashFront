import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Observable, tap, throwError } from "rxjs";
import { Entreprise } from "../MODELS/entreprise-model";
import { Clients } from "../MODELS/clients-model";

@Injectable({
  providedIn: 'root'
})
export class FactureProFormaService {
  private apiUrl: string = "http://localhost:8080/api/auth";

  constructor(private http: HttpClient) { }

  creerFactureProforma(
    facture: any,
    remisePourcentage?: number,
    appliquerTVA?: boolean
  ): Observable<any> {
    const token = localStorage.getItem('authToken');
    if (!token) return throwError(() => new Error('Token manquant'));
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    let params = new HttpParams();
    if (remisePourcentage !== undefined && appliquerTVA) {
      params = params.set('remisePourcentage', remisePourcentage.toString());
      params = params.set('appliquerTVA', 'true');
    }
  
    return this.http.post(`${this.apiUrl}/ajouter`, facture, { headers, params }).pipe(
      tap(response => console.log('Facture créée avec succès:', response)),
      catchError(error => {
        console.error('Erreur lors de la création de la facture :', error);
        return throwError(() => error);
      })
    );
  }
  
  //Get facture proformat

    getAlFactproformaOfEntreprise(entrepriseId: number): Observable<any[]> {
      const token = localStorage.getItem('authToken');
      
      if (!token) {
        console.error('Aucun token trouvé');
        return throwError('Aucun token trouvé');
      }
    
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
    
      return this.http.get<any[]>(`${this.apiUrl}/mes-factures`, { headers });
    }

}