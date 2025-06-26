import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Fournisseurs } from "../MODELS/fournisseurs-model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private apiUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
) { }

addFournisseur(fournisseur: Fournisseurs, imageFournisseurFile?: File): Observable<any> {
  const token = localStorage.getItem('authToken') || '';
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  const formData = new FormData();
  formData.append('fournisseur', JSON.stringify(fournisseur));

  if (imageFournisseurFile) {
    formData.append('imageFournisseurFile', imageFournisseurFile);
  }

  return this.http.post(`${this.apiUrl}/save-fournisseurs`, formData, { headers });
}




  //Get fournisseur by id
  getFournisseurById(id: number): Observable<{ fournisseur: Fournisseurs }> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<{ fournisseur: Fournisseurs }>(
      `${this.apiUrl}/getFournisseur/${id}`, 
      { headers }
    );
  }


  //Get all fournisseurs
  getAllFournisseurs(): Observable<Fournisseurs[]> {
    const token = localStorage.getItem('authToken');

    const headers = new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json'
    });

    return this.http.get<Fournisseurs[]>(`${this.apiUrl}/get-fournisseurs`, { headers });
  }

// fournisseur.service.ts
updateFournisseur(id: number, updatedData: Fournisseurs, imageFile?: File): Observable<any> {
  const token = localStorage.getItem('authToken') || '';
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
    // NE PAS ajouter 'Content-Type' ici!
  });

  const formData = new FormData();
  
  // Spécifier explicitement le type pour la partie JSON
  const jsonBlob = new Blob([JSON.stringify(updatedData)], { 
    type: 'application/json' 
  });
  formData.append('updatedFournisseur', jsonBlob);
  
  if (imageFile) {
    // Spécifier le type MIME pour le fichier image
    formData.append('imageFournisseurFile', imageFile, imageFile.name);
  }

  return this.http.put(`${this.apiUrl}/updateFournisseur/${id}`, formData, { headers });
}

}
