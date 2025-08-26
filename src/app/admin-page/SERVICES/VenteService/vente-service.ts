// vente.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { UsersService } from 'src/app/admin-page/SERVICES/users.service';
import { VenteRequest, VenteResponse } from '../../MODELS/VenteModel/vente-model';

@Injectable({ providedIn: 'root' })
export class VenteService {
  private apiUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient,
    private usersService: UsersService
  ) {}

  enregistrerVente(request: VenteRequest): Observable<VenteResponse> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) return throwError(() => new Error('Aucun token trouvé'));
        const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
        return this.http.post<VenteResponse>(`${this.apiUrl}/vente/enregistrer`, request, { headers });
      }),
      catchError(err => {
        // rethrow the original HttpErrorResponse so subscriber can inspect err.error etc.
        return throwError(() => err);
      })
    );
  }

  getVenteById(id: number): Observable<VenteResponse> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) return throwError(() => new Error('Aucun token trouvé'));
        const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
        return this.http.get<VenteResponse>(`${this.apiUrl}/vente/${id}`, { headers });
      }),
      catchError(err => throwError(() => err))
    );
  }

  getMontantTotalEntreprise(): Observable<number> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          return throwError(() => new Error('Aucun token trouvé'));
        }
        const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
        return this.http.get<number>(`${this.apiUrl}/vente/montant-total-jour`, { headers });
      }),
      catchError(err => throwError(() => err))
  );
}

  getMontantTotalEntrepriseMois(): Observable<number> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          return throwError(() => new Error('Aucun token trouvé'));
        }
        const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
        return this.http.get<number>(`${this.apiUrl}/vente/montant-total-mois`, { headers });
      }),
      catchError(err => throwError(() => err))
  );
}

// get benefice de mois de lentreprise
  getBeneficheEntrepriseMois(): Observable<number>{
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          return throwError(() => new Error('Aucun token trouvé'));
        }
        const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`  });
        return this.http.get<number>(`${this.apiUrl}/vente/benefice/mois`, { headers });
      }),
      catchError(err => throwError(() => err)
    )
    );
  }

  // get benefice de jour de lentreprise
  getBeneficheEntrepriseJour(): Observable<number>{
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          return throwError(() => new Error('Aucun token trouvé'));
        }
        const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`  });
        return this.http.get<number>(`${this.apiUrl}/vente/benefice/jour`, { headers });
      }),
      catchError(err => throwError(() => err)
    )
    );
  }

  //Benefice annuel
    getBeneficheEntrepriseAnnuel(): Observable<number>{
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          return throwError(() => new Error('Aucun token trouvé'));
        }
        const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`  });
        return this.http.get<number>(`${this.apiUrl}/vente/benefice/annee`, { headers });
      }),
      catchError(err => throwError(() => err)
    )
    );
  }

  // Mouvement par jour
  getMouvementsParJour(): Observable<any[]> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          return throwError(() => new Error('Aucun token trouvé'));
        }
        const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
        return this.http.get<any[]>(`${this.apiUrl}/mouvement/par-jour`, { headers });
      }),
      catchError(err => throwError(() => err))
    );
  }


}
