import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../MODELS/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiUrl: string = "http://localhost:8080/api/auth";
  

  constructor(private http: HttpClient) {}

  getCategories(token: string): Observable<Categorie[]> {
    if (!token) {
      console.error('⚠️ Token vide ou non défini ! Vérifiez que l\'utilisateur est bien connecté.');
      return new Observable<Categorie[]>();  // Retourner un observable vide
    }
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log("🔹 En-têtes envoyés :", headers);
  
    return this.http.get<Categorie[]>(`${this.apiUrl}/allCategory`, { headers });
  }

  // 🌟 Ajouter une catégorie
  ajouterCategorie(category: Categorie): Observable<Categorie> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<Categorie>(`${this.apiUrl}/add/categoryProduit`, category, { headers });
  }
  

}