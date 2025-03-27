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

  ajouterProduit(
    boutiqueIds: number[],
    produit: any, // Modifier le type si nécessaire
    imageFile: File | null,
    addToStock: boolean,
  ): Observable<Produit> {
    const url = `${this.apiUrl}/create?addToStock=${addToStock}`;
    const formData: FormData = new FormData();
  
    formData.append('boutiqueIds', JSON.stringify(boutiqueIds));
    formData.append('produit', JSON.stringify(produit)); 
  
    if (imageFile) {
      formData.append('image', imageFile, imageFile.name);
    }
  
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.post<Produit>(url, formData, { headers });
  }

  // Envoie une requête POST pour ajouter un nouveau produit.
  // ajouterProduit(produit: Produit, file: File): Observable<Produit> {
  //   const token = localStorage.getItem('authToken') || '';
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });

  //   const formData: FormData = new FormData();
  //   // On stringify l'objet produit pour l'envoyer en tant que chaîne JSON
  //   formData.append('produit', JSON.stringify(produit));
  //   formData.append('image', file, file.name);

  //   return this.http.post<Produit>(`${this.apiUrl}/add/produit`, formData, { headers });
  // }

  // Nouvelle méthode pour récupérer la liste des produits de l'entreprise
  // getProduitsEntreprise(boutiqueId: number): Observable<Produit[]> {
  //   const token = localStorage.getItem('authToken') || '';
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });

  //   return this.http.get<Produit[]>(`${this.apiUrl}/produits/${boutiqueId}/stock`, { headers });
  // }

  modifierProduit(produit: Produit, file?: File): Observable<Produit> {
    const token = localStorage.getItem('authToken') || '';
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
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<Produit>(`${this.apiUrl}/produits/${productId}`, { headers });
  }

  // Méthode pour récupérer la liste des produits d'une boutique
  getProduitsEntreprise(boutiqueId: number): Observable<Produit[]> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('Aucun token trouvé');
      return throwError('Aucun token trouvé');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    // Remplacez l'endpoint par celui défini dans votre API backend pour récupérer les produits
    return this.http.get<Produit[]>(`${this.apiUrl}/produits/${boutiqueId}/stock`, { headers });
  }

  // Méthode pour récupérer les totaux des produits en stock (déjà existante)
  getProduitBoutique(boutiqueId: number): Observable<Map<string, number>> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('Aucun token trouvé');
      return throwError('Aucun token trouvé');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<Map<string, number>>(`${this.apiUrl}/produits/${boutiqueId}/totaux-stock`, { headers });
  }
  
  // getBoutiqueById(boutiqueId: number): Observable<any> {
  //   const token = localStorage.getItem('authToken');
  //   if (!token) {
  //     console.error('Aucun token trouvé');
  //     return throwError('Aucun token trouvé');
  //   }
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${token}`
  //   });
  //   return this.http.get<Map<string, number>>(`${this.apiUrl}/boutique/${boutiqueId}/produits`, { headers });
  // }
  
  
}
