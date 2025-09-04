"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_clients_addClient_add-clients_add-clients_component_ts"],{

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

/***/ 34744:
/*!***********************************************************************************!*\
  !*** ./src/app/admin-page/clients/addClient/add-clients/add-clients.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddClientsComponent: () => (/* binding */ AddClientsComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! browser-image-compression */ 92880);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_admin_page_SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin-page/SERVICES/entreprise-service */ 92120);
/* harmony import */ var src_app_admin_page_SERVICES_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/admin-page/SERVICES/client-service */ 47746);
/* harmony import */ var src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin-page/SERVICES/users.service */ 88026);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ 35255);














const _c0 = () => ({
  standalone: true
});
function AddClientsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 53)(1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Creation en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function AddClientsComponent_div_21_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Champ requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddClientsComponent_div_21_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Au moins 2 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddClientsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddClientsComponent_div_21_small_1_Template, 2, 0, "small", 57)(2, AddClientsComponent_div_21_small_2_Template, 2, 0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.clientForm.get("nomComplet")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.clientForm.get("nomComplet")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
  }
}
function AddClientsComponent_div_26_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Format invalide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddClientsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddClientsComponent_div_26_small_1_Template, 2, 0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.clientForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["email"]);
  }
}
function AddClientsComponent_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const nomPays_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", nomPays_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", nomPays_r2, " (", ctx_r0.paysIndicatifs[nomPays_r2].indicatif, ") ");
  }
}
function AddClientsComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Ce champ est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddClientsComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pays_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Le num\u00E9ro doit contenir ", ctx_r0.paysIndicatifs[pays_r3].longueur, " chiffres apr\u00E8s l\u2019indicatif ", ctx_r0.paysIndicatifs[pays_r3].indicatif.trim(), ". ");
  }
}
function AddClientsComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Le t\u00E9l\u00E9phone est requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddClientsComponent_div_65_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 58)(1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ent_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ent_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ent_r5.nom, " ");
  }
}
function AddClientsComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Mon entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-autocomplete", 62, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("optionSelected", function AddClientsComponent_div_65_Template_mat_autocomplete_optionSelected_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.onEntrepriseSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddClientsComponent_div_65_Template_mat_option_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.openPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Cr\u00E9er une entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AddClientsComponent_div_65_mat_option_13_Template, 3, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const auto_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r0.control)("matAutocomplete", auto_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("displayWith", ctx_r0.displayFnEntreprise);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 4, ctx_r0.filteredOptions));
  }
}
function AddClientsComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function AddClientsComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.successMessage);
  }
}
function AddClientsComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 72)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Vous devez s\u00E9lectionner ou cr\u00E9er une entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AddClientsComponent_div_78_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ce champ est requis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AddClientsComponent_div_78_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessageApi, " ");
  }
}
function AddClientsComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 73)(1, "div", 74)(2, "div", 75)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Ajouter une entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddClientsComponent_div_78_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "form", 77)(8, "div", 78)(9, "div", 79)(10, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Nom entreprise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AddClientsComponent_div_78_div_16_Template, 2, 0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 79)(22, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Adresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Ville");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 25)(31, "div", 26)(32, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddClientsComponent_div_78_Template_select_change_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.onEntreprisePaysChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Pays");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Mali");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "S\u00E9n\u00E9gal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "C\u00F4te d'Ivoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Pays");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 31)(44, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function AddClientsComponent_div_78_Template_input_input_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.formatEntreprisePhoneNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "T\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Secteur");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, AddClientsComponent_div_78_div_52_Template, 2, 1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 93)(54, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddClientsComponent_div_78_Template_button_click_54_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddClientsComponent_div_78_Template_button_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.ajouterEntreprise());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, " Ajouter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.entrepriseForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r0.entrepriseForm.get("nom")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.entrepriseForm.get("nom")) == null ? null : tmp_2_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.errorMessageApi);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx_r0.entrepriseForm.valid ? "#0672E4" : "#0671e434")("color", ctx_r0.entrepriseForm.valid ? "#ffffff" : "#00000073")("cursor", ctx_r0.entrepriseForm.valid ? "pointer" : "no-drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.entrepriseForm.invalid);
  }
}
class AddClientsComponent {
  constructor(router, fb, entrepriseService, clientService, usersService) {
    this.router = router;
    this.fb = fb;
    this.entrepriseService = entrepriseService;
    this.clientService = clientService;
    this.usersService = usersService;
    this.errorMessage = '';
    this.errorMessageApi = '';
    this.successMessage = '';
    this.isEntrepriseSelected = false;
    this.showPopup = false;
    this.urllink = "assets/img/appareil.jpg";
    this.newPhotoUrl = null;
    this.selectedFile = null;
    this.imageFile = null;
    this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
    this.filteredOptions = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
    this.loading = false;
    this.optionsEntreprise$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    this.entrepriseRequiredError = false;
    this.isLoading = false;
    this.indicatif = '';
    this.maxPhoneLength = 0;
    this.entrepriseIndicatif = '';
    this.entrepriseMaxPhoneLength = 0;
    this.paysIndicatifs = {
      'Mali': {
        indicatif: '+223',
        longueur: 8
      },
      'Sénégal': {
        indicatif: '+221',
        longueur: 9
      },
      'Côte d\'Ivoire': {
        indicatif: '+225',
        longueur: 10
      },
      'Burkina Faso': {
        indicatif: '+226',
        longueur: 8
      },
      'Niger': {
        indicatif: '+227',
        longueur: 8
      },
      'France': {
        indicatif: '+33',
        longueur: 9
      },
      'Belgique': {
        indicatif: '+32',
        longueur: 9
      },
      'Suisse': {
        indicatif: '+41',
        longueur: 9
      },
      'Canada': {
        indicatif: '+1',
        longueur: 10
      },
      'États-Unis': {
        indicatif: '+1',
        longueur: 10
      },
      'Maroc': {
        indicatif: '+212',
        longueur: 9
      },
      'Algérie': {
        indicatif: '+213',
        longueur: 9
      },
      'Tunisie': {
        indicatif: '+216',
        longueur: 8
      },
      'Togo': {
        indicatif: '+228',
        longueur: 8
      },
      'Bénin': {
        indicatif: '+229',
        longueur: 8
      },
      'Guinée': {
        indicatif: '+224',
        longueur: 9
      },
      'Tchad': {
        indicatif: '+235',
        longueur: 8
      },
      'Cameroun': {
        indicatif: '+237',
        longueur: 9
      },
      'RDC': {
        indicatif: '+243',
        longueur: 9
      },
      'Gabon': {
        indicatif: '+241',
        longueur: 9
      },
      'Afrique du Sud': {
        indicatif: '+27',
        longueur: 9
      },
      'Rwanda': {
        indicatif: '+250',
        longueur: 9
      },
      'Kenya': {
        indicatif: '+254',
        longueur: 9
      },
      'Nigéria': {
        indicatif: '+234',
        longueur: 10
      },
      'Ghana': {
        indicatif: '+233',
        longueur: 9
      },
      'Éthiopie': {
        indicatif: '+251',
        longueur: 9
      },
      'Égypte': {
        indicatif: '+20',
        longueur: 10
      },
      'Inde': {
        indicatif: '+91',
        longueur: 10
      },
      'Chine': {
        indicatif: '+86',
        longueur: 11
      },
      'Mexique': {
        indicatif: '+52',
        longueur: 10
      },
      'Allemagne': {
        indicatif: '+49',
        longueur: 10
      },
      'Espagne': {
        indicatif: '+34',
        longueur: 9
      },
      'Italie': {
        indicatif: '+39',
        longueur: 10
      },
      'Royaume-Uni': {
        indicatif: '+44',
        longueur: 10
      },
      'Pays-Bas': {
        indicatif: '+31',
        longueur: 9
      },
      'Portugal': {
        indicatif: '+351',
        longueur: 9
      }
    };
    this.paysKeys = Object.keys(this.paysIndicatifs);
  }
  onPaysChange(event) {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
    if (!paysInfo) return;
    this.indicatif = paysInfo.indicatif;
    this.maxPhoneLength = paysInfo.longueur;
    const ctrl = this.clientForm.get('telephone');
    let currentValue = ctrl?.value ?? '';
    const prefix = this.indicatif.replace(/\D/g, '');
    const valueNumerique = currentValue.replace(/\D/g, '');
    if (!valueNumerique.startsWith(prefix)) {
      ctrl?.setValue(this.indicatif);
    } else {
      const reste = valueNumerique.slice(prefix.length, prefix.length + this.maxPhoneLength);
      ctrl?.setValue(this.indicatif + reste);
    }
    this.updatePhoneValidator(paysInfo.longueur);
  }
  updatePhoneValidator(longueur) {
    const ctrl = this.clientForm.get('telephone');
    const regex = new RegExp(`^\\${this.indicatif}\\s?\\d{${longueur}}$`);
    ctrl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(regex)]);
    ctrl?.updateValueAndValidity();
  }
  formatPhoneNumber() {
    let valeur = this.clientForm.get('telephone')?.value;
    if (!valeur.startsWith(this.indicatif)) {
      this.clientForm.get('telephone')?.setValue(this.indicatif);
      return;
    }
    const chiffres = valeur.replace(this.indicatif, '').replace(/\D/g, '');
    const numeroFormate = this.indicatif + chiffres;
    this.clientForm.get('telephone')?.setValue(numeroFormate.slice(0, this.indicatif.length + this.maxPhoneLength));
  }
  testImageCompression(file) {
    var _this = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!file) {
        console.log('Aucun fichier sélectionné.');
        return;
      }
      console.log('Taille originale:', file.size / 1024, 'Ko');
      // Options de compression
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1000,
        useWebWorker: true
      };
      try {
        const compressedFile = yield (0,browser_image_compression__WEBPACK_IMPORTED_MODULE_1__["default"])(file, options);
        console.log('Taille après compression:', compressedFile.size / 1024, 'Ko');
        // Vérifier si le fichier est bien en PNG/JPEG après compression
        if (compressedFile.type !== 'image/png' && compressedFile.type !== 'image/jpeg') {
          console.error('Le fichier compressé n\'est pas un format supporté (PNG ou JPEG).');
          _this.errorMessage = 'Erreur de compression : Le format de l\'image n\'est pas valide.';
          return;
        }
        // Lire l'image compressée et afficher l'aperçu
        const reader = new FileReader();
        reader.onload = e => {
          _this.newPhotoUrl = e.target?.result;
          console.log('Image compressée prête à être affichée !');
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error('Erreur lors de la compression:', error);
      }
    })();
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      // Vérification du format du fichier
      const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!allowedFormats.includes(file.type)) {
        this.errorMessage = 'Le fichier doit être une image (JPG, PNG)';
        return;
      }
      this.selectedFile = file;
      this.imageFile = file;
      // Tester la compression
      this.testImageCompression(file);
      const reader = new FileReader();
      reader.onload = e => {
        this.newPhotoUrl = e.target?.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
  goToStock() {
    this.router.navigate(['/clients']);
  }
  ngOnInit() {
    this.getListEntreprise();
    this.initEntreprise();
    this.getClientForm();
    // this.getEntrepriseForm();
    this.loadEntreprises();
  }
  getClientForm() {
    this.clientForm = this.fb.group({
      nomComplet: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
      telephone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      adresse: [''],
      poste: [''],
      pays: [''],
      ville: ['']
    });
  }
  // getEntrepriseForm() {
  //   this.entrepriseForm = this.fb.group({
  //     nom: ['', Validators.required],
  //     email: ['', Validators.email],
  //     telephone: [''],
  //     adresse: ['']
  //   });
  // }
  onEntreprisePaysChange(event) {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
    if (paysInfo) {
      this.entrepriseIndicatif = `${paysInfo.indicatif} `;
      this.entrepriseMaxPhoneLength = this.entrepriseIndicatif.length + paysInfo.longueur;
      if (!this.entrepriseForm.get('telephone')?.value.startsWith(this.entrepriseIndicatif)) {
        this.entrepriseForm.get('telephone')?.setValue(this.entrepriseIndicatif);
      }
      this.updateEntreprisePhoneValidator(paysInfo.longueur);
    }
  }
  updateEntreprisePhoneValidator(longueur) {
    this.entrepriseForm.controls['telephone'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(`^\\${this.entrepriseIndicatif}\\d{${longueur}}$`)]);
    this.entrepriseForm.controls['telephone'].updateValueAndValidity();
  }
  formatEntreprisePhoneNumber() {
    let valeur = this.entrepriseForm.get('telephone')?.value;
    if (!valeur.startsWith(this.entrepriseIndicatif)) {
      this.entrepriseForm.get('telephone')?.setValue(this.entrepriseIndicatif);
      return;
    }
    const chiffres = valeur.replace(this.entrepriseIndicatif, '').replace(/\D/g, '');
    const numeroFormate = this.entrepriseIndicatif + chiffres;
    this.entrepriseForm.get('telephone')?.setValue(numeroFormate.slice(0, this.entrepriseIndicatif.length + this.entrepriseMaxPhoneLength));
  }
  loadEntreprises() {
    const token = localStorage.getItem('accessToken') || '';
    if (!token) return;
    this.entrepriseService.getListEntreprise().subscribe(list => {
      this.optionsEntreprise$.next(list);
      this.setupAutocomplete();
    }, err => {
      // console.error('Erreur lors de la récupération des entreprises :', err);
      // this.errorMessage = err.error?.error || 'Client physiques';
    });
  }
  // Ajouter une nouvelle méthode pour configurer l'autocomplete :
  setupAutocomplete() {
    this.filteredOptions = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.control.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(value => typeof value === 'string' ? value : value?.nom)), this.optionsEntreprise$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(([name, entreprises]) => name ? this._filter(name, entreprises) : entreprises));
  }
  getListEntreprise() {
    this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.switchMap)(token => {
      if (!token) {
        console.error('Aucun token valide trouvé !');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.throwError)(() => new Error('Aucun token trouvé'));
      }
      return this.entrepriseService.getListEntreprise();
    })).subscribe({
      next: entreprises => {
        console.log('Entreprises reçues depuis l\'API :', entreprises);
        this.optionsEntreprise$.next(entreprises);
        this.filteredOptions = this.control.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(value => value ? typeof value === 'string' ? value : value.nom : ''), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(name => name ? this._filter(name, this.optionsEntreprise$.value) : this.optionsEntreprise$.value.slice()));
      },
      error: error => {
        // console.error('Erreur lors de la récupération des entreprises :', error);
      }
    });
  }
  _filter(name, entreprises) {
    const filterValue = name.toLowerCase();
    return entreprises.filter(e => e.nom.toLowerCase().includes(filterValue));
  }
  displayFnEntreprise(e) {
    return e ? e.nom : '';
  }
  // Methode pour la selection d'un entreprise
  onEntrepriseSelected(event) {
    // console.log("Entreprise selectionner :", event.entreprise.value);
    // if (event.entreprise && event.entreprise.value) {
    //   this.ajouteEntrepriseForm.get('entrepriseId')?.setValue(event.option.value.id);
    // } else {
    //   this.ajouteEntrepriseForm.get('entrepriseId')?.setValue(null);
    // }
  }
  // Ouvre/ferme le popup d’entreprise
  openPopup() {
    this.showPopup = true;
  }
  closePopup() {
    this.showPopup = false;
  }
  initEntreprise() {
    this.entrepriseForm = this.fb.group({
      nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      pays: [''],
      email: [''],
      telephone: [''],
      adresse: [''],
      siege: [''],
      secteur: ['']
    });
  }
  ajouterEntreprise() {
    if (this.entrepriseForm.invalid) return;
    const newEntreprise = {
      nom: this.entrepriseForm.value.nom,
      pays: this.entrepriseForm.value.pays,
      email: this.entrepriseForm.value.email,
      telephone: this.entrepriseForm.value.telephone,
      adresse: this.entrepriseForm.value.adresse,
      siege: this.entrepriseForm.value.siege,
      secteur: this.entrepriseForm.value.secteur,
      logo: this.entrepriseForm.value.logo,
      nif: this.entrepriseForm.value.nif,
      nina: this.entrepriseForm.value.nina,
      banque: this.entrepriseForm.value.banque,
      rccm: this.entrepriseForm.value.rccm,
      siteWeb: this.entrepriseForm.value.siteWeb,
      signataire: this.entrepriseForm.value.signataire,
      signataireNom: this.entrepriseForm.value.signataireNom,
      prefixe: this.entrepriseForm.value.prefixe,
      suffixe: this.entrepriseForm.value.suffixe,
      tauxTva: this.entrepriseForm.value.tauxTva,
      signaturNum: this.entrepriseForm.value.signaturNum,
      cachetNum: this.entrepriseForm.value.cachetNum
    };
    this.entrepriseService.addEntreprise(newEntreprise).subscribe({
      next: createdEntreprise => {
        const current = this.optionsEntreprise$.value;
        this.optionsEntreprise$.next([createdEntreprise, ...current]);
        this.control.setValue(createdEntreprise);
        this.closePopup();
        this.entrepriseForm.reset();
      },
      error: error => {
        this.errorMessageApi = error.message || 'Erreur lors de la création';
      }
    });
  }
  // Soumission du formulaire client
  ajouterClient() {
    this.errorMessage = '';
    this.successMessage = '';
    this.entrepriseRequiredError = false;
    // Vérification de la sélection d'entreprise
    if (this.isEntrepriseSelected) {
      const entrepriseSelectionnee = this.control.value;
      if (!entrepriseSelectionnee || !entrepriseSelectionnee.id) {
        this.entrepriseRequiredError = true;
        return;
      }
    }
    if (this.clientForm.invalid) {
      this.errorMessage = 'Veuillez corriger les erreurs du formulaire.';
      return;
    }
    this.isLoading = true; // Active le loading
    const client = this.clientForm.value;
    if (this.isEntrepriseSelected) {
      const selected = this.control.value;
      if (selected && selected.id) {
        client.entrepriseClient = {
          id: selected.id
        };
      }
    }
    // Simuler un délai (optionnel)
    setTimeout(() => {
      this.clientService.addClient(client).subscribe({
        next: res => {
          this.isLoading = false; // Désactive le loading
          this.successMessage = res.message;
          this.clientForm.reset();
          this.isEntrepriseSelected = false;
          this.goToClients();
        },
        error: err => {
          this.isLoading = false; // Désactive le loading en cas d'erreur
          this.errorMessage = err.error?.error || 'Erreur lors de la création';
        }
      });
    }, 2000); // Retirez le setTimeout si non nécessaire
  }
  // Annuler et revenir à la liste
  goToClients() {
    this.router.navigate(['/clients']);
  }
  navigateBack() {
    this.router.navigate(['/clients']);
  }
  static {
    this.ɵfac = function AddClientsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_2__.EntrepriseService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_client_service__WEBPACK_IMPORTED_MODULE_3__.ClientService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_4__.UsersService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AddClientsComponent,
      selectors: [["app-add-clients"]],
      decls: 79,
      vars: 24,
      consts: [["auto", "matAutocomplete"], [1, "container_global"], ["class", "loading-overlay", 4, "ngIf"], [1, "content_formulaire"], [1, "modal-body"], [1, "container_formulaire", 3, "formGroup"], ["title", "Retour sur la page client", 1, "retour_icon_text", 2, "cursor", "pointer", "color", "#0672E4", "margin-bottom", "15px", 3, "click"], [1, "ri-arrow-left-s-line"], [2, "margin-left", "8px", "font-size", "12px"], [1, "Title"], [1, "form_left_right"], [1, "formulaire"], [1, "information_cadre"], [1, "info_titre_input"], [1, "double_input"], [1, "champ_input", "champ_input2"], ["type", "text", "id", "nomComplet", "formControlName", "nomComplet", "name", "nomComplet", "placeholder", "Saisis le nom et pr\u00E9nom", 1, "input_focus"], ["for", "nomComplet", 1, "label"], ["class", "error", 4, "ngIf"], ["type", "email", "id", "email", "formControlName", "email", "name", "email", "placeholder", "Saisis l'email", 1, "input_focus"], ["for", "email", 1, "label"], ["id", "adresse", "formControlName", "adresse", "name", "adresse", "placeholder", "Saisis l'adresse", 1, "input_focus"], ["for", "adresse", 1, "label"], ["id", "poste", "formControlName", "poste", "name", "poste", "placeholder", "Saisissez votre poste ", 1, "input_focus"], ["for", "poste", 1, "label"], [1, "grid_colonne"], [1, "champ_input", "div1"], ["formControlName", "pays", 1, "input_focus", 3, "change"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "pays", 1, "label"], [1, "champ_input", "div2"], ["type", "tel", "id", "telephone", "formControlName", "telephone", "name", "telephone", "placeholder", "Saisis le num\u00E9ro de t\u00E9l\u00E9phone", 1, "input_focus", 3, "input"], ["for", "telephone", 1, "label"], [1, "champ_input", "div3"], ["id", "ville", "formControlName", "ville", "name", "ville", "placeholder", "Saisis la ville", 1, "input_focus"], ["for", "ville", 1, "label"], [1, "champ_input_inventaire"], [1, "switch"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "slider", "round"], ["class", "information_cadre", 4, "ngIf"], [1, "information_cadre", "information_cadre_save"], [1, "container_error_message"], ["class", "error-messageApi2", 4, "ngIf"], ["class", "success-messageApi2", 4, "ngIf"], ["class", "error", "style", "margin-top: 8px;", 4, "ngIf"], [1, "info_titre_input", "info_titre_input_btn"], [1, "btn_annuler"], [1, "btn_cancel", 3, "click"], [1, "btn_ajouter"], [1, "btn_save", 3, "click", "disabled"], ["class", "popup-overlay", 4, "ngIf"], [1, "loading-overlay"], [1, "loading-content"], [1, "spinner"], [1, "error"], [4, "ngIf"], [3, "value"], [1, "champ_input"], ["type", "text", "placeholder", "Selectionner un entreprise", "matInput", "", 1, "input_focus", "input_cursor", 3, "formControl", "matAutocomplete"], ["for", "categorieId", 1, "label"], [3, "optionSelected", "displayWith"], [1, "select-option", 3, "click"], [2, "display", "flex", "align-items", "center", "color", "#0672E4"], [1, "ri-community-line"], [2, "margin-left", "8px"], [1, "icon_arrow"], [1, "ri-arrow-down-s-line"], [1, "option-content"], [1, "error-messageApi2"], [1, "success-messageApi2"], [1, "error", 2, "margin-top", "8px"], [1, "popup-overlay"], [1, "popup-content"], [1, "popup-header"], [1, "close-btn", 3, "click"], [3, "formGroup"], [1, "popup-body"], [1, "champ_grid"], ["type", "text", "formControlName", "nom", "placeholder", "Saisis le nom de l'entreprise", 1, "input_focus"], [1, "label"], [2, "color", "#ff0000", "margin-left", "5px"], ["class", "error-text", 4, "ngIf"], ["type", "email", "formControlName", "email", "placeholder", "Saisis l'email", 1, "input_focus"], ["type", "text", "formControlName", "adresse", "placeholder", "Saisis l'adresse", 1, "input_focus"], ["type", "text", "formControlName", "siege", "placeholder", "Saisis le si\u00E8ge", 1, "input_focus"], ["value", "Mali"], ["value", "S\u00E9n\u00E9gal"], ["value", "C\u00F4te d'Ivoire"], ["type", "tel", "formControlName", "telephone", "placeholder", "Saisis le num\u00E9ro de t\u00E9l\u00E9phone", 1, "input_focus", 3, "input"], ["id", "ville", "formControlName", "secteur", "name", "ville", "placeholder", "Saisis la ville", 1, "input_focus"], ["class", "error-messageApi", 4, "ngIf"], [1, "popup-footer"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "submit", 1, "btn-submit", 3, "click", "disabled"], [1, "error-text"], [1, "error-messageApi"]],
      template: function AddClientsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddClientsComponent_div_1_Template, 5, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 3)(3, "div", 4)(4, "form", 5)(5, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddClientsComponent_Template_p_click_5_listener() {
            return ctx.navigateBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 9)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Ajouter un client individuel");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "div", 14)(17, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Nom et pr\u00E9nom");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AddClientsComponent_div_21_Template, 3, 2, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, AddClientsComponent_div_26_Template, 2, 1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 14)(28, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Adresse");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Poste");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 25)(37, "div", 26)(38, "select", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddClientsComponent_Template_select_change_38_listener($event) {
            return ctx.onPaysChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Pays");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, AddClientsComponent_option_41_Template, 2, 3, "option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Pays");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, AddClientsComponent_div_44_Template, 3, 0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 31)(46, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function AddClientsComponent_Template_input_input_46_listener() {
            return ctx.formatPhoneNumber();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "T\u00E9l\u00E9phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, AddClientsComponent_div_49_Template, 3, 2, "div", 18)(50, AddClientsComponent_div_50_Template, 3, 0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Ville");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 12)(56, "div", 13)(57, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Entreprise");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 37)(60, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "J'appartient \u00E0 une entreprise");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "label", 38)(63, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AddClientsComponent_Template_input_ngModelChange_63_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.isEntrepriseSelected, $event) || (ctx.isEntrepriseSelected = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, AddClientsComponent_div_65_Template, 17, 6, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 42)(67, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, AddClientsComponent_div_68_Template, 2, 1, "div", 44)(69, AddClientsComponent_div_69_Template, 2, 1, "div", 45)(70, AddClientsComponent_div_70_Template, 3, 0, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 47)(72, "div", 48)(73, "button", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddClientsComponent_Template_button_click_73_listener() {
            return ctx.goToClients();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 50)(76, "button", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddClientsComponent_Template_button_click_76_listener() {
            return ctx.ajouterClient();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, " Ajouter ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](78, AddClientsComponent_div_78_Template, 58, 10, "div", 52);
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.clientForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.clientForm.get("nomComplet")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.clientForm.get("nomComplet")) == null ? null : tmp_2_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.clientForm.get("email")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.clientForm.get("email")) == null ? null : tmp_3_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.paysKeys);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.clientForm.get("pays")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.clientForm.get("pays")) == null ? null : tmp_5_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.clientForm.get("telephone")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.clientForm.get("telephone")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["pattern"]) && ((tmp_6_0 = ctx.clientForm.get("pays")) == null ? null : tmp_6_0.value));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.clientForm.get("telephone")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.clientForm.get("telephone")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.isEntrepriseSelected);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](23, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isEntrepriseSelected);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.entrepriseRequiredError);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx.clientForm.valid ? "#0672E4" : "#0671e434")("color", ctx.clientForm.valid ? "#ffffff" : "#00000073")("cursor", ctx.clientForm.valid ? "pointer" : "no-drop");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.clientForm.invalid)("disabled", ctx.clientForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showPopup);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__.M, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteTrigger],
      styles: ["@charset \"UTF-8\";\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 18px;\n  z-index: 1000;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid white;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.container_global[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 72% 28%;\n  position: relative;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.champ_input_list_stock[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.champ_input[_ngcontent-%COMP%]   .title_input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -18px;\n}\n\n.champ_input_Categorie[_ngcontent-%COMP%] {\n  margin-bottom: 15px !important;\n}\n\n.formulaire[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.Title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #695c5c;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: rgb(107, 102, 102);\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 5px;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n.input_focus2[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 250px;\n  height: 57px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  padding-left: 10px;\n  background: none;\n  color: #777474;\n  border-radius: 5px;\n  padding-top: 10px;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  resize: none;\n}\n\n.input_focus2[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.champ_input2[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 0px;\n  pointer-events: none;\n  color: rgb(66, 56, 56);\n}\n\n.champ_input[_ngcontent-%COMP%]   .labelCategory[_ngcontent-%COMP%] {\n  color: rgb(66, 56, 56);\n  left: 0;\n  font-size: 14px;\n}\n\n.input_focus2[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus2[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n  background-color: #fff;\n}\n\n.input_focus2[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus2[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 15px;\n  transition: all 0.2s ease-in-out;\n}\n\n.info_titre_input[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.info_titre_input[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 10px;\n  letter-spacing: 0.6px;\n}\n\n.champ_input2[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50%;\n  box-sizing: border-box;\n  vertical-align: top;\n}\n\n.champ_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n  border-radius: 5px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.double_input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-top: 10px;\n}\n\n\n\n.container_file[_ngcontent-%COMP%] {\n  width: 150px;\n  border-radius: 10px;\n  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  gap: 5px;\n  background-color: rgba(0, 110, 255, 0.041);\n  margin-bottom: 10px;\n  margin-top: 20px;\n}\n\n.header_file[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 140px;\n  border: 1px dashed rgba(6, 113, 228, 0.6156862745);\n  border-radius: 10px;\n  flex-direction: column;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n\n.header_file[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.header_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n}\n\n.footer_file[_ngcontent-%COMP%] {\n  background-color: rgba(0, 110, 255, 0.075);\n  width: 140px;\n  height: 35px;\n  padding: 5px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: black;\n  border: none;\n  margin-top: 3px;\n}\n\n.footer_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  font-size: 10px;\n}\n\n.footer_file[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 7px;\n}\n\n#file[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container_error_message[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: red;\n  font-weight: bold;\n}\n\n.information_cadre_save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.info_titre_input_btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 20px;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #ff0000;\n  color: #fff;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #0672E4;\n  color: #fff;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all 0.5s;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\n\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #0672E4; \n\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n.input_cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.icon_arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 25px;\n}\n\n.icon_arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #000;\n}\n\n\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.popup-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 50%;\n}\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.popup-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.popup-footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: right;\n}\n\n.btn-cancel[_ngcontent-%COMP%], .btn-submit[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: #ff0000;\n  padding: 6px 25px;\n  color: #fff;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  padding: 6px 25px;\n  color: #ffffff;\n  cursor: pointer;\n  cursor: no-drop;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all ease-in 0.5s;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  color: #ff4444;\n  font-size: 0.8rem;\n  margin-top: 4px;\n}\n\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.error-messageApi[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: red;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  left: -20px;\n}\n\n.success-messageApi[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0672E4;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  left: -20px;\n}\n\n.error-messageApi2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: red;\n  font-weight: bold;\n}\n\n.success-messageApi2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0672E4;\n  font-weight: bold;\n}\n\n.error[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #ff0000;\n  font-weight: bold;\n  position: relative;\n}\n\n.grid_colonne[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.div1[_ngcontent-%COMP%] {\n  grid-area: 1/1/2/2;\n}\n\n.div2[_ngcontent-%COMP%] {\n  grid-area: 1/2/2/3;\n}\n\n.div3[_ngcontent-%COMP%] {\n  grid-area: 1/3/2/4;\n}\n\ninput[type=tel][_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jbGllbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUFLLHVCQUFBO0VBRUw7RUFEQTtJQUFPLHlCQUFBO0VBSVA7QUFDRjtBQURBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFBRSxlQUFBO0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFDRTtFQUNFLDhCQUFBO0FBRUo7O0FBQ0U7RUFDRSxrQkFBQTtBQUVKOztBQUNFO0VBQ0UsZUFBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHRTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FB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LGtCQUFBO0FBdEJGOztBQXlCQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUF0QkY7O0FBeUJBO0VBQVEsa0JBQUE7QUFyQlI7O0FBc0JBO0VBQVEsa0JBQUE7QUFsQlI7O0FBbUJBO0VBQVEsa0JBQUE7QUFmUjs7QUFpQkE7RUFDRSxxQkFBQTtBQWRGIiwiZmlsZSI6ImFkZC1jbGllbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuXG4ubG9hZGluZy1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDsgXG59XG5cbi5zcGlubmVyIHtcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5cbi5jb250YWluZXJfZ2xvYmFsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MiUgMjglO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLyogZm9ybXVsYWlyZSAqL1xuICBcbiAgLmNoYW1wX2lucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0X2xpc3Rfc3RvY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLmNoYW1wX2lucHV0IC50aXRsZV9pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTE4cHg7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dF9DYXRlZ29yaWUge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1xuICB9XG4gIFxuICAuZm9ybXVsYWlyZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuVGl0bGUgaDMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBtaW4td2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNDlweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLy9wYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzY5NWM1YztcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0IC5sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjJweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6IHJnYigxMDcsIDEwMiwgMTAyKTtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuICBcbiAgXG4gIC5pbnB1dF9mb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbiAgLmlucHV0X2ZvY3VzOmZvY3VzICsgLmxhYmVsIHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA1N3B4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICM3Nzc0NzQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gICAgcmVzaXplOiBub25lO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0MiAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIycHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiByZ2IoNjYsIDU2LCA1Nik7XG4gIH1cbiAgXG4gIFxuICAuY2hhbXBfaW5wdXQgLmxhYmVsQ2F0ZWdvcnkge1xuICAgIGNvbG9yOiByZ2IoNjYsIDU2LCA1Nik7XG4gICAgbGVmdDogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4gIC5pbnB1dF9mb2N1czI6Zm9jdXMgKyAubGFiZWwge1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICAuaW5mb190aXRyZV9pbnB1dCB7XG4gICAgcGFkZGluZzogMjBweDsgXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cblxuICAuaW5mb190aXRyZV9pbnB1dCBoNCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0MiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG4gIFxuICAuY2hhbXBfZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICAgIGdyaWQtcm93LWdhcDogMHB4O1xuICAgIGdhcDogMjBweDtcbiAgfVxuICBcbiAgLy8gLmlucHV0X2ZvY3VzX2xhcmdle1xuICAvLyAgIC8vbWluLXdpZHRoOiAzODBweDtcbiAgLy8gICB3aWR0aDogMTAwJTtcbiAgLy8gfVxuICBcbiAgXG4gIC5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgIC8vIDwhLS0gTGVzIGluZm9ybWF0aW9uIGRlcyBtYWdhc2luICAtLT5cbiAgIC5pbmZvcm1hdGlvbl9jYWRyZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMDgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuZG91YmxlX2lucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbi8qIEZyb20gVWl2ZXJzZS5pbyBieSBZYXlhMTIwODUgKi8gXG4uY29udGFpbmVyX2ZpbGUge1xuICAgIC8vIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGdhcDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTEwLCAyNTUsIDAuMDQxKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5oZWFkZXJfZmlsZSB7XG4gICAgLy8gZmxleDogMTtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzA2NzFlNDlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgaW1ne1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgfVxuICBcbiAgLmhlYWRlcl9maWxlIHN2ZyB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICBcbiAgLmhlYWRlcl9maWxlIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgXG4gIC5mb290ZXJfZmlsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTAsIDI1NSwgMC4wNzUpO1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICB9XG4gIFxuICAuZm9vdGVyX2ZpbGUgcCB7XG4gICAgbWFyZ2luOiAwIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgXG4gIC5mb290ZXJfZmlsZSBpIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gIH1cbiAgXG4gICNmaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuY29udGFpbmVyX2Vycm9yX21lc3NhZ2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG4gIFxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLy8gbWFyZ2luLXRvcDogN3B4O1xuICB9XG5cbiAgLmluZm9ybWF0aW9uX2NhZHJlX3NhdmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuaW5mb190aXRyZV9pbnB1dF9idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBnYXA6IDIwcHg7XG4gIH1cblxuICAvLyBidXR0b24gYW5udWxlclxuLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsIHtcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC8vIGJ1dHRvbiBhbm51bGVyIGhvdmVyXG4gIC5idG5fYW5udWxlciAuYnRuX2NhbmNlbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MDEwMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG4gIH1cblxuLy8gYnV0dG9uIGFqb3V0ZXIgXG4uYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlIHtcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC8vIGJ1dHRvbiBham91dGVyIGhvdmVyXG4gIC5idG5fYWpvdXRlciAuYnRuX3NhdmU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgfVxuXG4gIC5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLy8gVG9nZ2xlIFxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi8qIE1hc3F1ZXIgbCdpbnB1dCBjaGVja2JveCBvcmlnaW5hbCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIExlIMKrIHNsaWRlciDCuyAqL1xuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMThweDsgXG4gIHdpZHRoOiAxOHB4O1xuICBsZWZ0OiAzcHg7IFxuICBib3R0b206IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBRdWFuZCBsZSBjaGVja2JveCBlc3QgY29jaMOpICovXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7IC8qIENvdWxldXIgYXUgY2hvaXggKi9cbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG4uaW5wdXRfY3Vyc29yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbl9hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMjVweDtcbn1cblxuLmljb25fYXJyb3cgaSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi8qIFN0eWxlcyBwb3VyIGxlIHBvcHVwICovXG4ucG9wdXAtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ucG9wdXAtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5wb3B1cC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wb3B1cC1oZWFkZXIgaDQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jbG9zZS1idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9wdXAtZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi8vIEJ1dHRvbiBcblxuLmJ0bi1jYW5jZWwsIC5idG4tc3VibWl0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgcGFkZGluZzogNnB4IDI1cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWNhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkODAxMDE7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbn1cblxuLmJ0bi1zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjQUNDRUJDO1xuICBwYWRkaW5nOiA2cHggMjVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBuby1kcm9wO1xufVxuXG4uYnRuLXN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbn1cblxuLmVycm9yLXRleHQge1xuICBjb2xvcjogI2ZmNDQ0NDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmJ0bi1zdWJtaXQ6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjc7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5lcnJvci1tZXNzYWdlQXBpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtMjBweDtcbn1cblxuLnN1Y2Nlc3MtbWVzc2FnZUFwaSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IC0yMHB4O1xufVxuXG4uZXJyb3ItbWVzc2FnZUFwaTIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3VjY2Vzcy1tZXNzYWdlQXBpMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZXJyb3Ige1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZ3JpZF9jb2xvbm5lIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbiAgZ2FwOiAyMHB4O1xufVxuICBcbi5kaXYxIHsgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyOyB9XG4uZGl2MiB7IGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMzsgfVxuLmRpdjMgeyBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7IH1cblxuaW5wdXRbdHlwZT1cInRlbFwiXSB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9jbGllbnRzL2FkZENsaWVudC9hZGQtY2xpZW50cy9hZGQtY2xpZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFFRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsMENBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFBSyx1QkFBQTtFQUVMO0VBREE7SUFBTyx5QkFBQTtFQUlQO0FBQ0Y7QUFEQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBQUUsZUFBQTtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQ0U7RUFDRSw4QkFBQTtBQUVKOztBQUNFO0VBQ0Usa0JBQUE7QUFFSjs7QUFDRTtFQUNFLGVBQUE7QUFFSjs7QUFDRTtFQUNFLFdBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FB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QTtFQUNBLGlCQUFBO0FBdEJGOztBQXlCQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXRCRjs7QUF5QkE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBdEJGOztBQXlCQTtFQUFRLGtCQUFBO0FBckJSOztBQXNCQTtFQUFRLGtCQUFBO0FBbEJSOztBQW1CQTtFQUFRLGtCQUFBO0FBZlI7O0FBaUJBO0VBQ0UscUJBQUE7QUFkRjtBQUNBLDQrb0JBQTQrb0IiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG5cbi5sb2FkaW5nLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4OyBcbn1cblxuLnNwaW5uZXIge1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cblxuLmNvbnRhaW5lcl9nbG9iYWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcyJSAyOCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAvKiBmb3JtdWxhaXJlICovXG4gIFxuICAuY2hhbXBfaW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfbGlzdF9zdG9jayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAuY2hhbXBfaW5wdXQgLnRpdGxlX2lucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMThweDtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0X0NhdGVnb3JpZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5mb3JtdWxhaXJlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5UaXRsZSBoMyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIG1pbi13aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA0OXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvL3BhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjNjk1YzVjO1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQgLmxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb2xvcjogcmdiKDEwNywgMTAyLCAxMDIpO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIFxuICBcbiAgLmlucHV0X2ZvY3VzOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuICAuaW5wdXRfZm9jdXM6Zm9jdXMgKyAubGFiZWwge1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDU3cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzc3NzQ3NDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICByZXNpemU6IG5vbmU7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQyIC5sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjJweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6IHJnYig2NiwgNTYsIDU2KTtcbiAgfVxuICBcbiAgXG4gIC5jaGFtcF9pbnB1dCAubGFiZWxDYXRlZ29yeSB7XG4gICAgY29sb3I6IHJnYig2NiwgNTYsIDU2KTtcbiAgICBsZWZ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbiAgLmlucHV0X2ZvY3VzMjpmb2N1cyArIC5sYWJlbCB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5pbmZvX3RpdHJlX2lucHV0IHtcbiAgICBwYWRkaW5nOiAyMHB4OyBcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5pbmZvX3RpdHJlX2lucHV0IGg0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbiAgXG4gIC5jaGFtcF9ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG4gIFxuICAvLyAuaW5wdXRfZm9jdXNfbGFyZ2V7XG4gIC8vICAgLy9taW4td2lkdGg6IDM4MHB4O1xuICAvLyAgIHdpZHRoOiAxMDAlO1xuICAvLyB9XG4gIFxuICBcbiAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIFxuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAgLy8gPCEtLSBMZXMgaW5mb3JtYXRpb24gZGVzIG1hZ2FzaW4gIC0tPlxuICAgLmluZm9ybWF0aW9uX2NhZHJlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5kb3VibGVfaW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuLyogRnJvbSBVaXZlcnNlLmlvIGJ5IFlheWExMjA4NSAqLyBcbi5jb250YWluZXJfZmlsZSB7XG4gICAgLy8gaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZ2FwOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTAsIDI1NSwgMC4wNDEpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmhlYWRlcl9maWxlIHtcbiAgICAvLyBmbGV4OiAxO1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjMDY3MWU0OWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBpbWd7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgc3ZnIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLmZvb3Rlcl9maWxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA3NSk7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gIH1cbiAgXG4gIC5mb290ZXJfZmlsZSBwIHtcbiAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICBcbiAgLmZvb3Rlcl9maWxlIGkge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgfVxuICBcbiAgI2ZpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jb250YWluZXJfZXJyb3JfbWVzc2FnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbiAgXG4gIC5lcnJvci1tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyBtYXJnaW4tdG9wOiA3cHg7XG4gIH1cblxuICAuaW5mb3JtYXRpb25fY2FkcmVfc2F2ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5pbmZvX3RpdHJlX2lucHV0X2J0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGdhcDogMjBweDtcbiAgfVxuXG4gIC8vIGJ1dHRvbiBhbm51bGVyXG4uYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWwge1xuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLy8gYnV0dG9uIGFubnVsZXIgaG92ZXJcbiAgLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbiAgfVxuXG4vLyBidXR0b24gYWpvdXRlciBcbi5idG5fYWpvdXRlciAuYnRuX3NhdmUge1xuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLy8gYnV0dG9uIGFqb3V0ZXIgaG92ZXJcbiAgLmJ0bl9ham91dGVyIC5idG5fc2F2ZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB9XG5cbiAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIFxuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAvLyBUb2dnbGUgXG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLyogTWFzcXVlciBsJ2lucHV0IGNoZWNrYm94IG9yaWdpbmFsICovXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogTGUgw4LCqyBzbGlkZXIgw4LCuyAqL1xuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMThweDsgXG4gIHdpZHRoOiAxOHB4O1xuICBsZWZ0OiAzcHg7IFxuICBib3R0b206IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBRdWFuZCBsZSBjaGVja2JveCBlc3QgY29jaMODwqkgKi9cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgLyogQ291bGV1ciBhdSBjaG9peCAqL1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi5pbnB1dF9jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uX2Fycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAyNXB4O1xufVxuXG4uaWNvbl9hcnJvdyBpIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLyogU3R5bGVzIHBvdXIgbGUgcG9wdXAgKi9cbi5wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnBvcHVwLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBvcHVwLWhlYWRlciBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cC1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLy8gQnV0dG9uIFxuXG4uYnRuLWNhbmNlbCwgLmJ0bi1zdWJtaXQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICBwYWRkaW5nOiA2cHggMjVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MDEwMTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xufVxuXG4uYnRuLXN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNBQ0NFQkM7XG4gIHBhZGRpbmc6IDZweCAyNXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IG5vLWRyb3A7XG59XG5cbi5idG4tc3VibWl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gIGNvbG9yOiAjZmY0NDQ0O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uYnRuLXN1Ym1pdDpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmVycm9yLW1lc3NhZ2VBcGkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IC0yMHB4O1xufVxuXG4uc3VjY2Vzcy1tZXNzYWdlQXBpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzA2NzJFNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogLTIwcHg7XG59XG5cbi5lcnJvci1tZXNzYWdlQXBpMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdWNjZXNzLW1lc3NhZ2VBcGkyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzA2NzJFNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ncmlkX2NvbG9ubmUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gIGdyaWQtcm93LWdhcDogMHB4O1xuICBnYXA6IDIwcHg7XG59XG4gIFxuLmRpdjEgeyBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7IH1cbi5kaXYyIHsgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzOyB9XG4uZGl2MyB7IGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDsgfVxuXG5pbnB1dFt0eXBlPVwidGVsXCJdIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_clients_addClient_add-clients_add-clients_component_ts.js.map