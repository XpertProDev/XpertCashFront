import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, switchMap, throwError } from "rxjs";
import { GlobalNotificationDto } from "../MODELS/global_notification.dto";
import { environment } from "src/environments/environment";
import { UsersService } from "./users.service";

@Injectable({ providedIn: 'root' })
export class GlobalNotificationService {
    private apiUrl = environment.apiBaseUrl;

    constructor(
        private http: HttpClient,
        private usersService: UsersService,
    ) {}

    getAllForCurrentUser(): Observable<GlobalNotificationDto[]> {
        return this.usersService.getValidAccessToken().pipe(
            switchMap(token => {
                const headers = new HttpHeaders({
                'Authorization': `Bearer ${token}`
                });
        
                return this.http.get<GlobalNotificationDto[]>(`${this.apiUrl}/list/global/notifications`,  { headers });
            }),
            catchError((error) => {
                console.error('Erreur lors de la récupération de la facture réelle :', error);
                return throwError(() => error);
            })
        );
    }

    
}