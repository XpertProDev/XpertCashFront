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
    boutiqueId: number,
    produit: Produit,
    imageFile: File | null,
    addToStock: boolean,
    token: string
  ): Observable<Produit> {
    const url = `${this.apiUrl}/create/${boutiqueId}?addToStock=${addToStock}`;
    const formData: FormData = new FormData();

    formData.append('produit', JSON.stringify(produit));

    if (imageFile) {
      formData.append('image', imageFile, imageFile.name);
    }

    const headers = new HttpHeaders({
      'Authorization': token
    });

    return this.http.post<Produit>(url, formData, { headers });
  }

}