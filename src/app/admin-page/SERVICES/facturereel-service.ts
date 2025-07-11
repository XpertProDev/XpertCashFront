import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, switchMap, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { UsersService } from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class FactureReelService {
    private apiUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient,  private usersService: UsersService) {}

 getFactureReelleById(id: number): Observable<any> {
 return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      return this.http.get<any>(`${this.apiUrl}/factures-reelles/${id}`, { headers });
    }),
    catchError((error) => {
      console.error('Erreur lors de la récupération de la facture réelle :', error);
      return throwError(() => error);
    })
  );
}


 getAlFactproreelOfEntreprise(entrepriseId: number): Observable<any[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      return this.http.get<any[]>(`${this.apiUrl}/mes-factures-reelles`, { headers });
    }),
    catchError((error) => {
      console.error('Erreur lors de la récupération des factures réelles :', error);
      return throwError(() => error);
    })
  );
}


  // Ajouter ces méthodes dans FactureReelService
  enregistrerPaiement(factureId: number, montant: number, modePaiement: string): Observable<any> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap((token: string) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`
        });

        const body = { montant, modePaiement };

        return this.http.post(`${this.apiUrl}/factures/${factureId}/paiement`, body, { headers });
      }),
      catchError(error => {
        console.error('Erreur lors de l\'enregistrement du paiement :', error);
        return throwError(() => error);
      })
    );
  }


getHistoriquePaiements(factureId: number): Observable<any[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      return this.http.get<any[]>(`${this.apiUrl}/factures/${factureId}/paiements`, { headers });
    }),
    catchError(err => {
      console.error('Erreur lors de la récupération de l\'historique des paiements :', err);
      return throwError(() => err);
    })
  );
}


 getMontantRestant(factureId: number): Observable<number> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      return this.http.get<number>(`${this.apiUrl}/factures/${factureId}/montant-restant`, { headers });
    }),
    catchError(err => {
      console.error('Erreur lors de la récupération du montant restant :', err);
      return throwError(() => err);
    })
  );
}


  // Ajouter cette méthode dans FactureReelService
 annulerFactureReelle(factureId: number): Observable<any> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
      return this.http.put(
        `${this.apiUrl}/cancelFacture/${factureId}`,
        {}, // Body vide
        { headers }
      );
    }),
    catchError(err => {
      console.error('Erreur lors de l\'annulation de la facture :', err);
      return throwError(() => err);
    })
  );
}

}
