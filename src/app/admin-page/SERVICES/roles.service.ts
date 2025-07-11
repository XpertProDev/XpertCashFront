import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, switchMap, throwError } from "rxjs";
import { Roles } from "../MODELS/roles.model";
import { environment } from "src/environments/environment";
import { UsersService } from "./users.service";


@Injectable({
  providedIn: 'root'
})
export class RolesService {
 private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private usersService: UsersService) { }
  
   // Méthode pour récupérer les totaux des produits en stock (déjà existante)
   getAllRoles(): Observable<Roles[]> {
      return this.usersService.getValidAccessToken().pipe(
        switchMap((token: string) => {
          const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
          console.log("🔹 En-têtes envoyés :", headers);
          return this.http.get<Roles[]>(`${this.apiUrl}/getAllRoles`, { headers });
        })
      );
  }

}