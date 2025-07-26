import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Boutique } from "../MODELS/boutique-model";
import { catchError, map, Observable, switchMap, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Produit } from "../MODELS/produit.model";
import { Users } from "../MODELS/utilisateur.model";
import { UsersService } from "./users.service";
import { AssignerVendeurRequest } from "../MODELS/AssignerVendeurRequest";

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private usersService: UsersService) { }

  updateBoutique(
  id: number, 
  updates: { nomBoutique: string; adresse: string; telephone: string; email: string }
): Observable<{ message?: string; error?: string }> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return throwError(() => new Error('Aucun token trouvé'));
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      return this.http.put<{ message?: string; error?: string }>(
        `${this.apiUrl}/updatedBoutique/${id}`, 
        updates, 
        { headers }
      );
    }),
    catchError(error => {
      console.error('Erreur lors de la mise à jour de la boutique:', error);
      return throwError(() => error);
    })
  );
}


  // LL recuperation de boutique dans e/ses
 getBoutiquesByEntreprise(): Observable<any[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return throwError(() => new Error('Aucun token trouvé'));
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      return this.http.get<any[]>(`${this.apiUrl}/boutiqueEntreprise`, { headers });
    }),
    catchError(error => {
      console.error('Erreur lors de la récupération des boutiques:', error);
      return throwError(() => error);
    })
  );
  }

  // Nouvelle méthode pour récupérer les détails d'un produit par son ID
 getBoutiqueById(id: number): Observable<Boutique> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return throwError(() => new Error('Aucun token trouvé'));
      }
      const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
      return this.http.get<Boutique>(`${this.apiUrl}/boutique/${id}`, { headers });
    }),
    catchError(error => {
      console.error('Erreur lors de la récupération de la boutique:', error);
      return throwError(() => error);
    })
  );
  }

  activerBoutique(id: number): Observable<any> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          console.error('Aucun token trouvé');
          return throwError(() => new Error('Aucun token trouvé'));
        }
        const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
        return this.http.put(`${this.apiUrl}/activerBoutique/${id}`, {}, { headers });
      }),
      catchError(error => {
        console.error('Erreur lors de l\'activation de la boutique:', error);
        return throwError(() => error);
      })
    );
  }
    
  desactiverBoutique(id: number): Observable<any> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          console.error('Aucun token trouvé');
          return throwError(() => new Error('Aucun token trouvé'));
        }
        const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
        return this.http.put(`${this.apiUrl}/desactiverBoutique/${id}`, {}, { headers });
      }),
      catchError(error => {
        console.error('Erreur lors de la désactivation de la boutique:', error);
        return throwError(() => error);
      })
    );
  }

  //Delet
  deleteBoutique(id: number): Observable<any> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          console.error('Aucun token trouvé');
          return throwError(() => new Error('Aucun token trouvé'));
        }
        const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
        return this.http.delete(`${this.apiUrl}/boutique/${id}`, { headers });
      }),
      catchError(error => {
        console.error('Erreur lors de la suppression de la boutique:', error);
        return throwError(() => error);
      })
    );
  }

  // getProductsByBoutiqueId(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/boutiques/${id}/produits`);
  // }

  getProductsByBoutiqueId(id: number): Observable<Produit[]> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          console.error('Aucun token trouvé');
          return throwError(() => new Error('Aucun token trouvé'));
        }
        const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
        return this.http.get<Produit[]>(`${this.apiUrl}/boutique/${id}/produits`, { headers });
      }),
      catchError(error => {
        console.error('Erreur lors de la récupération des produits:', error);
        return throwError(() => error);
      })
    );
  }

/*  getVendeursByBoutiqueId(id: number): Observable<Users[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return throwError(() => new Error('Aucun token trouvé'));
      }
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      return this.http.get<Users[]>(`${this.apiUrl}/${id}/vendeurs`, { headers });
    }),
    catchError(error => {
      console.error('Erreur lors de la récupération des vendeurs:', error);
      return throwError(() => error);
    })
  );
}
*/
  
 copierProduits(detailsCopie: {
  boutiqueSourceId: number;
  boutiqueDestinationId: number;
  toutCopier: boolean;
  produitIds?: number[];
}): Observable<any> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        return throwError(() => new Error('Aucun token trouvé'));
      }

        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`
        });

        return this.http.post(
          `${this.apiUrl}/copier-produits`, 
          detailsCopie, 
          { 
            headers,
            responseType: 'json' 
          }
        );
      }),
      catchError(error => {
        if (error.error && typeof error.error === 'string') {
          try {
            const parsedError = JSON.parse(error.error);
            return throwError(() => parsedError);
          } catch (e) {
            return throwError(() => ({ message: error.error }));
          }
        }
        return throwError(() => error);
      })
    );
  }

  mettreEnCorbeille(produitId: number): Observable<{ message: string; status: string }> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          return throwError(() => new Error('Aucun token trouvé'));
        }

        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`
        });

        return this.http.delete<{ message: string; status: string }>(
          `${this.apiUrl}/corbeille/${produitId}`,
          { headers }
        );
      }),
      catchError(error => {
        let errorMsg = 'Erreur lors de la mise en corbeille';
        if (error.error?.message) {
          errorMsg = error.error.message;
        } else if (error.message) {
          errorMsg = error.message;
        }
        return throwError(() => new Error(errorMsg));
      })
    );
  }

  associateUserToBoutique(boutiqueId: number, userId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/boutiques/${boutiqueId}/users/${userId}`, {});
  }


  // Assignation des vendeur

  assignerVendeur(request: AssignerVendeurRequest): Observable<any> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return throwError(() => new Error('Aucun token trouvé'));
      }

      const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

      // Appel à l'API backend pour assigner les vendeurs
      return this.http.post(`${this.apiUrl}/assigner-vendeur`, request, { headers });
    }),
    catchError(error => {
      console.error('Erreur lors de l\'assignation du vendeur:', error);
      return throwError(() => error);
    })
  );
}

// Get Vendeurs d'une boutique
getVendeursDeBoutique(boutiqueId: number): Observable<any> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return throwError(() => new Error('Aucun token trouvé'));
      }
      const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

      return this.http.get(`${this.apiUrl}/vendeurs/${boutiqueId}`, { headers }).pipe(
        catchError(error => {
          console.error('Erreur lors de la récupération des vendeurs:', error);
          return throwError(() => error);
        })
      );
    })
  );
}



}