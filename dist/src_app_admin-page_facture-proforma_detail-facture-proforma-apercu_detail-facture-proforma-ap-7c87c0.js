"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_facture-proforma_detail-facture-proforma-apercu_detail-facture-proforma-ap-7c87c0"],{

/***/ 13868:
/*!***********************************************************!*\
  !*** ./src/app/admin-page/MODELS/number-to-words.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnLettresPipe: () => (/* binding */ EnLettresPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class EnLettresPipe {
  constructor() {
    this.unite = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
    this.dizaine = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante'];
    this.dizaineSpecial = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize'];
  }
  transform(value) {
    if (isNaN(value)) {
      return '';
    }
    const n = Math.floor(value);
    const words = this.numberToWords(n) + ' Francs CFA';
    // Mettre en majuscule la première lettre
    return words.charAt(0).toUpperCase() + words.slice(1);
  }
  numberToWords(n) {
    if (n < 10) {
      return this.unite[n];
    }
    if (n < 17) {
      return this.dizaineSpecial[n - 10];
    }
    if (n < 20) {
      return 'dix-' + this.unite[n - 10];
    }
    if (n < 70) {
      const d = Math.floor(n / 10);
      const reste = n % 10;
      return this.dizaine[d] + (reste ? '-' + this.unite[reste] : '');
    }
    if (n < 80) {
      return 'soixante-' + this.numberToWords(n - 60);
    }
    if (n < 100) {
      return 'quatre-vingt' + (n % 20 ? '-' + this.numberToWords(n % 20) : '');
    }
    if (n < 1000) {
      const c = Math.floor(n / 100);
      const reste = n % 100;
      return (c > 1 ? this.unite[c] + '-cent' : 'cent') + (reste ? '-' + this.numberToWords(reste) : '');
    }
    if (n < 1000000) {
      const m = Math.floor(n / 1000);
      const reste = n % 1000;
      return (m > 1 ? this.numberToWords(m) + ' mille' : 'mille') + (reste ? ' ' + this.numberToWords(reste) : '');
    }
    if (n < 1000000000) {
      const millions = Math.floor(n / 1000000);
      const reste = n % 1000000;
      return (millions > 1 ? this.numberToWords(millions) + ' millions' : 'un million') + (reste ? ' ' + this.numberToWords(reste) : '');
    }
    return 'nombre trop grand';
  }
  static {
    this.ɵfac = function EnLettresPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EnLettresPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "enLettres",
      type: EnLettresPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 92120:
/*!***********************************************************!*\
  !*** ./src/app/admin-page/SERVICES/entreprise-service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntrepriseService: () => (/* binding */ EntrepriseService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 88026);






class EntrepriseService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    this.entrepriseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.entreprise$ = this.entrepriseSubject.asObservable();
  }
  // Dans client.service.ts
  // Dans entreprise.service.ts
  getListEntreprises() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.get(`${this.apiUrl}/entreprises`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      let errorMsg = 'Erreur inconnue';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Erreur: ${error.error.message}`;
      } else if (error.status === 404) {
        errorMsg = 'Aucune entreprise trouvée';
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(errorMsg));
    }));
  }
  // Ajouter une entreprise
  addEntreprise(entreprise) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.post(`${this.apiUrl}/entreprise-clients`, entreprise, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(newEntreprise => {
      const currentEntreprise = this.entrepriseSubject.value;
      this.entrepriseSubject.next([...currentEntreprise, newEntreprise]);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      let errorMsg = 'Erreur inconnue';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Erreur: ${error.error.message}`;
      } else if (error.status === 400) {
        errorMsg = error.error || 'Données invalides';
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(errorMsg));
    }));
  }
  // List de tout les entreprises
  getListEntreprise() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      if (!token) {
        console.error('Token vide ou non défini ! Vérifiez que l\'utilisateur est bien connecté.');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error('Token manquant'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log("En-têtes envoyés : ", headers);
      return this.http.get(`${this.apiUrl}/entreprises`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(data => {
      this.entrepriseSubject.next(data);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur lors de la récupération des entreprises:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  // Recuperer information d'une entreprise de la user connecter
  getEntrepriseById(id) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      if (!token) {
        console.error('Token manquant');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error('Token manquant'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      });
      return this.http.get(`${this.apiUrl}/entreprises/${id}`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      let errorMsg = 'Erreur inconnue';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Erreur: ${error.error.message}`;
      } else if (error.status === 404) {
        errorMsg = 'Entreprise non trouvée';
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(errorMsg));
    }));
  }
  updateEntreprise(id, formData) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error('Token manquant'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.patch(`${this.apiUrl}/updateEntreprise/${id}`, formData, {
        headers,
        responseType: 'text' // réponse en texte brut
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      let errorMsg = 'Erreur inconnue';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Erreur: ${error.error.message}`;
      } else if (error.status === 400) {
        errorMsg = error.error || 'Données invalides';
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(errorMsg));
    }));
  }
  // updateEntreprise(id: number, formData: FormData): Observable<any> {
  //   const token = localStorage.getItem('accessToken') || '';
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });
  //   return this.http.patch(`${this.apiUrl}/updateEntreprise/${id}`, formData, { headers }).pipe(
  //     catchError(error => {
  //       let errorMsg = 'Erreur inconnue';
  //       if (error.error instanceof ErrorEvent) {
  //         errorMsg = `Erreur: ${error.error.message}`;
  //       } else if (error.status === 400) {
  //         errorMsg = error.error || 'Données invalides';
  //       }
  //       return throwError(() => new Error(errorMsg));
  //     })
  //   );
  // }
  // Get entreprise d'un user
  getEntrepriseInfo() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      if (!token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error('Aucun token trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/myEntreprise`, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(entreprise => {
        localStorage.setItem('entreprise', JSON.stringify(entreprise));
      }));
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error('Erreur récupération info entreprise:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  // Simpl dcodage JWT pour vérifier si le token est expiré
  decodeJwt(token) {
    return JSON.parse(atob(token.split('.')[1]));
  }
  // Vérifier si le token est expiré
  isTokenExpired(decodedToken) {
    const expirationDate = new Date(decodedToken.exp * 1000);
    return expirationDate < new Date();
  }
  // Rafraîchir le token avec un refresh token (si applicable)
  getNewTokenFromApi() {
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http.post(`${this.apiUrl}/refresh-token`, {
      refreshToken
    });
  }
  static {
    this.ɵfac = function EntrepriseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EntrepriseService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: EntrepriseService,
      factory: EntrepriseService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 61068:
/*!****************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/facture-preview-service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FacturePreviewService: () => (/* binding */ FacturePreviewService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class FacturePreviewService {
  constructor() {
    this.previewSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
  }
  setPreview(data) {
    this.previewSubject.next(data);
  }
  getPreview() {
    return this.previewSubject.asObservable();
  }
  static {
    this.ɵfac = function FacturePreviewService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FacturePreviewService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FacturePreviewService,
      factory: FacturePreviewService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 64968:
/*!************************************************************************************************************************!*\
  !*** ./src/app/admin-page/facture-proforma/detail-facture-proforma-apercu/detail-facture-proforma-apercu.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailFactureProformaApercuComponent: () => (/* binding */ DetailFactureProformaApercuComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _MODELS_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../MODELS/number-to-words.pipe */ 13868);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../MODELS/customNumberPipe */ 96115);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ 2752);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf-autotable */ 6530);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _SERVICES_facture_preview_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../SERVICES/facture-preview-service */ 61068);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../SERVICES/entreprise-service */ 92120);













function DetailFactureProformaApercuComponent_div_0_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 40)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Doit :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](f_r3.client.nomComplet);
  }
}
function DetailFactureProformaApercuComponent_div_0_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 40)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Doit :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](f_r3.entrepriseClient.nom);
  }
}
function DetailFactureProformaApercuComponent_div_0_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ligne_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ligne_r4.produit.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r1.transformerLigne(ligne_r4.ligneDescription || ""), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 5, ligne_r4.prixUnitaire));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ligne_r4.quantite);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 7, ligne_r4.prixUnitaire * ligne_r4.quantite));
  }
}
function DetailFactureProformaApercuComponent_div_0_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Remise (", f_r3.remise, "%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 2, f_r3.totalHT * f_r3.remise / 100));
  }
}
function DetailFactureProformaApercuComponent_div_0_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Montant commercial");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, f_r3.totalHT - f_r3.totalHT * f_r3.remise / 100));
  }
}
function DetailFactureProformaApercuComponent_div_0_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const f_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("TVA (", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 2, ctx_r1.tauxTva * 100, "1.0-2"), " %)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 5, (f_r3.totalHT - f_r3.totalHT * ((tmp_5_0 = f_r3.remise) !== null && tmp_5_0 !== undefined ? tmp_5_0 : 0) / 100) * ctx_r1.tauxTva));
  }
}
function DetailFactureProformaApercuComponent_div_0_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Montant TTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, f_r3.totalFacture));
  }
}
function DetailFactureProformaApercuComponent_div_0_p_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.siteWeb);
  }
}
function DetailFactureProformaApercuComponent_div_0_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getLegalInfo());
  }
}
function DetailFactureProformaApercuComponent_div_0_div_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 43)(1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getAddressInfo());
  }
}
function DetailFactureProformaApercuComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailFactureProformaApercuComponent_div_0_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.navigateBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailFactureProformaApercuComponent_div_0_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.download());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 9)(8, "div", 10)(9, "div", 11)(10, "div", 12)(11, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("error", function DetailFactureProformaApercuComponent_div_0_Template_img_error_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.logo = ctx_r1.fallbackLogo);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 14)(13, "div", 15)(14, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Email : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "hr")(24, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 20)(26, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 21)(29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, DetailFactureProformaApercuComponent_div_0_div_31_Template, 5, 1, "div", 22)(32, DetailFactureProformaApercuComponent_div_0_div_32_Template, 5, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 23)(34, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Objet :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "table", 24)(39, "thead")(40, "tr")(41, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "D\u00E9signation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "Prix Unitaire (FCFA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Quantit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Montant (FCFA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, DetailFactureProformaApercuComponent_div_0_tr_52_Template, 12, 9, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "tfoot")(54, "tr")(55, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "Total HT");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](59, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, DetailFactureProformaApercuComponent_div_0_tr_60_Template, 6, 4, "tr", 28)(61, DetailFactureProformaApercuComponent_div_0_tr_61_Template, 6, 3, "tr", 28)(62, DetailFactureProformaApercuComponent_div_0_tr_62_Template, 7, 7, "tr", 28)(63, DetailFactureProformaApercuComponent_div_0_tr_63_Template, 6, 3, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "div", 29)(65, "p")(66, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "Arr\u00EAt\u00E9 la pr\u00E9sente facture \u00E0 la somme de : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](69, "enLettres");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div", 31)(71, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 32)(74, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("error", function DetailFactureProformaApercuComponent_div_0_Template_img_error_74_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.signaturNum = "assets/img/sinum.png");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("error", function DetailFactureProformaApercuComponent_div_0_Template_img_error_75_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.cachetNum = "assets/img/tampon.png");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "h6", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "div", 36)(79, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](80, "hr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](81, DetailFactureProformaApercuComponent_div_0_p_81_Template, 3, 1, "p", 28)(82, DetailFactureProformaApercuComponent_div_0_div_82_Template, 3, 1, "div", 28)(83, DetailFactureProformaApercuComponent_div_0_div_83_Template, 3, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const f_r3 = ctx.ngIf;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Secteur: ", ctx_r1.secteur, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r1.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" T\u00E9l\u00E9phone : ", ctx_r1.telephone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Facture proforma ", f_r3.numeroFacture, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r1.siege, ", le ", ctx_r1.formatDateFr(f_r3.dateCreation), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", f_r3.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", f_r3.entrepriseClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](f_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", f_r3.lignesFacture);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](59, 27, f_r3.totalHT));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", f_r3.remise);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", f_r3.remise && f_r3.remise > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", f_r3.tva);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", f_r3.tva);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](69, 29, f_r3.totalFacture), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.signataire);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.signaturNum, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r1.cachetNum, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.signataireNom);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.siteWeb);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.getLegalInfo());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.getAddressInfo());
  }
}
function DetailFactureProformaApercuComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Aucune donn\u00E9e d\u2019aper\u00E7u\u2026 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailFactureProformaApercuComponent_ng_template_1_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.router.navigate(["/facture-proforma"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Retour");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
class DetailFactureProformaApercuComponent {
  constructor(previewService, router, entrepriseService) {
    this.previewService = previewService;
    this.router = router;
    this.entrepriseService = entrepriseService;
    this.facture = null;
    this.nom = null;
    this.logo = null;
    this.signaturNum = null;
    this.cachetNum = null;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.imgUrl;
    this.fallbackLogo = `${this.apiUrl}/defaultLogo/Votre.png`;
  }
  ngOnInit() {
    this.getFacturePreview();
    this.getUserEntrepriseInfo();
  }
  getFacturePreview() {
    this.previewService.getPreview().subscribe(data => {
      if (!data) {
        this.router.navigate(['/facture-proforma']);
      } else {
        this.facture = data;
      }
    });
  }
  navigateBack() {
    if (this.facture?.id) {
      this.router.navigate(['/facture-proforma-details', this.facture.id]);
    } else {
      console.error('ID de la facture non disponible');
      // Optionnel : Naviguer vers une page par défaut, par exemple :
      this.router.navigate(['/facture-proforma']);
    }
  }
  getUserEntrepriseInfo() {
    this.entrepriseService.getEntrepriseInfo().subscribe({
      next: entreprise => {
        this.nom = entreprise.nom;
        this.siege = entreprise.siege;
        this.email = entreprise.email;
        this.logo = `${this.apiUrl}${entreprise.logo}`;
        this.secteur = entreprise.secteur;
        this.telephone = entreprise.telephone;
        this.adresse = entreprise.adresse;
        this.nif = entreprise.nif;
        this.banque = entreprise.banque;
        this.nina = entreprise.nina;
        this.pays = entreprise.pays;
        this.rccm = entreprise.rccm;
        this.siteWeb = entreprise.siteWeb;
        this.signataire = entreprise.signataire;
        this.signataireNom = entreprise.signataireNom;
        this.tauxTva = entreprise.tauxTva;
        this.signaturNum = entreprise.signaturNum ? `${this.apiUrl}${entreprise.signaturNum}` : 'assets/img/sinum.png';
        this.cachetNum = entreprise.cachetNum ? `${this.apiUrl}${entreprise.cachetNum}` : 'assets/img/tampon.png';
      },
      error: err => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }
  getLegalInfo() {
    const parts = [];
    if (this.nina) {
      parts.push(`NINA : ${this.nina}`);
    }
    if (this.rccm) {
      parts.push(`RCCM : ${this.rccm}`);
    }
    if (this.nif) {
      parts.push(`NIF : ${this.nif}`);
    }
    if (this.banque) {
      parts.push(`Banque : ${this.banque}`);
    }
    return parts.join(' ; ');
  }
  getAddressInfo() {
    const adresse = this.adresse;
    const siege = this.siege;
    const pays = this.pays;
    if (adresse && siege && pays) {
      return `Adresse : ${adresse} / ${siege}-${pays}`;
    } else if (adresse && siege) {
      return `Adresse : ${adresse} / ${siege}`;
    } else if (adresse && pays) {
      return `Adresse : ${adresse} / ${pays}`;
    } else if (siege && pays) {
      return `Adresse : ${siege} / ${pays}`;
    } else if (adresse) {
      return `Adresse : ${adresse}`;
    } else if (siege) {
      return `Adresse : ${siege}`;
    } else if (pays) {
      return `Adresse : ${pays}`;
    }
    return '';
  }
  getImageFromUrl(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.setAttribute('crossOrigin', 'anonymous');
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = error => reject(error);
      img.src = url;
    });
  }
  download() {
    var _this = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__.jsPDF({
        unit: 'mm',
        format: 'a4'
      });
      // 2. Logo
      try {
        if (_this.logo) {
          const imgData = _this.logo.startsWith('data:image/') ? _this.logo : yield _this.getImageFromUrl(_this.logo);
          const formatMatch = imgData.match(/^data:image\/(png|jpeg|gif);/);
          const format = formatMatch ? formatMatch[1].toUpperCase() : 'PNG';
          doc.addImage(imgData, format, 15, 10, 47, 17);
        }
      } catch (imgErr) {
        // Logo non chargé, on continue
      }
      // 3. Infos société à droite du logo
      const infoX = 70;
      const infoY_Start = 12;
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(_this.nom || 'Nom Entreprise', infoX, infoY_Start);
      doc.setFont('helvetica', 'normal');
      doc.text(`Secteur : ${_this.secteur || ''}`, infoX, infoY_Start + 5);
      const emailText = `Email : ${_this.email || ''}`;
      doc.text(emailText, infoX, infoY_Start + 10);
      const emailWidth = doc.getTextWidth(emailText);
      doc.text(`Téléphone : ${_this.telephone || ''}`, infoX + emailWidth + 5, infoY_Start + 10);
      // 4. Double ligne
      const lastInfoY = infoY_Start + 10;
      const gapBelowInfo = 7;
      const sepY = lastInfoY + gapBelowInfo;
      doc.setDrawColor(200);
      doc.line(15, sepY, 195, sepY);
      doc.line(15, sepY + 1.5, 195, sepY + 1.5);
      // 5. Titre principal
      const gapBelowSep = 8;
      const titleY = sepY + gapBelowSep;
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(85, 85, 85);
      doc.text(`FACTURE PROFORMA ${_this.facture?.numeroFacture}`, 105, titleY, {
        align: 'center'
      });
      doc.setDrawColor(0);
      const titleLineWidth = 90;
      const titleLineX = 105 - titleLineWidth / 2;
      // doc.line(titleLineX, titleY + 1.5, titleLineX + titleLineWidth, titleY + 1.5);
      // 6. Date à droite
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text(`${_this.siege || ''}, le ${_this.facture?.dateCreation ? new Date(_this.facture?.dateCreation).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }) : ''}`, 195, titleY + 10, {
        align: 'right'
      });
      // 7. Bloc client/objet
      const clientObjectBlockY = titleY + 20;
      let currentY = clientObjectBlockY;
      const labelX = 15;
      if (_this.facture) {
        const isClient = !!_this.facture.client;
        const isEntreprise = !!_this.facture.entrepriseClient;
        const label = isClient ? 'Doit :' : isEntreprise ? 'Doit :' : 'Doit :';
        const nom = isClient ? _this.facture.client?.nomComplet ?? 'Non spécifié' : isEntreprise ? _this.facture.entrepriseClient?.nom ?? 'Non spécifié' : 'Non spécifié';
        doc.setFont('helvetica', 'bold');
        doc.text(label, labelX, currentY);
        doc.setFont('helvetica', 'normal');
        doc.text(nom, labelX + doc.getTextWidth(label) + 2, currentY);
      }
      currentY += 7;
      doc.setFont('helvetica', 'bold');
      doc.text('Objet :', labelX, currentY);
      doc.setFont('helvetica', 'normal');
      doc.text(_this.facture?.description || '', labelX + doc.getTextWidth('Object :') + 2, currentY);
      // 8. Tableau produits & totaux
      const tableStartY = currentY + 10;
      const customNumberPipe = new _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_2__.CustomNumberPipe();
      const tableData = _this.facture?.lignesFacture.map(ligne => [ligne.produit.nom, ligne.ligneDescription, customNumberPipe.transform(ligne.prixUnitaire), ligne.quantite.toString(), customNumberPipe.transform(ligne.prixUnitaire * ligne.quantite)]);
      // Ajout des totaux comme dans ton exemple
      tableData?.push([{
        content: 'Total HT',
        colSpan: 4,
        styles: {
          fontStyle: 'normal',
          halign: 'center'
        }
      }, {
        content: customNumberPipe.transform(_this.facture?.totalHT || 0),
        styles: {
          halign: 'right'
        }
      }]);
      // Remise
      if (_this.facture?.remise && _this.facture.remise > 0) {
        tableData?.push([{
          content: `Remise (${_this.facture.remise}%)`,
          colSpan: 4,
          styles: {
            fontStyle: 'normal',
            halign: 'center'
          }
        }, {
          content: customNumberPipe.transform(_this.facture.totalHT * _this.facture.remise / 100),
          styles: {
            halign: 'right'
          }
        }]);
        tableData?.push([{
          content: 'Montant Commercial',
          colSpan: 4,
          styles: {
            fontStyle: 'normal',
            halign: 'center'
          }
        }, {
          content: customNumberPipe.transform(_this.facture.totalHT - _this.facture.totalHT * _this.facture.remise / 100),
          styles: {
            halign: 'right'
          }
        }]);
      }
      // TVA
      if (_this.facture?.tva) {
        const tauxPourcent = Math.round((_this.tauxTva ?? 0) * 100);
        tableData?.push([{
          content: `TVA (${tauxPourcent} %)`,
          colSpan: 4,
          styles: {
            fontStyle: 'normal',
            halign: 'center'
          }
        }, {
          content: customNumberPipe.transform((_this.facture.totalHT - _this.facture.totalHT * (_this.facture.remise ?? 0) / 100) * _this.tauxTva),
          styles: {
            halign: 'right'
          }
        }]);
        tableData?.push([{
          content: 'Montant TTC',
          colSpan: 4,
          styles: {
            fontStyle: 'normal',
            halign: 'center'
          }
        }, {
          content: customNumberPipe.transform(_this.facture.totalFacture),
          styles: {
            fontStyle: 'normal',
            halign: 'right'
          }
        }]);
      }
      doc.autoTable({
        head: [['Désignation', 'Description', 'Prix Unitaire (FCFA)', 'Quantité', 'Montant (FCFA)']],
        body: tableData,
        startY: tableStartY,
        theme: 'grid',
        styles: {
          fontSize: 9,
          cellPadding: 2,
          lineWidth: 0.1,
          lineColor: [221, 221, 221]
        },
        headStyles: {
          fillColor: [242, 242, 242],
          textColor: [0, 0, 0],
          fontSize: 8,
          halign: 'center',
          fontStyle: 'bold'
        },
        bodyStyles: {
          textColor: [0, 0, 0],
          fillColor: null
        },
        margin: {
          left: 15,
          right: 15
        },
        columnStyles: {
          0: {
            halign: 'left',
            cellWidth: 30
          },
          1: {
            halign: 'left',
            cellWidth: 60
          },
          2: {
            halign: 'center',
            cellWidth: 33
          },
          3: {
            halign: 'center',
            cellWidth: 20
          },
          4: {
            halign: 'right',
            cellWidth: 35
          }
        },
        tableStyle: {
          borderColor: [200, 200, 200],
          borderWidth: 0.1
        }
      });
      // 9. Montant en lettres
      let y_after_table = doc.lastAutoTable.finalY;
      let y_amount_in_words = y_after_table + 18;
      const libelle = 'Arrêté la présente facture à la somme de : ';
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.text(libelle, 15, y_amount_in_words);
      const libelleWidth = doc.getTextWidth(libelle);
      const startX = 15 + libelleWidth;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      const enLettresPipe = new _MODELS_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_1__.EnLettresPipe();
      const montantLettreRaw = enLettresPipe.transform(_this.facture?.totalFacture || 0);
      const maxWidth = 195 - startX;
      const lines = doc.splitTextToSize(montantLettreRaw, maxWidth);
      doc.text(lines[0], startX, y_amount_in_words);
      let currentAmountInWordsY = y_amount_in_words;
      for (let i = 1; i < lines.length; i++) {
        currentAmountInWordsY += 6;
        doc.text(lines[i], 15, currentAmountInWordsY);
      }
      // 10. Signature centrée
      let y_signature_block = currentAmountInWordsY + 30;
      const min_y_signature = doc.internal.pageSize.height - 100;
      y_signature_block = Math.max(y_signature_block, min_y_signature);
      const blocCenterX = 180;
      // Affichage du nom et du poste du signataire
      doc.setFontSize(9);
      doc.setFont('helvetica');
      const signataire = _this.signataire || 'Directeur';
      const signataireWidth = doc.getTextWidth(signataire);
      const signataireX = blocCenterX - signataireWidth / 2;
      doc.text(signataire, signataireX, y_signature_block);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      const nom = _this.signataireNom || 'Nom du signataire';
      const nomWidth = doc.getTextWidth(nom);
      const nomX = blocCenterX - nomWidth / 2;
      doc.text(nom, nomX, y_signature_block + 8);
      // Ajouter la signature numérique juste à côté du texte du signataire
      try {
        // Vérifier si la signature numérique est présente
        if (_this.signaturNum) {
          const signatureImg = _this.signaturNum.startsWith('data:image/') ? _this.signaturNum : yield _this.getImageFromUrl(_this.signaturNum);
          if (signatureImg) {
            // Signature à droite du nom du signataire
            doc.addImage(signatureImg, 'PNG', signataireX + signataireWidth - 35, y_signature_block + 10, 40, 20); // Ajuste la position et la taille
          } else {
            console.error('Impossible de charger l\'image de la signature');
          }
        }
        // Vérifier si le cachet numérique est présent
        if (_this.cachetNum) {
          const cachetImg = _this.cachetNum.startsWith('data:image/') ? _this.cachetNum : yield _this.getImageFromUrl(_this.cachetNum);
          if (cachetImg) {
            // Cachet sous la signature
            doc.addImage(cachetImg, 'PNG', signataireX + signataireWidth - 50, y_signature_block + 5, 40, 40); // Ajuste la position et la taille
          } else {
            console.error('Impossible de charger l\'image du cachet');
          }
        }
      } catch (imgErr) {
        console.error("Erreur lors de l'ajout de la signature ou du cachet : ", imgErr);
      }
      // 11. Footer
      const margin = 15;
      const pageWidth = doc.internal.pageSize.width;
      const x1 = margin;
      const x2 = pageWidth - margin;
      const pageHeight = doc.internal.pageSize.height;
      const footerYStart = pageHeight - 20;
      const separatorY = footerYStart - 5;
      doc.setLineWidth(0.2);
      doc.setDrawColor(150);
      doc.line(x1, separatorY, x2, separatorY);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100);
      let currentFooterY = footerYStart;
      if (_this.siteWeb) {
        doc.text(_this.siteWeb, 105, currentFooterY, {
          align: 'center'
        });
        currentFooterY += 4;
      }
      const parts = [];
      if (_this.nina) parts.push(`NINA : ${_this.nina}`);
      if (_this.rccm) parts.push(`RCCM : ${_this.rccm}`);
      if (_this.nif) parts.push(`NIF : ${_this.nif}`);
      if (_this.banque) parts.push(`Banque : ${_this.banque}`);
      if (parts.length > 0) {
        doc.text(parts.join(' ; '), 105, currentFooterY, {
          align: 'center'
        });
        currentFooterY += 4;
      }
      let adresseLine = '';
      if (_this.adresse && _this.siege && _this.pays) {
        adresseLine = `Adresse : ${_this.adresse} / ${_this.siege}-${_this.pays}`;
      } else if (_this.adresse && _this.siege) {
        adresseLine = `Adresse : ${_this.adresse} / ${_this.siege}`;
      } else if (_this.adresse && _this.pays) {
        adresseLine = `Adresse : ${_this.adresse} / ${_this.pays}`;
      } else if (_this.siege && _this.pays) {
        adresseLine = `Adresse : ${_this.siege} / ${_this.pays}`;
      } else if (_this.adresse) {
        adresseLine = `Adresse : ${_this.adresse}`;
      } else if (_this.siege) {
        adresseLine = `Adresse : ${_this.siege}`;
      } else if (_this.pays) {
        adresseLine = `Adresse : ${_this.pays}`;
      }
      if (adresseLine) {
        doc.text(adresseLine, 105, currentFooterY, {
          align: 'center'
        });
        currentFooterY += 4;
      }
      doc.setTextColor(0);
      // 12. Téléchargement
      doc.save(`Facture_Proforma_${_this.facture?.numeroFacture}.pdf`);
    })();
  }
  formatDateFr(dateString) {
    const date = new Date(dateString);
    const options = {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    };
    return date.toLocaleDateString('fr-FR', options);
  }
  transformerLigne(ligne) {
    return ligne.replace(/-\s*/g, '<br> - <span></span>');
  }
  static {
    this.ɵfac = function DetailFactureProformaApercuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DetailFactureProformaApercuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_SERVICES_facture_preview_service__WEBPACK_IMPORTED_MODULE_6__.FacturePreviewService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_7__.EntrepriseService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: DetailFactureProformaApercuComponent,
      selectors: [["app-detail-facture-proforma-apercu"]],
      decls: 3,
      vars: 2,
      consts: [["noData", ""], ["class", "container_global", 4, "ngIf", "ngIfElse"], [1, "container_global"], [1, "information_cadre", 2, "position", "relative"], [1, "cadre_retour"], [1, "retour_icon", 3, "click"], [1, "ri-arrow-left-long-fill"], [1, "download_icon", 3, "click"], [1, "ri-download-2-fill"], [1, "info_titre_input"], [1, "content"], [1, "header_apercu"], [1, "logo_entreprise"], ["alt", "Logo de l'entreprise", 3, "error", "src"], [1, "entete_entreprise"], [1, "content_entete"], [1, "para1"], [1, "para2"], [1, "para3"], [3, "href"], [1, "titre"], [1, "date"], ["class", "droit", 4, "ngIf"], [1, "object"], [1, "table"], [2, "width", "260px!important"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [4, "ngIf"], [1, "contenu_bottom"], [2, "font-weight", "600"], [1, "signature_bloc", 2, "position", "relative", "text-align", "center", "margin-top", "40px", "margin-right", "40px"], [1, "signaturNum"], ["alt", "Signature", 1, "img", 2, "position", "relative", "z-index", "1", "width", "120px", 3, "error", "src"], ["alt", "Cachet", 1, "cachetNum", 2, "position", "absolute", "top", "0", "left", "-30%", "transform", "translateX(-50%)", "z-index", "2", "width", "200px", 3, "error", "src"], [1, "name_directeur"], [1, "container_footer"], [1, "footer"], [2, "margin-top", "40px"], ["style", "margin-top: -4px;", 4, "ngIf"], [1, "droit"], [1, "td_left"], [1, "td_left", 3, "innerHTML"], [2, "margin-top", "-4px"], [3, "click"]],
      template: function DetailFactureProformaApercuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, DetailFactureProformaApercuComponent_div_0_Template, 84, 31, "div", 1)(1, DetailFactureProformaApercuComponent_ng_template_1_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const noData_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.facture)("ngIfElse", noData_r6);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_2__.CustomNumberPipe, _MODELS_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_1__.EnLettresPipe],
      styles: ["@charset \"UTF-8\";\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.container_global[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.cadre_retour[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(60, 60, 60, 0.1607843137);\n  padding: 10px 10px 10px 15px;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 0.6px;\n}\n\n.retour_icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.download_icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  color: #0672E4;\n  font-size: 15px;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  width: 800px;\n  height: 1223px;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n}\n\n.info_titre_input[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.header_apercu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.logo_entreprise[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 70px;\n}\n\n.entete_entreprise[_ngcontent-%COMP%] {\n  margin-left: 5%;\n}\n\n.logo_entreprise[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.content_entete[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  letter-spacing: 0.5px;\n}\n\n.content_entete[_ngcontent-%COMP%]   .para1[_ngcontent-%COMP%], \n.content_entete[_ngcontent-%COMP%]   .para2[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin: 3px 0;\n}\n\n.titre[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  text-align: center;\n  margin: 20px;\n}\n\n.date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-right: 5%;\n  font-size: 12px;\n}\n\n.droit[_ngcontent-%COMP%], \n.object[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n  margin-left: 37px;\n}\n\n.droit[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.object[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.droit[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.object[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  margin: 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: #555;\n  margin: 10px 0;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 90%;\n  border-collapse: collapse;\n  margin: 20px 37px;\n  font-size: 11px;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 12px;\n  text-align: center;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n\n.total-section[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  width: 50%;\n  margin-left: auto;\n}\n\n.total-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 8px 0;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.separator[_ngcontent-%COMP%] {\n  border-top: 2px solid #333;\n  margin: 20px 0;\n}\n\ntd.table_td_1[_ngcontent-%COMP%] {\n  border-right: none;\n}\n\ntd.table_td[_ngcontent-%COMP%] {\n  border-right: none;\n  border-top: none;\n  border-left: none;\n}\n\n.table_td_descripton[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd.td_left[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\n.contenu_bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  margin-left: 37px;\n}\n\n.cachet_container[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 100%;\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.cachet[_ngcontent-%COMP%] {\n  position: relative;\n  top: 30px;\n  right: 41px;\n}\n\n.cachet[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n}\n\n.cachet[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  margin-bottom: 4px;\n}\n\n.cachet[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #000;\n  font-family: brittany;\n  margin-top: 52%;\n}\n\n.container_footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.footer[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  bottom: 45px;\n  width: 96%;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  letter-spacing: 0.6px;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.footer[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n\n\n.facture-container[_ngcontent-%COMP%] {\n  max-width: 210mm; \n\n  margin: 20px auto;\n  padding: 20px;\n  background: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  font-family: \"Arial\", sans-serif;\n}\n.facture-container[_ngcontent-%COMP%]   .loading-overlay[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n}\n.facture-container[_ngcontent-%COMP%]   .loading-overlay[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: spin 1s linear infinite;\n  margin: 0 auto;\n}\n.facture-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #dc3545;\n  padding: 1rem;\n  border: 1px solid #dc3545;\n  margin: 1rem 0;\n  border-radius: 4px;\n}\n\n\n\n.facture-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  border-bottom: 2px solid #333;\n  padding-bottom: 1rem;\n}\n.facture-header[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #2c3e50;\n}\n.facture-header[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #7f8c8d;\n}\n.facture-header[_ngcontent-%COMP%]   .facture-meta[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.facture-header[_ngcontent-%COMP%]   .facture-meta[_ngcontent-%COMP%]   .facture-number[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #2c3e50;\n}\n.facture-header[_ngcontent-%COMP%]   .facture-meta[_ngcontent-%COMP%]   .facture-date[_ngcontent-%COMP%] {\n  color: #7f8c8d;\n}\n\n\n\n.client-info[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.client-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  margin-bottom: 0.5rem;\n}\n.client-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n\n\n\n.products-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.products-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.products-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .products-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  border-bottom: 1px solid #ecf0f1;\n}\n.products-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  color: #2c3e50;\n}\n.products-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n\n\n\n.totals-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: right;\n}\n.totals-section[_ngcontent-%COMP%]   .total-line[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.totals-section[_ngcontent-%COMP%]   .total-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n  color: #7f8c8d;\n}\n.totals-section[_ngcontent-%COMP%]   .total-line.grand-total[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-weight: bold;\n  color: #2c3e50;\n}\n\n\n\n.signature_bloc[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.signaturNum[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 80px;\n  position: relative;\n}\n\n.signaturNum[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -7px;\n  right: 14px;\n  width: 34%;\n  height: auto;\n  object-fit: contain;\n  z-index: 1;\n  opacity: 0.7;\n}\n\n\n\n.signaturNum[_ngcontent-%COMP%]   .cachetNum[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 30px;\n  width: 40%;\n  height: auto;\n  object-fit: contain;\n  z-index: 2;\n  opacity: 0.7;\n  margin-top: -7px;\n}\n\n.name_directeur[_ngcontent-%COMP%] {\n  position: relative;\n  right: 0;\n  top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1mYWN0dXJlLXByb2Zvcm1hLWFwZXJjdS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFBRyxTQUFBO0FBR0g7O0FBRkE7RUFBSSxTQUFBO0FBTUo7O0FBSkE7RUFFSSxhQUFBO0VBQ0EsdUJBQUE7QUFNSjs7QUFIQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1REFBQTtFQUNBLDRCQUFBO0FBTUY7O0FBREE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUlGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFJRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBSUY7O0FBREE7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUlGOztBQURBO0VBQ0ksZUFBQTtBQUlKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDZDQUFBO0FBR0o7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQUo7O0FBV0E7RUFDSSxlQUFBO0FBUko7O0FBV0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBUko7O0FBV0E7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBUko7O0FBV0E7O0VBR0ksZ0JBQUE7QUFUSjs7QUFhQTtFQUNJLGFBQUE7QUFWSjs7QUFlQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBWko7O0FBZUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVpKOztBQWVBOztFQUdJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFD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QTtFQUNBLGNBQUE7QUFyQ1I7QUF3Q007RUFDRSx5QkFBQTtBQXRDUjs7QUEyQ0UsVUFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQXhDSjtBQTBDSTtFQUNFLGNBQUE7QUF4Q047QUEwQ007RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUF4Q1I7QUEyQ007RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXpDUjs7QUE4Q0Esc0RBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBM0NGOztBQStDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUE1Q0Y7O0FBK0NBO0VBQ0Msa0JBQUE7RUFDRyxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQTVDSjs7QUFpREEsc0JBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBOUNGOztBQWlEQTtFQUVFLGtCQUFBO0VBQ0EsUUFBQTtFQUVBLFFBQUE7QUFoREYiLCJmaWxlIjoiZGV0YWlsLWZhY3R1cmUtcHJvZm9ybWEtYXBlcmN1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7bWFyZ2luOiAwO31cbmg0IHttYXJnaW46IDA7fVxuXG4uY29udGFpbmVyX2dsb2JhbCB7XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAyMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhZHJlX3JldG91ciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzYzNjM2MyOTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTVweDtcbn1cblxuXG5cbi5idG5fYWpvdXRlciBwIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbn1cblxuLnJldG91cl9pY29uIGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRvd25sb2FkX2ljb24gaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLy8gY2FkcmUgaW5mb3JtYXRpb25cbi5pbmZvcm1hdGlvbl9jYWRyZSB7XG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIGhlaWdodDogMTIyM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMDgpO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pbmZvX3RpdHJlX2lucHV0IHtcbiAgICBwYWRkaW5nOiAyMHB4OyBcbn1cblxuLmhlYWRlcl9hcGVyY3Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ29fZW50cmVwcmlzZSB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBlbnRldGVfZW50cmVwcmlzZVxuXG4uZW50ZXRlX2VudHJlcHJpc2Uge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmxvZ29fZW50cmVwcmlzZSBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5jb250ZW50X2VudGV0ZSBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjUwcHg7XG59XG5cbi5jb250ZW50X2VudGV0ZSAucGFyYTEsXG4uY29udGVudF9lbnRldGUgLnBhcmEyXG57XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLyBMaWduZVxuaHIge1xuICAgIG1hcmdpbjogM3B4IDA7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vIFRpcmVcblxuLnRpdHJlIGgyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbi5kYXRlIHAge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZHJvaXQsXG4ub2JqZWN0XG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzN3B4O1xufSBcblxuLmRyb2l0IGg0LFxuLm9iamVjdCBoNCBcbntcbiAgICAvLyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuXG4uZHJvaXQgcCxcbi5vYmplY3QgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgbWFyZ2luOiAwO1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBtYXJnaW46IDIwcHggMzdweDtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbnRoLCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi50b3RhbC1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi50b3RhbC1saW5lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDhweCAwO1xufVxuXG4uYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zZXBhcmF0b3Ige1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMzMzO1xuICAgIG1hcmdpbjogMjBweCAwO1xufVxuXG50ZC50YWJsZV90ZF8xIHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbnRkLnRhYmxlX3RkIHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAvLyBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4udGFibGVfdGRfZGVzY3JpcHRvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZC50ZF9sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0IWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnVfYm90dG9tIHB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogMzdweDtcbn1cblxuLmNhY2hldF9jb250YWluZXIge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNhY2hldF9jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2FjaGV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzMHB4O1xuICAgIHJpZ2h0OiA0MXB4O1xufVxuXG4uY2FjaGV0IGg2e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jYWNoZXQgaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uY2FjaGV0IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogYnJpdHRhbnk7XG4gIG1hcmdpbi10b3A6IDUyJTtcbn1cblxuLmNvbnRhaW5lcl9mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDQ1cHg7XG4gICAgd2lkdGg6IDk2JTtcbn1cblxuLmZvb3RlciBwIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xufVxuXG4uZm9vdGVyIHAgc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mb290ZXIgZW0ge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuXG5cblxuXG5cbi8qIFN0eWxlcyBkZSBiYXNlICovXG4uZmFjdHVyZS1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMjEwbW07IC8qIEZvcm1hdCBBNCAqL1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XG4gIFxuICAgIC5sb2FkaW5nLW92ZXJsYXkge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgIFxuICAgICAgLnNwaW5uZXIge1xuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzO1xuICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgIzM0OThkYjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDU7XG4gICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gIH1cbiAgXG4gIC8qIEVuLXTDqnRlICovXG4gIC5mYWN0dXJlLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMzMztcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgXG4gICAgLmNvbXBhbnktaW5mbyB7XG4gICAgICBoMSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgfVxuICAgICAgXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzdmOGM4ZDtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5mYWN0dXJlLW1ldGEge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBcbiAgICAgIC5mYWN0dXJlLW51bWJlciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmZhY3R1cmUtZGF0ZSB7XG4gICAgICAgIGNvbG9yOiAjN2Y4YzhkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLyogU2VjdGlvbiBjbGllbnQgKi9cbiAgLmNsaWVudC1pbmZvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIFxuICAgIGgzIHtcbiAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIH1cbiAgICBcbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cbiAgfVxuICBcbiAgLyogVGFibGVhdSBkZXMgcHJvZHVpdHMgKi9cbiAgLnByb2R1Y3RzLXNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIFxuICAgIHRhYmxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgIFxuICAgICAgdGgsIHRkIHtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2YwZjE7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAgICAgY29sb3I6ICMyYzNlNTA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRyOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC8qIFRvdGFsICovXG4gIC50b3RhbHMtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgXG4gICAgLnRvdGFsLWxpbmUge1xuICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICBcbiAgICAgIHNwYW46Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjN2Y4YzhkO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmLmdyYW5kLXRvdGFsIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgfVxuICAgIH1cbn1cblxuLyogQmxvYyBzaWduYXR1cmUgZW4gZGVzc291cyBkdSBub20sIGFsaWduw6kgw6AgZHJvaXRlICovXG4uc2lnbmF0dXJlX2Jsb2Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIC8vIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zaWduYXR1ck51bSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA4MHB4OyBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2lnbmF0dXJOdW0gLmltZyB7XG4gcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTdweDtcbiAgICByaWdodDogMTRweDtcbiAgICB3aWR0aDogMzQlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHotaW5kZXg6IDE7XG4gICAgb3BhY2l0eTogMC43OyBcblxuICAgIFxufVxuXG4vKiBDYWNoZXQgcGFyLWRlc3N1cyAqL1xuLnNpZ25hdHVyTnVtIC5jYWNoZXROdW0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzMHB4O1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luLXRvcDogLTdweDtcbn1cblxuLm5hbWVfZGlyZWN0ZXVyIHtcbiAgLy8gZm9udC1zaXplOiA2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDA7XG4gIC8vIG1hcmdpbi10b3A6IC02OXB4O1xuICB0b3A6IDBweDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9mYWN0dXJlLXByb2Zvcm1hL2RldGFpbC1mYWN0dXJlLXByb2Zvcm1hLWFwZXJjdS9kZXRhaWwtZmFjdHVyZS1wcm9mb3JtYS1hcGVyY3UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQUcsU0FBQTtBQUdIOztBQUZBO0VBQUksU0FBQTtBQU1KOztBQUpBO0VBRUksYUFBQTtFQUNBLHVCQUFBO0FBTUo7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdURBQUE7RUFDQSw0QkFBQTtBQU1GOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFJRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBSUY7O0FBREE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUlGOztBQURBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFJRjs7QUFEQTtFQUNJLGVBQUE7QUFJSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSw2Q0FBQTtBQUdKOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUFKOztBQVdBO0VBQ0ksZUFBQTtBQVJKOztBQVdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVJKOztBQVdBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQVJKOztBQVdBOztFQUdJLGdCQUFBO0FBVEo7O0FBYUE7RUFDSSxhQUFBO0FBVko7O0FBZUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVpKOztBQWVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFaSjs7QUFlQTs7RUFHSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWJKOztBQWdCQTs7RUFJSSxlQUFBO0VBQ0EsaUJBQUE7QUFmSjs7QUFvQkE7O0VBRUksU0FBQTtFQUNBLGVBQUE7QUFqQko7O0FBb0JBO0VBQ0ksbUJBQUE7QUFqQko7O0FBb0JBO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0FBakJKOztBQW9CQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFqQko7O0FBb0JBO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBakJKOztBQW9CQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBakJKOztBQW9CQTtFQUNJLHlCQUFBO0FBakJKOztBQW9CQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBakJKOztBQW9CQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFqQko7O0FBb0JBO0VBQ0ksaUJBQUE7QUFqQko7O0FBb0JBO0VBQ0ksMEJBQUE7RUFDQSxjQUFBO0FBakJKOztBQW9CQTtFQUNJLGtCQUFBO0FBakJKOztBQW9CQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWpCSjs7QUFxQkE7RUFDSSxrQkFBQTtBQWxCSjs7QUFxQkE7RUFDSSwyQkFBQTtBQWxCSjs7QUFxQkE7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBbEJKOztBQXFCQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFJQSxhQUFBO0VBQ0EsOEJBQUE7QUF2Qko7O0FBMEJBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQWxCSjs7QUFxQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFsQko7O0FBcUJBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQWxCRjs7QUFxQkE7RUFDRSxhQUFBO0VBRUEsdUJBQUE7QUFuQkY7O0FBc0JBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBbkJKOztBQXNCQTtFQUNJLHFCQUFBO0FBbkJKOztBQXNCQTtFQUNJLGVBQUE7QUFuQko7O0FBc0JBO0VBQ0ksZUFBQTtBQW5CSjs7QUEyQkEsbUJBQUE7QUFDQTtFQUNJLGdCQUFBLEVBQUEsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtBQXhCSjtBQTBCSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQXhCTjtBQTBCTTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FBeEJSO0FBNEJJO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTFCTjs7QUE4QkUsWUFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0FBM0JKO0FBOEJNO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQTVCUjtBQStCTTtFQUNFLFNBQUE7RUFDQSxjQUFBO0FBN0JSO0FBaUNJO0VBQ0UsaUJBQUE7QUEvQk47QUFpQ007RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUEvQlI7QUFrQ007RUFDRSxjQUFBO0FBaENSOztBQXFDRSxtQkFBQTtBQUNBO0VBQ0UsbUJBQUE7QUFsQ0o7QUFvQ0k7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFsQ047QUFxQ0k7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUFuQ047O0FBdUNFLHlCQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQXBDSjtBQXNDSTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQXBDTjtBQXNDTTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBcENSO0FBdUNNO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBckNSO0FBd0NNO0VBQ0UseUJBQUE7QUF0Q1I7O0FBMkNFLFVBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUF4Q0o7QUEwQ0k7RUFDRSxjQUFBO0FBeENOO0FBMENNO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBeENSO0FBMkNNO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUF6Q1I7O0FBOENBLHNEQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQTNDRjs7QUErQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBNUNGOztBQStDQTtFQUNDLGtCQUFBO0VBQ0csU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUE1Q0o7O0FBaURBLHNCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQTlDRjs7QUFpREE7RUFFRSxrQkFBQTtFQUNBLFFBQUE7RUFFQSxRQUFBO0FBaERGO0FBRkEsZ25jQUFnbmMiLCJzb3VyY2VzQ29udGVudCI6WyJwIHttYXJnaW46IDA7fVxuaDQge21hcmdpbjogMDt9XG5cbi5jb250YWluZXJfZ2xvYmFsIHtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDIwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FkcmVfcmV0b3VyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNjM2MzYzI5O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxNXB4O1xufVxuXG5cblxuLmJ0bl9ham91dGVyIHAge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xufVxuXG4ucmV0b3VyX2ljb24gaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZG93bmxvYWRfaWNvbiBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG5fYWpvdXRlciAuYnRuX3NhdmUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzA2NzJFNDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4vLyBjYWRyZSBpbmZvcm1hdGlvblxuLmluZm9ybWF0aW9uX2NhZHJlIHtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgaGVpZ2h0OiAxMjIzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmluZm9fdGl0cmVfaW5wdXQge1xuICAgIHBhZGRpbmc6IDIwcHg7IFxufVxuXG4uaGVhZGVyX2FwZXJjdSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nb19lbnRyZXByaXNlIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIGVudGV0ZV9lbnRyZXByaXNlXG5cbi5lbnRldGVfZW50cmVwcmlzZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4ubG9nb19lbnRyZXByaXNlIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmNvbnRlbnRfZW50ZXRlIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNTBweDtcbn1cblxuLmNvbnRlbnRfZW50ZXRlIC5wYXJhMSxcbi5jb250ZW50X2VudGV0ZSAucGFyYTJcbntcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vIExpZ25lXG5ociB7XG4gICAgbWFyZ2luOiAzcHggMDtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8gVGlyZVxuXG4udGl0cmUgaDIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLmRhdGUgcCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kcm9pdCxcbi5vYmplY3RcbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDM3cHg7XG59IFxuXG4uZHJvaXQgaDQsXG4ub2JqZWN0IGg0IFxue1xuICAgIC8vIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG5cbi5kcm9pdCBwLFxuLm9iamVjdCBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICBtYXJnaW46IDA7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIG1hcmdpbjogMjBweCAzN3B4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxudGgsIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLnRvdGFsLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnRvdGFsLWxpbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogOHB4IDA7XG59XG5cbi5ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlcGFyYXRvciB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMzMzM7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbnRkLnRhYmxlX3RkXzEge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxudGQudGFibGVfdGQge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIC8vIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi50YWJsZV90ZF9kZXNjcmlwdG9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkLnRkX2xlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQhaW1wb3J0YW50O1xufVxuXG4uY29udGVudV9ib3R0b20gcHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzN3B4O1xufVxuXG4uY2FjaGV0X2NvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY2FjaGV0X2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jYWNoZXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDMwcHg7XG4gICAgcmlnaHQ6IDQxcHg7XG59XG5cbi5jYWNoZXQgaDZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNhY2hldCBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5jYWNoZXQgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBicml0dGFueTtcbiAgbWFyZ2luLXRvcDogNTIlO1xufVxuXG4uY29udGFpbmVyX2Zvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNDVweDtcbiAgICB3aWR0aDogOTYlO1xufVxuXG4uZm9vdGVyIHAge1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG59XG5cbi5mb290ZXIgcCBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZvb3RlciBlbSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG5cblxuXG5cblxuLyogU3R5bGVzIGRlIGJhc2UgKi9cbi5mYWN0dXJlLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAyMTBtbTsgLyogRm9ybWF0IEE0ICovXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcbiAgXG4gICAgLmxvYWRpbmctb3ZlcmxheSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgXG4gICAgICAuc3Bpbm5lciB7XG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICNmM2YzZjM7XG4gICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMzQ5OGRiO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLmVycm9yLW1lc3NhZ2Uge1xuICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RjMzU0NTtcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLyogRW4tdMODwqp0ZSAqL1xuICAuZmFjdHVyZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMzM7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIFxuICAgIC5jb21wYW55LWluZm8ge1xuICAgICAgaDEge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICM3ZjhjOGQ7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAuZmFjdHVyZS1tZXRhIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgXG4gICAgICAuZmFjdHVyZS1udW1iZXIge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICMyYzNlNTA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5mYWN0dXJlLWRhdGUge1xuICAgICAgICBjb2xvcjogIzdmOGM4ZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC8qIFNlY3Rpb24gY2xpZW50ICovXG4gIC5jbGllbnQtaW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBcbiAgICBoMyB7XG4gICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICB9XG4gICAgXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC8qIFRhYmxlYXUgZGVzIHByb2R1aXRzICovXG4gIC5wcm9kdWN0cy1zZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBcbiAgICB0YWJsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICBcbiAgICAgIHRoLCB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNmMGYxO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0cjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvKiBUb3RhbCAqL1xuICAudG90YWxzLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIFxuICAgIC50b3RhbC1saW5lIHtcbiAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgXG4gICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzdmOGM4ZDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJi5ncmFuZC10b3RhbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgIH1cbiAgICB9XG59XG5cbi8qIEJsb2Mgc2lnbmF0dXJlIGVuIGRlc3NvdXMgZHUgbm9tLCBhbGlnbsODwqkgw4PCoCBkcm9pdGUgKi9cbi5zaWduYXR1cmVfYmxvYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgLy8gbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNpZ25hdHVyTnVtIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDgwcHg7IFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaWduYXR1ck51bSAuaW1nIHtcbiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtN3B4O1xuICAgIHJpZ2h0OiAxNHB4O1xuICAgIHdpZHRoOiAzNCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgei1pbmRleDogMTtcbiAgICBvcGFjaXR5OiAwLjc7IFxuXG4gICAgXG59XG5cbi8qIENhY2hldCBwYXItZGVzc3VzICovXG4uc2lnbmF0dXJOdW0gLmNhY2hldE51bSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogYXV0bztcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgei1pbmRleDogMjtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tdG9wOiAtN3B4O1xufVxuXG4ubmFtZV9kaXJlY3RldXIge1xuICAvLyBmb250LXNpemU6IDZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMDtcbiAgLy8gbWFyZ2luLXRvcDogLTY5cHg7XG4gIHRvcDogMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_facture-proforma_detail-facture-proforma-apercu_detail-facture-proforma-ap-7c87c0.js.map