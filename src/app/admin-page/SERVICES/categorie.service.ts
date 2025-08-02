import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, switchMap, tap, throwError } from 'rxjs';
import { Categorie } from '../MODELS/categorie.model';
import { environment } from 'src/environments/environment';
import { UsersService } from './users.service';

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

  getCategories(): Observable<Categorie[]> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          console.error('⚠️ Token vide ou non défini ! Vérifiez que l\'utilisateur est bien connecté.');
          return new Observable<Categorie[]>(); // Observable vide
        }

        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        console.log("🔹 En-têtes envoyés :", headers);

        return this.http.get<Categorie[]>(`${this.apiUrl}/allCategory`, { headers }).pipe(
          tap((data) => {
            this.categoriesSubject.next(data);  // Émettre les nouvelles catégories
          })
        );
      }),
      catchError(error => {
        console.error('Erreur lors de la récupération des catégories:', error);
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


  // SERVICES/categorie.service.ts
// getCategories(): Observable<Categorie[]> {
//   return this.usersService.getValidAccessToken().pipe(
//     switchMap(token => {
//       const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
//       return this.http.get<Categorie[]>(`${this.apiUrl}/allCategory`, { headers }).pipe(
//         tap((data) => {
//           this.categoriesSubject.next(data);
//         })
//       );
//     }),
//     catchError(error => {
//       console.error('Erreur lors de la récupération des catégories:', error);
//       return throwError(() => error);
//     })
//   );
// }


  // Ajouter une catégorie


  

}