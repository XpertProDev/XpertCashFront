"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_POS_pos-vente_pos-vente_component_ts"],{

/***/ 31297:
/*!******************************************************!*\
  !*** ./src/app/POS/pos-vente/pos-vente.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PosVenteComponent: () => (/* binding */ PosVenteComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var src_app_admin_page_MODELS_produit_category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin-page/MODELS/produit-category.model */ 13530);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 89475);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var ngx_barcode6__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-barcode6 */ 23701);
/* harmony import */ var src_app_admin_page_MODELS_cfa_currency_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin-page/MODELS/cfa-currency.pipe */ 41731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _pos_accueil_view_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pos-accueil/view-state.service */ 80145);
/* harmony import */ var src_app_admin_page_SERVICES_categorie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin-page/SERVICES/categorie.service */ 49293);
/* harmony import */ var src_app_admin_page_SERVICES_commande_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin-page/SERVICES/commande-state.service */ 17022);
/* harmony import */ var src_app_admin_page_SERVICES_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin-page/SERVICES/client-service */ 47746);
/* harmony import */ var src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/admin-page/SERVICES/users.service */ 88026);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var src_app_admin_page_SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/admin-page/SERVICES/entreprise-service */ 92120);
/* harmony import */ var src_app_admin_page_SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/admin-page/SERVICES/produit.service */ 66375);
/* harmony import */ var src_app_admin_page_SERVICES_VenteService_vente_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/admin-page/SERVICES/VenteService/vente-service */ 44413);
/* harmony import */ var src_app_admin_page_SERVICES_CaisseService_boutique_state_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/admin-page/SERVICES/CaisseService/boutique-state.service */ 37788);
/* harmony import */ var src_app_admin_page_SERVICES_VenteService_scanner_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/admin-page/SERVICES/VenteService/scanner.service */ 36406);
/* harmony import */ var src_app_admin_page_SERVICES_SearchService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/admin-page/SERVICES/SearchService */ 90612);
/* harmony import */ var src_app_admin_page_SERVICES_VenteService_calculator_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/admin-page/SERVICES/VenteService/calculator.service */ 68420);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/autocomplete */ 35255);



























const _c0 = a0 => ({
  "transform": a0
});
const _c1 = a0 => ({
  "date-red": a0
});
const _c2 = () => ({
  standalone: true
});
function PosVenteComponent_ul_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_ul_8_li_1_Template_li_click_0_listener() {
      const categorie_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.selectCategory(categorie_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 51)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const categorie_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("selected", ctx_r2.selectedCategoryId === categorie_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](categorie_r2.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("title", ctx_r2.getCategoryProductCountTooltip(categorie_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r2.getCategoryProductCountForDisplay(categorie_r2), " ");
  }
}
function PosVenteComponent_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ul", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, PosVenteComponent_ul_8_li_1_Template, 6, 5, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.categories);
  }
}
function PosVenteComponent_div_10_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const produit_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r2.getSelectedQuantity(produit_r6.id), " ");
  }
}
function PosVenteComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_10_div_1_Template_div_click_0_listener() {
      const produit_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.addToCart(produit_r6));
    })("pointerdown", function PosVenteComponent_div_10_div_1_Template_div_pointerdown_0_listener($event) {
      const produit_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.startPress($event, produit_r6));
    })("pointerup", function PosVenteComponent_div_10_div_1_Template_div_pointerup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.endPress());
    })("pointerleave", function PosVenteComponent_div_10_div_1_Template_div_pointerleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.endPress());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, PosVenteComponent_div_10_div_1_span_1_Template, 2, 1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 60)(4, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 63)(9, "div", 64)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](12, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_10_div_1_Template_button_click_13_listener($event) {
      const produit_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      ctx_r2.decreaseQuantity(produit_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const produit_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("disabled", ctx_r2.getAvailableStock(produit_r6) <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.getSelectedQuantity(produit_r6.id) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", ctx_r2.getProductImage(produit_r6.photo), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](produit_r6.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Stocks : ", ctx_r2.getAvailableStock(produit_r6), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](12, 7, produit_r6.prixVente));
  }
}
function PosVenteComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " Chargement des produits... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " Chargement de plus de produits... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("scroll", function PosVenteComponent_div_10_Template_div_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, PosVenteComponent_div_10_div_1_Template, 15, 9, "div", 54)(2, PosVenteComponent_div_10_div_2_Template, 3, 0, "div", 55)(3, PosVenteComponent_div_10_div_3_Template, 3, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.getVisibleProducts());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r2.categories.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.isLoadingMore && ctx_r2.selectedCategoryId === null);
  }
}
function PosVenteComponent_div_11_li_2_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const produit_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r2.getSelectedQuantity(produit_r9.id), " ");
  }
}
function PosVenteComponent_div_11_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "li", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_11_li_2_Template_li_click_0_listener() {
      const produit_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.addToCart(produit_r9));
    })("pointerdown", function PosVenteComponent_div_11_li_2_Template_li_pointerdown_0_listener($event) {
      const produit_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.startPress($event, produit_r9));
    })("pointerup", function PosVenteComponent_div_11_li_2_Template_li_pointerup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.endPress());
    })("pointerleave", function PosVenteComponent_div_11_li_2_Template_li_pointerleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.endPress());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 76)(2, "div", 77)(3, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 80)(6, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 83)(11, "div", 84)(12, "div", 64)(13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](17, PosVenteComponent_div_11_li_2_span_17_Template, 2, 1, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_11_li_2_Template_button_click_18_listener($event) {
      const produit_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      ctx_r2.decreaseQuantity(produit_r9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](19, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const produit_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("disabled", ctx_r2.getAvailableStock(produit_r9) <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", ctx_r2.getProductImage(produit_r9.photo), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](produit_r9.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Stocks : ", ctx_r2.getAvailableStock(produit_r9), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](15, 7, produit_r9.prixVente));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.getSelectedQuantity(produit_r9.id) > 0);
  }
}
function PosVenteComponent_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " Chargement de plus de produits... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, " Aucun produit dans cette cat\u00E9gorie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("scroll", function PosVenteComponent_div_11_Template_div_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ul", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, PosVenteComponent_div_11_li_2_Template, 20, 9, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, PosVenteComponent_div_11_div_3_Template, 3, 0, "div", 56)(4, PosVenteComponent_div_11_div_4_Template, 2, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.getVisibleProducts());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.isLoadingMore && ctx_r2.selectedCategoryId === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.displayedProducts.length === 0 && ctx_r2.categories.length);
  }
}
function PosVenteComponent_li_15_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, ctx_r2.getProductDiscount(item_r11.product.id)), " ");
  }
}
function PosVenteComponent_li_15_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_li_15_div_15_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r12);
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.removeProduct(item_r11.product.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_li_15_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_li_15_div_16_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.isEditingDiscount(item_r11.product.id) ? ctx_r2.saveDiscount(item_r11.product) : ctx_r2.editDiscount(item_r11.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMap"](ctx_r2.isEditingDiscount(item_r11.product.id) ? "ri-check-fill" : "ri-edit-2-line");
  }
}
function PosVenteComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "li", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_li_15_Template_li_click_0_listener() {
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.selectProductForDiscount(item_r11.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 90)(2, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 92)(5, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](9, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, PosVenteComponent_li_15_span_10_Template, 3, 3, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 90)(12, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](14, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](15, PosVenteComponent_li_15_div_15_Template, 2, 0, "div", 96)(16, PosVenteComponent_li_15_div_16_Template, 2, 2, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r11.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r11.product.nom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](9, 7, item_r11.product.prixVente), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.getProductDiscount(item_r11.product.id) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](14, 9, ctx_r2.calculateItemTotal(item_r11)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.inputMode !== "discount" && !ctx_r2.isEditingDiscount(item_r11.product.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.inputMode === "discount");
  }
}
function PosVenteComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 102)(1, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_28_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.setDiscountType("CFA"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " CFA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("input", function PosVenteComponent_div_28_Template_input_input_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.onDiscountInputChange($event));
    })("focus", function PosVenteComponent_div_28_Template_input_focus_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.onInputFocus());
    })("blur", function PosVenteComponent_div_28_Template_input_blur_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.onInputBlur());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_28_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.setDiscountType("%"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " % ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("active", ctx_r2.discountMode.type === "CFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", ctx_r2.currentDiscountInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("active", ctx_r2.discountMode.type === "%");
  }
}
function PosVenteComponent_p_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "img", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 107)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r2.selectedClient.nomComplet || "Client");
  }
}
function PosVenteComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 107)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r2.selectedEntreprise.nom || "Entreprise");
  }
}
function PosVenteComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_span_35_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.clearCustomerSelection($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_76_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, ctx_r2.getSubtotal()), " ");
  }
}
function PosVenteComponent_div_76_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 24)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Remise(s) produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("-", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 1, ctx_r2.getTotalDiscount()), "");
  }
}
function PosVenteComponent_div_76_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 102)(1, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_div_37_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.setGlobalDiscountType("CFA"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " CFA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "input", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PosVenteComponent_div_76_div_37_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r2.globalDiscount.value, $event) || (ctx_r2.globalDiscount.value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("input", function PosVenteComponent_div_76_div_37_Template_input_input_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.onGlobalDiscountInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_div_37_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.setGlobalDiscountType("%"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " % ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("active", ctx_r2.globalDiscount.type === "CFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.globalDiscount.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("active", ctx_r2.globalDiscount.type === "%");
  }
}
function PosVenteComponent_div_76_p_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_76_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 107)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r2.selectedClient.nomComplet || "Client");
  }
}
function PosVenteComponent_div_76_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 107)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r2.selectedEntreprise.nom || "Entreprise");
  }
}
function PosVenteComponent_div_76_span_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_span_80_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r18);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.clearCustomerSelection($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_76_span_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Valider Paiement");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_76_span_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "En cours\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 110)(1, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("mousedown", function PosVenteComponent_div_76_Template_div_mousedown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.startDrag($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.closePaymentPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 114)(6, "div", 115)(7, "div", 116)(8, "div", 117)(9, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](11, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13, "CFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, PosVenteComponent_div_76_div_14_Template, 3, 3, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 119)(16, "div", 120)(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 121)(20, "div", 122)(21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](23, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_i_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      ctx_r2.enteredAmount = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.calculatePayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "div", 124)(26, "div", 125)(27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "div", 121)(30, "div", 122)(31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](33, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](35, PosVenteComponent_div_76_div_35_Template, 6, 3, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](37, PosVenteComponent_div_76_div_37_Template, 6, 5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 25)(39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](40, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](43, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "div", 127)(45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](46, "Remise sur produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "div", 128)(48, "div", 20)(49, "div", 129)(50, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_div_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.selectPaymentMethod("Esp\u00E8ces"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](52, "img", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "div", 133)(54, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](55, "Esp\u00E8ces");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_div_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.selectPaymentMethod("Mobile money"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](57, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](58, "img", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](59, "div", 133)(60, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](61, "Mobile money");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](62, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_div_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.selectPaymentMethod("Carte"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](63, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](64, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "div", 133)(66, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](67, "Carte");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](68, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_div_click_68_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.selectPaymentMethod("Compte client"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](69, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](70, "img", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](71, "div", 133)(72, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](73, "Compte client");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](74, "div", 140)(75, "div", 28)(76, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_div_click_76_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.openListClientPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](77, PosVenteComponent_div_76_p_77_Template, 2, 0, "p", 30)(78, PosVenteComponent_div_76_div_78_Template, 3, 1, "div", 31)(79, PosVenteComponent_div_76_div_79_Template, 3, 1, "div", 31)(80, PosVenteComponent_div_76_span_80_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](81, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_button_click_81_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.toggleGlobalDiscount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](83, "div", 142)(84, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_button_click_84_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      ctx_r2.handlePaymentKeyPress("1");
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.notifyUserTyping());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](85, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](86, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_button_click_86_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      ctx_r2.handlePaymentKeyPress("2");
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.notifyUserTyping());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](87, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](88, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_button_click_88_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      ctx_r2.handlePaymentKeyPress("3");
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.notifyUserTyping());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](89, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](90, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](91, "Qt\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](92, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_button_click_92_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      ctx_r2.handlePaymentKeyPress("4");
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.notifyUserTyping());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](93, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](94, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_button_click_94_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      ctx_r2.handlePaymentKeyPress("5");
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.notifyUserTyping());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](95, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](96, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_button_click_96_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      ctx_r2.handlePaymentKeyPress("6");
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.notifyUserTyping());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](97, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](98, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](99, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](100, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_button_click_100_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      ctx_r2.handlePaymentKeyPress("7");
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.notifyUserTyping());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](101, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](102, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_button_click_102_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      ctx_r2.handlePaymentKeyPress("8");
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.notifyUserTyping());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](103, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](104, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_button_click_104_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      ctx_r2.handlePaymentKeyPress("9");
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.notifyUserTyping());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](105, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](106, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](107, "Prix");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](108, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_button_click_108_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      ctx_r2.handlePaymentKeyPress("+/-");
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.notifyUserTyping());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](109, "+/-");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](110, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_button_click_110_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      ctx_r2.handlePaymentKeyPress("0");
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.notifyUserTyping());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](111, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](112, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_button_click_112_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      ctx_r2.handlePaymentKeyPress(",");
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.notifyUserTyping());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](113, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](114, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_button_click_114_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.handlePaymentKeyPress("backspace"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](115, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](116, "div", 41)(117, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_76_Template_button_click_117_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.completePayment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](118, PosVenteComponent_div_76_span_118_Template, 2, 0, "span", 30)(119, PosVenteComponent_div_76_span_119_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](40, _c0, "translate3d(" + ctx_r2.popupOffset.x + "px, " + ctx_r2.popupOffset.y + "px, 0)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](11, 32, ctx_r2.getTotalCart()));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.getTotalDiscount() > 0 || ctx_r2.globalDiscount.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r2.selectedPaymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](23, 34, ctx_r2.paymentAmount));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵstyleProp"]("color", ctx_r2.paymentAmount >= ctx_r2.totalAmount ? "#008000" : "#ff0000");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r2.paymentAmount >= ctx_r2.totalAmount ? "Monnaie" : "Restant", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵstyleProp"]("color", ctx_r2.paymentAmount >= ctx_r2.totalAmount ? "#008000" : "#ff0000");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](33, 36, ctx_r2.changeDue), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.getTotalDiscount() > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.globalDiscount.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](43, 38, ctx_r2.getTotalCart()));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("selected_mode_pay", ctx_r2.selectedPaymentMethod === "Esp\u00E8ces");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("selected_mode_pay", ctx_r2.selectedPaymentMethod === "mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("selected_mode_pay", ctx_r2.selectedPaymentMethod === "card");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("selected_mode_pay", ctx_r2.selectedPaymentMethod === "account");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r2.selectedClient && !ctx_r2.selectedEntreprise);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.selectedClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.selectedEntreprise);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.selectedClient || ctx_r2.selectedEntreprise);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("global-active", ctx_r2.globalDiscount.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r2.globalDiscount.active ? "Annuler Globale" : "Remise Globale", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !ctx_r2.isAmountEntered || ctx_r2.isSubmittingVente);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r2.isSubmittingVente);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.isSubmittingVente);
  }
}
function PosVenteComponent_div_77_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("mousedown", function PosVenteComponent_div_77_div_2_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.startDrag($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_77_div_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.closeDetailPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Information [", ctx_r2.selectedProductForDetail.codeGenerique, "]");
  }
}
function PosVenteComponent_div_77_div_3_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 157)(1, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Date d'expiration");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](2, _c1, ctx_r2.isNearExpiry(ctx_r2.selectedProductForDetail.datePreemption)));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r2.formatDate(ctx_r2.selectedProductForDetail.datePreemption || ""), " ");
  }
}
function PosVenteComponent_div_77_div_3_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
}
function PosVenteComponent_div_77_div_3_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 157)(1, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Code barre");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ngx-barcode6", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("bc-value", ctx_r2.selectedProductForDetail.codeBare)("bc-line-color", "#000000")("bc-width", 1)("bc-height", 30)("bc-font-size", 10)("bc-display-value", true);
  }
}
function PosVenteComponent_div_77_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 152)(1, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "img", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 155)(4, "div", 156)(5, "div", 157)(6, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "Nom produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 157)(11, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12, "Prix de vente");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 157)(17, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, "Cat\u00E9gorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 157)(22, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](23, "Unit\u00E9 de mesure");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](26, PosVenteComponent_div_77_div_3_div_26_Template, 5, 4, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "div", 161)(28, "div", 157)(29, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, "Stocks actuel");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "span", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](33, PosVenteComponent_div_77_div_3_ng_container_33_Template, 2, 0, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "div", 157)(35, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, "Boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](39, "div", 157)(40, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](41, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](44, PosVenteComponent_div_77_div_3_div_44_Template, 5, 6, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "div", 163)(46, "span", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](47, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](48, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", ctx_r2.selectedProductForDetail ? ctx_r2.getProductImage(ctx_r2.selectedProductForDetail.photo) : "", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r2.selectedProductForDetail.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](15, 13, ctx_r2.selectedProductForDetail.prixVente), " CFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r2.selectedProductForDetail.nomCategorie);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r2.selectedProductForDetail.nomUnite);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.selectedProductForDetail.datePreemption);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx_r2.getQuantiteClass(ctx_r2.selectedProductForDetail));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r2.getQuantiteDansBoutiqueCourante(ctx_r2.selectedProductForDetail), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.isQuantiteCritique(ctx_r2.selectedProductForDetail));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r2.getNomBoutiqueCourante(ctx_r2.selectedProductForDetail));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r2.selectedProductForDetail.codeGenerique);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.selectedProductForDetail.codeBare);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedProductForDetail.description || "Pas de description", " ");
  }
}
function PosVenteComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 146)(1, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_77_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, PosVenteComponent_div_77_div_2_Template, 5, 1, "div", 148)(3, PosVenteComponent_div_77_div_3_Template, 50, 15, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 150)(5, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_77_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      ctx_r2.addToCart(ctx_r2.selectedProductForDetail);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.closeDetailPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, " Ajouter au panier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](3, _c0, "translate3d(" + ctx_r2.popupOffset.x + "px, " + ctx_r2.popupOffset.y + "px, 0)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.showDetailPopup && ctx_r2.selectedProductForDetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.showDetailPopup && ctx_r2.selectedProductForDetail);
  }
}
function PosVenteComponent_div_78_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 178)(1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_78_div_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.openAddClient());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " Ajouter Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function PosVenteComponent_div_78_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 173);
  }
}
function PosVenteComponent_div_78_table_25_tr_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "span", 185);
  }
  if (rf & 2) {
    const client_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", ctx_r2.highlightMatch(client_r24.nomComplet), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
  }
}
function PosVenteComponent_div_78_table_25_tr_3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Nom est vide");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_78_table_25_tr_3_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", ctx_r2.highlightMatch(client_r24.email), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](client_r24.email);
  }
}
function PosVenteComponent_div_78_table_25_tr_3_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Non email");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_78_table_25_tr_3_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](client_r24.adresse);
  }
}
function PosVenteComponent_div_78_table_25_tr_3_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Non adresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_78_table_25_tr_3_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](client_r24.telephone);
  }
}
function PosVenteComponent_div_78_table_25_tr_3_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Non num\u00E9ro de t\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_78_table_25_tr_3_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_78_table_25_tr_3_ng_template_22_Template(rf, ctx) {}
function PosVenteComponent_div_78_table_25_tr_3_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](2, 1, client_r24.createdAt, "dd/MM/yyyy"));
  }
}
function PosVenteComponent_div_78_table_25_tr_3_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Non date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_78_table_25_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_78_table_25_tr_3_Template_tr_click_0_listener() {
      const client_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r23).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.selectClient(client_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "td")(2, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "img", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, PosVenteComponent_div_78_table_25_tr_3_span_5_Template, 1, 1, "span", 182)(6, PosVenteComponent_div_78_table_25_tr_3_ng_template_6_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, PosVenteComponent_div_78_table_25_tr_3_span_9_Template, 2, 2, "span", 182)(10, PosVenteComponent_div_78_table_25_tr_3_ng_template_10_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, PosVenteComponent_div_78_table_25_tr_3_span_13_Template, 2, 1, "span", 183)(14, PosVenteComponent_div_78_table_25_tr_3_ng_template_14_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](17, PosVenteComponent_div_78_table_25_tr_3_span_17_Template, 2, 1, "span", 183)(18, PosVenteComponent_div_78_table_25_tr_3_ng_template_18_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](21, PosVenteComponent_div_78_table_25_tr_3_div_21_Template, 2, 0, "div", 184)(22, PosVenteComponent_div_78_table_25_tr_3_ng_template_22_Template, 0, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, PosVenteComponent_div_78_table_25_tr_3_span_25_Template, 3, 4, "span", 183)(26, PosVenteComponent_div_78_table_25_tr_3_ng_template_26_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const client_r24 = ctx.$implicit;
    const noNomComplet_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](7);
    const noEmail_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](11);
    const noAdresse_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](15);
    const noPhone_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](19);
    const noEntreprise_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](23);
    const noDate_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("src", client_r24.photo, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", client_r24.nomComplet)("ngIfElse", noNomComplet_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", client_r24.email)("ngIfElse", noEmail_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", client_r24.adresse)("ngIfElse", noAdresse_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", client_r24.telephone)("ngIfElse", noPhone_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", client_r24.entrepriseClient)("ngIfElse", noEntreprise_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", client_r24.createdAt)("ngIfElse", noDate_r30);
  }
}
function PosVenteComponent_div_78_table_25_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr")(1, "td", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Aucun client trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function PosVenteComponent_div_78_table_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, PosVenteComponent_div_78_table_25_tr_3_Template, 28, 13, "tr", 179)(4, PosVenteComponent_div_78_table_25_tr_4_Template, 3, 0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.filteredClients);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.filteredClients.length === 0);
  }
}
function PosVenteComponent_div_78_table_26_tr_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entreprise_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", ctx_r2.highlightMatch(entreprise_r32.nom), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](entreprise_r32.nom);
  }
}
function PosVenteComponent_div_78_table_26_tr_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Nom vide");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_78_table_26_tr_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entreprise_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("innerHTML", ctx_r2.highlightMatch(entreprise_r32.email), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](entreprise_r32.email);
  }
}
function PosVenteComponent_div_78_table_26_tr_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Non email");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_78_table_26_tr_2_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entreprise_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](entreprise_r32.adresse);
  }
}
function PosVenteComponent_div_78_table_26_tr_2_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Non adresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_78_table_26_tr_2_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entreprise_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](entreprise_r32.telephone);
  }
}
function PosVenteComponent_div_78_table_26_tr_2_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Non t\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_78_table_26_tr_2_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entreprise_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](2, 1, entreprise_r32.createdAt, "dd/MM/yyyy"));
  }
}
function PosVenteComponent_div_78_table_26_tr_2_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Non date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_78_table_26_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_78_table_26_tr_2_Template_tr_click_0_listener() {
      const entreprise_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r31).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.selectEntreprise(entreprise_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "td")(2, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "img", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, PosVenteComponent_div_78_table_26_tr_2_span_5_Template, 2, 2, "span", 182)(6, PosVenteComponent_div_78_table_26_tr_2_ng_template_6_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, PosVenteComponent_div_78_table_26_tr_2_span_9_Template, 2, 2, "span", 182)(10, PosVenteComponent_div_78_table_26_tr_2_ng_template_10_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, PosVenteComponent_div_78_table_26_tr_2_span_13_Template, 2, 1, "span", 183)(14, PosVenteComponent_div_78_table_26_tr_2_ng_template_14_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](17, PosVenteComponent_div_78_table_26_tr_2_span_17_Template, 2, 1, "span", 183)(18, PosVenteComponent_div_78_table_26_tr_2_ng_template_18_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](27, PosVenteComponent_div_78_table_26_tr_2_span_27_Template, 3, 4, "span", 183)(28, PosVenteComponent_div_78_table_26_tr_2_ng_template_28_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const entreprise_r32 = ctx.$implicit;
    const noNom_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](7);
    const noEmail_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](11);
    const noAdresse_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](15);
    const noPhone_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](19);
    const noDate_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", entreprise_r32.nom)("ngIfElse", noNom_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", entreprise_r32.email)("ngIfElse", noEmail_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", entreprise_r32.adresse)("ngIfElse", noAdresse_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", entreprise_r32.telephone)("ngIfElse", noPhone_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](entreprise_r32.pays || "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](entreprise_r32.siege || "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](entreprise_r32.secteur || "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", entreprise_r32.createdAt)("ngIfElse", noDate_r37);
  }
}
function PosVenteComponent_div_78_table_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "table")(1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, PosVenteComponent_div_78_table_26_tr_2_Template, 30, 13, "tr", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.filteredEntreprisesPopup);
  }
}
function PosVenteComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 165)(1, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_78_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("mousedown", function PosVenteComponent_div_78_Template_div_mousedown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.startDrag($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "h6", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, PosVenteComponent_div_78_div_6_Template, 3, 0, "div", 168)(7, PosVenteComponent_div_78_div_7_Template, 1, 0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_78_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.setListTypePopup("clients"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 172)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_78_Template_div_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.setListTypePopup("entreprises"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 172)(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](19, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](21, "i", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "input", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PosVenteComponent_div_78_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r2.searchText, $event) || (ctx_r2.searchText = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_78_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r21);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.closeListClientPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](24, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, PosVenteComponent_div_78_table_25_Template, 5, 2, "table", 30)(26, PosVenteComponent_div_78_table_26_Template, 3, 1, "table", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](13, _c0, "translate3d(" + ctx_r2.popupOffset.x + "px, " + ctx_r2.popupOffset.y + "px, 0)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r2.currentListTypePopup === "clients" ? "Client individuel" : "Client entreprise", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.canAddClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.canAddClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("active", ctx_r2.currentListTypePopup === "clients");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r2.clients.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("active", ctx_r2.currentListTypePopup === "entreprises");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r2.entreprisesPopup.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.searchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.currentListTypePopup === "clients");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.currentListTypePopup === "entreprises");
  }
}
function PosVenteComponent_div_79_form_17_div_6_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Champ requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_79_form_17_div_6_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Au moins 2 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_79_form_17_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, PosVenteComponent_div_79_form_17_div_6_small_1_Template, 2, 0, "small", 30)(2, PosVenteComponent_div_79_form_17_div_6_small_2_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r2.clientForm.get("nomComplet")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r2.clientForm.get("nomComplet")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["minlength"]);
  }
}
function PosVenteComponent_div_79_form_17_div_11_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Format invalide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_79_form_17_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, PosVenteComponent_div_79_form_17_div_11_small_1_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r2.clientForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["email"]);
  }
}
function PosVenteComponent_div_79_form_17_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const nomPays_r40 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", nomPays_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", nomPays_r40, " (", ctx_r2.paysIndicatifs[nomPays_r40].indicatif, ") ");
  }
}
function PosVenteComponent_div_79_form_17_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 230)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Ce champ est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function PosVenteComponent_div_79_form_17_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 230)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pays_r41 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" Le num\u00E9ro doit contenir ", ctx_r2.paysIndicatifs[pays_r41].longueur, " chiffres apr\u00E8s l\u2019indicatif ", ctx_r2.paysIndicatifs[pays_r41].indicatif.trim(), ". ");
  }
}
function PosVenteComponent_div_79_form_17_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 230)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Le t\u00E9l\u00E9phone est requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function PosVenteComponent_div_79_form_17_div_49_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-option", 231)(1, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ent_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", ent_r43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ent_r43.nom, " ");
  }
}
function PosVenteComponent_div_79_form_17_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "input", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "mat-autocomplete", 233, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("optionSelected", function PosVenteComponent_div_79_form_17_div_49_Template_mat_autocomplete_optionSelected_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r42);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.onEntrepriseSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, PosVenteComponent_div_79_form_17_div_49_mat_option_4_Template, 3, 2, "mat-option", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const auto_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formControl", ctx_r2.control)("matAutocomplete", auto_r44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("displayWith", ctx_r2.displayFnEntreprise);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 4, ctx_r2.filteredOptions));
  }
}
function PosVenteComponent_div_79_form_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "form", 200)(1, "div", 201)(2, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "input", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "label", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Nom et pr\u00E9nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, PosVenteComponent_div_79_form_17_div_6_Template, 3, 2, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "input", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "label", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, PosVenteComponent_div_79_form_17_div_11_Template, 2, 1, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 201)(13, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "input", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "label", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "Adresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "input", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "label", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20, "Poste");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 212)(22, "div", 213)(23, "select", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function PosVenteComponent_div_79_form_17_Template_select_change_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r39);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.onPaysChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "option", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25, "Pays");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](26, PosVenteComponent_div_79_form_17_option_26_Template, 2, 3, "option", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "label", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, "Pays");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](29, PosVenteComponent_div_79_form_17_div_29_Template, 3, 0, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "div", 218)(31, "input", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("input", function PosVenteComponent_div_79_form_17_Template_input_input_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r39);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.formatPhoneNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "label", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33, "T\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](34, PosVenteComponent_div_79_form_17_div_34_Template, 3, 2, "div", 205)(35, PosVenteComponent_div_79_form_17_div_35_Template, 3, 0, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](37, "input", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "label", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39, "Ville");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 224)(41, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](42, "Entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "div", 225)(44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](45, "J'appartient \u00E0 une entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "label", 226)(47, "input", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayListener"]("ngModelChange", function PosVenteComponent_div_79_form_17_Template_input_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r39);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayBindingSet"](ctx_r2.isEntrepriseSelected, $event) || (ctx_r2.isEntrepriseSelected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](48, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](49, PosVenteComponent_div_79_form_17_div_49_Template, 6, 6, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx_r2.clientForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r2.clientForm.get("nomComplet")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r2.clientForm.get("nomComplet")) == null ? null : tmp_3_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r2.clientForm.get("email")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r2.clientForm.get("email")) == null ? null : tmp_4_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.paysKeys);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx_r2.clientForm.get("pays")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r2.clientForm.get("pays")) == null ? null : tmp_6_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx_r2.clientForm.get("telephone")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx_r2.clientForm.get("telephone")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["pattern"]) && ((tmp_7_0 = ctx_r2.clientForm.get("pays")) == null ? null : tmp_7_0.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx_r2.clientForm.get("telephone")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx_r2.clientForm.get("telephone")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["required"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.isEntrepriseSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](10, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.isEntrepriseSelected);
  }
}
function PosVenteComponent_div_79_form_18_div_6_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Champ requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_79_form_18_div_6_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Au moins 2 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_79_form_18_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, PosVenteComponent_div_79_form_18_div_6_small_1_Template, 2, 0, "small", 30)(2, PosVenteComponent_div_79_form_18_div_6_small_2_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r2.entrepriseForm.get("nom")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r2.entrepriseForm.get("nom")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["minlength"]);
  }
}
function PosVenteComponent_div_79_form_18_div_11_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Format invalide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function PosVenteComponent_div_79_form_18_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, PosVenteComponent_div_79_form_18_div_11_small_1_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r2.entrepriseForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["email"]);
  }
}
function PosVenteComponent_div_79_form_18_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "option", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const nomPays_r46 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", nomPays_r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", nomPays_r46, " (", ctx_r2.paysIndicatifs[nomPays_r46].indicatif, ") ");
  }
}
function PosVenteComponent_div_79_form_18_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 230)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pays_r47 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" Le num\u00E9ro doit contenir ", ctx_r2.paysIndicatifs[pays_r47].longueur, " chiffres apr\u00E8s l'indicatif ", ctx_r2.paysIndicatifs[pays_r47].indicatif.trim(), ". ");
  }
}
function PosVenteComponent_div_79_form_18_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 230)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Le t\u00E9l\u00E9phone est requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function PosVenteComponent_div_79_form_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "form", 200)(1, "div", 201)(2, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "input", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "label", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Nom d'entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, PosVenteComponent_div_79_form_18_div_6_Template, 3, 2, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "input", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "label", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, PosVenteComponent_div_79_form_18_div_11_Template, 2, 1, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 201)(13, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "input", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "label", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, "Adresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "input", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "label", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20, "Si\u00E8ge");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 212)(22, "div", 213)(23, "select", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function PosVenteComponent_div_79_form_18_Template_select_change_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r45);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.onEntreprisePaysChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "option", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25, "Pays");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](26, PosVenteComponent_div_79_form_18_option_26_Template, 2, 3, "option", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "label", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28, "Pays");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "div", 218)(30, "input", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("input", function PosVenteComponent_div_79_form_18_Template_input_input_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r45);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.formatEntreprisePhoneNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "label", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32, "T\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](33, PosVenteComponent_div_79_form_18_div_33_Template, 3, 2, "div", 205)(34, PosVenteComponent_div_79_form_18_div_34_Template, 3, 0, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](36, "input", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "label", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](38, "Secteur");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx_r2.entrepriseForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r2.entrepriseForm.get("nom")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r2.entrepriseForm.get("nom")) == null ? null : tmp_3_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r2.entrepriseForm.get("email")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r2.entrepriseForm.get("email")) == null ? null : tmp_4_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.paysKeys);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx_r2.entrepriseForm.get("telephone")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx_r2.entrepriseForm.get("telephone")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["pattern"]) && ((tmp_6_0 = ctx_r2.entrepriseForm.get("pays")) == null ? null : tmp_6_0.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx_r2.entrepriseForm.get("telephone")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx_r2.entrepriseForm.get("telephone")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]));
  }
}
function PosVenteComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 191)(1, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_79_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r38);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("mousedown", function PosVenteComponent_div_79_Template_div_mousedown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r38);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.startDrag($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Ajouter un nouveau client");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_79_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r38);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.closeAddClientPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 152)(8, "div", 193)(9, "div", 194)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "Type de client");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 195)(13, "button", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_79_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r38);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.setClientType("individuel"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, " Individuel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "button", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_79_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r38);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.setClientType("entreprise"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16, " Entreprise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](17, PosVenteComponent_div_79_form_17_Template, 50, 11, "form", 197)(18, PosVenteComponent_div_79_form_18_Template, 39, 6, "form", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "div", 150)(20, "button", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_79_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r38);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.closeAddClientPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "button", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_div_79_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r38);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.clientType === "individuel" ? ctx_r2.ajouterClientDansPopup() : ctx_r2.ajouterEntrepriseDansPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](23, " Enregistrer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](14, _c0, "translate3d(" + ctx_r2.popupOffset.x + "px, " + ctx_r2.popupOffset.y + "px, 0)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("active", ctx_r2.clientType === "individuel");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("active", ctx_r2.clientType === "entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.clientType === "individuel");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.clientType === "entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵstyleProp"]("background-color", (ctx_r2.clientType === "individuel" ? ctx_r2.clientForm.valid : ctx_r2.entrepriseForm.valid) ? "#0672E4" : "#0671e434")("color", (ctx_r2.clientType === "individuel" ? ctx_r2.clientForm.valid : ctx_r2.entrepriseForm.valid) ? "#ffffff" : "#00000073")("cursor", (ctx_r2.clientType === "individuel" ? ctx_r2.clientForm.valid : ctx_r2.entrepriseForm.valid) ? "pointer" : "no-drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r2.clientType === "individuel" ? ctx_r2.clientForm.invalid : ctx_r2.entrepriseForm.invalid);
  }
}
function PosVenteComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r2.scanErrorMessage);
  }
}
class PosVenteComponent {
  // Méthode pour basculer entre les modes
  setInputMode(mode) {
    this.inputMode = mode;
  }
  constructor(router, viewState, categorieService, commandeState, clientService, usersService, sanitizer, fb, entrepriseService, produitService, venteService, boutiqueState, scannerService, searchService, calculator, cdr) {
    this.router = router;
    this.viewState = viewState;
    this.categorieService = categorieService;
    this.commandeState = commandeState;
    this.clientService = clientService;
    this.usersService = usersService;
    this.sanitizer = sanitizer;
    this.fb = fb;
    this.entrepriseService = entrepriseService;
    this.produitService = produitService;
    this.venteService = venteService;
    this.boutiqueState = boutiqueState;
    this.scannerService = scannerService;
    this.searchService = searchService;
    this.calculator = calculator;
    this.cdr = cdr;
    this.barcodeIndex = new Map();
    this.isListView = true;
    this.showDropdown = false;
    this.showPaymentPopup = false;
    this.categories = [];
    this.selectedCategoryId = null;
    this.displayedProducts = [];
    // Cache pour les compteurs de catégories
    this.categoryCountCache = new Map();
    this.lastBoutiqueId = null;
    this.currentPage = 0;
    this.pageSize = 20;
    this.totalPages = 0;
    this.isLoadingMore = false;
    this.scanInProgress = false;
    this.searchTerm = '';
    this.isCalculatorActive = true;
    // Déclaration des nouvelles propriétés
    this.currentQuantityInput = '';
    this.selectedProduct = null;
    this.quantityMode = true;
    // selectedQuantities: Map<number, number> = new Map(); // Ajout de cette ligne
    this.showStockWarning = false;
    this.cart = new Map();
    this.totalAmount = 0;
    this.selectedPaymentMethod = 'Espèces'; // 'cash', 'card', 'account'
    this.enteredAmount = '';
    this.paymentAmount = 0;
    this.changeDue = 0;
    this.isAmountEntered = false;
    this.longPressTimer = null;
    this.selectedProductForDetail = null;
    this.showDetailPopup = false;
    this.showClientPopup = false;
    this.lastTap = 0;
    this.tapDelay = 300;
    this.allProducts = [];
    this.clientType = 'individuel';
    this.entrepriseIndicatif = '';
    this.entrepriseMaxPhoneLength = 0;
    // Propriétés ajoutées
    this.clients = [];
    this.searchText = '';
    this.sortField = 'nomComplet';
    this.sortDirection = 'asc';
    this.currentListTypePopup = 'clients';
    this.entreprisesPopup = [];
    // filteredEntreprisesPopup: EntrepriseClient[] = [];
    this.showScanError = false;
    this.scanErrorMessage = '';
    this.isEntrepriseSelected = false;
    this.showAddClientPopup = false;
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
    this.indicatif = '';
    this.maxPhoneLength = 0;
    this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl();
    this.filteredOptions = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]);
    this.optionsEntreprise$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject([]);
    this.currentListType = 'clients';
    this.selectedBoutiqueId = null;
    this.isSubmittingVente = false;
    this.venteErrorMessage = null;
    this.selectedClient = null;
    this.selectedEntreprise = null;
    this.isComposingNewQuantity = false;
    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;
    this.initialX = 0;
    this.initialY = 0;
    this.popupOffset = {
      x: 0,
      y: 0
    };
    this.showDiscountInput = false;
    this.discountValue = 0;
    this.discountType = 'CFA';
    this.discountButtonText = 'Remise';
    this.selectedProductForDiscount = null;
    this.discountMode = {
      active: false,
      type: 'CFA',
      value: 0
    };
    this.globalDiscount = {
      active: false,
      type: 'CFA',
      value: 0
    };
    // Liste des remises par produit
    this.productDiscounts = new Map();
    this.lastSelectedForDiscount = null;
    this.inputMode = 'quantity'; // Nouveau flag
    this.currentDiscountInput = '';
    this.disablePhysicalKeyboard = false;
    this.userRole = null;
    this.canAddClient = false;
    // Propriétés pour la validation des scans
    this.lastScannedCode = null;
    this.lastScanTime = 0;
    this.onMouseMove = event => {
      if (!this.isDragging) return;
      requestAnimationFrame(() => {
        const deltaX = event.clientX - this.startX;
        const deltaY = event.clientY - this.startY;
        this.popupOffset.x = this.initialX + deltaX;
        this.popupOffset.y = this.initialY + deltaY;
      });
    };
    this.onMouseUp = () => {
      this.isDragging = false;
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('mouseup', this.onMouseUp);
    };
    this.commandeState.activeCommandeId$.subscribe(() => {
      this.loadActiveCart();
    });
    this.initClientForm();
    this.initForms();
  }
  initForms() {
    this.initClientForm();
    this.initEntrepriseForm();
  }
  // Initialiser le formulaire client
  initClientForm() {
    this.clientForm = this.fb.group({
      nomComplet: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(2)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.email]],
      telephone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      adresse: [''],
      poste: [''],
      pays: [''],
      ville: ['']
    });
  }
  initEntrepriseForm() {
    this.entrepriseForm = this.fb.group({
      nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(2)]],
      adresse: [''],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.email]],
      telephone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      pays: [''],
      siege: [''],
      secteur: ['']
    });
  }
  // Gestion du clic/tape sur un produit
  ngOnInit() {
    this.loadUserRole();
    // Charger toutes les catégories
    this.categorieService.getCategories().subscribe({
      next: categories => {
        this.categories = categories;
        console.log('Catégories chargées :', this.categories);
        // Charger seulement la première page de chaque catégorie
        this.categories.forEach(categorie => {
          this.loadProduitsByCategorie(categorie.id, 0, this.pageSize);
        });
      },
      error: err => {
        console.error('Erreur lors du chargement des catégories', err);
      }
    });
    // this.calcActiveSub = this.calculatorService.isActive$.subscribe(active => {
    //   this.isCalculatorActive = active;
    // });
    this.searchSub = this.searchService.search$.subscribe(term => {
      this.searchTerm = term;
    });
    const savedView = localStorage.getItem('viewPreference');
    this.isListView = savedView ? savedView === 'list' : true;
    this.loadActiveCart();
    this.viewState.isListView$.subscribe(view => {
      this.isListView = view;
    });
    if (!this.categories.length) {
      this.loadCategories();
    }
    this.boutiqueState.selectedBoutique$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.take)(1)).subscribe(id => {
      // take(1) prend la valeur initiale ; si tu veux updates continues, retire take(1)
      this.selectedBoutiqueId = id;
    });
    // Si tu veux suivre à tout moment :
    // this.boutiqueState.selectedBoutique$.subscribe(id => this.selectedBoutiqueId = id);
    this.boutiqueState.selectedBoutique$.subscribe(id => {
      console.log('🏪 Boutique sélectionnée:', id);
      this.selectedBoutiqueId = id;
      // Vider le cache car la boutique a changé
      this.clearCategoryCountCache();
      this.lastBoutiqueId = id;
      // recalculer les compteurs visible pour l'UI
      this.recomputeCategoryCountsForBoutique();
      // Forcer la détection de changement pour mettre à jour l'affichage
      this.cdr.detectChanges();
    });
    // Abonnement aux scans (déjà présent) -> aussi suivre l'indicateur de scan
    this.scannerService.getScanObservable().subscribe(barcode => {
      this.handleBarcodeScan(barcode);
    });
    // Nouveau : pour bloquer le HostListener pendant un scan
    this.scannerService.getScanningObservable().subscribe(scanning => {
      this.scanInProgress = scanning;
    });
    // Désactiver le scanner quand on est en mode saisie
    this.scannerService.setUserTyping(true);
    // S'abonner à l'état de la calculatrice
    this.calculator.isActive$.subscribe(active => {
      if (active) {
        this.scannerService.disableScanner();
      } else {
        this.scannerService.enableScanner();
      }
    });
  }
  loadUserRole() {
    this.usersService.getUserInfo().subscribe({
      next: user => {
        if (user && user.roleType) {
          this.userRole = user.roleType;
          this.canAddClient = ['ADMIN', 'MANAGER'].includes(this.userRole);
        }
      },
      error: () => {
        const localUser = this.usersService.getCurrentUser();
        if (localUser && localUser.roleType) {
          this.userRole = localUser.roleType;
          this.canAddClient = ['ADMIN', 'MANAGER'].includes(this.userRole);
        }
      }
    });
  }
  ngOnDestroy() {
    if (this.searchSub) this.searchSub.unsubscribe();
    if (this.calcActiveSub) this.calcActiveSub.unsubscribe();
    // this.scannerService.enableScanner();
  }
  loadCategories() {
    this.categorieService.getCategories().subscribe({
      next: categories => {
        this.categories = categories;
      },
      error: error => {
        console.error('Erreur lors du chargement des catégories:', error);
      }
    });
  }
  indexProductsByBarcode() {
    this.barcodeIndex.clear();
    this.allProducts.forEach(product => {
      if (product.codeBare) {
        this.barcodeIndex.set(product.codeBare.toString().toLowerCase(), product);
      }
    });
  }
  handleBarcodeScan(barcode) {
    console.log('=== SCAN DEBUG ===');
    console.log('Code scanné:', barcode);
    // Vérifier que ce n'est pas un scan en double
    if (!this.isValidScan(barcode)) {
      console.log('Scan ignoré - possible doublon ou invalide');
      return;
    }
    console.log('Nombre total de produits:', this.allProducts.length);
    console.log('Produits avec code-barres:', this.allProducts.filter(p => p.codeBare).length);
    const normalizedBarcode = barcode.toLowerCase();
    console.log('Code normalisé:', normalizedBarcode);
    // Recherche plus flexible du produit
    const product = this.allProducts.find(p => {
      if (!p.codeBare) return false;
      const productCode = p.codeBare.toString().toLowerCase();
      const scannedCode = normalizedBarcode;
      console.log(`Comparaison: "${productCode}" vs "${scannedCode}"`);
      // Correspondance exacte
      if (productCode === scannedCode) return true;
      // Correspondance partielle (au cas où il y a des espaces ou caractères spéciaux)
      if (productCode.includes(scannedCode) || scannedCode.includes(productCode)) return true;
      return false;
    });
    if (product) {
      console.log('Produit trouvé:', product);
      console.log('Ajout au panier...');
      this.addToCart(product);
      // this.showScanSuccess(product.nom); 
    } else {
      console.log('Aucun produit trouvé');
      console.log('Codes-barres disponibles:', this.allProducts.map(p => p.codeBare).filter(Boolean));
      this.showScanError = true;
      this.scanErrorMessage = `Aucun produit trouvé avec le code: ${barcode}`;
      setTimeout(() => {
        this.showScanError = false;
      }, 1000);
    }
  }
  // Méthode pour valider un scan et éviter les doublons
  // private isValidScan(barcode: string): boolean {
  //   // Vérifier que le code n'est pas vide
  //   if (!barcode || barcode.trim().length < 3) {
  //     return false;
  //   }
  //   // Vérifier que ce n'est pas le même code que le dernier scan
  //   const currentTime = Date.now();
  //   if (this.lastScannedCode === barcode && (currentTime - this.lastScanTime) < 1000) {
  //     console.log('Scan ignoré - même code scanné trop rapidement');
  //     return false;
  //   }
  //   // Mettre à jour le dernier scan
  //   this.lastScannedCode = barcode;
  //   this.lastScanTime = currentTime;
  //   return true;
  // }
  isValidScan(barcode) {
    // Vérifier que le code n'est pas vide
    if (!barcode || barcode.trim().length < 3) {
      return false;
    }
    // Vérifier que ce n'est pas exactement le même code que le dernier scan
    // mais avec un délai beaucoup plus court pour permettre les scans rapides
    const currentTime = Date.now();
    if (this.lastScannedCode === barcode && currentTime - this.lastScanTime < 50) {
      console.log('Scan ignoré - même code scanné trop rapidement');
      return false;
    }
    // Mettre à jour le dernier scan
    this.lastScannedCode = barcode;
    this.lastScanTime = currentTime;
    return true;
  }
  // Nouvelle méthode pour afficher le succès du scan
  // private showScanSuccess(productName: string): void {
  //   // Optionnel: afficher un toast de succès
  //   console.log(`Produit "${productName}" ajouté au panier via scan`);
  //   // Feedback visuel temporaire
  //   this.showScanError = false;
  //   this.scanErrorMessage = '';
  //   // Afficher un message de succès
  //   setTimeout(() => {
  //     this.showScanError = true;
  //     this.scanErrorMessage = `Produit "${productName}" ajouté au panier !`;
  //     setTimeout(() => {
  //       this.showScanError = false;
  //     }, 2000);
  //   }, 100);
  // }
  // Méthode de test pour simuler un scan (utile pour debug)
  // testScan(code: string): void {
  //   console.log('Test de scan avec le code:', code);
  //   this.handleBarcodeScan(code);
  // }
  // Méthode pour tester le scanner avec différents codes
  // testScannerWithCodes(): void {
  //   console.log('=== TEST SCANNER AVEC DIFFÉRENTS CODES ===');
  //   // Test avec des codes courts
  //   this.testScan('123');
  //   this.testScan('456');
  //   // Test avec le code que vous avez dans votre bouton
  //   this.testScan('6920484370182');
  //   // Test avec des codes aléatoires
  //   this.testScan('987654321');
  //   this.testScan('ABCDEF123');
  // }
  // Méthode pour vérifier l'état du scanner
  // checkScannerStatus(): void {
  //   console.log('=== ÉTAT DU SCANNER ===');
  //   console.log('ScannerService disponible:', !!this.scannerService);
  //   console.log('scanInProgress:', this.scanInProgress);
  //   console.log('Produits chargés:', this.allProducts.length);
  //   console.log('Produits avec code-barres:', this.allProducts.filter(p => p.codeBare).length);
  //   // Afficher quelques codes-barres disponibles
  //   const codesWithProducts = this.allProducts
  //     .filter(p => p.codeBare)
  //     .slice(0, 5)
  //     .map(p => ({ id: p.id, nom: p.nom, code: p.codeBare }));
  //   console.log('Exemples de codes-barres:', codesWithProducts);
  // }
  loadActiveCart() {
    this.cart = new Map(this.commandeState.getActiveCart());
  }
  saveActiveCart() {
    this.commandeState.updateActiveCart(this.cart);
  }
  loadProduitsByCategorie(categorieId, page = 0, size = 20) {
    if (page > 0) {
      this.isLoadingMore = true;
    }
    this.categorieService.getProduitsByCategorie(categorieId, page, size).subscribe({
      next: res => {
        console.log(`Page ${page + 1}/${res.totalPages} pour catégorie ${categorieId}`);
        // Mapper les produits
        const mappedProducts = res.produits.map(produit => new src_app_admin_page_MODELS_produit_category_model__WEBPACK_IMPORTED_MODULE_1__.ProduitDetailsResponseDTO({
          id: produit.id,
          nom: produit.nom,
          prixVente: produit.prixVente,
          prixAchat: produit.prixAchat,
          quantite: produit.quantite,
          seuilAlert: produit.seuilAlert,
          categorieId: produit.categorieId || 0,
          uniteId: produit.uniteId,
          codeBare: produit.codeBare,
          photo: produit.photo,
          enStock: produit.enStock,
          nomCategorie: produit.nomCategorie || '',
          nomUnite: produit.nomUnite || '',
          typeProduit: produit.typeProduit || '',
          createdAt: produit.createdAt || '',
          lastUpdated: produit.lastUpdated || '',
          datePreemption: produit.datePreemption,
          boutiqueId: produit.boutiqueId,
          nomBoutique: produit.nomBoutique || '',
          description: produit.description || '',
          codeGenerique: produit.codeGenerique || '',
          boutiques: produit.boutiques || []
        }));
        // Si c'est la première page ET qu'une catégorie spécifique est sélectionnée
        if (page === 0 && this.selectedCategoryId !== null) {
          // Remplacer les produits affichés pour cette catégorie
          this.displayedProducts = mappedProducts;
          // MAIS garder tous les produits dans allProducts et juste mettre à jour cette catégorie
          this.allProducts = this.allProducts.filter(p => p.categorieId !== this.selectedCategoryId);
          this.allProducts.push(...mappedProducts);
        } else {
          // Sinon, ajouter à la suite (pour "Toutes les catégories" ou pages suivantes)
          this.displayedProducts.push(...mappedProducts);
          this.allProducts.push(...mappedProducts);
        }
        // Mettre à jour les informations de pagination
        this.totalPages = res.totalPages;
        this.currentPage = page;
        // Vider le cache car les produits ont changé
        this.clearCategoryCountCache();
        // Indexer les produits pour le scanner
        this.indexProductsByBarcode();
        // Recalculer les compteurs
        this.recomputeCategoryCountsForBoutique();
        // Forcer la mise à jour de l'affichage pour les compteurs
        this.cdr.detectChanges();
        // Désactiver l'indicateur de chargement
        this.isLoadingMore = false;
      },
      error: err => {
        this.isLoadingMore = false;
        console.error(`Erreur lors du chargement de la page ${page} pour la catégorie ${categorieId}`, err);
      }
    });
  }
  // Méthode pour recharger et vérifier les produits
  // reloadProductsForScan(): void {
  //   console.log('=== RECHARGEMENT PRODUITS POUR SCAN ===');
  //   this.loadCategories();
  // }
  showAllProducts() {
    this.selectedCategoryId = null;
    this.currentPage = 0;
    this.totalPages = 0;
    // Vider les produits affichés et tous les produits
    this.displayedProducts = [];
    this.allProducts = [];
    console.log('Chargement de la première page de chaque catégorie...');
    // Charger la première page de chaque catégorie
    this.categories.forEach(categorie => {
      this.loadProduitsByCategorie(categorie.id, 0, this.pageSize);
    });
  }
  // Méthode pour charger plus de produits de toutes les catégories
  loadMoreProductsFromAllCategories() {
    if (this.isLoadingMore) return; // Éviter les appels multiples
    this.isLoadingMore = true;
    console.log('Chargement de plus de produits de toutes les catégories...');
    // Charger la page suivante de chaque catégorie qui a encore des pages
    let hasMoreData = false;
    this.categories.forEach(categorie => {
      // Calculer combien de pages ont déjà été chargées pour cette catégorie
      const productsInCategory = this.allProducts.filter(p => p.categorieId === categorie.id).length;
      const pagesLoaded = Math.ceil(productsInCategory / this.pageSize);
      // Si il y a encore des pages à charger pour cette catégorie
      if (productsInCategory > 0 && pagesLoaded * this.pageSize < (categorie.produitCount || 0)) {
        hasMoreData = true;
        this.loadProduitsByCategorie(categorie.id, pagesLoaded, this.pageSize);
      }
    });
    if (!hasMoreData) {
      console.log('Toutes les données ont été chargées');
    }
    this.isLoadingMore = false;
  }
  selectCategory(categoryId) {
    if (categoryId === undefined) return;
    this.selectedCategoryId = categoryId;
    this.currentPage = 0; // Réinitialiser à la première page
    // Vider le cache AVANT de charger les nouveaux produits
    // pour éviter d'afficher des compteurs incorrects
    this.clearCategoryCountCache();
    // S'assurer que tous les produits de toutes les catégories sont chargés
    this.ensureAllCategoriesLoaded();
    // Filtrer l'affichage pour la catégorie sélectionnée
    const categoryProducts = this.allProducts.filter(p => p.categorieId === categoryId);
    this.displayedProducts = categoryProducts;
    // Forcer la mise à jour de l'affichage
    this.cdr.detectChanges();
  }
  onScroll() {
    // Si aucune catégorie n'est sélectionnée (mode "Toutes les catégories")
    if (this.selectedCategoryId === null) {
      // Charger plus de produits de toutes les catégories
      this.loadMoreProductsFromAllCategories();
      return;
    }
    // Si une catégorie spécifique est sélectionnée
    if (this.currentPage + 1 < this.totalPages) {
      console.log(`Chargement de la page ${this.currentPage + 1} pour la catégorie ${this.selectedCategoryId}`);
      this.loadProduitsByCategorie(this.selectedCategoryId, this.currentPage + 1, this.pageSize);
    }
  }
  getProductImage(photoPath) {
    if (!photoPath || photoPath === '') {
      return 'assets/img/default-product.png';
    }
    if (photoPath.startsWith('http')) {
      return photoPath;
    }
    if (photoPath.startsWith('/uploads')) {
      return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imgUrl.replace('/api', '') + photoPath;
    }
    return photoPath;
  }
  onDiscountInputChange(event) {
    this.currentDiscountInput = event.target.value;
    // Utilisez parseFloat pour gérer les grands nombres
    this.discountMode.value = parseFloat(this.currentDiscountInput) || 0;
    this.updateCommandeTotals();
  }
  // Méthode pour gérer les touches du keypad en mode remise
  handleDiscountKeyPress(key) {
    switch (key) {
      case 'backspace':
        this.currentDiscountInput = this.currentDiscountInput.slice(0, -1);
        break;
      case ',':
        break;
      default:
        // Augmentez la limite de 5 à 10
        if (this.currentDiscountInput.length < 10) {
          this.currentDiscountInput += key;
        }
    }
    this.discountMode.value = parseInt(this.currentDiscountInput, 10) || 0;
    this.updateCommandeTotals();
  }
  openPaymentPopup() {
    this.showPaymentPopup = true;
    this.totalAmount = this.getTotalCart(); // S'assurer que totalAmount est défini
    this.enteredAmount = '';
    this.paymentAmount = 0;
    this.changeDue = 0;
    this.isAmountEntered = false;
    this.selectedPaymentMethod = 'Espèces';
  }
  handlePaymentKeyPress(key) {
    switch (key) {
      case 'backspace':
        this.enteredAmount = this.enteredAmount.slice(0, -1);
        break;
      case ',':
        if (!this.enteredAmount.includes(',')) {
          this.enteredAmount += ',';
        }
        break;
      case '+/-':
        // Optionnel: inverser le signe si nécessaire
        break;
      default:
        if (this.enteredAmount.length < 10) {
          this.enteredAmount += key;
        }
    }
    this.calculatePayment();
  }
  /** Retourne la liste visible en appliquant boutique + catégorie + autres filtres */
  getVisibleProducts() {
    let products = [...this.allProducts];
    // filtrer par boutique si nécessaire
    if (this.selectedBoutiqueId) {
      products = products.filter(p => p.boutiqueId === this.selectedBoutiqueId);
    }
    // filtrer par catégorie si sélectionnée
    if (this.selectedCategoryId !== null && this.selectedCategoryId !== undefined) {
      products = products.filter(p => p.categorieId === this.selectedCategoryId);
    }
    // filtrer par terme de recherche si présent
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      const termLower = this.searchTerm.toLowerCase();
      products = products.filter(p => p.nom.toLowerCase().includes(termLower));
    }
    // filtrer les produits en stock si besoin
    products = products.filter(p => p.enStock);
    return products;
  }
  /** Retourne le nombre de produits de la catégorie pour la boutique sélectionnée */
  getCategoryProductCount(category) {
    if (!category || !category.produits || !category.produits.length) return 0;
    // si aucune boutique sélectionnée, renvoyer le total de la catégorie
    if (!this.selectedBoutiqueId) {
      return category.produits.length;
    }
    // filtrer les produits de la catégorie par boutique
    return category.produits.filter(p =>
    // attention: certains produits peuvent avoir boutiqueId null, on gère ça
    p.boutiqueId !== null && p.boutiqueId === this.selectedBoutiqueId).length;
  }
  /** Retourne le nombre de produits de la catégorie pour la boutique sélectionnée (pour l'affichage) */
  getCategoryProductCountForDisplay(category) {
    if (!category) return 0;
    // Vérifier si le cache est valide
    if (this.lastBoutiqueId === this.selectedBoutiqueId && this.categoryCountCache.has(category.id)) {
      return this.categoryCountCache.get(category.id);
    }
    // Si aucune boutique sélectionnée, afficher le total
    if (!this.selectedBoutiqueId) {
      return category.produitCount || 0;
    }
    // Si les produits ne sont pas encore chargés, retourner 0 temporairement
    if (this.allProducts.length === 0) {
      console.log(`⏳ Produits pas encore chargés pour catégorie ${category.nom}`);
      return 0;
    }
    // Debug: afficher le nombre de produits par catégorie
    const productsByCategory = this.allProducts.reduce((acc, p) => {
      acc[p.categorieId] = (acc[p.categorieId] || 0) + 1;
      return acc;
    }, {});
    console.log(`📊 Produits par catégorie:`, productsByCategory);
    // Sinon, calculer en temps réel depuis allProducts
    const filteredProducts = this.allProducts.filter(p => {
      const matchesCategory = p.categorieId === category.id;
      // Vérifier si le produit appartient à la boutique sélectionnée
      // Utiliser d'abord boutiqueId, puis fallback sur boutiques
      let matchesBoutique = false;
      if (p.boutiqueId === this.selectedBoutiqueId) {
        matchesBoutique = true;
      } else if (p.boutiques && p.boutiques.length > 0) {
        matchesBoutique = p.boutiques.some(b => b.id === this.selectedBoutiqueId);
      }
      return matchesCategory && matchesBoutique;
    });
    const count = filteredProducts.length;
    // Mettre en cache le résultat
    this.categoryCountCache.set(category.id, count);
    console.log(`📊 Catégorie ${category.nom}: ${count} produits trouvés pour boutique ${this.selectedBoutiqueId}`);
    return count;
  }
  /** Retourne le tooltip pour expliquer le compteur affiché */
  getCategoryProductCountTooltip(category) {
    if (!category) return '';
    const count = this.getCategoryProductCountForDisplay(category);
    if (!this.selectedBoutiqueId) {
      return `${count} produits au total dans cette catégorie`;
    }
    // Trouver le nom de la boutique sélectionnée
    const boutiqueName = this.getBoutiqueName(this.selectedBoutiqueId);
    return `${count} produits dans ${boutiqueName}`;
  }
  /** Retourne le nom de la boutique à partir de son ID */
  getBoutiqueName(boutiqueId) {
    // Pour l'instant, retourner un nom simple
    // TODO: Implémenter la récupération du nom depuis le service
    return `Boutique ${boutiqueId}`;
  }
  /** Vider le cache des compteurs de catégories */
  clearCategoryCountCache() {
    this.categoryCountCache.clear();
    console.log('🗑️ Cache des compteurs de catégories vidé');
  }
  /** Vérifier que tous les produits sont chargés pour toutes les catégories */
  ensureAllCategoriesLoaded() {
    this.categories.forEach(categorie => {
      const categoryProducts = this.allProducts.filter(p => p.categorieId === categorie.id);
      if (categoryProducts.length === 0) {
        console.log(`📦 Chargement des produits pour catégorie ${categorie.nom}`);
        this.loadProduitsByCategorie(categorie.id, 0, this.pageSize);
      }
    });
  }
  /** Recalculer les compteurs produits par catégorie pour la boutique sélectionnée */
  recomputeCategoryCountsForBoutique() {
    const boutiqueId = this.selectedBoutiqueId;
    // Vider le cache car les données ont changé
    this.clearCategoryCountCache();
    (this.categories || []).forEach(cat => {
      const total = Array.isArray(cat.produits) ? cat.produits.filter(p => !boutiqueId ? true : p.boutiqueId !== null && p.boutiqueId === boutiqueId).length : 0;
      // écrire sur l'objet existant (type-safe après modification du modèle)
      cat.produitCountBoutique = total;
    });
  }
  calculatePayment() {
    // recalculer le total courant (au cas où remises ont changé)
    this.totalAmount = this.getTotalCart();
    const enteredValue = parseFloat(this.enteredAmount.replace(',', '.')) || 0;
    this.paymentAmount = enteredValue;
    this.isAmountEntered = enteredValue > 0;
    // différence signée : positive = monnaie à rendre, négative = restant à payer
    this.changeDue = +(this.paymentAmount - this.totalAmount);
    // si tu préfères toujours conserver valeur positive pour l'affichage, 
    // fais Math.abs ici, mais laisse aussi un flag pour savoir si c'est "monnaie" ou "restant"
  }
  selectPaymentMethod(method) {
    this.selectedPaymentMethod = method;
  }
  completePayment() {
    // protection double-click / UI feedback
    if (this.isSubmittingVente) return;
    this.isSubmittingVente = true;
    // Lance l'enregistrement : submitVente() gère la navigation et la réinitialisation au next/error
    this.submitVente();
  }
  closePaymentPopup() {
    this.showPaymentPopup = false;
  }
  // Mettre à jour addToCart pour gérer la remise
  addToCart(produit) {
    if (this.getAvailableStock(produit) <= 0) return;
    // Désactiver la calculatrice pour éviter les conflits d'input
    this.calculator.setActive(false);
    // Gestion de la remise
    if (this.discountMode.active) {
      this.applyDiscount(produit);
      return;
    }
    // Ajout normal au panier
    const currentQty = this.cart.get(produit.id) || 0;
    this.cart.set(produit.id, currentQty + 1);
    this.saveActiveCart();
    this.selectedProduct = produit;
    this.isComposingNewQuantity = false;
    // this.quantityMode = true;
    // this.currentQuantityInput = (this.cart.get(produit.id) || 0).toString();
  }
  // --- mettre à jour calculateItemTotal pour tenir compte de la remise live ---
  calculateItemTotal(item) {
    const basePrice = item.product.prixVente * item.quantity;
    const discount = this.productDiscounts.get(item.product.id) || 0;
    return basePrice - discount;
  }
  // Obtenir le sous-total (sans remise)
  getSubtotal() {
    let total = 0;
    this.cart.forEach((quantity, productId) => {
      const product = this.allProducts.find(p => p.id === productId);
      if (product) {
        total += quantity * product.prixVente;
      }
    });
    return total;
  }
  // --- getTotalDiscount : somme des remises par ligne (inclut remise temporaire) ---
  getTotalDiscount() {
    let total = 0;
    this.cart.forEach((quantity, productId) => {
      const product = this.allProducts.find(p => p.id === productId);
      if (product && quantity > 0) {
        total += this.computeDiscountForItem(product, quantity);
      }
    });
    return total;
  }
  // Mettre à jour le total général
  getTotalCart() {
    const subtotal = this.getSubtotal(); // total sans remises
    const productDiscount = this.getTotalDiscount(); // somme des remises de lignes
    const baseAfterProductDiscounts = subtotal - productDiscount;
    let total = baseAfterProductDiscounts;
    if (this.globalDiscount.active && this.globalDiscount.value > 0) {
      if (this.globalDiscount.type === 'CFA') {
        total -= this.globalDiscount.value;
      } else {
        // appliquer le pourcentage SUR la base après remises produits
        total -= baseAfterProductDiscounts * (this.globalDiscount.value / 100);
      }
    }
    return Math.max(0, total);
  }
  // Supprimer aussi la remise quand on retire un produit
  removeProduct(productId) {
    this.cart.delete(productId);
    this.productDiscounts.delete(productId);
    this.saveActiveCart();
    this.updateCommandeTotals();
  }
  // Méthode pour diminuer la quantité
  decreaseQuantity(produit) {
    const currentQty = this.cart.get(produit.id) || 0;
    if (currentQty > 0) {
      const newQty = currentQty - 1;
      this.cart.set(produit.id, newQty);
      // Mise à jour du champ de saisie si produit sélectionné
      if (this.selectedProduct?.id === produit.id) {
        this.currentQuantityInput = newQty > 0 ? newQty.toString() : '';
      }
    }
    this.saveActiveCart();
    this.updateCommandeTotals();
  }
  // Méthode pour obtenir la quantité sélectionnée
  getSelectedQuantity(produitId) {
    return this.cart.get(produitId) || 0;
  }
  updateCommandeTotals() {
    const totalItems = this.getTotalItems();
    const totalAmount = this.getTotalCart();
    // Correction: Utiliser la nouvelle méthode getActiveCommandeId()
    const activeId = this.commandeState.getActiveCommandeId();
    this.commandeState.updateCommandeTotals(activeId, totalItems, totalAmount);
  }
  getTotalItems() {
    let total = 0;
    this.cart.forEach(quantity => total += quantity);
    return total;
  }
  // Méthode pour obtenir les éléments du panier
  getCartItems() {
    const items = [];
    for (const [productId, quantity] of this.cart.entries()) {
      if (quantity > 0) {
        const product = this.allProducts.find(p => p.id === productId);
        if (product) {
          items.push({
            product,
            quantity
          });
        }
      }
    }
    return items;
  }
  // Remplacer l'ancienne méthode par :
  getAvailableStock(produit) {
    const selectedQty = this.getSelectedQuantity(produit.id);
    return produit.quantite - selectedQty;
  }
  handleKeyPress(key) {
    // Désactiver la calculatrice dès qu'on utilise le clavier de vente
    this.calculator.setActive(false);
    if (this.inputMode === 'discount') {
      this.handleDiscountKeyPress(key); // Gestion remise
    } else {
      if (!this.selectedProduct) return; // Vérifiez si un produit est sélectionné
      // Réinitialiser le champ si c'est le premier chiffre d'une nouvelle saisie
      if (!this.isComposingNewQuantity) {
        this.currentQuantityInput = '';
        this.isComposingNewQuantity = true;
      }
      switch (key) {
        case 'backspace':
          this.currentQuantityInput = this.currentQuantityInput.slice(0, -1);
          break;
        case '+/-':
          // Inversion du signe
          break;
        default:
          if (this.currentQuantityInput.length < 5) {
            this.currentQuantityInput += key;
          }
      }
      this.applyQuantityToProduct();
    }
  }
  calculateDiscountedPrice(item) {
    const basePrice = item.product.prixVente * item.quantity;
    const discount = item.product.remise || 0;
    return basePrice - discount;
  }
  applyQuantityToProduct() {
    if (!this.selectedProduct || this.currentQuantityInput === '') return;
    const quantity = parseInt(this.currentQuantityInput, 10);
    if (isNaN(quantity)) return;
    // Vérifier le stock disponible
    const availableStock = this.selectedProduct.quantite;
    if (quantity > 0 && quantity <= availableStock) {
      this.cart.set(this.selectedProduct.id, quantity);
    } else {
      this.cart.set(this.selectedProduct.id, availableStock);
      this.currentQuantityInput = availableStock.toString();
      this.showStockWarning = true;
      setTimeout(() => this.showStockWarning = false, 3000);
    }
    this.saveActiveCart(); // Sauvegarder après modification
  }
  // Début de l'appui
  startPress(event, produit) {
    if (this.getAvailableStock(produit) <= 0) return;
    this.longPressTimer = setTimeout(() => {
      // Appel au service pour récupérer les données à jour
      this.produitService.getProduitById(produit.id).subscribe({
        next: result => {
          // Mapping Produit => ProduitDetailsResponseDTO
          const mappedProduct = new src_app_admin_page_MODELS_produit_category_model__WEBPACK_IMPORTED_MODULE_1__.ProduitDetailsResponseDTO({
            ...result,
            categorieId: result.categorieId ?? 0,
            seuilAlert: result.seuilAlert ?? 0,
            nomCategorie: result.nomCategorie ?? '',
            nomUnite: result.nomUnite ?? '',
            typeProduit: result.typeProduit ?? '',
            createdAt: result.createdAt ?? '',
            lastUpdated: result.lastUpdated ?? '',
            datePreemption: result.datePreemption ?? null,
            boutiqueId: result.boutiqueId ?? null,
            description: result.description ?? '',
            codeBare: result.codeBare ?? '',
            codeGenerique: result.codeGenerique ?? ''
          });
          this.selectedProductForDetail = mappedProduct;
          this.showDetailPopup = true;
        },
        error: err => {
          console.error('Erreur lors de la récupération du produit :', err);
        }
      });
      this.longPressTimer = null;
    }, 500);
  }
  getNomBoutiqueCourante(produit) {
    const boutique = produit.boutiques?.find(b => b.id === produit.boutiqueId);
    return boutique?.nom || 'Boutique inconnue';
  }
  isQuantiteCritique(produit) {
    const quantite = this.getQuantiteDansBoutiqueCourante(produit);
    if (produit.seuilAlert == null || produit.seuilAlert === 0) {
      return quantite <= 10;
    }
    return quantite <= produit.seuilAlert;
  }
  getQuantiteClass(produit) {
    return this.isQuantiteCritique(produit) ? 'alert-low-stock' : 'safe-stock';
  }
  getQuantiteDansBoutiqueCourante(produit) {
    const boutique = produit.boutiques?.find(b => b.id === produit.boutiqueId);
    return boutique?.quantite ?? 0;
  }
  activateQuantityMode() {
    if (this.selectedProduct) {
      this.quantityMode = true;
      this.currentQuantityInput = (this.cart.get(this.selectedProduct.id) || 0).toString();
    }
  }
  endPress() {
    if (this.longPressTimer) {
      clearTimeout(this.longPressTimer);
      this.longPressTimer = null;
    }
  }
  goTopaiement() {
    this.router.navigate(['/pos-accueil/paiement']);
  }
  // Fermer le popup
  closeDetailPopup() {
    this.showDetailPopup = false;
    this.selectedProductForDetail = null;
  }
  loadClients() {
    this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.switchMap)(token => {
      if (!token) return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.throwError)(() => new Error('Aucun token trouvé'));
      return this.clientService.getListClients();
    })).subscribe({
      next: data => {
        this.clients = data.map(client => ({
          ...client,
          photo: client.photo ? `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imgUrl}${client.photo}` : `assets/img/profil.png`,
          entrepriseClient: client.entrepriseClient ? {
            id: client.entrepriseClient.id
          } : null
        })).sort((a, b) => {
          const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return dateB - dateA;
        });
      },
      error: err => {
        console.error('Erreur récupération clients :', err);
      }
    });
  }
  // Fermer le popup client list
  closeListClientPopup() {
    this.showClientPopup = false;
  }
  highlightMatch(text) {
    if (!text) return '';
    if (!this.searchText.trim()) return text;
    const escapedSearch = this.searchText.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedSearch})`, 'gi');
    return this.sanitizer.bypassSecurityTrustHtml(text.replace(regex, '<mark>$1</mark>'));
  }
  get filteredClients() {
    let clients = this.clients;
    if (this.searchText.trim()) {
      const searchLower = this.searchText.toLowerCase().trim();
      clients = clients.filter(client => client.nomComplet?.toLowerCase().includes(searchLower) || client.email?.toLowerCase().includes(searchLower) || client.adresse?.toLowerCase().includes(searchLower) || client.telephone?.includes(searchLower));
    }
    return clients.sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA; // Tri décroissant
    });
  }
  sort(field) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.clients.sort((a, b) => {
      const modifier = this.sortDirection === 'asc' ? 1 : -1;
      const valueA = a[field]?.toString().toLowerCase() ?? '';
      const valueB = b[field]?.toString().toLowerCase() ?? '';
      return valueA.localeCompare(valueB) * modifier;
    });
  }
  // Sélection client particulier
  selectClient(client) {
    this.selectedClient = client;
    this.selectedEntreprise = null; // annule toute entreprise sélectionnée
    console.log('Client sélectionné:', client);
    this.closeListClientPopup();
  }
  // Sélection entreprise cliente
  selectEntreprise(entreprise) {
    this.selectedEntreprise = entreprise;
    this.selectedClient = null; // annule tout client particulier
    console.log('Entreprise sélectionnée:', entreprise);
    this.closeListClientPopup();
  }
  // Gestion du changement de pays
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
    ctrl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(regex)]);
    ctrl?.updateValueAndValidity();
  }
  // Formatage du numéro de téléphone
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
  // Charger les entreprises pour l'autocomplete
  loadEntreprises() {
    this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.switchMap)(token => {
      if (!token) {
        console.error('Aucun token valide trouvé !');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.throwError)(() => new Error('Aucun token trouvé'));
      }
      return this.entrepriseService.getListEntreprise();
    })).subscribe({
      next: entreprises => {
        this.optionsEntreprise$.next(entreprises);
        this.setupAutocomplete();
      },
      error: error => {
        console.error('Erreur lors de la récupération des entreprises :', error);
      }
    });
  }
  // Configurer l'autocomplete
  setupAutocomplete() {
    this.filteredOptions = (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.combineLatest)([this.control.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_23__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.map)(value => typeof value === 'string' ? value : value?.nom)), this.optionsEntreprise$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_24__.map)(([name, entreprises]) => name ? this._filter(name, entreprises) : entreprises));
  }
  _filter(name, entreprises) {
    const filterValue = name.toLowerCase();
    return entreprises.filter(e => e.nom.toLowerCase().includes(filterValue));
  }
  // Affichage du nom de l'entreprise dans l'autocomplete
  displayFnEntreprise(e) {
    return e ? e.nom : '';
  }
  // Sélection d'une entreprise dans l'autocomplete
  onEntrepriseSelected(event) {
    // Logique pour gérer la sélection
  }
  // Ouvrir/fermer le popup d'ajout de client
  openAddClient() {
    this.showAddClientPopup = true;
    this.loadEntreprises();
  }
  closeAddClientPopup() {
    this.showAddClientPopup = false;
    this.clientForm.reset();
  }
  // Ajouter un nouveau client
  ajouterClientDansPopup() {
    if (this.clientForm.invalid) return;
    const client = this.clientForm.value;
    if (this.isEntrepriseSelected) {
      const selected = this.control.value;
      if (selected && selected.id) {
        client.entrepriseClient = {
          id: selected.id
        };
      }
    }
    this.clientService.addClient(client).subscribe({
      next: res => {
        const newClient = {
          ...client,
          id: res.id,
          createdAt: new Date() // Utilisez un objet Date directement
        };
        this.closeAddClientPopup();
        this.clients = [newClient, ...this.clients];
        this.currentListTypePopup = 'clients';
        this.searchText = '';
      },
      error: err => {
        console.error('Erreur lors de l\'ajout du client:', err);
      }
    });
  }
  setClientType(type) {
    this.clientType = type;
  }
  onEntreprisePaysChange(event) {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
    if (!paysInfo) return;
    this.entrepriseIndicatif = paysInfo.indicatif;
    this.entrepriseMaxPhoneLength = paysInfo.longueur;
    const ctrl = this.entrepriseForm.get('telephone');
    let currentValue = ctrl?.value ?? '';
    const prefix = this.entrepriseIndicatif.replace(/\D/g, '');
    const valueNumerique = currentValue.replace(/\D/g, '');
    if (!valueNumerique.startsWith(prefix)) {
      ctrl?.setValue(this.entrepriseIndicatif);
    } else {
      const reste = valueNumerique.slice(prefix.length, prefix.length + this.entrepriseMaxPhoneLength);
      ctrl?.setValue(this.entrepriseIndicatif + reste);
    }
    this.updateEntreprisePhoneValidator(paysInfo.longueur);
  }
  updateEntreprisePhoneValidator(longueur) {
    const ctrl = this.entrepriseForm.get('telephone');
    const regex = new RegExp(`^\\${this.entrepriseIndicatif}\\s?\\d{${longueur}}$`);
    ctrl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(regex)]);
    ctrl?.updateValueAndValidity();
  }
  // Formatage du numéro pour les entreprises
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
  ajouterEntrepriseDansPopup() {
    if (this.entrepriseForm.invalid) {
      return;
    }
    const entreprise = this.entrepriseForm.value;
    this.entrepriseService.addEntreprise(entreprise).subscribe({
      next: res => {
        // Fermer le popup d'ajout
        this.closeAddClientPopup();
        // Ajouter la nouvelle entreprise à la liste
        this.entreprisesPopup = [res, ...this.entreprisesPopup];
        // Basculer sur l'onglet des entreprises
        this.currentListTypePopup = 'entreprises';
        // Réinitialiser le champ de recherche
        this.searchText = '';
      },
      error: err => {
        console.error('Erreur lors de l\'ajout de l\'entreprise:', err);
      }
    });
  }
  loadEntreprisesForPopup() {
    this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.switchMap)(token => {
      if (!token) {
        console.error('Aucun token valide trouvé !');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.throwError)(() => new Error('Aucun token trouvé'));
      }
      return this.entrepriseService.getListEntreprises();
    })).subscribe({
      next: data => {
        // Trier par date de création descendante
        this.entreprisesPopup = data.sort((a, b) => {
          const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return dateB - dateA;
        });
      },
      error: err => {
        console.error('Erreur récupération entreprises :', err);
      }
    });
  }
  // Basculer entre clients/entreprises dans le popup
  setListTypePopup(type) {
    this.currentListTypePopup = type;
    this.searchText = ''; // Réinitialiser la recherche
  }
  // Filtrer les entreprises
  get filteredEntreprisesPopup() {
    let entreprises = this.entreprisesPopup;
    if (this.searchText.trim()) {
      const searchLower = this.searchText.toLowerCase().trim();
      entreprises = entreprises.filter(entreprise => entreprise.nom?.toLowerCase().includes(searchLower) || entreprise.email?.toLowerCase().includes(searchLower) || entreprise.adresse?.toLowerCase().includes(searchLower) || entreprise.telephone?.includes(searchLower));
    }
    // Trier par date de création descendante (le plus récent en premier)
    return entreprises.sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    });
  }
  getSelectedCustomerName() {
    if (this.selectedClient) {
      return this.selectedClient.nomComplet || 'Client sans nom';
    }
    if (this.selectedEntreprise) {
      return this.selectedEntreprise.nom || 'Entreprise sans nom';
    }
    return 'Client';
  }
  handleKeyboardEvent(event) {
    // Si la calculatrice est active, on ne fait rien ici.
    // L'événement sera capturé par le listener de PosAccueilComponent.
    if (this.isCalculatorActive) {
      return;
    }
    // IMPORTANT: Vérifier si un scan est en cours AVANT de traiter les touches
    if (this.scanInProgress) {
      return; // Ignorer complètement si un scan est en cours
    }
    if (this.showPaymentPopup) {
      this.handlePaymentKeyPressPhysical(event);
    } else {
      this.handleKeyPressPhysical(event);
    }
  }
  handleKeyPressPhysical(event) {
    // Indiquer au scanner qu'on est en train d'utiliser le clavier normalement
    this.scannerService.setUserTyping(true);
    // Réactiver le scanner après un court délai
    setTimeout(() => {
      this.scannerService.setUserTyping(false);
    }, 1000); // 1 seconde de délai
    // Ignorer si un scan matériel est en cours
    if (this.scanInProgress) return;
    // Ignorer si le focus est dans un input / textarea (user tape)
    const ae = document.activeElement;
    if (ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA' || ae.isContentEditable)) {
      return;
    }
    if (this.disablePhysicalKeyboard || this.discountMode.active) return;
    // condition pour ignorer si le champ de remise est actif
    if (this.discountMode.active) return;
    // Ignorer si un popup est ouvert ou si on est dans un champ de saisie
    if (this.showDetailPopup || this.showClientPopup || this.showAddClientPopup) return;
    const key = event.key;
    switch (key) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.handleKeyPress(key);
        break;
      case ',':
      case '.':
        this.handleKeyPress(',');
        break;
      case 'Backspace':
        this.handleKeyPress('backspace');
        break;
      case '-':
      case '+':
        this.handleKeyPress('+/-');
        break;
    }
  }
  handlePaymentKeyPressPhysical(event) {
    this.scannerService.setUserTyping(true);
    setTimeout(() => {
      this.scannerService.setUserTyping(false);
    }, 1000);
    const key = event.key;
    switch (key) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.handlePaymentKeyPress(key);
        break;
      case ',':
      case '.':
        this.handlePaymentKeyPress(',');
        break;
      case 'Backspace':
        this.handlePaymentKeyPress('backspace');
        break;
      case '-':
      case '+':
        this.handlePaymentKeyPress('+/-');
        break;
      case 'Enter':
        if (this.isAmountEntered) {
          this.completePayment();
        }
        break;
    }
  }
  buildVenteRequestFromCart() {
    if (!this.selectedBoutiqueId) {
      this.venteErrorMessage = 'Aucune boutique sélectionnée.';
      return null;
    }
    const produitsQuantites = {};
    this.cart.forEach((qty, productId) => {
      if (qty > 0) produitsQuantites[String(productId)] = qty;
    });
    if (Object.keys(produitsQuantites).length === 0) {
      this.venteErrorMessage = 'Le panier est vide.';
      return null;
    }
    const modePaiementEnum = this.mapPaymentMethodToEnum(this.selectedPaymentMethod);
    // Récupérer les informations du client/entreprise
    let clientNom = undefined;
    let clientNumero = undefined;
    let clientId = null;
    let entrepriseClientId = null;
    if (this.selectedClient) {
      clientNom = this.selectedClient.nomComplet || undefined;
      clientNumero = this.selectedClient.telephone || undefined;
      clientId = this.selectedClient.id;
    } else if (this.selectedEntreprise) {
      clientNom = this.selectedEntreprise.nom || undefined;
      clientNumero = this.selectedEntreprise.telephone || undefined;
      entrepriseClientId = this.selectedEntreprise.id ?? null;
    }
    // si aucun client sélectionné, clientId et entrepriseClientId restent null → client passant
    const request = {
      boutiqueId: this.selectedBoutiqueId,
      produitsQuantites,
      description: 'Vente POS',
      clientNom: clientNom,
      clientNumero: clientNumero,
      clientId: clientId,
      entrepriseClientId: entrepriseClientId,
      modePaiement: modePaiementEnum ?? undefined
    };
    // Ajouter les remises par produit
    const remises = {};
    this.getCartItems().forEach(item => {
      let discountAmount = this.productDiscounts.get(item.product.id) || 0;
      if ((!discountAmount || discountAmount === 0) && this.discountMode.active && this.discountMode.productId === item.product.id) {
        if (this.discountMode.type === 'CFA') {
          discountAmount = Math.max(0, this.discountMode.value || 0);
        } else {
          const pct = Math.max(0, this.discountMode.value || 0) / 100;
          discountAmount = Math.round(item.product.prixVente * item.quantity * pct);
        }
      }
      if (discountAmount > 0) {
        const totalSansRemise = item.product.prixVente * item.quantity;
        remises[item.product.id] = discountAmount / totalSansRemise * 100;
      }
    });
    if (Object.keys(remises).length > 0) {
      request.remises = remises;
    }
    // Ajouter la remise globale
    if (this.globalDiscount.active && this.globalDiscount.value > 0) {
      if (this.globalDiscount.type === 'CFA') {
        const subtotal = this.getSubtotal();
        if (subtotal > 0) {
          request.remiseGlobale = this.globalDiscount.value / subtotal * 100;
        }
      } else {
        request.remiseGlobale = this.globalDiscount.value;
      }
    }
    return request;
  }
  submitVente() {
    this.venteErrorMessage = null;
    const request = this.buildVenteRequestFromCart();
    if (!request) return;
    // Affiche clairement la requête qui sera envoyée
    console.log('→ Envoi de la requête vente:', request);
    // Also show boutique id and cart for extra confidence
    console.log('selectedBoutiqueId=', this.selectedBoutiqueId, 'cart=', Array.from(this.cart.entries()));
    this.isSubmittingVente = true;
    this.venteService.enregistrerVente(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_25__.finalize)(() => this.isSubmittingVente = false)).subscribe({
      next: res => {
        console.log('Vente enregistrée', res);
        // UX : succès
        // alert('Vente enregistrée avec succès (ID: ' + res.venteId + ')');
        // Réinitialiser l'UI : vider cart, sauvegarder état
        this.cart.clear();
        this.saveActiveCart();
        this.updateCommandeTotals();
        // Naviguer / afficher reçu (optionnel)
        this.router.navigate(['/pos-accueil/paiement'], {
          state: {
            vente: res,
            paymentAmount: this.paymentAmount,
            changeDue: this.changeDue,
            paymentMethod: this.selectedPaymentMethod
          }
        });
        // fermer popup de paiement si ouvert
        this.showPaymentPopup = false;
      },
      error: err => {
        // Affiche tout pour debug
        console.error('Erreur enregistrement vente (subscribe) :', err);
        // Si err est un HttpErrorResponse (erreur réseau / serveur), extraire message du serveur
        const original = err?.original ?? err;
        let serverMsg = null;
        // Cas : on reçoit HttpErrorResponse avec original.error = { exception, error: "..." }
        if (original?.error) {
          // Many backends return either { error: "..."} or { message: "..."} or {exception:.., error:..}
          serverMsg = original.error.error || original.error.message || original.message;
        }
        // Sinon on prend err.message
        this.venteErrorMessage = serverMsg || err?.message || 'Erreur inconnue lors de l\'enregistrement de la vente';
        // Affiche à l'utilisateur
        alert('Erreur : ' + this.venteErrorMessage);
        // NE PAS vider le panier : laisser l'utilisateur réessayer
      }
    });
  }
  mapPaymentMethodToEnum(uiMethod) {
    if (!uiMethod) return null;
    const m = uiMethod.trim().toLowerCase();
    if (m === 'espèces' || m === 'espèces ' || m === 'especes' || m === 'especes' || m === 'espèces') {
      return 'ESPECES';
    }
    if (m === 'carte' || m === 'card') {
      return 'CARTE';
    }
    if (m === 'mobile money' || m === 'mobile_money' || m.includes('mobile')) {
      return 'MOBILE_MONEY';
    }
    if (m === 'chèque' || m === 'cheque' || m === 'cheque') {
      return 'CHEQUE';
    }
    // 'Compte client' / 'Compte' -> on n'a pas d'enum spécifique -> AUTRE
    if (m.includes('compte') || m.includes('client') || m.includes('compte client')) {
      return 'AUTRE';
    }
    // fallback conservative
    return 'AUTRE';
  }
  // Réinitialiser la sélection
  clearCustomerSelection(event) {
    event.stopPropagation(); // éviter que le popup se réouvre
    this.selectedClient = null;
    this.selectedEntreprise = null;
  }
  // Méthodes pour le déplacement
  startDrag(event) {
    event.preventDefault();
    this.isDragging = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.initialX = this.popupOffset.x;
    this.initialY = this.popupOffset.y;
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }
  // Basculer l'affichage du champ remise
  toggleDiscountInput() {
    this.showDiscountInput = !this.showDiscountInput;
    if (this.showDiscountInput) {
      this.discountButtonText = 'Annuler';
    } else {
      this.resetDiscount();
    }
  }
  // Réinitialiser l'état de remise
  resetDiscount() {
    this.showDiscountInput = false;
    this.discountValue = 0;
    this.discountType = 'CFA';
    this.discountButtonText = 'Remise';
    this.selectedProductForDiscount = null;
  }
  // Basculer le mode remise
  toggleDiscountMode() {
    this.discountMode.active = !this.discountMode.active;
    if (this.discountMode.active) {
      // Si aucun produit ciblé : essayer d'auto-sélectionner un produit logique
      if (!this.discountMode.productId) {
        // priorise le dernier produit ciblé si existant
        if (this.lastSelectedForDiscount) {
          this.discountMode.productId = this.lastSelectedForDiscount;
        } else {
          const items = this.getCartItems();
          // si il n'y a qu'une seule ligne dans le panier, l'utiliser
          if (items.length === 1) {
            this.discountMode.productId = items[0].product.id;
          }
        }
      }
    } else {
      this.resetDiscountMode();
    }
    // forcer recalcul affichage
    this.updateCommandeTotals();
  }
  // Changer le type de remise (CFA ou %)
  setDiscountType(type) {
    this.discountMode.type = type;
    this.updateCommandeTotals();
  }
  selectProductForDiscount(product) {
    this.lastSelectedForDiscount = product.id;
    this.discountMode.productId = product.id;
    this.discountMode.active = true;
    const existing = this.productDiscounts.get(product.id) || 0;
    if (existing > 0) {
      const pct = Math.round(existing / product.prixVente * 100);
      if (pct > 0 && pct <= 100) {
        this.discountMode.type = '%';
        this.discountMode.value = pct;
      } else {
        this.discountMode.type = 'CFA';
        this.discountMode.value = existing;
      }
    } else {
      this.discountMode.value = 0;
    }
    this.updateCommandeTotals();
  }
  // --- apply discount : corriger pour stocker la remise en CFA *totale par ligne* (et pas seulement par unité) ---
  applyDiscount(produit) {
    // Autoriser la valeur 0 pour supprimer la remise
    if (this.discountMode.value < 0) return;
    const qty = this.getSelectedQuantity(produit.id) || 0;
    if (qty <= 0) return;
    let discountAmount = 0;
    if (this.discountMode.value > 0) {
      if (this.discountMode.type === '%') {
        // Calculer le montant de remise en pourcentage
        discountAmount = produit.prixVente * qty * (this.discountMode.value / 100);
      } else {
        // CFA : montant fixe
        discountAmount = this.discountMode.value;
      }
    }
    // Limiter la remise au montant maximum possible
    const maxDiscount = produit.prixVente * qty;
    if (discountAmount > maxDiscount) discountAmount = maxDiscount;
    // Stocker la remise (0 effacera la remise existante)
    if (discountAmount > 0) {
      this.productDiscounts.set(produit.id, discountAmount);
    } else {
      this.productDiscounts.delete(produit.id);
    }
    this.resetDiscountMode();
    this.updateCommandeTotals();
  }
  resetDiscountMode() {
    this.discountMode = {
      active: false,
      type: 'CFA',
      value: 0
    };
  }
  // Modifier une remise existante
  editDiscount(produit) {
    const currentDiscount = this.productDiscounts.get(produit.id) || 0;
    // Convertir en pourcentage si nécessaire pour l'affichage
    let displayValue = currentDiscount;
    let type = 'CFA';
    if (currentDiscount > 0) {
      const percentage = Math.round(currentDiscount / produit.prixVente * 100);
      if (percentage > 0 && percentage <= 100) {
        displayValue = percentage;
        type = '%';
      }
    }
    this.discountMode = {
      active: true,
      type: type,
      value: displayValue,
      productId: produit.id
    };
    // mémoriser pour usages futurs (auto-select)
    this.lastSelectedForDiscount = produit.id;
    // mise à jour immédiate de l'UI
    this.updateCommandeTotals();
  }
  // --- getProductDiscount : retourner la remise actuelle affichée (live si en cours d'édition) ---
  getProductDiscount(productId) {
    // si edition live pour ce product
    if (this.discountMode.active && this.discountMode.productId === productId) {
      const product = this.allProducts.find(p => p.id === productId);
      const qty = this.cart.get(productId) || 0;
      return this.computeDiscountForItem(product, qty);
    }
    return this.productDiscounts.get(productId) || 0;
  }
  // --- utilitaire : calcule la remise effective (temporaire ou persistée) pour un produit donné et une quantité ---
  computeDiscountForItem(product, quantity) {
    if (!product || quantity <= 0) return 0;
    // Si on est en mode édition (live) pour ce produit, calculer la remise temporaire
    if (this.discountMode.active && this.discountMode.productId === product.id) {
      if (this.discountMode.type === 'CFA') {
        // valeur CFA interprétée comme montant total de remise pour la ligne
        const val = Math.max(0, this.discountMode.value || 0);
        return Math.min(val, product.prixVente * quantity);
      } else {
        // pourcentage appliqué au total de la ligne
        const pct = Math.max(0, this.discountMode.value || 0) / 100;
        const discount = Math.round(product.prixVente * quantity * pct);
        return Math.min(discount, product.prixVente * quantity);
      }
    }
    // sinon, prendre la remise persistée (productDiscounts contient montant en CFA pour la ligne)
    return this.productDiscounts.get(product.id) || 0;
  }
  // Méthodes pour la remise globale
  toggleGlobalDiscount() {
    this.globalDiscount.active = !this.globalDiscount.active;
    if (this.globalDiscount.active) {
      // Désactiver les remises par produit
      this.discountMode.active = false;
      this.productDiscounts.clear();
    }
    this.updateCommandeTotals();
  }
  setGlobalDiscountType(type) {
    this.globalDiscount.type = type;
    this.updateCommandeTotals();
  }
  onGlobalDiscountInputChange() {
    if (this.globalDiscount.value < 0) this.globalDiscount.value = 0;
    this.updateCommandeTotals();
    // si le popup de paiement est ouvert, recalculer la monnaie / restant
    if (this.showPaymentPopup) {
      this.calculatePayment();
    }
  }
  getGlobalDiscountAmount() {
    if (!this.globalDiscount.active || this.globalDiscount.value <= 0) {
      return 0;
    }
    if (this.globalDiscount.type === 'CFA') {
      return this.globalDiscount.value;
    } else {
      return this.getSubtotal() * (this.globalDiscount.value / 100);
    }
  }
  // Ouvrir le popup
  openListClientPopup() {
    this.showClientPopup = true;
    this.loadClients();
    this.loadEntreprisesForPopup(); // Charger les entreprises
  }
  isEditingDiscount(productId) {
    return this.discountMode.active && this.discountMode.productId === productId;
  }
  saveDiscount(produit) {
    this.applyDiscount(produit);
    this.updateCommandeTotals();
    // Réinitialiser le champ de remise
    this.currentDiscountInput = '';
    this.discountMode.value = 0;
  }
  formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR');
  }
  isNearExpiry(dateStr) {
    if (!dateStr) return false;
    const date = new Date(dateStr);
    const now = new Date();
    const oneMonthLater = new Date();
    oneMonthLater.setMonth(now.getMonth() + 1);
    return date <= oneMonthLater;
  }
  //Récupérer les produits filtrés selon la boutique sélectionnée
  getFilteredProductsByBoutique() {
    if (!this.selectedBoutiqueId) return [];
    let products = this.allProducts.filter(p => p.boutiqueId === this.selectedBoutiqueId);
    if (this.selectedCategoryId !== null && this.selectedCategoryId !== undefined) {
      products = products.filter(p => p.categorieId === this.selectedCategoryId);
    }
    return products;
  }
  // Mettre à jour les gestionnaires d'événements de focus
  onInputFocus() {
    this.scannerService.setUserTyping(true);
  }
  onInputBlur() {
    // Si on était en mode édition de remise pour un produit spécifique
    if (this.inputMode === 'discount' && this.isEditingDiscount(this.discountMode.productId)) {
      const productToDiscount = this.allProducts.find(p => p.id === this.discountMode.productId);
      if (productToDiscount) {
        // Appliquer la remise directement
        this.applyDiscount(productToDiscount);
        // Réinitialiser le champ de saisie et la valeur temporaire
        this.currentDiscountInput = '';
        this.discountMode.value = 0;
        // Mettre à jour les totaux
        this.updateCommandeTotals();
      }
    }
    // Attendre un peu avant de réactiver le scanner
    setTimeout(() => {
      this.scannerService.setUserTyping(false);
    }, 500);
  }
  // Dans PosVenteComponent
  notifyUserTyping() {
    this.scannerService.setUserTyping(true);
    // Réactiver le scanner après un court délai
    setTimeout(() => {
      this.scannerService.setUserTyping(false);
    }, 1000);
  }
  static {
    this.ɵfac = function PosVenteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PosVenteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_pos_accueil_view_state_service__WEBPACK_IMPORTED_MODULE_3__.ViewStateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_categorie_service__WEBPACK_IMPORTED_MODULE_4__.CategorieService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_commande_state_service__WEBPACK_IMPORTED_MODULE_5__.CommandeStateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_client_service__WEBPACK_IMPORTED_MODULE_6__.ClientService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_7__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_8__.EntrepriseService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_9__.ProduitService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_VenteService_vente_service__WEBPACK_IMPORTED_MODULE_10__.VenteService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_CaisseService_boutique_state_service__WEBPACK_IMPORTED_MODULE_11__.BoutiqueStateService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_VenteService_scanner_service__WEBPACK_IMPORTED_MODULE_12__.ScannerService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_SearchService__WEBPACK_IMPORTED_MODULE_13__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_VenteService_calculator_service__WEBPACK_IMPORTED_MODULE_14__.CalculatorService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
      type: PosVenteComponent,
      selectors: [["app-pos-vente"]],
      hostBindings: function PosVenteComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keydown", function PosVenteComponent_keydown_HostBindingHandler($event) {
            return ctx.handleKeyboardEvent($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresolveDocument"]);
        }
      },
      decls: 81,
      vars: 23,
      consts: [["noNomComplet", ""], ["noEmail", ""], ["noAdresse", ""], ["noPhone", ""], ["noEntreprise", ""], ["noDate", ""], ["noNom", ""], ["auto", "matAutocomplete"], [1, "section_contenu_container"], [1, "section_contenu_left"], [1, "section_favory_produit"], [1, "section_favory"], [1, "titre_categorie"], [1, "category-header"], [1, "allCate", 3, "click"], ["class", "ul_name_categorie", "style", "overflow-y: auto; height: 600px;", 4, "ngIf"], [1, "section_produit"], ["class", "cadre_produit product-grid", "style", "overflow-y: auto; max-height: 85vh;", 3, "scroll", 4, "ngIf"], ["class", "cadre_produit_list product-list", "style", "overflow-y: auto; max-height: 70vh;", 3, "scroll", 4, "ngIf"], [1, "section_contenu_right", 2, "background-color", "#ffffff", "height", "100vh", "box-shadow", "rgba(0, 0, 0, 0.04) 0px 3px 5px"], [1, "list_produit_select"], [1, "ul_list_produit_select"], ["class", "li_list_produit_select", 3, "click", 4, "ngFor", "ngForOf"], [1, "summary_panel"], [1, "double_row"], [1, "double_row", "total"], ["class", "discount-input", 4, "ngIf"], [1, "client_facture", 2, "padding-top", "5px"], [1, "double_client_facture"], [1, "paiement_btn", "btn_client", 3, "click"], [4, "ngIf"], ["class", "selected-client-info", 4, "ngIf"], ["class", "clear-customer", 3, "click", 4, "ngIf"], [1, "paiement_btn", "btn_facture"], ["type", "checkbox"], [1, "keypad"], ["tabindex", "-1", 3, "click"], [3, "click"], ["tabindex", "-1", 1, "btn_keypad_action"], ["tabindex", "-1", 1, "backspace", 3, "click"], [1, "ri-delete-back-2-line"], [1, "btn_content"], [1, "btn-payment", 3, "click"], ["class", "payment-popup-overlay", 4, "ngIf"], ["class", "detail-popup-overlay", 4, "ngIf"], ["class", "list-client-popup-overlay", 4, "ngIf"], ["class", "add-client-popup-overlay", 4, "ngIf"], ["class", "scan-error-toast", 4, "ngIf"], [1, "ul_name_categorie", 2, "overflow-y", "auto", "height", "600px"], ["class", "ul_li_name_categorie", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "ul_li_name_categorie", 3, "click"], [1, "name_categorie"], [1, "nombre", 3, "title"], [1, "cadre_produit", "product-grid", 2, "overflow-y", "auto", "max-height", "85vh", 3, "scroll"], ["class", "product-card", 3, "disabled", "click", "pointerdown", "pointerup", "pointerleave", 4, "ngFor", "ngForOf"], ["class", "loading-indicator", 4, "ngIf"], ["class", "loading-more-indicator", 4, "ngIf"], [1, "product-card", 3, "click", "pointerdown", "pointerup", "pointerleave"], ["class", "stock-badge", 4, "ngIf"], ["alt", "", 1, "product-img", 3, "src"], [1, "card-body"], [1, "product-name"], [1, "product-stock"], [1, "bottom_price_sub"], [1, "product-price"], [1, "btn-decrement", 3, "click"], [1, "ri-subtract-line"], [1, "stock-badge"], [1, "loading-indicator"], [1, "ri-loader-4-line"], [1, "loading-more-indicator"], [1, "cadre_produit_list", "product-list", 2, "overflow-y", "auto", "max-height", "70vh", 3, "scroll"], [1, "ul_list"], ["class", "li_list", 3, "disabled", "click", "pointerdown", "pointerup", "pointerleave", 4, "ngFor", "ngForOf"], ["class", "empty-category", 4, "ngIf"], [1, "li_list", 3, "click", "pointerdown", "pointerup", "pointerleave"], [1, "list_left"], [1, "double"], [1, "img_product_list"], ["alt", "", 3, "src"], [1, "name_stock_list"], [1, "product-name-list"], [1, "product-stock-list"], [1, "list_right"], [1, "double", 2, "gap", "10px"], [1, "btn_badge"], ["class", "stock-badge-list", 4, "ngIf"], [1, "stock-badge-list"], [1, "empty-category"], [1, "li_list_produit_select", 3, "click"], [1, "double", 2, "gap", "5px"], [1, "nombre_select"], [1, "name_produit_select"], [2, "margin", "0"], ["class", "discount-badge", 4, "ngIf"], [1, "price_produit"], ["class", "icon_close_select", 3, "click", 4, "ngIf"], ["class", "edit-discount", 3, "click", 4, "ngIf"], [1, "discount-badge"], [1, "icon_close_select", 3, "click"], [1, "ri-close-circle-fill"], [1, "edit-discount", 3, "click"], [1, "discount-input"], [1, "btn-currency", 3, "click"], ["type", "number", "placeholder", "0", "min", "0", 1, "input-discount", 3, "input", "focus", "blur", "value"], [1, "btn-percent", 3, "click"], ["src", "assets/img/profil.png", "alt", "client", "width", "16", "height", "16", 2, "vertical-align", "middle", "margin-right", "5px"], [1, "selected-client-info"], [1, "clear-customer", 3, "click"], [1, "ri-close-line"], [1, "payment-popup-overlay"], [1, "payment-popup", 3, "click", "ngStyle"], [1, "popup-header", 3, "mousedown"], [1, "close-btn", 3, "click"], [1, "section_popup_paiement"], [1, "cadre_section_contenu_left_prise"], [1, "section_contenu_left_prise"], [1, "montant_paiement"], ["class", "original-price", 4, "ngIf"], [1, "moyen_paiement_price"], [1, "moyen_paiement"], [1, "moyen_prise_du"], [1, "price_du"], [1, "ri-close-line", "clear-icon", 3, "click"], [1, "paiement_restant"], [1, "moyen_paiement_restant"], ["class", "double_row", 4, "ngIf"], [1, "discount-label"], [1, "section_contenu_right", 2, "background-color", "#ffffff", "height", "80vh", "box-shadow", "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"], [1, "methode_paiement"], [1, "cadre_paiement", 3, "click"], [1, "img_paiement"], ["src", "assets/img/payer.png", "alt", ""], [1, "title_paiement"], [1, "img_paiement", "img_paiement_mobile"], ["src", "assets/img/money.png", "alt", ""], [1, "img_paiement", "img_paiement_carte"], ["src", "assets/img/carte-de-credit.png", "alt", ""], [1, "img_paiement", "img_paiement_compte"], ["src", "assets/img/compte-rendu.png", "alt", ""], [1, "client_facture"], [1, "paiement_btn", "remise_produit", 2, "border", "none", 3, "click"], [1, "keypad", 2, "padding-top", "5px"], [1, "btn-payment-pop", 3, "click", "disabled"], [1, "original-price"], ["type", "number", "placeholder", "0", "min", "0", 1, "input-discount", 3, "ngModelChange", "input", "ngModel"], [1, "detail-popup-overlay"], [1, "detail-popup", 3, "click", "ngStyle"], ["class", "popup-header", 3, "mousedown", 4, "ngIf"], ["class", "popup-body", 4, "ngIf"], [1, "popup-actions"], [1, "btn-add", 3, "click"], [1, "popup-body"], [1, "detail-image"], ["alt", "Image produit", 3, "src"], [1, "detail-info"], [1, "detail_info_left"], [1, "info-row"], [1, "label"], [1, "value"], ["class", "info-row", 4, "ngIf"], [1, "detail_info_right"], [1, "value", 3, "ngClass"], [1, "detail-description"], ["bc-format", "CODE128", 1, "barcode-shifted", 3, "bc-value", "bc-line-color", "bc-width", "bc-height", "bc-font-size", "bc-display-value"], [1, "list-client-popup-overlay"], [1, "list-client-popup", 3, "click", "ngStyle"], [1, "title", 2, "margin-bottom", "0", "font-size", "16px", "letter-spacing", "0.65px"], ["class", "btnAddClient", 4, "ngIf"], ["class", "barre", 4, "ngIf"], [1, "contentIcon", 3, "click"], [1, "ri-folder-user-line"], [1, "nombreCount"], [1, "barre"], [1, "ri-building-line"], [1, "inputSearch"], [1, "ri-search-2-line"], ["type", "text", "placeholder", "Recherche un client", 3, "ngModelChange", "ngModel"], [1, "btnAddClient"], [3, "click", 4, "ngFor", "ngForOf"], [1, "imgClient"], ["alt", "Photo client", 3, "src"], [3, "innerHTML", 4, "ngIf", "ngIfElse"], [4, "ngIf", "ngIfElse"], ["class", "iconEntrepriseList", 4, "ngIf", "ngIfElse"], [3, "innerHTML"], [1, "no-phone-text"], [1, "iconEntrepriseList"], ["title", "Affiliation d'Entreprise", 1, "ri-git-branch-fill"], ["colspan", "7", 1, "no-client-message"], ["src", "assets/img/office_building.png", "alt", "Logo entreprise"], [1, "add-client-popup-overlay"], [1, "add-client-popup", 3, "click", "ngStyle"], [1, "add-client-form"], [1, "form-group"], [1, "client-type-selector"], ["type", "button", 1, "client-type-btn", 3, "click"], ["class", "add-client-form", 3, "formGroup", 4, "ngIf"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [1, "add-client-form", 3, "formGroup"], [1, "double_input"], [1, "champ_input"], ["type", "text", "id", "nomComplet", "formControlName", "nomComplet", "name", "nomComplet", "placeholder", "Saisis le nom et pr\u00E9nom", 1, "input_focus"], ["for", "nomComplet", 1, "label"], ["class", "error", 4, "ngIf"], ["type", "email", "id", "email", "formControlName", "email", "name", "email", "placeholder", "Saisis l'email", 1, "input_focus"], ["for", "email", 1, "label"], ["id", "adresse", "formControlName", "adresse", "name", "adresse", "placeholder", "Saisis l'adresse", 1, "input_focus"], ["for", "adresse", 1, "label"], ["id", "poste", "formControlName", "poste", "name", "poste", "placeholder", "Saisissez votre poste ", 1, "input_focus"], ["for", "poste", 1, "label"], [1, "grid_colonne"], [1, "champ_input", "div1"], ["formControlName", "pays", 1, "input_focus", 3, "change"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "pays", 1, "label"], [1, "champ_input", "div2"], ["type", "tel", "id", "telephone", "formControlName", "telephone", "name", "telephone", "placeholder", "Saisis le num\u00E9ro de t\u00E9l\u00E9phone", 1, "input_focus", 3, "input"], ["for", "telephone", 1, "label"], [1, "champ_input", "div3"], ["id", "ville", "formControlName", "ville", "name", "ville", "placeholder", "Saisis la ville", 1, "input_focus"], ["for", "ville", 1, "label"], [1, "info_titre_input", 2, "margin-top", "20px"], [1, "champ_input_inventaire"], [1, "switch"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "slider", "round"], ["class", "champ_input", 4, "ngIf"], [1, "error"], [3, "value"], ["type", "text", "placeholder", "Selectionner une entreprise", 1, "input_focus", "input_cursor", 3, "formControl", "matAutocomplete"], [3, "optionSelected", "displayWith"], [1, "option-content"], ["type", "text", "id", "nom", "formControlName", "nom", "name", "nom", "placeholder", "Saisis le nom d'entreprise", 1, "input_focus"], ["for", "nom", 1, "label"], ["id", "siege", "formControlName", "siege", "name", "siege", "placeholder", "Saisis le si\u00E8ge", 1, "input_focus"], ["for", "siege", 1, "label"], ["id", "secteur", "formControlName", "secteur", "name", "secteur", "placeholder", "Saisis le secteur", 1, "input_focus"], ["for", "secteur", 1, "label"], [1, "scan-error-toast"], [1, "ri-error-warning-line"]],
      template: function PosVenteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "div", 11)(4, "div", 12)(5, "div", 13)(6, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_Template_p_click_6_listener() {
            return ctx.showAllProducts();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, " Toutes les cat\u00E9gories");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, PosVenteComponent_ul_8_Template, 2, 1, "ul", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, PosVenteComponent_div_10_Template, 4, 3, "div", 17)(11, PosVenteComponent_div_11_Template, 5, 3, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 19)(13, "div", 20)(14, "ul", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](15, PosVenteComponent_li_15_Template, 17, 11, "li", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 23)(17, "div", 24)(18, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19, "Taxes");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, "00 CFA");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "div", 25)(23, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](24, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](27, "cfaCurrency");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](28, PosVenteComponent_div_28_Template, 6, 5, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "div", 27)(30, "div", 28)(31, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_Template_div_click_31_listener() {
            return ctx.openListClientPopup();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](32, PosVenteComponent_p_32_Template, 3, 0, "p", 30)(33, PosVenteComponent_div_33_Template, 3, 1, "div", 31)(34, PosVenteComponent_div_34_Template, 3, 1, "div", 31)(35, PosVenteComponent_span_35_Template, 2, 0, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "div", 33)(37, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](38, "Facture");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](39, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 35)(41, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_Template_button_click_41_listener() {
            ctx.handleKeyPress("1");
            return ctx.notifyUserTyping();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](42, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_Template_button_click_43_listener() {
            ctx.handleKeyPress("2");
            return ctx.notifyUserTyping();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](44, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](45, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_Template_button_click_45_listener() {
            ctx.handleKeyPress("3");
            return ctx.notifyUserTyping();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](46, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_Template_button_click_47_listener() {
            return ctx.setInputMode("quantity");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](48, " Qt\u00E9 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_Template_button_click_49_listener() {
            ctx.handleKeyPress("4");
            return ctx.notifyUserTyping();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](50, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_Template_button_click_51_listener() {
            ctx.handleKeyPress("5");
            return ctx.notifyUserTyping();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](52, "5");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_Template_button_click_53_listener() {
            ctx.handleKeyPress("6");
            return ctx.notifyUserTyping();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](54, "6");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](55, "button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_Template_button_click_55_listener() {
            return ctx.setInputMode("discount");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](56, " Remise ");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](57, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_Template_button_click_57_listener() {
            ctx.handleKeyPress("7");
            return ctx.notifyUserTyping();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](58, "7");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](59, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_Template_button_click_59_listener() {
            ctx.handleKeyPress("8");
            return ctx.notifyUserTyping();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](60, "8");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](61, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_Template_button_click_61_listener() {
            ctx.handleKeyPress("9");
            return ctx.notifyUserTyping();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](62, "9");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](63, "button", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](64, "Prix");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_Template_button_click_65_listener() {
            ctx.handleKeyPress("+/-");
            return ctx.notifyUserTyping();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](66, "+/-");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](67, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_Template_button_click_67_listener() {
            ctx.handleKeyPress("0");
            return ctx.notifyUserTyping();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](68, "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](69, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_Template_button_click_69_listener() {
            ctx.handleKeyPress(",");
            return ctx.notifyUserTyping();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](70, ",");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](71, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_Template_button_click_71_listener() {
            return ctx.handleKeyPress("backspace");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](72, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](73, "div", 41)(74, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function PosVenteComponent_Template_button_click_74_listener() {
            return ctx.openPaymentPopup();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](75, "Paiement");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](76, PosVenteComponent_div_76_Template, 120, 42, "div", 43)(77, PosVenteComponent_div_77_Template, 7, 5, "div", 44)(78, PosVenteComponent_div_78_Template, 27, 15, "div", 45)(79, PosVenteComponent_div_79_Template, 24, 16, "div", 46)(80, PosVenteComponent_div_80_Template, 4, 1, "div", 47);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("selected", ctx.selectedCategoryId === null);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.categories.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isListView);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.isListView);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.getCartItems());
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](27, 21, ctx.getTotalCart()));
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.discountMode.active);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.selectedClient && !ctx.selectedEntreprise);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.selectedClient);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.selectedEntreprise);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.selectedClient || ctx.selectedEntreprise);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("btn_keypad_active", ctx.inputMode === "quantity");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("btn_keypad_active", ctx.inputMode === "discount");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showPaymentPopup);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showDetailPopup);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showClientPopup);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showAddClientPopup);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showScanError);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_28__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_28__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_28__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_30__.M, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteTrigger, ngx_barcode6__WEBPACK_IMPORTED_MODULE_31__.NgxBarcode6Module, ngx_barcode6__WEBPACK_IMPORTED_MODULE_31__.NgxBarcode6Component, src_app_admin_page_MODELS_cfa_currency_pipe__WEBPACK_IMPORTED_MODULE_2__.CfaCurrencyPipe],
      styles: ["@charset \"UTF-8\";\n.payment-popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.733);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.payment-popup[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 85%;\n  height: 90vh;\n  border-radius: 10px;\n  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  position: relative;\n}\n.payment-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: #6c757d;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.payment-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n\n.list-client-popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.733);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.list-client-popup[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 90%;\n  height: 90vh;\n  border-radius: 10px;\n  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  position: relative;\n}\n.list-client-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.list-client-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: #6c757d;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.list-client-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n\n.detail-popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 2rem 0;\n  z-index: 1000;\n}\n\n.detail-image[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n}\n.detail-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  border-radius: 4px;\n}\n\n.detail-popup[_ngcontent-%COMP%] {\n  background: #fff;\n  width: 90%;\n  max-width: 900px;\n  border-radius: 8px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #e5e5e5;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .shop-name[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 16px;\n  font-weight: 500;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 250px 250px 1fr;\n  row-gap: 0.75rem;\n  column-gap: 4rem;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  line-height: 25px;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #555;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #222;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .detail-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  padding: 1rem 0;\n  border-top: 1px solid #e5e5e5;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .detail-description[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #555;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .detail-description[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #333;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  background: #f8f9fa;\n  text-align: right;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  background: #0672e4;\n  border: none;\n  color: white;\n  padding: 0.6rem 1.2rem;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.detail-popup[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]:hover {\n  background: #45a049;\n}\n\n\n\n.btn-payment-pop[_ngcontent-%COMP%]:disabled {\n  background-color: #f4f4f4;\n  cursor: not-allowed;\n  color: #acacac;\n}\n\n.btnAddClient[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.btnAddClient[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #0672e4;\n  padding: 8px 20px;\n  border-radius: 5px;\n  color: #fff;\n  font-size: 12px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\ntr[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 18px 15px;\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n  padding: 12px 8px;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n\n\n.imgClient[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n\n.imgClient[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n  border-radius: 50%;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n\n.imgClient[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1); \n\n}\n\n.no-client-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: #888;\n}\n\n.inputSearch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n}\n\n.inputSearch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-left: 10px;\n  border-radius: 5px;\n  border: 1px solid #000;\n  font-size: 13px;\n}\n\n.inputSearch[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 15px;\n  font-size: 17px;\n}\n\n\n\n.add-client-popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.733);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1001;\n}\n\n.add-client-popup[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: white;\n  width: 700px;\n  height: 83vh;\n  border-radius: 10px;\n  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 20px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: #6c757d;\n  cursor: pointer;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow-y: auto;\n  padding: 15px;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 10px 15px;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: 500;\n  font-size: 13px;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0672e4;\n  box-shadow: 0 0 0 0.2rem rgba(6, 114, 228, 0.25);\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 80px;\n  resize: vertical;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .client-type-selector[_ngcontent-%COMP%] {\n  display: flex;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .client-type-selector[_ngcontent-%COMP%]   .client-type-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px;\n  background: #f1f1f1;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .client-type-selector[_ngcontent-%COMP%]   .client-type-btn.active[_ngcontent-%COMP%] {\n  background: #0672e4;\n  color: white;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .photo-upload[_ngcontent-%COMP%]   .photo-placeholder[_ngcontent-%COMP%] {\n  height: 100px;\n  border: 1px dashed #ced4da;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .photo-upload[_ngcontent-%COMP%]   .photo-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 5px;\n  color: #6c757d;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-body[_ngcontent-%COMP%]   .add-client-form[_ngcontent-%COMP%]   .photo-upload[_ngcontent-%COMP%]   .photo-placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 15px 20px;\n  background-color: #f8f9fa;\n  border-top: 1px solid #dee2e6;\n  display: flex;\n  justify-content: flex-end;\n  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #ff0000;\n  color: #fff;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d70404;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {\n  background-color: #0672e4;\n  color: white;\n}\n.add-client-popup[_ngcontent-%COMP%]   .popup-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]:hover {\n  background-color: #055cb9;\n}\n\n.double_input[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 10px;\n}\n\n.grid_colonne[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #695c5c;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: rgb(107, 102, 102);\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 5px;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\n\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #0672E4; \n\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n.input_cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.client-type-selector[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.client-type-selector[_ngcontent-%COMP%]   .client-type-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px;\n  background: #f1f1f1;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: center;\n}\n.client-type-selector[_ngcontent-%COMP%]   .client-type-btn.active[_ngcontent-%COMP%] {\n  background: #0672e4;\n  color: white;\n}\n\n.nombreCount[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  position: absolute;\n  top: -15px;\n  background-color: #ddd;\n  width: 18px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  right: -9px;\n}\n\n.nombreCount[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n  border-radius: 50%;\n  font-size: 9px;\n}\n\n.barre[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.2470588235);\n  margin: 8px 10px;\n}\n\n.contentIcon[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  padding: 0px 5px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.contentIcon.active[_ngcontent-%COMP%] {\n  background-color: #e6f7ff; \n\n  border: 1px solid #1890ff; \n\n}\n\n.contentIcon.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1890ff; \n\n}\n\n.contentIcon[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: #f5f5f5; \n\n}\n\n.date-red[_ngcontent-%COMP%] {\n  color: red !important;\n  font-weight: bold;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n\n.section_contenu_container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 400px;\n  flex: 1; \n\n  min-height: 0; \n\n}\n\n.section_contenu_left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n\n.section_favory_produit[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  margin-top: 12px;\n  flex: 1; \n\n  min-height: 0; \n\n}\n\n.section_favory[_ngcontent-%COMP%] {\n  border-right: 1px solid #d1d1d1;\n  height: 100vh;\n}\n\n.section_favory[_ngcontent-%COMP%]   .ul_section_favory[_ngcontent-%COMP%]   .li_section_favory[_ngcontent-%COMP%] {\n  background-color: #CDE3FA;\n  padding: 5px 10px;\n}\n\n.double[_ngcontent-%COMP%]   .icon_favory[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.title_favory[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.titre_categorie[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .category-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-test-btn[_ngcontent-%COMP%], \n.titre_categorie[_ngcontent-%COMP%]   .scan-reload-btn[_ngcontent-%COMP%], \n.titre_categorie[_ngcontent-%COMP%]   .scan-status-btn[_ngcontent-%COMP%], \n.titre_categorie[_ngcontent-%COMP%]   .scan-test-multi-btn[_ngcontent-%COMP%], \n.titre_categorie[_ngcontent-%COMP%]   .scan-reset-btn[_ngcontent-%COMP%] {\n  background: #0672E4;\n  color: white;\n  border: none;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  transition: background-color 0.2s;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-test-btn[_ngcontent-%COMP%]:hover, \n.titre_categorie[_ngcontent-%COMP%]   .scan-reload-btn[_ngcontent-%COMP%]:hover, \n.titre_categorie[_ngcontent-%COMP%]   .scan-status-btn[_ngcontent-%COMP%]:hover, \n.titre_categorie[_ngcontent-%COMP%]   .scan-test-multi-btn[_ngcontent-%COMP%]:hover, \n.titre_categorie[_ngcontent-%COMP%]   .scan-reset-btn[_ngcontent-%COMP%]:hover {\n  background: #0556b3;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-status-btn[_ngcontent-%COMP%] {\n  background: #28a745;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-status-btn[_ngcontent-%COMP%]:hover {\n  background: #1e7e34;\n}\n\n.loading-indicator[_ngcontent-%COMP%], \n.loading-more-indicator[_ngcontent-%COMP%], \n.all-loaded-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 20px;\n  margin: 20px 0;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.loading-indicator[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  color: #6c757d;\n  border: 1px solid #dee2e6;\n}\n\n.loading-more-indicator[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: #1976d2;\n  border: 1px solid #bbdefb;\n}\n\n.all-loaded-indicator[_ngcontent-%COMP%] {\n  background-color: #e8f5e8;\n  color: #2e7d32;\n  border: 1px solid #c8e6c9;\n}\n\n.loading-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.loading-more-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.all-loaded-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n.all-loaded-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  animation: none;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.titre_categorie[_ngcontent-%COMP%]   .scan-test-multi-btn[_ngcontent-%COMP%] {\n  background: #ffc107;\n  color: #212529;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-test-multi-btn[_ngcontent-%COMP%]:hover {\n  background: #e0a800;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-reset-btn[_ngcontent-%COMP%] {\n  background: #dc3545;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-reset-btn[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-status[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #666;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 6px;\n  border-radius: 3px;\n  background: #f0f0f0;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   .scan-status.active[_ngcontent-%COMP%] {\n  color: #28a745;\n  background: #d4edda;\n}\n\n.titre_categorie[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 0;\n  font-weight: 600;\n}\n\n.ul_li_name_categorie[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 7px 10px;\n  margin-bottom: 8px;\n  font-size: 15px;\n  cursor: pointer;\n}\n\n.ul_li_name_categorie[_ngcontent-%COMP%]:hover {\n  background-color: #CDE3FA;\n}\n\n.allCate[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 10px 0;\n  letter-spacing: 0.6px;\n  font-weight: 500;\n}\n\n.section_produit[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: calc(100vh - 75px);\n  min-height: 0; \n\n}\n.section_produit[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n  height: 2px;\n}\n.section_produit[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(6, 114, 228, 0.2);\n  border-radius: 5px;\n}\n.section_produit[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.li_list_produit_select[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 10px;\n  margin: 6px 8px;\n  border-radius: 5px;\n}\n\n.nombre_select[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.name_produit_select[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.price_produit[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.icon_close_select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.icon_close_select[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.icon_close_select[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #ff0000;\n}\n\n\n\n.product-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 1rem;\n  padding: 0 10px 10px;\n}\n\n\n\n.product-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 10px;\n}\n\n\n\n.stock-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  left: 5px;\n  background: #fde047; \n\n  color: #333;\n  font-size: 0.6rem;\n  font-weight: bold;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.product-card.disabled[_ngcontent-%COMP%], \n.li_list.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n\n\n.stock-badge-list[_ngcontent-%COMP%] {\n  background: #fde047; \n\n  color: #333;\n  font-size: 0.8rem;\n  font-weight: bold;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n\n.product-img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  margin-top: 10px;\n}\n\n\n\n.favorite-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 3px;\n  font-size: 1.2rem;\n  color: #0672e4;\n  cursor: pointer;\n}\n\n.favorite-icon.ri-heart-fill[_ngcontent-%COMP%] {\n  color: #0672e4;\n}\n\n.favorite-icon-list[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #0672e4;\n  cursor: pointer;\n}\n\n.favorite-icon-list.ri-heart-fill[_ngcontent-%COMP%] {\n  color: #0672e4;\n}\n\n\n\n.card-body[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0.5rem 0;\n  flex: 1; \n\n}\n\n.product-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin: 0.25rem 0;\n}\n\n.product-stock[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #666;\n  margin: 0.15rem 0;\n}\n\n.product-price[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n  font-size: 13px;\n}\n\n\n\n.btn-decrement[_ngcontent-%COMP%] {\n  border: none;\n  background: #f3f4f6;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  pointer-events: auto !important;\n  z-index: 10;\n}\n\n.btn-decrement[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #333;\n}\n\n.bottom_price_sub[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0 10px;\n}\n\n.section_contenu_right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: rgba(0, 0, 0, 0.04) 0 3px 5px;\n  padding-bottom: 10px;\n  \n\n}\n\n\n\n.list_produit_select[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.list_produit_select[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n.list_produit_select[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n}\n.list_produit_select[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n\n\n.summary_panel[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 4px 10px;\n  margin: 0 10px;\n}\n\n.summary_panel[_ngcontent-%COMP%]   .double_row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.25rem 0;\n}\n\n.summary_panel[_ngcontent-%COMP%]   .double_row.total[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  padding-top: 0.5rem;\n  border-bottom: none;\n}\n\n.double_row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.double_row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n\n\n.keypad[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 5px;\n  padding: 5px 10px;\n}\n\n.keypad[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 3.5rem;\n  background: #f1f5f9;\n  border: none;\n  font-size: 1rem;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n.keypad[_ngcontent-%COMP%]   button.backspace[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n\n\n.btn_content[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.btn-payment[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  margin-bottom: 68px;\n  background: #2978f2;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.name_stock_list[_ngcontent-%COMP%] {\n  line-height: 1.5;\n  padding: 10px;\n}\n\n.product-stock-list[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #666;\n}\n\n.name_stock_list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.moyen_paiement[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.price_du[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.moyen_paiement_restant[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.paiement_btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nul.ul_list[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.li_list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #fff;\n  box-shadow: rgba(100, 100, 111, 0.063) 0px 7px 29px 0px;\n  padding: 0 10px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\n\n.img_product_list[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  margin: 5px 0;\n}\n\n.img_product_list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;\n}\n\n.section_popup_paiement[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 350px;\n  flex: 1;\n  min-height: 0;\n  margin: 30px 80px;\n}\n\n.btn-payment-pop[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  background: #2978f2;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n\n\n.methode_paiement[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 15px;\n  margin: 20px 10px;\n}\n\n.cadre_paiement[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 10px;\n  height: 100px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n  padding: 10px 0;\n  cursor: pointer;\n}\n\n.cadre_paiement[_ngcontent-%COMP%]:hover {\n  border: 0.5px solid #0672e4;\n}\n\n.img_paiement[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  object-fit: cover;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.img_paiement[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.title_paiement[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n\n.title_paiement[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  font-size: 12px;\n}\n\n.montant_paiement[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.double[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.cadre_section_contenu_left_prise[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  padding: 24px;\n  border-radius: 8px;\n  align-items: center;\n}\n\n.section_contenu_left_prise[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.montant_paiement[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n  gap: 8px;\n}\n\n.montant_paiement[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.montant_paiement[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #666;\n}\n\n.moyen_paiement_price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #CDE3FA;\n  gap: 16px;\n  border-radius: 5px;\n  padding: 10px;\n}\n\n.moyen_paiement[_ngcontent-%COMP%] {\n  background: #E6F3FF;\n  border: 1px solid #C1E0FF;\n  border-radius: 8px;\n  padding: 8px 16px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.moyen_paiement.selected[_ngcontent-%COMP%] {\n  background: #D0EBFF;\n  border-color: #90CDF4;\n}\n\n.moyen_paiement[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  color: #333;\n}\n\n.moyen_prise_du[_ngcontent-%COMP%]   .price_du[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 16px;\n  color: #333;\n}\n\n.clear-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #E53E3E;\n  cursor: pointer;\n}\n\n.discount-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 8px;\n}\n\n.btn-currency[_ngcontent-%COMP%], \n.btn-percent[_ngcontent-%COMP%] {\n  background: #F0F0F0;\n  border: 1px solid #b2b2b2;\n  border-radius: 4px;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n.btn-percent[_ngcontent-%COMP%] {\n  padding: 2px 15px;\n}\n\n.btn-currency[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  font-size: 12px !important;\n}\n\n.input-discount[_ngcontent-%COMP%] {\n  width: 100px;\n  border: none;\n  outline: none;\n  text-align: right;\n  font-size: 16px;\n  text-align: center;\n}\n\n.discount-unit[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #333;\n}\n\n.discount-label[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  top: -18px;\n}\n\n.discount-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 10px;\n  color: #666;\n}\n\n.paiement_restant[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 30px;\n}\n\n.btn_facture[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.btn_facture[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.paiement_btn[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 12px;\n  border-radius: 5px;\n}\n\n.paiement_btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.btn_client[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.btn_client[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.double_client_facture[_ngcontent-%COMP%] {\n  gap: 5px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 0 10px;\n}\n\n.double_remise_facture[_ngcontent-%COMP%] {\n  gap: 3px;\n  display: grid;\n  grid-template-columns: 75px 1fr;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background-color: #0672E4 !important;\n  color: white !important;\n}\n.selected[_ngcontent-%COMP%]   .name_categorie[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.selected[_ngcontent-%COMP%]   .nombre[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.selected_mode_pay[_ngcontent-%COMP%] {\n  border: 1px solid #2f7dd1;\n}\n\n.keypad[_ngcontent-%COMP%]   button.btn_keypad_active[_ngcontent-%COMP%] {\n  border: 1px solid #2f7dd1;\n  background-color: #e0efff;\n}\n\n\n\n.cadre_paiement.selected[_ngcontent-%COMP%] {\n  border: 2px solid #4CAF50;\n  background-color: #f0fff4;\n}\n\n.price_du[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.2em;\n}\n\n\n\n.alert-low-stock[_ngcontent-%COMP%] {\n  color: red !important;\n  font-weight: bold;\n}\n\n.safe-stock[_ngcontent-%COMP%] {\n  color: green !important;\n  font-weight: bold;\n}\n\n.barcode-shifted[_ngcontent-%COMP%] {\n  left: 11px;\n  position: relative;\n}\n\n.btn_client.has-selected[_ngcontent-%COMP%] {\n  background-color: #e6f7ff;\n  border: 1px solid #91d5ff;\n}\n\n.clear-customer[_ngcontent-%COMP%]:hover {\n  color: #cf1322;\n}\n\n.selected-client-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.selected-client-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.selected-client-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n}\n\n.paiement_btn[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.clear-customer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 8px;\n  background: white;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;\n  cursor: pointer;\n}\n\n\n\n[draggable][_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n\n\n.popup-header[_ngcontent-%COMP%] {\n  cursor: move;\n}\n\n\n\n.discount-badge[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #c62828;\n  padding: 2px 6px 2px 0;\n  border-radius: 4px;\n  font-size: 9px;\n  margin-left: 5px;\n}\n\n\n\n.edit-discount[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #0672E4;\n}\n.edit-discount[_ngcontent-%COMP%]:hover {\n  color: rgb(4.0384615385, 76.7307692308, 153.4615384615);\n}\n\n\n\n.btn-currency.active[_ngcontent-%COMP%], .btn-percent.active[_ngcontent-%COMP%] {\n  color: #000;\n  background-color: #CDE3FA;\n  border: 1px solid #0672e4;\n}\n\n.global-discount[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  border-bottom: 1px dashed #eee;\n}\n.global-discount[_ngcontent-%COMP%]   .discount-input[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.global-discount[_ngcontent-%COMP%]   .discount-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  background: #f8f8f8;\n  cursor: pointer;\n}\n.global-discount[_ngcontent-%COMP%]   .discount-input[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #0672E4;\n  color: white;\n  border-color: #0672E4;\n}\n.global-discount[_ngcontent-%COMP%]   .discount-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 70px;\n  text-align: center;\n  padding: 6px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.double_row.total[_ngcontent-%COMP%] {\n  border-top: 1px solid #ddd;\n  padding-top: 8px;\n  margin-top: 8px;\n}\n\n.global-active[_ngcontent-%COMP%] {\n  background-color: #e6f7ff !important;\n  border: 1px solid #91d5ff !important;\n}\n\n.scan-error-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  background-color: #ffebee;\n  color: #c62828;\n  padding: 12px 16px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  z-index: 1000;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcy12ZW50ZS5jb21wb25lbnQuc2NzcyIsInBvcC12ZW50ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0doQjtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsc0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QURGRjs7QUNLQTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBREhGO0FDYUk7RUFJRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QURkTjtBQ2dCTTtFQUNFLGNBQUE7QURkUjs7QUN1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FEckJGOztBQ3dCQTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRHRCRjtBQ3dCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FEdEJKO0FDd0JJO0VBSUUsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FEekJOO0FDMkJNO0VBQ0UsY0FBQTtBRHpCUjs7QUNpQ0E7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBRDlCRjs7QUNpQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtB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QUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7QUFtbUJGIiwiZmlsZSI6InBvcy12ZW50ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJy4uL3Bvcy12ZW50ZS9wb3AtdmVudGUuc2NzcycgYXMgKjtcblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLyBDT05URU5VRVxuXG4uc2VjdGlvbl9jb250ZW51X2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQwMHB4O1xuICBmbGV4OiAxOyAgICAgICAgICAvKiBwcmVuZCBs4oCZZXNwYWNlIHJlc3RhbnQgKi9cbiAgbWluLWhlaWdodDogMDsgICAgLyogcGVybWV0IMOgIGxhIGNvbG9ubmUgZGUgZ2F1Y2hlIGRlIHLDqXRyw6ljaXIgKi9cbn1cblxuLnNlY3Rpb25fY29udGVudV9sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMDtcbn1cblxuLnNlY3Rpb25fZmF2b3J5X3Byb2R1aXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyMHB4IDFmcjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgZmxleDogMTsgICAgICAgICAgLyogb2NjdXBlIHRvdXRlIGxhIGhhdXRldXIgZGlzcG8gKi9cbiAgbWluLWhlaWdodDogMDsgICAgLyogcGVybWV0IGxhIHLDqXRyYWN0aW9uIHN1ciBs4oCZYXhlIHZlcnRpY2FsICovXG59XG5cblxuLnNlY3Rpb25fZmF2b3J5IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QxZDFkMTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnNlY3Rpb25fZmF2b3J5IC51bF9zZWN0aW9uX2Zhdm9yeSAubGlfc2VjdGlvbl9mYXZvcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RFM0ZBO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuLmRvdWJsZSAuaWNvbl9mYXZvcnkgaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRpdGxlX2Zhdm9yeSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRpdHJlX2NhdGVnb3JpZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnRpdHJlX2NhdGVnb3JpZSAuY2F0ZWdvcnktaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tdGVzdC1idG4sXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXJlbG9hZC1idG4sXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXN0YXR1cy1idG4sXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXRlc3QtbXVsdGktYnRuLFxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi1yZXNldC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjMDY3MkU0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi10ZXN0LWJ0bjpob3Zlcixcbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tcmVsb2FkLWJ0bjpob3Zlcixcbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tc3RhdHVzLWJ0bjpob3Zlcixcbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tdGVzdC1tdWx0aS1idG46aG92ZXIsXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXJlc2V0LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwNTU2YjM7XG59XG5cbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tc3RhdHVzLWJ0biB7XG4gIGJhY2tncm91bmQ6ICMyOGE3NDU7XG59XG5cbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tc3RhdHVzLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxZTdlMzQ7XG59XG5cbi8vIEluZGljYXRldXJzIGRlIGNoYXJnZW1lbnQgZXQgZCfDqXRhdFxuLmxvYWRpbmctaW5kaWNhdG9yLFxuLmxvYWRpbmctbW9yZS1pbmRpY2F0b3IsXG4uYWxsLWxvYWRlZC1pbmRpY2F0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMjBweCAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5sb2FkaW5nLW1vcmUtaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcbiAgY29sb3I6ICMxOTc2ZDI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmRlZmI7XG59XG5cbi5hbGwtbG9hZGVkLWluZGljYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGY1ZTg7XG4gIGNvbG9yOiAjMmU3ZDMyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhlNmM5O1xufVxuXG4ubG9hZGluZy1pbmRpY2F0b3IgaSxcbi5sb2FkaW5nLW1vcmUtaW5kaWNhdG9yIGksXG4uYWxsLWxvYWRlZC1pbmRpY2F0b3IgaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLmFsbC1sb2FkZWQtaW5kaWNhdG9yIGkge1xuICBhbmltYXRpb246IG5vbmU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi10ZXN0LW11bHRpLWJ0biB7XG4gIGJhY2tncm91bmQ6ICNmZmMxMDc7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXRlc3QtbXVsdGktYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2UwYTgwMDtcbn1cblxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi1yZXNldC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xufVxuXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXJlc2V0LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjODIzMzM7XG59XG5cbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbn1cblxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi1zdGF0dXMuYWN0aXZlIHtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIGJhY2tncm91bmQ6ICNkNGVkZGE7XG59XG5cbi50aXRyZV9jYXRlZ29yaWUgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnVsX2xpX25hbWVfY2F0ZWdvcmllIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVsX2xpX25hbWVfY2F0ZWdvcmllOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NERTNGQTtcbn1cblxuLmFsbENhdGUge1xuICBjdXJzb3I6IHBvaW50ZXI7IFxuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8vIC5hbGxDYXRlOmhvdmVyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI0NERTNGQTtcbi8vIH1cblxuLy8vLy8vLy8vLy8vLyBQUk9EVUlUIFxuXG4uc2VjdGlvbl9wcm9kdWl0IHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDc1cHgpO1xuICBtaW4taGVpZ2h0OiAwOyAgICAvKiBzYW5zIMOnYSwgb3ZlcmZsb3cgbmUgc+KAmWFjdGl2ZSBwYXMgKi9cblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDRweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNiwgMTE0LCAyMjgsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC8vIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG4ubGlfbGlzdF9wcm9kdWl0X3NlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIG1hcmdpbjogNnB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubm9tYnJlX3NlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm5hbWVfcHJvZHVpdF9zZWxlY3QgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnByaWNlX3Byb2R1aXQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pY29uX2Nsb3NlX3NlbGVjdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb25fY2xvc2Vfc2VsZWN0IGkge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pY29uX2Nsb3NlX3NlbGVjdCBpOmhvdmVyIHtcbiAgY29sb3I6ICNmZjAwMDA7XG59XG5cbi8qIGdyaWxsZSByZXNwb25zaXZlICovXG4ucHJvZHVjdC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTgwcHgsIDFmcikpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNTBweCwgMWZyKSk7XG4gIGdhcDogMXJlbTtcbiAgLy8gcGFkZGluZzogMXJlbTtcbiAgcGFkZGluZzogMCAxMHB4IDEwcHg7XG59XG5cbi8qIGNhcnRlIHByb2R1aXQgKi9cbi5wcm9kdWN0LWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4vKiBwYXN0aWxsZSBkZSBzdG9jayAqL1xuLnN0b2NrLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmRlMDQ3OyAvKiBqYXVuZSBjbGFpciAqL1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJvZHVjdC1jYXJkLmRpc2FibGVkLFxuLmxpX2xpc3QuZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vKiBwYXN0aWxsZSBkZSBzdG9jayAqL1xuLnN0b2NrLWJhZGdlLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiAjZmRlMDQ3OyAvKiBqYXVuZSBjbGFpciAqL1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBpbWFnZSAqL1xuLnByb2R1Y3QtaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDFweCAycHggMHB4O1xufVxuXG4vKiBjxZN1ciBmYXZvcmkgKi9cbi5mYXZvcml0ZS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJweDtcbiAgcmlnaHQ6IDNweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjMDY3MmU0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmF2b3JpdGUtaWNvbi5yaS1oZWFydC1maWxsIHtcbiAgY29sb3I6ICMwNjcyZTQ7XG59XG4uZmF2b3JpdGUtaWNvbi1saXN0IHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjMDY3MmU0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmF2b3JpdGUtaWNvbi1saXN0LnJpLWhlYXJ0LWZpbGwge1xuICBjb2xvcjogIzA2NzJlNDtcbn1cblxuLyogem9uZSB0ZXh0ZSAqL1xuLmNhcmQtYm9keSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgZmxleDogMTsgLyogcG91c3NlIGxlIGJvdXRvbiBlbiBiYXMgKi9cbn1cbi5wcm9kdWN0LW5hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDAuMjVyZW0gMDtcbn1cbi5wcm9kdWN0LXN0b2NrIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luOiAwLjE1cmVtIDA7XG59XG4ucHJvZHVjdC1wcmljZSBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4vKiBib3V0b24gZGUgZMOpY3LDqW1lbnRhdGlvbiAqL1xuLmJ0bi1kZWNyZW1lbnQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmM2Y0ZjY7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDtcbiAgei1pbmRleDogMTA7XG59XG4uYnRuLWRlY3JlbWVudCBpIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uYm90dG9tX3ByaWNlX3N1YiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuXG4uc2VjdGlvbl9jb250ZW51X3JpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAvLyBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDQpIDAgM3B4IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIC8qIGhhdXRldXIgZ8OpcsOpZSBwYXIgbGUgcGFyZW50ICovXG59XG5cbi8qIDEuIExhIGxpc3RlIHByb2R1aXQgKHR1IGwnYXMgZMOpasOgKSAqL1xuLmxpc3RfcHJvZHVpdF9zZWxlY3Qge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIC8vIHBhZGRpbmc6IDFyZW07XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA0cHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLy8gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbi8qIDIuIExlIHLDqXN1bcOpICovXG4uc3VtbWFyeV9wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5zdW1tYXJ5X3BhbmVsIC5kb3VibGVfcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwLjI1cmVtIDA7XG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwO1xufVxuLnN1bW1hcnlfcGFuZWwgLmRvdWJsZV9yb3cudG90YWwge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5kb3VibGVfcm93IHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uZG91YmxlX3JvdyBzdHJvbmcge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qIDMuIENsYXZpZXIgKi9cbi5rZXlwYWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBnYXA6IDVweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4ua2V5cGFkIGJ1dHRvbiB7XG4gIGhlaWdodDogMy41cmVtO1xuICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ua2V5cGFkIGJ1dHRvbi5iYWNrc3BhY2Uge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLyogNC4gQm91dG9uIFBhaWVtZW50ICovXG4uYnRuX2NvbnRlbnQge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5idG4tcGF5bWVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICAvLyBtYXJnaW46IDAgMXJlbSAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiA2OHB4O1xuICBiYWNrZ3JvdW5kOiAjMjk3OGYyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hbWVfc3RvY2tfbGlzdCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wcm9kdWN0LXN0b2NrLWxpc3Qge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ubmFtZV9zdG9ja19saXN0IHAsXG4ubW95ZW5fcGFpZW1lbnQgcCxcbi5wcmljZV9kdSBwLFxuLm1veWVuX3BhaWVtZW50X3Jlc3RhbnQgcCxcbi5wYWllbWVudF9idG4gcCBcbntcbiAgbWFyZ2luOiAwO1xufVxuXG51bC51bF9saXN0IHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5saV9saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMDYzKSAwcHggN3B4IDI5cHggMHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmltZ19wcm9kdWN0X2xpc3Qge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmltZ19wcm9kdWN0X2xpc3QgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMHB4IDBweCAxcHg7XG59XG5cbi5zZWN0aW9uX3BvcHVwX3BhaWVtZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzUwcHg7XG4gIGZsZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIG1hcmdpbjogMzBweCA4MHB4O1xufVxuXG4uYnRuLXBheW1lbnQtcG9wIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIC8vIG1hcmdpbjogMCAxcmVtIDFyZW07XG4gIC8vIG1hcmdpbi1ib3R0b206IDY4cHg7XG4gIGJhY2tncm91bmQ6ICMyOTc4ZjI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBpbWFnZSAqL1xuXG4ubWV0aG9kZV9wYWllbWVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDkwcHgsIDFmcikpO1xuXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogMTVweDtcbiAgbWFyZ2luOiAyMHB4IDEwcHg7XG59XG5cbi5jYWRyZV9wYWllbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDZweCAyNHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMHB4IDBweCAxcHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FkcmVfcGFpZW1lbnQ6aG92ZXIge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICMwNjcyZTQ7XG59XG5cbi5pbWdfcGFpZW1lbnQge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vLyAuaW1nX3BhaWVtZW50X2NvbXB0ZSB7XG4vLyAgIHdpZHRoOiA2MHB4O1xuLy8gICBoZWlnaHQ6IDYwcHg7XG4vLyB9XG5cbi8vIC5pbWdfcGFpZW1lbnRfY2FydGUge1xuLy8gICB3aWR0aDogNjBweDtcbi8vICAgaGVpZ2h0OiA2MHB4O1xuLy8gfVxuXG4uaW1nX3BhaWVtZW50IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50aXRsZV9wYWllbWVudCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi50aXRsZV9wYWllbWVudCBwIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1vbnRhbnRfcGFpZW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5kb3VibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyBnYXA6IDVweDtcbiAgLy8gcGFkZGluZzogMCAxMHB4O1xufVxuXG4uY2FkcmVfc2VjdGlvbl9jb250ZW51X2xlZnRfcHJpc2Uge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VjdGlvbl9jb250ZW51X2xlZnRfcHJpc2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG59XG5cbi5tb250YW50X3BhaWVtZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZ2FwOiA4cHg7XG59XG5cbi5tb250YW50X3BhaWVtZW50IGgxIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5tb250YW50X3BhaWVtZW50IHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ubW95ZW5fcGFpZW1lbnRfcHJpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNDREUzRkE7XG4gIGdhcDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vLyAubW95ZW5fcGFpZW1lbnRfcHJpY2Uge1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICBwYWRkaW5nOiAxMHB4O1xuLy8gfVxuXG4ubW95ZW5fcGFpZW1lbnQge1xuICAvLyBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjRTZGM0ZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQzFFMEZGO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1veWVuX3BhaWVtZW50LnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogI0QwRUJGRjtcbiAgYm9yZGVyLWNvbG9yOiAjOTBDREY0O1xufVxuXG4ubW95ZW5fcGFpZW1lbnQgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuLm1veWVuX3ByaXNlX2R1IC5wcmljZV9kdSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uY2xlYXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNFNTNFM0U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRpc2NvdW50LWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuXG4uYnRuLWN1cnJlbmN5LFxuLmJ0bi1wZXJjZW50IHtcbiAgYmFja2dyb3VuZDogI0YwRjBGMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2IyYjJiMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1wZXJjZW50IHtcbiAgcGFkZGluZzogMnB4IDE1cHg7XG59XG5cbi5idG4tY3VycmVuY3kge1xuICBwYWRkaW5nOiA1cHggMTJweDtcbiAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcbn1cblxuLmlucHV0LWRpc2NvdW50IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpc2NvdW50LXVuaXQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZGlzY291bnQtbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMThweDtcbn1cblxuLmRpc2NvdW50LWxhYmVsIHAge1xuICBtYXJnaW46IDRweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5wYWllbWVudF9yZXN0YW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDMwcHg7XG59XG5cbi5idG5fZmFjdHVyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJ0bl9mYWN0dXJlIGlucHV0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGFpZW1lbnRfYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucGFpZW1lbnRfYnRuIHAge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5idG5fY2xpZW50IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuX2NsaWVudCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZG91YmxlX2NsaWVudF9mYWN0dXJlIHtcbiAgLy8gZGlzcGxheTogZmxleDtcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLmRvdWJsZV9yZW1pc2VfZmFjdHVyZSB7XG4gIGdhcDogM3B4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc1cHggMWZyO1xufVxuXG4uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBcbiAgLm5hbWVfY2F0ZWdvcmllIHNwYW4sXG4gIC5ub21icmUge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5zZWxlY3RlZF9tb2RlX3BheSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZjdkZDE7XG59XG5cbi5rZXlwYWQgYnV0dG9uLmJ0bl9rZXlwYWRfYWN0aXZlIHtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgIzA2NzJFNDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0MxRTBGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJmN2RkMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZWZmZjtcbn1cblxuLyogU3R5bGUgcG91ciBsZXMgbcOpdGhvZGVzIGRlIHBhaWVtZW50IHPDqWxlY3Rpb25uw6llcyAqL1xuLmNhZHJlX3BhaWVtZW50LnNlbGVjdGVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzRDQUY1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmZmNDtcbn1cblxuLnByaWNlX2R1IHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLy8gLmtleXBhZCBidXR0b246Zm9jdXMge1xuLy8gICBvdXRsaW5lOiAycHggc29saWQgIzA2NzJFNDtcbi8vICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbi8vIH1cblxuLyogRGFucyB0b24gZmljaGllciAuY29tcG9uZW50LmNzcyBvdSBnbG9iYWwgKi9cbi5hbGVydC1sb3ctc3RvY2sge1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2FmZS1zdG9jayB7XG4gIGNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5iYXJjb2RlLXNoaWZ0ZWQge1xuICBsZWZ0OiAxMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idG5fY2xpZW50Lmhhcy1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmY3ZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MWQ1ZmY7XG59XG5cbi8vIC5jbGVhci1jdXN0b21lciB7XG4vLyAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgY29sb3I6ICNmZjRkNGY7XG4vLyB9XG5cbi5jbGVhci1jdXN0b21lcjpob3ZlciB7XG4gIGNvbG9yOiAjY2YxMzIyO1xufVxuXG4uc2VsZWN0ZWQtY2xpZW50LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2VsZWN0ZWQtY2xpZW50LWluZm8gc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnNlbGVjdGVkLWNsaWVudC1pbmZvIHNtYWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLnBhaWVtZW50X2J0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNsZWFyLWN1c3RvbWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvLyBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAwcHggMHB4IDFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBQZXJtZXR0cmUgbGUgZMOpcGxhY2VtZW50IHNhbnMgc8OpbGVjdGlvbiBkZSB0ZXh0ZSAqL1xuW2RyYWdnYWJsZV0ge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLyogQ3Vyc2V1ciBwb3VyIGxlcyB6b25lcyBkw6lwbGHDp2FibGVzICovXG4ucG9wdXAtaGVhZGVyIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuXG4vKiBTdHlsZXMgcG91ciBsZXMgYmFkZ2VzIGRlIHJlbWlzZSAqL1xuLmRpc2NvdW50LWJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcbiAgY29sb3I6ICNjNjI4Mjg7XG4gIHBhZGRpbmc6IDJweCA2cHggMnB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiA5cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi8qIEJvdXRvbiBkJ8OpZGl0aW9uIGRlIHJlbWlzZSAqL1xuLmVkaXQtZGlzY291bnQge1xuICAvLyBtYXJnaW4tbGVmdDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzA2NzJFNDtcbiAgXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiBkYXJrZW4oIzA2NzJFNCwgMTUlKTtcbiAgfVxufVxuXG4vLyAuZWRpdC1kaXNjb3VudCBpIHtcbi8vICAgZm9udC1zaXplOiAxNHB4O1xuLy8gfVxuXG4vKiBTdHlsZSBhY3RpZiBwb3VyIGxlcyBib3V0b25zIENGQS8lICovXG4uYnRuLWN1cnJlbmN5LmFjdGl2ZSwgLmJ0bi1wZXJjZW50LmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RFM0ZBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDY3MmU0O1xufVxuXG4vLyBwb3MtdmVudGUuY29tcG9uZW50LnNjc3Ncbi5nbG9iYWwtZGlzY291bnQge1xuICBwYWRkaW5nOiA4cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZWVlO1xuXG4gIC5kaXNjb3VudC1pbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDhweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIGJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBcbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzA2NzJFNDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItY29sb3I6ICMwNjcyRTQ7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gIH1cbn1cblxuLmRvdWJsZV9yb3cudG90YWwge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4vLyBJbmRpY2F0ZXVyIHZpc3VlbFxuLmdsb2JhbC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmN2ZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MWQ1ZmYgIWltcG9ydGFudDtcbn1cblxuLy8gcG9zLXZlbnRlLmNvbXBvbmVudC5zY3NzXG4uc2Nhbi1lcnJvci10b2FzdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcbiAgY29sb3I6ICNjNjI4Mjg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgei1pbmRleDogMTAwMDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwwLDAsMC4yKTtcbn0iLCIvLyBAaW1wb3J0ICcvc3JjL2FwcC9hZG1pbi1wYWdlL2NsaWVudHMvYWRkQ2xpZW50L2FkZC1jbGllbnRzL2FkZC1jbGllbnRzLmNvbXBvbmVudC5zY3NzJztcblxuLy8gcGF5bWVudCBwb3B1cCBvdmVybGF5XG4ucGF5bWVudC1wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjczMyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ucGF5bWVudC1wb3B1cCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogODUlO1xuICAvLyBtYXgtd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDkwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAucG9wdXAtaGVhZGVyIHtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIHBhZGRpbmc6IDIwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICBcbiAgICAuY2xvc2UtYnRuIHtcbiAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIC8vIHRvcDogMTBweDtcbiAgICAgIC8vIHJpZ2h0OiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICB9XG4gIFxufVxuXG4vLyBsaXN0IGNsaWVudCBwb3B1cCBvdmVybGF5XG4ubGlzdC1jbGllbnQtcG9wdXAtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MzMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmxpc3QtY2xpZW50LXBvcHVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA5MCU7XG4gIC8vIG1heC13aWR0aDogODAwcHg7XG4gIGhlaWdodDogOTB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gIC5wb3B1cC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgXG4gICAgLmNsb3NlLWJ0biB7XG4gICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAvLyB0b3A6IDEwcHg7XG4gICAgICAvLyByaWdodDogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgfVxuICBcbn1cblxuLmRldGFpbC1wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmRldGFpbC1pbWFnZSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbn1cblxuLmRldGFpbC1wb3B1cCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsMCwwLDAuMyk7XG5cbiAgLnBvcHVwLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcblxuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLmNsb3NlLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLnBvcHVwLWJvZHkge1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcblxuICAgIC5zaG9wLW5hbWUge1xuICAgICAgbWFyZ2luOiAwIDAgMXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLmRldGFpbC1ncmlkIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gICAgICBnYXA6IDEuNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICB9XG5cbiAgICAuZGV0YWlsLWluZm8ge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDI1MHB4IDFmcjtcbiAgICAgICAgcm93LWdhcDogMC43NXJlbTtcbiAgICAgICAgY29sdW1uLWdhcDogNHJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgICAgICAuaW5mby1yb3cge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudmFsdWUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgLmRldGFpbC1kZXNjcmlwdGlvbiB7XG4gICAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7XG4gICAgICAubGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgIH1cbiAgICAgIC52YWx1ZSB7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnBvcHVwLWFjdGlvbnMge1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAuYnRuLWFkZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDY3MmU0O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMC42cmVtIDEuMnJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0NWEwNDk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIETDqXNhY3RpdmVyIGxlIGJvdXRvbiBxdWFuZCBsZSBtb250YW50IGVzdCBpbnN1ZmZpc2FudCAqL1xuLmJ0bi1wYXltZW50LXBvcDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGNvbG9yOiAjYWNhY2FjO1xufVxuXG4vLy8vLy8vLy8vLy8vLyBQb3AgVXAgY2xpZW50IHBvdXIgbGVzIGxpc3RcblxuLmJ0bkFkZENsaWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cblxuLmJ0bkFkZENsaWVudCBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyZTQ7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRyIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbnRkIHtcbiAgcGFkZGluZzogMThweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDk0O1xufVxuICBcbnRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkOTQ7XG4gICAgcGFkZGluZzogMTJweCA4cHg7XG59XG4gIFxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuICBcbnRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4vKiBTdHlsZSBkZSBsJ2ltYWdlIGNpcmN1bGFpcmUgaW1nIGxpc3QgKi9cbi5pbWdDbGllbnQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltZ0NsaWVudCBpbWcge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG5cbi5pbWdDbGllbnQ6aG92ZXIgaW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBFZmZldCB6b29tIGF1IHN1cnZvbCAqL1xufVxuXG4ubm8tY2xpZW50LW1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiAjODg4O1xufVxuXG4uaW5wdXRTZWFyY2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlucHV0U2VhcmNoIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmlucHV0U2VhcmNoIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLyogQWpvdXRlciDDoCBsYSBmaW4gZHUgZmljaGllciBTQ1NTICovXG5cbi8vIFBvcHVwIGQnYWpvdXQgZGUgY2xpZW50XG4uYWRkLWNsaWVudC1wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MzMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMTtcbn1cblxuLmFkZC1jbGllbnQtcG9wdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNzAwcHg7XG4gIGhlaWdodDogODN2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICAucG9wdXAtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgIFxuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgXG4gICAgLmNsb3NlLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLnBvcHVwLWJvZHkge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogMTVweDtcblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIHdpZHRoOiA0cHg7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICB9XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgLy8gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICBcbiAgICAuYWRkLWNsaWVudC1mb3JtIHtcbiAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweCAxNXB4O1xuICAgICAgICBcbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaW5wdXQsIHRleHRhcmVhIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDY3MmU0O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNiwgMTE0LCAyMjgsIDAuMjUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jbGllbnQtdHlwZS1zZWxlY3RvciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8vIGdhcDogMTBweDtcbiAgICAgICAgXG4gICAgICAgIC5jbGllbnQtdHlwZS1idG4ge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgICAgICAgXG4gICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzA2NzJlNDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnBob3RvLXVwbG9hZCB7XG4gICAgICAgIC5waG90by1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgI2NlZDRkYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIFxuICAgICAgICAgIGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAucG9wdXAtYWN0aW9ucyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBib3gtc2hhZG93OiAwIC0ycHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICBcbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLmJ0bi1jYW5jZWwge1xuICAgICAgcGFkZGluZzogOHB4IDMwcHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDcwNDA0O1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuYnRuLXNhdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJlNDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTVjYjk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vLy8vLy8vLy8vLyBBZGQgY2xpZW50IFxuXG4uZG91YmxlX2lucHV0IHtcbiAgLy8gZGlzcGxheTogZmxleDsgXG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vIGdhcDogMjBweDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gIGdyaWQtcm93LWdhcDogMHB4O1xuICBnYXA6IDEwcHg7XG4gIC8vIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5ncmlkX2NvbG9ubmUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gIGdyaWQtcm93LWdhcDogMHB4O1xuICBnYXA6IDIwcHg7XG59XG5cbi5jaGFtcF9pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmlucHV0X2ZvY3VzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIG1pbi13aWR0aDogMjUwcHg7XG4gIGhlaWdodDogNDlweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLy9wYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjNjk1YzVjO1xufVxuICBcbi5jaGFtcF9pbnB1dCAubGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjJweDtcbiAgbGVmdDogNHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY29sb3I6IHJnYigxMDcsIDEwMiwgMTAyKTtcbn1cblxuLmlucHV0X2ZvY3VzOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4gIFxuICBcbi5pbnB1dF9mb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbi5pbnB1dF9mb2N1czpmb2N1cyArIC5sYWJlbCB7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICB0b3A6IDVweDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5pbnB1dF9mb2N1czpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2hhbXBfaW5wdXRfaW52ZW50YWlyZSB7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbn1cblxuLmNoYW1wX2lucHV0X2ludmVudGFpcmUgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4vKiBNYXNxdWVyIGwnaW5wdXQgY2hlY2tib3ggb3JpZ2luYWwgKi9cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBMZSDCqyBzbGlkZXIgwrsgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwOyBsZWZ0OiAwOyByaWdodDogMDsgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICB0cmFuc2l0aW9uOiAuNHM7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDE4cHg7IFxuICB3aWR0aDogMThweDtcbiAgbGVmdDogM3B4OyBcbiAgYm90dG9tOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAuNHM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogUXVhbmQgbGUgY2hlY2tib3ggZXN0IGNvY2jDqSAqL1xuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0OyAvKiBDb3VsZXVyIGF1IGNob2l4ICovXG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLmlucHV0X2N1cnNvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNsaWVudC10eXBlLXNlbGVjdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBcbiAgLmNsaWVudC10eXBlLWJ0biB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwNjcyZTQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG59XG5cbi5ub21icmVDb3VudCB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xNXB4O1xuICAgIHJpZ2h0OiAtOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGRpc3BsYXk6IGZsZXhcbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHJpZ2h0OiAtOXB4O1xufVxuXG4ubm9tYnJlQ291bnQgc3BhbiB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgLy8gcGFkZGluZzogNHB4O1xufVxuXG4uYmFycmUge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzZjtcbiAgICBtYXJnaW46IDhweCAxMHB4O1xufVxuXG4uY29udGVudEljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50SWNvbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmN2ZmOyAvKiBDb3VsZXVyIGRlIGZvbmQgcG91ciBsJ8OpbMOpbWVudCBhY3RpZiAqL1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTg5MGZmOyAvKiBCb3JkdXJlIHBvdXIgbCfDqWzDqW1lbnQgYWN0aWYgKi9cbn1cblxuLmNvbnRlbnRJY29uLmFjdGl2ZSBpIHtcbiAgY29sb3I6ICMxODkwZmY7IC8qIENvdWxldXIgZGUgbCdpY8O0bmUgYWN0aXZlICovXG59XG5cbi5jb250ZW50SWNvbjpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1OyAvKiBFZmZldCBob3ZlciBwb3VyIGxlcyDDqWzDqW1lbnRzIG5vbiBhY3RpZnMgKi9cbn1cblxuLmRhdGUtcmVkIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDsgXG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUE9TL3Bvcy12ZW50ZS9wb3MtdmVudGUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL1BPUy9wb3MtdmVudGUvcG9wLXZlbnRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR2hCO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBREZGOztBQ0tBO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FESEY7QUNhSTtFQUlFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBRGROO0FDZ0JNO0VBQ0UsY0FBQTtBRGRSOztBQ3VCQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsc0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QURyQkY7O0FDd0JBO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEdEJGO0FDd0JFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QUR0Qko7QUN3Qkk7RUFJRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUR6Qk47QUMyQk07RUFDRSxjQUFBO0FEekJSOztBQ2lDQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJB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b0NBQUE7QUFvbUJGOztBQWhtQkE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtBQW1tQkY7QUFDQSw0LzVEQUE0LzVEIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnLi4vcG9zLXZlbnRlL3BvcC12ZW50ZS5zY3NzJyBhcyAqO1xuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vIENPTlRFTlVFXG5cbi5zZWN0aW9uX2NvbnRlbnVfY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNDAwcHg7XG4gIGZsZXg6IDE7ICAgICAgICAgIC8qIHByZW5kIGzDosKAwpllc3BhY2UgcmVzdGFudCAqL1xuICBtaW4taGVpZ2h0OiAwOyAgICAvKiBwZXJtZXQgw4PCoCBsYSBjb2xvbm5lIGRlIGdhdWNoZSBkZSByw4PCqXRyw4PCqWNpciAqL1xufVxuXG4uc2VjdGlvbl9jb250ZW51X2xlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAwO1xufVxuXG4uc2VjdGlvbl9mYXZvcnlfcHJvZHVpdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIwcHggMWZyO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBmbGV4OiAxOyAgICAgICAgICAvKiBvY2N1cGUgdG91dGUgbGEgaGF1dGV1ciBkaXNwbyAqL1xuICBtaW4taGVpZ2h0OiAwOyAgICAvKiBwZXJtZXQgbGEgcsODwql0cmFjdGlvbiBzdXIgbMOiwoDCmWF4ZSB2ZXJ0aWNhbCAqL1xufVxuXG5cbi5zZWN0aW9uX2Zhdm9yeSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkMWQxZDE7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5zZWN0aW9uX2Zhdm9yeSAudWxfc2VjdGlvbl9mYXZvcnkgLmxpX3NlY3Rpb25fZmF2b3J5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NERTNGQTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbi5kb3VibGUgLmljb25fZmF2b3J5IGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi50aXRsZV9mYXZvcnkge1xuICBtYXJnaW46IDA7XG59XG5cbi50aXRyZV9jYXRlZ29yaWUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi50aXRyZV9jYXRlZ29yaWUgLmNhdGVnb3J5LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi1jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXRlc3QtYnRuLFxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi1yZWxvYWQtYnRuLFxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi1zdGF0dXMtYnRuLFxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi10ZXN0LW11bHRpLWJ0bixcbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tcmVzZXQtYnRuIHtcbiAgYmFja2dyb3VuZDogIzA2NzJFNDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG59XG5cbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tdGVzdC1idG46aG92ZXIsXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXJlbG9hZC1idG46aG92ZXIsXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXN0YXR1cy1idG46aG92ZXIsXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXRlc3QtbXVsdGktYnRuOmhvdmVyLFxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi1yZXNldC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDU1NmIzO1xufVxuXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXN0YXR1cy1idG4ge1xuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xufVxuXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXN0YXR1cy1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMWU3ZTM0O1xufVxuXG4vLyBJbmRpY2F0ZXVycyBkZSBjaGFyZ2VtZW50IGV0IGQnw4PCqXRhdFxuLmxvYWRpbmctaW5kaWNhdG9yLFxuLmxvYWRpbmctbW9yZS1pbmRpY2F0b3IsXG4uYWxsLWxvYWRlZC1pbmRpY2F0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMjBweCAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5sb2FkaW5nLW1vcmUtaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcbiAgY29sb3I6ICMxOTc2ZDI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmRlZmI7XG59XG5cbi5hbGwtbG9hZGVkLWluZGljYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGY1ZTg7XG4gIGNvbG9yOiAjMmU3ZDMyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhlNmM5O1xufVxuXG4ubG9hZGluZy1pbmRpY2F0b3IgaSxcbi5sb2FkaW5nLW1vcmUtaW5kaWNhdG9yIGksXG4uYWxsLWxvYWRlZC1pbmRpY2F0b3IgaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLmFsbC1sb2FkZWQtaW5kaWNhdG9yIGkge1xuICBhbmltYXRpb246IG5vbmU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi10ZXN0LW11bHRpLWJ0biB7XG4gIGJhY2tncm91bmQ6ICNmZmMxMDc7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXRlc3QtbXVsdGktYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2UwYTgwMDtcbn1cblxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi1yZXNldC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xufVxuXG4udGl0cmVfY2F0ZWdvcmllIC5zY2FuLXJlc2V0LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjODIzMzM7XG59XG5cbi50aXRyZV9jYXRlZ29yaWUgLnNjYW4tc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbn1cblxuLnRpdHJlX2NhdGVnb3JpZSAuc2Nhbi1zdGF0dXMuYWN0aXZlIHtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIGJhY2tncm91bmQ6ICNkNGVkZGE7XG59XG5cbi50aXRyZV9jYXRlZ29yaWUgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnVsX2xpX25hbWVfY2F0ZWdvcmllIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVsX2xpX25hbWVfY2F0ZWdvcmllOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NERTNGQTtcbn1cblxuLmFsbENhdGUge1xuICBjdXJzb3I6IHBvaW50ZXI7IFxuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8vIC5hbGxDYXRlOmhvdmVyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI0NERTNGQTtcbi8vIH1cblxuLy8vLy8vLy8vLy8vLyBQUk9EVUlUIFxuXG4uc2VjdGlvbl9wcm9kdWl0IHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDc1cHgpO1xuICBtaW4taGVpZ2h0OiAwOyAgICAvKiBzYW5zIMODwqdhLCBvdmVyZmxvdyBuZSBzw6LCgMKZYWN0aXZlIHBhcyAqL1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNHB4O1xuICAgIGhlaWdodDogMnB4O1xuICB9XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2LCAxMTQsIDIyOCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLy8gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbi5saV9saXN0X3Byb2R1aXRfc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgbWFyZ2luOiA2cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5ub21icmVfc2VsZWN0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubmFtZV9wcm9kdWl0X3NlbGVjdCBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucHJpY2VfcHJvZHVpdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmljb25fY2xvc2Vfc2VsZWN0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbl9jbG9zZV9zZWxlY3QgaSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmljb25fY2xvc2Vfc2VsZWN0IGk6aG92ZXIge1xuICBjb2xvcjogI2ZmMDAwMDtcbn1cblxuLyogZ3JpbGxlIHJlc3BvbnNpdmUgKi9cbi5wcm9kdWN0LWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxODBweCwgMWZyKSk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcbiAgZ2FwOiAxcmVtO1xuICAvLyBwYWRkaW5nOiAxcmVtO1xuICBwYWRkaW5nOiAwIDEwcHggMTBweDtcbn1cblxuLyogY2FydGUgcHJvZHVpdCAqL1xuLnByb2R1Y3QtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjA1KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi8qIHBhc3RpbGxlIGRlIHN0b2NrICovXG4uc3RvY2stYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZGUwNDc7IC8qIGphdW5lIGNsYWlyICovXG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm9kdWN0LWNhcmQuZGlzYWJsZWQsXG4ubGlfbGlzdC5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qIHBhc3RpbGxlIGRlIHN0b2NrICovXG4uc3RvY2stYmFkZ2UtbGlzdCB7XG4gIGJhY2tncm91bmQ6ICNmZGUwNDc7IC8qIGphdW5lIGNsYWlyICovXG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIGltYWdlICovXG4ucHJvZHVjdC1pbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMXB4IDJweCAwcHg7XG59XG5cbi8qIGPDhcKTdXIgZmF2b3JpICovXG4uZmF2b3JpdGUtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7XG4gIHJpZ2h0OiAzcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogIzA2NzJlNDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZhdm9yaXRlLWljb24ucmktaGVhcnQtZmlsbCB7XG4gIGNvbG9yOiAjMDY3MmU0O1xufVxuLmZhdm9yaXRlLWljb24tbGlzdCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogIzA2NzJlNDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZhdm9yaXRlLWljb24tbGlzdC5yaS1oZWFydC1maWxsIHtcbiAgY29sb3I6ICMwNjcyZTQ7XG59XG5cbi8qIHpvbmUgdGV4dGUgKi9cbi5jYXJkLWJvZHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMC41cmVtIDA7XG4gIGZsZXg6IDE7IC8qIHBvdXNzZSBsZSBib3V0b24gZW4gYmFzICovXG59XG4ucHJvZHVjdC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwLjI1cmVtIDA7XG59XG4ucHJvZHVjdC1zdG9jayB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbjogMC4xNXJlbSAwO1xufVxuLnByb2R1Y3QtcHJpY2UgcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLyogYm91dG9uIGRlIGTDg8KpY3LDg8KpbWVudGF0aW9uICovXG4uYnRuLWRlY3JlbWVudCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2YzZjRmNjtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb2ludGVyLWV2ZW50czogYXV0byAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxMDtcbn1cbi5idG4tZGVjcmVtZW50IGkge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5ib3R0b21fcHJpY2Vfc3ViIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG5cbi5zZWN0aW9uX2NvbnRlbnVfcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8vIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNCkgMCAzcHggNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgLyogaGF1dGV1ciBnw4PCqXLDg8KpZSBwYXIgbGUgcGFyZW50ICovXG59XG5cbi8qIDEuIExhIGxpc3RlIHByb2R1aXQgKHR1IGwnYXMgZMODwqlqw4PCoCkgKi9cbi5saXN0X3Byb2R1aXRfc2VsZWN0IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAvLyBwYWRkaW5nOiAxcmVtO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNHB4O1xuICAgIGhlaWdodDogNHB4O1xuICB9XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC8vIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG4vKiAyLiBMZSByw4PCqXN1bcODwqkgKi9cbi5zdW1tYXJ5X3BhbmVsIHtcbiAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLnN1bW1hcnlfcGFuZWwgLmRvdWJsZV9yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAuMjVyZW0gMDtcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XG59XG4uc3VtbWFyeV9wYW5lbCAuZG91YmxlX3Jvdy50b3RhbCB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmRvdWJsZV9yb3cgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5kb3VibGVfcm93IHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLyogMy4gQ2xhdmllciAqL1xuLmtleXBhZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogNXB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5rZXlwYWQgYnV0dG9uIHtcbiAgaGVpZ2h0OiAzLjVyZW07XG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5rZXlwYWQgYnV0dG9uLmJhY2tzcGFjZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4vKiA0LiBCb3V0b24gUGFpZW1lbnQgKi9cbi5idG5fY29udGVudCB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLmJ0bi1wYXltZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIC8vIG1hcmdpbjogMCAxcmVtIDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDY4cHg7XG4gIGJhY2tncm91bmQ6ICMyOTc4ZjI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmFtZV9zdG9ja19saXN0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnByb2R1Y3Qtc3RvY2stbGlzdCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5uYW1lX3N0b2NrX2xpc3QgcCxcbi5tb3llbl9wYWllbWVudCBwLFxuLnByaWNlX2R1IHAsXG4ubW95ZW5fcGFpZW1lbnRfcmVzdGFudCBwLFxuLnBhaWVtZW50X2J0biBwIFxue1xuICBtYXJnaW46IDA7XG59XG5cbnVsLnVsX2xpc3Qge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLmxpX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4wNjMpIDBweCA3cHggMjlweCAwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaW1nX3Byb2R1Y3RfbGlzdCB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4uaW1nX3Byb2R1Y3RfbGlzdCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAwcHggMHB4IDFweDtcbn1cblxuLnNlY3Rpb25fcG9wdXBfcGFpZW1lbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzNTBweDtcbiAgZmxleDogMTtcbiAgbWluLWhlaWdodDogMDtcbiAgbWFyZ2luOiAzMHB4IDgwcHg7XG59XG5cbi5idG4tcGF5bWVudC1wb3Age1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgLy8gbWFyZ2luOiAwIDFyZW0gMXJlbTtcbiAgLy8gbWFyZ2luLWJvdHRvbTogNjhweDtcbiAgYmFja2dyb3VuZDogIzI5NzhmMjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIGltYWdlICovXG5cbi5tZXRob2RlX3BhaWVtZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoOTBweCwgMWZyKSk7XG5cbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAxNXB4O1xuICBtYXJnaW46IDIwcHggMTBweDtcbn1cblxuLmNhZHJlX3BhaWVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNnB4IDI0cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAwcHggMHB4IDFweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYWRyZV9wYWllbWVudDpob3ZlciB7XG4gIGJvcmRlcjogMC41cHggc29saWQgIzA2NzJlNDtcbn1cblxuLmltZ19wYWllbWVudCB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8vIC5pbWdfcGFpZW1lbnRfY29tcHRlIHtcbi8vICAgd2lkdGg6IDYwcHg7XG4vLyAgIGhlaWdodDogNjBweDtcbi8vIH1cblxuLy8gLmltZ19wYWllbWVudF9jYXJ0ZSB7XG4vLyAgIHdpZHRoOiA2MHB4O1xuLy8gICBoZWlnaHQ6IDYwcHg7XG4vLyB9XG5cbi5pbWdfcGFpZW1lbnQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlX3BhaWVtZW50IHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLnRpdGxlX3BhaWVtZW50IHAge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubW9udGFudF9wYWllbWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLmRvdWJsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vIGdhcDogNXB4O1xuICAvLyBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5jYWRyZV9zZWN0aW9uX2NvbnRlbnVfbGVmdF9wcmlzZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uX2NvbnRlbnVfbGVmdF9wcmlzZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLm1vbnRhbnRfcGFpZW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBnYXA6IDhweDtcbn1cblxuLm1vbnRhbnRfcGFpZW1lbnQgaDEge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1vbnRhbnRfcGFpZW1lbnQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5tb3llbl9wYWllbWVudF9wcmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NERTNGQTtcbiAgZ2FwOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi8vIC5tb3llbl9wYWllbWVudF9wcmljZSB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgIHBhZGRpbmc6IDEwcHg7XG4vLyB9XG5cbi5tb3llbl9wYWllbWVudCB7XG4gIC8vIGZsZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNFNkYzRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDMUUwRkY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW95ZW5fcGFpZW1lbnQuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjRDBFQkZGO1xuICBib3JkZXItY29sb3I6ICM5MENERjQ7XG59XG5cbi5tb3llbl9wYWllbWVudCBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4ubW95ZW5fcHJpc2VfZHUgLnByaWNlX2R1IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5jbGVhci1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI0U1M0UzRTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGlzY291bnQtaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5idG4tY3VycmVuY3ksXG4uYnRuLXBlcmNlbnQge1xuICBiYWNrZ3JvdW5kOiAjRjBGMEYwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjJiMmIyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLXBlcmNlbnQge1xuICBwYWRkaW5nOiAycHggMTVweDtcbn1cblxuLmJ0bi1jdXJyZW5jeSB7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xuICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xufVxuXG4uaW5wdXQtZGlzY291bnQge1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGlzY291bnQtdW5pdCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5kaXNjb3VudC1sYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xOHB4O1xufVxuXG4uZGlzY291bnQtbGFiZWwgcCB7XG4gIG1hcmdpbjogNHB4IDAgMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLnBhaWVtZW50X3Jlc3RhbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMzBweDtcbn1cblxuLmJ0bl9mYWN0dXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYnRuX2ZhY3R1cmUgaW5wdXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYWllbWVudF9idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wYWllbWVudF9idG4gcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmJ0bl9jbGllbnQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG5fY2xpZW50IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kb3VibGVfY2xpZW50X2ZhY3R1cmUge1xuICAvLyBkaXNwbGF5OiBmbGV4O1xuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4uZG91YmxlX3JlbWlzZV9mYWN0dXJlIHtcbiAgZ2FwOiAzcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzVweCAxZnI7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIFxuICAubmFtZV9jYXRlZ29yaWUgc3BhbixcbiAgLm5vbWJyZSB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnNlbGVjdGVkX21vZGVfcGF5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJmN2RkMTtcbn1cblxuLmtleXBhZCBidXR0b24uYnRuX2tleXBhZF9hY3RpdmUge1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMDY3MkU0O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjQzFFMEZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmY3ZGQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlZmZmO1xufVxuXG4vKiBTdHlsZSBwb3VyIGxlcyBtw4PCqXRob2RlcyBkZSBwYWllbWVudCBzw4PCqWxlY3Rpb25uw4PCqWVzICovXG4uY2FkcmVfcGFpZW1lbnQuc2VsZWN0ZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNENBRjUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmY0O1xufVxuXG4ucHJpY2VfZHUgcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4vLyAua2V5cGFkIGJ1dHRvbjpmb2N1cyB7XG4vLyAgIG91dGxpbmU6IDJweCBzb2xpZCAjMDY3MkU0O1xuLy8gICBvdXRsaW5lLW9mZnNldDogMnB4O1xuLy8gfVxuXG4vKiBEYW5zIHRvbiBmaWNoaWVyIC5jb21wb25lbnQuY3NzIG91IGdsb2JhbCAqL1xuLmFsZXJ0LWxvdy1zdG9jayB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zYWZlLXN0b2NrIHtcbiAgY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJhcmNvZGUtc2hpZnRlZCB7XG4gIGxlZnQ6IDExcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJ0bl9jbGllbnQuaGFzLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxZDVmZjtcbn1cblxuLy8gLmNsZWFyLWN1c3RvbWVyIHtcbi8vICAgbWFyZ2luLWxlZnQ6IDhweDtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBjb2xvcjogI2ZmNGQ0Zjtcbi8vIH1cblxuLmNsZWFyLWN1c3RvbWVyOmhvdmVyIHtcbiAgY29sb3I6ICNjZjEzMjI7XG59XG5cbi5zZWxlY3RlZC1jbGllbnQtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zZWxlY3RlZC1jbGllbnQtaW5mbyBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc2VsZWN0ZWQtY2xpZW50LWluZm8gc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ucGFpZW1lbnRfYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2xlYXItY3VzdG9tZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8vIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDBweCAwcHggMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIFBlcm1ldHRyZSBsZSBkw4PCqXBsYWNlbWVudCBzYW5zIHPDg8KpbGVjdGlvbiBkZSB0ZXh0ZSAqL1xuW2RyYWdnYWJsZV0ge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLyogQ3Vyc2V1ciBwb3VyIGxlcyB6b25lcyBkw4PCqXBsYcODwqdhYmxlcyAqL1xuLnBvcHVwLWhlYWRlciB7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuLyogU3R5bGVzIHBvdXIgbGVzIGJhZGdlcyBkZSByZW1pc2UgKi9cbi5kaXNjb3VudC1iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViZWU7XG4gIGNvbG9yOiAjYzYyODI4O1xuICBwYWRkaW5nOiAycHggNnB4IDJweCAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4vKiBCb3V0b24gZCfDg8KpZGl0aW9uIGRlIHJlbWlzZSAqL1xuLmVkaXQtZGlzY291bnQge1xuICAvLyBtYXJnaW4tbGVmdDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzA2NzJFNDtcbiAgXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiBkYXJrZW4oIzA2NzJFNCwgMTUlKTtcbiAgfVxufVxuXG4vLyAuZWRpdC1kaXNjb3VudCBpIHtcbi8vICAgZm9udC1zaXplOiAxNHB4O1xuLy8gfVxuXG4vKiBTdHlsZSBhY3RpZiBwb3VyIGxlcyBib3V0b25zIENGQS8lICovXG4uYnRuLWN1cnJlbmN5LmFjdGl2ZSwgLmJ0bi1wZXJjZW50LmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RFM0ZBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDY3MmU0O1xufVxuXG4vLyBwb3MtdmVudGUuY29tcG9uZW50LnNjc3Ncbi5nbG9iYWwtZGlzY291bnQge1xuICBwYWRkaW5nOiA4cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZWVlO1xuXG4gIC5kaXNjb3VudC1pbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDhweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIGJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBcbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzA2NzJFNDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItY29sb3I6ICMwNjcyRTQ7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gIH1cbn1cblxuLmRvdWJsZV9yb3cudG90YWwge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4vLyBJbmRpY2F0ZXVyIHZpc3VlbFxuLmdsb2JhbC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmN2ZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MWQ1ZmYgIWltcG9ydGFudDtcbn1cblxuLy8gcG9zLXZlbnRlLmNvbXBvbmVudC5zY3NzXG4uc2Nhbi1lcnJvci10b2FzdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcbiAgY29sb3I6ICNjNjI4Mjg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgei1pbmRleDogMTAwMDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwwLDAsMC4yKTtcbn0iLCIvLyBAaW1wb3J0ICcvc3JjL2FwcC9hZG1pbi1wYWdlL2NsaWVudHMvYWRkQ2xpZW50L2FkZC1jbGllbnRzL2FkZC1jbGllbnRzLmNvbXBvbmVudC5zY3NzJztcblxuLy8gcGF5bWVudCBwb3B1cCBvdmVybGF5XG4ucGF5bWVudC1wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjczMyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ucGF5bWVudC1wb3B1cCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogODUlO1xuICAvLyBtYXgtd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDkwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAucG9wdXAtaGVhZGVyIHtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIHBhZGRpbmc6IDIwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICBcbiAgICAuY2xvc2UtYnRuIHtcbiAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIC8vIHRvcDogMTBweDtcbiAgICAgIC8vIHJpZ2h0OiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICB9XG4gIFxufVxuXG4vLyBsaXN0IGNsaWVudCBwb3B1cCBvdmVybGF5XG4ubGlzdC1jbGllbnQtcG9wdXAtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MzMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmxpc3QtY2xpZW50LXBvcHVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA5MCU7XG4gIC8vIG1heC13aWR0aDogODAwcHg7XG4gIGhlaWdodDogOTB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gIC5wb3B1cC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgXG4gICAgLmNsb3NlLWJ0biB7XG4gICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAvLyB0b3A6IDEwcHg7XG4gICAgICAvLyByaWdodDogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgfVxuICBcbn1cblxuLmRldGFpbC1wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmRldGFpbC1pbWFnZSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbn1cblxuLmRldGFpbC1wb3B1cCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsMCwwLDAuMyk7XG5cbiAgLnBvcHVwLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcblxuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLmNsb3NlLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLnBvcHVwLWJvZHkge1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcblxuICAgIC5zaG9wLW5hbWUge1xuICAgICAgbWFyZ2luOiAwIDAgMXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLmRldGFpbC1ncmlkIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gICAgICBnYXA6IDEuNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICB9XG5cbiAgICAuZGV0YWlsLWluZm8ge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDI1MHB4IDFmcjtcbiAgICAgICAgcm93LWdhcDogMC43NXJlbTtcbiAgICAgICAgY29sdW1uLWdhcDogNHJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgICAgICAuaW5mby1yb3cge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudmFsdWUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgLmRldGFpbC1kZXNjcmlwdGlvbiB7XG4gICAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7XG4gICAgICAubGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgIH1cbiAgICAgIC52YWx1ZSB7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnBvcHVwLWFjdGlvbnMge1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAuYnRuLWFkZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDY3MmU0O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMC42cmVtIDEuMnJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0NWEwNDk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIETDg8Kpc2FjdGl2ZXIgbGUgYm91dG9uIHF1YW5kIGxlIG1vbnRhbnQgZXN0IGluc3VmZmlzYW50ICovXG4uYnRuLXBheW1lbnQtcG9wOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgY29sb3I6ICNhY2FjYWM7XG59XG5cbi8vLy8vLy8vLy8vLy8vIFBvcCBVcCBjbGllbnQgcG91ciBsZXMgbGlzdFxuXG4uYnRuQWRkQ2xpZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uYnRuQWRkQ2xpZW50IGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJlNDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudHIge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxudGQge1xuICBwYWRkaW5nOiAxOHB4IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkOTQ7XG59XG4gIFxudGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ5NDtcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcbn1cbiAgXG50cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG4gIFxudHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi8qIFN0eWxlIGRlIGwnaW1hZ2UgY2lyY3VsYWlyZSBpbWcgbGlzdCAqL1xuLmltZ0NsaWVudCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1nQ2xpZW50IGltZyB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cblxuLmltZ0NsaWVudDpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIEVmZmV0IHpvb20gYXUgc3Vydm9sICovXG59XG5cbi5uby1jbGllbnQtbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6ICM4ODg7XG59XG5cbi5pbnB1dFNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5wdXRTZWFyY2ggaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaW5wdXRTZWFyY2ggaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4vKiBBam91dGVyIMODwqAgbGEgZmluIGR1IGZpY2hpZXIgU0NTUyAqL1xuXG4vLyBQb3B1cCBkJ2Fqb3V0IGRlIGNsaWVudFxuLmFkZC1jbGllbnQtcG9wdXAtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzMzKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDE7XG59XG5cbi5hZGQtY2xpZW50LXBvcHVwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDcwMHB4O1xuICBoZWlnaHQ6IDgzdmg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgLnBvcHVwLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICBcbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIFxuICAgIC5jbG9zZS1idG4ge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5wb3B1cC1ib2R5IHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICB3aWR0aDogNHB4O1xuICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgfVxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIC8vIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgXG4gICAgLmFkZC1jbGllbnQtZm9ybSB7XG4gICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggMTVweDtcbiAgICAgICAgXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlucHV0LCB0ZXh0YXJlYSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIFxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzA2NzJlNDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDYsIDExNCwgMjI4LCAwLjI1KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAuY2xpZW50LXR5cGUtc2VsZWN0b3Ige1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAvLyBnYXA6IDEwcHg7XG4gICAgICAgIFxuICAgICAgICAuY2xpZW50LXR5cGUtYnRuIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgIFxuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNjcyZTQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5waG90by11cGxvYWQge1xuICAgICAgICAucGhvdG8tcGxhY2Vob2xkZXIge1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICNjZWQ0ZGE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBcbiAgICAgICAgICBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLnBvcHVwLWFjdGlvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYm94LXNoYWRvdzogMCAtMnB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgXG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5idG4tY2FuY2VsIHtcbiAgICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3MDQwNDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmJ0bi1zYXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyZTQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU1Y2I5O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLy8vLy8vLy8vLy8gQWRkIGNsaWVudCBcblxuLmRvdWJsZV9pbnB1dCB7XG4gIC8vIGRpc3BsYXk6IGZsZXg7IFxuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyBnYXA6IDIwcHg7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbiAgZ2FwOiAxMHB4O1xuICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZ3JpZF9jb2xvbm5lIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uY2hhbXBfaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbnB1dF9mb2N1cyB7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyBtaW4td2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDQ5cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzY5NWM1Yztcbn1cbiAgXG4uY2hhbXBfaW5wdXQgLmxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIycHg7XG4gIGxlZnQ6IDRweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbG9yOiByZ2IoMTA3LCAxMDIsIDEwMik7XG59XG5cbi5pbnB1dF9mb2N1czpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuICBcbiAgXG4uaW5wdXRfZm9jdXM6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4uaW5wdXRfZm9jdXM6Zm9jdXMgKyAubGFiZWwge1xuICBjb2xvcjogIzA2NzJFNDtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaW5wdXRfZm9jdXM6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmNoYW1wX2lucHV0X2ludmVudGFpcmUge1xuICBkaXNwbGF5OiBmbGV4OyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG59XG5cbi5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLyogTWFzcXVlciBsJ2lucHV0IGNoZWNrYm94IG9yaWdpbmFsICovXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogTGUgw4LCqyBzbGlkZXIgw4LCuyAqL1xuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMThweDsgXG4gIHdpZHRoOiAxOHB4O1xuICBsZWZ0OiAzcHg7IFxuICBib3R0b206IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBRdWFuZCBsZSBjaGVja2JveCBlc3QgY29jaMODwqkgKi9cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgLyogQ291bGV1ciBhdSBjaG9peCAqL1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi5pbnB1dF9jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbGllbnQtdHlwZS1zZWxlY3RvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgXG4gIC5jbGllbnQtdHlwZS1idG4ge1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDY3MmU0O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG4ubm9tYnJlQ291bnQge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTVweDtcbiAgICByaWdodDogLTlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBkaXNwbGF5OiBmbGV4XG47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICByaWdodDogLTlweDtcbn1cblxuLm5vbWJyZUNvdW50IHNwYW4ge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIC8vIHBhZGRpbmc6IDRweDtcbn1cblxuLmJhcnJlIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwM2Y7XG4gICAgbWFyZ2luOiA4cHggMTBweDtcbn1cblxuLmNvbnRlbnRJY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgcGFkZGluZzogMHB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudEljb24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmZjsgLyogQ291bGV1ciBkZSBmb25kIHBvdXIgbCfDg8KpbMODwqltZW50IGFjdGlmICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxODkwZmY7IC8qIEJvcmR1cmUgcG91ciBsJ8ODwqlsw4PCqW1lbnQgYWN0aWYgKi9cbn1cblxuLmNvbnRlbnRJY29uLmFjdGl2ZSBpIHtcbiAgY29sb3I6ICMxODkwZmY7IC8qIENvdWxldXIgZGUgbCdpY8ODwrRuZSBhY3RpdmUgKi9cbn1cblxuLmNvbnRlbnRJY29uOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7IC8qIEVmZmV0IGhvdmVyIHBvdXIgbGVzIMODwqlsw4PCqW1lbnRzIG5vbiBhY3RpZnMgKi9cbn1cblxuLmRhdGUtcmVkIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDsgXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 13530:
/*!*************************************************************!*\
  !*** ./src/app/admin-page/MODELS/produit-category.model.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProduitDetailsResponseDTO: () => (/* binding */ ProduitDetailsResponseDTO)
/* harmony export */ });
class ProduitDetailsResponseDTO {
  constructor(data = {}) {
    Object.assign(this, data);
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

/***/ })

}]);
//# sourceMappingURL=src_app_POS_pos-vente_pos-vente_component_ts.js.map