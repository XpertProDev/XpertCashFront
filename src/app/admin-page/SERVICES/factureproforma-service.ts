import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, switchMap, tap, throwError } from "rxjs";
import { FactureProForma, StatutFactureProForma, UpdateFactureProFormaDTO } from "../MODELS/FactureProForma.model";
import { Note } from "../MODELS/Note.model";
import { environment } from "src/environments/environment";
import { UsersService } from "./users.service";


@Injectable({
  providedIn: 'root'
})
export class FactureProFormaService {
    private apiUrl = environment.apiBaseUrl;
  

  constructor(private http: HttpClient, private usersService: UsersService) { }

  creerFactureProforma(
  facture: any,
  remisePourcentage?: number,
  appliquerTVA?: boolean,
  appliquerAdjustments?: boolean
): Observable<any> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      
      let params = new HttpParams();

      if (appliquerAdjustments) {
        if (remisePourcentage !== undefined) {
          params = params.set('remisePourcentage', remisePourcentage.toString());
        }
        if (appliquerTVA !== undefined) {
          params = params.set('appliquerTVA', appliquerTVA.toString());
        }
      }

      return this.http.post(`${this.apiUrl}/ajouter`, facture, { headers, params });
    }),
    tap(response => console.log('Facture créée avec succès:', response)),
    catchError(error => {
      console.error('Erreur détaillée:', error);
      console.log('Corps de la réponse:', error.error);
      return throwError(() => error);
    })
  );
}


  //Get facture proformat
 getAlFactproformaOfEntreprise(entrepriseId: number): Observable<any[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get<any[]>(`${this.apiUrl}/mes-factures`, { headers });
    })
  );
}


  getFactureProformaById(id: number): Observable<FactureProForma> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get<FactureProForma>(`${this.apiUrl}/factureProforma/${id}`, { headers });
    })
  );
}


  // Dans FactureProFormaService
 updateFactureProforma(
  factureId: number,
  remisePourcentage: number | undefined,
  appliquerTVA: boolean | undefined,
  modifications: Partial<FactureProForma>,
  idsApprobateurs?: number[]
): Observable<FactureProForma> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });

      let params = new HttpParams();

      if (remisePourcentage !== undefined) {
        params = params.set('remisePourcentage', remisePourcentage.toString());
      }

      if (appliquerTVA !== undefined) {
        params = params.set('appliquerTVA', appliquerTVA.toString());
      }

      if (idsApprobateurs && idsApprobateurs.length > 0) {
        idsApprobateurs.forEach(id => {
          params = params.append('idsApprobateurs', id.toString());
        });
      }

      if (modifications.statut === StatutFactureProForma.ANNULE) {
        params = params.set('isAnnulation', 'true');
      }

      return this.http.put<FactureProForma>(
        `${this.apiUrl}/updatefacture/${factureId}`,
        modifications,
        { headers, params }
      ).pipe(
        tap(response => console.log('Facture mise à jour:', response)),
        catchError(error => {
          console.error('Erreur mise à jour:', error);
          return throwError(() => error);
        })
      );
    })
  );
}


  //Envoyer Facture par mail :
  envoyerFactureEmail(
    factureId: number,
    emailRequest: {
      to: string;
      cc: string;
      subject: string;
      body: string;
      attachments?: File[];
    }
  ): Observable<string> {
    const formData = new FormData();
    formData.append('to', emailRequest.to);
    formData.append('cc', emailRequest.cc);
    formData.append('subject', emailRequest.subject);
    formData.append('body', emailRequest.body);

    if (emailRequest.attachments) {
      emailRequest.attachments.forEach((file, index) => {
        formData.append(`attachments`, file, file.name);
      });
    }

      return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.post(
        `${this.apiUrl}/factures/${factureId}/envoyer-email`,
        formData,
        { headers, responseType: 'text' }
      );
    })
  );

 
  }


  //Get History Facture
getHistoriqueFacture(factureId: number): Observable<any> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      return this.http.get<any>(`${this.apiUrl}/factpro/${factureId}/historique`, { headers });
    }),
    catchError(err => {
      console.error('Erreur récupération historique facture:', err);
      return throwError(() => err);
    })
  );
}


// getHistoriqueActions(factureId: number): Observable<any> {
//   return this.http.get(`${this.apiUrl}/factpro/${factureId}/historique`);
// }

//Endpoint pour recuperer les notes d'une facture proforma
getNotesFactureProforma(id: number): Observable<any[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get<any[]>(`${this.apiUrl}/factures/${id}/notes`, { headers });
    }),
    catchError(err => {
      console.error('Erreur récupération historique facture:', err);
      return throwError(() => err);
    })
  );
}


  //Note by Id
getNoteById(factureId: number, noteId: number): Observable<Note> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      });

      return this.http.get<Note>(
        `${this.apiUrl}/auth/${factureId}/notes/${noteId}`, 
        { headers }
      );
    }),
    catchError(err => {
      console.error('Erreur lors de la récupération de la note:', err);
      return throwError(() => err);
    })
  );
}




  //Endpoint pour modifier les notes
updateNote(factureId: number, noteId: number, nouveauContenu: string): Observable<any> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      const url = `${this.apiUrl}/${factureId}/notes/${noteId}`;
      const body = { nouveauContenu };
      return this.http.put<any>(url, body, { headers });
    }),
    tap(response => console.log('Note modifiée avec succès:', response)),
    catchError(error => {
      console.error('Erreur lors de la modification de la note:', error);
      return throwError(() => error);
    })
  );
}


deletNoteFactureProforma(factureId: number, noteId: number): Observable<any> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      });
      return this.http.delete<any>(
        `${this.apiUrl}/${factureId}/notes/${noteId}/supprimer`,
        { headers }
      );
    }),
    catchError(error => {
      console.error('Erreur lors de la suppression de la note:', error);
      return throwError(() => error);
    })
  );
}


 getFacturesByClient(clientId?: number, entrepriseClientId?: number): Observable<any[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      let params = new HttpParams();

      if (clientId !== undefined) {
        params = params.set('clientId', clientId.toString());
      }
      if (entrepriseClientId !== undefined) {
        params = params.set('entrepriseClientId', entrepriseClientId.toString());
      }

      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      return this.http.get<any[]>(`${this.apiUrl}/factures/client`, { headers, params });
    }),
    catchError(error => {
      console.error('Erreur dans getFacturesByClient:', error);
      return throwError(() => error);
    })
  );
}


//Trier

getFacturesParPeriode(
  type: 'jour' | 'mois' | 'annee' | 'personnalise',
  dateDebut?: string, // format ISO: '2025-07-01'
  dateFin?: string
): Observable<any[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      let params = new HttpParams().set('type', type);

      if (type === 'personnalise') {
        if (!dateDebut || !dateFin) {
          throw new Error("Pour 'personnalise', les dates dateDebut et dateFin sont obligatoires.");
        }
        params = params.set('dateDebut', dateDebut).set('dateFin', dateFin);
      }

      return this.http.get<any[]>(`${this.apiUrl}/mes-factures/par-periode`, { headers, params });
    })
  );
}


 
}



