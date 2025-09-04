"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_POS_pos-caisse_pos-caisse_component_ts"],{

/***/ 34313:
/*!********************************************************!*\
  !*** ./src/app/POS/pos-caisse/pos-caisse.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PosCaisseComponent: () => (/* binding */ PosCaisseComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var src_app_admin_page_MODELS_CaisseModel_safe_html_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/admin-page/MODELS/CaisseModel/safe-html.pipe */ 37726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_admin_page_SERVICES_boutique_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin-page/SERVICES/boutique-service */ 52719);
/* harmony import */ var src_app_admin_page_SERVICES_CaisseService_caisse_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin-page/SERVICES/CaisseService/caisse-state.service */ 12334);
/* harmony import */ var src_app_admin_page_SERVICES_CaisseService_pos_caisse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/admin-page/SERVICES/CaisseService/pos-caisse-service */ 74864);
/* harmony import */ var src_app_admin_page_SERVICES_CaisseService_boutique_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin-page/SERVICES/CaisseService/boutique-state.service */ 37788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_admin_page_SERVICES_CaisseService_pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin-page/SERVICES/CaisseService/pagination.service */ 35322);













const _c0 = a0 => ({
  "disabled-like": a0
});
function PosCaisseComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Chargement des caisses... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PosCaisseComponent_div_7_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function PosCaisseComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, PosCaisseComponent_div_7_p_2_Template, 2, 1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.errorMessage);
  }
}
function PosCaisseComponent_div_8_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PosCaisseComponent_div_8_div_13_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PosCaisseComponent_div_8_div_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.goToPosJournalCaisse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Journal des caisses");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PosCaisseComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "div", 17)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 18)(7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PosCaisseComponent_div_8_Template_div_click_11_listener() {
      const caisse_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.toggleMenu(caisse_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, PosCaisseComponent_div_8_div_13_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 24)(15, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PosCaisseComponent_div_8_Template_button_click_15_listener() {
      const caisse_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.onCaisseButtonClick(caisse_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 26)(18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const caisse_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](caisse_r3.nomVendeur ? caisse_r3.nomVendeur[0] : "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](caisse_r3.nomVendeur || "Non assign\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("open", caisse_r3.statut === "OUVERTE")("closed", caisse_r3.statut === "FERMEE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getStatusText(caisse_r3), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.openMenuId === caisse_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getButtonText(caisse_r3), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getNomBoutique(caisse_r3));
  }
}
function PosCaisseComponent_div_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Chargement des caisses... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PosCaisseComponent_div_9_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.errorMessageAllCaisses || "Aucune caisse disponible");
  }
}
function PosCaisseComponent_div_9_div_6_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PosCaisseComponent_div_9_div_6_div_1_div_13_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PosCaisseComponent_div_9_div_6_div_1_div_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.goToPosJournalCaisse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Journal des caisses");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PosCaisseComponent_div_9_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "div", 17)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 18)(7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PosCaisseComponent_div_9_div_6_div_1_Template_div_click_11_listener() {
      const caisse_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.toggleMenu("last_" + caisse_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, PosCaisseComponent_div_9_div_6_div_1_div_13_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 24)(15, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 26)(18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const caisse_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](caisse_r6.nomVendeur ? caisse_r6.nomVendeur[0] : "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](caisse_r6.nomVendeur || "Non assign\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("open", caisse_r6.statut === "OUVERTE")("closed", caisse_r6.statut === "FERMEE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getStatusText(caisse_r6), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.openMenuId === "last_" + caisse_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", caisse_r6.statut === "FERMEE" || caisse_r6.statut === "OUVERTE" ? "Action non disponible" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", caisse_r6.statut === "FERMEE" || caisse_r6.statut === "OUVERTE")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](14, _c0, caisse_r6.statut === "FERMEE" || caisse_r6.statut === "OUVERTE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-disabled", caisse_r6.statut === "FERMEE" || caisse_r6.statut === "OUVERTE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getButtonTextFerme(caisse_r6), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.getNomBoutique(caisse_r6));
  }
}
function PosCaisseComponent_div_9_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PosCaisseComponent_div_9_div_6_div_1_Template, 22, 16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.allCaisses);
  }
}
function PosCaisseComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Toutes les caisses");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PosCaisseComponent_div_9_div_4_Template, 3, 0, "div", 4)(5, PosCaisseComponent_div_9_div_5_Template, 4, 1, "div", 5)(6, PosCaisseComponent_div_9_div_6_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isLoadingAllCaisses);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.isLoadingAllCaisses && ctx_r0.allCaisses.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showAllCaissesSection);
  }
}
function PosCaisseComponent_div_10_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.getBoutiqueName(ctx_r0.selectedBoutiqueId), " ");
  }
}
function PosCaisseComponent_div_10_select_13_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const boutique_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", boutique_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", boutique_r10.nomBoutique, " ");
  }
}
function PosCaisseComponent_div_10_select_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function PosCaisseComponent_div_10_select_13_Template_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r0.selectedBoutiqueId, $event) || (ctx_r0.selectedBoutiqueId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "S\u00E9lectionnez une boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, PosCaisseComponent_div_10_select_13_option_3_Template, 2, 2, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.selectedBoutiqueId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.boutiques);
  }
}
function PosCaisseComponent_div_10_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 56)(2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, ctx_r0.errorMessage), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
  }
}
function PosCaisseComponent_div_10_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Ouvrir la caisse");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function PosCaisseComponent_div_10_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 58);
  }
}
function PosCaisseComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35)(1, "div", 36)(2, "div", 37)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Ouvrir une nouvelle caisse");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PosCaisseComponent_div_10_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 40)(8, "form", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function PosCaisseComponent_div_10_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 42)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Boutique assign\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, PosCaisseComponent_div_10_div_12_Template, 2, 1, "div", 43)(13, PosCaisseComponent_div_10_select_13_Template, 4, 4, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 42)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Esp\u00E8ces \u00E0 l'ouverture");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function PosCaisseComponent_div_10_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r0.montantOuverture, $event) || (ctx_r0.montantOuverture = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, PosCaisseComponent_div_10_div_18_Template, 4, 3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 47)(20, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PosCaisseComponent_div_10_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PosCaisseComponent_div_10_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, PosCaisseComponent_div_10_span_23_Template, 2, 0, "span", 13)(24, PosCaisseComponent_div_10_span_24_Template, 1, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.selectedBoutiqueId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.selectedBoutiqueId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.montantOuverture);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);
  }
}
class PosCaisseComponent {
  constructor(boutiqueService, caisseState, posCaisseService, boutiqueState, router, paginationService) {
    this.boutiqueService = boutiqueService;
    this.caisseState = caisseState;
    this.posCaisseService = posCaisseService;
    this.boutiqueState = boutiqueState;
    this.router = router;
    this.paginationService = paginationService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.currentBoutiqueId = null;
    this.showAllCaissesSection = false;
    this.boutiques = [];
    this.showModal = false;
    this.selectedBoutiqueId = null;
    this.montantOuverture = 0;
    this.isLoading = false;
    this.errorMessage = null;
    // selectedBoutiqueIdForList: number | null = null;
    this.caisses = [];
    this.isLoadingCaisses = false;
    this.openMenuId = null;
    this.allCaisses = [];
    this.isLoadingAllCaisses = false;
    this.errorMessageAllCaisses = null;
    // propriétés à ajouter
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.currentLoadType = 'last';
  }
  ngOnInit() {
    this.loadBoutiques();
    this.initStateCaisse();
    this.initStateBoutique();
  }
  initStateBoutique() {
    // Écouter les changements de boutique pour recharger les caisses
    this.boutiqueState.selectedBoutique$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)() // Éviter les déclenchements inutiles
    ).subscribe(boutiqueId => {
      this.currentBoutiqueId = boutiqueId;
      if (boutiqueId) {
        this.loadDerniereCaisseVendeur(boutiqueId);
        this.loadAllCaisses(boutiqueId);
      } else {
        this.caisses = [];
        this.allCaisses = [];
      }
    });
    // Réduire la duplication des abonnements
    this.boutiqueState.selectedBoutique$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)()).subscribe(bId => {
      this.currentBoutiqueId = bId;
      this.paginationService.setPage(1);
      if (bId) {
        this.loadDerniereCaisseVendeur(bId);
        this.loadAllCaisses(bId);
      }
    });
  }
  initStateCaisse() {
    // Écouter les nouvelles caisses créées
    this.caisseState.caisseCreated$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(newCaisse => {
      if (newCaisse && this.currentBoutiqueId === newCaisse.boutiqueId) {
        this.caisses = [newCaisse];
        this.errorMessage = null;
      }
    });
    // Écouter les demandes de rafraîchissement
    this.caisseState.refreshCaisses$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(() => {
      if (this.currentBoutiqueId) {
        this.loadDerniereCaisseVendeur(this.currentBoutiqueId);
      }
    });
    // abonnement
    this.caisseState.showAllCaisses$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(show => {
      console.log('[PosCaisse] showAllCaisses$ ->', show);
      this.showAllCaissesSection = !!show;
      if (this.showAllCaissesSection) {
        const bId = this.currentBoutiqueId || (this.boutiques?.length ? this.boutiques[0].id : null);
        if (bId) {
          this.loadAllCaisses(bId);
        } else {
          this.allCaisses = [];
          this.errorMessageAllCaisses = 'Aucune boutique sélectionnée';
        }
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadBoutiques() {
    this.boutiqueService.getBoutiquesByEntreprise().subscribe({
      next: boutiques => {
        this.boutiques = boutiques;
      },
      error: error => {
        console.error('Erreur lors du chargement des boutiques', error);
        this.errorMessage = 'Erreur lors du chargement des boutiques';
      }
    });
  }
  // Ajoutez cette méthode dans la classe PosCaisseComponent
  loadDerniereCaisseVendeur(boutiqueId) {
    this.currentLoadType = 'last';
    this.isLoadingCaisses = true;
    this.caisses = [];
    this.errorMessage = null;
    this.posCaisseService.getDerniereCaisseVendeur(boutiqueId).subscribe({
      next: response => {
        // S'assurer qu'on traite toujours un tableau avec un seul élément
        this.caisses = [response];
        this.isLoadingCaisses = false;
      },
      error: error => {
        this.isLoadingCaisses = false;
        console.error('Erreur lors du chargement de la dernière caisse', error);
        // Si le service throwError renvoie une string -> error sera une string
        const rawMsg = typeof error === 'string' ? error : error?.message ?? (error?.toString ? error.toString() : 'Erreur inconnue');
        // Normalise le message visible -> si le serveur dit "Aucune caisse..." on affiche exactement le texte voulu
        if (rawMsg.includes('Aucune caisse trouvée') || rawMsg.includes('Aucune caisse disponible')) {
          this.errorMessage = 'Aucune caisse disponible pour cette boutique';
        } else {
          this.errorMessage = rawMsg;
        }
        this.caisses = []; // s'assurer qu'on affiche l'état vide
      }
    });
  }
  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.selectedBoutiqueId = null;
    this.montantOuverture = 0;
    this.errorMessage = null;
  }
  // Nouvelle méthode pour charger les caisses
  // loadCaisses(boutiqueId: number): void {
  //   this.isLoadingCaisses = true;
  //   this.caisses = [];
  //   this.posCaisseService.getCaissesByBoutique(boutiqueId).subscribe({
  //     next: (caisses) => {
  //       this.caisses = caisses;
  //       this.isLoadingCaisses = false;
  //     },
  //     error: (error) => {
  //       console.error('Erreur lors du chargement des caisses', error);
  //       this.isLoadingCaisses = false;
  //       this.errorMessage = 'Erreur lors du chargement des caisses';
  //     }
  //   });
  // }
  // ---------- CHANGEMENT: appel unique et traitement de différentes formes de réponse ----------
  loadCaisses(boutiqueId, page = 1, size = 10) {
    this.isLoadingCaisses = true;
    this.caisses = [];
    this.errorMessage = null;
    this.posCaisseService.getCaissesByBoutique(boutiqueId).subscribe({
      next: resp => {
        // 1) API paginée classique { items: CaisseResponse[], totalItems: number }
        if (resp && Array.isArray(resp.items) && typeof resp.totalItems === 'number') {
          // On suppose que resp.items contient déjà la page demandée.
          this.paginationService.setTotalItems(resp.totalItems);
          this.caisses = resp.items;
        }
        // 2) API qui retourne directement un tableau complet -> découpage côté client
        else if (Array.isArray(resp)) {
          const items = resp;
          this.paginationService.setTotalItems(items.length);
          const start = (page - 1) * size;
          this.caisses = items.slice(start, start + size);
        }
        // 3) autre forme courante { data: [...], total: n }
        else if (resp && Array.isArray(resp.data)) {
          const items = resp.data;
          this.paginationService.setTotalItems(resp.total || items.length);
          const start = (page - 1) * size;
          this.caisses = items.slice(start, start + size);
        }
        // 4) réponse inconnue -> essayer d'extraire ce qu'on peut
        else if (resp && Array.isArray(resp.items)) {
          const items = resp.items;
          this.paginationService.setTotalItems(resp.totalItems || items.length);
          this.caisses = items;
        } else {
          // Rien de connu -> afficher vide
          this.caisses = [];
          this.paginationService.setTotalItems(0);
        }
        this.isLoadingCaisses = false;
      },
      error: err => {
        console.error('Erreur loadCaisses', err);
        this.isLoadingCaisses = false;
        this.errorMessage = 'Erreur lors du chargement des caisses';
      }
    });
  }
  onCaisseButtonClick(caisse) {
    if (caisse.statut === 'OUVERTE') {
      // Mettre à jour la boutique sélectionnée globalement
      this.boutiqueState.setSelectedBoutique(caisse.boutiqueId);
      // Puis naviguer vers l'accueil POS en passant la caisse (si tu veux)
      this.router.navigate(['/pos-accueil'], {
        state: {
          caisse: caisse
        }
      });
    } else if (caisse.statut === 'FERMEE') {
      this.openModalWithBoutique(caisse.boutiqueId);
      // Optionnel : définir la boutique aussi quand on ouvre le modal
      this.boutiqueState.setSelectedBoutique(caisse.boutiqueId);
    }
  }
  getBoutiqueName(boutiqueId) {
    if (!boutiqueId) return 'Boutique non spécifiée';
    const boutique = this.boutiques.find(b => b.id === boutiqueId);
    return boutique ? boutique.nomBoutique : 'Boutique inconnue';
  }
  openModalWithBoutique(boutiqueId) {
    this.showModal = true;
    this.selectedBoutiqueId = boutiqueId;
    this.montantOuverture = 0;
    this.errorMessage = null;
  }
  // toggleMenu(caisseId: number): void {
  //   // si on reclique sur la même, on referme
  //   this.openMenuId = this.openMenuId === caisseId ? null : caisseId;
  // }
  toggleMenu(menuId) {
    this.openMenuId = this.openMenuId === menuId ? null : menuId;
  }
  allCaisseClose(caisse) {
    console.log('Btn 1 clicked pour', caisse);
    // … votre logique
  }
  goToPosJournalCaisse() {
    this.router.navigate(['/pos-journal-caisse']);
  }
  getButtonText(caisse) {
    if (caisse.statut === 'OUVERTE') {
      return 'Continuer la vente';
    } else if (caisse.statut === 'FERMEE') {
      return 'Ouvrir la caisse';
    }
    return 'Action inconnue';
  }
  getButtonTextFerme(caisse) {
    if (caisse.statut === 'OUVERTE') {
      return 'La caisse est ouverte';
    } else if (caisse.statut === 'FERMEE') {
      return 'La caisse est fermer';
    }
    return 'Action inconnue';
  }
  getNomBoutique(caisse) {
    const boutique = this.boutiques.find(b => b.id === caisse.boutiqueId);
    return boutique ? boutique.nomBoutique : 'Boutique inconnue';
  }
  getStatusText(caisse) {
    if (caisse.statut === 'OUVERTE') {
      // Vérifiez si la date d'ouverture est présente
      if (caisse.dateOuverture) {
        const ouvertureDate = new Date(caisse.dateOuverture);
        const options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        };
        const formattedDate = ouvertureDate.toLocaleString('fr-FR', options);
        return `Ouverte le ${formattedDate}`;
      }
      return 'Ouverte';
    } else if (caisse.statut === 'FERMEE') {
      // Vérifiez si la date de fermeture est présente
      if (caisse.dateFermeture) {
        const fermetureDate = new Date(caisse.dateFermeture);
        const options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        };
        const formattedDate = fermetureDate.toLocaleString('fr-FR', options);
        return `Fermée le ${formattedDate}`;
      } else {
        return 'Fermée';
      }
    }
    return 'Statut inconnu';
  }
  submitForm() {
    // Vérification du montant
    if (this.montantOuverture < 0) {
      this.errorMessage = 'Le montant ne peut pas être négatif';
      return;
    }
    if (!this.selectedBoutiqueId) {
      this.errorMessage = 'Veuillez sélectionner une boutique';
      return;
    }
    this.isLoading = true;
    this.errorMessage = null;
    const request = {
      boutiqueId: this.selectedBoutiqueId,
      montantInitial: this.montantOuverture
    };
    this.posCaisseService.ouvrirCaisse(request).subscribe({
      next: response => {
        // Notifier la création de la caisse
        this.caisseState.notifyCaisseCreated(response);
        // Demander un rafraîchissement des données
        this.caisseState.triggerRefresh();
        console.log('Caisse ouverte avec succès', response);
        this.isLoading = false;
        this.closeModal();
        this.loadDerniereCaisseVendeur(request.boutiqueId);
        // Si vous préférez charger toutes les caisses (pas seulement la dernière), appelez plutôt :
        // this.loadCaisses(request.boutiqueId);
      },
      error: error => {
        console.error('Erreur lors de l\'ouverture de la caisse', error);
        this.isLoading = false;
        let rawError = '';
        if (error.error?.error) rawError = error.error.error;else if (error.error?.message) rawError = error.error.message;else if (error.message) rawError = error.message;else rawError = 'Erreur inconnue lors de l\'ouverture de la caisse';
        const prefixIndex = rawError.indexOf(': ');
        this.errorMessage = prefixIndex > 0 ? rawError.substring(prefixIndex + 2) : rawError;
      }
    });
  }
  formatDate(dateInput) {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  // Ajoutez cette méthode pour charger toutes les caisses
  loadAllCaisses(boutiqueId) {
    if (!boutiqueId) {
      this.errorMessageAllCaisses = 'Veuillez sélectionner une boutique';
      return;
    }
    this.currentLoadType = 'all';
    this.isLoadingAllCaisses = true;
    this.errorMessageAllCaisses = null;
    this.posCaisseService.getCaissesByBoutique(boutiqueId).subscribe({
      next: caisses => {
        this.allCaisses = caisses;
        this.isLoadingAllCaisses = false;
      },
      error: error => {
        console.error('Erreur lors du chargement de toutes les caisses', error);
        this.isLoadingAllCaisses = false;
        this.errorMessageAllCaisses = error.message || 'Erreur lors du chargement des caisses';
        this.allCaisses = []; // S'assurer que le tableau est vide en cas d'erreur
      }
    });
  }
  formatErrorForUI(err) {
    if (!err) return 'Erreur inconnue';
    if (err instanceof Error) return err.message;
    if (typeof err === 'string') return err;
    if (err?.message) return err.message;
    if (err?.error) return this.formatErrorForUI(err.error);
    try {
      return JSON.stringify(err);
    } catch {
      return String(err);
    }
  }
  static {
    this.ɵfac = function PosCaisseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PosCaisseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_boutique_service__WEBPACK_IMPORTED_MODULE_1__.BoutiqueService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_CaisseService_caisse_state_service__WEBPACK_IMPORTED_MODULE_2__.CaisseStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_CaisseService_pos_caisse_service__WEBPACK_IMPORTED_MODULE_3__.PosCaisseService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_CaisseService_boutique_state_service__WEBPACK_IMPORTED_MODULE_4__.BoutiqueStateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_CaisseService_pagination_service__WEBPACK_IMPORTED_MODULE_5__.PaginationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: PosCaisseComponent,
      selectors: [["app-pos-caisse"]],
      decls: 11,
      vars: 5,
      consts: [[1, "container_pos_caisse"], [1, "content_pos_caisse"], [1, "titre_all_caisse", 2, "padding", "20px 20px 0"], [1, "caisse-container"], ["class", "loading-indicator", 4, "ngIf"], ["class", "no-caisses", 4, "ngIf"], ["class", "caisse-card", 4, "ngFor", "ngForOf"], ["class", "all_caisse_container", 4, "ngIf"], ["class", "modal-backdrop", 4, "ngIf"], [1, "loading-indicator"], [1, "ri-loader-4-line", "spin"], [1, "no-caisses"], [1, "ri-information-line"], [4, "ngIf"], [1, "caisse-card"], [1, "block"], [1, "double", 2, "align-items", "baseline"], [1, "profil"], [1, "caisse-info"], [1, "caisse-nom"], [1, "caisse-status"], [1, "icon_more", 3, "click"], [1, "ri-more-2-fill"], ["class", "dropdown-menu", 3, "click", 4, "ngIf"], [1, "caisse-container-bottom"], [1, "caisse-btn", 3, "click"], [1, "boutique-name", 2, "display", "flex", "align-items", "center", "gap", "5px"], [1, "ri-store-2-line"], [1, "dropdown-menu", 3, "click"], [3, "click"], [1, "all_caisse_container"], [1, "titre_all_caisse", 2, "padding", "0 20px"], ["class", "all-caisse-container-bottom", 4, "ngIf"], [1, "all-caisse-container-bottom"], [1, "caisse-btn", 3, "disabled", "ngClass", "title"], [1, "modal-backdrop"], [1, "modal-container"], [1, "modal-header"], [1, "close-button", 3, "click"], [1, "ri-close-line"], [1, "modal-body"], [3, "ngSubmit"], [1, "form-group"], ["class", "selected-boutique", 4, "ngIf"], ["name", "boutique", 3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], ["type", "number", "name", "montant", "placeholder", "Entrez le montant", "required", "", "min", "0", "step", "0.01", 3, "ngModelChange", "ngModel", "disabled"], ["class", "error-message", 4, "ngIf"], [1, "modal-footer"], [1, "btn-cancel", 3, "click", "disabled"], [1, "btn-submit", 3, "click", "disabled"], ["class", "loading-spinner", 4, "ngIf"], [1, "selected-boutique"], ["name", "boutique", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "error-message"], [1, "ri-error-warning-line"], [3, "innerHTML"], [1, "loading-spinner"]],
      template: function PosCaisseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Ma caisse");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, PosCaisseComponent_div_6_Template, 3, 0, "div", 4)(7, PosCaisseComponent_div_7_Template, 3, 1, "div", 5)(8, PosCaisseComponent_div_8_Template, 22, 10, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, PosCaisseComponent_div_9_Template, 7, 3, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, PosCaisseComponent_div_10_Template, 25, 9, "div", 8);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoadingCaisses);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoadingCaisses && ctx.caisses.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.caisses);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showAllCaissesSection);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showModal);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, src_app_admin_page_MODELS_CaisseModel_safe_html_pipe__WEBPACK_IMPORTED_MODULE_0__.SafeHtmlPipe],
      styles: ["@charset \"UTF-8\";\n.content_pos_caisse[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.header_pos_caisse[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  width: 100%;\n  height: 60px;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n  padding: 0 15px;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n}\n\n.content_header_pos_caisse_right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.double[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.icon_retour[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.inputSearch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n\n.inputSearch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-left: 10px;\n  border-radius: 5px;\n  border: 1px solid #000;\n}\n\n.inputSearch[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 15px;\n  font-size: 17px;\n}\n\n.barre[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.2470588235);\n  margin: 8px 10px;\n}\n\n.add-task[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  background-color: #0672E4;\n  color: #ffffff;\n  border-radius: 5px;\n  border: none;\n}\n\n.add-task[_ngcontent-%COMP%]:hover {\n  background-color: #0361c6;\n}\n\n.caisse-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  padding: 5px 20px 20px;\n}\n\n.all-caisse-container-bottom[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  padding: 0 20px 20px;\n}\n\n.caisse-card[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 20px;\n  border-radius: 4px;\n  min-height: 150px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.caisse-nom[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n  color: #1a1a1a;\n}\n\n.caisse-btn[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: white;\n  border: none;\n  padding: 6px 8px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 500;\n  align-self: flex-start;\n  transition: background-color 0.2s ease;\n}\n\n.caisse-btn[_ngcontent-%COMP%]:hover {\n  background-color: #0361c6;\n}\n\n.profil[_ngcontent-%COMP%] {\n  background-color: #E9D421;\n  padding: 0px 12px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.profil[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #000000;\n}\n\n.icon_more[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: none;\n  position: absolute;\n  top: -11px;\n  right: -12px;\n}\n\n.icon_more[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n}\n\n.caisse-card[_ngcontent-%COMP%]:hover   .icon_more[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.titre_all_caisse[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  width: 500px;\n  max-width: 90%;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  animation: _ngcontent-%COMP%_modalAppear 0.3s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_modalAppear {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  color: #333;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n  color: #666;\n  transition: color 0.2s;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  color: #ff0000;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #555;\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 15px;\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #3498db;\n  outline: none;\n  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #eee;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  border: 1px solid #ddd;\n  color: #444;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #eaeaea;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: white;\n  border: none;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: #0361c6;\n}\n\n\n\n.error-message[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #b71c1c;\n  padding: 12px;\n  border-radius: 4px;\n  margin-top: 15px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n\n\n.loading-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  border-top-color: white;\n  animation: _ngcontent-%COMP%_spin 1s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.o_pager_previous[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.o_pager_next[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 0 5px;\n}\n\n.d-print-none[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n}\n\n.d-print-none[_ngcontent-%COMP%]   .o_pager_previous[_ngcontent-%COMP%] {\n  border-top: 1px solid #000;\n  border-right: none;\n  border-bottom: 1px solid #000;\n  border-left: 1px solid #000;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.d-print-none[_ngcontent-%COMP%]   .o_pager_next[_ngcontent-%COMP%] {\n  border-top: 1px solid #000;\n  border-left: 1px solid #000;\n  border-bottom: 1px solid #000;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.content_select[_ngcontent-%COMP%] {\n  border: none;\n  padding: 6px 30px 6px 7px;\n  background: #efefef;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n  cursor: pointer;\n}\n\n\n\n.loading-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  color: #64748b;\n}\n.loading-indicator[_ngcontent-%COMP%]   .spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-right: 10px;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.no-caisses[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  border: 1px dashed #ddd;\n  border-radius: 8px;\n  color: #888;\n}\n.no-caisses[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 10px;\n  display: block;\n}\n\n.caisse-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.caisse-status[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 2px 8px;\n  border-radius: 4px;\n  display: inline-block;\n  width: fit-content;\n}\n.caisse-status.open[_ngcontent-%COMP%] {\n  background-color: #e3f2ed;\n  color: #0a8150;\n}\n.caisse-status.closed[_ngcontent-%COMP%] {\n  background-color: #fbebec;\n  color: #de3618;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.icon_more[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.icon_more[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.icon_more[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  min-width: 120px;\n  margin-top: 6px;\n  padding: 0;\n}\n.icon_more[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 8px 12px;\n  text-align: left;\n  cursor: pointer;\n  width: 100%;\n  font-size: 12px;\n}\n.icon_more[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n.icon_more[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\n  \n\n  color: red;\n}\n\n.caisse-status[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-weight: 500;\n}\n\n.caisse-status.open[_ngcontent-%COMP%] {\n  background-color: #e3fcef;\n  color: #0e9f6e;\n}\n\n.caisse-status.closed[_ngcontent-%COMP%] {\n  background-color: #fde8e8;\n  color: #c81e1e;\n}\n\n.caisse-btn.disabled[_ngcontent-%COMP%] {\n  background-color: #e5e7eb;\n  color: #6b7280;\n  cursor: not-allowed;\n}\n\n.selected-boutique[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #f0f4f8;\n  border-radius: 4px;\n  border: 1px solid #d1d5db;\n  font-weight: 500;\n  color: #1e293b;\n}\n\n.caisse-container-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: space-between;\n}\n\n.caisse-btn[disabled][_ngcontent-%COMP%], \n.caisse-btn.disabled-like[_ngcontent-%COMP%] {\n  cursor: not-allowed; \n\n  opacity: 0.6; \n\n  pointer-events: none; \n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcy1jYWlzc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQXNCLGtCQUFBO0FBR3RCOztBQUZBO0VBQXFCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQiw4QkFBQTtFQUFnQyxTQUFBO0VBQVcsV0FBQTtFQUFhLFlBQUE7RUFBYyxzQkFBQTtFQUF3QiwrQ0FBQTtFQUFpRCxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLE1BQUE7RUFBUSxZQUFBO0FBaUJuUDs7QUFoQkE7RUFBa0MsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFFBQUE7QUFzQnRFOztBQXJCQTtFQUFLLGdCQUFBO0VBQWtCLFNBQUE7RUFBVyxVQUFBO0FBMkJsQzs7QUExQkE7RUFBSSxTQUFBO0FBOEJKOztBQTdCQTtFQUFVLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixTQUFBO0FBbUM5Qzs7QUFsQ0E7RUFBaUIsZUFBQTtFQUFpQixlQUFBO0FBdUNsQzs7QUF0Q0E7RUFBZSxrQkFBQTtFQUFvQixZQUFBO0VBQWMsWUFBQTtFQUFjLGFBQUE7RUFBZSxtQkFBQTtBQThDOUU7O0FBN0NBO0VBQXFCLFdBQUE7RUFBYSxZQUFBO0VBQWMsa0JBQUE7RUFBb0Isa0JBQUE7RUFBb0Isc0JBQUE7QUFxRHhGOztBQXBEQTtFQUFpQixrQkFBQTtFQUFvQixRQUFBO0VBQVUsa0JBQUE7RUFBb0IsZUFBQTtBQTJEbkU7O0FBMURBO0VBQVMsWUFBQTtFQUFjLFVBQUE7RUFBWSw2Q0FBQTtFQUE2QixnQkFBQTtBQWlFaEU7O0FBaEVBO0VBQVksa0JBQUE7RUFBb0IseUJBQUE7RUFBMkIsY0FBQTtFQUFnQixrQkFBQTtFQUFvQixZQUFBO0FBd0UvRjs7QUF2RUE7RUFBa0IseUJBQUE7QUEyRWxCOztBQTFFQTtFQUFvQixhQUFBO0VBQWUscUNBQUE7RUFBdUMsU0FBQTtFQUFXLHNCQUFBO0FBaUZyRjs7QUEvRUE7RUFBK0IsYUFBQTtFQUFlLHFDQUFBO0VBQXVDLFNBQUE7RUFBVyxvQkFBQTtBQXNGaEc7O0FBckZBO0VBQWUsc0JBQUE7RUFBd0IsYUFBQTtFQUFlLGtCQUFBO0VBQW9CLGlCQUFBO0VBQW1CLGFBQUE7RUFBZSxzQkFBQTtFQUF3Qiw4QkFBQTtBQStGcEk7O0FBOUZBO0VBQWMsaUJBQUE7RUFBbUIsZUFBQTtFQUFpQixjQUFBO0FBb0dsRDs7QUFuR0E7RUFBYyx5QkFBQTtFQUEyQixZQUFBO0VBQWMsWUFBQTtFQUFjLGdCQUFBO0VBQWtCLGtCQUFBO0VBQW9CLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0Isc0JBQUE7RUFBd0Isc0NBQUE7QUErR3RLOztBQTlHQTtFQUFvQix5QkFBQTtBQWtIcEI7O0FBakhBO0VBQVUseUJBQUE7RUFBMkIsaUJBQUE7RUFBbUIsa0JBQUE7RUFBb0IsZUFBQTtBQXdINUU7O0FBdkhBO0VBQWUsZUFBQTtFQUFpQixjQUFBO0FBNEhoQzs7QUEzSEE7RUFBYSxlQUFBO0VBQWlCLGFBQUE7RUFBZSxrQkFBQTtFQUFvQixVQUFBO0VBQVksWUFBQTtBQW1JN0U7O0FBbElBO0VBQWUsZUFBQTtBQXNJZjs7QUFySUE7RUFBUyxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7RUFBZ0Msa0JBQUE7QUE0STdFOztBQTNJQTtFQUFnQyxjQUFBO0FBK0loQzs7QUE5SUE7RUFBdUIsZUFBQTtBQWtKdkI7O0FBaEpBLHlCQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBbUpGOztBQWhKQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0Esb0NBQUE7QUFtSkY7O0FBaEpBO0VBQ0U7SUFBTyxVQUFBO0lBQVksNEJBQUE7RUFxSm5CO0VBcEpBO0lBQUssVUFBQTtJQUFZLHdCQUFBO0VBd0pqQjtBQUNGO0FBdEpBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBd0pGO0FBdEpFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBd0pKOztBQXBKQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBdUpGO0FBckpFO0VBQ0UsY0FBQTtBQXVKSjs7QUFuSkE7RUFDRSxhQUFBO0FBc0pGO0FBcEpFO0VBQ0UsbUJBQUE7QUFzSko7QUFwSkk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFzSk47QUFuSkk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBcUpOO0FBbkpNO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkNBQUE7QUFxSlI7O0FBL0lBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUFrSkY7QUFoSkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFrSko7QUEvSUU7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQWlKSjtBQS9JSTtFQUNFLHlCQUFBO0FBaUpOO0FBN0lFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQStJSjtBQTdJSTtFQUNFLHlCQUFBO0FBK0lOOztBQTFJQSw0QkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBNklGO0FBM0lFO0VBQ0UsZUFBQTtBQTZJSjs7QUF6SUEsMEJBQUE7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1Q0FBQTtBQTRJRjs7QUF6SUE7RUFDRTtJQUFLLHlCQUFBO0VBNklMO0FBQ0Y7QUEzSUEsaURBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQTZJRjs7QUExSUE7O0VBRUUsZUFBQTtFQUNBLGNBQUE7QUE2SUY7O0FBMUlBO0VBQ0Usc0JBQUE7QUE2SUY7O0FBMUlBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBNklGOztBQTFJQTtFQUNFLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUE2SUY7O0FBMUlBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFGQUFBO0VBQ0EsZUFBQTtBQTZJRjs7QUExSUEsMkNBQUE7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUE0SUY7QUExSUU7RUFDRSxrQ0FBQTtFQUNBLGtCQUFBO0FBNElKOztBQXhJQTtFQUNFO0lBQU8seUJBQUE7RUE0SVA7QUFDRjtBQTFJQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBNElGO0FBMUlFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQTRJSjs7QUF4SUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUEySUY7O0FBeElBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBMklGO0FBeklFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBMklKO0FBeElFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBMElKOztBQXRJQTtFQUNFO0lBQU8seUJBQUE7RUEwSVA7QUFDRjtBQXhJQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQTBJRjtBQXpJRTtFQUFJLGVBQUE7QUE0SU47QUExSUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQTRJSjtBQTFJSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUE0SU47QUExSU07RUFDRSx5QkFBQTtBQTRJUjtBQXZJRTtFQUNFLG9FQUFBO0VBQ0EsVUFBQTtBQXlJSjs7QUFySUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXdJSjs7QUFySUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUF3SUo7O0FBcklBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBd0lKOztBQXJJQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBd0lKOztBQXJJQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUF3SUo7O0FBcklBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FBd0lGOztBQXJJQTs7RUFFRSxtQkFBQSxFQUFBLHFCQUFBO0VBQ0EsWUFBQSxFQUFBLG1CQUFBO0VBQ0Esb0JBQUEsRUFBQSw0QkFBQTtBQXdJRiIsImZpbGUiOiJwb3MtY2Fpc3NlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnRfcG9zX2NhaXNzZSB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuLmhlYWRlcl9wb3NfY2Fpc3NlIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDEwcHg7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDYwcHg7IGJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDFweCAycHggMHB4OyBwYWRkaW5nOiAwIDE1cHg7IHBvc2l0aW9uOiBzdGlja3k7IHRvcDogMDsgei1pbmRleDogOTk5O31cbi5jb250ZW50X2hlYWRlcl9wb3NfY2Fpc3NlX3JpZ2h0IHtkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweH1cbnVsIHsgbGlzdC1zdHlsZTogbm9uZTsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwO31cbnAgeyBtYXJnaW46IDA7IH1cbi5kb3VibGUgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7fVxuLmljb25fcmV0b3VyIGkgeyBmb250LXNpemU6IDIwcHg7IGN1cnNvcjogcG9pbnRlcjt9XG4uaW5wdXRTZWFyY2ggeyBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiAyNTBweDsgaGVpZ2h0OiA0MHB4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO31cbi5pbnB1dFNlYXJjaCBpbnB1dCB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IHBhZGRpbmctbGVmdDogMTBweDsgYm9yZGVyLXJhZGl1czogNXB4OyBib3JkZXI6IDFweCBzb2xpZCAjMDAwO31cbi5pbnB1dFNlYXJjaCBpIHsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMDsgbWFyZ2luLXJpZ2h0OiAxNXB4OyBmb250LXNpemU6IDE3cHg7fVxuLmJhcnJlIHsgaGVpZ2h0OiAyNXB4OyB3aWR0aDogMXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwM2Y7IG1hcmdpbjogOHB4IDEwcHg7fVxuLmFkZC10YXNrIHsgcGFkZGluZzogMTBweCAzMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0OyBjb2xvcjogI2ZmZmZmZjsgYm9yZGVyLXJhZGl1czogNXB4OyBib3JkZXI6IG5vbmU7fVxuLmFkZC10YXNrOmhvdmVyIHsgYmFja2dyb3VuZC1jb2xvcjogIzAzNjFjNiB9XG4uY2Fpc3NlLWNvbnRhaW5lciB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7IGdhcDogMTZweDsgcGFkZGluZzogNXB4IDIwcHggMjBweDt9XG4vLyAuYWxsX2NhaXNzZV9jb250YWluZXIgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpOyBnYXA6IDE2cHg7IHBhZGRpbmc6IDAgMjBweCAyMHB4O31cbi5hbGwtY2Fpc3NlLWNvbnRhaW5lci1ib3R0b20geyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOyBnYXA6IDE2cHg7IHBhZGRpbmc6IDAgMjBweCAyMHB4O31cbi5jYWlzc2UtY2FyZCB7IGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7IHBhZGRpbmc6IDIwcHg7IGJvcmRlci1yYWRpdXM6IDRweDsgbWluLWhlaWdodDogMTUwcHg7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjt9XG4uY2Fpc3NlLW5vbSB7IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE4cHg7IGNvbG9yOiAjMWExYTFhO31cbi5jYWlzc2UtYnRuIHsgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgY29sb3I6IHdoaXRlOyBib3JkZXI6IG5vbmU7IHBhZGRpbmc6IDZweCA4cHg7IGJvcmRlci1yYWRpdXM6IDZweDsgY3Vyc29yOiBwb2ludGVyOyBmb250LXdlaWdodDogNTAwOyBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTt9XG4uY2Fpc3NlLWJ0bjpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6ICMwMzYxYzY7fVxuLnByb2ZpbCB7IGJhY2tncm91bmQtY29sb3I6ICNFOUQ0MjE7IHBhZGRpbmc6IDBweCAxMnB4OyBib3JkZXItcmFkaXVzOiA0cHg7IGN1cnNvcjogcG9pbnRlcjt9XG4ucHJvZmlsIHNwYW4geyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjMDAwMDAwO31cbi5pY29uX21vcmUgeyBjdXJzb3I6IHBvaW50ZXI7IGRpc3BsYXk6IG5vbmU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtMTFweDsgcmlnaHQ6IC0xMnB4O31cbi5pY29uX21vcmUgaSB7IGZvbnQtc2l6ZTogMThweDsgfVxuLmJsb2NrIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBwb3NpdGlvbjogcmVsYXRpdmU7fVxuLmNhaXNzZS1jYXJkOmhvdmVyIC5pY29uX21vcmUgeyBkaXNwbGF5OiBibG9jazt9XG4udGl0cmVfYWxsX2NhaXNzZSBoNiB7IGZvbnQtc2l6ZTogMTZweDsgfVxuXG4vKiBTdHlsZXMgcG91ciBsZSBwb3B1cCAqL1xuLm1vZGFsLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5tb2RhbC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIG1heC13aWR0aDogOTAlO1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGFuaW1hdGlvbjogbW9kYWxBcHBlYXIgMC4zcyBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBtb2RhbEFwcGVhciB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxuICBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM2NjY7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmMDAwMDtcbiAgfVxufVxuXG4ubW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIFxuICAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBcbiAgICBsYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICB9XG4gICAgXG4gICAgaW5wdXQsIHNlbGVjdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzQ5OGRiO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDEycHg7XG4gIFxuICAuYnRuLWNhbmNlbCwgLmJ0bi1zdWJtaXQge1xuICAgIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cbiAgXG4gIC5idG4tY2FuY2VsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICAgIH1cbiAgfVxuICBcbiAgLmJ0bi1zdWJtaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzYxYzY7XG4gICAgfVxuICB9XG59XG5cbi8qIFN0eWxlcyBwb3VyIGxlcyBlcnJldXJzICovXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViZWU7XG4gIGNvbG9yOiAjYjcxYzFjO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBcbiAgaSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbi8qIFNwaW5uZXIgZGUgY2hhcmdlbWVudCAqL1xuLmxvYWRpbmctc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3AtY29sb3I6IHdoaXRlO1xuICBhbmltYXRpb246IHNwaW4gMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4vKiBEw6lzYWN0aXZlciBsZXMgYm91dG9ucyBwZW5kYW50IGxlIGNoYXJnZW1lbnQgKi9cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLm9fcGFnZXJfcHJldmlvdXMgaSxcbi5vX3BhZ2VyX25leHQgaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5kLXByaW50LW5vbmUgYnV0dG9ue1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xufVxuXG4uZC1wcmludC1ub25lIC5vX3BhZ2VyX3ByZXZpb3VzIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG5cbi5kLXByaW50LW5vbmUgLm9fcGFnZXJfbmV4dCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuXG4uY29udGVudF9zZWxlY3Qge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDZweCAzMHB4IDZweCA3cHg7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNnB4IDI0cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAwcHggMHB4IDFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBBam91dGV6IGRhbnMgcG9zLWNhaXNzZS5jb21wb25lbnQuc2NzcyAqL1xuXG4ubG9hZGluZy1pbmRpY2F0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6ICM2NDc0OGI7XG4gIFxuICAuc3BpbiB7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLm5vLWNhaXNzZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiAjODg4O1xuICBcbiAgaSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLmNhaXNzZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNhaXNzZS1zdGF0dXMge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIFxuICAmLm9wZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZWQ7XG4gICAgY29sb3I6ICMwYTgxNTA7XG4gIH1cbiAgXG4gICYuY2xvc2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJlYmVjO1xuICAgIGNvbG9yOiAjZGUzNjE4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi5pY29uX21vcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaSB7IGZvbnQtc2l6ZTogMThweDsgfVxuXG4gIC5kcm9wZG93bi1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlOyAgICAgICAvLyBqdXN0ZSBlbiBkZXNzb3VzIGRlIGzigJlpY8O0bmVcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgcGFkZGluZzogMDtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIgLmRyb3Bkb3duLW1lbnUge1xuICAgIC8qIE9wdGlvbm5lbCA6IGFwcGFyZW5jZSBhdSBzdXJ2b2wsIG1haXMgbGUgKm5nSWYgZ8OocmUgbOKAmWFmZmljaGFnZSAqL1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbn1cblxuLmNhaXNzZS1zdGF0dXMge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNhaXNzZS1zdGF0dXMub3BlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZmNlZjtcbiAgICBjb2xvcjogIzBlOWY2ZTtcbn1cblxuLmNhaXNzZS1zdGF0dXMuY2xvc2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlOGU4O1xuICAgIGNvbG9yOiAjYzgxZTFlO1xufVxuXG4uY2Fpc3NlLWJ0bi5kaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcbiAgICBjb2xvcjogIzZiNzI4MDtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uc2VsZWN0ZWQtYm91dGlxdWUge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjRmODtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QxZDVkYjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMWUyOTNiO1xufVxuXG4uY2Fpc3NlLWNvbnRhaW5lci1ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNhaXNzZS1idG5bZGlzYWJsZWRdLFxuLmNhaXNzZS1idG4uZGlzYWJsZWQtbGlrZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7ICAgIC8qIGN1cnNldXIgaW50ZXJkaXQgKi9cbiAgb3BhY2l0eTogMC42OyAgICAgICAgICAgLyogdmlzdWVsIGF0dMOpbnXDqSAqL1xuICBwb2ludGVyLWV2ZW50czogbm9uZTsgICAvKiBzw6ljdXJpdMOpIHN1cHBsw6ltZW50YWlyZSAqL1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUE9TL3Bvcy1jYWlzc2UvcG9zLWNhaXNzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFBc0Isa0JBQUE7QUFHdEI7O0FBRkE7RUFBcUIsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLDhCQUFBO0VBQWdDLFNBQUE7RUFBVyxXQUFBO0VBQWEsWUFBQTtFQUFjLHNCQUFBO0VBQXdCLCtDQUFBO0VBQWlELGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsTUFBQTtFQUFRLFlBQUE7QUFpQm5QOztBQWhCQTtFQUFrQyxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsUUFBQTtBQXNCdEU7O0FBckJBO0VBQUssZ0JBQUE7RUFBa0IsU0FBQTtFQUFXLFVBQUE7QUEyQmxDOztBQTFCQTtFQUFJLFNBQUE7QUE4Qko7O0FBN0JBO0VBQVUsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFNBQUE7QUFtQzlDOztBQWxDQTtFQUFpQixlQUFBO0VBQWlCLGVBQUE7QUF1Q2xDOztBQXRDQTtFQUFlLGtCQUFBO0VBQW9CLFlBQUE7RUFBYyxZQUFBO0VBQWMsYUFBQTtFQUFlLG1CQUFBO0FBOEM5RTs7QUE3Q0E7RUFBcUIsV0FBQTtFQUFhLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixrQkFBQTtFQUFvQixzQkFBQTtBQXFEeEY7O0FBcERBO0VBQWlCLGtCQUFBO0VBQW9CLFFBQUE7RUFBVSxrQkFBQTtFQUFvQixlQUFBO0FBMkRuRTs7QUExREE7RUFBUyxZQUFBO0VBQWMsVUFBQTtFQUFZLDZDQUFBO0VBQTZCLGdCQUFBO0FBaUVoRTs7QUFoRUE7RUFBWSxrQkFBQTtFQUFvQix5QkFBQTtFQUEyQixjQUFBO0VBQWdCLGtCQUFBO0VBQW9CLFlBQUE7QUF3RS9GOztBQXZFQTtFQUFrQix5QkFBQTtBQTJFbEI7O0FBMUVBO0VBQW9CLGFBQUE7RUFBZSxxQ0FBQTtFQUF1QyxTQUFBO0VBQVcsc0JBQUE7QUFpRnJGOztB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LGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBNElKO0FBMUlJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQTRJTjtBQTFJTTtFQUNFLHlCQUFBO0FBNElSO0FBdklFO0VBQ0Usb0VBQUE7RUFDQSxVQUFBO0FBeUlKOztBQXJJQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBd0lKOztBQXJJQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQXdJSjs7QUFySUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUF3SUo7O0FBcklBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUF3SUo7O0FBcklBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXdJSjs7QUFySUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7QUF3SUY7O0FBcklBOztFQUVFLG1CQUFBLEVBQUEscUJBQUE7RUFDQSxZQUFBLEVBQUEsbUJBQUE7RUFDQSxvQkFBQSxFQUFBLDRCQUFBO0FBd0lGO0FBQ0EsNGhpQkFBNGhpQiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50X3Bvc19jYWlzc2UgeyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbi5oZWFkZXJfcG9zX2NhaXNzZSB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAxMHB4OyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA2MHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMnB4IDBweDsgcGFkZGluZzogMCAxNXB4OyBwb3NpdGlvbjogc3RpY2t5OyB0b3A6IDA7IHotaW5kZXg6IDk5OTt9XG4uY29udGVudF9oZWFkZXJfcG9zX2NhaXNzZV9yaWdodCB7ZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHh9XG51bCB7IGxpc3Qtc3R5bGU6IG5vbmU7IG1hcmdpbjogMDsgcGFkZGluZzogMDt9XG5wIHsgbWFyZ2luOiAwOyB9XG4uZG91YmxlIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4O31cbi5pY29uX3JldG91ciBpIHsgZm9udC1zaXplOiAyMHB4OyBjdXJzb3I6IHBvaW50ZXI7fVxuLmlucHV0U2VhcmNoIHsgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogMjUwcHg7IGhlaWdodDogNDBweDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjt9XG4uaW5wdXRTZWFyY2ggaW5wdXQgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBwYWRkaW5nLWxlZnQ6IDEwcHg7IGJvcmRlci1yYWRpdXM6IDVweDsgYm9yZGVyOiAxcHggc29saWQgIzAwMDt9XG4uaW5wdXRTZWFyY2ggaSB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDA7IG1hcmdpbi1yaWdodDogMTVweDsgZm9udC1zaXplOiAxN3B4O31cbi5iYXJyZSB7IGhlaWdodDogMjVweDsgd2lkdGg6IDFweDsgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDNmOyBtYXJnaW46IDhweCAxMHB4O31cbi5hZGQtdGFzayB7IHBhZGRpbmc6IDEwcHggMzBweDsgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgY29sb3I6ICNmZmZmZmY7IGJvcmRlci1yYWRpdXM6IDVweDsgYm9yZGVyOiBub25lO31cbi5hZGQtdGFzazpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6ICMwMzYxYzYgfVxuLmNhaXNzZS1jb250YWluZXIgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOyBnYXA6IDE2cHg7IHBhZGRpbmc6IDVweCAyMHB4IDIwcHg7fVxuLy8gLmFsbF9jYWlzc2VfY29udGFpbmVyIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTsgZ2FwOiAxNnB4OyBwYWRkaW5nOiAwIDIwcHggMjBweDt9XG4uYWxsLWNhaXNzZS1jb250YWluZXItYm90dG9tIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTsgZ2FwOiAxNnB4OyBwYWRkaW5nOiAwIDIwcHggMjBweDt9XG4uY2Fpc3NlLWNhcmQgeyBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyBwYWRkaW5nOiAyMHB4OyBib3JkZXItcmFkaXVzOiA0cHg7IG1pbi1oZWlnaHQ6IDE1MHB4OyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47fVxuLmNhaXNzZS1ub20geyBmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxOHB4OyBjb2xvcjogIzFhMWExYTt9XG4uY2Fpc3NlLWJ0biB7IGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7IGNvbG9yOiB3aGl0ZTsgYm9yZGVyOiBub25lOyBwYWRkaW5nOiA2cHggOHB4OyBib3JkZXItcmFkaXVzOiA2cHg7IGN1cnNvcjogcG9pbnRlcjsgZm9udC13ZWlnaHQ6IDUwMDsgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7fVxuLmNhaXNzZS1idG46aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM2MWM2O31cbi5wcm9maWwgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlENDIxOyBwYWRkaW5nOiAwcHggMTJweDsgYm9yZGVyLXJhZGl1czogNHB4OyBjdXJzb3I6IHBvaW50ZXI7fVxuLnByb2ZpbCBzcGFuIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzAwMDAwMDt9XG4uaWNvbl9tb3JlIHsgY3Vyc29yOiBwb2ludGVyOyBkaXNwbGF5OiBub25lOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLTExcHg7IHJpZ2h0OiAtMTJweDt9XG4uaWNvbl9tb3JlIGkgeyBmb250LXNpemU6IDE4cHg7IH1cbi5ibG9jayB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgcG9zaXRpb246IHJlbGF0aXZlO31cbi5jYWlzc2UtY2FyZDpob3ZlciAuaWNvbl9tb3JlIHsgZGlzcGxheTogYmxvY2s7fVxuLnRpdHJlX2FsbF9jYWlzc2UgaDYgeyBmb250LXNpemU6IDE2cHg7IH1cblxuLyogU3R5bGVzIHBvdXIgbGUgcG9wdXAgKi9cbi5tb2RhbC1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubW9kYWwtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBhbmltYXRpb246IG1vZGFsQXBwZWFyIDAuM3MgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgbW9kYWxBcHBlYXIge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNjY2O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICBcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZjAwMDA7XG4gIH1cbn1cblxuLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAyNHB4O1xuICBcbiAgLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgXG4gICAgbGFiZWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICM1NTU7XG4gICAgfVxuICAgIFxuICAgIGlucHV0LCBzZWxlY3Qge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIFxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzM0OThkYjtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxMnB4O1xuICBcbiAgLmJ0bi1jYW5jZWwsIC5idG4tc3VibWl0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB9XG4gIFxuICAuYnRuLWNhbmNlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgICB9XG4gIH1cbiAgXG4gIC5idG4tc3VibWl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM2MWM2O1xuICAgIH1cbiAgfVxufVxuXG4vKiBTdHlsZXMgcG91ciBsZXMgZXJyZXVycyAqL1xuLmVycm9yLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xuICBjb2xvcjogI2I3MWMxYztcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuXG4vKiBTcGlubmVyIGRlIGNoYXJnZW1lbnQgKi9cbi5sb2FkaW5nLXNwaW5uZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wLWNvbG9yOiB3aGl0ZTtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLyogRMODwqlzYWN0aXZlciBsZXMgYm91dG9ucyBwZW5kYW50IGxlIGNoYXJnZW1lbnQgKi9cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLm9fcGFnZXJfcHJldmlvdXMgaSxcbi5vX3BhZ2VyX25leHQgaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5kLXByaW50LW5vbmUgYnV0dG9ue1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xufVxuXG4uZC1wcmludC1ub25lIC5vX3BhZ2VyX3ByZXZpb3VzIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG5cbi5kLXByaW50LW5vbmUgLm9fcGFnZXJfbmV4dCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuXG4uY29udGVudF9zZWxlY3Qge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDZweCAzMHB4IDZweCA3cHg7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNnB4IDI0cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAwcHggMHB4IDFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBBam91dGV6IGRhbnMgcG9zLWNhaXNzZS5jb21wb25lbnQuc2NzcyAqL1xuXG4ubG9hZGluZy1pbmRpY2F0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6ICM2NDc0OGI7XG4gIFxuICAuc3BpbiB7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLm5vLWNhaXNzZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiAjODg4O1xuICBcbiAgaSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLmNhaXNzZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNhaXNzZS1zdGF0dXMge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIFxuICAmLm9wZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZWQ7XG4gICAgY29sb3I6ICMwYTgxNTA7XG4gIH1cbiAgXG4gICYuY2xvc2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJlYmVjO1xuICAgIGNvbG9yOiAjZGUzNjE4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi5pY29uX21vcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaSB7IGZvbnQtc2l6ZTogMThweDsgfVxuXG4gIC5kcm9wZG93bi1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlOyAgICAgICAvLyBqdXN0ZSBlbiBkZXNzb3VzIGRlIGzDosKAwplpY8ODwrRuZVxuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlciAuZHJvcGRvd24tbWVudSB7XG4gICAgLyogT3B0aW9ubmVsIDogYXBwYXJlbmNlIGF1IHN1cnZvbCwgbWFpcyBsZSAqbmdJZiBnw4PCqHJlIGzDosKAwplhZmZpY2hhZ2UgKi9cbiAgICBjb2xvcjogcmVkO1xuICB9XG59XG5cbi5jYWlzc2Utc3RhdHVzIHtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYWlzc2Utc3RhdHVzLm9wZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2ZjZWY7XG4gICAgY29sb3I6ICMwZTlmNmU7XG59XG5cbi5jYWlzc2Utc3RhdHVzLmNsb3NlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZThlODtcbiAgICBjb2xvcjogI2M4MWUxZTtcbn1cblxuLmNhaXNzZS1idG4uZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU3ZWI7XG4gICAgY29sb3I6ICM2YjcyODA7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLnNlbGVjdGVkLWJvdXRpcXVlIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY0Zjg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMWQ1ZGI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzFlMjkzYjtcbn1cblxuLmNhaXNzZS1jb250YWluZXItYm90dG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jYWlzc2UtYnRuW2Rpc2FibGVkXSxcbi5jYWlzc2UtYnRuLmRpc2FibGVkLWxpa2Uge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkOyAgICAvKiBjdXJzZXVyIGludGVyZGl0ICovXG4gIG9wYWNpdHk6IDAuNjsgICAgICAgICAgIC8qIHZpc3VlbCBhdHTDg8KpbnXDg8KpICovXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAgIC8qIHPDg8KpY3VyaXTDg8KpIHN1cHBsw4PCqW1lbnRhaXJlICovXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_POS_pos-caisse_pos-caisse_component_ts.js.map