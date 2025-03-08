import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class StockService {

  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  ajouterStock(produitId: number, stock: any): Observable<any> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    // Préparation du FormData pour respecter le format multipart attendu par le back-end
    const formData: FormData = new FormData();
    formData.append('stock', JSON.stringify(stock));

    return this.http.patch(`${this.apiUrl}/ajouterStock/${produitId}`, formData, { headers });
  }



  getAllStocks(token: string): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${this.apiUrl}/getAllStock`, { headers });
  }

  }