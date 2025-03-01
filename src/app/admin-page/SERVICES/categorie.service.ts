import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Categorie } from '../MODELS/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiUrl: string = "http://localhost:8080/api/auth";
  
  private categoriesSubject = new BehaviorSubject<Categorie[]>([]);
  public categories$ = this.categoriesSubject.asObservable();
  constructor(private http: HttpClient) {}

  getCategories(token: string): Observable<Categorie[]> {
    if (!token) {
      console.error('⚠️ Token vide ou non défini ! Vérifiez que l\'utilisateur est bien connecté.');
      return new Observable<Categorie[]>();  // Retourner un observable vide
    }
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log("🔹 En-têtes envoyés :", headers);
  
    return this.http.get<Categorie[]>(`${this.apiUrl}/allCategory`, { headers }).pipe(
      tap((data) => {
        this.categoriesSubject.next(data);  // Émettre les nouvelles catégories
      })
    );
  }

  // Ajouter une catégorie
  ajouterCategorie(category: Categorie): Observable<Categorie> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<Categorie>(`${this.apiUrl}/createCategory`, category, { headers }).pipe(
      tap((newCategory) => {
        // Dès qu'une nouvelle catégorie est ajoutée, on met à jour le BehaviorSubject
        const currentCategories = this.categoriesSubject.value;
        this.categoriesSubject.next([...currentCategories, newCategory]);  // Ajouter la nouvelle catégorie à la liste
      })
    );
  }
  

}