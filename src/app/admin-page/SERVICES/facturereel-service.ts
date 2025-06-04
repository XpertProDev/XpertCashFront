import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FactureReelService {
  private apiUrl: string = "http://localhost:8080/api/auth";

  constructor(private http: HttpClient) {}

 getFactureReelleById(id: number): Observable<any> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('Aucun token retrouvé en localStorage');
      return throwError(() => new Error('Aucun token trouvé'));
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl}/factures-reelles/${id}`, { headers });
  }

  getAlFactproreelOfEntreprise(entrepriseId: number): Observable<any[]> {
    const token = localStorage.getItem('authToken');

    if (!token) {
      console.error('Aucun token trouvé');
      return throwError(() => new Error('Aucun token trouvé'));
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<any[]>(`${this.apiUrl}/mes-factures-reelles`, { headers });
  }
}
