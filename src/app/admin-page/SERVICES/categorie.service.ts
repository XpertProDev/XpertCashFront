import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, switchMap, tap, throwError } from 'rxjs';
import { Categorie } from '../MODELS/categorie.model';
import { environment } from 'src/environments/environment';
import { UsersService } from './users.service';
import { ProduitPaginatedResponseDTO } from '../MODELS/ProduitPaginatedResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiUrl = environment.apiBaseUrl;
  private categoriesSubject = new BehaviorSubject<Categorie[]>([]);
  public categories$ = this.categoriesSubject.asObservable();
  constructor(private http: HttpClient, private usersService: UsersService) {}

  ajouterCategorie(category: Categorie): Observable<Categorie> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          console.error('⚠️ Token vide ou non défini ! Vérifiez que l\'utilisateur est bien connecté.');
          return throwError(() => new Error('Aucun token valide trouvé'));
        }

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });

        return this.http.post<Categorie>(`${this.apiUrl}/createCategory`, category, { headers }).pipe(
          tap((newCategory) => {
            // Met à jour le BehaviorSubject dès qu'une nouvelle catégorie est ajoutée
            const currentCategories = this.categoriesSubject.value;
            this.categoriesSubject.next([...currentCategories, newCategory]);
          })
        );
      }),
      catchError(error => {
        console.error('Erreur lors de l\'ajout de la catégorie:', error);
        return throwError(() => error);
      })
    );
  }

 getProduitsByCategorie(
  categorieId: number,
  page: number = 0,
  size: number = 20
): Observable<ProduitPaginatedResponseDTO> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        console.error('⚠️ Token vide ou non défini ! Vérifiez que l\'utilisateur est bien connecté.');
        return new Observable<ProduitPaginatedResponseDTO>(); 
      }

      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const params = { page: page.toString(), size: size.toString() };

      return this.http.get<ProduitPaginatedResponseDTO>(
        `${this.apiUrl}/categories/${categorieId}/produits`,
        { headers, params }
      );
    }),
    catchError(error => {
      console.error('Erreur lors de la récupération des produits paginés:', error);
      return throwError(() => error);
    })
  );
}


  deleteCategorie(id: number): Observable<string> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          console.error('⚠️ Token JWT manquant pour suppression catégorie.');
          return throwError(() => new Error("Token manquant"));
        }

        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        console.log("🔹 Token envoyé pour DELETE catégorie :", headers);

        return this.http.delete(`${this.apiUrl}/deleteCategory/${id}`, {
          headers,
          responseType: 'text'
        });
      }),
      catchError(error => {
        console.error("❌ Erreur API DELETE :", error);
        return throwError(() => error);
      })
    );
  }

  getCategories(): Observable<Categorie[]> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          console.error('⚠️ Token vide ou non défini ! Vérifiez que l\'utilisateur est bien connecté.');
          return throwError(() => new Error('Aucun token valide trouvé'));
        }

        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        return this.http.get<Categorie[]>(`${this.apiUrl}/allCategory`, { headers }).pipe(
          tap((categories) => {
            // Met à jour le BehaviorSubject avec les catégories récupérées
            this.categoriesSubject.next(categories);
          })
        );
      }),
      catchError(error => {
        console.error('Erreur lors de la récupération des catégories:', error);
        return throwError(() => error);
      })
    );
  }

}