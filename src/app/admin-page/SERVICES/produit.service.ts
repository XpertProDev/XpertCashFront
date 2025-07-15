// produit.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from '../MODELS/produit.model';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private usersService: UsersService) { }

 ajouterProduit(
  boutiqueIds: number[],
  quantites: number[],
  seuilAlert: number[],
  produit: any,
  imageFile: File | null,
  addToStock: boolean,
  datePreemption: string | null
): Observable<Produit[]> {
  const url = `${this.apiUrl}/create?addToStock=${addToStock}`;
  const formData: FormData = new FormData();

  formData.append('boutiqueIds', JSON.stringify(boutiqueIds));
  formData.append('quantites', JSON.stringify(quantites));
  formData.append('produit', JSON.stringify(produit));
  formData.append('seuilAlert', JSON.stringify(seuilAlert));

  if (imageFile) {
    formData.append('image', imageFile, imageFile.name);
  }

  // Ajouter dans formData
  if (datePreemption) {
    formData.append('datePreemption', datePreemption);
  }

  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.post<Produit[]>(url, formData, { headers });
    })
  );
}

  

modifierProduit(produit: Produit, file?: File): Observable<Produit> {
  const formData: FormData = new FormData();

  // Supprime id du payload si non nécessaire
  const { id, ...productData } = produit;
  formData.append('produit', JSON.stringify(productData));

  formData.append('addToStock', produit.enStock ? 'true' : 'false');

  if (file) {
    formData.append('image', file, file.name);
  }

  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.patch<Produit>(`${this.apiUrl}/updateProduit/${produit.id}`, formData, { headers });
    })
  );
}
 
  

  // Nouvelle méthode pour récupérer les détails d'un produit par son ID
getProduitById(productId: number): Observable<Produit> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
      return this.http.get<Produit>(`${this.apiUrl}/produits/${productId}`, { headers });
    })
  );
}


  // Méthode pour récupérer la liste des produits d'une boutique
 getProduitsEntreprise(boutiqueId: number): Observable<Produit[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      return this.http.get<Produit[]>(`${this.apiUrl}/produits/${boutiqueId}/stock`, { headers }).pipe(
        catchError(error => {
          if (error.status === 400 && error.error?.error === 'Cette boutique est désactivée, ses produits ne sont pas accessibles !') {
            return throwError(() => new Error('BOUTIQUE_DESACTIVEE'));
          }
          return throwError(() => error);
        })
      );
    })
  );
}


  // Méthode pour récupérer les totaux des produits en stock (déjà existante)
 getProduitBoutique(boutiqueId: number): Observable<Map<string, number>> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      return this.http.get<Map<string, number>>(`${this.apiUrl}/produits/${boutiqueId}/totaux-stock`, { headers });
    })
  );
}

  
  // Nouvelle méthode pour récupérer tous les produits de l'entreprise
 getProduitsByEntrepriseId(entrepriseId: number): Observable<Produit[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      return this.http.get<Produit[]>(`${this.apiUrl}/produits/entreprise/${entrepriseId}`, { headers });
    })
  );
}

  

 getProduitsParEntreprise(entrepriseId: number): Observable<any[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      return this.http.get<any[]>(`${this.apiUrl}/produits/entreprise/${entrepriseId}`, { headers });
    })
  );
}


  // Méthode pour recuperer les fournisseur de lutilisateur connecter
getFournisseurs(): Observable<any[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get<any[]>(`${this.apiUrl}/get-fournisseurs`, { headers });
    })
  );
}

// Ajoutez un paramètre pour les IDs de boutiques
importProduitsFromExcel(formData: FormData, boutiqueIds: number[]): Observable<any> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}` 
      });
      
      // Ajoutez les IDs de boutique dans le FormData
      formData.append('boutiqueIds', JSON.stringify(boutiqueIds));
      
      return this.http.post(`${this.apiUrl}/import-produits-excel`, formData, { headers });
    })
  );
}


  
  
  
}
