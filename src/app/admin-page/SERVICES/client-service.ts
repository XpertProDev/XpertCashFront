import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Observable, switchMap, tap, throwError } from "rxjs";
import { Entreprise } from "../MODELS/entreprise-model";
import { Clients } from "../MODELS/clients-model";
import { environment } from "src/environments/environment";
import { UsersService } from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
    private apiUrl = environment.apiBaseUrl;
  

  constructor(private http: HttpClient, private usersService: UsersService) { }

addClient(client: Clients): Observable<{ message: string; clientId: string; createdAt: string }> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        return throwError(() => new Error('Token manquant'));
      }

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });

      return this.http.post<{ message: string; clientId: string; createdAt: string }>(
        `${this.apiUrl}/clients`,
        client,
        { headers }
      );
    }),
    catchError(error => {
      console.error('Erreur lors de l\'ajout du client:', error);
      return throwError(() => error);
    })
  );
}


  // LL recuperation des clients
 getListClients(): Observable<any[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        return throwError(() => new Error('Aucun token trouvé'));
      }
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get<any[]>(`${this.apiUrl}/clients`, { headers });
    }),
    tap(response => console.log('Réponse API clients:', response)),
    catchError(error => {
      console.error('Erreur lors de la récupération des clients:', error);
      return throwError(() => error);
    })
  );
}


  //All client end Entreprise:
 getListEntreprises(): Observable<any[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        return throwError(() => new Error('Aucun token trouvé'));
      }
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get<any[]>(`${this.apiUrl}/entreprises`, { headers });
    }),
    tap(response => console.log('Réponse API entreprises:', response)),
    catchError(error => {
      console.error('Erreur lors de la récupération des entreprises:', error);
      return throwError(() => error);
    })
  );
}


 getClientsByEntreprise(entrepriseId: number): Observable<Clients[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        return throwError(() => new Error('Aucun token trouvé'));
      }
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get<Clients[]>(`${this.apiUrl}/clients/entreprise/${entrepriseId}`, { headers });
    }),
    catchError(error => {
      console.error('Erreur récupération clients par entreprise:', error);
      return throwError(() => error);
    })
  );
}


  getClientById(id: number): Observable<Clients> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        return throwError(() => new Error('Aucun token trouvé'));
      }
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get<Clients>(`${this.apiUrl}/clients/${id}`, { headers });
    }),
    tap(response => console.log('Client récupéré:', response)),
    catchError(error => {
      console.error('Erreur lors de la récupération du client', error);
      return throwError(() => error);
    })
  );
}


  // Ajoutez cette méthode dans votre ClientService
  updateClient(id: number, client: Clients, imageFile?: File): Observable<Clients> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        return throwError(() => new Error('Aucun token trouvé'));
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      const formData = new FormData();
      formData.append('client', new Blob([JSON.stringify(client)], { type: 'application/json' }));

      if (imageFile) {
        formData.append('imageClientFile', imageFile);
      }

      return this.http.put<Clients>(`${this.apiUrl}/clientupdate/${id}`, formData, { headers });
    }),
    catchError(error => {
      console.error('Erreur lors de la mise à jour du client:', error);
      return throwError(() => error);
    })
  );
}


// getFullImageUrl(relativePath: string): string {
//   return relativePath 
//     ? `${environment.imgUrl}${relativePath}`
//     : 'assets/img/profil.png';
// }

getFullImageUrl(relativePath: string): string {
  // Si déjà une URL complète, retournez directement
  if (relativePath.startsWith('http')) return relativePath;
  
  return relativePath 
    ? `${environment.imgUrl}${relativePath}`
    : 'assets/img/profil.png';
}
  

deleteClient(id: number): Observable<string> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      if (!token) {
        return throwError(() => new Error('Token manquant'));
      }
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.delete(`${this.apiUrl}/clients/${id}`, {
        headers,
        responseType: 'text'
      });
    }),
    catchError(error => {
      let errorMsg = 'Erreur inconnue';

      if (error.error instanceof ErrorEvent) {
        errorMsg = `Erreur: ${error.error.message}`;
      } else if (error.status === 404) {
        errorMsg = 'Client non trouvé';
      } else if (error.status === 403) {
        // Le message de refus de suppression (ex : "Ce client ne peut pas être supprimé...")
        errorMsg = error.error || 'Accès refusé';
      }

      return throwError(() => new Error(errorMsg));
    })
  );
}




}