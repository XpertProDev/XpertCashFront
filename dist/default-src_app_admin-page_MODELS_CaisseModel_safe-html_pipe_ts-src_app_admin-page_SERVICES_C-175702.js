"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["default-src_app_admin-page_MODELS_CaisseModel_safe-html_pipe_ts-src_app_admin-page_SERVICES_C-175702"],{

/***/ 37726:
/*!*****************************************************************!*\
  !*** ./src/app/admin-page/MODELS/CaisseModel/safe-html.pipe.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeHtmlPipe: () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 80436);


class SafeHtmlPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
  static {
    this.ɵfac = function SafeHtmlPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeHtml",
      type: SafeHtmlPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 37788:
/*!*****************************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/CaisseService/boutique-state.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoutiqueStateService: () => (/* binding */ BoutiqueStateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class BoutiqueStateService {
  constructor() {
    this.STORAGE_KEY = 'selectedBoutiqueId';
    // initialisation avec la valeur sessionStorage (ou migration depuis localStorage)
    this.selectedBoutiqueSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.loadInitial());
    this.selectedBoutique$ = this.selectedBoutiqueSubject.asObservable();
    // rien d'autre à faire ici (loadInitial a déjà effectué la migration si nécessaire)
  }
  /** Charge la valeur initiale depuis sessionStorage.
   *  Si une valeur existe dans localStorage (ancienne app), on la migre vers sessionStorage. */
  loadInitial() {
    // migration depuis localStorage (si nécessaire)
    const legacy = localStorage.getItem(this.STORAGE_KEY);
    if (legacy !== null) {
      try {
        // transférer dans sessionStorage puis supprimer l'ancien
        sessionStorage.setItem(this.STORAGE_KEY, legacy);
      } catch (e) {
        console.warn('Impossible de migrer la boutique depuis localStorage', e);
      }
      localStorage.removeItem(this.STORAGE_KEY);
    }
    const saved = sessionStorage.getItem(this.STORAGE_KEY);
    return saved !== null ? Number(saved) : null;
  }
  setSelectedBoutique(boutiqueId) {
    if (boutiqueId !== null) {
      sessionStorage.setItem(this.STORAGE_KEY, boutiqueId.toString());
    } else {
      sessionStorage.removeItem(this.STORAGE_KEY);
    }
    this.selectedBoutiqueSubject.next(boutiqueId);
  }
  /** retourne la valeur actuelle (ou null si aucune) */
  getCurrentValue() {
    const saved = sessionStorage.getItem(this.STORAGE_KEY);
    return saved !== null ? Number(saved) : null;
  }
  static {
    this.ɵfac = function BoutiqueStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoutiqueStateService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BoutiqueStateService,
      factory: BoutiqueStateService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 12334:
/*!***************************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/CaisseService/caisse-state.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaisseStateService: () => (/* binding */ CaisseStateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class CaisseStateService {
  constructor() {
    this.caisseCreatedSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.refreshCaissesSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.showAllCaissesSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
    this.caisseCreated$ = this.caisseCreatedSource.asObservable();
    this.refreshCaisses$ = this.refreshCaissesSource.asObservable();
    this.showAllCaisses$ = this.showAllCaissesSource.asObservable();
  }
  notifyCaisseCreated(caisse) {
    this.caisseCreatedSource.next(caisse);
  }
  triggerRefresh() {
    this.refreshCaissesSource.next(true);
  }
  // contrôle direct
  showAllCaisses(value) {
    this.showAllCaissesSource.next(!!value);
    console.log('[CaisseStateService] showAllCaisses ->', !!value);
  }
  // toggle
  toggleShowAllCaisses() {
    const next = !this.showAllCaissesSource.getValue();
    this.showAllCaissesSource.next(next);
    console.log('[CaisseStateService] toggle ->', next);
  }
  // debug helper (optionnel)
  getShowAllCaissesValue() {
    return this.showAllCaissesSource.getValue();
  }
  static {
    this.ɵfac = function CaisseStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CaisseStateService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CaisseStateService,
      factory: CaisseStateService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 35322:
/*!*************************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/CaisseService/pagination.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationService: () => (/* binding */ PaginationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class PaginationService {
  constructor() {
    this.paginationState = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 0
    });
    this.state$ = this.paginationState.asObservable();
  }
  getState() {
    return this.paginationState.value;
  }
  updateState(newState) {
    const current = this.paginationState.value;
    this.paginationState.next({
      ...current,
      ...newState
    });
  }
  setPage(page) {
    const safe = Math.max(1, Math.floor(page));
    this.updateState({
      currentPage: safe
    });
  }
  setItemsPerPage(size) {
    const safe = Math.max(1, Math.floor(size));
    this.updateState({
      itemsPerPage: safe,
      currentPage: 1
    });
  }
  setTotalItems(total) {
    const safe = Math.max(0, Math.floor(total));
    this.updateState({
      totalItems: safe
    });
  }
  reset() {
    this.paginationState.next({
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 0
    });
  }
  static {
    this.ɵfac = function PaginationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PaginationService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PaginationService,
      factory: PaginationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 74864:
/*!*************************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/CaisseService/pos-caisse-service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PosCaisseService: () => (/* binding */ PosCaisseService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.service */ 88026);







class PosCaisseService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  ouvrirCaisse(request) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        throw new Error('Aucun token trouvé');
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.post(`${this.apiUrl}/ouvrir`, request, {
        headers
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Erreur détaillée', error);
      // Essayez d'extraire le message d'erreur spécifique
      let errorMsg = 'Erreur lors de l\'ouverture de la caisse';
      if (error.error && error.error.error) {
        errorMsg = error.error.error;
      } else if (error.error && error.error.message) {
        errorMsg = error.error.message;
      } else if (error.message) {
        errorMsg = error.message;
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => ({
        message: errorMsg,
        originalError: error
      }));
    }));
  }
  fermerCaisse(boutiqueId) {
    console.log('Tentative de récupération du token...'); // Log avant de récupérer le token
    return this.usersService.getValidAccessToken().pipe(
    // On récupère le token valide de l'utilisateur
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        throw new Error('Aucun token trouvé');
      }
      console.log('Token récupéré :', token); // Log du token récupéré
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}` // Envoi du token d'authentification
      });
      // Préparation du corps de la requête avec boutiqueId
      const body = {
        boutiqueId: boutiqueId
      };
      console.log('Envoi de la requête POST pour fermer la caisse...'); // Log avant de faire la requête
      return this.http.post(`${this.apiUrl}/fermer`, body, {
        headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
        console.error('Erreur lors de la requête pour fermer la caisse:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Erreur détaillée dans le service:', error);
      // Gestion des erreurs
      let errorMsg = 'Erreur lors de la fermeture de la caisse';
      if (error.error && error.error.error) {
        errorMsg = error.error.error;
      } else if (error.error && error.error.message) {
        errorMsg = error.error.message;
      } else if (error.message) {
        errorMsg = error.message;
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => ({
        message: errorMsg,
        originalError: error
      }));
    }));
  }
  getDerniereCaisseVendeur(boutiqueId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) throw new Error('Aucun token trouvé');
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      // pos-caisse-service.ts (extrait)
      return this.http.get(`${this.apiUrl}/caisse/derniere/${boutiqueId}`, {
        headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(resp => resp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
        console.error('HTTP getDerniereCaisseVendeur error ->', err);
        let msg = 'Erreur inconnue';
        if (err?.error) {
          if (typeof err.error === 'string') {
            msg = err.error; // serveur renvoie directement un texte
          } else if (err.error?.message) {
            msg = err.error.message; // structure { message: "..." }
          } else {
            try {
              msg = JSON.stringify(err.error);
            } catch {
              msg = String(err.error);
            }
          }
        } else if (err?.message) {
          msg = err.message;
        } else {
          try {
            msg = JSON.stringify(err);
          } catch {
            msg = String(err);
          }
        }
        // Propager une string (évite new Error(obj) qui devient "[object Object]")
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => msg);
      }));
    }));
  }
  getCaissesByBoutique(boutiqueId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) throw new Error('Aucun token trouvé');
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/boutique/${boutiqueId}/caisses`, {
        headers
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      // Gestion d'erreur détaillée
      let errorMsg = 'Erreur lors du chargement des caisses';
      if (error?.error?.error) errorMsg = error.error.error;else if (error?.error?.message) errorMsg = error.error.message;else if (error.message) errorMsg = error.message;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => ({
        message: errorMsg,
        originalError: error
      }));
    }));
  }
  getHistoriqueCaissesByVendeur(vendeurId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) throw new Error('Aucun token trouvé');
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/vendeur/${vendeurId}`, {
        headers
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      let errorMsg = 'Erreur lors du chargement de l\'historique des caisses';
      if (error?.error?.error) errorMsg = error.error.error;else if (error?.error?.message) errorMsg = error.error.message;else if (error.message) errorMsg = error.message;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => ({
        message: errorMsg,
        originalError: error
      }));
    }));
  }
  static {
    this.ɵfac = function PosCaisseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PosCaisseService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: PosCaisseService,
      factory: PosCaisseService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_admin-page_MODELS_CaisseModel_safe-html_pipe_ts-src_app_admin-page_SERVICES_C-175702.js.map