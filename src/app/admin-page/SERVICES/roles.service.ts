import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Roles } from "../MODELS/roles.model";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class RolesService {
 private apiUrl = environment.apiBaseUrl;

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