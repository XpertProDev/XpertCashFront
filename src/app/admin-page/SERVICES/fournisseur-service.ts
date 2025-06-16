import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Fournisseurs } from "../MODELS/fournisseurs-model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private apiUrl = environment.apiBaseUrl;

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

  //Get fournisseur by id
  getFournisseurById(id: number): Observable<Fournisseurs> {
    const token = localStorage.getItem('authToken');
    
    const headers = new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    });
  
    return this.http.get<Fournisseurs>(`${this.apiUrl}/get-fournisseur/${id}`, { headers });
  }

}
