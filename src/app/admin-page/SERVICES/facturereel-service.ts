import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FactureReelService {
    private apiUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) {}

  getFactureReelleById(id: number): Observable<any> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('Aucun token retrouvé en localStorage');
      return throwError(() => new Error('Aucun token trouvé'));
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl}/factures-reelles/${id}`, { headers });
  }

  getAlFactproreelOfEntreprise(entrepriseId: number): Observable<any[]> {
    const token = localStorage.getItem('authToken');

    if (!token) {
      console.error('Aucun token trouvé');
      return throwError(() => new Error('Aucun token trouvé'));
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<any[]>(`${this.apiUrl}/mes-factures-reelles`, { headers });
  }

  // Ajouter ces méthodes dans FactureReelService
  enregistrerPaiement(factureId: number, montant: number, modePaiement: string): Observable<any> {
    const token = localStorage.getItem('authToken');
    if (!token) return throwError(() => new Error('Aucun token trouvé'));

    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const body = { montant, modePaiement };
    
    return this.http.post(`${this.apiUrl}/factures/${factureId}/paiement`, body, { headers });
  }

  getHistoriquePaiements(factureId: number): Observable<any[]> {
    const token = localStorage.getItem('authToken');
    if (!token) return throwError(() => new Error('Aucun token trouvé'));

    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get<any[]>(`${this.apiUrl}/factures/${factureId}/paiements`, { headers });
  }

  getMontantRestant(factureId: number): Observable<number> {
    const token = localStorage.getItem('authToken');
    if (!token) return throwError(() => new Error('Aucun token trouvé'));

    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get<number>(`${this.apiUrl}/factures/${factureId}/montant-restant`, { headers });
  }

  // Ajouter cette méthode dans FactureReelService
  annulerFactureReelle(factureId: number): Observable<any> {
    const token = localStorage.getItem('authToken');
    if (!token) return throwError(() => new Error('Aucun token trouvé'));

    const headers = new HttpHeaders({ 
      Authorization: `Bearer ${token}` 
    });

    // Ajouter un objet vide comme body
    return this.http.put(
      `${this.apiUrl}/cancelFacture/${factureId}`, 
      {}, // Body vide
      { headers }
    );
  }
}
