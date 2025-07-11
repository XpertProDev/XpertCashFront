import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Boutique } from "../MODELS/boutique-model";
import { catchError, map, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Produit } from "../MODELS/produit.model";
import { Users } from "../MODELS/utilisateur.model";

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  updateBoutique(id: number, updates: { nomBoutique: string; adresse: string; telephone: string; email: string }): Observable<{ message?: string; error?: string }> {
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

  // getProductsByBoutiqueId(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/boutiques/${id}/produits`);
  // }

  getProductsByBoutiqueId(id: number): Observable<Produit[]> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('Aucun token trouvé');
      return throwError('Aucun token trouvé');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    
    // Ajoutez l'option { headers } à la requête GET
    return this.http.get<Produit[]>(`${this.apiUrl}/boutique/${id}/produits`, { headers });
  }

  getVendeursByBoutiqueId(id: number): Observable<Users[]> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('Aucun token trouvé');
      return throwError(() => new Error('Aucun token trouvé'));
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<Users[]>(`${this.apiUrl}/${id}/vendeurs`, { headers });
  }
  
  copierProduits(detailsCopie: {
    boutiqueSourceId: number;
    boutiqueDestinationId: number;
    toutCopier: boolean;
    produitIds?: number[];
  }): Observable<any> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      return throwError('Aucun token trouvé');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.post(
      `${this.apiUrl}/copier-produits`, 
      detailsCopie, 
      { 
        headers,
        responseType: 'json' // S'assurer de parser en JSON
      }
    ).pipe(
      catchError(error => {
        // Gérer les erreurs de parsing
        if (error.error && typeof error.error === 'string') {
          try {
            // Essayer de parser le texte en JSON
            const parsedError = JSON.parse(error.error);
            return throwError(parsedError);
          } catch (e) {
            return throwError({ message: error.error });
          }
        }
        return throwError(error);
      })
    );
  }

mettreEnCorbeille(produitId: number): Observable<{message: string, status: string}> {
  const token = localStorage.getItem('authToken');
  if (!token) {
    return throwError(() => new Error('Aucun token trouvé'));
  }

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });

  return this.http.delete<{message: string, status: string}>(
    `${this.apiUrl}/corbeille/${produitId}`, 
    { headers }
  ).pipe(
    catchError(error => {
      let errorMsg = 'Erreur lors de la mise en corbeille';
      if (error.error?.message) {
        errorMsg = error.error.message;
      } else if (error.message) {
        errorMsg = error.message;
      }
      return throwError(() => new Error(errorMsg));
    })
  );
}


}