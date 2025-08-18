import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, switchMap } from "rxjs";
import { environment } from "src/environments/environment";
import { RemboursementRequest, VenteResponse } from "../../MODELS/VenteModel/vente-model";
import { UsersService } from "../users.service";

@Injectable({
  providedIn: 'root'
})
export class PosCommandeService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private usersService: UsersService) {}

  getVentesByVendeur(vendeurId: number): Observable<VenteResponse[]> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get<VenteResponse[]>(`${this.apiUrl}/vente/vendeur/${vendeurId}`, { headers });
      })
    );
  }

  rembourserVente(request: RemboursementRequest): Observable<VenteResponse> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.post<VenteResponse>(
          `${this.apiUrl}/vente/rembourser`, 
          request, 
          { headers }
        );
      })
    );
  }
}