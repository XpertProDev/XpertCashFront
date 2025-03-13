import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Facture } from "../MODELS/facture.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  getFactures(): Observable<Facture[]> {
    return this.http.get<Facture[]>(`${this.apiUrl}/factures`);
  }

}