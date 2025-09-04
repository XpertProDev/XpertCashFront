"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_stocks_stocks_component_ts"],{

/***/ 49293:
/*!**********************************************************!*\
  !*** ./src/app/admin-page/SERVICES/categorie.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategorieService: () => (/* binding */ CategorieService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 43942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 88026);






class CategorieService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    this.categoriesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.categories$ = this.categoriesSubject.asObservable();
  }
  ajouterCategorie(category) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      if (!token) {
        console.error('⚠️ Token vide ou non défini ! Vérifiez que l\'utilisateur est bien connecté.');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error('Aucun token valide trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.post(`${this.apiUrl}/createCategory`, category, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(newCategory => {
        // Met à jour le BehaviorSubject dès qu'une nouvelle catégorie est ajoutée
        const currentCategories = this.categoriesSubject.value;
        this.categoriesSubject.next([...currentCategories, newCategory]);
      }));
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      console.error('Erreur lors de l\'ajout de la catégorie:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }));
  }
  getProduitsByCategorie(categorieId, page = 0, size = 20) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      if (!token) {
        console.error('⚠️ Token vide ou non défini ! Vérifiez que l\'utilisateur est bien connecté.');
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable();
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders().set('Authorization', `Bearer ${token}`);
      const params = {
        page: page.toString(),
        size: size.toString()
      };
      return this.http.get(`${this.apiUrl}/categories/${categorieId}/produits`, {
        headers,
        params
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      console.error('Erreur lors de la récupération des produits paginés:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }));
  }
  deleteCategorie(id) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      if (!token) {
        console.error('⚠️ Token JWT manquant pour suppression catégorie.');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error("Token manquant"));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log("🔹 Token envoyé pour DELETE catégorie :", headers);
      return this.http.delete(`${this.apiUrl}/deleteCategory/${id}`, {
        headers,
        responseType: 'text'
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      console.error("❌ Erreur API DELETE :", error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }));
  }
  getCategories() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(token => {
      if (!token) {
        console.error('⚠️ Token vide ou non défini ! Vérifiez que l\'utilisateur est bien connecté.');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error('Aucun token valide trouvé'));
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get(`${this.apiUrl}/allCategory`, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(categories => {
        // Met à jour le BehaviorSubject avec les catégories récupérées
        this.categoriesSubject.next(categories);
      }));
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      console.error('Erreur lors de la récupération des catégories:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }));
  }
  static {
    this.ɵfac = function CategorieService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CategorieService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
      token: CategorieService,
      factory: CategorieService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

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

/***/ 21760:
/*!*******************************************************!*\
  !*** ./src/app/admin-page/stocks/stocks.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StocksComponent: () => (/* binding */ StocksComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 56755);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 40211);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 2752);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! xlsx */ 13857);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ 6530);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MODELS/customNumberPipe */ 96115);
/* harmony import */ var _produits_suspended_boutique_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../produits/suspended-boutique-dialog.component */ 85837);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _SERVICES_categorie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SERVICES/categorie.service */ 49293);
/* harmony import */ var _SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SERVICES/produit.service */ 66375);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SERVICES/users.service */ 88026);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 42700);
























const _c0 = ["searchInput"];
const _c1 = () => [5, 10, 25, 100];
function StocksComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37)(1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StocksComponent_div_13_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.downloadExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "T\u00E9l\u00E9charger en Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StocksComponent_div_13_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.downloadPDF());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "T\u00E9l\u00E9charger en PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StocksComponent_div_13_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.downloadCSV());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "T\u00E9l\u00E9charger en CSV");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function StocksComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StocksComponent_span_17_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.removeFilter(ctx_r2.selectedFilters[0]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "\u2716");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedFilters[0].label, " ");
  }
}
function StocksComponent_i_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 41);
  }
}
function StocksComponent_i_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 42);
  }
}
function StocksComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StocksComponent_div_24_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 44)(2, "div", 45)(3, "h4", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Filtres");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div")(6, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StocksComponent_div_24_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      ctx_r2.resetFilters();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " R\u00E9initialiser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ul", 48)(9, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StocksComponent_div_24_Template_li_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.addFilter({
        type: "nomCategorie",
        label: "Cat\u00E9gorie"
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Cat\u00E9gorie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StocksComponent_div_24_Template_li_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.addFilter({
        type: "nomUnite",
        label: "Unit\u00E9"
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " Unit\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r2.isFilterSelected("nomCategorie") ? "#f0f0f0" : "transparent");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("disabled", ctx_r2.isFilterSelected("nomCategorie"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r2.isFilterSelected("nomUnite") ? "#f0f0f0" : "transparent");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("disabled", ctx_r2.isFilterSelected("nomUnite"));
  }
}
function StocksComponent_ng_container_28_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.totalAllProducts, " ");
  }
}
function StocksComponent_ng_container_28_ng_container_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const boutique_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.productCounts[boutique_r8.id], " ");
  }
}
function StocksComponent_ng_container_28_ng_container_5_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 59);
  }
}
function StocksComponent_ng_container_28_ng_container_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 60);
  }
}
function StocksComponent_ng_container_28_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StocksComponent_ng_container_28_ng_container_5_Template_p_click_1_listener() {
      const boutique_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](boutique_r8.actif ? ctx_r2.selectBoutique(boutique_r8) : ctx_r2.showSuspendedBoutiqueDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, StocksComponent_ng_container_28_ng_container_5_span_3_Template, 2, 1, "span", 53)(4, StocksComponent_ng_container_28_ng_container_5_i_4_Template, 1, 0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, StocksComponent_ng_container_28_ng_container_5_div_5_Template, 1, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const boutique_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("color", boutique_r8.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("name_boutique_active", boutique_r8.id === (ctx_r2.selectedBoutique == null ? null : ctx_r2.selectedBoutique.id) && boutique_r8.actif)("suspended-boutique", !boutique_r8.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", boutique_r8.nomBoutique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.productCounts[boutique_r8.id] > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !boutique_r8.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", i_r9 !== ctx_r2.boutiques.length - 1);
  }
}
function StocksComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StocksComponent_ng_container_28_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.selectBoutique(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Toutes les boutiques ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, StocksComponent_ng_container_28_span_4_Template, 2, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, StocksComponent_ng_container_28_ng_container_5_Template, 6, 10, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("name_boutique_active", ctx_r2.selectedBoutique === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.totalAllProducts > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.boutiquesSansEntrepots);
  }
}
function StocksComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Aucune boutique trouv\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function StocksComponent_i_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r2.sortDirection === "asc" ? "ri-arrow-up-line" : "ri-arrow-down-line");
  }
}
function StocksComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}
function StocksComponent_tr_55_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 67)(1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StocksComponent_tr_55_div_5_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r2.imagePopup, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function StocksComponent_tr_55_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.getBoutiqueNames(product_r11.boutiques));
  }
}
function StocksComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StocksComponent_tr_55_Template_tr_click_0_listener() {
      const product_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.openStockDetail(product_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "td")(3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, StocksComponent_tr_55_div_5_Template, 3, 1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "td", 62)(7, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "td", 66)(15, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, StocksComponent_tr_55_td_19_Template, 2, 1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r2.highlightMatch(product_r11.codeGenerique || ""), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", product_r11.photo, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.imagePopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r2.highlightMatch(product_r11.nom), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r2.highlightMatch(product_r11.nomCategorie || "sans categorie"), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 11, product_r11.prixVente));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 13, product_r11.prixAchat));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r2.highlightMatch(product_r11.quantite.toString()), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r2.highlightMatch(product_r11.nomUnite || "sans unite"), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](product_r11.seuilAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r2.selectedBoutique);
  }
}
function StocksComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Aucun produit trouv\u00E9e.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function StocksComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 71)(1, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Vous n'avez pas de produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function StocksComponent_mat_paginator_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-paginator", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("page", function StocksComponent_mat_paginator_59_Template_mat_paginator_page_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("length", ctx_r2.tasks.length)("pageSize", ctx_r2.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c1));
  }
}
class StocksComponent {
  // @HostListener('document:click', ['$event'])
  // onClick(event: MouseEvent): void {
  //   const target = event.target as HTMLElement;
  //   if (!target.closest('.container_inputSearch')) {
  //     this.showFilterDropdown = false;
  //   }
  //   // Réinitialiser les filtres si nécessaire
  //   if (this.tasks.length === 0) {
  //     this.selectedFilters = [];
  //     this.sortColumn = null;
  //   }
  // }
  onClick(event) {
    const target = event.target;
    // Fermer le dropdown si on clique en dehors
    if (!target.closest('.container_inputSearch') && !target.closest('.filter-dropdown') && !target.closest('.trier')) {
      this.showFilterDropdown = false;
    }
    // Fermer le dropdown d'export si nécessaire
    if (!target.closest('.export-container')) {
      this.showExportDropdown = false;
    }
  }
  constructor(categorieService, produitService, fb, router, usersService, dialog) {
    this.categorieService = categorieService;
    this.produitService = produitService;
    this.fb = fb;
    this.router = router;
    this.usersService = usersService;
    this.dialog = dialog;
    this.backendUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiBaseUrl;
    this.searchText = '';
    this.tasks = [];
    this.imagePopup = null;
    this.nomEntreprise = '';
    this.adresseEntreprise = '';
    this.logoEntreprise = '';
    this.userName = '';
    this.boutiqueName = '';
    this.addressBoutique = '';
    // Pagination et tableau de données
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource();
    this.pageSize = 5;
    this.currentPage = 0;
    this.selectedBoutique = null;
    this.boutiques = [];
    // Dropdown pour l'export
    this.showExportDropdown = false;
    // Gestion de l'image uploadée
    this.urllink = "assets/img/appareil.jpg";
    this.newPhotoUrl = null;
    this.selectedFile = null;
    this.showDescription = false;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.imgUrl; // URL de base pour les images
    this.showNoProductsMessage = false;
    // Nouveaux états pour le filtrage
    this.showFilterDropdown = false;
    this.selectedFilters = [];
    this.allProducts = []; // Tous les produits chargés
    this.filteredProduct = [];
    this.sortColumn = null;
    this.sortDirection = 'asc';
    this.productCounts = {};
    this.totalAllProducts = 0;
  }
  ngOnInit() {
    this.getUserBoutiqueId();
    this.getUserInfo();
    // this.loadProduits();
  }
  // Permet de mettre en évidence le texte recherché
  highlightMatch(text) {
    if (!this.searchText) return text;
    const regex = new RegExp(`(${this.searchText})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }
  // Retourne la liste filtrée et paginée des produits
  // filteredProducts(): Produit[] {
  //   const sortedProducts = [...this.tasks].sort((a, b) => {
  //     const dateA = new Date(a.createdAt || new Date()).getTime();
  //     const dateB = new Date(b.createdAt || new Date()).getTime();
  //     return dateB - dateA;
  //   });
  //   const filtered = sortedProducts.filter(product =>
  //     (product.nom && product.nom.toLowerCase().includes(this.searchText.toLowerCase())) ||
  //     (product.codeGenerique && product.codeGenerique.toLowerCase().includes(this.searchText.toLowerCase())) ||
  //     (product.codeBare && product.codeBare.toLowerCase().includes(this.searchText.toLowerCase())) 
  //   );
  //   const startIndex = this.currentPage * this.pageSize;
  //   return filtered.slice(startIndex, startIndex + this.pageSize);
  // }
  filteredProducts() {
    // Exclure les produits liés à des entrepôts
    const produitsSansEntrepots = this.tasks.filter(p => {
      const boutique = this.boutiques.find(b => b.id === p.boutiqueId);
      return boutique && boutique.typeBoutique !== 'ENTREPOT';
    });
    const productsToShow = this.filteredProduct.length > 0 ? this.filteredProduct : this.tasks;
    const startIndex = this.currentPage * this.pageSize;
    // return productsToShow.slice(startIndex, startIndex + this.pageSize);
    return produitsSansEntrepots.slice(startIndex, startIndex + this.pageSize);
  }
  // Affichage/Masquage du dropdown d'export
  toggleExportDropdown() {
    this.showExportDropdown = !this.showExportDropdown;
  }
  // Masque le dropdown si l'utilisateur clique en dehors
  onClickOutside(event) {
    const target = event.target;
    if (!target.closest('.export-container')) {
      this.showExportDropdown = false;
    }
  }
  // Permet de convertir une image en base64 pour l'ajouter dans le PDF
  getImageBase64(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        const reader = new FileReader();
        reader.onloadend = function () {
          resolve(reader.result);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.onerror = function () {
        reject(new Error('Erreur lors du chargement de l\'image'));
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    });
  }
  // Téléchargement en Excel
  downloadExcel() {
    const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_10__.utils.json_to_sheet(this.tasks);
    const workbook = xlsx__WEBPACK_IMPORTED_MODULE_10__.utils.book_new();
    xlsx__WEBPACK_IMPORTED_MODULE_10__.utils.book_append_sheet(workbook, worksheet, 'Produits');
    xlsx__WEBPACK_IMPORTED_MODULE_10__.writeFile(workbook, 'Produits.xlsx');
  }
  // Téléchargement en PDF
  downloadPDF() {
    if (!this.tasks || this.tasks.length === 0) {
      console.error("Aucun produit à afficher dans le PDF !");
      return;
    }
    const doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const logoUrl = this.logoEntreprise ? `${this.backendUrl}/logoUpload/${this.logoEntreprise}` : `${this.backendUrl}/logoUpload/651.jpg`;
    const entreprise = this.nomEntreprise || "Nom non disponible";
    this.getImageBase64(logoUrl).then(logoBase64 => {
      doc.addImage(logoBase64, 'PNG', 14, 5, 30, 30);
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.text(`Nom de l'entreprise: ${entreprise}`, 60, 20);
      doc.text('Liste des produits en Stock', 60, 30);
      doc.setLineWidth(0.5);
      doc.line(14, 35, 195, 35);
      const columns = ['Code', 'Nom produit', 'Description', 'Catégorie', 'Quantité'];
      const startIndex = this.currentPage * this.pageSize;
      const pageTasks = this.tasks.slice(startIndex, startIndex + this.pageSize);
      if (!Array.isArray(pageTasks) || pageTasks.length === 0) {
        console.error("Aucun produit trouvé sur cette page !");
        return;
      }
      const rows = pageTasks.map(task => [task.codeGenerique || '', task.nom || '', task.description || '', task.nomCategorie ? `Catégorie ${task.nomCategorie}` : 'Catégorie inconnue',
      //task.prixVente ?? 0,
      task.quantite ?? 0]);
      jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default()(doc, {
        head: [columns],
        body: rows,
        startY: 40,
        theme: 'grid',
        headStyles: {
          fillColor: [100, 100, 255],
          textColor: [255, 255, 255],
          fontSize: 12
        },
        bodyStyles: {
          fontSize: 10
        }
      });
      const finalY = doc.lastAutoTable?.finalY || 60;
      doc.setLineWidth(0.5);
      doc.line(14, finalY + 5, 195, finalY + 5);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.text(`Nom de Boutique: ${this.boutiqueName}`, 14, finalY + 10);
      doc.text(`Adress: ${this.addressBoutique}`, 14, finalY + 15);
      doc.save('Produits.pdf');
    }).catch(error => {
      console.error("Erreur lors du chargement du logo :", error);
    });
  }
  // Téléchargement en CSV
  downloadCSV() {
    const headers = ['Code', 'Photo', 'Nom produit', 'Catégorie', 'Description', 'Prix Vente', 'Prix Achat', 'Quantité', 'Unité', 'Seuil Alerte', 'Date & heure'];
    const rows = this.tasks.map(task => [task.codeGenerique || '', task.photo, task.nom, task.nomCategorie || '', task.description, task.prixVente, task.prixAchat, task.quantite, task.nomUnite || '', task.seuilAlert, task.createdAt]);
    const csvContent = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
    const blob = new Blob([csvContent], {
      type: 'text/csv;charset=utf-8;'
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Produits.csv';
    link.click();
  }
  // Gestion de la pagination
  onPageChange(event) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }
  // Gestion de l'upload d'image pour ajouter une photo
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        this.newPhotoUrl = e.target?.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
  // Récupère l'ID de la boutique depuis le localStorage
  getUserBoutiqueId() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.boutiques && user.boutiques.length > 0) {
      return user.boutiques[0]?.id || null;
    } else {
      console.error('Aucune boutique trouvée pour cet utilisateur');
      return null;
    }
  }
  getEntrepriseId() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.entrepriseId || null;
  }
  // Récupère les informations utilisateur et stocke les données dans le localStorage
  getUserInfo() {
    this.usersService.getUserInfo().subscribe({
      next: user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userName = user.nomComplet;
        this.nomEntreprise = user.nomEntreprise;
        this.boutiques = user.boutiques; // Récupération de toutes les boutiques
        this.selectedBoutique = null;
        // Sélectionner la première boutique par défaut
        // if (this.boutiques.length > 0) {
        //   this.selectedBoutique = this.boutiques[0];
        //   this.boutiqueName = this.selectedBoutique.nomBoutique;
        //   this.addressBoutique = this.selectedBoutique.adresse;
        //   this.loadProduits(this.selectedBoutique.id);
        // }
        this.showNoProductsMessage = false;
        this.loadAllProduits();
      },
      error: err => {
        console.error("Erreur lors de la récupération des informations utilisateur :", err);
        this.showNoProductsMessage = true;
      }
    });
  }
  // Charge les produits depuis le backend et effectue le mapping pour l'affichage
  loadProduits(boutiqueId) {
    // const boutiqueId = this.usersService.getUserBoutiqueId();
    this.showNoProductsMessage = false;
    if (!boutiqueId) {
      console.error("L'ID de la boutique est manquant");
      return;
    }
    this.produitService.getProduitsEntreprise(boutiqueId).subscribe({
      next: produits => {
        console.log("Produits récupérés:", produits);
        this.tasks = produits.filter(prod => prod.enStock) // Garder seulement les produits en stock
        .map(prod => {
          // const fullImageUrl = prod.photo && prod.photo !== "null" && prod.photo !== "undefined" ? `http://localhost:8080${prod.photo}` : "";
          // Vérifier si la photo est valide
          const hasPhoto = prod.photo && prod.photo !== 'null' && prod.photo !== 'undefined';
          const fullImageUrl = hasPhoto ? `${this.apiUrl}${prod.photo}` : '';
          return {
            id: prod.id,
            codeGenerique: prod.codeGenerique || "",
            codeBare: prod.codeBare || "Non numéro code barre",
            nom: prod.nom || "Nom inconnu",
            description: prod.description || "Sans description",
            prixVente: prod.prixVente || 0,
            prixAchat: prod.prixAchat || 0,
            quantite: prod.quantite || 0,
            seuilAlert: prod.seuilAlert || 0,
            enStock: prod.enStock || false,
            // photo: fullImageUrl,
            photo: fullImageUrl ? fullImageUrl : this.generateLetterAvatar(prod.nom),
            nomCategorie: prod.nomCategorie || "Aucune categorie",
            nomUnite: prod.nomUnite || "Sans unité",
            createdAt: prod.createdAt || new Date().toISOString(),
            // Assurer une valeur par défaut
            categorieId: prod.categorieId,
            uniteId: prod.uniteId,
            boutiqueId: prod.boutiqueId,
            boutiques: prod.boutiques || []
          };
        }).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        this.productCounts[boutiqueId] = produits.filter(prod => prod.enStock).length;
        this.allProducts = [...this.tasks];
        this.dataSource.data = this.tasks;
        this.dataSource.paginator = this.paginator;
        this.showNoProductsMessage = this.tasks.length === 0;
      },
      error: err => {
        console.error("Erreur lors de la récupération des produits", err);
        this.showNoProductsMessage = this.tasks.length === 0;
      }
    });
  }
  // Ajoute cette méthode pour la sélection des boutiques
  // selectBoutique(boutique: any): void {
  //   this.selectedBoutique = boutique;
  //   this.boutiqueName = boutique.nomBoutique;
  //   this.addressBoutique = boutique.adresse;
  //   this.loadProduits(boutique.id);
  //   this.currentPage = 0; // Réinitialiser la pagination
  // }
  selectBoutique(boutique) {
    this.showNoProductsMessage = false;
    if (boutique && !boutique.actif) {
      this.showSuspendedBoutiqueDialog();
      return; // Ne pas changer la sélection si la boutique est désactivée
    }
    this.selectedBoutique = boutique;
    if (boutique === null) {
      // Charger tous les produits en stock de l'entreprise
      this.loadAllProduits();
    } else {
      // Charger les produits pour la boutique sélectionnée
      this.boutiqueName = boutique.nomBoutique;
      this.addressBoutique = boutique.adresse;
      this.loadProduits(boutique.id);
    }
    this.currentPage = 0;
  }
  toggleFilterDropdown() {
    this.showFilterDropdown = !this.showFilterDropdown;
    // Fermer aussi le dropdown d'export si nécessaire
    this.showExportDropdown = false;
  }
  loadAllProduits() {
    this.showNoProductsMessage = false;
    const entrepriseId = this.getEntrepriseId();
    if (!entrepriseId) {
      console.error('ID entreprise manquant');
      return;
    }
    this.produitService.getProduitsByEntrepriseId(entrepriseId).subscribe({
      next: produits => {
        this.tasks = produits.filter(prod => prod.enStock).map(prod => {
          const hasPhoto = prod.photo && prod.photo !== 'null' && prod.photo !== 'undefined';
          const fullImageUrl = hasPhoto ? `${this.apiUrl}${prod.photo}` : '';
          return {
            ...prod,
            photo: fullImageUrl ? fullImageUrl : this.generateLetterAvatar(prod.nom),
            boutiques: prod.boutiques || []
          };
        }).sort((a, b) => {
          const dateA = new Date(a.createdAt ?? new Date().toISOString()).getTime();
          const dateB = new Date(b.createdAt ?? new Date().toISOString()).getTime();
          return dateB - dateA;
        });
        const counts = {};
        produits.forEach(prod => {
          if (prod.enStock && prod.boutiques) {
            prod.boutiques.forEach(b => {
              counts[b.id] = (counts[b.id] || 0) + 1;
            });
          }
        });
        this.productCounts = counts;
        this.totalAllProducts = produits.filter(prod => prod.enStock).length;
        this.dataSource.data = this.tasks;
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
        this.allProducts = [...this.tasks];
        this.showNoProductsMessage = this.tasks.length === 0;
      },
      error: err => {
        console.error("Erreur lors de la récupération des produits", err);
        this.showNoProductsMessage = this.tasks.length === 0;
      }
    });
  }
  getBoutiqueNames(boutiques) {
    if (!boutiques || boutiques.length === 0) return 'Aucune boutique';
    const maxDisplay = 2; // Nombre de boutiques à afficher avant troncature
    if (boutiques.length > maxDisplay) {
      const displayed = boutiques.slice(0, maxDisplay).map(b => b.nom);
      return `${displayed.join(', ')}, ...`; // Ajoute les points de suspension
    }
    return boutiques.map(b => b.nom).join(', ');
  }
  generateLetterAvatar(nom) {
    const letter = nom ? nom.charAt(0).toUpperCase() : '?';
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <rect width="100" height="100" fill="#0671e4ac"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#fff" font-size="50">${letter}</text>
      </svg>
    `;
    // Encodage du SVG en base64 pour pouvoir l'utiliser comme data URL
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  }
  openStockDetail(productId) {
    const queryParams = this.selectedBoutique ? {
      boutiqueId: this.selectedBoutique.id
    } : {};
    this.router.navigate(['/detail-stock', productId], {
      queryParams
    });
  }
  // Ajoutez cette méthode dans la classe ProduitsComponent
  // getBoutiqueTextColor(index: number, isActive: boolean): string {
  //   // Génère des couleurs différentes selon l'index
  //   const hue = (index * 137.508) % 360; // 137.508 pour une bonne répartition des couleurs
  //   return isActive ? '#ffffff' : `hsl(${hue}, 70%, 40%)`; // Texte blanc si actif, couleur vive sinon
  // }
  //  ? getBoutiqueTextColor(i, boutique.id === selectedBoutique?.id) : '#999'
  showSuspendedBoutiqueDialog() {
    this.dialog.open(_produits_suspended_boutique_dialog_component__WEBPACK_IMPORTED_MODULE_3__.SuspendedBoutiqueDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {
        onClose: () => {
          // Vous pouvez ici remettre à null ou conserver la boutique précédemment sélectionnée
          this.selectedBoutique = null;
        }
      }
    });
  }
  // Méthode pour appliquer les filtres et le tri
  applyFilters() {
    let filtered = [...this.allProducts];
    const searchLower = this.searchText.toLowerCase();
    if (this.searchText) {
      if (this.selectedFilters.length > 0) {
        // Recherche SEULEMENT dans le champ du filtre sélectionné
        filtered = filtered.filter(product => {
          return this.selectedFilters.every(filter => {
            const key = filter.type;
            const value = product[key]?.toString().toLowerCase() || '';
            return value.includes(searchLower);
          });
        });
      } else {
        // Recherche globale si aucun filtre sélectionné
        filtered = filtered.filter(product => Object.values(product).some(val => val?.toString().toLowerCase().includes(searchLower)));
      }
    }
    // Tri des résultats
    if (this.sortColumn) {
      filtered.sort((a, b) => {
        const key = this.sortColumn;
        const valA = a[key]?.toString().toLowerCase() || '';
        const valB = b[key]?.toString().toLowerCase() || '';
        if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }
    this.tasks = filtered; // Mettre à jour les tâches affichées
    this.filteredProduct = filtered;
    this.currentPage = 0;
  }
  resetFilters() {
    this.selectedFilters = [];
    this.searchText = '';
    this.tasks = [...this.allProducts];
    this.filteredProduct = [];
    this.currentPage = 0;
    this.showFilterDropdown = false;
  }
  setSorting(column) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.applyFilters();
  }
  // Modifiez votre méthode addFilter
  addFilter(filter) {
    // Si le filtre est déjà sélectionné, on le désactive
    if (this.isFilterSelected(filter.type)) {
      this.selectedFilters = [];
    } else {
      // Sinon, on remplace le filtre existant
      this.selectedFilters = [filter];
    }
    this.showFilterDropdown = false;
    // this.searchText = '';
    this.applyFilters();
    setTimeout(() => {
      if (this.searchInput?.nativeElement) {
        this.searchInput.nativeElement.focus();
      }
    }, 0);
  }
  isFilterSelected(filterType) {
    return this.selectedFilters.some(f => f.type === filterType);
  }
  focusSearchInput() {
    if (this.searchInput?.nativeElement) {
      this.searchInput.nativeElement.focus();
    }
  }
  removeFilter(filter) {
    this.selectedFilters = this.selectedFilters.filter(f => f !== filter);
    this.applyFilters();
  }
  getSearchPlaceholder() {
    if (this.selectedFilters.length > 0) {
      return `Par ${this.selectedFilters.map(f => f.label).join(', ')}...`;
    }
    return "Recherche...";
  }
  get boutiquesSansEntrepots() {
    return this.boutiques?.filter(b => b.typeBoutique !== 'ENTREPOT') || [];
  }
  static {
    this.ɵfac = function StocksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StocksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_SERVICES_categorie_service__WEBPACK_IMPORTED_MODULE_5__.CategorieService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_6__.ProduitService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_7__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.j));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: StocksComponent,
      selectors: [["app-stocks"]],
      viewQuery: function StocksComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
        }
      },
      hostBindings: function StocksComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StocksComponent_click_HostBindingHandler($event) {
            return ctx.onClickOutside($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveDocument"]);
        }
      },
      decls: 60,
      vars: 15,
      consts: [["searchInput", ""], ["noBoutiques", ""], [1, "containerTable"], [1, "tasks-header"], [1, "title"], [1, "actions"], ["routerLink", "/stock_ajustement", 1, "add-task"], [1, "contentIcon"], [1, "ri-refresh-line"], [1, "bare"], [1, "export-container"], [1, "iconDrop"], [1, "ri-printer-cloud-line", 3, "click"], ["class", "export-dropdown", 4, "ngIf"], [1, "container_inputSearch", 2, "display", "flex", "align-items", "center", "position", "relative"], [1, "inputSearch", 2, "flex", "1", "position", "relative"], [1, "tags-container", 2, "display", "flex", "flex-wrap", "wrap", "align-items", "center", "padding-left", "35px", "min-height", "40px", "border", "1.5px solid #000", "border-top-left-radius", "5px", "min-width", "250px", "border-bottom-left-radius", "5px", "border-top-right-radius", "0px", "border-bottom-right-radius", "0px", "background", "white", "cursor", "text", 3, "click"], ["class", "tag", "style", "display: flex; align-items: center; background: #e0e0e0; padding: 2px 8px; border-radius: 20px; margin: 2px 4px 2px 0; z-index: 12;", 4, "ngIf"], ["type", "text", 2, "border", "none", "outline", "none", "flex", "1", "padding", "5px 0", "min-width", "120px", 3, "ngModelChange", "click", "ngModel", "placeholder"], [1, "ri-search-2-line", 2, "position", "absolute", "left", "10px", "top", "50%", "transform", "translateY(-50%)", "z-index", "1"], ["title", "Trier et filtrer", 1, "trier", 2, "cursor", "pointer", 3, "click"], ["style", "font-size: 18px;", "class", "ri-arrow-down-s-fill", 4, "ngIf"], ["style", "font-size: 18px;", "class", "ri-close-line", 4, "ngIf"], ["class", "filter-dropdown", "style", "position: absolute; top: 100%; right: 0; background: white; \n          border: 1px solid #ccc; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); \n          z-index: 100; width: 100%; margin-top: 5px;", 3, "click", 4, "ngIf"], [1, "container_list_boutique"], [1, "content_list_boutique"], [1, "name_boutique"], [4, "ngIf", "ngIfElse"], [1, "titleTableProduit"], [3, "click"], [3, "class", 4, "ngIf"], [2, "background-color", "#0671e44a"], [4, "ngIf"], [3, "click", 4, "ngFor", "ngForOf"], ["style", "text-align: center; margin-top: 20px;", 4, "ngIf"], [1, "pagination"], [3, "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], [1, "export-dropdown"], [1, "export-option", 3, "click"], [1, "tag", 2, "display", "flex", "align-items", "center", "background", "#e0e0e0", "padding", "2px 8px", "border-radius", "20px", "margin", "2px 4px 2px 0", "z-index", "12"], [1, "remove-chip", 3, "click"], [1, "ri-arrow-down-s-fill", 2, "font-size", "18px"], [1, "ri-close-line", 2, "font-size", "18px"], [1, "filter-dropdown", 2, "position", "absolute", "top", "100%", "right", "0", "background", "white", "border", "1px solid #ccc", "border-radius", "5px", "box-shadow", "0 2px 10px rgba(0,0,0,0.1)", "z-index", "100", "width", "100%", "margin-top", "5px", 3, "click"], [1, "filter-section", 2, "padding", "10px"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "margin", "0", "font-size", "16px", "color", "#333"], [2, "background", "none", "border", "none", "color", "#0671e4", "cursor", "pointer", "font-size", "13px", 3, "click"], [2, "list-style", "none", "padding", "0", "margin", "10px 0 0 0"], [2, "padding", "8px 12px", "cursor", "pointer", "border-radius", "4px", "margin-bottom", "5px", "transition", "background 0.3s", 3, "click"], [2, "padding", "8px 12px", "cursor", "pointer", "border-radius", "4px", "transition", "background 0.3s", 3, "click"], [1, "all_boutique", 3, "click"], [1, "all_boutique", 2, "display", "flex", "align-items", "center"], ["class", "facture-count", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "facture-count"], [2, "display", "flex", "align-items", "center", 3, "click"], ["class", "ri-error-warning-line warning-icon", 4, "ngIf"], ["class", "barre", 4, "ngIf"], [1, "ri-error-warning-line", "warning-icon"], [1, "barre"], [1, "no-boutiques-message"], [3, "innerHTML"], [1, "imgProduit"], [3, "src"], ["class", "modal", 4, "ngIf"], [2, "background-color", "#0671e410", 3, "innerHTML"], [1, "modal"], [1, "modal-content", 3, "click"], ["alt", "Produit", 3, "src"], ["colspan", "10", 2, "text-align", "center"], [2, "text-align", "center", "margin-top", "20px"], [2, "color", "red"], [3, "page", "length", "pageSize", "pageSizeOptions"]],
      template: function StocksComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Mes Stocks");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 5)(5, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Cr\u00E9er un ajustement de stock");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "i", 8)(9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 10)(11, "div", 11)(12, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StocksComponent_Template_i_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.toggleExportDropdown());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, StocksComponent_div_13_Template, 7, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 14)(15, "div", 15)(16, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StocksComponent_Template_div_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.focusSearchInput());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, StocksComponent_span_17_Template, 4, 1, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "input", 18, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function StocksComponent_Template_input_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.searchText, $event) || (ctx.searchText = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function StocksComponent_Template_input_ngModelChange_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.applyFilters());
          })("click", function StocksComponent_Template_input_click_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StocksComponent_Template_div_click_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            ctx.toggleFilterDropdown();
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, StocksComponent_i_22_Template, 1, 0, "i", 21)(23, StocksComponent_i_23_Template, 1, 0, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, StocksComponent_div_24_Template, 13, 8, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 24)(26, "div", 25)(27, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, StocksComponent_ng_container_28_Template, 6, 4, "ng-container", 27)(29, StocksComponent_ng_template_29_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "table")(32, "thead")(33, "tr", 28)(34, "th", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StocksComponent_Template_th_click_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.setSorting("codeGenerique"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, " Code ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, StocksComponent_i_36_Template, 1, 3, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Photo");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Nom produit");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Cat\u00E9gorie");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Prix Vente");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "Co\u00FBt du produit");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "th", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "En stock");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Unit\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "Seuil Alerte");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, StocksComponent_ng_container_53_Template, 3, 0, "ng-container", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, StocksComponent_tr_55_Template, 20, 15, "tr", 33)(56, StocksComponent_tr_56_Template, 3, 0, "tr", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, StocksComponent_div_57_Template, 3, 0, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](59, StocksComponent_mat_paginator_59_Template, 1, 4, "mat-paginator", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const noBoutiques_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showExportDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selectedFilters.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.searchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", ctx.getSearchPlaceholder());
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.showFilterDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showFilterDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showFilterDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((ctx.boutiques == null ? null : ctx.boutiques.length) || 0) > 0)("ngIfElse", noBoutiques_r14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.sortColumn === "codeGenerique");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.selectedBoutique);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.filteredProducts());
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.tasks.length > 0 && ctx.filteredProducts().length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showNoProductsMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.tasks.length > 5);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.M, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.M, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
      //AsyncPipe,
      _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_2__.CustomNumberPipe],
      styles: ["@charset \"UTF-8\";\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Poppins\", sans-serif;\n  color: #222222;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n  padding: 8px;\n  font-size: 13px !important;\n  font-family: \"Poppins\", sans-serif;\n  color: #222222;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.titleTableProduit[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: \"Poppins\", sans-serif;\n  color: #222222;\n}\n\n.containerTable[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.tasks-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.add-task[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  background-color: #0672E4;\n  color: #ffffff;\n  border-radius: 5px;\n  border: none;\n}\n\n.contentIcon[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  display: flex;\n  align-items: center;\n}\n\n.contentIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.contentIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0672E4;\n  transition: all 0.5s ease;\n}\n\n.bare[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 30px;\n  background-color: #eee;\n}\n\n.inputSearch[_ngcontent-%COMP%] {\n  position: relative;\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n\n.inputSearch[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 15px;\n  font-size: 17px;\n}\n\n.totals[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-left: 20px;\n  font-size: 14px;\n  color: #333;\n  margin-bottom: 5px;\n}\n\n.red-text[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.export-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.export-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 180px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.389);\n  z-index: 1;\n  top: 100%;\n  left: 0;\n  border-radius: 5px;\n}\n\n.export-dropdown[_ngcontent-%COMP%]   .export-option[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  cursor: pointer;\n}\n\n.export-dropdown[_ngcontent-%COMP%]   .export-option[_ngcontent-%COMP%]:hover {\n  background-color: #f1f1f1;\n}\n\n.iconDrop[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.iconMontreArrow[_ngcontent-%COMP%] {\n  margin-left: -30px;\n}\n\n.iconMontreArrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n\n\n.imgProduit[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n\n.imgProduit[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n  object-fit: cover;\n  border-radius: 50%;\n  transition: transform 0.2s;\n}\n\n.imgProduit[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1); \n\n}\n\n\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 10px;\n  border-radius: 10px;\n  max-width: 80%;\n  max-height: 80%;\n  display: flex;\n  justify-content: center;\n}\n\n.modal-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 80vh;\n  border-radius: 10px;\n}\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n\n\n.modal-content[_ngcontent-%COMP%] {\n  background: #fff;\n  width: 100%;\n  max-width: 600px;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n\n\n\n.modal-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: #f1f1f1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n\n.modal-close[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 24px;\n}\n\n\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  justify-content: center;\n}\n\n\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.inpuemail[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 250px;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0px;\n  transition: all 0.3s;\n  font-size: 18px;\n  background: none;\n  color: #695c5c;\n}\n\n.add_category[_ngcontent-%COMP%] {\n  border: none;\n  margin-top: 5px;\n  cursor: pointer;\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: rgb(107, 102, 102);\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: -6px;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 14px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 15px;\n  transition: all 0.2s ease-in-out;\n}\n\n.double_input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.input_focus2[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 250px;\n  height: 60px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin-top: 10px;\n  transition: all 0.3s;\n  font-size: 18px;\n  padding-left: 10px;\n  background-color: rgba(220, 220, 220, 0.2980392157);\n  color: #777474;\n  resize: none;\n  border-radius: 5px;\n  padding-top: 10px;\n  border-bottom: 1px solid rgb(53, 50, 50);\n}\n\n.input_focus2[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.champ_input2[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: 15px;\n  pointer-events: none;\n  color: rgb(66, 56, 56);\n}\n\n.input_focus2[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus2[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: -10px;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 14px;\n  padding: 0;\n}\n\n.input_focus2[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus2[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 15px;\n  transition: all 0.2s ease-in-out;\n}\n\n.champ_input_margin[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n\n.input_file[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 300px;\n  margin-top: 10px;\n}\n\n.custom-file-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  overflow: hidden;\n  width: 100%;\n  cursor: pointer;\n}\n\n.custom-file-button[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: white;\n  padding: 8px 12px;\n  font-size: 14px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n}\n\n.custom-file-text[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #555;\n}\n\n.btn-save[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  margin-right: 10px;\n  background-color: #0672E4;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  margin-right: 10px;\n  background-color: rgba(255, 0, 0, 0.7019607843);\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n}\n\n.btn-save[_ngcontent-%COMP%]:hover {\n  background-color: #0465cd;\n  transition: all 0.5s;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #ff0000;\n  transition: all 0.5s;\n}\n\n.iconArrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 20px;\n}\n\n.iconArrow[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  justify-content: right;\n  margin-top: 20px;\n}\n\nmat-paginator[_ngcontent-%COMP%] {\n  background-color: rgba(220, 220, 220, 0.3176470588);\n  border-radius: 5px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: red;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n\n\n.expiring-soon[_ngcontent-%COMP%] {\n  color: #f1940f;\n}\n\n\n\n.expiring-today[_ngcontent-%COMP%] {\n  color: red;\n  animation: _ngcontent-%COMP%_blink 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_blink {\n  50% {\n    opacity: 0;\n  }\n}\n\n\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-5px);\n  }\n  50% {\n    transform: translateX(5px);\n  }\n  75% {\n    transform: translateX(-5px);\n  }\n}\n.shake[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_shake 0.2s ease-in-out infinite;\n}\n\n\n\n.expired[_ngcontent-%COMP%] {\n  color: red;\n  font-style: italic;\n  opacity: 0.7;\n}\n\n.description-cell[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n\n.description-hover[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #333;\n  color: white;\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 12px;\n  width: 200px;\n  z-index: 10;\n}\n\n.description-cell[_ngcontent-%COMP%]:hover   .description-hover[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.name_boutique[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  margin: 30px 0 10px;\n}\n\n.name_boutique[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n}\n\n.name_boutique_active[_ngcontent-%COMP%] {\n  background-color: #E9D421;\n  border-radius: 5px;\n  color: #000000;\n}\n\n.barre[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.2470588235);\n  margin: 8px 0;\n}\n\n.container_list_boutique[_ngcontent-%COMP%] {\n  overflow: auto;\n  scrollbar-color: #888 #f1f1f1;\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 2px;\n  height: 3px;\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1; \n\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: blue;\n  border-radius: 4px;\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: red;\n}\n\n.name_boutique[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 8px 16px;\n  margin: 4px 0;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  border-radius: 4px;\n}\n.name_boutique[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n  transform: translateY(-1px);\n}\n.name_boutique[_ngcontent-%COMP%]   p.name_boutique_active[_ngcontent-%COMP%] {\n  background-color: #E9D421;\n  color: #000 !important;\n}\n\n.warning-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  color: #ff0000;\n  font-size: 14px;\n}\n\n.inputSearch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-left: 10px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.trier[_ngcontent-%COMP%] {\n  border-top: 1.5px solid #000;\n  border-right: 1.5px solid #000;\n  border-bottom: 1.5px solid #000;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n.tags-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 5px 5px 5px 35px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background: white;\n  min-height: 40px;\n}\n\n.tag[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #e0e0e0;\n  padding: 2px 8px;\n  border-radius: 20px;\n  margin: 2px 4px 2px 0;\n  font-size: 12px;\n}\n\n.tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  cursor: pointer;\n}\n\n.inputSearch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  flex: 1;\n  padding: 8px 0;\n}\n\n.filter-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 100;\n  width: 250px;\n  margin-top: 5px;\n}\n\n.filter-section[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.filter-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  font-size: 16px;\n  color: #333;\n}\n\n.filter-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.filter-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  cursor: pointer;\n  border-radius: 4px;\n  margin-bottom: 5px;\n}\n\n.filter-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n\nth[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.remove-chip[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  cursor: pointer;\n}\n.remove-chip[_ngcontent-%COMP%]:hover {\n  color: #ff4444;\n}\n\n.filter-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 100;\n  width: 300px;\n  padding: 15px;\n}\n.filter-dropdown[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  display: flex;\n  flex-direction: column;\n}\n.filter-dropdown[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  padding: 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  background: white;\n  cursor: pointer;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed !important;\n  pointer-events: none;\n}\n\n.facture-count[_ngcontent-%COMP%] {\n  background-color: #ddd;\n  color: #000;\n  border-radius: 50%;\n  font-size: 10px;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px;\n  margin-left: 10px;\n}\n\n\n\n.draggable-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b2Nrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7QUFFSjs7QUFFQTtFQUNFLDBEQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBRUEsWUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRkY7O0FBT0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBSUEsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVZKOztBQVlFO0VB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Q0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBN0JGOztBQWdDQTtFQUNFLGFBQUE7QUE3QkY7O0FBZ0NBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQTdCRjs7QUFnQ0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBN0JGOztBQWdDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUE3QkY7O0FBZ0NBO0VBQ0UsbUJBQUE7QUE3QkY7O0FBZ0NBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUE3QkY7O0FBZ0NBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBN0JGO0FBOEJFO0VBQ0ksY0FBQTtBQTVCTjs7QUFnQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUE3QkY7QUErQkU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBN0JKO0FBZ0NFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBOUJKOztBQWtDQTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FBL0JGOztBQWtDQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUEvQkY7O0FBa0NBLDJDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUEvQkYiLCJmaWxlIjoic3RvY2tzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzIyMjIyMjtcblxufVxuXG50aCwgdGQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDk0O1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweCFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4udGl0bGVUYWJsZVByb2R1aXQgdGgge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi5jb250YWluZXJUYWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi50YXNrcy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFjdGlvbnMgaXtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5hZGQtdGFzayB7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY29udGVudEljb24ge1xuICBtYXJnaW46IDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4uY29udGVudEljb24gaXtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRlbnRJY29uIGk6aG92ZXIge1xuICBjb2xvcjogIzA2NzJFNDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cblxuLmJhcmUge1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbi5pbnB1dFNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5wdXRTZWFyY2ggaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5cbiAgXG4udG90YWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4gIFxuICAudG90YWxzIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIC5yZWQtdGV4dCB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gIFxuXG4gIFxuXG4gIFxuICAvLyBkcm9wIGRvbXcgXG4gIFxuICAuZXhwb3J0LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgLmV4cG9ydC1kcm9wZG93biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgbWluLXdpZHRoOiAxODBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zODkpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIFxuICAuZXhwb3J0LWRyb3Bkb3duIC5leHBvcnQtb3B0aW9uIHtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuZXhwb3J0LWRyb3Bkb3duIC5leHBvcnQtb3B0aW9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICB9XG4gIFxuICAuaWNvbkRyb3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmljb25Nb250cmVBcnJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xuICB9XG4gIFxuICAuaWNvbk1vbnRyZUFycm93IGl7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIFxuIC8qIFN0eWxlIGRlIGwnaW1hZ2UgY2lyY3VsYWlyZSAqL1xuLmltZ1Byb2R1aXQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltZ1Byb2R1aXQgaW1nIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuXG4uaW1nUHJvZHVpdDpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIEVmZmV0IHpvb20gYXUgc3Vydm9sICovXG59XG4gIFxuICAvKiAtLS0gU3R5bGVzIHBvdXIgbGUgbW9kYWwgLS0tICovXG4gIC5tb2RhbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gIH1cbiAgXG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgbWF4LWhlaWdodDogODAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5tb2RhbC1jb250ZW50IGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICBcbiAgXG4gIFxuICBcbiAgLyogT3ZlcmxheSBkdSBtb2RhbCAqL1xuICAubW9kYWwtb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gIH1cbiAgXG4gIC8qIENvbnRlbnUgZHUgbW9kYWwgKi9cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLyogRW4tdMOqdGUgZHUgbW9kYWwgKi9cbiAgLm1vZGFsLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5tb2RhbC1oZWFkZXIgaDIge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC5tb2RhbC1jbG9zZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICBcbiAgLyogQ29ycHMgZHUgbW9kYWwgKi9cbiAgLm1vZGFsLWJvZHkge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgXG4gIC8qIFBpZWQgZGUgcGFnZSBkdSBtb2RhbCAqL1xuICAubW9kYWwtZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBcbiAgfVxuICBcbiAgLyogZm9ybXVsYWlyZSAqL1xuICBcbiAgLmNoYW1wX2lucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5pbnB1ZW1haWwge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDUzLCA1MCwgNTApO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICM2OTVjNWM7XG4gIH1cbiAgXG4gIC5hZGRfY2F0ZWdvcnkge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQgLmxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb2xvcjogcmdiKDEwNywgMTAyLCAxMDIpO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4gIC5pbnB1dF9mb2N1czpmb2N1cyArIC5sYWJlbCB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgdG9wOiAtNnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmRvdWJsZV9pbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLy8gLmRvdWJsZV9pbnB1dDIge1xuICAvLyAgIGRpc3BsYXk6IGZsZXg7XG4gIC8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gfVxuICBcbiAgLmlucHV0X2ZvY3VzMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGNkYzRjO1xuICAgIGNvbG9yOiAjNzc3NDc0O1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dDIgLmxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMTVweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuICAuaW5wdXRfZm9jdXMyOmZvY3VzICsgLmxhYmVsIHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbiAgICB0b3A6IC0xMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfbWFyZ2luIHtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgfVxuICBcbiAgLy8gaW1hZ2UgXG4gIC5pbnB1dF9maWxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgXG4gIC5jdXN0b20tZmlsZS1sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuY3VzdG9tLWZpbGUtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuY3VzdG9tLWZpbGUtdGV4dCB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBjb2xvcjogIzU1NTtcbiAgfVxuICBcbiAgLmJ0bi1zYXZlIHtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIFxuICAuYnRuLWNhbmNlbCB7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDBiMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIFxuICAuYnRuLXNhdmU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDY1Y2Q7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgfVxuICBcbiAgLmJ0bi1jYW5jZWw6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgfVxuICBcbiAgLmljb25BcnJvdyBpe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDIwcHg7XG4gIH1cbiAgXG4gIC5pY29uQXJyb3cge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICBcbiAgLnBhZ2luYXRpb24ge1xuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBcbiAgbWF0LXBhZ2luYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGNkYzUxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICBcbiAgXG4gIC5lcnJvci1tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbi8qIFByb2R1aXQgZXhwaXJhbnQgYmllbnTDtHQgKDw9IDUgam91cnMpICovXG4uZXhwaXJpbmctc29vbiB7XG4gIGNvbG9yOiAjZjE5NDBmO1xufVxuXG4vKiBQcm9kdWl0IGV4cGlyYW50IGF1am91cmTigJlodWkgOiBjbGlnbm90ZSAqL1xuLmV4cGlyaW5nLXRvZGF5IHtcbiAgY29sb3I6IHJlZDtcbiAgYW5pbWF0aW9uOiBibGluayAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICA1MCUgeyBvcGFjaXR5OiAwOyB9XG59XG5cbi8qIFByb2R1aXQgZXhwaXJhbnQgZGVtYWluIDogc2Vjb3VlICovXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpOyB9XG4gIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTsgfVxufVxuXG4uc2hha2Uge1xuICBhbmltYXRpb246IHNoYWtlIDAuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi8qIFByb2R1aXQgZXhwaXLDqSA6IHRleHRlIGdyaXPDqSAqL1xuLmV4cGlyZWQge1xuICBjb2xvcjogcmVkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmRlc2NyaXB0aW9uLWNlbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRlc2NyaXB0aW9uLWhvdmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMjAwcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uZGVzY3JpcHRpb24tY2VsbDpob3ZlciAuZGVzY3JpcHRpb24taG92ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLy8gYm91dGlxdWUgXG5cbi5uYW1lX2JvdXRpcXVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMzBweCAwIDEwcHg7XG59XG5cbi5uYW1lX2JvdXRpcXVlIHAge1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cblxuLm5hbWVfYm91dGlxdWVfYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RDQyMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmJhcnJlIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwM2Y7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbi5jb250YWluZXJfbGlzdF9ib3V0aXF1ZSB7XG4gIC8vIHNjcm9sbGJhci13aWR0aDogYXV0bztcbiAgb3ZlcmZsb3c6IGF1dG87IFxuICBzY3JvbGxiYXItY29sb3I6ICM4ODggI2YxZjFmMTtcbiAgLy8gc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwOyBcbn1cblxuLmNvbnRhaW5lcl9saXN0X2JvdXRpcXVlOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAycHg7IFxuICBoZWlnaHQ6IDNweDtcbn1cblxuLmNvbnRhaW5lcl9saXN0X2JvdXRpcXVlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7IC8qIGNvdWxldXIgZHUgZm9uZCBkZSBsYSBzY3JvbGxiYXIgKi9cbn1cblxuLmNvbnRhaW5lcl9saXN0X2JvdXRpcXVlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IGJsdWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmNvbnRhaW5lcl9saXN0X2JvdXRpcXVlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJlZDsgXG59XG5cbi5uYW1lX2JvdXRpcXVlIHtcbiAgcCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIG1hcmdpbjogNHB4IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjA1KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICB9XG5cbiAgICAmLm5hbWVfYm91dGlxdWVfYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUQ0MjE7IC8vIENvdWxldXIgZGUgZm9uZCBxdWFuZCBhY3RpZlxuICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDsgLy8gRm9yY2UgbGEgY291bGV1ciBibGFuY2hlIHF1YW5kIGFjdGlmXG4gICAgfVxuICB9XG59XG5cbi53YXJuaW5nLWljb24ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBjb2xvcjogI2ZmMDAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5cblxuLmlucHV0U2VhcmNoIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDsgXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDsgXG59XG5cbi50cmllciB7XG4gIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkICMwMDA7IFxuICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkICMwMDA7IFxuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjMDAwOyBcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDsgXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IFxuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFncy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDM1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG59XG5cbi50YWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW46IDJweCA0cHggMnB4IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRhZyBpIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5wdXRTZWFyY2ggaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZsZXg6IDE7XG4gIC8vIG1pbi13aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuXG4uZmlsdGVyLWRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogMjUwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmZpbHRlci1zZWN0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmZpbHRlci1zZWN0aW9uIGg0IHtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZmlsdGVyLXNlY3Rpb24gdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5maWx0ZXItc2VjdGlvbiBsaSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZmlsdGVyLXNlY3Rpb24gbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xufVxuXG50aCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5yZW1vdmUtY2hpcCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogI2ZmNDQ0NDtcbiAgfVxufVxuXG4uZmlsdGVyLWRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG5cbiAgLmZpbHRlci1vcHRpb24ge1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5maWx0ZXItc2VsZWN0IHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5mYWN0dXJlLWNvdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtaW4td2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi8qIFBvdXIgYWxpZ25lciBjb3JyZWN0ZW1lbnQgbGVzIMOpbMOpbWVudHMgKi9cbi5kcmFnZ2FibGUtaXRlbSBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9zdG9ja3Mvc3RvY2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUVBO0VBQ0UsMERBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFFQSxZQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFPQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFJQSxl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ZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuXG59XG5cbnRoLCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkOTQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4IWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuXG50cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi50aXRsZVRhYmxlUHJvZHVpdCB0aCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLmNvbnRhaW5lclRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRhc2tzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWN0aW9ucyBpe1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmFkZC10YXNrIHtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jb250ZW50SWNvbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5jb250ZW50SWNvbiBpe1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGVudEljb24gaTpob3ZlciB7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuXG4uYmFyZSB7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuLmlucHV0U2VhcmNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnB1dFNlYXJjaCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cblxuICBcbi50b3RhbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbiAgXG4gIC50b3RhbHMge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgLnJlZC10ZXh0IHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5cbiAgXG5cbiAgXG5cbiAgXG4gIC8vIGRyb3AgZG9tdyBcbiAgXG4gIC5leHBvcnQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIFxuICAuZXhwb3J0LWRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM4OSk7XG4gICAgei1pbmRleDogMTtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgXG4gIC5leHBvcnQtZHJvcGRvd24gLmV4cG9ydC1vcHRpb24ge1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5leHBvcnQtZHJvcGRvd24gLmV4cG9ydC1vcHRpb246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIH1cbiAgXG4gIC5pY29uRHJvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAuaWNvbk1vbnRyZUFycm93IHtcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gIH1cbiAgXG4gIC5pY29uTW9udHJlQXJyb3cgaXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgXG4gLyogU3R5bGUgZGUgbCdpbWFnZSBjaXJjdWxhaXJlICovXG4uaW1nUHJvZHVpdCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1nUHJvZHVpdCBpbWcge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG5cbi5pbWdQcm9kdWl0OmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogRWZmZXQgem9vbSBhdSBzdXJ2b2wgKi9cbn1cbiAgXG4gIC8qIC0tLSBTdHlsZXMgcG91ciBsZSBtb2RhbCAtLS0gKi9cbiAgLm1vZGFsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxuICBcbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBtYXgtaGVpZ2h0OiA4MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLm1vZGFsLWNvbnRlbnQgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogODB2aDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIFxuICBcbiAgXG4gIFxuICAvKiBPdmVybGF5IGR1IG1vZGFsICovXG4gIC5tb2RhbC1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxuICBcbiAgLyogQ29udGVudSBkdSBtb2RhbCAqL1xuICAubW9kYWwtY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAvKiBFbi10w4PCqnRlIGR1IG1vZGFsICovXG4gIC5tb2RhbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAubW9kYWwtaGVhZGVyIGgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICAubW9kYWwtY2xvc2Uge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgXG4gIC8qIENvcnBzIGR1IG1vZGFsICovXG4gIC5tb2RhbC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG4gIFxuICAvKiBQaWVkIGRlIHBhZ2UgZHUgbW9kYWwgKi9cbiAgLm1vZGFsLWZvb3RlciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG4gIH1cbiAgXG4gIC8qIGZvcm11bGFpcmUgKi9cbiAgXG4gIC5jaGFtcF9pbnB1dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuaW5wdWVtYWlsIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA0OXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAvL3BhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjNjk1YzVjO1xuICB9XG4gIFxuICAuYWRkX2NhdGVnb3J5IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0IC5sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjJweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6IHJnYigxMDcsIDEwMiwgMTAyKTtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuICAuaW5wdXRfZm9jdXM6Zm9jdXMgKyAubGFiZWwge1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIHRvcDogLTZweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5kb3VibGVfaW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC8vIC5kb3VibGVfaW5wdXQyIHtcbiAgLy8gICBkaXNwbGF5OiBmbGV4O1xuICAvLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vIH1cbiAgXG4gIC5pbnB1dF9mb2N1czIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2RjZGM0YztcbiAgICBjb2xvcjogIzc3NzQ3NDtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQyIC5sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6IHJnYig2NiwgNTYsIDU2KTtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbiAgLmlucHV0X2ZvY3VzMjpmb2N1cyArIC5sYWJlbCB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgdG9wOiAtMTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0X21hcmdpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIH1cbiAgXG4gIC8vIGltYWdlIFxuICAuaW5wdXRfZmlsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIFxuICAuY3VzdG9tLWZpbGUtbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmN1c3RvbS1maWxlLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmN1c3RvbS1maWxlLXRleHQge1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY29sb3I6ICM1NTU7XG4gIH1cbiAgXG4gIC5idG4tc2F2ZSB7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICBcbiAgLmJ0bi1jYW5jZWwge1xuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwYjM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICBcbiAgLmJ0bi1zYXZlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ2NWNkO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gIH1cbiAgXG4gIC5idG4tY2FuY2VsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gIH1cbiAgXG4gIC5pY29uQXJyb3cgaXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAyMHB4O1xuICB9XG4gIFxuICAuaWNvbkFycm93IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgXG4gIC5wYWdpbmF0aW9uIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgXG4gIG1hdC1wYWdpbmF0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2RjZGM1MTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgXG4gIFxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4vKiBQcm9kdWl0IGV4cGlyYW50IGJpZW50w4PCtHQgKDw9IDUgam91cnMpICovXG4uZXhwaXJpbmctc29vbiB7XG4gIGNvbG9yOiAjZjE5NDBmO1xufVxuXG4vKiBQcm9kdWl0IGV4cGlyYW50IGF1am91cmTDosKAwplodWkgOiBjbGlnbm90ZSAqL1xuLmV4cGlyaW5nLXRvZGF5IHtcbiAgY29sb3I6IHJlZDtcbiAgYW5pbWF0aW9uOiBibGluayAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICA1MCUgeyBvcGFjaXR5OiAwOyB9XG59XG5cbi8qIFByb2R1aXQgZXhwaXJhbnQgZGVtYWluIDogc2Vjb3VlICovXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpOyB9XG4gIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTsgfVxufVxuXG4uc2hha2Uge1xuICBhbmltYXRpb246IHNoYWtlIDAuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi8qIFByb2R1aXQgZXhwaXLDg8KpIDogdGV4dGUgZ3Jpc8ODwqkgKi9cbi5leHBpcmVkIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5kZXNjcmlwdGlvbi1jZWxsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kZXNjcmlwdGlvbi1ob3ZlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDIwMHB4O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmRlc2NyaXB0aW9uLWNlbGw6aG92ZXIgLmRlc2NyaXB0aW9uLWhvdmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8vIGJvdXRpcXVlIFxuXG4ubmFtZV9ib3V0aXF1ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDMwcHggMCAxMHB4O1xufVxuXG4ubmFtZV9ib3V0aXF1ZSBwIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG59XG5cbi5uYW1lX2JvdXRpcXVlX2FjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUQ0MjE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5iYXJyZSB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDNmO1xuICBtYXJnaW46IDhweCAwO1xufVxuXG4uY29udGFpbmVyX2xpc3RfYm91dGlxdWUge1xuICAvLyBzY3JvbGxiYXItd2lkdGg6IGF1dG87XG4gIG92ZXJmbG93OiBhdXRvOyBcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjODg4ICNmMWYxZjE7XG4gIC8vIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDsgXG59XG5cbi5jb250YWluZXJfbGlzdF9ib3V0aXF1ZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMnB4OyBcbiAgaGVpZ2h0OiAzcHg7XG59XG5cbi5jb250YWluZXJfbGlzdF9ib3V0aXF1ZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyAvKiBjb3VsZXVyIGR1IGZvbmQgZGUgbGEgc2Nyb2xsYmFyICovXG59XG5cbi5jb250YWluZXJfbGlzdF9ib3V0aXF1ZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiBibHVlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5jb250YWluZXJfbGlzdF9ib3V0aXF1ZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZWQ7IFxufVxuXG4ubmFtZV9ib3V0aXF1ZSB7XG4gIHAge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBtYXJnaW46IDRweCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgfVxuXG4gICAgJi5uYW1lX2JvdXRpcXVlX2FjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlENDIxOyAvLyBDb3VsZXVyIGRlIGZvbmQgcXVhbmQgYWN0aWZcbiAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IC8vIEZvcmNlIGxhIGNvdWxldXIgYmxhbmNoZSBxdWFuZCBhY3RpZlxuICAgIH1cbiAgfVxufVxuXG4ud2FybmluZy1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuXG5cbi5pbnB1dFNlYXJjaCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7IFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7IFxufVxuXG4udHJpZXIge1xuICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCAjMDAwOyBcbiAgYm9yZGVyLXJpZ2h0OiAxLjVweCBzb2xpZCAjMDAwOyBcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgIzAwMDsgXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7IFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyBcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhZ3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAzNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4udGFnIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgcGFkZGluZzogMnB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luOiAycHggNHB4IDJweCAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50YWcgaSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlucHV0U2VhcmNoIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmbGV4OiAxO1xuICAvLyBtaW4td2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiA4cHggMDtcbn1cblxuLmZpbHRlci1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5maWx0ZXItc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5maWx0ZXItc2VjdGlvbiBoNCB7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuLmZpbHRlci1zZWN0aW9uIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZmlsdGVyLXNlY3Rpb24gbGkge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmZpbHRlci1zZWN0aW9uIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbn1cblxudGgge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ucmVtb3ZlLWNoaXAge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICY6aG92ZXIge1xuICAgICAgY29sb3I6ICNmZjQ0NDQ7XG4gIH1cbn1cblxuLmZpbHRlci1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuXG4gIC5maWx0ZXItb3B0aW9uIHtcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuZmlsdGVyLXNlbGVjdCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZmFjdHVyZS1jb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWluLXdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4vKiBQb3VyIGFsaWduZXIgY29ycmVjdGVtZW50IGxlcyDDg8KpbMODwqltZW50cyAqL1xuLmRyYWdnYWJsZS1pdGVtIHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_stocks_stocks_component_ts.js.map