import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class StockService {

  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  ajouterStock(stockPayload: any): Observable<any> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    
    return this.http.patch(`${this.apiUrl}/ajouterStock`, stockPayload, { headers });
  }

  retirerStock(stockPayload: any): Observable<any> {
    const token = localStorage.getItem('authToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    
    return this.http.patch(`${this.apiUrl}/retirerStock`, stockPayload, { headers });
  }

  getAllstockhistorique(produitId: number,token: string): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${this.apiUrl}/stockhistorique/${produitId}`, { headers });
  }



  getAllStocks(token: string): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${this.apiUrl}/getAllStock`, { headers });
  }
  getAllhistorique(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/stockhistorique`); 
  }
  
  
  

}