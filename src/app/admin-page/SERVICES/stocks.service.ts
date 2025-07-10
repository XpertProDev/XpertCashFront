import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

  export class StockService {

    private apiUrl = environment.apiBaseUrl;
  

  constructor(private http: HttpClient) { }

  ajouterStock(stockPayload: any): Observable<any> {
    const token = localStorage.getItem('accessToken') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    
    return this.http.patch(`${this.apiUrl}/ajouterStock`, stockPayload, { headers });
  }

  retirerStock(stockPayload: any): Observable<any> {
    const token = localStorage.getItem('accessToken') || '';
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