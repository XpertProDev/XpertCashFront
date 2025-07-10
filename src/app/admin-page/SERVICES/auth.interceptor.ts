import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, filter, switchMap, take, finalize } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private apiUrl = environment.apiBaseUrl;
  
  private isRefreshing = false;
  private refreshTokenSubject = new BehaviorSubject<string | null>(null);

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authService.getAccessToken();

    let authReq = req;
    if (accessToken) {
      console.log('🔐 Ajout du token à la requête sortante');
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }

    return next.handle(authReq).pipe(
      catchError(error => {
        if (
          error instanceof HttpErrorResponse &&
          error.status === 401 &&
          !req.url.includes('/login') &&
          !req.url.includes('/refresh-token')
        ) {
          console.warn('⏳ Token expiré, tentative de refresh...');
          return this.handle401Error(authReq, next);
        }
        return throwError(() => error);
      })
    );
  }

  private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      const refreshToken = this.authService.getRefreshToken();
      console.log('🔁 Refresh token récupéré :', refreshToken);

      if (!refreshToken) {
        console.error('🚫 Aucun refresh token disponible. Redirection vers /login');
        this.authService.removeTokens();
        this.router.navigate(['/login']);
        return throwError(() => new Error('No refresh token'));
      }

      return this.http
        .post<{ accessToken: string }>(`${this.apiUrl}/refresh-token`, {
          refreshToken
        })
        .pipe(
        switchMap(response => {
        console.log('✅ Nouveau access token reçu :', response.accessToken);
        const newAccessToken = response.accessToken;
        this.authService.saveAccessToken(newAccessToken);
        this.refreshTokenSubject.next(newAccessToken);
        return next.handle(this.addTokenHeader(req, newAccessToken));
      }),


          catchError(err => {
            console.error('❌ Échec du refresh. Redirection vers /login', err);
            this.authService.removeTokens();
            this.router.navigate(['/login']);
            return throwError(() => err);
          }),
          finalize(() => {
            this.isRefreshing = false;
          })
        );
    } else {
      return this.refreshTokenSubject.pipe(
      filter(token => token != null),
      take(1),
      switchMap(token => {
        console.log("📦 Token récupéré via subject :", token);
        return next.handle(this.addTokenHeader(req, token!));
      })
    );

    }
  }

  private addTokenHeader(req: HttpRequest<any>, token: string | null): HttpRequest<any> {
    if (!token || token.trim() === '') {
      console.warn('⚠️ Token vide, requête envoyée sans Authorization header');
      return req;
    }

    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }


}
