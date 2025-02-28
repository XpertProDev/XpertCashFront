import { Injectable } from "@angular/core";
import { UniteMesure } from "../MODELS/unite.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, tap } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UniteMesureService {
  private apiUrl: string = "http://localhost:8080/api/auth";
  
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

  
}