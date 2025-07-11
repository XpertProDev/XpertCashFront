import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsersService } from './users.service';

@Injectable({
    providedIn: 'root'
  })

  export class StockService {

    private apiUrl = environment.apiBaseUrl;
  

  constructor(private http: HttpClient, private usersService: UsersService) { }

ajouterStock(stockPayload: any): Observable<any> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });

      return this.http.patch(`${this.apiUrl}/ajouterStock`, stockPayload, { headers });
    })
  );
}


retirerStock(stockPayload: any): Observable<any> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });

      return this.http.patch(`${this.apiUrl}/retirerStock`, stockPayload, { headers });
    })
  );
}


 getAllstockhistorique(produitId: number): Observable<any[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get<any[]>(`${this.apiUrl}/stockhistorique/${produitId}`, { headers });
    })
  );
}




 getAllStocks(): Observable<any[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get<any[]>(`${this.apiUrl}/getAllStock`, { headers });
    })
  );
}

 getAllhistorique(): Observable<any[]> {
  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get<any[]>(`${this.apiUrl}/stockhistorique`, { headers });
    })
  );
}

  
  
  

}