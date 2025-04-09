import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap, throwError } from "rxjs";
import { Entreprise } from "../MODELS/entreprise-model";
import { Clients } from "../MODELS/clients-model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl: string = "http://localhost:8080/api/auth";

  constructor(private http: HttpClient) { }


  addClient(client: Clients): Observable<{ message: string; clientId: string; createdAt: string }> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post<{ message: string; clientId: string; createdAt: string }>(
      `${this.apiUrl}/clients`,
      client,
      { headers }
    );
  }

  // LL recuperation des clients
  getListClients(): Observable<any[]> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('Aucun token trouvé');
      return throwError('Aucun token trouvé');
    }
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.get<any[]>(`${this.apiUrl}/clients`, { headers }).pipe(
      tap(response => console.log('Réponse API clients:', response)) // Ajoutez ce log
    );
  }


  // getListClients(): Observable<Clients[]> {
  //   const token = localStorage.getItem('authToken') || '';
  //   const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
  //   return this.http.get<Clients[]>(`${this.apiUrl}/clients`, { headers });
  // }
  

}