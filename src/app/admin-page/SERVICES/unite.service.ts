import { Injectable } from "@angular/core";
import { UniteMesure } from "../MODELS/unite.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class UniteMesureService {
    private apiUrl = environment.apiBaseUrl;
  
  
  private uniteMesuresSubject = new BehaviorSubject<UniteMesure[]>([]);
  public uniteMesures$ = this.uniteMesuresSubject.asObservable();
  constructor(private http: HttpClient) {}

  getUniteMesure(token: string): Observable<UniteMesure[]> {
    if (!token) {
      console.error('⚠️ Token vide ou non défini ! Vérifiez que l\'utilisateur est bien connecté.');
      return new Observable<UniteMesure[]>();  // Retourner un observable vide
    }
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log("🔹 En-têtes envoyés :", headers);
  
    return this.http.get<UniteMesure[]>(`${this.apiUrl}/allUnite`, { headers }).pipe(
      tap((data) => {
        this.uniteMesuresSubject.next(data);  // Émettre les nouvelles unite
      })
    );
  }

   // Ajouter une catégorie
    ajouterUnite(unity: UniteMesure): Observable<UniteMesure> {
      const token = localStorage.getItem('authToken') || '';
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
  
      return this.http.post<UniteMesure>(`${this.apiUrl}/createUnite`, unity, { headers }).pipe(
        tap((newUnity) => {
          // Dès qu'une nouvelle catégorie est ajoutée, on met à jour le BehaviorSubject
          const currentCategories = this.uniteMesuresSubject.value;
          this.uniteMesuresSubject.next([...currentCategories, newUnity]);  // Ajouter la nouvelle catégorie à la liste
        })
      );
    }

  
}