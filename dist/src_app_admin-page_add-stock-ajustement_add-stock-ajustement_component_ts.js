"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_add-stock-ajustement_add-stock-ajustement_component_ts"],{

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

/***/ 56400:
/*!***********************************************************************************!*\
  !*** ./src/app/admin-page/add-stock-ajustement/add-stock-ajustement.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddStockAjustementComponent: () => (/* binding */ AddStockAjustementComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MODELS/customNumberPipe */ 96115);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SERVICES/produit.service */ 66375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SERVICES/users.service */ 88026);
/* harmony import */ var _SERVICES_stocks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SERVICES/stocks.service */ 10933);
/* harmony import */ var _SERVICES_transfert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SERVICES/transfert-service */ 11856);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ 35255);

// et aussi la partie frontend 
















const _c0 = ["productSelect"];
function AddStockAjustementComponent_mat_option_34_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37)(1, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AddStockAjustementComponent_mat_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 33)(1, "div", 34)(2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AddStockAjustementComponent_mat_option_34_div_4_Template, 3, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const street_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", street_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", street_r2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.controlBoutique.value !== street_r2);
  }
}
function AddStockAjustementComponent_div_42_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "La description doit avoir au moins 2 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddStockAjustementComponent_div_42_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "La description ne doit pas d\u00E9passer 100 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddStockAjustementComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddStockAjustementComponent_div_42_span_1_Template, 2, 0, "span", 40)(2, AddStockAjustementComponent_div_42_span_2_Template, 2, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.f["descriptionGlobal"].errors == null ? null : ctx_r2.f["descriptionGlobal"].errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.f["descriptionGlobal"].errors == null ? null : ctx_r2.f["descriptionGlobal"].errors["maxlength"]);
  }
}
function AddStockAjustementComponent_div_43_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", f_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", f_r5.nomComplet, " ");
  }
}
function AddStockAjustementComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16)(1, "div", 41)(2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Nom du fournisseur");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AddStockAjustementComponent_div_43_Template_select_change_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onFournisseurChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "-- S\u00E9lectionnez un fournisseur --");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AddStockAjustementComponent_div_43_option_7_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.fournisseurs);
  }
}
function AddStockAjustementComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16)(1, "div", 46)(2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Num\u00E9ro du facture fournisseur");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AddStockAjustementComponent_div_45_tbody_19_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 55)(1, "td")(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td")(5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td")(8, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td")(11, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td")(15, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td")(18, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStockAjustementComponent_div_45_tbody_19_tr_1_Template_div_click_18_listener() {
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.removePendingAdjustment(i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const adjustment_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", adjustment_r9.produitNom);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", adjustment_r9.quantiteAjoute && adjustment_r9.quantiteAjoute > 0 ? adjustment_r9.quantiteAjoute : adjustment_r9.quantiteRetirer);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", adjustment_r9.stockActuel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 5, adjustment_r9.prixVente));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", adjustment_r9.stockApres);
  }
}
function AddStockAjustementComponent_div_45_tbody_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddStockAjustementComponent_div_45_tbody_19_tr_1_Template, 20, 7, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.pendingAdjustments);
  }
}
function AddStockAjustementComponent_div_45_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Aucune boutique s\u00E9lectionn\u00E9e ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function AddStockAjustementComponent_div_45_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Aucun produit disponible dans cette boutique ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function AddStockAjustementComponent_div_45_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const produit_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", produit_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", produit_r10.nom, " ");
  }
}
function AddStockAjustementComponent_div_45_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75)(1, "div", 76)(2, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStockAjustementComponent_div_45_div_48_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.clearSelections());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
  }
}
function AddStockAjustementComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 49)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Gestion des stocks");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 50)(6, "table")(7, "thead")(8, "tr", 51)(9, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Mes produits");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Quantit\u00E9 \u00E0 ajouter");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Stock actuel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Co\u00FBt unitaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Stock apr\u00E8s");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, AddStockAjustementComponent_div_45_tbody_19_Template, 2, 1, "tbody", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "tbody")(21, "tr", 55)(22, "td")(23, "div", 56)(24, "select", 57, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddStockAjustementComponent_div_45_Template_select_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.selectedProduct, $event) || (ctx_r2.selectedProduct = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AddStockAjustementComponent_div_45_Template_select_ngModelChange_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.checkExistingProduct());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, AddStockAjustementComponent_div_45_ng_container_28_Template, 3, 0, "ng-container", 40)(29, AddStockAjustementComponent_div_45_ng_container_29_Template, 3, 0, "ng-container", 40)(30, AddStockAjustementComponent_div_45_option_30_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "td")(32, "div", 58)(33, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddStockAjustementComponent_div_45_Template_input_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.quantiteAjoute, $event) || (ctx_r2.quantiteAjoute = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "td")(35, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "td")(38, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](40, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](41, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "td")(43, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "td")(46, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStockAjustementComponent_div_45_Template_div_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.addToPendingAdjustments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, AddStockAjustementComponent_div_45_div_48_Template, 6, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.pendingAdjustments.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("duplicate", ctx_r2.errorMessage.includes("est d\u00E9j\u00E0 dans la liste"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.selectedProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r2.boutiqueIdSelected)("compareWith", ctx_r2.compareProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.boutiqueIdSelected ? "S\u00E9lectionner un produit" : "Veuillez s\u00E9lectionner une boutique", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.boutiqueIdSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.boutiqueIdSelected && ctx_r2.tasks.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.tasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.quantiteAjoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("max", ctx_r2.selectedProduct ? ctx_r2.selectedProduct.quantite : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r2.selectedProduct ? ctx_r2.selectedProduct.quantite : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r2.selectedProduct ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](40, 17, ctx_r2.selectedProduct.prixVente) : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](41, 19, 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r2.stockApres);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.errorMessage);
  }
}
function AddStockAjustementComponent_div_46_tbody_19_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 55)(1, "td")(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td")(5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td")(8, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td")(11, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td")(15, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td")(18, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStockAjustementComponent_div_46_tbody_19_tr_1_Template_div_click_18_listener() {
      const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.removePendingAdjustment(i_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const adjustment_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", adjustment_r15.produitNom);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", adjustment_r15.quantiteRetirer && adjustment_r15.quantiteRetirer > 0 ? adjustment_r15.quantiteRetirer : adjustment_r15.quantiteAjoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", adjustment_r15.stockActuel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 5, adjustment_r15.prixVente));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", adjustment_r15.stockApres);
  }
}
function AddStockAjustementComponent_div_46_tbody_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddStockAjustementComponent_div_46_tbody_19_tr_1_Template, 20, 7, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.pendingAdjustments);
  }
}
function AddStockAjustementComponent_div_46_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Aucune boutique s\u00E9lectionn\u00E9e ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function AddStockAjustementComponent_div_46_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Aucun produit disponible dans cette boutique ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function AddStockAjustementComponent_div_46_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const produit_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", produit_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", produit_r16.nom, " ");
  }
}
function AddStockAjustementComponent_div_46_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75)(1, "div", 76)(2, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStockAjustementComponent_div_46_div_49_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.clearSelections());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
  }
}
function AddStockAjustementComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 49)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Gestion des stocks");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 50)(6, "table")(7, "thead")(8, "tr", 51)(9, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Mes produits");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Quantit\u00E9 \u00E0 reduire");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Stock actuel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Co\u00FBt unitaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Stock apr\u00E8s");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, AddStockAjustementComponent_div_46_tbody_19_Template, 2, 1, "tbody", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "tbody")(21, "tr", 55)(22, "td")(23, "div", 56)(24, "select", 57, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddStockAjustementComponent_div_46_Template_select_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.selectedProduct, $event) || (ctx_r2.selectedProduct = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AddStockAjustementComponent_div_46_Template_select_ngModelChange_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.checkExistingProduct());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, AddStockAjustementComponent_div_46_ng_container_28_Template, 3, 0, "ng-container", 40)(29, AddStockAjustementComponent_div_46_ng_container_29_Template, 3, 0, "ng-container", 40)(30, AddStockAjustementComponent_div_46_option_30_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "td")(32, "form")(33, "div", 58)(34, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddStockAjustementComponent_div_46_Template_input_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.quantiteRetirer, $event) || (ctx_r2.quantiteRetirer = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "td")(36, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "td")(39, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](41, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](42, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "td")(44, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "td")(47, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStockAjustementComponent_div_46_Template_div_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.reduireToPendingAdjustments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, AddStockAjustementComponent_div_46_div_49_Template, 6, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.pendingAdjustments.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("duplicate", ctx_r2.errorMessage.includes("est d\u00E9j\u00E0 dans la liste"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.selectedProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r2.boutiqueIdSelected)("compareWith", ctx_r2.compareProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.boutiqueIdSelected ? "S\u00E9lectionner un produit" : "Veuillez s\u00E9lectionner une boutique", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.boutiqueIdSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.boutiqueIdSelected && ctx_r2.tasks.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.tasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.quantiteRetirer);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("max", ctx_r2.selectedProduct ? ctx_r2.selectedProduct.quantite : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r2.selectedProduct ? ctx_r2.selectedProduct.quantite : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r2.selectedProduct ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](41, 17, ctx_r2.selectedProduct.prixVente) : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](42, 19, 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r2.stockApres);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.errorMessage);
  }
}
function AddStockAjustementComponent_div_47_tbody_19_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 55)(1, "td")(2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td")(5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td")(8, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td")(11, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td")(14, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td")(17, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStockAjustementComponent_div_47_tbody_19_tr_1_Template_div_click_17_listener() {
      const i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.removePendingAdjustment(i_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const adjustment_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", adjustment_r21.produitNom);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", adjustment_r21.quantite);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", adjustment_r21.stockActuel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", adjustment_r21.stockActuel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", adjustment_r21.boutiqueDestinationName);
  }
}
function AddStockAjustementComponent_div_47_tbody_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddStockAjustementComponent_div_47_tbody_19_tr_1_Template, 19, 5, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.pendingAdjustments);
  }
}
function AddStockAjustementComponent_div_47_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Aucune boutique s\u00E9lectionn\u00E9e ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function AddStockAjustementComponent_div_47_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Aucun produit disponible dans cette boutique ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function AddStockAjustementComponent_div_47_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const produit_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", produit_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", produit_r22.nom, " ");
  }
}
function AddStockAjustementComponent_div_47_mat_option_48_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " (D\u00E9j\u00E0 s\u00E9lectionn\u00E9e) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddStockAjustementComponent_div_47_mat_option_48_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " (Suspendue) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddStockAjustementComponent_div_47_mat_option_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddStockAjustementComponent_div_47_mat_option_48_span_2_Template, 2, 0, "span", 88)(3, AddStockAjustementComponent_div_47_mat_option_48_span_3_Template, 2, 0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const boutique_r23 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", boutique_r23)("disabled", boutique_r23.id === ctx_r2.boutiqueIdSelected || !boutique_r23.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", boutique_r23.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", boutique_r23.id === ctx_r2.boutiqueIdSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !boutique_r23.actif);
  }
}
function AddStockAjustementComponent_div_47_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75)(1, "div", 76)(2, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStockAjustementComponent_div_47_div_53_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.errorMessage = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
  }
}
function AddStockAjustementComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 49)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Gestion des transferts");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 50)(6, "table")(7, "thead")(8, "tr", 51)(9, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Mes produits");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Quantit\u00E9 de transfert");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Stock actuel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Stock apr\u00E8s");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Boutique d'arriver");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, AddStockAjustementComponent_div_47_tbody_19_Template, 2, 1, "tbody", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "tbody")(21, "tr", 55)(22, "td")(23, "div", 58)(24, "select", 57, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddStockAjustementComponent_div_47_Template_select_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.selectedProduct, $event) || (ctx_r2.selectedProduct = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AddStockAjustementComponent_div_47_Template_select_ngModelChange_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.checkExistingProduct());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, AddStockAjustementComponent_div_47_ng_container_28_Template, 3, 0, "ng-container", 40)(29, AddStockAjustementComponent_div_47_ng_container_29_Template, 3, 0, "ng-container", 40)(30, AddStockAjustementComponent_div_47_option_30_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "td")(32, "form")(33, "div", 58)(34, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddStockAjustementComponent_div_47_Template_input_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.quantiteRetirer, $event) || (ctx_r2.quantiteRetirer = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "td")(36, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "td")(39, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "td")(42, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "mat-autocomplete", 24, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("optionSelected", function AddStockAjustementComponent_div_47_Template_mat_autocomplete_optionSelected_46_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onBoutiqueSelectedTransfert($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, AddStockAjustementComponent_div_47_mat_option_48_Template, 4, 5, "mat-option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](49, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "td")(51, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStockAjustementComponent_div_47_Template_div_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.transfertToPendingAdjustments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, AddStockAjustementComponent_div_47_div_53_Template, 6, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const autoBoutiqueTransfert_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](47);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.pendingAdjustments.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("duplicate", ctx_r2.errorMessage.includes("est d\u00E9j\u00E0 dans la liste"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.selectedProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r2.boutiqueIdSelected)("compareWith", ctx_r2.compareProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.boutiqueIdSelected ? "S\u00E9lectionner un produit" : "S\u00E9lectionner une boutique", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.boutiqueIdSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.boutiqueIdSelected && ctx_r2.tasks.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.tasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.quantiteRetirer);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("max", ctx_r2.selectedProduct ? ctx_r2.selectedProduct.quantite : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r2.selectedProduct ? ctx_r2.selectedProduct.quantite : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r2.stockApres);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.controlBoutiqueTransfert)("matAutocomplete", autoBoutiqueTransfert_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayWith", ctx_r2.displayFnBoutiqueTransfert);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](49, 20, ctx_r2.filteredStreetsBoutiqueTransfert));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.errorMessage);
  }
}
function AddStockAjustementComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "div", 92)(2, "div", 93)(3, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStockAjustementComponent_div_48_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.goToStock());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 95)(6, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStockAjustementComponent_div_48_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.AjouterDesQuan());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Ajuster");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function AddStockAjustementComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "div", 92)(2, "div", 93)(3, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStockAjustementComponent_div_49_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.goToStock());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 95)(6, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStockAjustementComponent_div_49_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.RetirerDesQuan());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Ajuster");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function AddStockAjustementComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "div", 92)(2, "div", 93)(3, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStockAjustementComponent_div_50_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.goToStock());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 95)(6, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStockAjustementComponent_div_50_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.transfererProduits());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Transf\u00E9rer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function AddStockAjustementComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75)(1, "div", 76)(2, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStockAjustementComponent_div_51_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.successMessage = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.successMessage);
  }
}
function AddStockAjustementComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 75)(1, "div", 76)(2, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.errorMessageError);
  }
}
class AddStockAjustementComponent {
  // Contructor
  constructor(
  // private sharedDataService: SharedDataService,
  produitService, fb, router, usersService, stockService, cdRef, transfertService) {
    this.produitService = produitService;
    this.fb = fb;
    this.router = router;
    this.usersService = usersService;
    this.stockService = stockService;
    this.cdRef = cdRef;
    this.transfertService = transfertService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.errorMessage = '';
    this.errorMessageError = '';
    // Selectionner des boutique 
    this.selectedDestinationBoutique = null;
    // Nom boutique 
    this.boutiqueName = '';
    this.selectedAction = 'ajouter';
    // Variable pour contrôler l'affichage des stocks ajustés après un rafraîchissement
    this.stocksVisible = false;
    // Nouvelle variable pour stocker les ajustements locaux
    this.pendingAdjustments = [];
    // Pop up de message
    this.successMessage = '';
    // Description Global
    this.descriptionGlobal = '';
    this.codeFournisseurGlobal = '';
    this.boutiqueIdSelected = null;
    this.controlBoutique = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('');
    this.controlBoutiqueTransfert = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('');
    this.streetsBoutique = [];
    this.streetsBoutiqueTransfert = [];
    this.showPopupBoutique = false;
    // getPartageInfoUser() {
    //    // Partage de donner de user
    //    this.sharedDataService.boutiqueName$.subscribe(name => {
    //     console.log("AddProduitComponent - Nom boutique récupéré :", name);
    //     this.boutiqueName = name;
    //   });
    // }
    // select de produit
    this.selectedProduct = null;
    this.tasks = [];
    this.selectedFournisseur = null;
    this.fournisseurs = [];
    // quantiteAjoute: number = 0;
    this.quantiteAjoute = null;
    this.quantiteRetirer = null;
    this.descriptionAjout = '';
    this.descriptionRetire = '';
    this.codeFournisseur = '';
    // Liste filtrée des stocks ajustés
    this.adjustedStocks = [];
  }
  goToStock() {
    this.router.navigate(['/stocks']);
  }
  ngOnInit() {
    this.getBoutiqueName();
    // this.getPartageInfoUser();
    // Convertir explicitement null en undefined avec l'opérateur de coalescence nulle
    // this.loadProduits(this.usersService.getUserBoutiqueId() ?? undefined);
    this.getAjusteForm();
    this.getControleBoutique();
    this.loadFournisseurs();
  }
  getControleBoutique() {
    this.controlBoutique.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(value => {
      if (!value) {
        this.handleBoutiqueDeselection();
      }
    });
  }
  // Nouvelle méthode pour gérer la désélection
  handleBoutiqueDeselection() {
    this.boutiqueIdSelected = null;
    this.tasks = [];
    this.pendingAdjustments = [];
    this.selectedProduct = null;
    this.cdRef.detectChanges();
  }
  // Ajouter ngOnDestroy
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  checkBoutiqueSelection() {
    if (!this.controlBoutique.value) {
      this.handleBoutiqueDeselection();
    }
  }
  getBoutiqueName() {
    this.usersService.getUserInfo().subscribe(userInfo => {
      if (userInfo && userInfo.boutiques) {
        // Modification ici : ajout de la propriété actif
        this.streetsBoutique = userInfo.boutiques.filter(boutique => boutique.actif) // Filtre les boutiques actives
        .map(boutique => ({
          id: boutique.id,
          name: boutique.nomBoutique,
          actif: boutique.actif // Ajout de la propriété manquante
        }));
        // Ancien code gardé en commentaire :
        // this.streetsBoutique = userInfo.boutiques.map((boutique: any) => ({
        //   id: boutique.id,
        //   name: boutique.nomBoutique
        // }));
        this.streetsBoutiqueTransfert = [...this.streetsBoutique];
        this.getFilteredStreetsBoutique();
        this.getFilteredStreetsBoutiqueTransfert();
      }
    }, error => {
      console.error('Erreur lors de la récupération des informations utilisateur', error);
    });
  }
  // Charge les produits depuis le backend et effectue le mapping pour l'affichage
  loadProduits(boutiqueId) {
    if (!boutiqueId) {
      this.tasks = []; // Réinitialiser la liste si aucun ID
      return;
    }
    this.produitService.getProduitsEntreprise(boutiqueId).subscribe({
      next: produits => {
        this.tasks = produits.filter(prod => prod.enStock).map(prod => ({
          ...prod
        })) // Simplifié le mapping
        .sort((a, b) => {
          const parseDate = dateStr => {
            try {
              return dateStr ? new Date(dateStr).getTime() : 0;
            } catch {
              return 0;
            }
          };
          return parseDate(b.createdAt) - parseDate(a.createdAt);
        });
      },
      error: err => {
        console.error("Erreur lors de la récupération des produits", err);
        this.tasks = [];
      }
    });
  }
  // Ajoutez une variable pour contrôler la visibilité
  // isProductAdded: boolean = false;
  // Méthode pour ajouter le stock (ne modifie pas showAdjustedStocks)
  get f() {
    return this.ajusteForm.controls;
  }
  get r() {
    return this.ajusteRetirerForm.controls;
  }
  // Charge les fournisseur depuis le backend et effectue le mapping pour l'affichage
  loadFournisseurs() {
    this.produitService.getFournisseurs().subscribe({
      next: fournisseurs => {
        this.fournisseurs = fournisseurs;
        console.log('Fournisseurs:', this.fournisseurs);
      },
      error: err => {
        console.error("Erreur lors de la récupération des fournisseurs", err);
        this.fournisseurs = [];
      }
    });
  }
  get stockApres() {
    if (!this.selectedProduct) return '';
    const stockActuel = Number(this.selectedProduct.quantite);
    if (this.selectedAction === 'ajouter' && this.quantiteAjoute) {
      return stockActuel + Number(this.quantiteAjoute);
    } else if (this.selectedAction === 'reduire' && this.quantiteRetirer) {
      return stockActuel - Number(this.quantiteRetirer);
    } else if (this.selectedAction === 'transfert' && this.quantiteRetirer) {
      return stockActuel - this.quantiteRetirer;
    }
    return '';
  }
  // Méthode pour charger tous les stocks et ne conserver que ceux ajustés
  loadAdjustedStocks() {
    // Récupérer le token (ou tout autre mécanisme d'authentification que vous utilisez)
    const token = this.usersService.getToken();
    if (!token) {
      console.error('Token introuvable');
      return; // Vous pouvez également rediriger l'utilisateur ou afficher un message d'erreur
    }
    this.stockService.getAllStocks().subscribe({
      next: stocks => {
        // Filtrer pour garder uniquement les stocks ayant une quantité ajoutée ou retirée supérieure à 0
        this.adjustedStocks = stocks.filter(stock => stock.quantiteAjoute && stock.quantiteAjoute > 0 || stock.quantiteRetirer && stock.quantiteRetirer > 0);
      },
      error: error => {
        console.error("Erreur lors du chargement des stocks ajustés", error);
      }
    });
  }
  // qui contient les produits chargés pour retrouver le nom.
  getProductName(stock) {
    if (stock.produitId) {
      console.log('ProduitId dans stock:', stock.produitId);
      const produit = this.tasks.find(prod => prod.id === stock.produitId);
      if (produit) {
        console.log('Produit trouvé:', produit);
        return produit.nom;
        // return `${produit.nom} - ${produit.prixVente}`;
      } else {
        console.warn('Produit non trouvé dans tasks pour l\'id:', stock.produitId);
        return 'Produit inconnu';
      }
    }
    console.warn('Aucun produitId présent dans le stock:', stock);
    return 'Produit inconnu';
  }
  // qui contient les produits chargés pour retrouver le nom.
  getProductPrixVente(stock) {
    if (stock.produitId) {
      console.log('ProduitId dans stock:', stock.produitId);
      const produit = this.tasks.find(prod => prod.id === stock.produitId);
      if (produit) {
        console.log('Produit trouvé:', produit);
        // return produit.nom && produit.prixVente;
        return `${produit.prixVente}`;
      } else {
        console.warn('Produit non trouvé dans tasks pour l\'id:', stock.produitId);
        return 'Produit inconnu';
      }
    }
    console.warn('Aucun produitId présent dans le stock:', stock);
    return 'Produit inconnu';
  }
  // Vérifier si les stocks doivent être visibles
  checkStocksVisibility() {
    const stocksVisibility = localStorage.getItem('stocksVisibility');
    if (stocksVisibility === 'true') {
      this.stocksVisible = true;
    } else {
      this.stocksVisible = false;
    }
  }
  getAjusteForm() {
    this.ajusteForm = this.fb.group({
      boutiqueId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      descriptionGlobal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(100)]],
      codeFournisseur: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(100)]],
      fournisseurId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
    });
  }
  // getAjusteRetirerForm() {
  //   this.ajusteRetirerForm = this.fb.group({
  //     descriptionRetire: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]]
  //   })
  // }
  // Méthode pour ajouter un ajustement à la liste
  addToPendingAdjustments() {
    if (this.errorMessage) return;
    if (!this.selectedProduct) {
      this.errorMessage = 'Veuillez sélectionner un produit';
      return;
    }
    if (!this.quantiteAjoute || this.quantiteAjoute <= 0) {
      this.errorMessage = 'Quantité invalide';
      return;
    }
    // Ajout dans la liste avec descriptionAjout incluse
    this.pendingAdjustments = [...this.pendingAdjustments, {
      produitId: this.selectedProduct.id,
      produitNom: this.selectedProduct.nom,
      quantiteAjoute: this.quantiteAjoute,
      stockActuel: this.selectedProduct.quantite,
      stockApres: this.stockApres,
      prixVente: this.selectedProduct.prixVente,
      descriptionAjout: this.descriptionAjout,
      codeFournisseur: this.codeFournisseur
    }];
    // Réinitialisation
    this.selectedProduct = null;
    this.quantiteAjoute = null;
    this.descriptionAjout = '';
    this.codeFournisseur;
  }
  // Méthode pour ajouter un ajustement à la liste
  reduireToPendingAdjustments() {
    if (this.errorMessage) return;
    if (!this.selectedProduct) {
      this.errorMessage = 'Veuillez sélectionner un produit';
      return;
    }
    if (!this.quantiteRetirer || this.quantiteRetirer <= 0) {
      this.errorMessage = 'Quantité invalide';
      return;
    }
    // Ajout dans la liste avec descriptionAjout incluse
    this.pendingAdjustments = [...this.pendingAdjustments, {
      produitId: this.selectedProduct.id,
      produitNom: this.selectedProduct.nom,
      quantiteRetirer: this.quantiteRetirer,
      stockActuel: this.selectedProduct.quantite,
      stockApres: this.stockApres,
      prixVente: this.selectedProduct.prixVente,
      descriptionretire: this.descriptionRetire // Ajout de la description ici
    }];
    // Réinitialisation
    this.selectedProduct = null;
    this.quantiteRetirer = null;
    this.descriptionRetire = ''; // Réinitialiser le champ de description si besoin
  }
  // Méthode pour charger depuis localStorage
  loadPendingAdjustments() {
    const saved = localStorage.getItem('pendingAdjustments');
    this.pendingAdjustments = saved ? JSON.parse(saved) : [];
  }
  checkExistingProduct() {
    if (!this.selectedProduct) {
      this.errorMessage = '';
      return;
    }
    const exists = this.pendingAdjustments.some(item => item.produitNom === this.selectedProduct.nom);
    if (exists) {
      this.errorMessage = `${this.selectedProduct.nom} est déjà dans la liste !`;
      this.selectedProduct = null; // Désélectionne le produit
    } else {
      this.errorMessage = '';
    }
  }
  clearSelections() {
    this.errorMessage = '';
    // Réinitialisation avec nouvel objet
    this.selectedProduct = null;
    this.quantiteAjoute = null;
    // Force la mise à jour du cycle de changement
    setTimeout(() => {
      this.cdRef.detectChanges();
      this.cdRef.markForCheck();
    });
    // Réinitialisation manuelle du DOM
    if (this.productSelect) {
      this.productSelect.nativeElement.selectedIndex = 0;
    }
  }
  compareProducts(a, b) {
    // Cas où les deux valeurs sont null
    if (a === null && b === null) return true;
    // Cas où l'une des valeurs est null
    if (!a || !b) return false;
    // Comparaison normale par ID
    return a.id === b.id;
  }
  /* Méthode pour ajouter du stock en regroupant les ajustements */
  AjouterDesQuan() {
    this.errorMessage = '';
    this.successMessage = '';
    const adjustmentsToProcess = [...this.pendingAdjustments];
    // Ajouter le produit sélectionné s'il est valide
    if (this.selectedProduct && this.quantiteAjoute && this.quantiteAjoute > 0) {
      const existingIndex = adjustmentsToProcess.findIndex(item => item.produitId === this.selectedProduct.id);
      if (existingIndex === -1) {
        adjustmentsToProcess.push({
          produitId: this.selectedProduct.id,
          produitNom: this.selectedProduct.nom,
          quantiteAjoute: this.quantiteAjoute,
          stockActuel: this.selectedProduct.quantite,
          stockApres: this.selectedProduct.quantite + this.quantiteAjoute,
          prixVente: this.selectedProduct.prixVente
        });
      }
    }
    if (adjustmentsToProcess.length > 0) {
      const produitsQuantites = adjustmentsToProcess.reduce((acc, adjustment) => {
        acc[adjustment.produitId] = adjustment.quantiteAjoute;
        return acc;
      }, {});
      const descriptionGlobal = this.ajusteForm.value.descriptionGlobal || '';
      const codeFournisseur = this.ajusteForm.value.codeFournisseur || '';
      // ✅ construire dynamiquement l'objet à envoyer
      const dataToSend = {
        boutiqueId: this.boutiqueIdSelected,
        produitsQuantites,
        description: descriptionGlobal,
        codeFournisseur,
        fournisseurId: this.fournisseurCtrl.value
      };
      console.log('Data à envoyer:', dataToSend);
      this.stockService.ajouterStock(dataToSend).subscribe({
        next: response => {
          // Mise à jour locale
          adjustmentsToProcess.forEach(adjustment => {
            const product = this.tasks.find(p => p.id === adjustment.produitId);
            if (product) product.quantite = adjustment.stockApres;
          });
          this.clearForm();
          this.showSuccessModal();
        },
        error: error => {
          console.error('Erreur détaillée:', error);
          this.showErrorModal(this.getErrorMessage(error));
        }
      });
    } else {
      this.showErrorModal('Veuillez sélectionner au moins un produit avec une quantité valide');
    }
  }
  /* Méthode pour retirer du stock en regroupant les ajustements */
  RetirerDesQuan() {
    this.errorMessage = '';
    this.successMessage = '';
    const adjustmentsToProcess = [...this.pendingAdjustments];
    // Ajouter le produit sélectionné actuel s'il est valide
    if (this.selectedProduct && this.quantiteRetirer && this.quantiteRetirer > 0) {
      const existingIndex = adjustmentsToProcess.findIndex(item => item.produitId === this.selectedProduct.id);
      if (existingIndex === -1) {
        // Vérifier que le stock ne devient pas négatif
        const newStock = this.selectedProduct.quantite - this.quantiteRetirer;
        if (newStock < 0) {
          this.showErrorModal('Le stock ne peut pas devenir négatif');
          return;
        }
        adjustmentsToProcess.push({
          produitId: this.selectedProduct.id,
          produitNom: this.selectedProduct.nom,
          quantiteRetirer: this.quantiteRetirer,
          stockActuel: this.selectedProduct.quantite,
          stockApres: newStock,
          prixVente: this.selectedProduct.prixVente
        });
      }
    }
    if (adjustmentsToProcess.length > 0) {
      const produitsQuantites = adjustmentsToProcess.reduce((acc, adjustment) => {
        acc[adjustment.produitId] = adjustment.quantiteRetirer;
        return acc;
      }, {});
      const descriptionGlobal = this.ajusteForm.value.descriptionGlobal || '';
      this.stockService.retirerStock({
        boutiqueId: this.boutiqueIdSelected,
        produitsQuantites: produitsQuantites,
        description: descriptionGlobal
      }).subscribe({
        next: response => {
          // Mise à jour locale
          adjustmentsToProcess.forEach(adjustment => {
            const product = this.tasks.find(p => p.id === adjustment.produitId);
            if (product) product.quantite = adjustment.stockApres;
          });
          this.clearForm();
          this.showSuccessModal();
        },
        error: error => {
          console.error('Erreur détaillée:', error);
          this.showErrorModal(this.getErrorMessage(error));
        }
      });
    } else {
      this.showErrorModal('Veuillez sélectionner au moins un produit avec une quantité valide');
    }
  }
  clearForm() {
    this.pendingAdjustments = [];
    this.selectedProduct = null;
    this.quantiteAjoute = null;
    this.quantiteRetirer = null;
    this.ajusteForm.reset();
  }
  getErrorMessage(error) {
    if (error.status === 400) {
      return error.error.message || 'Quantité invalide ou stock insuffisant';
    }
    if (error.status === 404) {
      return 'Produit non trouvée';
    }
    return 'Erreur technique - Veuillez réessayer plus tard';
  }
  // private validateCurrentSelection(): boolean {
  //   if (!this.selectedProduct) return false;
  //   if (this.selectedAction === 'ajouter') {
  //     return this.quantiteAjoute !== null 
  //       && this.quantiteAjoute > 0 
  //       && this.selectedProduct.quantite + this.quantiteAjoute >= 0;
  //   }
  //   if (this.selectedAction === 'reduire') {
  //     return this.quantiteRetirer !== null 
  //       && this.quantiteRetirer > 0 
  //       && this.selectedProduct.quantite - this.quantiteRetirer >= 0;
  //   }
  //   return false;
  // }
  // Méthode pour afficher une pop-up de succès
  showSuccessModal() {
    this.successMessage = 'Les produits ont été ajustés avec réussite ! ';
    setTimeout(() => {
      this.successMessage = '';
    }, 5000);
  }
  // Méthode pour afficher une pop-up d'erreur
  showErrorModal(message) {
    this.errorMessageError = message;
    setTimeout(() => {
      this.errorMessageError = '';
    }, 3000);
  }
  removePendingAdjustment(index) {
    // Supprime l'élément de la liste à l'index fourni
    this.pendingAdjustments.splice(index, 1);
  }
  // Modifiez onBoutiqueSelected
  onBoutiqueSelected(event) {
    const selectedBoutique = this.streetsBoutique.find(b => b.name === event.option.value);
    if (selectedBoutique) {
      this.boutiqueIdSelected = selectedBoutique.id;
      this.loadProduits(selectedBoutique.id);
      this.pendingAdjustments = [];
      this.selectedProduct = null;
      this.updateTransfertFilter(); // Force le recalcul du filtre
    }
  }
  getFilteredStreetsBoutique() {
    this.filteredStreetsBoutique = this.controlBoutique.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(value => this._filterBoutique(value || '')));
  }
  /*
  private _filterBoutique(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streetsBoutique.map(b => b.name).filter(street => this._normalizeValue(street).includes(filterValue));
  }
  */
  _filterBoutique(value) {
    const filterValue = this._normalizeValue(value);
    return this.streetsBoutique.filter(b => b.actif) // Ne garder que les boutiques actives
    .map(b => b.name).filter(street => this._normalizeValue(street).includes(filterValue));
  }
  _normalizeValue(value) {
    return value.toLowerCase().replace(/\s/g, '');
  }
  onFocusBoutiqueInput() {
    this.controlBoutique.setValue('');
  }
  displayFnBoutique(boutique) {
    return boutique ? boutique : '';
  }
  // OnBoutiqueSelected Transfert
  onBoutiqueSelectedTransfert(event) {
    this.selectedDestinationBoutique = event.option.value;
  }
  getFilteredStreetsBoutiqueTransfert() {
    this.filteredStreetsBoutiqueTransfert = this.controlBoutiqueTransfert.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(value => this._filterBoutiqueTransfert(value || '')));
  }
  _filterBoutiqueTransfert(value) {
    // Gérer le cas où value est un objet boutique
    const searchValue = typeof value === 'string' ? value : value?.name || '';
    const filterValue = this._normalizeValueTransfert(searchValue);
    return this.streetsBoutiqueTransfert.filter(b => this._normalizeValueTransfert(b.name).includes(filterValue) && b.id !== this.boutiqueIdSelected // Exclure la boutique source
    );
  }
  // Cette méthode pour forcer le rafraîchissement
  updateTransfertFilter() {
    const currentValue = this.controlBoutiqueTransfert.value;
    this.controlBoutiqueTransfert.setValue('');
    this.controlBoutiqueTransfert.setValue(currentValue);
  }
  // private _filterBoutiqueTransfert(value: string): any[] {
  //   if (typeof value === 'string') {
  //     const filterValue = this._normalizeValueTransfert(value);
  //     return this.streetsBoutiqueTransfert.filter(b => 
  //       this._normalizeValueTransfert(b.name).includes(filterValue)
  //     );
  //   }
  //   return this.streetsBoutiqueTransfert;
  // }
  _normalizeValueTransfert(value) {
    return value.toLowerCase().replace(/\s/g, '');
  }
  onFocusBoutiqueInputTransfert() {
    this.controlBoutiqueTransfert.setValue('');
  }
  displayFnBoutiqueTransfert(boutique) {
    return boutique?.name || '';
  }
  // Nouvelle méthode pour valider un transfert unique
  validateSingleTransfer() {
    if (!this.boutiqueIdSelected || !this.selectedDestinationBoutique?.id) {
      return {
        valid: false,
        error: 'Veuillez sélectionner les boutiques'
      };
    }
    // Ajout de la vérification des boutiques identiques
    if (this.boutiqueIdSelected === this.selectedDestinationBoutique.id) {
      return {
        valid: false,
        error: 'La source et la destination doivent être différentes'
      };
    }
    if (!this.selectedProduct) {
      return {
        valid: false,
        error: 'Veuillez sélectionner un produit'
      };
    }
    const quantite = this.quantiteRetirer || 0;
    if (quantite <= 0 || quantite > this.selectedProduct.quantite) {
      return {
        valid: false,
        error: 'Quantité invalide'
      };
    }
    return {
      valid: true,
      transfert: {
        produitId: this.selectedProduct.id,
        quantite: quantite,
        boutiqueSourceId: this.boutiqueIdSelected,
        boutiqueDestinationId: this.selectedDestinationBoutique.id
      }
    };
  }
  // Méthode de transfert principale
  transfererProduits() {
    var _this = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let transfersToProcess = [..._this.pendingAdjustments];
      // Si liste vide, vérifier le transfert unique
      if (transfersToProcess.length === 0) {
        const validation = _this.validateSingleTransfer();
        if (!validation.valid) {
          _this.errorMessage = validation.error;
          return;
        }
        transfersToProcess = [validation.transfert];
      }
      try {
        const token = _this.usersService.getToken();
        if (!token) throw new Error('Non authentifié');
        // Envoi des transferts
        for (const transfert of transfersToProcess) {
          yield _this.transfertService.effectuerTransfert(transfert).toPromise();
          // Mise à jour locale
          const product = _this.tasks.find(p => p.id === transfert.produitId);
          if (product) product.quantite -= transfert.quantite;
        }
        // Réinitialisation
        _this.pendingAdjustments = [];
        _this.selectedProduct = null;
        _this.quantiteRetirer = null;
        _this.controlBoutiqueTransfert.reset();
        _this.successMessage = 'Transfert(s) effectué(s) avec succès';
        setTimeout(() => _this.successMessage = '', 3000);
      } catch (error) {
        console.error('Erreur:', error);
        _this.errorMessage = error.error?.message || 'Erreur lors du transfert';
        setTimeout(() => _this.errorMessage = '', 5000);
      }
    })();
  }
  transfertToPendingAdjustments() {
    const validation = this.validateSingleTransfer();
    if (!validation.valid) {
      this.errorMessage = validation.error;
      return;
    }
    // Vérification doublon
    const exists = this.pendingAdjustments.some(t => t.produitId === validation.transfert.produitId && t.boutiqueDestinationId === validation.transfert.boutiqueDestinationId);
    if (exists) {
      this.errorMessage = 'Ce transfert est déjà dans la liste';
      return;
    }
    // Ajout avec les informations complètes
    const newStock = this.selectedProduct.quantite - validation.transfert.quantite;
    this.pendingAdjustments.push({
      ...validation.transfert,
      produitNom: this.selectedProduct.nom,
      stockActuel: this.selectedProduct.quantite,
      stockApres: newStock,
      // Calcul dynamique
      boutiqueDestinationName: this.selectedDestinationBoutique.name
    });
    // Réinitialisation des champs (sans vider la liste)
    this.selectedProduct = null;
    this.quantiteRetirer = null;
    this.selectedDestinationBoutique = null;
    this.controlBoutiqueTransfert.reset();
    this.errorMessage = '';
  }
  get fournisseurCtrl() {
    return this.ajusteForm.get('fournisseurId');
  }
  onFournisseurChange() {
    const id = this.fournisseurCtrl.value;
    const f = this.fournisseurs.find(x => x.id === id);
    this.codeFournisseur = f ? f.nomComplet : '';
    console.log('✅ ID:', id, 'Nom:', this.codeFournisseur);
  }
  navigateBack() {
    this.router.navigate(['/stocks']);
  }
  static {
    this.ɵfac = function AddStockAjustementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddStockAjustementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_2__.ProduitService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_stocks_service__WEBPACK_IMPORTED_MODULE_4__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_transfert_service__WEBPACK_IMPORTED_MODULE_5__.TransfertService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AddStockAjustementComponent,
      selectors: [["app-add-stock-ajustement"]],
      viewQuery: function AddStockAjustementComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.productSelect = _t.first);
        }
      },
      decls: 53,
      vars: 19,
      consts: [["autoBoutique", "matAutocomplete"], ["productSelect", ""], ["autoBoutiqueTransfert", "matAutocomplete"], [1, "container_global"], [1, "content_formulaire"], [1, "modal-body"], [1, "container_formulaire"], ["title", "Retour sur la page stock", 1, "retour_icon_text", 2, "cursor", "pointer", "color", "#0672E4", "margin-bottom", "15px", 3, "click"], [1, "ri-arrow-left-s-line"], [2, "margin-left", "8px", "font-size", "12px"], [1, "Title"], [1, "form_left_right"], [1, "formulaire"], [1, "information_cadre"], [1, "info_titre_input"], [1, "double_input"], [1, "champ_input", "champ_input2"], [1, "title_input"], ["required", "", "name", "action", 1, "input_focus", 3, "ngModelChange", "ngModel"], ["value", "ajouter"], ["value", "reduire"], ["value", "transfert"], ["autocomplete", "off", "type", "text", "placeholder", "Saisis le nom de boutique", "matInput", "", 1, "input_focus", 3, "blur", "formControl", "matAutocomplete"], ["for", "boutiqueId", 1, "label", 2, "opacity", "0.8"], [3, "optionSelected", "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["formControlName", "descriptionGlobal", "id", "descriptionGlobal", "name", "descriptionGlobal", "placeholder", "Saisis Une description pour ce produit", 1, "input_focus2"], ["for", "descriptionGlobal", 1, "label", "labelColor"], ["class", "error-message", 4, "ngIf"], ["class", "champ_input champ_input2", 4, "ngIf"], ["class", "information_cadre", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], [3, "value"], [1, "container_name_icon"], [1, "option-content"], ["class", "option_icon_div", 4, "ngIf"], [1, "option_icon_div"], [1, "option-icon"], [1, "error-message"], [4, "ngIf"], [1, "champ_input_list_stocke"], [1, "title_input2"], ["formControlName", "fournisseurId", "required", "", 1, "input_table2", 3, "change"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "champ_input_list_stocke", 2, "margin-right", "15px"], [1, "title_input2", 2, "text-align", "center"], ["type", "text", "formControlName", "codeFournisseur", "id", "codeFournisseur", "name", "codeFournisseur", "placeholder", "0", 1, "input_table2", 2, "text-align", "center", "margin-bottom", "3px!important"], [1, "add_new_quantite_stock"], [1, "containerTable", 2, "position", "relative"], [1, "titleTableProduit"], [1, "title_table_name"], [1, "title_table_contenu", 2, "color", "#0672E4"], [1, "title_table_contenu"], [1, "tr_stock", 2, "border-top", "1px solid #f0f2f5"], [1, "champ_input"], ["required", "", "name", "selectedProduct", 1, "input_focus_type", "input_focus_type_select", 3, "ngModelChange", "ngModel", "disabled", "compareWith"], [1, "champ_input", 2, "margin-right", "15px"], ["type", "number", "id", "addQuantite", "placeholder", "0", "name", "addQuantite", "min", "0", 1, "input_focus_type", 2, "text-align", "center", 3, "ngModelChange", "ngModel", "max"], ["type", "text", "disabled", "", "id", "stockActuel", "name", "stockActuel", 1, "input_focus_type", 2, "cursor", "no-drop", "text-align", "center", 3, "value"], ["type", "text", "disabled", "", "id", "CoutUnitaire", "name", "CoutUnitaire", 1, "input_focus_type", 2, "cursor", "no-drop", "text-align", "center", 3, "value"], ["type", "text", "disabled", "", "id", "stockApres", "name", "stockApres", 1, "input_focus_type", 2, "text-align", "center", "cursor", "no-drop", 3, "value"], [1, "btn_ajouter", 3, "click"], [1, "ri-add-fill"], ["class", "tr_stock", "style", "border-top: 1px solid #f0f2f5;", 4, "ngFor", "ngForOf"], [1, "champ_input_list_stock", 2, "margin-right", "10px"], ["type", "text", "readonly", "", 1, "input_table", 3, "value"], [1, "champ_input_list_stock", 2, "margin-right", "15px"], ["type", "text", "readonly", "", 1, "input_table", 2, "text-align", "center", 3, "value"], [1, "champ_input_list_stock"], ["type", "text", "readonly", "", 1, "input_table", 2, "text-align", "center", "cursor", "no-drop", 3, "value"], [1, "btn_delete", 3, "click"], [1, "ri-delete-bin-5-fill"], ["disabled", ""], [1, "modal-overlay"], [1, "modal-content"], [1, "modal-content-text"], [1, "modal-content-text-button", 3, "click"], [1, "title_table_contenu", 2, "color", "#ff0000"], ["type", "number", "placeholder", "0", "name", "quantiteRetirer", "min", "0", 1, "input_focus_type", 2, "text-align", "center", 3, "ngModelChange", "ngModel", "max"], ["type", "text", "disabled", "", "id", "stockApres", "name", "stockApres", 1, "input_focus_type", 2, "text-align", "center", 3, "value"], [1, "title_table_name_transfert"], [1, "title_table_contenu", 2, "color", "#0672E4", "margin-right", "15px"], ["autocomplete", "off", "type", "text", "placeholder", "Saisis le nom de boutique", "matInput", "", 1, "input_focus", 3, "formControl", "matAutocomplete"], ["for", "boutiqueId", 1, "label"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [3, "value", "disabled"], ["style", "color: #666; margin-left: 8px;", 4, "ngIf"], ["style", "color: #ff0000; margin-left: 8px;", 4, "ngIf"], [2, "color", "#666", "margin-left", "8px"], [2, "color", "#ff0000", "margin-left", "8px"], [1, "info_titre_input", "info_titre_input_btn"], [1, "btn_annuler"], [1, "btn_cancel", 3, "click"], [1, "btn_ajouter"], [1, "btn_save", 3, "click"]],
      template: function AddStockAjustementComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "form", 6)(4, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddStockAjustementComponent_Template_p_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.navigateBack());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Stocks");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 10)(9, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Ajustements des stocks");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 11)(12, "div", 12)(13, "div", 13)(14, "div", 14)(15, "div", 15)(16, "div", 16)(17, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "select", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddStockAjustementComponent_Template_select_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.selectedAction, $event) || (ctx.selectedAction = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Ajouter");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Reduire");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Transfert");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 16)(27, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Boutique");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function AddStockAjustementComponent_Template_input_blur_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.checkBoutiqueSelection());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Boutique");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "mat-autocomplete", 24, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("optionSelected", function AddStockAjustementComponent_Template_mat_autocomplete_optionSelected_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onBoutiqueSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, AddStockAjustementComponent_mat_option_34_Template, 5, 3, "mat-option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](35, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "form", 26)(37, "div", 15)(38, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "textarea", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Description (Facultatif)");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, AddStockAjustementComponent_div_42_Template, 3, 2, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, AddStockAjustementComponent_div_43_Template, 8, 2, "div", 30)(44, AddStockAjustementComponent_div_44_Template, 5, 0, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, AddStockAjustementComponent_div_45_Template, 49, 21, "div", 31)(46, AddStockAjustementComponent_div_46_Template, 50, 21, "div", 31)(47, AddStockAjustementComponent_div_47_Template, 54, 22, "div", 31)(48, AddStockAjustementComponent_div_48_Template, 8, 0, "div", 31)(49, AddStockAjustementComponent_div_49_Template, 8, 0, "div", 31)(50, AddStockAjustementComponent_div_50_Template, 8, 0, "div", 31)(51, AddStockAjustementComponent_div_51_Template, 6, 1, "div", 32)(52, AddStockAjustementComponent_div_52_Template, 4, 1, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          const autoBoutique_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedAction);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.controlBoutique)("matAutocomplete", autoBoutique_r30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayWith", ctx.displayFnBoutique);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](35, 17, ctx.filteredStreetsBoutique));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.ajusteForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f["descriptionGlobal"].touched && ctx.f["descriptionGlobal"].invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedAction === "ajouter");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedAction === "ajouter");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedAction === "ajouter");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedAction === "reduire");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedAction === "transfert");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedAction === "ajouter");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedAction === "reduire");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedAction === "transfert");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.errorMessageError);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_1__.CustomNumberPipe, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.M, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon],
      styles: ["@charset \"UTF-8\";\n.container_global[_ngcontent-%COMP%] {\n  margin-right: 15%;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\nth[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\n.containerTable[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 10px;\n}\n\n.titleTableProduit[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.champ_input_list_stock[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n  display: block;\n}\n\n.champ_input[_ngcontent-%COMP%]   .title_input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -18px;\n}\n\n.champ_input_Categorie[_ngcontent-%COMP%] {\n  margin-bottom: 15px !important;\n}\n\n.formulaire[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.Title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 250px;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #695c5c;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: rgb(107, 102, 102);\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 5px;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n.input_focus2[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 250px;\n  height: 57px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  padding-left: 10px;\n  background: none;\n  color: #777474;\n  border-radius: 5px;\n  padding-top: 10px;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  resize: none;\n}\n\n.input_focus2[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.champ_input2[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 0px;\n  pointer-events: none;\n  color: rgb(66, 56, 56);\n}\n\n.champ_input[_ngcontent-%COMP%]   .labelCategory[_ngcontent-%COMP%] {\n  color: rgb(66, 56, 56);\n  left: 0;\n  font-size: 14px;\n}\n\n.input_focus2[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus2[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n  background-color: #fff;\n}\n\n.input_focus2[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus2[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 15px;\n  transition: all 0.2s ease-in-out;\n}\n\n.info_titre_input[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.info_titre_input[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 10px;\n  letter-spacing: 0.6px;\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n  border-radius: 5px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.information_cadre_save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.input_focus_magasin[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.input_focus_petit[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.double_input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-top: 20px;\n}\n\n.champ_input2[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50%;\n  box-sizing: border-box;\n  vertical-align: top;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\n\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #0672E4; \n\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n\n\n.container_file[_ngcontent-%COMP%] {\n  width: 150px;\n  border-radius: 10px;\n  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  gap: 5px;\n  background-color: rgba(0, 110, 255, 0.041);\n  margin-bottom: 10px;\n  margin-top: 20px;\n}\n\n.header_file[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 140px;\n  border: 1px dashed rgba(6, 113, 228, 0.6156862745);\n  border-radius: 10px;\n  flex-direction: column;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n\n.header_file[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.header_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n}\n\n.footer_file[_ngcontent-%COMP%] {\n  background-color: rgba(0, 110, 255, 0.075);\n  width: 140px;\n  height: 35px;\n  padding: 5px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: black;\n  border: none;\n  margin-top: 3px;\n}\n\n.footer_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  font-size: 10px;\n}\n\n.footer_file[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 7px;\n}\n\n#file[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.info_titre_input_btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 20px;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #ff0000;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #0672E4;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all 0.5s;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.btn_add_category2[_ngcontent-%COMP%] {\n  border: none;\n  padding: 2px 10px;\n  border-radius: 4px;\n  background-color: #0672E4;\n  color: #fff;\n  cursor: pointer;\n}\n\n.btn_add_category2[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all ease 0.5s;\n}\n\n.btn_add_categoryDiv2[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  justify-content: center;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.double_input2[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.ajouter_cadre_cree_c_u[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 230px;\n  background-color: #fff;\n  margin-top: 40px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n}\n\n.container_error_message[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.input_focus_cree_cate[_ngcontent-%COMP%] {\n  min-width: auto;\n}\n\n.btn-c-s[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.btn_s_category[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 35px;\n  background-color: rgba(6, 113, 228, 0.7843137255);\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  letter-spacing: 0.6px;\n  padding: 0 25px;\n}\n\n.btn_c_category[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 35px;\n  background-color: rgba(255, 0, 0, 0.8078431373);\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  letter-spacing: 0.6px;\n  padding: 0 25px;\n}\n\n.btn_s_category[_ngcontent-%COMP%]:hover {\n  background-color: #0672E4;\n  transition: all ease 0.5s;\n}\n\n.btn_c_category[_ngcontent-%COMP%]:hover {\n  background-color: #ff0000;\n  transition: all ease 0.5s;\n}\n\n.error-message-category[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: red;\n  font-weight: bold;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.error-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-style: 10px;\n}\n\n.errorAPI[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  margin-top: -9px;\n}\n\n.errorAPI[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n}\n\n.errorAPI[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding-left: 5px;\n}\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n\n\n.modal-content[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 30px;\n  border-radius: 10px;\n  text-align: center;\n  width: 90%;\n  max-width: 400px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  animation: fadeInDown 0.3s ease;\n  position: relative;\n}\n\n\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.popup-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin-bottom: 10px;\n}\n\n.popup-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px;\n}\n\n.modal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5em;\n  color: #333;\n}\n\n.modal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: #555;\n  margin: 20px 0;\n}\n\n\n\n.modal-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  font-size: 1em;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n\n.modal-content.error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #e53935;\n}\n\n.modal-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n}\n\n.modal-content.error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #d32f2f;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 18px;\n  z-index: 1000;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid white;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.info_titre_input_type[_ngcontent-%COMP%] {\n  padding: 20px;\n  padding-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: 10px;\n}\n\n.info_type[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-top: 20px;\n}\n\n.input_focus_type_select[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.input_focus_type[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #695c5c;\n}\n\n.btn_cadre_action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #0672E4;\n  padding: 5px;\n  border-radius: 50%;\n  font-size: 20px;\n}\n\n.input_table[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #695c5c;\n}\n\n.input_table2[_ngcontent-%COMP%] {\n  width: 100%;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: -1px 0 0px;\n  \n\n  font-size: 14px;\n  background: none;\n  color: #695c5c;\n  margin-bottom: 0;\n  top: 10px;\n  padding: 10px;\n}\n\n.title_table_name[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.add_new_quantite_stock[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.add_new_quantite_stock[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 13px;\n  letter-spacing: 0.6px;\n  color: rgba(0, 0, 0, 0.5568627451);\n}\n\n.add_new_quantite_stock[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  border: 1px solid #0672E4;\n  border-radius: 5px;\n  background-color: transparent;\n  color: #000;\n}\n\n.btn_ajuster[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0262c8;\n  transition: all ease-in 0.5;\n}\n\n.btn_ajuster[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n  margin-top: 20px;\n}\n\n.btn_ajuster[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  border: none;\n  border-radius: 5px;\n  background-color: #0672E4;\n  color: #fff;\n}\n\n.btn_ajuster_reduire[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n}\n\n.btn_ajuster_reduire[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  border: none;\n  border-radius: 5px;\n  background-color: #ff0000;\n  color: #fff;\n}\n\n.btn_ajuster_reduire[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #db0303;\n  transition: all ease-in 0.5;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 14px;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.btn_ajouter[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background-color: transparent;\n  color: #0672E4;\n  padding: 2px;\n  border-radius: 50%;\n  cursor: pointer;\n  border: 3px solid #0672E4;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  background-color: rgba(8, 99, 197, 0.0549019608);\n  transition: all ease 0.5s;\n}\n\n.btn_delete[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  margin-top: 10px;\n}\n\n.btn_delete[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #ff0000;\n  cursor: pointer;\n}\n\n.btn_delete[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #ca0000;\n  transition: all ease 0.5s;\n}\n\n.tr_stock[_ngcontent-%COMP%] {\n  display: table-row !important;\n}\n\n.error-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  padding: 15px 25px;\n  background: #ffebee;\n  border: 1px solid #ffcdd2;\n  border-radius: 4px;\n  color: #d32f2f;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  animation: _ngcontent-%COMP%_shake 0.4s ease-in-out;\n}\n\n.error-popup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #d32f2f;\n  cursor: pointer;\n  padding: 5px;\n}\n\n.input_focus_type_select.duplicate[_ngcontent-%COMP%] {\n  border-color: #ff4444 !important;\n  animation: _ngcontent-%COMP%_shake 0.5s;\n}\n\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(5px);\n  }\n  75% {\n    transform: translateX(-5px);\n  }\n}\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n\n\n.modal-content[_ngcontent-%COMP%] {\n  padding: 15px 25px;\n  background: #ffffff;\n  border-radius: 4px;\n  color: #d32f2f;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  animation: _ngcontent-%COMP%_shake 0.4s ease-in-out;\n}\n\n.modal-content[_ngcontent-%COMP%]   .modal-content-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #555;\n  margin: 15px 0;\n}\n\n\n\n.modal-content[_ngcontent-%COMP%]   .modal-content-text-button[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: #fff;\n  border: none;\n  font-size: 1em;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background 0.3s ease;\n  padding: 10px;\n  margin: 0;\n}\n\nselect[_ngcontent-%COMP%]:invalid {\n  color: #6c757d;\n}\n\nselect.input_focus_type_select.duplicate[_ngcontent-%COMP%] {\n  border-color: #ff4444;\n  transform: scale(1.02);\n}\n\nselect.input_focus_type_select[_ngcontent-%COMP%] {\n  transition: all 0.3s ease; \n\n  appearance: none;\n}\n\n.info-message[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  color: #666;\n  font-size: 0.9em;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.info-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n\n.input_focus_type_select[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n\noption[disabled][_ngcontent-%COMP%] {\n  color: #999;\n  font-style: italic;\n}\n\n.option-with-icon[_ngcontent-%COMP%]   .option-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.option-with-icon[_ngcontent-%COMP%]   .option-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n\n.container_name_icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.option_icon_div[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 16px;\n}\n\n.container_name_icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.option_icon_div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n\n.option-icon[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zdG9jay1hanVzdGVtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDRTtFQUNFLGVBQUE7QUFFSjs7QUFDRTtFQUVFLGVBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0FBQ0o7O0FBTUU7RUFDRSx5QkFBQTtFQUVBLG1CQUFBO0FBSko7O0FBT0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFPRSxlQUFBO0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBUUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUxKOztBQVFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBTEo7O0FBUUU7RUFDRSw4QkFBQTtBQUxKOztBQVFFO0VBQ0Usa0JBQUE7QUFMSjs7QUFRRTtFQUNFLGVBQUE7QUFMSjs7QUFRRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtBQU5KOztBQVNFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUFOSjs7QUFTRTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTko7O0FBVUU7O0VBRUUsY0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBUEo7O0FBVUU7RUFDRSxVQUFBO0FBUEo7O0FBVUU7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFQSjs7QUFVRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7QUFQSjs7QUFVRTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBUEo7O0FBVUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQVBKOztBQVdFO0VBQ0Usc0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtBQVJKOztBQVdFOztFQUVFLGNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBUko7O0FBV0U7RUFDRSxVQUFBO0FBUko7O0FBV0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFSSjs7QUFXRTtFQUNFLGFBQUE7QUFSSjs7QUFZRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBVEo7O0FBYUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFWSjs7QUFhRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBVko7O0FBYUU7RUFDRSxXQUFBO0FBVko7O0FBY0U7RUFDRSxVQUFBO0FBWEo7O0FBbUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBaEJKOztBQXFCRTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFsQko7O0FBNEJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQXpCSjs7QUE2QkU7RUFDRSxTQUFBO0FBMUJKOztBQStCRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTVCSjs7QUErQkUsc0NBQUE7QUFDQTtFQUNFLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQTVCSjs7QUErQkUsa0JBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFBUSxPQUFBO0VBQVMsUUFBQTtFQUFVLFNBQUE7RUFDM0Isc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBekJKOztBQTRCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF6Qko7O0FBNEJFLGdDQUFBO0FBQ0E7RUFDRSx5QkFBQSxFQUFBLHFCQUFBO0FBekJKOztBQTRCRTtFQUNFLDJCQUFBO0FBekJKOztBQTRCRSxpQ0FBQTtBQUNBO0VBRUUsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUExQko7O0FBNkJFO0VBRUUsYUFBQTtFQUNBLFlBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaURBQUE7QUEzQko7O0FBOEJFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBM0JKOztBQThCRTtFQUNFLGFBQUE7QUEzQko7O0FBOEJFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBM0JKOztBQThCRTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQTVCSjs7QUErQkU7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUE1Qko7O0FBK0JFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBNUJKOztBQStCRTtFQUNFLGFBQUE7QUE1Qko7O0FBK0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUE1Qko7O0FBK0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0FBNUJKOztBQWdDRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQTdCSjs7QUFpQ0U7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FBOUJKOztBQWtDRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQS9CSjs7QUFtQ0U7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0FBaENKOztBQXFDRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBbENKOztBQXFDRTtFQUNFLFdBQUE7QUFsQ0o7O0FBcUNFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBbENKOztBQXNDRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFuQ0o7O0FBdUNFO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQXBDSjs7QUF1Q0U7RUFDRSxrQkFBQTtBQXBDSjs7QUFnREU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FBN0NKOztBQWdERTtFQUNFLGlCQUFBO0FBN0NKOztBQWlERTtFQUVFLGVBQUE7QUEvQ0o7O0FBa0RFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBL0NKOztBQWtERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBL0NKOztBQWtERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBL0NKOztBQWtERTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUEvQ0o7O0FBa0RFO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQS9DSjs7QUFvREU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWpESjs7QUFvREU7RUFDRSxnQkFBQTtBQWpESjs7QUFvREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBakRKOztBQW9ERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBakRKOztBQW9ERTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQWpESjs7QUF1REUsd0JBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFwREo7O0FBd0RFLHdCQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FBckRKOztBQXdERSxnREFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXJESjs7QUF3REU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBckRKOztBQXdERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFyREo7O0FBd0RFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQXJESjs7QUF3REU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFyREo7O0FBd0RFLG9CQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFyREo7O0FBd0RFO0VBQ0UseUJBQUE7QUFyREo7O0FBd0RFO0VBQ0UseUJBQUE7QUFyREo7O0FBd0RFO0VBQ0UseUJBQUE7QUFyREo7O0FBd0RFO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBckRKOztBQXlERTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQXRESjs7QUF5REU7RUFDRSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FBdERKOztBQXlERTtFQUNFO0lBQUssdUJBQUE7RUFyRFA7RUFzREU7SUFBTyx5QkFBQTtFQW5EVDtBQUNGO0FBMkRFO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQXpESjs7QUE2REU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUExREo7O0FBNkRFO0VBQ0UsZ0JBQUE7QUExREo7O0FBNkRFO0VBQ0UsV0FBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtBQTVESjs7QUErREU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBNURKOztBQStEQTtFQUNJLFdBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUE3REo7O0FBZ0VBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQTdERjs7QUFnRUE7RUFDSSxVQUFBO0FBN0RKOztBQWtFQTtFQUNJLG1CQUFBO0FBL0RKOztBQXNFQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtDQUFBO0FBbkVKOztBQXNFQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQW5FSjs7QUFzRUE7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0FBbkVKOztBQXNFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBbkVGOztBQXNFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBbkVGOztBQXNFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQW5FRjs7QUFzRUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQW5FRjs7QUFzRUE7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0FBbkVGOztBQXNFQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQW5FRjs7QUF1RUE7RUFDRSxpQkFBQTtBQXBFRjs7QUF1RUE7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBcEVGOztBQXVFQTtFQUNFLGdEQUFBO0VBQ0EseUJBQUE7QUFwRUY7O0FBd0VBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQXJFRjs7QUF3RUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFyRUY7O0FBd0VBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FBckVGOztBQXdFQTtFQUNFLDZCQUFBO0FBckVGOztBQXdFQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtBQXJFRjs7QUF3RUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFyRUY7O0FBd0VBO0VBQ0UsZ0NBQUE7RUFDQSxxQkFBQTtBQXJFRjs7QUF3RUE7RUFDRTtJQUFXLHdCQUFBO0VBcEVYO0VBcUVBO0lBQU0sMEJBQUE7RUFsRU47RUFtRUE7SUFBTSwyQkFBQTtFQWhFTjtBQUNGO0FBa0VBLHdCQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBaEVGOztBQW1FQSx3QkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtBQWpFRjs7QUFvRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFqRUY7O0FBb0VBLG9CQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFsRUY7O0FBcUVBO0VBQ0UsY0FBQTtBQWxFRjs7QUFxRUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBbEVGOztBQXFFQTtFQUNFLHlCQUFBLEVBQ0EsNkJBQUE7RUFFQSxnQkFBQTtBQWxFRjs7QUFxRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQWxFRjtBQW9FRTtFQUNFLGdCQUFBO0FBbEVKOztBQXNFQTtFQUVFLG1CQUFBO0FBcEVGOztBQXVFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQXBFRjs7QUF1RUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBcEVGOztBQXVFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXBFRjs7QUF1RUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFwRUY7O0FBd0VBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQXJFRjs7QUF5RUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUF0RUY7O0FBeUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUF0RUY7O0FBeUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUF0RUYiLCJmaWxlIjoiYWRkLXN0b2NrLWFqdXN0ZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyX2dsb2JhbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB9XG4gIFxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgdGgge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICB9XG4gIFxuICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIH1cbiAgXG4vLyAgIHRyOmhvdmVyIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuLy8gICB9XG4gIFxuICAuY29udGFpbmVyVGFibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbi50aXRsZVRhYmxlUHJvZHVpdCB0aCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiAgLyogZm9ybXVsYWlyZSAqL1xuICBcbiAgLmNoYW1wX2lucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0X2xpc3Rfc3RvY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgfVxuXG4gIC5jaGFtcF9pbnB1dCAudGl0bGVfaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xOHB4O1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfQ2F0ZWdvcmllIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4IWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmZvcm11bGFpcmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLlRpdGxlIGgzIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDUzLCA1MCwgNTApO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICM2OTVjNWM7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dCAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIycHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiByZ2IoMTA3LCAxMDIsIDEwMik7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbiAgXG4gIFxuICAuaW5wdXRfZm9jdXM6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4gIC5pbnB1dF9mb2N1czpmb2N1cyArIC5sYWJlbCB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNTdweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjNzc3NDc0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDUzLCA1MCwgNTApO1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dDIgLmxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMnB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xuICB9XG4gIFxuICBcbiAgLmNoYW1wX2lucHV0IC5sYWJlbENhdGVnb3J5IHtcbiAgICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xuICAgIGxlZnQ6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuICAuaW5wdXRfZm9jdXMyOmZvY3VzICsgLmxhYmVsIHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmluZm9fdGl0cmVfaW5wdXQge1xuICAgIHBhZGRpbmc6IDIwcHg7IFxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLmluZm9fdGl0cmVfaW5wdXQgaDQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gIH1cbiAgXG4gIC8vIDwhLS0gTGVzIGluZm9ybWF0aW9uIGRlcyBtYWdhc2luICAtLT5cbiAgLmluZm9ybWF0aW9uX2NhZHJlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLmluZm9ybWF0aW9uX2NhZHJlX3NhdmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1c19tYWdhc2luIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvL21pbi13aWR0aDogMTAwcHghaW1wb3J0YW50O1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXNfcGV0aXQge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgXG4gIFxuICAvLyAuY2hhbXBfaW5wdXRfbWFyZ2luIHtcbiAgLy8gICBtYXJnaW4tbGVmdDogMjBweDtcbiAgLy8gfVxuICBcbiAgLmRvdWJsZV9pbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBcbiAgXG4gIFxuICAuY2hhbXBfaW5wdXQyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbiAgXG4gIFxuICAvLyAuaW5wdXRfZm9jdXNfbGFyZ2V7XG4gIC8vICAgLy9taW4td2lkdGg6IDM4MHB4O1xuICAvLyAgIHdpZHRoOiAxMDAlO1xuICAvLyB9XG4gIFxuICBcbiAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIFxuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC8vIFRvZ2dsZSBcbiAgXG4gIC5zd2l0Y2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICB9XG4gIFxuICAvKiBNYXNxdWVyIGwnaW5wdXQgY2hlY2tib3ggb3JpZ2luYWwgKi9cbiAgLnN3aXRjaCBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgXG4gIC8qIExlIMKrIHNsaWRlciDCuyAqL1xuICAuc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICB9XG4gIFxuICAuc2xpZGVyOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxOHB4OyBcbiAgICB3aWR0aDogMThweDtcbiAgICBsZWZ0OiAzcHg7IFxuICAgIGJvdHRvbTogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgXG4gIC8qIFF1YW5kIGxlIGNoZWNrYm94IGVzdCBjb2Now6kgKi9cbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7IC8qIENvdWxldXIgYXUgY2hvaXggKi9cbiAgfVxuICBcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIH1cbiAgXG4gIC8qIEZyb20gVWl2ZXJzZS5pbyBieSBZYXlhMTIwODUgKi8gXG4gIC5jb250YWluZXJfZmlsZSB7XG4gICAgLy8gaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZ2FwOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTAsIDI1NSwgMC4wNDEpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBcbiAgLmhlYWRlcl9maWxlIHtcbiAgICAvLyBmbGV4OiAxO1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjMDY3MWU0OWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBpbWd7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgc3ZnIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLmZvb3Rlcl9maWxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA3NSk7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gIH1cbiAgXG4gIC5mb290ZXJfZmlsZSBwIHtcbiAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICBcbiAgLmZvb3Rlcl9maWxlIGkge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgfVxuICBcbiAgI2ZpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLmluZm9fdGl0cmVfaW5wdXRfYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG4gIFxuICAvLyBidXR0b24gYW5udWxlclxuICAuYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWwge1xuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gIH1cbiAgXG4gIC8vIGJ1dHRvbiBhbm51bGVyIGhvdmVyXG4gIC5idG5fYW5udWxlciAuYnRuX2NhbmNlbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MDEwMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG4gIH1cbiAgXG4gIC8vIGJ1dHRvbiBham91dGVyIFxuICAuYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlIHtcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuICB9XG4gIFxuICAvLyBidXR0b24gYWpvdXRlciBob3ZlclxuICAuYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gIH1cbiAgXG4gIC8vIENhdGVnb3J5IFxuICBcbiAgLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmJ0bl9hZGRfY2F0ZWdvcnkyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMnB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC8vYm94LXNoYWRvdzogMCAycHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDc4KTtcbiAgfVxuICBcbiAgLmJ0bl9hZGRfY2F0ZWdvcnkyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcbiAgfVxuICBcbiAgXG4gIC5idG5fYWRkX2NhdGVnb3J5RGl2MiB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMTBweDtcbiAgfVxuICBcbiAgLmRvdWJsZV9pbnB1dDIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgXG4gIC8vLy8vLy8vLy8vLy8vLy8vIFBBUlRJUiBMRUZUXG4gIFxuICBcbiAgLy8gLmFqb3V0X2Jvb2xfZm9ybSB7XG4gIC8vICAgLy93aWR0aDogMTAwJTtcbiAgICBcbiAgLy8gfVxuICBcbiAgLmFqb3V0ZXJfY2FkcmVfY3JlZV9jX3Uge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDIzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMDgpO1xuICB9XG4gIFxuICAuY29udGFpbmVyX2Vycm9yX21lc3NhZ2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG4gIFxuICBcbiAgLmlucHV0X2ZvY3VzX2NyZWVfY2F0ZSB7XG4gICAgLy93aWR0aDogNTAlO1xuICAgIG1pbi13aWR0aDogYXV0bztcbiAgfVxuICBcbiAgLmJ0bi1jLXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gIH1cbiAgXG4gIC5idG5fc19jYXRlZ29yeSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcxZTRjODtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gICAgcGFkZGluZzogMCAyNXB4O1xuICB9XG4gIFxuICAuYnRuX2NfY2F0ZWdvcnkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwY2U7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgfVxuICBcbiAgLmJ0bl9zX2NhdGVnb3J5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcbiAgfVxuICBcbiAgLmJ0bl9jX2NhdGVnb3J5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcbiAgfVxuICBcbiAgLy8gQ2F0ZWdvcnkgXG4gIFxuICAuZXJyb3ItbWVzc2FnZS1jYXRlZ29yeSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICAuZXJyb3ItbWVzc2FnZSBzcGFuIHtcbiAgICBmb250LXN0eWxlOiAxMHB4O1xuICB9XG4gIFxuICAuZXJyb3JBUEkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IC05cHg7XG4gIH1cbiAgXG4gIC5lcnJvckFQSSBpbWd7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICB9XG4gIFxuICAuZXJyb3JBUEkgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG4gIFxuICBcbiAgLy8gUG9wIHVwXG4gIFxuICAvKiBPdmVybGF5IGRlIGxhIHBvcHVwICovXG4gIC5tb2RhbC1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxuICBcbiAgXG4gIC8qIENvbnRlbnUgZGUgbGEgcG9wdXAgKi9cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW5Eb3duIDAuM3MgZWFzZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC8qIEhlYWRlciBkZSBsYSBwb3B1cCBhdmVjIGwnaW1hZ2UgZXQgbGUgdGl0cmUgKi9cbiAgLnBvcHVwLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLnBvcHVwLWltZyBpbWcge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICAucG9wdXAtaWNvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5tb2RhbC1jb250ZW50IGgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuICBcbiAgLm1vZGFsLWNvbnRlbnQgcCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgY29sb3I6ICM1NTU7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gIH1cbiAgXG4gIC8qIFN0eWxlIGR1IGJvdXRvbiAqL1xuICAubW9kYWwtY29udGVudCBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xuICB9XG4gIFxuICAubW9kYWwtY29udGVudC5lcnJvciBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTM5MzU7XG4gIH1cbiAgXG4gIC5tb2RhbC1jb250ZW50IGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgfVxuICBcbiAgLm1vZGFsLWNvbnRlbnQuZXJyb3IgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyZjJmO1xuICB9XG4gIFxuICAubG9hZGluZy1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG4gIFxuICBcbiAgLmxvYWRpbmctY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDsgXG4gIH1cbiAgXG4gIC5zcGlubmVyIHtcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgfVxuXG5cblxuICAvLy8vLy8vLy8vLy8vIFRZUEVcbiAgXG5cbiAgXG4gIC5pbmZvX3RpdHJlX2lucHV0X3R5cGUge1xuICAgIHBhZGRpbmc6IDIwcHg7IFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuaW5mb190eXBlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICAuaW5wdXRfZm9jdXNfdHlwZV9zZWxlY3Qge1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1c190eXBlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBtaW4td2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogNDlweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLy9wYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzY5NWM1YztcbiAgfVxuICBcbiAgLmJ0bl9jYWRyZV9hY3Rpb24gaSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4uaW5wdXRfdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIG1pbi13aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiA0OXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjNjk1YzVjO1xuICAgIC8vIG1hcmdpbjogMTVweDtcbn1cbi5pbnB1dF90YWJsZTIge1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgbWFyZ2luOiAtMXB4IDAgMHB4O1xuICAvKiB0cmFuc2l0aW9uOiBhbGwgMC4zczsgKi9cbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzY5NWM1YztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udGl0bGVfdGFibGVfbmFtZSB7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLy8gQnV0dG9uIGFkZF9uZXdfcXVhbnRpdGVfc3RvY2tcblxuLmFkZF9uZXdfcXVhbnRpdGVfc3RvY2sge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkX25ld19xdWFudGl0ZV9zdG9jayBoNCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gICAgY29sb3I6ICMwMDAwMDA4ZTtcbn1cblxuLmFkZF9uZXdfcXVhbnRpdGVfc3RvY2sgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLmJ0bl9hanVzdGVyIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNjJjODtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNTtcbn1cblxuLmJ0bl9hanVzdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJ0bl9hanVzdGVyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG5fYWp1c3Rlcl9yZWR1aXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbn1cblxuLmJ0bl9hanVzdGVyX3JlZHVpcmUgYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bl9hanVzdGVyX3JlZHVpcmUgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiMDMwMztcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjU7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLy8gYnRuIGFqb3V0ZXJcbi5idG5fYWpvdXRlciB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uYnRuX2Fqb3V0ZXIgaSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDNweCBzb2xpZCAjMDY3MkU0O1xufVxuXG4uYnRuX2Fqb3V0ZXIgaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzUwZTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xufVxuXG4vLyBidG4gc3VwcHJpbWVyXG4uYnRuX2RlbGV0ZSB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYnRuX2RlbGV0ZSBpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmMDAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuX2RlbGV0ZSBpOmhvdmVyIHtcbiAgY29sb3I6ICNjYTAwMDA7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcbn1cblxuLnRyX3N0b2NrIHtcbiAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvci1wb3B1cCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZlYmVlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZjZGQyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjZDMyZjJmO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE1cHg7XG4gIGFuaW1hdGlvbjogc2hha2UgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLmVycm9yLXBvcHVwIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNkMzJmMmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uaW5wdXRfZm9jdXNfdHlwZV9zZWxlY3QuZHVwbGljYXRlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmY0NDQ0ICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogc2hha2UgMC41cztcbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpOyB9XG4gIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTsgfVxufVxuXG4vKiBPdmVybGF5IGRlIGxhIHBvcHVwICovXG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4vKiBDb250ZW51IGRlIGxhIHBvcHVwICovXG4ubW9kYWwtY29udGVudCB7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI2ZmY2RkMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI2QzMmYyZjtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xuICBhbmltYXRpb246IHNoYWtlIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tb2RhbC1jb250ZW50IC5tb2RhbC1jb250ZW50LXRleHQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjNTU1O1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLyogU3R5bGUgZHUgYm91dG9uICovXG4ubW9kYWwtY29udGVudCAubW9kYWwtY29udGVudC10ZXh0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIC8vIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG5zZWxlY3Q6aW52YWxpZCB7XG4gIGNvbG9yOiAjNmM3NTdkOyBcbn1cblxuc2VsZWN0LmlucHV0X2ZvY3VzX3R5cGVfc2VsZWN0LmR1cGxpY2F0ZSB7XG4gIGJvcmRlci1jb2xvcjogI2ZmNDQ0NDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbn1cblxuc2VsZWN0LmlucHV0X2ZvY3VzX3R5cGVfc2VsZWN0IHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAvKiBEw6lzYWN0aXZlIGxlIHJlbmR1IG5hdGlmICovXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmluZm8tbWVzc2FnZSB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbn1cblxuLmlucHV0X2ZvY3VzX3R5cGVfc2VsZWN0OmRpc2FibGVkIHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxub3B0aW9uW2Rpc2FibGVkXSB7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5vcHRpb24td2l0aC1pY29uIC5vcHRpb24tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4ub3B0aW9uLXdpdGgtaWNvbiAub3B0aW9uLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbi5jb250YWluZXJfbmFtZV9pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3B0aW9uX2ljb25fZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAxNnB4O1xuICAvLyBsZWZ0OiA3NzBweDtcbn1cblxuLmNvbnRhaW5lcl9uYW1lX2ljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ub3B0aW9uX2ljb25fZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5vcHRpb24taWNvbiB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9hZGQtc3RvY2stYWp1c3RlbWVudC9hZGQtc3RvY2stYWp1c3RlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBRUo7O0FBQ0U7RUFDRSxlQUFBO0FBRUo7O0FBQ0U7RUFFRSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQU1FO0VBQ0UseUJBQUE7RUFFQSxtQkFBQTtBQUpKOztBQU9BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBSko7O0FBT0UsZUFBQTtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVFFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFMSjs7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUxKOztBQVFFO0VBQ0UsOEJBQUE7QUFMSjs7QUFRRTtFQUNFLGtCQUFBO0FBTEo7O0FBUUU7RUFDRSxlQUFBO0FBTEo7O0FBUUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7QUFOSjs7QUFTRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBTko7O0FBU0U7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVVFOztFQUVFLGNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQVBKOztBQVVFO0VBQ0UsVUFBQTtBQVBKOztBQVVFO0VBQ0Us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LFdBQUE7RUFDQSxjQUFBO0FBakVGOztBQW9FQSxvQkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBbEVGOztBQXFFQTtFQUNFLGNBQUE7QUFsRUY7O0FBcUVBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQWxFRjs7QUFxRUE7RUFDRSx5QkFBQSxFQUNBLDZCQUFBO0VBRUEsZ0JBQUE7QUFsRUY7O0FBcUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFsRUY7QUFvRUU7RUFDRSxnQkFBQTtBQWxFSjs7QUFzRUE7RUFFRSxtQkFBQTtBQXBFRjs7QUF1RUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFwRUY7O0FBdUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQXBFRjs7QUF1RUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFwRUY7O0FBdUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBcEVGOztBQXdFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFyRUY7O0FBeUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBdEVGOztBQXlFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBdEVGOztBQXlFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBdEVGO0FBREEsNHZuQ0FBNHZuQyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJfZ2xvYmFsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIH1cbiAgXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICB0aCB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cbiAgXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgfVxuICBcbi8vICAgdHI6aG92ZXIge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4vLyAgIH1cbiAgXG4gIC5jb250YWluZXJUYWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAvLyBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cblxuLnRpdGxlVGFibGVQcm9kdWl0IHRoIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuICAvKiBmb3JtdWxhaXJlICovXG4gIFxuICAuY2hhbXBfaW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfbGlzdF9zdG9jayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7IFxuICB9XG5cbiAgLmNoYW1wX2lucHV0IC50aXRsZV9pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTE4cHg7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dF9DYXRlZ29yaWUge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1xuICB9XG4gIFxuICAuZm9ybXVsYWlyZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuVGl0bGUgaDMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNDlweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLy9wYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzY5NWM1YztcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0IC5sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjJweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6IHJnYigxMDcsIDEwMiwgMTAyKTtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuICBcbiAgXG4gIC5pbnB1dF9mb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbiAgLmlucHV0X2ZvY3VzOmZvY3VzICsgLmxhYmVsIHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA1N3B4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICM3Nzc0NzQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gICAgcmVzaXplOiBub25lO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0MiAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIycHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiByZ2IoNjYsIDU2LCA1Nik7XG4gIH1cbiAgXG4gIFxuICAuY2hhbXBfaW5wdXQgLmxhYmVsQ2F0ZWdvcnkge1xuICAgIGNvbG9yOiByZ2IoNjYsIDU2LCA1Nik7XG4gICAgbGVmdDogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4gIC5pbnB1dF9mb2N1czI6Zm9jdXMgKyAubGFiZWwge1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICAuaW5mb190aXRyZV9pbnB1dCB7XG4gICAgcGFkZGluZzogMjBweDsgXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cblxuICAuaW5mb190aXRyZV9pbnB1dCBoNCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbiAgfVxuICBcbiAgLy8gPCEtLSBMZXMgaW5mb3JtYXRpb24gZGVzIG1hZ2FzaW4gIC0tPlxuICAuaW5mb3JtYXRpb25fY2FkcmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTA4KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICAuaW5mb3JtYXRpb25fY2FkcmVfc2F2ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzX21hZ2FzaW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vbWluLXdpZHRoOiAxMDBweCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1c19wZXRpdCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICBcbiAgXG4gIC8vIC5jaGFtcF9pbnB1dF9tYXJnaW4ge1xuICAvLyAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAvLyB9XG4gIFxuICAuZG91YmxlX2lucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIFxuICBcbiAgXG4gIC5jaGFtcF9pbnB1dDIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuICBcbiAgXG4gIC8vIC5pbnB1dF9mb2N1c19sYXJnZXtcbiAgLy8gICAvL21pbi13aWR0aDogMzgwcHg7XG4gIC8vICAgd2lkdGg6IDEwMCU7XG4gIC8vIH1cbiAgXG4gIFxuICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgXG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgLy8gVG9nZ2xlIFxuICBcbiAgLnN3aXRjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cbiAgXG4gIC8qIE1hc3F1ZXIgbCdpbnB1dCBjaGVja2JveCBvcmlnaW5hbCAqL1xuICAuc3dpdGNoIGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgfVxuICBcbiAgLyogTGUgw4LCqyBzbGlkZXIgw4LCuyAqL1xuICAuc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICB9XG4gIFxuICAuc2xpZGVyOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxOHB4OyBcbiAgICB3aWR0aDogMThweDtcbiAgICBsZWZ0OiAzcHg7IFxuICAgIGJvdHRvbTogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgXG4gIC8qIFF1YW5kIGxlIGNoZWNrYm94IGVzdCBjb2Now4PCqSAqL1xuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgLyogQ291bGV1ciBhdSBjaG9peCAqL1xuICB9XG4gIFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgfVxuICBcbiAgLyogRnJvbSBVaXZlcnNlLmlvIGJ5IFlheWExMjA4NSAqLyBcbiAgLmNvbnRhaW5lcl9maWxlIHtcbiAgICAvLyBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBnYXA6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA0MSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUge1xuICAgIC8vIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICMwNjcxZTQ5ZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcbiAgfVxuICBcbiAgLmhlYWRlcl9maWxlIGltZ3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBzdmcge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICAuZm9vdGVyX2ZpbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTEwLCAyNTUsIDAuMDc1KTtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgfVxuICBcbiAgLmZvb3Rlcl9maWxlIHAge1xuICAgIG1hcmdpbjogMCFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIFxuICAuZm9vdGVyX2ZpbGUgaSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICB9XG4gIFxuICAjZmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLmhlYWRlcl9maWxlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAuaW5mb190aXRyZV9pbnB1dF9idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBnYXA6IDIwcHg7XG4gIH1cbiAgXG4gIC8vIGJ1dHRvbiBhbm51bGVyXG4gIC5idG5fYW5udWxlciAuYnRuX2NhbmNlbCB7XG4gICAgcGFkZGluZzogOHB4IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbiAgfVxuICBcbiAgLy8gYnV0dG9uIGFubnVsZXIgaG92ZXJcbiAgLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbiAgfVxuICBcbiAgLy8gYnV0dG9uIGFqb3V0ZXIgXG4gIC5idG5fYWpvdXRlciAuYnRuX3NhdmUge1xuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gIH1cbiAgXG4gIC8vIGJ1dHRvbiBham91dGVyIGhvdmVyXG4gIC5idG5fYWpvdXRlciAuYnRuX3NhdmU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgfVxuICBcbiAgLy8gQ2F0ZWdvcnkgXG4gIFxuICAuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuYnRuX2FkZF9jYXRlZ29yeTIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLy9ib3gtc2hhZG93OiAwIDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4wNzgpO1xuICB9XG4gIFxuICAuYnRuX2FkZF9jYXRlZ29yeTI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xuICB9XG4gIFxuICBcbiAgLmJ0bl9hZGRfY2F0ZWdvcnlEaXYyIHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xuICB9XG4gIFxuICAuZG91YmxlX2lucHV0MiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICBcbiAgLy8vLy8vLy8vLy8vLy8vLy8gUEFSVElSIExFRlRcbiAgXG4gIFxuICAvLyAuYWpvdXRfYm9vbF9mb3JtIHtcbiAgLy8gICAvL3dpZHRoOiAxMDAlO1xuICAgIFxuICAvLyB9XG4gIFxuICAuYWpvdXRlcl9jYWRyZV9jcmVlX2NfdSB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4gIH1cbiAgXG4gIC5jb250YWluZXJfZXJyb3JfbWVzc2FnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbiAgXG4gIFxuICAuaW5wdXRfZm9jdXNfY3JlZV9jYXRlIHtcbiAgICAvL3dpZHRoOiA1MCU7XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICB9XG4gIFxuICAuYnRuLWMtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgfVxuICBcbiAgLmJ0bl9zX2NhdGVnb3J5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzFlNGM4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG4gIH1cbiAgXG4gIC5idG5fY19jYXRlZ29yeSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDBjZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gICAgcGFkZGluZzogMCAyNXB4O1xuICB9XG4gIFxuICAuYnRuX3NfY2F0ZWdvcnk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xuICB9XG4gIFxuICAuYnRuX2NfY2F0ZWdvcnk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xuICB9XG4gIFxuICAvLyBDYXRlZ29yeSBcbiAgXG4gIC5lcnJvci1tZXNzYWdlLWNhdGVnb3J5IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5lcnJvci1tZXNzYWdlIHNwYW4ge1xuICAgIGZvbnQtc3R5bGU6IDEwcHg7XG4gIH1cbiAgXG4gIC5lcnJvckFQSSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogLTlweDtcbiAgfVxuICBcbiAgLmVycm9yQVBJIGltZ3tcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gIH1cbiAgXG4gIC5lcnJvckFQSSBzcGFuIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cbiAgXG4gIFxuICAvLyBQb3AgdXBcbiAgXG4gIC8qIE92ZXJsYXkgZGUgbGEgcG9wdXAgKi9cbiAgLm1vZGFsLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG4gIFxuICBcbiAgLyogQ29udGVudSBkZSBsYSBwb3B1cCAqL1xuICAubW9kYWwtY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBhbmltYXRpb246IGZhZGVJbkRvd24gMC4zcyBlYXNlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLyogSGVhZGVyIGRlIGxhIHBvcHVwIGF2ZWMgbCdpbWFnZSBldCBsZSB0aXRyZSAqL1xuICAucG9wdXAtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICAucG9wdXAtaW1nIGltZyB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5wb3B1cC1pY29uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICBcbiAgLm1vZGFsLWNvbnRlbnQgaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG4gIFxuICAubW9kYWwtY29udGVudCBwIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgfVxuICBcbiAgLyogU3R5bGUgZHUgYm91dG9uICovXG4gIC5tb2RhbC1jb250ZW50IGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG4gIH1cbiAgXG4gIC5tb2RhbC1jb250ZW50LmVycm9yIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MzkzNTtcbiAgfVxuICBcbiAgLm1vZGFsLWNvbnRlbnQgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xuICB9XG4gIFxuICAubW9kYWwtY29udGVudC5lcnJvciBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzJmMmY7XG4gIH1cbiAgXG4gIC5sb2FkaW5nLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHotaW5kZXg6IDEwMDA7XG4gIH1cbiAgXG4gIFxuICAubG9hZGluZy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4OyBcbiAgfVxuICBcbiAgLnNwaW5uZXIge1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICB9XG5cblxuXG4gIC8vLy8vLy8vLy8vLy8gVFlQRVxuICBcblxuICBcbiAgLmluZm9fdGl0cmVfaW5wdXRfdHlwZSB7XG4gICAgcGFkZGluZzogMjBweDsgXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAvLyB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5pbmZvX3R5cGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuXG4gIC5pbnB1dF9mb2N1c190eXBlX3NlbGVjdCB7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzX3R5cGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIG1pbi13aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiA0OXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvL3BhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjNjk1YzVjO1xuICB9XG4gIFxuICAuYnRuX2NhZHJlX2FjdGlvbiBpIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbi5pbnB1dF90YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gbWluLXdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDUzLCA1MCwgNTApO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICM2OTVjNWM7XG4gICAgLy8gbWFyZ2luOiAxNXB4O1xufVxuLmlucHV0X3RhYmxlMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDUzLCA1MCwgNTApO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBtYXJnaW46IC0xcHggMCAwcHg7XG4gIC8qIHRyYW5zaXRpb246IGFsbCAwLjNzOyAqL1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjNjk1YzVjO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi50aXRsZV90YWJsZV9uYW1lIHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4vLyBCdXR0b24gYWRkX25ld19xdWFudGl0ZV9zdG9ja1xuXG4uYWRkX25ld19xdWFudGl0ZV9zdG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGRfbmV3X3F1YW50aXRlX3N0b2NrIGg0IHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbiAgICBjb2xvcjogIzAwMDAwMDhlO1xufVxuXG4uYWRkX25ld19xdWFudGl0ZV9zdG9jayBidXR0b24ge1xuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwNjcyRTQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uYnRuX2FqdXN0ZXIgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI2MmM4O1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41O1xufVxuXG4uYnRuX2FqdXN0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYnRuX2FqdXN0ZXIgYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bl9hanVzdGVyX3JlZHVpcmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xufVxuXG4uYnRuX2FqdXN0ZXJfcmVkdWlyZSBidXR0b24ge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuX2FqdXN0ZXJfcmVkdWlyZSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIwMzAzO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNTtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4vLyBidG4gYWpvdXRlclxuLmJ0bl9ham91dGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5idG5fYWpvdXRlciBpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwNjcyRTQ7XG59XG5cbi5idG5fYWpvdXRlciBpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTBlO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XG59XG5cbi8vIGJ0biBzdXBwcmltZXJcbi5idG5fZGVsZXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5idG5fZGVsZXRlIGkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG5fZGVsZXRlIGk6aG92ZXIge1xuICBjb2xvcjogI2NhMDAwMDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xufVxuXG4udHJfc3RvY2sge1xuICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcbn1cblxuLmVycm9yLXBvcHVwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmViZWU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmNkZDI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICNkMzJmMmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMSk7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4uZXJyb3ItcG9wdXAgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2QzMmYyZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5pbnB1dF9mb2N1c190eXBlX3NlbGVjdC5kdXBsaWNhdGUge1xuICBib3JkZXItY29sb3I6ICNmZjQ0NDQgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzO1xufVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7IH1cbiAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpOyB9XG59XG5cbi8qIE92ZXJsYXkgZGUgbGEgcG9wdXAgKi9cbi5tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi8qIENvbnRlbnUgZGUgbGEgcG9wdXAgKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZmZjZGQyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjZDMyZjJmO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE1cHg7XG4gIGFuaW1hdGlvbjogc2hha2UgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWNvbnRlbnQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM1NTU7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4vKiBTdHlsZSBkdSBib3V0b24gKi9cbi5tb2RhbC1jb250ZW50IC5tb2RhbC1jb250ZW50LXRleHQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgLy8gcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbnNlbGVjdDppbnZhbGlkIHtcbiAgY29sb3I6ICM2Yzc1N2Q7IFxufVxuXG5zZWxlY3QuaW5wdXRfZm9jdXNfdHlwZV9zZWxlY3QuZHVwbGljYXRlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmY0NDQ0O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xufVxuXG5zZWxlY3QuaW5wdXRfZm9jdXNfdHlwZV9zZWxlY3Qge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC8qIETDg8Kpc2FjdGl2ZSBsZSByZW5kdSBuYXRpZiAqL1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5pbmZvLW1lc3NhZ2Uge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcblxuICBpIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG59XG5cbi5pbnB1dF9mb2N1c190eXBlX3NlbGVjdDpkaXNhYmxlZCB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbm9wdGlvbltkaXNhYmxlZF0ge1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ub3B0aW9uLXdpdGgtaWNvbiAub3B0aW9uLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLm9wdGlvbi13aXRoLWljb24gLm9wdGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xufVxuXG4uY29udGFpbmVyX25hbWVfaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm9wdGlvbl9pY29uX2RpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTZweDtcbiAgLy8gbGVmdDogNzcwcHg7XG59XG5cbi5jb250YWluZXJfbmFtZV9pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm9wdGlvbl9pY29uX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ub3B0aW9uLWljb24ge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_add-stock-ajustement_add-stock-ajustement_component_ts.js.map