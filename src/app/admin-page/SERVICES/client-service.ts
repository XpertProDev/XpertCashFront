import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiUrl: string = "http://localhost:8080/api/auth";

  constructor(private http: HttpClient) { }
  
    getListClients() {}
}