import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../MODELS/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl: string = "http://localhost:8080/api/auth";
  

  constructor(private http: HttpClient) {}

  // Ajouter un produit
  ajouterProduit(token: string, produit: Produit, fichier: File): Observable<any> {
    // Préparer le FormData : on y ajoute le JSON du produit et le fichier image
    const formData: FormData = new FormData();
    // La clé "produit" doit correspondre à celle attendue dans le controller côté backend
    formData.append('produit', new Blob([JSON.stringify(produit)], { type: 'application/json' }));
    formData.append('photo', fichier);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
      // Pas de Content-Type ici, le navigateur le gère automatiquement pour du multipart/form-data
    });

    return this.http.post(`${this.apiUrl}/add/produit`, formData, { headers });
  }
  
}
