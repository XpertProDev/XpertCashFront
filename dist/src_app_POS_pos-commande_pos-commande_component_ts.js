"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_POS_pos-commande_pos-commande_component_ts"],{

/***/ 80145:
/*!*******************************************************!*\
  !*** ./src/app/POS/pos-accueil/view-state.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewStateService: () => (/* binding */ ViewStateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class ViewStateService {
  constructor() {
    this.isListViewSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
    this.isListView$ = this.isListViewSubject.asObservable();
  }
  setViewPreference(isList) {
    this.isListViewSubject.next(isList);
    localStorage.setItem('viewPreference', isList ? 'list' : 'grid');
  }
  static {
    this.ɵfac = function ViewStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ViewStateService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ViewStateService,
      factory: ViewStateService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 17209:
/*!************************************************************!*\
  !*** ./src/app/POS/pos-commande/pos-commande.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PosCommandeComponent: () => (/* binding */ PosCommandeComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 56196);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var src_app_admin_page_MODELS_cfa_currency_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin-page/MODELS/cfa-currency.pipe */ 41731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _pos_accueil_view_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pos-accueil/view-state.service */ 80145);
/* harmony import */ var src_app_admin_page_SERVICES_commande_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin-page/SERVICES/commande-state.service */ 17022);
/* harmony import */ var src_app_admin_page_SERVICES_categorie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin-page/SERVICES/categorie.service */ 49293);
/* harmony import */ var src_app_admin_page_SERVICES_VenteService_pos_commande_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin-page/SERVICES/VenteService/pos-commande-service */ 15334);
/* harmony import */ var src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/admin-page/SERVICES/users.service */ 88026);















const _c0 = ["selectAllCheckbox"];
function PosCommandeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.successMessage, " ");
  }
}
function PosCommandeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
function PosCommandeComponent_ul_16_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PosCommandeComponent_ul_16_li_1_Template_li_click_0_listener() {
      const opt_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.selectFilter(opt_r5.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", opt_r5.label, " ");
  }
}
function PosCommandeComponent_ul_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, PosCommandeComponent_ul_16_li_1_Template, 2, 1, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.filterOptions);
  }
}
function PosCommandeComponent_ng_container_32_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PosCommandeComponent_ng_container_32_ul_1_Template_ul_click_0_listener() {
      const commande_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setActiveCommande(commande_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "li", 54)(2, "div", 55)(3, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "li", 54)(10, "div", 58)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "li", 54)(14, "div", 59)(15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "li", 54)(18, "div", 60)(19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "li", 61)(23, "div", 62)(24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "En cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const commande_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("ul_commande_active", ctx_r1.activeCommandeId === commande_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 7, commande_r7.createdAt, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](8, 10, commande_r7.createdAt, "HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](commande_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Quantit\u00E9 ", commande_r7.totalItems, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 13, commande_r7.totalAmount));
  }
}
function PosCommandeComponent_ng_container_32_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Pas de commandes en cours ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function PosCommandeComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, PosCommandeComponent_ng_container_32_ul_1_Template, 26, 15, "ul", 51)(2, PosCommandeComponent_ng_container_32_div_2_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.commandes);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.commandes.length);
  }
}
function PosCommandeComponent_ng_container_33_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PosCommandeComponent_ng_container_33_ul_1_Template_ul_click_0_listener() {
      const vente_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.setActiveVente(vente_r9.venteId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "li", 54)(2, "div", 55)(3, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "li", 54)(10, "div", 58)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "li", 54)(14, "div", 59)(15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "li", 54)(18, "div", 60)(19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "li", 61)(23, "div", 62)(24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const vente_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("ul_commande_active", ctx_r1.activeVenteId === vente_r9.venteId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 10, vente_r9.dateVente, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](8, 13, vente_r9.dateVente, "HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](vente_r9.venteId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Quantit\u00E9 ", ctx_r1.getUpdatedTotalItems(vente_r9), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 16, ctx_r1.getUpdatedTotalAmount(vente_r9)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("status-paid", ctx_r1.getVenteStatus(vente_r9) === "Payer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getVenteStatus(vente_r9), " ");
  }
}
function PosCommandeComponent_ng_container_33_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Pas de ventes pour ce filtre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function PosCommandeComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, PosCommandeComponent_ng_container_33_ul_1_Template, 26, 18, "ul", 51)(2, PosCommandeComponent_ng_container_33_div_2_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.ventes);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.ventes.length);
  }
}
function PosCommandeComponent_ng_container_36_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 67)(1, "div", 68)(2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 70)(5, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 68)(11, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r10.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r10.product.nom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 4, item_r10.product.prixVente), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 6, item_r10.quantity * item_r10.product.prixVente), " ");
  }
}
function PosCommandeComponent_ng_container_36_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 73)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Aucun produit dans cette commande");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function PosCommandeComponent_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ul", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, PosCommandeComponent_ng_container_36_li_2_Template, 14, 8, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, PosCommandeComponent_ng_container_36_div_3_Template, 3, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.activeCommandeItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.activeCommandeItems.length === 0);
  }
}
function PosCommandeComponent_ng_container_37_li_39_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function PosCommandeComponent_ng_container_37_li_39_input_3_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);
      const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](item_r14.editQuantity, $event) || (item_r14.editQuantity = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("max", item_r14.originalQuantity || 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", item_r14.editQuantity);
  }
}
function PosCommandeComponent_ng_container_37_li_39_p_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r14.originalQuantity, " \u2794 ");
  }
}
function PosCommandeComponent_ng_container_37_li_39_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, PosCommandeComponent_ng_container_37_li_39_p_4_span_1_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.currentFilterKey === "annuler" && item_r14.originalQuantity !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r14.quantity, " ");
  }
}
function PosCommandeComponent_ng_container_37_li_39_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" (Orig: ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, item_r14.originalPrice), ") ");
  }
}
function PosCommandeComponent_ng_container_37_li_39_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, item_r14.product.prixVente), ") ");
  }
}
function PosCommandeComponent_ng_container_37_li_39_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span")(1, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r14.originalQuantity * item_r14.originalPrice, " ");
  }
}
function PosCommandeComponent_ng_container_37_li_39_i_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PosCommandeComponent_ng_container_37_li_39_i_16_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.startEditQuantity(item_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function PosCommandeComponent_ng_container_37_li_39_i_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PosCommandeComponent_ng_container_37_li_39_i_17_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.onValidateQuantityEdit(item_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function PosCommandeComponent_ng_container_37_li_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 67)(1, "div", 68)(2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, PosCommandeComponent_ng_container_37_li_39_input_3_Template, 1, 2, "input", 100)(4, PosCommandeComponent_ng_container_37_li_39_p_4_Template, 3, 2, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 70)(6, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, PosCommandeComponent_ng_container_37_li_39_span_8_Template, 3, 3, "span", 31)(9, PosCommandeComponent_ng_container_37_li_39_span_9_Template, 3, 3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 68)(11, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, PosCommandeComponent_ng_container_37_li_39_span_12_Template, 4, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, PosCommandeComponent_ng_container_37_li_39_i_16_Template, 1, 0, "i", 102)(17, PosCommandeComponent_ng_container_37_li_39_i_17_Template, 1, 0, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 80)(19, "label", 81)(20, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function PosCommandeComponent_ng_container_37_li_39_Template_input_ngModelChange_20_listener($event) {
      const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](item_r14.selected, $event) || (item_r14.selected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function PosCommandeComponent_ng_container_37_li_39_Template_input_ngModelChange_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.updateSelectedItems());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "span", 83)(22, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "svg", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "polyline", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "div", 88)(27, "div", 88)(28, "div", 88)(29, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "div", 90)(32, "div", 91)(33, "div", 92)(34, "div", 93)(35, "div", 94)(36, "div", 95)(37, "div", 96)(38, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("selected-item", item_r14.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r14.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !item_r14.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r14.product.nom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.currentFilterKey === "annuler" && item_r14.originalPrice !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.currentFilterKey !== "annuler" || item_r14.originalPrice === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.currentFilterKey === "annuler" && item_r14.originalPrice !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 12, item_r14.quantity * item_r14.product.prixVente), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !item_r14.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r14.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", item_r14.selected);
  }
}
function PosCommandeComponent_ng_container_37_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 73)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Aucun produit dans cette vente");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function PosCommandeComponent_ng_container_37_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Tous les produits s\u00E9lectionn\u00E9s - la vente sera annul\u00E9e ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function PosCommandeComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 74)(2, "div", 75)(3, "ul", 76)(4, "li", 77)(5, "div", 68)(6, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Q");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 70)(9, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Nom du produit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "(PU)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 68)(14, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Prix total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 80)(17, "label", 81)(18, "input", 82, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function PosCommandeComponent_ng_container_37_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.allSelected, $event) || (ctx_r1.allSelected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function PosCommandeComponent_ng_container_37_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.toggleSelectAll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "span", 83)(21, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "svg", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "polyline", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "div", 88)(26, "div", 88)(27, "div", 88)(28, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "div", 90)(31, "div", 91)(32, "div", 92)(33, "div", 93)(34, "div", 94)(35, "div", 95)(36, "div", 96)(37, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "ul", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, PosCommandeComponent_ng_container_37_li_39_Template, 39, 14, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, PosCommandeComponent_ng_container_37_div_40_Template, 3, 0, "div", 66)(41, PosCommandeComponent_ng_container_37_div_41_Template, 2, 0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.allSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r1.activeVenteItems.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.activeVenteItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.activeVenteItems.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedItems.length === ctx_r1.activeVenteItems.length && ctx_r1.activeVenteItems.length > 0 && ctx_r1.currentFilterKey !== "annuler" && !ctx_r1.isActiveVenteAnnule());
  }
}
function PosCommandeComponent_span_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r1.activeVente.montantTotal), " ");
  }
}
function PosCommandeComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 111)(1, "div", 112)(2, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PosCommandeComponent_div_61_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.closeCancelPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h4", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Confirmation d'annulation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Veuillez entrer le Code PIN pour annuler la commande.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 117)(9, "input", 118, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function PosCommandeComponent_div_61_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.pin[0], $event) || (ctx_r1.pin[0] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function PosCommandeComponent_div_61_Template_input_input_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const pin0_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);
      const pin1_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.goToNext(pin0_r18, pin1_r19));
    })("keydown", function PosCommandeComponent_div_61_Template_input_keydown_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const pin0_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);
      const pin1_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.handleBackspace($event, 0, pin0_r18, pin1_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "input", 119, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function PosCommandeComponent_div_61_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.pin[1], $event) || (ctx_r1.pin[1] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function PosCommandeComponent_div_61_Template_input_input_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const pin1_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);
      const pin2_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.goToNext(pin1_r19, pin2_r20));
    })("keydown", function PosCommandeComponent_div_61_Template_input_keydown_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const pin0_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](10);
      const pin1_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.handleBackspace($event, 1, pin1_r19, pin0_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "input", 120, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function PosCommandeComponent_div_61_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.pin[2], $event) || (ctx_r1.pin[2] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function PosCommandeComponent_div_61_Template_input_input_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const pin2_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](14);
      const pin3_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.goToNext(pin2_r20, pin3_r21));
    })("keydown", function PosCommandeComponent_div_61_Template_input_keydown_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const pin1_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);
      const pin2_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.handleBackspace($event, 2, pin2_r20, pin1_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "input", 121, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function PosCommandeComponent_div_61_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.pin[3], $event) || (ctx_r1.pin[3] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function PosCommandeComponent_div_61_Template_input_input_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.verifyCode());
    })("keydown", function PosCommandeComponent_div_61_Template_input_keydown_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const pin2_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](14);
      const pin3_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.handleBackspace($event, 3, pin3_r21, pin2_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("shake", ctx_r1.isCodeWrong);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.pin[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.pin[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.pin[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.pin[3]);
  }
}
function PosCommandeComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 111)(1, "div", 112)(2, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PosCommandeComponent_div_62_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.closeAllPopups());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Motif du remboursement");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "textarea", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function PosCommandeComponent_div_62_Template_textarea_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r1.motifRemboursement, $event) || (ctx_r1.motifRemboursement = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 123)(8, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PosCommandeComponent_div_62_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.confirmRemboursement());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Confirmer");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PosCommandeComponent_div_62_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.closeAllPopups());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.motifRemboursement);
  }
}
class PosCommandeComponent {
  constructor(router, viewState, commandeState, categorieService, posCommandeService, usersService) {
    this.router = router;
    this.viewState = viewState;
    this.commandeState = commandeState;
    this.categorieService = categorieService;
    this.posCommandeService = posCommandeService;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.imgUrl;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    // view state
    this.isListView = true;
    this.showDropdown = false;
    this.showFilterDropdown = false;
    this.errorMessage = null;
    this.successMessage = null;
    // commandes locales
    this.commandes = [];
    this.products = [];
    this.activeCommandeId = '';
    this.activeCommandeCart = new Map();
    this.activeCommandeTotal = 0;
    this.activeCommandeItems = [];
    // état du header checkbox
    this.allSelected = false;
    // ventes backend
    this.allVentes = [];
    this.ventes = [];
    this.activeVenteId = null;
    this.activeVenteItems = [];
    this.activeVente = null;
    this.selectedItems = [];
    this.motifRemboursement = '';
    this.showMotifPopup = false;
    this.isProcessing = false;
    // filtre
    this.filterOptions = [{
      key: 'en-cours',
      label: 'En cours'
    }, {
      key: 'payer',
      label: 'Payées'
    }, {
      key: 'annuler',
      label: 'Annuler'
    }];
    this.currentFilterKey = 'en-cours';
    this.currentFilterLabel = 'En cours';
    // recherche
    this.searchTerm = '';
    this.showCancelPopup = false;
    this.pin = ['', '', '', ''];
    this.isCodeWrong = false;
    this.activeVenteLoading = false;
    this.scannerBuffer = '';
    this.lastKeyTime = 0;
    // snapshot map pour garder une copie initiale des lignes par venteId
    this.venteLineSnapshots = new Map();
    // clé pour localStorage (changer version si tu modifies le format)
    this.SNAPSHOT_KEY = 'vente_line_snapshots_v1';
    this.pendingRemboursementItem = null;
    // --- Pagination (par filter key) ---
    this.pageSize = 10; // ou tout autre valeur (ex: 10)
    this.pageMap = new Map();
  }
  ngOnInit() {
    this.loadSnapshotsFromStorage();
    window.addEventListener('keydown', this.handleScannerInput.bind(this));
    this.viewState.isListView$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(view => {
      this.isListView = view;
    });
    // charger produits + commandes locales par défaut (en-cours)
    this.applyFilter(this.currentFilterKey);
    // s'abonner aux events venant du state
    this.commandeState.commandeUpdated$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(() => {
      this.loadCommandes();
      this.loadActiveCommandeDetails();
    });
    this.commandeState.activeCommandeId$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(id => {
      this.activeCommandeId = id;
      this.loadActiveCommandeDetails();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    window.removeEventListener('keydown', this.handleScannerInput.bind(this));
  }
  ngAfterViewInit() {
    // s'assure que l'état visuel du checkbox est correct une fois la vue initialisée
    this.updateSelectAllState();
  }
  /** Toggle quand on clique le checkbox header */
  toggleSelectAll(checked) {
    if (!this.activeVenteItems || this.activeVenteItems.length === 0) return;
    this.activeVenteItems.forEach(item => {
      item.selected = !!checked;
    });
    // mettre à jour la sélection dérivée & l'état du header
    this.updateSelectedItems();
    this.updateSelectAllState();
  }
  /** Charger snapshots depuis localStorage au démarrage */
  loadSnapshotsFromStorage() {
    try {
      const raw = localStorage.getItem(this.SNAPSHOT_KEY);
      if (!raw) return;
      const obj = JSON.parse(raw);
      Object.keys(obj).forEach(k => {
        const id = Number(k);
        if (!Number.isNaN(id)) {
          this.venteLineSnapshots.set(id, obj[k]);
        }
      });
      console.debug('Loaded vente snapshots from storage', this.venteLineSnapshots);
    } catch (e) {
      console.warn('Failed to load vente snapshots from storage', e);
    }
  }
  /** Sauvegarder snapshots en localStorage */
  saveSnapshotsToStorage() {
    try {
      const obj = {};
      this.venteLineSnapshots.forEach((v, k) => obj[String(k)] = v);
      localStorage.setItem(this.SNAPSHOT_KEY, JSON.stringify(obj));
      console.debug('Saved vente snapshots to storage');
    } catch (e) {
      console.warn('Failed to save vente snapshots to storage', e);
    }
  }
  /** Mise à jour pratique du snapshot pour une vente (appelée après fetch initial ou remboursement) */
  ensureSnapshotForVente(venteId, lignes) {
    if (this.venteLineSnapshots.has(venteId)) return;
    if (!lignes || !Array.isArray(lignes)) return;
    try {
      this.venteLineSnapshots.set(venteId, JSON.parse(JSON.stringify(lignes)));
    } catch {
      this.venteLineSnapshots.set(venteId, lignes.map(l => ({
        ...l
      })));
    }
    this.saveSnapshotsToStorage();
  }
  /* ---------------- Filter / UI ---------------- */
  toggleFilterDropdown() {
    this.showFilterDropdown = !this.showFilterDropdown;
  }
  closeFilterDropdown() {
    this.showFilterDropdown = false;
  }
  selectFilter(key) {
    this.showFilterDropdown = false;
    this.resetPageForKey(key); // <- reset page
    this.applyFilter(key);
  }
  applyFilter(key) {
    this.currentFilterKey = key;
    const opt = this.filterOptions.find(o => o.key === key);
    this.currentFilterLabel = opt ? opt.label : 'Filtre';
    if (key === 'en-cours') {
      // commandes locales
      this.loadProducts();
    } else {
      // ventes backend (charger si pas déjà chargé, puis filtrer)
      this.loadVentesAndFilter(key);
    }
  }
  /* ---------------- Chargement produits / commandes locales ---------------- */
  loadProducts() {
    this.categorieService.getCategories().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: categories => {
        this.products = [];
        categories.forEach(categorie => {
          if (categorie.produits) {
            this.products = [...this.products, ...categorie.produits];
          }
        });
        // Charger commandes locales
        this.loadCommandes();
        this.loadActiveCommandeDetails();
      },
      error: error => console.error('Erreur chargement produits', error)
    });
  }
  loadCommandes() {
    this.commandes = this.commandeState.getAllCommandesIds().map(id => {
      // après remplissage de this.commandes ou this.ventes
      const cur = this.pageMap.get(this.currentFilterKey) ?? 1;
      this.setCurrentPage(cur); // clamp la page si nécessaire
      const commande = this.commandeState.getCommandeDetails(id);
      let totalItems = 0;
      let totalAmount = 0;
      if (commande?.cart) {
        commande.cart.forEach((quantity, productId) => {
          const product = this.products.find(p => p.id === productId);
          if (product) {
            totalItems += quantity;
            totalAmount += quantity * product.prixVente;
          }
        });
        this.commandeState.updateCommandeTotals(id, totalItems, totalAmount);
      }
      return {
        id,
        totalItems,
        totalAmount,
        createdAt: commande?.createdAt || new Date()
      };
    });
    // Tri décroissant par createdAt (plus récent d'abord)
    this.commandes.sort((a, b) => {
      const ta = new Date(a.createdAt).getTime();
      const tb = new Date(b.createdAt).getTime();
      return tb - ta;
    });
  }
  loadActiveCommandeDetails() {
    if (!this.activeCommandeId) return;
    const commande = this.commandeState.getCommandeDetails(this.activeCommandeId);
    if (commande) {
      this.activeCommandeCart = commande.cart;
      this.activeCommandeTotal = commande.totalAmount || 0;
      this.updateActiveCommandeItems();
    }
  }
  updateActiveCommandeItems() {
    this.activeCommandeItems = [];
    if (!this.activeCommandeCart || !this.products.length) return;
    this.activeCommandeCart.forEach((quantity, productId) => {
      if (quantity > 0) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
          this.activeCommandeItems.push({
            product,
            quantity
          });
        }
      }
    });
  }
  /* ---------------- Ventes backend ---------------- */
  loadVentesAndFilter(key) {
    const vendeurId = this.usersService.getCurrentUser()?.id;
    if (!vendeurId) {
      console.warn('Utilisateur non connecté — impossible de charger ventes');
      this.allVentes = [];
      this.ventes = [];
      return;
    }
    // on récupère toujours les ventes du backend (on peut cacher cache si nécessaire)
    this.posCommandeService.getVentesByVendeur(vendeurId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: ventes => {
        console.debug('Ventes API raw:', ventes);
        // assigner d'abord les ventes reçues
        this.allVentes = ventes || [];
        // --- conserver un snapshot initial des lignes pour chaque vente (si pas déjà présent) ---
        // utiliser uniquement 'lignes' (conforme à ton model)
        this.allVentes.forEach(v => {
          const rawLines = v.lignes ?? [];
          if (!this.venteLineSnapshots.has(v.venteId)) {
            try {
              this.venteLineSnapshots.set(v.venteId, JSON.parse(JSON.stringify(rawLines)));
            } catch {
              this.venteLineSnapshots.set(v.venteId, rawLines.map(l => ({
                ...l
              })));
            }
          }
        });
        // persister après avoir initialisé les snapshots
        this.saveSnapshotsToStorage();
        this.applyVentesFilter(key);
        // si on a des ventes filtrées, s'assurer que la première soit active
        if (this.ventes.length > 0) {
          const first = this.ventes[0];
          if (!this.activeVente || this.activeVente.venteId !== first.venteId) {
            this.setActiveVente(first.venteId);
          }
        } else {
          // aucune vente pour ce filtre : nettoyer l'état actif
          this.activeVenteId = null;
          this.activeVente = null;
          this.activeVenteItems = [];
          this.updateSelectedItems();
        }
      },
      error: err => {
        console.error('Erreur chargement ventes', err);
        this.allVentes = [];
        this.ventes = [];
      }
    });
  }
  // private applyVentesFilter(key: FilterKey) {
  //   // filtre flexible selon le contenu de VenteResponse
  //   this.ventes = this.allVentes.filter(v => this.matchesVenteStatus(v, key));
  // }
  applyVentesFilter(key) {
    this.ventes = this.allVentes.filter(v => this.matchesVenteStatus(v, key));
    // après remplissage de this.commandes ou this.ventes
    const cur = this.pageMap.get(this.currentFilterKey) ?? 1;
    this.setCurrentPage(cur); // clamp la page si nécessaire
    // Tri décroissant par date (dateVente > createdAt > fallback sur venteId)
    this.ventes.sort((a, b) => {
      const ta = this.getTimeFromVente(a);
      const tb = this.getTimeFromVente(b);
      return tb - ta; // tb - ta => ordre décroissant
    });
  }
  /** Retourne un timestamp à partir d'une vente (robuste aux champs manquants) */
  getTimeFromVente(v) {
    const candidates = [v.dateVente, v.createdAt, v.date || v.timestamp];
    for (const c of candidates) {
      if (c !== undefined && c !== null) {
        const dt = new Date(c);
        if (!Number.isNaN(dt.getTime())) return dt.getTime();
      }
    }
    // fallback : si pas de date, utilise venteId numérique sinon 0
    const idNum = Number(v.venteId ?? v.id);
    return Number.isNaN(idNum) ? 0 : idNum;
  }
  matchesVenteStatus(v, key) {
    const cat = this.determineVenteCategory(v);
    if (key === 'en-cours') return cat === 'en-cours';
    if (key === 'payer') return cat === 'payer';
    if (key === 'annuler') return cat === 'annuler';
    return false;
  }
  loadVentes() {
    const vendeurId = this.usersService.getCurrentUser()?.id;
    if (!vendeurId) return;
    this.posCommandeService.getVentesByVendeur(vendeurId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: ventes => {
        this.allVentes = ventes || [];
        this.ventes = [...this.allVentes];
      },
      error: err => console.error('Erreur chargement ventes', err)
    });
  }
  // Version corrigée et typée — coller à la place de l'ancienne
  loadActiveVenteDetails() {
    var _this = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Si pas d'ID actif, nettoyer et retourner
      if (!_this.activeVenteId) {
        _this.activeVenteItems = [];
        _this.updateSelectedItems();
        return;
      }
      // Indiquer qu'on charge la vente active (utile pour éviter le "flash" UI)
      _this.activeVenteLoading = true;
      try {
        console.debug('loadActiveVenteDetails - starting for id', _this.activeVenteId);
        // Helper pour récupérer la vente complète depuis un endpoint getVenteById si disponible,
        // sinon retomber sur getVentesByVendeur et trouver l'élément
        const ensureFullVente = /*#__PURE__*/function () {
          var _ref = (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            try {
              const svcAny = _this.posCommandeService;
              if (typeof svcAny.getVenteById === 'function') {
                return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(svcAny.getVenteById(_this.activeVenteId));
              }
              if (typeof _this.posCommandeService.getVentesByVendeur === 'function') {
                const vendeurId = _this.usersService.getCurrentUser()?.id;
                if (!vendeurId) return _this.activeVente;
                const all = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(_this.posCommandeService.getVentesByVendeur(vendeurId));
                if (Array.isArray(all)) {
                  return all.find(v => v.venteId === _this.activeVenteId) || _this.activeVente;
                }
              }
            } catch (err) {
              console.warn('ensureFullVente error', err);
            }
            return _this.activeVente;
          });
          return function ensureFullVente() {
            return _ref.apply(this, arguments);
          };
        }();
        // Tenter de récupérer la version complète
        const fullVente = yield ensureFullVente();
        if (fullVente && (!_this.activeVente || fullVente.venteId !== _this.activeVente.venteId)) {
          console.debug('Fetched fullVente from API for id', _this.activeVenteId, fullVente);
          _this.activeVente = fullVente;
          const idx = _this.allVentes.findIndex(v => v.venteId === _this.activeVenteId);
          if (idx >= 0) _this.allVentes[idx] = fullVente;
        } else {
          console.debug('Using existing activeVente (no fetch or unchanged)');
        }
        // Récupérer les lignes depuis différents champs possibles
        const raw = _this.activeVente || {};
        const lignes = raw.lignes ?? raw.lines ?? raw.items ?? raw.lignesVente ?? [];
        console.debug('lines used for building items:', lignes);
        // utilitaires pour extraire des nombres depuis objets avec clés variées
        const resolveNumberFrom = (obj, keys) => {
          if (!obj) return null;
          for (const k of keys) {
            if (Object.prototype.hasOwnProperty.call(obj, k) && obj[k] !== undefined && obj[k] !== null) {
              const v = obj[k];
              const n = typeof v === 'number' ? v : Number(String(v).replace(',', '.'));
              if (!Number.isNaN(n)) return n;
            }
          }
          return null;
        };
        const qtyKeysOriginal = ['quantiteOriginale', 'quantiteInitiale', 'initialQuantity', 'originalQuantity', 'quantiteAvantRemboursement', 'qtyOriginal', 'original_qty', 'qty_initial'];
        const qtyKeysCurrent = ['quantite', 'quantity', 'qty', 'quantite_actuelle', 'currentQuantity', 'current_qty'];
        const priceKeysOriginal = ['prixOriginal', 'prixAvantRemboursement', 'unitPriceOriginal', 'prixUnitaireOriginal', 'originalPrice'];
        const priceKeysCurrent = ['prixUnitaire', 'prix', 'price', 'unitPrice', 'prix_unitaire'];
        // snapshot pour cette vente (si disponible)
        const snapshot = _this.venteLineSnapshots.get(_this.activeVenteId) ?? [];
        const findInSnapshot = ligne => {
          if (!snapshot || snapshot.length === 0) return null;
          // tenter de matcher par id produit
          const prodId = ligne.produitId ?? ligne.productId ?? ligne.idProduit ?? null;
          if (prodId != null) {
            const found = snapshot.find(s => (s.produitId ?? s.productId ?? s.idProduit) === prodId);
            if (found) return found;
          }
          // fallback par nom (tolérance minime)
          const name = (ligne.nomProduit ?? ligne.productName ?? ligne.name ?? '').toString().toLowerCase();
          if (name) {
            return snapshot.find(s => {
              const sname = (s.nomProduit ?? s.productName ?? s.name ?? '').toString().toLowerCase();
              return sname && sname === name;
            }) || null;
          }
          return null;
        };
        const isCancelledSale = _this.activeVente ? _this.determineVenteCategory(_this.activeVente) === 'annuler' : false;
        console.debug('isCancelledSale:', isCancelledSale, 'activeVente.status:', _this.activeVente?.status);
        // Construire activeVenteItems en normalisant current/original
        _this.activeVenteItems = (lignes || []).map(ligne => {
          const currentQty = resolveNumberFrom(ligne, qtyKeysCurrent) ?? resolveNumberFrom(ligne, qtyKeysOriginal) ?? 0;
          const currentPrice = resolveNumberFrom(ligne, priceKeysCurrent) ?? resolveNumberFrom(ligne, priceKeysOriginal) ?? ligne.prixUnitaire ?? 0;
          let originalQty = resolveNumberFrom(ligne, qtyKeysOriginal) ?? null;
          let originalPrice = resolveNumberFrom(ligne, priceKeysOriginal) ?? null;
          // compléter les originaux depuis le snapshot si manquant
          if ((originalQty === null || originalPrice === null) && snapshot && snapshot.length > 0) {
            const snapLine = findInSnapshot(ligne);
            if (snapLine) {
              if (originalQty === null) originalQty = resolveNumberFrom(snapLine, qtyKeysOriginal) ?? resolveNumberFrom(snapLine, qtyKeysCurrent) ?? originalQty;
              if (originalPrice === null) originalPrice = resolveNumberFrom(snapLine, priceKeysOriginal) ?? resolveNumberFrom(snapLine, priceKeysCurrent) ?? originalPrice;
            }
          }
          const productObj = {
            id: ligne.produitId ?? ligne.productId ?? ligne.idProduit ?? null,
            nom: ligne.nomProduit ?? ligne.productName ?? ligne.name ?? 'Produit',
            prixVente: currentPrice ?? 0
          };
          return {
            product: productObj,
            quantity: currentQty ?? 0,
            originalQuantity: originalQty,
            currentQuantity: currentQty,
            originalPrice: originalPrice,
            currentPrice: currentPrice,
            selected: false,
            editing: false,
            // <-- Ajoutez cette ligne
            editQuantity: 0,
            // <-- Ajoutez cette ligne
            __rawLine: ligne
          };
        });
        // si pas vente annulée, supprimer lignes avec quantité 0 (après remboursement)
        if (!isCancelledSale) {
          _this.activeVenteItems = _this.activeVenteItems.filter(it => (it.quantity ?? 0) > 0);
        }
        // sélection par défaut si onglet "annuler"
        if (_this.currentFilterKey === 'annuler') {
          _this.activeVenteItems.forEach(it => it.selected = true);
        } else {
          _this.activeVenteItems.forEach(it => it.selected = false);
        }
        console.debug('activeVenteItems built:', _this.activeVenteItems);
        // Mettre à jour la sélection dérivée
        _this.updateSelectedItems();
      } catch (err) {
        console.error('Erreur dans loadActiveVenteDetails', err);
        // En cas d'erreur, on vide pour éviter d'afficher de l'ancien contenu
        _this.activeVenteItems = [];
        _this.updateSelectedItems();
      } finally {
        // Toujours désactiver le flag de chargement
        _this.activeVenteLoading = false;
      }
    })();
  }
  setActiveVente(venteId) {
    // définir l'id actif
    this.activeVenteId = venteId;
    // trouver la vente rapide (peut être incomplète)
    this.activeVente = this.ventes.find(v => v.venteId === venteId) || null;
    // --- important: vider immédiatement les items & selection pour éviter le 'flash' ---
    this.activeVenteItems = [];
    this.selectedItems = [];
    this.updateSelectedItems();
    // lancer le chargement complet (async)
    this.loadActiveVenteDetails();
  }
  getTotalItems(vente) {
    return vente.lignes?.reduce((sum, ligne) => sum + ligne.quantite, 0) || 0;
  }
  /* ---------------- Commande manip ---------------- */
  setActiveCommande(id) {
    this.commandeState.setActiveCommande(id);
    this.loadActiveCommandeDetails(); // déjà existant
    this.updateActiveCommandeItems(); // forcer update immédiat
  }
  removeCommande(id) {
    this.commandeState.removeCommande(id);
    this.loadCommandes();
  }
  removeProductFromCommande(productId) {
    const commande = this.commandeState.getCommandeDetails(this.activeCommandeId);
    if (commande) {
      commande.cart.delete(productId);
      const totalItems = this.calculateTotalItems(commande.cart);
      const totalAmount = this.calculateTotalAmount(commande.cart);
      this.commandeState.updateCommandeTotals(this.activeCommandeId, totalItems, totalAmount);
      this.loadCommandes();
      this.loadActiveCommandeDetails();
    }
  }
  calculateTotalItems(cart) {
    let total = 0;
    cart.forEach(quantity => total += quantity);
    return total;
  }
  calculateTotalAmount(cart) {
    let total = 0;
    cart.forEach((quantity, productId) => {
      const product = this.products.find(p => p.id === productId);
      if (product) {
        total += quantity * product.prixVente;
      }
    });
    return total;
  }
  // signature de onSearch — attend une chaîne (template ref fournit une string)
  onSearch(term) {
    this.searchTerm = (term || '').trim().toLowerCase();
    this.resetPageForKey(this.currentFilterKey);
    if (this.currentFilterKey === 'en-cours') {
      // recharger les commandes originales avant filter pour ne pas écraser la source
      this.loadCommandes();
      if (this.searchTerm) {
        this.commandes = this.commandes.filter(c => String(c.id).toLowerCase().includes(this.searchTerm) || String(c.totalAmount).toLowerCase().includes(this.searchTerm) || String(c.totalItems).toLowerCase().includes(this.searchTerm));
      }
    } else {
      // recharge la liste complète depuis allVentes puis filtre
      this.applyVentesFilter(this.currentFilterKey);
      if (this.searchTerm) {
        this.ventes = this.ventes.filter(v => String(v.venteId).toLowerCase().includes(this.searchTerm) || String(v.montantTotal).toLowerCase().includes(this.searchTerm) || v.clientNom && String(v.clientNom).toLowerCase().includes(this.searchTerm) || v.numeroFacture && v.numeroFacture.toLowerCase().includes(this.searchTerm));
      }
    }
  }
  getVenteStatus(vente) {
    if (vente.status) {
      switch (vente.status.toUpperCase()) {
        case 'EN_COURS':
          return 'En cours';
        case 'PARTIELLEMENT_REMBOURSEE':
          return 'Partiellement remboursée';
        case 'REMBOURSEE':
          return 'Annulée';
        // afficher "Annulée" si backend dit REMBOURSEE
        case 'ANNULEE':
          return 'Annulée';
        case 'PAYEE':
        case 'PAYER':
          return 'Payée';
        default:
          // si status inconnu, retombe sur la catégorie
          break;
      }
    }
    const cat = this.determineVenteCategory(vente);
    switch (cat) {
      case 'payer':
        return 'Payée';
      case 'annuler':
        return 'Annulée';
      case 'en-cours':
        return 'En cours';
      default:
        return '—';
    }
  }
  normalizeStr(val) {
    if (val === null || val === undefined) return '';
    const s = String(val).toLowerCase();
    // enlever accents pour meilleure robustesse (ex : 'annulé' -> 'annule')
    try {
      return s.normalize('NFD').replace(/\p{Diacritic}/gu, '');
    } catch {
      // fallback si l'environnement ne supporte pas \p{Diacritic}
      return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
  }
  // remplace entirely determineVenteCategory
  determineVenteCategory(v) {
    // 1) Si le backend fournit un status, on s'en sert (priorité)
    if (v.status) {
      switch (v.status.toUpperCase()) {
        case 'EN_COURS':
          return 'en-cours';
        case 'PARTIELLEMENT_REMBOURSEE':
          // encore considéré comme "payer" côté filtre (partiel = pas totalement annulée)
          return 'payer';
        case 'REMBOURSEE':
          // Vente entièrement remboursée -> la considérer comme "annuler" pour le filtrage
          return 'annuler';
        case 'ANNULEE':
          return 'annuler';
        case 'PAYEE':
        case 'PAYER':
          // possible variantes
          return 'payer';
        default:
          // laisser continuer au fallback
          break;
      }
    }
    // 2) Fallback : si on a les lignes, et que toutes les quantités = 0 => annuler
    const lignes = v.lignes || [];
    if (lignes.length > 0) {
      const totalQuantites = lignes.reduce((sum, l) => sum + (l.quantite || 0), 0);
      if (totalQuantites === 0) return 'annuler';
    }
    // 3) Ancienne logique heuristique (texte, champs alternatifs)
    const vAny = v;
    const candidates = [vAny.paymentStatus, vAny.statut, vAny.etat, vAny.status, vAny.isPaid ? 'payer' : undefined, vAny.paye ? 'payer' : undefined].filter(Boolean).map(x => this.normalizeStr(x));
    const has = terms => candidates.some(c => terms.some(t => c.includes(t)));
    if (has(['payer', 'paid', 'paye', 'payed', 'settled'])) {
      return 'payer';
    }
    if (has(['annul', 'cancel', 'void', 'annulee', 'rembourse'])) {
      return 'annuler';
    }
    if (has(['en cours', 'encours', 'pending', 'in_progress', 'ongoing', 'draft'])) {
      return 'en-cours';
    }
    // 4) Fallback sur montants
    if (typeof v.montantPaye === 'number' && v.montantPaye > 0) {
      return 'payer';
    }
    return 'unknown';
  }
  /* ---------------- Helpers UI ---------------- */
  toggleView(viewType) {
    this.isListView = viewType === 'grid';
    this.showDropdown = true;
    localStorage.setItem('viewPreference', viewType);
  }
  pagePosVente() {
    // this.router.navigate(['/pos-accueil']);
  }
  closeCancelPopup() {
    this.showCancelPopup = false;
  }
  goToNext(currentInput, nextInput) {
    if (currentInput.value && nextInput) {
      nextInput.focus();
    }
  }
  handleBackspace(event, index, currentInput, prevInput) {
    if (event.key === 'Backspace' && !currentInput.value && prevInput) {
      prevInput.focus();
    }
  }
  /** Appelée après toute modification individuelle pour recalculer selectedItems */
  updateSelectedItems() {
    this.selectedItems = this.activeVenteItems.filter(item => item.selected);
    this.updateSelectAllState();
  }
  /** Met à jour allSelected et l'état indéterminé visuel */
  updateSelectAllState() {
    if (!this.activeVenteItems || !this.selectAllCheckbox) {
      this.allSelected = false;
      return;
    }
    const total = this.activeVenteItems.length;
    const selectedCount = this.activeVenteItems.filter(i => i.selected).length;
    this.allSelected = selectedCount === total && total > 0;
    // indeterminate = some selected but not all
    try {
      const el = this.selectAllCheckbox.nativeElement;
      el.indeterminate = selectedCount > 0 && selectedCount < total;
    } catch (e) {
      // si ViewChild pas encore prêt ou environnement ne supporte pas, ignore
    }
  }
  // Ouvrir la popup d'annulation
  openCancelPopup() {
    if (this.selectedItems.length === 0) {
      alert('Veuillez sélectionner au moins un produit à rembourser');
      return;
    }
    this.showCancelPopup = true;
    this.pin = ['', '', '', ''];
    this.isCodeWrong = false;
  }
  // Vérifier le code PIN
  verifyCode() {
    const enteredPin = this.pin.join('');
    this.usersService.verifyCode(enteredPin, ['ADMIN', 'MANAGER']).subscribe({
      next: isValid => {
        if (isValid) {
          this.showCancelPopup = false;
          this.showMotifPopup = true;
        } else {
          this.handleInvalidPin();
        }
      },
      error: () => this.handleInvalidPin()
    });
  }
  handleInvalidPin() {
    this.isCodeWrong = true;
    setTimeout(() => this.isCodeWrong = false, 500);
  }
  // Confirmer le remboursement
  confirmRemboursement() {
    if (!this.motifRemboursement.trim()) {
      alert('Veuillez saisir un motif');
      return;
    }
    this.successMessage = null;
    this.errorMessage = null;
    this.isProcessing = true;
    let produitsQuantites = {};
    if (this.pendingRemboursementItem) {
      // Utilise la quantité à rembourser calculée
      produitsQuantites[this.pendingRemboursementItem.product.id] = this.pendingRemboursementItem.qtyToRefund;
    } else {
      produitsQuantites = this.getProduitsQuantites();
    }
    const request = {
      venteId: this.activeVenteId,
      produitsQuantites,
      motif: this.motifRemboursement,
      rescodePin: this.pin.join('')
    };
    this.posCommandeService.rembourserVente(request).subscribe({
      next: response => {
        this.pendingRemboursementItem = null;
        this.closeAllPopups();
        this.loadVentesAndFilter(this.currentFilterKey);
        this.activeVente = response;
        this.loadActiveVenteDetails();
        this.successMessage = "Remboursement effectué avec succès !";
      },
      error: error => {
        console.error('Erreur remboursement', error);
        this.errorMessage = error.error?.message || 'Une erreur est survenue lors du remboursement';
      },
      complete: () => this.isProcessing = false
    });
  }
  // Nouvelle méthode pour mettre à jour le statut localement
  updateVenteStatus(venteId, newStatus) {
    const vente = this.allVentes.find(v => v.venteId === venteId);
    if (vente) {
      vente.status = newStatus;
      this.applyVentesFilter(this.currentFilterKey);
    }
    if (this.activeVenteId === venteId) {
      this.activeVente.status = newStatus;
    }
  }
  // Helper pour construire produitsQuantites
  getProduitsQuantites() {
    const quantites = {};
    this.selectedItems.forEach(item => {
      // quantité effectivement remboursable (currentQuantity) — fallback à item.quantity
      const qtyToRefund = item.currentQuantity ?? item.quantity ?? 0;
      quantites[item.product.id] = qtyToRefund;
    });
    return quantites;
  }
  // Fermer toutes les popups
  closeAllPopups() {
    this.showCancelPopup = false;
    this.showMotifPopup = false;
    this.motifRemboursement = '';
    this.selectedItems = [];
    this.pendingRemboursementItem = null;
    this.activeVenteItems.forEach(item => item.selected = false);
  }
  // Calculer le montant total sélectionné
  getSelectedAmount() {
    return this.selectedItems.reduce((total, item) => {
      const qtyToRefund = item.currentQuantity ?? item.quantity ?? 0;
      const price = item.currentPrice ?? item.product.prixVente ?? 0;
      return total + qtyToRefund * price;
    }, 0);
  }
  // Calculer le total des items sélectionnés
  getSelectedItemsCount() {
    return this.selectedItems.reduce((total, item) => {
      const qtyToRefund = item.currentQuantity ?? item.quantity ?? 0;
      return total + qtyToRefund;
    }, 0);
  }
  getUpdatedTotalItems(vente) {
    if (!vente) return 0;
    // si on n'est pas sur la vente active, retourner le backend
    if (!this.activeVenteId || vente.venteId !== this.activeVenteId) {
      return this.getTotalItems(vente);
    }
    // si on est en train de charger les lignes, retourner le total backend pour éviter le flash
    if (this.activeVenteLoading) {
      return vente.lignes?.reduce((s, l) => s + (l.quantite || 0), 0) || vente.montantTotal ? this.getTotalItems(vente) : 0;
    }
    // sinon calculer à partir de activeVenteItems
    return this.activeVenteItems.reduce((sum, item) => {
      const qty = item.selected ? 0 : item.currentQuantity ?? item.quantity ?? 0;
      return sum + qty;
    }, 0);
  }
  getUpdatedTotalAmount(vente) {
    if (!vente) return 0;
    if (!this.activeVenteId || vente.venteId !== this.activeVenteId) {
      return vente.montantTotal ?? 0;
    }
    // éviter d'utiliser la liste momentanément obsolète
    if (this.activeVenteLoading) {
      return vente.montantTotal ?? 0;
    }
    return this.activeVenteItems.reduce((total, item) => {
      const qty = item.selected ? 0 : item.currentQuantity ?? item.quantity ?? 0;
      const price = item.currentPrice ?? item.product.prixVente ?? 0;
      return total + qty * price;
    }, 0);
  }
  /** Retourne true si la vente active est considérée comme annulée */
  isActiveVenteAnnule() {
    if (!this.activeVente) return false;
    try {
      // utilise la logique existante pour déterminer la catégorie ('annuler'|'payer'|'en-cours')
      return this.determineVenteCategory(this.activeVente) === 'annuler';
    } catch {
      // fallback : tenter d'utiliser getVenteStatus si determineVenteCategory non disponible
      return this.getVenteStatus(this.activeVente).toLowerCase().includes('annul');
    }
  }
  // Méthode pour basculer entre mode édition et affichage
  toggleQuantityEdit(item) {
    if (item.editing) {
      // Si on est déjà en mode édition, valider les changements
      this.validateQuantityEdit(item);
    } else {
      // Activer le mode édition
      item.editing = true;
      item.editQuantity = item.quantity; // Initialiser avec la valeur actuelle
    }
  }
  // Méthode pour valider la modification de quantité
  validateQuantityEdit(item) {
    if (item.editQuantity && item.editQuantity > 0) {
      item.quantity = item.editQuantity;
      // Mettre à jour les totaux si nécessaire
      this.updateSelectedItems();
    }
    // Désactiver le mode édition
    item.editing = false;
  }
  startEditQuantity(item) {
    item.editing = true;
    item.editQuantity = item.quantity;
  }
  onValidateQuantityEdit(item) {
    // Sauvegarde la quantité initiale avant modification
    const initialQuantity = item.quantity;
    if (item.editQuantity >= 1 && item.editQuantity < initialQuantity) {
      // Calcule la quantité à rembourser
      const qtyToRefund = initialQuantity - item.editQuantity;
      // Mets à jour la quantité affichée
      item.quantity = item.editQuantity;
      // Prépare l'item pour remboursement partiel
      this.pendingRemboursementItem = {
        ...item,
        qtyToRefund
      };
      this.showCancelPopup = true;
      this.pin = ['', '', '', ''];
      this.isCodeWrong = false;
      setTimeout(() => {
        const firstInput = document.getElementById('0');
        firstInput?.focus();
      }, 0);
    } else {
      item.editing = false;
    }
  }
  handleScannerInput(event) {
    console.log(event.key);
    const now = Date.now();
    if (now - this.lastKeyTime > 100) {
      this.scannerBuffer = '';
    }
    this.lastKeyTime = now;
    if (/^\d$/.test(event.key)) {
      this.scannerBuffer += event.key;
      if (this.scannerBuffer.length === 4) {
        this.pin = this.scannerBuffer.split('');
        this.verifyCode();
        this.scannerBuffer = '';
      }
    }
    if (event.key === 'Enter' && this.scannerBuffer.length === 4) {
      this.pin = this.scannerBuffer.split('');
      this.verifyCode();
      this.scannerBuffer = '';
    }
  }
  /** Obtenir la page courante pour le filtre actif */
  getCurrentPage() {
    return this.pageMap.get(this.currentFilterKey) ?? 1;
  }
  setCurrentPage(page) {
    const total = this.getTotalForCurrentFilter();
    const last = Math.max(1, Math.ceil((total || 0) / this.pageSize));
    const p = Math.max(1, Math.min(page, last));
    this.pageMap.set(this.currentFilterKey, p);
  }
  /** Reset page to 1 for given key (useful on filter change or new search) */
  resetPageForKey(key) {
    this.pageMap.set(key, 1);
  }
  /** Prev / Next */
  prevPage() {
    const cur = this.getCurrentPage();
    if (cur > 1) {
      this.setCurrentPage(cur - 1);
    }
  }
  nextPage() {
    const cur = this.getCurrentPage();
    const total = this.getTotalForCurrentFilter();
    const last = Math.max(1, Math.ceil((total || 0) / this.pageSize));
    if (cur < last) {
      this.setCurrentPage(cur + 1);
    }
  }
  isFirstPage() {
    return this.getCurrentPage() <= 1;
  }
  isLastPage() {
    const total = this.getTotalForCurrentFilter();
    const last = Math.max(1, Math.ceil((total || 0) / this.pageSize));
    return this.getCurrentPage() >= last;
  }
  /** Totaux / bornes pour l'affichage du pager */
  get pagerTotal() {
    return this.getTotalForCurrentFilter();
  }
  get pagerStart() {
    const total = this.pagerTotal;
    if (!total) return 0;
    const start = (this.getCurrentPage() - 1) * this.pageSize + 1;
    return Math.min(start, total);
  }
  get pagerEnd() {
    const total = this.pagerTotal;
    if (!total) return 0;
    const end = this.getCurrentPage() * this.pageSize;
    return Math.min(end, total);
  }
  /** Total items selon le filtre courant */
  getTotalForCurrentFilter() {
    if (this.currentFilterKey === 'en-cours') {
      return this.commandes?.length ?? 0;
    } else {
      return this.ventes?.length ?? 0;
    }
  }
  /** Listes paginées exposées au template */
  get displayedCommandes() {
    if (this.currentFilterKey !== 'en-cours') return [];
    const total = this.commandes || [];
    const page = this.getCurrentPage();
    const start = (page - 1) * this.pageSize;
    return total.slice(start, start + this.pageSize);
  }
  get displayedVentes() {
    if (this.currentFilterKey === 'en-cours') return [];
    const total = this.ventes || [];
    const page = this.getCurrentPage();
    const start = (page - 1) * this.pageSize;
    return total.slice(start, start + this.pageSize);
  }
  static {
    this.ɵfac = function PosCommandeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PosCommandeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_pos_accueil_view_state_service__WEBPACK_IMPORTED_MODULE_3__.ViewStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_commande_state_service__WEBPACK_IMPORTED_MODULE_4__.CommandeStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_categorie_service__WEBPACK_IMPORTED_MODULE_5__.CategorieService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_VenteService_pos_commande_service__WEBPACK_IMPORTED_MODULE_6__.PosCommandeService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_7__.UsersService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: PosCommandeComponent,
      selectors: [["app-pos-commande"]],
      viewQuery: function PosCommandeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.selectAllCheckbox = _t.first);
        }
      },
      decls: 63,
      vars: 19,
      consts: [["searchInput", ""], ["selectAllCheckbox", ""], ["pin0", ""], ["pin1", ""], ["pin2", ""], ["pin3", ""], [1, "toast-container"], ["class", "alert alert-success toast-message-success", 4, "ngIf"], ["class", "alert alert-danger toast-message-danger", 4, "ngIf"], [1, "section_contenu_container"], [1, "section_contenu_left"], [1, "section_commande"], ["appClickOutside", "", 1, "toolbar", 3, "clickOutside"], [1, "icon_search"], [1, "ri-search-line"], [1, "search"], ["type", "text", "placeholder", "Rechercher des commandes...", 3, "input"], [1, "btn_search_filtre"], [1, "btn", 3, "click"], [1, "ri-arrow-down-s-fill"], ["class", "dropdown_filter", 4, "ngIf"], ["aria-label", "Pagination", 1, "pager"], ["aria-live", "polite", 1, "pager-info"], [1, "o_pager_counter"], [1, "o_pager_limit"], ["aria-atomic", "true", "role", "group", "aria-label", "Navigation pages", 1, "btn-group", "d-print-none"], ["type", "button", "aria-label", "Pr\u00E9c\u00E9dent", "title", "Page pr\u00E9c\u00E9dente", 1, "o_pager_previous", 3, "click", "disabled"], [1, "ri-arrow-left-s-line"], ["type", "button", "aria-label", "Suivant", "title", "Page suivante", 1, "o_pager_next", 3, "click", "disabled"], [1, "ri-arrow-right-s-line"], [1, "section_list_commande"], [4, "ngIf"], [1, "section_contenu_right", 2, "background-color", "#ffffff", "height", "100vh", "box-shadow", "rgba(0, 0, 0, 0.04) 0px 3px 5px"], [1, "list_produit_select"], [1, "summary_panel"], [1, "double_row"], [1, "double_row", "total"], ["style", "text-decoration: line-through; opacity: 0.6;", 4, "ngIf"], [1, "btn_container"], [1, "btn_action_commande"], [1, "btn_retourn", 3, "click"], [1, "btn_content"], [1, "btn-payment", 3, "click"], [1, "btn_delete", 3, "click"], [1, "ri-delete-bin-5-line"], ["class", "popup-overlay", 4, "ngIf"], [1, "alert", "alert-success", "toast-message-success"], [1, "alert", "alert-danger", "toast-message-danger"], [1, "dropdown_filter"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["class", "ul_commande", 3, "ul_commande_active", "click", 4, "ngFor", "ngForOf"], ["class", "loading_commande", 4, "ngIf"], [1, "ul_commande", 3, "click"], [1, "li_commande"], [1, "commande_date_heure"], [1, "commande_date"], [1, "commande_heure"], [1, "num_onglet_commande"], [1, "quantite_commande"], [1, "price_commande"], [1, "li_commande", 2, "display", "flex", "align-items", "center", "gap", "30px"], [1, "etat_commande"], [1, "loading_commande"], [1, "ul_list_produit_select"], ["class", "li_list_produit_select", 4, "ngFor", "ngForOf"], ["class", "empty-cart-message", 4, "ngIf"], [1, "li_list_produit_select"], [1, "double_commande"], [1, "nombre_select"], [1, "name_produit_select"], [2, "margin", "0"], [1, "price_produit"], [1, "empty-cart-message"], [1, "container_titre"], [1, "content_titre"], [1, "ul_list_produit_select", 2, "margin", "0"], [1, "li_list_produit_select", 2, "background", "none", "font-weight", "700"], ["title", "Quantit\u00E9 s\u00E9lectionner", 1, "nombre_select"], ["title", "Prix unitaire"], [1, "icon_check"], [1, "cyber-checkbox"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "disabled"], [1, "cyber-checkbox__mark"], [1, "cyber-checkbox__box"], ["viewBox", "0 0 12 10", 1, "cyber-checkbox__check"], ["points", "1.5 6 4.5 9 10.5 1"], [1, "cyber-checkbox__effects"], [1, "cyber-checkbox__spark"], [1, "cyber-checkbox__particles"], [1, "particle-1"], [1, "particle-2"], [1, "particle-3"], [1, "particle-4"], [1, "particle-5"], [1, "particle-6"], [1, "particle-7"], [1, "particle-8"], ["class", "li_list_produit_select", 3, "selected-item", 4, "ngFor", "ngForOf"], ["class", "full-refund-warning", 4, "ngIf"], ["type", "number", "min", "1", "class", "quantity-input", 3, "max", "ngModel", "ngModelChange", 4, "ngIf"], [1, "icon_edit_quantite"], ["class", "ri-edit-2-line", 3, "click", 4, "ngIf"], ["class", "ri-check-line", 3, "click", 4, "ngIf"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", 1, "quantity-input", 3, "ngModelChange", "max", "ngModel"], [2, "text-decoration", "line-through", "opacity", "0.7"], [1, "ri-edit-2-line", 3, "click"], [1, "ri-check-line", 3, "click"], [1, "full-refund-warning"], [2, "text-decoration", "line-through", "opacity", "0.6"], [1, "popup-overlay"], [1, "popup"], [1, "close-btn", 3, "click"], [1, "ri-close-line"], [1, "titlh"], [1, "titlp"], [1, "pin-container"], ["type", "password", "maxlength", "1", "id", "0", 3, "ngModelChange", "input", "keydown", "ngModel"], ["type", "password", "maxlength", "1", "id", "1", 3, "ngModelChange", "input", "keydown", "ngModel"], ["type", "password", "maxlength", "1", "id", "2", 3, "ngModelChange", "input", "keydown", "ngModel"], ["type", "password", "maxlength", "1", "id", "3", 3, "ngModelChange", "input", "keydown", "ngModel"], ["placeholder", "Raison du remboursement", "rows", "4", 3, "ngModelChange", "ngModel"], [1, "btn-container"], [1, "btn-confirm", 3, "click"], [1, "btn-cancel", 3, "click"]],
      template: function PosCommandeComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, PosCommandeComponent_div_1_Template, 2, 1, "div", 7)(2, PosCommandeComponent_div_2_Template, 2, 1, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 9)(4, "div", 10)(5, "div", 11)(6, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("clickOutside", function PosCommandeComponent_Template_div_clickOutside_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.closeFilterDropdown());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 15)(10, "input", 16, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function PosCommandeComponent_Template_input_input_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            const searchInput_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](11);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.onSearch(searchInput_r3.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 17)(13, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PosCommandeComponent_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.toggleFilterDropdown());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, PosCommandeComponent_ul_16_Template, 2, 1, "ul", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 21)(18, "div", 22)(19, "span", 23)(20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, " / ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 25)(27, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PosCommandeComponent_Template_button_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.prevPage());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PosCommandeComponent_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.nextPage());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, PosCommandeComponent_ng_container_32_Template, 3, 2, "ng-container", 31)(33, PosCommandeComponent_ng_container_33_Template, 3, 2, "ng-container", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 32)(35, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, PosCommandeComponent_ng_container_36_Template, 4, 2, "ng-container", 31)(37, PosCommandeComponent_ng_container_37_Template, 42, 5, "ng-container", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 34)(39, "div", 35)(40, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Taxes");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "00 CFA");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 36)(45, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, PosCommandeComponent_span_48_Template, 3, 3, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](50, "cfaCurrency");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 38)(52, "div", 39)(53, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PosCommandeComponent_Template_button_click_53_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.router.navigate(["/pos-accueil"]));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](54, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 41)(56, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PosCommandeComponent_Template_button_click_56_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.openCancelPopup());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "Annuler la commande");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 39)(59, "button", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PosCommandeComponent_Template_button_click_59_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.removeCommande(ctx.activeCommandeId));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](60, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, PosCommandeComponent_div_61_Template, 17, 6, "div", 45)(62, PosCommandeComponent_div_62_Template, 12, 1, "div", 45);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.currentFilterLabel, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showFilterDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx.pagerStart, " - ", ctx.pagerEnd, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.pagerTotal);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.isFirstPage() || ctx.pagerTotal === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.isLastPage() || ctx.pagerTotal === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currentFilterKey === "en-cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currentFilterKey !== "en-cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currentFilterKey === "en-cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currentFilterKey !== "en-cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selectedItems.length > 0 && ctx.activeVente);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](50, 17, ctx.getUpdatedTotalAmount(ctx.activeVente)), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showCancelPopup);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showMotifPopup);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, src_app_admin_page_MODELS_cfa_currency_pipe__WEBPACK_IMPORTED_MODULE_2__.CfaCurrencyPipe],
      styles: ["@charset \"UTF-8\";\n.payment-popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.733);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.payment-popup[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 85%;\n  height: 90vh;\n  border-radius: 10px;\n  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  position: relative;\n}\n.payment-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: #6c757d;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.payment-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n\n.list-client-popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.733);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.list-client-popup[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 90%;\n  height: 90vh;\n  border-radius: 10px;\n  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  position: relative;\n}\n.list-client-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.list-client-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: #6c757d;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.list-client-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n\n.detail-popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 2rem 0;\n  z-index: 1000;\n}\n\n.detail-image[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n}\n.detail-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  border-radius: 4px;\n}\n\n.detail-popup[_ngcontent-%COMP%] {\n  background: #fff;\n  width: 90%;\n  max-width: 900px;\n  border-radius: 8px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #e5e5e5;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .shop-name[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 16px;\n  font-weight: 500;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 250px 250px 1fr;\n  row-gap: 0.75rem;\n  column-gap: 4rem;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  line-height: 25px;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #555;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #222;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .detail-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  padding: 1rem 0;\n  border-top: 1px solid #e5e5e5;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .detail-description[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #555;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .detail-description[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #333;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  background: #f8f9fa;\n  text-align: right;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  background: #0672e4;\n  border: none;\n  color: white;\n  padding: 0.6rem 1.2rem;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]:hover {\n  background: #45a049;\n}\n\n\n\n.btn-payment-pop[_ngcontent-%COMP%]:disabled {\n  background-color: #f4f4f4;\n  cursor: not-allowed;\n  color: #acacac;\n}\n\n.btnAddClient[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.btnAddClient[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #0672e4;\n  padding: 8px 20px;\n  border-radius: 5px;\n  color: #fff;\n  font-size: 12px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\ntr[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 18px 15px;\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n  padding: 12px 8px;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n\n\n.imgClient[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n\n.imgClient[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n  border-radius: 50%;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n\n.imgClient[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1); \n\n}\n\n.no-client-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: #888;\n}\n\n.inputSearch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n}\n\n.inputSearch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-left: 10px;\n  border-radius: 5px;\n  border: 1px solid #000;\n  font-size: 13px;\n}\n\n.inputSearch[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 15px;\n  font-size: 17px;\n}\n\n\n\n.add-client-popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.733);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1001;\n}\n\n.add-client-popup[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: white;\n  width: 700px;\n  height: 83vh;\n  border-radius: 10px;\n  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 20px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: #6c757d;\n  cursor: pointer;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow-y: auto;\n  padding: 15px;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 10px 15px;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: 500;\n  font-size: 13px;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0672e4;\n  box-shadow: 0 0 0 0.2rem rgba(6, 114, 228, 0.25);\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 80px;\n  resize: vertical;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .client-type-selector[_ngcontent-%COMP%] {\n  display: flex;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .client-type-selector[_ngcontent-%COMP%]   .client-type-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px;\n  background: #f1f1f1;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .client-type-selector[_ngcontent-%COMP%]   .client-type-btn.active[_ngcontent-%COMP%] {\n  background: #0672e4;\n  color: white;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .photo-upload[_ngcontent-%COMP%]   .photo-placeholder[_ngcontent-%COMP%] {\n  height: 100px;\n  border: 1px dashed #ced4da;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .photo-upload[_ngcontent-%COMP%]   .photo-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 5px;\n  color: #6c757d;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .photo-upload[_ngcontent-%COMP%]   .photo-placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 15px 20px;\n  background-color: #f8f9fa;\n  border-top: 1px solid #dee2e6;\n  display: flex;\n  justify-content: flex-end;\n  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #ff0000;\n  color: #fff;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d70404;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  background-color: #0672e4;\n  color: white;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]:hover {\n  background-color: #055cb9;\n}\n\n.double_input[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 10px;\n}\n\n.grid_colonne[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #695c5c;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: rgb(107, 102, 102);\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 5px;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\n\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #0672E4; \n\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n.input_cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.client-type-selector[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.client-type-selector[_ngcontent-%COMP%]   .client-type-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px;\n  background: #f1f1f1;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: center;\n}\n.client-type-selector[_ngcontent-%COMP%]   .client-type-btn.active[_ngcontent-%COMP%] {\n  background: #0672e4;\n  color: white;\n}\n\n.nombreCount[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  position: absolute;\n  top: -15px;\n  background-color: #ddd;\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  right: -9px;\n}\n\n.nombreCount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n  border-radius: 50%;\n  font-size: 9px;\n}\n\n.barre[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.2470588235);\n  margin: 8px 10px;\n}\n\n.contentIcon[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  padding: 0px 5px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.contentIcon.active[_ngcontent-%COMP%] {\n  background-color: #e6f7ff; \n\n  border: 1px solid #1890ff; \n\n}\n\n.contentIcon.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1890ff; \n\n}\n\n.contentIcon[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: #f5f5f5; \n\n}\n\n.date-red[_ngcontent-%COMP%] {\n  color: red !important;\n  font-weight: bold;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n\n.section_contenu_container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 400px;\n  flex: 1; \n\n  min-height: 0; \n\n}\n\n.section_contenu_left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n\n.section_favory_produit[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  margin-top: 12px;\n  flex: 1; \n\n  min-height: 0; \n\n}\n\n.section_favory[_ngcontent-%COMP%] {\n  border-right: 1px solid #d1d1d1;\n  height: 100vh;\n}\n\n.section_favory[_ngcontent-%COMP%]   .ul_section_favory[_ngcontent-%COMP%]   .li_section_favory[_ngcontent-%COMP%] {\n  background-color: #CDE3FA;\n  padding: 5px 10px;\n}\n\n.double[_ngcontent-%COMP%]   .icon_favory[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.title_favory[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.titre_categorie[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .category-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-test-btn[_ngcontent-%COMP%], \n.titre_categorie[_ngcontent-%COMP%]   .scan-reload-btn[_ngcontent-%COMP%], \n.titre_categorie[_ngcontent-%COMP%]   .scan-status-btn[_ngcontent-%COMP%], \n.titre_categorie[_ngcontent-%COMP%]   .scan-test-multi-btn[_ngcontent-%COMP%], \n.titre_categorie[_ngcontent-%COMP%]   .scan-reset-btn[_ngcontent-%COMP%] {\n  background: #0672E4;\n  color: white;\n  border: none;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  transition: background-color 0.2s;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-test-btn[_ngcontent-%COMP%]:hover, \n.titre_categorie[_ngcontent-%COMP%]   .scan-reload-btn[_ngcontent-%COMP%]:hover, \n.titre_categorie[_ngcontent-%COMP%]   .scan-status-btn[_ngcontent-%COMP%]:hover, \n.titre_categorie[_ngcontent-%COMP%]   .scan-test-multi-btn[_ngcontent-%COMP%]:hover, \n.titre_categorie[_ngcontent-%COMP%]   .scan-reset-btn[_ngcontent-%COMP%]:hover {\n  background: #0556b3;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-status-btn[_ngcontent-%COMP%] {\n  background: #28a745;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-status-btn[_ngcontent-%COMP%]:hover {\n  background: #1e7e34;\n}\n\n.loading-indicator[_ngcontent-%COMP%], \n.loading-more-indicator[_ngcontent-%COMP%], \n.all-loaded-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 20px;\n  margin: 20px 0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.loading-indicator[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n\n.loading-more-indicator[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: #1976d2;\n  border: 1px solid #bbdefb;\n}\n\n.all-loaded-indicator[_ngcontent-%COMP%] {\n  background-color: #e8f5e8;\n  color: #2e7d32;\n  border: 1px solid #c8e6c9;\n}\n\n.loading-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.loading-more-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.all-loaded-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n.all-loaded-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  animation: none;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.titre_categorie[_ngcontent-%COMP%]   .scan-test-multi-btn[_ngcontent-%COMP%] {\n  background: #ffc107;\n  color: #212529;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-test-multi-btn[_ngcontent-%COMP%]:hover {\n  background: #e0a800;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-reset-btn[_ngcontent-%COMP%] {\n  background: #dc3545;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-reset-btn[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-status[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #666;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 6px;\n  border-radius: 3px;\n  background: #f0f0f0;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-status.active[_ngcontent-%COMP%] {\n  color: #28a745;\n  background: #d4edda;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 0;\n  font-weight: 600;\n}\n\n.ul_li_name_categorie[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 7px 10px;\n  margin-bottom: 8px;\n  font-size: 15px;\n  cursor: pointer;\n}\n\n.ul_li_name_categorie[_ngcontent-%COMP%]:hover {\n  background-color: #CDE3FA;\n}\n\n.allCate[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 10px 0;\n  letter-spacing: 0.6px;\n  font-weight: 500;\n}\n\n.section_produit[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: calc(100vh - 75px);\n  min-height: 0; \n\n}\n.section_produit[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n  height: 2px;\n}\n.section_produit[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(6, 114, 228, 0.2);\n  border-radius: 5px;\n}\n.section_produit[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.li_list_produit_select[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 10px;\n  margin: 6px 8px;\n  border-radius: 5px;\n}\n\n.nombre_select[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.name_produit_select[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.price_produit[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.icon_close_select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.icon_close_select[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.icon_close_select[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #ff0000;\n}\n\n\n\n.product-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 1rem;\n  padding: 0 10px 10px;\n}\n\n\n\n.product-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 10px;\n}\n\n\n\n.stock-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  left: 5px;\n  background: #fde047; \n\n  color: #333;\n  font-size: 0.6rem;\n  font-weight: bold;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.product-card.disabled[_ngcontent-%COMP%], \n.li_list.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n\n\n.stock-badge-list[_ngcontent-%COMP%] {\n  background: #fde047; \n\n  color: #333;\n  font-size: 0.8rem;\n  font-weight: bold;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n\n.product-img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  margin-top: 10px;\n}\n\n\n\n.favorite-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 3px;\n  font-size: 1.2rem;\n  color: #0672e4;\n  cursor: pointer;\n}\n\n.favorite-icon.ri-heart-fill[_ngcontent-%COMP%] {\n  color: #0672e4;\n}\n\n.favorite-icon-list[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #0672e4;\n  cursor: pointer;\n}\n\n.favorite-icon-list.ri-heart-fill[_ngcontent-%COMP%] {\n  color: #0672e4;\n}\n\n\n\n.card-body[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0.5rem 0;\n  flex: 1; \n\n}\n\n.product-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin: 0.25rem 0;\n}\n\n.product-stock[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #666;\n  margin: 0.15rem 0;\n}\n\n.product-price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n  font-size: 13px;\n}\n\n\n\n.btn-decrement[_ngcontent-%COMP%] {\n  border: none;\n  background: #f3f4f6;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  pointer-events: auto !important;\n  z-index: 10;\n}\n\n.btn-decrement[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #333;\n}\n\n.bottom_price_sub[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0 10px;\n}\n\n.section_contenu_right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: rgba(0, 0, 0, 0.04) 0 3px 5px;\n  padding-bottom: 10px;\n  \n\n}\n\n\n\n.list_produit_select[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.list_produit_select[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n.list_produit_select[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n}\n.list_produit_select[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n\n\n.summary_panel[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 4px 10px;\n  margin: 0 10px;\n}\n\n.summary_panel[_ngcontent-%COMP%]   .double_row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.25rem 0;\n}\n\n.summary_panel[_ngcontent-%COMP%]   .double_row.total[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  padding-top: 0.5rem;\n  border-bottom: none;\n}\n\n.double_row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.double_row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n\n\n.keypad[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 5px;\n  padding: 5px 10px;\n}\n\n.keypad[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 3.5rem;\n  background: #f1f5f9;\n  border: none;\n  font-size: 1rem;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n.keypad[_ngcontent-%COMP%]   button.backspace[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n\n\n.btn_content[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.btn-payment[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  margin-bottom: 68px;\n  background: #2978f2;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.name_stock_list[_ngcontent-%COMP%] {\n  line-height: 1.5;\n  padding: 10px;\n}\n\n.product-stock-list[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #666;\n}\n\n.name_stock_list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.moyen_paiement[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.price_du[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.moyen_paiement_restant[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.paiement_btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nul.ul_list[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.li_list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #fff;\n  box-shadow: rgba(100, 100, 111, 0.063) 0px 7px 29px 0px;\n  padding: 0 10px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\n\n.img_product_list[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  margin: 5px 0;\n}\n\n.img_product_list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;\n}\n\n.section_popup_paiement[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 350px;\n  flex: 1;\n  min-height: 0;\n  margin: 30px 80px;\n}\n\n.btn-payment-pop[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  background: #2978f2;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n\n\n.methode_paiement[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 15px;\n  margin: 20px 10px;\n}\n\n.cadre_paiement[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 10px;\n  height: 100px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n  padding: 10px 0;\n  cursor: pointer;\n}\n\n.cadre_paiement[_ngcontent-%COMP%]:hover {\n  border: 0.5px solid #0672e4;\n}\n\n.img_paiement[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  object-fit: cover;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.img_paiement[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.title_paiement[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n\n.title_paiement[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  font-size: 12px;\n}\n\n.montant_paiement[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.double[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.cadre_section_contenu_left_prise[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  padding: 24px;\n  border-radius: 8px;\n  align-items: center;\n}\n\n.section_contenu_left_prise[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.montant_paiement[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n  gap: 8px;\n}\n\n.montant_paiement[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.montant_paiement[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #666;\n}\n\n.moyen_paiement_price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #CDE3FA;\n  gap: 16px;\n  border-radius: 5px;\n  padding: 10px;\n}\n\n.moyen_paiement[_ngcontent-%COMP%] {\n  background: #E6F3FF;\n  border: 1px solid #C1E0FF;\n  border-radius: 8px;\n  padding: 8px 16px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.moyen_paiement.selected[_ngcontent-%COMP%] {\n  background: #D0EBFF;\n  border-color: #90CDF4;\n}\n\n.moyen_paiement[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  color: #333;\n}\n\n.moyen_prise_du[_ngcontent-%COMP%]   .price_du[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 16px;\n  color: #333;\n}\n\n.clear-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #E53E3E;\n  cursor: pointer;\n}\n\n.discount-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 8px;\n}\n\n.btn-currency[_ngcontent-%COMP%], \n.btn-percent[_ngcontent-%COMP%] {\n  background: #F0F0F0;\n  border: 1px solid #b2b2b2;\n  border-radius: 4px;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n.btn-percent[_ngcontent-%COMP%] {\n  padding: 2px 15px;\n}\n\n.btn-currency[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  font-size: 12px !important;\n}\n\n.input-discount[_ngcontent-%COMP%] {\n  width: 100px;\n  border: none;\n  outline: none;\n  text-align: right;\n  font-size: 16px;\n  text-align: center;\n}\n\n.discount-unit[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #333;\n}\n\n.discount-label[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  top: -18px;\n}\n\n.discount-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 10px;\n  color: #666;\n}\n\n.paiement_restant[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 30px;\n}\n\n.btn_facture[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.btn_facture[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.paiement_btn[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 12px;\n  border-radius: 5px;\n}\n\n.paiement_btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.btn_client[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.btn_client[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.double_client_facture[_ngcontent-%COMP%] {\n  gap: 5px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 0 10px;\n}\n\n.double_remise_facture[_ngcontent-%COMP%] {\n  gap: 3px;\n  display: grid;\n  grid-template-columns: 75px 1fr;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background-color: #0672E4 !important;\n  color: white !important;\n}\n.selected[_ngcontent-%COMP%]   .name_categorie[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.selected[_ngcontent-%COMP%]   .nombre[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.selected_mode_pay[_ngcontent-%COMP%] {\n  border: 1px solid #2f7dd1;\n}\n\n.keypad[_ngcontent-%COMP%]   button.btn_keypad_active[_ngcontent-%COMP%] {\n  border: 1px solid #2f7dd1;\n  background-color: #e0efff;\n}\n\n\n\n.cadre_paiement.selected[_ngcontent-%COMP%] {\n  border: 2px solid #4CAF50;\n  background-color: #f0fff4;\n}\n\n.price_du[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.2em;\n}\n\n\n\n.alert-low-stock[_ngcontent-%COMP%] {\n  color: red !important;\n  font-weight: bold;\n}\n\n.safe-stock[_ngcontent-%COMP%] {\n  color: green !important;\n  font-weight: bold;\n}\n\n.barcode-shifted[_ngcontent-%COMP%] {\n  left: 11px;\n  position: relative;\n}\n\n.btn_client.has-selected[_ngcontent-%COMP%] {\n  background-color: #e6f7ff;\n  border: 1px solid #91d5ff;\n}\n\n.clear-customer[_ngcontent-%COMP%]:hover {\n  color: #cf1322;\n}\n\n.selected-client-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.selected-client-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.selected-client-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n}\n\n.paiement_btn[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.clear-customer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 8px;\n  background: white;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;\n  cursor: pointer;\n}\n\n\n\n[draggable][_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n\n\n.popup-header[_ngcontent-%COMP%] {\n  cursor: move;\n}\n\n\n\n.discount-badge[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #c62828;\n  padding: 2px 6px 2px 0;\n  border-radius: 4px;\n  font-size: 9px;\n  margin-left: 5px;\n}\n\n\n\n.edit-discount[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #0672E4;\n}\n.edit-discount[_ngcontent-%COMP%]:hover {\n  color: rgb(4.0384615385, 76.7307692308, 153.4615384615);\n}\n\n\n\n.btn-currency.active[_ngcontent-%COMP%], .btn-percent.active[_ngcontent-%COMP%] {\n  color: #000;\n  background-color: #CDE3FA;\n  border: 1px solid #0672e4;\n}\n\n.global-discount[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  border-bottom: 1px dashed #eee;\n}\n.global-discount[_ngcontent-%COMP%]   .discount-input[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.global-discount[_ngcontent-%COMP%]   .discount-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  background: #f8f8f8;\n  cursor: pointer;\n}\n.global-discount[_ngcontent-%COMP%]   .discount-input[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #0672E4;\n  color: white;\n  border-color: #0672E4;\n}\n.global-discount[_ngcontent-%COMP%]   .discount-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 70px;\n  text-align: center;\n  padding: 6px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.double_row.total[_ngcontent-%COMP%] {\n  border-top: 1px solid #ddd;\n  padding-top: 8px;\n  margin-top: 8px;\n}\n\n.global-active[_ngcontent-%COMP%] {\n  background-color: #e6f7ff !important;\n  border: 1px solid #91d5ff !important;\n}\n\n.scan-error-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  background-color: #ffebee;\n  color: #c62828;\n  padding: 12px 16px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  z-index: 1000;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.btn_container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 60px 1fr 60px;\n  margin: 10px 10px 0;\n  gap: 10px;\n}\n\n.li_list_produit_select[_ngcontent-%COMP%] {\n  position: relative;\n  margin-right: 25px;\n}\n\n.icon_check[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -20px;\n}\n\n.icon_check[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.icon_edit_quantite[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.icon_edit_quantite[_ngcontent-%COMP%]:hover {\n  color: #0672E4;\n}\n\n.btn-payment[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.btn_content[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.btn_delete[_ngcontent-%COMP%], \n.btn_retourn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.btn_delete[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.btn_retourn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.btn_delete[_ngcontent-%COMP%] {\n  background-color: #F2ACAC;\n  color: #000;\n}\n\n.btn_retourn[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  color: #000;\n}\n\n.section_list_commande[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: calc(100vh - 115px);\n  padding-right: 5px;\n}\n.section_list_commande[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.section_list_commande[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(6, 114, 228, 0.2);\n  border-radius: 5px;\n}\n.section_list_commande[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.ul_commande[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px 10px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;\n  background-color: #ffffff;\n}\n\n.ul_commande_active[_ngcontent-%COMP%] {\n  background-color: #CDE3FA;\n}\n\n.commande_date[_ngcontent-%COMP%], .commande_heure[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.etat_commande[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 3px 20px;\n  border-radius: 20px;\n}\n\n.icon_delete_commande[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.icon_favory_commande[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.icon_delete_commande[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #ff0000;\n}\n\n.icon_favory_commande[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0672E4;\n}\n\n\n\n.toolbar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 45px 1fr 130px 180px;\n  margin: 10px 10px 0;\n}\n\n.pager-info[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.icon_search[_ngcontent-%COMP%] {\n  height: 45px;\n  background-color: #f4f4f4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-left: 1px solid #000;\n  border-top: 1px solid #000;\n  border-bottom: 1px solid #000;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 45px;\n  border: 1px solid #000;\n  padding-left: 10px;\n}\n\n.btn_search_filtre[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 100%;\n  border-radius: 0;\n  border: 1px solid #000;\n  border-right: 1px solid #000;\n  border-top: 1px solid #000;\n  border-bottom: 1px solid #000;\n  border-left: 0px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: #f4f4f4;\n  font-size: 12px;\n  color: #000;\n}\n\n.btn_search_filtre[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 1px;\n  padding-left: 5px;\n}\n\n.loading_commande[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #666;\n}\n\n.double_commande[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.btn_search_filtre[_ngcontent-%COMP%] {\n  position: relative;\n}\n.btn_search_filtre[_ngcontent-%COMP%]   .dropdown_filter[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  width: 150px;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 100;\n  margin-top: 5px;\n  padding: 0;\n  list-style: none;\n}\n.btn_search_filtre[_ngcontent-%COMP%]   .dropdown_filter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  cursor: pointer;\n  transition: background 0.2s;\n  font-size: 14px;\n}\n.btn_search_filtre[_ngcontent-%COMP%]   .dropdown_filter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n\n.status-paid[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-weight: 500;\n  background-color: rgba(40, 167, 69, 0.1) !important;\n}\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.popup[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: white;\n  padding: 30px;\n  border-radius: 10px;\n  text-align: center;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  max-width: 400px;\n  width: 100%;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n  color: #666;\n}\n\n.titlh[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: poppins, sans-serif;\n  margin-bottom: 15px;\n  text-align: center;\n  color: #333;\n}\n\n.titlp[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: poppins, sans-serif;\n  margin-bottom: 20px;\n  text-align: center;\n  color: #555;\n}\n\nh6[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: poppins, sans-serif;\n  margin-bottom: 10px;\n  text-align: center;\n  color: #333;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  resize: vertical;\n  font-size: 12px;\n  margin-bottom: 15px;\n  box-sizing: border-box;\n}\n\n.pin-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n}\n.pin-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  font-size: 24px;\n  border: 2px solid #e0e0e0;\n  border-radius: 8px;\n  transition: all 0.3s;\n}\n.pin-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #0672E4;\n  outline: none;\n  box-shadow: 0 0 5px rgba(52, 119, 219, 0.5);\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 16px;\n  transition: background-color 0.3s;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #2980b9;\n}\n\n.shake[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_shake 0.5s;\n}\n\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-10px);\n  }\n  75% {\n    transform: translateX(10px);\n  }\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #888;\n  padding: 5px;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n  color: #333;\n}\n.close-btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);\n}\n\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  margin: 10px 0;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  resize: vertical;\n}\n\n.btn-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 15px;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n  border: none;\n  padding: 4px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d32f2f;\n}\n\n.btn-confirm[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: white;\n  border: none;\n  padding: 4px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n\n\n.cyber-checkbox[_ngcontent-%COMP%] {\n  --checkbox-size: 15px;\n  --checkbox-color: #0672E4;\n  --checkbox-check-color: #ffffff;\n  --checkbox-hover-color: #0360c3;\n  --checkbox-spark-offset: -20px;\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  margin-top: 8px;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cyber-checkbox__mark[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: var(--checkbox-size);\n  height: var(--checkbox-size);\n}\n\n.cyber-checkbox__box[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border: 1.5px solid var(--checkbox-color);\n  border-radius: 4px;\n  background: transparent;\n  transition: all 0.2s ease;\n}\n\n.cyber-checkbox__check[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  padding: 2px;\n  stroke: var(--checkbox-check-color);\n  stroke-width: 2px;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n  transform: scale(0);\n  transition: transform 0.2s ease;\n}\n\n.cyber-checkbox__effects[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: var(--checkbox-spark-offset);\n  pointer-events: none;\n}\n\n.cyber-checkbox__spark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 2px;\n  height: 2px;\n  background: var(--checkbox-color);\n  border-radius: 50%;\n  opacity: 0;\n  transform-origin: center center;\n}\n\n\n\n.cyber-checkbox[_ngcontent-%COMP%]:hover   .cyber-checkbox__box[_ngcontent-%COMP%] {\n  border-color: var(--checkbox-hover-color);\n  box-shadow: 0 0 0 2px rgba(92, 103, 255, 0.1);\n}\n\n\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .cyber-checkbox__box[_ngcontent-%COMP%] {\n  background: var(--checkbox-color);\n  border-color: var(--checkbox-color);\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .cyber-checkbox__check[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n\n\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .cyber-checkbox__spark[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spark 0.4s ease-out;\n}\n\n.cyber-checkbox__spark[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(0deg) translateX(var(--checkbox-spark-offset));\n}\n\n.cyber-checkbox__spark[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotate(90deg) translateX(var(--checkbox-spark-offset));\n}\n\n.cyber-checkbox__spark[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(180deg) translateX(var(--checkbox-spark-offset));\n}\n\n.cyber-checkbox__spark[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotate(270deg) translateX(var(--checkbox-spark-offset));\n}\n\n@keyframes _ngcontent-%COMP%_spark {\n  0% {\n    opacity: 0;\n    transform: scale(0) rotate(0deg) translateX(var(--checkbox-spark-offset));\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1) rotate(0deg) translateX(calc(var(--checkbox-spark-offset) * 1.5));\n  }\n}\n\n\n.cyber-checkbox[_ngcontent-%COMP%]:active   .cyber-checkbox__box[_ngcontent-%COMP%] {\n  transform: scale(0.9);\n}\n\n\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .cyber-checkbox__box[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 4px rgba(92, 103, 255, 0.2);\n}\n\n.cyber-checkbox__particles[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -50%;\n  pointer-events: none;\n}\n\n.cyber-checkbox__particles[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: var(--checkbox-color);\n  opacity: 0;\n}\n\n\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-1 0.4s ease-out forwards;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-2[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-2 0.4s ease-out forwards 0.1s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-3[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-3 0.4s ease-out forwards 0.15s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-4[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-4 0.4s ease-out forwards 0.05s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-5[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-5 0.4s ease-out forwards 0.12s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-6[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-6 0.4s ease-out forwards 0.08s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-7[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-7 0.4s ease-out forwards 0.18s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-8[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-8 0.4s ease-out forwards 0.15s;\n}\n\n\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-out-1 0.4s ease-out forwards;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-2[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-out-2 0.4s ease-out forwards 0.1s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-3[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-out-3 0.4s ease-out forwards 0.15s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-4[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-out-4 0.4s ease-out forwards 0.05s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-5[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-out-5 0.4s ease-out forwards 0.12s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-6[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-out-6 0.4s ease-out forwards 0.08s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-7[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-out-7 0.4s ease-out forwards 0.18s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-8[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-out-8 0.4s ease-out forwards 0.15s;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_particle-1 {\n  0% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(-20px, -20px) scale(1);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-2 {\n  0% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(20px, -20px) scale(1);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-3 {\n  0% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(20px, 20px) scale(1);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-4 {\n  0% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(-20px, 20px) scale(1);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-5 {\n  0% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(-30px, 0px) scale(1);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-6 {\n  0% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(30px, 0px) scale(1);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-7 {\n  0% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0px, -30px) scale(1);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-8 {\n  0% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0px, 30px) scale(1);\n    opacity: 0;\n  }\n}\n\n\n@keyframes _ngcontent-%COMP%_particle-out-1 {\n  0% {\n    transform: translate(-20px, -20px) scale(1);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-out-2 {\n  0% {\n    transform: translate(20px, -20px) scale(1);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-out-3 {\n  0% {\n    transform: translate(20px, 20px) scale(1);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-out-4 {\n  0% {\n    transform: translate(-20px, 20px) scale(1);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-out-5 {\n  0% {\n    transform: translate(-30px, 0px) scale(1);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-out-6 {\n  0% {\n    transform: translate(30px, 0px) scale(1);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-out-7 {\n  0% {\n    transform: translate(0px, -30px) scale(1);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-out-8 {\n  0% {\n    transform: translate(0px, 30px) scale(1);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n}\n.li_list_produit_select.selected-item[_ngcontent-%COMP%] {\n  background-color: rgba(255, 0, 0, 0.1);\n  border-left: 3px solid #ff0000;\n}\n\n.double_commande[_ngcontent-%COMP%]   .nombre_select[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  text-decoration: line-through;\n  margin-right: 5px;\n}\n\n.quantity-input[_ngcontent-%COMP%] {\n  width: 50px;\n  padding: 4px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  text-align: center;\n}\n.quantity-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4d90fe;\n}\n\n.icon_edit_quantite[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.icon_edit_quantite[_ngcontent-%COMP%]:hover {\n  color: #4d90fe;\n}\n\n\n\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 60px;\n  right: 35px;\n  z-index: 9999;\n}\n\n.toast-message-success[_ngcontent-%COMP%] {\n  background-color: #D5E6DE;\n  border: 1px solid #ACCEBC;\n  color: #000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n.toast-message-danger[_ngcontent-%COMP%] {\n  background-color: #F3D8DA;\n  border: 1px solid #E7B1B6;\n  color: #000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeInOut {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  20% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(2px); \n\n  }\n}\n.error[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n  margin-top: 10px;\n}\n\n.o_pager_previous[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.o_pager_next[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 0 5px;\n}\n\n.d-print-none[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n}\n\n.d-print-none[_ngcontent-%COMP%]   .o_pager_previous[_ngcontent-%COMP%] {\n  border-top: 1px solid #000;\n  border-right: none;\n  border-bottom: 1px solid #000;\n  border-left: 1px solid #000;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  background-color: #ddd;\n  color: #000;\n}\n\n.d-print-none[_ngcontent-%COMP%]   .o_pager_next[_ngcontent-%COMP%] {\n  border-top: 1px solid #000;\n  border-left: 1px solid #000;\n  border-bottom: 1px solid #000;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  background-color: #ddd;\n  color: #000;\n}\n\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: right;\n}\n\n.empty-cart-message[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcy1jb21tYW5kZS5jb21wb25lbnQuc2NzcyIsIi4uL3Bvcy12ZW50ZS9wb3AtdmVudGUuc2NzcyIsIi4uL3Bvcy12ZW50ZS9wb3MtdmVudGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR2hCO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBREZGOztBQ0tBO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FESEY7QUNhSTtFQUlFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBRGROO0FDZ0JNO0VBQ0UsY0FBQTtBRGRSOztBQ3VCQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsc0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QURyQkY7O0FDd0JBO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEdEJGO0FDd0JFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QUR0Qko7QUN3Qkk7RUFJRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUR6Qk47QUMyQk07RUFDRSxjQUFBO0FEekJSOztBQ2lDQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFB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QUNBLHdDQUFBO0VBQ0EsVUFBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7QUEra0RGOztBQTNrREE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0FBOGtERjs7QUEza0RBLDREQUFBO0FBQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQThrREY7RUE1a0RBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBOGtERjtFQTVrREE7SUFDRSxVQUFBO0VBOGtERjtFQTVrREE7SUFDRSxVQUFBO0lBQ0EsMEJBQUEsRUFBQSwyREFBQTtFQThrREY7QUFDRjtBQTNrREE7RUFDRSxVQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtBQTRrREY7O0FBemtEQTs7RUFFRSxlQUFBO0VBQ0EsY0FBQTtBQTRrREY7O0FBemtEQTtFQUNFLHNCQUFBO0FBNGtERjs7QUF6a0RBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQTRrREY7O0FBemtEQTtFQUNFLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBNGtERjs7QUF6a0RBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBNGtERjs7QUF6a0RBO0VBQ0Usa0JBQUE7QUE0a0RGIiwiZmlsZSI6InBvcy1jb21tYW5kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBpbXBvcnQgJy4uL3Bvcy12ZW50ZS9wb3MtdmVudGUuY29tcG9uZW50LnNjc3MnO1xuQHVzZSAnLi4vcG9zLXZlbnRlL3Bvcy12ZW50ZS5jb21wb25lbnQuc2NzcycgYXMgKjtcblxucCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uYnRuX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggMWZyIDYwcHg7XG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiA2OHB4O1xuICAgIG1hcmdpbjogMTBweCAxMHB4IDA7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4ubGlfbGlzdF9wcm9kdWl0X3NlbGVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAvLyBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaWNvbl9jaGVjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0yMHB4O1xufVxuXG4uaWNvbl9jaGVjayBpIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaWNvbl9lZGl0X3F1YW50aXRlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbl9lZGl0X3F1YW50aXRlOmhvdmVyIHtcbiAgY29sb3I6ICMwNjcyRTQ7XG59XG5cbi5idG4tcGF5bWVudCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuLXBheW1lbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vICAgcGFkZGluZzogMzBweCAwO1xuICAgIGhlaWdodDogODBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuX2NvbnRlbnQge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmJ0bl9kZWxldGUsXG4uYnRuX3JldG91cm5cbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBwYWRkaW5nOiAyMy4xM3B4IDA7XG5cbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuX2RlbGV0ZSBpIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5idG5fcmV0b3VybiBpIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5idG5fZGVsZXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJBQ0FDO1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uYnRuX3JldG91cm4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4uc2VjdGlvbl9saXN0X2NvbW1hbmRlIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTVweCk7IC8vIGFqdXN0ZSBjZXR0ZSB2YWxldXIgc2Vsb24gbGEgdGFpbGxlIGR1IGhlYWRlci9yZWNoZXJjaGVcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiA0cHg7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYsIDExNCwgMjI4LCAwLjIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbi51bF9jb21tYW5kZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMHB4IDBweCAxcHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0VERUJFQjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4udWxfY29tbWFuZGVfYWN0aXZlIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFFNkVCO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDREUzRkE7XG59XG5cbi5jb21tYW5kZV9kYXRlLCAuY29tbWFuZGVfaGV1cmUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmV0YXRfY29tbWFuZGUgcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICBwYWRkaW5nOiAzcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uaWNvbl9kZWxldGVfY29tbWFuZGUgaSxcbi5pY29uX2Zhdm9yeV9jb21tYW5kZSBpIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pY29uX2RlbGV0ZV9jb21tYW5kZSBpOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmMDAwMDtcbn1cblxuLmljb25fZmF2b3J5X2NvbW1hbmRlIGkge1xuICAgIGNvbG9yOiAjMDY3MkU0O1xufVxuXG4vKiBTdHlsZXMgZGUgbOKAmWlucHV0IGRlIHJlY2hlcmNoZSAqL1xuICAgIFxuLnRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0NXB4IDFmciAxMzBweCAxODBweDtcbiAgICBtYXJnaW46IDEwcHggMTBweCAwO1xufVxuXG4ucGFnZXItaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uaWNvbl9zZWFyY2gge1xuICAgIGhlaWdodDogNDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xufVxuXG4uc2VhcmNoIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5idG5fc2VhcmNoX2ZpbHRyZSAuYnRuIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLWxlZnQ6IDBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5idG5fc2VhcmNoX2ZpbHRyZSAuYnRuIGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAxcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5sb2FkaW5nX2NvbW1hbmRlIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmRvdWJsZV9jb21tYW5kZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgLy8gcGFkZGluZzogMCAxMHB4O1xufVxuXG4uYnRuX3NlYXJjaF9maWx0cmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8vIE7DqWNlc3NhaXJlIHBvdXIgcG9zaXRpb25uZXIgbGUgZHJvcGRvd25cblxuICAuZHJvcGRvd25fZmlsdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgIGxpIHtcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnN0YXR1cy1wYWlkIHtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDE2NywgNjksIDAuMSkgIWltcG9ydGFudDtcbn1cblxuLnBvcHVwLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbiAgLy8gbWFyZ2luOiAxMXB4IDA7XG59XG5cbi5wb3B1cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuICAgIC5jbG9zZS1idG4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgfVxuXG4gICAgICAudGl0bGgge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC1mYW1pbHk6IHBvcHBpbnMsIHNhbnMtc2VyaWY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuICAgIFxuICAgIC50aXRscCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LWZhbWlseTogcG9wcGlucywgc2Fucy1zZXJpZjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICB9XG5cbiAgICBoNiwgLmg2e1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC1mYW1pbHk6IHBvcHBpbnMsIHNhbnMtc2VyaWY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuICAgIHRleHRhcmVhIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4ucGluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDE1cHg7XG4gIC8vIG1hcmdpbjogMjVweCAwO1xuICBcbiAgaW5wdXQge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIFxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDY3MkU0O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSg1MiwgMTE5LCAyMTksIDAuNSk7XG4gICAgfVxuICB9XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICAvLyBwYWRkaW5nOiAxMnB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XG4gIH1cbn1cblxuLnNoYWtlIHtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzO1xufVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTsgfVxuICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7IH1cbn1cblxuLmNsb3NlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM4ODg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjMpO1xuICB9XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi5idG4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuIFxuLmJ0bi1jYW5jZWwge1xuIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8vaG92ZXJcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzMmYyZjtcbiAgfVxufVxuXG4uYnRuLWNvbmZpcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBGcm9tIFN2ZyAqLyBcbi5jeWJlci1jaGVja2JveCB7XG4gICAgLS1jaGVja2JveC1zaXplOiAxNXB4O1xuICAgIC0tY2hlY2tib3gtY29sb3I6ICMwNjcyRTQ7XG4gICAgLS1jaGVja2JveC1jaGVjay1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWNoZWNrYm94LWhvdmVyLWNvbG9yOiAjMDM2MGMzO1xuICAgIC0tY2hlY2tib3gtc3Bhcmstb2Zmc2V0OiAtMjBweDtcbiAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG4gIFxuICAuY3liZXItY2hlY2tib3ggaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5jeWJlci1jaGVja2JveF9fbWFyayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogdmFyKC0tY2hlY2tib3gtc2l6ZSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1jaGVja2JveC1zaXplKTtcbiAgfVxuICBcbiAgLmN5YmVyLWNoZWNrYm94X19ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWNoZWNrYm94LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgfVxuICBcbiAgLmN5YmVyLWNoZWNrYm94X19jaGVjayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBzdHJva2U6IHZhcigtLWNoZWNrYm94LWNoZWNrLWNvbG9yKTtcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICBmaWxsOiBub25lO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgfVxuICBcbiAgLmN5YmVyLWNoZWNrYm94X19lZmZlY3RzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IHZhcigtLWNoZWNrYm94LXNwYXJrLW9mZnNldCk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gIC5jeWJlci1jaGVja2JveF9fc3Bhcmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDJweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgfVxuICBcbiAgLyogSG92ZXIgKi9cbiAgLmN5YmVyLWNoZWNrYm94OmhvdmVyIC5jeWJlci1jaGVja2JveF9fYm94IHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNoZWNrYm94LWhvdmVyLWNvbG9yKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSg5MiwgMTAzLCAyNTUsIDAuMSk7XG4gIH1cbiAgXG4gIC8qIENoZWNrZWQgKi9cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLmN5YmVyLWNoZWNrYm94X19ib3gge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LWNvbG9yKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNoZWNrYm94LWNvbG9yKTtcbiAgfVxuICBcbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLmN5YmVyLWNoZWNrYm94X19jaGVjayB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICBcbiAgLyogU3BhcmsgQW5pbWF0aW9uICovXG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpjaGVja2VkICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5jeWJlci1jaGVja2JveF9fc3Bhcmsge1xuICAgIGFuaW1hdGlvbjogc3BhcmsgMC40cyBlYXNlLW91dDtcbiAgfVxuICBcbiAgLmN5YmVyLWNoZWNrYm94X19zcGFyazpudGgtY2hpbGQoMSkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHRyYW5zbGF0ZVgodmFyKC0tY2hlY2tib3gtc3Bhcmstb2Zmc2V0KSk7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94X19zcGFyazpudGgtY2hpbGQoMikge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVYKHZhcigtLWNoZWNrYm94LXNwYXJrLW9mZnNldCkpO1xuICB9XG4gIC5jeWJlci1jaGVja2JveF9fc3Bhcms6bnRoLWNoaWxkKDMpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZVgodmFyKC0tY2hlY2tib3gtc3Bhcmstb2Zmc2V0KSk7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94X19zcGFyazpudGgtY2hpbGQoNCkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZykgdHJhbnNsYXRlWCh2YXIoLS1jaGVja2JveC1zcGFyay1vZmZzZXQpKTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzcGFyayB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDBkZWcpIHRyYW5zbGF0ZVgodmFyKC0tY2hlY2tib3gtc3Bhcmstb2Zmc2V0KSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKVxuICAgICAgICB0cmFuc2xhdGVYKGNhbGModmFyKC0tY2hlY2tib3gtc3Bhcmstb2Zmc2V0KSAqIDEuNSkpO1xuICAgIH1cbiAgfVxuICBcbiAgLyogQWN0aXZlICovXG4gIC5jeWJlci1jaGVja2JveDphY3RpdmUgLmN5YmVyLWNoZWNrYm94X19ib3gge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgfVxuICBcbiAgLyogRm9jdXMgKi9cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmZvY3VzICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5jeWJlci1jaGVja2JveF9fYm94IHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSg5MiwgMTAzLCAyNTUsIDAuMik7XG4gIH1cbiAgXG4gIC5jeWJlci1jaGVja2JveF9fcGFydGljbGVzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IC01MCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gIC5jeWJlci1jaGVja2JveF9fcGFydGljbGVzIGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogM3B4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC1jb2xvcik7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLyogUGFydGljbGUgYW5pbWF0aW9ucyBmb3IgY2hlY2sgKi9cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTEge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtMSAwLjRzIGVhc2Utb3V0IGZvcndhcmRzO1xuICB9XG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpjaGVja2VkICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS0yIHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLTIgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjFzO1xuICB9XG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpjaGVja2VkICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS0zIHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLTMgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjE1cztcbiAgfVxuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIC5jeWJlci1jaGVja2JveF9fbWFyayAucGFydGljbGUtNCB7XG4gICAgYW5pbWF0aW9uOiBwYXJ0aWNsZS00IDAuNHMgZWFzZS1vdXQgZm9yd2FyZHMgMC4wNXM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTUge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtNSAwLjRzIGVhc2Utb3V0IGZvcndhcmRzIDAuMTJzO1xuICB9XG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpjaGVja2VkICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS02IHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLTYgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjA4cztcbiAgfVxuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIC5jeWJlci1jaGVja2JveF9fbWFyayAucGFydGljbGUtNyB7XG4gICAgYW5pbWF0aW9uOiBwYXJ0aWNsZS03IDAuNHMgZWFzZS1vdXQgZm9yd2FyZHMgMC4xOHM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTgge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtOCAwLjRzIGVhc2Utb3V0IGZvcndhcmRzIDAuMTVzO1xuICB9XG4gIFxuICAvKiBQYXJ0aWNsZSBhbmltYXRpb25zIGZvciB1bmNoZWNrICovXG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpub3QoOmNoZWNrZWQpICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS0xIHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLW91dC0xIDAuNHMgZWFzZS1vdXQgZm9yd2FyZHM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0Om5vdCg6Y2hlY2tlZCkgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTIge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtb3V0LTIgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjFzO1xuICB9XG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpub3QoOmNoZWNrZWQpICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS0zIHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLW91dC0zIDAuNHMgZWFzZS1vdXQgZm9yd2FyZHMgMC4xNXM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0Om5vdCg6Y2hlY2tlZCkgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTQge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtb3V0LTQgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjA1cztcbiAgfVxuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6bm90KDpjaGVja2VkKSArIC5jeWJlci1jaGVja2JveF9fbWFyayAucGFydGljbGUtNSB7XG4gICAgYW5pbWF0aW9uOiBwYXJ0aWNsZS1vdXQtNSAwLjRzIGVhc2Utb3V0IGZvcndhcmRzIDAuMTJzO1xuICB9XG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpub3QoOmNoZWNrZWQpICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS02IHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLW91dC02IDAuNHMgZWFzZS1vdXQgZm9yd2FyZHMgMC4wOHM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0Om5vdCg6Y2hlY2tlZCkgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTcge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtb3V0LTcgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjE4cztcbiAgfVxuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6bm90KDpjaGVja2VkKSArIC5jeWJlci1jaGVja2JveF9fbWFyayAucGFydGljbGUtOCB7XG4gICAgYW5pbWF0aW9uOiBwYXJ0aWNsZS1vdXQtOCAwLjRzIGVhc2Utb3V0IGZvcndhcmRzIDAuMTVzO1xuICB9XG4gIFxuICAvKiBQYXJ0aWNsZSBrZXlmcmFtZXMgZm9yIGNoZWNrICovXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtMSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjBweCwgLTIwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtMiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAtMjBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS0zIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIDIwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtNCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjBweCwgMjBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS01IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMHB4LCAwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtNiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtNyB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0zMHB4KSBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHBhcnRpY2xlLTgge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAzMHB4KSBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICAvKiBQYXJ0aWNsZSBrZXlmcmFtZXMgZm9yIHVuY2hlY2sgKi9cbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS1vdXQtMSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwcHgsIC0yMHB4KSBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtb3V0LTIge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIC0yMHB4KSBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtb3V0LTMge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIDIwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS1vdXQtNCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwcHgsIDIwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS1vdXQtNSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwcHgsIDBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHBhcnRpY2xlLW91dC02IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS1vdXQtNyB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMzBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHBhcnRpY2xlLW91dC04IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDMwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuXG4ubGlfbGlzdF9wcm9kdWl0X3NlbGVjdC5zZWxlY3RlZC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2ZmMDAwMDtcbn1cblxuLmRvdWJsZV9jb21tYW5kZSAubm9tYnJlX3NlbGVjdCBzcGFuIHtcbiAgb3BhY2l0eTogMC43O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5xdWFudGl0eS1pbnB1dCB7XG4gIHdpZHRoOiA1MHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItY29sb3I6ICM0ZDkwZmU7XG4gIH1cbn1cblxuLmljb25fZWRpdF9xdWFudGl0ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjNGQ5MGZlO1xuICB9XG59XG5cblxuLy9pY2lcbiAgLyogQ29udGVuZXVyIGR1IHRvYXN0ICovXG4udG9hc3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDYwcHg7XG4gIHJpZ2h0OiAzNXB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4gLy8gdG9hc3Qgc3VjY2Vzc1xuLnRvYXN0LW1lc3NhZ2Utc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNENUU2REU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0NFQkM7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5PdXQgNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG59XG5cbi8vdG9hc3Qgc3VjY2Vzc1xuLnRvYXN0LW1lc3NhZ2UtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRDhEQTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U3QjFCNjtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVJbk91dCA0cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbn1cblxuLyogQW5pbWF0aW9uIHBvdXIgZmFpcmUgYXBwYXJhw650cmUgZXQgZGlzcGFyYcOudHJlIGxlIHRvYXN0ICovXG5Aa2V5ZnJhbWVzIGZhZGVJbk91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIH1cbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA4MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTsgLyogTGUgdG9hc3QgZGlzcGFyYcOudCBhdmVjIHVuIGzDqWdlciBtb3V2ZW1lbnQgdmVycyBsZSBiYXMgKi9cbiAgfVxufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICAvLyBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ub19wYWdlcl9wcmV2aW91cyBpLFxuLm9fcGFnZXJfbmV4dCBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLmQtcHJpbnQtbm9uZSBidXR0b257XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbi5kLXByaW50LW5vbmUgLm9fcGFnZXJfcHJldmlvdXMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmQtcHJpbnQtbm9uZSAub19wYWdlcl9uZXh0IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ucGFnZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG59XG5cbi5lbXB0eS1jYXJ0LW1lc3NhZ2Uge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59IiwiLy8gQGltcG9ydCAnL3NyYy9hcHAvYWRtaW4tcGFnZS9jbGllbnRzL2FkZENsaWVudC9hZGQtY2xpZW50cy9hZGQtY2xpZW50cy5jb21wb25lbnQuc2Nzcyc7XG5cbi8vIHBheW1lbnQgcG9wdXAgb3ZlcmxheVxuLnBheW1lbnQtcG9wdXAtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MzMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLnBheW1lbnQtcG9wdXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDg1JTtcbiAgLy8gbWF4LXdpZHRoOiA4MDBweDtcbiAgaGVpZ2h0OiA5MHZoO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgLnBvcHVwLWhlYWRlciB7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBwYWRkaW5nOiAyMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgXG4gICAgLmNsb3NlLWJ0biB7XG4gICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAvLyB0b3A6IDEwcHg7XG4gICAgICAvLyByaWdodDogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgfVxuICBcbn1cblxuLy8gbGlzdCBjbGllbnQgcG9wdXAgb3ZlcmxheVxuLmxpc3QtY2xpZW50LXBvcHVwLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzMzKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5saXN0LWNsaWVudC1wb3B1cCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogOTAlO1xuICAvLyBtYXgtd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDkwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAucG9wdXAtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgIFxuICAgIC5jbG9zZS1idG4ge1xuICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgLy8gdG9wOiAxMHB4O1xuICAgICAgLy8gcmlnaHQ6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gIH1cbiAgXG59XG5cbi5kZXRhaWwtcG9wdXAtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5kZXRhaWwtaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG59XG5cbi5kZXRhaWwtcG9wdXAge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLDAsMCwwLjMpO1xuXG4gIC5wb3B1cC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC5jbG9zZS1idG4ge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuXG4gIC5wb3B1cC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG5cbiAgICAuc2hvcC1uYW1lIHtcbiAgICAgIG1hcmdpbjogMCAwIDFyZW07XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIC5kZXRhaWwtZ3JpZCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICAgICAgZ2FwOiAxLjVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgfVxuXG4gICAgLmRldGFpbC1pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAyNTBweCAxZnI7XG4gICAgICAgIHJvdy1nYXA6IDAuNzVyZW07XG4gICAgICAgIGNvbHVtbi1nYXA6IDRyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgICAgICAgLmluZm8tcm93IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIC5kZXRhaWwtZGVzY3JpcHRpb24ge1xuICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlNWU1O1xuICAgICAgLmxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICB9XG4gICAgICAudmFsdWUge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wb3B1cC1hY3Rpb25zIHtcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgLmJ0bi1hZGQge1xuICAgICAgYmFja2dyb3VuZDogIzA2NzJlNDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDAuNnJlbSAxLjJyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDVhMDQ5O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiBEw6lzYWN0aXZlciBsZSBib3V0b24gcXVhbmQgbGUgbW9udGFudCBlc3QgaW5zdWZmaXNhbnQgKi9cbi5idG4tcGF5bWVudC1wb3A6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBjb2xvcjogI2FjYWNhYztcbn1cblxuLy8vLy8vLy8vLy8vLy8gUG9wIFVwIGNsaWVudCBwb3VyIGxlcyBsaXN0XG5cbi5idG5BZGRDbGllbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG5cbi5idG5BZGRDbGllbnQgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MmU0O1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50ciB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG50ZCB7XG4gIHBhZGRpbmc6IDE4cHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ5NDtcbn1cbiAgXG50aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDk0O1xuICAgIHBhZGRpbmc6IDEycHggOHB4O1xufVxuICBcbnRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1cbiAgXG50cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLyogU3R5bGUgZGUgbCdpbWFnZSBjaXJjdWxhaXJlIGltZyBsaXN0ICovXG4uaW1nQ2xpZW50IHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWdDbGllbnQgaW1nIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuXG4uaW1nQ2xpZW50OmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogRWZmZXQgem9vbSBhdSBzdXJ2b2wgKi9cbn1cblxuLm5vLWNsaWVudC1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBjb2xvcjogIzg4ODtcbn1cblxuLmlucHV0U2VhcmNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnB1dFNlYXJjaCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5pbnB1dFNlYXJjaCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi8qIEFqb3V0ZXIgw6AgbGEgZmluIGR1IGZpY2hpZXIgU0NTUyAqL1xuXG4vLyBQb3B1cCBkJ2Fqb3V0IGRlIGNsaWVudFxuLmFkZC1jbGllbnQtcG9wdXAtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzMzKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDE7XG59XG5cbi5hZGQtY2xpZW50LXBvcHVwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDcwMHB4O1xuICBoZWlnaHQ6IDgzdmg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgLnBvcHVwLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICBcbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIFxuICAgIC5jbG9zZS1idG4ge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5wb3B1cC1ib2R5IHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICB3aWR0aDogNHB4O1xuICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgfVxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIC8vIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgXG4gICAgLmFkZC1jbGllbnQtZm9ybSB7XG4gICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggMTVweDtcbiAgICAgICAgXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlucHV0LCB0ZXh0YXJlYSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzA2NzJlNDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDYsIDExNCwgMjI4LCAwLjI1KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAuY2xpZW50LXR5cGUtc2VsZWN0b3Ige1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAvLyBnYXA6IDEwcHg7XG4gICAgICAgIFxuICAgICAgICAuY2xpZW50LXR5cGUtYnRuIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgIFxuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNjcyZTQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5waG90by11cGxvYWQge1xuICAgICAgICAucGhvdG8tcGxhY2Vob2xkZXIge1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICNjZWQ0ZGE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBcbiAgICAgICAgICBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLnBvcHVwLWFjdGlvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYm94LXNoYWRvdzogMCAtMnB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgXG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5idG4tY2FuY2VsIHtcbiAgICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3MDQwNDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmJ0bi1zYXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyZTQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU1Y2I5O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLy8vLy8vLy8vLy8gQWRkIGNsaWVudCBcblxuLmRvdWJsZV9pbnB1dCB7XG4gIC8vIGRpc3BsYXk6IGZsZXg7IFxuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyBnYXA6IDIwcHg7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbiAgZ2FwOiAxMHB4O1xuICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZ3JpZF9jb2xvbm5lIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uY2hhbXBfaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbnB1dF9mb2N1cyB7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyBtaW4td2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDQ5cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzY5NWM1Yztcbn1cbiAgXG4uY2hhbXBfaW5wdXQgLmxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIycHg7XG4gIGxlZnQ6IDRweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbG9yOiByZ2IoMTA3LCAxMDIsIDEwMik7XG59XG5cbi5pbnB1dF9mb2N1czpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuICBcbiAgXG4uaW5wdXRfZm9jdXM6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4uaW5wdXRfZm9jdXM6Zm9jdXMgKyAubGFiZWwge1xuICBjb2xvcjogIzA2NzJFNDtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaW5wdXRfZm9jdXM6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmNoYW1wX2lucHV0X2ludmVudGFpcmUge1xuICBkaXNwbGF5OiBmbGV4OyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG59XG5cbi5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLyogTWFzcXVlciBsJ2lucHV0IGNoZWNrYm94IG9yaWdpbmFsICovXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogTGUgwqsgc2xpZGVyIMK7ICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgdHJhbnNpdGlvbjogLjRzO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxOHB4OyBcbiAgd2lkdGg6IDE4cHg7XG4gIGxlZnQ6IDNweDsgXG4gIGJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogLjRzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIFF1YW5kIGxlIGNoZWNrYm94IGVzdCBjb2Now6kgKi9cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgLyogQ291bGV1ciBhdSBjaG9peCAqL1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi5pbnB1dF9jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbGllbnQtdHlwZS1zZWxlY3RvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgXG4gIC5jbGllbnQtdHlwZS1idG4ge1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDY3MmU0O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG4ubm9tYnJlQ291bnQge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTVweDtcbiAgICByaWdodDogLTlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBkaXNwbGF5OiBmbGV4XG47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICByaWdodDogLTlweDtcbn1cblxuLm5vbWJyZUNvdW50IHNwYW4ge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIC8vIHBhZGRpbmc6IDRweDtcbn1cblxuLmJhcnJlIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwM2Y7XG4gICAgbWFyZ2luOiA4cHggMTBweDtcbn1cblxuLmNvbnRlbnRJY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgcGFkZGluZzogMHB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudEljb24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmZjsgLyogQ291bGV1ciBkZSBmb25kIHBvdXIgbCfDqWzDqW1lbnQgYWN0aWYgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgIzE4OTBmZjsgLyogQm9yZHVyZSBwb3VyIGwnw6lsw6ltZW50IGFjdGlmICovXG59XG5cbi5jb250ZW50SWNvbi5hY3RpdmUgaSB7XG4gIGNvbG9yOiAjMTg5MGZmOyAvKiBDb3VsZXVyIGRlIGwnaWPDtG5lIGFjdGl2ZSAqL1xufVxuXG4uY29udGVudEljb246aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTsgLyogRWZmZXQgaG92ZXIgcG91ciBsZXMgw6lsw6ltZW50cyBub24gYWN0aWZzICovXG59XG5cbi5kYXRlLXJlZCB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxufVxuIiwiQHVzZSAnLi4vcG9zLXZlbnRlL3BvcC12ZW50ZS5zY3NzJyBhcyAqO1xuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vIENPTlRFTlVFXG5cbi5zZWN0aW9uX2NvbnRlbnVfY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNDAwcHg7XG4gIGZsZXg6IDE7ICAgICAgICAgIC8qIHByZW5kIGzigJllc3BhY2UgcmVzdGFudCAqL1xuICBtaW4taGVpZ2h0OiAwOyAgICAvKiBwZXJtZXQgw6AgbGEgY29sb25uZSBkZSBnYXVjaGUgZGUgcsOpdHLDqWNpciAqL1xufVxuXG4uc2VjdGlvbl9jb250ZW51X2xlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAwO1xufVxuXG4uc2VjdGlvbl9mYXZvcnlfcHJvZHVpdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIwcHggMWZyO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBmbGV4OiAxOyAgICAgICAgICAvKiBvY2N1cGUgdG91dGUgbGEgaGF1dGV1ciBkaXNwbyAqL1xuICBtaW4taGVpZ2h0OiAwOyAgICAvKiBwZXJtZXQgbGEgcsOpdHJhY3Rpb24gc3VyIGzigJlheGUgdmVydGljYWwgKi9cbn1cblxuXG4uc2VjdGlvbl9mYXZvcnkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDFkMWQxO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uc2VjdGlvbl9mYXZvcnkgLnVsX3NlY3Rpb25fZmF2b3J5IC5saV9zZWN0aW9uX2Zhdm9yeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDREUzRkE7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG4uZG91YmxlIC5pY29uX2Zhdm9yeSBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udGl0bGVfZmF2b3J5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGl0cmVfY2F0ZWdvcmllIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4udGl0cmVfY2F0ZWdvcmllIC5jYXRlZ29yeS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi10ZXN0LWJ0bixcbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tcmVsb2FkLWJ0bixcbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tc3RhdHVzLWJ0bixcbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tdGVzdC1tdWx0aS1idG4sXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXJlc2V0LWJ0biB7XG4gIGJhY2tncm91bmQ6ICMwNjcyRTQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xufVxuXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXRlc3QtYnRuOmhvdmVyLFxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi1yZWxvYWQtYnRuOmhvdmVyLFxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi1zdGF0dXMtYnRuOmhvdmVyLFxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi10ZXN0LW11bHRpLWJ0bjpob3Zlcixcbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tcmVzZXQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzA1NTZiMztcbn1cblxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi1zdGF0dXMtYnRuIHtcbiAgYmFja2dyb3VuZDogIzI4YTc0NTtcbn1cblxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi1zdGF0dXMtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzFlN2UzNDtcbn1cblxuLy8gSW5kaWNhdGV1cnMgZGUgY2hhcmdlbWVudCBldCBkJ8OpdGF0XG4ubG9hZGluZy1pbmRpY2F0b3IsXG4ubG9hZGluZy1tb3JlLWluZGljYXRvcixcbi5hbGwtbG9hZGVkLWluZGljYXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubG9hZGluZy1pbmRpY2F0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLmxvYWRpbmctbW9yZS1pbmRpY2F0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmZkO1xuICBjb2xvcjogIzE5NzZkMjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiZGVmYjtcbn1cblxuLmFsbC1sb2FkZWQtaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjVlODtcbiAgY29sb3I6ICMyZTdkMzI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGU2Yzk7XG59XG5cbi5sb2FkaW5nLWluZGljYXRvciBpLFxuLmxvYWRpbmctbW9yZS1pbmRpY2F0b3IgaSxcbi5hbGwtbG9hZGVkLWluZGljYXRvciBpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uYWxsLWxvYWRlZC1pbmRpY2F0b3IgaSB7XG4gIGFuaW1hdGlvbjogbm9uZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXRlc3QtbXVsdGktYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmYzEwNztcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG5cbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tdGVzdC1tdWx0aS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTBhODAwO1xufVxuXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXJlc2V0LWJ0biB7XG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XG59XG5cbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tcmVzZXQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2M4MjMzMztcbn1cblxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi1zdGF0dXMge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjNjY2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xufVxuXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXN0YXR1cy5hY3RpdmUge1xuICBjb2xvcjogIzI4YTc0NTtcbiAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcbn1cblxuLnRpdHJlX2NhdGVnb3JpZSBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udWxfbGlfbmFtZV9jYXRlZ29yaWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udWxfbGlfbmFtZV9jYXRlZ29yaWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RFM0ZBO1xufVxuXG4uYWxsQ2F0ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjsgXG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLy8gLmFsbENhdGU6aG92ZXIge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RFM0ZBO1xuLy8gfVxuXG4vLy8vLy8vLy8vLy8vIFBST0RVSVQgXG5cbi5zZWN0aW9uX3Byb2R1aXQge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XG4gIG1pbi1oZWlnaHQ6IDA7ICAgIC8qIHNhbnMgw6dhLCBvdmVyZmxvdyBuZSBz4oCZYWN0aXZlIHBhcyAqL1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNHB4O1xuICAgIGhlaWdodDogMnB4O1xuICB9XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2LCAxMTQsIDIyOCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLy8gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbi5saV9saXN0X3Byb2R1aXRfc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgbWFyZ2luOiA2cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5ub21icmVfc2VsZWN0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubmFtZV9wcm9kdWl0X3NlbGVjdCBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucHJpY2VfcHJvZHVpdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmljb25fY2xvc2Vfc2VsZWN0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbl9jbG9zZV9zZWxlY3QgaSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmljb25fY2xvc2Vfc2VsZWN0IGk6aG92ZXIge1xuICBjb2xvcjogI2ZmMDAwMDtcbn1cblxuLyogZ3JpbGxlIHJlc3BvbnNpdmUgKi9cbi5wcm9kdWN0LWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxODBweCwgMWZyKSk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcbiAgZ2FwOiAxcmVtO1xuICAvLyBwYWRkaW5nOiAxcmVtO1xuICBwYWRkaW5nOiAwIDEwcHggMTBweDtcbn1cblxuLyogY2FydGUgcHJvZHVpdCAqL1xuLnByb2R1Y3QtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjA1KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi8qIHBhc3RpbGxlIGRlIHN0b2NrICovXG4uc3RvY2stYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZGUwNDc7IC8qIGphdW5lIGNsYWlyICovXG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm9kdWN0LWNhcmQuZGlzYWJsZWQsXG4ubGlfbGlzdC5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qIHBhc3RpbGxlIGRlIHN0b2NrICovXG4uc3RvY2stYmFkZ2UtbGlzdCB7XG4gIGJhY2tncm91bmQ6ICNmZGUwNDc7IC8qIGphdW5lIGNsYWlyICovXG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIGltYWdlICovXG4ucHJvZHVjdC1pbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMXB4IDJweCAwcHg7XG59XG5cbi8qIGPFk3VyIGZhdm9yaSAqL1xuLmZhdm9yaXRlLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnB4O1xuICByaWdodDogM3B4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICMwNjcyZTQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mYXZvcml0ZS1pY29uLnJpLWhlYXJ0LWZpbGwge1xuICBjb2xvcjogIzA2NzJlNDtcbn1cbi5mYXZvcml0ZS1pY29uLWxpc3Qge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICMwNjcyZTQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mYXZvcml0ZS1pY29uLWxpc3QucmktaGVhcnQtZmlsbCB7XG4gIGNvbG9yOiAjMDY3MmU0O1xufVxuXG4vKiB6b25lIHRleHRlICovXG4uY2FyZC1ib2R5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBmbGV4OiAxOyAvKiBwb3Vzc2UgbGUgYm91dG9uIGVuIGJhcyAqL1xufVxuLnByb2R1Y3QtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMC4yNXJlbSAwO1xufVxuLnByb2R1Y3Qtc3RvY2sge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjNjY2O1xuICBtYXJnaW46IDAuMTVyZW0gMDtcbn1cbi5wcm9kdWN0LXByaWNlIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi8qIGJvdXRvbiBkZSBkw6ljcsOpbWVudGF0aW9uICovXG4uYnRuLWRlY3JlbWVudCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2YzZjRmNjtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb2ludGVyLWV2ZW50czogYXV0byAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxMDtcbn1cbi5idG4tZGVjcmVtZW50IGkge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5ib3R0b21fcHJpY2Vfc3ViIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG5cbi5zZWN0aW9uX2NvbnRlbnVfcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8vIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNCkgMCAzcHggNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgLyogaGF1dGV1ciBnw6lyw6llIHBhciBsZSBwYXJlbnQgKi9cbn1cblxuLyogMS4gTGEgbGlzdGUgcHJvZHVpdCAodHUgbCdhcyBkw6lqw6ApICovXG4ubGlzdF9wcm9kdWl0X3NlbGVjdCB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgLy8gcGFkZGluZzogMXJlbTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDRweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAvLyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuLyogMi4gTGUgcsOpc3Vtw6kgKi9cbi5zdW1tYXJ5X3BhbmVsIHtcbiAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLnN1bW1hcnlfcGFuZWwgLmRvdWJsZV9yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAuMjVyZW0gMDtcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XG59XG4uc3VtbWFyeV9wYW5lbCAuZG91YmxlX3Jvdy50b3RhbCB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmRvdWJsZV9yb3cgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5kb3VibGVfcm93IHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLyogMy4gQ2xhdmllciAqL1xuLmtleXBhZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogNXB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5rZXlwYWQgYnV0dG9uIHtcbiAgaGVpZ2h0OiAzLjVyZW07XG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5rZXlwYWQgYnV0dG9uLmJhY2tzcGFjZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4vKiA0LiBCb3V0b24gUGFpZW1lbnQgKi9cbi5idG5fY29udGVudCB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLmJ0bi1wYXltZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIC8vIG1hcmdpbjogMCAxcmVtIDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDY4cHg7XG4gIGJhY2tncm91bmQ6ICMyOTc4ZjI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmFtZV9zdG9ja19saXN0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnByb2R1Y3Qtc3RvY2stbGlzdCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5uYW1lX3N0b2NrX2xpc3QgcCxcbi5tb3llbl9wYWllbWVudCBwLFxuLnByaWNlX2R1IHAsXG4ubW95ZW5fcGFpZW1lbnRfcmVzdGFudCBwLFxuLnBhaWVtZW50X2J0biBwIFxue1xuICBtYXJnaW46IDA7XG59XG5cbnVsLnVsX2xpc3Qge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLmxpX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4wNjMpIDBweCA3cHggMjlweCAwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaW1nX3Byb2R1Y3RfbGlzdCB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4uaW1nX3Byb2R1Y3RfbGlzdCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAwcHggMHB4IDFweDtcbn1cblxuLnNlY3Rpb25fcG9wdXBfcGFpZW1lbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzNTBweDtcbiAgZmxleDogMTtcbiAgbWluLWhlaWdodDogMDtcbiAgbWFyZ2luOiAzMHB4IDgwcHg7XG59XG5cbi5idG4tcGF5bWVudC1wb3Age1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgLy8gbWFyZ2luOiAwIDFyZW0gMXJlbTtcbiAgLy8gbWFyZ2luLWJvdHRvbTogNjhweDtcbiAgYmFja2dyb3VuZDogIzI5NzhmMjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIGltYWdlICovXG5cbi5tZXRob2RlX3BhaWVtZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoOTBweCwgMWZyKSk7XG5cbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAxNXB4O1xuICBtYXJnaW46IDIwcHggMTBweDtcbn1cblxuLmNhZHJlX3BhaWVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNnB4IDI0cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAwcHggMHB4IDFweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYWRyZV9wYWllbWVudDpob3ZlciB7XG4gIGJvcmRlcjogMC41cHggc29saWQgIzA2NzJlNDtcbn1cblxuLmltZ19wYWllbWVudCB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8vIC5pbWdfcGFpZW1lbnRfY29tcHRlIHtcbi8vICAgd2lkdGg6IDYwcHg7XG4vLyAgIGhlaWdodDogNjBweDtcbi8vIH1cblxuLy8gLmltZ19wYWllbWVudF9jYXJ0ZSB7XG4vLyAgIHdpZHRoOiA2MHB4O1xuLy8gICBoZWlnaHQ6IDYwcHg7XG4vLyB9XG5cbi5pbWdfcGFpZW1lbnQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlX3BhaWVtZW50IHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLnRpdGxlX3BhaWVtZW50IHAge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubW9udGFudF9wYWllbWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLmRvdWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vIGdhcDogNXB4O1xuICAvLyBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5jYWRyZV9zZWN0aW9uX2NvbnRlbnVfbGVmdF9wcmlzZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uX2NvbnRlbnVfbGVmdF9wcmlzZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLm1vbnRhbnRfcGFpZW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBnYXA6IDhweDtcbn1cblxuLm1vbnRhbnRfcGFpZW1lbnQgaDEge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1vbnRhbnRfcGFpZW1lbnQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5tb3llbl9wYWllbWVudF9wcmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NERTNGQTtcbiAgZ2FwOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi8vIC5tb3llbl9wYWllbWVudF9wcmljZSB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgIHBhZGRpbmc6IDEwcHg7XG4vLyB9XG5cbi5tb3llbl9wYWllbWVudCB7XG4gIC8vIGZsZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNFNkYzRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDMUUwRkY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW95ZW5fcGFpZW1lbnQuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjRDBFQkZGO1xuICBib3JkZXItY29sb3I6ICM5MENERjQ7XG59XG5cbi5tb3llbl9wYWllbWVudCBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4ubW95ZW5fcHJpc2VfZHUgLnByaWNlX2R1IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5jbGVhci1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI0U1M0UzRTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGlzY291bnQtaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5idG4tY3VycmVuY3ksXG4uYnRuLXBlcmNlbnQge1xuICBiYWNrZ3JvdW5kOiAjRjBGMEYwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjJiMmIyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLXBlcmNlbnQge1xuICBwYWRkaW5nOiAycHggMTVweDtcbn1cblxuLmJ0bi1jdXJyZW5jeSB7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xufVxuXG4uaW5wdXQtZGlzY291bnQge1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGlzY291bnQtdW5pdCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5kaXNjb3VudC1sYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xOHB4O1xufVxuXG4uZGlzY291bnQtbGFiZWwgcCB7XG4gIG1hcmdpbjogNHB4IDAgMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLnBhaWVtZW50X3Jlc3RhbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMzBweDtcbn1cblxuLmJ0bl9mYWN0dXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYnRuX2ZhY3R1cmUgaW5wdXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYWllbWVudF9idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wYWllbWVudF9idG4gcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmJ0bl9jbGllbnQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG5fY2xpZW50IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kb3VibGVfY2xpZW50X2ZhY3R1cmUge1xuICAvLyBkaXNwbGF5OiBmbGV4O1xuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4uZG91YmxlX3JlbWlzZV9mYWN0dXJlIHtcbiAgZ2FwOiAzcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzVweCAxZnI7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIFxuICAubmFtZV9jYXRlZ29yaWUgc3BhbixcbiAgLm5vbWJyZSB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnNlbGVjdGVkX21vZGVfcGF5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJmN2RkMTtcbn1cblxuLmtleXBhZCBidXR0b24uYnRuX2tleXBhZF9hY3RpdmUge1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMDY3MkU0O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjQzFFMEZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmY3ZGQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlZmZmO1xufVxuXG4vKiBTdHlsZSBwb3VyIGxlcyBtw6l0aG9kZXMgZGUgcGFpZW1lbnQgc8OpbGVjdGlvbm7DqWVzICovXG4uY2FkcmVfcGFpZW1lbnQuc2VsZWN0ZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNENBRjUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmY0O1xufVxuXG4ucHJpY2VfZHUgcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4vLyAua2V5cGFkIGJ1dHRvbjpmb2N1cyB7XG4vLyAgIG91dGxpbmU6IDJweCBzb2xpZCAjMDY3MkU0O1xuLy8gICBvdXRsaW5lLW9mZnNldDogMnB4O1xuLy8gfVxuXG4vKiBEYW5zIHRvbiBmaWNoaWVyIC5jb21wb25lbnQuY3NzIG91IGdsb2JhbCAqL1xuLmFsZXJ0LWxvdy1zdG9jayB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zYWZlLXN0b2NrIHtcbiAgY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJhcmNvZGUtc2hpZnRlZCB7XG4gIGxlZnQ6IDExcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJ0bl9jbGllbnQuaGFzLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxZDVmZjtcbn1cblxuLy8gLmNsZWFyLWN1c3RvbWVyIHtcbi8vICAgbWFyZ2luLWxlZnQ6IDhweDtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBjb2xvcjogI2ZmNGQ0Zjtcbi8vIH1cblxuLmNsZWFyLWN1c3RvbWVyOmhvdmVyIHtcbiAgY29sb3I6ICNjZjEzMjI7XG59XG5cbi5zZWxlY3RlZC1jbGllbnQtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zZWxlY3RlZC1jbGllbnQtaW5mbyBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc2VsZWN0ZWQtY2xpZW50LWluZm8gc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ucGFpZW1lbnRfYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2xlYXItY3VzdG9tZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8vIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDBweCAwcHggMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIFBlcm1ldHRyZSBsZSBkw6lwbGFjZW1lbnQgc2FucyBzw6lsZWN0aW9uIGRlIHRleHRlICovXG5bZHJhZ2dhYmxlXSB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4vKiBDdXJzZXVyIHBvdXIgbGVzIHpvbmVzIGTDqXBsYcOnYWJsZXMgKi9cbi5wb3B1cC1oZWFkZXIge1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbi8qIFN0eWxlcyBwb3VyIGxlcyBiYWRnZXMgZGUgcmVtaXNlICovXG4uZGlzY291bnQtYmFkZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xuICBjb2xvcjogI2M2MjgyODtcbiAgcGFkZGluZzogMnB4IDZweCAycHggMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDlweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLyogQm91dG9uIGQnw6lkaXRpb24gZGUgcmVtaXNlICovXG4uZWRpdC1kaXNjb3VudCB7XG4gIC8vIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICBcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IGRhcmtlbigjMDY3MkU0LCAxNSUpO1xuICB9XG59XG5cbi8vIC5lZGl0LWRpc2NvdW50IGkge1xuLy8gICBmb250LXNpemU6IDE0cHg7XG4vLyB9XG5cbi8qIFN0eWxlIGFjdGlmIHBvdXIgbGVzIGJvdXRvbnMgQ0ZBLyUgKi9cbi5idG4tY3VycmVuY3kuYWN0aXZlLCAuYnRuLXBlcmNlbnQuYWN0aXZlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDREUzRkE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNjcyZTQ7XG59XG5cbi8vIHBvcy12ZW50ZS5jb21wb25lbnQuc2Nzc1xuLmdsb2JhbC1kaXNjb3VudCB7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNlZWU7XG5cbiAgLmRpc2NvdW50LWlucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIFxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDY3MkU0O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzA2NzJFNDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxufVxuXG4uZG91YmxlX3Jvdy50b3RhbCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi8vIEluZGljYXRldXIgdmlzdWVsXG4uZ2xvYmFsLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmY3ZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxZDVmZiAhaW1wb3J0YW50O1xufVxuXG4vLyBwb3MtdmVudGUuY29tcG9uZW50LnNjc3Ncbi5zY2FuLWVycm9yLXRvYXN0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xuICBjb2xvcjogI2M2MjgyODtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjIpO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUE9TL3Bvcy1jb21tYW5kZS9wb3MtY29tbWFuZGUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL1BPUy9wb3MtdmVudGUvcG9wLXZlbnRlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL1BPUy9wb3MtdmVudGUvcG9zLXZlbnRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0doQjtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsc0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QURGRjs7QUNLQTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBREhGO0FDYUk7RUFJRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QURkTjtBQ2dCTTtFQUNFLGNBQUE7QURkUjs7QUN1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FEckJGOztBQ3dCQTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRHRCRjtBQ3dCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FEdEJKO0FDd0JJO0VBSUUsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FEekJOO0FDMkJNO0VBQ0Us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cG9zLXZlbnRlLmNvbXBvbmVudC5zY3NzJztcbkB1c2UgJy4uL3Bvcy12ZW50ZS9wb3MtdmVudGUuY29tcG9uZW50LnNjc3MnIGFzICo7XG5cbnAge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmJ0bl9jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDFmciA2MHB4O1xuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogNjhweDtcbiAgICBtYXJnaW46IDEwcHggMTBweCAwO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmxpX2xpc3RfcHJvZHVpdF9zZWxlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmljb25fY2hlY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMjBweDtcbn1cblxuLmljb25fY2hlY2sgaSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmljb25fZWRpdF9xdWFudGl0ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb25fZWRpdF9xdWFudGl0ZTpob3ZlciB7XG4gIGNvbG9yOiAjMDY3MkU0O1xufVxuXG4uYnRuLXBheW1lbnQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0bi1wYXltZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgIHBhZGRpbmc6IDMwcHggMDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bl9jb250ZW50IHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5idG5fZGVsZXRlLFxuLmJ0bl9yZXRvdXJuXG57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZzogMjMuMTNweCAwO1xuXG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bl9kZWxldGUgaSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYnRuX3JldG91cm4gaSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uYnRuX2RlbGV0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyQUNBQztcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLmJ0bl9yZXRvdXJuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLnNlY3Rpb25fbGlzdF9jb21tYW5kZSB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTE1cHgpOyAvLyBhanVzdGUgY2V0dGUgdmFsZXVyIHNlbG9uIGxhIHRhaWxsZSBkdSBoZWFkZXIvcmVjaGVyY2hlXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogNHB4O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2LCAxMTQsIDIyOCwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG4udWxfY29tbWFuZGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDBweCAwcHggMXB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNFREVCRUI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLnVsX2NvbW1hbmRlX2FjdGl2ZSB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0UxRTZFQjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RFM0ZBO1xufVxuXG4uY29tbWFuZGVfZGF0ZSwgLmNvbW1hbmRlX2hldXJlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5ldGF0X2NvbW1hbmRlIHAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gICAgcGFkZGluZzogM3B4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmljb25fZGVsZXRlX2NvbW1hbmRlIGksXG4uaWNvbl9mYXZvcnlfY29tbWFuZGUgaSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaWNvbl9kZWxldGVfY29tbWFuZGUgaTpob3ZlciB7XG4gICAgY29sb3I6ICNmZjAwMDA7XG59XG5cbi5pY29uX2Zhdm9yeV9jb21tYW5kZSBpIHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbn1cblxuLyogU3R5bGVzIGRlIGzDosKAwplpbnB1dCBkZSByZWNoZXJjaGUgKi9cbiAgICBcbi50b29sYmFyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDVweCAxZnIgMTMwcHggMTgwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMDtcbn1cblxuLnBhZ2VyLWluZm8ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmljb25fc2VhcmNoIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cblxuLnNlYXJjaCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uYnRuX3NlYXJjaF9maWx0cmUgLmJ0biB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1sZWZ0OiAwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uYnRuX3NlYXJjaF9maWx0cmUgLmJ0biBpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ubG9hZGluZ19jb21tYW5kZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5kb3VibGVfY29tbWFuZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIC8vIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLmJ0bl9zZWFyY2hfZmlsdHJlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvLyBOw4PCqWNlc3NhaXJlIHBvdXIgcG9zaXRpb25uZXIgbGUgZHJvcGRvd25cblxuICAuZHJvcGRvd25fZmlsdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgIGxpIHtcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnN0YXR1cy1wYWlkIHtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDE2NywgNjksIDAuMSkgIWltcG9ydGFudDtcbn1cblxuLnBvcHVwLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbiAgLy8gbWFyZ2luOiAxMXB4IDA7XG59XG5cbi5wb3B1cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuICAgIC5jbG9zZS1idG4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgfVxuXG4gICAgICAudGl0bGgge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC1mYW1pbHk6IHBvcHBpbnMsIHNhbnMtc2VyaWY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuICAgIFxuICAgIC50aXRscCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LWZhbWlseTogcG9wcGlucywgc2Fucy1zZXJpZjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICB9XG5cbiAgICBoNiwgLmg2e1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC1mYW1pbHk6IHBvcHBpbnMsIHNhbnMtc2VyaWY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuICAgIHRleHRhcmVhIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4ucGluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDE1cHg7XG4gIC8vIG1hcmdpbjogMjVweCAwO1xuICBcbiAgaW5wdXQge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMGUwZTA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIFxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDY3MkU0O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSg1MiwgMTE5LCAyMTksIDAuNSk7XG4gICAgfVxuICB9XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICAvLyBwYWRkaW5nOiAxMnB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTgwYjk7XG4gIH1cbn1cblxuLnNoYWtlIHtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzO1xufVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgMjUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTsgfVxuICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7IH1cbn1cblxuLmNsb3NlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM4ODg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjMpO1xuICB9XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi5idG4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuIFxuLmJ0bi1jYW5jZWwge1xuIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8vaG92ZXJcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzMmYyZjtcbiAgfVxufVxuXG4uYnRuLWNvbmZpcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBGcm9tIFN2ZyAqLyBcbi5jeWJlci1jaGVja2JveCB7XG4gICAgLS1jaGVja2JveC1zaXplOiAxNXB4O1xuICAgIC0tY2hlY2tib3gtY29sb3I6ICMwNjcyRTQ7XG4gICAgLS1jaGVja2JveC1jaGVjay1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWNoZWNrYm94LWhvdmVyLWNvbG9yOiAjMDM2MGMzO1xuICAgIC0tY2hlY2tib3gtc3Bhcmstb2Zmc2V0OiAtMjBweDtcbiAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG4gIFxuICAuY3liZXItY2hlY2tib3ggaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5jeWJlci1jaGVja2JveF9fbWFyayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogdmFyKC0tY2hlY2tib3gtc2l6ZSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1jaGVja2JveC1zaXplKTtcbiAgfVxuICBcbiAgLmN5YmVyLWNoZWNrYm94X19ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWNoZWNrYm94LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgfVxuICBcbiAgLmN5YmVyLWNoZWNrYm94X19jaGVjayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBzdHJva2U6IHZhcigtLWNoZWNrYm94LWNoZWNrLWNvbG9yKTtcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICBmaWxsOiBub25lO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgfVxuICBcbiAgLmN5YmVyLWNoZWNrYm94X19lZmZlY3RzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IHZhcigtLWNoZWNrYm94LXNwYXJrLW9mZnNldCk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gIC5jeWJlci1jaGVja2JveF9fc3Bhcmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDJweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgfVxuICBcbiAgLyogSG92ZXIgKi9cbiAgLmN5YmVyLWNoZWNrYm94OmhvdmVyIC5jeWJlci1jaGVja2JveF9fYm94IHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNoZWNrYm94LWhvdmVyLWNvbG9yKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSg5MiwgMTAzLCAyNTUsIDAuMSk7XG4gIH1cbiAgXG4gIC8qIENoZWNrZWQgKi9cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLmN5YmVyLWNoZWNrYm94X19ib3gge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LWNvbG9yKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNoZWNrYm94LWNvbG9yKTtcbiAgfVxuICBcbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLmN5YmVyLWNoZWNrYm94X19jaGVjayB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICBcbiAgLyogU3BhcmsgQW5pbWF0aW9uICovXG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpjaGVja2VkICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5jeWJlci1jaGVja2JveF9fc3Bhcmsge1xuICAgIGFuaW1hdGlvbjogc3BhcmsgMC40cyBlYXNlLW91dDtcbiAgfVxuICBcbiAgLmN5YmVyLWNoZWNrYm94X19zcGFyazpudGgtY2hpbGQoMSkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHRyYW5zbGF0ZVgodmFyKC0tY2hlY2tib3gtc3Bhcmstb2Zmc2V0KSk7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94X19zcGFyazpudGgtY2hpbGQoMikge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVYKHZhcigtLWNoZWNrYm94LXNwYXJrLW9mZnNldCkpO1xuICB9XG4gIC5jeWJlci1jaGVja2JveF9fc3Bhcms6bnRoLWNoaWxkKDMpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZVgodmFyKC0tY2hlY2tib3gtc3Bhcmstb2Zmc2V0KSk7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94X19zcGFyazpudGgtY2hpbGQoNCkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZykgdHJhbnNsYXRlWCh2YXIoLS1jaGVja2JveC1zcGFyay1vZmZzZXQpKTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzcGFyayB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDBkZWcpIHRyYW5zbGF0ZVgodmFyKC0tY2hlY2tib3gtc3Bhcmstb2Zmc2V0KSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKVxuICAgICAgICB0cmFuc2xhdGVYKGNhbGModmFyKC0tY2hlY2tib3gtc3Bhcmstb2Zmc2V0KSAqIDEuNSkpO1xuICAgIH1cbiAgfVxuICBcbiAgLyogQWN0aXZlICovXG4gIC5jeWJlci1jaGVja2JveDphY3RpdmUgLmN5YmVyLWNoZWNrYm94X19ib3gge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgfVxuICBcbiAgLyogRm9jdXMgKi9cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmZvY3VzICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5jeWJlci1jaGVja2JveF9fYm94IHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSg5MiwgMTAzLCAyNTUsIDAuMik7XG4gIH1cbiAgXG4gIC5jeWJlci1jaGVja2JveF9fcGFydGljbGVzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IC01MCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gIC5jeWJlci1jaGVja2JveF9fcGFydGljbGVzIGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogM3B4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC1jb2xvcik7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLyogUGFydGljbGUgYW5pbWF0aW9ucyBmb3IgY2hlY2sgKi9cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTEge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtMSAwLjRzIGVhc2Utb3V0IGZvcndhcmRzO1xuICB9XG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpjaGVja2VkICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS0yIHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLTIgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjFzO1xuICB9XG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpjaGVja2VkICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS0zIHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLTMgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjE1cztcbiAgfVxuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIC5jeWJlci1jaGVja2JveF9fbWFyayAucGFydGljbGUtNCB7XG4gICAgYW5pbWF0aW9uOiBwYXJ0aWNsZS00IDAuNHMgZWFzZS1vdXQgZm9yd2FyZHMgMC4wNXM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTUge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtNSAwLjRzIGVhc2Utb3V0IGZvcndhcmRzIDAuMTJzO1xuICB9XG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpjaGVja2VkICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS02IHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLTYgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjA4cztcbiAgfVxuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIC5jeWJlci1jaGVja2JveF9fbWFyayAucGFydGljbGUtNyB7XG4gICAgYW5pbWF0aW9uOiBwYXJ0aWNsZS03IDAuNHMgZWFzZS1vdXQgZm9yd2FyZHMgMC4xOHM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTgge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtOCAwLjRzIGVhc2Utb3V0IGZvcndhcmRzIDAuMTVzO1xuICB9XG4gIFxuICAvKiBQYXJ0aWNsZSBhbmltYXRpb25zIGZvciB1bmNoZWNrICovXG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpub3QoOmNoZWNrZWQpICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS0xIHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLW91dC0xIDAuNHMgZWFzZS1vdXQgZm9yd2FyZHM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0Om5vdCg6Y2hlY2tlZCkgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTIge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtb3V0LTIgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjFzO1xuICB9XG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpub3QoOmNoZWNrZWQpICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS0zIHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLW91dC0zIDAuNHMgZWFzZS1vdXQgZm9yd2FyZHMgMC4xNXM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0Om5vdCg6Y2hlY2tlZCkgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTQge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtb3V0LTQgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjA1cztcbiAgfVxuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6bm90KDpjaGVja2VkKSArIC5jeWJlci1jaGVja2JveF9fbWFyayAucGFydGljbGUtNSB7XG4gICAgYW5pbWF0aW9uOiBwYXJ0aWNsZS1vdXQtNSAwLjRzIGVhc2Utb3V0IGZvcndhcmRzIDAuMTJzO1xuICB9XG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpub3QoOmNoZWNrZWQpICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS02IHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLW91dC02IDAuNHMgZWFzZS1vdXQgZm9yd2FyZHMgMC4wOHM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0Om5vdCg6Y2hlY2tlZCkgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTcge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtb3V0LTcgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjE4cztcbiAgfVxuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6bm90KDpjaGVja2VkKSArIC5jeWJlci1jaGVja2JveF9fbWFyayAucGFydGljbGUtOCB7XG4gICAgYW5pbWF0aW9uOiBwYXJ0aWNsZS1vdXQtOCAwLjRzIGVhc2Utb3V0IGZvcndhcmRzIDAuMTVzO1xuICB9XG4gIFxuICAvKiBQYXJ0aWNsZSBrZXlmcmFtZXMgZm9yIGNoZWNrICovXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtMSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjBweCwgLTIwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtMiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAtMjBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS0zIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIDIwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtNCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjBweCwgMjBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS01IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMHB4LCAwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtNiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtNyB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0zMHB4KSBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHBhcnRpY2xlLTgge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAzMHB4KSBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICAvKiBQYXJ0aWNsZSBrZXlmcmFtZXMgZm9yIHVuY2hlY2sgKi9cbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS1vdXQtMSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwcHgsIC0yMHB4KSBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtb3V0LTIge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIC0yMHB4KSBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtb3V0LTMge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIDIwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS1vdXQtNCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwcHgsIDIwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS1vdXQtNSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwcHgsIDBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHBhcnRpY2xlLW91dC02IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS1vdXQtNyB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMzBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHBhcnRpY2xlLW91dC04IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDMwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuXG4ubGlfbGlzdF9wcm9kdWl0X3NlbGVjdC5zZWxlY3RlZC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2ZmMDAwMDtcbn1cblxuLmRvdWJsZV9jb21tYW5kZSAubm9tYnJlX3NlbGVjdCBzcGFuIHtcbiAgb3BhY2l0eTogMC43O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5xdWFudGl0eS1pbnB1dCB7XG4gIHdpZHRoOiA1MHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItY29sb3I6ICM0ZDkwZmU7XG4gIH1cbn1cblxuLmljb25fZWRpdF9xdWFudGl0ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjNGQ5MGZlO1xuICB9XG59XG5cblxuLy9pY2lcbiAgLyogQ29udGVuZXVyIGR1IHRvYXN0ICovXG4udG9hc3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDYwcHg7XG4gIHJpZ2h0OiAzNXB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4gLy8gdG9hc3Qgc3VjY2Vzc1xuLnRvYXN0LW1lc3NhZ2Utc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNENUU2REU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQ0NFQkM7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW5PdXQgNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG59XG5cbi8vdG9hc3Qgc3VjY2Vzc1xuLnRvYXN0LW1lc3NhZ2UtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRDhEQTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U3QjFCNjtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVJbk91dCA0cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbn1cblxuLyogQW5pbWF0aW9uIHBvdXIgZmFpcmUgYXBwYXJhw4PCrnRyZSBldCBkaXNwYXJhw4PCrnRyZSBsZSB0b2FzdCAqL1xuQGtleWZyYW1lcyBmYWRlSW5PdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgODAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7IC8qIExlIHRvYXN0IGRpc3BhcmHDg8KudCBhdmVjIHVuIGzDg8KpZ2VyIG1vdXZlbWVudCB2ZXJzIGxlIGJhcyAqL1xuICB9XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIC8vIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5vX3BhZ2VyX3ByZXZpb3VzIGksXG4ub19wYWdlcl9uZXh0IGkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4uZC1wcmludC1ub25lIGJ1dHRvbntcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbn1cblxuLmQtcHJpbnQtbm9uZSAub19wYWdlcl9wcmV2aW91cyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uZC1wcmludC1ub25lIC5vX3BhZ2VyX25leHQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5wYWdlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbn1cblxuLmVtcHR5LWNhcnQtbWVzc2FnZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn0iLCIvLyBAaW1wb3J0ICcvc3JjL2FwcC9hZG1pbi1wYWdlL2NsaWVudHMvYWRkQ2xpZW50L2FkZC1jbGllbnRzL2FkZC1jbGllbnRzLmNvbXBvbmVudC5zY3NzJztcblxuLy8gcGF5bWVudCBwb3B1cCBvdmVybGF5XG4ucGF5bWVudC1wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjczMyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ucGF5bWVudC1wb3B1cCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogODUlO1xuICAvLyBtYXgtd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDkwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAucG9wdXAtaGVhZGVyIHtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIHBhZGRpbmc6IDIwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICBcbiAgICAuY2xvc2UtYnRuIHtcbiAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIC8vIHRvcDogMTBweDtcbiAgICAgIC8vIHJpZ2h0OiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICB9XG4gIFxufVxuXG4vLyBsaXN0IGNsaWVudCBwb3B1cCBvdmVybGF5XG4ubGlzdC1jbGllbnQtcG9wdXAtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MzMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmxpc3QtY2xpZW50LXBvcHVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA5MCU7XG4gIC8vIG1heC13aWR0aDogODAwcHg7XG4gIGhlaWdodDogOTB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gIC5wb3B1cC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgXG4gICAgLmNsb3NlLWJ0biB7XG4gICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAvLyB0b3A6IDEwcHg7XG4gICAgICAvLyByaWdodDogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgfVxuICBcbn1cblxuLmRldGFpbC1wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmRldGFpbC1pbWFnZSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbn1cblxuLmRldGFpbC1wb3B1cCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsMCwwLDAuMyk7XG5cbiAgLnBvcHVwLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcblxuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLmNsb3NlLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLnBvcHVwLWJvZHkge1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcblxuICAgIC5zaG9wLW5hbWUge1xuICAgICAgbWFyZ2luOiAwIDAgMXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLmRldGFpbC1ncmlkIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gICAgICBnYXA6IDEuNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICB9XG5cbiAgICAuZGV0YWlsLWluZm8ge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDI1MHB4IDFmcjtcbiAgICAgICAgcm93LWdhcDogMC43NXJlbTtcbiAgICAgICAgY29sdW1uLWdhcDogNHJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgICAgICAuaW5mby1yb3cge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudmFsdWUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgLmRldGFpbC1kZXNjcmlwdGlvbiB7XG4gICAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7XG4gICAgICAubGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgIH1cbiAgICAgIC52YWx1ZSB7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnBvcHVwLWFjdGlvbnMge1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAuYnRuLWFkZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDY3MmU0O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMC42cmVtIDEuMnJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0NWEwNDk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIETDg8Kpc2FjdGl2ZXIgbGUgYm91dG9uIHF1YW5kIGxlIG1vbnRhbnQgZXN0IGluc3VmZmlzYW50ICovXG4uYnRuLXBheW1lbnQtcG9wOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgY29sb3I6ICNhY2FjYWM7XG59XG5cbi8vLy8vLy8vLy8vLy8vIFBvcCBVcCBjbGllbnQgcG91ciBsZXMgbGlzdFxuXG4uYnRuQWRkQ2xpZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uYnRuQWRkQ2xpZW50IGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJlNDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudHIge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxudGQge1xuICBwYWRkaW5nOiAxOHB4IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkOTQ7XG59XG4gIFxudGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ5NDtcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcbn1cbiAgXG50cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG4gIFxudHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi8qIFN0eWxlIGRlIGwnaW1hZ2UgY2lyY3VsYWlyZSBpbWcgbGlzdCAqL1xuLmltZ0NsaWVudCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1nQ2xpZW50IGltZyB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cblxuLmltZ0NsaWVudDpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIEVmZmV0IHpvb20gYXUgc3Vydm9sICovXG59XG5cbi5uby1jbGllbnQtbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6ICM4ODg7XG59XG5cbi5pbnB1dFNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5wdXRTZWFyY2ggaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaW5wdXRTZWFyY2ggaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4vKiBBam91dGVyIMODwqAgbGEgZmluIGR1IGZpY2hpZXIgU0NTUyAqL1xuXG4vLyBQb3B1cCBkJ2Fqb3V0IGRlIGNsaWVudFxuLmFkZC1jbGllbnQtcG9wdXAtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzMzKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDE7XG59XG5cbi5hZGQtY2xpZW50LXBvcHVwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDcwMHB4O1xuICBoZWlnaHQ6IDgzdmg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgLnBvcHVwLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICBcbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIFxuICAgIC5jbG9zZS1idG4ge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5wb3B1cC1ib2R5IHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICB3aWR0aDogNHB4O1xuICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgfVxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIC8vIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgXG4gICAgLmFkZC1jbGllbnQtZm9ybSB7XG4gICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggMTVweDtcbiAgICAgICAgXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlucHV0LCB0ZXh0YXJlYSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzA2NzJlNDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDYsIDExNCwgMjI4LCAwLjI1KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAuY2xpZW50LXR5cGUtc2VsZWN0b3Ige1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAvLyBnYXA6IDEwcHg7XG4gICAgICAgIFxuICAgICAgICAuY2xpZW50LXR5cGUtYnRuIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgIFxuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNjcyZTQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5waG90by11cGxvYWQge1xuICAgICAgICAucGhvdG8tcGxhY2Vob2xkZXIge1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICNjZWQ0ZGE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBcbiAgICAgICAgICBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLnBvcHVwLWFjdGlvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYm94LXNoYWRvdzogMCAtMnB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgXG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5idG4tY2FuY2VsIHtcbiAgICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3MDQwNDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmJ0bi1zYXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyZTQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU1Y2I5O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLy8vLy8vLy8vLy8gQWRkIGNsaWVudCBcblxuLmRvdWJsZV9pbnB1dCB7XG4gIC8vIGRpc3BsYXk6IGZsZXg7IFxuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyBnYXA6IDIwcHg7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbiAgZ2FwOiAxMHB4O1xuICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZ3JpZF9jb2xvbm5lIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uY2hhbXBfaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbnB1dF9mb2N1cyB7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyBtaW4td2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDQ5cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzY5NWM1Yztcbn1cbiAgXG4uY2hhbXBfaW5wdXQgLmxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIycHg7XG4gIGxlZnQ6IDRweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbG9yOiByZ2IoMTA3LCAxMDIsIDEwMik7XG59XG5cbi5pbnB1dF9mb2N1czpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuICBcbiAgXG4uaW5wdXRfZm9jdXM6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4uaW5wdXRfZm9jdXM6Zm9jdXMgKyAubGFiZWwge1xuICBjb2xvcjogIzA2NzJFNDtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaW5wdXRfZm9jdXM6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmNoYW1wX2lucHV0X2ludmVudGFpcmUge1xuICBkaXNwbGF5OiBmbGV4OyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG59XG5cbi5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLyogTWFzcXVlciBsJ2lucHV0IGNoZWNrYm94IG9yaWdpbmFsICovXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogTGUgw4LCqyBzbGlkZXIgw4LCuyAqL1xuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMThweDsgXG4gIHdpZHRoOiAxOHB4O1xuICBsZWZ0OiAzcHg7IFxuICBib3R0b206IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBRdWFuZCBsZSBjaGVja2JveCBlc3QgY29jaMODwqkgKi9cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgLyogQ291bGV1ciBhdSBjaG9peCAqL1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi5pbnB1dF9jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbGllbnQtdHlwZS1zZWxlY3RvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgXG4gIC5jbGllbnQtdHlwZS1idG4ge1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDY3MmU0O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG4ubm9tYnJlQ291bnQge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTVweDtcbiAgICByaWdodDogLTlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBkaXNwbGF5OiBmbGV4XG47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICByaWdodDogLTlweDtcbn1cblxuLm5vbWJyZUNvdW50IHNwYW4ge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIC8vIHBhZGRpbmc6IDRweDtcbn1cblxuLmJhcnJlIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwM2Y7XG4gICAgbWFyZ2luOiA4cHggMTBweDtcbn1cblxuLmNvbnRlbnRJY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgcGFkZGluZzogMHB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudEljb24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmZjsgLyogQ291bGV1ciBkZSBmb25kIHBvdXIgbCfDg8KpbMODwqltZW50IGFjdGlmICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxODkwZmY7IC8qIEJvcmR1cmUgcG91ciBsJ8ODwqlsw4PCqW1lbnQgYWN0aWYgKi9cbn1cblxuLmNvbnRlbnRJY29uLmFjdGl2ZSBpIHtcbiAgY29sb3I6ICMxODkwZmY7IC8qIENvdWxldXIgZGUgbCdpY8ODwrRuZSBhY3RpdmUgKi9cbn1cblxuLmNvbnRlbnRJY29uOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7IC8qIEVmZmV0IGhvdmVyIHBvdXIgbGVzIMODwqlsw4PCqW1lbnRzIG5vbiBhY3RpZnMgKi9cbn1cblxuLmRhdGUtcmVkIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDsgXG59XG4iLCJAdXNlICcuLi9wb3MtdmVudGUvcG9wLXZlbnRlLnNjc3MnIGFzICo7XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8gQ09OVEVOVUVcblxuLnNlY3Rpb25fY29udGVudV9jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0MDBweDtcbiAgZmxleDogMTsgICAgICAgICAgLyogcHJlbmQgbMOiwoDCmWVzcGFjZSByZXN0YW50ICovXG4gIG1pbi1oZWlnaHQ6IDA7ICAgIC8qIHBlcm1ldCDDg8KgIGxhIGNvbG9ubmUgZGUgZ2F1Y2hlIGRlIHLDg8KpdHLDg8KpY2lyICovXG59XG5cbi5zZWN0aW9uX2NvbnRlbnVfbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG5cbi5zZWN0aW9uX2Zhdm9yeV9wcm9kdWl0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMjBweCAxZnI7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGZsZXg6IDE7ICAgICAgICAgIC8qIG9jY3VwZSB0b3V0ZSBsYSBoYXV0ZXVyIGRpc3BvICovXG4gIG1pbi1oZWlnaHQ6IDA7ICAgIC8qIHBlcm1ldCBsYSByw4PCqXRyYWN0aW9uIHN1ciBsw6LCgMKZYXhlIHZlcnRpY2FsICovXG59XG5cblxuLnNlY3Rpb25fZmF2b3J5IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QxZDFkMTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnNlY3Rpb25fZmF2b3J5IC51bF9zZWN0aW9uX2Zhdm9yeSAubGlfc2VjdGlvbl9mYXZvcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RFM0ZBO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuLmRvdWJsZSAuaWNvbl9mYXZvcnkgaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRpdGxlX2Zhdm9yeSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRpdHJlX2NhdGVnb3JpZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnRpdHJlX2NhdGVnb3JpZSAuY2F0ZWdvcnktaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tdGVzdC1idG4sXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXJlbG9hZC1idG4sXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXN0YXR1cy1idG4sXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXRlc3QtbXVsdGktYnRuLFxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi1yZXNldC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjMDY3MkU0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi10ZXN0LWJ0bjpob3Zlcixcbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tcmVsb2FkLWJ0bjpob3Zlcixcbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tc3RhdHVzLWJ0bjpob3Zlcixcbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tdGVzdC1tdWx0aS1idG46aG92ZXIsXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXJlc2V0LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwNTU2YjM7XG59XG5cbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tc3RhdHVzLWJ0biB7XG4gIGJhY2tncm91bmQ6ICMyOGE3NDU7XG59XG5cbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tc3RhdHVzLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxZTdlMzQ7XG59XG5cbi8vIEluZGljYXRldXJzIGRlIGNoYXJnZW1lbnQgZXQgZCfDg8KpdGF0XG4ubG9hZGluZy1pbmRpY2F0b3IsXG4ubG9hZGluZy1tb3JlLWluZGljYXRvcixcbi5hbGwtbG9hZGVkLWluZGljYXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubG9hZGluZy1pbmRpY2F0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLmxvYWRpbmctbW9yZS1pbmRpY2F0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmZkO1xuICBjb2xvcjogIzE5NzZkMjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiZGVmYjtcbn1cblxuLmFsbC1sb2FkZWQtaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjVlODtcbiAgY29sb3I6ICMyZTdkMzI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGU2Yzk7XG59XG5cbi5sb2FkaW5nLWluZGljYXRvciBpLFxuLmxvYWRpbmctbW9yZS1pbmRpY2F0b3IgaSxcbi5hbGwtbG9hZGVkLWluZGljYXRvciBpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uYWxsLWxvYWRlZC1pbmRpY2F0b3IgaSB7XG4gIGFuaW1hdGlvbjogbm9uZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXRlc3QtbXVsdGktYnRuIHtcbiAgYmFja2dyb3VuZDogI2ZmYzEwNztcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG5cbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tdGVzdC1tdWx0aS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTBhODAwO1xufVxuXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXJlc2V0LWJ0biB7XG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XG59XG5cbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tcmVzZXQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2M4MjMzMztcbn1cblxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi1zdGF0dXMge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjNjY2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xufVxuXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXN0YXR1cy5hY3RpdmUge1xuICBjb2xvcjogIzI4YTc0NTtcbiAgYmFja2dyb3VuZDogI2Q0ZWRkYTtcbn1cblxuLnRpdHJlX2NhdGVnb3JpZSBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udWxfbGlfbmFtZV9jYXRlZ29yaWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udWxfbGlfbmFtZV9jYXRlZ29yaWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RFM0ZBO1xufVxuXG4uYWxsQ2F0ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjsgXG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLy8gLmFsbENhdGU6aG92ZXIge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RFM0ZBO1xuLy8gfVxuXG4vLy8vLy8vLy8vLy8vIFBST0RVSVQgXG5cbi5zZWN0aW9uX3Byb2R1aXQge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzVweCk7XG4gIG1pbi1oZWlnaHQ6IDA7ICAgIC8qIHNhbnMgw4PCp2EsIG92ZXJmbG93IG5lIHPDosKAwplhY3RpdmUgcGFzICovXG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA0cHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYsIDExNCwgMjI4LCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvLyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuLmxpX2xpc3RfcHJvZHVpdF9zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBtYXJnaW46IDZweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm5vbWJyZV9zZWxlY3Qge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5uYW1lX3Byb2R1aXRfc2VsZWN0IHAge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wcmljZV9wcm9kdWl0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaWNvbl9jbG9zZV9zZWxlY3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uX2Nsb3NlX3NlbGVjdCBpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaWNvbl9jbG9zZV9zZWxlY3QgaTpob3ZlciB7XG4gIGNvbG9yOiAjZmYwMDAwO1xufVxuXG4vKiBncmlsbGUgcmVzcG9uc2l2ZSAqL1xuLnByb2R1Y3QtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE4MHB4LCAxZnIpKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTUwcHgsIDFmcikpO1xuICBnYXA6IDFyZW07XG4gIC8vIHBhZGRpbmc6IDFyZW07XG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4O1xufVxuXG4vKiBjYXJ0ZSBwcm9kdWl0ICovXG4ucHJvZHVjdC1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsMCwwLDAuMDUpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLyogcGFzdGlsbGUgZGUgc3RvY2sgKi9cbi5zdG9jay1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZkZTA0NzsgLyogamF1bmUgY2xhaXIgKi9cbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2R1Y3QtY2FyZC5kaXNhYmxlZCxcbi5saV9saXN0LmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogcGFzdGlsbGUgZGUgc3RvY2sgKi9cbi5zdG9jay1iYWRnZS1saXN0IHtcbiAgYmFja2dyb3VuZDogI2ZkZTA0NzsgLyogamF1bmUgY2xhaXIgKi9cbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogaW1hZ2UgKi9cbi5wcm9kdWN0LWltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxcHggMnB4IDBweDtcbn1cblxuLyogY8OFwpN1ciBmYXZvcmkgKi9cbi5mYXZvcml0ZS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJweDtcbiAgcmlnaHQ6IDNweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjMDY3MmU0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmF2b3JpdGUtaWNvbi5yaS1oZWFydC1maWxsIHtcbiAgY29sb3I6ICMwNjcyZTQ7XG59XG4uZmF2b3JpdGUtaWNvbi1saXN0IHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjMDY3MmU0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmF2b3JpdGUtaWNvbi1saXN0LnJpLWhlYXJ0LWZpbGwge1xuICBjb2xvcjogIzA2NzJlNDtcbn1cblxuLyogem9uZSB0ZXh0ZSAqL1xuLmNhcmQtYm9keSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgZmxleDogMTsgLyogcG91c3NlIGxlIGJvdXRvbiBlbiBiYXMgKi9cbn1cbi5wcm9kdWN0LW5hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDAuMjVyZW0gMDtcbn1cbi5wcm9kdWN0LXN0b2NrIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luOiAwLjE1cmVtIDA7XG59XG4ucHJvZHVjdC1wcmljZSBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4vKiBib3V0b24gZGUgZMODwqljcsODwqltZW50YXRpb24gKi9cbi5idG4tZGVjcmVtZW50IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZjNmNGY2O1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDEwO1xufVxuLmJ0bi1kZWNyZW1lbnQgaSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmJvdHRvbV9wcmljZV9zdWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cblxuLnNlY3Rpb25fY29udGVudV9yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLy8gYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA0KSAwIDNweCA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAvKiBoYXV0ZXVyIGfDg8KpcsODwqllIHBhciBsZSBwYXJlbnQgKi9cbn1cblxuLyogMS4gTGEgbGlzdGUgcHJvZHVpdCAodHUgbCdhcyBkw4PCqWrDg8KgKSAqL1xuLmxpc3RfcHJvZHVpdF9zZWxlY3Qge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIC8vIHBhZGRpbmc6IDFyZW07XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA0cHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLy8gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbi8qIDIuIExlIHLDg8Kpc3Vtw4PCqSAqL1xuLnN1bW1hcnlfcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uc3VtbWFyeV9wYW5lbCAuZG91YmxlX3JvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC4yNXJlbSAwO1xuICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDtcbn1cbi5zdW1tYXJ5X3BhbmVsIC5kb3VibGVfcm93LnRvdGFsIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uZG91YmxlX3JvdyBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmRvdWJsZV9yb3cgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4vKiAzLiBDbGF2aWVyICovXG4ua2V5cGFkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiA1cHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLmtleXBhZCBidXR0b24ge1xuICBoZWlnaHQ6IDMuNXJlbTtcbiAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmtleXBhZCBidXR0b24uYmFja3NwYWNlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi8qIDQuIEJvdXRvbiBQYWllbWVudCAqL1xuLmJ0bl9jb250ZW50IHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uYnRuLXBheW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgLy8gbWFyZ2luOiAwIDFyZW0gMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNjhweDtcbiAgYmFja2dyb3VuZDogIzI5NzhmMjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYW1lX3N0b2NrX2xpc3Qge1xuICBsaW5lLWhlaWdodDogMS41O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucHJvZHVjdC1zdG9jay1saXN0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLm5hbWVfc3RvY2tfbGlzdCBwLFxuLm1veWVuX3BhaWVtZW50IHAsXG4ucHJpY2VfZHUgcCxcbi5tb3llbl9wYWllbWVudF9yZXN0YW50IHAsXG4ucGFpZW1lbnRfYnRuIHAgXG57XG4gIG1hcmdpbjogMDtcbn1cblxudWwudWxfbGlzdCB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4ubGlfbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjA2MykgMHB4IDdweCAyOXB4IDBweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbWdfcHJvZHVjdF9saXN0IHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5pbWdfcHJvZHVjdF9saXN0IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDBweCAwcHggMXB4O1xufVxuXG4uc2VjdGlvbl9wb3B1cF9wYWllbWVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDM1MHB4O1xuICBmbGV4OiAxO1xuICBtaW4taGVpZ2h0OiAwO1xuICBtYXJnaW46IDMwcHggODBweDtcbn1cblxuLmJ0bi1wYXltZW50LXBvcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICAvLyBtYXJnaW46IDAgMXJlbSAxcmVtO1xuICAvLyBtYXJnaW4tYm90dG9tOiA2OHB4O1xuICBiYWNrZ3JvdW5kOiAjMjk3OGYyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogaW1hZ2UgKi9cblxuLm1ldGhvZGVfcGFpZW1lbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg5MHB4LCAxZnIpKTtcblxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBnYXA6IDE1cHg7XG4gIG1hcmdpbjogMjBweCAxMHB4O1xufVxuXG4uY2FkcmVfcGFpZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhZHJlX3BhaWVtZW50OmhvdmVyIHtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDY3MmU0O1xufVxuXG4uaW1nX3BhaWVtZW50IHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLy8gLmltZ19wYWllbWVudF9jb21wdGUge1xuLy8gICB3aWR0aDogNjBweDtcbi8vICAgaGVpZ2h0OiA2MHB4O1xuLy8gfVxuXG4vLyAuaW1nX3BhaWVtZW50X2NhcnRlIHtcbi8vICAgd2lkdGg6IDYwcHg7XG4vLyAgIGhlaWdodDogNjBweDtcbi8vIH1cblxuLmltZ19wYWllbWVudCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGl0bGVfcGFpZW1lbnQge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4udGl0bGVfcGFpZW1lbnQgcCB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tb250YW50X3BhaWVtZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uZG91YmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gZ2FwOiA1cHg7XG4gIC8vIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLmNhZHJlX3NlY3Rpb25fY29udGVudV9sZWZ0X3ByaXNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlY3Rpb25fY29udGVudV9sZWZ0X3ByaXNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4ubW9udGFudF9wYWllbWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGdhcDogOHB4O1xufVxuXG4ubW9udGFudF9wYWllbWVudCBoMSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubW9udGFudF9wYWllbWVudCBzcGFuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLm1veWVuX3BhaWVtZW50X3ByaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RFM0ZBO1xuICBnYXA6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLy8gLm1veWVuX3BhaWVtZW50X3ByaWNlIHtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgcGFkZGluZzogMTBweDtcbi8vIH1cblxuLm1veWVuX3BhaWVtZW50IHtcbiAgLy8gZmxleDogMTtcbiAgYmFja2dyb3VuZDogI0U2RjNGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0MxRTBGRjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb3llbl9wYWllbWVudC5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICNEMEVCRkY7XG4gIGJvcmRlci1jb2xvcjogIzkwQ0RGNDtcbn1cblxuLm1veWVuX3BhaWVtZW50IHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5tb3llbl9wcmlzZV9kdSAucHJpY2VfZHUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuLmNsZWFyLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjRTUzRTNFO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kaXNjb3VudC1pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cblxuLmJ0bi1jdXJyZW5jeSxcbi5idG4tcGVyY2VudCB7XG4gIGJhY2tncm91bmQ6ICNGMEYwRjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiMmIyYjI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4tcGVyY2VudCB7XG4gIHBhZGRpbmc6IDJweCAxNXB4O1xufVxuXG4uYnRuLWN1cnJlbmN5IHtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dC1kaXNjb3VudCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXNjb3VudC11bml0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuLmRpc2NvdW50LWxhYmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE4cHg7XG59XG5cbi5kaXNjb3VudC1sYWJlbCBwIHtcbiAgbWFyZ2luOiA0cHggMCAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ucGFpZW1lbnRfcmVzdGFudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCAzMHB4O1xufVxuXG4uYnRuX2ZhY3R1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5idG5fZmFjdHVyZSBpbnB1dCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBhaWVtZW50X2J0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnBhaWVtZW50X2J0biBwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uYnRuX2NsaWVudCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bl9jbGllbnQgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRvdWJsZV9jbGllbnRfZmFjdHVyZSB7XG4gIC8vIGRpc3BsYXk6IGZsZXg7XG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5kb3VibGVfcmVtaXNlX2ZhY3R1cmUge1xuICBnYXA6IDNweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NXB4IDFmcjtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgXG4gIC5uYW1lX2NhdGVnb3JpZSBzcGFuLFxuICAubm9tYnJlIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uc2VsZWN0ZWRfbW9kZV9wYXkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmY3ZGQxO1xufVxuXG4ua2V5cGFkIGJ1dHRvbi5idG5fa2V5cGFkX2FjdGl2ZSB7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwNjcyRTQ7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNDMUUwRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZjdkZDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGVmZmY7XG59XG5cbi8qIFN0eWxlIHBvdXIgbGVzIG3Dg8KpdGhvZGVzIGRlIHBhaWVtZW50IHPDg8KpbGVjdGlvbm7Dg8KpZXMgKi9cbi5jYWRyZV9wYWllbWVudC5zZWxlY3RlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0Q0FGNTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGZmZjQ7XG59XG5cbi5wcmljZV9kdSBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi8vIC5rZXlwYWQgYnV0dG9uOmZvY3VzIHtcbi8vICAgb3V0bGluZTogMnB4IHNvbGlkICMwNjcyRTQ7XG4vLyAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4vLyB9XG5cbi8qIERhbnMgdG9uIGZpY2hpZXIgLmNvbXBvbmVudC5jc3Mgb3UgZ2xvYmFsICovXG4uYWxlcnQtbG93LXN0b2NrIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNhZmUtc3RvY2sge1xuICBjb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYmFyY29kZS1zaGlmdGVkIHtcbiAgbGVmdDogMTFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnRuX2NsaWVudC5oYXMtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmN2ZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTFkNWZmO1xufVxuXG4vLyAuY2xlYXItY3VzdG9tZXIge1xuLy8gICBtYXJnaW4tbGVmdDogOHB4O1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIGNvbG9yOiAjZmY0ZDRmO1xuLy8gfVxuXG4uY2xlYXItY3VzdG9tZXI6aG92ZXIge1xuICBjb2xvcjogI2NmMTMyMjtcbn1cblxuLnNlbGVjdGVkLWNsaWVudC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNlbGVjdGVkLWNsaWVudC1pbmZvIHNwYW4ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zZWxlY3RlZC1jbGllbnQtaW5mbyBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5wYWllbWVudF9idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jbGVhci1jdXN0b21lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICByaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLy8gYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMHB4IDBweCAxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogUGVybWV0dHJlIGxlIGTDg8KpcGxhY2VtZW50IHNhbnMgc8ODwqlsZWN0aW9uIGRlIHRleHRlICovXG5bZHJhZ2dhYmxlXSB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4vKiBDdXJzZXVyIHBvdXIgbGVzIHpvbmVzIGTDg8KpcGxhw4PCp2FibGVzICovXG4ucG9wdXAtaGVhZGVyIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuXG4vKiBTdHlsZXMgcG91ciBsZXMgYmFkZ2VzIGRlIHJlbWlzZSAqL1xuLmRpc2NvdW50LWJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcbiAgY29sb3I6ICNjNjI4Mjg7XG4gIHBhZGRpbmc6IDJweCA2cHggMnB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiA5cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi8qIEJvdXRvbiBkJ8ODwqlkaXRpb24gZGUgcmVtaXNlICovXG4uZWRpdC1kaXNjb3VudCB7XG4gIC8vIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICBcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IGRhcmtlbigjMDY3MkU0LCAxNSUpO1xuICB9XG59XG5cbi8vIC5lZGl0LWRpc2NvdW50IGkge1xuLy8gICBmb250LXNpemU6IDE0cHg7XG4vLyB9XG5cbi8qIFN0eWxlIGFjdGlmIHBvdXIgbGVzIGJvdXRvbnMgQ0ZBLyUgKi9cbi5idG4tY3VycmVuY3kuYWN0aXZlLCAuYnRuLXBlcmNlbnQuYWN0aXZlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDREUzRkE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNjcyZTQ7XG59XG5cbi8vIHBvcy12ZW50ZS5jb21wb25lbnQuc2Nzc1xuLmdsb2JhbC1kaXNjb3VudCB7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNlZWU7XG5cbiAgLmRpc2NvdW50LWlucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIFxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDY3MkU0O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzA2NzJFNDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxufVxuXG4uZG91YmxlX3Jvdy50b3RhbCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi8vIEluZGljYXRldXIgdmlzdWVsXG4uZ2xvYmFsLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmY3ZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxZDVmZiAhaW1wb3J0YW50O1xufVxuXG4vLyBwb3MtdmVudGUuY29tcG9uZW50LnNjc3Ncbi5zY2FuLWVycm9yLXRvYXN0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xuICBjb2xvcjogI2M2MjgyODtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 41731:
/*!********************************************************!*\
  !*** ./src/app/admin-page/MODELS/cfa-currency.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CfaCurrencyPipe: () => (/* binding */ CfaCurrencyPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class CfaCurrencyPipe {
  transform(value) {
    if (value === null || value === undefined || isNaN(value)) {
      return 'N/A';
    }
    const hasDecimals = value % 1 !== 0;
    const formattedValue = value.toFixed(hasDecimals ? 2 : 0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${formattedValue} FCFA`;
  }
  static {
    this.ɵfac = function CfaCurrencyPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CfaCurrencyPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "cfaCurrency",
      type: CfaCurrencyPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 15334:
/*!**************************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/VenteService/pos-commande-service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PosCommandeService: () => (/* binding */ PosCommandeService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.service */ 88026);






class PosCommandeService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  getVentesByVendeur(vendeurId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get(`${this.apiUrl}/vente/vendeur/${vendeurId}`, {
        headers
      });
    }));
  }
  rembourserVente(request) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.post(`${this.apiUrl}/vente/rembourser`, request, {
        headers
      });
    }));
  }
  static {
    this.ɵfac = function PosCommandeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PosCommandeService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: PosCommandeService,
      factory: PosCommandeService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

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

/***/ 17022:
/*!***************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/commande-state.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommandeStateService: () => (/* binding */ CommandeStateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);


class CommandeStateService {
  constructor() {
    // Correction: Changer le type de commandesMap
    this.commandesMap = new Map();
    this.commandesIds = ['001'];
    this.activeCommandeId = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('001');
    this.activeCommandeId$ = this.activeCommandeId.asObservable();
    this.commandesIdsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.commandesIds);
    this.commandesIds$ = this.commandesIdsSubject.asObservable();
    this.commandeUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.commandeUpdated$ = this.commandeUpdated.asObservable();
    this.commandesMap.set('001', {
      id: '001',
      cart: new Map(),
      createdAt: new Date()
    });
  }
  getCommandeDetails(id) {
    return this.commandesMap.get(id);
  }
  updateCommandeTotals(id, totalItems, totalAmount) {
    const commande = this.commandesMap.get(id);
    if (commande) {
      commande.totalItems = totalItems;
      commande.totalAmount = totalAmount;
      this.commandesMap.set(id, commande);
    }
  }
  setActiveCommande(id) {
    if (!this.commandesMap.has(id)) {
      this.commandesMap.set(id, {
        id,
        cart: new Map(),
        createdAt: new Date()
      });
      this.commandesIds.push(id);
    }
    this.activeCommandeId.next(id);
  }
  // Correction: Retourner le cart de la commande
  getActiveCart() {
    const activeId = this.activeCommandeId.getValue();
    const commande = this.commandesMap.get(activeId);
    return commande ? commande.cart : new Map();
  }
  updateActiveCart(cart) {
    const activeId = this.activeCommandeId.getValue();
    const commande = this.commandesMap.get(activeId);
    if (commande) {
      commande.cart = new Map(cart);
      this.commandesMap.set(activeId, commande);
    }
  }
  getAllCommandesIds() {
    return [...this.commandesIds];
  }
  addNewCommande() {
    const newId = (this.commandesIds.length + 1).toString().padStart(3, '0');
    const newCommande = {
      id: newId,
      cart: new Map(),
      createdAt: new Date()
    };
    this.commandesMap.set(newId, newCommande);
    this.commandesIds.push(newId);
    this.commandesIdsSubject.next([...this.commandesIds]); // Notifier du changement
    return newId;
  }
  // Ajout de la méthode removeCommande
  removeCommande(id) {
    if (id === '001') {
      // Ne pas supprimer la commande par défaut
      return;
    }
    this.commandesMap.delete(id);
    this.commandeUpdated.next();
    const index = this.commandesIds.indexOf(id);
    if (index !== -1) {
      this.commandesIds.splice(index, 1);
    }
    // Si on supprime la commande active, on active la première commande
    if (this.activeCommandeId.getValue() === id) {
      this.activeCommandeId.next(this.commandesIds[0] || '001');
    }
    this.commandesIdsSubject.next([...this.commandesIds]);
  }
  // Ajout d'une méthode pour obtenir l'ID actif
  getActiveCommandeId() {
    return this.activeCommandeId.getValue();
  }
  static {
    this.ɵfac = function CommandeStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CommandeStateService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: CommandeStateService,
      factory: CommandeStateService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_POS_pos-commande_pos-commande_component_ts.js.map