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
      { headers }
    ).pipe(
      catchError(this.handlePaymentError)
    );
  }

 private handlePaymentError(error: HttpErrorResponse) {
  console.error('Full error response:', error);
  
  let errorMessage = 'Erreur inconnue';
  
  if (error.error instanceof ErrorEvent) {
    errorMessage = `Erreur client: ${error.error.message}`;
  } else {
    // Essayez d'extraire le message du backend
    const backendError = error.error;
    
    if (typeof backendError === 'string') {
      errorMessage = backendError;
    } else if (backendError?.message) {
      errorMessage = backendError.message;
    } else {
      errorMessage = `Erreur serveur (${error.status}): ${error.statusText}`;
    }
  }
  
  return throwError(() => ({
    status: error.status,
    message: errorMessage,
    backendResponse: error.error // Ajout pour le débogage
  }));
}

   
}

