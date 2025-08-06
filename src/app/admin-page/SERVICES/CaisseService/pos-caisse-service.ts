import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, throwError } from "rxjs";
import { switchMap, catchError } from "rxjs/operators";
import { OuvrirCaisseRequest, CaisseResponse } from "../../MODELS/CaisseModel/caisse.model";
import { UsersService } from "../users.service";

@Injectable({
  providedIn: 'root'
})
export class PosCaisseService {
  private apiUrl = environment.apiBaseUrl;
  
  constructor(
    private http: HttpClient,
    private usersService: UsersService
  ) { }

  ouvrirCaisse(request: OuvrirCaisseRequest): Observable<CaisseResponse> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          throw new Error('Aucun token trouvé');
        }

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });

        return this.http.post<CaisseResponse>(
          `${this.apiUrl}/ouvrir`, 
          request, 
          { headers }
        );
      }),
        catchError(error => {
            console.error('Erreur détaillée', error);
            
            // Essayez d'extraire le message d'erreur spécifique
            let errorMsg = 'Erreur lors de l\'ouverture de la caisse';
            
            if (error.error && error.error.error) {
                errorMsg = error.error.error;
            } else if (error.error && error.error.message) {
                errorMsg = error.error.message;
            } else if (error.message) {
                errorMsg = error.message;
            }
            
            return throwError(() => ({ 
                message: errorMsg,
                originalError: error 
            }));
        })
    );
  }

  getCaissesByBoutique(boutiqueId: number): Observable<CaisseResponse[]> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) throw new Error('Aucun token trouvé');

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });

        return this.http.get<CaisseResponse[]>(
          `${this.apiUrl}/boutique/${boutiqueId}/caisses`, 
          { headers }
        );
      }),
      catchError(error => {
        // Gestion d'erreur détaillée
        let errorMsg = 'Erreur lors du chargement des caisses';
        if (error?.error?.error) errorMsg = error.error.error;
        else if (error?.error?.message) errorMsg = error.error.message;
        else if (error.message) errorMsg = error.message;
        
        return throwError(() => ({ 
          message: errorMsg,
          originalError: error 
        }));
      })
    );
  }
}