"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_facture_facture_component_ts"],{

/***/ 27638:
/*!********************************************************!*\
  !*** ./src/app/admin-page/SERVICES/facture.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FactureService: () => (/* binding */ FactureService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 88026);






class FactureService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    this.boutiques = []; // Ajouter la propriété boutiques
  }
  getFactures() {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/factures`, {
        headers
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Erreur lors de la récupération des factures:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  getFacturesByBoutique(boutiqueId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/factures/${boutiqueId}`, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(factures => factures || []), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
        if (error.status === 404) return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
      }));
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Erreur lors de la récupération des factures par boutique:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }));
  }
  getBoutiqueNameById(id) {
    const boutique = this.boutiques.find(b => b.id === id); // Ajouter le type
    return boutique?.nomBoutique || 'Boutique inconnue';
  }
  // Ajouter une méthode pour initialiser les boutiques
  setBoutiques(boutiques) {
    this.boutiques = boutiques;
  }
  static {
    this.ɵfac = function FactureService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FactureService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: FactureService,
      factory: FactureService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 62728:
/*!*********************************************************!*\
  !*** ./src/app/admin-page/facture/facture.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FactureComponent: () => (/* binding */ FactureComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ 61977);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ 19322);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 56755);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MODELS/customNumberPipe */ 96115);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ 2752);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf-autotable */ 6530);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _produits_suspended_boutique_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../produits/suspended-boutique-dialog.component */ 85837);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SERVICES/users.service */ 88026);
/* harmony import */ var _SERVICES_facture_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SERVICES/facture.service */ 27638);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 42700);

// import { Component } from '@angular/core';



























const _c0 = () => [5, 10, 25, 100];
function FactureComponent_ng_container_12_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.totalAllFactures, " ");
  }
}
function FactureComponent_ng_container_12_ng_container_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const boutique_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.factureCounts[boutique_r4.id], " ");
  }
}
function FactureComponent_ng_container_12_ng_container_5_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 28);
  }
}
function FactureComponent_ng_container_12_ng_container_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 29);
  }
}
function FactureComponent_ng_container_12_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureComponent_ng_container_12_ng_container_5_Template_p_click_1_listener() {
      const boutique_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](boutique_r4.actif ? ctx_r1.selectBoutique(boutique_r4) : ctx_r1.showSuspendedBoutiqueDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, FactureComponent_ng_container_12_ng_container_5_span_3_Template, 2, 1, "span", 22)(4, FactureComponent_ng_container_12_ng_container_5_i_4_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, FactureComponent_ng_container_12_ng_container_5_div_5_Template, 1, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const boutique_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("name_boutique_active", boutique_r4.id === (ctx_r1.selectedBoutique == null ? null : ctx_r1.selectedBoutique.id) && boutique_r4.actif)("suspended-boutique", !boutique_r4.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", boutique_r4.nomBoutique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.factureCounts[boutique_r4.id] > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !boutique_r4.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", i_r5 !== ctx_r1.boutiques.length - 1);
  }
}
function FactureComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureComponent_ng_container_12_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectBoutique(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Toutes les boutiques ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, FactureComponent_ng_container_12_span_4_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, FactureComponent_ng_container_12_ng_container_5_Template, 6, 8, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("name_boutique_active", ctx_r1.selectedBoutique === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.totalAllFactures > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.boutiques);
  }
}
function FactureComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.noFacturesMessage, " ");
  }
}
function FactureComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Aucune facture trouv\u00E9e pour le num\u00E9ro \"", ctx_r1.searchTerm, "\" ");
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Date : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const facture_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](4, 1, facture_r8.dateFacture, "dd/MM/yyyy"));
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 29);
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 29);
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " N\u00BA Fournisseur : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const facture_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(facture_r8.codeFournisseur || "****"), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 29);
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Cr\u00E9\u00E9 par : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const facture_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](facture_r8.nomUtilisateur);
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 29);
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Type de mouvement : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const facture_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("color", ctx_r1.getColor(facture_r8.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", facture_r8.type, " ");
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_i_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 83);
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 84);
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 85)(1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_23_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const facture_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.downloadPDFWithJsPDF(facture_r8, ctx_r1.boutiqueName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "T\u00E9l\u00E9charger en PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Imprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.selectedBoutique.nomBoutique);
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const facture_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getBoutiqueNamesForFacture(facture_r8) || "Non sp\u00E9cifi\u00E9", " ");
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 89)(1, "textarea", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const facture_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](facture_r8.description || "sans description");
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_th_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](p_r10.codeGenerique);
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_th_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "D\u00E9signation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](p_r11.nomProduit);
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "....");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_th_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Prix unitaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, p_r12.prixUnitair));
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "....");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_th_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Quantit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, p_r13.quantite));
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "....");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_th_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, p_r14.total));
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const facture_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, facture_r8.totalSum));
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_tr_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 96);
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_tr_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 97);
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_tr_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 98);
  }
}
function FactureComponent_mat_accordion_16_mat_expansion_panel_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-expansion-panel", 33, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("opened", function FactureComponent_mat_accordion_16_mat_expansion_panel_1_Template_mat_expansion_panel_opened_0_listener() {
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setStep(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-expansion-panel-header")(3, "mat-panel-title", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_4_Template, 5, 4, "div", 35)(5, FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_5_Template, 1, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Facture : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_9_Template, 1, 0, "div", 27)(10, FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_10_Template, 3, 1, "div", 38)(11, FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_11_Template, 1, 0, "div", 27)(12, FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_12_Template, 4, 1, "div", 35)(13, FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_13_Template, 1, 0, "div", 27)(14, FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_14_Template, 4, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 39)(16, "div", 40)(17, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureComponent_mat_accordion_16_mat_expansion_panel_1_Template_div_click_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.toggleDescription($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, FactureComponent_mat_accordion_16_mat_expansion_panel_1_i_18_Template, 1, 0, "i", 42)(19, FactureComponent_mat_accordion_16_mat_expansion_panel_1_ng_template_19_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 43)(22, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureComponent_mat_accordion_16_mat_expansion_panel_1_Template_i_click_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.toggleExportDropdown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_23_Template, 5, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 50)(29, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Informations de la boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 51)(33, "div", 52)(34, "div", 53)(35, "div", 54)(36, "div", 55)(37, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Boutique :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_39_Template, 3, 1, "div", 57)(40, FactureComponent_mat_accordion_16_mat_expansion_panel_1_ng_template_40_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 55)(43, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Date de creation :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](47, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 55)(49, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Cr\u00E9\u00E9 par :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 55)(54, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "T\u00E9l\u00E9phone :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 55)(59, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "Email :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div", 55)(64, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, "Type de mouvement :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](68, FactureComponent_mat_accordion_16_mat_expansion_panel_1_div_68_Template, 3, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](69, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div", 61)(71, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, "Informations sur les produits");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](73, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 62)(75, "div", 63)(76, "table", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](77, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](78, FactureComponent_mat_accordion_16_mat_expansion_panel_1_th_78_Template, 2, 0, "th", 66)(79, FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_79_Template, 2, 1, "td", 67)(80, FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_80_Template, 2, 0, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](81, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](82, FactureComponent_mat_accordion_16_mat_expansion_panel_1_th_82_Template, 2, 0, "th", 66)(83, FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_83_Template, 2, 1, "td", 67)(84, FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_84_Template, 2, 0, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](85, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](86, FactureComponent_mat_accordion_16_mat_expansion_panel_1_th_86_Template, 2, 0, "th", 66)(87, FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_87_Template, 3, 3, "td", 67)(88, FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_88_Template, 2, 0, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](89, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](90, FactureComponent_mat_accordion_16_mat_expansion_panel_1_th_90_Template, 2, 0, "th", 66)(91, FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_91_Template, 3, 3, "td", 67)(92, FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_92_Template, 2, 0, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](93, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](94, FactureComponent_mat_accordion_16_mat_expansion_panel_1_th_94_Template, 2, 0, "th", 66)(95, FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_95_Template, 3, 3, "td", 73)(96, FactureComponent_mat_accordion_16_mat_expansion_panel_1_td_96_Template, 3, 3, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](97, FactureComponent_mat_accordion_16_mat_expansion_panel_1_tr_97_Template, 1, 0, "tr", 75)(98, FactureComponent_mat_accordion_16_mat_expansion_panel_1_tr_98_Template, 1, 0, "tr", 76)(99, FactureComponent_mat_accordion_16_mat_expansion_panel_1_tr_99_Template, 1, 0, "tr", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const facture_r8 = ctx.$implicit;
    const i_r7 = ctx.index;
    const panel_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](1);
    const openIcon_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](20);
    const allBoutiques_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](41);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("expanded", ctx_r1.step() === i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !panel_r15.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !panel_r15.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(facture_r8.numeroFacture || ""), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", facture_r8.type === "AJOUTER");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", facture_r8.type === "AJOUTER");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !panel_r15.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !panel_r15.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !panel_r15.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !panel_r15.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.showDescription)("ngIfElse", openIcon_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.showExportDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedBoutique)("ngIfElse", allBoutiques_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](47, 27, facture_r8.dateFacture, "dd/MM/yyyy \u00E0 HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](facture_r8.nomUtilisateur);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.boutiquePhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.boutiqueEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("color", ctx_r1.getColor(facture_r8.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", facture_r8.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.showDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", facture_r8.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matFooterRowDef", ctx_r1.displayedColumns);
  }
}
function FactureComponent_mat_accordion_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-accordion", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FactureComponent_mat_accordion_16_mat_expansion_panel_1_Template, 100, 30, "mat-expansion-panel", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.paginatedFactures);
  }
}
function FactureComponent_mat_paginator_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-paginator", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("page", function FactureComponent_mat_paginator_18_Template_mat_paginator_page_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("length", ctx_r1.filteredFactures.length)("pageSize", ctx_r1.pageSize)("pageIndex", ctx_r1.currentPage)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c0));
  }
}
// const ELEMENT_DATA: PeriodicElement[] = [
//   {codeGenerique: 'P-0000', nomProduit: 'NIDO', stockActuel: 200, quantiteAjoute: 89, quantiteRetirer: 20, stockApres: 234},
//   {codeGenerique: 'P-0001', nomProduit: 'Bic', stockActuel: 200, quantiteAjoute: 89, quantiteRetirer: 20, stockApres: 234},
//   {codeGenerique: 'P-0002', nomProduit: 'Chocolat', stockActuel: 200, quantiteAjoute: 89, quantiteRetirer: 20, stockApres: 234},
// ];
class FactureComponent {
  constructor(userService,
  //  private produitService: ProduitService,
  //  private sharedDataService: SharedDataService,
  //  private stockService: StockService,
  //  private router: Router,
  //  private route: ActivatedRoute,
  factureService, changeDetectorRef, dialog) {
    this.userService = userService;
    this.factureService = factureService;
    this.changeDetectorRef = changeDetectorRef;
    this.dialog = dialog;
    this.boutiqueName = '';
    this.nomComplet = '';
    this.nomEntreprise = '';
    this.email = '';
    this.stockHistory = [];
    this.showNoFactureMessage = false;
    this.noFacturesMessage = 'Aucune facture disponible.';
    this.factures = [];
    // Ajouter ces nouvelles propriétés
    this.searchTerm = '';
    this.filteredFactures = [];
    // Dropdown pour l'export
    this.showExportDropdown = false;
    this.showDescription = true;
    // Liste filtrée des stocks ajustés
    this.adjustedStocks = [];
    this.stock = null;
    this.factureDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource();
    this.selectedBoutique = null;
    this.boutiques = [];
    this.factureCounts = {};
    this.totalAllFactures = 0;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.imgUrl;
    // Pagination
    this.displayedColumns = ['codeGenerique', 'nomProduit', 'prixUnitair', 'quantite', 'total'];
    this.totalFactures = 0;
    this.pageSize = 10;
    this.currentPage = 0;
    this.paginatedFactures = [];
    // Collaste 
    this.step = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.signal)(-1);
    this.boutiquePhone = '';
    this.boutiqueEmail = '';
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource();
  }
  onPageChange(event) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedFactures();
  }
  // Ajouter cette méthode
  updatePaginatedFactures() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedFactures = this.filteredFactures.slice(startIndex, endIndex);
    // Forcer la mise à jour du paginator
    this.changeDetectorRef.detectChanges();
  }
  ngAfterViewInit() {
    this.paginators.changes.subscribe(() => {
      // Associe chaque paginator à la dataSource de la facture correspondante
      this.factures.forEach((facture, index) => {
        const paginator = this.paginators.toArray()[index];
        if (facture.dataSource && paginator) {
          facture.dataSource.paginator = paginator;
        }
      });
    });
  }
  setStep(index) {
    this.step.set(index);
  }
  // nextStep() {
  //   this.step.update(i => i + 1);
  // }
  // prevStep() {
  //   this.step.update(i => i - 1);
  // }
  // Affichage/Masquage du dropdown d'export
  toggleExportDropdown(event) {
    event.stopPropagation();
    this.showExportDropdown = !this.showExportDropdown;
  }
  // Masque le dropdown si l'utilisateur clique en dehors
  onClickOutside(event) {
    const target = event.target;
    if (!target.closest('.export-container')) {
      this.showExportDropdown = false;
    }
  }
  // Méthode pour inverser l'état d'affichage
  toggleDescription(event) {
    event.stopPropagation();
    this.showDescription = !this.showDescription;
  }
  ngOnInit() {
    this.getBoutiqueName();
    this.getUserInfo();
    // this.getPartageInfoUser();
    // List des factures 
    // this.loadFactures();
  }
  // Boutique Name
  getBoutiqueName() {
    this.userService.getUserInfo().subscribe(userInfo => {
      console.log(userInfo);
      if (userInfo && userInfo.boutiques && userInfo.boutiques.length > 0) {
        const boutique = userInfo.boutiques[0];
        this.boutiqueName = boutique.nomBoutique || 'Nom de la boutique non trouvé';
        this.boutiquePhone = boutique.telephone || 'Téléphone non trouvé';
        this.boutiqueEmail = boutique.email || 'Email non trouvé';
      } else {
        console.error('Aucune boutique trouvée pour cet utilisateur');
        this.boutiqueName = 'Aucune boutique';
        this.boutiquePhone = 'N/A';
        this.boutiqueEmail = 'N/A';
      }
    }, error => {
      console.error('Erreur lors de la récupération des informations utilisateur', error);
    });
  }
  // Ajouter la méthode de filtrage
  applyFilter() {
    if (!this.searchTerm) {
      this.filteredFactures = [...this.factures];
    } else {
      const searchTermLower = this.searchTerm.toLowerCase();
      this.filteredFactures = this.factures.filter(facture => facture.numeroFacture.toLowerCase().includes(searchTermLower));
    }
    this.currentPage = 0;
    this.updatePaginatedFactures();
    // Réinitialiser le paginator
    if (this.paginator) {
      this.paginator.firstPage();
    }
  }
  // Méthode pour obtenir les produits formatés
  getFormattedProduits(facture) {
    return facture.produits.map(p => ({
      ...p,
      quantiteAjoute: facture.type === 'AJOUT' ? p.quantite : 0,
      quantiteRetirer: facture.type === 'RETRAIT' ? p.quantite : 0
    }));
  }
  // Permet de mettre en évidence le texte recherché
  highlightMatch(text) {
    if (!this.searchTerm) return text;
    const regex = new RegExp(`(${this.searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }
  getColor(type) {
    if (type === 'AJOUTER') {
      return '#008000';
    } else if (type === 'Réduction') {
      return '#ff0000';
    }
    return '#000';
  }
  getBoutiqueNamesForFacture(facture) {
    // Si une boutique spécifique est sélectionnée
    if (this.selectedBoutique) {
      return this.selectedBoutique.nomBoutique;
    }
    // Pour "Toutes les boutiques", utiliser les IDs de la facture
    if (facture.boutiqueIds?.length > 0) {
      return facture.boutiqueIds.map(id => this.boutiques.find(b => b.id === id)?.nomBoutique || 'Boutique inconnue').join(', ');
    }
    // Fallback si aucune information n'est disponible
    return 'Non spécifié';
  }
  // Nouvelle méthode pour mettre à jour les données paginées
  updatePagination() {
    this.totalFactures = this.filteredFactures.length;
    const startIndex = this.currentPage * this.pageSize;
    this.paginatedFactures = this.filteredFactures.slice(startIndex, startIndex + this.pageSize);
  }
  // Fonction principale pour charger l'image en base64
  loadImageAsBase64(url) {
    var _this = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield fetch(url);
        if (!response.ok) {
          throw new Error('Erreur de chargement de l\'image: ' + response.statusText);
        }
        const blob = yield response.blob();
        const mimeType = blob.type;
        // Vérifie si l'image est un PNG
        if (mimeType !== 'image/png' && mimeType !== 'image/jpeg' && mimeType !== 'image/webp' && mimeType !== 'image/jpg' && mimeType !== 'image/avif') {
          throw new Error('Le fichier n\'est ni PNG, ni JPEG, ni WEBP');
        }
        const base64String = yield _this.blobToBase64(blob);
        return base64String;
      } catch (error) {
        console.error('Erreur lors du chargement de l\'image:', error);
        throw error;
      }
    })();
  }
  // Helper pour convertir un Blob en Base64
  blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result); // Convertir en base64
      reader.onerror = error => reject('Erreur de lecture du fichier : ' + error); // Gérer les erreurs de lecture
      reader.readAsDataURL(blob);
    });
  }
  downloadPDFWithJsPDF(facture, boutiqueName) {
    var _this2 = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const boutiqueNames = facture.boutiqueNames?.join(', ') || 'Toutes les boutiques';
      const doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]();
      doc.setFontSize(9);
      const logoPath = _this2.userInfo?.logoEntreprise;
      if (logoPath) {
        const fullLogoUrl = `${_this2.apiUrl}${logoPath}`;
        const logoWidth = 20;
        const logoHeight = 15;
        try {
          const logoBase64 = yield _this2.loadImageAsBase64(fullLogoUrl);
          // Forcer le type MIME pour le PNG
          doc.addImage(logoBase64, 'jpg', 170, 10, logoWidth, logoHeight);
        } catch (error) {
          console.error('Erreur lors de l\'ajout du logo au PDF:', error);
        }
      } else {
        console.warn('Logo de l’entreprise non disponible.');
      }
      const transform = value => {
        if (value == null) return '';
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      };
      let y = 15;
      doc.setFont('helvetica', 'bold');
      doc.text('Facture No :', 10, y);
      doc.setTextColor(6, 114, 228);
      doc.text(facture?.numeroFacture || 'FAC-XXXXXX', 30, y);
      y += 8;
      doc.setTextColor(0, 0, 0);
      doc.text('Informations de la boutique', 10, y);
      y += 5;
      doc.line(10, y, 200, y);
      y += 10;
      doc.setFont('helvetica', 'bold');
      doc.text('Boutique :', 10, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(6, 114, 228);
      doc.text(boutiqueName || 'N/A', 30, y);
      y += 8;
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text('Téléphone :', 10, y);
      doc.setFont('helvetica', 'normal');
      doc.text(_this2.boutiquePhone || 'N/A', 30, y);
      y += 8;
      doc.setFont('helvetica', 'bold');
      doc.text('Email :', 10, y);
      doc.setFont('helvetica', 'normal');
      doc.text(_this2.boutiqueEmail || 'N/A', 22, y);
      y += 8;
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text('Date de création :', 10, y);
      doc.setFont('helvetica', 'normal');
      const formatDate = dateString => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }).format(date);
      };
      doc.text(formatDate(facture?.dateFacture || ''), 40, y);
      y += 8;
      doc.setFont('helvetica', 'bold');
      doc.text('Créé par:', 10, y);
      doc.setFont('helvetica', 'normal');
      doc.text(facture?.nomUtilisateur || 'N/A', 27, y);
      y += 8;
      doc.setFont('helvetica', 'bold');
      doc.text('Type de mouvement :', 10, y);
      doc.setFont('helvetica', 'normal');
      let typeMouvement = facture?.type || 'N/A';
      const couleurMouvement = typeMouvement === 'AJOUTER' ? [0, 150, 0] : [255, 0, 0];
      doc.setTextColor(...couleurMouvement);
      doc.text(typeMouvement, 45, y);
      doc.setTextColor(0, 0, 0);
      y += 12;
      doc.setFont('helvetica', 'bold');
      doc.text('Informations sur les produits', 10, y);
      y += 5;
      doc.line(10, y, 200, y);
      y += 10;
      doc.setTextColor(153, 153, 153);
      doc.text('Produits', 10, y);
      y += 10;
      doc.setFillColor(6, 114, 228);
      doc.setTextColor(255, 255, 255);
      doc.rect(10, y, 190, 10, 'F');
      doc.text('Code', 15, y + 7);
      doc.text('Désignation', 50, y + 7);
      doc.text('Prix unitaire', 100, y + 7);
      doc.text('Quantité', 140, y + 7);
      doc.text('Total', 170, y + 7);
      y += 15;
      doc.setTextColor(0, 0, 0);
      const produits = facture?.produits || [];
      produits.forEach((produit, index) => {
        doc.text(produit.codeGenerique || `P-${index + 1}`, 15, y);
        doc.text(produit.nomProduit, 50, y);
        doc.text(transform(Number(produit.prixUnitair.toFixed(3))), 100, y);
        doc.text(produit.quantite.toString(), 140, y);
        doc.setTextColor(255, 0, 0);
        doc.text(transform(Number((produit.total || 0).toFixed(3))), 170, y);
        doc.setTextColor(0, 0, 0);
        y += 10;
      });
      y += 10;
      doc.line(10, y, 200, y);
      y += 15;
      doc.setFont('helvetica', 'bold');
      doc.text('Signature', 20, y);
      doc.text('Approuvé par', 90, y);
      doc.text('Reçu par', 160, y);
      // Générer un PDF avec un nom unique
      doc.save(`Facture_${facture?.numeroFacture || 'XXXXXX'}.pdf`);
    })();
  }
  getUserInfo() {
    this.userService.getUserInfo().subscribe({
      next: user => {
        this.userInfo = user;
        this.boutiques = user.boutiques;
        this.entrepriseId = user.entrepriseId;
        this.factureService.setBoutiques(this.boutiques);
        if (this.boutiques.length > 0) {
          this.selectedBoutique = null;
          this.showNoFactureMessage = false; // Ajouter cette ligne
          this.loadAllFactures();
        } else {
          this.noFacturesMessage = 'Aucune boutique trouvée.'; // Modifier cette ligne
          this.showNoFactureMessage = true; // Modifier cette ligne
        }
        this.showNoFactureMessage = false;
      },
      error: err => {
        console.error("Erreur lors de la récupération des informations utilisateur :", err);
        this.showNoFactureMessage = true; // Ajouter cette ligne
      }
    });
  }
  selectBoutique(boutique) {
    if (boutique && !boutique.actif) {
      this.showSuspendedBoutiqueDialog();
      return;
    }
    this.selectedBoutique = boutique;
    if (boutique === null) {
      this.loadAllFactures();
    } else {
      this.loadFactures(boutique.id);
    }
    this.currentPage = 0;
  }
  // Dans loadFactures()
  loadFactures(boutiqueId) {
    this.showNoFactureMessage = false;
    this.factureService.getFacturesByBoutique(boutiqueId).subscribe({
      next: data => {
        const facturesWithBoutique = data.map(f => ({
          ...f,
          boutiqueIds: [boutiqueId] // Ajoute l'ID de la boutique à chaque facture
        }));
        this.factureCounts[boutiqueId] = data.length;
        this.processFactures(facturesWithBoutique);
      },
      error: error => {
        console.error('Erreur:', error);
        this.processFactures([]);
        this.showNoFactureMessage = true;
      }
    });
  }
  // Dans loadAllFactures()
  loadAllFactures() {
    this.showNoFactureMessage = false;
    const requests = this.boutiques.map(b => this.factureService.getFacturesByBoutique(b.id));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)(requests).subscribe({
      next: responses => {
        const allFactures = responses.flatMap((factures, index) => {
          const boutiqueId = this.boutiques[index].id;
          return factures.map(f => ({
            ...f,
            boutiqueIds: [boutiqueId] // Ajoute l'ID de la boutique à chaque facture
          }));
        });
        // Calculer les comptages
        const counts = {};
        responses.forEach((factures, index) => {
          const boutiqueId = this.boutiques[index].id;
          counts[boutiqueId] = factures.length;
        });
        this.factureCounts = counts;
        this.totalAllFactures = responses.reduce((acc, factures) => acc + factures.length, 0);
        this.processFactures(allFactures);
      },
      error: error => {
        console.error('Erreur:', error);
        this.showNoFactureMessage = true;
      }
    });
  }
  processFactures(data) {
    if (!data || !Array.isArray(data)) {
      this.showNoFactureMessage = true;
      // this.noFacturesAvailable = true;
      this.factures = [];
      this.filteredFactures = [];
      return;
    }
    this.factures = data.reverse().map(facture => ({
      ...facture,
      boutiqueIds: facture.boutiqueIds || [],
      boutiqueNames: this.getBoutiqueNames(facture.boutiqueIds),
      dataSource: new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.getFormattedProduits(facture)),
      totalSum: this.getFormattedProduits(facture).reduce((acc, p) => acc + (p.total || 0), 0)
    }));
    this.filteredFactures = [...this.factures];
    this.showNoFactureMessage = this.factures.length === 0;
    this.updatePaginatedFactures();
  }
  getBoutiqueNames(ids = []) {
    return ids.map(id => this.boutiques.find(b => b.id === id)?.nomBoutique || 'Boutique inconnue').filter(name => !!name);
  }
  // facture.component.ts
  showSuspendedBoutiqueDialog() {
    this.dialog.open(_produits_suspended_boutique_dialog_component__WEBPACK_IMPORTED_MODULE_4__.SuspendedBoutiqueDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {
        onClose: () => this.selectedBoutique = null
      }
    });
  }
  static {
    this.ɵfac = function FactureComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FactureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_6__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_SERVICES_facture_service__WEBPACK_IMPORTED_MODULE_7__.FactureService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.j));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: FactureComponent,
      selectors: [["app-facture"]],
      viewQuery: function FactureComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginators = _t);
        }
      },
      hostBindings: function FactureComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FactureComponent_click_HostBindingHandler($event) {
            return ctx.onClickOutside($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveDocument"]);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_13__.provideNativeDateAdapter)()])],
      decls: 19,
      vars: 6,
      consts: [["panel", ""], ["openIcon", ""], ["allBoutiques", ""], [1, "global_container_facture"], [1, "container_facture"], [1, "tasks-header"], [1, "title"], [1, "actions"], [1, "inputSearch"], [1, "ri-search-2-line"], ["type", "text", "placeholder", "Recherche....", 3, "ngModelChange", "input", "ngModel"], [1, "container_list_boutique"], [1, "content_list_boutique"], [1, "name_boutique"], [4, "ngIf"], ["class", "no-facture-message", 4, "ngIf"], [1, "factures"], ["class", "example-headers-align", 4, "ngIf"], [1, "pagination"], [3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page", 4, "ngIf"], [1, "all_boutique", 3, "click"], [1, "all_boutique", 2, "display", "flex", "align-items", "center"], ["class", "facture-count", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "facture-count"], [2, "display", "flex", "align-items", "center", 3, "click"], ["class", "ri-error-warning-line warning-icon", 4, "ngIf"], ["class", "barre", 4, "ngIf"], [1, "ri-error-warning-line", "warning-icon"], [1, "barre"], [1, "no-facture-message"], [1, "example-headers-align"], ["class", "cadre_panel", "hideToggle", "", 3, "expanded", "opened", 4, "ngFor", "ngForOf"], ["hideToggle", "", 1, "cadre_panel", 3, "opened", "expanded"], [1, "title_facture"], ["class", "personnage", 4, "ngIf"], [1, "numFacture"], [1, "title_facture_code", 3, "innerHTML"], ["class", "Facture", 4, "ngIf"], [1, "icon_export"], [1, "export-container", 2, "display", "flex", "align-items", "center"], [1, "iconDrop", 2, "margin-right", "20px", 3, "click"], ["class", "ri-chat-check-line", "title", "Afficher la description", 4, "ngIf", "ngIfElse"], [1, "iconDrop"], [1, "ri-printer-cloud-line", 3, "click"], ["class", "export-dropdown", 4, "ngIf"], [1, "iconDrop", 2, "margin-left", "20px"], [1, "ri-arrow-down-s-fill"], [1, "content_facture"], [1, "bare"], [1, "title_produit"], [1, "container_imprimate"], [1, "content_imprimate"], [1, "double_info_content"], [1, "info_content"], [1, "info"], [1, "info_title"], [4, "ngIf", "ngIfElse"], [1, "info_value"], [1, "info_value", 2, "font-weight", "600", "text-transform", "uppercase"], ["class", "description_detail", 4, "ngIf"], [1, "title_produit", 2, "margin-top", "17px"], [1, "containerTable"], [1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "codeGenerique"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "nomProduit"], ["matColumnDef", "prixUnitair"], ["matColumnDef", "quantite"], ["matColumnDef", "total"], ["mat-cell", "", "style", "color: #ff0000;", 4, "matCellDef"], ["mat-footer-cell", "", "style", "color: #000000; font-weight: bold;", 4, "matFooterCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], [1, "personnage"], [1, "title_facture_info"], [1, "Facture"], [1, "title_facture_codeFournisseur", 3, "innerHTML"], [2, "font-weight", "600", "text-transform", "uppercase"], ["title", "Afficher la description", 1, "ri-chat-check-line"], ["title", "Fermer la description", 1, "ri-chat-off-line"], [1, "export-dropdown"], [1, "export-option", 3, "click"], [1, "export-option"], [1, "info_value", 2, "color", "#0672E4"], [1, "description_detail"], ["readonly", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-cell", "", 2, "color", "#ff0000"], ["mat-footer-cell", "", 2, "color", "#000000", "font-weight", "bold"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""], [3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"]],
      template: function FactureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "h1", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Factures");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 7)(6, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function FactureComponent_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function FactureComponent_Template_input_input_8_listener() {
            return ctx.applyFilter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 11)(10, "div", 12)(11, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, FactureComponent_ng_container_12_Template, 6, 4, "ng-container", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, FactureComponent_div_13_Template, 2, 1, "div", 15)(14, FactureComponent_div_14_Template, 2, 1, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, FactureComponent_mat_accordion_16_Template, 2, 1, "mat-accordion", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, FactureComponent_mat_paginator_18_Template, 1, 5, "mat-paginator", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((ctx.boutiques == null ? null : ctx.boutiques.length) || 0) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showNoFactureMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.showNoFactureMessage && ctx.filteredFactures.length === 0 && ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.showNoFactureMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.filteredFactures.length > 5);
        }
      },
      dependencies: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionPanelTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.M, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatFooterRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_1__.CustomNumberPipe],
      styles: ["@charset \"UTF-8\";\n.container_facture[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.tasks-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.inputSearch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n\n.inputSearch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-left: 10px;\n  border-radius: 5px;\n}\n\n.inputSearch[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 15px;\n  font-size: 17px;\n}\n\n.cadre_panel[_ngcontent-%COMP%] {\n  border-radius: 5px !important;\n  margin-bottom: 10px;\n}\n\nmat-expansion-panel[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px !important;\n}\n\n.title_facture[_ngcontent-%COMP%] {\n  font-size: 13px;\n  gap: 1px;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  height: 60px;\n}\n\n.personnage[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.4549019608);\n  font-size: 12px;\n}\n\n.numFacture[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 13px;\n}\n\n.Facture[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 13px;\n}\n\n.title_facture_info[_ngcontent-%COMP%] {\n  color: #000;\n  padding-left: 6px;\n  letter-spacing: 1px;\n  font-weight: 500;\n  font-size: 11px;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-size: 18px;\n  gap: 5px;\n}\n\n.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-style: 25px;\n  letter-spacing: 1px;\n}\n\n.title_facture_code[_ngcontent-%COMP%] {\n  color: #0672E4;\n  padding-left: 5px;\n  letter-spacing: 1px;\n  font-weight: 500;\n  font-size: 11px;\n}\n\n.title_facture_codeFournisseur[_ngcontent-%COMP%] {\n  color: #0672E4;\n  padding-left: 5px;\n  letter-spacing: 1px;\n  font-weight: 500;\n  font-size: 11px;\n}\n\n.icon_arrow[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.icon_arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n.export-container[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.export-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 180px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.389);\n  z-index: 999999999;\n  top: 100%;\n  right: 0;\n  border-radius: 5px;\n}\n\n.export-dropdown[_ngcontent-%COMP%]   .export-option[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  cursor: pointer;\n}\n\n.export-dropdown[_ngcontent-%COMP%]   .export-option[_ngcontent-%COMP%]:hover {\n  background-color: #f1f1f1;\n}\n\n.iconDrop[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.iconDrop[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-grow: 0;\n}\n\n.title_produit[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.codeProduit[_ngcontent-%COMP%]   .codeId[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 20px;\n}\n\n.bare[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background-color: #999999;\n  margin: 15px 0;\n}\n\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n}\n\n.info[_ngcontent-%COMP%]   .info_value[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  margin: 0;\n}\n\n.info_title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin: 0;\n}\n\n.double_info_content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.description_detail[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 135px;\n  min-width: 300px;\n  padding: 10px 20px 12px 8px;\n  box-sizing: border-box;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  background-color: #f8f8f8;\n  font-size: 13px;\n  resize: none;\n}\n\n.container_signature[_ngcontent-%COMP%] {\n  margin: 55px 0;\n}\n\n.content_signature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.signature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.approuve[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.recu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.containerTable[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.table_title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #999999;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.codeGenerique[_ngcontent-%COMP%] {\n  color: rgba(255, 0, 0, 0.6588235294);\n  font-size: 12px;\n}\n\n.quantiteAjoute[_ngcontent-%COMP%] {\n  color: #0672E4;\n}\n\n.quantiteRetirer[_ngcontent-%COMP%] {\n  color: #ff0000;\n}\n\n.icon_more[_ngcontent-%COMP%] {\n  margin: 14px 0 0 8px;\n}\n\n.icon_more[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background-color: #0672E4;\n  padding: 7px;\n  border-radius: 50%;\n  color: #fff;\n  cursor: pointer;\n}\n\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.mat-elevation-z8[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-elevation-z8[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: white;\n  font-weight: bold;\n}\n.mat-elevation-z8[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-bottom: 1px solid #ddd;\n}\n\n.no-facture-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  font-size: 13px;\n  color: #666;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  margin: 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.pagination[_ngcontent-%COMP%] {\n  justify-content: right;\n  margin-top: 20px;\n}\n\n.name_boutique[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  margin: 30px 0 10px;\n}\n\n.name_boutique[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n}\n\n.name_boutique_active[_ngcontent-%COMP%] {\n  background-color: #E9D421;\n  border-radius: 5px;\n  color: #000000;\n}\n\n.barre[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.2470588235);\n  margin: 0 10px;\n}\n\n.container_list_boutique[_ngcontent-%COMP%] {\n  overflow: auto;\n  scrollbar-color: #888 #f1f1f1;\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 2px;\n  height: 3px;\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1; \n\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: blue;\n  border-radius: 4px;\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: red;\n}\n\n.name_boutique[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 8px 16px;\n  margin: 4px 0;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  border-radius: 4px;\n}\n.name_boutique[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n  transform: translateY(-1px);\n}\n.name_boutique[_ngcontent-%COMP%]   p.name_boutique_active[_ngcontent-%COMP%] {\n  background-color: #E9D421;\n  color: #000 !important;\n}\n\n.warning-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  color: #ff0000;\n  font-size: 14px;\n}\n\n.facture-count[_ngcontent-%COMP%] {\n  background-color: #ddd;\n  color: #000;\n  border-radius: 50%;\n  font-size: 10px;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px;\n  margin-left: 10px;\n}\n\n\n\n.draggable-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3R1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBTWhCO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFRQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVNBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTko7O0FBU0E7RUFDSSw2QkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0E7RUFDSSwwREFBQTtBQU5KOztBQVdBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7QUFSSjs7QUFXQTtFQUNJLFlBQUE7QUFSSjs7QUFXQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtBQVJKOztBQVdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFSSjs7QUFXQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBUko7O0FBV0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVJKOztBQVdBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtBQVJKOztBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQVJKOztBQVdBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFSSjs7QUFVQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUEo7O0FBVUE7RUFDSSxZQUFBO0FBUEo7O0FBVUE7RUFDSSxlQUFBO0FBUEo7O0FBYUE7RUFFSSxxQkFBQTtBQVhKOztBQWNBO0VBQ0ksa0JBQUE7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QUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQW5DRjs7QUFzQ0EsMkNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQW5DRiIsImZpbGUiOiJmYWN0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyAuZXhhbXBsZS1oZWFkZXJzLWFsaWduIHtcbi8vICAgICBkaXNwbGF5OiBncmlkOyBcbi8vICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyMHB4XG4vLyB9XG5cbi5jb250YWluZXJfZmFjdHVyZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLy8gYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcbn1cblxuLnRhc2tzLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaW5wdXRTZWFyY2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlucHV0U2VhcmNoIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmlucHV0U2VhcmNoIGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uY2FkcmVfcGFuZWwge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDBweCAwcHggMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi8vLy8vLy8vLy8vIHRpdGxlX2ZhY3R1cmVcblxuLnRpdGxlX2ZhY3R1cmUge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBnYXA6IDFweDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5wZXJzb25uYWdlIHtcbiAgICBjb2xvcjogIzAwMDAwMDc0O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm51bUZhY3R1cmUge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLkZhY3R1cmUge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnRpdGxlX2ZhY3R1cmVfaW5mbyB7XG4gICAgY29sb3I6ICMwMDA7IFxuICAgIHBhZGRpbmctbGVmdDogNnB4OyBcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4udGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGdhcDogNXB4O1xufVxuXG4udGl0bGUgaDMge1xuICAgIGZvbnQtc3R5bGU6IDI1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnRpdGxlX2ZhY3R1cmVfY29kZSB7XG4gICAgY29sb3I6ICMwNjcyRTQ7IFxuICAgIHBhZGRpbmctbGVmdDogNXB4OyBcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuLnRpdGxlX2ZhY3R1cmVfY29kZUZvdXJuaXNzZXVyIHtcbiAgICBjb2xvcjogIzA2NzJFNDsgXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7IFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi5pY29uX2Fycm93IHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5pY29uX2Fycm93IGl7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5cbi8vIGRyb3AgZG9tdyBcblxuLmV4cG9ydC1jb250YWluZXIge1xuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4gIFxuLmV4cG9ydC1kcm9wZG93biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgbWluLXdpZHRoOiAxODBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zODkpO1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTtcbiAgICB0b3A6IDEwMCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuICBcbi5leHBvcnQtZHJvcGRvd24gLmV4cG9ydC1vcHRpb24ge1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4gIFxuLmV4cG9ydC1kcm9wZG93biAuZXhwb3J0LW9wdGlvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cbiAgXG4uaWNvbkRyb3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmljb25Ecm9wIGkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gICAgZmxleC1ncm93OiAwO1xufVxuXG4udGl0bGVfcHJvZHVpdCBoNCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29kZVByb2R1aXQgLmNvZGVJZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi8vIHN0eWxlIGRlIGNvbnRlbnQgYm91dGlxdWVcblxuLmJhcmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uaW5mbyAuaW5mb192YWx1ZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmluZm9fdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uZG91YmxlX2luZm9fY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRlc2NyaXB0aW9uX2RldGFpbCB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMzVweDtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMnB4IDhweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuXG4vLy8vLy8vLy8vLy8gQ09OVEFJTkVSIFNJR05BVFVSRVxuLy8vIFxuXG4uY29udGFpbmVyX3NpZ25hdHVyZSB7XG4gICAgbWFyZ2luOiA1NXB4IDA7XG59XG5cbi5jb250ZW50X3NpZ25hdHVyZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbi5zaWduYXR1cmUgcCxcbi5hcHByb3V2ZSBwLFxuLnJlY3UgcCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi8vIFNUWUxFIFBPVVIgTEVTIFRBQkxFIFxuXG4uY29udGFpbmVyVGFibGUge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi50YWJsZV90aXRsZSBwIHtcbiAgICBjb2xvcjogIzk5OTk5OTtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuICBcbi5jb2RlR2VuZXJpcXVlIHtcbiAgICBjb2xvcjogI2ZmMDAwMGE4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnF1YW50aXRlQWpvdXRlIHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbn1cblxuLnF1YW50aXRlUmV0aXJlciB7XG4gICAgY29sb3I6ICNmZjAwMDA7XG59XG5cbi8vIGljb24gbW9yZVxuLmljb25fbW9yZSB7XG4gICAgbWFyZ2luOiAxNHB4IDAgMCA4cHg7XG59XG5cbi5pY29uX21vcmUgaSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXQtZWxldmF0aW9uLXo4IHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBcbiAgICB0YWJsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIFxuICAgICAgdGgge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICB9XG4gICAgfVxufVxuXG4ubm8tZmFjdHVyZS1tZXNzYWdlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgXG4vLyBib3V0aXF1ZSBcblxuLm5hbWVfYm91dGlxdWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMzBweCAwIDEwcHg7XG4gIH1cbiAgXG4gIC5uYW1lX2JvdXRpcXVlIHAge1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICB9XG4gIFxuICAubmFtZV9ib3V0aXF1ZV9hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUQ0MjE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG4gIFxuICAuYmFycmUge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzZjtcbiAgICAvLyBtYXJnaW46IDhweCAwO1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyX2xpc3RfYm91dGlxdWUge1xuICAgIC8vIHNjcm9sbGJhci13aWR0aDogYXV0bztcbiAgICBvdmVyZmxvdzogYXV0bzsgXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiAjODg4ICNmMWYxZjE7XG4gICAgLy8gc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuICB9XG4gIFxuICAuY29udGFpbmVyX2xpc3RfYm91dGlxdWU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMnB4OyBcbiAgICBoZWlnaHQ6IDNweDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lcl9saXN0X2JvdXRpcXVlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTsgLyogY291bGV1ciBkdSBmb25kIGRlIGxhIHNjcm9sbGJhciAqL1xuICB9XG4gIFxuICAuY29udGFpbmVyX2xpc3RfYm91dGlxdWU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lcl9saXN0X2JvdXRpcXVlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmVkOyBcbiAgfVxuICBcbiAgLm5hbWVfYm91dGlxdWUge1xuICAgIHAge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICBtYXJnaW46IDRweCAwO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgIH1cbiAgXG4gICAgICAmLm5hbWVfYm91dGlxdWVfYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RDQyMTsgLy8gQ291bGV1ciBkZSBmb25kIHF1YW5kIGFjdGlmXG4gICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IC8vIEZvcmNlIGxhIGNvdWxldXIgYmxhbmNoZSBxdWFuZCBhY3RpZlxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLndhcm5pbmctaWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBjb2xvcjogI2ZmMDAwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuLmZhY3R1cmUtY291bnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1pbi13aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLyogUG91ciBhbGlnbmVyIGNvcnJlY3RlbWVudCBsZXMgw6lsw6ltZW50cyAqL1xuLmRyYWdnYWJsZS1pdGVtIHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9mYWN0dXJlL2ZhY3R1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBTWhCO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFRQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVNBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTko7O0FBU0E7RUFDSSw2QkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0E7RUFDSSwwREFBQTtBQU5KOztBQVdBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7QUFSSjs7QUFXQTtFQUNJLFlBQUE7QUFSSjs7QUFXQTtFQUNJLGtDQUFBO0VBQ0EsZUFBQTtBQVJKOztBQVdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFSSjs7QUFXQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBUko7O0FBV0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVJKOztBQVdBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtBQVJKOztBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQVJKOztBQVdBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFSSjs7QUFVQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUEo7O0FBVUE7RUFDSSxZQUFBO0FBUEo7O0FBVUE7RUFDSSxlQUFBO0FBUEo7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QSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQW5DRjs7QUFzQ0EsMkNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQW5DRjtBQUNBLHcvWkFBdy9aIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyAuZXhhbXBsZS1oZWFkZXJzLWFsaWduIHtcbi8vICAgICBkaXNwbGF5OiBncmlkOyBcbi8vICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyMHB4XG4vLyB9XG5cbi5jb250YWluZXJfZmFjdHVyZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLy8gYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcbn1cblxuLnRhc2tzLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaW5wdXRTZWFyY2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlucHV0U2VhcmNoIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmlucHV0U2VhcmNoIGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uY2FkcmVfcGFuZWwge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDBweCAwcHggMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi8vLy8vLy8vLy8vIHRpdGxlX2ZhY3R1cmVcblxuLnRpdGxlX2ZhY3R1cmUge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBnYXA6IDFweDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5wZXJzb25uYWdlIHtcbiAgICBjb2xvcjogIzAwMDAwMDc0O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm51bUZhY3R1cmUge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLkZhY3R1cmUge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnRpdGxlX2ZhY3R1cmVfaW5mbyB7XG4gICAgY29sb3I6ICMwMDA7IFxuICAgIHBhZGRpbmctbGVmdDogNnB4OyBcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4udGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGdhcDogNXB4O1xufVxuXG4udGl0bGUgaDMge1xuICAgIGZvbnQtc3R5bGU6IDI1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnRpdGxlX2ZhY3R1cmVfY29kZSB7XG4gICAgY29sb3I6ICMwNjcyRTQ7IFxuICAgIHBhZGRpbmctbGVmdDogNXB4OyBcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuLnRpdGxlX2ZhY3R1cmVfY29kZUZvdXJuaXNzZXVyIHtcbiAgICBjb2xvcjogIzA2NzJFNDsgXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7IFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi5pY29uX2Fycm93IHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5pY29uX2Fycm93IGl7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5cbi8vIGRyb3AgZG9tdyBcblxuLmV4cG9ydC1jb250YWluZXIge1xuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4gIFxuLmV4cG9ydC1kcm9wZG93biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgbWluLXdpZHRoOiAxODBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zODkpO1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTtcbiAgICB0b3A6IDEwMCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuICBcbi5leHBvcnQtZHJvcGRvd24gLmV4cG9ydC1vcHRpb24ge1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4gIFxuLmV4cG9ydC1kcm9wZG93biAuZXhwb3J0LW9wdGlvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cbiAgXG4uaWNvbkRyb3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmljb25Ecm9wIGkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gICAgZmxleC1ncm93OiAwO1xufVxuXG4udGl0bGVfcHJvZHVpdCBoNCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29kZVByb2R1aXQgLmNvZGVJZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi8vIHN0eWxlIGRlIGNvbnRlbnQgYm91dGlxdWVcblxuLmJhcmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uaW5mbyAuaW5mb192YWx1ZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmluZm9fdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uZG91YmxlX2luZm9fY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRlc2NyaXB0aW9uX2RldGFpbCB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMzVweDtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMnB4IDhweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuXG4vLy8vLy8vLy8vLy8gQ09OVEFJTkVSIFNJR05BVFVSRVxuLy8vIFxuXG4uY29udGFpbmVyX3NpZ25hdHVyZSB7XG4gICAgbWFyZ2luOiA1NXB4IDA7XG59XG5cbi5jb250ZW50X3NpZ25hdHVyZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbi5zaWduYXR1cmUgcCxcbi5hcHByb3V2ZSBwLFxuLnJlY3UgcCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi8vIFNUWUxFIFBPVVIgTEVTIFRBQkxFIFxuXG4uY29udGFpbmVyVGFibGUge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi50YWJsZV90aXRsZSBwIHtcbiAgICBjb2xvcjogIzk5OTk5OTtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuICBcbi5jb2RlR2VuZXJpcXVlIHtcbiAgICBjb2xvcjogI2ZmMDAwMGE4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnF1YW50aXRlQWpvdXRlIHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbn1cblxuLnF1YW50aXRlUmV0aXJlciB7XG4gICAgY29sb3I6ICNmZjAwMDA7XG59XG5cbi8vIGljb24gbW9yZVxuLmljb25fbW9yZSB7XG4gICAgbWFyZ2luOiAxNHB4IDAgMCA4cHg7XG59XG5cbi5pY29uX21vcmUgaSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXQtZWxldmF0aW9uLXo4IHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBcbiAgICB0YWJsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIFxuICAgICAgdGgge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICB9XG4gICAgfVxufVxuXG4ubm8tZmFjdHVyZS1tZXNzYWdlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMSk7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgXG4vLyBib3V0aXF1ZSBcblxuLm5hbWVfYm91dGlxdWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMzBweCAwIDEwcHg7XG4gIH1cbiAgXG4gIC5uYW1lX2JvdXRpcXVlIHAge1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICB9XG4gIFxuICAubmFtZV9ib3V0aXF1ZV9hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUQ0MjE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG4gIFxuICAuYmFycmUge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzZjtcbiAgICAvLyBtYXJnaW46IDhweCAwO1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG4gIFxuICAuY29udGFpbmVyX2xpc3RfYm91dGlxdWUge1xuICAgIC8vIHNjcm9sbGJhci13aWR0aDogYXV0bztcbiAgICBvdmVyZmxvdzogYXV0bzsgXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiAjODg4ICNmMWYxZjE7XG4gICAgLy8gc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuICB9XG4gIFxuICAuY29udGFpbmVyX2xpc3RfYm91dGlxdWU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMnB4OyBcbiAgICBoZWlnaHQ6IDNweDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lcl9saXN0X2JvdXRpcXVlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTsgLyogY291bGV1ciBkdSBmb25kIGRlIGxhIHNjcm9sbGJhciAqL1xuICB9XG4gIFxuICAuY29udGFpbmVyX2xpc3RfYm91dGlxdWU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lcl9saXN0X2JvdXRpcXVlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmVkOyBcbiAgfVxuICBcbiAgLm5hbWVfYm91dGlxdWUge1xuICAgIHAge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICBtYXJnaW46IDRweCAwO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgIH1cbiAgXG4gICAgICAmLm5hbWVfYm91dGlxdWVfYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RDQyMTsgLy8gQ291bGV1ciBkZSBmb25kIHF1YW5kIGFjdGlmXG4gICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IC8vIEZvcmNlIGxhIGNvdWxldXIgYmxhbmNoZSBxdWFuZCBhY3RpZlxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLndhcm5pbmctaWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBjb2xvcjogI2ZmMDAwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuLmZhY3R1cmUtY291bnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1pbi13aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLyogUG91ciBhbGlnbmVyIGNvcnJlY3RlbWVudCBsZXMgw4PCqWzDg8KpbWVudHMgKi9cbi5kcmFnZ2FibGUtaXRlbSBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_facture_facture_component_ts.js.map