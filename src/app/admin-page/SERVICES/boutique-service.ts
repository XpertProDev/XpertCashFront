import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Boutique } from "../MODELS/boutique-model";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

    updateBoutique(id: number, updates: { nomBoutique: string; adresse: string; }): Observable<{ message?: string; error?: string }> {
      const token = localStorage.getItem('authToken');
      
      if (!token) {
        console.error('Aucun token trouvé');
        return throwError('Aucun token trouvé');
      }
      
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      
      return this.http.put<{ message?: string; error?: string }>(`${this.apiUrl}/updatedBoutique/${id}`, updates, { headers });
    }

    // LL recuperation de boutique dans e/ses
    getBoutiquesByEntreprise(): Observable<any[]> {
      const token = localStorage.getItem('authToken');
      
      if (!token) {
        console.error('Aucun token trouvé');
        return throwError('Aucun token trouvé');
      }
    
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
    
      return this.http.get<any[]>(`${this.apiUrl}/boutiqueEntreprise`, { headers });
    }

    // Nouvelle méthode pour récupérer les détails d'un produit par son ID
    getBoutiqueById(id: number): Observable<Boutique> {
      const token = localStorage.getItem('authToken') || '';
      const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
      return this.http.get<Boutique>(`${this.apiUrl}/boutique/${id}`, { headers });
    }

    activerBoutique(id: number): Observable<any> {
        const token = localStorage.getItem('authToken') || '';
        const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
        return this.http.put(`${this.apiUrl}/activerBoutique/${id}`, {}, { headers });
    }
    
    desactiverBoutique(id: number): Observable<any> {
        const token = localStorage.getItem('authToken') || '';
        const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
        return this.http.put(`${this.apiUrl}/desactiverBoutique/${id}`, {}, { headers });
    }
}