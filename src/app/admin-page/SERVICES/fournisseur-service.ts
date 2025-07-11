import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { Fournisseurs } from "../MODELS/fournisseurs-model";
import { environment } from "src/environments/environment";
import { UsersService } from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private apiUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient,
    private usersService: UsersService
) { }

addFournisseur(fournisseur: Fournisseurs, imageFournisseurFile?: File): Observable<any> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap(token => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      const formData = new FormData();
      formData.append('fournisseur', JSON.stringify(fournisseur));

      if (imageFournisseurFile) {
        formData.append('imageFournisseurFile', imageFournisseurFile);
      }

      return this.http.post(`${this.apiUrl}/save-fournisseurs`, formData, { headers });
    })
  );
}





  //Get fournisseur by id
getFournisseurById(id: number): Observable<{ fournisseur: Fournisseurs }> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });

      return this.http.get<{ fournisseur: Fournisseurs }>(
        `${this.apiUrl}/getFournisseur/${id}`,
        { headers }
      );
    })
  );
}



  //Get all fournisseurs
getAllFournisseurs(): Observable<Fournisseurs[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });

      return this.http.get<Fournisseurs[]>(`${this.apiUrl}/get-fournisseurs`, { headers });
    })
  );
}


// fournisseur.service.ts

updateFournisseur(
  id: number,
  updatedFournisseur: any,
  imageFournisseurFile?: File
): Observable<any> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      const formData = new FormData();

      formData.append('updatedFournisseur', new Blob(
        [JSON.stringify(updatedFournisseur)],
        { type: 'application/json' }
      ));

      if (imageFournisseurFile) {
        formData.append('imageFournisseurFile', imageFournisseurFile);
      }

      return this.http.put(`${this.apiUrl}/updateFournisseur/${id}`, formData, { headers });
    })
  );
}




}
