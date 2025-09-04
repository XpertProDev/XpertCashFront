"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_fournisseurs_fournisseurs_component_ts"],{

/***/ 66375:
/*!********************************************************!*\
  !*** ./src/app/admin-page/SERVICES/produit.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProduitService: () => (/* binding */ ProduitService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 88026);






class ProduitService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  ajouterProduit(boutiqueIds, quantites, seuilAlert, produit, imageFile, addToStock, datePreemption) {
    const url = `${this.apiUrl}/create?addToStock=${addToStock}`;
    const formData = new FormData();
    formData.append('boutiqueIds', JSON.stringify(boutiqueIds));
    formData.append('quantites', JSON.stringify(quantites));
    formData.append('produit', JSON.stringify(produit));
    formData.append('seuilAlert', JSON.stringify(seuilAlert));
    if (imageFile) {
      formData.append('image', imageFile, imageFile.name);
    }
    // Ajouter dans formData
    if (datePreemption) {
      formData.append('datePreemption', datePreemption);
    }
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.post(url, formData, {
        headers
      });
    }));
  }
  modifierProduit(produit, file) {
    const formData = new FormData();
    // Supprime id du payload si non nécessaire
    const {
      id,
      ...productData
    } = produit;
    formData.append('produit', JSON.stringify(productData));
    formData.append('addToStock', produit.enStock ? 'true' : 'false');
    if (file) {
      formData.append('image', file, file.name);
    }
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.patch(`${this.apiUrl}/updateProduit/${produit.id}`, formData, {
        headers
      });
    }));
  }
  // Nouvelle méthode pour récupérer les détails d'un produit par son ID
  getProduitById(productId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/produits/${productId}`, {
        headers
      });
    }));
  }
  // Méthode pour récupérer la liste des produits d'une boutique
  getProduitsEntreprise(boutiqueId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/produits/${boutiqueId}/stock`, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
        if (error.status === 400 && error.error?.error === 'Cette boutique est désactivée, ses produits ne sont pas accessibles !') {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error('BOUTIQUE_DESACTIVEE'));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
      }));
    }));
  }
  // Méthode pour récupérer les totaux des produits en stock (déjà existante)
  getProduitBoutique(boutiqueId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/produits/${boutiqueId}/totaux-stock`, {
        headers
      });
    }));
  }
  // Nouvelle méthode pour récupérer tous les produits de l'entreprise
  getProduitsByEntrepriseId(entrepriseId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/produits/entreprise/${entrepriseId}`, {
        headers
      });
    }));
  }
  getProduitsParEntreprise(entrepriseId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/produits/entreprise/${entrepriseId}`, {
        headers
      });
    }));
  }
  // Méthode pour recuperer les fournisseur de lutilisateur connecter
  getFournisseurs() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/get-fournisseurs`, {
        headers
      });
    }));
  }
  // Ajoutez un paramètre pour les IDs de boutiques
  importProduitsFromExcel(formData, boutiqueIds) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      // Ajoutez les IDs de boutique dans le FormData
      formData.append('boutiqueIds', JSON.stringify(boutiqueIds));
      return this.http.post(`${this.apiUrl}/import-produits-excel`, formData, {
        headers
      });
    }));
  }
  // Pour les produits d'entreprise (toutes les boutiques) :
  getProduitsByEntrepriseIdPaginated(entrepriseId, page = 0, size = 20) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set('page', page.toString()).set('size', size.toString());
      return this.http.get(`${this.apiUrl}/entreprise/${entrepriseId}/produits/paginated`, {
        headers,
        params
      });
    }));
  }
  // Pour les produits d'une boutique :
  getProduitsEntreprisePaginated(boutiqueId, page = 0, size = 20) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set('page', page.toString()).set('size', size.toString());
      return this.http.get(`${this.apiUrl}/boutique/${boutiqueId}/produits/paginated`, {
        headers,
        params
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
        if (error.status === 400 && error.error?.error === 'Cette boutique est désactivée, ses produits ne sont pas accessibles !') {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error('BOUTIQUE_DESACTIVEE'));
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
      }));
    }));
  }
  static {
    this.ɵfac = function ProduitService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProduitService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: ProduitService,
      factory: ProduitService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 91166:
/*!*******************************************************************!*\
  !*** ./src/app/admin-page/fournisseurs/fournisseurs.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FournisseursComponent: () => (/* binding */ FournisseursComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _MODELS_truncate_email_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MODELS/truncate-email.pipe */ 65698);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SERVICES/produit.service */ 66375);
/* harmony import */ var _SERVICES_fournisseur_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SERVICES/fournisseur-service */ 35408);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SERVICES/users.service */ 88026);
/* harmony import */ var _SERVICES_stocks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SERVICES/stocks.service */ 10933);
/* harmony import */ var _SERVICES_transfert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SERVICES/transfert-service */ 11856);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
// fournisseurs.component.ts

















const _c0 = () => [6, 10, 25, 100];
function FournisseursComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FournisseursComponent_div_10_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.toggleView("list"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FournisseursComponent_div_10_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.toggleView("grid"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Liste ", ctx_r1.isListView ? "\u2713" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Cadre ", !ctx_r1.isListView ? "\u2713" : "", " ");
  }
}
function FournisseursComponent_table_15_tr_16_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 31);
  }
  if (rf & 2) {
    const fournisseur_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(fournisseur_r5.nomComplet), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function FournisseursComponent_table_15_tr_16_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Non renseign\u00E9");
  }
}
function FournisseursComponent_table_15_tr_16_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 31);
  }
  if (rf & 2) {
    const fournisseur_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(fournisseur_r5.email), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function FournisseursComponent_table_15_tr_16_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Non renseign\u00E9");
  }
}
function FournisseursComponent_table_15_tr_16_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 31);
  }
  if (rf & 2) {
    const fournisseur_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(fournisseur_r5.adresse), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function FournisseursComponent_table_15_tr_16_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Non renseign\u00E9");
  }
}
function FournisseursComponent_table_15_tr_16_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 31);
  }
  if (rf & 2) {
    const fournisseur_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(fournisseur_r5.telephone), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function FournisseursComponent_table_15_tr_16_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Non renseign\u00E9");
  }
}
function FournisseursComponent_table_15_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FournisseursComponent_table_15_tr_16_Template_tr_click_0_listener() {
      const fournisseur_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.openDetail(fournisseur_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td")(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, FournisseursComponent_table_15_tr_16_span_5_Template, 1, 1, "span", 30)(6, FournisseursComponent_table_15_tr_16_ng_template_6_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, FournisseursComponent_table_15_tr_16_span_9_Template, 1, 1, "span", 30)(10, FournisseursComponent_table_15_tr_16_ng_template_10_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, FournisseursComponent_table_15_tr_16_span_13_Template, 1, 1, "span", 30)(14, FournisseursComponent_table_15_tr_16_ng_template_14_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, FournisseursComponent_table_15_tr_16_span_17_Template, 1, 1, "span", 30)(18, FournisseursComponent_table_15_tr_16_ng_template_18_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fournisseur_r5 = ctx.$implicit;
    const noNom_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
    const noEmail_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11);
    const noAdresse_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](15);
    const noTel_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", fournisseur_r5.photo, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fournisseur_r5.nomComplet)("ngIfElse", noNom_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fournisseur_r5.email)("ngIfElse", noEmail_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fournisseur_r5.adresse)("ngIfElse", noAdresse_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fournisseur_r5.telephone)("ngIfElse", noTel_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](22, 10, fournisseur_r5.createdAt, "dd/MM/yyyy"));
  }
}
function FournisseursComponent_table_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "table")(1, "thead")(2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FournisseursComponent_table_15_Template_th_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.sort("email"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FournisseursComponent_table_15_Template_th_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.sort("adresse"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Adresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FournisseursComponent_table_15_Template_th_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.sort("telephone"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "T\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Date Cr\u00E9ation");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, FournisseursComponent_table_15_tr_16_Template, 23, 13, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r1.sortField === "email" ? ctx_r1.sortDirection === "asc" ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line" : "ri-arrow-up-down-line");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.paginatedFournisseurs);
  }
}
function FournisseursComponent_div_16_div_2_h3_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "h3", 31);
  }
  if (rf & 2) {
    const fournisseur_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(fournisseur_r11.nomComplet), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function FournisseursComponent_div_16_div_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Non renseign\u00E9");
  }
}
function FournisseursComponent_div_16_div_2_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "truncateEmail");
  }
  if (rf & 2) {
    const fournisseur_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, fournisseur_r11.email)), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function FournisseursComponent_div_16_div_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Non renseign\u00E9");
  }
}
function FournisseursComponent_div_16_div_2_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 31);
  }
  if (rf & 2) {
    const fournisseur_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(fournisseur_r11.telephone), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function FournisseursComponent_div_16_div_2_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Non renseign\u00E9");
  }
}
function FournisseursComponent_div_16_div_2_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 31);
  }
  if (rf & 2) {
    const fournisseur_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(fournisseur_r11.adresse), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function FournisseursComponent_div_16_div_2_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Non renseign\u00E9");
  }
}
function FournisseursComponent_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FournisseursComponent_div_16_div_2_Template_div_click_0_listener() {
      const fournisseur_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.openDetail(fournisseur_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 36)(2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 39)(5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, FournisseursComponent_div_16_div_2_h3_6_Template, 1, 1, "h3", 30)(7, FournisseursComponent_div_16_div_2_ng_template_7_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 41)(10, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, FournisseursComponent_div_16_div_2_span_12_Template, 2, 3, "span", 30)(13, FournisseursComponent_div_16_div_2_ng_template_13_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 44)(16, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, FournisseursComponent_div_16_div_2_span_18_Template, 1, 1, "span", 30)(19, FournisseursComponent_div_16_div_2_ng_template_19_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 47)(22, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, FournisseursComponent_div_16_div_2_span_24_Template, 1, 1, "span", 30)(25, FournisseursComponent_div_16_div_2_ng_template_25_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const fournisseur_r11 = ctx.$implicit;
    const noNomCard_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](8);
    const noEmailCard_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);
    const noTelCard_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](20);
    const noAdresseCard_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", fournisseur_r11.photo, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fournisseur_r11.nomComplet)("ngIfElse", noNomCard_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fournisseur_r11.email)("ngIfElse", noEmailCard_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fournisseur_r11.telephone)("ngIfElse", noTelCard_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", fournisseur_r11.adresse)("ngIfElse", noAdresseCard_r15);
  }
}
function FournisseursComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, FournisseursComponent_div_16_div_2_Template, 27, 9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.paginatedFournisseurs);
  }
}
function FournisseursComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Aucun fournisseur trouv\u00E9e ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function FournisseursComponent_mat_paginator_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-paginator", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("page", function FournisseursComponent_mat_paginator_19_Template_mat_paginator_page_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("length", ctx_r1.filteredFournisseurs.length)("pageSize", ctx_r1.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](3, _c0));
  }
}
class FournisseursComponent {
  constructor(produitService, fournisseurService, fb, router, usersService, stockService, cdRef, transfertService, sanitizer // Injection ajoutée
  ) {
    this.produitService = produitService;
    this.fournisseurService = fournisseurService;
    this.fb = fb;
    this.router = router;
    this.usersService = usersService;
    this.stockService = stockService;
    this.cdRef = cdRef;
    this.transfertService = transfertService;
    this.sanitizer = sanitizer;
    this.isListView = true;
    this.showDropdown = false;
    this.searchText = ''; // Modifié de searchQuery à searchText
    this.fournisseursLoaded = false;
    // Pagination
    this.pageSize = 6;
    this.currentPage = 0;
    this.sortField = 'nom';
    this.sortDirection = 'asc';
    this.fournisseurs = [];
    this.imgUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.imgUrl;
  }
  ngOnInit() {
    const savedView = localStorage.getItem('fournisseurView');
    this.isListView = savedView !== 'grid';
    this.loadFournisseurs();
  }
  loadFournisseurs() {
    this.fournisseursLoaded = false;
    this.fournisseurService.getAllFournisseurs().subscribe({
      next: fournisseurs => {
        this.fournisseurs = fournisseurs.reverse();
        //photo de fournisseur specifique pour chaque fournisseur
        this.fournisseurs.forEach(fournisseur => {
          if (fournisseur.photo) {
            fournisseur.photo = `${this.imgUrl}${fournisseur.photo}`;
          } else {
            fournisseur.photo = 'assets/img/profil.png'; // Chemin par défaut si pas de photo
          }
        });
        console.log('Fournisseurs:', this.fournisseurs);
        this.fournisseursLoaded = true;
      },
      error: err => {
        console.error("Erreur lors de la récupération des fournisseurs", err);
        this.fournisseurs = [];
        this.fournisseursLoaded = true;
      }
    });
  }
  toggleView(viewType) {
    this.isListView = viewType === 'list';
    localStorage.setItem('fournisseurView', viewType);
  }
  sort(field) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.fournisseurs.sort((a, b) => {
      const valueA = a[field]?.toString().toLowerCase() ?? '';
      const valueB = b[field]?.toString().toLowerCase() ?? '';
      return valueA.localeCompare(valueB) * (this.sortDirection === 'asc' ? 1 : -1);
    });
  }
  // Nouvelle méthode pour mettre en évidence les correspondances
  highlightMatch(text) {
    if (!text) return '';
    if (!this.searchText.trim()) return text;
    const escapedSearch = this.searchText.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedSearch})`, 'gi');
    return this.sanitizer.bypassSecurityTrustHtml(text.replace(regex, '<mark>$1</mark>'));
  }
  // Filtrage des fournisseurs
  get filteredFournisseurs() {
    if (!this.searchText.trim()) return this.fournisseurs;
    const searchLower = this.searchText.toLowerCase().trim();
    return this.fournisseurs.filter(fournisseur => fournisseur.nomComplet?.toLowerCase().includes(searchLower) || fournisseur.email?.toLowerCase().includes(searchLower) || fournisseur.adresse?.toLowerCase().includes(searchLower) || fournisseur.telephone?.includes(searchLower));
  }
  onPageChange(event) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.fournisseursLoaded = true;
  }
  // Mise à jour pour utiliser la liste filtrée
  get paginatedFournisseurs() {
    const start = this.currentPage * this.pageSize;
    return this.filteredFournisseurs.slice(start, start + this.pageSize);
  }
  // Méthode pour ouvrir le détail d'un fournisseur
  openDetail(fournisseurId) {
    this.router.navigate(['/detail-fournisseur', fournisseurId]);
  }
  static {
    this.ɵfac = function FournisseursComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FournisseursComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_2__.ProduitService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_SERVICES_fournisseur_service__WEBPACK_IMPORTED_MODULE_3__.FournisseurService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_4__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_SERVICES_stocks_service__WEBPACK_IMPORTED_MODULE_5__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_SERVICES_transfert_service__WEBPACK_IMPORTED_MODULE_6__.TransfertService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: FournisseursComponent,
      selectors: [["app-fournisseurs"]],
      decls: 20,
      vars: 8,
      consts: [["noNom", ""], ["noEmail", ""], ["noAdresse", ""], ["noTel", ""], ["noNomCard", ""], ["noEmailCard", ""], ["noTelCard", ""], ["noAdresseCard", ""], [1, "containerTable"], [1, "tasks-header"], [1, "title"], [1, "actions"], ["routerLink", "/ajouter-fournisseur", 1, "add-task"], [1, "barre"], ["clickOutside", "", 1, "contentIcon", 3, "click", "clickOutside"], ["class", "view-dropdown", 4, "ngIf"], [1, "inputSearch"], [1, "ri-search-2-line"], ["type", "text", "placeholder", "Recherche....", 3, "ngModelChange", "ngModel"], [4, "ngIf"], ["class", "container_cadre", 4, "ngIf"], ["class", "no-client-message", 4, "ngIf"], [1, "pagination"], [3, "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], [1, "view-dropdown"], [1, "dropdown-item", 3, "click"], [3, "click"], [3, "click", 4, "ngFor", "ngForOf"], [1, "imgClient"], ["alt", "Photo fournisseur", 3, "src"], [3, "innerHTML", 4, "ngIf", "ngIfElse"], [3, "innerHTML"], [1, "container_cadre"], [1, "grid-view"], ["class", "client-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "client-card", 3, "click"], [1, "content_img_info"], [1, "imgFourni_grid"], ["alt", "Icon fournisseur", 3, "src"], [1, "info_fourni"], [1, "info_name"], [1, "info_email"], [2, "margin", "0", "font-size", "12px"], [1, "ri-mail-line"], [1, "info_tel"], [2, "font-size", "12px", "margin-bottom", "0"], [1, "ri-phone-line"], [1, "info_adresse"], [2, "font-size", "12px", "margin", "0"], [1, "ri-map-pin-line"], [1, "no-client-message"], [3, "page", "length", "pageSize", "pageSizeOptions"]],
      template: function FournisseursComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "h1", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Mes Fournisseurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 11)(5, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Ajouter un fournisseur ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FournisseursComponent_Template_div_click_8_listener() {
            return ctx.showDropdown = !ctx.showDropdown;
          })("clickOutside", function FournisseursComponent_Template_div_clickOutside_8_listener() {
            return ctx.showDropdown = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, FournisseursComponent_div_10_Template, 5, 2, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function FournisseursComponent_Template_input_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.searchText, $event) || (ctx.searchText = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, FournisseursComponent_table_15_Template, 17, 3, "table", 19)(16, FournisseursComponent_div_16_Template, 3, 1, "div", 20)(17, FournisseursComponent_div_17_Template, 2, 0, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, FournisseursComponent_mat_paginator_19_Template, 1, 4, "mat-paginator", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.isListView ? "ri-list-check" : "ri-apps-fill");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.searchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isListView);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isListView);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.fournisseursLoaded && ctx.filteredFournisseurs.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.filteredFournisseurs.length > 6);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _MODELS_truncate_email_pipe__WEBPACK_IMPORTED_MODULE_0__.TruncateEmailPipe],
      styles: ["@charset \"UTF-8\";\n.containerTable[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.content_cadre_double[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.imgFourni_grid[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  cursor: pointer;\n}\n\n.imgFourni_grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.content_img_info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.info_email[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.info_fourni[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.info_name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n\n\n.imgClient[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n\n.imgClient[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n  object-fit: cover;\n  border-radius: 50%;\n  transition: transform 0.2s;\n}\n\n.imgClient[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1); \n\n}\n\n.tete[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.imgClient2[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n\n.imgClient2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  transition: transform 0.2s;\n}\n\n\n\n.imgClient_grid[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: none;\n}\n\n.imgClient_grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n}\n\n.tasks-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.add-task[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  background-color: #0672E4;\n  color: #ffffff;\n  border-radius: 5px;\n  border: none;\n}\n\n.inputSearch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n\n.inputSearch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-left: 10px;\n  border-radius: 5px;\n}\n\n.inputSearch[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 15px;\n  font-size: 17px;\n}\n\n.contentIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  cursor: pointer;\n  position: relative;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.barre[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.2470588235);\n  margin: 8px 15px;\n}\n\n.titleTableProduit[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\ntr[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 18px 8px;\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n  padding: 12px 8px;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n\n\n.contentIcon[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n\n.view-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  z-index: 100;\n  min-width: 150px;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n\n\n\n.grid-view[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 20px;\n}\n\n.client-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 10px 15px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  transition: transform 0.2s ease;\n  border: 1px solid #e0e0e0;\n  margin: 20px 0 -20px;\n}\n\n.client-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.04);\n}\n\n.client-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-size: 16px;\n  margin: 0;\n  font-weight: 600;\n}\n\n.name_icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #eee;\n  margin: 0 0 12px 0;\n  padding-bottom: 10px;\n}\n\n.name_icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.client-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  font-size: 14px;\n  color: #666;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.client-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #0672E4;\n}\n\n\n\n.view-dropdown[_ngcontent-%COMP%] {\n  \n\n  transform-origin: top right;\n  animation: _ngcontent-%COMP%_scaleIn 0.15s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: background 0.2s ease;\n}\n\n.dropdown-item[_ngcontent-%COMP%]::after {\n  content: \"\u2713\";\n  opacity: 0;\n  color: #0672E4;\n}\n\n.dropdown-item.active[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n\n\n\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 12px;\n  display: inline-block;\n}\n\n.status-active[_ngcontent-%COMP%] {\n  background: #e3fcef;\n  color: #006644;\n}\n\n.status-inactive[_ngcontent-%COMP%] {\n  background: #faeae5;\n  color: #bf360c;\n}\n\n\n\n@media (max-width: 768px) {\n  .tasks-header[_ngcontent-%COMP%] {\n    display: block;\n    justify-content: space-between;\n    gap: 15px;\n  }\n  .inputSearch[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n\n  .grid-view[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .client-card[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n}\n@media (min-width: 769px) {\n  .mobile-only[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.pagination[_ngcontent-%COMP%] {\n  justify-content: right;\n  margin-top: 30px;\n}\n\nmat-paginator[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 5px;\n}\n\n.no-phone-text[_ngcontent-%COMP%] {\n  color: #c3c3c3; \n\n  font-style: italic; \n\n}\n\n.info_cadre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.no-client-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  font-size: 13px;\n  color: #666;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  margin: 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.iconEntrepriseList[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.iconEntrepriseList[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.no-entreprise-text[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.9em;\n  font-style: italic;\n}\n\n\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.popup-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 15px 20px;\n  border-radius: 8px;\n  width: 25%;\n}\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  margin-top: -5px;\n}\n\n.popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.cadreChoix[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  border-radius: 5px;\n  cursor: pointer;\n  color: #ffffff;\n}\n\n.sizeBox[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.dateCreat[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-style: italic;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvdXJuaXNzZXVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQWFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFWRjs7QUFhQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFFQSxlQUFBO0FBWEY7O0FBY0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFlQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQVpGOztBQWVBO0VBQ0UsU0FBQTtBQVpGOztBQWVBO0VBQ0UsaUJBQUE7QUFaRjs7QUFlQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFaRjs7QUFxQkEseUNBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFsQkY7O0FBcUJBO0VBQ0UscUJBQUEsRUFBQSx5QkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBbEJGOztBQXFCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Es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QTRDQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUF6Q0Y7O0FBNENBO0VBQ0UsZUFBQTtBQXpDRjs7QUE0Q0E7RUFDRSx5QkFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUF6Q0Y7O0FBNENBO0VBQ0UsY0FBQTtBQXpDRjs7QUE0Q0E7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQTFDRiIsImZpbGUiOiJmb3Vybmlzc2V1cnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXJUYWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8vIC5jb250ZW50X3JldHVybiB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGdhcDogMTVweDtcbi8vIH1cblxuLy8gLnJldG91cl9pY29uIGkge1xuLy8gICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyB9XG5cbi5jb250ZW50X2NhZHJlX2RvdWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmltZ0ZvdXJuaV9ncmlkIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgLy8gYm94LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWdGb3VybmlfZ3JpZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAvLyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cblxuLmNvbnRlbnRfaW1nX2luZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5mb19lbWFpbCBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaW5mb19mb3Vybmkge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmluZm9fbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLy8gLmluZm9fZm91cm5pX3RlbF9hZHJlc3NlIHtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgZ2FwOiAxMHB4O1xuLy8gfVxuXG4vKiBTdHlsZSBkZSBsJ2ltYWdlIGNpcmN1bGFpcmUgaW1nIGxpc3QgKi9cbi5pbWdDbGllbnQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltZ0NsaWVudCBpbWcge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG5cbi5pbWdDbGllbnQ6aG92ZXIgaW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBFZmZldCB6b29tIGF1IHN1cnZvbCAqL1xufVxuXG4udGV0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLmltZ0NsaWVudDIge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltZ0NsaWVudDIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG5cbi8vIC5pbWdDbGllbnQyOmhvdmVyIGltZyB7XG4vLyAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBFZmZldCB6b29tIGF1IHN1cnZvbCAqL1xuLy8gfVxuXG4vKiBTdHlsZSBkZSBsJ2ltYWdlIGNpcmN1bGFpcmUgaW1nIGdyaWQgKi9cbi5pbWdDbGllbnRfZ3JpZCB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIC8vIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5pbWdDbGllbnRfZ3JpZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cblxuLy8gLmltZ0NsaWVudF9ncmlkOmhvdmVyIGltZyB7XG4vLyAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBFZmZldCB6b29tIGF1IHN1cnZvbCAqL1xuLy8gfVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRhc2tzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmFkZC10YXNrIHtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5pbnB1dFNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5wdXRTZWFyY2ggaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmlucHV0U2VhcmNoIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmNvbnRlbnRJY29uIGkge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hY3Rpb25zIGl7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uYmFycmUge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzZjtcbiAgbWFyZ2luOiA4cHggMTVweDtcbn1cblxuLy8gdGFibGUgXG5cbi50aXRsZVRhYmxlUHJvZHVpdCB0aCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudHIge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbnRkIHtcbnBhZGRpbmc6IDE4cHggOHB4O1xuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ5NDtcbn1cblxudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDk0O1xuICBwYWRkaW5nOiAxMnB4IDhweDtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4vKiBEcm9wZG93biBzdHlsZXMgKi9cbi5jb250ZW50SWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udmlldy1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgei1pbmRleDogMTAwO1xuICBtaW4td2lkdGg6IDE1MHB4O1xufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4vKiBHcmlkIHZpZXcgc3R5bGVzICovXG4uZ3JpZC12aWV3IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBnYXA6IDIwcHg7XG59XG5cblxuLmNsaWVudC1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgbWFyZ2luOiAyMHB4IDAgLTIwcHg7XG59XG5cbi5jbGllbnQtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG4uY2xpZW50LWNhcmQgaDMge1xuICBjb2xvcjogIzJjM2U1MDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5uYW1lX2ljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICBtYXJnaW46IDAgMCAxMnB4IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ubmFtZV9pY29uIGkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLy8gbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbi5jbGllbnQtY2FyZCBwIHtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5jbGllbnQtY2FyZCBwIGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDY3MkU0O1xufVxuXG4vKiBBbcOpbGlvcmF0aW9ucyBkcm9wZG93biAqL1xuLnZpZXctZHJvcGRvd24ge1xuICAvKiAuLi4gc3R5bGVzIGV4aXN0YW50cyAuLi4gKi9cbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xuICBhbmltYXRpb246IHNjYWxlSW4gMC4xNXMgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgc2NhbGVJbiB7XG4gIGZyb20geyB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyB0cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAxOyB9XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcbn1cblxuLmRyb3Bkb3duLWl0ZW06OmFmdGVyIHtcbiAgY29udGVudDogJ+Kckyc7XG4gIG9wYWNpdHk6IDA7XG4gIGNvbG9yOiAjMDY3MkU0O1xufVxuXG4uZHJvcGRvd24taXRlbS5hY3RpdmU6OmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogQWpvdXRlIGRhbnMgQ1NTICovXG4uc3RhdHVzLWJhZGdlIHtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zdGF0dXMtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2UzZmNlZjtcbiAgY29sb3I6ICMwMDY2NDQ7XG59XG5cbi5zdGF0dXMtaW5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZmFlYWU1O1xuICBjb2xvcjogI2JmMzYwYztcbn1cblxuLyogUG91ciBsZXMgbW9iaWxlcyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50YXNrcy1oZWFkZXIge1xuICAvLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAxNXB4O1xuICB9XG5cbiAgLy8gLmFkZC10YXNrIHtcbiAgLy8gfVxuICBcbiAgLmlucHV0U2VhcmNoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLyogRm9yY2UgbCdhZmZpY2hhZ2UgZGVzIGNhcnRlcyAqL1xuICAuZ3JpZC12aWV3IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLmNsaWVudC1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuICAubW9iaWxlLW9ubHkge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ucGFnaW5hdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbm1hdC1wYWdpbmF0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5uby1waG9uZS10ZXh0IHtcbiAgY29sb3I6ICNjM2MzYzM7IC8qIENvdWxldXIgZ3Jpc2UgZXhlbXBsZSAqL1xuICBmb250LXN0eWxlOiBpdGFsaWM7IC8qIE9wdGlvbm5lbCAqL1xufVxuXG4uaW5mb19jYWRyZSBwIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5uby1jbGllbnQtbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzY2NjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbi5pY29uRW50cmVwcmlzZUxpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5pY29uRW50cmVwcmlzZUxpc3QgaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm8tZW50cmVwcmlzZS10ZXh0IHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy8gUG9wIHVwIFxuXG4vKiBTdHlsZXMgcG91ciBsZSBwb3B1cCAqL1xuLnBvcHVwLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLnBvcHVwLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogMjUlO1xufVxuXG4ucG9wdXAtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLnBvcHVwLWhlYWRlciBoMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNhZHJlQ2hvaXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2l6ZUJveCB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4uZGF0ZUNyZWF0IHtcblxuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9mb3Vybmlzc2V1cnMvZm91cm5pc3NldXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBYUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVZGOztBQWFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUVBLGVBQUE7QUFYRjs7QUFjQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVhGOztBQWVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBWkY7O0FBZUE7RUFDRSxTQUFBO0FBWkY7O0FBZUE7RUFDRSxpQkFBQTtBQVpGOztBQWVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQVpGOztBQXFCQSx5Q0FBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtBQWxCRjs7QUFxQkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxxQkFBQSxFQUFBLHlCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtBQWxCRjs7QUFxQkE7RUFD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QUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUF6Q0Y7O0FBNENBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXpDRjs7QUE0Q0E7RUFDRSxlQUFBO0FBekNGOztBQTRDQTtFQUNFLHlCQUFBO0VBQ0EseUNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQXpDRjs7QUE0Q0E7RUFDRSxjQUFBO0FBekNGOztBQTRDQTtFQUVFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBMUNGO0FBQUEsdzFnQkFBdzFnQiIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lclRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLy8gLmNvbnRlbnRfcmV0dXJuIHtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgZ2FwOiAxNXB4O1xuLy8gfVxuXG4vLyAucmV0b3VyX2ljb24gaSB7XG4vLyAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vIH1cblxuLmNvbnRlbnRfY2FkcmVfZG91YmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaW1nRm91cm5pX2dyaWQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAvLyBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltZ0ZvdXJuaV9ncmlkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC8vIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuXG4uY29udGVudF9pbWdfaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbmZvX2VtYWlsIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5pbmZvX2ZvdXJuaSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uaW5mb19uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4vLyAuaW5mb19mb3VybmlfdGVsX2FkcmVzc2Uge1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICBnYXA6IDEwcHg7XG4vLyB9XG5cbi8qIFN0eWxlIGRlIGwnaW1hZ2UgY2lyY3VsYWlyZSBpbWcgbGlzdCAqL1xuLmltZ0NsaWVudCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1nQ2xpZW50IGltZyB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cblxuLmltZ0NsaWVudDpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIEVmZmV0IHpvb20gYXUgc3Vydm9sICovXG59XG5cbi50ZXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uaW1nQ2xpZW50MiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1nQ2xpZW50MiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cblxuLy8gLmltZ0NsaWVudDI6aG92ZXIgaW1nIHtcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIEVmZmV0IHpvb20gYXUgc3Vydm9sICovXG4vLyB9XG5cbi8qIFN0eWxlIGRlIGwnaW1hZ2UgY2lyY3VsYWlyZSBpbWcgZ3JpZCAqL1xuLmltZ0NsaWVudF9ncmlkIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgLy8gYm94LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmltZ0NsaWVudF9ncmlkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuXG4vLyAuaW1nQ2xpZW50X2dyaWQ6aG92ZXIgaW1nIHtcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIEVmZmV0IHpvb20gYXUgc3Vydm9sICovXG4vLyB9XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGFza3MtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYWRkLXRhc2sge1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmlucHV0U2VhcmNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnB1dFNlYXJjaCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW5wdXRTZWFyY2ggaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uY29udGVudEljb24gaSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFjdGlvbnMgaXtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5iYXJyZSB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDNmO1xuICBtYXJnaW46IDhweCAxNXB4O1xufVxuXG4vLyB0YWJsZSBcblxuLnRpdGxlVGFibGVQcm9kdWl0IHRoIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50ciB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxudGQge1xucGFkZGluZzogMThweCA4cHg7XG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDk0O1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkOTQ7XG4gIHBhZGRpbmc6IDEycHggOHB4O1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuXG50cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi8qIERyb3Bkb3duIHN0eWxlcyAqL1xuLmNvbnRlbnRJY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52aWV3LWRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xuICB6LWluZGV4OiAxMDA7XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi8qIEdyaWQgdmlldyBzdHlsZXMgKi9cbi5ncmlkLXZpZXcge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogMjBweDtcbn1cblxuXG4uY2xpZW50LWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBtYXJnaW46IDIwcHggMCAtMjBweDtcbn1cblxuLmNsaWVudC1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG5cbi5jbGllbnQtY2FyZCBoMyB7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm5hbWVfaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIG1hcmdpbjogMCAwIDEycHggMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5uYW1lX2ljb24gaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvLyBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuLmNsaWVudC1jYXJkIHAge1xuICBtYXJnaW46IDhweCAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmNsaWVudC1jYXJkIHAgaSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwNjcyRTQ7XG59XG5cbi8qIEFtw4PCqWxpb3JhdGlvbnMgZHJvcGRvd24gKi9cbi52aWV3LWRyb3Bkb3duIHtcbiAgLyogLi4uIHN0eWxlcyBleGlzdGFudHMgLi4uICovXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcbiAgYW5pbWF0aW9uOiBzY2FsZUluIDAuMTVzIGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHNjYWxlSW4ge1xuICBmcm9tIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjkpOyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogMTsgfVxufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XG59XG5cbi5kcm9wZG93bi1pdGVtOjphZnRlciB7XG4gIGNvbnRlbnQ6ICfDosKcwpMnO1xuICBvcGFjaXR5OiAwO1xuICBjb2xvcjogIzA2NzJFNDtcbn1cblxuLmRyb3Bkb3duLWl0ZW0uYWN0aXZlOjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEFqb3V0ZSBkYW5zIENTUyAqL1xuLnN0YXR1cy1iYWRnZSB7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc3RhdHVzLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlM2ZjZWY7XG4gIGNvbG9yOiAjMDA2NjQ0O1xufVxuXG4uc3RhdHVzLWluYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2ZhZWFlNTtcbiAgY29sb3I6ICNiZjM2MGM7XG59XG5cbi8qIFBvdXIgbGVzIG1vYmlsZXMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudGFza3MtaGVhZGVyIHtcbiAgLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBkaXNwbGF5OiBibG9jaztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMTVweDtcbiAgfVxuXG4gIC8vIC5hZGQtdGFzayB7XG4gIC8vIH1cbiAgXG4gIC5pbnB1dFNlYXJjaCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC8qIEZvcmNlIGwnYWZmaWNoYWdlIGRlcyBjYXJ0ZXMgKi9cbiAgLmdyaWQtdmlldyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5jbGllbnQtY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLm1vYmlsZS1vbmx5IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnBhZ2luYXRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5tYXQtcGFnaW5hdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubm8tcGhvbmUtdGV4dCB7XG4gIGNvbG9yOiAjYzNjM2MzOyAvKiBDb3VsZXVyIGdyaXNlIGV4ZW1wbGUgKi9cbiAgZm9udC1zdHlsZTogaXRhbGljOyAvKiBPcHRpb25uZWwgKi9cbn1cblxuLmluZm9fY2FkcmUgcCB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ubm8tY2xpZW50LW1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM2NjY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xufVxuXG4uaWNvbkVudHJlcHJpc2VMaXN0IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uaWNvbkVudHJlcHJpc2VMaXN0IGkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vLWVudHJlcHJpc2UtdGV4dCB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi8vIFBvcCB1cCBcblxuLyogU3R5bGVzIHBvdXIgbGUgcG9wdXAgKi9cbi5wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLnBvcHVwLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi5wb3B1cC1oZWFkZXIgaDMge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jYWRyZUNob2l4IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNpemVCb3gge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmRhdGVDcmVhdCB7XG5cbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_fournisseurs_fournisseurs_component_ts.js.map