import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Fournisseurs } from "../MODELS/fournisseurs-model";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(
    private http: HttpClient
) { }

addFournisseur(fournisseur: Fournisseurs): Observable<any> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    
    return this.http.post(`${this.apiUrl}/save-fournisseurs`, fournisseur, { headers });
  }

}
