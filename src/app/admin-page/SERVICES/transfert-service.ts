import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Transfert } from "../MODELS/tranfert-model";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })

  export class TransfertService {

    private apiUrl = environment.apiBaseUrl;
  

  constructor(private http: HttpClient) { }

  // Dans transfert.service.ts
  effectuerTransfert(transfert: Transfert): Observable<any> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    });

    return this.http.post(`${this.apiUrl}/transferer-produits`, transfert, { headers, responseType: 'text' });
  }

}