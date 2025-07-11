import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, switchMap, throwError } from "rxjs";
import { UpdateUserRequest } from "../MODELS/profil.model";
import { environment } from "src/environments/environment";
import { UsersService } from "./users.service";


@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private usersService: UsersService) { }
  
updatePassword(userId: number, request: UpdateUserRequest): Observable<any> {
  const formData = new FormData();
  formData.append('user', JSON.stringify(request));

  return this.usersService.getValidAccessToken().pipe(
    switchMap((token: string) => {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.patch(
        `${this.apiUrl}/updateUsers/${userId}`,
        formData,
        { headers, responseType: 'text' }
      );
    })
  );
}


}