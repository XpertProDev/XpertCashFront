"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_facture-reel_facture-reel-details_facture-reel-details_component_ts"],{

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

/***/ 44948:
/*!************************************************************************************************!*\
  !*** ./src/app/admin-page/facture-reel/facture-reel-details/facture-reel-details.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FactureReelDetailsComponent: () => (/* binding */ FactureReelDetailsComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../MODELS/customNumberPipe */ 96115);
/* harmony import */ var _MODELS_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../MODELS/number-to-words.pipe */ 13868);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 14876);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ 2752);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf-autotable */ 6530);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_facturereel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../SERVICES/facturereel-service */ 97033);
/* harmony import */ var _SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../SERVICES/entreprise-service */ 92120);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 42700);

















const _c0 = (a0, a1, a2) => ({
  "payee": a0,
  "partiel": a1,
  "attente": a2
});
function FactureReelDetailsComponent_div_4_div_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Annuler la facture");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FactureReelDetailsComponent_div_4_div_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Traitement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FactureReelDetailsComponent_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 69)(1, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureReelDetailsComponent_div_4_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.annulerFacture());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, FactureReelDetailsComponent_div_4_div_3_span_2_Template, 2, 0, "span", 35)(3, FactureReelDetailsComponent_div_4_div_3_span_3_Template, 2, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r3.isLoadingFacture);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r3.isLoadingFacture);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.isLoadingFacture);
  }
}
function FactureReelDetailsComponent_div_4_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 71)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Doit :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](f_r5.client.nomComplet);
  }
}
function FactureReelDetailsComponent_div_4_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 71)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Doit :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](f_r5.entrepriseClient.nom);
  }
}
function FactureReelDetailsComponent_div_4_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "td", 73);
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
    const ligne_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ligne_r6.produit.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r3.transformerLigne(ligne_r6.ligneDescription || ""), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 5, ligne_r6.prixUnitaire));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ligne_r6.quantite);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 7, ligne_r6.montantTotal));
  }
}
function FactureReelDetailsComponent_div_4_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Remise ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 2, f_r5.tauxRemise, "1.0-2"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 5, f_r5.remise), " ");
  }
}
function FactureReelDetailsComponent_div_4_tr_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Montant commercial");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, f_r5.totalHT - f_r5.remise), " ");
  }
}
function FactureReelDetailsComponent_div_4_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("TVA (", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 2, ((tmp_4_0 = ctx_r3.tauxTva) !== null && tmp_4_0 !== undefined ? tmp_4_0 : 0) * 100, "1.0-2"), " %)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 5, ctx_r3.totalTVA), " ");
  }
}
function FactureReelDetailsComponent_div_4_tr_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Montant TTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, f_r5.totalFacture));
  }
}
function FactureReelDetailsComponent_div_4_p_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.siteWeb);
  }
}
function FactureReelDetailsComponent_div_4_div_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.getLegalInfo());
  }
}
function FactureReelDetailsComponent_div_4_div_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 74)(1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.getAddressInfo());
  }
}
function FactureReelDetailsComponent_div_4_div_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureReelDetailsComponent_div_4_div_99_Template_i_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.successMessageFactureAnuller = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r3.successMessageFactureAnuller, " ");
  }
}
function FactureReelDetailsComponent_div_4_div_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureReelDetailsComponent_div_4_div_100_Template_i_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.errorMessageFactureAnuller = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r3.errorMessageFactureAnuller, " ");
  }
}
function FactureReelDetailsComponent_div_4_div_101_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "small", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Restant: ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r3.montantRestant), " FCFA ");
  }
}
function FactureReelDetailsComponent_div_4_div_101_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureReelDetailsComponent_div_4_div_101_div_31_Template_i_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.successMessage = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r3.successMessage, " ");
  }
}
function FactureReelDetailsComponent_div_4_div_101_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureReelDetailsComponent_div_4_div_101_div_32_Template_i_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.errorMessage = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r3.errorMessage, " ");
  }
}
function FactureReelDetailsComponent_div_4_div_101_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Payer la facture");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FactureReelDetailsComponent_div_4_div_101_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Traitement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FactureReelDetailsComponent_div_4_div_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 80)(1, "div", 14)(2, "div", 58)(3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Paiement de facture");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 15)(6, "form", 81)(7, "div", 82)(8, "div", 83)(9, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function FactureReelDetailsComponent_div_4_div_101_Template_input_input_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.onInputChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Montant paiement");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, FactureReelDetailsComponent_div_4_div_101_small_12_Template, 3, 3, "small", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 83)(14, "select", 87)(15, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "S\u00E9lectionnez...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Esp\u00E8ce");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Ch\u00E8que");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Carte de cr\u00E9dit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Virement bancaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Mobile Money");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Mode de paiement");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 94)(30, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, FactureReelDetailsComponent_div_4_div_101_div_31_Template, 4, 1, "div", 95)(32, FactureReelDetailsComponent_div_4_div_101_div_32_Template, 4, 1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 97)(34, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureReelDetailsComponent_div_4_div_101_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.enregistrerPaiement());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, FactureReelDetailsComponent_div_4_div_101_span_35_Template, 2, 0, "span", 35)(36, FactureReelDetailsComponent_div_4_div_101_span_36_Template, 2, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r3.paiementForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.montantRestant > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.successMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r3.paiementForm.invalid || ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.isLoading);
  }
}
function FactureReelDetailsComponent_div_4_div_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Aucun paiement enregistr\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function FactureReelDetailsComponent_div_4_div_124_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 104)(1, "div", 105)(2, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 107)(9, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 5, p_r12.montant), " FCFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](7, 7, p_r12.datePaiement, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r3.getModeIconClass(p_r12.modePaiement));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r3.getModeText(p_r12.modePaiement), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Par ", p_r12.encaissePar, " ");
  }
}
function FactureReelDetailsComponent_div_4_ng_container_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r3.getIconClass(item_r13.mode));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx_r3.getModeText(item_r13.mode));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx_r3.getModeText(item_r13.mode));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 5, item_r13.montant), "");
  }
}
function FactureReelDetailsComponent_div_4_div_131_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 124)(1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "svg", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "path", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 120)(5, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Valid\u00E9 par ", ctx_r3.facture.utilisateurValidateur, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Le ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 2, ctx_r3.facture.dateCreation, "dd/MM/yyyy"), "");
  }
}
function FactureReelDetailsComponent_div_4_div_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 114)(1, "div", 115)(2, "div", 116)(3, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "svg", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "path", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 120)(7, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, FactureReelDetailsComponent_div_4_div_131_div_12_Template, 10, 5, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Cr\u00E9\u00E9 par ", ctx_r3.facture.utilisateurCreateur, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Le ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](11, 3, ctx_r3.facture.dateCreationPro, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.facture.utilisateurValidateur);
  }
}
function FactureReelDetailsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, FactureReelDetailsComponent_div_4_div_3_Template, 4, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 10)(5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureReelDetailsComponent_div_4_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.voirProforma());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Voir proforma");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureReelDetailsComponent_div_4_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.download());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 14)(11, "div", 15)(12, "div", 16)(13, "div", 17)(14, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("error", function FactureReelDetailsComponent_div_4_Template_img_error_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.logo = ctx_r3.fallbackLogo);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 19)(16, "div", 20)(17, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, " Email\u202F: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 25)(27, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "hr")(30, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 27)(32, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 28)(35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](37, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, FactureReelDetailsComponent_div_4_div_38_Template, 5, 1, "div", 29)(39, FactureReelDetailsComponent_div_4_div_39_Template, 5, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 30)(41, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Objet :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "table", 31)(46, "thead")(47, "tr")(48, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "D\u00E9signation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Prix Unitaire (FCFA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "Quantit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "Montant (FCFA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](59, FactureReelDetailsComponent_div_4_tr_59_Template, 12, 9, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "tfoot")(61, "tr")(62, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "Total HT");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](66, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](67, FactureReelDetailsComponent_div_4_tr_67_Template, 7, 7, "tr", 35)(68, FactureReelDetailsComponent_div_4_tr_68_Template, 6, 3, "tr", 35)(69, FactureReelDetailsComponent_div_4_tr_69_Template, 7, 7, "tr", 35)(70, FactureReelDetailsComponent_div_4_tr_70_Template, 6, 3, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div", 36)(72, "p")(73, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74, "Arr\u00EAt\u00E9 la pr\u00E9sente facture \u00E0 la somme de : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](76, "enLettres");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "div", 38)(78, "div", 39)(79, "div", 40)(80, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](81, "Pour acquit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "div", 41)(83, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "div", 42)(86, "div", 43)(87, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("error", function FactureReelDetailsComponent_div_4_Template_img_error_87_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.logo = ctx_r3.fallbackLogo);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("error", function FactureReelDetailsComponent_div_4_Template_img_error_88_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.logo = ctx_r3.fallbackLogo);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "h4", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "div", 47)(92, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](93, "hr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](94, FactureReelDetailsComponent_div_4_p_94_Template, 3, 1, "p", 35)(95, FactureReelDetailsComponent_div_4_div_95_Template, 3, 1, "div", 35)(96, FactureReelDetailsComponent_div_4_div_96_Template, 3, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "div", 51)(98, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](99, FactureReelDetailsComponent_div_4_div_99_Template, 4, 1, "div", 53)(100, FactureReelDetailsComponent_div_4_div_100_Template, 4, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](101, FactureReelDetailsComponent_div_4_div_101_Template, 37, 7, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "div", 56)(103, "div", 14)(104, "div", 57)(105, "div", 58)(106, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107, "Historique des paiements");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "div", 60)(111, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](112, "Montant d\u00FB : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](115, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](117, "Montant restant : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](120, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](121, "div", 15)(122, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](123, FactureReelDetailsComponent_div_4_div_123_Template, 4, 0, "div", 64)(124, FactureReelDetailsComponent_div_4_div_124_Template, 15, 10, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](125, "div", 66)(126, "div", 60)(127, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](128, "Montant total :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](129, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](130, FactureReelDetailsComponent_div_4_ng_container_130_Template, 6, 7, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](131, FactureReelDetailsComponent_div_4_div_131_Template, 13, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r5 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r3.facture == null ? null : ctx_r3.facture.statutPaiement) === "EN_ATTENTE");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r3.logo, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Secteur\u202F: ", ctx_r3.secteur, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r3.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" T\u00E9l\u00E9phone\u202F: ", ctx_r3.telephone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](53, _c0, ctx_r3.facture.statutPaiement === "PAYEE", ctx_r3.facture.statutPaiement === "PARTIELLEMENT_PAYEE", ctx_r3.facture.statutPaiement === "EN_ATTENTE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r3.getStatutText(ctx_r3.facture.statutPaiement || ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Facture : ", f_r5.numeroFacture, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r3.siege, ", le ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](37, 41, f_r5.dateCreation, "dd-MM-yyyy", "fr_FR"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", f_r5.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", f_r5.entrepriseClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](f_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", f_r5.lignesFacture);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](66, 45, f_r5.totalHT));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", f_r5.remise && f_r5.remise > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", f_r5.remise && f_r5.remise > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", f_r5.tva);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", f_r5.tva);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](76, 47, f_r5.totalFacture), ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.signataire);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r3.signaturNum, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r3.cachetNum, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.signataireNom);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.siteWeb);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.getLegalInfo());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.getAddressInfo());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.successMessageFactureAnuller);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.errorMessageFactureAnuller);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r3.facture == null ? null : ctx_r3.facture.statutPaiement) !== "PAYEE" && (ctx_r3.facture == null ? null : ctx_r3.facture.statutPaiement) !== "ANNULEE");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](57, _c0, ctx_r3.facture.statutPaiement === "PAYEE", ctx_r3.facture.statutPaiement === "PARTIELLEMENT_PAYEE", ctx_r3.facture.statutPaiement === "EN_ATTENTE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r3.getStatutText(ctx_r3.facture.statutPaiement || ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](115, 49, ctx_r3.facture.totalFacture || 0), " FCFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](120, 51, ctx_r3.montantRestant), " FCFA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.historiquePaiements.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.historiquePaiements);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.modesPaiementVisibles);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.facture);
  }
}
function FactureReelDetailsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Aucune donn\u00E9e d\u2019aper\u00E7u\u2026 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "a", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureReelDetailsComponent_ng_template_5_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.navigateBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Retour");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function FactureReelDetailsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 127)(1, "div", 128)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Confirmer l'annulation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " \u00CAtes-vous s\u00FBr de vouloir annuler cette facture ? Cette action est irr\u00E9versible. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 129)(7, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureReelDetailsComponent_div_7_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.cancelAnnulation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Retour");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureReelDetailsComponent_div_7_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.confirmAnnulation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Confirmer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
}
class FactureReelDetailsComponent {
  constructor(router, route, factureService, entrepriseService, fb, dialog) {
    this.router = router;
    this.route = route;
    this.factureService = factureService;
    this.entrepriseService = entrepriseService;
    this.fb = fb;
    this.dialog = dialog;
    // facture: any | null = null;
    this.nom = null;
    this.logo = null;
    this.signaturNum = null;
    this.cachetNum = null;
    this.totauxParMode = {};
    this.nomComplet = '';
    this.role = 'Createur';
    this.facture = null;
    this.totalTVA = 0;
    this.montantCommercial = 0;
    this.montantRestant = 0;
    this.historiquePaiements = [];
    this.isLoading = false;
    this.isLoadingFacture = false;
    this.errorMessage = null;
    this.successMessage = null;
    this.errorMessageFactureAnuller = null;
    this.successMessageFactureAnuller = null;
    this.montant = 0;
    this.messageSubscription = null;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.imgUrl;
    this.fallbackLogo = `${this.apiUrl}/defaultLogo/Votre.png`;
    this.modesPaiementVisibles = [];
    this.showAnnulationConfirmation = false;
    // Variables pour gérer la signature
    this.signatureImage = null;
    this.signatureValidee = false;
    this.paiementForm = this.fb.group({
      montant: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.01)]],
      modePaiement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
    });
  }
  onInputChange(event) {
    const input = event.target;
    if (!input) return;
    const cleaned = input.value.replace(/\s/g, '');
    const parsed = parseInt(cleaned, 10);
    if (!isNaN(parsed)) {
      // Met à jour le champ FormControl
      this.paiementForm.get('montant')?.setValue(parsed, {
        emitEvent: false
      });
      // Met à jour visuellement le champ avec format
      input.value = this.customNumberTransform(parsed);
    } else {
      this.paiementForm.get('montant')?.setValue(null, {
        emitEvent: false
      });
    }
  }
  // Fonction utilitaire de formatage (tu peux réutiliser ta pipe ici si tu veux)
  customNumberTransform(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  ngOnInit() {
    // 1) Charger les infos de l’entreprise (en-tête)
    this.getUserEntrepriseInfo();
    // 2) Récupérer l’ID de la facture depuis l’URL et lancer la requête API
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const factureId = +idParam;
      this.loadFactureReelle(factureId);
    } else {
      // Si pas d’ID dans l’URL, rediriger ou afficher message d’erreur
      console.error('Aucun ID de facture passé en paramètre');
      this.router.navigate(['/facture-reel']);
    }
    this.paiementForm = this.fb.group({
      montant: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0.01)]],
      modePaiement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
    });
  }
  loadFactureReelle(id) {
    this.factureService.getFactureReelleById(id).subscribe({
      next: data => {
        console.log('Les données de la facture :', data);
        // Calcul du total HT et autres informations
        data.totalHT = data.lignesFacture.reduce((sum, ligne) => sum + ligne.montantTotal, 0);
        data.tauxRemise = data.remise > 0 ? data.remise / data.totalHT * 100 : 0;
        if (data.tva) {
          this.totalTVA = (data.totalHT - data.remise) * (this.tauxTva ?? 0);
          this.montantCommercial = data.totalHT - data.remise;
        }
        // Ici, tu as directement accès à produit.nom
        data.lignesFacture.forEach(ligne => {
          ligne.produit.nom = ligne.produit.nom; // Assignation directe du nom du produit
        });
        this.facture = data;
        this.loadMontantRestant();
        this.loadHistoriquePaiements();
        // Ajouter le calcul du statut
        this.updatePaymentStatus();
      },
      error: err => {
        console.error('Erreur', err);
        this.router.navigate(['/facture-reel']);
      }
    });
  }
  // Nouvelle méthode pour mettre à jour le statut
  updatePaymentStatus() {
    if (!this.facture) return;
    if (this.montantRestant <= 0) {
      this.facture.statutPaiement = 'PAYEE';
    } else if (this.montantRestant < this.facture.totalFacture) {
      this.facture.statutPaiement = 'PARTIELLEMENT_PAYEE';
    } else {
      this.facture.statutPaiement = 'EN_ATTENTE';
    }
  }
  voirProforma() {
    if (this.facture?.factureProFormaId) {
      this.router.navigate(['/facture-proforma-details', this.facture.factureProFormaId]);
    } else {
      console.error('Aucune facture proforma associée trouvée');
      // Option: Afficher un message à l'utilisateur
      this.errorMessage = "Aucune facture proforma associée";
    }
  }
  loadMontantRestant() {
    if (!this.facture) return;
    this.factureService.getMontantRestant(this.facture.id).subscribe({
      next: montant => {
        this.montantRestant = montant;
        this.updatePaymentStatus(); // Mettre à jour le statut après avoir reçu le montant restant
      },
      error: err => console.error(err)
    });
  }
  getStatutText(statut) {
    if (!statut) return 'Inconnu';
    switch (statut) {
      case 'PAYEE':
        return 'Payée';
      case 'PARTIELLEMENT_PAYEE':
        return 'Partiellement payée';
      case 'EN_ATTENTE':
        return 'Non payé ';
      default:
        return statut;
    }
  }
  getModeText(mode) {
    switch (mode) {
      case 'CASH':
        return 'Espèce';
      case 'CHEQUE':
        return 'Chèque';
      case 'CARD':
        return 'Carte de crédit';
      case 'VIREMENT':
        return 'Virement bancaire';
      case 'MOBILE':
        return 'Mobile Money';
      default:
        return mode;
    }
  }
  getModeIconClass(mode) {
    switch (mode) {
      case 'CASH':
        return 'ri-cash-line text-green';
      case 'CHEQUE':
        return 'ri-bill-line text-blue';
      case 'CARD':
        return 'ri-bank-card-line text-purple';
      case 'VIREMENT':
        return 'ri-bank-fill text-navy';
      case 'MOBILE':
        return 'ri-smartphone-line text-orange';
      default:
        return 'ri-question-line text-gray';
    }
  }
  // loadHistoriquePaiements() {
  //   if (!this.facture) return;
  //   this.factureService.getHistoriquePaiements(this.facture.id).subscribe({
  //     next: (paiements) => this.historiquePaiements = paiements.reverse(),
  //     error: (err) => console.error(err)
  //   });
  // }
  loadHistoriquePaiements() {
    if (!this.facture) return;
    this.factureService.getHistoriquePaiements(this.facture.id).subscribe({
      next: paiements => {
        this.historiquePaiements = paiements.reverse();
        this.calculerTotauxParMode(); // Nouvelle fonction
      },
      error: err => console.error(err)
    });
  }
  calculerTotauxParMode() {
    const totaux = {};
    // Calcul des totaux
    this.historiquePaiements.forEach(paiement => {
      totaux[paiement.modePaiement] = (totaux[paiement.modePaiement] || 0) + paiement.montant;
    });
    // Création du tableau des modes visibles
    this.modesPaiementVisibles = Object.entries(totaux).filter(([_, montant]) => montant > 0).map(([mode, montant]) => ({
      mode,
      montant
    }));
    // Tri pour un affichage cohérent
    this.modesPaiementVisibles.sort((a, b) => b.montant - a.montant);
  }
  getIconClass(mode) {
    switch (mode) {
      case 'CASH':
        return 'ri-cash-line text-green';
      case 'CHEQUE':
        return 'ri-bill-line text-blue';
      case 'CARD':
        return 'ri-bank-card-line text-purple';
      case 'VIREMENT':
        return 'ri-bank-fill text-navy';
      case 'MOBILE':
        return 'ri-smartphone-line text-orange';
      default:
        return 'ri-question-line text-gray';
    }
  }
  enregistrerPaiement() {
    if (this.paiementForm.invalid || !this.facture) return;
    // Réinitialiser les messages avant chaque tentative
    this.errorMessage = null;
    this.successMessage = null;
    this.clearMessageTimer(); // Annuler tout timer existant
    this.isLoading = true;
    const montantPaiement = this.paiementForm.get('montant')?.value;
    // Validation supplémentaire du montant
    if (montantPaiement > this.montantRestant) {
      this.errorMessage = "Le montant saisi est supérieur au montant restant à payer.";
      this.startMessageTimer(3000);
      this.isLoading = false;
      return;
    }
    this.factureService.enregistrerPaiement(this.facture.id, montantPaiement, this.paiementForm.get('modePaiement')?.value).subscribe({
      next: () => {
        this.successMessage = "Paiement enregistré avec succès.";
        this.paiementForm.reset();
        // Recharger les données de la facture pour mettre à jour le statut
        this.loadFactureReelle(this.facture.id);
        this.startMessageTimer(3000);
      },
      error: err => {
        // Gestion spécifique du succès avec réponse texte
        if (err.status === 200 && err.error?.text) {
          this.successMessage = err.error.text;
          this.paiementForm.reset();
          // Recharger les données de la facture pour mettre à jour le statut
          this.loadFactureReelle(this.facture.id);
        }
        // Gestion des erreurs standards
        else if (err.error?.message) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = "Une erreur inconnue est survenue";
        }
        this.isLoading = false;
        this.startMessageTimer(3000);
      }
    });
  }
  // Méthode pour démarrer le timer de fermeture automatique
  startMessageTimer(duration) {
    this.clearMessageTimer(); // Nettoyer tout timer existant
    this.messageSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.timer)(duration).subscribe(() => {
      this.successMessage = null;
      this.errorMessage = null;
      this.messageSubscription = null;
    });
  }
  // Méthode pour annuler le timer
  clearMessageTimer() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
      this.messageSubscription = null;
    }
  }
  ngOnDestroy() {
    this.clearMessageTimer();
  }
  getUserEntrepriseInfo() {
    this.entrepriseService.getEntrepriseInfo().subscribe({
      next: entreprise => {
        this.nom = entreprise.nom;
        this.siege = entreprise.siege;
        this.email = entreprise.email;
        this.logo = entreprise.logo ? `${this.apiUrl}${entreprise.logo}` : null;
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
        this.signaturNum = entreprise.signaturNum ? `${this.apiUrl}${entreprise.signaturNum}` : null;
        this.cachetNum = entreprise.cachetNum ? `${this.apiUrl}${entreprise.cachetNum}` : null;
      },
      error: err => {
        console.error('Erreur lors de la récupération des infos entreprise :', err);
      }
    });
  }
  navigateBack() {
    this.router.navigate(['/facture-reel']);
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
    }
    if (adresse && siege) {
      return `Adresse : ${adresse} / ${siege}`;
    }
    if (adresse && pays) {
      return `Adresse : ${adresse} / ${pays}`;
    }
    if (siege && pays) {
      return `Adresse : ${siege} / ${pays}`;
    }
    if (adresse) {
      return `Adresse : ${adresse}`;
    }
    if (siege) {
      return `Adresse : ${siege}`;
    }
    if (pays) {
      return `Adresse : ${pays}`;
    }
    return '';
  }
  annulerFacture() {
    // Afficher la popup de confirmation
    this.showAnnulationConfirmation = true;
  }
  cancelAnnulation() {
    // Cacher la popup
    this.showAnnulationConfirmation = false;
  }
  confirmAnnulation() {
    // Cacher la popup
    this.showAnnulationConfirmation = false;
    this.isLoadingFacture = true;
    if (!this.facture) {
      this.isLoadingFacture = false;
      return;
    }
    this.factureService.annulerFactureReelle(this.facture.id).subscribe({
      next: factureAnnulee => {
        // Mettre à jour la facture locale avec le nouveau statut
        this.facture = factureAnnulee;
        this.successMessageFactureAnuller = 'Facture annulée avec succès';
        // Rediriger après 2 secondes
        setTimeout(() => {
          this.router.navigate(['/facture-reel']);
        }, 2000);
      },
      error: err => {
        // this.errorMessage = err.error?.message || 'Erreur lors de l\'annulation de facture le paiement est déjà commencer';
        this.errorMessageFactureAnuller = err.error?.message || 'Vous pouvez pas annuler cette facture le paiement est déjà commencer';
        this.isLoadingFacture = false;
      }
    });
  }
  download() {
    var _this = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__.jsPDF({
        unit: 'mm',
        format: 'a4'
      });
      // Logo
      try {
        if (_this.logo) {
          const imgData = _this.logo.startsWith('data:image/') ? _this.logo : yield _this.getImageFromUrl(_this.logo);
          const formatMatch = imgData.match(/^data:image\/(png|jpeg|jpg|gif);/);
          const format = formatMatch ? formatMatch[1].toUpperCase() : 'PNG';
          doc.addImage(imgData, format, 15, 10, 47, 17);
        }
      } catch (imgErr) {
        console.error('Erreur de chargement du logo', imgErr);
      }
      // Infos entreprise
      const infoX = 70;
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(_this.nom || 'Nom Entreprise', infoX, 12);
      doc.setFont('helvetica', 'normal');
      doc.text(`Secteur : ${_this.secteur || ''}`, infoX, 17);
      doc.text(`Email : ${_this.email || ''}`, infoX, 22);
      doc.text(`Téléphone : ${_this.telephone || ''}`, infoX + 60, 22);
      // Séparateurs
      doc.setDrawColor(200);
      doc.line(15, 27, 195, 27);
      doc.line(15, 28.5, 195, 28.5);
      // Titre
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(85, 85, 85);
      doc.text(`FACTURE : ${_this.facture?.numeroFacture}`, 105, 36, {
        align: 'center'
      });
      // Date
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      const dateStr = _this.facture?.dateCreation ? new Date(_this.facture.dateCreation).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }) : '';
      doc.text(`${_this.siege || ''}, le ${dateStr}`, 195, 46, {
        align: 'right'
      });
      // Client
      const clientY = 56;
      if (_this.facture) {
        const clientName = _this.facture.client?.nomComplet || _this.facture.entrepriseClient?.nom || 'Non spécifié';
        doc.setFont('helvetica', 'bold');
        doc.text('Doit :', 15, clientY);
        doc.setFont('helvetica', 'normal');
        doc.text(clientName, 15 + doc.getTextWidth('Doit :') + 2, clientY);
      }
      // Objet
      doc.setFont('helvetica', 'bold');
      doc.text('Objet :', 15, clientY + 7);
      doc.setFont('helvetica', 'normal');
      doc.text(_this.facture?.description || '', 15 + doc.getTextWidth('Objet :') + 2, clientY + 7);
      // Tableau des produits
      const tableStartY = clientY + 17;
      const customNumberPipe = new _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_1__.CustomNumberPipe();
      const tableData = _this.facture?.lignesFacture.map(ligne => [ligne.produit.nom, ligne.ligneDescription, customNumberPipe.transform(ligne.prixUnitaire), ligne.quantite.toString(), customNumberPipe.transform(ligne.montantTotal)]) || [];
      // Totaux
      tableData.push([{
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
        const remisePourcent = _this.facture.totalHT > 0 ? Math.round(_this.facture.remise / _this.facture.totalHT * 100) : 0;
        tableData.push([{
          content: `Remise ${remisePourcent}%`,
          colSpan: 4,
          styles: {
            fontStyle: 'normal',
            halign: 'center'
          }
        }, {
          content: customNumberPipe.transform(_this.facture.remise),
          styles: {
            halign: 'right'
          }
        }]);
        const montantCommercial = _this.facture.totalHT - _this.facture.remise;
        tableData.push([{
          content: 'Montant Commercial',
          colSpan: 4,
          styles: {
            fontStyle: 'normal',
            halign: 'center'
          }
        }, {
          content: customNumberPipe.transform(montantCommercial),
          styles: {
            halign: 'right'
          }
        }]);
      }
      // TVA
      if (_this.facture?.tva && _this.tauxTva) {
        const tauxPourcent = Math.round(_this.tauxTva * 100);
        tableData.push([{
          content: `TVA (${tauxPourcent} %)`,
          colSpan: 4,
          styles: {
            fontStyle: 'normal',
            halign: 'center'
          }
        }, {
          content: customNumberPipe.transform(_this.totalTVA),
          styles: {
            halign: 'right'
          }
        }]);
        tableData.push([{
          content: 'Montant TTC',
          colSpan: 4,
          styles: {
            fontStyle: 'normal',
            halign: 'center'
          }
        }, {
          content: customNumberPipe.transform(_this.facture.totalFacture || 0),
          styles: {
            halign: 'right'
          }
        }]);
      }
      // Si paiement partiel ou complet, afficher les montants payés et restants
      const facture = _this.facture;
      if (facture && facture.statutPaiement !== 'EN_ATTENTE') {
        const montantPaye = (facture.totalFacture || 0) - (facture.montantRestant || 0);
        const montantRestant = facture.montantRestant || 0;
        tableData.push([{
          content: 'Montant payé',
          colSpan: 4,
          styles: {
            fontStyle: 'normal',
            halign: 'center'
          }
        }, {
          content: customNumberPipe.transform(montantPaye),
          styles: {
            halign: 'right'
          }
        }]);
        tableData.push([{
          content: 'Reste à payer',
          colSpan: 4,
          styles: {
            fontStyle: 'normal',
            halign: 'center'
          }
        }, {
          content: customNumberPipe.transform(montantRestant),
          styles: {
            halign: 'right'
          }
        }]);
      }
      // Génération du tableau
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
          fontStyle: 'bold'
        },
        margin: {
          left: 15,
          right: 15
        },
        columnStyles: {
          0: {
            cellWidth: 30
          },
          1: {
            cellWidth: 60
          },
          2: {
            cellWidth: 33
          },
          3: {
            cellWidth: 20
          },
          4: {
            cellWidth: 35
          }
        }
      });
      // Montant en lettres
      const tableEndY = doc.lastAutoTable.finalY;
      const amountY = tableEndY + 18;
      const libelle = 'Arrêté la présente facture à la somme de : ';
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.text(libelle, 17, amountY);
      // Déterminer le montant à afficher en lettres
      const currentFacture = _this.facture;
      let montantPourTexte = currentFacture?.totalFacture || 0;
      if (currentFacture?.statutPaiement !== 'EN_ATTENTE' && currentFacture?.montantRestant != null) {
        montantPourTexte = currentFacture.montantRestant;
      }
      // Convertir en lettres
      const enLettresPipe = new _MODELS_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_2__.EnLettresPipe();
      const amountText = enLettresPipe.transform(montantPourTexte);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.text(amountText, 15 + doc.getTextWidth(libelle), amountY);
      // Signature
      const signatureY = amountY + 30;
      // "Pour acquit" à gauche
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.text('Pour acquit :', 29, signatureY);
      // Nom du signataire à droite (au même niveau que "Pour acquit")
      doc.setFont('helvetica', 'bold');
      doc.text(_this.signataire || '', 180, signatureY, {
        align: 'right'
      });
      // === Signature (image en bas à droite, ajustée) ===
      const signatureImageWidth = 33;
      const signatureImageHeight = 33;
      // ↓ Ajustements ici
      const signatureImageX = 180 - signatureImageWidth - 6; // décalé 5px à gauche
      const signatureImageY = signatureY + 1; // 3px plus haut
      if (_this.signaturNum) {
        doc.addImage(_this.signaturNum, 'PNG', signatureImageX, signatureImageY, signatureImageWidth, signatureImageHeight);
      }
      // === Cachet superposé (ajusté) ===
      const cachetImageWidth = 40;
      const cachetImageHeight = 40;
      const cachetImageX = signatureImageX - 12; // un peu plus à gauche
      const cachetImageY = signatureImageY + 3; // un peu plus en haut
      if (_this.cachetNum) {
        doc.addImage(_this.cachetNum, 'PNG', cachetImageX, cachetImageY, cachetImageWidth, cachetImageHeight);
      }
      // === Nom complet du signataire (sous l’image) ===
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.text(_this.signataireNom || '', 180, signatureImageY + signatureImageHeight + 4, {
        align: 'right'
      });
      // Footer
      const footerY = doc.internal.pageSize.height - 20;
      doc.setLineWidth(0.2);
      doc.setDrawColor(150);
      doc.line(15, footerY - 5, 195, footerY - 5);
      doc.setFontSize(8);
      doc.setTextColor(100);
      if (_this.siteWeb) {
        doc.text(_this.siteWeb, 105, footerY, {
          align: 'center'
        });
      }
      const legalInfo = _this.getLegalInfo();
      if (legalInfo) {
        doc.text(legalInfo, 105, footerY + 4, {
          align: 'center'
        });
      }
      const addressInfo = _this.getAddressInfo();
      if (addressInfo) {
        doc.text(addressInfo, 105, footerY + 8, {
          align: 'center'
        });
      }
      //filigran
      const statut = _this.facture?.statutPaiement;
      let filigraneTexte = '';
      let filigraneCouleur = '';
      if (statut === 'EN_ATTENTE') {
        filigraneTexte = 'NON PAYÉ';
        filigraneCouleur = 'rgba(255, 0, 0, 0.08)';
      } else if (statut === 'PARTIELLEMENT_PAYEE') {
        filigraneTexte = 'PAYÉ EN PARTIE';
        filigraneCouleur = 'rgba(255, 165, 0, 0.15)';
      } else if (statut === 'PAYEE') {
        filigraneTexte = 'PAYÉ';
        filigraneCouleur = 'rgba(0, 200, 0, 0.23)';
      }
      if (filigraneTexte) {
        const pageWidth = doc.internal.pageSize.width;
        const pageHeight = doc.internal.pageSize.height;
        // Canvas HD pour qualité
        const scaleFactor = 30;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        canvas.width = pageWidth * scaleFactor;
        canvas.height = pageHeight * scaleFactor;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        ctx.font = `bold ${19 * scaleFactor}px Arial`;
        ctx.fillStyle = filigraneCouleur;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const dyInMM = 10;
        const dy = dyInMM * scaleFactor;
        ctx.translate(centerX, centerY + dy);
        ctx.rotate(-45 * Math.PI / 180);
        ctx.fillText(filigraneTexte, 0, 0);
        ctx.resetTransform();
        const watermarkImage = canvas.toDataURL('image/png');
        doc.addImage(watermarkImage, 'PNG', 0, 0, pageWidth, pageHeight);
        console.log('✅ Filigrane visible :', filigraneTexte, '| Couleur :', filigraneCouleur);
      }
      // Téléchargement
      doc.save(`Facture_${_this.facture?.numeroFacture}.pdf`);
    })();
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
  onSignatureUpload(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        this.signatureImage = e.target?.result || null;
      };
      reader.readAsDataURL(file);
    }
  }
  transformerLigne(ligne) {
    return ligne.replace(/-\s*/g, '<br> - <span></span>');
  }
  static {
    this.ɵfac = function FactureReelDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FactureReelDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_SERVICES_facturereel_service__WEBPACK_IMPORTED_MODULE_6__.FactureReelService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_7__.EntrepriseService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.j));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: FactureReelDetailsComponent,
      selectors: [["app-facture-reel-details"]],
      inputs: {
        nomComplet: "nomComplet",
        role: "role"
      },
      decls: 8,
      vars: 3,
      consts: [["noData", ""], ["title", "Retour sur la page factures r\u00E9elle", 1, "retour_icon_text", 2, "cursor", "pointer", "color", "#0672E4", "margin-bottom", "15px", 3, "click"], [1, "ri-arrow-left-s-line"], [2, "margin-left", "8px", "font-size", "12px"], ["class", "container_global", 4, "ngIf", "ngIfElse"], ["class", "status-confirmation-popup", 4, "ngIf"], [1, "container_global"], [1, "information_cadre", "div1", 2, "position", "relative"], [1, "cadre_retour"], ["class", "etat_envoyer", 4, "ngIf"], [1, "lien_proforma", 2, "display", "flex", "align-items", "center", "gap", "5px"], [1, "btn_etat", 2, "color", "green", 3, "click"], [1, "download_icon", 2, "text-align", "right", 3, "click"], [1, "ri-download-2-fill"], [1, "info_titre_input"], [1, "content"], [1, "header_apercu"], [1, "logo_entreprise"], ["alt", "Logo de l'entreprise", 3, "error", "src"], [1, "entete_entreprise"], [1, "content_entete"], [1, "para1"], [1, "para2"], [1, "para3"], [3, "href"], [1, "statut_paiement"], [1, "cadre_name_paiement", 3, "ngClass"], [1, "titre"], [1, "date"], ["class", "droit", 4, "ngIf"], [1, "object"], [1, "table"], [2, "width", "260px!important"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [4, "ngIf"], [1, "contenu_bottom"], [2, "font-weight", "600"], [1, "footer_container1"], [1, "ligne_haut"], [1, "acquis"], [1, "signataire_header"], [1, "signature_bloc"], [1, "signaturNum"], ["alt", "Signature", 1, "img", 3, "error", "src"], ["alt", "cachetNum", 1, "cachetNum", 3, "error", "src"], [1, "name_directeur"], [1, "container_footer"], [1, "footer"], [2, "margin-top", "40px"], ["style", "margin-top: -4px;", 4, "ngIf"], [1, "column"], [1, "message-container"], ["class", "success-message", "style", "margin-bottom: 10px;", 4, "ngIf"], ["class", "error-message", "style", "margin-bottom: 10px;", 4, "ngIf"], ["class", "information_cadre_row", 4, "ngIf"], [1, "information_cadre_row_list"], [1, "content_header"], [1, "paiement_title"], [1, "statut-badge", 3, "ngClass"], [1, "total_montant"], [2, "background-color", "#ddd", "background-color", "#aaddaa91", "padding", "5px 10px", "border-radius", "10px"], [2, "background-color", "#ddd", "background-color", "#b8b8b891", "padding", "5px 10px", "border-radius", "10px"], [1, "historique-container"], ["class", "empty-state", 4, "ngIf"], ["class", "paiement-card", 4, "ngFor", "ngForOf"], [1, "content_footer"], [1, "total_logo_virement"], ["class", "facture-header", 4, "ngIf"], [1, "etat_envoyer"], [1, "btn_etat", "btn_etat_annuler", 3, "click", "disabled"], [1, "droit"], [1, "td_left"], [1, "td_left", 3, "innerHTML"], [2, "margin-top", "-4px"], [1, "success-message", 2, "margin-bottom", "10px"], [1, "ri-checkbox-circle-fill"], [1, "ri-close-line", 3, "click"], [1, "error-message", 2, "margin-bottom", "10px"], [1, "ri-error-warning-fill"], [1, "information_cadre_row"], [3, "formGroup"], [1, "grid_colonne"], [1, "champ_input"], ["type", "text", "formControlName", "montant", "placeholder", "Saisis le montant", 1, "input_focus", 3, "input"], [1, "label"], ["class", "restant", 4, "ngIf"], ["formControlName", "modePaiement", 1, "input_focus"], ["value", ""], ["value", "CASH"], ["value", "CHEQUE"], ["value", "CARD"], ["value", "VIREMENT"], ["value", "MOBILE"], [1, "content_btn"], ["class", "success-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "btn_ajouter"], ["type", "button", 1, "btn_save", 3, "click", "disabled"], [1, "restant"], [1, "success-message"], [1, "error-message"], [1, "empty-state"], [1, "ri-history-line"], [1, "paiement-card"], [1, "paiement-header"], [1, "montant"], [1, "paiement-details"], [1, "mode"], [3, "ngClass"], [1, "encaisse"], [1, "ri-user-line"], [1, "total_montant_logo"], [3, "title"], [1, "facture-header"], [1, "user-badges-container"], [1, "user-badge", "creator"], [1, "badge-icon"], ["viewBox", "0 0 24 24", "width", "16", "height", "16"], ["fill", "currentColor", "d", "M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12.5,7V8H11V7H12.5M12.5,16V17H11V16H12.5M7,10.5V9H17V10.5H7M7,15V13.5H17V15H7Z"], [1, "badge-content"], [1, "user-name"], [1, "dateC"], ["class", "user-badge validator", 4, "ngIf"], [1, "user-badge", "validator"], ["fill", "currentColor", "d", "M12,2C6.5,2 2,6.5 2,12C2,17.5 6.5,22 12,22C17.5,22 22,17.5 22,12C22,6.5 17.5,2 12,2M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8L10,17Z"], [3, "click"], [1, "status-confirmation-popup"], [1, "popup-content"], [1, "popup-actions"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-danger", 3, "click"]],
      template: function FactureReelDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureReelDetailsComponent_Template_p_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.navigateBack());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Factures r\u00E9elle");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, FactureReelDetailsComponent_div_4_Template, 132, 61, "div", 4)(5, FactureReelDetailsComponent_ng_template_5_Template, 4, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"])(7, FactureReelDetailsComponent_div_7_Template, 11, 0, "div", 5);
        }
        if (rf & 2) {
          const noData_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.facture)("ngIfElse", noData_r16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showAnnulationConfirmation);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_1__.CustomNumberPipe, _MODELS_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_2__.EnLettresPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule],
      styles: ["@charset \"UTF-8\";\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.container_global[_ngcontent-%COMP%] {\n  display: grid;\n  display: flex;\n  gap: 15px;\n  position: relative;\n}\n\n.div1[_ngcontent-%COMP%] {\n  grid-row: span 2/span 2;\n}\n\n.div3[_ngcontent-%COMP%] {\n  grid-column-start: 2;\n  grid-row-start: 2;\n}\n\n.cadre_retour[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(60, 60, 60, 0.1607843137);\n  padding: 10px 10px 10px 15px;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1000px;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n}\n\n.column[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.information_cadre_row[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n  margin-bottom: 20px;\n}\n\n.information_cadre_row_list[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n  margin-bottom: 20px;\n}\n\n.info_titre_input[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.header_apercu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.logo_entreprise[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 50px;\n}\n\n.entete_entreprise[_ngcontent-%COMP%] {\n  margin-left: 5%;\n}\n\n.logo_entreprise[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.content_entete[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 10px;\n  letter-spacing: 0.5px;\n}\n\n.content_entete[_ngcontent-%COMP%]   .para3[_ngcontent-%COMP%] {\n  font-size: 10px !important;\n}\n\n.content_entete[_ngcontent-%COMP%]   .para1[_ngcontent-%COMP%], \n.content_entete[_ngcontent-%COMP%]   .para2[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin: 3px 0;\n}\n\n.titre[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 15px;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  text-align: center;\n  margin: 20px;\n}\n\n.date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-right: 5%;\n  font-size: 12px;\n}\n\n.droit[_ngcontent-%COMP%], \n.object[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 2px;\n}\n\n.droit[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.object[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n}\n\n.btn_etat[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  color: #fff;\n}\n\n.btn_etat_annuler[_ngcontent-%COMP%] {\n  color: #ff0000;\n}\n\n.btn_etat_annuler[_ngcontent-%COMP%]:hover {\n  color: #e20505;\n}\n\n.droit[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.object[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  margin: 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: #555;\n  margin: 10px 0;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  font-size: 10px;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 8px 2px;\n  text-align: center;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n\n.total-section[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  width: 50%;\n  margin-left: auto;\n}\n\n.total-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 8px 0;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.separator[_ngcontent-%COMP%] {\n  border-top: 2px solid #333;\n  margin: 20px 0;\n}\n\ntd.table_td_1[_ngcontent-%COMP%] {\n  border-right: none;\n}\n\ntd.table_td[_ngcontent-%COMP%] {\n  border-right: none;\n  border-top: none;\n  border-left: none;\n}\n\n.table_td_descripton[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntd.td_left[_ngcontent-%COMP%] {\n  text-align: left !important;\n  padding-left: 10px;\n}\n\n.contenu_bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 10px;\n}\n\n.footer_container1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 40px;\n}\n\n\n\n.ligne_haut[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.acquis[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], \n.signataire_header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0;\n}\n\n\n\n.signature_bloc[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.signaturNum[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 80px;\n  position: relative;\n}\n\n.signaturNum[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 10px;\n  width: 121%;\n  height: auto;\n  object-fit: contain;\n  z-index: 1;\n}\n\n\n\n.signaturNum[_ngcontent-%COMP%]   .cachetNum[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 61px;\n  width: 150%;\n  height: auto;\n  object-fit: contain;\n  z-index: 2;\n  opacity: 0.7;\n}\n\n.name_directeur[_ngcontent-%COMP%] {\n  font-size: 12px;\n  position: relative;\n  right: 12px;\n  z-index: 9;\n}\n\n.container_footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.footer[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  bottom: 45px;\n  width: 96%;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  letter-spacing: 0.6px;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.footer[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n\n\n\n.facture-container[_ngcontent-%COMP%] {\n  max-width: 210mm; \n\n  margin: 20px auto;\n  padding: 20px;\n  background: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  font-family: \"Arial\", sans-serif;\n}\n.facture-container[_ngcontent-%COMP%]   .loading-overlay[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n}\n.facture-container[_ngcontent-%COMP%]   .loading-overlay[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: spin 1s linear infinite;\n  margin: 0 auto;\n}\n.facture-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #dc3545;\n  padding: 1rem;\n  border: 1px solid #dc3545;\n  margin: 1rem 0;\n  border-radius: 4px;\n}\n\n\n\n.facture-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n}\n.facture-header[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #2c3e50;\n}\n.facture-header[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #7f8c8d;\n}\n.facture-header[_ngcontent-%COMP%]   .facture-meta[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.facture-header[_ngcontent-%COMP%]   .facture-meta[_ngcontent-%COMP%]   .facture-number[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #2c3e50;\n}\n.facture-header[_ngcontent-%COMP%]   .facture-meta[_ngcontent-%COMP%]   .facture-date[_ngcontent-%COMP%] {\n  color: #7f8c8d;\n}\n\n\n\n.client-info[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.client-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  margin-bottom: 0.5rem;\n}\n.client-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n\n\n\n.products-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.products-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.products-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .products-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  border-bottom: 1px solid #ecf0f1;\n}\n.products-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  color: #2c3e50;\n}\n.products-section[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n\n\n\n.totals-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: right;\n}\n.totals-section[_ngcontent-%COMP%]   .total-line[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.totals-section[_ngcontent-%COMP%]   .total-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n  color: #7f8c8d;\n}\n.totals-section[_ngcontent-%COMP%]   .total-line.grand-total[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-weight: bold;\n  color: #2c3e50;\n}\n\n.icon_printer[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.icon_printer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.paiement_title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 500;\n  letter-spacing: 0.6px;\n  font-size: 14px;\n}\n\n.grid_colonne[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 15px;\n}\n\n\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n}\n\n.champ_input_list_stock[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.champ_input[_ngcontent-%COMP%]   .title_input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -18px;\n}\n\n.champ_input_Categorie[_ngcontent-%COMP%] {\n  margin-bottom: 15px !important;\n}\n\n.formulaire[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.Title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #695c5c;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: rgb(107, 102, 102);\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 5px;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n.btn_ajouter[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n  margin-top: 0;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #0672E4;\n  color: #fff;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all 0.5s;\n}\n\n\n\n.restant[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  color: #666;\n  margin-top: 4px;\n}\n\nselect.input_focus[_ngcontent-%COMP%] {\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 10px center;\n  background-size: 16px;\n}\n\n\n\n.paiement_title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.statut-badge[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  margin-bottom: 8px;\n  border-radius: 20px;\n  font-size: 10px;\n  font-weight: 500;\n  transform: translateX(-1px);\n}\n.statut-badge.payee[_ngcontent-%COMP%] {\n  background-color: #e3fcef;\n  color: #0e9f6e;\n}\n.statut-badge.partiel[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #d97706;\n}\n.statut-badge.attente[_ngcontent-%COMP%] {\n  background-color: #fde8e8;\n  color: #f05252;\n}\n\n.historique-container[_ngcontent-%COMP%] {\n  max-height: 500px;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.historique-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 2px;\n  height: 2px;\n}\n.historique-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n}\n.historique-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: #6b7280;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  display: block;\n  margin-bottom: 10px;\n}\n\n.paiement-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);\n  padding: 15px;\n  margin-bottom: 12px;\n  border-left: 3px solid #0672E4;\n  transition: all 0.3s ease;\n}\n.paiement-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);\n}\n.paiement-card[_ngcontent-%COMP%]   .paiement-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.paiement-card[_ngcontent-%COMP%]   .paiement-header[_ngcontent-%COMP%]   .montant[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n  font-size: 12px;\n}\n.paiement-card[_ngcontent-%COMP%]   .paiement-header[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.9rem;\n  font-size: 10px;\n}\n.paiement-card[_ngcontent-%COMP%]   .paiement-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  font-size: 0.9rem;\n  color: #4b5563;\n}\n.paiement-card[_ngcontent-%COMP%]   .paiement-details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.paiement-card[_ngcontent-%COMP%]   .paiement-details[_ngcontent-%COMP%]   .mode[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.paiement-card[_ngcontent-%COMP%]   .paiement-details[_ngcontent-%COMP%]   .encaisse[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.success-message[_ngcontent-%COMP%], .error-message[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 8px;\n  font-size: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n.success-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child, .error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  margin-right: 10px;\n  font-size: 1.2rem;\n}\n.success-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:last-child, .error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:last-child {\n  margin-left: 10px;\n  cursor: pointer;\n  opacity: 0.7;\n}\n.success-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:last-child:hover, .error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:last-child:hover {\n  opacity: 1;\n}\n\n.content_btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.success-message[_ngcontent-%COMP%] {\n  background-color: #e3fcef;\n  color: #0e9f6e;\n  border: 1px solid #a7f3d0;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  background-color: #fde8e8;\n  color: #f05252;\n  border: 1px solid #fecaca;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.text-green[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n\n.text-blue[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n\n.text-purple[_ngcontent-%COMP%] {\n  color: #6f42c1;\n}\n\n.text-navy[_ngcontent-%COMP%] {\n  color: #001f3f;\n}\n\n.text-orange[_ngcontent-%COMP%] {\n  color: #fd7e14;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\n.content_header[_ngcontent-%COMP%] {\n  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;\n  width: 100%;\n  margin-bottom: 10px;\n  position: sticky;\n  top: 0;\n}\n\n.total_montant[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.total_montant[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n}\n\n.total_montant_logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.content_footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n  padding: 12px;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  flex-wrap: wrap;\n  padding-bottom: 0px;\n  background-color: #fff;\n  padding-top: 10px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px -2px 2px 0px;\n}\n\n.download_icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.total_montant[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.total_logo_virement[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.total_montant_logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.total_montant_logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 500;\n  text-align: right;\n}\n\n.text-green[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n\n.text-blue[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n\n.text-purple[_ngcontent-%COMP%] {\n  color: #6f42c1;\n}\n\n.text-navy[_ngcontent-%COMP%] {\n  color: #001f3f;\n}\n\n.text-orange[_ngcontent-%COMP%] {\n  color: #fd7e14;\n}\n\n.status-confirmation-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.283);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n.status-confirmation-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  border-radius: 1rem;\n  padding: 1.5rem;\n  width: 90%;\n  max-width: 350px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  text-align: center;\n  animation: _ngcontent-%COMP%_popUp 0.25s ease-in-out;\n}\n.status-confirmation-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 0.75rem;\n  color: #222;\n}\n.status-confirmation-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-bottom: 1.25rem;\n  color: #555;\n}\n.status-confirmation-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .highlighted-status[_ngcontent-%COMP%] {\n  background-color: #e7f1ff;\n  color: #007bff;\n  padding: 0.2rem 0.5rem;\n  border-radius: 0.4rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.status-confirmation-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5rem;\n  margin-bottom: 1.25rem;\n}\n.status-confirmation-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.85rem;\n  color: #444;\n}\n.status-confirmation-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=datetime-local][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.6rem 0.85rem;\n  font-size: 0.95rem;\n  font-weight: 500;\n  font-family: inherit;\n  color: #2c3e50;\n  background-color: #fdfdfd;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  outline: none;\n  transition: all 0.25s ease;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.status-confirmation-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=datetime-local][_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n  font-weight: 400;\n}\n.status-confirmation-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=datetime-local][_ngcontent-%COMP%]:hover {\n  border-color: #7aaef7;\n  background-color: #fcfcfc;\n}\n.status-confirmation-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=datetime-local][_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  background-color: #fff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);\n}\n.status-confirmation-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=datetime-local][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  filter: invert(0.5);\n  cursor: pointer;\n  -webkit-transition: filter 0.3s;\n  transition: filter 0.3s;\n  margin-left: 4px;\n}\n.status-confirmation-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=datetime-local][_ngcontent-%COMP%]:hover::-webkit-calendar-picker-indicator {\n  filter: invert(0.2);\n}\n.status-confirmation-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.status-confirmation-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.5rem 0;\n  font-size: 0.95rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.25s, transform 0.1s;\n}\n.status-confirmation-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #e4e4e4;\n  color: #333;\n}\n.status-confirmation-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #d4d4d4;\n}\n.status-confirmation-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n}\n.status-confirmation-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n.status-confirmation-popup[_ngcontent-%COMP%]   .popup-content[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_popUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(20);\n    opacity: 1;\n  }\n}\n\n\n.user-badges-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n\n.user-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 4px 8px;\n  border-radius: 6px;\n  background: #fff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  border: 1px solid #e0e0e0;\n  transition: all 0.2s ease;\n}\n.user-badge[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.user-badge[_ngcontent-%COMP%]   .badge-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n.user-badge[_ngcontent-%COMP%]   .badge-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.user-badge[_ngcontent-%COMP%]   .badge-label[_ngcontent-%COMP%] {\n  font-size: 8px;\n  font-weight: 500;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 2px;\n}\n.user-badge[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #333;\n}\n.user-badge[_ngcontent-%COMP%]   .dateC[_ngcontent-%COMP%] {\n  font-size: 8px;\n  display: flex;\n  justify-content: center;\n}\n\n\n\n.user-badge.creator[_ngcontent-%COMP%] {\n  border-left: 3px solid #0672e4;\n}\n.user-badge.creator[_ngcontent-%COMP%]   .badge-icon[_ngcontent-%COMP%] {\n  background: rgba(78, 115, 255, 0.1);\n  color: #4e73ff;\n}\n\n\n\n.user-badge.validator[_ngcontent-%COMP%] {\n  border-left: 3px solid #00c853;\n}\n.user-badge.validator[_ngcontent-%COMP%]   .badge-icon[_ngcontent-%COMP%] {\n  background: rgba(0, 200, 83, 0.1);\n  color: #00c853;\n}\n\n\n\n@media (max-width: 600px) {\n  .user-badges-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n}\n.statut_paiement[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -23px;\n  top: 5px;\n  transform: rotate(45deg);\n  background-color: #fef1df;\n  width: 101px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.cadre_name_paiement[_ngcontent-%COMP%] {\n  color: orange;\n  padding: 5px 15px;\n  text-transform: uppercase;\n  font-size: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3R1cmUtcmVlbC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUFHLFNBQUE7QUFHSDs7QUFGQTtFQUFJLFNBQUE7QUFNSjs7QUFVQTtFQVFFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBZEY7O0FBaUJBO0VBQ0ksdUJBQUE7QUFkSjs7QUFrQkE7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0FBZko7O0FBa0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVEQUFBO0VBQ0EsNEJBQUE7QUFmRjs7QUF1Q0E7RUFDSSxlQUFBO0FBcENKOztBQXdDQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSw2Q0FBQTtBQXJDSjs7QUEyQ0E7RUFDRSxXQUFBO0FBeENGOztBQTJDQTtFQUNFLFdBQUE7RUFFQSxzQkFBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7QUF6Q0Y7O0FBNENBO0VBQ0UsV0FBQTtFQUVBLHNCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtBQTFDRjs7QUE2Q0E7RUFDSSxhQUFBO0FBMUNKOztBQTZDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBMUNKOztBQTZDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBMUNKOztBQXFEQTtFQUNJLGVBQUE7QUFsREo7O0FBcURBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWxESjs7QUFxREE7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBbERKOztBQXFEQTtFQUNFLDBCQUFBO0FBbERGOztBQXFEQTs7RUFHSSxnQkFBQTtBQW5ESjs7QUF1REE7RUFDSSxhQUFBO0FBcERKOztBQXlEQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBdERKOztB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LGNBQUE7QUF0Sko7O0FBMEpBLGVBQUE7QUFDQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxRQUFBO0VBdkpGO0FBQ0Y7QUEwSkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF4SkY7O0FBMkpBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUF4SkYiLCJmaWxlIjoiZmFjdHVyZS1yZWVsLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHttYXJnaW46IDA7fVxuaDQge21hcmdpbjogMDt9XG5cbi8vIC5jb250YWluZXJfZ2xvYmFsIHtcbi8vICAgICAvLyBtYXJnaW4tcmlnaHQ6IDIwJTtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gfVxuXG5cblxuLy8gLmNvbnRhaW5lcl9nbG9iYWwge1xuLy8gICBkaXNwbGF5OiBncmlkO1xuLy8gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vIH1cblxuLmNvbnRhaW5lcl9nbG9iYWwge1xuICAvLyBkaXNwbGF5OiBncmlkO1xuICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAvLyBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgLy8gZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gIC8vIGdyaWQtcm93LWdhcDogMHB4O1xuICAvLyBnYXA6IDE1cHg7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kaXYxIHtcbiAgICBncmlkLXJvdzogc3BhbiAyIC8gc3BhbiAyO1xufVxuXG5cbi5kaXYzIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLXJvdy1zdGFydDogMjtcbn1cblxuLmNhZHJlX3JldG91ciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzYzNjM2MyOTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTVweDtcbiAgXG59XG5cbi8vIC5idG5fYWpvdXRlciBwIHtcbi8vICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyAgIGZvbnQtc2l6ZTogMTRweDsgXG4vLyAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4vLyB9XG5cbi8vIC5yZXRvdXJfaWNvbiBpIHtcbi8vICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyB9XG5cbi8vIC5idG5fYWpvdXRlciAuYnRuX3NhdmUge1xuLy8gICBib3JkZXI6IG5vbmU7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICBjb2xvcjogIzA2NzJFNDtcbi8vICAgZm9udC1zaXplOiAxNXB4O1xuLy8gfVxuXG4uY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4vLyBjYWRyZSBpbmZvcm1hdGlvblxuLmluZm9ybWF0aW9uX2NhZHJlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTA4KTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLy8gbWFyZ2luLXRvcDogMjBweDtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29sdW1uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbmZvcm1hdGlvbl9jYWRyZV9yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgLy8gaGVpZ2h0OiAyMiU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTA4KTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmluZm9ybWF0aW9uX2NhZHJlX3Jvd19saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIGhlaWdodDogNjQlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pbmZvX3RpdHJlX2lucHV0IHtcbiAgICBwYWRkaW5nOiAyMHB4OyBcbn1cblxuLmhlYWRlcl9hcGVyY3Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sb2dvX2VudHJlcHJpc2Uge1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gZW50ZXRlX2VudHJlcHJpc2VcblxuLmVudGV0ZV9lbnRyZXByaXNlIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5sb2dvX2VudHJlcHJpc2UgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uY29udGVudF9lbnRldGUgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41MHB4O1xufVxuXG4uY29udGVudF9lbnRldGUgLnBhcmEzIHtcbiAgZm9udC1zaXplOiAxMHB4IWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnRfZW50ZXRlIC5wYXJhMSxcbi5jb250ZW50X2VudGV0ZSAucGFyYTJcbntcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vIExpZ25lXG5ociB7XG4gICAgbWFyZ2luOiAzcHggMDtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8gVGlyZVxuXG4udGl0cmUgaDIge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLmRhdGUgcCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kcm9pdCxcbi5vYmplY3RcbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAvLyBtYXJnaW4tbGVmdDogMzdweDtcbn1cblxuLmRyb2l0IGg0LFxuLm9iamVjdCBoNCBcbntcbiAgICAvLyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idG5fZXRhdCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgLy8gcGFkZGluZzogNnB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbiAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xuICAvLyB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjJzO1xufVxuXG4vLyAuYnRuX2V0YXQ6aG92ZXIge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlENDIxO1xuLy8gICBjb2xvcjogIzAwMDtcbi8vIH1cblxuLmJ0bl9ldGF0X2FubnVsZXIge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZjAwMDA7XG59XG5cbi5idG5fZXRhdF9hbm51bGVyOmhvdmVyIHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2NiMDUwNSFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZTIwNTA1O1xufVxuXG4uZHJvaXQgcCxcbi5vYmplY3QgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcblxufVxuXG4uaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICBtYXJnaW46IDA7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG50YWJsZSB7XG4gICAgLy8gd2lkdGg6IDkwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIC8vIG1hcmdpbjogMjBweCAzN3B4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxudGgsIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIHBhZGRpbmc6IDhweCAycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLnRvdGFsLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnRvdGFsLWxpbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogOHB4IDA7XG59XG5cbi5ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlcGFyYXRvciB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMzMzM7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbnRkLnRhYmxlX3RkXzEge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxudGQudGFibGVfdGQge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIC8vIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi50YWJsZV90ZF9kZXNjcmlwdG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZC50ZF9sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNvbnRlbnVfYm90dG9tIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgLy8gbWFyZ2luLWxlZnQ6IDM3cHg7XG59XG5cbi5mb290ZXJfY29udGFpbmVyMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDIwcHggNDBweDtcbn1cblxuLyogTGlnbmUgZHUgaGF1dCA6IGFjcXVpdCDDoCBnYXVjaGUsIG5vbSDDoCBkcm9pdGUgKi9cbi5saWduZV9oYXV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmFjcXVpcyBoNixcbi5zaWduYXRhaXJlX2hlYWRlciBoNiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBCbG9jIHNpZ25hdHVyZSBlbiBkZXNzb3VzIGR1IG5vbSwgYWxpZ27DqSDDoCBkcm9pdGUgKi9cbi5zaWduYXR1cmVfYmxvYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgLy8gbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNpZ25hdHVyTnVtIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDgwcHg7IFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaWduYXR1ck51bSAuaW1nIHtcbiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMjElO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi8qIENhY2hldCBwYXItZGVzc3VzICovXG4uc2lnbmF0dXJOdW0gLmNhY2hldE51bSB7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiA2MXB4O1xuICAgIHdpZHRoOiAxNTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHotaW5kZXg6IDI7XG4gICAgb3BhY2l0eTogMC43OyBcbn1cblxuLm5hbWVfZGlyZWN0ZXVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAxMnB4O1xuICB6LWluZGV4OiA5O1xufVxuXG5cblxuXG5cbi5jb250YWluZXJfZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb290ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA0NXB4O1xuICAgIHdpZHRoOiA5NiU7XG59XG5cbi5mb290ZXIgcCB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbn1cblxuLmZvb3RlciBwIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZm9vdGVyIGVtIHtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cblxuXG5cblxuXG4vKiBTdHlsZXMgZGUgYmFzZSAqL1xuLmZhY3R1cmUtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDIxMG1tOyAvKiBGb3JtYXQgQTQgKi9cbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xuICBcbiAgICAubG9hZGluZy1vdmVybGF5IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICBcbiAgICAgIC5zcGlubmVyIHtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgI2YzZjNmMztcbiAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMzNDk4ZGI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGMzNTQ1O1xuICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuICB9XG4gIFxuICAvKiBFbi10w6p0ZSAqL1xuICAuZmFjdHVyZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAvLyBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMzMztcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgXG4gICAgLmNvbXBhbnktaW5mbyB7XG4gICAgICBoMSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgfVxuICAgICAgXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzdmOGM4ZDtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5mYWN0dXJlLW1ldGEge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBcbiAgICAgIC5mYWN0dXJlLW51bWJlciB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmZhY3R1cmUtZGF0ZSB7XG4gICAgICAgIGNvbG9yOiAjN2Y4YzhkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLyogU2VjdGlvbiBjbGllbnQgKi9cbiAgLmNsaWVudC1pbmZvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIFxuICAgIGgzIHtcbiAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIH1cbiAgICBcbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cbiAgfVxuICBcbiAgLyogVGFibGVhdSBkZXMgcHJvZHVpdHMgKi9cbiAgLnByb2R1Y3RzLXNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIFxuICAgIHRhYmxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgIFxuICAgICAgdGgsIHRkIHtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2YwZjE7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAgICAgY29sb3I6ICMyYzNlNTA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRyOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC8qIFRvdGFsICovXG4gIC50b3RhbHMtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgXG4gICAgLnRvdGFsLWxpbmUge1xuICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICBcbiAgICAgIHNwYW46Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjN2Y4YzhkO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmLmdyYW5kLXRvdGFsIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgfVxuICAgIH1cbn1cblxuLmljb25fcHJpbnRlciB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmljb25fcHJpbnRlciBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYWllbWVudF90aXRsZSBoNSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmdyaWRfY29sb25uZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gIGdhcDogMTVweDtcbn1cblxuLyogZm9ybXVsYWlyZSAqL1xuICBcbiAgLmNoYW1wX2lucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0X2xpc3Rfc3RvY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLmNoYW1wX2lucHV0IC50aXRsZV9pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTE4cHg7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dF9DYXRlZ29yaWUge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1xuICB9XG4gIFxuICAuZm9ybXVsYWlyZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuVGl0bGUgaDMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvL21pbi13aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA0OXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvL3BhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjNjk1YzVjO1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQgLmxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb2xvcjogcmdiKDEwNywgMTAyLCAxMDIpO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIFxuICBcbiAgLmlucHV0X2ZvY3VzOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuICAuaW5wdXRfZm9jdXM6Zm9jdXMgKyAubGFiZWwge1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC8vIGJ1dHRvbiBham91dGVyIFxuXG4uYnRuX2Fqb3V0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlIHtcbiAgcGFkZGluZzogOHB4IDMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLy8gYnV0dG9uIGFqb3V0ZXIgaG92ZXJcbi5idG5fYWpvdXRlciAuYnRuX3NhdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4vKiBTdHlsZXMgcG91ciBsZSBmb3JtdWxhaXJlICovXG4ucmVzdGFudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuc2VsZWN0LmlucHV0X2ZvY3VzIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCclM0UlM0NwYXRoIGQ9J003IDEwbDUgNSA1LTV6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxMHB4IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxNnB4O1xufVxuXG4vKiBTdHlsZXMgcG91ciBsJ2hpc3RvcmlxdWUgKi9cbi5wYWllbWVudF90aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN0YXR1dC1iYWRnZSB7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcHgpO1xuICAmLnBheWVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmY2VmO1xuICAgIGNvbG9yOiAjMGU5ZjZlO1xuICB9XG4gIFxuICAmLnBhcnRpZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWYzYzc7XG4gICAgY29sb3I6ICNkOTc3MDY7XG4gIH1cbiAgXG4gICYuYXR0ZW50ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZThlODtcbiAgICBjb2xvcjogI2YwNTI1MjtcbiAgfVxufVxuXG4uaGlzdG9yaXF1ZS1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMTBweDtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDJweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAvLyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuLmVtcHR5LXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBjb2xvcjogIzZiNzI4MDtcbiAgXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG5cbi5wYWllbWVudC1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzA2NzJFNDtcbiAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLDAuMSk7XG4gIH1cbiAgXG4gIC5wYWllbWVudC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBcbiAgICAubW9udGFudCB7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIFxuICAgIC5kYXRlIHtcbiAgICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICB9XG4gIFxuICAucGFpZW1lbnQtZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE1cHg7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6ICM0YjU1NjM7XG4gICAgXG4gICAgZGl2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA1cHg7XG4gICAgfVxuXG4gICAgLm1vZGUge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgIC5lbmNhaXNzZSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG59XG5cbi8vIC5tZXNzYWdlLWNvbnRhaW5lciB7XG4vLyAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4vLyB9XG5cbi5zdWNjZXNzLW1lc3NhZ2UsIC5lcnJvci1tZXNzYWdlIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8vIG1hcmdpbi1ib3R0b206IDBweDtcbiAgLy8gbWFyZ2luLXRvcDogMjBweDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlO1xuICBcbiAgaTpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG4gIFxuICBpOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxufVxuXG4uY29udGVudF9idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zdWNjZXNzLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmY2VmO1xuICBjb2xvcjogIzBlOWY2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E3ZjNkMDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlOGU4O1xuICBjb2xvcjogI2YwNTI1MjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZlY2FjYTtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG4udGV4dC1ncmVlbiB7IGNvbG9yOiAjMjhhNzQ1OyB9XG4udGV4dC1ibHVlIHsgY29sb3I6ICMwMDdiZmY7IH1cbi50ZXh0LXB1cnBsZSB7IGNvbG9yOiAjNmY0MmMxOyB9XG4udGV4dC1uYXZ5IHsgY29sb3I6ICMwMDFmM2Y7IH1cbi50ZXh0LW9yYW5nZSB7IGNvbG9yOiAjZmQ3ZTE0OyB9XG4udGV4dC1ncmF5IHsgY29sb3I6ICM2Yzc1N2Q7IH1cblxuLmNvbnRlbnRfaGVhZGVyIHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3gtc2hhZG93OiByZ2JhKDMzLCAzNSwgMzgsIDAuMSkgMHB4IDEwcHggMTBweCAtMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG59XG5cbi50b3RhbF9tb250YW50IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRvdGFsX21vbnRhbnQgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4vLyAuY29udGVudF9mb290ZXIge1xuLy8gICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuLy8gICBwYWRkaW5nLXRvcDogMTBweDtcbi8vICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggLTJweCAycHggMHB4XG4vLyB9XG5cbi50b3RhbF9tb250YW50X2xvZ28gcCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmNvbnRlbnRfZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggLTJweCAycHggMHB4XG59XG5cbi5kb3dubG9hZF9pY29uIGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvdGFsX21vbnRhbnQge1xuICBmb250LXdlaWdodDogNjAwO1xuICAvLyBtaW4td2lkdGg6IDEyMHB4O1xufVxuXG4udG90YWxfbG9nb192aXJlbWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4udG90YWxfbW9udGFudF9sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIFxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAvLyBtaW4td2lkdGg6IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cblxuLy8gQ2xhc3NlcyBkZSBjb3VsZXVyXG4udGV4dC1ncmVlbiB7IGNvbG9yOiAjMjhhNzQ1OyB9XG4udGV4dC1ibHVlIHsgY29sb3I6ICMwMDdiZmY7IH1cbi50ZXh0LXB1cnBsZSB7IGNvbG9yOiAjNmY0MmMxOyB9XG4udGV4dC1uYXZ5IHsgY29sb3I6ICMwMDFmM2Y7IH1cbi50ZXh0LW9yYW5nZSB7IGNvbG9yOiAjZmQ3ZTE0OyB9XG5cbi5zdGF0dXMtY29uZmlybWF0aW9uLXBvcHVwIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaW5zZXQ6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI4Myk7XG4gICAgLy8gYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlLW91dDtcbiAgXG4gICAgLnBvcHVwLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBhbmltYXRpb246IHBvcFVwIDAuMjVzIGVhc2UtaW4tb3V0O1xuICBcbiAgICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgIH1cbiAgXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgIH1cblxuICAgICAgLmhpZ2hsaWdodGVkLXN0YXR1cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2YxZmY7XG4gICAgICAgIGNvbG9yOiAjMDA3YmZmO1xuICAgICAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuICBcbiAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGdhcDogMC41cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICBcbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICB9XG4gIFxuICAgICAgICBpbnB1dFt0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIl0ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNnJlbSAwLjg1cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QxZDVkYjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgICAgICAgXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgIFxuICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOWNhM2FmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjN2FhZWY3O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcbiAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDEyMywgMjU1LCAwLjIpO1xuICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgJjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDAuNSk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4zcztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAmOmhvdmVyOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMC4yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9XG4gIFxuICAgICAgLnBvcHVwLWFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGdhcDogMC43NXJlbTtcbiAgXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjI1cywgdHJhbnNmb3JtIDAuMXM7XG4gIFxuICAgICAgICAgICYuYnRuLXNlY29uZGFyeSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICAmLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcG9wVXAge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIFxuXG4gIC8qIFN0eWxlIHBvdXIgbGVzIGJhZGdlcyB1dGlsaXNhdGV1cnMgKi9cbi51c2VyLWJhZGdlcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gXG59XG5cbi51c2VyLWJhZGdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuICBcbiAgLmJhZGdlLWljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICBcbiAgLmJhZGdlLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgLmJhZGdlLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgfVxuICBcbiAgLnVzZXItbmFtZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMzMzM7XG4gIFxuICB9XG4gICAgLmRhdGVDe1xuICAgICAgZm9udC1zaXplOiA4cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBcbiAgICB9XG59XG5cbi8qIFN0eWxlIHNww6ljaWZpcXVlIHBvdXIgbGUgY3LDqWF0ZXVyICovXG4udXNlci1iYWRnZS5jcmVhdG9yIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMDY3MmU0OyBcbiAgXG4gIC5iYWRnZS1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDc4LCAxMTUsIDI1NSwgMC4xKTtcbiAgICBjb2xvcjogIzRlNzNmZjtcbiAgfVxufVxuXG4vKiBTdHlsZSBzcMOpY2lmaXF1ZSBwb3VyIGxlIHZhbGlkYXRldXIgKi9cbi51c2VyLWJhZGdlLnZhbGlkYXRvciB7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzAwYzg1MztcbiAgXG4gIC5iYWRnZS1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDIwMCwgODMsIDAuMSk7XG4gICAgY29sb3I6ICMwMGM4NTM7XG4gIH1cbn1cblxuLyogUmVzcG9uc2l2ZSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC51c2VyLWJhZGdlcy1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4cHg7XG4gIH1cbn1cblxuLnN0YXR1dF9wYWllbWVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0yM3B4O1xuICB0b3A6IDVweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmMWRmO1xuICB3aWR0aDogMTAxcHg7XG4gIGhlaWdodDogMzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYWRyZV9uYW1lX3BhaWVtZW50IHtcbiAgY29sb3I6IG9yYW5nZTtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9mYWN0dXJlLXJlZWwvZmFjdHVyZS1yZWVsLWRldGFpbHMvZmFjdHVyZS1yZWVsLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQUcsU0FBQTtBQUdIOztBQUZBO0VBQUksU0FBQTtBQU1KOztBQVVBO0VBUUUsYUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFkRjs7QUFpQkE7RUFDSSx1QkFBQTtBQWRKOztBQWtCQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7QUFmSjs7QUFrQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdURBQUE7RUFDQSw0QkFBQTtBQWZGOztBQXVDQTtFQUNJLGVBQUE7QUFwQ0o7O0FBd0NBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDZDQUFBO0FBckNKOztBQTJDQTtFQUNFLFdBQUE7QUF4Q0Y7O0FBMkNBO0VBQ0UsV0FBQTtFQUVBLHNCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtBQXpDRjs7QUE0Q0E7RUFDRSxXQUFBO0VBRUEsc0JBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0FBMUNGOztBQTZDQTtFQUNJLGFBQUE7QUExQ0o7O0FBNkNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUExQ0o7O0FBNkNBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUExQ0o7O0FBcURBO0VBQ0ksZUFBQTtBQWxESjs7QUFxREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBbERKOztBQXFEQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFsREo7O0FBcURBO0VBQ0UsMEJBQUE7QUFsREY7O0FBcURBOztFQUdJLGdCQUFBO0FBbkRKOztBQXVEQTtFQUNJLGFBQUE7QUFwREo7O0FB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QUE7QUFySko7O0FBeUpBLHdDQUFBO0FBQ0E7RUFDRSw4QkFBQTtBQXRKRjtBQXdKRTtFQUNFLGlDQUFBO0VBQ0EsY0FBQTtBQXRKSjs7QUEwSkEsZUFBQTtBQUNBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLFFBQUE7RUF2SkY7QUFDRjtBQTBKQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXhKRjs7QUEySkE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXhKRjtBQUVBLHc2dUNBQXc2dUMiLCJzb3VyY2VzQ29udGVudCI6WyJwIHttYXJnaW46IDA7fVxuaDQge21hcmdpbjogMDt9XG5cbi8vIC5jb250YWluZXJfZ2xvYmFsIHtcbi8vICAgICAvLyBtYXJnaW4tcmlnaHQ6IDIwJTtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gfVxuXG5cblxuLy8gLmNvbnRhaW5lcl9nbG9iYWwge1xuLy8gICBkaXNwbGF5OiBncmlkO1xuLy8gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vIH1cblxuLmNvbnRhaW5lcl9nbG9iYWwge1xuICAvLyBkaXNwbGF5OiBncmlkO1xuICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAvLyBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgLy8gZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gIC8vIGdyaWQtcm93LWdhcDogMHB4O1xuICAvLyBnYXA6IDE1cHg7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kaXYxIHtcbiAgICBncmlkLXJvdzogc3BhbiAyIC8gc3BhbiAyO1xufVxuXG5cbi5kaXYzIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLXJvdy1zdGFydDogMjtcbn1cblxuLmNhZHJlX3JldG91ciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzYzNjM2MyOTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTVweDtcbiAgXG59XG5cbi8vIC5idG5fYWpvdXRlciBwIHtcbi8vICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyAgIGZvbnQtc2l6ZTogMTRweDsgXG4vLyAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4vLyB9XG5cbi8vIC5yZXRvdXJfaWNvbiBpIHtcbi8vICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyB9XG5cbi8vIC5idG5fYWpvdXRlciAuYnRuX3NhdmUge1xuLy8gICBib3JkZXI6IG5vbmU7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICBjb2xvcjogIzA2NzJFNDtcbi8vICAgZm9udC1zaXplOiAxNXB4O1xuLy8gfVxuXG4uY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4vLyBjYWRyZSBpbmZvcm1hdGlvblxuLmluZm9ybWF0aW9uX2NhZHJlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTA4KTtcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLy8gbWFyZ2luLXRvcDogMjBweDtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29sdW1uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbmZvcm1hdGlvbl9jYWRyZV9yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgLy8gaGVpZ2h0OiAyMiU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTA4KTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmluZm9ybWF0aW9uX2NhZHJlX3Jvd19saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIGhlaWdodDogNjQlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pbmZvX3RpdHJlX2lucHV0IHtcbiAgICBwYWRkaW5nOiAyMHB4OyBcbn1cblxuLmhlYWRlcl9hcGVyY3Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sb2dvX2VudHJlcHJpc2Uge1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gZW50ZXRlX2VudHJlcHJpc2VcblxuLmVudGV0ZV9lbnRyZXByaXNlIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5sb2dvX2VudHJlcHJpc2UgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uY29udGVudF9lbnRldGUgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41MHB4O1xufVxuXG4uY29udGVudF9lbnRldGUgLnBhcmEzIHtcbiAgZm9udC1zaXplOiAxMHB4IWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnRfZW50ZXRlIC5wYXJhMSxcbi5jb250ZW50X2VudGV0ZSAucGFyYTJcbntcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vIExpZ25lXG5ociB7XG4gICAgbWFyZ2luOiAzcHggMDtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8gVGlyZVxuXG4udGl0cmUgaDIge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLmRhdGUgcCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kcm9pdCxcbi5vYmplY3RcbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAvLyBtYXJnaW4tbGVmdDogMzdweDtcbn1cblxuLmRyb2l0IGg0LFxuLm9iamVjdCBoNCBcbntcbiAgICAvLyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idG5fZXRhdCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgLy8gcGFkZGluZzogNnB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbiAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xuICAvLyB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjJzO1xufVxuXG4vLyAuYnRuX2V0YXQ6aG92ZXIge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlENDIxO1xuLy8gICBjb2xvcjogIzAwMDtcbi8vIH1cblxuLmJ0bl9ldGF0X2FubnVsZXIge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZjAwMDA7XG59XG5cbi5idG5fZXRhdF9hbm51bGVyOmhvdmVyIHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2NiMDUwNSFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZTIwNTA1O1xufVxuXG4uZHJvaXQgcCxcbi5vYmplY3QgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcblxufVxuXG4uaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICBtYXJnaW46IDA7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG50YWJsZSB7XG4gICAgLy8gd2lkdGg6IDkwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIC8vIG1hcmdpbjogMjBweCAzN3B4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxudGgsIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIHBhZGRpbmc6IDhweCAycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLnRvdGFsLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnRvdGFsLWxpbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogOHB4IDA7XG59XG5cbi5ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlcGFyYXRvciB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMzMzM7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbnRkLnRhYmxlX3RkXzEge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxudGQudGFibGVfdGQge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIC8vIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi50YWJsZV90ZF9kZXNjcmlwdG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZC50ZF9sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNvbnRlbnVfYm90dG9tIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgLy8gbWFyZ2luLWxlZnQ6IDM3cHg7XG59XG5cbi5mb290ZXJfY29udGFpbmVyMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDIwcHggNDBweDtcbn1cblxuLyogTGlnbmUgZHUgaGF1dCA6IGFjcXVpdCDDg8KgIGdhdWNoZSwgbm9tIMODwqAgZHJvaXRlICovXG4ubGlnbmVfaGF1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5hY3F1aXMgaDYsXG4uc2lnbmF0YWlyZV9oZWFkZXIgaDYge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogQmxvYyBzaWduYXR1cmUgZW4gZGVzc291cyBkdSBub20sIGFsaWduw4PCqSDDg8KgIGRyb2l0ZSAqL1xuLnNpZ25hdHVyZV9ibG9jIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2lnbmF0dXJOdW0ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogODBweDsgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNpZ25hdHVyTnVtIC5pbWcge1xuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEyMSU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgei1pbmRleDogMTtcbn1cblxuLyogQ2FjaGV0IHBhci1kZXNzdXMgKi9cbi5zaWduYXR1ck51bSAuY2FjaGV0TnVtIHtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDYxcHg7XG4gICAgd2lkdGg6IDE1MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgei1pbmRleDogMjtcbiAgICBvcGFjaXR5OiAwLjc7IFxufVxuXG4ubmFtZV9kaXJlY3RldXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDEycHg7XG4gIHotaW5kZXg6IDk7XG59XG5cblxuXG5cblxuLmNvbnRhaW5lcl9mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDQ1cHg7XG4gICAgd2lkdGg6IDk2JTtcbn1cblxuLmZvb3RlciBwIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xufVxuXG4uZm9vdGVyIHAgc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mb290ZXIgZW0ge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuXG5cblxuXG5cbi8qIFN0eWxlcyBkZSBiYXNlICovXG4uZmFjdHVyZS1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMjEwbW07IC8qIEZvcm1hdCBBNCAqL1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XG4gIFxuICAgIC5sb2FkaW5nLW92ZXJsYXkge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgIFxuICAgICAgLnNwaW5uZXIge1xuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzO1xuICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgIzM0OThkYjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDU7XG4gICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gIH1cbiAgXG4gIC8qIEVuLXTDg8KqdGUgKi9cbiAgLmZhY3R1cmUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMzM7XG4gICAgLy8gcGFkZGluZy1ib3R0b206IDFyZW07XG4gIFxuICAgIC5jb21wYW55LWluZm8ge1xuICAgICAgaDEge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICM3ZjhjOGQ7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAuZmFjdHVyZS1tZXRhIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgXG4gICAgICAuZmFjdHVyZS1udW1iZXIge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICMyYzNlNTA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5mYWN0dXJlLWRhdGUge1xuICAgICAgICBjb2xvcjogIzdmOGM4ZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC8qIFNlY3Rpb24gY2xpZW50ICovXG4gIC5jbGllbnQtaW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBcbiAgICBoMyB7XG4gICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICB9XG4gICAgXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC8qIFRhYmxlYXUgZGVzIHByb2R1aXRzICovXG4gIC5wcm9kdWN0cy1zZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBcbiAgICB0YWJsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICBcbiAgICAgIHRoLCB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNmMGYxO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0cjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvKiBUb3RhbCAqL1xuICAudG90YWxzLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIFxuICAgIC50b3RhbC1saW5lIHtcbiAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgXG4gICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzdmOGM4ZDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJi5ncmFuZC10b3RhbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgIH1cbiAgICB9XG59XG5cbi5pY29uX3ByaW50ZXIge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5pY29uX3ByaW50ZXIgaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGFpZW1lbnRfdGl0bGUgaDUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ncmlkX2NvbG9ubmUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gIGdyaWQtcm93LWdhcDogMHB4O1xuICBnYXA6IDE1cHg7XG59XG5cbi8qIGZvcm11bGFpcmUgKi9cbiAgXG4gIC5jaGFtcF9pbnB1dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dF9saXN0X3N0b2NrIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5jaGFtcF9pbnB1dCAudGl0bGVfaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xOHB4O1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfQ2F0ZWdvcmllIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4IWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmZvcm11bGFpcmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLlRpdGxlIGgzIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy9taW4td2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNDlweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLy9wYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzY5NWM1YztcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0IC5sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjJweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6IHJnYigxMDcsIDEwMiwgMTAyKTtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuICBcbiAgXG4gIC5pbnB1dF9mb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbiAgLmlucHV0X2ZvY3VzOmZvY3VzICsgLmxhYmVsIHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAvLyBidXR0b24gYWpvdXRlciBcblxuLmJ0bl9ham91dGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmJ0bl9ham91dGVyIC5idG5fc2F2ZSB7XG4gIHBhZGRpbmc6IDhweCAzMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8vIGJ1dHRvbiBham91dGVyIGhvdmVyXG4uYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuLyogU3R5bGVzIHBvdXIgbGUgZm9ybXVsYWlyZSAqL1xuLnJlc3RhbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjNjY2O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbnNlbGVjdC5pbnB1dF9mb2N1cyB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnJTNFJTNDcGF0aCBkPSdNNyAxMGw1IDUgNS01eicvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTBweCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMTZweDtcbn1cblxuLyogU3R5bGVzIHBvdXIgbCdoaXN0b3JpcXVlICovXG4ucGFpZW1lbnRfdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdGF0dXQtYmFkZ2Uge1xuICBwYWRkaW5nOiA1cHggMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KTtcbiAgJi5wYXllZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZmNlZjtcbiAgICBjb2xvcjogIzBlOWY2ZTtcbiAgfVxuICBcbiAgJi5wYXJ0aWVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmM2M3O1xuICAgIGNvbG9yOiAjZDk3NzA2O1xuICB9XG4gIFxuICAmLmF0dGVudGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGU4ZTg7XG4gICAgY29sb3I6ICNmMDUyNTI7XG4gIH1cbn1cblxuLmhpc3RvcmlxdWUtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAycHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLy8gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbi5lbXB0eS1zdGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6ICM2YjcyODA7XG4gIFxuICBpIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuXG4ucGFpZW1lbnQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsMCwwLDAuMDUpO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwNjcyRTQ7XG4gICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLDAsMCwwLjEpO1xuICB9XG4gIFxuICAucGFpZW1lbnQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgXG4gICAgLm1vbnRhbnQge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMWYyOTM3O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICBcbiAgICAuZGF0ZSB7XG4gICAgICBjb2xvcjogIzZiNzI4MDtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLnBhaWVtZW50LWRldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGNvbG9yOiAjNGI1NTYzO1xuICAgIFxuICAgIGRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNXB4O1xuICAgIH1cblxuICAgIC5tb2RlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG5cbiAgICAuZW5jYWlzc2Uge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyAubWVzc2FnZS1jb250YWluZXIge1xuLy8gICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuLy8gfVxuXG4uc3VjY2Vzcy1tZXNzYWdlLCAuZXJyb3ItbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAvLyBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIC8vIG1hcmdpbi10b3A6IDIwcHg7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcbiAgXG4gIGk6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuICBcbiAgaTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbn1cblxuLmNvbnRlbnRfYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc3VjY2Vzcy1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZmNlZjtcbiAgY29sb3I6ICMwZTlmNmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhN2YzZDA7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZThlODtcbiAgY29sb3I6ICNmMDUyNTI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZWNhY2E7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuLnRleHQtZ3JlZW4geyBjb2xvcjogIzI4YTc0NTsgfVxuLnRleHQtYmx1ZSB7IGNvbG9yOiAjMDA3YmZmOyB9XG4udGV4dC1wdXJwbGUgeyBjb2xvcjogIzZmNDJjMTsgfVxuLnRleHQtbmF2eSB7IGNvbG9yOiAjMDAxZjNmOyB9XG4udGV4dC1vcmFuZ2UgeyBjb2xvcjogI2ZkN2UxNDsgfVxuLnRleHQtZ3JheSB7IGNvbG9yOiAjNmM3NTdkOyB9XG5cbi5jb250ZW50X2hlYWRlciB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm94LXNoYWRvdzogcmdiYSgzMywgMzUsIDM4LCAwLjEpIDBweCAxMHB4IDEwcHggLTEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xufVxuXG4udG90YWxfbW9udGFudCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50b3RhbF9tb250YW50IHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLy8gLmNvbnRlbnRfZm9vdGVyIHtcbi8vICAgcGFkZGluZy1ib3R0b206IDBweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbi8vICAgcGFkZGluZy10b3A6IDEwcHg7XG4vLyAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IC0ycHggMnB4IDBweFxuLy8gfVxuXG4udG90YWxfbW9udGFudF9sb2dvIHAge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5jb250ZW50X2Zvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IC0ycHggMnB4IDBweFxufVxuXG4uZG93bmxvYWRfaWNvbiBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b3RhbF9tb250YW50IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLy8gbWluLXdpZHRoOiAxMjBweDtcbn1cblxuLnRvdGFsX2xvZ29fdmlyZW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbn1cblxuLnRvdGFsX21vbnRhbnRfbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBcbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgLy8gbWluLXdpZHRoOiA4MHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG5cbi8vIENsYXNzZXMgZGUgY291bGV1clxuLnRleHQtZ3JlZW4geyBjb2xvcjogIzI4YTc0NTsgfVxuLnRleHQtYmx1ZSB7IGNvbG9yOiAjMDA3YmZmOyB9XG4udGV4dC1wdXJwbGUgeyBjb2xvcjogIzZmNDJjMTsgfVxuLnRleHQtbmF2eSB7IGNvbG9yOiAjMDAxZjNmOyB9XG4udGV4dC1vcmFuZ2UgeyBjb2xvcjogI2ZkN2UxNDsgfVxuXG4uc3RhdHVzLWNvbmZpcm1hdGlvbi1wb3B1cCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGluc2V0OiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yODMpO1xuICAgIC8vIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZS1vdXQ7XG4gIFxuICAgIC5wb3B1cC1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYW5pbWF0aW9uOiBwb3BVcCAwLjI1cyBlYXNlLWluLW91dDtcbiAgXG4gICAgICBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICB9XG4gIFxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICB9XG5cbiAgICAgIC5oaWdobGlnaHRlZC1zdGF0dXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdmMWZmO1xuICAgICAgICBjb2xvcjogIzAwN2JmZjtcbiAgICAgICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICAgICAgXG4gICAgICBcbiAgXG4gICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBnYXA6IDAuNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjZyZW0gMC44NXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgICBjb2xvcjogIzJjM2U1MDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMWQ1ZGI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gICAgICAgIFxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICBcbiAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogIzljYTNhZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzdhYWVmNztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMjMsIDI1NSwgMC4yKTtcbiAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICY6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgICAgICAgICBmaWx0ZXI6IGludmVydCgwLjUpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3M7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgJjpob3Zlcjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDAuMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuICBcbiAgICAgIC5wb3B1cC1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBnYXA6IDAuNzVyZW07XG4gIFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgcGFkZGluZzogMC41cmVtIDA7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yNXMsIHRyYW5zZm9ybSAwLjFzO1xuICBcbiAgICAgICAgICAmLmJ0bi1zZWNvbmRhcnkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICBcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgJi5idG4tcHJpbWFyeSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICBcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHBvcFVwIHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBcblxuICAvKiBTdHlsZSBwb3VyIGxlcyBiYWRnZXMgdXRpbGlzYXRldXJzICovXG4udXNlci1iYWRnZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xuIFxufVxuXG4udXNlci1iYWRnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIFxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgXG4gIC5iYWRnZS1pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgXG4gIC5iYWRnZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgXG4gIC5iYWRnZS1sYWJlbCB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzY2NjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cbiAgXG4gIC51c2VyLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICBcbiAgfVxuICAgIC5kYXRlQ3tcbiAgICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgXG4gICAgfVxufVxuXG4vKiBTdHlsZSBzcMODwqljaWZpcXVlIHBvdXIgbGUgY3LDg8KpYXRldXIgKi9cbi51c2VyLWJhZGdlLmNyZWF0b3Ige1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwNjcyZTQ7IFxuICBcbiAgLmJhZGdlLWljb24ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNzgsIDExNSwgMjU1LCAwLjEpO1xuICAgIGNvbG9yOiAjNGU3M2ZmO1xuICB9XG59XG5cbi8qIFN0eWxlIHNww4PCqWNpZmlxdWUgcG91ciBsZSB2YWxpZGF0ZXVyICovXG4udXNlci1iYWRnZS52YWxpZGF0b3Ige1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwMGM4NTM7XG4gIFxuICAuYmFkZ2UtaWNvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyMDAsIDgzLCAwLjEpO1xuICAgIGNvbG9yOiAjMDBjODUzO1xuICB9XG59XG5cbi8qIFJlc3BvbnNpdmUgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudXNlci1iYWRnZXMtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogOHB4O1xuICB9XG59XG5cbi5zdGF0dXRfcGFpZW1lbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMjNweDtcbiAgdG9wOiA1cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjFkZjtcbiAgd2lkdGg6IDEwMXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FkcmVfbmFtZV9wYWllbWVudCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_facture-reel_facture-reel-details_facture-reel-details_component_ts.js.map