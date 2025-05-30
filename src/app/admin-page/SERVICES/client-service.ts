import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Observable, tap, throwError } from "rxjs";
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

  //All client end Entreprise:
  getListEntreprises(): Observable<any[]> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('Aucun token trouvé');
      return throwError('Aucun token trouvé');
    }
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.get<any[]>(`${this.apiUrl}/entreprises`, { headers }).pipe(
      tap(response => console.log('Réponse API clients:', response)) 
    );
  }

  getClientById(id: number): Observable<Clients> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    return this.http.get<Clients>(`${this.apiUrl}/clients/${id}`, { headers }).pipe(
      tap(response => console.log('Client récupéré:', response)),
      catchError(error => {
        console.error('Erreur lors de la récupération du client', error);
        return throwError(() => error);
      })
    );
  }

  // Ajoutez cette méthode dans votre ClientService
  updateClient(id: number, client: Clients): Observable<Clients> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    
    return this.http.put<Clients>(`${this.apiUrl}/clientupdate/${id}`, client, { headers }).pipe(
      tap(response => console.log('Client mis à jour:', response)),
      catchError(error => {
        console.error('Erreur lors de la mise à jour du client', error);
        return throwError(() => error);
      })
    );
  }

}