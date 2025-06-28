import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Module } from '../MODELS/Module-model';
import { UsersService } from './users.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ModuleService {

    private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}
  getModulesEntreprise(): Observable<Module[]> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('Aucun token trouvé dans le localStorage');
      return new Observable<Module[]>();  
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const url = `${this.apiUrl}/entreprise/modules`;
    return this.http.get<Module[]>(url, { headers });
  }


   
}

