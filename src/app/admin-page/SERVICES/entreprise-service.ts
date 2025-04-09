import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Observable, tap, throwError } from "rxjs";
import { Entreprise } from "../MODELS/entreprise-model";

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  private apiUrl: string = "http://localhost:8080/api/auth";

  private entrepriseSubject = new BehaviorSubject<Entreprise[]>([]);
  public entreprise$ = this.entrepriseSubject.asObservable(); 
  constructor(private http: HttpClient) { }

  // Ajouter une entreprise
  addEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  
    return this.http.post<Entreprise>(`${this.apiUrl}/entreprises`, entreprise, { headers }).pipe(
      catchError(error => {
        let errorMsg = 'Erreur inconnue';
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Erreur: ${error.error.message}`;
        } else if (error.status === 400) {
          errorMsg = error.error || 'Données invalides';
        }
        return throwError(() => new Error(errorMsg));
      }),
      tap((newEntreprise) => {
        const currentEntreprise = this.entrepriseSubject.value;
        this.entrepriseSubject.next([...currentEntreprise, newEntreprise]);
      })
    );
  }

  // List de tout les entreprises
  getListEntreprise(token: string): Observable<Entreprise[]> {
    if (!token) {
      console.error('Token vide ou non défini ! Vérifiez que l\'utilisateur est bien connecté.')
      return new Observable<Entreprise[]>();
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log("En-têtes envoyér : ", headers);

    return this.http.get<Entreprise[]>(`${this.apiUrl}/entreprises`, { headers }).pipe(
      tap((data) => {
        this.entrepriseSubject.next(data);
      })
    )
  }
}