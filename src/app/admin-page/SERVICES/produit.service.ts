// produit.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from '../MODELS/produit.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  ajouterProduit(
    boutiqueIds: number[],
    quantites: number[], // <-- à ajouter
    seuilAlert: number[],
    produit: any,
    imageFile: File | null,
    addToStock: boolean
  ): Observable<Produit[]> { // <-- tableau car ton backend retourne une liste
    const url = `${this.apiUrl}/create?addToStock=${addToStock}`;
    const formData: FormData = new FormData();
  
    formData.append('boutiqueIds', JSON.stringify(boutiqueIds));
    formData.append('quantites', JSON.stringify(quantites)); // <-- important
    formData.append('produit', JSON.stringify(produit));
    formData.append('seuilAlert', JSON.stringify(seuilAlert));
  
    if (imageFile) {
      formData.append('image', imageFile, imageFile.name);
    }
  
    const token = localStorage.getItem('accessToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.post<Produit[]>(url, formData, { headers });
  }
  

  modifierProduit(produit: Produit, file?: File): Observable<Produit> {
    const token = localStorage.getItem('accessToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    const formData: FormData = new FormData();
  
    // Optionnel : supprimer le champ "id" si non requis
    const { id, ...productData } = produit;
    formData.append('produit', JSON.stringify(productData));
  
    // Ajout du paramètre addToStock attendu par le backend
    formData.append('addToStock', produit.enStock ? 'true' : 'false');
  
    // Envoyer le fichier sous le nom "image" (car le backend attend "image")
    if (file) {
      formData.append('image', file, file.name);
    }
  
    return this.http.patch<Produit>(`${this.apiUrl}/updateProduit/${produit.id}`, formData, { headers })
  }  
  

  // Nouvelle méthode pour récupérer les détails d'un produit par son ID
  getProduitById(productId: number): Observable<Produit> {
    const token = localStorage.getItem('accessToken') || '';
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    
    return this.http.get<Produit>(`${this.apiUrl}/produits/${productId}`, { headers });
  }

  // Méthode pour récupérer la liste des produits d'une boutique
  getProduitsEntreprise(boutiqueId: number): Observable<Produit[]> {
    const token = localStorage.getItem('accessToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    return this.http.get<Produit[]>(`${this.apiUrl}/produits/${boutiqueId}/stock`, { headers }).pipe(
      catchError(error => {
        if (error.status === 400 && error.error?.error === 'Cette boutique est désactivée, ses produits ne sont pas accessibles !') {
          return throwError(() => new Error('BOUTIQUE_DESACTIVEE'));
        }
        return throwError(() => error);
      })
    );
  }

  // Méthode pour récupérer les totaux des produits en stock (déjà existante)
  getProduitBoutique(boutiqueId: number): Observable<Map<string, number>> {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.error('Aucun token trouvé');
      return throwError('Aucun token trouvé');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<Map<string, number>>(`${this.apiUrl}/produits/${boutiqueId}/totaux-stock`, { headers });
  }
  
  // Nouvelle méthode pour récupérer tous les produits de l'entreprise
  getProduitsByEntrepriseId(entrepriseId: number): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiUrl}/produits/entreprise/${entrepriseId}`);
  }
  

  getProduitsParEntreprise(entrepriseId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/produits/entreprise/${entrepriseId}`);
  }

  // Méthode pour recuperer les fournisseur de lutilisateur connecter
  getFournisseurs(): Observable<any[]> {
    const token = localStorage.getItem('accessToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.get<any[]>(`${this.apiUrl}/get-fournisseurs`, { headers });
  }
  
  
  
}
