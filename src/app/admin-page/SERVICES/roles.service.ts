import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Roles } from "../MODELS/roles.model";


@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }
  
   // Méthode pour récupérer les totaux des produits en stock (déjà existante)
    getAllRoles(token: string): Observable<Roles[]> {
        if (!token) {
          console.error('⚠️ Token vide ou non défini ! Vérifiez que l\'utilisateur est bien connecté.');
          return new Observable<Roles[]>();  // Retourner un observable vide
        }
      
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        console.log("🔹 En-têtes envoyés :", headers);
      
        return this.http.get<Roles[]>(`${this.apiUrl}/getAllRoles`, { headers }).pipe();
    }
}