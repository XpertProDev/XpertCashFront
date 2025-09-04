"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["main"],{

/***/ 96115:
/*!*******************************************************!*\
  !*** ./src/app/admin-page/MODELS/customNumberPipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomNumberPipe: () => (/* binding */ CustomNumberPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class CustomNumberPipe {
  transform(value) {
    if (value == null) return '';
    // Remplacer les milliers par des points
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  static {
    this.ɵfac = function CustomNumberPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CustomNumberPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "customNumber",
      type: CustomNumberPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 84173:
/*!*******************************************************!*\
  !*** ./src/app/admin-page/SERVICES/Module-Service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleService: () => (/* binding */ ModuleService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 88026);






class ModuleService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  getModulesEntreprise() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      const url = `${this.apiUrl}/entreprise/modules`;
      return this.http.get(url, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
      console.error('❌ Erreur lors de la récupération des modules :', err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error('Impossible de récupérer les modules'));
    }));
  }
  // Dans module.service.ts
  // activerModule(demande: ModulePaiementModel): Observable<{ referenceTransaction: string }> {
  //   const token = localStorage.getItem('accessToken');
  //   if (!token) {
  //     return throwError(() => new Error('Token manquant'));
  //   }
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`,
  //     'Content-Type': 'application/json'
  //   });
  //   return this.http.post<{ referenceTransaction: string }>(
  //     `${this.apiUrl}/modules/activer`, 
  //     demande, 
  //     { headers }
  //   ).pipe(
  //     catchError(this.handlePaymentError)
  //   );
  // }
  activerModule(demande) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.post(`${this.apiUrl}/modules/activer`, demande, {
        headers,
        responseType: 'text'
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handlePaymentError));
  }
  handlePaymentError(error) {
    let errorMessage = 'Erreur inconnue';
    try {
      // Essayer de parser la réponse JSON
      const errorResponse = JSON.parse(error.error);
      if (errorResponse.error) {
        errorMessage = errorResponse.error;
      } else if (errorResponse.message) {
        errorMessage = errorResponse.message;
      }
    } catch (e) {
      // Si le parsing échoue, utiliser le texte brut
      errorMessage = error.error || error.message || 'Erreur inconnue';
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => ({
      status: error.status,
      message: errorMessage
    }));
  }
  static {
    this.ɵfac = function ModuleService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ModuleService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: ModuleService,
      factory: ModuleService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 71348:
/*!*****************************************************!*\
  !*** ./src/app/admin-page/SERVICES/auth.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.service */ 88026);



class AuthService {
  constructor(usersService) {
    this.usersService = usersService;
    this.ACCESS_TOKEN_KEY = 'accessToken';
    this.REFRESH_TOKEN_KEY = 'refreshToken';
  }
  // Sauvegarder les deux tokens
  saveTokens(accessToken, refreshToken) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }
  saveAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }
  // Récupérer l'accessToken
  getAccessToken() {
    this.usersService.getValidAccessToken().subscribe({
      next: token => {
        console.log('🪪 Token lu depuis localStorage (async) :', token);
        // utilise le token ici
      },
      error: err => {
        console.error('Erreur lors de la récupération du token :', err);
      }
    });
  }
  getToken() {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
  }
  fetchAccessToken() {
    return this.usersService.getValidAccessToken();
  }
  // Récupérer le refreshToken
  getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }
  // Supprimer les tokens à la déconnexion
  removeTokens() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
  // Méthode d'authentification simple
  isAuthenticated() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(token => !!token), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false)));
  }
  isLoggedIn() {
    return this.isAuthenticated();
  }
  // public getCurrentUserToken(): Observable<string | null> {
  //   // on récupère le même champ que dans saveTokens()
  //   return of(localStorage.getItem(this.ACCESS_TOKEN_KEY));
  // }
  getCurrentUserToken() {
    const token = localStorage.getItem(this.ACCESS_TOKEN_KEY);
    if (!token) {
      // soit on propage une erreur :
      throw new Error('Aucun token trouvé en localStorage');
      // — ou bien on renvoie une chaîne vide pour éviter le null :
      // return of('');
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(token);
  }
  static {
    this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 21168:
/*!********************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/global_notification_service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalNotificationService: () => (/* binding */ GlobalNotificationService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 88026);






class GlobalNotificationService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  // getAllForCurrentUser(): Observable<GlobalNotificationDto[]> {
  //     return this.usersService.getValidAccessToken().pipe(
  //         switchMap(token => {
  //             const headers = new HttpHeaders({
  //             'Authorization': `Bearer ${token}`
  //             });
  //             return this.http.get<GlobalNotificationDto[]>(`${this.apiUrl}/list/global/notifications`,  { headers });
  //         }),
  //         catchError((error) => {
  //             console.error('Erreur lors de la récupération de la facture réelle :', error);
  //             return throwError(() => error);
  //         })
  //     );
  // }
  getAllForCurrentUser() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      return this.http.get(`${this.apiUrl}/list/global/notifications`, {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      });
    }));
  }
  markAsRead(notificationId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      return this.http.put(
      // AJOUTEZ LE CHEMIN COMPLET
      `${this.apiUrl}/notifications/${notificationId}/read`, null, {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      });
    }));
  }
  static {
    this.ɵfac = function GlobalNotificationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GlobalNotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: GlobalNotificationService,
      factory: GlobalNotificationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 81069:
/*!*****************************************************!*\
  !*** ./src/app/admin-page/SERVICES/lock.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockService: () => (/* binding */ LockService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class LockService {
  constructor() {
    this.lockAudio = new Audio('assets/sounds/lock.mp3');
    this.unlockAudio = new Audio('assets/sounds/lock.mp3');
    // 🔐 État réactif du verrouillage
    this.isLockedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isLocked$ = this.isLockedSubject.asObservable();
    this.lockAudio.volume = 0.3;
    this.unlockAudio.volume = 0.3;
  }
  registerApp(app) {
    this.appComponent = app;
    this.isLockedSubject.next(app.isLocked); // init état
  }
  lockNow() {
    if (this.appComponent) {
      this.appComponent.lockScreen();
      this.isLockedSubject.next(true);
    }
  }
  unlock() {
    this.isLockedSubject.next(false);
  }
  updateLockState(value) {
    this.isLockedSubject.next(value);
  }
  playSound(type) {
    const audio = type === 'lock' ? this.lockAudio : this.unlockAudio;
    audio.currentTime = 0;
    audio.play().catch(err => {
      console.warn(`🔇 Échec audio ${type}:`, err);
    });
  }
  static {
    this.ɵfac = function LockService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LockService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LockService,
      factory: LockService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 79971:
/*!*****************************************************!*\
  !*** ./src/app/admin-page/SERVICES/modalService.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalService: () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class ModalService {
  constructor() {
    this.sessionExpiredModalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    // Observable que le composant va écouter
    this.sessionExpiredModal$ = this.sessionExpiredModalSubject.asObservable();
  }
  // Méthode appelée depuis l'interceptor ou service
  triggerSessionExpiredModal() {
    this.sessionExpiredModalSubject.next();
  }
  static {
    this.ɵfac = function ModalService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ModalService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ModalService,
      factory: ModalService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 10933:
/*!*******************************************************!*\
  !*** ./src/app/admin-page/SERVICES/stocks.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockService: () => (/* binding */ StockService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 88026);






class StockService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  ajouterStock(stockPayload) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.patch(`${this.apiUrl}/ajouterStock`, stockPayload, {
        headers
      });
    }));
  }
  retirerStock(stockPayload) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.patch(`${this.apiUrl}/retirerStock`, stockPayload, {
        headers
      });
    }));
  }
  getAllstockhistorique(produitId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get(`${this.apiUrl}/stockhistorique/${produitId}`, {
        headers
      });
    }));
  }
  getAllStocks() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get(`${this.apiUrl}/getAllStock`, {
        headers
      });
    }));
  }
  getAllhistorique() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get(`${this.apiUrl}/stockhistorique`, {
        headers
      });
    }));
  }
  static {
    this.ɵfac = function StockService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StockService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: StockService,
      factory: StockService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 88026:
/*!******************************************************!*\
  !*** ./src/app/admin-page/SERVICES/users.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersService: () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _modalService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalService */ 79971);







class UsersService {
  constructor(http,
  // private authService: AuthService,
  router, modalService) {
    this.http = http;
    this.router = router;
    this.modalService = modalService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    this.isLocked = false;
    this.sessionExpiredHandled = false;
  }
  // Méthode pour récupérer le token
  getToken() {
    return localStorage.getItem('accessToken');
  }
  //Inscription
  registerUser(user) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
  // Connexion
  connexionUser(credentials) {
    return this.http.post(`${this.apiUrl}/login`, credentials, {
      withCredentials: true
    });
  }
  // Déconnexion
  logoutUser() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('isLocked');
    localStorage.removeItem('user');
    localStorage.removeItem('photo');
    window.dispatchEvent(new Event('storage-photo-update'));
    this.isLocked = false;
    window.dispatchEvent(new Event('user-logged-out'));
    this.router.navigate(['/connexion']);
  }
  //Information sur User
  getUserInfo() {
    return this.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/user/info`, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(user => localStorage.setItem('user', JSON.stringify(user))));
    }));
  }
  getValidAccessToken() {
    const token = localStorage.getItem('accessToken');
    if (!token || token === 'null' || token.trim() === '') {
      console.error('❌ Aucun token valide trouvé dans le localStorage');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error('Aucun token valide trouvé'));
    }
    const decodedToken = this.decodeJwt(token);
    const isTokenExpired = this.isTokenExpired(decodedToken);
    if (!isTokenExpired) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(token);
    }
    console.warn('⏳ Token expiré, tentative de refresh...');
    return this.getNewTokenFromApi().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(response => {
      const newToken = response.accessToken;
      if (!newToken || newToken.trim() === '') {
        throw new Error('Token rafraîchi invalide');
      }
      localStorage.setItem('accessToken', newToken);
      return newToken;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(err => {
      if (!this.sessionExpiredHandled) {
        this.sessionExpiredHandled = false;
        this.modalService.triggerSessionExpiredModal();
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error('Session expirée'));
    }));
  }
  // Simpl dcodage JWT pour vérifier si le token est expiré
  decodeJwt(token) {
    return JSON.parse(atob(token.split('.')[1]));
  }
  // Vérifier si le token est expiré (avec marge de sécurité de 30 secondes)
  isTokenExpired(decodedToken) {
    const expirationDate = new Date(decodedToken.exp * 1000);
    return expirationDate.getTime() < new Date().getTime() + 30 * 1000;
  }
  // Rafraîchir le token avec un refresh token (si applicable)
  getNewTokenFromApi() {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken || refreshToken.trim() === '') {
      console.error('❌ Aucun refresh token trouvé');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error('Refresh token manquant'));
    }
    return this.http.post(`${this.apiUrl}/refresh-token`, {
      refreshToken
    } // Le backend doit l'accepter dans le body
    );
  }
  getUserBoutiqueId() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log('Utilisateur récupéré de localStorage:', user); // Vérification du contenu de 'user'
    // Si l'utilisateur et la liste des boutiques existent
    if (user && user.boutiques && user.boutiques.length > 0) {
      // Si l'utilisateur a plusieurs boutiques, choisir celle par défaut (par exemple la première)
      const boutiqueId = user.boutiques[0].id; // Id de la première boutique
      console.log('ID de la boutique récupéré:', boutiqueId);
      return boutiqueId;
    } else {
      console.error('Aucune boutique trouvée pour cet utilisateur');
      return null;
    }
  }
  // Méthode pour extraire l'ID de l'utilisateur connecté depuis le token
  extractUserIdFromToken(token) {
    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Décodage du payload du token
      return decodedToken.sub ? parseInt(decodedToken.sub, 10) : null; // Assurez-vous que 'sub' contient l'ID
    } catch (error) {
      console.error('Erreur lors de l\'extraction de l\'ID depuis le token :', error);
      return null;
    }
  }
  // addUserToEntreprise(userData: any, token: string): Observable<string> {
  //   const headers = { Authorization: `Bearer ${token}` };
  //   return this.http.post<string>(`${this.apiUrl}/addNewUsers`, userData, { headers });
  // }
  addUserToEntreprise(userData, token) {
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.post(`${this.apiUrl}/addNewUsers`, userData, {
      headers
    });
  }
  // // Connexion
  //   ccc(credentials: { email: string; password: string }): Observable<{ message?: string; token?: string; error?: string }> {
  //     return this.http.post<{ message?: string; token?: string; error?: string }>(`${this.apiUrl}/login`, credentials);
  // }
  updateBoutique(id, updates) {
    return this.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.put(`${this.apiUrl}/updatedBoutique/${id}`, updates, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
      console.error('Erreur lors de la mise à jour de la boutique:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  updateUser(id, formData) {
    return this.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.patch(`${this.apiUrl}/updateUsers/${id}`, formData, {
        headers,
        responseType: 'text'
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
      console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  //Delet user
  deleteUserFromEntreprise(userId) {
    return this.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        console.error('Token non trouvé');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error('Token JWT manquant'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.delete(`${this.apiUrl}/delete/${userId}`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
      console.error('Erreur lors de la suppression de l\'utilisateur:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  getAllUsersOfEntreprise(entrepriseId) {
    return this.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        console.error("Aucun token trouvé, requête annulée.");
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error("Aucun token trouvé"));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/entreprise/${entrepriseId}/allusers`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  // Get Count of users dans l'entreprise
  countUsersInEntreprise() {
    return this.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/entreprise/countUsers`, {
        headers
      });
    }));
  }
  getUserById(userId) {
    return this.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/user/${userId}`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
      console.error(`Erreur lors de la récupération de l'utilisateur ${userId}:`, error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  // Methode pour le service permission
  assignPermissionsToUser(userId, permissions) {
    return this.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.post(`${this.apiUrl}/${userId}/permissions`, permissions, {
        headers
      });
    }));
  }
  //Ajout de la boutique
  addBoutique(boutique) {
    return this.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      console.log("Envoi de la requête POST à :", `${this.apiUrl}/ajouterBoutique`, "avec données :", boutique);
      return this.http.post(`${this.apiUrl}/ajouterBoutique`, boutique, {
        headers
      });
    }));
  }
  // LL recuperation de boutique dans e/ses
  getBoutiquesByEntreprise() {
    return this.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/boutiqueEntreprise`, {
        headers
      });
    }));
  }
  // Service pour suspendre user
  suspendUser(userId, suspend) {
    return this.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.put(`${this.apiUrl}/suspendre/${userId}`, null, {
        headers,
        params: {
          suspend: suspend.toString()
        },
        responseType: 'text' // si l'API retourne du texte brut
      });
    }));
  }
  // Ajouter cette méthode dans UsersService
  forgotPassword(email) {
    return this.http.post(`${this.apiUrl}/forgot-password`, {
      email
    });
  }
  resetPassword(token, newPassword) {
    return this.http.post(`${this.apiUrl}/reset-password`, {
      token,
      newPassword
    });
  }
  validateOtp(email, code) {
    return this.http.post(`${this.apiUrl}/validate-otp`, {
      email,
      code
    });
  }
  // Verification de role
  isAdminOrManager() {
    return this.getUserInfo().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(user => ['ADMIN', 'MANAGER'].includes(user.roleType)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(false)));
  }
  getCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return null;
    try {
      return JSON.parse(userString);
    } catch (e) {
      console.error('Erreur lors du parsing du user du localStorage :', e);
      return null;
    }
  }
  // Dans UsersService
  // verifyCode(pin: string): Observable<boolean> {
  //   const currentUser = this.getCurrentUser();
  //   if (!currentUser) {
  //     console.error('Aucun utilisateur connecté');
  //     return of(false);
  //   }
  //   // Vérifier que l'utilisateur est admin ou manager
  //   const isAdminOrManager = ['ADMIN', 'MANAGER'].includes(currentUser.roleType);
  //   if (!isAdminOrManager) {
  //     console.warn('L\'utilisateur n\'est pas admin/manager');
  //     return of(false);
  //   }
  //   // Comparer le PIN saisi avec le personalCode
  //   const isValid = currentUser.personalCode === pin;
  //   return of(isValid);
  // }
  verifyCode(pin, allowedRoles = ['ADMIN', 'MANAGER']) {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(false);
    }
    // Vérifier le rôle
    const hasRequiredRole = allowedRoles.includes(currentUser.roleType);
    if (!hasRequiredRole) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(false);
    }
    // Vérifier le code
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(currentUser.personalCode === pin);
  }
  getAssignedBoutiques() {
    const user = this.getCurrentUser();
    return user && user.boutiques ? user.boutiques : [];
  }
  static {
    this.ɵfac = function UsersService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_modalService__WEBPACK_IMPORTED_MODULE_1__.ModalService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: UsersService,
      factory: UsersService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 66725:
/*!**********************************************************!*\
  !*** ./src/app/admin-page/SERVICES/websocket.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebSocketService: () => (/* binding */ WebSocketService)
/* harmony export */ });
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stomp/stompjs */ 22865);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sockjs-client */ 19550);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 43942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 71348);






class WebSocketService {
  constructor(authService) {
    this.authService = authService;
    this.client = new _stomp_stompjs__WEBPACK_IMPORTED_MODULE_3__.Client({
      webSocketFactory: () => new sockjs_client__WEBPACK_IMPORTED_MODULE_0__(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.wsEndpoint),
      reconnectDelay: 5000
    });
  }
  connect() {
    return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(observer => {
      const jwt = this.authService.getToken();
      if (!jwt) {
        observer.error(new Error('JWT manquant, impossible de se connecter au WS'));
        return;
      }
      // On n’envoie plus de XSRF-TOKEN ici
      this.client.connectHeaders = {
        // selon votre config backend, gardez Authorization ou X-Auth-Token
        Authorization: `Bearer ${jwt}`
      };
      this.client.onConnect = frame => {
        observer.next(frame);
        observer.complete();
      };
      this.client.onStompError = frame => {
        observer.error(new Error(`STOMP ERROR ${frame.headers['message']}`));
      };
      this.client.activate();
    });
  }
  disconnect() {
    this.client.deactivate();
  }
  subscribe(topic, cb) {
    this.client.subscribe(topic, message => {
      cb(JSON.parse(message.body));
    });
  }
  send(destination, payload) {
    this.client.publish({
      destination,
      body: JSON.stringify(payload)
    });
  }
  static {
    this.ɵfac = function WebSocketService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WebSocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: WebSocketService,
      factory: WebSocketService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3077:
/*!*****************************************************************!*\
  !*** ./src/app/admin-page/guards/GlobalUrlEncoderSerializer.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalUrlEncoderSerializer: () => (/* binding */ GlobalUrlEncoderSerializer)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 95072);

class GlobalUrlEncoderSerializer {
  constructor() {
    this.defaultSerializer = new _angular_router__WEBPACK_IMPORTED_MODULE_0__.DefaultUrlSerializer();
    this.ENCODED_PREFIX = 't_';
    // Liste des chemins où on encode l'ID numérique
    this.TARGET_PATHS = ['detail-boutique', 'detail-produit', 'detail-client', 'detail-stock', 'facture-proforma-details', 'userPermission', 'facture-reel-details', 'detail-entreprise'];
  }
  parse(url) {
    const [baseUrl, fragment] = url.split('#');
    const [path, queryParams] = baseUrl.split('?');
    const decodedPath = path.split('/').map((segment, index, segments) => this.decodeSegmentIfNeeded(segment, segments, index)).join('/');
    const decodedQuery = queryParams ? queryParams.split('&').map(param => {
      const [key, value] = param.split('=');
      return [this.decodeSimple(key), value ? this.decodeSimple(value) : ''].join('=');
    }).join('&') : undefined;
    let fullUrl = decodedPath;
    if (decodedQuery) fullUrl += `?${decodedQuery}`;
    if (fragment) fullUrl += `#${fragment}`;
    return this.defaultSerializer.parse(fullUrl);
  }
  serialize(tree) {
    const rawUrl = this.defaultSerializer.serialize(tree);
    const [baseUrl, fragment] = rawUrl.split('#');
    const [path, queryParams] = baseUrl.split('?');
    const encodedPath = path.split('/').map((segment, index, segments) => this.encodeSegmentIfNeeded(segment, segments, index)).join('/');
    const encodedQuery = queryParams ? queryParams.split('&').map(param => {
      const [key, value] = param.split('=');
      return [this.encodeSimple(key), value ? this.encodeSimple(value) : ''].join('=');
    }).join('&') : undefined;
    let fullUrl = encodedPath;
    if (encodedQuery) fullUrl += `?${encodedQuery}`;
    if (fragment) fullUrl += `#${fragment}`;
    return fullUrl;
  }
  decodeSegmentIfNeeded(segment, segments, index) {
    if (!segment?.startsWith(this.ENCODED_PREFIX)) return segment;
    const encodedContent = segment.substring(this.ENCODED_PREFIX.length);
    try {
      return decodeURIComponent(atob(encodedContent));
    } catch {
      return segment;
    }
  }
  encodeSegmentIfNeeded(segment, segments, index) {
    if (!segment) return segment;
    // On cible uniquement l'ID qui suit un chemin spécifique
    if (index > 0 && this.TARGET_PATHS.includes(segments[index - 1]) && /^\d+$/.test(segment)) {
      return `${this.ENCODED_PREFIX}${btoa(encodeURIComponent(segment))}`;
    }
    return segment;
  }
  encodeSimple(value) {
    return value;
  }
  decodeSimple(value) {
    return value;
  }
}

/***/ }),

/***/ 65610:
/*!********************************************************!*\
  !*** ./src/app/admin-page/guards/ModuleAccessGuard.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleAccessGuard: () => (/* binding */ ModuleAccessGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _SERVICES_Module_Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SERVICES/Module-Service */ 84173);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);






class ModuleAccessGuard {
  constructor(moduleService, router, snackBar) {
    this.moduleService = moduleService;
    this.router = router;
    this.snackBar = snackBar;
  }
  canActivate(route) {
    const codeModule = route.data['codeModule'];
    if (!codeModule) {
      console.error('Aucun codeModule spécifié dans la route');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.router.parseUrl('/'));
    }
    return this.moduleService.getModulesEntreprise().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(modules => {
      const module = modules.find(m => m.code === codeModule);
      if (module && module.actif) {
        return true;
      } else {
        this.snackBar.open('Accès refusé : module inactif ou essai terminé.', 'Fermer', {
          duration: 5000
        });
        return this.router.parseUrl('/');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      console.error('Erreur de vérification du module', err);
      this.snackBar.open('Erreur lors de la vérification du module.', 'Fermer', {
        duration: 3000
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.router.parseUrl('/'));
    }));
  }
  static {
    this.ɵfac = function ModuleAccessGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ModuleAccessGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_SERVICES_Module_Service__WEBPACK_IMPORTED_MODULE_0__.ModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: ModuleAccessGuard,
      factory: ModuleAccessGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 748:
/*!*************************************************!*\
  !*** ./src/app/admin-page/guards/auth.guard.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SERVICES/users.service */ 88026);




const authGuard = (route, state) => {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  const usersService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService);
  return usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(token => {
    if (token) {
      return true;
    } else {
      router.navigate(['/connexion']);
      return false;
    }
  }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => {
    router.navigate(['/connexion']);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false);
  }));
};

/***/ }),

/***/ 50540:
/*!*************************************************!*\
  !*** ./src/app/admin-page/guards/guestGuard.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   guestGuard: () => (/* binding */ guestGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SERVICES/users.service */ 88026);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59452);




const guestGuard = (route, state) => {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  const usersService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService);
  return usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(token => {
    if (token) {
      router.navigate(['/analytics']);
      return false;
    } else {
      return true;
    }
  }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => {
    // En cas d’erreur, on considère pas connecté donc accès autorisé
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(true);
  }));
};

/***/ }),

/***/ 84892:
/*!************************************************!*\
  !*** ./src/app/admin-page/guards/roleGuard.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   roleGuard: () => (/* binding */ roleGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SERVICES/users.service */ 88026);




const roleGuard = () => {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  const usersService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService);
  return usersService.getUserInfo().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(user => {
    const role = user.roleType;
    const permissions = user.permissions || [];
    const hasAccess = role === 'ADMIN' || role === 'MANAGER' || permissions.includes('GERER_UTILISATEURS');
    if (hasAccess) {
      return true;
    }
    router.navigate(['/unauthorized']);
    return false;
  }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => {
    router.navigate(['/unauthorized']);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false);
  }));
};

/***/ }),

/***/ 13348:
/*!*******************************************************************!*\
  !*** ./src/app/admin-page/payment-form/payment-form.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentFormComponent: () => (/* binding */ PaymentFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MODELS/customNumberPipe */ 96115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_Module_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SERVICES/Module-Service */ 84173);









function PaymentFormComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
function PaymentFormComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.successMessage, " ");
  }
}
function PaymentFormComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Paiement en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function PaymentFormComponent_div_5_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const module_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](module_r2.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, module_r2.prix), " CFA");
  }
}
function PaymentFormComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 16)(7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, PaymentFormComponent_div_5_div_13_Template, 6, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 21)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Sous-total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 21)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Taxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 22)(28, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Total d\u00FB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 24)(34, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\uD83D\uDD12");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Paiement s\u00E9curis\u00E9 SSL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.planDetails.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 7, ctx_r0.planDetails.total), "\u00A0CFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("/ ", ctx_r0.planDetails.duration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.planDetails.pricePerModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 9, ctx_r0.planDetails.subtotal), " CFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 11, ctx_r0.planDetails.taxes), " CFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 13, ctx_r0.planDetails.total), "\u00A0CFA");
  }
}
function PaymentFormComponent_form_6_img_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 78);
  }
}
function PaymentFormComponent_form_6_img_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 79);
  }
}
function PaymentFormComponent_form_6_img_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 80);
  }
}
function PaymentFormComponent_form_6_img_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 81);
  }
}
function PaymentFormComponent_form_6_img_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 82);
  }
}
function PaymentFormComponent_form_6_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const module_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", module_r4.nom, " ");
  }
}
function PaymentFormComponent_form_6_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Num\u00E9ro de carte invalide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PaymentFormComponent_form_6_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Format MM/AA requis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PaymentFormComponent_form_6_option_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", c_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r5.name);
  }
}
function PaymentFormComponent_form_6_span_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 85);
  }
}
function PaymentFormComponent_form_6_span_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\uD83D\uDD12");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PaymentFormComponent_form_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 26)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Informations de paiement");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Moyen de paiement");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 27)(6, "div", 28)(7, "div", 29)(8, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "image", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "svg", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "image", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](14, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, PaymentFormComponent_form_6_img_15_Template, 1, 0, "img", 36)(16, PaymentFormComponent_form_6_img_16_Template, 1, 0, "img", 37)(17, PaymentFormComponent_form_6_img_17_Template, 1, 0, "img", 38)(18, PaymentFormComponent_form_6_img_18_Template, 1, 0, "img", 39)(19, PaymentFormComponent_form_6_img_19_Template, 1, 0, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "div", 45)(28, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 47)(30, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 49)(33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Module(s) inclus");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, PaymentFormComponent_form_6_div_36_Template, 2, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 49)(39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Num\u00E9ro de carte ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 54)(44, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function PaymentFormComponent_form_6_Template_input_input_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.formatCardNumber($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "\uD83D\uDCB3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, PaymentFormComponent_form_6_div_47_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 58)(49, "div", 59)(50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Date d'expiration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function PaymentFormComponent_form_6_Template_input_input_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.formatExpDate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, PaymentFormComponent_form_6_div_55_Template, 2, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 61)(57, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "CVC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 54)(62, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function PaymentFormComponent_form_6_Template_input_input_62_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.onCvcInput($event));
    })("focus", function PaymentFormComponent_form_6_Template_input_focus_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.flipCard(true));
    })("blur", function PaymentFormComponent_form_6_Template_input_blur_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.flipCard(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "\u2753");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 49)(66, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Nom du titulaire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function PaymentFormComponent_form_6_Template_input_input_70_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.formatCardHolderName($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 49)(72, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "E-mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Adresse de facturation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 49)(80, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Pays ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](85, PaymentFormComponent_form_6_option_85_Template, 2, 2, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 68)(87, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Adresse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 49)(93, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Ville ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "J'accepte les ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "conditions d'utilisation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentFormComponent_form_6_Template_button_click_104_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](105, PaymentFormComponent_form_6_span_105_Template, 1, 0, "span", 76)(106, PaymentFormComponent_form_6_span_106_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](109, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    let tmp_16_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.paymentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.cardType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.cardType.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r0.cardType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "mastercard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "visa");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "amex");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "discover");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.cardNumberDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.cardExpiryDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.cardNameDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.cardType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.cardCvcDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.planDetails.pricePerModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx_r0.paymentForm.get("numeroCarte")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx_r0.paymentForm.get("numeroCarte")) == null ? null : tmp_15_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_16_0 = ctx_r0.paymentForm.get("dateExpiration")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r0.paymentForm.get("dateExpiration")) == null ? null : tmp_16_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.countries);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.paymentForm.invalid || ctx_r0.isSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isSubmitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.isSubmitting ? "Traitement en cours..." : "Payer " + _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](109, 21, ctx_r0.planDetails == null ? null : ctx_r0.planDetails.total) + " CFA", " ");
  }
}
class PaymentFormComponent {
  constructor(fb, route, router, moduleService, cdr) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.moduleService = moduleService;
    this.cdr = cdr;
    this.planType = '';
    this.planDetails = null;
    this.isLoading = false;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    this.errorMessage = '';
    this.successMessage = '';
    this.isSubmitting = false;
    this.allSucceeded = true;
    this.paymentError = null;
    this.activationCounter = 0; // Ajouté
    this.totalModules = 0; // Ajouté
    this.cardNumberDisplay = '•••• •••• •••• ••••';
    this.cardExpiryDisplay = '••/••';
    this.cardNameDisplay = 'NOM TITULAIRE';
    this.cardCvcDisplay = '•••';
    this.cardFlipped = false;
    this.countries = [{
      code: 'ML',
      name: 'Mali'
    }, {
      code: 'CI',
      name: 'Côte d\'Ivoire'
    }, {
      code: 'SN',
      name: 'Sénégal'
    }];
    this.cardPreview = {};
    this.cardType = 'inconnue';
  }
  ngOnInit() {
    this.paymentForm = this.fb.group({
      nomModule: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      dureeMois: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      numeroCarte: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[\d\s]{16,19}$/)]],
      dateExpiration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^\d{3,4}$/)]],
      nomCompletProprietaire: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      emailProprietaireCarte: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      pays: ['ML', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      adresse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      ville: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.requiredTrue]
    });
    this.route.paramMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)((prev, curr) => prev.get('plan') === curr.get('plan'))).subscribe(params => {
      this.planType = this.route.snapshot.paramMap.get('plan') || '';
      this.resetPlanDetails();
      this.loadPlanDetails();
    });
  }
  resetPlanDetails() {
    this.planDetails = null;
    // this.isLoading = true;
    this.cardPreview = {};
    if (this.paymentForm) {
      this.paymentForm.reset({
        pays: 'ML',
        acceptTerms: false
      });
    }
    this.cdr.detectChanges();
    this.cardNumberDisplay = '•••• •••• •••• ••••';
    this.cardExpiryDisplay = '••/••';
    this.cardNameDisplay = 'NOM TITULAIRE';
    this.cardCvcDisplay = '•••';
    this.cardFlipped = false;
  }
  loadPlanDetails() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.moduleService.getModulesEntreprise().subscribe({
      next: modules => {
        const paidModules = modules.filter(m => m.payant);
        const totalMensuel = paidModules.reduce((sum, module) => sum + (module.prix || 0), 0);
        let name = '';
        let duration = '';
        let subtotal = 0;
        if (this.planType === 'TCHAKEDA_PLUS') {
          name = 'Tchakeda Plus';
          duration = '3 mois';
          subtotal = totalMensuel * 3;
        } else if (this.planType === 'PRO') {
          name = 'Pro';
          duration = '1 an';
          subtotal = totalMensuel * 12 * 0.9;
        }
        this.planDetails = {
          name,
          duration,
          pricePerModule: paidModules,
          subtotal,
          taxes: 0,
          total: subtotal
        };
        if (this.paymentForm) {
          this.paymentForm.patchValue({
            nomModule: this.planType,
            dureeMois: this.planType === 'TCHAKEDA_PLUS' ? 3 : 12
          });
        }
        // this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: error => {
        console.error('Error loading modules', error);
        // this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  formatExpDate(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, '');
    if (value.length > 4) value = value.substring(0, 4);
    if (value.length > 2) value = value.replace(/^(\d{2})/, '$1/');
    this.paymentForm.get('dateExpiration')?.setValue(value, {
      emitEvent: false
    });
    this.cardExpiryDisplay = value || '••/••';
  }
  // Ajoutez cette nouvelle méthode pour le nom
  formatCardHolderName(event) {
    const input = event.target;
    const value = input.value;
    this.cardNameDisplay = value.toUpperCase() || 'NOM TITULAIRE';
  }
  // Ajoutez cette méthode pour le CVC
  onCvcInput(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, '');
    if (value.length > 4) value = value.substring(0, 4);
    this.cardCvcDisplay = value || '•••';
  }
  // Ajoutez cette méthode pour retourner la carte
  flipCard(flip) {
    this.cardFlipped = flip;
  }
  onSubmit() {
    if (!this.paymentForm || this.paymentForm.invalid || !this.planDetails) return;
    // this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';
    this.activationCounter = 0;
    this.allSucceeded = true;
    this.isLoading = true;
    const formData = this.paymentForm.value;
    const modulesToActivate = this.planDetails.pricePerModule.map(mod => mod.nom);
    this.totalModules = modulesToActivate.length;
    setTimeout(() => {
      modulesToActivate.forEach(moduleName => {
        const demande = {
          nomModule: moduleName,
          dureeMois: formData.dureeMois,
          numeroCarte: formData.numeroCarte.replace(/\s/g, ''),
          cvc: formData.cvc,
          dateExpiration: formData.dateExpiration.replace('/', ''),
          nomCompletProprietaire: formData.nomCompletProprietaire,
          emailProprietaireCarte: formData.emailProprietaireCarte,
          pays: formData.pays,
          adresse: formData.adresse,
          ville: formData.ville
        };
        this.moduleService.activerModule(demande).subscribe({
          next: response => {
            this.activationCounter++;
            this.successMessage = response;
            this.checkIfAllDone();
            this.isLoading = false;
          },
          error: err => {
            this.activationCounter++;
            this.errorMessage = err.message;
            this.allSucceeded = false;
            this.checkIfAllDone();
            this.isLoading = false;
          }
        });
      });
    }, 3000);
  }
  // Ajoutez cette nouvelle méthode
  checkIfAllDone() {
    if (this.activationCounter === this.totalModules) {
      setTimeout(() => {
        // this.isSubmitting = false;
        if (this.allSucceeded) {
          // Réinitialiser le formulaire
          this.paymentForm.reset({
            pays: 'ML',
            acceptTerms: false
          });
          // Réappliquer les valeurs du plan
          if (this.planDetails) {
            this.paymentForm.patchValue({
              nomModule: this.planType,
              dureeMois: this.planType === 'TCHAKEDA_PLUS' ? 3 : 12
            });
          }
          this.cardPreview = {};
          this.successMessage = ''; // Effacer le message de succès
          this.cardNumberDisplay = '•••• •••• •••• ••••';
          this.cardExpiryDisplay = '••/••';
          this.cardNameDisplay = 'NOM TITULAIRE';
          this.cardCvcDisplay = '•••';
          this.cardFlipped = false;
        }
      }, 3000);
    }
  }
  handleError(err) {
    console.error('Payment error', err);
    if (err.error instanceof ErrorEvent) {
      // Erreur client
      this.errorMessage = err.error.message;
    } else {
      // Erreur serveur
      this.errorMessage = this.getUserFriendlyError(err);
    }
    // Effacer le message après 5 secondes
    setTimeout(() => {
      this.errorMessage = ''; // Utiliser une chaîne vide au lieu de null
    }, 5000);
  }
  getUserFriendlyError(error) {
    if (error.status === 402) {
      return 'Paiement refusé. Vérifiez vos informations bancaires.';
    } else if (error.status === 400) {
      return 'Données de paiement invalides.';
    } else if (error.status === 403) {
      return 'Action non autorisée. Seuls les administrateurs peuvent activer des modules.';
    } else if (error.status === 404) {
      return 'Module non trouvée.';
    } else if (error.status === 500) {
      return 'Erreur interne du serveur. Veuillez réessayer plus tard.';
    }
    return 'Une erreur inattendue est survenue. Veuillez réessayer.';
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  formatCardNumber(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, '');
    if (value.length > 16) value = value.substring(0, 16);
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    this.paymentForm.get('numeroCarte')?.setValue(formattedValue, {
      emitEvent: false
    });
    this.cardNumberDisplay = formattedValue || '•••• •••• •••• ••••';
    this.cardType = this.detectCardType(value);
  }
  detectCardType(cardNumber) {
    if (/^4/.test(cardNumber)) return 'visa';
    if (/^5[1-5]/.test(cardNumber) || /^2(2[2-9]|[3-6][0-9]|7[01]|720)/.test(cardNumber)) return 'mastercard';
    if (/^3[47]/.test(cardNumber)) return 'amex';
    if (/^6(?:011|5)/.test(cardNumber)) return 'discover';
    return 'inconnue';
  }
  static {
    this.ɵfac = function PaymentFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PaymentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_SERVICES_Module_Service__WEBPACK_IMPORTED_MODULE_1__.ModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PaymentFormComponent,
      selectors: [["app-payment-form"]],
      decls: 7,
      vars: 5,
      consts: [[1, "toast-container"], ["class", "alert alert-danger toast-message-danger", 4, "ngIf"], ["class", "alert alert-success toast-message-success", 4, "ngIf"], ["class", "loading-overlay", 4, "ngIf"], [1, "payment-container"], ["class", "summary-card", 4, "ngIf"], ["class", "form-card", 3, "formGroup", 4, "ngIf"], [1, "alert", "alert-danger", "toast-message-danger"], [1, "alert", "alert-success", "toast-message-success"], [1, "loading-overlay"], [1, "loading-content"], [1, "spinner"], [1, "summary-card"], [1, "brand-header"], [1, "logo-placeholder"], [1, "divider"], [1, "price-display"], [1, "amount"], [1, "period"], [1, "summary-list"], ["class", "list-item", 4, "ngFor", "ngForOf"], [1, "list-item"], [1, "total-container"], [1, "total-amount"], [1, "security-badges"], [1, "lock-icon"], [1, "form-card", 3, "formGroup"], [1, "flip-card"], [1, "flip-card-inner"], [1, "flip-card-front", 3, "ngClass"], [1, "heading_8264"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "40px", "height", "40px", "viewBox", "0 0 50 50", 0, "xml", "space", "preserve", 1, "chip"], ["id", "image0", "width", "50", "height", "50", "x", "0", "y", "0", "href", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\n                  AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOY\n                  fEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSW\n                  ekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GS\n                  e0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOW\n                  ekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bf\n                  u3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWua\n                  fUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1\n                  lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrb\n                  tnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOh\n                  g0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU\n                  /f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dE\n                  orDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2Ng\n                  GAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVg\n                  OkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3d\n                  I2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6a\n                  lKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkI\n                  JVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0F\n                  qBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM\n                  1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGm\n                  BSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCET\n                  amiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdC\n                  S24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpj\n                  cmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIw\n                  MjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy\n                  LTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "20px", "height", "20px", "viewBox", "0 0 50 50", 0, "xml", "space", "preserve", 1, "contactless"], ["id", "image0", "width", "50", "height", "50", "x", "0", "y", "0", "href", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN\n                  AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ\n                  cwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IEzgIwaKTAAADDklEQVRYw+1XS0iUURQ+f5qPyjQf\n                  lGRFEEFK76koKGxRbWyVVLSOgsCgwjZBJJYuKogSIoOonUK4q3U0WVBWFPZYiIE6kuArG3VGzK/F\n                  fPeMM/MLt99/NuHdfPd888/57jn3nvsQWWj/VcMlvMMd5KRTogqx9iCdIjUUmcGR9ImUYowyP3xN\n                  GQJoRLVaZ2DaZf8kyjEJALhI28ELioyiwC+Rc3QZwRYyO/DH51hQgWm6DMIh10KmD4u9O16K49it\n                  VoPOAmcGAWWOepXIRScAoJZ2Frro8oN+EyTT6lWkkg6msZfMSR35QTJmjU0g15tIGSJ08ZZMJkJk\n                  HpNZgSkyXosS13TkJpZ62mPIJvOSzC1bp8vRhhCakEk7G9/o4gmZdbpsTcKu0m63FbnBP9Qrc15z\n                  bkbemfgNDtEOI8NO5L5O9VYyRYgmJayZ9nPaxZrSjW4+F6Uw9yQqIiIZwhp2huQTf6OIvCZyGM6g\n                  DJBZbyXifJXr7FZjGXsdxADxI7HUJFB6iWvsIhFpkoiIiGTJfjJfiCuJg2ZEspq9EHGVpYgzKqwJ\n                  qSAOEwuJQ/pxPvE3cYltJCLdxBLiSKKIE5HxJKcTRNeadxfhDiuYw44zVs1dxKwRk/uCxIiQkxKB\n                  sSctRVAge9g1E15EHE6yRUaJecRxcWlukdRIbGFOSZCMWQA/iWauIP3slREHXPyliqBcrrD71Amz\n                  Z+rD1Mt2Yr8TZc/UR4/YtFnbijnHi3UrN9vKQ9rPaJf867ZiaqDB+czeKYmd3pNa6fuI75MiC0uX\n                  XSR5aEMf7s7a6r/PudVXkjFb/SsrCRfROk0Fx6+H1i9kkTGn/E1vEmt1m089fh+RKdQ5O+xNJPUi\n                  cUIjO0Dm7HwvErEr0YxeibL1StSh37STafE4I7zcBdRq1DiOkdmlTJVnkQTBTS7X1FYyvfO4piaI\n                  nKbDCDaT2anLudYXCRFsQBgAcIF2/Okwgvz5+Z4tsw118dzruvIvjhTB+HOuWy8UvovEH6beitBK\n                  xDyxm9MmISKCWrzB7bSlaqGlsf0FC0gMjzTg6GgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDIt\n                  MTNUMDg6MTk6NTYrMDA6MDCjlq7LAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTEzVDA4OjE5\n                  OjU2KzAwOjAw0ssWdwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xM1QwODoxOTo1Nisw\n                  MDowMIXeN6gAAAAASUVORK5CYII="], [3, "ngSwitch"], ["class", "logo", "src", "assets/card/mastercard.png", "alt", "Mastercard", 4, "ngSwitchCase"], ["class", "logo", "src", "assets/card/visa.png", "alt", "Visa", 4, "ngSwitchCase"], ["class", "logo", "src", "assets/card/amex.png", "alt", "American Express", 4, "ngSwitchCase"], ["class", "logo", "src", "assets/card/discover.svg", "alt", "Discover", 4, "ngSwitchCase"], ["class", "logo", "src", "assets/card/default.png", "alt", "Carte", 4, "ngSwitchDefault"], [1, "number"], [1, "date_8264"], [1, "name"], [1, "flip-card-back", 3, "ngClass"], [1, "strip"], [1, "mstrip"], [1, "sstrip"], [1, "code"], [1, "form-group"], [1, "modules-list"], [4, "ngFor", "ngForOf"], ["type", "hidden", "formControlName", "dureeMois"], [2, "color", "#ff0000"], [1, "input-with-icon"], ["formControlName", "numeroCarte", "placeholder", "1234 5678 9012 3456", 3, "input"], [1, "input-icon"], ["class", "error-message", 4, "ngIf"], [1, "row"], [1, "form-group", "exp-field"], ["formControlName", "dateExpiration", "placeholder", "MM/AA", "maxlength", "5", 3, "input"], [1, "form-group", "cvc-field"], ["formControlName", "cvc", "placeholder", "123", "type", "password", "maxlength", "4", 3, "input", "focus", "blur"], ["title", "Code de s\u00E9curit\u00E9 au dos de la carte", 1, "input-icon"], ["formControlName", "nomCompletProprietaire", "placeholder", "Nom complet", 3, "input"], ["type", "email", "formControlName", "emailProprietaireCarte", "placeholder", "Votre email"], ["formControlName", "pays"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "address-field"], ["formControlName", "adresse", "placeholder", "Votre adresse..."], ["formControlName", "ville", "placeholder", "Votre ville..."], [1, "checkbox-group"], ["type", "checkbox", "id", "acceptTerms", "formControlName", "acceptTerms"], ["for", "acceptTerms"], ["href", "#", 1, "terms-link"], ["type", "submit", 1, "submit-btn", 3, "click", "disabled"], ["class", "btn-spinner", 4, "ngIf"], ["class", "btn-icon", 4, "ngIf"], ["src", "assets/card/mastercard.png", "alt", "Mastercard", 1, "logo"], ["src", "assets/card/visa.png", "alt", "Visa", 1, "logo"], ["src", "assets/card/amex.png", "alt", "American Express", 1, "logo"], ["src", "assets/card/discover.svg", "alt", "Discover", 1, "logo"], ["src", "assets/card/default.png", "alt", "Carte", 1, "logo"], [1, "error-message"], [3, "value"], [1, "btn-spinner"], [1, "btn-icon"]],
      template: function PaymentFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PaymentFormComponent_div_1_Template, 2, 1, "div", 1)(2, PaymentFormComponent_div_2_Template, 2, 1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PaymentFormComponent_div_3_Template, 5, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PaymentFormComponent_div_5_Template, 38, 15, "div", 5)(6, PaymentFormComponent_form_6_Template, 110, 23, "form", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.planDetails && ctx.planDetails.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.planDetails);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchDefault, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_0__.CustomNumberPipe],
      styles: ["@charset \"UTF-8\";\n\n\n.payment-container[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 1200px;\n  margin: 2rem auto;\n  gap: 2rem;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n@media (max-width: 768px) {\n  .payment-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 2rem;\n  border-radius: 12px;\n  background: #f8f9fa;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  position: relative;\n}\n.summary-card[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  background: none;\n  border: none;\n  color: #3a86ff;\n  cursor: pointer;\n  font-size: 1.1rem;\n  padding: 0.5rem;\n}\n.summary-card[_ngcontent-%COMP%]   .brand-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.summary-card[_ngcontent-%COMP%]   .brand-header[_ngcontent-%COMP%]   .logo-placeholder[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: linear-gradient(135deg, #0672E4, #aab5c1);\n  border-radius: 8px;\n}\n.summary-card[_ngcontent-%COMP%]   .brand-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 1.5rem;\n  color: #333;\n}\n.summary-card[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #e0e0e0;\n  margin: 15px 0 0;\n}\n.summary-card[_ngcontent-%COMP%]   .price-display[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 10px 0;\n}\n.summary-card[_ngcontent-%COMP%]   .price-display[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #3a86ff;\n}\n.summary-card[_ngcontent-%COMP%]   .price-display[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #666;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.8rem 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n.summary-card[_ngcontent-%COMP%]   .summary-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.summary-card[_ngcontent-%COMP%]   .total-container[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  padding: 15px 10px;\n  background: #e8f4ff;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.summary-card[_ngcontent-%COMP%]   .total-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n.summary-card[_ngcontent-%COMP%]   .total-container[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #3a86ff;\n}\n.summary-card[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 20px;\n  color: #4caf50;\n  font-size: 0.9rem;\n}\n.summary-card[_ngcontent-%COMP%]   .security-badges[_ngcontent-%COMP%]   .lock-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.form-card[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px;\n  border-radius: 12px;\n  background: #fff;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.form-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 15px;\n  font-weight: 600;\n  color: #333;\n  font-size: 20px;\n}\n.form-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  margin-bottom: 1rem;\n  font-weight: 500;\n  color: #000;\n  font-size: 14px;\n}\n.form-card[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%] {\n  height: 180px;\n  background: linear-gradient(45deg, #5a67d8, #3a86ff);\n  border-radius: 12px;\n  padding: 1.5rem;\n  margin-bottom: 10px;\n  color: white;\n  position: relative;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.form-card[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .card-chip[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 40px;\n  background: linear-gradient(135deg, #ffd54f, #ffb300);\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3), inset 0 2px 5px rgba(255, 255, 255, 0.6), inset 0 -2px 5px rgba(0, 0, 0, 0.2);\n  border: 1px solid #e6a800;\n}\n.form-card[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", monospace;\n  font-size: 16px;\n  letter-spacing: 2px;\n  font-weight: 700;\n  color: #eee;\n  text-shadow: 1px 1px 0 #111, 2px 2px 0 #222, 3px 3px 5px rgba(0, 0, 0, 0.6);\n}\n.form-card[_ngcontent-%COMP%]   .card-preview[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  position: absolute;\n  bottom: 1.5rem;\n  left: 1.5rem;\n  right: 1.5rem;\n}\n.form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: 500;\n  color: #555;\n  font-size: 13px;\n}\n.form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  font-size: 12px;\n  transition: border-color 0.3s;\n}\n.form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3a86ff;\n  box-shadow: 0 0 0 3px rgba(58, 134, 255, 0.1);\n}\n.form-card[_ngcontent-%COMP%]   .input-with-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n.form-card[_ngcontent-%COMP%]   .input-with-icon[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 1.2rem;\n  color: #777;\n}\n.form-card[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #e53e3e;\n  font-size: 10px;\n  margin-top: 0.3rem;\n}\n.form-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n}\n.form-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .exp-field[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.form-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cvc-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.form-card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .address-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.form-card[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 1rem 0;\n}\n.form-card[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: auto;\n  margin-right: 10px;\n}\n.form-card[_ngcontent-%COMP%]   .checkbox-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #555;\n}\n.form-card[_ngcontent-%COMP%]   .terms-link[_ngcontent-%COMP%] {\n  color: #3a86ff;\n  text-decoration: underline;\n}\n.form-card[_ngcontent-%COMP%]   .terms-link[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.form-card[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 1rem;\n  background: #3a86ff;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.3s;\n  margin-top: 1.5rem;\n}\n.form-card[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n.form-card[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:disabled {\n  background: #cbd5e0;\n  cursor: not-allowed;\n}\n.form-card[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  font-size: 1.2rem;\n}\n.form-card[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1.5rem;\n  margin-top: 12px;\n}\n.form-card[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #718096;\n  padding: 0.3rem 0.8rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n.form-card[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icon[_ngcontent-%COMP%]:hover {\n  color: #3a86ff;\n  border-color: #3a86ff;\n}\n\n.loading-state[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  text-align: center;\n}\n\n.loader[_ngcontent-%COMP%] {\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.5rem 1rem;\n  background: #3498db;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n\n\n.processing-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.8);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.processing-overlay[_ngcontent-%COMP%]   .processing-spinner[_ngcontent-%COMP%] {\n  border: 5px solid #f3f3f3;\n  border-top: 5px solid #3498db;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 20px;\n}\n.processing-overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #333;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.payment-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  border: 1px solid #ffcdd2;\n  border-radius: 8px;\n  padding: 15px;\n  margin: 20px 0;\n  color: #c62828;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.payment-error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #c62828;\n  color: white;\n  border: none;\n  padding: 8px 15px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n\n\n.form-card.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.modules-list[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  border-radius: 4px;\n  padding: 10px;\n  max-height: 150px;\n  overflow-y: auto;\n}\n.modules-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 5px 0;\n  border-bottom: 1px dashed #f0f0f0;\n}\n.modules-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 60px;\n  right: 35px;\n  z-index: 9999;\n}\n\n.toast-message-success[_ngcontent-%COMP%] {\n  background-color: #77eb87;\n  border: 1px solid #ACCEBC;\n  color: #000000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n.toast-message-danger[_ngcontent-%COMP%] {\n  background-color: #F3D8DA;\n  border: 1px solid #E7B1B6;\n  color: #000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n.toast-message-warning[_ngcontent-%COMP%] {\n  background-color: #F3D8DA;\n  border: 1px solid #E7B1B6;\n  color: #000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeInOut {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  20% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(2px); \n\n  }\n}\n.disabled-form[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  pointer-events: none;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 18px;\n  z-index: 1000;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid white;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n\n.flip-card[_ngcontent-%COMP%] {\n  background-color: transparent;\n  width: 240px;\n  height: 154px;\n  perspective: 1000px;\n  color: white;\n  margin-bottom: 15px;\n}\n\n.heading_8264[_ngcontent-%COMP%] {\n  position: absolute;\n  letter-spacing: 0.2em;\n  font-size: 0.5em;\n  top: 2em;\n  right: 15px;\n  color: #eee;\n  text-shadow: 1px 1px 0 #111, 2px 2px 0 #222, 3px 3px 5px rgba(0, 0, 0, 0.6);\n}\n\n.logo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6.7em;\n  right: 15px;\n  width: 50px;\n  height: auto;\n}\n\n.chip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 17px;\n  left: 1.5em;\n}\n\n.contactless[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3.5em;\n  right: 15px;\n}\n\n.number[_ngcontent-%COMP%] {\n  position: absolute;\n  font-weight: bold;\n  font-size: 0.6em;\n  top: 8.3em;\n  left: 1.6em;\n  font-weight: 700;\n  color: #eee;\n  text-shadow: 1px 1px 0 #111, 2px 2px 0 #222, 3px 3px 5px rgba(0, 0, 0, 0.6);\n}\n\n.valid_thru[_ngcontent-%COMP%] {\n  position: absolute;\n  font-weight: bold;\n  top: 635.8em;\n  font-size: 0.01em;\n  left: 140.3em;\n}\n\n.date_8264[_ngcontent-%COMP%] {\n  position: absolute;\n  font-weight: bold;\n  font-size: 0.5em;\n  top: 13.6em;\n  left: 3.2em;\n  color: #eee;\n  text-shadow: 1px 1px 0 #111, 2px 2px 0 #222, 3px 3px 5px rgba(0, 0, 0, 0.6);\n}\n\n.name[_ngcontent-%COMP%] {\n  position: absolute;\n  font-weight: bold;\n  font-size: 0.5em;\n  top: 16.1em;\n  left: 2em;\n  color: #eee;\n  text-shadow: 1px 1px 0 #111, 2px 2px 0 #222, 3px 3px 5px rgba(0, 0, 0, 0.6);\n}\n\n.strip[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: black;\n  width: 15em;\n  height: 1.5em;\n  top: 2.4em;\n  background: repeating-linear-gradient(45deg, #303030, #303030 10px, #202020 10px, #202020 20px);\n}\n\n.mstrip[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgb(255, 255, 255);\n  width: 8em;\n  height: 0.8em;\n  top: 5em;\n  left: 0.8em;\n  border-radius: 2.5px;\n}\n\n.sstrip[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgb(255, 255, 255);\n  width: 4.1em;\n  height: 0.8em;\n  top: 5em;\n  left: 10em;\n  border-radius: 2.5px;\n}\n\n.code[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n  margin: 0.2em;\n  color: black;\n}\n\n.flip-card-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n}\n\n.flip-card[_ngcontent-%COMP%]:hover   .flip-card-inner[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n\n.flip-card-front[_ngcontent-%COMP%], .flip-card-back[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  border-radius: 1rem;\n}\n\n.flip-card-front[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;\n  background-color: #171717;\n}\n\n.flip-card-front[_ngcontent-%COMP%]::before {\n  content: \"Tchakeda\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(-30deg);\n  font-size: 60px;\n  font-weight: bold;\n  color: transparent;\n  background: linear-gradient(120deg, rgba(255, 255, 255, 0.1) 25%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0.125) 75%);\n  background-size: 200% 100%;\n  -webkit-background-clip: text;\n  background-clip: text;\n  animation: _ngcontent-%COMP%_waveLight 9s linear infinite;\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n  opacity: 0.1;\n}\n\n@keyframes _ngcontent-%COMP%_waveLight {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.flip-card-back[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;\n  background-color: #171717;\n  transform: rotateY(180deg);\n}\n\n\n\n.flip-card-front.unknown[_ngcontent-%COMP%], \n.flip-card-back.unknown[_ngcontent-%COMP%] {\n  background-color: #171717;\n}\n\n\n\n.flip-card-front.visa[_ngcontent-%COMP%], \n.flip-card-back.visa[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1434CB, #0a2a83); \n\n  color: white;\n}\n\n\n\n.flip-card-front.mastercard[_ngcontent-%COMP%], \n.flip-card-back.mastercard[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #eb001b, #f79e1b); \n\n  color: white;\n}\n\n\n\n.flip-card-front.amex[_ngcontent-%COMP%], \n.flip-card-back.amex[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #2e77bb, #1f4d7a); \n\n  color: white;\n}\n\n\n\n.flip-card-front.discover[_ngcontent-%COMP%], \n.flip-card-back.discover[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f58220, #a44700); \n\n  color: white;\n}\n\n.heading_8264[_ngcontent-%COMP%], .number[_ngcontent-%COMP%], .name[_ngcontent-%COMP%], .date_8264[_ngcontent-%COMP%] {\n  color: inherit; \n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFFaEIsZ0NBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLDREQUFBO0FBQUY7QUFFRTtFQVBGO0lBUUksc0JBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUFKO0FBSUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFEQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQUtJO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBSE47QUFPRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBTEo7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQU5KO0FBUUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTk47QUFTSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQVBOO0FBWUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBVk47QUFZTTtFQUNFLG1CQUFBO0FBVlI7QUFlRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFiSjtBQWVJO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFiTjtBQWdCSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNB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cm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLyogcGF5bWVudC1mb3JtLmNvbXBvbmVudC5zY3NzICovXG4ucGF5bWVudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAycmVtIGF1dG87XG4gIGdhcDogMnJlbTtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuLnN1bW1hcnktY2FyZCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLDAsMCwwLjA1KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgLmJhY2stYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxcmVtO1xuICAgIGxlZnQ6IDFyZW07XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICMzYTg2ZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgfVxuXG4gIC5icmFuZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgLy8gbWFyZ2luLXRvcDogMXJlbTtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgXG4gICAgLmxvZ28tcGxhY2Vob2xkZXIge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDY3MkU0LCAjYWFiNWMxKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB9XG4gICAgXG4gICAgaDIge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuICB9XG5cbiAgLmRpdmlkZXIge1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gICAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgfVxuXG4gIC5wcmljZS1kaXNwbGF5IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgXG4gICAgLmFtb3VudCB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICMzYTg2ZmY7XG4gICAgfVxuICAgIFxuICAgIC5wZXJpb2Qge1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICB9XG4gIH1cblxuICAuc3VtbWFyeS1saXN0IHtcbiAgICAubGlzdC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiAwLjhyZW0gMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xuICAgICAgXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50b3RhbC1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNlOGY0ZmY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgaDMge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cbiAgICBcbiAgICAudG90YWwtYW1vdW50IHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogIzNhODZmZjtcbiAgICB9XG4gIH1cblxuICAuc2VjdXJpdHktYmFkZ2VzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBjb2xvcjogIzRjYWY1MDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBcbiAgICAubG9jay1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbiAgfVxufVxuXG4uZm9ybS1jYXJkIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMDUpO1xuICBcbiAgaDIge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICBcbiAgaDMge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIFxuICAuY2FyZC1wcmV2aWV3IHtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzVhNjdkOCwgIzNhODZmZik7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIFxuICAgIC5jYXJkLWNoaXAge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZkNTRmLCAjZmZiMzAwKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgIGJveC1zaGFkb3c6XG4gICAgICAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjMpLFxuICAgICAgaW5zZXQgMCAycHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSxcbiAgICAgIGluc2V0IDAgLTJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2YTgwMDtcbiAgICAgIFxuICAgIH1cbiAgICBcbiAgICAuY2FyZC1udW1iZXIge1xuICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICNlZWU7XG4gICAgICB0ZXh0LXNoYWRvdzpcbiAgICAgIDFweCAxcHggMCAjMTExLFxuICAgICAgMnB4IDJweCAwICMyMjIsXG4gICAgICAzcHggM3B4IDVweCByZ2JhKDAsMCwwLDAuNik7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkLWZvb3RlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAxLjVyZW07XG4gICAgICBsZWZ0OiAxLjVyZW07XG4gICAgICByaWdodDogMS41cmVtO1xuICAgIH1cbiAgfVxuICBcbiAgLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICBsYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gICAgXG4gICAgaW5wdXQsIHNlbGVjdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDAuOHJlbTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcztcbiAgICAgIFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzNhODZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNTgsIDEzNCwgMjU1LCAwLjEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmlucHV0LXdpdGgtaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICAgIC5pbnB1dC1pY29uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGNvbG9yOiAjNzc3O1xuICAgIH1cbiAgfVxuICBcbiAgLmVycm9yLW1lc3NhZ2Uge1xuICAgIGNvbG9yOiAjZTUzZTNlO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW07XG4gIH1cbiAgXG4gIC5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gZ2FwOiAxcmVtO1xuICAgIFxuICAgIC5leHAtZmllbGQgeyBmbGV4OiAyOyB9XG4gICAgLmN2Yy1maWVsZCB7IGZsZXg6IDE7IH1cbiAgICAuYWRkcmVzcy1maWVsZCB7IGZsZXg6IDE7IH1cbiAgfVxuICBcbiAgLmNoZWNrYm94LWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgXG4gICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICBsYWJlbCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICB9XG4gIH1cbiAgXG4gIC50ZXJtcy1saW5rIHtcbiAgICBjb2xvcjogIzNhODZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIC5zdWJtaXQtYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjM2E4NmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMjU2M2ViO1xuICAgIH1cbiAgICBcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6ICNjYmQ1ZTA7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cbiAgICBcbiAgICAuYnRuLWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC5wYXltZW50LW1ldGhvZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBcbiAgICAucGF5bWVudC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgY29sb3I6ICM3MTgwOTY7XG4gICAgICBwYWRkaW5nOiAwLjNyZW0gMC44cmVtO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMzYTg2ZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzNhODZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxvYWRpbmctc3RhdGUsIC5lcnJvci1zdGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2FkZXIge1xuICBib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgIzM0OThkYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi5lcnJvci1zdGF0ZSBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBwYXltZW50LWZvcm0uY29tcG9uZW50LnNjc3MgKi9cbi5wcm9jZXNzaW5nLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbiAgXG4gIC5wcm9jZXNzaW5nLXNwaW5uZXIge1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmM2YzZjM7XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMzNDk4ZGI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLnBheW1lbnQtZXJyb3Ige1xuICBiYWNrZ3JvdW5kOiAjZmZlYmVlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZjZGQyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMjBweCAwO1xuICBjb2xvcjogI2M2MjgyODtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjYzYyODI4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4vKiBEw6lzYWN0aXZlciBsZSBmb3JtdWxhaXJlIHBlbmRhbnQgbGUgdHJhaXRlbWVudCAqL1xuLmZvcm0tY2FyZC5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5tb2R1bGVzLWxpc3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBcbiAgZGl2IHtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNmMGYwZjA7XG4gICAgXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi50b2FzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjBweDtcbiAgcmlnaHQ6IDM1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi50b2FzdC1tZXNzYWdlLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdlYjg3O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQUNDRUJDO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluT3V0IDRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuICBcbi8vdG9hc3Qgc3VjY2Vzc1xuLnRvYXN0LW1lc3NhZ2UtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRDhEQTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U3QjFCNjtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVJbk91dCA0cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbn1cblxuLnRvYXN0LW1lc3NhZ2Utd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0Q4REE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFN0IxQjY7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5PdXQgNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG59XG5cbiAgLy8gQWpvdXRlciBsJ2FuaW1hdGlvbiBwb3VyIHRvdXMgbGVzIHR5cGVzIGQnYWxlcnRlc1xuICAuYWxlcnQge1xuICAgIC8vIC4uLiBzdHlsZXMgZXhpc3RhbnRzXG4gICAgXG4gICAgJi13YXJuaW5nIHtcbiAgICAgIEBleHRlbmQgLmFsZXJ0O1xuICAgICAgLy8gLi4uIHN0eWxlcyBzcMOpY2lmaXF1ZXNcbiAgICB9XG4gIH1cbiAgXG4gIC8qIEFuaW1hdGlvbiBwb3VyIGZhaXJlIGFwcGFyYcOudHJlIGV0IGRpc3BhcmHDrnRyZSBsZSB0b2FzdCAqL1xuICBAa2V5ZnJhbWVzIGZhZGVJbk91dCB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICA4MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7IC8qIExlIHRvYXN0IGRpc3BhcmHDrnQgYXZlYyB1biBsw6lnZXIgbW91dmVtZW50IHZlcnMgbGUgYmFzICovXG4gICAgfVxuICB9ICBcblxuLmRpc2FibGVkLWZvcm0ge1xuICBvcGFjaXR5OiAwLjc7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vLyAubG9hZGluZy1vdmVybGF5IHtcbi8vICAgcG9zaXRpb246IGZpeGVkO1xuLy8gICB0b3A6IDA7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgIHotaW5kZXg6IDEwMDA7XG4vLyB9XG5cbi8vIC5sb2FkaW5nLWNvbnRlbnQge1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICBwYWRkaW5nOiAzMHB4O1xuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsMCwwLDAuMik7XG4vLyB9XG5cbi8vIC5zcGlubmVyIHtcbi8vICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuLy8gICBib3JkZXItbGVmdC1jb2xvcjogIzA5Zjtcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICB3aWR0aDogNDBweDtcbi8vICAgaGVpZ2h0OiA0MHB4O1xuLy8gICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuLy8gICBtYXJnaW46IDAgYXV0byAyMHB4O1xuLy8gfVxuXG4vLyBAa2V5ZnJhbWVzIHNwaW4ge1xuLy8gICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbi8vIH1cblxuLy8gLmJ0bi1zcGlubmVyIHtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICB3aWR0aDogMjBweDtcbi8vICAgaGVpZ2h0OiAyMHB4O1xuLy8gICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XG4vLyAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4vLyAgIG1hcmdpbi1yaWdodDogOHB4O1xuLy8gfVxuXG4ubG9hZGluZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG5cbi5sb2FkaW5nLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4OyBcbn1cblxuLnNwaW5uZXIge1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi8qIEZyb20gVWl2ZXJzZS5pbyBieSBQcmFhc2hvbzcgKi8gXG4uZmxpcC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiAxNTRweDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uaGVhZGluZ184MjY0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZXR0ZXItc3BhY2luZzogLjJlbTtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgdG9wOiAyZW07XG4gIHJpZ2h0OiAxNXB4O1xuICBjb2xvcjogI2VlZTtcbiAgdGV4dC1zaGFkb3c6XG4gIDFweCAxcHggMCAjMTExLFxuICAycHggMnB4IDAgIzIyMixcbiAgM3B4IDNweCA1cHggcmdiYSgwLDAsMCwwLjYpO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2LjdlbTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gXG5cbn1cblxuLmNoaXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vIHRvcDogMi4zZW07XG4gIHRvcDogMTdweDtcbiAgbGVmdDogMS41ZW07XG59XG5cbi5jb250YWN0bGVzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzLjVlbTtcbiAgLy8gbGVmdDogMTIuNGVtO1xuICByaWdodDogMTVweDtcbn1cblxuLm51bWJlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogLjZlbTtcbiAgdG9wOiA4LjNlbTtcbiAgbGVmdDogMS42ZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZWVlO1xuICB0ZXh0LXNoYWRvdzpcbiAgICAxcHggMXB4IDAgIzExMSxcbiAgICAycHggMnB4IDAgIzIyMixcbiAgICAzcHggM3B4IDVweCByZ2JhKDAsMCwwLDAuNik7XG59XG5cbi52YWxpZF90aHJ1IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdG9wOiA2MzUuOGVtO1xuICBmb250LXNpemU6IC4wMWVtO1xuICBsZWZ0OiAxNDAuM2VtO1xufVxuXG4uZGF0ZV84MjY0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgdG9wOiAxMy42ZW07XG4gIGxlZnQ6IDMuMmVtO1xuICBjb2xvcjogI2VlZTtcbiAgdGV4dC1zaGFkb3c6XG4gIDFweCAxcHggMCAjMTExLFxuICAycHggMnB4IDAgIzIyMixcbiAgM3B4IDNweCA1cHggcmdiYSgwLDAsMCwwLjYpO1xufVxuXG4ubmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG4gIHRvcDogMTYuMWVtO1xuICBsZWZ0OiAyZW07XG4gIGNvbG9yOiAjZWVlO1xuICB0ZXh0LXNoYWRvdzpcbiAgMXB4IDFweCAwICMxMTEsXG4gIDJweCAycHggMCAjMjIyLFxuICAzcHggM3B4IDVweCByZ2JhKDAsMCwwLDAuNik7XG59XG5cbi5zdHJpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxNWVtO1xuICBoZWlnaHQ6IDEuNWVtO1xuICB0b3A6IDIuNGVtO1xuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxuICAgIDQ1ZGVnLFxuICAgICMzMDMwMzAsXG4gICAgIzMwMzAzMCAxMHB4LFxuICAgICMyMDIwMjAgMTBweCxcbiAgICAjMjAyMDIwIDIwcHhcbiAgKTtcbn1cblxuLm1zdHJpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB3aWR0aDogOGVtO1xuICBoZWlnaHQ6IDAuOGVtO1xuICB0b3A6IDVlbTtcbiAgbGVmdDogLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogMi41cHg7XG59XG5cbi5zc3RyaXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgd2lkdGg6IDQuMWVtO1xuICBoZWlnaHQ6IDAuOGVtO1xuICB0b3A6IDVlbTtcbiAgbGVmdDogMTBlbTtcbiAgYm9yZGVyLXJhZGl1czogMi41cHg7XG59XG5cbi5jb2RlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAuMmVtO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5mbGlwLWNhcmQtaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHM7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG5cbi5mbGlwLWNhcmQ6aG92ZXIgLmZsaXAtY2FyZC1pbm5lciB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4uZmxpcC1jYXJkLWZyb250LCAuZmxpcC1jYXJkLWJhY2sge1xuICBib3gtc2hhZG93OiAwIDhweCAxNHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4uZmxpcC1jYXJkLWZyb250IHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAycHggMnB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDdweCAxM3B4IC0zcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggLTFweCAwcHggaW5zZXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG59XG5cbi5mbGlwLWNhcmQtZnJvbnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdUY2hha2VkYSc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC0zMGRlZyk7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMjUlLCByZ2IoMjU1IDI1NSAyNTUpIDUwJSwgcmdiYSgwLCAwLCAwLCAwLjEyNSkgNzUlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGFuaW1hdGlvbjogd2F2ZUxpZ2h0IDlzIGxpbmVhciBpbmZpbml0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvcGFjaXR5OiAwLjE7XG59XG5cbkBrZXlmcmFtZXMgd2F2ZUxpZ2h0IHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgMDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSAwO1xuICB9XG59XG5cblxuLmZsaXAtY2FyZC1iYWNrIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAycHggMnB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDdweCAxM3B4IC0zcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggLTFweCAwcHggaW5zZXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG5cbi8qIFZhbGV1ciBwYXIgZMOpZmF1dCAodW5rbm93bikgKi9cbi5mbGlwLWNhcmQtZnJvbnQudW5rbm93bixcbi5mbGlwLWNhcmQtYmFjay51bmtub3duIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcbn1cblxuLyogVklTQSAqL1xuLmZsaXAtY2FyZC1mcm9udC52aXNhLFxuLmZsaXAtY2FyZC1iYWNrLnZpc2Ege1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTQzNENCLCAjMGEyYTgzKTsgLyogQmxldSBWaXNhICovXG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogTUFTVEVSQ0FSRCAqL1xuLmZsaXAtY2FyZC1mcm9udC5tYXN0ZXJjYXJkLFxuLmZsaXAtY2FyZC1iYWNrLm1hc3RlcmNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZWIwMDFiLCAjZjc5ZTFiKTsgLyogUm91Z2Uvb3JhbmdlICovXG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogQU1FWCAqL1xuLmZsaXAtY2FyZC1mcm9udC5hbWV4LFxuLmZsaXAtY2FyZC1iYWNrLmFtZXgge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMmU3N2JiLCAjMWY0ZDdhKTsgLyogQmxldSBBbWVyaWNhbiBFeHByZXNzICovXG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogRElTQ09WRVIgKi9cbi5mbGlwLWNhcmQtZnJvbnQuZGlzY292ZXIsXG4uZmxpcC1jYXJkLWJhY2suZGlzY292ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjU4MjIwLCAjYTQ0NzAwKTsgLyogT3JhbmdlIERpc2NvdmVyICovXG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4uaGVhZGluZ184MjY0LCAubnVtYmVyLCAubmFtZSwgLmRhdGVfODI2NCB7XG4gIGNvbG9yOiBpbmhlcml0OyAvKiBow6lyaXRlIGR1IHBhcmVudCAqL1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9wYXltZW50LWZvcm0vcGF5bWVudC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUVoQixnQ0FBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsNERBQUE7QUFBRjtBQUVFO0VBUEY7SUFRSSxzQkFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQUo7QUFJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7RUFDQSxrQkFBQTtBQUZOO0FBS0k7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFITjtBQU9FO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFMSjtBQVFFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBTko7QUFRSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFOTjtBQVNJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBUE47QUFZSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFWTjtBQVlNO0VBQ0UsbUJBQUE7QUFWUjtBQWVFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQWJKO0FBZUk7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxp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Q0UsY0FBQSxFQUFBLHFCQUFBO0FBaElGO0FBQUEsZ3c3QkFBZ3c3QiIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKiBwYXltZW50LWZvcm0uY29tcG9uZW50LnNjc3MgKi9cbi5wYXltZW50LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDJyZW0gYXV0bztcbiAgZ2FwOiAycmVtO1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4uc3VtbWFyeS1jYXJkIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMDUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAuYmFjay1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDFyZW07XG4gICAgbGVmdDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogIzNhODZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICB9XG5cbiAgLmJyYW5kLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICAvLyBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICBcbiAgICAubG9nby1wbGFjZWhvbGRlciB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNjcyRTQsICNhYWI1YzEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIH1cbiAgICBcbiAgICBoMiB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBjb2xvcjogIzMzMztcbiAgICB9XG4gIH1cblxuICAuZGl2aWRlciB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgICBtYXJnaW46IDE1cHggMCAwO1xuICB9XG5cbiAgLnByaWNlLWRpc3BsYXkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBcbiAgICAuYW1vdW50IHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogIzNhODZmZjtcbiAgICB9XG4gICAgXG4gICAgLnBlcmlvZCB7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgIH1cbiAgfVxuXG4gIC5zdW1tYXJ5LWxpc3Qge1xuICAgIC5saXN0LWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmc6IDAuOHJlbSAwO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgICBcbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnRvdGFsLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2U4ZjRmZjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgfVxuICAgIFxuICAgIC50b3RhbC1hbW91bnQge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjM2E4NmZmO1xuICAgIH1cbiAgfVxuXG4gIC5zZWN1cml0eS1iYWRnZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGNvbG9yOiAjNGNhZjUwO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIFxuICAgIC5sb2NrLWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICB9XG59XG5cbi5mb3JtLWNhcmQge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gIFxuICBoMiB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIFxuICBoMyB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgXG4gIC5jYXJkLXByZXZpZXcge1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNWE2N2Q4LCAjM2E4NmZmKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgXG4gICAgLmNhcmQtY2hpcCB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmQ1NGYsICNmZmIzMDApO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgYm94LXNoYWRvdzpcbiAgICAgIDAgMnB4IDVweCByZ2JhKDAsMCwwLDAuMyksXG4gICAgICBpbnNldCAwIDJweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLFxuICAgICAgaW5zZXQgMCAtMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZhODAwO1xuICAgICAgXG4gICAgfVxuICAgIFxuICAgIC5jYXJkLW51bWJlciB7XG4gICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogI2VlZTtcbiAgICAgIHRleHQtc2hhZG93OlxuICAgICAgMXB4IDFweCAwICMxMTEsXG4gICAgICAycHggMnB4IDAgIzIyMixcbiAgICAgIDNweCAzcHggNXB4IHJnYmEoMCwwLDAsMC42KTtcbiAgICB9XG4gICAgXG4gICAgLmNhcmQtZm9vdGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDEuNXJlbTtcbiAgICAgIGxlZnQ6IDEuNXJlbTtcbiAgICAgIHJpZ2h0OiAxLjVyZW07XG4gICAgfVxuICB9XG4gIFxuICAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgIGxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgICBcbiAgICBpbnB1dCwgc2VsZWN0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMC44cmVtO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzO1xuICAgICAgXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjM2E4NmZmO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg1OCwgMTM0LCAyNTUsIDAuMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuaW5wdXQtd2l0aC1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG4gICAgLmlucHV0LWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgY29sb3I6ICM3Nzc7XG4gICAgfVxuICB9XG4gIFxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgY29sb3I6ICNlNTNlM2U7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDAuM3JlbTtcbiAgfVxuICBcbiAgLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvLyBnYXA6IDFyZW07XG4gICAgXG4gICAgLmV4cC1maWVsZCB7IGZsZXg6IDI7IH1cbiAgICAuY3ZjLWZpZWxkIHsgZmxleDogMTsgfVxuICAgIC5hZGRyZXNzLWZpZWxkIHsgZmxleDogMTsgfVxuICB9XG4gIFxuICAuY2hlY2tib3gtZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDFyZW0gMDtcbiAgICBcbiAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIGxhYmVsIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjNTU1O1xuICAgIH1cbiAgfVxuICBcbiAgLnRlcm1zLWxpbmsge1xuICAgIGNvbG9yOiAjM2E4NmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuICBcbiAgLnN1Ym1pdC1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJhY2tncm91bmQ6ICMzYTg2ZmY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMyNTYzZWI7XG4gICAgfVxuICAgIFxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogI2NiZDVlMDtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuICAgIFxuICAgIC5idG4taWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbiAgfVxuICBcbiAgLnBheW1lbnQtbWV0aG9kcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIFxuICAgIC5wYXltZW50LWljb24ge1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBjb2xvcjogIzcxODA5NjtcbiAgICAgIHBhZGRpbmc6IDAuM3JlbSAwLjhyZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzNhODZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjM2E4NmZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubG9hZGluZy1zdGF0ZSwgLmVycm9yLXN0YXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvYWRlciB7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMzQ5OGRiO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLmVycm9yLXN0YXRlIGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIHBheW1lbnQtZm9ybS5jb21wb25lbnQuc2NzcyAqL1xuLnByb2Nlc3Npbmctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xuICBcbiAgLnByb2Nlc3Npbmctc3Bpbm5lciB7XG4gICAgYm9yZGVyOiA1cHggc29saWQgI2YzZjNmMztcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgIzM0OThkYjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4ucGF5bWVudC1lcnJvciB7XG4gIGJhY2tncm91bmQ6ICNmZmViZWU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmNkZDI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGNvbG9yOiAjYzYyODI4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICNjNjI4Mjg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi8qIETDg8Kpc2FjdGl2ZXIgbGUgZm9ybXVsYWlyZSBwZW5kYW50IGxlIHRyYWl0ZW1lbnQgKi9cbi5mb3JtLWNhcmQuZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubW9kdWxlcy1saXN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgXG4gIGRpdiB7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZjBmMGYwO1xuICAgIFxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4udG9hc3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDYwcHg7XG4gIHJpZ2h0OiAzNXB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4udG9hc3QtbWVzc2FnZS1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3ZWI4NztcbiAgYm9yZGVyOiAxcHggc29saWQgI0FDQ0VCQztcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVJbk91dCA0cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbn1cbiAgXG4vL3RvYXN0IHN1Y2Nlc3Ncbi50b2FzdC1tZXNzYWdlLWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0Q4REE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFN0IxQjY7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5PdXQgNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG59XG5cbi50b2FzdC1tZXNzYWdlLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNEOERBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTdCMUI2O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluT3V0IDRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuXG4gIC8vIEFqb3V0ZXIgbCdhbmltYXRpb24gcG91ciB0b3VzIGxlcyB0eXBlcyBkJ2FsZXJ0ZXNcbiAgLmFsZXJ0IHtcbiAgICAvLyAuLi4gc3R5bGVzIGV4aXN0YW50c1xuICAgIFxuICAgICYtd2FybmluZyB7XG4gICAgICBAZXh0ZW5kIC5hbGVydDtcbiAgICAgIC8vIC4uLiBzdHlsZXMgc3DDg8KpY2lmaXF1ZXNcbiAgICB9XG4gIH1cbiAgXG4gIC8qIEFuaW1hdGlvbiBwb3VyIGZhaXJlIGFwcGFyYcODwq50cmUgZXQgZGlzcGFyYcODwq50cmUgbGUgdG9hc3QgKi9cbiAgQGtleWZyYW1lcyBmYWRlSW5PdXQge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpOyAvKiBMZSB0b2FzdCBkaXNwYXJhw4PCrnQgYXZlYyB1biBsw4PCqWdlciBtb3V2ZW1lbnQgdmVycyBsZSBiYXMgKi9cbiAgICB9XG4gIH0gIFxuXG4uZGlzYWJsZWQtZm9ybSB7XG4gIG9wYWNpdHk6IDAuNztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8vIC5sb2FkaW5nLW92ZXJsYXkge1xuLy8gICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgIHRvcDogMDtcbi8vICAgbGVmdDogMDtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGhlaWdodDogMTAwJTtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgei1pbmRleDogMTAwMDtcbi8vIH1cblxuLy8gLmxvYWRpbmctY29udGVudCB7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyAgIHBhZGRpbmc6IDMwcHg7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwwLDAsMC4yKTtcbi8vIH1cblxuLy8gLnNwaW5uZXIge1xuLy8gICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4vLyAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDlmO1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyAgIHdpZHRoOiA0MHB4O1xuLy8gICBoZWlnaHQ6IDQwcHg7XG4vLyAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4vLyAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XG4vLyB9XG5cbi8vIEBrZXlmcmFtZXMgc3BpbiB7XG4vLyAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuLy8gfVxuXG4vLyAuYnRuLXNwaW5uZXIge1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHdpZHRoOiAyMHB4O1xuLy8gICBoZWlnaHQ6IDIwcHg7XG4vLyAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICBib3JkZXItdG9wLWNvbG9yOiB3aGl0ZTtcbi8vICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbi8vICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4vLyB9XG5cbi5sb2FkaW5nLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cblxuLmxvYWRpbmctY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7IFxufVxuXG4uc3Bpbm5lciB7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLyogRnJvbSBVaXZlcnNlLmlvIGJ5IFByYWFzaG9vNyAqLyBcbi5mbGlwLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IDE1NHB4O1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5oZWFkaW5nXzgyNjQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxldHRlci1zcGFjaW5nOiAuMmVtO1xuICBmb250LXNpemU6IDAuNWVtO1xuICB0b3A6IDJlbTtcbiAgcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjZWVlO1xuICB0ZXh0LXNoYWRvdzpcbiAgMXB4IDFweCAwICMxMTEsXG4gIDJweCAycHggMCAjMjIyLFxuICAzcHggM3B4IDVweCByZ2JhKDAsMCwwLDAuNik7XG59XG5cbi5sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYuN2VtO1xuICByaWdodDogMTVweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbiBcblxufVxuXG4uY2hpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gdG9wOiAyLjNlbTtcbiAgdG9wOiAxN3B4O1xuICBsZWZ0OiAxLjVlbTtcbn1cblxuLmNvbnRhY3RsZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMuNWVtO1xuICAvLyBsZWZ0OiAxMi40ZW07XG4gIHJpZ2h0OiAxNXB4O1xufVxuXG4ubnVtYmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAuNmVtO1xuICB0b3A6IDguM2VtO1xuICBsZWZ0OiAxLjZlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNlZWU7XG4gIHRleHQtc2hhZG93OlxuICAgIDFweCAxcHggMCAjMTExLFxuICAgIDJweCAycHggMCAjMjIyLFxuICAgIDNweCAzcHggNXB4IHJnYmEoMCwwLDAsMC42KTtcbn1cblxuLnZhbGlkX3RocnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0b3A6IDYzNS44ZW07XG4gIGZvbnQtc2l6ZTogLjAxZW07XG4gIGxlZnQ6IDE0MC4zZW07XG59XG5cbi5kYXRlXzgyNjQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDAuNWVtO1xuICB0b3A6IDEzLjZlbTtcbiAgbGVmdDogMy4yZW07XG4gIGNvbG9yOiAjZWVlO1xuICB0ZXh0LXNoYWRvdzpcbiAgMXB4IDFweCAwICMxMTEsXG4gIDJweCAycHggMCAjMjIyLFxuICAzcHggM3B4IDVweCByZ2JhKDAsMCwwLDAuNik7XG59XG5cbi5uYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgdG9wOiAxNi4xZW07XG4gIGxlZnQ6IDJlbTtcbiAgY29sb3I6ICNlZWU7XG4gIHRleHQtc2hhZG93OlxuICAxcHggMXB4IDAgIzExMSxcbiAgMnB4IDJweCAwICMyMjIsXG4gIDNweCAzcHggNXB4IHJnYmEoMCwwLDAsMC42KTtcbn1cblxuLnN0cmlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDE1ZW07XG4gIGhlaWdodDogMS41ZW07XG4gIHRvcDogMi40ZW07XG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXG4gICAgNDVkZWcsXG4gICAgIzMwMzAzMCxcbiAgICAjMzAzMDMwIDEwcHgsXG4gICAgIzIwMjAyMCAxMHB4LFxuICAgICMyMDIwMjAgMjBweFxuICApO1xufVxuXG4ubXN0cmlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHdpZHRoOiA4ZW07XG4gIGhlaWdodDogMC44ZW07XG4gIHRvcDogNWVtO1xuICBsZWZ0OiAuOGVtO1xuICBib3JkZXItcmFkaXVzOiAyLjVweDtcbn1cblxuLnNzdHJpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB3aWR0aDogNC4xZW07XG4gIGhlaWdodDogMC44ZW07XG4gIHRvcDogNWVtO1xuICBsZWZ0OiAxMGVtO1xuICBib3JkZXItcmFkaXVzOiAyLjVweDtcbn1cblxuLmNvZGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IC4yZW07XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmZsaXAtY2FyZC1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLmZsaXAtY2FyZDpob3ZlciAuZmxpcC1jYXJkLWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5mbGlwLWNhcmQtZnJvbnQsIC5mbGlwLWNhcmQtYmFjayB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE0cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi5mbGlwLWNhcmQtZnJvbnQge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDJweCAycHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtMXB4IDBweCBpbnNldDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcbn1cblxuLmZsaXAtY2FyZC1mcm9udDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1RjaGFrZWRhJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTMwZGVnKTtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAyNSUsIHJnYigyNTUgMjU1IDI1NSkgNTAlLCByZ2JhKDAsIDAsIDAsIDAuMTI1KSA3NSUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYW5pbWF0aW9uOiB3YXZlTGlnaHQgOXMgbGluZWFyIGluZmluaXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG9wYWNpdHk6IDAuMTtcbn1cblxuQGtleWZyYW1lcyB3YXZlTGlnaHQge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7XG4gIH1cbn1cblxuXG4uZmxpcC1jYXJkLWJhY2sge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDJweCAycHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggN3B4IDEzcHggLTNweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtMXB4IDBweCBpbnNldDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cblxuLyogVmFsZXVyIHBhciBkw4PCqWZhdXQgKHVua25vd24pICovXG4uZmxpcC1jYXJkLWZyb250LnVua25vd24sXG4uZmxpcC1jYXJkLWJhY2sudW5rbm93biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG59XG5cbi8qIFZJU0EgKi9cbi5mbGlwLWNhcmQtZnJvbnQudmlzYSxcbi5mbGlwLWNhcmQtYmFjay52aXNhIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE0MzRDQiwgIzBhMmE4Myk7IC8qIEJsZXUgVmlzYSAqL1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIE1BU1RFUkNBUkQgKi9cbi5mbGlwLWNhcmQtZnJvbnQubWFzdGVyY2FyZCxcbi5mbGlwLWNhcmQtYmFjay5tYXN0ZXJjYXJkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ViMDAxYiwgI2Y3OWUxYik7IC8qIFJvdWdlL29yYW5nZSAqL1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIEFNRVggKi9cbi5mbGlwLWNhcmQtZnJvbnQuYW1leCxcbi5mbGlwLWNhcmQtYmFjay5hbWV4IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzJlNzdiYiwgIzFmNGQ3YSk7IC8qIEJsZXUgQW1lcmljYW4gRXhwcmVzcyAqL1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIERJU0NPVkVSICovXG4uZmxpcC1jYXJkLWZyb250LmRpc2NvdmVyLFxuLmZsaXAtY2FyZC1iYWNrLmRpc2NvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1ODIyMCwgI2E0NDcwMCk7IC8qIE9yYW5nZSBEaXNjb3ZlciAqL1xuICBjb2xvcjogd2hpdGU7XG59XG5cblxuLmhlYWRpbmdfODI2NCwgLm51bWJlciwgLm5hbWUsIC5kYXRlXzgyNjQge1xuICBjb2xvcjogaW5oZXJpdDsgLyogaMODwqlyaXRlIGR1IHBhcmVudCAqL1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 12124:
/*!*******************************************************************!*\
  !*** ./src/app/admin-page/pricing-card/pricing-card.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricingCardComponent: () => (/* binding */ PricingCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MODELS/customNumberPipe */ 96115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _SERVICES_Module_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SERVICES/Module-Service */ 84173);








const _c0 = () => ["/payment-form", "TCHAKEDA_PLUS"];
const _c1 = () => ["/payment-form", "PRO"];
function PricingCardComponent_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const module_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](module_r1.nom);
  }
}
function PricingCardComponent_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const module_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](module_r2.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("available", module_r2.actif)("unavailable", !module_r2.actif);
  }
}
function PricingCardComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const module_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](module_r3.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("available", module_r3.actif)("unavailable", !module_r3.actif);
  }
}
function PricingCardComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const module_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](module_r4.nom);
  }
}
function PricingCardComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const module_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](module_r5.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("available", module_r5.actif)("unavailable", !module_r5.actif);
  }
}
function PricingCardComponent_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const module_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](module_r6.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("available", module_r6.actif)("unavailable", !module_r6.actif);
  }
}
function PricingCardComponent_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const module_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](module_r7.nom);
  }
}
function PricingCardComponent_tr_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const module_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](module_r8.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("available", module_r8.actif)("unavailable", !module_r8.actif);
  }
}
class PricingCardComponent {
  // isPremiumHovered = false;
  constructor(route, moduleService, router) {
    this.route = route;
    this.moduleService = moduleService;
    this.router = router;
    this.freeModules = [];
    this.trialModules = [];
    this.paidModules = [];
    this.allModules = [];
    this.modulePrice = 0;
    this.moduleName = 'Nom module';
    this.totalMensuel = 0;
    this.allPaidModules = []; // Tous les modules payants (avec ou sans essai)
    this.priceTchakedaPlus = 0;
    this.pricePro = 0;
    this.prixAnnuelSansRemise = 0;
  }
  ngOnInit() {
    this.loadModules();
  }
  loadModuleDetails() {}
  subscribe(event, module) {
    const button = event.target;
    const wave = button.querySelector('.wave');
    if (wave) {
      // Positionner l'effet vague au point de clic
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      wave.style.left = `${x}px`;
      wave.style.top = `${y}px`;
      // this.router.navigate(['/payment-form', module.code]);
      // Réinitialiser et relancer l'animation
      wave.style.animation = 'none';
      setTimeout(() => {
        wave.style.animation = 'wave 1s ease';
      }, 10);
    }
    // Naviguer vers /payment-form/:moduleCode
    this.router.navigate(['/payment-form', module.code]);
  }
  loadModules() {
    this.moduleService.getModulesEntreprise().subscribe({
      next: modules => {
        // Modules gratuits
        this.freeModules = modules.filter(m => !m.payant);
        // Modules payants avec période d'essai active
        this.trialModules = modules.filter(m => m.payant && m.tempsRestantEssai && m.tempsRestantEssai !== 'Terminé');
        // Modules payants (sans période d'essai)
        this.paidModules = modules.filter(m => m.payant && (!m.tempsRestantEssai || m.tempsRestantEssai === 'Terminé'));
        // Tous les modules payants combinés (essai + sans essai)
        this.allPaidModules = [...this.trialModules, ...this.paidModules];
        // Calcul du total mensuel des modules payants
        const totalMensuel = this.allPaidModules.reduce((sum, module) => sum + (module.prix || 0), 0);
        // Calcul des prix pour les offres
        this.priceTchakedaPlus = totalMensuel * 3;
        // this.pricePro = totalMensuel * 12; // Pour 12 mois
        // Prix annuel avec remise de 10%
        const prixAnnuelSansRemise = totalMensuel * 12;
        this.pricePro = prixAnnuelSansRemise * 0.9; // 10% de remise
        // Formatage pour affichage
        // this.priceProFormatted = this.customNumberPipe.transform(this.pricePro);
      },
      error: error => console.error(error)
    });
  }
  getStatusIcon(active) {
    return active ? '✓' : '✗';
  }
  getStatusClass(active) {
    return active ? 'available' : 'unavailable';
  }
  static {
    this.ɵfac = function PricingCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PricingCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_SERVICES_Module_Service__WEBPACK_IMPORTED_MODULE_1__.ModuleService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PricingCardComponent,
      selectors: [["app-pricing-card"]],
      decls: 75,
      vars: 26,
      consts: [[1, "pricing-section"], ["routerLink", "/account-settings", 1, "icon_close"], [1, "ri-close-fill"], [1, "pricing-container"], [1, "plan-card", 2, "height", "10%"], [1, "plan-header"], [1, "price"], [1, "device"], [1, "features-table"], [4, "ngFor", "ngForOf"], [1, "select-btn", 2, "cursor", "no-drop"], [1, "plan-card"], [1, "availablee"], [1, "select-btn", 3, "routerLink"], [1, "discount-badge"], [1, "badge"], [1, "unavailable"], [1, "available"]],
      template: function PricingCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Gratuit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " 0 CFA ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " / 1 mois ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "table", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, PricingCardComponent_tr_13_Template, 5, 1, "tr", 9)(14, PricingCardComponent_tr_14_Template, 5, 5, "tr", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Votre plan actuel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11)(18, "div", 5)(19, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Tchakeda Plus");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "customNumber");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " / 3 mois ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "table", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, PricingCardComponent_tr_27_Template, 5, 5, "tr", 9)(28, PricingCardComponent_tr_28_Template, 5, 1, "tr", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "tr")(30, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Facture Pro forma");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "td")(33, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u2713");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "tr")(36, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Facture R\u00E9elle");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "td")(39, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\u2713");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, PricingCardComponent_tr_41_Template, 5, 5, "tr", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " S\u00E9lectionner ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 11)(45, "div", 5)(46, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Pro");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "customNumber");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " / 1 an ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "-10%");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Meilleur");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "table", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, PricingCardComponent_tr_58_Template, 5, 5, "tr", 9)(59, PricingCardComponent_tr_59_Template, 5, 1, "tr", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "tr")(61, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Facture Pro forma");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "td")(64, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "\u2713");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "tr")(67, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Facture R\u00E9elle");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "td")(70, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "\u2713");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, PricingCardComponent_tr_72_Template, 5, 5, "tr", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " S\u00E9lectionner ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("highlight", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.paidModules);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.freeModules);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("highlight", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("highlight", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 20, ctx.priceTchakedaPlus), " CFA ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.trialModules);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.paidModules);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.freeModules);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](24, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("highlight", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 22, ctx.pricePro), " CFA ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.trialModules);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.paidModules);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.freeModules);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](25, _c1));
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_0__.CustomNumberPipe],
      styles: ["@charset \"UTF-8\";\n.pricing-section[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: #f9fbff;\n  position: relative;\n}\n\n.icon_close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  right: 6px;\n  z-index: 100;\n  cursor: pointer;\n}\n.icon_close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #363535;\n  transition: all 0.3s ease;\n}\n.icon_close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: red;\n  transform: scale(1.1);\n}\n\n.pricing-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n\n.plan-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 0.5rem;\n  width: 250px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.plan-card.highlight[_ngcontent-%COMP%] {\n  border-color: #0672E4;\n  box-shadow: 0 4px 12px rgba(55, 92, 255, 0.3);\n}\n\n.plan-header[_ngcontent-%COMP%] {\n  background: #0672E4;\n  color: white;\n  width: 100%;\n  text-align: center;\n  padding: 1rem 0;\n  position: relative;\n}\n\n.plan-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  color: #E9D421;\n}\n\n.price[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0.5rem 0;\n  display: flex;\n  justify-content: center;\n}\n\n.badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background: #E9D421;\n  color: #000;\n  padding: 0.25rem 0.5rem;\n  font-size: 10px;\n  border-radius: 0.25rem;\n}\n\n.features-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 1rem 0;\n}\n\n.features-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-bottom: 1px solid #f0f0f0;\n  font-size: 0.875rem;\n}\n\n.features-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  color: #555;\n}\n\n.available[_ngcontent-%COMP%]::before {\n  content: \"\u2714\"; \n\n  color: #28a745;\n}\n\n.unavailable[_ngcontent-%COMP%]::before {\n  content: \"\u2716\"; \n\n  color: #dc3545;\n}\n\n.select-btn[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  padding: 0.75rem 1.5rem;\n  border: 1px solid #0672E4;\n  background: transparent;\n  color: #0672E4;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.select-btn.highlight[_ngcontent-%COMP%] {\n  background: #0672E4;\n  color: white;\n}\n\n.select-btn[_ngcontent-%COMP%]:hover {\n  background: #045ab5;\n  color: white;\n}\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --indigo-900: #1a1a5d;\n  --indigo-800: #2a2a8a;\n  --indigo-700: #3a3ab7;\n  --indigo-600: #4a4ae5;\n  --indigo-500: #6366f1;\n  --indigo-100: #e0e7ff;\n  --indigo-50: #f0f3ff;\n  --gray-900: #111827;\n  --gray-800: #1f2937;\n  --gray-700: #374151;\n  --gray-600: #4b5563;\n  --gray-300: #d1d5db;\n  --gray-200: #e5e7eb;\n  --gray-100: #f3f4f6;\n  --green-500: #10b981;\n  --white: #ffffff;\n  --shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n  --shadow-hover: 0 12px 30px rgba(79, 70, 229, 0.25);\n  --mouse-x: 0px;\n  --mouse-y: 0px;\n  --glow-size: 400px;\n  --particle-count: 30;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  overflow: hidden;\n  position: relative;\n  background: radial-gradient(ellipse at bottom, var(--indigo-50) 0%, var(--white) 70%);\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  width: 100%;\n  margin: 0 auto;\n  animation: _ngcontent-%COMP%_fadeIn 0.8s ease-out forwards;\n}\n\n.particle[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background: linear-gradient(45deg, var(--indigo-500), var(--green-500));\n  opacity: 0.7;\n  animation: _ngcontent-%COMP%_float 15s infinite ease-in-out;\n  filter: blur(2px);\n}\n\n.hover-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(var(--mouse-y) - var(--glow-size) / 2);\n  left: calc(var(--mouse-x) - var(--glow-size) / 2);\n  width: var(--glow-size);\n  height: var(--glow-size);\n  background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);\n  border-radius: 50%;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.4s ease, transform 0.2s ease;\n  z-index: -1;\n}\n\n.particles-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 0;\n}\n\n\n\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 60px;\n  animation: _ngcontent-%COMP%_slideDown 0.8s ease-out forwards;\n}\n\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  background: linear-gradient(to right, var(--indigo-700), var(--indigo-500));\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  margin-bottom: 12px;\n  font-weight: 800;\n  letter-spacing: -1px;\n  text-shadow: 0 2px 10px rgba(79, 70, 229, 0.15);\n}\n\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: var(--gray-600);\n  max-width: 600px;\n  margin: 0 auto;\n  position: relative;\n}\n\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 80px;\n  height: 4px;\n  background: linear-gradient(to right, var(--indigo-500), var(--green-500));\n  margin: 15px auto 0;\n  border-radius: 10px;\n  animation: _ngcontent-%COMP%_lineGrow 1.2s ease-out forwards;\n}\n\n\n\n.plans-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  justify-content: center;\n  perspective: 1500px;\n}\n\n\n\n.plan-card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  box-shadow: var(--shadow);\n  padding: 40px 35px;\n  flex: 1;\n  min-width: 320px;\n  max-width: 480px;\n  position: relative;\n  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transform-style: preserve-3d;\n}\n\n.plan-card.free[_ngcontent-%COMP%] {\n  border: 1px solid var(--gray-200);\n  animation-delay: 0.2s;\n}\n\n.plan-card.premium[_ngcontent-%COMP%] {\n  border: 2px solid var(--indigo-500);\n  background-color: #fff;\n  animation-delay: 0.4s;\n  z-index: 2;\n}\n\n\n\n.premium-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: linear-gradient(45deg, var(--indigo-600), #6a11cb);\n  color: var(--white);\n  padding: 8px 20px;\n  border-radius: 0 20px 0 20px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  box-shadow: 0 4px 15px rgba(106, 17, 203, 0.3);\n}\n\n\n\n.plan-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin-bottom: 25px;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.free[_ngcontent-%COMP%]   .plan-title[_ngcontent-%COMP%] {\n  color: var(--gray-700);\n}\n\n.premium[_ngcontent-%COMP%]   .plan-title[_ngcontent-%COMP%] {\n  color: var(--indigo-800);\n}\n\n.plan-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  font-size: 1.5rem;\n}\n\n\n\n.price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  margin-bottom: 8px;\n  position: relative;\n  font-size: 20px;\n  gap: 5px;\n}\n\n.device[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.price-amount[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  color: #0672E4;\n  background-clip: text;\n  position: relative;\n  z-index: 1;\n}\n\n.price-period[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--gray-600);\n  margin-left: 8px;\n}\n\n.discount[_ngcontent-%COMP%] {\n  color: var(--indigo-700);\n  font-weight: 600;\n  margin-bottom: 0px;\n  padding: 8px 15px;\n  background: rgba(79, 70, 229, 0.1);\n  border-radius: 50px;\n  display: inline-block;\n  animation: discountPulse 3s infinite;\n}\n\n\n\n.features-list[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  position: relative;\n}\n\n.features-list[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 3px;\n  background: linear-gradient(to bottom, var(--indigo-500), #8e2de2);\n  border-radius: 10px;\n  opacity: 0.7;\n}\n\n.feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 18px;\n  padding-left: 15px;\n  opacity: 0;\n  transform: translateX(-20px);\n  animation: _ngcontent-%COMP%_featureSlideIn 0.6s ease-out forwards;\n}\n\n.free[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.3s;\n}\n\n.free[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.4s;\n}\n\n.free[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.5s;\n}\n\n.free[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.6s;\n}\n\n.free[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.7s;\n}\n\n.free[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 0.8s;\n}\n\n.premium[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.5s;\n}\n\n.premium[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.6s;\n}\n\n.premium[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.7s;\n}\n\n.premium[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.8s;\n}\n\n.premium[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.9s;\n}\n\n.feature-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-top: 4px;\n  min-width: 24px;\n  transition: transform 0.3s ease;\n}\n\n.feature-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--green-500);\n}\n\n.feature-icon[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n\n.feature[_ngcontent-%COMP%]:hover   .feature-icon[_ngcontent-%COMP%] {\n  transform: scale(1.2) rotate(5deg);\n}\n\n.feature-text[_ngcontent-%COMP%] {\n  color: var(--gray-700);\n  font-size: 16px;\n  position: relative;\n}\n\n.feature-text[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -5px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  background: var(--indigo-500);\n  transition: width 0.5s ease;\n}\n\n.feature[_ngcontent-%COMP%]:hover   .feature-text[_ngcontent-%COMP%]::after {\n  width: 100%;\n}\n\n\n\n.subscribe-btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 18px;\n  background: linear-gradient(to right, var(--indigo-600), #6a11cb);\n  color: var(--white);\n  border: none;\n  border-radius: 15px;\n  font-size: 1.2rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.4s ease;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeIn 0.8s ease-out forwards;\n  animation-delay: 1.2s;\n}\n\n.subscribe-btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to right, var(--indigo-700), #8e2de2);\n  z-index: -1;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n\n.subscribe-btn[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.subscribe-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 25px rgba(79, 70, 229, 0.4);\n}\n\n.subscribe-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n\n.ripple[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.4);\n  transform: scale(0);\n  animation: _ngcontent-%COMP%_rippleEffect 1s linear;\n  pointer-events: none;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_featureSlideIn {\n  from {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_lineGrow {\n  from {\n    width: 0;\n  }\n  to {\n    width: 80px;\n  }\n}\n@keyframes _ngcontent-%COMP%_rippleEffect {\n  to {\n    transform: scale(4);\n    opacity: 0;\n  }\n}\n\n\n.floating-element[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0.1;\n  animation: _ngcontent-%COMP%_float 15s infinite linear;\n}\n\n.floating-element[_ngcontent-%COMP%]:nth-child(1) {\n  top: 10%;\n  left: 5%;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: var(--indigo-500);\n  animation-duration: 20s;\n}\n\n.floating-element[_ngcontent-%COMP%]:nth-child(2) {\n  top: 20%;\n  right: 10%;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: var(--green-500);\n  animation-duration: 25s;\n}\n\n.floating-element[_ngcontent-%COMP%]:nth-child(3) {\n  bottom: 15%;\n  left: 15%;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: var(--indigo-600);\n  animation-duration: 30s;\n}\n\n@keyframes _ngcontent-%COMP%_float {\n  0% {\n    transform: translateY(0) rotate(0deg);\n  }\n  25% {\n    transform: translateY(-20px) rotate(90deg);\n  }\n  50% {\n    transform: translateY(0) rotate(180deg);\n  }\n  75% {\n    transform: translateY(20px) rotate(270deg);\n  }\n  100% {\n    transform: translateY(0) rotate(360deg);\n  }\n}\n\n\n@media (max-width: 900px) {\n  .plans-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .plan-card[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n  }\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.8rem;\n  }\n  .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n@media (max-width: 500px) {\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.3rem;\n  }\n  .header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .price-amount[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n  .plan-card[_ngcontent-%COMP%] {\n    padding: 30px 25px;\n  }\n}\n.plan-card.premium.hovered[_ngcontent-%COMP%]   .hover-glow[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1.2);\n}\n\n\n\n.plan-card[_ngcontent-%COMP%] {\n  transform: perspective(1000px) rotateY(0deg) rotateX(0deg);\n  transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s ease;\n}\n\n.plan-card.hovered[_ngcontent-%COMP%] {\n  transform: perspective(1000px) rotateY(5deg) rotateX(5deg) translateZ(30px);\n  box-shadow: 0 25px 50px rgba(79, 70, 229, 0.3);\n}\n\n\n\n.wave-btn[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\n\n.wave[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -100px;\n  left: 0;\n  width: 200px;\n  height: 200px;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 40%;\n  transform: translate(-50%, -75%) scale(0);\n  animation: _ngcontent-%COMP%_wave 1s ease;\n  opacity: 0;\n  z-index: -1;\n}\n\n@keyframes _ngcontent-%COMP%_wave {\n  0% {\n    transform: translate(-50%, -75%) scale(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translate(-50%, -75%) scale(3);\n    opacity: 0;\n  }\n}\n\n\n@keyframes _ngcontent-%COMP%_card-float {\n  0%, 100% {\n    transform: perspective(1000px) translateY(0) rotateY(0) rotateX(0);\n  }\n  50% {\n    transform: perspective(1000px) translateY(-20px) rotateY(2deg) rotateX(1deg);\n  }\n}\n\n\n.plan-card.free[_ngcontent-%COMP%] {\n  transition-delay: 0.1s;\n}\n\n.plan-card.premium[_ngcontent-%COMP%] {\n  transition-delay: 0.2s;\n}\n\n\n\n@media (max-width: 768px) {\n  .plans-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .plan-card[_ngcontent-%COMP%] {\n    min-width: 100%;\n    max-width: 100%;\n    margin-bottom: 30px;\n  }\n  [_ngcontent-%COMP%]:root {\n    --glow-size: 300px;\n  }\n}\n.price-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  font-family: Arial, sans-serif;\n}\n\n.price-display[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #333;\n}\n\n.toggle-button[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  border: 2px solid #ddd;\n  border-radius: 20px;\n  padding: 8px 16px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-weight: 600;\n  color: #555;\n}\n\n.toggle-button[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n\n.toggle-button.annual-mode[_ngcontent-%COMP%] {\n  background: #4CAF50;\n  color: white;\n  border-color: #3d8b40;\n}\n\n.original-price[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #999;\n  font-size: 0.8em;\n  margin-right: 5px;\n}\n\n.discount-badge[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 2px 6px;\n  border-radius: 10px;\n  font-size: 0.8em;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaWNpbmctY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQUY7QUFFRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUVJO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FBQU47O0FBa0JBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFmRjs7QUFpQkE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBZEY7O0FBZ0JBO0VBQ0UscUJBQUE7RUFDQSw2Q0FBQTtBQWJGOztBQWVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBWkY7O0FBY0E7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBWEY7O0FBYUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFWRjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQVRGOztBQVdBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQVJGOztBQVVBO0VBQ0Usb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBUEY7O0FBU0E7RUFDRSxXQUFBO0FBTkY7O0FBUUE7RUFDRSxZQUFBLEVBQUEsY0FBQTtFQUNBLGNBQUE7QUFMRjs7QUFPQTtFQUNFLFlBQUEsRUFBQSxVQUFBO0VBQ0EsY0FBQTtBQUpGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUhGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBRkY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFXQSxzQkFBQTtBQUNBLHVCQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbURBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFSRjs7QUFXQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFGQUFBO0FBUkY7O0FBV0E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1RUFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLGlCQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLGdEQUFBO0VBQ0EsaURBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0ZBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGtEQUFBO0VBQ0EsV0FBQTtBQVJGOztBQVdBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FBUkY7O0FBV0EsV0FBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FBUkY7O0FBV0E7RUFDRSxpQkFBQTtFQUNBLDJFQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0NBQUE7QUFSRjs7QUFXQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVJGOztBQVdBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBFQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBUkY7O0FBV0Esb0JBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFSRjs7QUFXQSxjQUFBO0FBQ0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNERBQUE7RUFDQSw0QkFBQTtBQVJGOztBQVlBO0VBQ0UsaUNBQUE7RUFDQSxxQkFBQTtBQVRGOztBQVlBO0VBQ0UsbUNBQUE7RUFFQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQVZGOztBQXNCQSxrQkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLDhEQUFBO0VBRUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQXBCRjs7QUF3QkEsZUFBQTtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFyQkY7O0FBd0JBO0VBQ0Usc0JBQUE7QUFyQkY7O0FBd0JBO0VBQ0Usd0JBQUE7QUFyQkY7O0FBd0JBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQXJCRjs7QUF3QkEsVUFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FBckJGOztBQXdCQTtFQUNFLGVBQUE7QUFyQkY7O0FBd0JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUdBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBdkJGOztBQTBCQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQXZCRjs7QUEwQkE7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0FBdkJGOztBQTBCQSxrQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBdkJGOztBQTBCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrRUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQXZCRjs7QUEwQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0RBQUE7QUF2QkY7O0FBMEJBO0VBQThCLHFCQUFBO0FBdEI5Qjs7QUF1QkE7RUFBOEIscUJBQUE7QUFuQjlCOztBQW9CQTtFQUE4QixxQkFBQTtBQWhCOUI7O0FBaUJBO0VBQThCLHFCQUFBO0FBYjlCOztBQWNBO0VBQThCLHFCQUFBO0FBVjlCOztBQVdBO0VBQThCLHFCQUFBO0FBUDlCOztBQVNBO0VBQWlDLHFCQUFBO0FBTGpDOztBQU1BO0VBQWlDLHFCQUFBO0FBRmpDOztBQUdBO0VBQWlDLHFCQUFBO0FBQ2pDOztBQUFBO0VBQWlDLHFCQUFBO0FBSWpDOztBQUhBO0VBQWlDLHFCQUFBO0FBT2pDOztBQUxBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FBUUY7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUFRRjs7QUFMQTtFQUNFLGNBQUE7QUFRRjs7QUFMQTtFQUNFLGtDQUFBO0FBUUY7O0FBTEE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVFGOztBQUxBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QUFRRjs7QUFMQTtFQUNFLFdBQUE7QUFRRjs7QUFMQSxXQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpRUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkNBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQkFBQTtBQVFGOztBQUxBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlFQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSw2REFBQTtBQVFGOztBQUxBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQVFGOztBQUxBO0VBQ0UsMkJBQUE7RUFDQSw4Q0FBQTtBQVFGOztBQUxBO0VBQ0UsMEJBQUE7QUFRRjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQkFBQTtBQVFGOztBQUxBLGVBQUE7QUFDQTtFQUNFO0lBQU8sVUFBQTtFQVNQO0VBUkE7SUFBSyxVQUFBO0VBV0w7QUFDRjtBQVRBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUFXRjtFQVRBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBV0Y7QUFDRjtBQVJBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUFVRjtFQVJBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBVUY7QUFDRjtBQVBBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUFTRjtFQVBBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBU0Y7QUFDRjtBQWNBO0VBQ0U7SUFBTyxRQUFBO0VBWFA7RUFZQTtJQUFLLFdBQUE7RUFUTDtBQUNGO0FBV0E7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQVRGO0FBQ0Y7QUFZQSxzQkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FBVkY7O0FBYUE7RUFDRSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FBVkY7O0FBYUE7RUFDRSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0FBVkY7O0FBYUE7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FBVkY7O0FBYUE7RUFDRTtJQUFLLHFDQUFBO0VBVEw7RUFVQTtJQUFNLDBDQUFBO0VBUE47RUFRQTtJQUFNLHVDQUFBO0VBTE47RUFNQTtJQUFNLDBDQUFBO0VBSE47RUFJQTtJQUFPLHVDQUFBO0VBRFA7QUFDRjtBQUdBLGVBQUE7QUFDQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFQURGO0VBSUE7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQUZGO0VBS0E7SUFDRSxpQkFBQTtFQUhGO0VBTUE7SUFDRSxpQkFBQTtFQUpGO0FBQ0Y7QUFPQTtFQUNFO0lBQ0UsaUJBQUE7RUFMRjtFQVFBO0lBQ0UsZUFBQTtFQU5GO0VBU0E7SUFDRSxpQkFBQTtFQVBGO0VBVUE7SUFDRSxrQkFBQTtFQVJGO0FBQ0Y7QUFXQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQVRGOztBQVlBLDJCQUFBO0FBQ0E7RUFDRSwwREFBQTtFQUNBLCtFQUFBO0FBVEY7O0FBYUE7RUFDRSwyRUFBQTtFQUNBLDhDQUFBO0FBVkY7O0FBYUEsK0JBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBVkY7O0FBYUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBVkY7O0FBYUE7RUFDRTtJQUNFLHlDQUFBO0lBQ0EsVUFBQTtFQVZGO0VBWUE7SUFDRSx5Q0FBQTtJQUNBLFVBQUE7RUFWRjtBQUNGO0FBYUEsdUJBQUE7QUFDQTtFQUNFO0lBQ0Usa0VBQUE7RUFYRjtFQWFBO0lBQ0UsNEVBQUE7RUFYRjtBQUNGO0FBY0Esb0JBQUE7QUFDQTtFQUNFLHNCQUFBO0FBWkY7O0FBZUE7RUFDRSxzQkFBQTtBQVpGOztBQWVBLHdCQUFBO0FBQ0E7RUFDRTtJQUNFLHNCQUFBO0VBWkY7RUFlQTtJQUNFLGVBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUFiRjtFQWdCQTtJQUNFLGtCQUFBO0VBZEY7QUFDRjtBQXlDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQXZDRjs7QUEwQ0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQXZDRjs7QUEwQ0E7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQXZDRjs7QUEwQ0E7RUFDRSxtQkFBQTtBQXZDRjs7QUEwQ0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQXZDRjs7QUEwQ0E7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBdkNGOztBQTBDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBdkNGIiwiZmlsZSI6InByaWNpbmctY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnByaWNpbmctc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQ6ICNmOWZiZmY7XG4gIC8vIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWNvbl9jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMnB4O1xuICByaWdodDogNnB4O1xuICB6LWluZGV4OiAxMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzM2MzUzNTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IHJlZDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gLmljb25fY2xvc2Uge1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIHRvcDogMjBweDtcbi8vICAgcmlnaHQ6IDIwcHg7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgZm9udC1zaXplOiAyNHB4O1xuLy8gICB6LWluZGV4OiAxMDE7XG4gIFxuLy8gICAmOmhvdmVyIHtcbi8vICAgICBjb2xvcjogI2ZmNDc1Nztcbi8vICAgfVxuLy8gfVxuXG4ucHJpY2luZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxLjVyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5wbGFuLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB3aWR0aDogMjUwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsMCwwLDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGxhbi1jYXJkLmhpZ2hsaWdodCB7XG4gIGJvcmRlci1jb2xvcjogIzA2NzJFNDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDU1LDkyLDI1NSwwLjMpO1xufVxuLnBsYW4taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzA2NzJFNDtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wbGFuLWhlYWRlciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBjb2xvcjogI0U5RDQyMTtcbn1cbi5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIHJpZ2h0OiAtMTBweDtcbiAgYmFja2dyb3VuZDogI0U5RDQyMTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG4uZmVhdHVyZXMtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG4uZmVhdHVyZXMtdGFibGUgdGQge1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4uZmVhdHVyZXMtdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICBjb2xvcjogIzU1NTtcbn1cbi5hdmFpbGFibGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDI3MTQnOyAvKiBjaGVja21hcmsgKi9cbiAgY29sb3I6ICMyOGE3NDU7XG59XG4udW5hdmFpbGFibGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDI3MTYnOyAvKiBjcm9zcyAqL1xuICBjb2xvcjogI2RjMzU0NTtcbn1cbi5zZWxlY3QtYnRuIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDY3MkU0O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4uc2VsZWN0LWJ0bi5oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kOiAjMDY3MkU0O1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2VsZWN0LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwNDVhYjU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cblxuXG5cblxuXG4vKiBhcHAuY29tcG9uZW50LmNzcyAqL1xuLyogVmFyaWFibGVzIGV0IHJlc2V0ICovXG46cm9vdCB7XG4gIC0taW5kaWdvLTkwMDogIzFhMWE1ZDtcbiAgLS1pbmRpZ28tODAwOiAjMmEyYThhO1xuICAtLWluZGlnby03MDA6ICMzYTNhYjc7XG4gIC0taW5kaWdvLTYwMDogIzRhNGFlNTtcbiAgLS1pbmRpZ28tNTAwOiAjNjM2NmYxO1xuICAtLWluZGlnby0xMDA6ICNlMGU3ZmY7XG4gIC0taW5kaWdvLTUwOiAjZjBmM2ZmO1xuICAtLWdyYXktOTAwOiAjMTExODI3O1xuICAtLWdyYXktODAwOiAjMWYyOTM3O1xuICAtLWdyYXktNzAwOiAjMzc0MTUxO1xuICAtLWdyYXktNjAwOiAjNGI1NTYzO1xuICAtLWdyYXktMzAwOiAjZDFkNWRiO1xuICAtLWdyYXktMjAwOiAjZTVlN2ViO1xuICAtLWdyYXktMTAwOiAjZjNmNGY2O1xuICAtLWdyZWVuLTUwMDogIzEwYjk4MTtcbiAgLS13aGl0ZTogI2ZmZmZmZjtcbiAgLS1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgLS1zaGFkb3ctaG92ZXI6IDAgMTJweCAzMHB4IHJnYmEoNzksIDcwLCAyMjksIDAuMjUpO1xuICAtLW1vdXNlLXg6IDBweDtcbiAgLS1tb3VzZS15OiAwcHg7XG4gIC0tZ2xvdy1zaXplOiA0MDBweDtcbiAgLS1wYXJ0aWNsZS1jb3VudDogMzA7XG59XG5cbi5hcHAtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgYm90dG9tLCB2YXIoLS1pbmRpZ28tNTApIDAlLCB2YXIoLS13aGl0ZSkgNzAlKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuOHMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5cbi5wYXJ0aWNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWluZGlnby01MDApLCB2YXIoLS1ncmVlbi01MDApKTtcbiAgb3BhY2l0eTogMC43O1xuICBhbmltYXRpb246IGZsb2F0IDE1cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgZmlsdGVyOiBibHVyKDJweCk7XG59XG5cbi5ob3Zlci1nbG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGModmFyKC0tbW91c2UteSkgLSB2YXIoLS1nbG93LXNpemUpLzIpO1xuICBsZWZ0OiBjYWxjKHZhcigtLW1vdXNlLXgpIC0gdmFyKC0tZ2xvdy1zaXplKS8yKTtcbiAgd2lkdGg6IHZhcigtLWdsb3ctc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tZ2xvdy1zaXplKTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSg5OSwgMTAyLCAyNDEsIDAuMykgMCUsIHRyYW5zcGFyZW50IDcwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnBhcnRpY2xlcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDA7XG59XG5cbi8qIEhlYWRlciAqL1xuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgYW5pbWF0aW9uOiBzbGlkZURvd24gMC44cyBlYXNlLW91dCBmb3J3YXJkcztcbn1cblxuLmhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogMy41cmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWluZGlnby03MDApLCB2YXIoLS1pbmRpZ28tNTAwKSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIHRleHQtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoNzksIDcwLCAyMjksIDAuMTUpO1xufVxuXG4uaGVhZGVyIHAge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6IHZhcigtLWdyYXktNjAwKTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhlYWRlciBwOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWluZGlnby01MDApLCB2YXIoLS1ncmVlbi01MDApKTtcbiAgbWFyZ2luOiAxNXB4IGF1dG8gMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYW5pbWF0aW9uOiBsaW5lR3JvdyAxLjJzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuXG4vKiBQbGFucyBjb250YWluZXIgKi9cbi5wbGFucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMzBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBlcnNwZWN0aXZlOiAxNTAwcHg7XG59XG5cbi8qIFBsYW4gY2FyZCAqL1xuLnBsYW4tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gIHBhZGRpbmc6IDQwcHggMzVweDtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAzMjBweDtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4vLyAgIGFuaW1hdGlvbjogY2FyZEZsb2F0IDhzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4ucGxhbi1jYXJkLmZyZWUge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbn1cblxuLnBsYW4tY2FyZC5wcmVtaXVtIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW5kaWdvLTUwMCk7XG4vLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsIHZhcigtLWluZGlnby01MCksICNmYWZiZmYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gIHotaW5kZXg6IDI7XG59XG5cbi8vIC5wbGFuLWNhcmQ6aG92ZXIge1xuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpIHNjYWxlKDEuMDIpO1xuLy8gICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctaG92ZXIpO1xuLy8gfVxuXG4vLyAucGxhbi1jYXJkLnByZW1pdW0uaG92ZXJlZCB7XG4vLyAgIGFuaW1hdGlvbjogcHVsc2VHbG93IDJzIGluZmluaXRlO1xuLy8gfVxuXG4vKiBQcmVtaXVtIGJhZGdlICovXG4ucHJlbWl1bS1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1pbmRpZ28tNjAwKSwgIzZhMTFjYik7XG5cbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMjBweCAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDEwNiwgMTcsIDIwMywgMC4zKTtcbi8vICAgYW5pbWF0aW9uOiBiYWRnZVB1bHNlIDJzIGluZmluaXRlO1xufVxuXG4vKiBQbGFuIHRpdGxlICovXG4ucGxhbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mcmVlIC5wbGFuLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWdyYXktNzAwKTtcbn1cblxuLnByZW1pdW0gLnBsYW4tdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW5kaWdvLTgwMCk7XG59XG5cbi5wbGFuLXRpdGxlIGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4vKiBQcmljZSAqL1xuLnByaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBnYXA6IDVweDtcbn1cblxuLmRldmljZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnByaWNlLWFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICMwNjcyRTQ7XG4vLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0taW5kaWdvLTcwMCksIHZhcigtLWluZGlnby01MDApKTtcbi8vICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4ucHJpY2UtcGVyaW9kIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTYwMCk7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5kaXNjb3VudCB7XG4gIGNvbG9yOiB2YXIoLS1pbmRpZ28tNzAwKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgYmFja2dyb3VuZDogcmdiYSg3OSwgNzAsIDIyOSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhbmltYXRpb246IGRpc2NvdW50UHVsc2UgM3MgaW5maW5pdGU7XG59XG5cbi8qIEZlYXR1cmVzIGxpc3QgKi9cbi5mZWF0dXJlcy1saXN0IHtcbiAgbWFyZ2luOiAzMHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZlYXR1cmVzLWxpc3Q6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1pbmRpZ28tNTAwKSwgIzhlMmRlMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmZlYXR1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICBhbmltYXRpb246IGZlYXR1cmVTbGlkZUluIDAuNnMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5cbi5mcmVlIC5mZWF0dXJlOm50aC1jaGlsZCgxKSB7IGFuaW1hdGlvbi1kZWxheTogMC4zczsgfVxuLmZyZWUgLmZlYXR1cmU6bnRoLWNoaWxkKDIpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjRzOyB9XG4uZnJlZSAuZmVhdHVyZTpudGgtY2hpbGQoMykgeyBhbmltYXRpb24tZGVsYXk6IDAuNXM7IH1cbi5mcmVlIC5mZWF0dXJlOm50aC1jaGlsZCg0KSB7IGFuaW1hdGlvbi1kZWxheTogMC42czsgfVxuLmZyZWUgLmZlYXR1cmU6bnRoLWNoaWxkKDUpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjdzOyB9XG4uZnJlZSAuZmVhdHVyZTpudGgtY2hpbGQoNikgeyBhbmltYXRpb24tZGVsYXk6IDAuOHM7IH1cblxuLnByZW1pdW0gLmZlYXR1cmU6bnRoLWNoaWxkKDEpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjVzOyB9XG4ucHJlbWl1bSAuZmVhdHVyZTpudGgtY2hpbGQoMikgeyBhbmltYXRpb24tZGVsYXk6IDAuNnM7IH1cbi5wcmVtaXVtIC5mZWF0dXJlOm50aC1jaGlsZCgzKSB7IGFuaW1hdGlvbi1kZWxheTogMC43czsgfVxuLnByZW1pdW0gLmZlYXR1cmU6bnRoLWNoaWxkKDQpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjhzOyB9XG4ucHJlbWl1bSAuZmVhdHVyZTpudGgtY2hpbGQoNSkgeyBhbmltYXRpb24tZGVsYXk6IDAuOXM7IH1cblxuLmZlYXR1cmUtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1pbi13aWR0aDogMjRweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuLmZlYXR1cmUtaWNvbiBpIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tZ3JlZW4tNTAwKTtcbn1cblxuLmZlYXR1cmUtaWNvbiAuZmEtdGltZXMge1xuICBjb2xvcjogI2VmNDQ0NDtcbn1cblxuLmZlYXR1cmU6aG92ZXIgLmZlYXR1cmUtaWNvbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKSByb3RhdGUoNWRlZyk7XG59XG5cbi5mZWF0dXJlLXRleHQge1xuICBjb2xvcjogdmFyKC0tZ3JheS03MDApO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZlYXR1cmUtdGV4dDo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC01cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW5kaWdvLTUwMCk7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZTtcbn1cblxuLmZlYXR1cmU6aG92ZXIgLmZlYXR1cmUtdGV4dDo6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogQnV0dG9uICovXG4uc3Vic2NyaWJlLWJ0biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMThweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1pbmRpZ28tNjAwKSwgIzZhMTFjYik7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoNzksIDcwLCAyMjksIDAuMyk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuOHMgZWFzZS1vdXQgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMS4ycztcbn1cblxuLnN1YnNjcmliZS1idG46OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWluZGlnby03MDApLCAjOGUyZGUyKTtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcbn1cblxuLnN1YnNjcmliZS1idG46aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG59XG5cbi5zdWJzY3JpYmUtYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICBib3gtc2hhZG93OiAwIDEycHggMjVweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjQpO1xufVxuXG4uc3Vic2NyaWJlLWJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbn1cblxuLnJpcHBsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIGFuaW1hdGlvbjogcmlwcGxlRWZmZWN0IDFzIGxpbmVhcjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qIEFuaW1hdGlvbnMgKi9cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZlYXR1cmVTbGlkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi8vIEBrZXlmcmFtZXMgY2FyZEZsb2F0IHtcbi8vICAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbi8vICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxuLy8gfVxuXG4vLyBAa2V5ZnJhbWVzIHB1bHNlR2xvdyB7XG4vLyAgIDAlLCAxMDAlIHsgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWhvdmVyKTsgfVxuLy8gICA1MCUgeyBib3gtc2hhZG93OiAwIDE1cHggMzVweCByZ2JhKDEwNiwgMTcsIDIwMywgMC40KTsgfVxuLy8gfVxuXG4vLyBAa2V5ZnJhbWVzIGJhZGdlUHVsc2Uge1xuLy8gICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbi8vICAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgfVxuLy8gfVxuXG4vLyBAa2V5ZnJhbWVzIGRpc2NvdW50UHVsc2Uge1xuLy8gICAwJSwgMTAwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSg3OSwgNzAsIDIyOSwgMC4yKTsgfVxuLy8gICA1MCUgeyBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoNzksIDcwLCAyMjksIDApOyB9XG4vLyB9XG5cbkBrZXlmcmFtZXMgbGluZUdyb3cge1xuICBmcm9tIHsgd2lkdGg6IDA7IH1cbiAgdG8geyB3aWR0aDogODBweDsgfVxufVxuXG5Aa2V5ZnJhbWVzIHJpcHBsZUVmZmVjdCB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDQpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLyogRmxvYXRpbmcgZWxlbWVudHMgKi9cbi5mbG9hdGluZy1lbGVtZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgb3BhY2l0eTogMC4xO1xuICBhbmltYXRpb246IGZsb2F0IDE1cyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbi5mbG9hdGluZy1lbGVtZW50Om50aC1jaGlsZCgxKSB7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiA1JTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWluZGlnby01MDApO1xuICBhbmltYXRpb24tZHVyYXRpb246IDIwcztcbn1cblxuLmZsb2F0aW5nLWVsZW1lbnQ6bnRoLWNoaWxkKDIpIHtcbiAgdG9wOiAyMCU7XG4gIHJpZ2h0OiAxMCU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4tNTAwKTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyNXM7XG59XG5cbi5mbG9hdGluZy1lbGVtZW50Om50aC1jaGlsZCgzKSB7XG4gIGJvdHRvbTogMTUlO1xuICBsZWZ0OiAxNSU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW5kaWdvLTYwMCk7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMzBzO1xufVxuXG5Aa2V5ZnJhbWVzIGZsb2F0IHtcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDBkZWcpOyB9XG4gIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCkgcm90YXRlKDkwZGVnKTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDE4MGRlZyk7IH1cbiAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpIHJvdGF0ZSgyNzBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLyogUmVzcG9uc2l2ZSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5wbGFucy1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLnBsYW4tY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgfVxuICBcbiAgLmhlYWRlciBwIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiAyLjNyZW07XG4gIH1cbiAgXG4gIC5oZWFkZXIgcCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIFxuICAucHJpY2UtYW1vdW50IHtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgfVxuICBcbiAgLnBsYW4tY2FyZCB7XG4gICAgcGFkZGluZzogMzBweCAyNXB4O1xuICB9XG59XG5cbi5wbGFuLWNhcmQucHJlbWl1bS5ob3ZlcmVkIC5ob3Zlci1nbG93IHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4vKiBBbmltYXRpb24gM0QgYW3DqWxpb3LDqWUgKi9cbi5wbGFuLWNhcmQge1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgwZGVnKSByb3RhdGVYKDBkZWcpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIFxuICAgICAgICAgICAgICBib3gtc2hhZG93IDAuNnMgZWFzZTtcbn1cblxuLnBsYW4tY2FyZC5ob3ZlcmVkIHtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoNWRlZykgcm90YXRlWCg1ZGVnKSB0cmFuc2xhdGVaKDMwcHgpO1xuICBib3gtc2hhZG93OiAwIDI1cHggNTBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjMpO1xufVxuXG4vKiBFZmZldCB2YWd1ZSBwb3VyIGxlIGJvdXRvbiAqL1xuLndhdmUtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xufVxuXG4ud2F2ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTAwcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiA0MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC03NSUpIHNjYWxlKDApO1xuICBhbmltYXRpb246IHdhdmUgMXMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbkBrZXlmcmFtZXMgd2F2ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNzUlKSBzY2FsZSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC03NSUpIHNjYWxlKDMpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLyogQW5pbWF0aW9ucyBmbHVpZGVzICovXG5Aa2V5ZnJhbWVzIGNhcmQtZmxvYXQge1xuICAwJSwgMTAwJSB7IFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSB0cmFuc2xhdGVZKDApIHJvdGF0ZVkoMCkgcm90YXRlWCgwKTsgXG4gIH1cbiAgNTAlIHsgXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHRyYW5zbGF0ZVkoLTIwcHgpIHJvdGF0ZVkoMmRlZykgcm90YXRlWCgxZGVnKTsgXG4gIH1cbn1cblxuLyogRWZmZXQgcGFyYWxsYXhlICovXG4ucGxhbi1jYXJkLmZyZWUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xufVxuXG4ucGxhbi1jYXJkLnByZW1pdW0ge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG4vKiBSZXNwb25zaXZlIGFtw6lsaW9yw6kgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucGxhbnMtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIFxuICAucGxhbi1jYXJkIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgXG4gIDpyb290IHtcbiAgICAtLWdsb3ctc2l6ZTogMzAwcHg7XG4gIH1cbn1cblxuLy8gLmljb25fY2xvc2Uge1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICByaWdodDogMTVweDtcbi8vICAgICB0b3A6IDZweDtcbi8vICAgICAvLyB6LWluZGV4OiA5OTk5O1xuLy8gfVxuXG4vLyAuaWNvbl9jbG9zZSBpIHtcbi8vICAgICBmb250LXNpemU6IDI1cHg7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gfVxuXG4vLyAuYXBwLWNvbnRhaW5lciB7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4vLyAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwwLDAsMC4xKTtcbi8vICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4vLyAgIG1hcmdpbjogMnJlbSBhdXRvO1xuLy8gICBwYWRkaW5nOiAycmVtO1xuLy8gICB6LWluZGV4OiAxMDA7XG4vLyB9XG5cblxuLnByaWNlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4ucHJpY2UtZGlzcGxheSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi50b2dnbGUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi50b2dnbGUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbn1cblxuLnRvZ2dsZS1idXR0b24uYW5udWFsLW1vZGUge1xuICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogIzNkOGI0MDtcbn1cblxuLm9yaWdpbmFsLXByaWNlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmRpc2NvdW50LWJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9wcmljaW5nLWNhcmQvcHJpY2luZy1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBRjtBQUVFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUFKO0FBRUk7RUFDRSxVQUFBO0VBQ0EscUJBQUE7QUFBTjs7QUFrQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWZGOztBQWlCQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFkRjs7QUFnQkE7RUFDRSxxQkFBQTtFQUNBLDZDQUFBO0FBYkY7O0FBZUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFaRjs7QUFjQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFYRjs7QUFhQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQVZGOztBQVlBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBVEY7O0FBV0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBUkY7O0FBVUE7RUFDRSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFQRjs7QUFTQTtFQUNFLFdBQUE7QUFORjs7QUFRQTtFQUNFLFlBQUEsRUFBQSxj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O0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUF2Q0Y7QUFDQSxnbjdCQUFnbjdCIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucHJpY2luZy1zZWN0aW9uIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgYmFja2dyb3VuZDogI2Y5ZmJmZjtcbiAgLy8gZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pY29uX2Nsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0ycHg7XG4gIHJpZ2h0OiA2cHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBcbiAgaSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjMzYzNTM1O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIH1cbiAgfVxufVxuXG4vLyAuaWNvbl9jbG9zZSB7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgdG9wOiAyMHB4O1xuLy8gICByaWdodDogMjBweDtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBmb250LXNpemU6IDI0cHg7XG4vLyAgIHotaW5kZXg6IDEwMTtcbiAgXG4vLyAgICY6aG92ZXIge1xuLy8gICAgIGNvbG9yOiAjZmY0NzU3O1xuLy8gICB9XG4vLyB9XG5cbi5wcmljaW5nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEuNXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnBsYW4tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHdpZHRoOiAyNTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wbGFuLWNhcmQuaGlnaGxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiAjMDY3MkU0O1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNTUsOTIsMjU1LDAuMyk7XG59XG4ucGxhbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjMDY3MkU0O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBsYW4taGVhZGVyIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOiAjRTlENDIxO1xufVxuLnByaWNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgcmlnaHQ6IC0xMHB4O1xuICBiYWNrZ3JvdW5kOiAjRTlENDIxO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbi5mZWF0dXJlcy10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW46IDFyZW0gMDtcbn1cbi5mZWF0dXJlcy10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi5mZWF0dXJlcy10YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gIGNvbG9yOiAjNTU1O1xufVxuLmF2YWlsYWJsZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcMjcxNCc7IC8qIGNoZWNrbWFyayAqL1xuICBjb2xvcjogIzI4YTc0NTtcbn1cbi51bmF2YWlsYWJsZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcMjcxNic7IC8qIGNyb3NzICovXG4gIGNvbG9yOiAjZGMzNTQ1O1xufVxuLnNlbGVjdC1idG4ge1xuICBtYXJnaW46IDFyZW0gMDtcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNjcyRTQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzA2NzJFNDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbi5zZWxlY3QtYnRuLmhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQ6ICMwNjcyRTQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zZWxlY3QtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzA0NWFiNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5cblxuXG5cblxuXG5cbi8qIGFwcC5jb21wb25lbnQuY3NzICovXG4vKiBWYXJpYWJsZXMgZXQgcmVzZXQgKi9cbjpyb290IHtcbiAgLS1pbmRpZ28tOTAwOiAjMWExYTVkO1xuICAtLWluZGlnby04MDA6ICMyYTJhOGE7XG4gIC0taW5kaWdvLTcwMDogIzNhM2FiNztcbiAgLS1pbmRpZ28tNjAwOiAjNGE0YWU1O1xuICAtLWluZGlnby01MDA6ICM2MzY2ZjE7XG4gIC0taW5kaWdvLTEwMDogI2UwZTdmZjtcbiAgLS1pbmRpZ28tNTA6ICNmMGYzZmY7XG4gIC0tZ3JheS05MDA6ICMxMTE4Mjc7XG4gIC0tZ3JheS04MDA6ICMxZjI5Mzc7XG4gIC0tZ3JheS03MDA6ICMzNzQxNTE7XG4gIC0tZ3JheS02MDA6ICM0YjU1NjM7XG4gIC0tZ3JheS0zMDA6ICNkMWQ1ZGI7XG4gIC0tZ3JheS0yMDA6ICNlNWU3ZWI7XG4gIC0tZ3JheS0xMDA6ICNmM2Y0ZjY7XG4gIC0tZ3JlZW4tNTAwOiAjMTBiOTgxO1xuICAtLXdoaXRlOiAjZmZmZmZmO1xuICAtLXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAtLXNoYWRvdy1ob3ZlcjogMCAxMnB4IDMwcHggcmdiYSg3OSwgNzAsIDIyOSwgMC4yNSk7XG4gIC0tbW91c2UteDogMHB4O1xuICAtLW1vdXNlLXk6IDBweDtcbiAgLS1nbG93LXNpemU6IDQwMHB4O1xuICAtLXBhcnRpY2xlLWNvdW50OiAzMDtcbn1cblxuLmFwcC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBib3R0b20sIHZhcigtLWluZGlnby01MCkgMCUsIHZhcigtLXdoaXRlKSA3MCUpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC44cyBlYXNlLW91dCBmb3J3YXJkcztcbn1cblxuLnBhcnRpY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0taW5kaWdvLTUwMCksIHZhcigtLWdyZWVuLTUwMCkpO1xuICBvcGFjaXR5OiAwLjc7XG4gIGFuaW1hdGlvbjogZmxvYXQgMTVzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBmaWx0ZXI6IGJsdXIoMnB4KTtcbn1cblxuLmhvdmVyLWdsb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyh2YXIoLS1tb3VzZS15KSAtIHZhcigtLWdsb3ctc2l6ZSkvMik7XG4gIGxlZnQ6IGNhbGModmFyKC0tbW91c2UteCkgLSB2YXIoLS1nbG93LXNpemUpLzIpO1xuICB3aWR0aDogdmFyKC0tZ2xvdy1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1nbG93LXNpemUpO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4zKSAwJSwgdHJhbnNwYXJlbnQgNzAlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ucGFydGljbGVzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMDtcbn1cblxuLyogSGVhZGVyICovXG4uaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICBhbmltYXRpb246IHNsaWRlRG93biAwLjhzIGVhc2Utb3V0IGZvcndhcmRzO1xufVxuXG4uaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0taW5kaWdvLTcwMCksIHZhcigtLWluZGlnby01MDApKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSg3OSwgNzAsIDIyOSwgMC4xNSk7XG59XG5cbi5oZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogdmFyKC0tZ3JheS02MDApO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhZGVyIHA6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0taW5kaWdvLTUwMCksIHZhcigtLWdyZWVuLTUwMCkpO1xuICBtYXJnaW46IDE1cHggYXV0byAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBhbmltYXRpb246IGxpbmVHcm93IDEuMnMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5cbi8qIFBsYW5zIGNvbnRhaW5lciAqL1xuLnBsYW5zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAzMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGVyc3BlY3RpdmU6IDE1MDBweDtcbn1cblxuLyogUGxhbiBjYXJkICovXG4ucGxhbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcbiAgcGFkZGluZzogNDBweCAzNXB4O1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbi8vICAgYW5pbWF0aW9uOiBjYXJkRmxvYXQgOHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5wbGFuLWNhcmQuZnJlZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG4ucGxhbi1jYXJkLnByZW1pdW0ge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pbmRpZ28tNTAwKTtcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgdmFyKC0taW5kaWdvLTUwKSwgI2ZhZmJmZik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgei1pbmRleDogMjtcbn1cblxuLy8gLnBsYW4tY2FyZDpob3ZlciB7XG4vLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCkgc2NhbGUoMS4wMik7XG4vLyAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1ob3Zlcik7XG4vLyB9XG5cbi8vIC5wbGFuLWNhcmQucHJlbWl1bS5ob3ZlcmVkIHtcbi8vICAgYW5pbWF0aW9uOiBwdWxzZUdsb3cgMnMgaW5maW5pdGU7XG4vLyB9XG5cbi8qIFByZW1pdW0gYmFkZ2UgKi9cbi5wcmVtaXVtLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWluZGlnby02MDApLCAjNmExMWNiKTtcblxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDAgMjBweDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMTA2LCAxNywgMjAzLCAwLjMpO1xuLy8gICBhbmltYXRpb246IGJhZGdlUHVsc2UgMnMgaW5maW5pdGU7XG59XG5cbi8qIFBsYW4gdGl0bGUgKi9cbi5wbGFuLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZyZWUgLnBsYW4tdGl0bGUge1xuICBjb2xvcjogdmFyKC0tZ3JheS03MDApO1xufVxuXG4ucHJlbWl1bSAucGxhbi10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pbmRpZ28tODAwKTtcbn1cblxuLnBsYW4tdGl0bGUgaSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi8qIFByaWNlICovXG4ucHJpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGdhcDogNXB4O1xufVxuXG4uZGV2aWNlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucHJpY2UtYW1vdW50IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzA2NzJFNDtcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1pbmRpZ28tNzAwKSwgdmFyKC0taW5kaWdvLTUwMCkpO1xuLy8gICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5wcmljZS1wZXJpb2Qge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHZhcigtLWdyYXktNjAwKTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmRpc2NvdW50IHtcbiAgY29sb3I6IHZhcigtLWluZGlnby03MDApO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc5LCA3MCwgMjI5LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGFuaW1hdGlvbjogZGlzY291bnRQdWxzZSAzcyBpbmZpbml0ZTtcbn1cblxuLyogRmVhdHVyZXMgbGlzdCAqL1xuLmZlYXR1cmVzLWxpc3Qge1xuICBtYXJnaW46IDMwcHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZmVhdHVyZXMtbGlzdDo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWluZGlnby01MDApLCAjOGUyZGUyKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uZmVhdHVyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIGFuaW1hdGlvbjogZmVhdHVyZVNsaWRlSW4gMC42cyBlYXNlLW91dCBmb3J3YXJkcztcbn1cblxuLmZyZWUgLmZlYXR1cmU6bnRoLWNoaWxkKDEpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOyB9XG4uZnJlZSAuZmVhdHVyZTpudGgtY2hpbGQoMikgeyBhbmltYXRpb24tZGVsYXk6IDAuNHM7IH1cbi5mcmVlIC5mZWF0dXJlOm50aC1jaGlsZCgzKSB7IGFuaW1hdGlvbi1kZWxheTogMC41czsgfVxuLmZyZWUgLmZlYXR1cmU6bnRoLWNoaWxkKDQpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjZzOyB9XG4uZnJlZSAuZmVhdHVyZTpudGgtY2hpbGQoNSkgeyBhbmltYXRpb24tZGVsYXk6IDAuN3M7IH1cbi5mcmVlIC5mZWF0dXJlOm50aC1jaGlsZCg2KSB7IGFuaW1hdGlvbi1kZWxheTogMC44czsgfVxuXG4ucHJlbWl1bSAuZmVhdHVyZTpudGgtY2hpbGQoMSkgeyBhbmltYXRpb24tZGVsYXk6IDAuNXM7IH1cbi5wcmVtaXVtIC5mZWF0dXJlOm50aC1jaGlsZCgyKSB7IGFuaW1hdGlvbi1kZWxheTogMC42czsgfVxuLnByZW1pdW0gLmZlYXR1cmU6bnRoLWNoaWxkKDMpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjdzOyB9XG4ucHJlbWl1bSAuZmVhdHVyZTpudGgtY2hpbGQoNCkgeyBhbmltYXRpb24tZGVsYXk6IDAuOHM7IH1cbi5wcmVtaXVtIC5mZWF0dXJlOm50aC1jaGlsZCg1KSB7IGFuaW1hdGlvbi1kZWxheTogMC45czsgfVxuXG4uZmVhdHVyZS1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWluLXdpZHRoOiAyNHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuXG4uZmVhdHVyZS1pY29uIGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1ncmVlbi01MDApO1xufVxuXG4uZmVhdHVyZS1pY29uIC5mYS10aW1lcyB7XG4gIGNvbG9yOiAjZWY0NDQ0O1xufVxuXG4uZmVhdHVyZTpob3ZlciAuZmVhdHVyZS1pY29uIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHJvdGF0ZSg1ZGVnKTtcbn1cblxuLmZlYXR1cmUtdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1ncmF5LTcwMCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZmVhdHVyZS10ZXh0OjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTVweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmRpZ28tNTAwKTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlO1xufVxuXG4uZmVhdHVyZTpob3ZlciAuZmVhdHVyZS10ZXh0OjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBCdXR0b24gKi9cbi5zdWJzY3JpYmUtYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWluZGlnby02MDApLCAjNmExMWNiKTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSg3OSwgNzAsIDIyOSwgMC4zKTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC44cyBlYXNlLW91dCBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjJzO1xufVxuXG4uc3Vic2NyaWJlLWJ0bjo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0taW5kaWdvLTcwMCksICM4ZTJkZTIpO1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xufVxuXG4uc3Vic2NyaWJlLWJ0bjpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbn1cblxuLnN1YnNjcmliZS1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAyNXB4IHJnYmEoNzksIDcwLCAyMjksIDAuNCk7XG59XG5cbi5zdWJzY3JpYmUtYnRuOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xufVxuXG4ucmlwcGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgYW5pbWF0aW9uOiByaXBwbGVFZmZlY3QgMXMgbGluZWFyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogQW5pbWF0aW9ucyAqL1xuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICB0byB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmVhdHVyZVNsaWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLy8gQGtleWZyYW1lcyBjYXJkRmxvYXQge1xuLy8gICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuLy8gICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpOyB9XG4vLyB9XG5cbi8vIEBrZXlmcmFtZXMgcHVsc2VHbG93IHtcbi8vICAgMCUsIDEwMCUgeyBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctaG92ZXIpOyB9XG4vLyAgIDUwJSB7IGJveC1zaGFkb3c6IDAgMTVweCAzNXB4IHJnYmEoMTA2LCAxNywgMjAzLCAwLjQpOyB9XG4vLyB9XG5cbi8vIEBrZXlmcmFtZXMgYmFkZ2VQdWxzZSB7XG4vLyAgIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuLy8gICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyB9XG4vLyB9XG5cbi8vIEBrZXlmcmFtZXMgZGlzY291bnRQdWxzZSB7XG4vLyAgIDAlLCAxMDAlIHsgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDc5LCA3MCwgMjI5LCAwLjIpOyB9XG4vLyAgIDUwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSg3OSwgNzAsIDIyOSwgMCk7IH1cbi8vIH1cblxuQGtleWZyYW1lcyBsaW5lR3JvdyB7XG4gIGZyb20geyB3aWR0aDogMDsgfVxuICB0byB7IHdpZHRoOiA4MHB4OyB9XG59XG5cbkBrZXlmcmFtZXMgcmlwcGxlRWZmZWN0IHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoNCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4vKiBGbG9hdGluZyBlbGVtZW50cyAqL1xuLmZsb2F0aW5nLWVsZW1lbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAwLjE7XG4gIGFuaW1hdGlvbjogZmxvYXQgMTVzIGluZmluaXRlIGxpbmVhcjtcbn1cblxuLmZsb2F0aW5nLWVsZW1lbnQ6bnRoLWNoaWxkKDEpIHtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDUlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW5kaWdvLTUwMCk7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMjBzO1xufVxuXG4uZmxvYXRpbmctZWxlbWVudDpudGgtY2hpbGQoMikge1xuICB0b3A6IDIwJTtcbiAgcmlnaHQ6IDEwJTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbi01MDApO1xuICBhbmltYXRpb24tZHVyYXRpb246IDI1cztcbn1cblxuLmZsb2F0aW5nLWVsZW1lbnQ6bnRoLWNoaWxkKDMpIHtcbiAgYm90dG9tOiAxNSU7XG4gIGxlZnQ6IDE1JTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmRpZ28tNjAwKTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMHM7XG59XG5cbkBrZXlmcmFtZXMgZmxvYXQge1xuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7IH1cbiAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KSByb3RhdGUoOTBkZWcpOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMTgwZGVnKTsgfVxuICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCkgcm90YXRlKDI3MGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4vKiBSZXNwb25zaXZlICovXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLnBsYW5zLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAucGxhbi1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5oZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICB9XG4gIFxuICAuaGVhZGVyIHAge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDIuM3JlbTtcbiAgfVxuICBcbiAgLmhlYWRlciBwIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgXG4gIC5wcmljZS1hbW91bnQge1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICB9XG4gIFxuICAucGxhbi1jYXJkIHtcbiAgICBwYWRkaW5nOiAzMHB4IDI1cHg7XG4gIH1cbn1cblxuLnBsYW4tY2FyZC5wcmVtaXVtLmhvdmVyZWQgLmhvdmVyLWdsb3cge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi8qIEFuaW1hdGlvbiAzRCBhbcODwqlsaW9yw4PCqWUgKi9cbi5wbGFuLWNhcmQge1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWSgwZGVnKSByb3RhdGVYKDBkZWcpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIFxuICAgICAgICAgICAgICBib3gtc2hhZG93IDAuNnMgZWFzZTtcbn1cblxuLnBsYW4tY2FyZC5ob3ZlcmVkIHtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZVkoNWRlZykgcm90YXRlWCg1ZGVnKSB0cmFuc2xhdGVaKDMwcHgpO1xuICBib3gtc2hhZG93OiAwIDI1cHggNTBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjMpO1xufVxuXG4vKiBFZmZldCB2YWd1ZSBwb3VyIGxlIGJvdXRvbiAqL1xuLndhdmUtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xufVxuXG4ud2F2ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTAwcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiA0MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC03NSUpIHNjYWxlKDApO1xuICBhbmltYXRpb246IHdhdmUgMXMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbkBrZXlmcmFtZXMgd2F2ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNzUlKSBzY2FsZSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC03NSUpIHNjYWxlKDMpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLyogQW5pbWF0aW9ucyBmbHVpZGVzICovXG5Aa2V5ZnJhbWVzIGNhcmQtZmxvYXQge1xuICAwJSwgMTAwJSB7IFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSB0cmFuc2xhdGVZKDApIHJvdGF0ZVkoMCkgcm90YXRlWCgwKTsgXG4gIH1cbiAgNTAlIHsgXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHRyYW5zbGF0ZVkoLTIwcHgpIHJvdGF0ZVkoMmRlZykgcm90YXRlWCgxZGVnKTsgXG4gIH1cbn1cblxuLyogRWZmZXQgcGFyYWxsYXhlICovXG4ucGxhbi1jYXJkLmZyZWUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xufVxuXG4ucGxhbi1jYXJkLnByZW1pdW0ge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG4vKiBSZXNwb25zaXZlIGFtw4PCqWxpb3LDg8KpICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBsYW5zLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgLnBsYW4tY2FyZCB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIFxuICA6cm9vdCB7XG4gICAgLS1nbG93LXNpemU6IDMwMHB4O1xuICB9XG59XG5cbi8vIC5pY29uX2Nsb3NlIHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgcmlnaHQ6IDE1cHg7XG4vLyAgICAgdG9wOiA2cHg7XG4vLyAgICAgLy8gei1pbmRleDogOTk5OTtcbi8vIH1cblxuLy8gLmljb25fY2xvc2UgaSB7XG4vLyAgICAgZm9udC1zaXplOiAyNXB4O1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vIH1cblxuLy8gLmFwcC1jb250YWluZXIge1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICBib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsMCwwLDAuMSk7XG4vLyAgIG1heC13aWR0aDogMTIwMHB4O1xuLy8gICBtYXJnaW46IDJyZW0gYXV0bztcbi8vICAgcGFkZGluZzogMnJlbTtcbi8vICAgei1pbmRleDogMTAwO1xuLy8gfVxuXG5cbi5wcmljZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuLnByaWNlLWRpc3BsYXkge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4udG9nZ2xlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG4udG9nZ2xlLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG59XG5cbi50b2dnbGUtYnV0dG9uLmFubnVhbC1tb2RlIHtcbiAgYmFja2dyb3VuZDogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6ICMzZDhiNDA7XG59XG5cbi5vcmlnaW5hbC1wcmljZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5kaXNjb3VudC1iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 94114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/layout/admin/admin.component */ 44613);
/* harmony import */ var _theme_layout_guest_guest_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme/layout/guest/guest.component */ 65617);
/* harmony import */ var _admin_page_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-page/guards/auth.guard */ 748);
/* harmony import */ var _admin_page_guards_guestGuard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-page/guards/guestGuard */ 50540);
/* harmony import */ var _admin_page_guards_ModuleAccessGuard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-page/guards/ModuleAccessGuard */ 65610);
/* harmony import */ var _admin_page_pricing_card_pricing_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-page/pricing-card/pricing-card.component */ 12124);
/* harmony import */ var _admin_page_payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-page/payment-form/payment-form.component */ 13348);
/* harmony import */ var _admin_page_guards_GlobalUrlEncoderSerializer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-page/guards/GlobalUrlEncoderSerializer */ 3077);
/* harmony import */ var _admin_page_guards_roleGuard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-page/guards/roleGuard */ 84892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);

// project import











const routes = [
// Routes publiques (non authentifiées)
{
  path: '',
  component: _theme_layout_guest_guest_component__WEBPACK_IMPORTED_MODULE_1__.GuestComponent,
  canActivate: [_admin_page_guards_guestGuard__WEBPACK_IMPORTED_MODULE_3__.guestGuard],
  // Empêche l'accès si déjà connecté
  children: [{
    path: '',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin-page_Navigation_header-nav_header-nav_component_ts"), __webpack_require__.e("default-src_app_demo_pages_authentication_login_login-page_login-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/authentication/login/login-page/login-page.component */ 82636)).then(m => m.LoginPageComponent)
  }, {
    path: 'inscription',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin-page_Navigation_header-nav_header-nav_component_ts"), __webpack_require__.e("src_app_demo_pages_authentication_login_inscription_inscription_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/authentication/login/inscription/inscription.component */ 29056)).then(m => m.InscriptionComponent)
  }, {
    path: 'connexion',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin-page_Navigation_header-nav_header-nav_component_ts"), __webpack_require__.e("src_app_demo_pages_authentication_login_connexion-page_connexion-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/authentication/login/connexion-page/connexion-page.component */ 66840)).then(m => m.ConnexionPageComponent)
  }, {
    path: 'auth/signup',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_authentication_sign-up_sign-up_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/authentication/sign-up/sign-up.component */ 76746))
  }, {
    path: 'auth/signin',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_pages_authentication_sign-in_sign-in_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/authentication/sign-in/sign-in.component */ 53662))
  }
  // {
  //   path: 'pos-accueil',
  //   loadComponent: () => import('./demo/pages/authentication/pos-accueil/pos-accueil.component')
  // },
  ]
},
// … dans AppRoutingModule, en dehors du component: AdminComponent
// {
//   path: 'pos-accueil',
//   loadComponent: () =>
//     import('./POS/pos-accueil/pos-accueil.component')
//       .then(m => m.PosAccueilComponent),
//   canActivate: [authGuard],
//   data: {
//     hideHeader: true,
//     hideSidebar: true
//   }
// },
{
  path: 'pos-caisse',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin-page_SERVICES_boutique-service_ts"), __webpack_require__.e("default-src_app_admin-page_MODELS_CaisseModel_safe-html_pipe_ts-src_app_admin-page_SERVICES_C-175702"), __webpack_require__.e("src_app_POS_pos-caisse-header_pos-caisse-header_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./POS/pos-caisse-header/pos-caisse-header.component */ 43121)).then(m => m.PosCaisseHeaderComponent),
  canActivate: [_admin_page_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard],
  data: {
    hideHeader: true,
    hideSidebar: true
  },
  children: [{
    path: '',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin-page_SERVICES_boutique-service_ts"), __webpack_require__.e("default-src_app_admin-page_MODELS_CaisseModel_safe-html_pipe_ts-src_app_admin-page_SERVICES_C-175702"), __webpack_require__.e("src_app_POS_pos-caisse_pos-caisse_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./POS/pos-caisse/pos-caisse.component */ 34313)).then(m => m.PosCaisseComponent)
  }
  // {
  //   path: 'pos-journal-caisse',
  //   loadComponent: () =>
  //     import('./POS/pos-journal-caisse/pos-journal-caisse.component')
  //       .then(m => m.PosJournalCaisseComponent),
  // },
  ]
}, {
  path: 'pos-journal-caisse',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin-page_SERVICES_boutique-service_ts"), __webpack_require__.e("src_app_POS_pos-journal-caisse_pos-journal-caisse_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./POS/pos-journal-caisse/pos-journal-caisse.component */ 87817)).then(m => m.PosJournalCaisseComponent),
  canActivate: [_admin_page_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard]
  // data: { hideHeader: true, hideSidebar: true },
  // children: [
  //   {
  //     path: '',
  //     loadComponent: () =>
  //       import('./POS/pos-caisse/pos-caisse.component')
  //         .then(m => m.PosCaisseComponent),
  //   },
  //   {
  //     path: 'pos-journal-caisse',
  //     loadComponent: () =>
  //       import('./POS/pos-journal-caisse/pos-journal-caisse.component')
  //         .then(m => m.PosJournalCaisseComponent),
  //   },
  // ]
}, {
  path: 'pos-accueil',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin-page_SERVICES_boutique-service_ts"), __webpack_require__.e("default-src_app_POS_pos-accueil_view-state_service_ts-src_app_admin-page_MODELS_cfa-currency_-059e64"), __webpack_require__.e("common"), __webpack_require__.e("src_app_POS_pos-accueil_pos-accueil_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./POS/pos-accueil/pos-accueil.component */ 50505)).then(m => m.PosAccueilComponent),
  canActivate: [_admin_page_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard],
  data: {
    hideHeader: true,
    hideSidebar: true
  },
  children: [{
    path: '',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_focus-key-manager-C1rAQJ5z_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_form-field-DqPi4knt_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_index-DOxJc1m4_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_a11y_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("default-src_app_admin-page_SERVICES_categorie_service_ts-src_app_admin-page_SERVICES_produit_-36e438"), __webpack_require__.e("default-src_app_POS_pos-accueil_view-state_service_ts-src_app_admin-page_MODELS_cfa-currency_-059e64"), __webpack_require__.e("common"), __webpack_require__.e("src_app_POS_pos-vente_pos-vente_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./POS/pos-vente/pos-vente.component */ 31297)).then(m => m.PosVenteComponent)
  }, {
    path: 'commandes',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_POS_pos-commande_pos-commande_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./POS/pos-commande/pos-commande.component */ 17209)).then(m => m.PosCommandeComponent)
  }, {
    path: 'paiement',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_POS_pos-paiement_pos-paiement_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./POS/pos-paiement/pos-paiement.component */ 46447)).then(m => m.PosPaiementComponent)
  }]
},
//home page
{
  path: 'home',
  // mettre en minuscules
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_admin-page_home_home_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/home/home.component */ 31752)).then(m => m.HomeComponent)
},
// puis votre bloc AdminComponent { … } sans la route pos-accueil à l’intérieur
// Routes privées (authentifiées)
{
  path: '',
  component: _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_0__.AdminComponent,
  canActivate: [_admin_page_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard],
  // Protection globale
  children: [
  // Redirection par défaut
  {
    path: '',
    redirectTo: 'analytics',
    pathMatch: 'full'
  },
  // Vos routes protégées
  {
    path: 'loginPage',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin-page_Navigation_header-nav_header-nav_component_ts"), __webpack_require__.e("default-src_app_demo_pages_authentication_login_login-page_login-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/pages/authentication/login/login-page/login-page.component */ 82636)).then(m => m.LoginPageComponent)
  }, {
    path: 'analytics',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_dashboard_dash-analytics_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/dashboard/dash-analytics.component */ 8191))
  }, {
    path: 'component',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_ui-element_ui-basic_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/ui-element/ui-basic.module */ 1859)).then(m => m.UiBasicModule)
  }, {
    path: 'chart',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_chart-maps_core-apex_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/chart-maps/core-apex.component */ 63122))
  }, {
    path: 'forms',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_forms_form-elements_form-elements_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/forms/form-elements/form-elements.component */ 18278))
  }, {
    path: 'tables',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_tables_tbl-bootstrap_tbl-bootstrap_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/tables/tbl-bootstrap/tbl-bootstrap.component */ 76858))
  }, {
    path: 'sample-page',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_demo_other_sample-page_sample-page_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/other/sample-page/sample-page.component */ 28119))
  }, {
    path: 'produit',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_focus-key-manager-C1rAQJ5z_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_form-field-DqPi4knt_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_index-DOxJc1m4_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_a11y_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_module-Cbt8Fcmv_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_icon_mjs"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_table_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_admin-page_SERVICES_produit_service_ts-node_modules_angular_cdk_fesm2022_drag-7aa9d5"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_produits_produits_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/produits/produits.component */ 16426)).then(m => m.ProduitsComponent)
  }, {
    path: 'addProduit',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_focus-key-manager-C1rAQJ5z_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_form-field-DqPi4knt_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_index-DOxJc1m4_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_a11y_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_module-Cbt8Fcmv_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_icon_mjs"), __webpack_require__.e("default-node_modules_browser-image-compression_dist_browser-image-compression_mjs"), __webpack_require__.e("default-src_app_admin-page_SERVICES_categorie_service_ts-src_app_admin-page_SERVICES_produit_-36e438"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_produits_add-produit_add-produit_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/produits/add-produit/add-produit.component */ 96335)).then(m => m.AddProduitComponent)
  }, {
    path: 'detail-produit/:id',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_focus-key-manager-C1rAQJ5z_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_form-field-DqPi4knt_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_index-DOxJc1m4_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_a11y_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("default-src_app_admin-page_SERVICES_categorie_service_ts-src_app_admin-page_SERVICES_produit_-36e438"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_produits_list-produit_list-produit_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/produits/list-produit/list-produit.component */ 72789)).then(m => m.ListProduitComponent)
  }, {
    path: 'detail-stock/:id',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("src_app_admin-page_detail-stock_detail-stock_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/detail-stock/detail-stock.component */ 8114)).then(m => m.DetailStockComponent)
  }, {
    path: 'entrer',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_admin-page_entrer_entrer_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/entrer/entrer.component */ 35158)).then(m => m.EntrerComponent)
  }, {
    path: 'vente',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("src_app_admin-page_vente_vente_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/vente/vente.component */ 79084)).then(m => m.VenteComponent)
  }, {
    path: 'stocks',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_focus-key-manager-C1rAQJ5z_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_form-field-DqPi4knt_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_index-DOxJc1m4_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_a11y_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_module-Cbt8Fcmv_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_icon_mjs"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_table_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_stocks_stocks_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/stocks/stocks.component */ 21760)).then(m => m.StocksComponent)
  }, {
    path: 'stock_ajustement',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_focus-key-manager-C1rAQJ5z_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_form-field-DqPi4knt_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_index-DOxJc1m4_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_a11y_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_icon_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_add-stock-ajustement_add-stock-ajustement_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/add-stock-ajustement/add-stock-ajustement.component */ 56400)).then(m => m.AddStockAjustementComponent)
  }, {
    path: 'clients',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_focus-key-manager-C1rAQJ5z_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_form-field-DqPi4knt_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_index-DOxJc1m4_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_a11y_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_module-Cbt8Fcmv_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_table_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_clients_clients_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/clients/clients.component */ 9924)).then(m => m.ClientsComponent)
  }, {
    path: 'fournisseurs',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_focus-key-manager-C1rAQJ5z_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_form-field-DqPi4knt_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_index-DOxJc1m4_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_a11y_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_module-Cbt8Fcmv_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_paginator_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_fournisseurs_fournisseurs_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/fournisseurs/fournisseurs.component */ 91166)).then(m => m.FournisseursComponent)
  }, {
    path: 'facture',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_focus-key-manager-C1rAQJ5z_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_form-field-DqPi4knt_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_index-DOxJc1m4_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_a11y_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_module-Cbt8Fcmv_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_icon_mjs"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_table_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_expansion_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_core_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_datepicker_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_facture_facture_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/facture/facture.component */ 62728)).then(m => m.FactureComponent)
  }, {
    canActivate: [_admin_page_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.authGuard, _admin_page_guards_roleGuard__WEBPACK_IMPORTED_MODULE_8__.roleGuard],
    path: 'utilisateur',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_focus-key-manager-C1rAQJ5z_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_form-field-DqPi4knt_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_index-DOxJc1m4_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_a11y_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_module-Cbt8Fcmv_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_paginator_mjs"), __webpack_require__.e("default-src_app_admin-page_SERVICES_boutique-service_ts"), __webpack_require__.e("src_app_admin-page_compte_compte_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/compte/compte.component */ 57874)).then(m => m.CompteComponent)
  }, {
    path: 'profil',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_browser-image-compression_dist_browser-image-compression_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_profil_profil_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/profil/profil.component */ 75650)).then(m => m.ProfilComponent)
  }, {
    path: 'userPermission/:userId',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_admin-page_permission_permission_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/permission/permission.component */ 36160)).then(m => m.PermissionComponent)
  }, {
    path: 'boutique',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_admin-page_boutique_boutique_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/boutique/boutique.component */ 30562)).then(m => m.BoutiqueComponent)
  }, {
    path: 'detail-boutique/:id',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin-page_SERVICES_boutique-service_ts"), __webpack_require__.e("src_app_admin-page_detail-boutique_detail-boutique_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/detail-boutique/detail-boutique.component */ 30624)).then(m => m.DetailBoutiqueComponent)
  }, {
    path: 'comptabilite',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_comptabilite_comptabilite_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/comptabilite/comptabilite.component */ 98712)).then(m => m.ComptabiliteComponent)
  }, {
    path: 'ajouter-client',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_focus-key-manager-C1rAQJ5z_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_form-field-DqPi4knt_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_index-DOxJc1m4_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_a11y_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("default-node_modules_browser-image-compression_dist_browser-image-compression_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_clients_addClient_add-clients_add-clients_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/clients/addClient/add-clients/add-clients.component */ 34744)).then(m => m.AddClientsComponent)
  }, {
    path: 'ajouter-entreprise-client',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_clients_add-entreprise-client_add-entreprise-client_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/clients/add-entreprise-client/add-entreprise-client.component */ 46199)).then(m => m.AddEntrepriseClientComponent)
  }, {
    path: 'detail-client/:id',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_focus-key-manager-C1rAQJ5z_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_form-field-DqPi4knt_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_index-DOxJc1m4_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_a11y_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_icon_mjs"), __webpack_require__.e("default-node_modules_browser-image-compression_dist_browser-image-compression_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_table_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_tabs_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_expansion_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_clients_detail-edit-client_detail-edit-client_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/clients/detail-edit-client/detail-edit-client.component */ 74229)).then(m => m.DetailEditClientComponent)
  }, {
    path: 'detail-entreprise-client/:id',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_clients_detail-edit-entreprise-client_detail-edit-entreprise-client_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/clients/detail-edit-entreprise-client/detail-edit-entreprise-client.component */ 94235)).then(m => m.DetailEditEntrepriseClientComponent)
  }, {
    path: 'detail-entreprise/:id',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_focus-key-manager-C1rAQJ5z_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_tabs_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_clients_detail-edit-entreprise_detail-edit-entreprise_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/clients/detail-edit-entreprise/detail-edit-entreprise.component */ 19589)).then(m => m.DetailEditEntrepriseComponent)
  }, {
    path: 'facture-proforma',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_focus-key-manager-C1rAQJ5z_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_form-field-DqPi4knt_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_index-DOxJc1m4_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_a11y_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_module-Cbt8Fcmv_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_icon_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_core_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_datepicker_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_facture-proforma_facture-proforma_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/facture-proforma/facture-proforma.component */ 18116)).then(m => m.FactureProformaComponent)
  }, {
    path: 'facture-reel',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_focus-key-manager-C1rAQJ5z_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_form-field-DqPi4knt_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_index-DOxJc1m4_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_a11y_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_module-Cbt8Fcmv_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_paginator_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_facture-reel_facture-reel_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/facture-reel/facture-reel.component */ 66748)).then(m => m.FactureReelComponent)
  }, {
    path: 'addfacture-proforma',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_focus-key-manager-C1rAQJ5z_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_form-field-DqPi4knt_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_index-DOxJc1m4_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2022_a11y_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_icon_mjs"), __webpack_require__.e("default-node_modules_browser-image-compression_dist_browser-image-compression_mjs"), __webpack_require__.e("default-src_app_admin-page_SERVICES_categorie_service_ts-src_app_admin-page_SERVICES_produit_-36e438"), __webpack_require__.e("default-src_app_admin-page_SERVICES_entreprise-service_ts-src_app_admin-page_SERVICES_facture-68e4cb"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_facture-proforma_addfacture-proforma_addfacture-proforma_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/facture-proforma/addfacture-proforma/addfacture-proforma.component */ 86846)).then(m => m.AddfactureProformaComponent)
  }, {
    path: 'facture-proforma-details/:id',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("default-src_app_admin-page_SERVICES_produit_service_ts-node_modules_angular_cdk_fesm2022_drag-7aa9d5"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_facture-proforma_detail-facture-proforma_detail-facture-proforma_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/facture-proforma/detail-facture-proforma/detail-facture-proforma.component */ 42222)).then(m => m.DetailFactureProformaComponent),
    canActivate: [_admin_page_guards_ModuleAccessGuard__WEBPACK_IMPORTED_MODULE_4__.ModuleAccessGuard],
    data: {
      codeModule: 'GESTION_FACTURATION'
    }
  }, {
    path: 'ajouter-fournisseur',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_browser-image-compression_dist_browser-image-compression_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_fournisseurs_add-fournisseur_add-fournisseur_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/fournisseurs/add-fournisseur/add-fournisseur.component */ 21955)).then(m => m.AddFournisseurComponent)
  }, {
    path: 'detail-fournisseur/:id',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_focus-key-manager-C1rAQJ5z_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_form-field-DqPi4knt_mjs"), __webpack_require__.e("default-node_modules_browser-image-compression_dist_browser-image-compression_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_tabs_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_expansion_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_fournisseurs_detail-edit-fournisseur_detail-edit-fournisseur_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/fournisseurs/detail-edit-fournisseur/detail-edit-fournisseur.component */ 89803)).then(m => m.DetailEditFournisseurComponent)
  }, {
    path: 'facture-proforma-apercu',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin-page_SERVICES_entreprise-service_ts-src_app_admin-page_SERVICES_facture-68e4cb"), __webpack_require__.e("default-src_app_admin-page_facture-proforma_facture-proforma-apercu_facture-proforma-apercu_c-3bb9cc")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/facture-proforma/facture-proforma-apercu/facture-proforma-apercu.component */ 44074)).then(m => m.FactureProformaApercuComponent)
  }, {
    path: 'detail-facture-proforma-apercu',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("src_app_admin-page_facture-proforma_detail-facture-proforma-apercu_detail-facture-proforma-ap-7c87c0")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/facture-proforma/detail-facture-proforma-apercu/detail-facture-proforma-apercu.component */ 64968)).then(m => m.DetailFactureProformaApercuComponent)
  }, {
    path: 'facture-proforma-apercu/:id',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_admin-page_SERVICES_entreprise-service_ts-src_app_admin-page_SERVICES_facture-68e4cb"), __webpack_require__.e("default-src_app_admin-page_facture-proforma_facture-proforma-apercu_facture-proforma-apercu_c-3bb9cc")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/facture-proforma/facture-proforma-apercu/facture-proforma-apercu.component */ 44074)).then(m => m.FactureProformaApercuComponent)
  }, {
    path: 'facture-reel-details/:id',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_facture-reel_facture-reel-details_facture-reel-details_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/facture-reel/facture-reel-details/facture-reel-details.component */ 44948)).then(m => m.FactureReelDetailsComponent),
    canActivate: [_admin_page_guards_ModuleAccessGuard__WEBPACK_IMPORTED_MODULE_4__.ModuleAccessGuard],
    data: {
      codeModule: 'GESTION_FACTURATION'
    }
  }, {
    path: 'account-settings',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_cdk_fesm2022_focus-key-manager-C1rAQJ5z_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_form-field-DqPi4knt_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_index-DOxJc1m4_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_icon_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_tabs_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_expansion_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2022_core_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-page_account-settings_account-settings_component_ts-node_modules_angular_materi-b3901f")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/account-settings/account-settings.component */ 61716)).then(m => m.AccountSettingsComponent)
  }, {
    path: 'style-facture',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_admin-page_facture-proforma_style-facture_style-facture_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin-page/facture-proforma/style-facture/style-facture.component */ 75042)).then(m => m.StyleFactureComponent)
  }, {
    path: 'pricing/:moduleCode',
    component: _admin_page_pricing_card_pricing_card_component__WEBPACK_IMPORTED_MODULE_5__.PricingCardComponent
  },
  // { 
  //   path: 'payment-form/:moduleCode', 
  //   loadComponent: () => import('./admin-page/payment-form/payment-form.component').then(m => m.PaymentFormComponent)
  // },
  {
    path: 'payment-form/:plan',
    component: _admin_page_payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_6__.PaymentFormComponent
  }
  // {
  //   path: 'payment-form',
  //   loadComponent: () => import('./admin-page/payment-form/payment-form.component').then(m => m.PaymentFormComponent)
  // },
  ]
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__.UrlSerializer,
        useClass: _admin_page_guards_GlobalUrlEncoderSerializer__WEBPACK_IMPORTED_MODULE_7__.GlobalUrlEncoderSerializer
      }],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 20092:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _theme_shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/shared/components/spinner/spinner.component */ 35639);
/* harmony import */ var _unlock_dialog_unlock_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unlock-dialog/unlock-dialog.component */ 21352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _theme_shared_session_expired_modal_session_expired_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme/shared/session-expired-modal/session-expired-modal.component */ 75606);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 42700);
/* harmony import */ var _admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-page/SERVICES/users.service */ 88026);
/* harmony import */ var _admin_page_SERVICES_modalService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-page/SERVICES/modalService */ 79971);
/* harmony import */ var _admin_page_SERVICES_lock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-page/SERVICES/lock.service */ 81069);














function AppComponent_app_session_expired_modal_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-session-expired-modal", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("confirmed", function AppComponent_app_session_expired_modal_2_Template_app_session_expired_modal_confirmed_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.handleSessionConfirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 6);
  }
}
function AppComponent_app_unlock_dialog_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-unlock-dialog");
  }
}
function AppComponent_div_5_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Votre p\u00E9riode d'acc\u00E8s temporaire a expir\u00E9. Veuillez v\u00E9rifier votre bo\u00EEte mail et activer votre compte. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_5_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Votre administrateur n'a pas activ\u00E9 son compte dans les d\u00E9lais. Veuillez patienter ou le contacter. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AppComponent_div_5_span_4_Template, 2, 0, "span", 10)(5, AppComponent_div_5_span_5_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_div_5_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Se d\u00E9connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.isAdmin);
  }
}
function AppComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 13);
  }
}
class AppComponent {
  constructor(dialog, cdRef, usersService, modalService, lockService) {
    this.dialog = dialog;
    this.cdRef = cdRef;
    this.usersService = usersService;
    this.modalService = modalService;
    this.lockService = lockService;
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router);
    this.isLocked = false;
    this.isDialogOpen = false;
    this.showSessionModal = false;
    this.showBlockedPopup = false;
    this.isAdmin = false;
    this.userEmail = '';
    window.addEventListener('user-logged-out', () => {
      this.isLocked = false;
      clearTimeout(this.inactivityTimer);
      this.isDialogOpen = false;
      this.dialog.closeAll();
    });
  }
  resetTimer() {
    if (this.isLocked) return;
    if (!this.isLoggedIn) return;
    clearTimeout(this.inactivityTimer);
    this.inactivityTimer = setTimeout(() => this.lockScreen(), 2.75 * 60 * 60 * 1000);
  }
  lockScreen() {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user || !user.personalCode) {
      console.warn("⚠️ Aucun utilisateur connecté, pas de verrouillage.");
      return;
    }
    if (user.actif === false) {
      console.log("L'utilisateur est désactivé, aucun déverrouillage requis.");
      return;
    }
    this.isLocked = true;
    this.lockService.updateLockState(true);
    this.lockService.playSound('lock');
    localStorage.setItem('isLocked', 'true');
    this.isDialogOpen = true;
    const dialogRef = this.dialog.open(_unlock_dialog_unlock_dialog_component__WEBPACK_IMPORTED_MODULE_1__.UnlockDialogComponent, {
      disableClose: true,
      data: {
        message: 'Veuillez entrer votre Code PIN pour déverrouiller',
        userPersonalCode: user.personalCode
      }
    });
    dialogRef.afterOpened().subscribe(() => {
      setTimeout(() => {
        const input = document.querySelector('.popup input');
        if (input) input.focus();
      }, 100);
    });
    dialogRef.afterClosed().subscribe(codeEntered => {
      if (codeEntered === user.personalCode) {
        console.log("Code correct, déverrouillage...");
        this.isLocked = false;
        this.lockService.updateLockState(false);
        this.lockService.playSound('lock');
        this.isDialogOpen = false;
        localStorage.removeItem('isLocked');
        this.dialog.closeAll();
        this.resetTimer();
        console.log("isLocked:", this.isLocked);
      } else {
        console.warn("⛔ Code incorrect, veuillez réessayer.");
        // Vérifie si isLocked est encore vrai avant de rouvrir le pop-up
        setTimeout(() => {
          if (this.isLocked) {
            this.lockScreen();
          }
        }, 500);
      }
    });
  }
  checkLockStatus() {
    if (!this.isLoggedIn) {
      localStorage.removeItem('isLocked');
      return;
    }
    const wasLocked = localStorage.getItem('isLocked') === 'true';
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user || !user.personalCode) {
      console.warn("⚠️ Aucun utilisateur trouvée, pas de verrouillage.");
      localStorage.removeItem('isLocked');
      return;
    }
    if (wasLocked) {
      this.lockScreen();
    }
  }
  get isLoggedIn() {
    return !!localStorage.getItem('user');
  }
  ngOnInit() {
    this.lockService.registerApp(this);
    this.checkLockStatus();
    this.checkAccountStatus();
    this.router.events.subscribe(evt => {
      if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
    this.modalService.sessionExpiredModal$.subscribe(() => {
      console.log('✅ Session expirée détectée, affichage de la modale');
      this.showSessionModal = true;
    });
  }
  handleSessionConfirm() {
    this.usersService.logoutUser();
    this.showSessionModal = false;
  }
  onLogout() {
    this.usersService.logoutUser();
  }
  checkAccountStatus() {
    this.usersService.getUserInfo().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(user => console.log('[checkAccountStatus] user:', user))).subscribe(user => {
      this.userEmail = user.email;
      this.isAdmin = user.roleType?.toUpperCase() === 'ADMIN';
      const now = Date.now();
      const createdAt = this.isAdmin ? user.createdAt : user.adminCreatedAt;
      const parsedCreatedAt = createdAt ? Date.parse(createdAt) : null;
      const diffInHours = parsedCreatedAt ? (now - parsedCreatedAt) / (1000 * 60 * 60) : 0;
      const adminActivated = this.isAdmin ? user.adminActivated : user.adminActivated;
      console.log(`[${this.isAdmin ? 'Admin' : 'User'}] adminActivated=${adminActivated}, hours since admin creation=${diffInHours}`);
      this.showBlockedPopup = adminActivated === false && diffInHours > 24;
      console.log('=> showBlockedPopup =', this.showBlockedPopup);
    });
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.j), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_admin_page_SERVICES_modalService__WEBPACK_IMPORTED_MODULE_4__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_admin_page_SERVICES_lock_service__WEBPACK_IMPORTED_MODULE_5__.LockService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mousemove", function AppComponent_mousemove_HostBindingHandler() {
            return ctx.resetTimer();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"])("keydown", function AppComponent_keydown_HostBindingHandler() {
            return ctx.resetTimer();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"])("click", function AppComponent_click_HostBindingHandler() {
            return ctx.resetTimer();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
        }
      },
      decls: 7,
      vars: 5,
      consts: [[3, "confirmed", 4, "ngIf"], ["class", "lock-overlay", 4, "ngIf"], [4, "ngIf"], ["class", "top-banner", "role", "alert", "aria-live", "assertive", 4, "ngIf"], ["class", "click-blocker", 4, "ngIf"], [3, "confirmed"], [1, "lock-overlay"], ["role", "alert", "aria-live", "assertive", 1, "top-banner"], [1, "banner-content"], [1, "icon"], ["class", "message", 4, "ngIf"], [1, "logout-btn", 3, "click"], [1, "message"], [1, "click-blocker"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-spinner")(1, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AppComponent_app_session_expired_modal_2_Template, 1, 0, "app-session-expired-modal", 0)(3, AppComponent_div_3_Template, 1, 0, "div", 1)(4, AppComponent_app_unlock_dialog_4_Template, 1, 0, "app-unlock-dialog", 2)(5, AppComponent_div_5_Template, 8, 2, "div", 3)(6, AppComponent_div_6_Template, 1, 0, "div", 4);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showSessionModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLocked);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isDialogOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showBlockedPopup);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showBlockedPopup);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _theme_shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _unlock_dialog_unlock_dialog_component__WEBPACK_IMPORTED_MODULE_1__.UnlockDialogComponent, _theme_shared_session_expired_modal_session_expired_modal_component__WEBPACK_IMPORTED_MODULE_2__.SessionExpiredModalComponent],
      styles: [".lock-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  pointer-events: all;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\n.app-unlock-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  z-index: 10000;\n  pointer-events: auto;\n}\n\n.top-banner[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: linear-gradient(90deg, #ff4d4f, #ff6663);\n  color: #fff;\n  padding: 15px 20px;\n  text-align: center;\n  font-weight: 500;\n  z-index: 10000;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);\n  animation: _ngcontent-%COMP%_slideDownFade 0.5s ease forwards;\n  transform: translateY(-100%);\n  opacity: 0;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n@keyframes _ngcontent-%COMP%_slideDownFade {\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.banner-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n  flex-wrap: wrap;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n}\n\n.message[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.4;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  max-width: 600px;\n}\n\n.logout-btn[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #ff4d4f;\n  border: none;\n  padding: 8px 18px;\n  font-weight: bold;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 12px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);\n}\n\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background-color: #ffeaea;\n  transform: scale(1.05);\n}\n\n.click-blocker[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFHRTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxvREFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLHlDQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQURGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2NrLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICB9XG4gIFxuICAuYXBwLXVubG9jay1kaWFsb2cge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgei1pbmRleDogMTAwMDA7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87IFxuICB9XG4gIFxuXG4gIC50b3AtYmFubmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjRkNGYsICNmZjY2NjMpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGFuaW1hdGlvbjogc2xpZGVEb3duRmFkZSAwLjVzIGVhc2UgZm9yd2FyZHM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlRG93bkZhZGUge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmJhbm5lci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLm1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG4ubG9nb3V0LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjZmY0ZDRmO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDhweCAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5sb2dvdXQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWFlYTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLmNsaWNrLWJsb2NrZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUdFO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG9EQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUFBRjtBQUNGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EseUNBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBREY7QUFHQSxvckhBQW9ySCIsInNvdXJjZXNDb250ZW50IjpbIi5sb2NrLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICB9XG4gIFxuICAuYXBwLXVubG9jay1kaWFsb2cge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgei1pbmRleDogMTAwMDA7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87IFxuICB9XG4gIFxuXG4gIC50b3AtYmFubmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZjRkNGYsICNmZjY2NjMpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGFuaW1hdGlvbjogc2xpZGVEb3duRmFkZSAwLjVzIGVhc2UgZm9yd2FyZHM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlRG93bkZhZGUge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmJhbm5lci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLm1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG4ubG9nb3V0LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjZmY0ZDRmO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDhweCAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5sb2dvdXQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWFlYTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLmNsaWNrLWJsb2NrZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 44613:
/*!*******************************************************!*\
  !*** ./src/app/theme/layout/admin/admin.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminComponent: () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration/configuration.component */ 5989);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 34645);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation/navigation.component */ 5287);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 61703);
// Angular Import



// Project Import







const _c0 = (a0, a1) => ({
  "navbar-collapsed": a0,
  "mob-open": a1
});
class AdminComponent {
  // constructor
  constructor() {
    this.location = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location);
    this.locationStrategy = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_5__.LocationStrategy);
    this.windowWidth = window.innerWidth;
    this.navCollapsedMob = false;
  }
  // eslint-disable-next-line
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
    if (this.windowWidth < 992) {
      document.querySelector('.pcoded-navbar')?.classList.add('menupos-static');
      if (document.querySelector('app-navigation.pcoded-navbar')?.classList.contains('navbar-collapsed')) {
        document.querySelector('app-navigation.pcoded-navbar')?.classList.remove('navbar-collapsed');
      }
    }
  }
  // public method
  navMobClick() {
    if (this.windowWidth < 992) {
      if (this.navCollapsedMob && !document.querySelector('app-navigation.pcoded-navbar')?.classList.contains('mob-open')) {
        this.navCollapsedMob = !this.navCollapsedMob;
        setTimeout(() => {
          this.navCollapsedMob = !this.navCollapsedMob;
        }, 100);
      } else {
        this.navCollapsedMob = !this.navCollapsedMob;
      }
    }
  }
  handleKeyDown(event) {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  }
  closeMenu() {
    if (document.querySelector('app-navigation.pcoded-navbar')?.classList.contains('mob-open')) {
      document.querySelector('app-navigation.pcoded-navbar')?.classList.remove('mob-open');
    }
  }
  static {
    this.ɵfac = function AdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      hostBindings: function AdminComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function AdminComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
        }
      },
      decls: 12,
      vars: 4,
      consts: [[1, "pcoded-navbar", "menupos-fixed", "menu-light", 3, "NavCollapsedMob", "ngClass"], [1, "navbar", "pcoded-header", "navbar-expand-lg", "navbar-light", "header-blue", "headerPos-fixed", 3, "NavCollapse", "NavCollapsedMob"], [1, "pcoded-main-container"], [1, "pcoded-wrapper"], [1, "pcoded-content"], [1, "pcoded-inner-content"], [1, "main-body"], [1, "page-wrapper"], ["tabindex", "0", 1, "pc-menu-overlay", 3, "click", "keydown"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-navigation", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("NavCollapsedMob", function AdminComponent_Template_app_navigation_NavCollapsedMob_0_listener() {
            return ctx.navMobClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-nav-bar", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("NavCollapse", function AdminComponent_Template_app_nav_bar_NavCollapse_1_listener() {
            return ctx.navCollapsed = !ctx.navCollapsed;
          })("NavCollapsedMob", function AdminComponent_Template_app_nav_bar_NavCollapsedMob_1_listener() {
            return ctx.navMobClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-breadcrumb")(9, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_10_listener() {
            return ctx.closeMenu();
          })("keydown", function AdminComponent_Template_div_keydown_10_listener($event) {
            return ctx.handleKeyDown($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "app-configuration");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](1, _c0, ctx.navCollapsed, ctx.navCollapsedMob));
        }
      },
      dependencies: [_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_0__.ConfigurationComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__.NavBarComponent, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__.NavigationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5989:
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/admin/configuration/configuration.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigurationComponent: () => (/* binding */ ConfigurationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class ConfigurationComponent {
  static {
    this.ɵfac = function ConfigurationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ConfigurationComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfigurationComponent,
      selectors: [["app-configuration"]],
      decls: 0,
      vars: 0,
      template: function ConfigurationComponent_Template(rf, ctx) {},
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 34645:
/*!*****************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarComponent: () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ 42389);
/* harmony import */ var _nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-left/nav-left.component */ 66343);
/* harmony import */ var _nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-right/nav-right.component */ 80939);
// angular import



// project import






const _c0 = a0 => ({
  on: a0
});
const _c1 = () => ["/dashboard/analytics"];
function NavBarComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavBarComponent_ng_template_13_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.navCollapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavBarComponent_ng_template_13_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.NavCollapsedMob.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 14)(7, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavBarComponent_ng_template_13_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.toggleMobOption());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-nav-left", 11)(12, "app-nav-right", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r2.menuClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx_r2.collapseStyle);
  }
}
class NavBarComponent {
  // constructor
  constructor() {
    this.NavCollapse = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.output)();
    this.NavCollapsedMob = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.output)();
    this.menuClass = false;
    this.collapseStyle = 'none';
    this.windowWidth = window.innerWidth;
  }
  // public method
  toggleMobOption() {
    this.menuClass = !this.menuClass;
    this.collapseStyle = this.menuClass ? 'block' : 'none';
  }
  navCollapse() {
    if (this.windowWidth >= 992) {
      this.NavCollapse.emit();
    }
  }
  navCollapseMob() {
    if (this.windowWidth < 992) {
      this.NavCollapsedMob.emit();
    }
  }
  static {
    this.ɵfac = function NavBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavBarComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      outputs: {
        NavCollapse: "NavCollapse",
        NavCollapsedMob: "NavCollapsedMob"
      },
      decls: 15,
      vars: 5,
      consts: [["mainHeader", ""], [1, "m-header"], ["href", "javascript:", "id", "mobile-collapse", "title", "Click to Menu Collapse", 1, "mobile-menu", 3, "click"], ["href", "javascript:", "id", "mobile-collapse1", 1, "header-mobile-collapse", 3, "click"], [1, "feather", "icon-menu"], [1, "module"], [1, "logo_tchakeda"], ["src", "assets/logo/tchakeda.png", "alt", "Logo entreprise"], ["href", "javascript:", 1, "mob-toggler", 3, "click", "ngClass"], [1, "feather", "icon-more-vertical"], [1, "collapse", "navbar-collapse"], [1, "me-auto"], [1, "ms-auto"], [1, "b-brand", 3, "routerLink"], ["id", "main-logo", "src", "assets/images/logo.png", "alt", "logo-img", 1, "logo"], ["src", "assets/images/logo-icon.png", "alt", "logo-icon-img", 1, "logo-thumb"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.navCollapse());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.navCollapseMob());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.toggleMobOption());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-nav-left", 11)(12, "app-nav-right", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, NavBarComponent_ng_template_13_Template, 13, 7, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx.menuClass));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.collapseStyle);
        }
      },
      dependencies: [src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_1__.NavLeftComponent, _nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_2__.NavRightComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
      styles: [".module[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.module[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n\n\n.logo_tchakeda[_ngcontent-%COMP%] {\n  height: auto;\n  margin-bottom: 10px;\n  width: 160px;\n  cursor: pointer;\n}\n\n.logo_tchakeda[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.notification[_ngcontent-%COMP%] {\n  position: relative;\n  padding-right: 40px;\n}\n.notification[_ngcontent-%COMP%]   .mark-read-container[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.notification.unread[_ngcontent-%COMP%] {\n  background-color: rgba(240, 248, 255, 0.7);\n  border-left: 3px solid #007bff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQSxnQ0FBQTtBQUNBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUNKO0FBRUU7RUFDRSwwQ0FBQTtFQUNBLDhCQUFBO0FBQUoiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5tb2R1bGUgcCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLyogU3R5bGUgZGUgbCdpbWFnZSBjaXJjdWxhaXJlICovXG4ubG9nb190Y2hha2VkYSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmxvZ29fdGNoYWtlZGEgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgXG4gIC5tYXJrLXJlYWQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG4gIFxuICAmLnVucmVhZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0OCwgMjU1LCAwLjcpO1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzAwN2JmZjtcbiAgfVxufVxuICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBLGdDQUFBO0FBQ0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0o7QUFFRTtFQUNFLDBDQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUNBLGc3Q0FBZzdDIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm1vZHVsZSBwIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4vKiBTdHlsZSBkZSBsJ2ltYWdlIGNpcmN1bGFpcmUgKi9cbi5sb2dvX3RjaGFrZWRhIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAubG9nb190Y2hha2VkYSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICBcbiAgLm1hcmstcmVhZC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgXG4gICYudW5yZWFkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuNyk7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMDA3YmZmO1xuICB9XG59XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 66343:
/*!***************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavLeftComponent: () => (/* binding */ NavLeftComponent)
/* harmony export */ });
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ 42389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
// project import


class NavLeftComponent {
  static {
    this.ɵfac = function NavLeftComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavLeftComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NavLeftComponent,
      selectors: [["app-nav-left"]],
      decls: 0,
      vars: 0,
      template: function NavLeftComponent_Template(rf, ctx) {},
      dependencies: [src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtbGVmdC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL25hdi1iYXIvbmF2LWxlZnQvbmF2LWxlZnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 80939:
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavRightComponent: () => (/* binding */ NavRightComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 64334);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 48418);
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ 42389);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin-page/SERVICES/users.service */ 88026);
/* harmony import */ var src_app_admin_page_SERVICES_stocks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin-page/SERVICES/stocks.service */ 10933);
/* harmony import */ var src_app_admin_page_SERVICES_lock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/admin-page/SERVICES/lock.service */ 81069);
/* harmony import */ var src_app_admin_page_SERVICES_websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin-page/SERVICES/websocket.service */ 66725);
/* harmony import */ var src_app_admin_page_SERVICES_global_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin-page/SERVICES/global_notification_service */ 21168);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);

 // Import manquant ajouté
// bootstrap import

// project import












function NavRightComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.unreadCount, " ");
  }
}
function NavRightComponent_li_12_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41)(1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NavRightComponent_li_12_div_12_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const notif_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.markNotificationAsRead(notif_r3, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function NavRightComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NavRightComponent_li_12_Template_li_click_0_listener($event) {
      const notif_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.markNotificationAsRead(notif_r3, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 36)(2, "div", 37)(3, "p")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p")(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, NavRightComponent_li_12_div_12_Template, 3, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const notif_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("unread", !notif_r3.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](notif_r3.senderName || "Syst\u00E8me");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getRelativeTime(notif_r3.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](notif_r3.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !notif_r3.read);
  }
}
function NavRightComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Aucune notification ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function NavRightComponent_li_14_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const history_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](history_r5.description);
  }
}
function NavRightComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 45)(1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 37)(4, "p")(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 49)(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, NavRightComponent_li_14_p_16_Template, 2, 1, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const history_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](history_r5.nomComplet || "Utilisateur inconnu");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("(", history_r5.role || "R\u00F4le inconnu", ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", history_r5.relativeTime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](history_r5.action || "Action inconnue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" (", history_r5.quantite || 0, " unit\u00E9s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", history_r5.description);
  }
}
function NavRightComponent_li_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NavRightComponent_li_42_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.goToCompte());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Utilisateurs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
class NavRightComponent {
  get unreadCount() {
    return this.notificationsList.filter(notif => !notif.read).length;
  }
  // get unreadNotifications() {
  //   return this.notificationsList.filter(n => !n.read);
  // }
  constructor(userService, router, stockService, lockService, webSocketService, globalNotificationService, cdr) {
    this.userService = userService;
    this.router = router;
    this.stockService = stockService;
    this.lockService = lockService;
    this.webSocketService = webSocketService;
    this.globalNotificationService = globalNotificationService;
    this.cdr = cdr;
    this.stockHistory = [];
    this.notificationsList = [];
    this.userName = '';
    this.nomEntreprise = '';
    this.photo = null;
    this.photoUrl = null;
    this.isLocked = false;
    this.boundUpdatePhotoListener = this.updatePhotoListener.bind(this);
    this.notificationsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
    this.notifications$ = this.notificationsSubject.asObservable();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.notificationSubscription = null;
    this.canAccessUserManagement = false;
    this.visibleUserList = false;
    this.chatMessage = false;
  }
  updatePhotoListener(event) {
    const newPhoto = localStorage.getItem('photo');
    if (newPhoto) {
      this.photo = newPhoto;
      this.photoUrl = this.base64ToObjectUrl(newPhoto);
    } else {
      this.photo = null;
      this.photoUrl = null;
    }
  }
  ngOnInit() {
    this.getUserInfo();
    this.updatePhotoFromLocalStorage();
    this.setupLockScreenListener();
    this.loadStockHistory();
    // this.setupNotificationSystem();
    // this.setupWebSocket();
    this.loadInitialNotifications();
    this.initializeWebSocket();
    // this.calculateUnreadCount();
    this.checkUserAccess();
  }
  // Méthode pour marquer une notification comme lue
  markNotificationAsRead(notification, event) {
    if (event) {
      event.stopPropagation(); // Empêcher la propagation du clic
    }
    if (notification.read) return; // Déjà lue
    this.globalNotificationService.markAsRead(notification.id).subscribe({
      next: () => {
        notification.read = true;
      },
      error: err => console.error('Erreur', err)
    });
  }
  // Calculer le nombre de notifications non lues
  // private calculateUnreadCount() {
  //   this.unreadCount = this.notificationsList.filter(n => !n.read).length;
  // }
  initializeWebSocket() {
    // 1) listener photo
    window.addEventListener('storage-photo-update', this.boundUpdatePhotoListener);
    // 2) connexion STOMP + abonnement notifications
    this.webSocketService.connect().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe({
      next: frame => {
        console.log('STOMP connecté :', frame);
        // this.subscribeNotifications();
        // on s'abonne à notre topic de notifications
        this.webSocketService.subscribe('/user/queue/notifications', notif => {
          notif.read = false; // Nouvelles notifications non lues
          this.notificationsList = [notif, ...this.notificationsList];
          // this.calculateUnreadCount();
          this.flashNotificationBadge();
        });
      },
      error: err => console.error('Erreur de connexion WebSocket :', err)
    });
  }
  // private subscribeNotifications() {
  //   this.webSocketService.subscribe(
  //     '/user/queue/notifications',
  //     (notif: GlobalNotificationDto) => {
  //       console.log('🥳 Notification reçue !', notif);
  //       this.notificationsList.unshift(notif);
  //     }
  //   );
  // }
  // private setupWebSocket() {
  //   this.webSocketService.connect().pipe(
  //     takeUntil(this.destroy$)
  //   ).subscribe({
  //     next: (notification: GlobalNotificationDto) => {
  //       this.notificationsList = [notification, ...this.notificationsList];
  //       this.flashNotificationBadge();
  //     },
  //     error: (err) => console.error('WebSocket error:', err)
  //   });
  // }
  loadInitialNotifications() {
    this.globalNotificationService.getAllForCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(notifications => {
      this.notificationsList = notifications;
      this.cdr.detectChanges();
    });
  }
  updatePhotoFromLocalStorage() {
    const savedPhoto = localStorage.getItem('photo');
    if (savedPhoto) {
      this.photo = savedPhoto;
      this.photoUrl = this.base64ToObjectUrl(savedPhoto);
    }
  }
  setupLockScreenListener() {
    this.lockService.isLocked$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(locked => this.isLocked = locked);
  }
  loadStockHistory() {
    this.stockService.getAllhistorique().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.catchError)(err => {
      console.error('Erreur historique stock:', err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)([]);
    })).subscribe(data => {
      this.stockHistory = data.map(item => ({
        ...item,
        relativeTime: this.getRelativeTime(item.createdAt)
      })).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    });
  }
  // private setupNotificationSystem(): void {
  //   this.globalNotificationService.getAllForCurrentUser().pipe(
  //     takeUntil(this.destroy$)
  //   ).subscribe(list => this.notificationsList = list);
  // }
  flashNotificationBadge() {
    const badge = document.querySelector('.notification-badge');
    if (badge) {
      badge.classList.add('flash');
      setTimeout(() => badge.classList.remove('flash'), 2000);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.webSocketService.disconnect();
    window.removeEventListener('storage-photo-update', this.boundUpdatePhotoListener);
  }
  onChatToggle(friendID) {
    this.friendId = friendID;
    this.chatMessage = !this.chatMessage;
  }
  getUserInfo() {
    this.userService.getUserInfo().subscribe({
      next: user => {
        this.userName = user.nomComplet;
        this.nomEntreprise = user.nomEntreprise;
      },
      error: err => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }
  getRelativeTime(date) {
    const currentTime = new Date();
    const eventTime = new Date(date);
    const timeDiff = currentTime.getTime() - eventTime.getTime();
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (seconds < 60) {
      return `Il y a ${seconds} seconde${seconds > 1 ? 's' : ''}`;
    }
    if (minutes < 60) {
      return `Il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
    }
    if (hours < 24) {
      return `Il y a ${hours} heure${hours > 1 ? 's' : ''}`;
    }
    if (days === 1) {
      return 'Hier';
    }
    return `Il y a ${days} jour${days > 1 ? 's' : ''}`;
  }
  goToCompte() {
    this.router.navigate(['/utilisateur']);
  }
  onLogout() {
    this.userService.logoutUser();
  }
  base64ToObjectUrl(base64) {
    const byteString = atob(base64.split(',')[1]);
    const mimeString = base64.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], {
      type: mimeString
    });
    return URL.createObjectURL(blob);
  }
  lockManually() {
    this.lockService.lockNow();
  }
  checkUserAccess() {
    this.userService.getUserInfo().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe({
      next: user => {
        const {
          roleType,
          permissions = []
        } = user;
        this.canAccessUserManagement = roleType === 'ADMIN' || roleType === 'MANAGER' || permissions.includes('GERER_UTILISATEURS');
      },
      error: err => {
        console.error('Erreur lors de la récupération des infos utilisateur :', err);
        this.canAccessUserManagement = false;
      }
    });
  }
  static {
    this.ɵfac = function NavRightComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavRightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_stocks_service__WEBPACK_IMPORTED_MODULE_2__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_lock_service__WEBPACK_IMPORTED_MODULE_3__.LockService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_websocket_service__WEBPACK_IMPORTED_MODULE_4__.WebSocketService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_global_notification_service__WEBPACK_IMPORTED_MODULE_5__.GlobalNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: NavRightComponent,
      selectors: [["app-nav-right"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownConfig])],
      decls: 47,
      vars: 10,
      consts: [[1, "navbar-nav", "ms-auto"], ["ngbDropdown", "", "placement", "auto", 1, "dropdown"], ["ngbDropdownToggle", "", "href", "javascript:"], ["title", "Notification", 1, "icon", "feather", "icon-bell"], ["class", "badge bg-danger notification-badge", 4, "ngIf"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end", "notification"], [1, "noti-head"], [1, "d-inline-block", "m-b-0"], [1, "noti-body"], [1, "noti-body", "notifications"], ["class", "notification", 3, "unread", "click", 4, "ngFor", "ngForOf"], ["class", "text-center p-2", 4, "ngIf"], ["class", "notification", 4, "ngFor", "ngForOf"], [1, "noti-footer"], [1, "dropdown"], ["href", "javascript:void(0)", 1, "displayChatbox", "dropdown-toggle", 3, "click", "title"], [1, "fa", 3, "ngClass"], [1, "bare_vertical"], [1, "bare"], ["ngbDropdown", "", "placement", "auto", 1, "dropdown", "drp-user", "capitalize"], ["href", "javascript:", "ngbDropdownToggle", "", 1, "nameBoutiqueHover"], ["ngbDropdown", "", "placement", "auto", 1, "dropdown", "drp-user"], ["href", "javascript:", "ngbDropdownToggle", ""], ["alt", "User-Profile-Image", 1, "img-radius", "wid-40", 3, "src"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end", "profile-notification"], [1, "nameBoutiqueDrop"], ["title", "Logout", 1, "dud-logout"], [1, "feather", "icon-log-out"], [1, "pro-body"], ["routerLink", "/profil", 1, "dropdown-item", 2, "cursor", "pointer"], [1, "feather", "icon-user"], [4, "ngIf"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "feather", "icon-lock"], [1, "badge", "bg-danger", "notification-badge"], [1, "notification", 3, "click"], [1, "media"], [1, "media-body"], [1, "n-time", "text-muted", 2, "display", "flex"], [1, "icon", "feather", "icon-clock", "m-r-10"], ["class", "mark-read-container", 4, "ngIf"], [1, "mark-read-container"], ["title", "Marquer comme lu", 1, "btn", "btn-sm", "btn-icon", "mark-read-btn", 3, "click"], [1, "fa", "fa-check"], [1, "text-center", "p-2"], [1, "notification"], ["src", "assets/img/profil.png", "alt", "User Image", 1, "img-radius"], [2, "font-size", "10px", "margin", "5px", "color", "#ff000075"], [1, "n-time", "text-muted"], [2, "font-size", "11px", "margin-bottom", "5px"], [1, "feather", "icon-users"]],
      template: function NavRightComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 0)(1, "li")(2, "div", 1)(3, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, NavRightComponent_span_5_Template, 2, 1, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "h6", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ul", 8)(11, "ul", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, NavRightComponent_li_12_Template, 13, 6, "li", 10)(13, NavRightComponent_li_13_Template, 2, 0, "li", 11)(14, NavRightComponent_li_14_Template, 17, 6, "li", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "li")(17, "div", 14)(18, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NavRightComponent_Template_a_click_18_listener() {
            return ctx.lockManually();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "li")(21, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "li")(24, "div", 19)(25, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "li")(28, "div", 21)(29, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 24)(32, "div", 25)(33, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "ul", 28)(38, "li")(39, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, " Profile ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, NavRightComponent_li_42_Template, 4, 0, "li", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "li")(44, "a", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NavRightComponent_Template_a_click_44_listener() {
            return ctx.onLogout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, " D\u00E9connexion ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.unreadCount > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.notificationsList);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.notificationsList.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.stockHistory);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", ctx.isLocked ? "\u00C9cran verrouill\u00E9" : "Verrouiller l'\u00E9cran");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.isLocked ? "fa-lock" : "fa-unlock");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.nomEntreprise, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.photoUrl || "assets/img/profil.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.userName);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.canAccessUserManagement);
        }
      },
      dependencies: [src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbDropdownMenu, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n}\n\n.pro-body[_ngcontent-%COMP%] {\n  padding: 10px 0 !important;\n}\n\n.pro-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.name_content[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.lien_content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n\n.bare_vertical[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.bare_vertical[_ngcontent-%COMP%]   .bare[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 30px;\n  background-color: rgba(238, 238, 238, 0.306);\n  position: relative;\n  top: 10px;\n}\n\n.nameBoutiqueHover[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.7176470588) !important;\n}\n\n.nameBoutiqueHover[_ngcontent-%COMP%] {\n  margin-right: -10px;\n}\n\n.nameBoutiqueDrop[_ngcontent-%COMP%] {\n  background-color: #4099ff;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: #ffffff;\n}\n\n.nameBoutiqueDrop[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.notifications[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n  padding-right: 5px;\n}\n\n.wid-40[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n  box-shadow: 0 2px 4px #4099ff;\n}\n\n\n\n.notification-badge.flash[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_flash 1s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_flash {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(1.2);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1yaWdodC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0VBQUE7QUFhQTtFQUNFLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDSSwwQkFBQTtBQUNKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxtREFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQUFKOztBQUdBLG1DQUFBO0FBQ0E7RUFDRSx3Q0FBQTtBQUFGOztBQUdBO0VBQ0U7SUFBVyxVQUFBO0VBQ1g7RUFBQTtJQUFNLFlBQUE7SUFBYyxxQkFBQTtFQUlwQjtBQUNGIiwiZmlsZSI6Im5hdi1yaWdodC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmxpZW5fbmFtZV9lbnRyZXByaXNlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uZXNwYWNlIHtcbiAgICBtYXJnaW46IDAgMXB4IDAgNTBweDtcbn1cblxuLmxpZW5fbmFtZV9lbnRyZXByaXNlOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZmZmZmI3IWltcG9ydGFudDtcbn0qL1xuLmNhcGl0YWxpemUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuXG4ucHJvLWJvZHkge1xuICAgIHBhZGRpbmc6IDEwcHggMCAhaW1wb3J0YW50O1xufVxuXG5cbi5wcm8taGVhZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmFtZV9jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5saWVuX2NvbnRlbnQgYSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJhcmVfdmVydGljYWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJhcmVfdmVydGljYWwgLmJhcmUge1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyMzgsIDIzOCwgMC4zMDYpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG59XG5cbi5uYW1lQm91dGlxdWVIb3Zlcjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmZmZmZiNyFpbXBvcnRhbnQ7XG59XG5cbi5uYW1lQm91dGlxdWVIb3ZlciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbn1cblxuLm5hbWVCb3V0aXF1ZURyb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDk5ZmY7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubmFtZUJvdXRpcXVlRHJvcCBpIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5ub3RpZmljYXRpb25zIHtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgfVxuICBcblxuLndpZC00MCB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjNDA5OWZmO1xufVxuXG4vKiBBam91dGV6IGRhbnMgdm90cmUgZmljaGllciBDU1MgKi9cbi5ub3RpZmljYXRpb24tYmFkZ2UuZmxhc2gge1xuICBhbmltYXRpb246IGZsYXNoIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGZsYXNoIHtcbiAgMCUsIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG4gIDUwJSB7IG9wYWNpdHk6IDAuNTsgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyB9XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL25hdi1iYXIvbmF2LXJpZ2h0L25hdi1yaWdodC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0VBQUE7QUFhQTtFQUNFLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDSSwwQkFBQTtBQUNKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxtREFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQUFKOztBQUdBLG1DQUFBO0FBQ0E7RUFDRSx3Q0FBQTtBQUFGOztBQUdBO0VBQ0U7SUFBVyxVQUFBO0VBQ1g7RUFBQTtJQUFNLFlBQUE7SUFBYyxxQkFBQTtFQUlwQjtBQUNGO0FBQ0Esb2hHQUFvaEciLCJzb3VyY2VzQ29udGVudCI6WyIvKi5saWVuX25hbWVfZW50cmVwcmlzZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmVzcGFjZSB7XG4gICAgbWFyZ2luOiAwIDFweCAwIDUwcHg7XG59XG5cbi5saWVuX25hbWVfZW50cmVwcmlzZTpob3ZlciB7XG4gICAgY29sb3I6ICNmZmZmZmZiNyFpbXBvcnRhbnQ7XG59Ki9cbi5jYXBpdGFsaXplIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cblxuLnByby1ib2R5IHtcbiAgICBwYWRkaW5nOiAxMHB4IDAgIWltcG9ydGFudDtcbn1cblxuXG4ucHJvLWhlYWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hbWVfY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ubGllbl9jb250ZW50IGEge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5iYXJlX3ZlcnRpY2FsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5iYXJlX3ZlcnRpY2FsIC5iYXJlIHtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMjM4LCAyMzgsIDAuMzA2KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMHB4O1xufVxuXG4ubmFtZUJvdXRpcXVlSG92ZXI6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmZmZmYjchaW1wb3J0YW50O1xufVxuXG4ubmFtZUJvdXRpcXVlSG92ZXIge1xuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XG59XG5cbi5uYW1lQm91dGlxdWVEcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA5OWZmO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLm5hbWVCb3V0aXF1ZURyb3AgaSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG4ubm90aWZpY2F0aW9ucyB7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIH1cbiAgXG5cbi53aWQtNDAge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggIzQwOTlmZjtcbn1cblxuLyogQWpvdXRleiBkYW5zIHZvdHJlIGZpY2hpZXIgQ1NTICovXG4ubm90aWZpY2F0aW9uLWJhZGdlLmZsYXNoIHtcbiAgYW5pbWF0aW9uOiBmbGFzaCAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBmbGFzaCB7XG4gIDAlLCAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICA1MCUgeyBvcGFjaXR5OiAwLjU7IHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.trigger)('slideInOutLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({
          transform: 'translateX(100%)'
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.animate)('300ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({
          transform: 'translateX(0%)'
        }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.animate)('300ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({
          transform: 'translateX(100%)'
        }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.trigger)('slideInOutRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({
          transform: 'translateX(-100%)'
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.animate)('300ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({
          transform: 'translateX(0%)'
        }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.animate)('300ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({
          transform: 'translateX(-100%)'
        }))])])]
      }
    });
  }
}

/***/ }),

/***/ 41158:
/*!**************************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavCollapseComponent: () => (/* binding */ NavCollapseComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nav-item/nav-item.component */ 9722);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin-page/SERVICES/users.service */ 88026);
/* harmony import */ var src_app_admin_page_SERVICES_Module_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin-page/SERVICES/Module-Service */ 84173);








const _c0 = () => ["active"];
function NavCollapseComponent_li_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r1.item.icon);
  }
}
function NavCollapseComponent_li_0_For_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-nav-collapse", 6);
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", item_r3);
  }
}
function NavCollapseComponent_li_0_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-nav-item", 6);
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", item_r3);
  }
}
function NavCollapseComponent_li_0_For_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NavCollapseComponent_li_0_For_7_Conditional_0_Template, 1, 1, "app-nav-collapse", 6)(1, NavCollapseComponent_li_0_For_7_Conditional_1_Template, 1, 1, "app-nav-item", 6);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](item_r3.type === "collapse" ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](item_r3.type === "item" ? 1 : -1);
  }
}
function NavCollapseComponent_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 1)(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavCollapseComponent_li_0_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.navCollapse($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NavCollapseComponent_li_0_Conditional_2_Template, 2, 3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](6, NavCollapseComponent_li_0_For_7_Template, 2, 2, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx_r1.item.icon ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx_r1.item.children);
  }
}
class NavCollapseComponent {
  constructor(usersService, moduleService) {
    this.usersService = usersService;
    this.moduleService = moduleService;
    this.canShow = false;
    this.entrepriseModules = [];
  }
  ngOnInit() {
    // Charger les modules actifs de l'entreprise
    this.moduleService.getModulesEntreprise().subscribe({
      next: modules => {
        this.entrepriseModules = modules.filter(mod => mod.actif).map(mod => mod.code);
        this.evaluateVisibility();
      },
      error: () => {
        this.canShow = false;
      }
    });
  }
  evaluateVisibility() {
    this.usersService.getUserInfo().subscribe({
      next: user => {
        this.canShow = this.hasVisibleItem(this.item, user.permissions);
      },
      error: () => {
        this.canShow = false;
      }
    });
  }
  hasVisibleItem(item, permissions) {
    const hasPermission = !item.codePermission || permissions.includes(item.codePermission);
    const hasModule = !item.codeModule || this.entrepriseModules.includes(item.codeModule);
    if (item.children?.length) {
      // Si le parent a enfants, il faut que parent soit visible (droits + module)
      // ET qu'au moins un enfant soit visible
      if (hasPermission && hasModule) {
        return item.children.some(child => this.hasVisibleItem(child, permissions));
      } else {
        // Si parent pas visible, on ne doit pas afficher même si enfants visibles
        return false;
      }
    } else {
      // Pas d'enfants, juste vérifier droits + module
      return hasPermission && hasModule;
    }
  }
  // public method
  navCollapse(e) {
    let parent = e.target;
    parent = parent.parentElement;
    const sections = document.querySelectorAll('.pcoded-hasmenu');
    for (let i = 0; i < sections.length; i++) {
      if (sections[i] !== parent) {
        sections[i].classList.remove('pcoded-trigger');
      }
    }
    let firstParent = parent.parentElement;
    let preParent = parent.parentElement.parentElement;
    if (firstParent?.classList.contains('pcoded-hasmenu')) {
      do {
        firstParent?.classList.add('pcoded-trigger');
        firstParent = firstParent.parentElement.parentElement;
      } while (firstParent.classList.contains('pcoded-hasmenu'));
    } else if (preParent.classList.contains('pcoded-submenu')) {
      do {
        preParent?.parentElement?.classList.add('pcoded-trigger');
        preParent = preParent.parentElement.parentElement.parentElement;
      } while (preParent.classList.contains('pcoded-submenu'));
    }
    parent.classList.toggle('pcoded-trigger');
  }
  static {
    this.ɵfac = function NavCollapseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavCollapseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_Module_Service__WEBPACK_IMPORTED_MODULE_2__.ModuleService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NavCollapseComponent,
      selectors: [["app-nav-collapse"]],
      inputs: {
        item: "item"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "nav-item pcoded-hasmenu", 3, "routerLinkActive", 4, "ngIf"], [1, "nav-item", "pcoded-hasmenu", 3, "routerLinkActive"], ["href", "javascript:", 1, "nav-link", 3, "click", "routerLinkActive"], [1, "pcoded-micon"], [1, "pcoded-mtext"], [1, "pcoded-submenu", 3, "routerLinkActive"], [3, "item"]],
      template: function NavCollapseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NavCollapseComponent_li_0_Template, 8, 8, "li", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.canShow);
        }
      },
      dependencies: [NavCollapseComponent, _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_0__.NavItemComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtY29sbGFwc2UuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL25hdmlnYXRpb24vbmF2LWNvbnRlbnQvbmF2LWNvbGxhcHNlL25hdi1jb2xsYXBzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 79772:
/*!************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavContentComponent: () => (/* binding */ NavContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation */ 67238);
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ 42389);
/* harmony import */ var _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-collapse/nav-collapse.component */ 41158);
/* harmony import */ var _nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-group/nav-group.component */ 74094);
/* harmony import */ var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-item/nav-item.component */ 9722);
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-scrollbar */ 74091);
// angular import


// project import








function NavContentComponent_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-nav-group", 5);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", item_r1);
  }
}
function NavContentComponent_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-nav-collapse", 5);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", item_r1);
  }
}
function NavContentComponent_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-nav-item", 5);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("item", item_r1);
  }
}
function NavContentComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, NavContentComponent_For_4_Conditional_0_Template, 1, 1, "app-nav-group", 5)(1, NavContentComponent_For_4_Conditional_1_Template, 1, 1, "app-nav-collapse", 5)(2, NavContentComponent_For_4_Conditional_2_Template, 1, 1, "app-nav-item", 5);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](item_r1.type === "group" ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](item_r1.type === "collapse" ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵconditional"](item_r1.type === "item" ? 2 : -1);
  }
}
class NavContentComponent {
  // constructor
  constructor() {
    this.location = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location);
    this.locationStrategy = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_7__.LocationStrategy);
    // version
    this.title = 'Demo application for version numbering';
    this.currentApplicationVersion = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appVersion;
    this.NavMobCollapse = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.output)();
    this.windowWidth = window.innerWidth;
    this.navigations = _navigation__WEBPACK_IMPORTED_MODULE_1__.NavigationItems;
  }
  // life cycle event
  ngOnInit() {
    if (this.windowWidth < 992) {
      document.querySelector('.pcoded-navbar')?.classList.add('menupos-static');
    }
  }
  // public method
  navMob() {
    if (this.windowWidth < 992 && document.querySelector('app-navigation.pcoded-navbar')?.classList.contains('mob-open')) {
      this.NavMobCollapse.emit();
    }
  }
  fireOutClick() {
    let current_url = this.location.path();
    const baseHref = this.locationStrategy.getBaseHref();
    if (baseHref) {
      current_url = baseHref + this.location.path();
    }
    const link = "a.nav-link[ href='" + current_url + "' ]";
    const ele = document.querySelector(link);
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const up_parent = parent?.parentElement?.parentElement;
      const last_parent = up_parent?.parentElement;
      if (parent?.classList.contains('pcoded-hasmenu')) {
        parent.classList.add('pcoded-trigger');
        parent.classList.add('active');
      } else if (up_parent?.classList.contains('pcoded-hasmenu')) {
        up_parent.classList.add('pcoded-trigger');
        up_parent.classList.add('active');
      } else if (last_parent?.classList.contains('pcoded-hasmenu')) {
        last_parent.classList.add('pcoded-trigger');
        last_parent.classList.add('active');
      }
    }
  }
  static {
    this.ɵfac = function NavContentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavContentComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: NavContentComponent,
      selectors: [["app-nav-content"]],
      outputs: {
        NavMobCollapse: "NavMobCollapse"
      },
      decls: 8,
      vars: 1,
      consts: [[2, "height", "calc(100vh - 56px)", 3, "clickOutside"], [1, "navbar-content"], [1, "nav", "pcoded-inner-navbar", 3, "clickOutside"], [1, "version"], ["disabled", "", 1, "pe-auto"], [3, "item"]],
      template: function NavContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ng-scrollbar", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("clickOutside", function NavContentComponent_Template_ng_scrollbar_clickOutside_0_listener() {
            return ctx.navMob();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "ul", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("clickOutside", function NavContentComponent_Template_ul_clickOutside_2_listener() {
            return ctx.fireOutClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterCreate"](3, NavContentComponent_For_4_Template, 3, 3, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3)(6, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrepeater"](ctx.navigations);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("v", ctx.currentApplicationVersion, "");
        }
      },
      dependencies: [src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_8__.NgScrollbar, _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_3__.NavCollapseComponent, _nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_4__.NavGroupComponent, _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_5__.NavItemComponent],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL25hdmlnYXRpb24vbmF2LWNvbnRlbnQvbmF2LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 74094:
/*!********************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavGroupComponent: () => (/* binding */ NavGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nav-collapse/nav-collapse.component */ 41158);
/* harmony import */ var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav-item/nav-item.component */ 9722);
// Angular Import





function NavGroupComponent_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav-group", 0);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r1);
  }
}
function NavGroupComponent_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav-collapse", 0);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r1);
  }
}
function NavGroupComponent_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav-item", 0);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r1);
  }
}
function NavGroupComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NavGroupComponent_For_1_Conditional_0_Template, 1, 1, "app-nav-group", 0)(1, NavGroupComponent_For_1_Conditional_1_Template, 1, 1, "app-nav-collapse", 0)(2, NavGroupComponent_For_1_Conditional_2_Template, 1, 1, "app-nav-item", 0);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](item_r1.type === "group" ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](item_r1.type === "collapse" ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](item_r1.type === "item" ? 2 : -1);
  }
}
class NavGroupComponent {
  constructor() {
    this.location = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location);
    this.locationStrategy = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_3__.LocationStrategy);
    // public props
    this.item = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.input)();
  }
  // life cycle event
  ngOnInit() {
    // at reload time active and trigger link
    let current_url = this.location.path();
    const baseHref = this.locationStrategy.getBaseHref();
    if (baseHref) {
      current_url = baseHref + this.location.path();
    }
    const link = "a.nav-link[ href='" + current_url + "' ]";
    const ele = document.querySelector(link);
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const up_parent = parent?.parentElement?.parentElement;
      const last_parent = up_parent?.parentElement;
      if (parent?.classList.contains('pcoded-hasmenu')) {
        parent.classList.add('pcoded-trigger');
        parent.classList.add('active');
      } else if (up_parent?.classList.contains('pcoded-hasmenu')) {
        up_parent.classList.add('pcoded-trigger');
        up_parent.classList.add('active');
      } else if (last_parent?.classList.contains('pcoded-hasmenu')) {
        last_parent.classList.add('pcoded-trigger');
        last_parent.classList.add('active');
      }
    }
  }
  static {
    this.ɵfac = function NavGroupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavGroupComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NavGroupComponent,
      selectors: [["app-nav-group"]],
      inputs: {
        item: [1, "item"]
      },
      decls: 2,
      vars: 0,
      consts: [[3, "item"]],
      template: function NavGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](0, NavGroupComponent_For_1_Template, 3, 3, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
        }
        if (rf & 2) {
          let tmp_0_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"]((tmp_0_0 = ctx.item()) == null ? null : tmp_0_0.children);
        }
      },
      dependencies: [NavGroupComponent, _nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_0__.NavCollapseComponent, _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_1__.NavItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL25hdmlnYXRpb24vbmF2LWNvbnRlbnQvbmF2LWdyb3VwL25hdi1ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9722:
/*!******************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavItemComponent: () => (/* binding */ NavItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/admin-page/SERVICES/users.service */ 88026);
/* harmony import */ var src_app_admin_page_SERVICES_Module_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin-page/SERVICES/Module-Service */ 84173);







const _c0 = () => ["active"];
const _c1 = a0 => [a0];
function NavItemComponent_Conditional_0_li_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.item.icon);
  }
}
function NavItemComponent_Conditional_0_li_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.item.title);
  }
}
function NavItemComponent_Conditional_0_li_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.item.title, " ");
  }
}
function NavItemComponent_Conditional_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 0)(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavItemComponent_Conditional_0_li_0_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.closeOtherMenu($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavItemComponent_Conditional_0_li_0_Conditional_2_Template, 2, 1, "span", 4)(3, NavItemComponent_Conditional_0_li_0_Conditional_3_Template, 2, 1, "span", 5)(4, NavItemComponent_Conditional_0_li_0_Conditional_4_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.item.classes)("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("target", ctx_r1.item.target ? "_blank" : "_self")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c1, ctx_r1.item.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r1.item.icon ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r1.item.icon ? 3 : 4);
  }
}
function NavItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NavItemComponent_Conditional_0_li_0_Template, 5, 9, "li", 2);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.canShow);
  }
}
function NavItemComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.item.icon);
  }
}
function NavItemComponent_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.item.title);
  }
}
function NavItemComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.item.title, " ");
  }
}
function NavItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 1)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavItemComponent_Conditional_1_Conditional_2_Template, 2, 1, "span", 4)(3, NavItemComponent_Conditional_1_Conditional_3_Template, 2, 1, "span", 5)(4, NavItemComponent_Conditional_1_Conditional_4_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.item.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("target", ctx_r1.item.target ? "_blank" : "_self")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, ctx_r1.item.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r1.item.icon ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r1.item.icon ? 3 : 4);
  }
}
class NavItemComponent {
  constructor(usersService, moduleService) {
    this.usersService = usersService;
    this.moduleService = moduleService;
    this.canShow = false;
    this.entrepriseModules = [];
  }
  ngOnInit() {
    this.moduleService.getModulesEntreprise().subscribe({
      next: modules => {
        this.entrepriseModules = modules.filter(mod => mod.actif).map(mod => mod.code.trim().toUpperCase());
        this.evaluateVisibility();
      },
      error: () => {
        this.canShow = false;
      }
    });
  }
  evaluateVisibility() {
    this.usersService.getUserInfo().subscribe({
      next: user => {
        this.canShow = this.hasVisibleItem(this.item, user.permissions);
      },
      error: () => {
        this.canShow = false;
      }
    });
  }
  hasVisibleItem(item, permissions) {
    // Vérifier permission et module sur l'item courant
    const hasPermission = !item.codePermission || permissions.includes(item.codePermission);
    const hasModule = !item.codeModule || this.entrepriseModules.includes(item.codeModule);
    if (hasPermission && hasModule) {
      return true; // cet item peut s’afficher
    }
    // Sinon, on vérifie récursivement les enfants
    if (item.children?.length) {
      return item.children.some(child => this.hasVisibleItem(child, permissions));
    }
    return false;
  }
  // public method
  closeOtherMenu(event) {
    const ele = event.target;
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const up_parent = parent.parentElement.parentElement.parentElement;
      const last_parent = up_parent.parentElement;
      const sections = document.querySelectorAll('.pcoded-hasmenu');
      for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
        sections[i].classList.remove('pcoded-trigger');
      }
      if (parent.classList.contains('pcoded-hasmenu')) {
        parent.classList.add('pcoded-trigger');
        parent.classList.add('active');
      } else if (up_parent.classList.contains('pcoded-hasmenu')) {
        up_parent.classList.add('pcoded-trigger');
        up_parent.classList.add('active');
      } else if (last_parent?.classList.contains('pcoded-hasmenu')) {
        last_parent.classList.add('pcoded-trigger');
        last_parent.classList.add('active');
      }
    }
    if (document.querySelector('app-navigation.pcoded-navbar')?.classList.contains('mob-open')) {
      document.querySelector('app-navigation.pcoded-navbar')?.classList.remove('mob-open');
    }
  }
  static {
    this.ɵfac = function NavItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_Module_Service__WEBPACK_IMPORTED_MODULE_1__.ModuleService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NavItemComponent,
      selectors: [["app-nav-item"]],
      inputs: {
        item: "item"
      },
      decls: 2,
      vars: 2,
      consts: [[3, "ngClass", "routerLinkActive"], [3, "ngClass"], [3, "ngClass", "routerLinkActive", 4, "ngIf"], [1, "nav-link", 3, "click", "target", "routerLink"], [1, "pcoded-micon"], [1, "pcoded-mtext"], [1, "feather", 3, "ngClass"], [3, "target", "routerLink"]],
      template: function NavItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NavItemComponent_Conditional_0_Template, 1, 1, "li", 0)(1, NavItemComponent_Conditional_1_Template, 5, 7, "li", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.item.url && !ctx.item.external ? 0 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.item.url && ctx.item.external ? 1 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL25hdmlnYXRpb24vbmF2LWNvbnRlbnQvbmF2LWl0ZW0vbmF2LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5287:
/*!***********************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/navigation.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationComponent: () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-content/nav-content.component */ 79772);
/* harmony import */ var src_app_admin_page_SERVICES_Module_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin-page/SERVICES/Module-Service */ 84173);
// Angular Import

// project import



class NavigationComponent {
  constructor(moduleService) {
    this.moduleService = moduleService;
    this.NavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.modulesActifs = [];
    this.windowWidth = window.innerWidth;
  }
  ngOnInit() {
    this.chargerModulesActifs();
  }
  navMobCollapse() {
    if (this.windowWidth < 992) {
      this.NavMobCollapse.emit();
    }
  }
  chargerModulesActifs() {
    this.moduleService.getModulesEntreprise().subscribe({
      next: modules => {
        this.modulesActifs = modules.filter(m => m.actif === true);
        console.log('Modules actifs filtrés', this.modulesActifs);
      },
      error: err => console.error('Erreur chargement modules', err)
    });
  }
  estModuleVisible(code) {
    return this.modulesActifs.some(m => m.code === code);
  }
  static {
    this.ɵfac = function NavigationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_Module_Service__WEBPACK_IMPORTED_MODULE_1__.ModuleService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["app-navigation"]],
      outputs: {
        NavMobCollapse: "NavMobCollapse"
      },
      decls: 2,
      vars: 0,
      consts: [[1, "navbar-wrapper"], [3, "NavMobCollapse"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "app-nav-content", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("NavMobCollapse", function NavigationComponent_Template_app_nav_content_NavMobCollapse_1_listener() {
            return ctx.navMobCollapse();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_0__.NavContentComponent],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 67238:
/*!*************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/navigation.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationItems: () => (/* binding */ NavigationItems)
/* harmony export */ });
const NavigationItems = [{
  id: 'navigation',
  title: '',
  type: 'group',
  icon: 'icon-group',
  children: [{
    id: 'dashboard',
    title: 'Dashboard',
    type: 'item',
    url: '/analytics',
    icon: 'feather icon-home'
  }]
}, {
  id: 'page',
  title: '',
  type: 'group',
  icon: 'icon-group',
  children: [{
    id: 'vente',
    title: 'Ventes',
    type: 'item',
    url: '/vente',
    classes: 'nav-item',
    icon: 'feather icon-bar-chart-2',
    codePermission: 'GERER_PRODUITS'
  }, {
    id: 'pos',
    title: 'Point de vente',
    type: 'item',
    url: '/pos-caisse',
    classes: 'nav-item',
    icon: 'feather icon-shopping-cart',
    codePermission: 'VENDRE_PRODUITS'
  }, {
    id: 'produit',
    title: 'Produits',
    type: 'item',
    url: '/produit',
    icon: 'feather icon-tag',
    codePermission: 'GERER_PRODUITS'
  }, {
    id: 'boutique',
    title: 'Boutiques',
    type: 'item',
    url: '/boutique',
    classes: 'nav-item',
    icon: 'feather icon-list',
    codePermission: 'GERER_BOUTIQUE'
  }, {
    id: 'stock',
    title: '',
    type: 'group',
    icon: 'icon-group',
    children: [{
      id: 'stock',
      title: 'Stocks',
      type: 'collapse',
      icon: 'feather icon-box',
      codePermission: 'APPROVISIONNER_STOCK',
      codeModule: 'STOCK',
      children: [{
        id: 'stocks',
        title: 'Mes Stocks',
        type: 'item',
        url: '/stocks'
      }, {
        id: 'facture',
        title: 'Factures',
        type: 'item',
        url: '/facture'
        // classes: 'nav-item',
        // icon: 'feather icon-file'
      }]
    }]
  }, {
    id: 'clients',
    title: 'Clients',
    type: 'item',
    url: '/clients',
    classes: 'nav-item',
    icon: 'feather icon-users',
    codePermission: 'GERER_CLIENTS',
    codeModule: 'CLIENT'
  }, {
    id: 'fournisseurs',
    title: 'Fournisseurs',
    type: 'item',
    url: '/fournisseurs',
    classes: 'nav-item',
    icon: 'feather icon-user',
    codePermission: 'GERER_FOURNISSEURS'
  }
  // Pour les compte
  /*{
    id: 'compte',
    title: 'Comptes',
    type: 'item',
    url: '/compte',
    classes: 'nav-item',
    icon: 'feather icon-bell'
  },*/]
}, {
  id: 'factures',
  title: 'Test',
  type: 'group',
  icon: 'icon-group',
  children: [{
    id: 'facturation',
    title: 'Facturation',
    type: 'collapse',
    icon: 'feather icon-file',
    codePermission: 'GESTION_FACTURATION',
    children: [{
      id: 'facture-proforma',
      title: 'Facture proforma',
      type: 'item',
      url: '/facture-proforma'
    }, {
      id: 'facture-reelle',
      title: 'Facture reelle',
      type: 'item',
      url: '/facture-reel'
      // codeModule: 'FACTURE_REELLE'
    }]
  }]
}, {
  id: 'Comptabilite',
  title: '',
  type: 'group',
  icon: 'icon-group',
  children: [{
    id: 'comptabilite',
    title: 'Comptabilite',
    type: 'item',
    url: '/comptabilite',
    classes: 'nav-item',
    icon: 'feather icon-clipboard',
    codePermission: 'COMPTABILITE'
  }]
}, {
  id: 'Comptes',
  title: '',
  type: 'group',
  icon: 'icon-group',
  children: [{
    id: 'parametres',
    title: 'Parametres',
    type: 'item',
    url: '/account-settings',
    classes: 'nav-item',
    icon: 'feather icon-settings'
  }]
}
// FIN 
/*
{
  id: 'ui-component',
  title: 'Ui Component',
  type: 'group',
  icon: 'icon-group',
  children: [
    {
      id: 'basic',
      title: 'Component',
      type: 'collapse',
      icon: 'feather icon-box',
      children: [
        {
          id: 'button',
          title: 'Button',
          type: 'item',
          url: '/component/button'
        },
        {
          id: 'badges',
          title: 'Badges',
          type: 'item',
          url: '/component/badges'
        },
        {
          id: 'breadcrumb-pagination',
          title: 'Breadcrumb & Pagination',
          type: 'item',
          url: '/component/breadcrumb-paging'
        },
        {
          id: 'collapse',
          title: 'Collapse',
          type: 'item',
          url: '/component/collapse'
        },
        {
          id: 'tabs-pills',
          title: 'Tabs & Pills',
          type: 'item',
          url: '/component/tabs-pills'
        },
        {
          id: 'typography',
          title: 'Typography',
          type: 'item',
          url: '/component/typography'
        }
      ]
    }
  ]
},
{
  id: 'Authentication',
  title: 'Authentication',
  type: 'group',
  icon: 'icon-group',
  children: [
    {
      id: 'accueil',
      title: 'Accueil',
      type: 'item',
      url: '/auth/login/loginPage',
      icon: 'feather icon-at-sign',
      target: true,
      breadcrumbs: false
    },
    {
      id: 'inscription',
      title: 'Inscription',
      type: 'item',
      url: '/auth/inscription',
      icon: 'feather icon-at-sign',
      target: true,
      breadcrumbs: false
    },
    {
      id: 'connexion',
      title: 'Connection',
      type: 'item',
      url: '/auth/connexion',
      icon: 'feather icon-at-sign',
      target: true,
      breadcrumbs: false
    },
    {
      id: 'signup',
      title: 'Sign up',
      type: 'item',
      url: '/auth/signup',
      icon: 'feather icon-at-sign',
      target: true,
      breadcrumbs: false
    },
    {
      id: 'signin',
      title: 'Sign in',
      type: 'item',
      url: '/auth/signin',
      icon: 'feather icon-log-in',
      target: true,
      breadcrumbs: false
    }
  ]
},
{
  id: 'chart',
  title: 'Chart',
  type: 'group',
  icon: 'icon-group',
  children: [
    {
      id: 'apexchart',
      title: 'ApexChart',
      type: 'item',
      url: '/chart',
      classes: 'nav-item',
      icon: 'feather icon-pie-chart'
    }
  ]
},
{
  id: 'forms & tables',
  title: 'Forms & Tables',
  type: 'group',
  icon: 'icon-group',
  children: [
    {
      id: 'forms',
      title: 'Basic Forms',
      type: 'item',
      url: '/forms',
      classes: 'nav-item',
      icon: 'feather icon-file-text'
    },
    {
      id: 'tables',
      title: 'tables',
      type: 'item',
      url: '/tables',
      classes: 'nav-item',
      icon: 'feather icon-server'
    }
  ]
},
{
  id: 'other',
  title: 'Other',
  type: 'group',
  icon: 'icon-group',
  children: [
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/sample-page',
      classes: 'nav-item',
      icon: 'feather icon-sidebar'
    },
    {
      id: 'menu-level',
      title: 'Menu Levels',
      type: 'collapse',
      icon: 'feather icon-menu',
      children: [
        {
          id: 'menu-level-2.1',
          title: 'Menu Level 2.1',
          type: 'item',
          url: 'javascript:',
          external: true
        },
        {
          id: 'menu-level-2.2',
          title: 'Menu Level 2.2',
          type: 'collapse',
          children: [
            {
              id: 'menu-level-2.2.1',
              title: 'Menu Level 2.2.1',
              type: 'item',
              url: 'javascript:',
              external: true
            },
            {
              id: 'menu-level-2.2.2',
              title: 'Menu Level 2.2.2',
              type: 'item',
              url: 'javascript:',
              external: true
            }
          ]
        }
      ]
    }
  ]
}
  */];

/***/ }),

/***/ 65617:
/*!*******************************************************!*\
  !*** ./src/app/theme/layout/guest/guest.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GuestComponent: () => (/* binding */ GuestComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);



class GuestComponent {
  static {
    this.ɵfac = function GuestComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GuestComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GuestComponent,
      selectors: [["app-guest"]],
      decls: 1,
      vars: 0,
      template: function GuestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJndWVzdC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvbGF5b3V0L2d1ZXN0L2d1ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 61703:
/*!****************************************************************************!*\
  !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreadcrumbComponent: () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var src_app_theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/theme/layout/admin/navigation/navigation */ 67238);
// Angular Import



// project import


class BreadcrumbComponent {
  // constructor
  constructor() {
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
    this.titleService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title);
    // public props
    this.type = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)();
    this.breadcrumbList = [];
    this.navigations = src_app_theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_0__.NavigationItems;
    this.setBreadcrumb();
  }
  // public method
  setBreadcrumb() {
    this.route.events.subscribe(router => {
      if (router instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
        const activeLink = router.url;
        const breadcrumbList = this.filterNavigation(this.navigations, activeLink);
        this.navigationList = breadcrumbList;
        const title = breadcrumbList[breadcrumbList.length - 1]?.title || 'Bienvenue';
        this.titleService.setTitle(title + ' | sur Tchakeda');
      }
    });
  }
  filterNavigation(navItems, activeLink) {
    for (const navItem of navItems) {
      if (navItem.type === 'item' && 'url' in navItem && navItem.url === activeLink) {
        return [{
          url: 'url' in navItem ? navItem.url : false,
          title: navItem.title,
          breadcrumbs: 'breadcrumbs' in navItem ? navItem.breadcrumbs : true,
          type: navItem.type
        }];
      }
      if ((navItem.type === 'group' || navItem.type === 'collapse') && 'children' in navItem) {
        const breadcrumbList = this.filterNavigation(navItem.children, activeLink);
        if (breadcrumbList.length > 0) {
          breadcrumbList.unshift({
            url: 'url' in navItem ? navItem.url : false,
            title: navItem.title,
            breadcrumbs: 'breadcrumbs' in navItem ? navItem.breadcrumbs : true,
            type: navItem.type
          });
          return breadcrumbList;
        }
      }
    }
    return [];
  }
  static {
    this.ɵfac = function BreadcrumbComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BreadcrumbComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BreadcrumbComponent,
      selectors: [["app-breadcrumb"]],
      inputs: {
        type: [1, "type"]
      },
      decls: 0,
      vars: 0,
      template: function BreadcrumbComponent_Template(rf, ctx) {},
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
      styles: [".logoCompany[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin-right: 20px;\n}\n\n.logoCompany[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ29Db21wYW55IHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuXG4gIC5sb2dvQ29tcGFueSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDQSxnb0JBQWdvQiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvQ29tcGFueSB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cblxuICAubG9nb0NvbXBhbnkgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 33413:
/*!****************************************************************!*\
  !*** ./src/app/theme/shared/components/card/card.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardComponent: () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 48418);
// Angular Import



// bootstrap import



const _c0 = ["*", [["", 8, "app-card-header"]], [["", 8, "app-card-subheader"]], [["", 8, "app-card-footer"]]];
const _c1 = ["*", ".app-card-header", ".app-card-subheader", ".app-card-footer"];
function CardComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cardTitle);
  }
}
function CardComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.CardDate());
  }
}
function CardComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 11)(5, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Conditional_2_Conditional_3_Template_li_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      const toAnimate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.fullCardToggle(toAnimate_r3, "", true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 13)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Conditional_2_Conditional_3_Template_li_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.collapsedCardToggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 13)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Conditional_2_Conditional_3_Template_li_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.cardRefresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Reload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Conditional_2_Conditional_3_Template_li_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.cardRemoveAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.fullIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.cardClass === "full-card" ? "Restore" : "Maximize", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.collapsedIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.collapsedCard === "collapsed" ? "Expand" : "Collapse", " ");
  }
}
function CardComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1);
  }
}
function CardComponent_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 2);
  }
}
function CardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_Conditional_2_Conditional_1_Template, 2, 1, "h5")(2, CardComponent_Conditional_2_Conditional_2_Template, 2, 1, "span", 6)(3, CardComponent_Conditional_2_Conditional_3_Template, 25, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardComponent_Conditional_2_Conditional_5_Template, 1, 0)(6, CardComponent_Conditional_2_Conditional_6_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.headerClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx_r0.customHeader ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx_r0.customDate ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r0.options && !ctx_r0.customHeader ? 3 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r0.customHeader ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r0.customDate ? 6 : -1);
  }
}
function CardComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.footerClass());
  }
}
function CardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class CardComponent {
  // constructor
  constructor() {
    this.blockClass = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    this.headerClass = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    this.CardDate = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    this.footerClass = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)();
    const config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownConfig);
    config.placement = 'bottom-right';
    this.customHeader = false;
    this.customDate = false;
    this.options = true;
    this.hidHeader = false;
    this.cardTitle = 'Card Title';
    this.fullIcon = 'icon-maximize';
    this.isAnimating = false;
    this.isCardFooter = false;
    this.collapsedCard = 'expanded';
    this.collapsedIcon = 'icon-minus';
    this.loadCard = false;
    this.cardRemove = 'open';
  }
  // life cycle event
  ngOnInit() {
    if (!this.options || this.hidHeader || this.customHeader) {
      this.collapsedCard = 'false';
    }
    if (!this.options || this.hidHeader || this.customDate) {
      this.collapsedCard = 'false';
    }
  }
  // public method
  fullCardToggle(element, animation, status) {
    animation = this.cardClass === 'full-card' ? 'zoomOut' : 'zoomIn';
    this.fullIcon = this.cardClass === 'full-card' ? 'icon-maximize' : 'icon-minimize';
    this.cardClass = this.cardClass === 'full-card' ? this.cardClass : 'full-card';
    if (status) {
      this.animation = animation;
    }
    this.isAnimating = true;
    setTimeout(() => {
      this.cardClass = animation === 'zoomOut' ? '' : this.cardClass;
      if (this.cardClass === 'full-card') {
        document.querySelector('body').style.overflow = 'hidden';
      } else {
        document.querySelector('body').removeAttribute('style');
      }
    }, 500);
  }
  collapsedCardToggle() {
    this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
    this.collapsedIcon = this.collapsedCard === 'collapsed' ? 'icon-plus' : 'icon-minus';
  }
  cardRefresh() {
    this.loadCard = true;
    this.cardClass = 'card-load';
    setTimeout(() => {
      this.loadCard = false;
      this.cardClass = 'expanded';
    }, 3000);
  }
  cardRemoveAction() {
    this.cardRemove = this.cardRemove === 'closed' ? 'open' : 'closed';
  }
  static {
    this.ɵfac = function CardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["app-card"]],
      inputs: {
        cardTitle: "cardTitle",
        cardClass: "cardClass",
        blockClass: [1, "blockClass"],
        headerClass: [1, "headerClass"],
        options: "options",
        hidHeader: "hidHeader",
        customHeader: "customHeader",
        customDate: "customDate",
        CardDate: [1, "CardDate"],
        isCardFooter: "isCardFooter",
        footerClass: [1, "footerClass"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownConfig])],
      ngContentSelectors: _c1,
      decls: 8,
      vars: 7,
      consts: [["toAnimate", ""], [1, "card", 3, "ngClass"], [1, "card-header", 3, "ngClass"], [1, "card-body", 3, "ngClass"], [1, "card-footer", 3, "ngClass"], [1, "card-loader"], [1, "d-block"], [1, "card-header-right"], ["ngbDropdown", "", 1, "btn-group", "card-option", "dropdown"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "dropdown-toggle", "btn-icon"], [1, "feather", "icon-more-horizontal"], ["ngbDropdownMenu", "", 1, "list-unstyled", "card-option", "dropdown-menu", "dropdown-menu-end"], [1, "dropdown-item", "full-card", 3, "click"], ["href", "javascript:"], [1, "feather", 3, "ngClass"], [1, "dropdown-item", "minimize-card", 3, "click"], [2, "display", "none"], [1, "feather", "icon-plus"], [1, "dropdown-item", "reload-card", 3, "click"], [1, "feather", "icon-refresh-cw"], [1, "dropdown-item", "close-card", 3, "click"], [1, "feather", "icon-trash"], [1, "pct-loader1", "anim-rotate"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_Conditional_2_Template, 7, 6, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div")(4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardComponent_Conditional_6_Template, 2, 1, "div", 4)(7, CardComponent_Conditional_7_Template, 2, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.cardClass)("@cardRemove", ctx.cardRemove);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx.hidHeader ? 2 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@collapsedCard", ctx.collapsedCard);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.blockClass());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.isCardFooter ? 6 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.loadCard ? 7 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
      styles: [".card.full-card[_ngcontent-%COMP%] {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  z-index: 99999;\n  border-radius: 0;\n  width: 100vw !important;\n  height: 100vh !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FBQ0YiLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLmZ1bGwtY2FyZCB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5OTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgd2lkdGg6IGNhbGMoMTAwdncpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQUNGO0FBQ0Esd2xCQUF3bEIiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC5mdWxsLWNhcmQge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3KSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('collapsedCard', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('collapsed, void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
          overflow: 'hidden',
          height: '0px'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
          overflow: 'hidden',
          height: _angular_animations__WEBPACK_IMPORTED_MODULE_3__.AUTO_STYLE
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('collapsed <=> expanded', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms ease-in-out')])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('cardRemove', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
          opacity: 1
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('closed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
          opacity: 0,
          display: 'none'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('open <=> closed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms'))])]
      }
    });
  }
}

/***/ }),

/***/ 34322:
/*!*************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinkits.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Spinkit: () => (/* binding */ Spinkit)
/* harmony export */ });
const Spinkit = {
  skChasingDots: 'sk-chasing-dots',
  skCubeGrid: 'sk-cube-grid',
  skDoubleBounce: 'sk-double-bounce',
  skRotatingPlane: 'sk-rotationg-plane',
  skSpinnerPulse: 'sk-spinner-pulse',
  skThreeBounce: 'sk-three-bounce',
  skWanderingCubes: 'sk-wandering-cubes',
  skWave: 'sk-wave',
  skLine: 'sk-line-material'
};

/***/ }),

/***/ 35639:
/*!**********************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinner.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpinnerComponent: () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _spinkits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinkits */ 34322);
// Angular Import



// project import


function SpinnerComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("colored", !ctx_r0.backgroundColor());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r0.backgroundColor());
  }
}
function SpinnerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SpinnerComponent_Conditional_0_Conditional_2_Template, 2, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx_r0.spinner() === ctx_r0.Spinkit.skLine ? 2 : -1);
  }
}
class SpinnerComponent {
  // constructor
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
    this.document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT);
    // public props
    this.isSpinnerVisible = true;
    this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_0__.Spinkit;
    this.backgroundColor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)('#2689E2');
    this.spinner = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.input)(_spinkits__WEBPACK_IMPORTED_MODULE_0__.Spinkit.skLine);
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationStart) {
        this.isSpinnerVisible = true;
      } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationCancel || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationError) {
        this.isSpinnerVisible = false;
      }
    }, () => {
      this.isSpinnerVisible = false;
    });
  }
  // life cycle event
  ngOnDestroy() {
    this.isSpinnerVisible = false;
  }
  static {
    this.ɵfac = function SpinnerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SpinnerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SpinnerComponent,
      selectors: [["app-spinner"]],
      inputs: {
        backgroundColor: [1, "backgroundColor"],
        spinner: [1, "spinner"]
      },
      decls: 1,
      vars: 1,
      consts: [["id", "http-loader"], [1, "loader-bg"], [1, "sk-line-material", 3, "colored"], [1, "sk-line-material"], [1, "sk-child", "sk-bounce1"]],
      template: function SpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SpinnerComponent_Conditional_0_Template, 3, 1, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.isSpinnerVisible ? 0 : -1);
        }
      },
      styles: ["#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 0.7;\n  background-color: #f1f1f1;\n}\n\n.colored-parent,\n.colored > div {\n  background-color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBOztFQUVFLHNCQUFBO0FBQ0YiLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNodHRwLWxvYWRlciB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4ubG9hZGVyLWJnIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xuICBvcGFjaXR5OiAwLjc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jb2xvcmVkLXBhcmVudCxcbi5jb2xvcmVkID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxzQkFBQTtBQUNGO0FBQ0EsNDNCQUE0M0IiLCJzb3VyY2VzQ29udGVudCI6WyIjaHR0cC1sb2FkZXIge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvYWRlci1iZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcbiAgb3BhY2l0eTogMC43O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4uY29sb3JlZC1wYXJlbnQsXG4uY29sb3JlZCA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */", ".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%;\n}\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transform-origin: 0% 0%;\n  animation: sk-line-material 2s ease-in-out 0s infinite both;\n}\n@keyframes sk-line-material {\n  0% {\n    transform: scaleX(0);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.colored-parent,\n.colored > div {\n  background-color: rgba(26, 188, 156, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNrLWxpbmUtbWF0ZXJpYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE1BQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFFQSwyREFBQTtBQUNGO0FBZUE7RUFDRTtJQUVFLG9CQUFBO0VBRkY7RUFJQTtJQUVFLG9CQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0UsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7QUFIRjs7QUFNQTs7RUFFRSx5Q0FBQTtBQUhGIiwiZmlsZSI6InNrLWxpbmUtbWF0ZXJpYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay1saW5lLW1hdGVyaWFsIHtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zay1saW5lLW1hdGVyaWFsIC5zay1jaGlsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XG4gIGFuaW1hdGlvbjogc2stbGluZS1tYXRlcmlhbCAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stbGluZS1tYXRlcmlhbCB7XG4gIDAlLFxuICA4MCUsXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2stbGluZS1tYXRlcmlhbCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIH1cbn1cblxuI2h0dHAtbG9hZGVyIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5sb2FkZXItYmcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT03MCk7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5jb2xvcmVkLXBhcmVudCxcbi5jb2xvcmVkID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMTg4LCAxNTYsIDAuOCk7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1saW5lLW1hdGVyaWFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBRUEsMkRBQUE7QUFDRjtBQWVBO0VBQ0U7SUFFRSxvQkFBQTtFQUZGO0VBSUE7SUFFRSxvQkFBQTtFQUZGO0FBQ0Y7QUFLQTtFQUNFLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FBSEY7O0FBTUE7O0VBRUUseUNBQUE7QUFIRjtBQWJBLDRxRUFBNHFFIiwic291cmNlc0NvbnRlbnQiOlsiLnNrLWxpbmUtbWF0ZXJpYWwge1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNrLWxpbmUtbWF0ZXJpYWwgLnNrLWNoaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWxpbmUtbWF0ZXJpYWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcbiAgYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcbiAgMCUsXG4gIDgwJSxcbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgfVxufVxuXG4jaHR0cC1sb2FkZXIge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvYWRlci1iZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLmNvbG9yZWQtcGFyZW50LFxuLmNvbG9yZWQgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAxODgsIDE1NiwgMC44KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 75606:
/*!***************************************************************************************!*\
  !*** ./src/app/theme/shared/session-expired-modal/session-expired-modal.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionExpiredModalComponent: () => (/* binding */ SessionExpiredModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);


class SessionExpiredModalComponent {
  constructor() {
    this.confirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  confirm() {
    this.confirmed.emit();
  }
  static {
    this.ɵfac = function SessionExpiredModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SessionExpiredModalComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SessionExpiredModalComponent,
      selectors: [["app-session-expired-modal"]],
      outputs: {
        confirmed: "confirmed"
      },
      decls: 9,
      vars: 0,
      consts: [[1, "confirmation-modal-aver"], [1, "modal-content-aver"], [2, "font-size", "16px", "margin-bottom", "10px"], [2, "margin", "0", "font-size", "12px"], [1, "modal-actions-aver"], [1, "btn-confirm", 2, "font-size", "12px", 3, "click"]],
      template: function SessionExpiredModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Informations");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Session expir\u00E9e, veuillez vous reconnecter.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SessionExpiredModalComponent_Template_button_click_7_listener() {
            return ctx.confirm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "OK");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
      },
      styles: [".confirmation-modal-aver[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1050;\n}\n\n.confirmation-modal-aver[_ngcontent-%COMP%]   .modal-content-aver[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  width: 300px;\n}\n\n.modal-actions-aver[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n\n.btn-confirm[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: white;\n  border: none;\n  padding: 4px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb24tZXhwaXJlZC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoic2Vzc2lvbi1leHBpcmVkLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm1hdGlvbi1tb2RhbC1hdmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwNTA7XG59XG5cbi5jb25maXJtYXRpb24tbW9kYWwtYXZlciAubW9kYWwtY29udGVudC1hdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5tb2RhbC1hY3Rpb25zLWF2ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYnRuLWNvbmZpcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhlbWUvc2hhcmVkL3Nlc3Npb24tZXhwaXJlZC1tb2RhbC9zZXNzaW9uLWV4cGlyZWQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0Esb2dEQUFvZ0QiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlybWF0aW9uLW1vZGFsLWF2ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTA1MDtcbn1cblxuLmNvbmZpcm1hdGlvbi1tb2RhbC1hdmVyIC5tb2RhbC1jb250ZW50LWF2ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLm1vZGFsLWFjdGlvbnMtYXZlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5idG4tY29uZmlybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 42389:
/*!***********************************************!*\
  !*** ./src/app/theme/shared/shared.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ 61703);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/card/card.component */ 33413);
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-scrollbar */ 74091);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ 85684);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mousetrap */ 80559);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 48418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);


// project import


// third party



// bootstrap import


class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _components_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_8__.NgScrollbarModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_8__.NgScrollbarModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _components_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_8__.NgScrollbarModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _components_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_8__.NgScrollbarModule]
  });
})();

/***/ }),

/***/ 21352:
/*!**********************************************************!*\
  !*** ./src/app/unlock-dialog/unlock-dialog.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnlockDialogComponent: () => (/* binding */ UnlockDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 42700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);






const _c0 = ["pin0"];
class UnlockDialogComponent {
  constructor(dialogRef, data, cdRef) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.cdRef = cdRef;
    this.isDialogOpen = false;
    this.personalCode = '';
    this.isCodeWrong = false;
    this.pin = ["", "", "", ""];
  }
  goToNext(currentInput, nextInput) {
    if (currentInput.value && nextInput) {
      nextInput.focus();
    }
  }
  handleBackspace(event, index, currentInput, previousInput) {
    if (event.key === "Backspace") {
      if (this.pin[index]) {
        this.pin[index] = "";
        event.preventDefault();
      } else if (previousInput && index > 0) {
        previousInput.focus();
      }
    }
  }
  verifyCode() {
    const enteredCode = this.pin.join("");
    if (enteredCode !== this.data.userPersonalCode) {
      this.isCodeWrong = true;
      setTimeout(() => {
        this.isCodeWrong = false;
        this.pin = ["", "", "", ""];
        this.cdRef.detectChanges();
        setTimeout(() => {
          if (this.firstInput) {
            this.firstInput.nativeElement.focus();
          }
        }, 50);
      }, 500);
    } else {
      console.log("✅ Code correct, fermeture du pop-up...");
      this.dialogRef.close(enteredCode);
    }
  }
  ngOnDestroy() {
    console.log("🛑 Le pop-up a été fermé !");
  }
  static {
    this.ɵfac = function UnlockDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UnlockDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.m), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.e), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UnlockDialogComponent,
      selectors: [["app-unlock-dialog"]],
      viewQuery: function UnlockDialogComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.firstInput = _t.first);
        }
      },
      inputs: {
        isDialogOpen: "isDialogOpen"
      },
      decls: 16,
      vars: 6,
      consts: [["pin0", ""], ["pin1", ""], ["pin2", ""], ["pin3", ""], [1, "popup"], [1, "pin-container"], ["type", "password", "maxlength", "1", "id", "0", 3, "ngModelChange", "input", "keydown", "ngModel"], ["type", "password", "maxlength", "1", "id", "1", 3, "ngModelChange", "input", "keydown", "ngModel"], ["type", "password", "maxlength", "1", "id", "2", 3, "ngModelChange", "input", "keydown", "ngModel"], ["type", "password", "maxlength", "1", "id", "3", 3, "ngModelChange", "input", "keydown", "ngModel"], [3, "click"]],
      template: function UnlockDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Session Verrouill\u00E9e \uD83D\uDD12");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Veuillez entrer votre Code PIN pour continuer.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "input", 6, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function UnlockDialogComponent_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.pin[0], $event) || (ctx.pin[0] = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function UnlockDialogComponent_Template_input_input_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            const pin0_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
            const pin1_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.goToNext(pin0_r2, pin1_r3));
          })("keydown", function UnlockDialogComponent_Template_input_keydown_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            const pin0_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
            const pin1_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.handleBackspace($event, 0, pin0_r2, pin1_r3));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function UnlockDialogComponent_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.pin[1], $event) || (ctx.pin[1] = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function UnlockDialogComponent_Template_input_input_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            const pin1_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
            const pin2_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.goToNext(pin1_r3, pin2_r4));
          })("keydown", function UnlockDialogComponent_Template_input_keydown_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            const pin0_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
            const pin1_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.handleBackspace($event, 1, pin1_r3, pin0_r2));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function UnlockDialogComponent_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.pin[2], $event) || (ctx.pin[2] = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function UnlockDialogComponent_Template_input_input_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            const pin2_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
            const pin3_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.goToNext(pin2_r4, pin3_r5));
          })("keydown", function UnlockDialogComponent_Template_input_keydown_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            const pin1_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
            const pin2_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.handleBackspace($event, 2, pin2_r4, pin1_r3));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function UnlockDialogComponent_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.pin[3], $event) || (ctx.pin[3] = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function UnlockDialogComponent_Template_input_input_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.verifyCode());
          })("keydown", function UnlockDialogComponent_Template_input_keydown_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            const pin2_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
            const pin3_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.handleBackspace($event, 3, pin3_r5, pin2_r4));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnlockDialogComponent_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.verifyCode());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "D\u00E9verrouiller");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("shake", ctx.isCodeWrong);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.pin[0]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.pin[1]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.pin[2]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.pin[3]);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule],
      styles: [".lock-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 1;\n  pointer-events: all;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\n.popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  z-index: 2;\n  pointer-events: auto;\n  width: 300px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  text-align: center;\n}\n\n.popup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 10px;\n  font-size: 12px;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  outline: none;\n  text-align: center;\n}\n\n.popup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: white;\n  border: none;\n  \n\n  font-size: 13px;\n  cursor: pointer;\n  width: 83%;\n  height: 35px;\n  border-radius: 30PX;\n}\n\nh2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n@keyframes _ngcontent-%COMP%_shake {\n  0% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-5px);\n  }\n  50% {\n    transform: translateX(5px);\n  }\n  75% {\n    transform: translateX(-5px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n.pin-container.shake[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  border: 2px solid #eb0a21;\n}\n\n.shake[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_shake 0.5s ease-in-out;\n}\n\n.pin-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  margin-bottom: 10px;\n}\n\n.pin-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  font-size: 30px;\n  text-align: center;\n  border: 2px solid #ccc;\n  border-radius: 5px;\n  transition: all 0.3s;\n}\n\n.pin-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #0672E4;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVubG9jay1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0EsZUFBQTtBQUVBOztBQUNBO0VBQ0E7SUFBSyx3QkFBQTtFQUdIO0VBRkY7SUFBTSwyQkFBQTtFQUtKO0VBSkY7SUFBTSwwQkFBQTtFQU9KO0VBTkY7SUFBTSwyQkFBQTtFQVNKO0VBUkY7SUFBTyx3QkFBQTtFQVdMO0FBQ0Y7QUFSQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFVRjs7QUFQQTtFQUNBLGlDQUFBO0FBVUE7O0FBUEE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFVRjs7QUFQQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBVUY7O0FBUEE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7QUFVRiIsImZpbGUiOiJ1bmxvY2stZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2stb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgei1pbmRleDogMTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xufVxuXG4ucG9wdXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgei1pbmRleDogMjtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHdpZHRoOiAzMDBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucG9wdXAgaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBvcHVwIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICAvKiBwYWRkaW5nOiAxMnB4IDIwcHg7ICovXG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogODMlO1xuICBib3JkZXItcmFkaXVzOiAzMFBYO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwUFg7XG59XG5cbmgyLCAuaDIge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5wIHtcbmZvbnQtc2l6ZTogMTBweDtcbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4wJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpOyB9XG41MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTsgfVxuNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpOyB9XG4xMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG5cbn1cblxuLnBpbi1jb250YWluZXIuc2hha2UgaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhOyBcbiAgYm9yZGVyOiAycHggc29saWQgI2ViMGEyMTtcbn1cblxuLnNoYWtlIHtcbmFuaW1hdGlvbjogc2hha2UgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLnBpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4XG59XG5cbi5waW4tY29udGFpbmVyIGlucHV0IHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5waW4tY29udGFpbmVyIGlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDY3MkU0O1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdW5sb2NrLWRpYWxvZy91bmxvY2stZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFDQTtFQUNBLGVBQUE7QUFFQTs7QUFDQTtFQUNBO0lBQUssd0JBQUE7RUFHSDtFQUZGO0lBQU0sMkJBQUE7RUFLSjtFQUpGO0lBQU0sMEJBQUE7RUFPSjtFQU5GO0lBQU0sMkJBQUE7RUFTSjtFQVJGO0lBQU8sd0JBQUE7RUFXTDtBQUNGO0FBUkE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0FBVUY7O0FBUEE7RUFDQSxpQ0FBQTtBQVVBOztBQVBBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVUY7O0FBUEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQVVGOztBQVBBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FBVUY7QUFDQSxnaUhBQWdpSCIsInNvdXJjZXNDb250ZW50IjpbIi5sb2NrLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHotaW5kZXg6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbn1cblxuLnBvcHVwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHotaW5kZXg6IDI7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB3aWR0aDogMzAwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBvcHVwIGlucHV0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wb3B1cCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgLyogcGFkZGluZzogMTJweCAyMHB4OyAqL1xuICBmb250LXNpemU6IDEzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDgzJTtcbiAgYm9yZGVyLXJhZGl1czogMzBQWDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiAzMFBYO1xufVxuXG5oMiwgLmgyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxucCB7XG5mb250LXNpemU6IDEwcHg7XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbjI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTsgfVxuNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7IH1cbjc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTsgfVxuMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuXG59XG5cbi5waW4tY29udGFpbmVyLnNoYWtlIGlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTsgXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlYjBhMjE7XG59XG5cbi5zaGFrZSB7XG5hbmltYXRpb246IHNoYWtlIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5waW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweFxufVxuXG4ucGluLWNvbnRhaW5lciBpbnB1dCB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ucGluLWNvbnRhaW5lciBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzA2NzJFNDtcbiAgb3V0bGluZTogbm9uZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 45312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ 8330);

const environment = {
  appVersion: _package_json__WEBPACK_IMPORTED_MODULE_0__.version,
  production: false,
  apiUrl: 'http://192.168.1.8:4200',
  apiBaseUrl: 'http://192.168.1.8:8080/api/auth',
  imgUrl: "http://192.168.1.8:8080",
  wsEndpoint: 'http://192.168.1.8:8080/ws'
};

/***/ }),

/***/ 84429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ 45312);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app-routing.module */ 94114);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 43835);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.component */ 20092);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations/async */ 6970);








// Supprimer console.log en production
if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
  // Redéfinir console.log pour qu'il ne fasse rien en production
  console.log = () => {};
  console.debug = () => {};
  console.info = () => {};
  console.warn = () => {};
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.provideAnimations)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.provideHttpClient)(), (0,_angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_7__.provideAnimationsAsync)()]
}).catch(err => console.error(err));

/***/ }),

/***/ 8330:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"gradient-able-free-angular-admin-template","version":"0.1","author":"CodedThemes","scripts":{"ng":"ng","start":"ng serve","build":"ng build","build-prod":"ng build --configuration production --base-href /demos/admin-templates/gradient-able/angular/free/","watch":"ng build --watch --configuration development","test":"ng test","lint":"ng lint","lint:fix":"ng lint --fix","prettier":"prettier --write src/"},"private":true,"dependencies":{"@angular/animations":"^19.0.5","@angular/cdk":"^19.0.4","@angular/common":"19.0.5","@angular/compiler":"19.0.5","@angular/core":"19.0.5","@angular/forms":"19.0.5","@angular/localize":"19.0.5","@angular/material":"^19.1.4","@angular/material-moment-adapter":"^19.2.1","@angular/platform-browser":"19.0.5","@angular/platform-browser-dynamic":"19.0.5","@angular/router":"19.0.5","@ng-bootstrap/ng-bootstrap":"18.0.0","@popperjs/core":"2.11.8","@stomp/stompjs":"^7.1.1","angular-code-input":"^2.0.0","apexcharts":"^4.4.0","bootstrap":"5.3.3","browser-image-compression":"^2.0.2","crypto-js":"^4.2.0","hammerjs":"2.0.8","jquery":"3.7.1","jspdf":"^2.5.2","jspdf-autotable":"^3.8.4","lodash-es":"4.17.21","moment":"^2.30.1","mousetrap":"1.6.5","ng-apexcharts":"^1.15.0","ngx-barcode":"^0.3.0","ngx-barcode6":"^1.0.26","ngx-color-picker":"17.0.0","ngx-scrollbar":"16.1.1","pdfjs-dist":"^5.2.133","rxjs":"~7.8.1","sockjs-client":"^1.6.1","sweetalert2":"^11.16.1","tslib":"2.8.1","xlsx":"^0.18.5","zone.js":"~0.15.0"},"devDependencies":{"@angular-devkit/build-angular":"19.0.6","@angular-eslint/builder":"19.0.2","@angular-eslint/eslint-plugin":"19.0.2","@angular-eslint/eslint-plugin-template":"19.0.2","@angular-eslint/schematics":"19.0.2","@angular-eslint/template-parser":"19.0.2","@angular/cli":"19.0.6","@angular/compiler-cli":"19.0.5","@eslint/eslintrc":"^3.2.0","@eslint/js":"^9.17.0","@types/jasmine":"~5.1.5","@types/jspdf":"^1.3.3","@types/lodash":"4.17.13","@types/lodash-es":"^4.17.12","@types/node":"22.10.2","@types/sockjs-client":"^1.5.4","@types/xlsx":"^0.0.35","@typescript-eslint/eslint-plugin":"8.18.1","@typescript-eslint/parser":"8.18.1","autoprefixer":"^10.4.21","eslint":"9.17.0","jasmine-core":"~5.5.0","karma":"~6.4.4","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.1","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.1.0","postcss":"^8.5.6","prettier":"3.4.2","tailwindcss":"^3.4.17","typescript":"5.6.3"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map