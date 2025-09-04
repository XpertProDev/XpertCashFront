"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_produits_produits_component_ts"],{

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

/***/ 16426:
/*!***********************************************************!*\
  !*** ./src/app/admin-page/produits/produits.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProduitsComponent: () => (/* binding */ ProduitsComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ 2752);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! xlsx */ 13857);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 40211);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 56755);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf-autotable */ 6530);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MODELS/customNumberPipe */ 96115);
/* harmony import */ var _suspended_boutique_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./suspended-boutique-dialog.component */ 85837);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 50854);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _SERVICES_categorie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SERVICES/categorie.service */ 49293);
/* harmony import */ var _SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SERVICES/produit.service */ 66375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SERVICES/users.service */ 88026);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 42700);









// MatPaginator et PageEvent ne sont plus nécessaires avec la pagination personnalisée

















const _c0 = ["searchInput"];
const _c1 = ["popupContainer"];
function ProduitsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessageApi, " ");
  }
}
function ProduitsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.successMessage, " ");
  }
}
function ProduitsComponent_i_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_i_14_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.rafraichirProduits());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProduitsComponent_i_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 49);
  }
}
function ProduitsComponent_div_21_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "label")(1, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function ProduitsComponent_div_21_label_2_Template_input_ngModelChange_1_listener($event) {
      const cat_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](cat_r5.selected, $event) || (cat_r5.selected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ProduitsComponent_div_21_label_2_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.onCheckboxChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", cat_r5.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", cat_r5.nom, " ");
  }
}
function ProduitsComponent_div_21_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 55)(1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_21_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.cancelSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_21_div_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.deleteSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Supprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function ProduitsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 50)(1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ProduitsComponent_div_21_label_2_Template, 3, 2, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ProduitsComponent_div_21_div_3_Template, 5, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.isAnySelected);
  }
}
function ProduitsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 58)(1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_26_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.downloadExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "T\u00E9l\u00E9charger en Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_26_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.downloadPDF());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "T\u00E9l\u00E9charger en PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_26_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.downloadCSV());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "T\u00E9l\u00E9charger en CSV");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function ProduitsComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_span_30_Template_span_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r1.removeFilter(ctx_r1.selectedFilters[0]);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\u2716");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedFilters[0].label, " ");
  }
}
function ProduitsComponent_i_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 62);
  }
}
function ProduitsComponent_i_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 63);
  }
}
function ProduitsComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_37_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 65)(2, "div", 66)(3, "h4", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Filtres");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div")(6, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_37_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      ctx_r1.resetFilters();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, " R\u00E9initialiser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ul", 69)(9, "li", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_37_Template_li_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.addFilter({
        type: "nomCategorie",
        label: "Cat\u00E9gorie"
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " Cat\u00E9gorie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "li", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_37_Template_li_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.addFilter({
        type: "nomUnite",
        label: "Unit\u00E9"
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, " Unit\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background", ctx_r1.isFilterSelected("nomCategorie") ? "#f0f0f0" : "transparent");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("disabled", ctx_r1.isFilterSelected("nomCategorie"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background", ctx_r1.isFilterSelected("nomUnite") ? "#f0f0f0" : "transparent");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("disabled", ctx_r1.isFilterSelected("nomUnite"));
  }
}
function ProduitsComponent_span_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.totalAllProducts, " ");
  }
}
function ProduitsComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProduitsComponent_ng_container_46_ng_container_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const boutique_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.productCounts[boutique_r11.id], " ");
  }
}
function ProduitsComponent_ng_container_46_ng_container_1_i_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 78);
  }
}
function ProduitsComponent_ng_container_46_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 79);
  }
}
function ProduitsComponent_ng_container_46_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_ng_container_46_ng_container_1_Template_div_click_1_listener() {
      const boutique_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](boutique_r11.actif ? ctx_r1.selectBoutique(boutique_r11) : ctx_r1.showSuspendedBoutiqueDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ProduitsComponent_ng_container_46_ng_container_1_span_4_Template, 2, 1, "span", 39)(5, ProduitsComponent_ng_container_46_ng_container_1_i_5_Template, 1, 0, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ProduitsComponent_ng_container_46_ng_container_1_div_6_Template, 1, 0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const boutique_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", boutique_r11.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("name_boutique_active", boutique_r11.id === (ctx_r1.selectedBoutique == null ? null : ctx_r1.selectedBoutique.id) && boutique_r11.actif)("suspended-boutique", !boutique_r11.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", boutique_r11.nomBoutique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.productCounts[boutique_r11.id] > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !boutique_r11.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", i_r12 !== ctx_r1.boutiques.length - 1);
  }
}
function ProduitsComponent_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProduitsComponent_ng_container_46_ng_container_1_Template, 7, 10, "ng-container", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.boutiquesSansEntrepots);
  }
}
function ProduitsComponent_ng_container_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
}
function ProduitsComponent_tr_70_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 86)(1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_tr_70_div_5_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r1.imagePopup, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function ProduitsComponent_tr_70_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](product_r14.description || "sans description");
  }
}
function ProduitsComponent_tr_70_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.getBoutiqueNames(product_r14.boutiques));
  }
}
function ProduitsComponent_tr_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_tr_70_Template_tr_click_0_listener() {
      const product_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.openProduitDetail(product_r14.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "td", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "td")(3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, ProduitsComponent_tr_70_div_5_Template, 3, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "td", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("mouseover", function ProduitsComponent_tr_70_Template_td_mouseover_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.showDescription = true);
    })("mouseout", function ProduitsComponent_tr_70_Template_td_mouseout_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.showDescription = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, ProduitsComponent_tr_70_div_10_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "td", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "td", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, ProduitsComponent_tr_70_td_22_Template, 2, 1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r14 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(product_r14.codeGenerique || ""), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", product_r14.photo, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.imagePopup);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(product_r14.nom), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r14.description ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](9, 12, product_r14.description, 0, 20) + (product_r14.description.length > 20 ? "..." : "") : "sans description", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.showDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(product_r14.nomCategorie || "sans categorie"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 16, product_r14.prixVente));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 18, product_r14.prixAchat));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(product_r14.nomUnite || "sans unite"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", product_r14.typeProduit === "PHYSIQUE" ? "Produit" : product_r14.typeProduit === "SERVICE" ? "Service" : "Type Produit", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.selectedBoutique);
  }
}
function ProduitsComponent_tr_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Aucun produit trouv\u00E9e.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function ProduitsComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 90)(1, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Vous n'avez pas de produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function ProduitsComponent_div_73_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_73_button_21_Template_button_click_0_listener() {
      const page_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.goToPage(page_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r18 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", page_r18 === ctx_r1.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", page_r18 === "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", page_r18, " ");
  }
}
function ProduitsComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 92)(1, "div", 93)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Items per page:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "select", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function ProduitsComponent_div_73_Template_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ProduitsComponent_div_73_Template_select_change_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.onPageSizeChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "50");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 100)(16, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_73_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.goToPage(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_73_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, ProduitsComponent_div_73_button_21_Template, 2, 4, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_73_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_73_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.goToPage(ctx_r1.totalPages - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.getPageInfo());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r1.currentPage === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r1.currentPage === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.getVisiblePages());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r1.currentPage >= ctx_r1.totalPages - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r1.currentPage >= ctx_r1.totalPages - 1);
  }
}
function ProduitsComponent_div_74_div_90_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 143)(1, "label")(2, "input", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ProduitsComponent_div_74_div_90_div_11_Template_input_change_2_listener() {
      const boutique_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r21).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.toggleBoutiqueSelection(boutique_r22.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const boutique_r22 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r1.selectedBoutiquesForImport.includes(boutique_r22.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", boutique_r22.nomBoutique, " ");
  }
}
function ProduitsComponent_div_74_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 134)(1, "div", 135)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "S\u00E9lectionner des boutiques");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_74_div_90_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.toggleBoutiqueSelectionPanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 137)(7, "div", 138)(8, "label")(9, "input", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ProduitsComponent_div_74_div_90_Template_input_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.toggleSelectAllBoutiques($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " S\u00E9lectionner toutes les boutiques ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, ProduitsComponent_div_74_div_90_div_11_Template, 4, 2, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 141)(13, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_74_div_90_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.confirmBoutiqueSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Confirmer");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r1.areAllBoutiquesSelected());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.boutiques);
  }
}
function ProduitsComponent_div_74_p_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Cliquez pour s\u00E9lectionner votre fichier Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProduitsComponent_div_74_p_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.selectedFile.name);
  }
}
function ProduitsComponent_div_74_div_105_div_2_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const error_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](error_r24);
  }
}
function ProduitsComponent_div_74_div_105_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 146)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Erreurs survenues :");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ProduitsComponent_div_74_div_105_div_2_li_4_Template, 2, 1, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.importErrors);
  }
}
function ProduitsComponent_div_74_div_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ProduitsComponent_div_74_div_105_div_2_Template, 5, 1, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("success", ctx_r1.importSuccess)("error", !ctx_r1.importSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.importMessage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.importErrors.length > 0);
  }
}
function ProduitsComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 86)(1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_74_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_74_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.closeExcelImportModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Importer des produits depuis Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 113)(7, "div", 114)(8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Instructions pour pr\u00E9parer votre fichier Excel :");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "ol")(11, "li", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "T\u00E9l\u00E9chargez notre mod\u00E8le Excel ci-dessous");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "li", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Remplissez les colonnes avec vos donn\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "li", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Les colonnes obligatoires sont marqu\u00E9es d'un *");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "li", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "\u00C9vitez de modifier les en-t\u00EAtes de colonnes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 116)(20, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Structure des colonnes :");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "ul")(23, "li")(24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Nom produit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, " - Nom du produit (texte)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "li")(30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, " - Description du produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "li")(34, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "Cat\u00E9gorie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, " - Nom de la cat\u00E9gorie existante");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "li")(40, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "Prix Vente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, " - Prix de vente (nombre)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "li")(46, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "Prix Achat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, " - Prix d'achat (nombre)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "li")(52, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "Quantit\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, " - Quantit\u00E9 initiale (nombre entier)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "li")(58, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "Unit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, " - Unit\u00E9 de mesure existante");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "li")(62, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, "Code Barre");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, " - Code barre (nombre entier)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "li")(66, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "Type Produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, " - PHYSIQUE ou SERVICE");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "li")(70, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "Date Preemption");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72, " - Format: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74, "dd-MM-yyyy");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, " (ex: 31-12-2025) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "li")(77, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](78, "Seuil Alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](79, " - Seuil d'alerte stock (nombre entier)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_74_Template_button_click_80_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.downloadExcelTemplate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](81, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, " T\u00E9l\u00E9charger le mod\u00E8le ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "div", 120)(84, "div", 121)(85, "div", 122)(86, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_74_Template_input_click_86_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.toggleBoutiqueSelectionPanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "label", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](88, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](89, " S\u00E9lectionner vos boutiques");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](90, ProduitsComponent_div_74_div_90_Template, 15, 2, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_74_Template_div_click_91_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const fileInput_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](93);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](fileInput_r23.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "input", 128, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function ProduitsComponent_div_74_Template_input_change_92_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](94, "i", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](95, ProduitsComponent_div_74_p_95_Template, 2, 0, "p", 40)(96, ProduitsComponent_div_74_p_96_Template, 2, 1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](97, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](98, "Formats accept\u00E9s: .xlsx, .xls (Max 5MB)");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "div", 130)(100, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_74_Template_button_click_100_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.closeExcelImportModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](101, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_div_74_Template_button_click_102_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.uploadExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](103);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](104, "Importer");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](105, ProduitsComponent_div_74_div_105_Template, 3, 6, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("invalid-field", ctx_r1.showBoutiqueError);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r1.getSelectedBoutiquesText());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.showBoutiqueSelectionPanel);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx_r1.selectedFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.selectedFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.selectedFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r1.selectedFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.importMessage);
  }
}
class ProduitsComponent {
  // HostListener pour fermer les dropdowns
  onClick(event) {
    const target = event.target;
    // Fermer le dropdown de filtre
    if (!target.closest('.container_inputSearch') && !target.closest('.filter-dropdown') && !target.closest('.trier')) {
      this.showFilterDropdown = false;
    }
    // Fermer le dropdown d'export
    if (!target.closest('.export-container')) {
      this.showExportDropdown = false;
    }
  }
  constructor(categorieService, produitService, fb, router, usersService, dialog, cdr) {
    this.categorieService = categorieService;
    this.produitService = produitService;
    this.fb = fb;
    this.router = router;
    this.usersService = usersService;
    this.dialog = dialog;
    this.cdr = cdr;
    this.backendUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiBaseUrl;
    this.isLoadingCounts = false;
    this.searchText = '';
    this.tasks = [];
    this.imagePopup = null;
    this.nomEntreprise = '';
    this.adresseEntreprise = '';
    this.logoEntreprise = '';
    this.userName = '';
    this.boutiqueName = '';
    this.addressBoutique = '';
    this.showDescription = false;
    this.selectedBoutique = null;
    this.previousSelectedBoutique = null;
    this.boutiqueActuelle = "Toutes les boutiques";
    this.boutiques = [];
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.imgUrl;
    this.isDataLoaded = false;
    this.isLoading = false;
    this.showNoProductsMessage = false;
    this.productCounts = {};
    this.showFilterDropdown = false;
    this.selectedFilters = [];
    this.allProducts = []; // Tous les produits chargés
    this.sortColumn = null;
    this.sortDirection = 'asc';
    this.showExcelImportModal = false;
    this.selectedFile = null;
    this.isImporting = false;
    this.importMessage = '';
    this.importSuccess = false;
    this.importErrors = [];
    this.selectedBoutiquesForImport = [];
    this.isAllBoutiquesSelected = false;
    this.showBoutiqueError = false;
    this.showBoutiqueSelectionPanel = false;
    this.isPopupVisible = false;
    this.categories = [];
    this.currentPageEnterprise = 0;
    this.pageSizeEnterprise = 20;
    this.totalElementsEnterprise = 0;
    this.currentPageBoutique = 0;
    this.pageSizeBoutique = 20;
    this.totalElementsBoutique = 0;
    this.currentPage = 0;
    this.pageSize = 20;
    this.totalElements = 0;
    this.totalPages = 0;
    // Pagination et tableau de données
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource();
    // @ViewChild(MatPaginator) paginator!: MatPaginator; // Plus nécessaire avec la pagination personnalisée
    // Dropdown pour l'export
    this.showExportDropdown = false;
    // Gestion de l'image uploadée
    this.urllink = "assets/img/appareil.jpg";
    this.newPhotoUrl = null;
    // selectedFile: File | null = null;
    this.entrepriseId = null;
    this.successMessage = null;
    this.errorMessageApi = null;
  }
  ngOnInit() {
    this.getUserInfo();
    this.fetchCategories();
  }
  // Méthodes de gestion des filtres
  toggleFilterDropdown() {
    this.showFilterDropdown = !this.showFilterDropdown;
    this.showExportDropdown = false;
  }
  applyFilters() {
    let filtered = [...this.allProducts];
    const searchLower = this.searchText.toLowerCase();
    if (this.searchText) {
      if (this.selectedFilters.length > 0) {
        filtered = filtered.filter(product => {
          return this.selectedFilters.every(filter => {
            const key = filter.type;
            const value = product[key]?.toString().toLowerCase() || '';
            return value.includes(searchLower);
          });
        });
      } else {
        filtered = filtered.filter(product => Object.values(product).some(val => val?.toString().toLowerCase().includes(searchLower)));
      }
    }
    this.tasks = filtered;
    this.currentPage = 0;
  }
  addFilter(filter) {
    if (this.isFilterSelected(filter.type)) {
      this.selectedFilters = [];
    } else {
      this.selectedFilters = [filter];
    }
    this.showFilterDropdown = false;
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
  resetFilters() {
    this.selectedFilters = [];
    this.searchText = '';
    this.tasks = [...this.allProducts];
    this.currentPage = 0;
    this.showFilterDropdown = false;
  }
  goToAddProduit() {
    this.router.navigate(['/addProduit']);
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
    const startIndex = this.currentPage * this.pageSize;
    return this.tasks.slice(startIndex, startIndex + this.pageSize);
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
    const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.json_to_sheet(this.tasks);
    const workbook = xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.book_new();
    xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.book_append_sheet(workbook, worksheet, 'Produits');
    xlsx__WEBPACK_IMPORTED_MODULE_11__.writeFile(workbook, 'Produits.xlsx');
  }
  // Téléchargement en PDF
  downloadPDF() {
    if (!this.tasks || this.tasks.length === 0) {
      console.error("Aucun produit à afficher dans le PDF !");
      return;
    }
    const doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const logoUrl = this.logoEntreprise ? `${this.apiUrl}${this.logoEntreprise}` : `${this.apiUrl}/logoUpload/651.jpg`;
    const entreprise = this.nomEntreprise || "Nom non disponible";
    this.getImageBase64(logoUrl).then(logoBase64 => {
      const imageType = logoBase64.startsWith('data:image/png') ? 'PNG' : 'JPEG';
      doc.addImage(logoBase64, imageType, 14, 5, 30, 30);
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.text(`Nom de l'entreprise: ${entreprise}`, 60, 20);
      doc.text('Liste des produits', 60, 30);
      doc.setLineWidth(0.5);
      doc.line(14, 35, 195, 35);
      const columns = ['Code', 'Nom produit', 'Description', 'Catégorie', 'Prix vente', 'Prix achat', 'En Stock', 'Unite', 'Seuil Alert'];
      const startIndex = this.currentPage * this.pageSize;
      const pageTasks = this.tasks.slice(startIndex, startIndex + this.pageSize);
      if (!Array.isArray(pageTasks) || pageTasks.length === 0) {
        console.error("Aucun produit trouvée sur cette page !");
        return;
      }
      const rows = pageTasks.map(task => [task.codeGenerique || '', task.nom || '', task.description || '', task.nomCategorie ? `${task.nomCategorie}` : 'Aucune categorie', task.prixVente ?? 0, task.prixAchat ?? 0, task.quantite ?? 0, task.nomUnite ? `${task.nomUnite}` : 'Sans unité', task.seuilAlert ?? 0]);
      jspdf_autotable__WEBPACK_IMPORTED_MODULE_2___default()(doc, {
        head: [columns],
        body: rows,
        startY: 40,
        theme: 'grid',
        headStyles: {
          fillColor: [64, 153, 255],
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
  // Gestion de la pagination personnalisée
  goToPage(page) {
    // Ignorer les clics sur les points de suspension
    if (page === '...') {
      return;
    }
    const pageNumber = page;
    if (pageNumber >= 0 && pageNumber < this.totalPages) {
      this.currentPage = pageNumber;
      if (this.selectedBoutique) {
        // si vue boutique
        this.loadProduitsPaginated(this.selectedBoutique.id, pageNumber, this.pageSize);
      } else {
        // vue "Toutes les boutiques"
        this.loadAllProduitsPaginated(pageNumber, this.pageSize);
      }
    }
  }
  onPageSizeChange() {
    this.currentPage = 0; // Retourner à la première page
    if (this.selectedBoutique) {
      // si vue boutique
      this.loadProduitsPaginated(this.selectedBoutique.id, 0, this.pageSize);
    } else {
      // vue "Toutes les boutiques"
      this.loadAllProduitsPaginated(0, this.pageSize);
    }
  }
  getPageInfo() {
    const start = this.currentPage * this.pageSize + 1;
    const end = Math.min((this.currentPage + 1) * this.pageSize, this.totalElements);
    return `${start} - ${end} / ${this.totalElements}`;
  }
  getVisiblePages() {
    const pages = [];
    const totalPages = this.totalPages;
    const current = this.currentPage;
    if (totalPages <= 7) {
      // Si moins de 7 pages, afficher toutes les pages
      for (let i = 0; i < totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Logique pour afficher les pages avec des points de suspension
      if (current <= 3) {
        // Début de la liste
        for (let i = 0; i < 5; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages - 1);
      } else if (current >= totalPages - 4) {
        // Fin de la liste
        pages.push(0);
        pages.push('...');
        for (let i = totalPages - 5; i < totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Milieu de la liste
        pages.push(0);
        pages.push('...');
        for (let i = current - 1; i <= current + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages - 1);
      }
    }
    return pages;
  }
  // Méthode syncPaginator supprimée car plus nécessaire avec la pagination personnalisée
  // Gestion de l'upload d'image pour ajouter une photo
  // onFileSelected(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files.length > 0) {
  //     this.selectedFile = input.files[0];
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       this.newPhotoUrl = e.target?.result as string;
  //     };
  //     reader.readAsDataURL(this.selectedFile);
  //   }
  // }
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
  // Dans getUserInfo, ajoutez l'appel pour charger les compteurs initiaux
  getUserInfo() {
    var _this = this;
    this.usersService.getUserInfo().subscribe({
      next: function () {
        var _ref = (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
          console.log('Données reçues:', user);
          localStorage.setItem('user', JSON.stringify(user));
          _this.userName = user.nomComplet;
          _this.nomEntreprise = user.nomEntreprise;
          _this.boutiques = user.boutiques ?? [];
          // Récupération de l'ID entreprise
          _this.entrepriseId = user.entrepriseId;
          // Charger les compteurs avant de sélectionner une boutique
          yield _this.loadAllBoutiquesCounts();
          _this.selectBoutique(null);
          if (!_this.entrepriseId) {
            console.error('Aucun ID entreprise trouvé !');
            return;
          }
          _this.addressBoutique = _this.selectedBoutique?.adresse || 'Adresse non trouvée';
          setTimeout(() => {
            _this.showNoProductsMessage = _this.tasks.length === 0;
            _this.cdr.detectChanges();
          }, 500);
        });
        return function next(_x) {
          return _ref.apply(this, arguments);
        };
      }(),
      error: err => {
        this.boutiques = [];
        console.error("Erreur lors de la récupération des informations utilisateur :", err);
        setTimeout(() => {
          this.showNoProductsMessage = this.tasks.length === 0;
          this.cdr.detectChanges();
        }, 500);
      }
    });
  }
  selectBoutique(boutique) {
    var _this2 = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (boutique && !boutique.actif) {
        _this2.showSuspendedBoutiqueDialog();
        return;
      }
      _this2.previousSelectedBoutique = _this2.selectedBoutique;
      if (boutique === null) {
        _this2.selectedBoutique = boutique;
        _this2.boutiqueActuelle = "Toutes les boutiques";
        // Charger les compteurs avant d'afficher les produits
        yield _this2.loadAllBoutiquesCounts();
        _this2.loadAllProduitsPaginated(0, _this2.pageSize);
      } else {
        _this2.selectedBoutique = boutique;
        _this2.boutiqueActuelle = boutique.nomBoutique ? boutique.nomBoutique : "Boutique sans nom";
        _this2.loadProduitsPaginated(boutique.id, 0, _this2.pageSize);
      }
      _this2.currentPage = 0;
    })();
  }
  // Ajoutez cette nouvelle méthode
  loadAllProduits() {
    this.showNoProductsMessage = false;
    if (!this.entrepriseId) {
      console.error('ID entreprise manquant');
      return;
    }
    this.produitService.getProduitsByEntrepriseId(this.entrepriseId).subscribe({
      next: produits => {
        // Filtrer les produits qui appartiennent à au moins une boutique non entrepôt et active
        const boutiquesValidesIds = this.boutiques.filter(b => b.typeBoutique !== 'ENTREPOT' && b.actif).map(b => b.id);
        const produitsFiltres = produits.filter(prod => {
          return prod.boutiques?.some(b => boutiquesValidesIds.includes(b.id));
        });
        this.tasks = produitsFiltres.map(prod => {
          const fullImageUrl = prod.photo && prod.photo !== 'null' && prod.photo !== 'undefined' ? `${this.apiUrl}${prod.photo}` : '';
          return {
            ...prod,
            photo: fullImageUrl,
            createdAt: this.formatDate(prod.createdAt?.toString() || '')
          };
        }).sort((a, b) => {
          const dateA = new Date(a.createdAt ?? new Date().toISOString()).getTime();
          const dateB = new Date(b.createdAt ?? new Date().toISOString()).getTime();
          return dateB - dateA;
        });
        const counts = {};
        produitsFiltres.forEach(prod => {
          prod.boutiques?.forEach(b => {
            if (boutiquesValidesIds.includes(b.id)) {
              counts[b.id] = (counts[b.id] || 0) + 1;
            }
          });
        });
        this.productCounts = counts;
        this.dataSource.data = this.tasks;
        // Configuration du paginator supprimée car plus nécessaire avec la pagination personnalisée
        this.showNoProductsMessage = this.tasks.length === 0;
        this.allProducts = [...this.tasks];
        this.resetFilters();
      },
      error: err => {
        console.error("Erreur :", err);
        this.showNoProductsMessage = this.tasks.length === 0;
      }
    });
  }
  loadAllBoutiquesCounts() {
    var _this3 = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.entrepriseId) return;
      _this3.isLoadingCounts = true;
      // Réinitialiser temporairement les compteurs pour éviter l'affichage de valeurs incorrectes
      const previousCounts = {
        ..._this3.productCounts
      };
      _this3.boutiquesActivesSansEntrepots.forEach(b => {
        _this3.productCounts[b.id] = 0;
      });
      try {
        const requests = _this3.boutiquesActivesSansEntrepots.map(boutique => _this3.produitService.getProduitsEntreprisePaginated(boutique.id, 0, 1).toPromise());
        const responses = yield Promise.all(requests);
        responses.forEach((response, index) => {
          if (response) {
            const boutiqueId = _this3.boutiquesActivesSansEntrepots[index].id;
            _this3.productCounts[boutiqueId] = response.totalProduitsActifs;
          }
        });
        _this3.cdr.detectChanges();
      } catch (err) {
        console.error('Erreur lors du chargement des compteurs:', err);
        // Restaurer les anciennes valeurs en cas d'erreur
        _this3.productCounts = previousCounts;
      } finally {
        _this3.isLoadingCounts = false;
      }
    })();
  }
  // Pour le mode "Toutes les boutiques"
  loadAllProduitsPaginated() {
    var _this4 = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (page = 0, size = 20) {
      _this4.showNoProductsMessage = false;
      if (!_this4.entrepriseId) {
        console.error('ID entreprise manquant');
        return;
      }
      _this4.isLoading = true;
      // Attendre que tous les compteurs soient chargés
      yield _this4.loadAllBoutiquesCounts();
      _this4.produitService.getProduitsByEntrepriseIdPaginated(_this4.entrepriseId, page, size).subscribe({
        next: response => {
          _this4.tasks = response.content.map(prod => {
            const fullImageUrl = prod.photo && prod.photo !== 'null' && prod.photo !== 'undefined' ? `${_this4.apiUrl}${prod.photo}` : '';
            return {
              ...prod,
              photo: fullImageUrl,
              createdAt: _this4.formatDate(prod.createdAt?.toString() || '')
            };
          });
          // Mettre à jour les informations de pagination
          _this4.currentPage = response.pageNumber;
          _this4.pageSize = response.pageSize;
          _this4.totalElements = response.totalElements;
          _this4.totalPages = response.totalPages;
          // this.currentPageEnterprise = response.pageNumber;
          // this.pageSizeEnterprise = response.pageSize;
          // this.totalElementsEnterprise = response.totalElements;
          _this4.dataSource.data = _this4.tasks;
          // syncPaginator() supprimé car plus nécessaire avec la pagination personnalisée
          _this4.showNoProductsMessage = _this4.tasks.length === 0;
          _this4.allProducts = [..._this4.tasks];
          _this4.resetFilters();
          _this4.isLoading = false;
        },
        error: err => {
          console.error("Erreur :", err);
          _this4.showNoProductsMessage = _this4.tasks.length === 0;
          _this4.isLoading = false;
        }
      });
    }).apply(this, arguments);
  }
  // Pour le mode boutique
  loadProduitsPaginated(boutiqueId, page = 0, size = 20) {
    this.showNoProductsMessage = false;
    if (!boutiqueId) {
      console.error('L\'ID de la boutique est manquant');
      return;
    }
    const boutique = this.boutiques.find(b => b.id === boutiqueId);
    if (boutique?.typeBoutique === 'ENTREPOT') {
      this.tasks = [];
      this.dataSource.data = [];
      this.productCounts[boutiqueId] = 0;
      this.showNoProductsMessage = true;
      this.isLoading = false;
      return;
    }
    this.isLoading = true;
    this.produitService.getProduitsEntreprisePaginated(boutiqueId, page, size).subscribe({
      next: response => {
        this.tasks = response.content.map(prod => {
          // Mapper les produits
          const fullImageUrl = prod.photo && prod.photo !== 'null' && prod.photo !== 'undefined' ? `${this.apiUrl}${prod.photo}` : '';
          let createdAt = '';
          if (prod.createdAt) {
            if (prod.createdAt.includes('à')) {
              const [datePart, timePart] = prod.createdAt.split(' à ');
              // format personnalisé si besoin
            } else {
              createdAt = new Date(prod.createdAt).toISOString();
            }
          }
          return {
            id: prod.id,
            codeGenerique: prod.codeGenerique || '',
            codeBare: prod.codeBare || '',
            nom: prod.nom || 'Nom inconnu',
            description: prod.description || '',
            prixVente: prod.prixVente || 0,
            prixAchat: prod.prixAchat || 0,
            quantite: prod.quantite || 0,
            seuilAlert: prod.seuilAlert || 0,
            enStock: prod.enStock || false,
            photo: fullImageUrl,
            nomCategorie: prod.nomCategorie || '',
            nomUnite: prod.nomUnite || '',
            createdAt: createdAt,
            categorieId: prod.categorieId || 0,
            uniteId: prod.uniteId || 0,
            typeProduit: prod.typeProduit || 'Non défini',
            boutiques: prod.boutiques || []
          };
        });
        // Mettre à jour les informations de pagination
        this.currentPage = response.pageNumber;
        this.pageSize = response.pageSize;
        this.totalElements = response.totalElements;
        this.totalPages = response.totalPages;
        // this.currentPageBoutique = response.pageNumber;
        // this.pageSizeBoutique = response.pageSize;
        // this.totalElementsBoutique = response.totalElements;
        this.productCounts[boutiqueId] = response.totalProduitsActifs;
        this.dataSource.data = this.tasks;
        // Configuration du paginator supprimée car plus nécessaire avec la pagination personnalisée
        this.isLoading = false;
        this.allProducts = [...this.tasks];
        this.resetFilters();
        this.showNoProductsMessage = this.tasks.length === 0;
      },
      error: err => {
        this.isLoading = false;
        if (err.message === 'BOUTIQUE_DESACTIVEE') {
          this.showSuspendedBoutiqueDialog();
          this.selectedBoutique = this.previousSelectedBoutique;
          return;
        }
        console.error("Erreur :", err);
        this.showNoProductsMessage = this.tasks.length === 0;
      }
    });
  }
  // Charge les produits depuis le backend et effectue le mapping pour l'affichage
  loadProduits(boutiqueId, page = 0, size = 20) {
    this.showNoProductsMessage = false;
    if (!boutiqueId) {
      console.error('L\'ID de la boutique est manquant');
      return;
    }
    const boutique = this.boutiques.find(b => b.id === boutiqueId);
    if (boutique?.typeBoutique === 'ENTREPOT') {
      this.tasks = [];
      this.dataSource.data = [];
      this.productCounts[boutiqueId] = 0;
      this.showNoProductsMessage = true;
      this.isLoading = false;
      return;
    }
    this.isLoading = true;
    this.produitService.getProduitsEntreprisePaginated(boutiqueId, page, size).subscribe({
      next: response => {
        // Mapper les produits comme avant
        this.tasks = response.content.map(prod => {
          const fullImageUrl = prod.photo && prod.photo !== 'null' && prod.photo !== 'undefined' ? `${this.apiUrl}${prod.photo}` : '';
          let createdAt = '';
          if (prod.createdAt) {
            if (prod.createdAt.includes('à')) {
              const [datePart, timePart] = prod.createdAt.split(' à ');
              // format personnalisé si besoin
            } else {
              createdAt = new Date(prod.createdAt).toISOString();
            }
          }
          return {
            id: prod.id,
            codeGenerique: prod.codeGenerique || '',
            codeBare: prod.codeBare || '',
            nom: prod.nom || 'Nom inconnu',
            description: prod.description || '',
            prixVente: prod.prixVente || 0,
            prixAchat: prod.prixAchat || 0,
            quantite: prod.quantite || 0,
            seuilAlert: prod.seuilAlert || 0,
            enStock: prod.enStock || false,
            photo: fullImageUrl,
            nomCategorie: prod.nomCategorie || '',
            nomUnite: prod.nomUnite || '',
            createdAt: createdAt,
            categorieId: prod.categorieId || 0,
            uniteId: prod.uniteId || 0,
            typeProduit: prod.typeProduit || 'Non défini',
            boutiques: prod.boutiques || []
          };
        });
        // Mettre à jour les informations de pagination
        this.currentPage = response.pageNumber;
        this.pageSize = response.pageSize;
        this.totalElements = response.totalElements;
        this.totalPages = response.totalPages;
        this.productCounts[boutiqueId] = response.totalProduitsActifs;
        this.dataSource.data = this.tasks;
        // Configuration du paginator supprimée car plus nécessaire avec la pagination personnalisée
        this.isLoading = false;
        this.allProducts = [...this.tasks];
        this.resetFilters();
        this.showNoProductsMessage = this.tasks.length === 0;
      },
      error: err => {
        this.isLoading = false;
        if (err.message === 'BOUTIQUE_DESACTIVEE') {
          this.showSuspendedBoutiqueDialog();
          this.selectedBoutique = this.previousSelectedBoutique;
          return;
        }
        console.error("Erreur :", err);
        this.showNoProductsMessage = this.tasks.length === 0;
      }
    });
  }
  rafraichirProduits() {
    var _this5 = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.showNoProductsMessage = false;
      if (_this5.selectedBoutique) {
        _this5.loadProduitsPaginated(_this5.selectedBoutique.id, _this5.currentPage, _this5.pageSize);
      } else {
        // Rafraîchir les compteurs avant de charger les produits
        yield _this5.loadAllBoutiquesCounts();
        _this5.loadAllProduitsPaginated(_this5.currentPage, _this5.pageSize);
      }
    })();
  }
  showSuspendedBoutiqueDialog() {
    this.dialog.open(_suspended_boutique_dialog_component__WEBPACK_IMPORTED_MODULE_4__.SuspendedBoutiqueDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {
        onClose: () => {
          // Forcer la mise à jour de l'affichage
          this.selectedBoutique = this.previousSelectedBoutique;
        }
      }
    });
  }
  // Ajoutez cette méthode si nécessaire
  formatDate(dateStr) {
    try {
      const [datePart, timePart] = dateStr.split(' à ');
      const [day, month, year] = datePart.split('-');
      const [hours, minutes] = timePart.split(':');
      return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), parseInt(hours), parseInt(minutes)).toISOString();
    } catch {
      return new Date().toISOString();
    }
  }
  // Detail de produit 
  // openProductDetail(productId: number) {}
  openProduitDetail(productId) {
    const boutiqueId = this.selectedBoutique?.id;
    this.router.navigate(['/detail-produit', productId], {
      queryParams: {
        boutiqueId: boutiqueId
      }
    });
  }
  // Méthode qui retourne l'image à afficher pour un produit
  getImageUrl(product) {
    // Vérifier si une image est bien fournie
    if (product.photo && product.photo.trim() !== '') {
      return product.photo;
    } else {
      // Récupérer la première lettre du nom (par défaut 'P' si non défini)
      const firstLetter = product.nom ? product.nom.trim().charAt(0) : 'P';
      return this.generateInitialImage(firstLetter);
    }
  }
  // Méthode qui génère une image SVG (sous forme de Data URL) avec la première lettre du nom
  generateInitialImage(letter) {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <rect width="100%" height="100%" fill="#0671e4ac"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="100" fill="#fff">
          ${letter.toUpperCase()}
        </text> 
      </svg>
    `;
    return 'data:image/svg+xml;base64,' + btoa(svg);
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
  // Ajoutez cette méthode dans la classe ProduitsComponent
  // getBoutiqueTextColor(index: number, isActive: boolean): string {
  //   // Génère des couleurs différentes selon l'index
  //   const hue = (index * 137.508) % 360; // 137.508 pour une bonne répartition des couleurs
  //   return isActive ? '#ffffff' : `hsl(${hue}, 70%, 40%)`; // Texte blanc si actif, couleur vive sinon
  // }
  // sur html
  //  ? getBoutiqueTextColor(i, boutique.id === selectedBoutique?.id) : '#999'
  onDrop(event) {
    const previousIndex = this.boutiques.findIndex(boutique => boutique === event.item.data);
    const currentIndex = event.currentIndex;
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__.moveItemInArray)(this.boutiques, previousIndex, currentIndex);
  }
  openExcelImportModal() {
    this.resetImportState();
    this.showExcelImportModal = true;
  }
  closeExcelImportModal() {
    this.showExcelImportModal = false;
    this.resetImportState();
  }
  resetImportState() {
    this.selectedFile = null;
    this.isImporting = false;
    this.importMessage = '';
    this.importSuccess = false;
    this.importErrors = [];
  }
  // Télécharger le modèle Excel
  downloadExcelTemplate() {
    // Création du workbook
    const wb = xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.book_new();
    // Données du modèle
    const data = [
    // En-têtes avec mise en forme
    ['Nom produit*', 'Description', 'Catégorie*', 'Prix Vente*', 'Prix Achat*', 'Quantité*', 'Unité', 'Code Barre', 'Type Produit', 'Date Preemption', 'Seuil Alert'],
    // Ligne d'exemple
    ['T-Shirt', 'T-shirt en coton', 'Vêtements', 25.99, 15.50, 100, 'Pièce', 123456789, 'PHYSIQUE', '29-12-2026', 10]
    // Ligne de note explicative
    // ['', '', '', '', '', '', '', '', '', '', '']
    ];
    // Création de la worksheet avec les données
    const ws = xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.aoa_to_sheet(data);
    // Largeurs de colonnes personnalisées
    const colWidths = [{
      wch: 20
    },
    // Nom produit
    {
      wch: 25
    },
    // Description
    {
      wch: 15
    },
    // Catégorie
    {
      wch: 12
    },
    // Prix Vente
    {
      wch: 12
    },
    // Prix Achat
    {
      wch: 10
    },
    // Quantité
    {
      wch: 10
    },
    // Unité
    {
      wch: 15
    },
    // Code Barre
    {
      wch: 12
    },
    // Type Produit
    {
      wch: 12
    },
    // Date preemption
    {
      wch: 12
    } // Seuil Alert
    ];
    ws['!cols'] = colWidths;
    // Ajout de la worksheet au workbook
    xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.book_append_sheet(wb, ws, 'Modèle Produits');
    // Génération du fichier
    const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_11__.write(wb, {
      bookType: 'xlsx',
      type: 'array'
    });
    const blob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });
    // Téléchargement
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'modele-import-produits.xlsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
  validateExcelDates(file) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = e => {
        const data = new Uint8Array(e.target.result);
        const workbook = xlsx__WEBPACK_IMPORTED_MODULE_11__.read(data, {
          type: 'array'
        });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = xlsx__WEBPACK_IMPORTED_MODULE_11__.utils.sheet_to_json(worksheet, {
          header: 1
        });
        // Vérifier le format des dates (colonne 9)
        for (let i = 1; i < jsonData.length; i++) {
          const row = jsonData[i];
          if (row[9]) {
            if (!/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-\d{4}$/.test(row[9])) {
              resolve(false);
              return;
            }
          }
        }
        resolve(true);
      };
      reader.readAsArrayBuffer(file);
    });
  }
  // Gestion de la sélection de fichier
  onFileSelected(event) {
    var _this6 = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const file = event.target.files[0];
      if (file) {
        // Vérifier la taille du fichier (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          _this6.importMessage = 'Le fichier est trop volumineux (max 5MB)';
          _this6.importSuccess = false;
          return;
        }
        // Vérifier l'extension
        const validExtensions = ['.xlsx', '.xls'];
        const extension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
        if (!validExtensions.includes(extension)) {
          _this6.importMessage = 'Format de fichier non supporté';
          _this6.importSuccess = false;
          return;
        }
        _this6.selectedFile = file;
        // Ajouter la validation
        const isValid = yield _this6.validateExcelDates(file);
        if (!isValid) {
          _this6.importMessage = 'Format de date invalide. Utilisez dd-MM-yyyy';
          _this6.importSuccess = false;
          _this6.selectedFile = null;
          return;
        }
      }
    })();
  }
  uploadExcel() {
    if (!this.selectedFile || !this.entrepriseId) return;
    // this.isImporting = true;
    this.importMessage = '';
    this.importErrors = [];
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('entrepriseId', this.entrepriseId.toString());
    if (this.selectedBoutique?.id) {
      formData.append('boutiqueId', this.selectedBoutique.id.toString());
    }
    // Vérifier qu'au moins une boutique est sélectionnée
    if (this.selectedBoutiquesForImport.length === 0) {
      this.importMessage = "Veuillez sélectionner au moins une boutique";
      this.importSuccess = false;
      return;
    }
    this.produitService.importProduitsFromExcel(formData, this.selectedBoutiquesForImport).subscribe({
      next: response => {
        // this.isImporting = false;
        // Correction clé ici : utiliser 'count' au lieu de 'successCount'
        if (response.count > 0) {
          this.importSuccess = true;
          this.importMessage = `Importation réussie ! ${response.count} produits ajoutés.`;
        } else {
          this.importSuccess = false;
          this.importMessage = "Aucun produit ajouté";
        }
        if (response.errors) {
          this.importErrors = response.errors;
        }
        // Rafraîchir les données
        // setTimeout(() => {
        //   if (this.selectedBoutique) {
        //     this.loadProduits(this.selectedBoutique.id);
        //   } else {
        //     this.loadAllProduits();
        //   }
        // }, 2000);
        // Fermer le modal après 3 secondes seulement si l'import est réussi
        if (this.importSuccess) {
          setTimeout(() => {
            if (this.selectedBoutique) {
              this.loadProduits(this.selectedBoutique.id);
            } else {
              this.loadAllProduits();
              this.closeExcelImportModal();
            }
          }, 2000);
        }
      },
      error: error => {
        // this.isImporting = false;
        this.importSuccess = false;
        if (this.importMessage.includes('Date') || this.importMessage.includes('Preemption')) {
          this.importMessage += '. Format de date invalide. Utilisez dd-MM-yyyy.';
        }
        // Gestion améliorée des erreurs
        if (error.error) {
          if (error.error.error) {
            this.importMessage = error.error.error;
          } else if (error.error.message) {
            this.importMessage = error.error.message;
          }
          if (error.error.errors) {
            this.importErrors = error.error.errors;
          }
        } else {
          this.importMessage = 'Erreur inconnue lors de l\'importation';
        }
      }
    });
  }
  toggleBoutiqueSelection(id) {
    const index = this.selectedBoutiquesForImport.indexOf(id);
    if (index === -1) {
      this.selectedBoutiquesForImport.push(id);
    } else {
      this.selectedBoutiquesForImport.splice(index, 1);
    }
  }
  toggleAllBoutiques() {
    if (this.isAllBoutiquesSelected) {
      this.selectedBoutiquesForImport = [];
    } else {
      this.selectedBoutiquesForImport = this.boutiques.filter(b => b.actif).map(b => b.id);
    }
    this.isAllBoutiquesSelected = !this.isAllBoutiquesSelected;
  }
  // Méthodes pour gérer le panel
  toggleBoutiqueSelectionPanel() {
    this.showBoutiqueSelectionPanel = !this.showBoutiqueSelectionPanel;
  }
  areAllBoutiquesSelected() {
    return this.boutiques.length > 0 && this.boutiques.every(b => this.selectedBoutiquesForImport.includes(b.id));
  }
  toggleSelectAllBoutiques(event) {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.selectedBoutiquesForImport = this.boutiques.map(b => b.id);
    } else {
      this.selectedBoutiquesForImport = [];
    }
  }
  confirmBoutiqueSelection() {
    this.toggleBoutiqueSelectionPanel();
  }
  getSelectedBoutiquesText() {
    if (this.selectedBoutiquesForImport.length === 0) {
      return '';
    }
    if (this.selectedBoutiquesForImport.length === this.boutiques.length) {
      return 'Toutes les boutiques';
    }
    const selectedNames = this.boutiques.filter(b => this.selectedBoutiquesForImport.includes(b.id)).map(b => b.nomBoutique);
    return selectedNames.join(', ');
  }
  get boutiquesSansEntrepots() {
    return this.boutiques?.filter(b => b.typeBoutique !== 'ENTREPOT') || [];
  }
  get boutiquesActivesSansEntrepots() {
    return this.boutiques?.filter(b => b.typeBoutique !== 'ENTREPOT' && b.actif) || [];
  }
  get totalAllProducts() {
    if (this.isLoadingCounts) return 0;
    if (!this.boutiquesActivesSansEntrepots.length) return 0;
    return this.boutiquesActivesSansEntrepots.map(b => this.productCounts[b.id] || 0).reduce((acc, curr) => acc + curr, 0);
  }
  fetchCategories() {
    this.categorieService.getCategories().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)(err => {
      console.error("Erreur de chargement des catégories", err);
      return [];
    })).subscribe(data => {
      this.categories = data.map(cat => ({
        ...cat,
        selected: false
      }));
    });
  }
  get isAnySelected() {
    return this.categories.some(cat => cat.selected);
  }
  onCheckboxChange() {
    // Juste pour déclencher la détection de changement
  }
  cancelSelection() {
    if (this.isAnySelected) {
      // Si y a des cochés, décocher tout
      this.categories.forEach(cat => cat.selected = false);
    } else {
      // Sinon fermer popup
      this.isPopupVisible = false;
    }
  }
  // Masque le dropdown si l'utilisateur clique en dehors
  _onClickOutside(event) {
    if (this.isPopupVisible && this.popupContainer && !this.popupContainer.nativeElement.contains(event.target)) {
      this.isPopupVisible = false;
    }
  }
  togglePopup() {
    this.successMessage = null;
    this.errorMessageApi = null;
    this.isPopupVisible = !this.isPopupVisible;
  }
  deleteSelection() {
    // Réinitialiser les messages avant chaque action
    this.successMessage = null;
    this.errorMessageApi = null;
    const selectedIds = this.categories.filter(c => c.selected && c.id !== undefined).map(c => c.id);
    console.log("🔴 À supprimer :", selectedIds);
    if (selectedIds.length === 0) {
      this.errorMessageApi = "Veuillez sélectionner au moins une catégorie.";
      this.clearMessagesAfterDelay();
      return;
    }
    if (selectedIds.length > 1) {
      this.errorMessageApi = "Vous ne pouvez supprimer qu'une seule catégorie à la fois.";
      this.clearMessagesAfterDelay();
      return;
    }
    const idToDelete = selectedIds[0];
    this.categorieService.deleteCategorie(idToDelete).subscribe({
      next: message => {
        this.successMessage = message || "Catégorie supprimée avec succès.";
        this.errorMessageApi = null;
        this.categories = this.categories.filter(c => c.id !== idToDelete);
        this.isPopupVisible = false;
        this.clearMessagesAfterDelay();
      },
      error: error => {
        this.successMessage = null;
        if (error.error && typeof error.error === 'string') {
          this.errorMessageApi = error.error;
        } else if (error.status === 403) {
          this.errorMessageApi = "Accès refusé. Seuls les administrateurs ou managers peuvent supprimer une catégorie.";
        } else if (error.status === 409) {
          this.errorMessageApi = "Cette catégorie contient des produits. Veuillez d'abord les supprimer.";
        } else {
          this.errorMessageApi = "Erreur inattendue lors de la suppression.";
        }
        this.clearMessagesAfterDelay();
      }
    });
  }
  clearMessagesAfterDelay() {
    setTimeout(() => {
      this.successMessage = null;
      this.errorMessageApi = null;
    }, 4000); // 4 secondes
  }
  static {
    this.ɵfac = function ProduitsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProduitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_SERVICES_categorie_service__WEBPACK_IMPORTED_MODULE_6__.CategorieService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_7__.ProduitService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_8__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.j), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ProduitsComponent,
      selectors: [["app-produits"]],
      viewQuery: function ProduitsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.popupContainer = _t.first);
        }
      },
      hostBindings: function ProduitsComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_click_HostBindingHandler($event) {
            return ctx._onClickOutside($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveDocument"]);
        }
      },
      decls: 75,
      vars: 24,
      consts: [["popupContainer", ""], ["searchInput", ""], ["fileInput", ""], [1, "toast-container"], ["class", "alert alert-danger toast-message-danger", 4, "ngIf"], ["class", "alert alert-success toast-message-success", 4, "ngIf"], [1, "containerTable"], [1, "tasks-header"], [1, "title"], [1, "actions"], [1, "add-task", 3, "click"], ["title", "importer Excel", 1, "add-task1", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-download"], [1, "bare"], [1, "contentIcon"], ["class", "ri-refresh-line", 3, "click", 4, "ngIf"], ["class", "ri-loader-line ri-spin", 4, "ngIf"], [1, "export-container"], [3, "click"], ["src", "assets/icon/category.png", "alt", "Category Icon", 2, "width", "20px", "height", "20px"], ["class", "popup show", 4, "ngIf"], [1, "iconDrop"], [1, "ri-printer-cloud-line", 3, "click"], ["class", "export-dropdown", 4, "ngIf"], [1, "container_inputSearch", 2, "display", "flex", "align-items", "center", "position", "relative"], [1, "inputSearch", 2, "flex", "1", "position", "relative"], [1, "tags-container", 2, "display", "flex", "flex-wrap", "wrap", "align-items", "center", "padding-left", "35px", "min-height", "40px", "border", "1.5px solid #000", "border-top-left-radius", "5px", "min-width", "250px", "border-bottom-left-radius", "5px", "border-top-right-radius", "0px", "border-bottom-right-radius", "0px", "background", "white", "cursor", "text", 3, "click"], ["class", "tag", "style", "display: flex; align-items: center; background: #e0e0e0; padding: 2px 8px; border-radius: 20px; margin: 2px 4px 2px 0; font-size: 12px; z-index: 12;", 4, "ngIf"], ["type", "text", 2, "border", "none", "outline", "none", "flex", "1", "padding", "5px 0", "min-width", "120px", 3, "ngModelChange", "click", "ngModel", "placeholder"], [1, "ri-search-2-line", 2, "position", "absolute", "left", "10px", "top", "50%", "transform", "translateY(-50%)", "z-index", "1"], ["title", "Trier et filtrer", 1, "trier", 2, "cursor", "pointer", 3, "click"], ["style", "font-size: 18px;", "class", "ri-arrow-down-s-fill", 4, "ngIf"], ["style", "font-size: 18px;", "class", "ri-close-line", 4, "ngIf"], ["class", "filter-dropdown", "style", "position: absolute; top: 100%; right: 0; background: white; \n          border: 1px solid #ccc; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); \n          z-index: 100; width: 100%; margin-top: 5px;", 3, "click", 4, "ngIf"], ["cdkDropList", "", "cdkDropListAutoScroll", "", 1, "container_list_boutique", 3, "cdkDropListDropped", "cdkDropListData"], [1, "content_list_boutique"], [1, "name_boutique"], [1, "all_boutique", 3, "click"], [1, "all_boutique", 2, "display", "flex", "align-items", "center"], ["class", "facture-count", 4, "ngIf"], [4, "ngIf"], [1, "titleTableProduit"], ["style", "font-size: 10px;", 3, "click", 4, "ngFor", "ngForOf"], ["style", "text-align: center; margin-top: 20px;", 4, "ngIf"], ["class", "pager", "aria-label", "Pagination", 4, "ngIf"], ["class", "modal", 4, "ngIf"], [1, "alert", "alert-danger", "toast-message-danger"], [1, "alert", "alert-success", "toast-message-success"], [1, "ri-refresh-line", 3, "click"], [1, "ri-loader-line", "ri-spin"], [1, "popup", "show"], [1, "checkbox-list"], [4, "ngFor", "ngForOf"], ["class", "action-buttons", 4, "ngIf"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel"], [1, "action-buttons"], [1, "cancel-btn", 3, "click"], [1, "delete-btn", 3, "click"], [1, "export-dropdown"], [1, "export-option", 3, "click"], [1, "tag", 2, "display", "flex", "align-items", "center", "background", "#e0e0e0", "padding", "2px 8px", "border-radius", "20px", "margin", "2px 4px 2px 0", "font-size", "12px", "z-index", "12"], [1, "remove-chip", 3, "click"], [1, "ri-arrow-down-s-fill", 2, "font-size", "18px"], [1, "ri-close-line", 2, "font-size", "18px"], [1, "filter-dropdown", 2, "position", "absolute", "top", "100%", "right", "0", "background", "white", "border", "1px solid #ccc", "border-radius", "5px", "box-shadow", "0 2px 10px rgba(0,0,0,0.1)", "z-index", "100", "width", "100%", "margin-top", "5px", 3, "click"], [1, "filter-section", 2, "padding", "10px"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "margin", "0", "font-size", "16px", "color", "#333"], [2, "background", "none", "border", "none", "color", "#0671e4", "cursor", "pointer", "font-size", "13px", 3, "click"], [2, "list-style", "none", "padding", "0", "margin", "10px 0 0 0"], [2, "padding", "8px 12px", "cursor", "pointer", "border-radius", "4px", "margin-bottom", "5px", "transition", "background 0.3s", 3, "click"], [2, "padding", "8px 12px", "cursor", "pointer", "border-radius", "4px", "transition", "background 0.3s", 3, "click"], [1, "facture-count"], [1, "ri-loader-line", "ri-spin", 2, "font-size", "12px"], ["cdkDrag", "", 1, "draggable-item", 3, "click"], [2, "display", "flex", "align-items", "center"], ["class", "ri-error-warning-line warning-icon", 4, "ngIf"], ["class", "barre", 4, "ngIf"], [1, "ri-error-warning-line", "warning-icon"], [1, "barre"], [2, "font-size", "10px", 3, "click"], [3, "innerHTML"], [1, "imgProduit"], ["alt", "Produit", 3, "src"], [1, "description-cell", 3, "mouseover", "mouseout"], ["class", "description-hover", 4, "ngIf"], [1, "modal"], [1, "modal-content", 3, "click"], [1, "description-hover"], ["colspan", "10", 2, "text-align", "center"], [2, "text-align", "center", "margin-top", "20px"], [2, "color", "red"], ["aria-label", "Pagination", 1, "pager"], [1, "pager-info"], [1, "page-size-select", 3, "ngModelChange", "change", "ngModel"], ["value", "5"], ["value", "10"], ["value", "20"], ["value", "50"], [1, "page-info"], [1, "pager-navigation"], ["title", "Premi\u00E8re page", 1, "pager-btn", 3, "click", "disabled"], [1, "ri-skip-back-line"], ["title", "Page pr\u00E9c\u00E9dente", 1, "pager-btn", 3, "click", "disabled"], [1, "ri-arrow-left-s-line"], [1, "page-numbers"], ["class", "page-number", 3, "active", "disabled", "click", 4, "ngFor", "ngForOf"], ["title", "Page suivante", 1, "pager-btn", 3, "click", "disabled"], [1, "ri-arrow-right-s-line"], ["title", "Derni\u00E8re page", 1, "pager-btn", 3, "click", "disabled"], [1, "ri-skip-forward-line"], [1, "page-number", 3, "click", "disabled"], [1, "close", 3, "click"], [1, "container_modal_excel"], [1, "import-instructions"], [2, "font-size", "12px"], [1, "columns-info"], [2, "color", "red", "font-weight", "bold"], [1, "download-template", 3, "click"], [1, "ri-download-line"], [1, "left_import_excel"], [1, "double_input2"], [1, "champ_input"], ["autocomplete", "off", "type", "text", "placeholder", "S\u00E9lectionner vos boutiques", "matInput", "", "readonly", "", 1, "input_focus", 2, "cursor", "pointer", 3, "click", "value"], ["for", "boutiqueId", 1, "label"], [1, "ri-check-double-line"], ["class", "boutique-selection-panel", 4, "ngIf"], [1, "file-upload-area", 3, "click"], ["type", "file", "accept", ".xlsx, .xls", "hidden", "", 3, "change"], [1, "ri-upload-cloud-2-line"], [1, "modal-actions"], [1, "btn-cancel", 3, "click"], [1, "btn-import", 3, "click", "disabled"], ["class", "import-status", 3, "success", "error", 4, "ngIf"], [1, "boutique-selection-panel"], [1, "panel-header"], [1, "close-btn", 3, "click"], [1, "panel-body"], [1, "boutique-item", "select-all"], ["type", "checkbox", 3, "change", "checked"], ["class", "boutique-item", 4, "ngFor", "ngForOf"], [1, "panel-footer"], [1, "btn-confirm", 3, "click"], [1, "boutique-item"], [1, "import-status"], ["class", "import-errors", 4, "ngIf"], [1, "import-errors"]],
      template: function ProduitsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProduitsComponent_div_1_Template, 2, 1, "div", 4)(2, ProduitsComponent_div_2_Template, 2, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 6)(4, "div", 7)(5, "h1", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Produits / Services");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 9)(8, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.goToAddProduit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Ajouter un produit");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.openExcelImportModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, ProduitsComponent_i_14_Template, 1, 0, "i", 15)(15, ProduitsComponent_i_15_Template, 1, 0, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 17, 0)(19, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_Template_i_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.togglePopup());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, ProduitsComponent_div_21_Template, 4, 2, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 17)(24, "div", 21)(25, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_Template_i_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.toggleExportDropdown());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, ProduitsComponent_div_26_Template, 7, 0, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 24)(28, "div", 25)(29, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_Template_div_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.focusSearchInput());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, ProduitsComponent_span_30_Template, 4, 1, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "input", 28, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function ProduitsComponent_Template_input_ngModelChange_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.searchText, $event) || (ctx.searchText = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProduitsComponent_Template_input_ngModelChange_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.applyFilters());
          })("click", function ProduitsComponent_Template_input_click_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_Template_div_click_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            ctx.toggleFilterDropdown();
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, ProduitsComponent_i_35_Template, 1, 0, "i", 31)(36, ProduitsComponent_i_36_Template, 1, 0, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, ProduitsComponent_div_37_Template, 13, 8, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("cdkDropListDropped", function ProduitsComponent_Template_div_cdkDropListDropped_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.onDrop($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 35)(40, "div", 36)(41, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProduitsComponent_Template_div_click_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.selectBoutique(null));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "p", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, " Toutes les boutiques ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, ProduitsComponent_span_44_Template, 2, 1, "span", 39)(45, ProduitsComponent_span_45_Template, 2, 0, "span", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, ProduitsComponent_ng_container_46_Template, 2, 1, "ng-container", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "table")(48, "thead")(49, "tr", 41)(50, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "Photo");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "Nom produit");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "Cat\u00E9gorie");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61, "Prix Vente");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, "Co\u00FBt du produit");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65, "Unit\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](68, ProduitsComponent_ng_container_68_Template, 3, 0, "ng-container", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](70, ProduitsComponent_tr_70_Template, 23, 20, "tr", 42)(71, ProduitsComponent_tr_71_Template, 3, 0, "tr", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](72, ProduitsComponent_div_72_Template, 3, 0, "div", 43)(73, ProduitsComponent_div_73_Template, 26, 7, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](74, ProduitsComponent_div_74_Template, 106, 10, "div", 45);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.errorMessageApi);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isPopupVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showExportDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selectedFilters.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.searchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", ctx.getSearchPlaceholder());
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.showFilterDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showFilterDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showFilterDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("cdkDropListData", ctx.boutiques);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("name_boutique_active", ctx.selectedBoutique === null);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoadingCounts && ctx.totalAllProducts > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoadingCounts);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ((ctx.boutiques == null ? null : ctx.boutiques.length) || 0) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.selectedBoutique);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.filteredProducts());
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.tasks.length > 0 && ctx.filteredProducts().length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showNoProductsMessage && !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.totalElements > ctx.pageSize);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showExcelImportModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.SlicePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.M, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.M, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule,
      // RouterLink,
      _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput,
      // MatPaginatorModule n'est plus nécessaire avec la pagination personnalisée
      _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_3__.CustomNumberPipe, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__.DragDropModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__.CdkDrag],
      styles: ["@charset \"UTF-8\";\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-family: \"Poppins\", sans-serif;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n  padding: 14px;\n  font-family: \"Poppins\", sans-serif;\n  color: #222222;\n}\n\ntr[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.containerTable[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.tasks-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.add-task[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  background-color: #0672E4;\n  color: #ffffff;\n  border-radius: 5px;\n  border: none;\n}\n\n.add-task1[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  margin-left: 10px;\n  border: none;\n  border-radius: 8px;\n  background-color: #ffffff;\n}\n.add-task1[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.add-task1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0672E4;\n}\n\n.contentIcon[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  display: flex;\n  align-items: center;\n}\n\n.contentIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.contentIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0672E4;\n  transition: all 0.5s ease;\n}\n\n.contentIcon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: all 0.5s ease;\n}\n\n.contentIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  filter: hue-rotate(180deg) saturate(200%) brightness(0.8);\n}\n\n.bare[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 30px;\n  background-color: #eee;\n}\n\n.inputSearch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n\n.inputSearch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-left: 10px;\n  border-radius: 5px;\n}\n\n.inputSearch[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 15px;\n  font-size: 17px;\n}\n\n.export-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.export-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 180px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.389);\n  z-index: 1;\n  top: 100%;\n  left: 0;\n  border-radius: 5px;\n}\n\n.export-dropdown[_ngcontent-%COMP%]   .export-option[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  cursor: pointer;\n}\n\n.export-dropdown[_ngcontent-%COMP%]   .export-option[_ngcontent-%COMP%]:hover {\n  background-color: #f1f1f1;\n}\n\n.iconDrop[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.iconMontreArrow[_ngcontent-%COMP%] {\n  margin-left: -30px;\n}\n\n.iconMontreArrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n\n\n.imgProduit[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n\n.imgProduit[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n  object-fit: cover;\n  border-radius: 50%;\n  transition: transform 0.2s;\n}\n\n.imgProduit[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1); \n\n}\n\n\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  max-width: 80%;\n  max-height: 80%;\n  display: flex;\n  justify-content: center;\n}\n\n.modal-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 80vh;\n  border-radius: 10px;\n}\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n\n\n.modal-content[_ngcontent-%COMP%] {\n  background: #fff;\n  width: 100%;\n  max-width: 600px;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n\n\n\n.modal-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: #f1f1f1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0;\n}\n\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n\n.modal-close[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 24px;\n}\n\n\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 16px;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n}\n\n\n\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px; \n\n}\n\n\n\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(233, 213, 33, 0.1960784314); \n\n  border-radius: 10px; \n\n}\n\n\n\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(6, 113, 228, 0.2431372549); \n\n  border-radius: 10px;\n}\n\n\n\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(4, 101, 205, 0.337254902);\n}\n\n\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  margin-top: 10px;\n}\n\n\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.formulaire[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.inpuemail[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 250px;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0px;\n  transition: all 0.3s;\n  font-size: 12px;\n  background: none;\n  color: #695c5c;\n}\n\n.add_category[_ngcontent-%COMP%] {\n  border: none;\n  margin-top: 5px;\n  cursor: pointer;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: -6px;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 14px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 15px;\n  transition: all 0.2s ease-in-out;\n}\n\n.double_input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.input_focus2[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 250px;\n  height: 60px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin-top: 10px;\n  transition: all 0.3s;\n  font-size: 18px;\n  background-color: rgba(220, 220, 220, 0.2980392157);\n  color: #777474;\n  resize: none;\n  border-radius: 5px;\n  padding-top: 10px;\n  border-bottom: 1px solid rgb(53, 50, 50);\n}\n\n.input_focus2[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.champ_input2[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: 15px;\n  pointer-events: none;\n  color: rgb(66, 56, 56);\n}\n\n.input_focus2[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus2[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: -10px;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 14px;\n  padding: 0;\n}\n\n.input_focus2[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus2[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 15px;\n  transition: all 0.2s ease-in-out;\n}\n\n.champ_input_margin[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n\n.input_file[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 300px;\n  margin-top: 10px;\n}\n\n.custom-file-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  overflow: hidden;\n  width: 100%;\n  cursor: pointer;\n}\n\n.custom-file-button[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: white;\n  padding: 8px 12px;\n  font-size: 14px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n}\n\n.custom-file-text[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #555;\n}\n\n.btn-save[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  margin-right: 10px;\n  background-color: #0672E4;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  margin-right: 10px;\n  background-color: rgba(255, 0, 0, 0.7019607843);\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n}\n\n.btn-save[_ngcontent-%COMP%]:hover {\n  background-color: #0465cd;\n  transition: all 0.5s;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #ff0000;\n  transition: all 0.5s;\n}\n\n.iconArrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 20px;\n}\n\n.iconArrow[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  justify-content: right;\n  margin-top: 20px;\n}\n\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 0;\n  margin-top: 20px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border: 1px solid #e9ecef;\n}\n.pager[_ngcontent-%COMP%]   .pager-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 14px;\n  color: #6c757d;\n}\n.pager[_ngcontent-%COMP%]   .pager-info[_ngcontent-%COMP%]   .page-size-select[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  background: white;\n  font-size: 14px;\n  cursor: pointer;\n}\n.pager[_ngcontent-%COMP%]   .pager-info[_ngcontent-%COMP%]   .page-size-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0671e4;\n  box-shadow: 0 0 0 2px rgba(6, 113, 228, 0.25);\n}\n.pager[_ngcontent-%COMP%]   .pager-info[_ngcontent-%COMP%]   .page-info[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n.pager[_ngcontent-%COMP%]   .pager-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.pager[_ngcontent-%COMP%]   .pager-navigation[_ngcontent-%COMP%]   .pager-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: 1px solid #ced4da;\n  background: white;\n  color: #495057;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pager[_ngcontent-%COMP%]   .pager-navigation[_ngcontent-%COMP%]   .pager-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0671e4;\n  color: white;\n  border-color: #0671e4;\n}\n.pager[_ngcontent-%COMP%]   .pager-navigation[_ngcontent-%COMP%]   .pager-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  background: #f8f9fa;\n}\n.pager[_ngcontent-%COMP%]   .pager-navigation[_ngcontent-%COMP%]   .pager-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.pager[_ngcontent-%COMP%]   .pager-navigation[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin: 0 10px;\n}\n.pager[_ngcontent-%COMP%]   .pager-navigation[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 36px;\n  height: 36px;\n  border: 1px solid #ced4da;\n  background: white;\n  color: #495057;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 14px;\n  font-weight: 500;\n}\n.pager[_ngcontent-%COMP%]   .pager-navigation[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e9ecef;\n  border-color: #adb5bd;\n}\n.pager[_ngcontent-%COMP%]   .pager-navigation[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   .page-number.active[_ngcontent-%COMP%] {\n  background: #0671e4;\n  color: white;\n  border-color: #0671e4;\n}\n.pager[_ngcontent-%COMP%]   .pager-navigation[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%]   .page-number[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  background: #f8f9fa;\n}\n\n@media (max-width: 768px) {\n  .pager[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n    padding: 15px;\n  }\n  .pager[_ngcontent-%COMP%]   .pager-info[_ngcontent-%COMP%] {\n    order: 2;\n  }\n  .pager[_ngcontent-%COMP%]   .pager-navigation[_ngcontent-%COMP%] {\n    order: 1;\n  }\n}\n.error-message[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: red;\n  font-weight: bold;\n  margin-top: -6px;\n}\n\n.error-message2[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: red;\n  font-weight: bold;\n  margin-top: 7px;\n}\n\n.btn_add_categoryDiv[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  justify-content: center;\n}\n\n.btn_add_categoryDiv2[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  justify-content: center;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.double_input2[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.martopBottom[_ngcontent-%COMP%] {\n  height: 90px;\n}\n\n.btn_add_category[_ngcontent-%COMP%] {\n  border: none;\n  padding-left: 15px;\n}\n\n.btn_add_category2[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 2px;\n}\n\n.btn_add_category[_ngcontent-%COMP%]:hover {\n  background-color: #f2efef;\n  transition: all 0.5s;\n}\n\n.messageCate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: red;\n}\n\n\n\n.modal-overlay2[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n\n\n.modal-content2[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 30px;\n  border-radius: 10px;\n  text-align: center;\n  width: 90%;\n  max-width: 400px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_fadeInDown 0.3s ease;\n  position: relative;\n}\n\n\n\n.popup-header2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.popup-img2[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 85px;\n  margin-bottom: 10px;\n}\n\n.popup-icon2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px;\n}\n\n.modal-content2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5em;\n  color: #333;\n}\n\n.modal-content2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: #555;\n  margin: 20px 0;\n}\n\n\n\n.modal-content2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  font-size: 1em;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n\n\n\n.modal-content2.error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #e53935;\n}\n\n.modal-content2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n}\n\n.modal-content2.error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #d32f2f;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-overlay-category[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n.modal-content-category[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 30px;\n  border-radius: 10px;\n  text-align: center;\n  width: 90%;\n  max-width: 400px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_fadeInDown 0.3s ease;\n  position: relative;\n}\n\n\n\n.modal-header-category[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.modal-content-category[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5em;\n  color: #333;\n}\n\n.img_input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.roudel_img[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  width: 50px;\n  height: 50px;\n  border-radius: 4px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  position: relative;\n  top: 4px;\n}\n\nimg.roudel[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 2px;\n  transition: transform 0.2s;\n}\n\n.tableProduit[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.titleTableProduit[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-family: \"Poppins\", sans-serif;\n  color: #222222;\n}\n\n.input_focus_taille[_ngcontent-%COMP%] {\n  font-size: 14px;\n  cursor: pointer;\n  color: #0672E4;\n}\n\n.img_input_detail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n\n.roudel_img_detail[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 4px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  position: relative;\n  top: 4px;\n}\n\nimg.roudel_detail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 2px;\n  transition: transform 0.2s;\n}\n\n.input_focus_detail[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus_detail[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.title_produit_detail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.iconEdit[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n\n.iconEdit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #0672E4;\n}\n\n.input-non-editing[_ngcontent-%COMP%] {\n  cursor: no-drop;\n}\n\n.input-editing[_ngcontent-%COMP%] {\n  cursor: text;\n}\n\n\n\n.container_file[_ngcontent-%COMP%] {\n  width: 150px;\n  border-radius: 10px;\n  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  gap: 5px;\n  background-color: rgba(0, 110, 255, 0.041);\n  margin-bottom: 10px;\n}\n\n.header_file[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 140px;\n  border: 1px dashed rgba(6, 113, 228, 0.6156862745);\n  border-radius: 10px;\n  flex-direction: column;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n\n.header_file[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.header_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n}\n\n.footer_file[_ngcontent-%COMP%] {\n  background-color: rgba(0, 110, 255, 0.075);\n  width: 140px;\n  height: 35px;\n  padding: 5px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: black;\n  border: none;\n  margin-top: 3px;\n}\n\n.footer_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  font-size: 10px;\n}\n\n.footer_file[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 7px;\n}\n\n#file[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.btn_save_edit[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n}\n\n.btn_save_edit[_ngcontent-%COMP%]   .save_edit[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border: none;\n  background-color: #0672E4;\n  color: #fff;\n  border-radius: 5px;\n  margin-right: 15px;\n}\n\n.btn_save_edit[_ngcontent-%COMP%]   .annule_edit[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border: none;\n  background-color: rgba(255, 0, 0, 0.713);\n  color: #fff;\n  border-radius: 5px;\n}\n\n.btn_save_edit[_ngcontent-%COMP%]   .save_edit[_ngcontent-%COMP%]:hover {\n  background-color: #0465cd;\n  transition: all 0.5s;\n}\n\n.btn_save_edit[_ngcontent-%COMP%]   .annule_edit[_ngcontent-%COMP%]:hover {\n  background-color: rgb(255, 0, 0);\n  transition: all 0.5s;\n}\n\n.inputSize[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #0672E4;\n}\n\n.labelColor[_ngcontent-%COMP%] {\n  color: #000 !important;\n}\n\n.updateDate[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.description-cell[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n\n.description-hover[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #333;\n  color: white;\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 12px;\n  width: 200px;\n  z-index: 10;\n}\n\n.description-cell[_ngcontent-%COMP%]:hover   .description-hover[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.container_list_boutique[_ngcontent-%COMP%] {\n  scrollbar-width: auto;\n  overflow: auto;\n  scrollbar-color: #888 #f1f1f1;\n  scrollbar-width: thin;\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 2px;\n  height: 3px;\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1; \n\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: blue; \n\n  border-radius: 4px; \n\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: red; \n\n}\n\n.name_boutique[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  margin: 30px 0 10px;\n}\n\n.name_boutique[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n}\n\n.name_boutique_active[_ngcontent-%COMP%] {\n  background-color: #E9D421;\n  border-radius: 5px;\n  color: #000000;\n}\n\n.barre[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.2470588235);\n  margin: 8px 0;\n}\n\n.name_boutique[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 8px 16px;\n  margin: 4px 0;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  border-radius: 4px;\n}\n.name_boutique[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n  transform: translateY(-1px);\n}\n.name_boutique[_ngcontent-%COMP%]   p.name_boutique_active[_ngcontent-%COMP%] {\n  background-color: #E9D421;\n  color: #000 !important;\n}\n.name_boutique[_ngcontent-%COMP%]   .no-boutiques-message[_ngcontent-%COMP%] {\n  color: #666;\n  font-style: italic;\n  padding: 10px;\n  text-align: center;\n}\n\n.warning-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  color: #ff0000;\n  font-size: 14px;\n}\n\n.container_list_boutique[_ngcontent-%COMP%] {\n  max-height: 400px; \n\n  overflow-y: auto; \n\n  scroll-behavior: smooth; \n\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  background: #e4cb0d;\n  border-radius: 5px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 40px;\n  padding: 10px;\n  font-weight: bold;\n}\n\n.trier[_ngcontent-%COMP%] {\n  border-top: 1.5px solid #000;\n  border-right: 1.5px solid #000;\n  border-bottom: 1.5px solid #000;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n.remove-chip[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  cursor: pointer;\n}\n.remove-chip[_ngcontent-%COMP%]:hover {\n  color: #ff4444;\n}\n\n.filter-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 100;\n  width: 300px;\n  padding: 15px;\n}\n.filter-dropdown[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  display: flex;\n  flex-direction: column;\n}\n.filter-dropdown[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  padding: 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  background: white;\n  cursor: pointer;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed !important;\n  pointer-events: none;\n}\n\n.facture-count[_ngcontent-%COMP%] {\n  background-color: #ddd;\n  color: #000;\n  border-radius: 50%;\n  font-size: 10px;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px;\n  margin-left: 10px;\n}\n\n\n\n.draggable-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 100%;\n  max-width: 700px;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n}\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  font-size: 24px;\n  cursor: pointer;\n  color: #666;\n}\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #333;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 15px;\n}\n\n.import-instructions[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  border-left: 4px solid #0671e4;\n  padding: 15px;\n  margin-bottom: 20px;\n  border-radius: 4px;\n}\n.import-instructions[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #0671e4;\n  font-size: 13px;\n}\n.import-instructions[_ngcontent-%COMP%]   .columns-info[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  padding: 10px;\n  background-color: #fff;\n  border: 1px solid #eee;\n  border-radius: 4px;\n  height: 175px;\n  overflow-y: scroll;\n}\n.import-instructions[_ngcontent-%COMP%]   .columns-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  margin-bottom: 0;\n}\n.import-instructions[_ngcontent-%COMP%]   .columns-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  line-height: 1.4;\n  font-size: 12px !important;\n}\n.import-instructions[_ngcontent-%COMP%]   .columns-info[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 2px;\n  height: 2px;\n}\n.import-instructions[_ngcontent-%COMP%]   .columns-info[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n}\n.import-instructions[_ngcontent-%COMP%]   .columns-info[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.import-instructions[_ngcontent-%COMP%]   .download-template[_ngcontent-%COMP%] {\n  background-color: #0671e4;\n  color: white;\n  border: none;\n  padding: 10px 15px;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 10px;\n}\n.import-instructions[_ngcontent-%COMP%]   .download-template[_ngcontent-%COMP%]:hover {\n  background-color: #055cb9;\n}\n\n.file-upload-area[_ngcontent-%COMP%] {\n  border: 2px dashed #ddd;\n  border-radius: 8px;\n  padding: 40px 20px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n  margin: 20px 0;\n}\n.file-upload-area[_ngcontent-%COMP%]:hover, .file-upload-area.active[_ngcontent-%COMP%] {\n  border-color: #0671e4;\n  background-color: #f0f8ff;\n}\n.file-upload-area[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #0671e4;\n  margin-bottom: 15px;\n}\n.file-upload-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  font-size: 16px;\n}\n.file-upload-area[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #777;\n}\n\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 20px;\n}\n.modal-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  color: #333;\n  border: 1px solid #ddd;\n  padding: 10px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.modal-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #eaeaea;\n}\n.modal-actions[_ngcontent-%COMP%]   .btn-import[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.modal-actions[_ngcontent-%COMP%]   .btn-import[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background-color: #218838;\n}\n.modal-actions[_ngcontent-%COMP%]   .btn-import[disabled][_ngcontent-%COMP%] {\n  background-color: #cccccc;\n  cursor: not-allowed;\n}\n\n.import-status[_ngcontent-%COMP%] {\n  padding: 15px;\n  border-radius: 4px;\n  margin-top: 20px;\n}\n.import-status.success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  border: 1px solid #c3e6cb;\n  color: #155724;\n}\n.import-status.error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  color: #721c24;\n}\n\n.import-errors[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  max-height: 200px;\n  overflow-y: auto;\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 10px;\n  border-radius: 4px;\n}\n.import-errors[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.import-errors[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  margin-bottom: 0;\n}\n\n.boutique-selection-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 400px;\n  margin-top: 8px;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n  padding: 12px;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .boutique-item[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-bottom: 1px solid #eee;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .boutique-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  width: 100%;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .boutique-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: right;\n  border-top: 1px solid #eee;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%]:hover {\n  background-color: #055cb3;\n}\n\n.container_modal_excel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.btn-import[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 1.2em;\n}\n\n.popup[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 37px;\n  right: 0%;\n  width: 240px;\n  padding: 12px 14px;\n  background-color: #ffffff;\n  border-radius: 12px;\n  border: 1px solid #e0e0e0;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n  display: none;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.25s ease-in-out;\n  z-index: 1000;\n}\n\n.popup.show[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.popup[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  right: 2%;\n  transform: translateX(-50%);\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 10px solid #ffffff;\n  filter: drop-shadow(0 -1px 1px rgba(0, 0, 0, 0.1));\n}\n\n.checkbox-list[_ngcontent-%COMP%] {\n  max-height: 150px;\n  overflow-y: auto;\n  margin-bottom: 12px;\n  padding-right: 4px;\n}\n\n\n\n.checkbox-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.checkbox-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #c1c1c1;\n  border-radius: 3px;\n}\n\n.checkbox-list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 6px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background-color 0.2s;\n}\n\n.checkbox-list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n\n.checkbox-list[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 10px;\n  font-size: 13px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background-color 0.2s, color 0.2s;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  color: #333;\n}\n\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n\n.delete-btn[_ngcontent-%COMP%] {\n  background-color: #ff5252;\n  color: white;\n}\n\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e53935;\n}\n\n\n\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 60px;\n  right: 35px;\n  z-index: 9999;\n}\n\n\n\n.toast-message-warning[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  padding: 15px;\n  border-radius: 5px;\n  background-color: #77eb87;\n  border: 1px solid #ACCEBC;\n  color: #856404;\n  z-index: 1000;\n  max-width: 400px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n}\n\n.toast-message-success[_ngcontent-%COMP%] {\n  background-color: #77eb87;\n  border: 1px solid #ACCEBC;\n  color: #000000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n.toast-message-danger[_ngcontent-%COMP%] {\n  background-color: #F3D8DA;\n  border: 1px solid #E7B1B6;\n  color: #000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeInOut {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  20% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(2px); \n\n  }\n}\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.o_pager_previous[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.o_pager_next[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 0 5px;\n}\n\n.d-print-none[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n}\n\n.d-print-none[_ngcontent-%COMP%]   .o_pager_previous[_ngcontent-%COMP%] {\n  border-top: 1px solid #000;\n  border-right: none;\n  border-bottom: 1px solid #000;\n  border-left: 1px solid #000;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.d-print-none[_ngcontent-%COMP%]   .o_pager_next[_ngcontent-%COMP%] {\n  border-top: 1px solid #000;\n  border-left: 1px solid #000;\n  border-bottom: 1px solid #000;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1aXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNFLGtDQUFBO0FBRUo7O0FBRUE7RUFDRSwwREFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQU1BO0VBQ0UseUJBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUhGOztBQUtBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRkY7QUFLRTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQUhKO0FBTUU7RUFDQSxjQUFBO0FBSkY7O0FBWUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBVEY7O0FBYUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFWRjs7QUFhQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQVZGOztBQWNBO0VBQ0UseUJBQUE7QUFYRjs7QUFjQTtFQUNFLHlEQUFBO0FBWEY7O0FBa0JBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQWZGOztBQWtCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUFoQkY7O0FBbUJBO0VBQ0Us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QXpNRjs7QUE2TUE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0FBMU1GOztBQXdORSw0REFBQTtBQUNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUFyTko7RUF1TkU7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFyTko7RUF1TkU7SUFDRSxVQUFBO0VBck5KO0VBdU5FO0lBQ0UsVUFBQTtJQUNBLDBCQUFBLEVBQUEsMkRBQUE7RUFyTko7QUFDRjtBQXdORTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUF0Tko7O0FBeU5FOztFQUVBLGVBQUE7RUFDQSxjQUFBO0FBdE5GOztBQXlOQTtFQUNFLHNCQUFBO0FBdE5GOztBQXlOQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQXRORjs7QUF5TkE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FBdE5GIiwiZmlsZSI6InByb2R1aXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcblxufVxuXG50aCwgdGQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDk0O1xuICBwYWRkaW5nOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG50ciB7XG4gIGZvbnQtc2l6ZTogMTNweCFpbXBvcnRhbnQ7XG59XG5cbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuLy8gdHIge1xuLy8gICAgIGZvbnQtc2l6ZTogMTNweDtcbi8vIH1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4uY29udGFpbmVyVGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udGFza3MtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hY3Rpb25zIGl7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uYWRkLXRhc2sge1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5hZGQtdGFzazEge1xuICBwYWRkaW5nOiAycHggMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBpOmhvdmVyIHtcbiAgY29sb3I6ICMwNjcyRTQ7XG59XG5cblxufVxuXG5cblxuLmNvbnRlbnRJY29uIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLmNvbnRlbnRJY29uIGl7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250ZW50SWNvbiAgaTpob3ZlciB7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuXG5cbi5jb250ZW50SWNvbiBpbWcge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuXG4uY29udGVudEljb24gaTpob3ZlciBpbWcge1xuICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMTgwZGVnKSBzYXR1cmF0ZSgyMDAlKSBicmlnaHRuZXNzKDAuOCk7XG59XG5cblxuXG5cblxuLmJhcmUge1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbi5pbnB1dFNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5wdXRTZWFyY2ggaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmlucHV0U2VhcmNoIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLy8gZHJvcCBkb213IFxuXG4uZXhwb3J0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZXhwb3J0LWRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBtaW4td2lkdGg6IDE4MHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zODkpO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmV4cG9ydC1kcm9wZG93biAuZXhwb3J0LW9wdGlvbiB7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZXhwb3J0LWRyb3Bkb3duIC5leHBvcnQtb3B0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cblxuLmljb25Ecm9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmljb25Nb250cmVBcnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAtMzBweDtcbn1cblxuLmljb25Nb250cmVBcnJvdyBpe1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi8qIFN0eWxlIGRlIGwnaW1hZ2UgY2lyY3VsYWlyZSAqL1xuLmltZ1Byb2R1aXQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltZ1Byb2R1aXQgaW1nIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuXG4uaW1nUHJvZHVpdDpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIEVmZmV0IHpvb20gYXUgc3Vydm9sICovXG59XG5cblxuLyogLS0tIFN0eWxlcyBwb3VyIGxlIG1vZGFsIC0tLSAqL1xuLm1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIC8vcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIG1heC1oZWlnaHQ6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tb2RhbC1jb250ZW50IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogODB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogT3ZlcmxheSBkdSBtb2RhbCAqL1xuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi8qIENvbnRlbnUgZHUgbW9kYWwgKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIEVuLXTDqnRlIGR1IG1vZGFsICovXG4ubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG5cbi5tb2RhbC1oZWFkZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm1vZGFsLWNsb3NlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi8qIENvcnBzIGR1IG1vZGFsICovXG4ubW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBTdHlsZSBkZSBsYSBzY3JvbGxiYXIgKHBvdXIgQ2hyb21lLCBFZGdlIGV0IFNhZmFyaSkgKi9cbi5tb2RhbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA0cHg7IC8qIExhcmdldXIgZGUgbGEgc2Nyb2xsYmFyICovXG59XG5cbi8qIFN0eWxlIGR1IHRyYWNrIChhcnJpw6hyZS1wbGFuIGRlIGxhIHNjcm9sbGJhcikgKi9cbi5tb2RhbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNlOWQ1MjEzMjsgLyogQ291bGV1ciBkZSBmb25kICovXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qIENvaW5zIGFycm9uZGlzICovXG59XG5cbi8qIFN0eWxlIGR1IHRodW1iIChsYSBwYXJ0aWUgcXVpIGJvdWdlKSAqL1xuLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzA2NzFlNDNlOyAvKiBDb3VsZXVyIGR1IGN1cnNldXIgKi9cbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogQ2hhbmdlbWVudCBkZSBjb3VsZXVyIGF1IHN1cnZvbCAqL1xuLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzA0NjVjZDU2O1xufVxuXG4vKiBQaWVkIGRlIHBhZ2UgZHUgbW9kYWwgKi9cbi5tb2RhbC1mb290ZXIge1xuICBwYWRkaW5nOiAxNnB4O1xuICAvL2JhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC8vanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIGZvcm11bGFpcmUgKi9cblxuLmNoYW1wX2lucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZm9ybXVsYWlyZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlucHVlbWFpbCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5pbnB1dF9mb2N1cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDQ5cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBmb250LXNpemU6IDEycHg7XG4gIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzY5NWM1Yztcbn1cblxuLmFkZF9jYXRlZ29yeSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2hhbXBfaW5wdXQgLmxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIycHg7XG4gIGxlZnQ6IDRweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5pbnB1dF9mb2N1czpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG5cbi5pbnB1dF9mb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbi5pbnB1dF9mb2N1czpmb2N1cyArIC5sYWJlbCB7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICB0b3A6IC02cHg7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaW5wdXRfZm9jdXM6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmRvdWJsZV9pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vLyAuZG91YmxlX2lucHV0MiB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyB9XG5cbi5pbnB1dF9mb2N1czIge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgZm9udC1zaXplOiAxOHB4O1xuICAvLyBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2RjZGM0YztcbiAgY29sb3I6ICM3Nzc0NzQ7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbn1cblxuLmlucHV0X2ZvY3VzMjpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uY2hhbXBfaW5wdXQyIC5sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xufVxuXG4uaW5wdXRfZm9jdXMyOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuLmlucHV0X2ZvY3VzMjpmb2N1cyArIC5sYWJlbCB7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICB0b3A6IC0xMHB4O1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaW5wdXRfZm9jdXMyOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5pbnB1dF9mb2N1czI6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmNoYW1wX2lucHV0X21hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4vLyBpbWFnZSBcbi5pbnB1dF9maWxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jdXN0b20tZmlsZS1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmN1c3RvbS1maWxlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jdXN0b20tZmlsZS10ZXh0IHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmJ0bi1zYXZlIHtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnRuLWNhbmNlbCB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDBiMztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnRuLXNhdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ2NWNkO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4uYnRuLWNhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5pY29uQXJyb3cgaXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAyMHB4O1xufVxuXG4uaWNvbkFycm93IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucGFnaW5hdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi8vIFBhZ2luYXRpb24gcGVyc29ubmFsaXPDqWVcbi5wYWdlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG5cbiAgLnBhZ2VyLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuXG4gICAgLnBhZ2Utc2l6ZS1zZWxlY3Qge1xuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXItY29sb3I6ICMwNjcxZTQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDYsIDExMywgMjI4LCAwLjI1KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGFnZS1pbmZvIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICB9XG4gIH1cblxuICAucGFnZXItbmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuXG4gICAgLnBhZ2VyLWJ0biB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDY3MWU0O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzA2NzFlNDtcbiAgICAgIH1cblxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICAgIH1cblxuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGFnZS1udW1iZXJzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAycHg7XG4gICAgICBtYXJnaW46IDAgMTBweDtcblxuICAgICAgLnBhZ2UtbnVtYmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1pbi13aWR0aDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNhZGI1YmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzA2NzFlNDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDY3MWU0O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIGRlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wYWdlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE1cHg7XG4gICAgcGFkZGluZzogMTVweDtcblxuICAgIC5wYWdlci1pbmZvIHtcbiAgICAgIG9yZGVyOiAyO1xuICAgIH1cblxuICAgIC5wYWdlci1uYXZpZ2F0aW9uIHtcbiAgICAgIG9yZGVyOiAxO1xuICAgIH1cbiAgfVxufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IC02cHg7XG59XG5cbi5lcnJvci1tZXNzYWdlMiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLy8gLmJ0bl9hZGRfY2F0ZWdvcnkge1xuLy8gICB3aWR0aDogNDAlO1xuLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vICAgYm9yZGVyOiBub25lO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuLy8gICBjb2xvcjogI2ZmZjtcbi8vIH1cblxuLy8gLmJ0bl9hZGRfY2F0ZWdvcnk6aG92ZXIge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ2NWNkO1xuLy8gfVxuXG4uYnRuX2FkZF9jYXRlZ29yeURpdiB7XG4gIG1hcmdpbjogMTBweCAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0bl9hZGRfY2F0ZWdvcnlEaXYyIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG59XG5cbi5kb3VibGVfaW5wdXQyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWFydG9wQm90dG9tIHtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG4uYnRuX2FkZF9jYXRlZ29yeSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4uYnRuX2FkZF9jYXRlZ29yeTIge1xuICBib3JkZXI6IG5vbmU7XG4gIC8vcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5idG5fYWRkX2NhdGVnb3J5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZWZlZjtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cbiAgXG5cbi5tZXNzYWdlQ2F0ZSBwIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLy8gUG9wIHVwXG5cbi8qIE92ZXJsYXkgZGUgbGEgcG9wdXAgKi9cbi5tb2RhbC1vdmVybGF5MiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG5cbi8qIENvbnRlbnUgZGUgbGEgcG9wdXAgKi9cbi5tb2RhbC1jb250ZW50MiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsMCwwLDAuMyk7XG4gIGFuaW1hdGlvbjogZmFkZUluRG93biAwLjNzIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogSGVhZGVyIGRlIGxhIHBvcHVwIGF2ZWMgbCdpbWFnZSBldCBsZSB0aXRyZSAqL1xuLnBvcHVwLWhlYWRlcjIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucG9wdXAtaW1nMiB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDg1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wb3B1cC1pY29uMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tb2RhbC1jb250ZW50MiBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5tb2RhbC1jb250ZW50MiBwIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjNTU1O1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLyogU3R5bGUgZHUgYm91dG9uICovXG4ubW9kYWwtY29udGVudDIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xufVxuLyogU3R5bGUgZHUgYm91dG9uICovXG4vLyAuYnRuT0tPSyB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4vLyAgIGNvbG9yOiAjZmZmO1xuLy8gICBib3JkZXI6IG5vbmU7XG4vLyAgIHBhZGRpbmc6IDEwcHggMjBweDtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcbi8vIH1cblxuLm1vZGFsLWNvbnRlbnQyLmVycm9yIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTM5MzU7XG59XG5cbi5tb2RhbC1jb250ZW50MiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xufVxuXG4ubW9kYWwtY29udGVudDIuZXJyb3IgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzMmYyZjtcbn1cblxuLyogQW5pbWF0aW9uIGQnYXBwYXJpdGlvbiAqL1xuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG5cblxuLm1vZGFsLW92ZXJsYXktY2F0ZWdvcnkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIENvbnRlbnUgZGUgbGEgcG9wdXAgKi9cbi5tb2RhbC1jb250ZW50LWNhdGVnb3J5IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgYW5pbWF0aW9uOiBmYWRlSW5Eb3duIDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBIZWFkZXIgZGUgbGEgcG9wdXAgYXZlYyBsJ2ltYWdlIGV0IGxlIHRpdHJlICovXG4ubW9kYWwtaGVhZGVyLWNhdGVnb3J5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQtY2F0ZWdvcnkgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4vLyAuZXJyb3ItbWVzc2FnZS1jYXRlZ29yeSB7XG4vLyAgIGZvbnQtc2l6ZTogMTNweDtcbi8vICAgY29sb3I6IHJlZDtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIG1hcmdpbi10b3A6IDEwcHg7XG4vLyB9XG5cbi5pbWdfaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5yb3VkZWxfaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNHB4O1xufVxuXG5pbWcucm91ZGVse1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cblxuLnRhYmxlUHJvZHVpdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpdGxlVGFibGVQcm9kdWl0IHRoIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4vLyAudGFibGVQcm9kdWl0IHRke1xuLy8gICBmb250LXNpemU6IDExcHg7XG4vLyB9XG5cbi8vIERldGFpbFxuXG4uaW5wdXRfZm9jdXNfdGFpbGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMDY3MkU0O1xufVxuXG5cblxuLmltZ19pbnB1dF9kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5cbi5yb3VkZWxfaW1nX2RldGFpbCB7XG4gIC8vbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG59XG5cbmltZy5yb3VkZWxfZGV0YWlse1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cblxuLmlucHV0X2ZvY3VzX2RldGFpbDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbi5pbnB1dF9mb2N1c19kZXRhaWw6Zm9jdXMgKyAubGFiZWwge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLy8gdGl0bGVfcHJvZHVpdF9kZXRhaWxcblxuLnRpdGxlX3Byb2R1aXRfZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmljb25FZGl0IHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5pY29uRWRpdCBpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzA2NzJFNDtcbiAgLy8gY3Vyc29yOiBuby1kcm9wO1xufVxuXG4uaW5wdXQtbm9uLWVkaXRpbmcge1xuICBjdXJzb3I6IG5vLWRyb3A7XG59XG5cbi5pbnB1dC1lZGl0aW5nIHtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuXG5cbi8qIEZyb20gVWl2ZXJzZS5pbyBieSBZYXlhMTIwODUgKi8gXG4uY29udGFpbmVyX2ZpbGUge1xuICAvLyBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4O1xuICBnYXA6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTAsIDI1NSwgMC4wNDEpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaGVhZGVyX2ZpbGUge1xuICAvLyBmbGV4OiAxO1xuICBoZWlnaHQ6IDE0MHB4O1xuICB3aWR0aDogMTQwcHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjMDY3MWU0OWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xufVxuXG4uaGVhZGVyX2ZpbGUgaW1ne1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG5cbi5oZWFkZXJfZmlsZSBzdmcge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uaGVhZGVyX2ZpbGUgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZm9vdGVyX2ZpbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA3NSk7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmZvb3Rlcl9maWxlIHAge1xuICBtYXJnaW46IDAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5mb290ZXJfZmlsZSBpIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cblxuLy8gLmZvb3RlciBzdmcge1xuLy8gICBoZWlnaHQ6IDEzMCU7XG4vLyAgIGZpbGw6IHJveWFsYmx1ZTtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MCwgNjYsIDY2LCAwLjEwMyk7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgcGFkZGluZzogMnB4O1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGJveC1zaGFkb3c6IDAgMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjIwNSk7XG4vLyB9XG5cbi8vIC5mb290ZXJfZmlsZSBwIHtcbi8vICAgZmxleDogMTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gfVxuXG4jZmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oZWFkZXJfZmlsZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSBcblxuLmJ0bl9zYXZlX2VkaXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4uYnRuX3NhdmVfZWRpdCAuc2F2ZV9lZGl0IHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uYnRuX3NhdmVfZWRpdCAuYW5udWxlX2VkaXQge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC43MTMpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnRuX3NhdmVfZWRpdCAuc2F2ZV9lZGl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0NjVjZDtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuLmJ0bl9zYXZlX2VkaXQgLmFubnVsZV9lZGl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5pbnB1dFNpemUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMDY3MkU0O1xufVxuXG4ubGFiZWxDb2xvciB7XG4gIGNvbG9yOiAjMDAwIWltcG9ydGFudDtcbn1cblxuLnVwZGF0ZURhdGUge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uZGVzY3JpcHRpb24tY2VsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGVzY3JpcHRpb24taG92ZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5kZXNjcmlwdGlvbi1jZWxsOmhvdmVyIC5kZXNjcmlwdGlvbi1ob3ZlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29udGFpbmVyX2xpc3RfYm91dGlxdWUge1xuICBzY3JvbGxiYXItd2lkdGg6IGF1dG87XG4gIG92ZXJmbG93OiBhdXRvOyBcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjODg4ICNmMWYxZjE7XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDsgXG59XG5cbi5jb250YWluZXJfbGlzdF9ib3V0aXF1ZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMnB4OyBcbiAgaGVpZ2h0OiAzcHg7XG59XG5cbi5jb250YWluZXJfbGlzdF9ib3V0aXF1ZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyAvKiBjb3VsZXVyIGR1IGZvbmQgZGUgbGEgc2Nyb2xsYmFyICovXG59XG5cbi5jb250YWluZXJfbGlzdF9ib3V0aXF1ZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiBibHVlOyAvKiBjb3VsZXVyIGR1IGN1cnNldXIgKi9cbiAgYm9yZGVyLXJhZGl1czogNHB4OyAvKiBhcnJvbmRpciBsZXMgYm9yZHMgZHUgY3Vyc2V1ciAqL1xufVxuXG4uY29udGFpbmVyX2xpc3RfYm91dGlxdWU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmVkOyAvKiBjb3VsZXVyIGR1IGN1cnNldXIgYXUgc3Vydm9sICovXG59XG5cbi5uYW1lX2JvdXRpcXVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMzBweCAwIDEwcHg7XG59XG5cbi5uYW1lX2JvdXRpcXVlIHAge1xuICBwYWRkaW5nOiA1cHggMTVweDtcbn1cblxuLm5hbWVfYm91dGlxdWVfYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RDQyMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmJhcnJlIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwM2Y7XG4gIC8vIG1hcmdpbjogMCAxcHggMTZweDtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxuLm5hbWVfYm91dGlxdWUge1xuICBwIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgbWFyZ2luOiA0cHggMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMDUpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIH1cblxuICAgICYubmFtZV9ib3V0aXF1ZV9hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RDQyMTsgLy8gQ291bGV1ciBkZSBmb25kIHF1YW5kIGFjdGlmXG4gICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50OyAvLyBGb3JjZSBsYSBjb3VsZXVyIGJsYW5jaGUgcXVhbmQgYWN0aWZcbiAgICB9XG4gIH1cblxuICAubm8tYm91dGlxdWVzLW1lc3NhZ2Uge1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC8vIC5zdXNwZW5kZWQtYm91dGlxdWUge1xuICAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gICBvcGFjaXR5OiAwLjc7XG4gIC8vICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIC8vIH1cbiAgXG4gIC8vIC53YXJuaW5nLWljb24ge1xuICAvLyAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIC8vICAgY29sb3I6ICNmZjk4MDA7XG4gIC8vICAgZm9udC1zaXplOiAxNHB4O1xuICAvLyB9XG5cblxufVxuXG4vLyAuc3VzcGVuZGVkLWJvdXRpcXVlIHtcbi8vICAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIG9wYWNpdHk6IDAuNjtcbiAgXG4vLyAgICY6OmFmdGVyIHtcbi8vICAgICBjb250ZW50OiBcIlwiO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICBsZWZ0OiAwO1xuLy8gICAgIHRvcDogNTAlO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGJhY2tncm91bmQ6ICNmZjAwMDA7XG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuLy8gICB9XG4vLyB9XG5cbi53YXJuaW5nLWljb24ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBjb2xvcjogI2ZmMDAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29udGFpbmVyX2xpc3RfYm91dGlxdWUge1xuICBtYXgtaGVpZ2h0OiA0MDBweDsgLyogSGF1dGV1ciBtYXggcG91ciBhY3RpdmVyIGxlIHNjcm9sbCAqL1xuICBvdmVyZmxvdy15OiBhdXRvOyAvKiBQZXJtZXQgbGUgc2Nyb2xsIHZlcnRpY2FsICovXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOyAvKiBSZW5kIGxlIHNjcm9sbCBmbHVpZGUgKi9cbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBiYWNrZ3JvdW5kOiAjZTRjYjBkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udHJpZXIge1xuICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCAjMDAwOyBcbiAgYm9yZGVyLXJpZ2h0OiAxLjVweCBzb2xpZCAjMDAwOyBcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgIzAwMDsgXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7IFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyBcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlbW92ZS1jaGlwIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjZmY0NDQ0O1xuICB9XG59XG5cblxuLmZpbHRlci1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuXG4gIC5maWx0ZXItb3B0aW9uIHtcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuZmlsdGVyLXNlbGVjdCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZmFjdHVyZS1jb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWluLXdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4vKiBQb3VyIGFsaWduZXIgY29ycmVjdGVtZW50IGxlcyDDqWzDqW1lbnRzICovXG4uZHJhZ2dhYmxlLWl0ZW0gcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xuXG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuY2xvc2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxNXB4O1xuICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uaW1wb3J0LWluc3RydWN0aW9ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzA2NzFlNDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gIGgzIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiAjMDY3MWU0O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC5jb2x1bW5zLWluZm8ge1xuICAgIG1hcmdpbjogMTVweCAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBoZWlnaHQ6IDE3NXB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxuICAgIHVsIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIHdpZHRoOiAycHg7XG4gICAgICBoZWlnaHQ6IDJweDtcbiAgICB9XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgLy8gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuXG4gIC5kb3dubG9hZC10ZW1wbGF0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzFlNDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU1Y2I5O1xuICAgIH1cbiAgfVxufVxuXG4uZmlsZS11cGxvYWQtYXJlYSB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBtYXJnaW46IDIwcHggMDtcblxuICAmOmhvdmVyLCAmLmFjdGl2ZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDY3MWU0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY4ZmY7XG4gIH1cblxuICBpIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgY29sb3I6ICMwNjcxZTQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIHNtYWxsIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxufVxuXG4ubW9kYWwtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcblxuICAuYnRuLWNhbmNlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBjb2xvcjogIzMzMztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICAgIH1cbiAgfVxuXG4gIC5idG4taW1wb3J0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE4ODM4O1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cbiAgfVxufVxuXG4uaW1wb3J0LXN0YXR1cyB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcblxuICAmLnN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGVkZGE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MzZTZjYjtcbiAgICBjb2xvcjogIzE1NTcyNDtcbiAgfVxuXG4gICYuZXJyb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y1YzZjYjtcbiAgICBjb2xvcjogIzcyMWMyNDtcbiAgfVxufVxuXG4uaW1wb3J0LWVycm9ycyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICBoNCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgdWwge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG5cblxuLmJvdXRpcXVlLXNlbGVjdGlvbi1wYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcblxuICAucGFuZWwtaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBoNCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cblxuICAgICAgLmNsb3NlLWJ0biB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgfVxuXG4gIC5wYW5lbC1ib2R5IHtcbiAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIHBhZGRpbmc6IDEycHg7XG5cbiAgICAgIC5ib3V0aXF1ZS1pdGVtIHtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG5cbiAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgLnBhbmVsLWZvb3RlciB7XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcblxuICAgICAgLmJ0bi1jb25maXJtIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU1Y2IzO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxufVxuXG4uY29udGFpbmVyX21vZGFsX2V4Y2VsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uYnRuLWltcG9ydCBpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4ucG9wdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzdweDtcbiAgcmlnaHQ6IDAlO1xuICB3aWR0aDogMjQwcHg7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ucG9wdXAuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLnBvcHVwOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICByaWdodDogMiU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZmZmZmZmO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgLTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcbn1cblxuLmNoZWNrYm94LWxpc3Qge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuXG4vKiBTY3JvbGxiYXIgbWluaW1hbCAqL1xuLmNoZWNrYm94LWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cbi5jaGVja2JveC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmNoZWNrYm94LWxpc3QgbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuLmNoZWNrYm94LWxpc3QgbGFiZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4uY2hlY2tib3gtbGlzdCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEwcHg7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyBidXR0b24ge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMsIGNvbG9yIDAuMnM7XG59XG5cbi5jYW5jZWwtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5jYW5jZWwtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbn1cblxuLmRlbGV0ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MjUyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kZWxldGUtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MzkzNTtcbn1cblxuXG5cbi8vVG9hc3RcblxuIC8qIENvbnRlbmV1ciBkdSB0b2FzdCAqL1xuLnRvYXN0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA2MHB4O1xuICByaWdodDogMzVweDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLyogQWpvdXRleiBkYW5zIHZvdHJlIGZpY2hpZXIgQ1NTICovXG4udG9hc3QtbWVzc2FnZS13YXJuaW5nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmYzY2Q7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNmZmVlYmE7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3N2ViODc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0NFQkM7XG4gIGNvbG9yOiAjODU2NDA0O1xuICB6LWluZGV4OiAxMDAwO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwwLDAsMC4xKTtcblxuICBhbmltYXRpb246IGZhZGVJbk91dCA0cyBlYXNlLWluLW91dDtcbn1cblxuLnRvYXN0LW1lc3NhZ2Utc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3N2ViODc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0NFQkM7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5PdXQgNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG59XG4gIFxuLy90b2FzdCBzdWNjZXNzXG4udG9hc3QtbWVzc2FnZS1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNEOERBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTdCMUI2O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluT3V0IDRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuXG5cbiAgLy8gQWpvdXRlciBsJ2FuaW1hdGlvbiBwb3VyIHRvdXMgbGVzIHR5cGVzIGQnYWxlcnRlc1xuICAuYWxlcnQge1xuICAgIC8vIC4uLiBzdHlsZXMgZXhpc3RhbnRzXG4gICAgXG4gICAgJi13YXJuaW5nIHtcbiAgICAgIEBleHRlbmQgLmFsZXJ0O1xuICAgICAgLy8gLi4uIHN0eWxlcyBzcMOpY2lmaXF1ZXNcbiAgICB9XG4gIH1cbiAgXG4gIC8qIEFuaW1hdGlvbiBwb3VyIGZhaXJlIGFwcGFyYcOudHJlIGV0IGRpc3BhcmHDrnRyZSBsZSB0b2FzdCAqL1xuICBAa2V5ZnJhbWVzIGZhZGVJbk91dCB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICA4MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7IC8qIExlIHRvYXN0IGRpc3BhcmHDrnQgYXZlYyB1biBsw6lnZXIgbW91dmVtZW50IHZlcnMgbGUgYmFzICovXG4gICAgfVxuICB9ICBcblxuICAucGFnZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gIH1cblxuICAub19wYWdlcl9wcmV2aW91cyBpLFxuLm9fcGFnZXJfbmV4dCBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLmQtcHJpbnQtbm9uZSBidXR0b257XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbi5kLXByaW50LW5vbmUgLm9fcGFnZXJfcHJldmlvdXMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cblxuLmQtcHJpbnQtbm9uZSAub19wYWdlcl9uZXh0IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9wcm9kdWl0cy9wcm9kdWl0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDRSxrQ0FBQTtBQUVKOztBQUVBO0VBQ0UsMERBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFNQTtFQUNFLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFIRjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUZGO0FBS0U7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUFISjtBQU1FO0VBQ0EsY0FBQTtBQUpGOztBQVlBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVRGOztBQWFBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBVkY7O0FBYUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFWRjs7QUFjQTtFQUNFLHlCQUFBO0FBWEY7O0FBY0E7RUFDRSx5REFBQTtBQVhGOztBQWtCQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFmRjs7QUFrQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FBaEJGOztBQW1CQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFoQkY7O0FBcUJBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpREFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQWxCRjs7QUFxQkE7RUFDRSx5QkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFsQkY7O0FBcUJBO0VBQ0Usa0JBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsZUFBQTtBQWxCRjs7QUFxQkEsZ0NBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFsQkY7O0FBcUJBO0VBQ0UscUJBQUEsRUFBQSx5QkFBQTtBQWxCRjs7QUFzQkEsaUNBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsaUJBQUE7RUFFQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBcEJGOztBQXVCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBcEJGOztBQXVCQSxxQkFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQXBCRjs7QUF1QkEscUJBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0FBcEJGOztBQXVCQSxxQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBcEJGOztBQXVCQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBcEJGOztBQXVCQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBcEJGOztBQXVCQSxtQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXBCRjs7QUF1QkEsd0RBQUE7QUFDQTtFQUNFLFVBQUEsRUFBQSw0QkFBQTtBQXBCRjs7QUF1QkEsa0RBQUE7QUFDQTtFQUNFLDRDQUFBLEVBQUEsb0JBQUE7RUFDQSxtQkFBQSxFQUFBLG1CQUFBO0FBcEJGOztBQXVCQSx5Q0FBQTtBQUNBO0VBQ0UsMkNBQUEsRUFBQSx1QkFBQTtFQUNBLG1CQUFBO0FBcEJGOztBQXVCQSxvQ0FBQTtBQUNBO0VBQ0UsMENBQUE7QUFwQkY7O0FBdUJBLDBCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBRUEsYUFBQTtFQUNBLGdCQUFBO0FBckJGOztBQXlCQSxlQUFBO0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBdkJGOztBQTBCQTtFQUNFLGtCQUFBO0FBdkJGOztBQTBCQTtFQUNFLGdCQUFBO0FBdkJGOztBQTBCQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtBQXhCRjs7QUEyQkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUF4QkY7O0FBMEJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FBdkJGOztBQTBCQTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBdkJGOztBQTJCQTs7RUFFRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsVUFBQTtBQXhCRjs7QUEyQkE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBeEJGOztBQWdDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFFQSxtREFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0FBOUJGOztBQWlDQTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBOUJGOztBQWlDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBOUJGOztBQWlDQTs7RUFFRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUE5QkY7O0FBaUNBO0VBQ0UsVUFBQTtBQTlCRjs7QUFpQ0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUE5QkY7O0FBaUNBO0VBQ0UsaUJBQUE7QUE5QkY7O0FBa0NBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUEvQkY7O0FBa0NBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUEvQkY7O0FBa0NBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBL0JGOztBQWtDQTtFQUNFLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUEvQkY7O0FBa0NBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQS9CRjs7QUFrQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBL0JGOztBQWtDQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7QUEvQkY7O0FBa0NBO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtBQS9CRjs7QUFrQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBL0JGOztBQWtDQTtFQUNFLGVBQUE7QUEvQkY7O0FBa0NBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQS9CRjs7QUFtQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQWhDRjtBQWtDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQWhDSjtBQWtDSTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFoQ047QUFrQ007RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtBQWhDUjtBQW9DSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQWxDTjtBQXNDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFwQ0o7QUFzQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQXBDTjtBQXNDTTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBcENSO0FBdUNNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFyQ1I7QUF3Q007RUFDRSxlQUFBO0FBdENSO0FBMENJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUF4Q047QUEwQ007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXhDUjtBQTBDUTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUF4Q1Y7QUEyQ1E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQXpDVjtBQTRDUTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBMUNWOztBQWtEQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtFQS9DRjtFQWlERTtJQUNFLFFBQUE7RUEvQ0o7RUFrREU7SUFDRSxRQUFBO0VBaERKO0FBQ0Y7QUFvREE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFsREY7O0FBcURBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFsREY7O0FBa0VBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0FBL0RGOztBQWtFQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUEvREY7O0FBa0VBO0VBQ0Usa0JBQUE7QUEvREY7O0FBa0VBO0VBQ0UsWUFBQTtBQS9ERjs7QUFrRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUEvREY7O0FBa0VBO0VBQ0UsWUFBQTtFQUVBLGtCQUFBO0FBaEVGOztBQW1FQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7QUFoRUY7O0FBb0VBO0VBQ0UsVUFBQTtBQWpFRjs7QUFzRUEsd0JBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFuRUY7O0FBdUVBLHdCQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FBcEVGOztBQXVFQSxnREFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXBFRjs7QUF1RUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBcEVGOztBQXVFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFwRUY7O0FBdUVBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQXBFRjs7QUF1RUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFwRUY7O0FBdUVBLG9CQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFwRUY7O0FBc0VBLG9CQUFBO0FBWUE7RUFDRSx5QkFBQTtBQTlFRjs7QUFpRkE7RUFDRSx5QkFBQTtBQTlFRjs7QUFpRkE7RUFDRSx5QkFBQTtBQTlFRjs7QUFpRkEsMkJBQUE7QUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBOUVGO0VBZ0ZBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBOUVGO0FBQ0Y7QUFtRkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBSUEsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBakZGOztBQW9GQSx3QkFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQWpGRjs7QUFvRkEsZ0RBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFqRkY7O0FBb0ZBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQWpGRjs7QUEyRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUF4RkY7O0FBNEZBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBekZGOztBQTRGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBekZGOztBQTRGQTtFQUNFLGVBQUE7QUF6RkY7O0FBNEZBO0VBQ0UsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtBQXpGRjs7QUFrR0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUEvRkY7O0FBb0dBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFqR0Y7O0FBcUdBO0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQW5HRjs7QUFzR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQW5HRjs7QUFzR0E7O0VBRUUsV0FBQTtBQW5HRjs7QUF3R0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFyR0Y7O0FBd0dBO0VBQ0UsaUJBQUE7QUFyR0Y7O0FBd0dBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFyR0Y7O0FBeUdBO0VBQ0UsZUFBQTtBQXRHRjs7QUF5R0E7RUFDRSxZQUFBO0FBdEdGOztBQTBHQSxpQ0FBQTtBQUNBO0VBRUUsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0FBeEdGOztBQTJHQTtFQUVFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlEQUFBO0FBekdGOztBQTRHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQXpHRjs7QUE0R0E7RUFDRSxhQUFBO0FBekdGOztBQTRHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQXpHRjs7QUE0R0E7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUExR0Y7O0FBNkdBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FBMUdGOztBQTZHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQTFHRjs7QUE0SEE7RUFDRSxhQUFBO0FBekhGOztBQTRIQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBekhGOztBQTRIQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQXpIRjs7QUE0SEE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBekhGOztBQTRIQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBekhGOztBQTRIQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7QUF6SEY7O0FBNEhBO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtBQXpIRjs7QUE0SEE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQXpIRjs7QUE0SEE7RUFDRSxzQkFBQTtBQXpIRjs7QUE0SEE7RUFDRSxZQUFBO0FBekhGOztBQTJIQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQXhIRjs7QUEySEE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBeEhGOztBQTJIQTtFQUNFLGNBQUE7QUF4SEY7O0FBMkhBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQXhIRjs7QUE0SEE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQXpIRjs7QUE0SEE7RUFDRSxtQkFBQSxFQUFBLG9DQUFBO0FBekhGOztBQTRIQTtFQUNFLGdCQUFBLEVBQUEsdUJBQUE7RUFDQSxrQkFBQSxFQUFBLGtDQUFBO0FBekhGOztBQTRIQTtFQUNFLGVBQUEsRUFBQSxpQ0FBQTtBQXpIRjs7QUE0SEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBekhGOztBQTRIQTtFQUNFLGlCQUFBO0FBekhGOztBQTRIQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBekhGOztBQTRIQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsNkNBQUE7RUFFQSxhQUFBO0FBMUhGOztBQThIRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUEzSEo7QUE2SEk7RUFDRSxxQ0FBQTtFQUNBLDJCQUFBO0FBM0hOO0FBOEhJO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtBQTVITjtBQWdJRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQTlISjs7QUFnS0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBN0pGOztBQWdLQTtFQUNFLGlCQUFBLEVBQUEsdUNBQUE7RUFDQSxnQkFBQSxFQUFBLDhCQUFBO0VBQ0EsdUJBQUEsRUFBQSwwQkFBQTtBQTdKRjs7QUFnS0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBN0pGOztBQWdLQTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUE3SkY7O0FBZ0tBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBN0pGO0FBOEpFO0VBQ0ksY0FBQTtBQTVKTjs7QUFpS0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUE5SkY7QUFnS0U7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBOUpKO0FBaUtFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBL0pKOztBQW1LQTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FBaEtGOztBQW1LQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFoS0Y7O0FBbUtBLDJDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFoS0Y7O0FBbUtBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQWhLRjtBQWtLRTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBaEtKO0FBa0tJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQWhLTjtBQW1LSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQWpLTjs7QUFzS0E7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFuS0Y7QUFxS0U7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFuS0o7QUFzS0U7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQXBLSjtBQXNLSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFwS047QUFzS007RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFwS1I7QUF3S0k7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQXRLTjtBQXdLSTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7QUF0S047QUF5S0k7RUFDRSx1QkFBQTtBQXZLTjtBQTJLRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQXpLSjtBQTJLSTtFQUNFLHlCQUFBO0FBektOOztBQThLQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQTNLRjtBQTZLRTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUEzS0o7QUE4S0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBNUtKO0FBK0tFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUE3S0o7QUFnTEU7RUFDRSxXQUFBO0FBOUtKOztBQWtMQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQS9LRjtBQWlMRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUEvS0o7QUFpTEk7RUFDRSx5QkFBQTtBQS9LTjtBQW1MRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWpMSjtBQW1MSTtFQUNFLHlCQUFBO0FBakxOO0FBb0xJO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQWxMTjs7QUF1TEE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXBMRjtBQXNMRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBcExKO0FBdUxFO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFyTEo7O0FBeUxBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUF0TEY7QUF3TEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUF0TEo7QUF5TEU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBdkxKOztBQTRMQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXpMRjtBQTJMRTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBekxOO0FBMkxNO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QUF6TFY7QUE0TE07RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQTFMVjtBQThMRTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBNUxOO0FBOExNO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0FBNUxWO0FBOExVO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUE1TGQ7QUErTFU7RUFDSSxpQkFBQTtBQTdMZDtBQWtNRTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBaE1OO0FBa01NO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBaE1WO0FBa01VO0VBQ0kseUJBQUE7QUFoTWQ7O0FBc01BO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQW5NRjs7QUFzTUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFuTUY7O0FBc01BO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtBQW5NRjs7QUFzTUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBbk1GOztBQXNNQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtEQUFBO0FBbk1GOztBQXNNQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBbk1GOztBQXNNQSxzQkFBQTtBQUNBO0VBQ0UsVUFBQTtBQW5NRjs7QUFxTUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBbE1GOztBQXFNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFsTUY7O0FBcU1BO0VBQ0UseUJBQUE7QUFsTUY7O0FBcU1BO0VBQ0UsaUJBQUE7QUFsTUY7O0FBcU1BO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQWxNRjs7QUFxTUE7RUFDRSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0FBbE1GOztBQXFNQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQWxNRjs7QUFxTUE7RUFDRSx5QkFBQTtBQWxNRjs7QUFxTUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFsTUY7O0FBcU1BO0VBQ0UseUJBQUE7QUFsTUY7O0FBeU1DLHVCQUFBO0FBQ0Q7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBdE1GOztBQXlNQSxtQ0FBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBR0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUVBLG1DQUFBO0FBek1GOztBQTRNQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsVUFBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7QUF6TUY7O0FBNk1BO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSw0QkFBQTtBQTFNRjs7QUF3TkUsNERBQUE7QUFDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBck5KO0VBdU5FO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBck5KO0VBdU5FO0lBQ0UsVUFBQTtFQXJOSjtFQXVORTtJQUNFLFVBQUE7SUFDQSwwQkFBQSxFQUFBLDJEQUFBO0VBck5KO0FBQ0Y7QUF3TkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBdE5KOztBQXlORTs7RUFFQSxlQUFBO0VBQ0EsY0FBQTtBQXRORjs7QUF5TkE7RUFDRSxzQkFBQTtBQXRORjs7QUF5TkE7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUF0TkY7O0FBeU5BO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBQXRORjtBQUZBLG9yOURBQW9yOUQiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuXG59XG5cbnRoLCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkOTQ7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbnRyIHtcbiAgZm9udC1zaXplOiAxM3B4IWltcG9ydGFudDtcbn1cblxudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG4vLyB0ciB7XG4vLyAgICAgZm9udC1zaXplOiAxM3B4O1xuLy8gfVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuXG50cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi5jb250YWluZXJUYWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi50YXNrcy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFjdGlvbnMgaXtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5hZGQtdGFzayB7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xufVxuLmFkZC10YXNrMSB7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGk6aG92ZXIge1xuICBjb2xvcjogIzA2NzJFNDtcbn1cblxuXG59XG5cblxuXG4uY29udGVudEljb24ge1xuICBtYXJnaW46IDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4uY29udGVudEljb24gaXtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRlbnRJY29uICBpOmhvdmVyIHtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG5cblxuLmNvbnRlbnRJY29uIGltZyB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG5cbi5jb250ZW50SWNvbiBpOmhvdmVyIGltZyB7XG4gIGZpbHRlcjogaHVlLXJvdGF0ZSgxODBkZWcpIHNhdHVyYXRlKDIwMCUpIGJyaWdodG5lc3MoMC44KTtcbn1cblxuXG5cblxuXG4uYmFyZSB7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuLmlucHV0U2VhcmNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnB1dFNlYXJjaCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW5wdXRTZWFyY2ggaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4vLyBkcm9wIGRvbXcgXG5cbi5leHBvcnQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5leHBvcnQtZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1pbi13aWR0aDogMTgwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM4OSk7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZXhwb3J0LWRyb3Bkb3duIC5leHBvcnQtb3B0aW9uIHtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5leHBvcnQtZHJvcGRvd24gLmV4cG9ydC1vcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4uaWNvbkRyb3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaWNvbk1vbnRyZUFycm93IHtcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xufVxuXG4uaWNvbk1vbnRyZUFycm93IGl7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLyogU3R5bGUgZGUgbCdpbWFnZSBjaXJjdWxhaXJlICovXG4uaW1nUHJvZHVpdCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1nUHJvZHVpdCBpbWcge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG5cbi5pbWdQcm9kdWl0OmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogRWZmZXQgem9vbSBhdSBzdXJ2b2wgKi9cbn1cblxuXG4vKiAtLS0gU3R5bGVzIHBvdXIgbGUgbW9kYWwgLS0tICovXG4ubW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLy9wYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgbWF4LWhlaWdodDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vZGFsLWNvbnRlbnQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKiBPdmVybGF5IGR1IG1vZGFsICovXG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLyogQ29udGVudSBkdSBtb2RhbCAqL1xuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogRW4tdMODwqp0ZSBkdSBtb2RhbCAqL1xuLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubW9kYWwtaGVhZGVyIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5tb2RhbC1jbG9zZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4vKiBDb3JwcyBkdSBtb2RhbCAqL1xuLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAxNnB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLyogU3R5bGUgZGUgbGEgc2Nyb2xsYmFyIChwb3VyIENocm9tZSwgRWRnZSBldCBTYWZhcmkpICovXG4ubW9kYWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNHB4OyAvKiBMYXJnZXVyIGRlIGxhIHNjcm9sbGJhciAqL1xufVxuXG4vKiBTdHlsZSBkdSB0cmFjayAoYXJyacODwqhyZS1wbGFuIGRlIGxhIHNjcm9sbGJhcikgKi9cbi5tb2RhbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNlOWQ1MjEzMjsgLyogQ291bGV1ciBkZSBmb25kICovXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qIENvaW5zIGFycm9uZGlzICovXG59XG5cbi8qIFN0eWxlIGR1IHRodW1iIChsYSBwYXJ0aWUgcXVpIGJvdWdlKSAqL1xuLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzA2NzFlNDNlOyAvKiBDb3VsZXVyIGR1IGN1cnNldXIgKi9cbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogQ2hhbmdlbWVudCBkZSBjb3VsZXVyIGF1IHN1cnZvbCAqL1xuLm1vZGFsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzA0NjVjZDU2O1xufVxuXG4vKiBQaWVkIGRlIHBhZ2UgZHUgbW9kYWwgKi9cbi5tb2RhbC1mb290ZXIge1xuICBwYWRkaW5nOiAxNnB4O1xuICAvL2JhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC8vanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIGZvcm11bGFpcmUgKi9cblxuLmNoYW1wX2lucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZm9ybXVsYWlyZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlucHVlbWFpbCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5pbnB1dF9mb2N1cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDQ5cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBmb250LXNpemU6IDEycHg7XG4gIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzY5NWM1Yztcbn1cblxuLmFkZF9jYXRlZ29yeSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2hhbXBfaW5wdXQgLmxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIycHg7XG4gIGxlZnQ6IDRweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5pbnB1dF9mb2N1czpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG5cbi5pbnB1dF9mb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbi5pbnB1dF9mb2N1czpmb2N1cyArIC5sYWJlbCB7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICB0b3A6IC02cHg7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaW5wdXRfZm9jdXM6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmRvdWJsZV9pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vLyAuZG91YmxlX2lucHV0MiB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyB9XG5cbi5pbnB1dF9mb2N1czIge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgZm9udC1zaXplOiAxOHB4O1xuICAvLyBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2RjZGM0YztcbiAgY29sb3I6ICM3Nzc0NzQ7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbn1cblxuLmlucHV0X2ZvY3VzMjpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uY2hhbXBfaW5wdXQyIC5sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xufVxuXG4uaW5wdXRfZm9jdXMyOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuLmlucHV0X2ZvY3VzMjpmb2N1cyArIC5sYWJlbCB7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICB0b3A6IC0xMHB4O1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaW5wdXRfZm9jdXMyOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5pbnB1dF9mb2N1czI6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmNoYW1wX2lucHV0X21hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4vLyBpbWFnZSBcbi5pbnB1dF9maWxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jdXN0b20tZmlsZS1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmN1c3RvbS1maWxlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jdXN0b20tZmlsZS10ZXh0IHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmJ0bi1zYXZlIHtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnRuLWNhbmNlbCB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDBiMztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnRuLXNhdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ2NWNkO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4uYnRuLWNhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5pY29uQXJyb3cgaXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAyMHB4O1xufVxuXG4uaWNvbkFycm93IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucGFnaW5hdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi8vIFBhZ2luYXRpb24gcGVyc29ubmFsaXPDg8KpZVxuLnBhZ2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcblxuICAucGFnZXItaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG5cbiAgICAucGFnZS1zaXplLXNlbGVjdCB7XG4gICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzA2NzFlNDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoNiwgMTEzLCAyMjgsIDAuMjUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wYWdlLWluZm8ge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIH1cbiAgfVxuXG4gIC5wYWdlci1uYXZpZ2F0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG5cbiAgICAucGFnZXItYnRuIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogMzZweDtcbiAgICAgIGhlaWdodDogMzZweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwNjcxZTQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDY3MWU0O1xuICAgICAgfVxuXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgICAgfVxuXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wYWdlLW51bWJlcnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDJweDtcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xuXG4gICAgICAucGFnZS1udW1iZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWluLXdpZHRoOiAzNnB4O1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2FkYjViZDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDY3MWU0O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwNjcxZTQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgZGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBhZ2VyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgLnBhZ2VyLWluZm8ge1xuICAgICAgb3JkZXI6IDI7XG4gICAgfVxuXG4gICAgLnBhZ2VyLW5hdmlnYXRpb24ge1xuICAgICAgb3JkZXI6IDE7XG4gICAgfVxuICB9XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogLTZweDtcbn1cblxuLmVycm9yLW1lc3NhZ2UyIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4vLyAuYnRuX2FkZF9jYXRlZ29yeSB7XG4vLyAgIHdpZHRoOiA0MCU7XG4vLyAgIHBhZGRpbmc6IDEwcHggMDtcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gICBib3JkZXI6IG5vbmU7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4vLyAgIGNvbG9yOiAjZmZmO1xuLy8gfVxuXG4vLyAuYnRuX2FkZF9jYXRlZ29yeTpob3ZlciB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwNDY1Y2Q7XG4vLyB9XG5cbi5idG5fYWRkX2NhdGVnb3J5RGl2IHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnRuX2FkZF9jYXRlZ29yeURpdjIge1xuICBtYXJnaW46IDEwcHggMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbn1cblxuLmRvdWJsZV9pbnB1dDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXJ0b3BCb3R0b20ge1xuICBoZWlnaHQ6IDkwcHg7XG59XG5cbi5idG5fYWRkX2NhdGVnb3J5IHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5idG5fYWRkX2NhdGVnb3J5MiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgLy9wYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmJ0bl9hZGRfY2F0ZWdvcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJlZmVmO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuICBcblxuLm1lc3NhZ2VDYXRlIHAge1xuICBjb2xvcjogcmVkO1xufVxuXG4vLyBQb3AgdXBcblxuLyogT3ZlcmxheSBkZSBsYSBwb3B1cCAqL1xuLm1vZGFsLW92ZXJsYXkyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cblxuLyogQ29udGVudSBkZSBsYSBwb3B1cCAqL1xuLm1vZGFsLWNvbnRlbnQyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgYW5pbWF0aW9uOiBmYWRlSW5Eb3duIDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBIZWFkZXIgZGUgbGEgcG9wdXAgYXZlYyBsJ2ltYWdlIGV0IGxlIHRpdHJlICovXG4ucG9wdXAtaGVhZGVyMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wb3B1cC1pbWcyIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnBvcHVwLWljb24yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQyIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogIzMzMztcbn1cblxuLm1vZGFsLWNvbnRlbnQyIHAge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICM1NTU7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4vKiBTdHlsZSBkdSBib3V0b24gKi9cbi5tb2RhbC1jb250ZW50MiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG59XG4vKiBTdHlsZSBkdSBib3V0b24gKi9cbi8vIC5idG5PS09LIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbi8vICAgY29sb3I6ICNmZmY7XG4vLyAgIGJvcmRlcjogbm9uZTtcbi8vICAgcGFkZGluZzogMTBweCAyMHB4O1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xuLy8gfVxuXG4ubW9kYWwtY29udGVudDIuZXJyb3IgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MzkzNTtcbn1cblxuLm1vZGFsLWNvbnRlbnQyIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG59XG5cbi5tb2RhbC1jb250ZW50Mi5lcnJvciBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyZjJmO1xufVxuXG4vKiBBbmltYXRpb24gZCdhcHBhcml0aW9uICovXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cblxuXG4ubW9kYWwtb3ZlcmxheS1jYXRlZ29yeSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogQ29udGVudSBkZSBsYSBwb3B1cCAqL1xuLm1vZGFsLWNvbnRlbnQtY2F0ZWdvcnkge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLDAsMCwwLjMpO1xuICBhbmltYXRpb246IGZhZGVJbkRvd24gMC4zcyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIEhlYWRlciBkZSBsYSBwb3B1cCBhdmVjIGwnaW1hZ2UgZXQgbGUgdGl0cmUgKi9cbi5tb2RhbC1oZWFkZXItY2F0ZWdvcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubW9kYWwtY29udGVudC1jYXRlZ29yeSBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi8vIC5lcnJvci1tZXNzYWdlLWNhdGVnb3J5IHtcbi8vICAgZm9udC1zaXplOiAxM3B4O1xuLy8gICBjb2xvcjogcmVkO1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgbWFyZ2luLXRvcDogMTBweDtcbi8vIH1cblxuLmltZ19pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLnJvdWRlbF9pbWcge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG59XG5cbmltZy5yb3VkZWx7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuXG4udGFibGVQcm9kdWl0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGl0bGVUYWJsZVByb2R1aXQgdGgge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi8vIC50YWJsZVByb2R1aXQgdGR7XG4vLyAgIGZvbnQtc2l6ZTogMTFweDtcbi8vIH1cblxuLy8gRGV0YWlsXG5cbi5pbnB1dF9mb2N1c190YWlsbGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMwNjcyRTQ7XG59XG5cblxuXG4uaW1nX2lucHV0X2RldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cblxuLnJvdWRlbF9pbWdfZGV0YWlsIHtcbiAgLy9tYXJnaW4tbGVmdDogMjBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDRweDtcbn1cblxuaW1nLnJvdWRlbF9kZXRhaWx7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuXG4uaW5wdXRfZm9jdXNfZGV0YWlsOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuLmlucHV0X2ZvY3VzX2RldGFpbDpmb2N1cyArIC5sYWJlbCB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4vLyB0aXRsZV9wcm9kdWl0X2RldGFpbFxuXG4udGl0bGVfcHJvZHVpdF9kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaWNvbkVkaXQge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmljb25FZGl0IGkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICAvLyBjdXJzb3I6IG5vLWRyb3A7XG59XG5cbi5pbnB1dC1ub24tZWRpdGluZyB7XG4gIGN1cnNvcjogbm8tZHJvcDtcbn1cblxuLmlucHV0LWVkaXRpbmcge1xuICBjdXJzb3I6IHRleHQ7XG59XG5cblxuLyogRnJvbSBVaXZlcnNlLmlvIGJ5IFlheWExMjA4NSAqLyBcbi5jb250YWluZXJfZmlsZSB7XG4gIC8vIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGdhcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA0MSk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5oZWFkZXJfZmlsZSB7XG4gIC8vIGZsZXg6IDE7XG4gIGhlaWdodDogMTQwcHg7XG4gIHdpZHRoOiAxNDBweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICMwNjcxZTQ5ZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG59XG5cbi5oZWFkZXJfZmlsZSBpbWd7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cblxuLmhlYWRlcl9maWxlIHN2ZyB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5oZWFkZXJfZmlsZSBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5mb290ZXJfZmlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTEwLCAyNTUsIDAuMDc1KTtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uZm9vdGVyX2ZpbGUgcCB7XG4gIG1hcmdpbjogMCFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmZvb3Rlcl9maWxlIGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuXG4vLyAuZm9vdGVyIHN2ZyB7XG4vLyAgIGhlaWdodDogMTMwJTtcbi8vICAgZmlsbDogcm95YWxibHVlO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcwLCA2NiwgNjYsIDAuMTAzKTtcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICBwYWRkaW5nOiAycHg7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgYm94LXNoYWRvdzogMCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMjA1KTtcbi8vIH1cblxuLy8gLmZvb3Rlcl9maWxlIHAge1xuLy8gICBmbGV4OiAxO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyB9XG5cbiNmaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhlYWRlcl9maWxlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59IFxuXG4uYnRuX3NhdmVfZWRpdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5idG5fc2F2ZV9lZGl0IC5zYXZlX2VkaXQge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5idG5fc2F2ZV9lZGl0IC5hbm51bGVfZWRpdCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjcxMyk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idG5fc2F2ZV9lZGl0IC5zYXZlX2VkaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ2NWNkO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4uYnRuX3NhdmVfZWRpdCAuYW5udWxlX2VkaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuLmlucHV0U2l6ZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMwNjcyRTQ7XG59XG5cbi5sYWJlbENvbG9yIHtcbiAgY29sb3I6ICMwMDAhaW1wb3J0YW50O1xufVxuXG4udXBkYXRlRGF0ZSB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5kZXNjcmlwdGlvbi1jZWxsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kZXNjcmlwdGlvbi1ob3ZlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDIwMHB4O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmRlc2NyaXB0aW9uLWNlbGw6aG92ZXIgLmRlc2NyaXB0aW9uLWhvdmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250YWluZXJfbGlzdF9ib3V0aXF1ZSB7XG4gIHNjcm9sbGJhci13aWR0aDogYXV0bztcbiAgb3ZlcmZsb3c6IGF1dG87IFxuICBzY3JvbGxiYXItY29sb3I6ICM4ODggI2YxZjFmMTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwOyBcbn1cblxuLmNvbnRhaW5lcl9saXN0X2JvdXRpcXVlOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAycHg7IFxuICBoZWlnaHQ6IDNweDtcbn1cblxuLmNvbnRhaW5lcl9saXN0X2JvdXRpcXVlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7IC8qIGNvdWxldXIgZHUgZm9uZCBkZSBsYSBzY3JvbGxiYXIgKi9cbn1cblxuLmNvbnRhaW5lcl9saXN0X2JvdXRpcXVlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IGJsdWU7IC8qIGNvdWxldXIgZHUgY3Vyc2V1ciAqL1xuICBib3JkZXItcmFkaXVzOiA0cHg7IC8qIGFycm9uZGlyIGxlcyBib3JkcyBkdSBjdXJzZXVyICovXG59XG5cbi5jb250YWluZXJfbGlzdF9ib3V0aXF1ZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZWQ7IC8qIGNvdWxldXIgZHUgY3Vyc2V1ciBhdSBzdXJ2b2wgKi9cbn1cblxuLm5hbWVfYm91dGlxdWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAzMHB4IDAgMTBweDtcbn1cblxuLm5hbWVfYm91dGlxdWUgcCB7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xufVxuXG4ubmFtZV9ib3V0aXF1ZV9hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlENDIxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uYmFycmUge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzZjtcbiAgLy8gbWFyZ2luOiAwIDFweCAxNnB4O1xuICBtYXJnaW46IDhweCAwO1xufVxuXG4ubmFtZV9ib3V0aXF1ZSB7XG4gIHAge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBtYXJnaW46IDRweCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgfVxuXG4gICAgJi5uYW1lX2JvdXRpcXVlX2FjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlENDIxOyAvLyBDb3VsZXVyIGRlIGZvbmQgcXVhbmQgYWN0aWZcbiAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IC8vIEZvcmNlIGxhIGNvdWxldXIgYmxhbmNoZSBxdWFuZCBhY3RpZlxuICAgIH1cbiAgfVxuXG4gIC5uby1ib3V0aXF1ZXMtbWVzc2FnZSB7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLy8gLnN1c3BlbmRlZC1ib3V0aXF1ZSB7XG4gIC8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyAgIG9wYWNpdHk6IDAuNztcbiAgLy8gICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgLy8gfVxuICBcbiAgLy8gLndhcm5pbmctaWNvbiB7XG4gIC8vICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgLy8gICBjb2xvcjogI2ZmOTgwMDtcbiAgLy8gICBmb250LXNpemU6IDE0cHg7XG4gIC8vIH1cblxuXG59XG5cbi8vIC5zdXNwZW5kZWQtYm91dGlxdWUge1xuLy8gICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgb3BhY2l0eTogMC42O1xuICBcbi8vICAgJjo6YWZ0ZXIge1xuLy8gICAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgICAgdG9wOiA1MCU7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgYmFja2dyb3VuZDogI2ZmMDAwMDtcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4vLyAgIH1cbi8vIH1cblxuLndhcm5pbmctaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb250YWluZXJfbGlzdF9ib3V0aXF1ZSB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4OyAvKiBIYXV0ZXVyIG1heCBwb3VyIGFjdGl2ZXIgbGUgc2Nyb2xsICovXG4gIG92ZXJmbG93LXk6IGF1dG87IC8qIFBlcm1ldCBsZSBzY3JvbGwgdmVydGljYWwgKi9cbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IC8qIFJlbmQgbGUgc2Nyb2xsIGZsdWlkZSAqL1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJhY2tncm91bmQ6ICNlNGNiMGQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50cmllciB7XG4gIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkICMwMDA7IFxuICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkICMwMDA7IFxuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjMDAwOyBcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDsgXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IFxuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVtb3ZlLWNoaXAge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICY6aG92ZXIge1xuICAgICAgY29sb3I6ICNmZjQ0NDQ7XG4gIH1cbn1cblxuXG4uZmlsdGVyLWRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG5cbiAgLmZpbHRlci1vcHRpb24ge1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5maWx0ZXItc2VsZWN0IHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5mYWN0dXJlLWNvdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtaW4td2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi8qIFBvdXIgYWxpZ25lciBjb3JyZWN0ZW1lbnQgbGVzIMODwqlsw4PCqW1lbnRzICovXG4uZHJhZ2dhYmxlLWl0ZW0gcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xuXG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuY2xvc2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxNXB4O1xuICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uaW1wb3J0LWluc3RydWN0aW9ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzA2NzFlNDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gIGgzIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiAjMDY3MWU0O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC5jb2x1bW5zLWluZm8ge1xuICAgIG1hcmdpbjogMTVweCAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBoZWlnaHQ6IDE3NXB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxuICAgIHVsIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIHdpZHRoOiAycHg7XG4gICAgICBoZWlnaHQ6IDJweDtcbiAgICB9XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgLy8gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuXG4gIC5kb3dubG9hZC10ZW1wbGF0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzFlNDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU1Y2I5O1xuICAgIH1cbiAgfVxufVxuXG4uZmlsZS11cGxvYWQtYXJlYSB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBtYXJnaW46IDIwcHggMDtcblxuICAmOmhvdmVyLCAmLmFjdGl2ZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDY3MWU0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY4ZmY7XG4gIH1cblxuICBpIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgY29sb3I6ICMwNjcxZTQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIHNtYWxsIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxufVxuXG4ubW9kYWwtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcblxuICAuYnRuLWNhbmNlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBjb2xvcjogIzMzMztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICAgIH1cbiAgfVxuXG4gIC5idG4taW1wb3J0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE4ODM4O1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cbiAgfVxufVxuXG4uaW1wb3J0LXN0YXR1cyB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcblxuICAmLnN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGVkZGE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MzZTZjYjtcbiAgICBjb2xvcjogIzE1NTcyNDtcbiAgfVxuXG4gICYuZXJyb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y1YzZjYjtcbiAgICBjb2xvcjogIzcyMWMyNDtcbiAgfVxufVxuXG4uaW1wb3J0LWVycm9ycyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICBoNCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgdWwge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG5cblxuLmJvdXRpcXVlLXNlbGVjdGlvbi1wYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcblxuICAucGFuZWwtaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBoNCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cblxuICAgICAgLmNsb3NlLWJ0biB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgfVxuXG4gIC5wYW5lbC1ib2R5IHtcbiAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIHBhZGRpbmc6IDEycHg7XG5cbiAgICAgIC5ib3V0aXF1ZS1pdGVtIHtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG5cbiAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgLnBhbmVsLWZvb3RlciB7XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcblxuICAgICAgLmJ0bi1jb25maXJtIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU1Y2IzO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxufVxuXG4uY29udGFpbmVyX21vZGFsX2V4Y2VsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uYnRuLWltcG9ydCBpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4ucG9wdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzdweDtcbiAgcmlnaHQ6IDAlO1xuICB3aWR0aDogMjQwcHg7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ucG9wdXAuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLnBvcHVwOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICByaWdodDogMiU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZmZmZmZmO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgLTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcbn1cblxuLmNoZWNrYm94LWxpc3Qge1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuXG4vKiBTY3JvbGxiYXIgbWluaW1hbCAqL1xuLmNoZWNrYm94LWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbn1cbi5jaGVja2JveC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmNoZWNrYm94LWxpc3QgbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuLmNoZWNrYm94LWxpc3QgbGFiZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4uY2hlY2tib3gtbGlzdCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEwcHg7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyBidXR0b24ge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMsIGNvbG9yIDAuMnM7XG59XG5cbi5jYW5jZWwtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5jYW5jZWwtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbn1cblxuLmRlbGV0ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MjUyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kZWxldGUtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MzkzNTtcbn1cblxuXG5cbi8vVG9hc3RcblxuIC8qIENvbnRlbmV1ciBkdSB0b2FzdCAqL1xuLnRvYXN0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA2MHB4O1xuICByaWdodDogMzVweDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLyogQWpvdXRleiBkYW5zIHZvdHJlIGZpY2hpZXIgQ1NTICovXG4udG9hc3QtbWVzc2FnZS13YXJuaW5nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmYzY2Q7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNmZmVlYmE7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3N2ViODc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0NFQkM7XG4gIGNvbG9yOiAjODU2NDA0O1xuICB6LWluZGV4OiAxMDAwO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwwLDAsMC4xKTtcblxuICBhbmltYXRpb246IGZhZGVJbk91dCA0cyBlYXNlLWluLW91dDtcbn1cblxuLnRvYXN0LW1lc3NhZ2Utc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3N2ViODc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0NFQkM7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5PdXQgNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG59XG4gIFxuLy90b2FzdCBzdWNjZXNzXG4udG9hc3QtbWVzc2FnZS1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNEOERBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTdCMUI2O1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluT3V0IDRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuXG5cbiAgLy8gQWpvdXRlciBsJ2FuaW1hdGlvbiBwb3VyIHRvdXMgbGVzIHR5cGVzIGQnYWxlcnRlc1xuICAuYWxlcnQge1xuICAgIC8vIC4uLiBzdHlsZXMgZXhpc3RhbnRzXG4gICAgXG4gICAgJi13YXJuaW5nIHtcbiAgICAgIEBleHRlbmQgLmFsZXJ0O1xuICAgICAgLy8gLi4uIHN0eWxlcyBzcMODwqljaWZpcXVlc1xuICAgIH1cbiAgfVxuICBcbiAgLyogQW5pbWF0aW9uIHBvdXIgZmFpcmUgYXBwYXJhw4PCrnRyZSBldCBkaXNwYXJhw4PCrnRyZSBsZSB0b2FzdCAqL1xuICBAa2V5ZnJhbWVzIGZhZGVJbk91dCB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgICA4MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7IC8qIExlIHRvYXN0IGRpc3BhcmHDg8KudCBhdmVjIHVuIGzDg8KpZ2VyIG1vdXZlbWVudCB2ZXJzIGxlIGJhcyAqL1xuICAgIH1cbiAgfSAgXG5cbiAgLnBhZ2VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICB9XG5cbiAgLm9fcGFnZXJfcHJldmlvdXMgaSxcbi5vX3BhZ2VyX25leHQgaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5kLXByaW50LW5vbmUgYnV0dG9ue1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xufVxuXG4uZC1wcmludC1ub25lIC5vX3BhZ2VyX3ByZXZpb3VzIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG5cbi5kLXByaW50LW5vbmUgLm9fcGFnZXJfbmV4dCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_produits_produits_component_ts.js.map