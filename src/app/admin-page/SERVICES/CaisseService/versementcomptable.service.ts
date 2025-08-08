import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsersService } from '../users.service';
import { VersementComptableDTO } from '../../MODELS/CaisseModel/comptable.model';

@Injectable({ providedIn: 'root' })
export class VersementComptableService {
      private apiUrl = environment.apiBaseUrl;
      
      constructor(
        private http: HttpClient,
        private usersService: UsersService
      ) { }

      // Récupérer les versements par boutique
  getVersementsParBoutique(boutiqueId: number): Observable<VersementComptableDTO[]> {
    return this.usersService.getValidAccessToken().pipe(
      switchMap(token => {
        if (!token) {
          throw new Error('Aucun token trouvé');
        }

        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });

        return this.http.get<VersementComptableDTO[]>(`${this.apiUrl}/v/boutique/${boutiqueId}`, { headers });
      }),
      catchError(error => {
        console.error('Erreur lors de la récupération des versements :', error);
        throw error;
      })
    );
  }

}