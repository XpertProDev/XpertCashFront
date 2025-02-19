// produit.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from '../MODELS/produit.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  /**
   * Envoie une requête POST pour ajouter un nouveau produit.
   * @param produit L'objet produit à ajouter.
   * @param file Le fichier image associé au produit.
   * @returns Un Observable du produit créé.
   */
  ajouterProduit(produit: Produit, file: File): Observable<Produit> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
      // Note : Le Content-Type n'est pas défini ici car Angular le gère automatiquement pour FormData
    });

    const formData: FormData = new FormData();
    // On stringify l'objet produit pour l'envoyer en tant que chaîne JSON
    formData.append('produit', JSON.stringify(produit));
    formData.append('photo', file, file.name);

    return this.http.post<Produit>(`${this.apiUrl}/add/produit`, formData, { headers });
  }
}
