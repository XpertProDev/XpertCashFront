import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap, throwError } from "rxjs";
import { Entreprise } from "../MODELS/entreprise-model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl: string = "http://localhost:8080/api/auth";

  constructor(private http: HttpClient) { }

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
  
    return this.http.get<any[]>(`${this.apiUrl}/clients`, { headers });
  }

  addClient() {

  }
  

}