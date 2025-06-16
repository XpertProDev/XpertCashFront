import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { UpdateUserRequest } from "../MODELS/profil.model";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  
updatePassword(userId: number, request: UpdateUserRequest): Observable<any> {
  const formData = new FormData();
  formData.append('user', JSON.stringify(request));
  return this.http.patch(
    `${this.apiUrl}/updateUsers/${userId}`,
    formData,
    { responseType: 'text' }
  );
}

}