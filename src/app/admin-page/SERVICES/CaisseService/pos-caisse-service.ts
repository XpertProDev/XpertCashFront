import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, throwError } from "rxjs";
import { switchMap, catchError, map } from "rxjs/operators";
import { OuvrirCaisseRequest, CaisseResponse, FermerCaisseRequest } from "../../MODELS/CaisseModel/caisse.model";
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

fermerCaisse(boutiqueId: number): Observable<any> {
  console.log('Tentative de récupération du token...'); // Log avant de récupérer le token

  return this.usersService.getValidAccessToken().pipe( // On récupère le token valide de l'utilisateur
    switchMap(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        throw new Error('Aucun token trouvé');
      }

      console.log('Token récupéré :', token); // Log du token récupéré

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}` // Envoi du token d'authentification
      });

      // Préparation du corps de la requête avec boutiqueId
      const body = {
        boutiqueId: boutiqueId
      };

      console.log('Envoi de la requête POST pour fermer la caisse...'); // Log avant de faire la requête

      return this.http.post<any>(`${this.apiUrl}/fermer`, body, { headers }).pipe(
        catchError(error => {
          console.error('Erreur lors de la requête pour fermer la caisse:', error);
          return throwError(() => error);
        })
      );
    }),
    catchError(error => {
      console.error('Erreur détaillée dans le service:', error);

      // Gestion des erreurs
      let errorMsg = 'Erreur lors de la fermeture de la caisse';
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



  getDerniereCaisseVendeur(boutiqueId: number): Observable<CaisseResponse | string> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) throw new Error('Aucun token trouvé');

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });

        // Utilisez 'text' comme responseType pour permettre les réponses texte
        return this.http.get(
          `${this.apiUrl}/caisse/derniere/${boutiqueId}`, 
          { 
            headers, 
            responseType: 'text' as 'json' // Permet de gérer les réponses texte
          }
        );
      }),
      map(response => {
        // Tente de parser la réponse comme JSON
        try {
          return JSON.parse(response as string) as CaisseResponse;
        } catch (e) {
          // Si le parsing échoue, retourne la réponse texte
          return response as string;
        }
      }),
      catchError(error => {
        let errorMsg = 'Erreur lors du chargement de la dernière caisse';
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

  getHistoriqueCaissesByVendeur(vendeurId: number): Observable<CaisseResponse[]> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) throw new Error('Aucun token trouvé');

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });

        return this.http.get<CaisseResponse[]>(
          `${this.apiUrl}/vendeur/${vendeurId}`, 
          { headers }
        );
      }),
      catchError(error => {
        let errorMsg = 'Erreur lors du chargement de l\'historique des caisses';
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