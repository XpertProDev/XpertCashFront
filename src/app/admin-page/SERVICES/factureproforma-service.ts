import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { FactureProForma, UpdateFactureProFormaDTO } from "../MODELS/FactureProForma.model";

@Injectable({
  providedIn: 'root'
})
export class FactureProFormaService {
  private apiUrl: string = "http://localhost:8080/api/auth";

  constructor(private http: HttpClient) { }

  creerFactureProforma(
    facture: any,
    remisePourcentage?: number,
    appliquerTVA?: boolean,
    appliquerAdjustments?: boolean
  ): Observable<any> {
    const token = localStorage.getItem('authToken');
    if (!token) return throwError(() => new Error('Token manquant'));
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    let params = new HttpParams();
  
    // Nouvelle logique corrigée
    if (appliquerAdjustments) {
      if (remisePourcentage !== undefined) {
        params = params.set('remisePourcentage', remisePourcentage.toString());
      }
      if (appliquerTVA !== undefined) {
        params = params.set('appliquerTVA', appliquerTVA.toString());
      }
    }

    return this.http.post(`${this.apiUrl}/ajouter`, facture, { headers, params }).pipe(
      tap(response => console.log('Facture créée avec succès:', response)),
      catchError(error => {
        console.error('Erreur détaillée:', error);
        console.log('Corps de la réponse:', error.error);
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

  getFactureProformaById(id: number): Observable<FactureProForma> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<FactureProForma>(`${this.apiUrl}/factureProforma/${id}`, { headers });
  }

  // Dans FactureProFormaService
  updateFactureProforma(
    factureId: number,
    remisePourcentage: number | undefined,
    appliquerTVA: boolean | undefined,
    modifications: Partial<FactureProForma>,
    idsApprobateurs?: number[]
  ): Observable<FactureProForma> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      return throwError(() => new Error('Token manquant'));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    let params = new HttpParams();
    
    if (remisePourcentage !== undefined) {
      params = params.set('remisePourcentage', remisePourcentage.toString());
    }
    
    if (appliquerTVA !== undefined) {
      params = params.set('appliquerTVA', appliquerTVA.toString());
    }

    if (idsApprobateurs && idsApprobateurs.length > 0) {
      idsApprobateurs.forEach(id => {
        params = params.append('idsApprobateurs', id.toString());
      });
    }


    return this.http.put<FactureProForma>(
      `${this.apiUrl}/updatefacture/${factureId}`,
      modifications,
      { headers, params }
    ).pipe(
      tap(response => console.log('Facture mise à jour:', response)),
      catchError(error => {
        console.error('Erreur mise à jour:', error);
        return throwError(() => error);
      })
    );
  }

  //Get History Facture

getHistoriqueFacture(factureId: number): Observable<any> {
  const token = localStorage.getItem('authToken');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  return this.http.get<any>(`${this.apiUrl}/factures/${factureId}/historique`, { headers });
}



}