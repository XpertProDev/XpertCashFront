"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_clients_clients_component_ts"],{

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

/***/ 9924:
/*!*********************************************************!*\
  !*** ./src/app/admin-page/clients/clients.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientsComponent: () => (/* binding */ ClientsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _MODELS_truncate_email_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MODELS/truncate-email.pipe */ 65698);
/* harmony import */ var _MODELS_click_outside_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MODELS/click-outside.directive */ 40724);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _SERVICES_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SERVICES/client-service */ 47746);
/* harmony import */ var _SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SERVICES/entreprise-service */ 92120);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SERVICES/users.service */ 88026);


















const _c0 = () => [6, 10, 25, 100];
function ClientsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientsComponent_div_10_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleView("list"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientsComponent_div_10_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleView("grid"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Liste ", ctx_r1.isListView ? "\u2713" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Cadre ", !ctx_r1.isListView ? "\u2713" : "", " ");
  }
}
function ClientsComponent_table_27_tr_18_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 37);
  }
  if (rf & 2) {
    const client_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(client_r5.nomComplet), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
  }
}
function ClientsComponent_table_27_tr_18_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Nom est vide");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_table_27_tr_18_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(client_r5.email), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](client_r5.email);
  }
}
function ClientsComponent_table_27_tr_18_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Non email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_table_27_tr_18_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](client_r5.adresse);
  }
}
function ClientsComponent_table_27_tr_18_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Non adresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_table_27_tr_18_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](client_r5.telephone);
  }
}
function ClientsComponent_table_27_tr_18_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Non num\u00E9ro de t\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_table_27_tr_18_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientsComponent_table_27_tr_18_div_21_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const client_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openEntrepriseClientDetail(client_r5.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_table_27_tr_18_ng_template_22_Template(rf, ctx) {}
function ClientsComponent_table_27_tr_18_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, client_r5.createdAt, "dd/MM/yyyy"));
  }
}
function ClientsComponent_table_27_tr_18_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Non date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_table_27_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientsComponent_table_27_tr_18_Template_tr_click_0_listener() {
      const client_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openClientDetail(client_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td")(2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ClientsComponent_table_27_tr_18_span_5_Template, 1, 1, "span", 34)(6, ClientsComponent_table_27_tr_18_ng_template_6_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ClientsComponent_table_27_tr_18_span_9_Template, 2, 2, "span", 34)(10, ClientsComponent_table_27_tr_18_ng_template_10_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ClientsComponent_table_27_tr_18_span_13_Template, 2, 1, "span", 35)(14, ClientsComponent_table_27_tr_18_ng_template_14_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ClientsComponent_table_27_tr_18_span_17_Template, 2, 1, "span", 35)(18, ClientsComponent_table_27_tr_18_ng_template_18_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ClientsComponent_table_27_tr_18_div_21_Template, 2, 0, "div", 36)(22, ClientsComponent_table_27_tr_18_ng_template_22_Template, 0, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ClientsComponent_table_27_tr_18_span_25_Template, 3, 4, "span", 35)(26, ClientsComponent_table_27_tr_18_ng_template_26_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const client_r5 = ctx.$implicit;
    const noNomComplet_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
    const noEmail_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11);
    const noAdresse_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
    const noPhone_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19);
    const noEntreprise_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](23);
    const noDate_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", client_r5.photo, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", client_r5.nomComplet)("ngIfElse", noNomComplet_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", client_r5.email)("ngIfElse", noEmail_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", client_r5.adresse)("ngIfElse", noAdresse_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", client_r5.telephone)("ngIfElse", noPhone_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", client_r5.entrepriseClient)("ngIfElse", noEntreprise_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", client_r5.createdAt)("ngIfElse", noDate_r12);
  }
}
function ClientsComponent_table_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "table")(1, "thead")(2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientsComponent_table_27_Template_th_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.sort("nomComplet"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Nom & pr\u00E9nom ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Adresse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " T\u00E9l\u00E9phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Entreprise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Date de Creation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ClientsComponent_table_27_tr_18_Template, 28, 13, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r1.sortField === "nomComplet" ? ctx_r1.sortDirection === "asc" ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line" : "ri-arrow-up-down-line");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.paginatedClients);
  }
}
function ClientsComponent_div_28_div_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientsComponent_div_28_div_2_span_3_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const client_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openEntrepriseClientDetail(client_r14.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_div_28_div_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", client_r14.photo, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function ClientsComponent_div_28_div_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(client_r14.nomComplet), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](client_r14.nomComplet);
  }
}
function ClientsComponent_div_28_div_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Nom est vide");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_div_28_div_2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, client_r14.createdAt, "dd/MM/yyyy"));
  }
}
function ClientsComponent_div_28_div_2_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "truncateEmail");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(client_r14.email), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, client_r14.email));
  }
}
function ClientsComponent_div_28_div_2_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Non email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_div_28_div_2_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](client_r14.adresse);
  }
}
function ClientsComponent_div_28_div_2_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Non adresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_div_28_div_2_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](client_r14.telephone);
  }
}
function ClientsComponent_div_28_div_2_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Non num\u00E9ro de t\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_div_28_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientsComponent_div_28_div_2_Template_div_click_0_listener() {
      const client_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openClientDetail(client_r14.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 45)(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ClientsComponent_div_28_div_2_span_3_Template, 2, 0, "span", 47)(4, ClientsComponent_div_28_div_2_ng_template_4_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ClientsComponent_div_28_div_2_span_7_Template, 2, 2, "span", 34)(8, ClientsComponent_div_28_div_2_ng_template_8_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ClientsComponent_div_28_div_2_span_10_Template, 3, 4, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 49)(12, "div", 50)(13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ClientsComponent_div_28_div_2_span_15_Template, 3, 4, "span", 34)(16, ClientsComponent_div_28_div_2_ng_template_16_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ClientsComponent_div_28_div_2_span_20_Template, 2, 1, "span", 35)(21, ClientsComponent_div_28_div_2_ng_template_21_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ClientsComponent_div_28_div_2_span_25_Template, 2, 1, "span", 35)(26, ClientsComponent_div_28_div_2_ng_template_26_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const client_r14 = ctx.$implicit;
    const noEntrepriseCard_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
    const noNomComplet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](9);
    const noEmail_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](17);
    const noAdresse_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](22);
    const noPhone_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", client_r14.entrepriseClient)("ngIfElse", noEntrepriseCard_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", client_r14.nomComplet)("ngIfElse", noNomComplet_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", client_r14.createdAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", client_r14.email)("ngIfElse", noEmail_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", client_r14.adresse)("ngIfElse", noAdresse_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", client_r14.telephone)("ngIfElse", noPhone_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", client_r14.photo, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function ClientsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41)(1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ClientsComponent_div_28_div_2_Template, 30, 12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.paginatedClients);
  }
}
function ClientsComponent_table_29_tr_22_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entreprise_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(entreprise_r23.nom), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](entreprise_r23.nom);
  }
}
function ClientsComponent_table_29_tr_22_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Nom vide");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_table_29_tr_22_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entreprise_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(entreprise_r23.email), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](entreprise_r23.email);
  }
}
function ClientsComponent_table_29_tr_22_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Non email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_table_29_tr_22_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entreprise_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](entreprise_r23.adresse);
  }
}
function ClientsComponent_table_29_tr_22_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Non adresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_table_29_tr_22_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entreprise_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](entreprise_r23.telephone);
  }
}
function ClientsComponent_table_29_tr_22_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Non t\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_table_29_tr_22_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entreprise_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, entreprise_r23.createdAt, "dd/MM/yyyy"));
  }
}
function ClientsComponent_table_29_tr_22_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Non date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_table_29_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientsComponent_table_29_tr_22_Template_tr_click_0_listener() {
      const entreprise_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openEntrepriseDetail(entreprise_r23.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td")(2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ClientsComponent_table_29_tr_22_span_5_Template, 2, 2, "span", 34)(6, ClientsComponent_table_29_tr_22_ng_template_6_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ClientsComponent_table_29_tr_22_span_9_Template, 2, 2, "span", 34)(10, ClientsComponent_table_29_tr_22_ng_template_10_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ClientsComponent_table_29_tr_22_span_13_Template, 2, 1, "span", 35)(14, ClientsComponent_table_29_tr_22_ng_template_14_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ClientsComponent_table_29_tr_22_span_17_Template, 2, 1, "span", 35)(18, ClientsComponent_table_29_tr_22_ng_template_18_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ClientsComponent_table_29_tr_22_span_27_Template, 3, 4, "span", 35)(28, ClientsComponent_table_29_tr_22_ng_template_28_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const entreprise_r23 = ctx.$implicit;
    const noNom_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
    const noEmail_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11);
    const noAdresse_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);
    const noPhone_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19);
    const noDate_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", entreprise_r23.nom)("ngIfElse", noNom_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", entreprise_r23.email)("ngIfElse", noEmail_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", entreprise_r23.adresse)("ngIfElse", noAdresse_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", entreprise_r23.telephone)("ngIfElse", noPhone_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](entreprise_r23.pays || "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](entreprise_r23.siege || "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](entreprise_r23.secteur || "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", entreprise_r23.createdAt)("ngIfElse", noDate_r28);
  }
}
function ClientsComponent_table_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "table")(1, "thead")(2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Logo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientsComponent_table_29_Template_th_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.sort("nom"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Nom ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Adresse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " T\u00E9l\u00E9phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Pays ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Si\u00E8ge ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " Secteur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Date de Creation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ClientsComponent_table_29_tr_22_Template, 30, 13, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r1.sortField === "nom" ? ctx_r1.sortDirection === "asc" ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line" : "ri-arrow-up-down-line");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.paginatedEntreprises);
  }
}
function ClientsComponent_div_30_div_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entreprise_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(entreprise_r30.nom), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](entreprise_r30.nom);
  }
}
function ClientsComponent_div_30_div_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Nom est vide");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_div_30_div_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entreprise_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, entreprise_r30.createdAt, "dd/MM/yyyy"));
  }
}
function ClientsComponent_div_30_div_2_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "truncateEmail");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entreprise_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(entreprise_r30.email), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, entreprise_r30.email));
  }
}
function ClientsComponent_div_30_div_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Non email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_div_30_div_2_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entreprise_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](entreprise_r30.adresse);
  }
}
function ClientsComponent_div_30_div_2_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Non adresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_div_30_div_2_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entreprise_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](entreprise_r30.telephone);
  }
}
function ClientsComponent_div_30_div_2_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Non t\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ClientsComponent_div_30_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientsComponent_div_30_div_2_Template_div_click_0_listener() {
      const entreprise_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.openEntrepriseDetail(entreprise_r30.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 45)(2, "div", 46)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ClientsComponent_div_30_div_2_span_4_Template, 2, 2, "span", 34)(5, ClientsComponent_div_30_div_2_ng_template_5_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ClientsComponent_div_30_div_2_span_7_Template, 3, 4, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 49)(9, "div", 50)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ClientsComponent_div_30_div_2_span_12_Template, 3, 4, "span", 34)(13, ClientsComponent_div_30_div_2_ng_template_13_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ClientsComponent_div_30_div_2_span_17_Template, 2, 1, "span", 35)(18, ClientsComponent_div_30_div_2_ng_template_18_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ClientsComponent_div_30_div_2_span_22_Template, 2, 1, "span", 35)(23, ClientsComponent_div_30_div_2_ng_template_23_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const entreprise_r30 = ctx.$implicit;
    const noNom_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6);
    const noEmail_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](14);
    const noAdresse_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19);
    const noPhone_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", entreprise_r30.nom)("ngIfElse", noNom_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", entreprise_r30.createdAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", entreprise_r30.email)("ngIfElse", noEmail_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", entreprise_r30.adresse)("ngIfElse", noAdresse_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", entreprise_r30.telephone)("ngIfElse", noPhone_r34);
  }
}
function ClientsComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41)(1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ClientsComponent_div_30_div_2_Template, 27, 9, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.paginatedEntreprises);
  }
}
function ClientsComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.messageNoEntreprise, " ");
  }
}
function ClientsComponent_div_32_mat_paginator_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-paginator", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("page", function ClientsComponent_div_32_mat_paginator_1_Template_mat_paginator_page_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", ctx_r1.clients.length)("pageIndex", ctx_r1.currentPageClients)("pageSize", ctx_r1.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c0));
  }
}
function ClientsComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ClientsComponent_div_32_mat_paginator_1_Template, 1, 5, "mat-paginator", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.clients.length > 6);
  }
}
function ClientsComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.messageNoClient, " ");
  }
}
function ClientsComponent_div_34_mat_paginator_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-paginator", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("page", function ClientsComponent_div_34_mat_paginator_1_Template_mat_paginator_page_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", ctx_r1.entreprises.length)("pageIndex", ctx_r1.currentPageEntreprises)("pageSize", ctx_r1.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c0));
  }
}
function ClientsComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ClientsComponent_div_34_mat_paginator_1_Template, 1, 5, "mat-paginator", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.entreprises.length > 6);
  }
}
function ClientsComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "div", 65)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Ajouter une entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientsComponent_div_35_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 67)(8, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Client individuel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Client entreprise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
class ClientsComponent {
  constructor(clientService, router, entrepriseService, sanitizer, usersService) {
    this.clientService = clientService;
    this.router = router;
    this.entrepriseService = entrepriseService;
    this.sanitizer = sanitizer;
    this.usersService = usersService;
    // API URL de limage est http://31.207.34.194:8080
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imgUrl;
    this.isListView = true;
    this.showDropdown = false;
    this.showPopup = false;
    // Pagination et tableau de données
    // Client 
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
    this.pageSize = 6;
    this.currentPage = 0;
    this.currentPageClients = 0;
    this.currentPageEntreprises = 0;
    this.totalClients = 0;
    this.totalEntrepriseClients = 0;
    this.clients = [];
    this.entrepriseClient = [];
    this.sortField = 'nomComplet';
    this.sortDirection = 'asc';
    this.noClientsAvailable = false;
    this.messageNoClient = 'Aucun client disponible.';
    // showTypeDropdown = false;
    this.currentListType = 'clients';
    this.entreprises = [];
    this.messageNoEntreprise = 'Aucune entreprise disponible.';
    this.clientsLoaded = false;
    this.entreprisesLoaded = false;
    this.searchText = '';
  }
  ngOnInit() {
    const savedView = localStorage.getItem('viewPreference');
    this.isListView = savedView !== 'grid';
    const savedListType = localStorage.getItem('listTypePreference');
    if (savedListType === 'clients' || savedListType === 'entreprises') {
      this.currentListType = savedListType;
    }
    // if (this.currentListType === 'clients') {
    //   this.getListClients();
    // } else {
    //   this.getListEntreprises();
    // }
    this.getListClients();
    this.getListEntreprises();
  }
  highlightMatch(text) {
    if (!text) return '';
    if (!this.searchText.trim()) return text;
    const escapedSearch = this.searchText.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedSearch})`, 'gi');
    return this.sanitizer.bypassSecurityTrustHtml(text.replace(regex, '<mark>$1</mark>'));
  }
  // Gestionnaires de filtrage
  get filteredClients() {
    if (!this.searchText.trim()) return this.clients;
    const searchLower = this.searchText.toLowerCase().trim();
    return this.clients.filter(client => client.nomComplet?.toLowerCase().includes(searchLower) || client.email?.toLowerCase().includes(searchLower) || client.adresse?.toLowerCase().includes(searchLower) || client.telephone?.includes(searchLower));
  }
  get filteredEntreprises() {
    if (!this.searchText.trim()) return this.entreprises;
    const searchLower = this.searchText.toLowerCase().trim();
    return this.entreprises.filter(entreprise => entreprise.nom?.toLowerCase().includes(searchLower) || entreprise.email?.toLowerCase().includes(searchLower) || entreprise.adresse?.toLowerCase().includes(searchLower) || entreprise.telephone?.includes(searchLower) || entreprise.pays?.toLowerCase().includes(searchLower) || entreprise.siege?.toLowerCase().includes(searchLower) || entreprise.secteur?.toLowerCase().includes(searchLower));
  }
  onPageChange(event) {
    if (this.currentListType === 'clients') {
      this.currentPageClients = event.pageIndex;
    } else {
      this.currentPageEntreprises = event.pageIndex;
    }
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    // Forcez la détection des changements
    setTimeout(() => {
      this.clientsLoaded = true;
      this.entreprisesLoaded = true;
    }, 0);
  }
  toggleView(viewType) {
    this.isListView = viewType === 'list';
    this.showDropdown = true;
    // Stocker la préférence dans le localStorage
    localStorage.setItem('viewPreference', viewType);
  }
  setListType(type) {
    // Réinitialisez la page courante selon le type
    this.currentPage = type === 'clients' ? this.currentPageClients : this.currentPageEntreprises;
    this.currentListType = type;
    // this.showTypeDropdown = false;
    localStorage.setItem('listTypePreference', type);
    this.clientsLoaded = false;
    this.entreprisesLoaded = false;
    // if (type === 'entreprises' && this.entreprises.length === 0) {
    //   this.getListEntreprises();
    // } else if (type === 'clients' && this.clients.length === 0) {
    //   this.getListClients();
    // }
    if (type === 'entreprises') {
      this.getListEntreprises();
    } else {
      this.getListClients();
    }
  }
  getListEntreprises() {
    this.entreprisesLoaded = false;
    this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(token => {
      if (!token) {
        console.error('Aucun token valide trouvé !');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.throwError)(() => new Error('Aucun token trouvé'));
      }
      return this.entrepriseService.getListEntreprises();
    })).subscribe({
      next: data => {
        console.log('Entreprises récupérées:', data);
        this.entreprises = data.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
        this.entreprisesLoaded = true;
      },
      error: err => {
        console.error('Erreur lors de la récupération des entreprises :', err);
        this.entreprisesLoaded = true;
      }
    });
  }
  // Modifie la fonction sort
  sort(field) {
    // Déterminer si le champ existe dans le type actuel
    const isValidField = this.currentListType === 'clients' && this.clients.length > 0 && field in this.clients[0] || this.currentListType === 'entreprises' && this.entreprises.length > 0 && field in this.entreprises[0];
    if (!isValidField) return;
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    if (this.currentListType === 'clients') {
      this.clients.sort((a, b) => {
        const modifier = this.sortDirection === 'asc' ? 1 : -1;
        const valueA = a[field]?.toString().toLowerCase() ?? '';
        const valueB = b[field]?.toString().toLowerCase() ?? '';
        return valueA.localeCompare(valueB) * modifier;
      });
    } else {
      this.entreprises.sort((a, b) => {
        const modifier = this.sortDirection === 'asc' ? 1 : -1;
        const valueA = a[field]?.toString().toLowerCase() ?? '';
        const valueB = b[field]?.toString().toLowerCase() ?? '';
        return valueA.localeCompare(valueB) * modifier;
      });
    }
  }
  // list clients 
  getListClients() {
    this.clientsLoaded = false;
    this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)(token => {
      if (!token) {
        console.error('🔐 Aucun token valide trouvé !');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.throwError)(() => new Error('Aucun token trouvé'));
      }
      return this.clientService.getListClients();
    })).subscribe({
      next: data => {
        console.log('📥 Données brutes:', data);
        this.clients = data.map(client => {
          return {
            ...client,
            photo: client.photo ? `${this.apiUrl}${client.photo}` : `/assets/img/profil.png`,
            entrepriseClient: client.entrepriseClient ? {
              id: client.entrepriseClient.id
            } : null
          };
        });
        console.log('🖼️ URLs des photos clients :', this.clients.map(c => c.photo));
        this.clients = this.clients.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
        this.totalClients = this.clients.length;
        this.noClientsAvailable = this.clients.length === 0;
        this.dataSource.data = this.clients;
        this.dataSource.paginator = this.paginator;
        if (this.clients.length > 0) {
          console.log('👤 Exemple client :', this.clients[0]);
        }
        this.clientsLoaded = true;
      },
      error: err => {
        console.error('❌ Erreur récupération clients :', err);
        this.clientsLoaded = true;
      }
    });
  }
  // Mettre à jour les getters paginés pour utiliser les listes filtrées
  get paginatedClients() {
    const startIndex = this.currentPageClients * this.pageSize;
    return this.filteredClients.slice(startIndex, startIndex + this.pageSize);
  }
  get paginatedEntreprises() {
    const startIndex = this.currentPageEntreprises * this.pageSize;
    return this.filteredEntreprises.slice(startIndex, startIndex + this.pageSize);
  }
  // client id routing
  openClientDetail(clientId) {
    this.router.navigate(['/detail-client', clientId]);
  }
  // entreprise client id routing
  openEntrepriseClientDetail(clientId, event) {
    event.stopPropagation();
    this.router.navigate(['/detail-entreprise-client', clientId]);
  }
  // Ajoutez cette méthode pour ouvrir les détails d'une entreprise
  openEntrepriseDetail(entrepriseId) {
    if (entrepriseId === undefined) {
      console.error("ID d'entreprise non défini");
      return;
    }
    this.router.navigate(['/detail-entreprise', entrepriseId]);
  }
  // Ouvre/ferme le popup choix d'ajoute client
  openPopup() {
    this.showPopup = true;
  }
  closePopup() {
    this.showPopup = false;
  }
  static {
    this.ɵfac = function ClientsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_client_service__WEBPACK_IMPORTED_MODULE_3__.ClientService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_4__.EntrepriseService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_5__.UsersService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ClientsComponent,
      selectors: [["app-clients"]],
      viewQuery: function ClientsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      decls: 36,
      vars: 20,
      consts: [["noNomComplet", ""], ["noEmail", ""], ["noAdresse", ""], ["noPhone", ""], ["noEntreprise", ""], ["noDate", ""], ["noEntrepriseCard", ""], ["noNom", ""], [1, "containerTable"], [1, "tasks-header"], [1, "title"], [1, "actions"], [1, "add-task", 3, "click"], [1, "barre"], ["clickOutside", "", 1, "contentIcon", 3, "click", "clickOutside"], ["class", "view-dropdown", 4, "ngIf"], [1, "contentIcon", 3, "click"], [1, "ri-folder-user-line"], [1, "nombreCount"], [1, "ri-building-line"], [1, "inputSearch"], [1, "ri-search-2-line"], ["type", "text", "placeholder", "Recherche....", 3, "ngModelChange", "ngModel"], [4, "ngIf"], ["class", "container_cadre", 4, "ngIf"], ["class", "no-client-message", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], ["class", "popup-overlay", 4, "ngIf"], [1, "view-dropdown"], [1, "dropdown-item", 3, "click"], [3, "click"], [3, "click", 4, "ngFor", "ngForOf"], [1, "imgClient"], ["alt", "Photo client", 3, "src"], [3, "innerHTML", 4, "ngIf", "ngIfElse"], [4, "ngIf", "ngIfElse"], ["class", "iconEntrepriseList", 3, "click", 4, "ngIf", "ngIfElse"], [3, "innerHTML"], [1, "no-phone-text"], [1, "iconEntrepriseList", 3, "click"], ["title", "Affiliation d'Entreprise", 1, "ri-git-branch-fill"], [1, "container_cadre"], [1, "grid-view"], ["class", "client-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "client-card", 3, "click"], [1, "name_icon"], [1, "tete"], [3, "click", 4, "ngIf", "ngIfElse"], ["class", "dateCreat", 4, "ngIf"], [1, "content_cadre_double"], [1, "info_cadre"], [1, "ri-mail-line"], [1, "ri-map-pin-line"], [1, "ri-phone-line"], [1, "imgClient_grid"], ["title", "Affiliation d'Entreprise", 1, "ri-community-line"], [1, "imgClient2"], [1, "dateCreat"], ["src", "assets/img/office_building.png", "alt", "Logo entreprise"], [1, "no-client-message"], [1, "pagination"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], [3, "page", "length", "pageIndex", "pageSize", "pageSizeOptions"], [1, "popup-overlay"], [1, "popup-content"], [1, "popup-header"], [1, "close-btn", 3, "click"], [1, "contentCadreChoix"], ["routerLink", "/ajouter-client", 1, "cadreChoix"], [1, "sizeBox"], ["routerLink", "/ajouter-entreprise-client", 1, "cadreChoix"]],
      template: function ClientsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "h1", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 11)(5, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientsComponent_Template_button_click_5_listener() {
            return ctx.openPopup();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Ajouter un client");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientsComponent_Template_div_click_8_listener() {
            return ctx.showDropdown = !ctx.showDropdown;
          })("clickOutside", function ClientsComponent_Template_div_clickOutside_8_listener() {
            return ctx.showDropdown = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ClientsComponent_div_10_Template, 5, 2, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientsComponent_Template_div_click_12_listener() {
            return ctx.setListType("clients");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 18)(15, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientsComponent_Template_div_click_18_listener() {
            return ctx.setListType("entreprises");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 18)(21, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ClientsComponent_Template_input_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.searchText, $event) || (ctx.searchText = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ClientsComponent_table_27_Template, 19, 3, "table", 23)(28, ClientsComponent_div_28_Template, 3, 1, "div", 24)(29, ClientsComponent_table_29_Template, 23, 3, "table", 23)(30, ClientsComponent_div_30_Template, 3, 1, "div", 24)(31, ClientsComponent_div_31_Template, 2, 1, "div", 25)(32, ClientsComponent_div_32_Template, 2, 1, "div", 26)(33, ClientsComponent_div_33_Template, 2, 1, "div", 25)(34, ClientsComponent_div_34_Template, 2, 1, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, ClientsComponent_div_35_Template, 13, 0, "div", 27);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.currentListType === "clients" ? "Client individuel" : "Client entreprise", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.isListView ? "ri-list-check" : "ri-apps-fill");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx.currentListType === "clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.clients.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx.currentListType === "entreprises");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.entreprises.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.searchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isListView && ctx.currentListType === "clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isListView && ctx.currentListType === "clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isListView && ctx.currentListType === "entreprises");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isListView && ctx.currentListType === "entreprises");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.entreprisesLoaded && ctx.entreprises.length === 0 && ctx.currentListType === "entreprises");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentListType === "clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.clientsLoaded && ctx.clients.length === 0 && ctx.currentListType === "clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentListType === "entreprises");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showPopup);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _MODELS_truncate_email_pipe__WEBPACK_IMPORTED_MODULE_0__.TruncateEmailPipe, _MODELS_click_outside_directive__WEBPACK_IMPORTED_MODULE_1__.ClickOutsideDirective],
      styles: ["@charset \"UTF-8\";\n.containerTable[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.content_cadre_double[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n\n\n.imgClient[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n\n.imgClient[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n  object-fit: cover;\n  border-radius: 50%;\n  transition: transform 0.2s;\n}\n\n.imgClient[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1); \n\n}\n\n.tete[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.imgClient2[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n\n.imgClient2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  transition: transform 0.2s;\n  border: 2px solid #ffffff;\n  box-shadow: 0 2px 4px #dee2e6;\n}\n\n\n\n.imgClient_grid[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: none;\n}\n\n.imgClient_grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n  object-fit: cover;\n  border-radius: 50%;\n  transition: transform 0.2s;\n  border: 2px solid #ffffff;\n  box-shadow: 0 2px 4px #dee2e6;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n}\n\n.tasks-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.add-task[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  background-color: #0672E4;\n  color: #ffffff;\n  border-radius: 5px;\n  border: none;\n}\n\n.inputSearch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n\n.inputSearch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-left: 10px;\n  border-radius: 5px;\n}\n\n.inputSearch[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 15px;\n  font-size: 17px;\n}\n\n.contentIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  cursor: pointer;\n  position: relative;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.barre[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.2470588235);\n  margin: 8px 10px;\n}\n\n.titleTableProduit[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\ntr[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 18px 8px;\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n  padding: 12px 8px;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.nombreCount[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  position: absolute;\n  top: -15px;\n  background-color: #ddd;\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  right: -9px;\n}\n\n.nombreCount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n  border-radius: 50%;\n  font-size: 9px;\n}\n\n\n\n.contentIcon[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n\n.view-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  z-index: 100;\n  min-width: 150px;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n\n\n\n.grid-view[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 20px;\n}\n\n.client-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  transition: transform 0.2s ease;\n  border: 1px solid #e0e0e0;\n  margin: 20px 0 -20px;\n}\n\n.client-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.04);\n}\n\n.client-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-size: 16px;\n  margin: 0;\n  font-weight: 600;\n}\n\n.name_icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #eee;\n  margin: 0 0 12px 0;\n  padding-bottom: 10px;\n}\n\n.name_icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.client-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  font-size: 14px;\n  color: #666;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.client-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #0672E4;\n}\n\n\n\n.view-dropdown[_ngcontent-%COMP%] {\n  \n\n  transform-origin: top right;\n  animation: _ngcontent-%COMP%_scaleIn 0.15s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: background 0.2s ease;\n}\n\n.dropdown-item[_ngcontent-%COMP%]::after {\n  content: \"\u2713\";\n  opacity: 0;\n  color: #0672E4;\n}\n\n.dropdown-item.active[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n\n\n\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 12px;\n  display: inline-block;\n}\n\n.status-active[_ngcontent-%COMP%] {\n  background: #e3fcef;\n  color: #006644;\n}\n\n.status-inactive[_ngcontent-%COMP%] {\n  background: #faeae5;\n  color: #bf360c;\n}\n\n\n\n@media (max-width: 768px) {\n  .tasks-header[_ngcontent-%COMP%] {\n    display: block;\n    justify-content: space-between;\n    gap: 15px;\n  }\n  .inputSearch[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n\n  .grid-view[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .client-card[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n}\n@media (min-width: 769px) {\n  .mobile-only[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.pagination[_ngcontent-%COMP%] {\n  justify-content: right;\n  margin-top: 30px;\n}\n\nmat-paginator[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 5px;\n}\n\n.no-phone-text[_ngcontent-%COMP%] {\n  color: #c3c3c3; \n\n  font-style: italic; \n\n}\n\n.info_cadre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.no-client-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  font-size: 13px;\n  color: #666;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  margin: 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.iconEntrepriseList[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.iconEntrepriseList[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.no-entreprise-text[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.9em;\n  font-style: italic;\n}\n\n\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.popup-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 15px 20px;\n  border-radius: 8px;\n  width: 25%;\n}\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  margin-top: -5px;\n}\n\n.popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.cadreChoix[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  border-radius: 5px;\n  cursor: pointer;\n  color: #ffffff;\n}\n\n.sizeBox[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.dateCreat[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-style: italic;\n  margin-left: auto;\n}\n\n\n\n.contentIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.3s ease;\n  padding: 0px 5px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.contentIcon.active[_ngcontent-%COMP%] {\n  background-color: #e6f7ff; \n\n  border: 1px solid #1890ff; \n\n}\n\n.contentIcon.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1890ff; \n\n}\n\n.contentIcon[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: #f5f5f5; \n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFhQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBVko7O0FBYUEseUNBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7QUFWSjs7QUFhQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBVko7O0FBYUE7RUFDSSxxQkFBQSxFQUFBLHlCQUFBO0FBVko7O0FBYUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBVko7O0FBYUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0FBVko7O0FBYUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUFWSjs7QUFpQkEseUNBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUdBLGVBQUE7RUFDQSxZQUFBO0FBakJKOztBQW9CQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQWpCSjs7QUF3QkE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtBQXJCSjs7QUF5QkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFD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QUE7QUFwQ0o7O0FBdUNBO0VBQ0kseUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBcENKOztBQXVDQTtFQUNJLGNBQUE7QUFwQ0o7O0FBdUNBO0VBRUksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFyQ0o7O0FBd0NBLDBDQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFyQ0Y7O0FBd0NBO0VBQ0UseUJBQUEsRUFBQSx5Q0FBQTtFQUNBLHlCQUFBLEVBQUEsaUNBQUE7QUFyQ0Y7O0FBd0NBO0VBQ0UsY0FBQSxFQUFBLDhCQUFBO0FBckNGOztBQXdDQTtFQUNFLHlCQUFBLEVBQUEsNkNBQUE7QUFyQ0YiLCJmaWxlIjoiY2xpZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lclRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLy8gLmNvbnRlbnRfcmV0dXJuIHtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgZ2FwOiAxNXB4O1xuLy8gfVxuXG4vLyAucmV0b3VyX2ljb24gaSB7XG4vLyAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vIH1cblxuLmNvbnRlbnRfY2FkcmVfZG91YmxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4vKiBTdHlsZSBkZSBsJ2ltYWdlIGNpcmN1bGFpcmUgaW1nIGxpc3QgKi9cbi5pbWdDbGllbnQge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuICBcbi5pbWdDbGllbnQgaW1nIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cbiAgXG4uaW1nQ2xpZW50OmhvdmVyIGltZyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBFZmZldCB6b29tIGF1IHN1cnZvbCAqL1xufVxuXG4udGV0ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmltZ0NsaWVudDIge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuICBcbi5pbWdDbGllbnQyIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjZGVlMmU2O1xufVxuXG4vLyAuaW1nQ2xpZW50Mjpob3ZlciBpbWcge1xuLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogRWZmZXQgem9vbSBhdSBzdXJ2b2wgKi9cbi8vIH1cblxuLyogU3R5bGUgZGUgbCdpbWFnZSBjaXJjdWxhaXJlIGltZyBncmlkICovXG4uaW1nQ2xpZW50X2dyaWQge1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAvLyBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbiAgXG4uaW1nQ2xpZW50X2dyaWQgaW1nIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAjZGVlMmU2O1xufVxuXG4vLyAuaW1nQ2xpZW50X2dyaWQ6aG92ZXIgaW1nIHtcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIEVmZmV0IHpvb20gYXUgc3Vydm9sICovXG4vLyB9XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBcbn1cblxuLnRhc2tzLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYWRkLXRhc2sge1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5pbnB1dFNlYXJjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5wdXRTZWFyY2ggaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW5wdXRTZWFyY2ggaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5jb250ZW50SWNvbiBpIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiAgXG4uYWN0aW9ucyBpe1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uYmFycmUge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzZjtcbiAgICBtYXJnaW46IDhweCAxMHB4O1xufVxuXG4vLyB0YWJsZSBcblxuLnRpdGxlVGFibGVQcm9kdWl0IHRoIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50ciB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG50ZCB7XG4gIHBhZGRpbmc6IDE4cHggOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDk0O1xufVxuICBcbnRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkOTQ7XG4gICAgcGFkZGluZzogMTJweCA4cHg7XG59XG4gIFxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuICBcbnRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4ubm9tYnJlQ291bnQge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTVweDtcbiAgICByaWdodDogLTlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBkaXNwbGF5OiBmbGV4XG47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICByaWdodDogLTlweDtcbn1cblxuLm5vbWJyZUNvdW50IHNwYW4ge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIC8vIHBhZGRpbmc6IDRweDtcbn1cblxuLyogRHJvcGRvd24gc3R5bGVzICovXG4uY29udGVudEljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52aWV3LWRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgei1pbmRleDogMTAwO1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLyogR3JpZCB2aWV3IHN0eWxlcyAqL1xuLmdyaWQtdmlldyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyODBweCwgMWZyKSk7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG5cbi5jbGllbnQtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIG1hcmdpbjogMjBweCAwIC0yMHB4O1xufVxuXG4uY2xpZW50LWNhcmQ6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG5cbi5jbGllbnQtY2FyZCBoMyB7XG4gICAgY29sb3I6ICMyYzNlNTA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubmFtZV9pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgIG1hcmdpbjogMCAwIDEycHggMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLm5hbWVfaWNvbiBpIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4uY2xpZW50LWNhcmQgcCB7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xufVxuXG4uY2xpZW50LWNhcmQgcCBpIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG59XG5cbi8qIEFtw6lsaW9yYXRpb25zIGRyb3Bkb3duICovXG4udmlldy1kcm9wZG93biB7XG4gICAgLyogLi4uIHN0eWxlcyBleGlzdGFudHMgLi4uICovXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xuICAgIGFuaW1hdGlvbjogc2NhbGVJbiAwLjE1cyBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBzY2FsZUluIHtcbiAgICBmcm9tIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjkpOyBvcGFjaXR5OiAwOyB9XG4gICAgdG8geyB0cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAxOyB9XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlO1xufVxuXG4uZHJvcGRvd24taXRlbTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICfinJMnO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG59XG5cbi5kcm9wZG93bi1pdGVtLmFjdGl2ZTo6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi8qIEFqb3V0ZSBkYW5zIENTUyAqL1xuLnN0YXR1cy1iYWRnZSB7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgXG4gIC5zdGF0dXMtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTNmY2VmO1xuICAgIGNvbG9yOiAjMDA2NjQ0O1xuICB9XG4gIFxuICAuc3RhdHVzLWluYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmFlYWU1O1xuICAgIGNvbG9yOiAjYmYzNjBjO1xuICB9XG5cbiAgLyogUG91ciBsZXMgbW9iaWxlcyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnRhc2tzLWhlYWRlciB7XG4gICAgLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGdhcDogMTVweDtcbiAgICB9XG5cbiAgICAvLyAuYWRkLXRhc2sge1xuICAgIC8vIH1cbiAgICBcbiAgICAuaW5wdXRTZWFyY2gge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIC8qIEZvcmNlIGwnYWZmaWNoYWdlIGRlcyBjYXJ0ZXMgKi9cbiAgICAuZ3JpZC12aWV3IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICBcbiAgICAuY2xpZW50LWNhcmQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuICAgIC5tb2JpbGUtb25seSB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbi5wYWdpbmF0aW9uIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG4gIFxubWF0LXBhZ2luYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5uby1waG9uZS10ZXh0IHtcbiAgICBjb2xvcjogI2MzYzNjMzsgLyogQ291bGV1ciBncmlzZSBleGVtcGxlICovXG4gICAgZm9udC1zdHlsZTogaXRhbGljOyAvKiBPcHRpb25uZWwgKi9cbn1cbiAgXG4uaW5mb19jYWRyZSBwIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLm5vLWNsaWVudC1tZXNzYWdlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbi5pY29uRW50cmVwcmlzZUxpc3Qge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmljb25FbnRyZXByaXNlTGlzdCBpIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm8tZW50cmVwcmlzZS10ZXh0IHtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gUG9wIHVwIFxuXG4vKiBTdHlsZXMgcG91ciBsZSBwb3B1cCAqL1xuLnBvcHVwLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuICBcbi5wb3B1cC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiAyNSU7XG59XG4gIFxuLnBvcHVwLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi5wb3B1cC1oZWFkZXIgaDMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNhZHJlQ2hvaXgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2l6ZUJveCB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5kYXRlQ3JlYXQge1xuICBcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4vKiBBam91dGV6IGNlY2kgw6Agdm90cmUgZmljaGllciBDU1MvU0NTUyAqL1xuLmNvbnRlbnRJY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudEljb24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmZjsgLyogQ291bGV1ciBkZSBmb25kIHBvdXIgbCfDqWzDqW1lbnQgYWN0aWYgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgIzE4OTBmZjsgLyogQm9yZHVyZSBwb3VyIGwnw6lsw6ltZW50IGFjdGlmICovXG59XG5cbi5jb250ZW50SWNvbi5hY3RpdmUgaSB7XG4gIGNvbG9yOiAjMTg5MGZmOyAvKiBDb3VsZXVyIGRlIGwnaWPDtG5lIGFjdGl2ZSAqL1xufVxuXG4uY29udGVudEljb246aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTsgLyogRWZmZXQgaG92ZXIgcG91ciBsZXMgw6lsw6ltZW50cyBub24gYWN0aWZzICovXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFhQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBVko7O0FBYUEseUNBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7QUFWSjs7QUFhQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBVko7O0FBYUE7RUFDSSxxQkFBQSxFQUFBLHlCQUFBO0FBVko7O0FBYUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBVko7O0FBYUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0FBVko7O0FBYUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUFWSjs7QUFpQkEseUNBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUdBLGVBQUE7RUFDQSxZQUFBO0FBakJKOztBQW9CQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQWpCSjs7QUF3QkE7RUFDSSxlQUFBO0VBQ0EsU0FB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Q0EsZUFBQTtFQUNBLGdCQUFBO0FBcENKOztBQXVDQTtFQUNJLGVBQUE7QUFwQ0o7O0FBdUNBO0VBQ0kseUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBcENKOztBQXVDQTtFQUNJLGNBQUE7QUFwQ0o7O0FBdUNBO0VBRUksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFyQ0o7O0FBd0NBLDBDQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFyQ0Y7O0FBd0NBO0VBQ0UseUJBQUEsRUFBQSx5Q0FBQTtFQUNBLHlCQUFBLEVBQUEsaUNBQUE7QUFyQ0Y7O0FBd0NBO0VBQ0UsY0FBQSxFQUFBLDhCQUFBO0FBckNGOztBQXdDQTtFQUNFLHlCQUFBLEVBQUEsNkNBQUE7QUFyQ0Y7QUFEQSxveGpCQUFveGpCIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVyVGFibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vLyAuY29udGVudF9yZXR1cm4ge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBnYXA6IDE1cHg7XG4vLyB9XG5cbi8vIC5yZXRvdXJfaWNvbiBpIHtcbi8vICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gfVxuXG4uY29udGVudF9jYWRyZV9kb3VibGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi8qIFN0eWxlIGRlIGwnaW1hZ2UgY2lyY3VsYWlyZSBpbWcgbGlzdCAqL1xuLmltZ0NsaWVudCB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4gIFxuLmltZ0NsaWVudCBpbWcge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuICBcbi5pbWdDbGllbnQ6aG92ZXIgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIEVmZmV0IHpvb20gYXUgc3Vydm9sICovXG59XG5cbi50ZXRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uaW1nQ2xpZW50MiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4gIFxuLmltZ0NsaWVudDIgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4ICNkZWUyZTY7XG59XG5cbi8vIC5pbWdDbGllbnQyOmhvdmVyIGltZyB7XG4vLyAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBFZmZldCB6b29tIGF1IHN1cnZvbCAqL1xuLy8gfVxuXG4vKiBTdHlsZSBkZSBsJ2ltYWdlIGNpcmN1bGFpcmUgaW1nIGdyaWQgKi9cbi5pbWdDbGllbnRfZ3JpZCB7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIC8vIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xufVxuICBcbi5pbWdDbGllbnRfZ3JpZCBpbWcge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4ICNkZWUyZTY7XG59XG5cbi8vIC5pbWdDbGllbnRfZ3JpZDpob3ZlciBpbWcge1xuLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogRWZmZXQgem9vbSBhdSBzdXJ2b2wgKi9cbi8vIH1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIFxufVxuXG4udGFza3MtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5hZGQtdGFzayB7XG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmlucHV0U2VhcmNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnB1dFNlYXJjaCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbnB1dFNlYXJjaCBpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmNvbnRlbnRJY29uIGkge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuICBcbi5hY3Rpb25zIGl7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5iYXJyZSB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDNmO1xuICAgIG1hcmdpbjogOHB4IDEwcHg7XG59XG5cbi8vIHRhYmxlIFxuXG4udGl0bGVUYWJsZVByb2R1aXQgdGgge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRyIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbnRkIHtcbiAgcGFkZGluZzogMThweCA4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkOTQ7XG59XG4gIFxudGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ5NDtcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcbn1cbiAgXG50cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG4gIFxudHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi5ub21icmVDb3VudCB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xNXB4O1xuICAgIHJpZ2h0OiAtOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGRpc3BsYXk6IGZsZXhcbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHJpZ2h0OiAtOXB4O1xufVxuXG4ubm9tYnJlQ291bnQgc3BhbiB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgLy8gcGFkZGluZzogNHB4O1xufVxuXG4vKiBEcm9wZG93biBzdHlsZXMgKi9cbi5jb250ZW50SWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnZpZXctZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4vKiBHcmlkIHZpZXcgc3R5bGVzICovXG4uZ3JpZC12aWV3IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI4MHB4LCAxZnIpKTtcbiAgICBnYXA6IDIwcHg7XG59XG5cblxuLmNsaWVudC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgbWFyZ2luOiAyMHB4IDAgLTIwcHg7XG59XG5cbi5jbGllbnQtY2FyZDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuLmNsaWVudC1jYXJkIGgzIHtcbiAgICBjb2xvcjogIzJjM2U1MDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5uYW1lX2ljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgbWFyZ2luOiAwIDAgMTJweCAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ubmFtZV9pY29uIGkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbi5jbGllbnQtY2FyZCBwIHtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG59XG5cbi5jbGllbnQtY2FyZCBwIGkge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzA2NzJFNDtcbn1cblxuLyogQW3Dg8KpbGlvcmF0aW9ucyBkcm9wZG93biAqL1xuLnZpZXctZHJvcGRvd24ge1xuICAgIC8qIC4uLiBzdHlsZXMgZXhpc3RhbnRzIC4uLiAqL1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcbiAgICBhbmltYXRpb246IHNjYWxlSW4gMC4xNXMgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgc2NhbGVJbiB7XG4gICAgZnJvbSB7IHRyYW5zZm9ybTogc2NhbGUoMC45KTsgb3BhY2l0eTogMDsgfVxuICAgIHRvIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogMTsgfVxufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcbn1cblxuLmRyb3Bkb3duLWl0ZW06OmFmdGVyIHtcbiAgICBjb250ZW50OiAnw6LCnMKTJztcbiAgICBvcGFjaXR5OiAwO1xuICAgIGNvbG9yOiAjMDY3MkU0O1xufVxuXG4uZHJvcGRvd24taXRlbS5hY3RpdmU6OmFmdGVyIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4vKiBBam91dGUgZGFucyBDU1MgKi9cbi5zdGF0dXMtYmFkZ2Uge1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIFxuICAuc3RhdHVzLWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI2UzZmNlZjtcbiAgICBjb2xvcjogIzAwNjY0NDtcbiAgfVxuICBcbiAgLnN0YXR1cy1pbmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI2ZhZWFlNTtcbiAgICBjb2xvcjogI2JmMzYwYztcbiAgfVxuXG4gIC8qIFBvdXIgbGVzIG1vYmlsZXMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC50YXNrcy1oZWFkZXIge1xuICAgIC8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBnYXA6IDE1cHg7XG4gICAgfVxuXG4gICAgLy8gLmFkZC10YXNrIHtcbiAgICAvLyB9XG4gICAgXG4gICAgLmlucHV0U2VhcmNoIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAvKiBGb3JjZSBsJ2FmZmljaGFnZSBkZXMgY2FydGVzICovXG4gICAgLmdyaWQtdmlldyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgXG4gICAgLmNsaWVudC1jYXJkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICAubW9iaWxlLW9ubHkge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4ucGFnaW5hdGlvbiB7XG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuICBcbm1hdC1wYWdpbmF0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubm8tcGhvbmUtdGV4dCB7XG4gICAgY29sb3I6ICNjM2MzYzM7IC8qIENvdWxldXIgZ3Jpc2UgZXhlbXBsZSAqL1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgLyogT3B0aW9ubmVsICovXG59XG4gIFxuLmluZm9fY2FkcmUgcCB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5uby1jbGllbnQtbWVzc2FnZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xufVxuXG4uaWNvbkVudHJlcHJpc2VMaXN0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5pY29uRW50cmVwcmlzZUxpc3QgaSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vLWVudHJlcHJpc2UtdGV4dCB7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIFBvcCB1cCBcblxuLyogU3R5bGVzIHBvdXIgbGUgcG9wdXAgKi9cbi5wb3B1cC1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTAwMDtcbn1cbiAgXG4ucG9wdXAtY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDogMjUlO1xufVxuICBcbi5wb3B1cC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNsb3NlLWJ0biB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4ucG9wdXAtaGVhZGVyIGgzIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jYWRyZUNob2l4IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNpemVCb3gge1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG4uZGF0ZUNyZWF0IHtcbiAgXG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLyogQWpvdXRleiBjZWNpIMODwqAgdm90cmUgZmljaGllciBDU1MvU0NTUyAqL1xuLmNvbnRlbnRJY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudEljb24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmZjsgLyogQ291bGV1ciBkZSBmb25kIHBvdXIgbCfDg8KpbMODwqltZW50IGFjdGlmICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxODkwZmY7IC8qIEJvcmR1cmUgcG91ciBsJ8ODwqlsw4PCqW1lbnQgYWN0aWYgKi9cbn1cblxuLmNvbnRlbnRJY29uLmFjdGl2ZSBpIHtcbiAgY29sb3I6ICMxODkwZmY7IC8qIENvdWxldXIgZGUgbCdpY8ODwrRuZSBhY3RpdmUgKi9cbn1cblxuLmNvbnRlbnRJY29uOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7IC8qIEVmZmV0IGhvdmVyIHBvdXIgbGVzIMODwqlsw4PCqW1lbnRzIG5vbiBhY3RpZnMgKi9cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_clients_clients_component_ts.js.map