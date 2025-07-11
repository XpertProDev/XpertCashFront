import { Injectable } from "@angular/core";
import { UniteMesure } from "../MODELS/unite.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, switchMap, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { UsersService } from "./users.service";


@Injectable({
  providedIn: 'root'
})
export class UniteMesureService {
    private apiUrl = environment.apiBaseUrl;
  
  
  private uniteMesuresSubject = new BehaviorSubject<UniteMesure[]>([]);
  public uniteMesures$ = this.uniteMesuresSubject.asObservable();
  constructor(private http: HttpClient, private usersService: UsersService) {}

getUniteMesure(): Observable<UniteMesure[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log("🔹 En-têtes envoyés :", headers);

      return this.http.get<UniteMesure[]>(`${this.apiUrl}/allUnite`, { headers }).pipe(
        tap((data) => {
          this.uniteMesuresSubject.next(data);
        })
      );
    })
  );
}



   // Ajouter une catégorie
   ajouterUnite(unity: UniteMesure): Observable<UniteMesure> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      return this.http.post<UniteMesure>(`${this.apiUrl}/createUnite`, unity, { headers }).pipe(
        tap((newUnity) => {
          const currentCategories = this.uniteMesuresSubject.value;
          this.uniteMesuresSubject.next([...currentCategories, newUnity]);
        })
      );
    })
  );
}

  
}