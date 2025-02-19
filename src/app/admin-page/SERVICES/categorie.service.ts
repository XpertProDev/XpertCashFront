import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../MODELS/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiUrl: string = "http://localhost:8080/api/auth";
  

  constructor(private http: HttpClient) {}

  getCategories(token: string): Observable<Categorie[]> {
    if (!token) {
      console.error('Token vide ou non défini');
    }
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    console.log('Headers envoyés : ', headers);
    return this.http.get<Categorie[]>(`${this.apiUrl}/allCategory`, { headers });
  }

}