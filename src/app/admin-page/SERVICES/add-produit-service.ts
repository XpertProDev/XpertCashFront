import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Produit } from "../MODELS/add-produit-model";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  ajouterProduit(
    boutiqueIds: number[],
    produit: any, // Modifier le type si nécessaire
    imageFile: File | null,
    addToStock: boolean,
  ): Observable<Produit> {
    const url = `${this.apiUrl}/create?addToStock=${addToStock}`;
    const formData: FormData = new FormData();
  
    formData.append('boutiqueIds', JSON.stringify(boutiqueIds));
    formData.append('produit', JSON.stringify(produit)); 
  
    if (imageFile) {
      formData.append('image', imageFile, imageFile.name);
    }
  
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.post<Produit>(url, formData, { headers });
  }

}