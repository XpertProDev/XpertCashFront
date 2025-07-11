import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Module } from '../MODELS/Module-model';
import { UsersService } from './users.service';
import { environment } from 'src/environments/environment';
import { ModulePaiementModel } from '../MODELS/module-paiement-model';

@Injectable({
    providedIn: 'root'
})
export class ModuleService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}
    getModulesEntreprise(): Observable<Module[]> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('Aucun token trouvé dans le localStorage');
      return throwError(() => new Error('Token manquant'));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const url = `${this.apiUrl}/entreprise/modules`;
    return this.http.get<Module[]>(url, { headers });
  }

  // Dans module.service.ts
  // activerModule(demande: ModulePaiementModel): Observable<{ referenceTransaction: string }> {
  //   const token = localStorage.getItem('authToken');
  //   if (!token) {
  //     return throwError(() => new Error('Token manquant'));
  //   }

  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`,
  //     'Content-Type': 'application/json'
  //   });

  //   return this.http.post<{ referenceTransaction: string }>(
  //     `${this.apiUrl}/modules/activer`, 
  //     demande, 
  //     { headers }
  //   ).pipe(
  //     catchError(this.handlePaymentError)
  //   );
  // }

  activerModule(demande: ModulePaiementModel): Observable<any> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      return throwError(() => new Error('Token manquant'));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post(
      `${this.apiUrl}/modules/activer`, 
      demande, 
      { headers, responseType: 'text' } // Important: responseType: 'text'
    ).pipe(
      catchError(this.handlePaymentError)
    );
  }

  private handlePaymentError(error: HttpErrorResponse) {
    let errorMessage = 'Erreur inconnue';
    
    try {
      // Essayer de parser la réponse JSON
      const errorResponse = JSON.parse(error.error);
      if (errorResponse.error) {
        errorMessage = errorResponse.error;
      } else if (errorResponse.message) {
        errorMessage = errorResponse.message;
      }
    } catch (e) {
      // Si le parsing échoue, utiliser le texte brut
      errorMessage = error.error || error.message || 'Erreur inconnue';
    }
    
    return throwError(() => ({
      status: error.status,
      message: errorMessage
    }));
  }

   
}

