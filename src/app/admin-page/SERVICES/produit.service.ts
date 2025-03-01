// produit.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from '../MODELS/produit.model';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  // Envoie une requête POST pour ajouter un nouveau produit.
  ajouterProduit(produit: Produit, file: File): Observable<Produit> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const formData: FormData = new FormData();
    // On stringify l'objet produit pour l'envoyer en tant que chaîne JSON
    formData.append('produit', JSON.stringify(produit));
    formData.append('image', file, file.name);

    return this.http.post<Produit>(`${this.apiUrl}/add/produit`, formData, { headers });
  }

  // Nouvelle méthode pour récupérer la liste des produits de l'entreprise
  getProduitsEntreprise(): Observable<Produit[]> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Produit[]>(`${this.apiUrl}/entreprise/produits`, { headers });
  }

  modifierProduit(produit: Produit, file?: File): Observable<Produit> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    const formData: FormData = new FormData();
    formData.append('produit', JSON.stringify(produit));
    if (file) {
      formData.append('photo', file, file.name);
    }
  
    return this.http.patch<Produit>(`${this.apiUrl}/update/produit/${produit.id}`, formData, { headers });
  }
  

  // Nouvelle méthode pour récupérer les détails d'un produit par son ID
  getProduitById(productId: number): Observable<Produit> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<Produit>(`${this.apiUrl}/produits/${productId}`, { headers });
  }

    // Fonction pour récupérer les totaux des produits de la boutique
    getProduitBoutique(boutiqueId: number): Observable<Map<string, number>> {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.error('Aucun token trouvé');
        return throwError('Aucun token trouvé');
      }
  
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
  
      return this.http.get<Map<string, number>>(`${this.apiUrl}/produits/${boutiqueId}/totaux-stock`, { headers });
    }
  
  
}
