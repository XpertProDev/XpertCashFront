"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_POS_pos-accueil_pos-accueil_component_ts"],{

/***/ 50505:
/*!**********************************************************!*\
  !*** ./src/app/POS/pos-accueil/pos-accueil.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PosAccueilComponent: () => (/* binding */ PosAccueilComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_admin_page_MODELS_click_outside_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/admin-page/MODELS/click-outside.directive */ 40724);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var src_app_admin_page_MODELS_cfa_currency_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin-page/MODELS/cfa-currency.pipe */ 41731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _view_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-state.service */ 80145);
/* harmony import */ var src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin-page/SERVICES/users.service */ 88026);
/* harmony import */ var src_app_admin_page_SERVICES_CaisseService_pos_caisse_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/admin-page/SERVICES/CaisseService/pos-caisse-service */ 74864);
/* harmony import */ var src_app_admin_page_SERVICES_commande_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/admin-page/SERVICES/commande-state.service */ 17022);
/* harmony import */ var src_app_admin_page_SERVICES_CaisseService_boutique_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/admin-page/SERVICES/CaisseService/boutique-state.service */ 37788);
/* harmony import */ var src_app_admin_page_SERVICES_boutique_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/admin-page/SERVICES/boutique-service */ 52719);
/* harmony import */ var src_app_admin_page_SERVICES_SearchService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/admin-page/SERVICES/SearchService */ 90612);
/* harmony import */ var src_app_admin_page_SERVICES_VenteService_calculator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/admin-page/SERVICES/VenteService/calculator.service */ 68420);
/* harmony import */ var src_app_admin_page_SERVICES_VenteService_scanner_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/admin-page/SERVICES/VenteService/scanner.service */ 36406);


















const _c0 = ["calculatorRef"];
const _c1 = ["calcElement"];
const _c2 = a0 => ({
  "transform": a0
});
const _c3 = (a0, a1, a2) => ({
  "transform": a0,
  "width.px": a1,
  "height.px": a2
});
function PosAccueilComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_li_15_Template_li_click_0_listener() {
      const cmd_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.setActiveCommande(cmd_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cmd_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("list_commande_active", ctx_r3.activeCommande === cmd_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", cmd_r3, " ");
  }
}
function PosAccueilComponent_li_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_li_16_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.showCommandePopup = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function PosAccueilComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function PosAccueilComponent_div_18_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_18_li_8_Template_li_click_0_listener() {
      const cmd_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.setActiveCommande(cmd_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cmd_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r3.activeCommande === cmd_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", cmd_r8, " ");
  }
}
function PosAccueilComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 40)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_18_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("mousedown", function PosAccueilComponent_div_18_Template_div_mousedown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.startDragPopup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Liste des commandes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_18_Template_i_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.closePopup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 44)(7, "ul", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, PosAccueilComponent_div_18_li_8_Template, 2, 3, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](2, _c2, "translate3d(" + ctx_r3.popupOffsetPopup.x + "px, " + ctx_r3.popupOffsetPopup.y + "px, 0)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r3.commandes);
  }
}
function PosAccueilComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r3.selectedBoutiqueName);
  }
}
function PosAccueilComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function PosAccueilComponent_i_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 48);
  }
}
function PosAccueilComponent_i_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_i_28_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function PosAccueilComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 49)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_33_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r10);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.toggleView("grid"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_33_Template_div_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r10);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.toggleView("list"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Cadre ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, ctx_r3.isListView$) ? "\u2713" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" Liste ", !_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 4, ctx_r3.isListView$) ? "\u2713" : "", " ");
  }
}
function PosAccueilComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 51)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " Installer l'application ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_39_Template_div_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.handleAnalytique());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " Tableau de bord ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, " Recharger les donnees ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_39_Template_div_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.prepareFermerCaisse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, " Fermer la caisse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function PosAccueilComponent_div_41_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Chargement des d\u00E9tails... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function PosAccueilComponent_div_41_div_8_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 71)(1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Ferm\u00E9e le :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r3.formatDate(ctx_r3.caisseDetails.dateFermeture));
  }
}
function PosAccueilComponent_div_41_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 66)(1, "div", 67)(2, "div", 30)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div")(6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 70)(11, "div", 71)(12, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Statut:");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 71)(17, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "Montant initial :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](21, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 71)(23, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, "Montant courant :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](27, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "div", 71)(29, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, "Ouverte le :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, PosAccueilComponent_div_41_div_8_div_33_Template, 5, 1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 71)(35, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36, "Montant obtenu :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](39, "cfaCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div", 71)(41, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, "Nom Vendeur :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "div", 71)(46, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, "Nom Boutique :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r3.caisseDetails.nomVendeur ? ctx_r3.caisseDetails.nomVendeur[0] : "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r3.caisseDetails.nomVendeur || "Vendeur non sp\u00E9cifi\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r3.caisseDetails.nomBoutique || "Boutique non sp\u00E9cifi\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("text-success-status", ctx_r3.caisseDetails.statut === "OUVERTE")("text-danger", ctx_r3.caisseDetails.statut === "FERMEE");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r3.caisseDetails.statut === "OUVERTE" ? "Ouverte" : "Ferm\u00E9e", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](21, 15, ctx_r3.caisseDetails.montantInitial));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](27, 17, ctx_r3.caisseDetails.montantCourant));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r3.formatDate(ctx_r3.caisseDetails.dateOuverture));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.caisseDetails.dateFermeture);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](39, 19, ctx_r3.getMontantObtenu()));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r3.caisseDetails.nomVendeur || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r3.caisseDetails.nomBoutique || "N/A");
  }
}
function PosAccueilComponent_div_41_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r3.fermetureErrorMessage, " ");
  }
}
function PosAccueilComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 40)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_41_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("mousedown", function PosAccueilComponent_div_41_Template_div_mousedown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.startDragPopup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Fermer la caisse");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_41_Template_i_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.showFermerCaissePopup = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, PosAccueilComponent_div_41_div_7_Template, 3, 0, "div", 58)(8, PosAccueilComponent_div_41_div_8_Template, 50, 21, "div", 59)(9, PosAccueilComponent_div_41_div_9_Template, 3, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 61)(11, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_41_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.showFermerCaissePopup = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_41_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, " Confirmer la fermeture ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](6, _c2, "translate3d(" + ctx_r3.popupOffsetPopup.x + "px, " + ctx_r3.popupOffsetPopup.y + "px, 0)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.isLoadingCaisseDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.caisseDetails && !ctx_r3.isLoadingCaisseDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.fermetureErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r3.isLoadingCaisseDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r3.isLoadingCaisseDetails || !ctx_r3.caisseDetails);
  }
}
function PosAccueilComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 77)(1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.minimizeCalculator());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 79, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_div_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalculatorClick());
    })("mousemove", function PosAccueilComponent_div_42_Template_div_mousemove_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalculatorMouseMove($event));
    })("mouseleave", function PosAccueilComponent_div_42_Template_div_mouseleave_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalculatorMouseLeave($event));
    })("mousedown", function PosAccueilComponent_div_42_Template_div_mousedown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalculatorMouseDown($event));
    })("touchstart", function PosAccueilComponent_div_42_Template_div_touchstart_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalculatorTouchStart($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 80)(5, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("mousedown", function PosAccueilComponent_div_42_Template_div_mousedown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.startDragPopup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "Calculatrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 82)(9, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_i_click_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r3.minimizeCalculator();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_i_click_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r3.closeCalculator();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 84)(12, "div", 85, 2)(14, "div", 86)(15, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "12\u00A0FICHES");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 90)(20, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "Dispositifs de calcul");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 93)(25, "div", 94)(26, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "div", 96)(29, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("+/-"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, "+/-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("\u221A"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "\u221A");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("ON/AC"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, "ON/AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "div", 99)(36, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("M+"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, "M+");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("M-"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, "M-");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("MRC"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "MRC");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("GT"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](43, "GT");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("C.CE"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45, "C.CE");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("MC"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, "MC");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("MR"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, "MR");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("Ex"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](51, "Ex");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("\u00F7"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](53, "\u00F7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_54_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("\u25B6"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](55, "\u25B6");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("7"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](57, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_58_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("8"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](59, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_60_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("9"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](61, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("\u00D7"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](63, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](64, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_64_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("%"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](65, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_66_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](67, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](68, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_68_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("5"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](69, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_70_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("6"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](71, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_72_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("\u2212"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](73, "\u2212");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_74_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("MU"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](75, "MU");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_76_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("1"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](77, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](78, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_78_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](79, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](80, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_80_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("3"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](81, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](82, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_82_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("+"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](83, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](84, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_84_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("="));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](85, "=");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](86, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_86_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("0"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](87, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](88, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_88_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("00"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](89, "00");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](90, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_div_42_Template_button_click_90_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.onCalcKey("."));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](91, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction3"](5, _c3, "translate3d(" + ctx_r3.popupOffsetPopup.x + "px, " + ctx_r3.popupOffsetPopup.y + "px, 0)", ctx_r3.calcWidth, ctx_r3.calcHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("minimized", ctx_r3.isCalculatorMinimized);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r3.calcDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r3.calcSolarDisplay);
  }
}
class PosAccueilComponent {
  constructor(router, viewState, userService, posCaisseService, commandeState, boutiqueState, boutiqueService, searchService, calculator, scannerService, renderer) {
    this.router = router;
    this.viewState = viewState;
    this.userService = userService;
    this.posCaisseService = posCaisseService;
    this.commandeState = commandeState;
    this.boutiqueState = boutiqueState;
    this.boutiqueService = boutiqueService;
    this.searchService = searchService;
    this.calculator = calculator;
    this.scannerService = scannerService;
    this.renderer = renderer;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.imgUrl;
    // isListView = true;
    this.showDropdown = false;
    this.activeButton = 'vente';
    this.showMenuDropdown = false;
    this.userName = '';
    this.nomEntreprise = '';
    this.photo = null;
    this.photoUrl = null;
    this.commandes = ['001']; // Liste initiale
    this.activeCommande = '001'; // Commande active
    // showCommandeDropdown = false;
    this.showCommandePopup = false;
    this.boutiques = [];
    this.selectedBoutiqueId = null;
    this.selectedBoutiqueName = '';
    this.boutiquesLoaded = false;
    this.isBoutiqueNameLoaded = false;
    this.scanInProgress = false;
    this.isDraggingPopup = false;
    this.startXPopup = 0;
    this.startYPopup = 0;
    this.initialXPopup = 0;
    this.initialYPopup = 0;
    this.popupOffsetPopup = {
      x: 0,
      y: 0
    };
    this.showFermerCaissePopup = false;
    this.caisseDetails = null;
    this.isLoadingCaisseDetails = false;
    this.fermetureErrorMessage = null;
    this.showCalculatorPopup = false;
    this.baseWidth = 420;
    this.baseHeight = 480;
    this.calcWidth = 420;
    this.calcHeight = 480;
    this.calcScale = 1;
    this.hoverResizeCorner = null;
    // seuil (en px) pour détecter la zone de redimensionnement près des coins
    this.cornerThreshold = 18;
    // resize state
    this.isResizing = false;
    this.resizeCorner = null;
    this.startXResize = 0;
    this.startYResize = 0;
    this.initialWidth = 0;
    this.initialHeight = 0;
    this.initialPopupX = 0;
    this.initialPopupY = 0;
    // min / max
    this.minWidth = 160;
    this.minHeight = 200;
    this.maxWidth = window.innerWidth - 40;
    this.maxHeight = window.innerHeight - 40;
    // Ajoutez ces propriétés à votre classe
    this.isCalculatorMinimized = false;
    this.calculatorPosition = {
      x: 100,
      y: 100
    };
    this.isCalculatorActive = false;
    this.onMouseMovePopup = event => {
      if (!this.isDraggingPopup) return;
      requestAnimationFrame(() => {
        const deltaX = event.clientX - this.startXPopup;
        const deltaY = event.clientY - this.startYPopup;
        this.popupOffsetPopup.x = this.initialXPopup + deltaX;
        this.popupOffsetPopup.y = this.initialYPopup + deltaY;
      });
    };
    this.onMouseUpPopup = () => {
      this.isDraggingPopup = false;
      document.removeEventListener('mousemove', this.onMouseMovePopup);
      document.removeEventListener('mouseup', this.onMouseUpPopup);
    };
    this.searchTerm = '';
    this.isListView$ = this.viewState.isListView$;
    // Initialiser avec les commandes actuelles
    this.commandes = this.commandeState.getAllCommandesIds();
    // S'abonner aux mises à jour des commandes
    this.commandeState.commandeUpdated$.subscribe(() => {
      this.commandes = this.commandeState.getAllCommandesIds();
    });
    this.commandeState.activeCommandeId$.subscribe(id => {
      this.activeCommande = id;
    });
    this.commandeSubscription = this.commandeState.activeCommandeId$.subscribe(id => {
      this.activeCommande = id;
    });
    this.calculatorActiveSub = this.calculator.isActive$.subscribe(isActive => {
      this.isCalculatorActive = isActive;
    });
  }
  ngOnInit() {
    const currentRoute = this.router.url;
    this.activeButton = currentRoute.includes('/commandes') ? 'commande' : 'vente';
    this.getUserInfo();
    this.loadBoutiques();
    // Charger toutes les boutiques une fois (pour résoudre id -> nom)
    this.boutiqueService.getBoutiquesByEntreprise().subscribe({
      next: list => {
        this.boutiques = list || [];
        this.boutiquesLoaded = true;
        // si on avait déjà un id, mettre à jour le nom
        if (this.selectedBoutiqueId !== null) {
          this.updateBoutiqueName(this.selectedBoutiqueId);
        }
      },
      error: err => console.error('Erreur chargement boutiques', err)
    });
    // S'abonner aux changements de boutique
    this.boutiqueSub = this.boutiqueState.selectedBoutique$.subscribe(id => {
      this.selectedBoutiqueId = id;
      if (id === null) {
        this.selectedBoutiqueName = 'Sélectionnez une boutique';
      } else {
        this.updateBoutiqueName(id);
      }
    });
    // Si on arrive par navigation avec une caisse passée en state, on peut setter aussi
    const nav = this.router.getCurrentNavigation()?.extras?.state;
    if (nav?.caisse?.boutiqueId) {
      this.boutiqueState.setSelectedBoutique(nav.caisse.boutiqueId);
    }
    // S'abonner aux événements de scan
    this.scannerService.getScanningObservable().subscribe(scanning => {
      this.scanInProgress = scanning;
    });
  }
  loadBoutiques() {
    this.boutiqueService.getBoutiquesByEntreprise().subscribe({
      next: list => {
        this.boutiques = list || [];
        this.boutiquesLoaded = true;
        // Vérifier si une boutique est déjà sélectionnée dans le state
        const currentBoutiqueId = this.boutiqueState.getCurrentValue();
        if (currentBoutiqueId) {
          this.updateBoutiqueName(currentBoutiqueId);
        }
      },
      error: err => console.error('Erreur chargement boutiques', err)
    });
  }
  updateBoutiqueName(id) {
    // reset du flag pendant le chargement
    this.isBoutiqueNameLoaded = false;
    const found = this.boutiques.find(b => b.id === id);
    if (found) {
      this.selectedBoutiqueName = found.nomBoutique || '';
      this.isBoutiqueNameLoaded = true;
    } else {
      // Si non trouvée, tenter une requête directe
      this.boutiqueService.getBoutiqueById(id).subscribe({
        next: boutique => {
          this.selectedBoutiqueName = boutique?.nomBoutique || 'Boutique inconnue';
          this.isBoutiqueNameLoaded = true;
        },
        error: () => {
          this.selectedBoutiqueName = 'Boutique inconnue';
          this.isBoutiqueNameLoaded = true;
        }
      });
    }
  }
  ngOnDestroy() {
    this.removeResizeListeners();
    this.boutiqueSub?.unsubscribe();
    this.commandeSubscription?.unsubscribe();
    this.calculatorActiveSub?.unsubscribe();
  }
  // ngOnDestroy() {
  //   // Nettoyer la souscription
  //   if (this.commandeSubscription) {
  //     this.commandeSubscription.unsubscribe();
  //   }
  // }
  toggleView(viewType) {
    this.viewState.setViewPreference(viewType === 'grid');
    this.showDropdown = true;
  }
  onClickCommandes() {
    this.activeButton = 'commande';
    this.router.navigate(['/pos-accueil/commandes']);
  }
  onClickVente() {
    this.activeButton = 'vente';
    this.router.navigate(['/pos-accueil']);
  }
  toggleMenuDropdown() {
    this.showMenuDropdown = !this.showMenuDropdown;
  }
  addCommande() {
    const newId = this.commandeState.addNewCommande();
    // Récupère la liste mise à jour du service
    this.commandes = this.commandeState.getAllCommandesIds();
    this.setActiveCommande(newId);
    this.showCommandePopup = false;
  }
  // addCommande() {
  //   const newId = this.commandeState.addNewCommande();
  //   this.commandes.push(newId);
  //   this.setActiveCommande(newId);
  // }
  setActiveCommande(cmd) {
    this.commandeState.setActiveCommande(cmd);
    this.activeCommande = cmd;
    this.showCommandePopup = false; // Fermer le popup après sélection
  }
  get visibleCommandes() {
    const start = Math.max(0, this.commandes.length - 6);
    return this.commandes.slice(start);
  }
  get hiddenCommandes() {
    // Commandes non visibles dans la barre principale
    return this.commandes.length > 6 ? this.commandes.slice(0, this.commandes.length - 6) : [];
  }
  getUserInfo() {
    this.userService.getUserInfo().subscribe({
      next: user => {
        this.userName = user.nomComplet.charAt(0).toUpperCase();
        this.nomEntreprise = user.nomEntreprise;
      },
      error: err => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }
  onLogout() {
    console.log("Début de la procédure de déconnexion...");
    // Récupérer l'ID de la boutique active depuis le service BoutiqueStateService
    const boutiqueId = this.boutiqueState.getCurrentValue();
    if (!boutiqueId) {
      console.error("Aucune boutique active détectée.");
      this.router.navigate(['/analytics']);
      return;
    }
    this.userService.getUserInfo().subscribe({
      next: user => {
        console.log('Utilisateur récupéré:', user);
        const userPermissions = user.permissions;
        // Vérifier si l'utilisateur a uniquement la permission "VENDRE_PRODUITS"
        if (userPermissions.length === 1 && userPermissions.includes("VENDRE_PRODUITS")) {
          console.log('L\'utilisateur a uniquement la permission "VENDRE_PRODUITS". Tentative de fermeture de la caisse...');
          // Fermer la caisse pour la boutique active
          this.posCaisseService.fermerCaisse(boutiqueId).subscribe({
            next: response => {
              console.log('Caisse fermée avec succès:', response);
              // Déconnexion de l'utilisateur
              this.userService.logoutUser();
              console.log('Déconnexion de l\'utilisateur...');
              this.router.navigate(['/connexion']).then(success => {
                console.log("Déconnexion réussie ?", success);
              });
            },
            error: err => {
              console.error('Erreur lors de la fermeture de la caisse:', err.message);
              // Si une erreur se produit lors de la fermeture de la caisse, rediriger vers la page d'analytics.
              this.router.navigate(['/analytics']).then(success => {
                console.log("Navigation vers analytics réussie ?", success);
              });
            }
          });
        } else {
          console.log('L\'utilisateur n\'a pas uniquement la permission "VENDRE_PRODUITS", fermeture de la caisse et redirection vers analytics...');
          // Fermer la caisse pour la boutique active
          this.posCaisseService.fermerCaisse(boutiqueId).subscribe({
            next: response => {
              console.log('Caisse fermée avec succès:', response);
              // Redirection vers analytics après fermeture de la caisse
              this.router.navigate(['/analytics']).then(success => {
                console.log("Navigation vers analytics réussie ?", success);
              });
            },
            error: err => {
              console.error('Erreur lors de la fermeture de la caisse:', err.message);
              // Si une erreur se produit lors de la fermeture de la caisse, rediriger vers la page d'analytics.
              this.router.navigate(['/analytics']).then(success => {
                console.log("Navigation vers analytics réussie ?", success);
              });
            }
          });
        }
      },
      error: err => {
        console.error('Erreur lors de la récupération des informations utilisateur:', err);
        // Gestion des erreurs de récupération des infos utilisateur
        this.router.navigate(['/analytics']);
      }
    });
  }
  prepareFermerCaisse() {
    this.isLoadingCaisseDetails = true;
    this.fermetureErrorMessage = null;
    this.caisseDetails = null;
    const boutiqueId = this.boutiqueState.getCurrentValue();
    if (!boutiqueId) {
      this.fermetureErrorMessage = "Aucune boutique sélectionnée";
      this.isLoadingCaisseDetails = false;
      return;
    }
    this.posCaisseService.getDerniereCaisseVendeur(boutiqueId).subscribe({
      next: response => {
        if (typeof response === 'string') {
          this.fermetureErrorMessage = response;
        } else {
          this.caisseDetails = response;
          // Vérifier si la caisse est ouverte
          if (this.caisseDetails.statut !== 'OUVERTE') {
            this.fermetureErrorMessage = "Aucune caisse ouverte pour cette boutique";
          } else {
            this.showFermerCaissePopup = true;
          }
        }
        this.isLoadingCaisseDetails = false;
      },
      error: err => {
        this.fermetureErrorMessage = "Erreur lors du chargement des détails de la caisse: " + err.message;
        this.isLoadingCaisseDetails = false;
      }
    });
  }
  formatDate(dateString) {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Date invalide';
    return date.toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  // Nouvelle méthode pour confirmer la fermeture
  confirmFermerCaisse() {
    if (!this.caisseDetails?.id) return;
    const caisseId = this.caisseDetails.id;
    this.isLoadingCaisseDetails = true;
    this.posCaisseService.fermerCaisse(caisseId).subscribe({
      next: response => {
        this.showFermerCaissePopup = false;
        this.handlePostFermeture();
      },
      error: err => {
        this.fermetureErrorMessage = "Échec de la fermeture de la caisse";
        this.isLoadingCaisseDetails = false;
      }
    });
  }
  // Méthode pour gérer la redirection après fermeture
  handlePostFermeture() {
    this.userService.getUserInfo().subscribe({
      next: user => {
        const permissions = user.permissions;
        if (permissions.length === 1 && permissions.includes("VENDRE_PRODUITS")) {
          this.userService.logoutUser();
          this.router.navigate(['/connexion']);
        } else {
          this.router.navigate(['/analytics']);
        }
      },
      error: () => this.router.navigate(['/analytics'])
    });
  }
  // Méthode pour redirection
  handleAnalytique() {
    this.userService.getUserInfo().subscribe({
      next: user => {
        const permissions = user.permissions;
        if (permissions.length === 1 && permissions.includes("VENDRE_PRODUITS")) {
          this.userService.logoutUser();
          this.router.navigate(['/pos-accueil']);
        } else {
          this.router.navigate(['/analytics']);
        }
      },
      error: () => this.router.navigate(['/analytics'])
    });
  }
  startDragPopup(event) {
    event.preventDefault();
    event.stopPropagation(); // Empêche la propagation à l'overlay
    this.isDraggingPopup = true;
    this.startXPopup = event.clientX;
    this.startYPopup = event.clientY;
    this.initialXPopup = this.popupOffsetPopup.x;
    this.initialYPopup = this.popupOffsetPopup.y;
    document.addEventListener('mousemove', this.onMouseMovePopup);
    document.addEventListener('mouseup', this.onMouseUpPopup);
  }
  closePopup(event) {
    if (event) event.stopPropagation();
    this.showCommandePopup = false;
  }
  getMontantObtenu() {
    if (!this.caisseDetails) return 0;
    return (this.caisseDetails.montantCourant || 0) - (this.caisseDetails.montantInitial || 0);
  }
  // toggleCalculator(): void {
  //   this.showCalculatorPopup = !this.showCalculatorPopup;
  //   if (this.showCalculatorPopup) {
  //     this.isCalculatorMinimized = false;
  //     this.calcWidth = this.baseWidth;
  //     this.calcHeight = this.baseHeight;
  //     this.calcScale = 1;
  //     if (this.calcElement?.nativeElement) {
  //       this.renderer.setStyle(this.calcElement.nativeElement, 'transform', `scale(1)`);
  //     }
  //   }
  // }
  // pos-accueil.component.ts
  toggleCalculator() {
    this.showCalculatorPopup = !this.showCalculatorPopup;
    if (this.showCalculatorPopup) {
      this.calculator.setActive(true);
      this.scannerService.disableScanner();
    } else {
      this.calculator.setActive(false);
      this.scannerService.enableScanner();
    }
  }
  // Ajoutez aussi cette méthode pour fermer proprement
  closeCalculator() {
    this.showCalculatorPopup = false;
    this.scannerService.enableScanner();
  }
  // Méthode appelée depuis le template
  onCalcKey(key) {
    this.calculator.handleKey(key);
  }
  // expose l'affichage pour le template
  get calcDisplay() {
    return this.calculator.display;
  }
  get calcSolarDisplay() {
    return this.calculator.solarDisplay;
  }
  // Optionnel : gestion clavier global pour la calculatrice
  handleKeyDown(event) {
    // Si la calculatrice n'est pas visible, on ne fait rien.
    if (!this.showCalculatorPopup) {
      return;
    }
    // Si l'utilisateur tape dans un input, textarea, etc., on désactive la calculatrice
    // et on laisse l'événement se propager normalement.
    const target = event.target;
    const isTypingInInput = !!target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
    if (isTypingInInput) {
      this.calculator.setActive(false); // Désactive la calculatrice
      return; // Ne pas traiter l'événement pour la calculatrice
    }
    // Si la calculatrice est active, on lui envoie la touche
    if (this.isCalculatorActive) {
      this.calculator.handleComputerKeyboard(event);
    }
  }
  /** Réactive la calculatrice lors d'un clic dessus */
  onCalculatorClick() {
    this.calculator.setActive(true);
  }
  ngAfterViewInit() {
    // mesurer la taille réelle de .calc pour établir la base
    setTimeout(() => {
      if (this.calcElement?.nativeElement) {
        const el = this.calcElement.nativeElement;
        this.baseWidth = el.offsetWidth || 420;
        this.baseHeight = el.offsetHeight || 480;
        // initialiser les dimensions actuelles à la base
        this.calcWidth = this.baseWidth;
        this.calcHeight = this.baseHeight;
        this.calcScale = 1;
      }
      // recalculer max selon fenêtre actuelle
      this.maxWidth = Math.max(400, window.innerWidth - 40);
      this.maxHeight = Math.max(400, window.innerHeight - 40);
    }, 0);
  }
  // Unified start (mouse) — délègue au startResizeFromCoords
  startResize(event, corner) {
    event.preventDefault();
    event.stopPropagation();
    this.startResizeFromCoords(corner, event.clientX, event.clientY);
  }
  // start pour touch
  startResizeTouch(touch, corner) {
    this.startResizeFromCoords(corner, touch.clientX, touch.clientY);
  }
  // point d'entrée commun
  startResizeFromCoords(corner, clientX, clientY) {
    this.isResizing = true;
    this.resizeCorner = corner;
    this.startXResize = clientX;
    this.startYResize = clientY;
    this.initialWidth = this.calcWidth;
    this.initialHeight = this.calcHeight;
    this.initialPopupX = this.popupOffsetPopup.x;
    this.initialPopupY = this.popupOffsetPopup.y;
    // handlers unifiés pour mouse & touch
    this.pointerMoveHandler = e => {
      // empêcher scroll mobile quand on redimensionne
      if (e.type === 'touchmove') e.preventDefault();
      const {
        clientX,
        clientY
      } = this.extractClientFromEvent(e);
      this.handlePointerMove(clientX, clientY);
    };
    this.pointerUpHandler = e => {
      this.handlePointerUp();
    };
    document.addEventListener('mousemove', this.pointerMoveHandler, {
      passive: false
    });
    document.addEventListener('mouseup', this.pointerUpHandler);
    document.addEventListener('touchmove', this.pointerMoveHandler, {
      passive: false
    });
    document.addEventListener('touchend', this.pointerUpHandler);
  }
  // extraction client coords pour mouse/touch
  extractClientFromEvent(e) {
    if (!e) return {
      clientX: 0,
      clientY: 0
    };
    if (e.type && e.type.startsWith('touch')) {
      const t = e.touches && e.touches[0] ? e.touches[0] : e.changedTouches && e.changedTouches[0] ? e.changedTouches[0] : null;
      if (t) return {
        clientX: t.clientX,
        clientY: t.clientY
      };
    } else if (e.clientX !== undefined) {
      return {
        clientX: e.clientX,
        clientY: e.clientY
      };
    }
    // fallback
    return {
      clientX: this.startXResize,
      clientY: this.startYResize
    };
  }
  // logique principale: on garde scale uniforme (même ratio), container suit le scale
  handlePointerMove(clientX, clientY) {
    if (!this.isResizing || !this.resizeCorner) return;
    const deltaX = clientX - this.startXResize;
    const deltaY = clientY - this.startYResize;
    // calcul des candidats selon coin
    let candidateWidth = this.initialWidth;
    let candidateHeight = this.initialHeight;
    if (this.resizeCorner === 'br') {
      candidateWidth = this.initialWidth + deltaX;
    } else if (this.resizeCorner === 'bl') {
      candidateWidth = this.initialWidth - deltaX; // mouvement du coin gauche inverse
    }
    candidateHeight = this.initialHeight + deltaY;
    // éviter valeurs négatives
    candidateWidth = Math.max(10, candidateWidth);
    candidateHeight = Math.max(10, candidateHeight);
    // échelles relatives
    const scaleX = candidateWidth / this.initialWidth;
    const scaleY = candidateHeight / this.initialHeight;
    // choisir le scale qui respecte à la fois deltaX et deltaY sans déformer (on prend le plus restrictif)
    // ainsi largeur et hauteur changent ensemble en gardant le ratio initial
    let newScale = Math.min(scaleX, scaleY);
    // clamp scale global
    newScale = Math.max(0.4, Math.min(2.5, newScale));
    // nouvelles dimensions basées sur la base (ratio initial)
    const newWidth = Math.round(this.baseWidth * newScale);
    const newHeight = Math.round(this.baseHeight * newScale);
    // clamp dimensions sur min/max en px
    const clampedWidth = Math.max(this.minWidth, Math.min(this.maxWidth, newWidth));
    const clampedHeight = Math.max(this.minHeight, Math.min(this.maxHeight, newHeight));
    // recalc scale si les dimensions clampées ont changé
    const finalScaleW = clampedWidth / this.baseWidth;
    const finalScaleH = clampedHeight / this.baseHeight;
    // garder le plus petit pour éviter débordements
    const finalScale = Math.min(finalScaleW, finalScaleH);
    // appliquer
    this.calcScale = finalScale;
    this.calcWidth = Math.round(this.baseWidth * finalScale);
    this.calcHeight = Math.round(this.baseHeight * finalScale);
    // ajuster position si coin gauche (bl) : le left doit bouger pour suivre le coin
    if (this.resizeCorner === 'bl') {
      // quand le width diminue, left augmente; quand width augmente, left diminue
      this.popupOffsetPopup.x = Math.round(this.initialPopupX + (this.initialWidth - this.calcWidth));
    } else {
      this.popupOffsetPopup.x = this.initialPopupX;
    }
    // appliquer le scale au contenu
    if (this.calcElement?.nativeElement) {
      const el = this.calcElement.nativeElement;
      el.style.transformOrigin = 'top left';
      el.style.transform = `scale(${this.calcScale})`;
    }
  }
  onMouseMoveResize(event) {
    if (!this.isResizing || !this.resizeCorner) return;
    // calcul deltas
    const deltaX = event.clientX - this.startXResize;
    const deltaY = event.clientY - this.startYResize;
    let newWidth = this.initialWidth;
    let newHeight = this.initialHeight;
    let newPopupX = this.initialPopupX;
    if (this.resizeCorner === 'br') {
      newWidth = this.initialWidth + deltaX;
      newPopupX = this.initialPopupX; // gauche fixe
    } else if (this.resizeCorner === 'bl') {
      // left handle bouge -> on déplace aussi popupOffsetPopup.x
      newWidth = this.initialWidth - deltaX;
      newPopupX = this.initialPopupX + deltaX;
    }
    newHeight = this.initialHeight + deltaY;
    // clamp
    newWidth = Math.max(this.minWidth, Math.min(this.maxWidth, newWidth));
    newHeight = Math.max(this.minHeight, Math.min(this.maxHeight, newHeight));
    // appliquer
    this.calcWidth = Math.round(newWidth);
    this.calcHeight = Math.round(newHeight);
    this.popupOffsetPopup.x = Math.round(newPopupX);
    // recalculer scale du contenu pour conserver proportions et éviter débordements
    const scaleX = this.calcWidth / this.baseWidth;
    const scaleY = this.calcHeight / this.baseHeight;
    // on prend le min pour garder le contenu entier visible
    this.calcScale = Math.max(0.4, Math.min(2.5, Math.min(scaleX, scaleY)));
    // appliquer scale directement via style sur l'élément
    if (this.calcElement?.nativeElement) {
      const el = this.calcElement.nativeElement;
      el.style.transformOrigin = 'top left';
      el.style.transform = `scale(${this.calcScale})`;
      // pour éviter que le contenu dépasse lors du scale, on peut ajuster la hauteur du container
      // si tu veux que le container suive exactement le contenu scaled, décommente :
      // this.calcHeight = Math.round(this.baseHeight * this.calcScale);
    }
  }
  onMouseUpResize() {
    this.isResizing = false;
    this.resizeCorner = null;
    this.removeResizeListeners();
  }
  // Si tu veux gérer le redimensionnement sur changement de fenêtre :
  onWindowResize() {
    this.maxWidth = Math.max(300, window.innerWidth - 40);
    this.maxHeight = Math.max(300, window.innerHeight - 40);
    // clamp des valeurs actuelles
    this.calcWidth = Math.min(this.calcWidth, this.maxWidth);
    this.calcHeight = Math.min(this.calcHeight, this.maxHeight);
  }
  onCalculatorMouseMove(event) {
    const el = this.calculatorRef?.nativeElement;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left; // position locale
    const y = event.clientY - rect.top;
    const nearRight = rect.width - x <= this.cornerThreshold;
    const nearLeft = x <= this.cornerThreshold;
    const nearBottom = rect.height - y <= this.cornerThreshold;
    // détecte coin bas-droit ou bas-gauche
    if (nearBottom && nearRight) {
      this.hoverResizeCorner = 'br';
      el.style.cursor = 'nwse-resize';
    } else if (nearBottom && nearLeft) {
      this.hoverResizeCorner = 'bl';
      el.style.cursor = 'nesw-resize';
    } else {
      // pas près d'un coin
      this.hoverResizeCorner = null;
      el.style.cursor = 'default';
    }
  }
  // reset du curseur quand on sort du cadre
  onCalculatorMouseLeave(_) {
    const el = this.calculatorRef?.nativeElement;
    if (el) el.style.cursor = 'default';
    this.hoverResizeCorner = null;
  }
  // fin du pointer
  handlePointerUp() {
    this.isResizing = false;
    this.resizeCorner = null;
    // remove listeners
    document.removeEventListener('mousemove', this.pointerMoveHandler);
    document.removeEventListener('mouseup', this.pointerUpHandler);
    document.removeEventListener('touchmove', this.pointerMoveHandler);
    document.removeEventListener('touchend', this.pointerUpHandler);
    this.pointerMoveHandler = undefined;
    this.pointerUpHandler = undefined;
  }
  // ancien removeResizeListeners - on peut garder ou supprimer selon usage
  removeResizeListeners() {
    if (this.pointerMoveHandler) {
      document.removeEventListener('mousemove', this.pointerMoveHandler);
      document.removeEventListener('touchmove', this.pointerMoveHandler);
      this.pointerMoveHandler = undefined;
    }
    if (this.pointerUpHandler) {
      document.removeEventListener('mouseup', this.pointerUpHandler);
      document.removeEventListener('touchend', this.pointerUpHandler);
      this.pointerUpHandler = undefined;
    }
  }
  // -----------------------------------------------------------
  // mouse flow resto — remplace onCalculatorMouseDown & add touch start
  onCalculatorMouseDown(event) {
    const target = event.target;
    // si click sur un bouton/clavier => laisser l'action normale
    if (target.closest('.key') || target.tagName === 'BUTTON' || target.tagName === 'INPUT') {
      return;
    }
    // si déjà près d'un coin
    if (this.hoverResizeCorner) {
      this.startResize(event, this.hoverResizeCorner);
      return;
    }
    // sinon drag
    this.startDragPopup(event);
  }
  // tactile: touchstart
  onCalculatorTouchStart(ev) {
    // si multiple touches -> ignore
    if (!ev || !ev.touches || ev.touches.length === 0) return;
    const touch = ev.touches[0];
    const el = this.calculatorRef?.nativeElement;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    const nearRight = rect.width - x <= this.cornerThreshold;
    const nearLeft = x <= this.cornerThreshold;
    const nearBottom = rect.height - y <= this.cornerThreshold;
    // si on commence un resize tactile
    if (nearBottom && (nearRight || nearLeft)) {
      const corner = nearRight ? 'br' : 'bl';
      // preventDefault pour éviter le scroll
      ev.preventDefault();
      this.startResizeTouch(touch, corner);
      return;
    }
    // sinon si on touche sur une zone non interactive -> démarrer drag
    const target = ev.target;
    if (target && (target.closest('.key') || target.tagName === 'BUTTON' || target.tagName === 'INPUT')) {
      // laisser interaction normale
      return;
    }
    // simuler startDragPopup via start coords (on convertit touch à mouse event)
    const fakeMouseEvent = new MouseEvent('mousedown', {
      clientX: touch.clientX,
      clientY: touch.clientY,
      bubbles: true
    });
    this.startDragPopup(fakeMouseEvent);
  }
  // Méthode pour réduire la calculatrice
  minimizeCalculator() {
    this.isCalculatorMinimized = !this.isCalculatorMinimized;
    if (this.isCalculatorMinimized) {
      // Sauvegarder la position actuelle
      this.calculatorPosition.x = this.popupOffsetPopup.x;
      this.calculatorPosition.y = this.popupOffsetPopup.y;
      // Réduire la taille du container
      this.calcWidth = 200;
      this.calcHeight = 40;
      // Calculer un scale basé sur la baseWidth pour garder les proportions
      this.calcScale = Math.max(0.1, Math.min(1, this.calcWidth / this.baseWidth));
      // Appliquer transform au contenu .calc
      if (this.calcElement?.nativeElement) {
        this.renderer.setStyle(this.calcElement.nativeElement, 'transformOrigin', 'top left');
        this.renderer.setStyle(this.calcElement.nativeElement, 'transform', `scale(${this.calcScale})`);
      }
    } else {
      // Restaurer la taille normale
      this.calcWidth = this.baseWidth;
      this.calcHeight = this.baseHeight;
      this.calcScale = 1;
      if (this.calcElement?.nativeElement) {
        this.renderer.setStyle(this.calcElement.nativeElement, 'transform', `scale(${this.calcScale})`);
      }
      // Restaurer la position
      this.popupOffsetPopup.x = this.calculatorPosition.x;
      this.popupOffsetPopup.y = this.calculatorPosition.y;
    }
  }
  onSearch(event) {
    const input = event.target;
    this.calculator.setActive(false); // Désactive la calculatrice lors de la recherche
    console.log('Recherche:', input.value);
    this.searchTerm = input.value;
    this.searchService.setSearch(input.value);
  }
  clearSearch() {
    this.searchTerm = '';
    this.searchService.setSearch('');
  }
  static {
    this.ɵfac = function PosAccueilComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PosAccueilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_view_state_service__WEBPACK_IMPORTED_MODULE_3__.ViewStateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_4__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_CaisseService_pos_caisse_service__WEBPACK_IMPORTED_MODULE_5__.PosCaisseService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_commande_state_service__WEBPACK_IMPORTED_MODULE_6__.CommandeStateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_CaisseService_boutique_state_service__WEBPACK_IMPORTED_MODULE_7__.BoutiqueStateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_boutique_service__WEBPACK_IMPORTED_MODULE_8__.BoutiqueService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_SearchService__WEBPACK_IMPORTED_MODULE_9__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_VenteService_calculator_service__WEBPACK_IMPORTED_MODULE_10__.CalculatorService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_VenteService_scanner_service__WEBPACK_IMPORTED_MODULE_11__.ScannerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.Renderer2));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: PosAccueilComponent,
      selectors: [["app-pos-accueil"]],
      viewQuery: function PosAccueilComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.calculatorRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.calcElement = _t.first);
        }
      },
      hostBindings: function PosAccueilComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keydown", function PosAccueilComponent_keydown_HostBindingHandler($event) {
            return ctx.handleKeyDown($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresolveWindow"])("resize", function PosAccueilComponent_resize_HostBindingHandler($event) {
            return ctx.onWindowResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresolveWindow"]);
        }
      },
      decls: 43,
      vars: 22,
      consts: [["loadingBoutique", ""], ["calculatorRef", ""], ["calcElement", ""], [1, "pos_container"], [1, "pos_content"], [1, "pos_header"], [1, "navBar"], [1, "header_left"], [1, "btn_vente_pos", 3, "click"], [1, "btn", "btn_default"], [1, "btn_commande_pos", 3, "click"], [1, "btn_add_commande"], [1, "btn", 3, "click"], [1, "ri-add-line"], [1, "list_commande"], [3, "list_commande_active", "click", 4, "ngFor", "ngForOf"], ["class", "list_commande_plus", 3, "click", 4, "ngIf"], ["class", "miin_loading", 4, "ngIf"], ["class", "commande-popup-overlay", 4, "ngIf"], [1, "header_right"], [1, "icon_calculatrice", 3, "click"], ["src", "assets/img/calculatrice-moderne.png", "alt", ""], [1, "name_boutique"], [4, "ngIf", "ngIfElse"], [1, "inputSearch"], ["class", "ri-search-2-line", 4, "ngIf"], ["class", "ri-close-line", 3, "click", 4, "ngIf"], ["type", "text", "placeholder", "Recherche des produits", 3, "input", "value"], ["clickOutside", "", 1, "icon_sort", 3, "click", "clickOutside"], ["class", "view-dropdown", 4, "ngIf"], [1, "profil"], ["clickOutside", "", 1, "menu", 3, "click", "clickOutside"], [1, "ri-menu-line"], ["class", "menu-dropdown", 4, "ngIf"], ["class", "calculate-popup-overlay", 4, "ngIf"], [3, "click"], [1, "list_commande_plus", 3, "click"], [1, "ri-arrow-down-s-line"], [1, "miin_loading"], [1, "ri-barcode-line", "scan-indicator"], [1, "commande-popup-overlay"], [1, "commande-popup-content", 3, "click", "ngStyle"], [1, "popup-header", 3, "mousedown"], [1, "ri-close-line", 3, "click"], [1, "popup-commandes"], [1, "list_commande", "commandes-grid"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "boutique-loading"], [1, "ri-search-2-line"], [1, "view-dropdown"], [1, "dropdown-item", 3, "click"], [1, "menu-dropdown"], [1, "dropdown-item"], [1, "ri-download-line"], [1, "ri-home-5-line"], [1, "ri-restart-line"], [1, "ri-money-euro-circle-line"], [1, "popup-body"], ["class", "loading-indicator", 4, "ngIf"], ["class", "caisse-details-container", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "popup-footer"], [1, "btn", "btn-cancel", 3, "click", "disabled"], [1, "btn", "btn-confirm", 3, "click", "disabled"], [1, "loading-indicator"], [1, "ri-loader-4-line", "spin"], [1, "caisse-details-container"], [1, "caisse-info-header"], [1, "caisse-info-title"], [1, "caisse-info-subtitle"], [1, "caisse-details-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], ["class", "detail-item", 4, "ngIf"], [1, "error-message"], [1, "ri-error-warning-line"], [1, "calculate-popup-overlay"], [1, "calc-backdrop", 2, "pointer-events", "auto", 3, "click"], [1, "calculator", 3, "click", "mousemove", "mouseleave", "mousedown", "touchstart", "ngStyle"], [1, "total"], [1, "calculator-title-bar", 3, "mousedown"], [1, "calculator-window-controls"], [1, "ri-subtract-line", 3, "click"], [1, "calculator-content"], [1, "calc"], [1, "calc-top"], [1, "brand-img"], ["src", "assets/logo/tchakeda.png", "alt", ""], [1, "digits-badge"], [1, "screen"], [1, "screen-text"], [1, "meta"], [1, "meta-row"], [1, "solar"], [1, "screen-text-sub"], [1, "keys-true"], [1, "key", "fn", 3, "click"], [1, "key", "on", 2, "font-size", "14px", 3, "click"], [1, "keys"], [1, "key", "op", 3, "click"], [1, "key", "num", 3, "click"], [1, "key", "plus", "tall", 3, "click"], [1, "key", "equals", "tall", 3, "click"], [1, "key", "num", "wide0", 3, "click"]],
      template: function PosAccueilComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "nav", 6)(4, "div", 7)(5, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_Template_div_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onClickVente());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Ventes POS ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_Template_div_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onClickCommandes());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Commandes ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 11)(12, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.addCommande());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "ul", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, PosAccueilComponent_li_15_Template, 2, 3, "li", 15)(16, PosAccueilComponent_li_16_Template, 2, 0, "li", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, PosAccueilComponent_div_17_Template, 2, 0, "div", 17)(18, PosAccueilComponent_div_18_Template, 9, 4, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 19)(20, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_Template_div_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.toggleCalculator());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, PosAccueilComponent_ng_container_23_Template, 3, 1, "ng-container", 23)(24, PosAccueilComponent_ng_template_24_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, PosAccueilComponent_i_27_Template, 1, 0, "i", 25)(28, PosAccueilComponent_i_28_Template, 1, 0, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("input", function PosAccueilComponent_Template_input_input_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onSearch($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_Template_div_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.showDropdown = !ctx.showDropdown);
          })("clickOutside", function PosAccueilComponent_Template_div_clickOutside_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.showDropdown = false);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](31, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](32, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, PosAccueilComponent_div_33_Template, 7, 6, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 30)(35, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PosAccueilComponent_Template_div_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.toggleMenuDropdown());
          })("clickOutside", function PosAccueilComponent_Template_div_clickOutside_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.showMenuDropdown = false);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](38, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, PosAccueilComponent_div_39_Template, 13, 0, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](40, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](41, PosAccueilComponent_div_41_Template, 15, 8, "div", 18)(42, PosAccueilComponent_div_42_Template, 92, 9, "div", 34);
        }
        if (rf & 2) {
          const loadingBoutique_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("btn_active", ctx.activeButton === "vente");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("btn_active", ctx.activeButton === "commande");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.visibleCommandes);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.commandes.length > 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.scanInProgress);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showCommandePopup);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isBoutiqueNameLoaded)("ngIfElse", loadingBoutique_r14);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](32, 20, ctx.isListView$) ? "ri-apps-fill" : "ri-list-check");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.userName);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showMenuDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showFermerCaissePopup);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showCalculatorPopup);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterOutlet, src_app_admin_page_MODELS_click_outside_directive__WEBPACK_IMPORTED_MODULE_0__.ClickOutsideDirective, src_app_admin_page_MODELS_cfa_currency_pipe__WEBPACK_IMPORTED_MODULE_2__.CfaCurrencyPipe],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  inset: 0;\n  overflow: hidden;\n}\n\n.pos_container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n\n.pos_content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1; \n\n  min-height: 0; \n\n}\n\n.pos_header[_ngcontent-%COMP%] {\n  flex: 0 0 auto; \n\n}\n\n.view-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  z-index: 100;\n  min-width: 150px;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n\n.navBar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #ffffff;\n  border-bottom: 1px solid #ddd;\n  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;\n  padding: 0 15px;\n}\n\n.header_left[_ngcontent-%COMP%], \n.header_right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.header_right[_ngcontent-%COMP%] {\n  gap: 20px;\n}\n\n.btn_vente_pos[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], \n.btn_commande_pos[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n\n.btn_default[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n}\n\n.btn_default[_ngcontent-%COMP%]:focus {\n  background-color: #f4f4f4;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: none;\n  padding: 8px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n.btn.btn_active[_ngcontent-%COMP%] {\n  background-color: #CDE3FA;\n  color: #1a73e8;\n}\n\n.btn_add_commande[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 4px 13px;\n}\n\n.btn_add_commande[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n\nli.list_commande_active[_ngcontent-%COMP%] {\n  background-color: #CDE3FA !important;\n}\n\nul.list_commande[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin: 0;\n  padding: 0;\n}\n\nul.list_commande[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 7px 13px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\nul.list_commande[_ngcontent-%COMP%]   li.list_commande_plus[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.name_boutique[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.inputSearch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n}\n\n.inputSearch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-left: 10px;\n  border-radius: 5px;\n  border: 1px solid #000;\n  font-size: 13px;\n}\n\n.inputSearch[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 15px;\n  font-size: 17px;\n}\n\n.icon_sort[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #f4f4f4;\n  padding: 5px 11px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.icon_sort[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n\n.profil[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  padding: 0px 12px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.profil[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ffffff;\n}\n\n.menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  cursor: pointer;\n}\n\n.menu[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.menu[_ngcontent-%COMP%]   .menu-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  border: 1px solid #e1e1e1;\n  border-radius: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  min-width: 200px;\n  margin-top: 8px;\n  overflow: hidden;\n}\n.menu[_ngcontent-%COMP%]   .menu-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 12px;\n  color: #333;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.menu[_ngcontent-%COMP%]   .menu-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #f5f7fa;\n}\n.menu[_ngcontent-%COMP%]   .menu-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #64748b;\n}\n\n.commande-popup[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 300px;\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  margin-top: 8px;\n}\n.commande-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.commande-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.commande-popup[_ngcontent-%COMP%]   .popup-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 20px;\n  color: #666;\n}\n.commande-popup[_ngcontent-%COMP%]   .popup-commandes[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.commande-popup[_ngcontent-%COMP%]   .popup-commandes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid #f8f8f8;\n  transition: background 0.2s;\n}\n.commande-popup[_ngcontent-%COMP%]   .popup-commandes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f4f4f4;\n}\n.commande-popup[_ngcontent-%COMP%]   .popup-commandes[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: #e6f4ff;\n  color: #1890ff;\n}\n.commande-popup[_ngcontent-%COMP%]   .popup-commandes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #999;\n}\n\n\n\n.commande-popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10000;\n}\n\n.commande-popup-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 800px;\n  max-height: 80vh;\n  overflow-y: auto;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n}\n.commande-popup-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n.commande-popup-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n}\n.commande-popup-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 20px;\n  border-bottom: 1px solid #eee;\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 10;\n}\n.popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n}\n.popup-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  cursor: pointer;\n  color: #666;\n  transition: color 0.2s;\n}\n.popup-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #f00;\n}\n\n.popup-commandes[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.popup-commandes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.popup-commandes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  border-radius: 6px;\n  margin-bottom: 8px;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: all 0.2s;\n  border: 1px solid #f0f0f0;\n}\n.popup-commandes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  border-color: #e0e0e0;\n}\n.popup-commandes[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background-color: #e6f4ff;\n  border-color: #91caff;\n  color: #1890ff;\n  font-weight: 500;\n}\n\n.popup-commandes[_ngcontent-%COMP%]   .commandes-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(65px, 1fr));\n  gap: 10px;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.popup-commandes[_ngcontent-%COMP%]   .commandes-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background-color: #f8f8f8;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: center;\n  margin-bottom: 0 !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.popup-commandes[_ngcontent-%COMP%]   .commandes-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #e9e9e9;\n}\n.popup-commandes[_ngcontent-%COMP%]   .commandes-grid[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background-color: #CDE3FA;\n  border-color: #a0c5f0;\n  color: #1a73e8;\n  font-weight: bold;\n}\n\n\n\n[draggable][_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n\n\n.popup-header[_ngcontent-%COMP%] {\n  cursor: move;\n}\n\n.caisse-info-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 20px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #eee;\n}\n.caisse-info-header[_ngcontent-%COMP%]   .profil[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #4e73df;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 18px;\n}\n.caisse-info-header[_ngcontent-%COMP%]   .caisse-info-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n}\n.caisse-info-header[_ngcontent-%COMP%]   .caisse-info-subtitle[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 14px;\n}\n\n.caisse-details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 15px;\n}\n\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n  margin-bottom: 4px;\n}\n\n.detail-value[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  word-break: break-word;\n}\n\n.text-success-status[_ngcontent-%COMP%] {\n  color: #008000 !important;\n  font-weight: 600;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 600;\n}\n\n.popup-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 15px;\n  border-top: 1px solid #eee;\n  margin-top: 15px;\n}\n.popup-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.popup-footer[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  color: #495057;\n}\n.popup-footer[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.popup-footer[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n  border: none;\n}\n.popup-footer[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n}\n.popup-footer[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%]:disabled {\n  background: #e99ba4;\n  cursor: not-allowed;\n}\n\n.loading-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  color: #6c757d;\n}\n.loading-indicator[_ngcontent-%COMP%]   .spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-right: 10px;\n  font-size: 20px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #f8d7da;\n  color: #721c24;\n  border-radius: 4px;\n  margin-top: 15px;\n  display: flex;\n  align-items: center;\n}\n.error-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 18px;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.popup-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.boutique-loading[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  font-size: 14px;\n  color: #666;\n}\n\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.miin_loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.miin_loading[_ngcontent-%COMP%]   .scan-indicator[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #4CAF50;\n  animation: _ngcontent-%COMP%_pulse 0.1s;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.ri-close-line[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #f40505;\n}\n\n.icon_calculatrice[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.icon_calculatrice[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.calculate-popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n  z-index: 10000;\n}\n\n.calculator[_ngcontent-%COMP%] {\n  pointer-events: auto; \n\n  z-index: 10001;\n}\n\n.calculator-popup-content-back[_ngcontent-%COMP%] {\n  background-color: #44424D;\n  max-width: 400px;\n  width: 100%;\n  min-height: 80vh;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n  border-radius: 35px;\n}\n\n.calculator-popup-content[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #858489;\n  max-width: 400px;\n  min-height: 80vh;\n  overflow-y: auto;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n  border-radius: 28px;\n  margin: 5px;\n  overflow: hidden;\n}\n\n.brand-img[_ngcontent-%COMP%] {\n  width: 90px;\n}\n\n.brand-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.calculator-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n\n.digits[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ccc;\n}\n\n\n\n.calculator[_ngcontent-%COMP%]   .calc[_ngcontent-%COMP%] {\n  --body:#2e2f33;\n  --bezel:#3a3b40;\n  --screen:#eef3f6;\n  --screen-text:#213a52;\n  --key-dark:#111214;\n  --key-dark-text:#ffffff;\n  --key-mid:#a9adb3;\n  --key-mid-text:#1c1f23;\n  --key-blue:#0672E4;\n  --key-blue-text:#ffffff;\n  --key-grey:#cfd3d7;\n  --accent:#9aa0a6;\n  --badge:#ffffff;\n  position: relative;\n  overflow: hidden;\n  width: 420px;\n  max-width: 92vw;\n  background: var(--body);\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  padding: 0 18px 22px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.05);\n  color: #fff;\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n}\n\n\n\n.calculator[_ngcontent-%COMP%]   .calc-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  padding-top: 15px;\n}\n.calculator[_ngcontent-%COMP%]   .calc-top[_ngcontent-%COMP%]   .calculator[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n\n.calculator[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-end;\n}\n\n.calculator[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-weight: 800;\n  letter-spacing: 0.6px;\n  font-size: 20px;\n}\n\n.calculator[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.7;\n}\n\n.calculator[_ngcontent-%COMP%]   .digits-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--badge);\n  opacity: 0.9;\n}\n\n\n\n.calculator[_ngcontent-%COMP%]   .screen[_ngcontent-%COMP%] {\n  font-family: \"Calculator\", monospace;\n  background: var(--screen);\n  color: var(--screen-text);\n  border-radius: 10px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0 16px;\n  font-variant-numeric: tabular-nums;\n  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.18);\n  margin-bottom: 10px;\n  border: 5px outset rgba(244, 244, 244, 0.8666666667);\n}\n\n.calculator[_ngcontent-%COMP%]   .screen-text[_ngcontent-%COMP%] {\n  font-size: 55px;\n  letter-spacing: 2px;\n}\n\n.calculator[_ngcontent-%COMP%]   .screen-text-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  letter-spacing: 2px;\n  color: #c0c0c0;\n}\n\n\n\n.calculator[_ngcontent-%COMP%]   .meta-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 140px 1fr;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 14px;\n}\n\n.calculator[_ngcontent-%COMP%]   .solar[_ngcontent-%COMP%] {\n  font-family: \"Calculator\", monospace;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  border-radius: 6px;\n  background-color: #5f4a3a;\n  border: 1px solid rgba(186, 186, 186, 0.1843137255);\n  padding: 0 5px 0 0;\n  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.35);\n}\n\n.calculator[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  letter-spacing: 0.4px;\n  color: rgba(175, 177, 178, 0.4705882353);\n  opacity: 0.9;\n  margin-bottom: 8px;\n}\n\n\n\n.calculator[_ngcontent-%COMP%]   .keys[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 10px;\n}\n\n.calculator[_ngcontent-%COMP%]   .keys-true[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n\n\n\n.calculator[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  height: 54px;\n  border: none;\n  border-radius: 12px;\n  font-size: 22px;\n  line-height: 1;\n  cursor: default; \n\n  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.06);\n}\n\n\n\n.calculator[_ngcontent-%COMP%]   .key.num[_ngcontent-%COMP%] {\n  background: var(--key-dark);\n  color: var(--key-dark-text);\n}\n\n.calculator[_ngcontent-%COMP%]   .key.fn[_ngcontent-%COMP%] {\n  background: var(--key-mid);\n  color: var(--key-mid-text);\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.calculator[_ngcontent-%COMP%]   .key.on[_ngcontent-%COMP%] {\n  background: var(--key-blue);\n  color: var(--key-blue-text);\n  font-weight: 700;\n}\n\n.calculator[_ngcontent-%COMP%]   .key.op[_ngcontent-%COMP%] {\n  background: var(--key-mid);\n  color: var(--key-mid-text);\n  font-size: 26px;\n}\n\n.calculator[_ngcontent-%COMP%]   .key.nav[_ngcontent-%COMP%] {\n  background: var(--key-grey);\n  color: #222;\n  font-weight: 700;\n}\n\n\n\n.calculator[_ngcontent-%COMP%]   .key.plus[_ngcontent-%COMP%] {\n  background: var(--key-blue);\n  color: var(--key-blue-text);\n  font-weight: 800;\n  font-size: 28px;\n  grid-column: 4; \n\n  grid-row: 5/span 2; \n\n  height: 118px;\n}\n\n.calculator[_ngcontent-%COMP%]   .key.equals[_ngcontent-%COMP%] {\n  background: var(--key-grey);\n  color: #222;\n  font-weight: 700;\n  font-size: 28px;\n  grid-column: 5; \n\n  grid-row: 5/span 2; \n\n  height: 118px;\n}\n\n\n\n.calculator[_ngcontent-%COMP%]   .wide0[_ngcontent-%COMP%] { \n\n  letter-spacing: 0.5px;\n}\n\n\n\n.calculator[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]:active {\n  transform: translateY(2px);\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.06);\n}\n\n\n\n.display[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n\n\n\n.resize-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 28px;\n  height: 28px;\n  background: rgba(0, 0, 0, 0.12);\n  border: 2px solid rgba(255, 255, 255, 0.85);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);\n  z-index: 12000;\n  touch-action: none; \n\n  pointer-events: auto;\n  border-radius: 4px;\n  transition: background 0.12s, transform 0.08s;\n  display: block;\n}\n\n\n\n.resize-handle.br[_ngcontent-%COMP%] {\n  right: 6px;\n  bottom: 6px;\n  cursor: nwse-resize;\n}\n\n\n\n.resize-handle.bl[_ngcontent-%COMP%] {\n  left: 6px;\n  bottom: 6px;\n  cursor: nesw-resize;\n}\n\n\n\n.resize-handle[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.22);\n  transform: scale(1.05);\n}\n\n.popup-header-close-calc[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -28px;\n  right: 0;\n}\n\n.popup-header-close-calc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: #cec7c7;\n  font-size: 14px;\n  cursor: pointer;\n  color: red;\n  transition: color 0.2s;\n  padding: 5px 10px;\n  border-radius: 5px;\n}\n.popup-header-close-calc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background-color: #aca7a7;\n}\n\n.calculator-title-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 12px;\n  background-color: #3a3b40;\n  color: white;\n  cursor: move;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.calculator-title-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.calculator-title-bar[_ngcontent-%COMP%]   .calculator-window-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.calculator-title-bar[_ngcontent-%COMP%]   .calculator-window-controls[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 16px;\n}\n.calculator-title-bar[_ngcontent-%COMP%]   .calculator-window-controls[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #ccc;\n}\n\n.calculator-content[_ngcontent-%COMP%] {\n  transition: opacity 0.3s ease;\n}\n.calculator-content.minimized[_ngcontent-%COMP%] {\n  opacity: 0;\n  height: 0;\n  overflow: hidden;\n  pointer-events: none;\n}\n\n.calculate-popup-overlay[_ngcontent-%COMP%] {\n  pointer-events: none;\n  z-index: 10000;\n}\n.calculate-popup-overlay[_ngcontent-%COMP%]   .calculator[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcy1hY2N1ZWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUVoQjtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUEsRUFBQSxzQ0FBQTtFQUNBLGFBQUEsRUFBQSw0Q0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQSxFQUFBLHVCQUFBO0FBQUY7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0FBQUo7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFEQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBOztFQUdFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLFNBQUE7QUFERjs7QUFJQTs7RUFHRSxTQUFBO0FBRkY7O0FBYUE7RUFDRSx5QkFBQTtBQVZGOztBQWFBO0VBQ0UseUJBQUE7QUFWRjs7QUFxQkE7RUFFRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQW5CRjtBQXFCRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQW5CSjs7QUF3QkE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBckJGOztBQXdCQTtFQUNFLGVBQUE7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QUFBO0VBQ0EsZUFBQTtBQWxETjtBQW9ETTtFQUNFLFdBQUE7QUFsRFI7O0FBd0RBO0VBQ0UsNkJBQUE7QUFyREY7QUF1REU7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFyREo7O0FBMERBO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0FBdkRGO0FBeURFO0VBQ0UsbUJBQUE7QUF2REoiLCJmaWxlIjoicG9zLWFjY3VlaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucG9zX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucG9zX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxOyAgICAgICAgICAvKiBwcmVuZCB0b3V0IGwnw6ljcmFuIHNvdXMgbGUgaGVhZGVyICovXG4gIG1pbi1oZWlnaHQ6IDA7ICAgIC8qIENSVUNJQUwgcG91ciBxdWUgbCdlbmZhbnQgcHVpc3NlIHNjcm9sbCAqL1xufVxuXG4ucG9zX2hlYWRlciB7XG4gIGZsZXg6IDAgMCBhdXRvOyAgIC8qIG5lIHNlIHLDqXRyw6ljaXQgcGFzICovXG59XG5cbi52aWV3LWRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgei1pbmRleDogMTAwO1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLm5hdkJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGJveC1zaGFkb3c6IHJnYmEoMzMsIDM1LCAzOCwgMC4xKSAwcHggMTBweCAxMHB4IC0xMHB4O1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5oZWFkZXJfbGVmdCxcbi5oZWFkZXJfcmlnaHRcbntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uaGVhZGVyX3JpZ2h0IHtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uYnRuX3ZlbnRlX3BvcyAuYnRuLFxuLmJ0bl9jb21tYW5kZV9wb3MgLmJ0blxue1xuICBnYXA6IDEwcHg7XG59XG5cbi8vIC5idG5fdmVudGVfcG9zIC5idG4ge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFQkVCO1xuLy8gfVxuXG4vLyAuYnRuX2NvbW1hbmRlX3BvcyAuYnRuIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI0VERUJFQjtcbi8vIH1cblxuLmJ0bl9kZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbn1cblxuLmJ0bl9kZWZhdWx0OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbn1cblxuLy8gLmJ0bl92ZW50ZV9wb3MgLmJ0bl9hY3RpdmUge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RFM0ZBO1xuLy8gfVxuXG4vLyAuYnRuX2NvbW1hbmRlX3BvcyAuYnRuX2FjdGl2ZSB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNDREUzRkE7XG4vLyB9XG5cbi5idG4ge1xuICAvLyBWb3Mgc3R5bGVzIGRlIGJhc2UgcG91ciBsZSBib3V0b25cbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcblxuICAmLmJ0bl9hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDREUzRkE7XG4gICAgY29sb3I6ICMxYTczZTg7XG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cblxuLmJ0bl9hZGRfY29tbWFuZGUgLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIHBhZGRpbmc6IDRweCAxM3B4O1xufVxuXG4uYnRuX2FkZF9jb21tYW5kZSAuYnRuIGkge1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbmxpLmxpc3RfY29tbWFuZGVfYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NERTNGQSFpbXBvcnRhbnQ7XG59XG5cbnVsLmxpc3RfY29tbWFuZGUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG51bC5saXN0X2NvbW1hbmRlIGxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgcGFkZGluZzogN3B4IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG51bC5saXN0X2NvbW1hbmRlIGxpLmxpc3RfY29tbWFuZGVfcGx1cyB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLm5hbWVfYm91dGlxdWUgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmlucHV0U2VhcmNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnB1dFNlYXJjaCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5pbnB1dFNlYXJjaCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5pY29uX3NvcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIHBhZGRpbmc6IDVweCAxMXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb25fc29ydCBpIHtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ucHJvZmlsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgcGFkZGluZzogMHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvZmlsIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubWVudSBpIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZW51IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIFxuICAubWVudS1kcm9wZG93biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAuZHJvcGRvd24taXRlbSB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmN2ZhO1xuICAgICAgfVxuXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNvbW1hbmRlLXBvcHVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHotaW5kZXg6IDEwMDA7XG4gIG1hcmdpbi10b3A6IDhweDtcblxuICAucG9wdXAtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcblxuICAgIGgzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgaSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICB9XG4gIH1cblxuICAucG9wdXAtY29tbWFuZGVzIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICBsaSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjhmOGY4O1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTZmNGZmO1xuICAgICAgICBjb2xvcjogIzE4OTBmZjtcbiAgICAgIH1cblxuICAgICAgaSB7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiBOb3V2ZWF1eCBzdHlsZXMgcG91ciBsYSBwb3B1cCAqL1xuLmNvbW1hbmRlLXBvcHVwLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDA7XG59XG5cbi5jb21tYW5kZS1wb3B1cC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1heC1oZWlnaHQ6IDgwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLy8gYW5pbWF0aW9uOiBwb3B1cC1hcHBlYXIgMC4zcyBlYXNlLW91dDtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDRweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAvLyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuLy8gQGtleWZyYW1lcyBwb3B1cC1hcHBlYXIge1xuLy8gICBmcm9tIHtcbi8vICAgICBvcGFjaXR5OiAwO1xuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbi8vICAgfVxuLy8gICB0byB7XG4vLyAgICAgb3BhY2l0eTogMTtcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4vLyAgIH1cbi8vIH1cblxuLnBvcHVwLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiAxMDtcbiAgXG4gIGgzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjZjAwO1xuICAgIH1cbiAgfVxufVxuXG4ucG9wdXAtY29tbWFuZGVzIHtcbiAgcGFkZGluZzogMTVweDtcbiAgXG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICBsaSB7XG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XG4gICAgfVxuICAgIFxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmY0ZmY7XG4gICAgICBib3JkZXItY29sb3I6ICM5MWNhZmY7XG4gICAgICBjb2xvcjogIzE4OTBmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG59XG5cbi5wb3B1cC1jb21tYW5kZXMge1xuICAuY29tbWFuZGVzLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNjVweCwgMWZyKSk7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICBsaSB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NERTNGQTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjYTBjNWYwO1xuICAgICAgICBjb2xvcjogIzFhNzNlODtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIFBlcm1ldHRyZSBsZSBkw6lwbGFjZW1lbnQgc2FucyBzw6lsZWN0aW9uIGRlIHRleHRlICovXG5bZHJhZ2dhYmxlXSB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4vKiBDdXJzZXVyIHBvdXIgbGVzIHpvbmVzIGTDqXBsYcOnYWJsZXMgKi9cbi5wb3B1cC1oZWFkZXJ7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuXG4uY2Fpc3NlLWluZm8taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIFxuICAucHJvZmlsIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICM0ZTczZGY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC5jYWlzc2UtaW5mby10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC5jYWlzc2UtaW5mby1zdWJ0aXRsZSB7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbi5jYWlzc2UtZGV0YWlscy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiAxNXB4O1xufVxuXG4uZGV0YWlsLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZGV0YWlsLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uZGV0YWlsLXZhbHVlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4udGV4dC1zdWNjZXNzLXN0YXR1cyB7XG4gIGNvbG9yOiAjMDA4MDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucG9wdXAtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgXG4gIC5idG4ge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICBcbiAgICAmLWNhbmNlbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJi1jb25maXJtIHtcbiAgICAgIGJhY2tncm91bmQ6ICNkYzM1NDU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYzgyMzMzO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2U5OWJhNDtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBcbiAgLnNwaW4ge1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuXG4uZXJyb3ItbWVzc2FnZSB7IHBhZGRpbmc6IDEwcHg7IGJhY2tncm91bmQ6ICNmOGQ3ZGE7IGNvbG9yOiAjNzIxYzI0OyBib3JkZXItcmFkaXVzOiA0cHg7IG1hcmdpbi10b3A6IDE1cHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGkgeyBtYXJnaW4tcmlnaHQ6IDhweDsgZm9udC1zaXplOiAxOHB4OyB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi5wb3B1cC1ib2R5IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmJvdXRpcXVlLWxvYWRpbmcgeyBvcGFjaXR5OiAwLjY7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM2NjY7IH1cbi5zcGluIHsgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuQGtleWZyYW1lcyBzcGluIHsgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9IHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG5cbi8vIHBvcy1hY2N1ZWlsLmNvbXBvbmVudC5zY3NzXG4ubWlpbl9sb2FkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIFxuICAuc2Nhbi1pbmRpY2F0b3Ige1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzRDQUY1MDtcbiAgICBhbmltYXRpb246IHB1bHNlIDAuMXM7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbn1cblxuLnJpLWNsb3NlLWxpbmV7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmNDA1MDU7XG59XG5cblxuXG5cblxuLmljb25fY2FsY3VsYXRyaWNlIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbl9jYWxjdWxhdHJpY2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhbGN1bGF0ZS1wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAxMDAwMDtcbn1cblxuLmNhbGN1bGF0b3Ige1xuICBwb2ludGVyLWV2ZW50czogYXV0bzsgIC8qIDwtIGxhIGNhbGN1bGF0cmljZSBjYXB0ZSBsZXMgY2xpY3MgZXQgbGUgZHJhZyAqL1xuICB6LWluZGV4OiAxMDAwMTtcbn1cblxuLmNhbGN1bGF0b3ItcG9wdXAtY29udGVudC1iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDI0RDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG4gIC8vIG92ZXJmbG93LXk6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbn1cblxuLmNhbGN1bGF0b3ItcG9wdXAtY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4NTg0ODk7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICM0OTRCNTc7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIC8vIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA4MHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIG1hcmdpbjogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYnJhbmQtaW1nIHsgd2lkdGg6IDkwcHg7IDsgfVxuLmJyYW5kLWltZyBpbWcgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvOyB9XG4uY2FsY3VsYXRvci1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IG1hcmdpbi1ib3R0b206IDVweDt9XG4uZGlnaXRzIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogI2NjYzsgfVxuXG5cbi8qIFNjb3BlOiB1bmlxdWVtZW50IMOgIGzigJlpbnTDqXJpZXVyIGRlIC5jYWxjdWxhdG9yIHBvdXIgw6l2aXRlciBsZXMgZnVpdGVzICovXG4uY2FsY3VsYXRvciAuY2FsYyB7XG4gIC0tYm9keTojMmUyZjMzO1xuICAtLWJlemVsOiMzYTNiNDA7XG4gIC0tc2NyZWVuOiNlZWYzZjY7XG4gIC0tc2NyZWVuLXRleHQ6IzIxM2E1MjtcbiAgLS1rZXktZGFyazojMTExMjE0O1xuICAtLWtleS1kYXJrLXRleHQ6I2ZmZmZmZjtcbiAgLS1rZXktbWlkOiNhOWFkYjM7XG4gIC0ta2V5LW1pZC10ZXh0OiMxYzFmMjM7XG4gIC0ta2V5LWJsdWU6IzA2NzJFNDtcbiAgLS1rZXktYmx1ZS10ZXh0OiNmZmZmZmY7XG4gIC0ta2V5LWdyZXk6I2NmZDNkNztcbiAgLS1hY2NlbnQ6IzlhYTBhNjtcbiAgLS1iYWRnZTojZmZmZmZmO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gd2lkdGg6IDEwMCU7XG4gIC8vIG1heC13aWR0aDogNDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA0MjBweDtcbiAgbWF4LXdpZHRoOiA5MnZ3O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5KTtcbiAgLy8gYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDAgMThweCAyMnB4O1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwwLDAsLjM1KSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC4wNSk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgQXJpYWwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBUb3AgbGluZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmNhbGN1bGF0b3IgLmNhbGMtdG9we1xuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206MTBweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG5cbiAgLmNhbGN1bGF0b3Ige1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIH1cbn1cblxuLmNhbGN1bGF0b3IgLmJyYW5ke1xuICBkaXNwbGF5OmZsZXg7XG4gIGdhcDoxMnB4O1xuICBhbGlnbi1pdGVtczpmbGV4LWVuZDtcbn1cbi5jYWxjdWxhdG9yIC5icmFuZCAubG9nb3tcbiAgZm9udC13ZWlnaHQ6ODAwO1xuICBsZXR0ZXItc3BhY2luZzouNnB4O1xuICBmb250LXNpemU6MjBweDtcbn1cbi5jYWxjdWxhdG9yIC5icmFuZCAubW9kZWx7XG4gIGZvbnQtc2l6ZToxMnB4O1xuICBvcGFjaXR5Oi43O1xufVxuLmNhbGN1bGF0b3IgLmRpZ2l0cy1iYWRnZXtcbiAgZm9udC1zaXplOjEycHg7XG4gIGNvbG9yOiB2YXIoLS1iYWRnZSk7XG4gIG9wYWNpdHk6Ljk7XG59XG5cbi8qIFNjcmVlbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uY2FsY3VsYXRvciAuc2NyZWVue1xuICBmb250LWZhbWlseTogJ0NhbGN1bGF0b3InLCBtb25vc3BhY2U7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNjcmVlbik7XG4gIGNvbG9yOiB2YXIoLS1zY3JlZW4tdGV4dCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogNzJweDtcbiAgZGlzcGxheTpmbGV4O1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDJweCA2cHggcmdiYSgwLDAsMCwuMTgpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXI6IDVweCBvdXRzZXQgI2Y0ZjRmNGRkO1xufVxuLmNhbGN1bGF0b3IgLnNjcmVlbi10ZXh0e1xuICBmb250LXNpemU6IDU1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG4uY2FsY3VsYXRvciAuc2NyZWVuLXRleHQtc3ViIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogI2MwYzBjMDtcbn1cblxuLyogU29sYXIgKyBsYWJlbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmNhbGN1bGF0b3IgLm1ldGEtcm93e1xuICBkaXNwbGF5OmdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTQwcHggMWZyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGdhcDoxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuLmNhbGN1bGF0b3IgLnNvbGFye1xuICBmb250LWZhbWlseTogJ0NhbGN1bGF0b3InLCBtb25vc3BhY2U7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTpmbGV4O1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcbiAgYm9yZGVyLXJhZGl1czo2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZjRhM2E7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYWJhYmEyZjtcbiAgcGFkZGluZzogMCA1cHggMCAwO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDJweCA2cHggcmdiYSgwLDAsMCwuMzUpO1xufVxuLmNhbGN1bGF0b3IgLm1ldGF7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBmb250LXNpemU6MTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6LjRweDtcbiAgY29sb3I6I2FmYjFiMjc4O1xuICBvcGFjaXR5Oi45O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi8qIEtleXMgZ3JpZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uY2FsY3VsYXRvciAua2V5c3tcbiAgZGlzcGxheTpncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICBnYXA6MTBweDtcbn1cblxuLmNhbGN1bGF0b3IgLmtleXMtdHJ1ZXtcbiAgZGlzcGxheTpncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBnYXA6MTBweDtcbn1cblxuLyogQmFzZSBrZXkgKi9cbi5jYWxjdWxhdG9yIC5rZXl7XG4gIGhlaWdodDo1NHB4O1xuICBib3JkZXI6bm9uZTtcbiAgYm9yZGVyLXJhZGl1czoxMnB4O1xuICBmb250LXNpemU6MjJweDtcbiAgbGluZS1oZWlnaHQ6MTtcbiAgY3Vyc29yOmRlZmF1bHQ7ICAgICAgICAvKiBzdGF0aXF1ZSDigJMgcGFzIGRlIEpTICovXG4gIGJveC1zaGFkb3c6XG4gICAgMCAzcHggMCByZ2JhKDAsMCwwLC40NSksXG4gICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC4wNik7XG59XG5cbi8qIFZhcmlhbnRzICovXG4uY2FsY3VsYXRvciAua2V5Lm51bXtcbiAgYmFja2dyb3VuZDogdmFyKC0ta2V5LWRhcmspO1xuICBjb2xvcjogdmFyKC0ta2V5LWRhcmstdGV4dCk7XG59XG4uY2FsY3VsYXRvciAua2V5LmZue1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1rZXktbWlkKTtcbiAgY29sb3I6IHZhcigtLWtleS1taWQtdGV4dCk7XG4gIGZvbnQtc2l6ZToxOHB4O1xuICBmb250LXdlaWdodDo2MDA7XG59XG4uY2FsY3VsYXRvciAua2V5Lm9ue1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1rZXktYmx1ZSk7XG4gIGNvbG9yOiB2YXIoLS1rZXktYmx1ZS10ZXh0KTtcbiAgZm9udC13ZWlnaHQ6NzAwO1xufVxuLmNhbGN1bGF0b3IgLmtleS5vcHtcbiAgYmFja2dyb3VuZDogdmFyKC0ta2V5LW1pZCk7XG4gIGNvbG9yOiB2YXIoLS1rZXktbWlkLXRleHQpO1xuICBmb250LXNpemU6MjZweDtcbn1cbi5jYWxjdWxhdG9yIC5rZXkubmF2e1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1rZXktZ3JleSk7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXdlaWdodDo3MDA7XG59XG5cbi8qIFNwZWNpYWwgbGFyZ2Uga2V5cyAqL1xuLmNhbGN1bGF0b3IgLmtleS5wbHVze1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1rZXktYmx1ZSk7XG4gIGNvbG9yOiB2YXIoLS1rZXktYmx1ZS10ZXh0KTtcbiAgZm9udC13ZWlnaHQ6ODAwO1xuICBmb250LXNpemU6MjhweDtcbiAgZ3JpZC1jb2x1bW46IDQ7ICAgICAvKiA0ZSBjb2xvbm5lICovXG4gIGdyaWQtcm93OiA1IC8gc3BhbiAyOyAvKiBzdXIgMiBsaWduZXMgKi9cbiAgaGVpZ2h0OiBjYWxjKDU0cHgqMiArIDEwcHgpO1xufVxuLmNhbGN1bGF0b3IgLmtleS5lcXVhbHN7XG4gIGJhY2tncm91bmQ6IHZhcigtLWtleS1ncmV5KTtcbiAgY29sb3I6IzIyMjtcbiAgZm9udC13ZWlnaHQ6NzAwO1xuICBmb250LXNpemU6MjhweDtcbiAgZ3JpZC1jb2x1bW46IDU7ICAgICAgIC8qIDVlIGNvbG9ubmUgKi9cbiAgZ3JpZC1yb3c6IDUgLyBzcGFuIDI7IC8qIHN1ciAyIGxpZ25lcyAqL1xuICBoZWlnaHQ6IGNhbGMoNTRweCoyICsgMTBweCk7XG59XG5cbi8qIFJvdy02IGxheW91dCB0d2Vha3MgKi9cbi5jYWxjdWxhdG9yIC53aWRlMCB7IC8qIGp1c3RlIDAgc2ltcGxlLCBtYWlzIHVuIHBldSBwbHVzIGxhcmdlIHZpc3VlbGxlbWVudCAqL1xuICBsZXR0ZXItc3BhY2luZzouNXB4O1xufVxuXG4vKiBNYWtlIGJ1dHRvbnMg4oCccHJlc3NhYmxl4oCdIHZpc3VhbGx5IChwdXJlIENTUykgKi9cbi5jYWxjdWxhdG9yIC5rZXk6YWN0aXZle1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbiAgYm94LXNoYWRvdzpcbiAgICAwIDFweCAwIHJnYmEoMCwwLDAsLjQ1KSxcbiAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjA2KTtcbn1cblxuLyogQ29udGFpbmVyIGJhY2tncm91bmQgb2YgdGhlIHBvcHVwIGFyZWEgKi9cbi8vIC5jYWxjdWxhdGUtcG9wdXAtb3ZlcmxheSAuY2FsY3VsYXRvci1wb3B1cC1jb250ZW50IC5jYWxje1xuLy8gICBiYWNrZ3JvdW5kOiB2YXIoLS1iZXplbCwgIzNhM2I0MCkgbGluZWFyLWdyYWRpZW50KCMyZjMwMzQsICMyYTJiMmYpO1xuLy8gfVxuXG5cbi5kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8vIC5jYWxjdWxhdG9yIHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4vLyAgIHRvcDogMDtcbi8vICAgbGVmdDogMDtcbi8vICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbi8vICAgei1pbmRleDogMTEwMDA7XG4vLyAgIHVzZXItc2VsZWN0OiBub25lO1xuLy8gICB0b3VjaC1hY3Rpb246IG5vbmU7IC8qIGVtcMOqY2hlIGxlcyBnZXN0ZXMgZGUgc2Nyb2xsaW5nIG5hdGlmIHF1YW5kIG9uIHRvdWNoZSBsYSBjYWxjdWxhdHJpY2UgKi9cbi8vIH1cblxuXG4vKiBIYW5kbGVzIHBsdXMgdmlzaWJsZXMgZXQgcGx1cyBsYXJnZXMgcG91ciBkZWJ1ZyAqL1xuLnJlc2l6ZS1oYW5kbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xMik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC44NSk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsMCwwLDAuMjUpO1xuICB6LWluZGV4OiAxMjAwMDtcbiAgdG91Y2gtYWN0aW9uOiBub25lOyAvKiB1dGlsZSBwb3VyIGxlIHRhY3RpbGUgKi9cbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjEycywgdHJhbnNmb3JtIDAuMDhzO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogY29pbiBiYXMtZHJvaXQgKi9cbi5yZXNpemUtaGFuZGxlLmJyIHtcbiAgcmlnaHQ6IDZweDtcbiAgYm90dG9tOiA2cHg7XG4gIGN1cnNvcjogbndzZS1yZXNpemU7XG59XG5cbi8qIGNvaW4gYmFzLWdhdWNoZSAqL1xuLnJlc2l6ZS1oYW5kbGUuYmwge1xuICBsZWZ0OiA2cHg7XG4gIGJvdHRvbTogNnB4O1xuICBjdXJzb3I6IG5lc3ctcmVzaXplO1xufVxuXG4vKiBIb3ZlciBwb3VyIGNvbmZpcm1lciB2aXN1ZWxsZW1lbnQgKi9cbi5yZXNpemUtaGFuZGxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIyKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnBvcHVwLWhlYWRlci1jbG9zZS1jYWxjIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yOHB4O1xuICByaWdodDogMDtcbn1cblxuLnBvcHVwLWhlYWRlci1jbG9zZS1jYWxjIHNwYW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWM3Yzc7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FjYTdhNztcbiAgfVxufVxuXG4uY2FsY3VsYXRvci10aXRsZS1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzYjQwO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogbW92ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG5cbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIFxuICAuY2FsY3VsYXRvci13aW5kb3ctY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMnB4O1xuICAgIFxuICAgIGkge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jYWxjdWxhdG9yLWNvbnRlbnQge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgXG4gICYubWluaW1pemVkIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG5cbi8vIE1vZGlmaWNhdGlvbiBkZSBsJ292ZXJsYXkgcG91ciBwZXJtZXR0cmUgbGVzIGludGVyYWN0aW9uc1xuLmNhbGN1bGF0ZS1wb3B1cC1vdmVybGF5IHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBcbiAgLmNhbGN1bGF0b3Ige1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUE9TL3Bvcy1hY2N1ZWlsL3Bvcy1hY2N1ZWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUVoQjtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUEsRUFBQSxzQ0FBQTtFQUNBLGFBQUEsRUFBQSw0Q0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQSxFQUFBLHVCQUFBO0FBQUY7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0FBQUo7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFEQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBOztFQUdFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLFNBQUE7QUFERjs7QUFJQTs7RUFHRSxTQUFBO0FBRkY7O0FBYUE7RUFDRSx5QkFBQTtBQVZGOztBQWFBO0VBQ0UseUJBQUE7QUFWRjs7QUFxQkE7RUFFRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQW5CRjtBQXFCRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQW5CSjs7QUF3QkE7RUFDRSx5QkFB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Q0UsYUFBQTtFQUNBLFNBQUE7QUFsREo7QUFvREk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQWxETjtBQW9ETTtFQUNFLFdBQUE7QUFsRFI7O0FBd0RBO0VBQ0UsNkJBQUE7QUFyREY7QUF1REU7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFyREo7O0FBMERBO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0FBdkRGO0FBeURFO0VBQ0UsbUJBQUE7QUF2REo7QUFFQSw0N3BDQUE0N3BDIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnBvc19jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLnBvc19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTsgICAgICAgICAgLyogcHJlbmQgdG91dCBsJ8ODwqljcmFuIHNvdXMgbGUgaGVhZGVyICovXG4gIG1pbi1oZWlnaHQ6IDA7ICAgIC8qIENSVUNJQUwgcG91ciBxdWUgbCdlbmZhbnQgcHVpc3NlIHNjcm9sbCAqL1xufVxuXG4ucG9zX2hlYWRlciB7XG4gIGZsZXg6IDAgMCBhdXRvOyAgIC8qIG5lIHNlIHLDg8KpdHLDg8KpY2l0IHBhcyAqL1xufVxuXG4udmlldy1kcm9wZG93biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5uYXZCYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBib3gtc2hhZG93OiByZ2JhKDMzLCAzNSwgMzgsIDAuMSkgMHB4IDEwcHggMTBweCAtMTBweDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uaGVhZGVyX2xlZnQsXG4uaGVhZGVyX3JpZ2h0XG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLmhlYWRlcl9yaWdodCB7XG4gIGdhcDogMjBweDtcbn1cblxuLmJ0bl92ZW50ZV9wb3MgLmJ0bixcbi5idG5fY29tbWFuZGVfcG9zIC5idG5cbntcbiAgZ2FwOiAxMHB4O1xufVxuXG4vLyAuYnRuX3ZlbnRlX3BvcyAuYnRuIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI0VERUJFQjtcbi8vIH1cblxuLy8gLmJ0bl9jb21tYW5kZV9wb3MgLmJ0biB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNFREVCRUI7XG4vLyB9XG5cbi5idG5fZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG59XG5cbi5idG5fZGVmYXVsdDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG59XG5cbi8vIC5idG5fdmVudGVfcG9zIC5idG5fYWN0aXZlIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI0NERTNGQTtcbi8vIH1cblxuLy8gLmJ0bl9jb21tYW5kZV9wb3MgLmJ0bl9hY3RpdmUge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RFM0ZBO1xuLy8gfVxuXG4uYnRuIHtcbiAgLy8gVm9zIHN0eWxlcyBkZSBiYXNlIHBvdXIgbGUgYm91dG9uXG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG5cbiAgJi5idG5fYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0RFM0ZBO1xuICAgIGNvbG9yOiAjMWE3M2U4O1xuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cbi5idG5fYWRkX2NvbW1hbmRlIC5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBwYWRkaW5nOiA0cHggMTNweDtcbn1cblxuLmJ0bl9hZGRfY29tbWFuZGUgLmJ0biBpIHtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5saS5saXN0X2NvbW1hbmRlX2FjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDREUzRkEhaW1wb3J0YW50O1xufVxuXG51bC5saXN0X2NvbW1hbmRlIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxudWwubGlzdF9jb21tYW5kZSBsaSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIHBhZGRpbmc6IDdweCAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudWwubGlzdF9jb21tYW5kZSBsaS5saXN0X2NvbW1hbmRlX3BsdXMge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5uYW1lX2JvdXRpcXVlIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5pbnB1dFNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5wdXRTZWFyY2ggaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaW5wdXRTZWFyY2ggaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uaWNvbl9zb3J0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBwYWRkaW5nOiA1cHggMTFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uX3NvcnQgaSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLnByb2ZpbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIHBhZGRpbmc6IDBweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2ZpbCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLm1lbnUgaSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBcbiAgLm1lbnUtZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDEycHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgICAgIH1cblxuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jb21tYW5kZS1wb3B1cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB6LWluZGV4OiAxMDAwO1xuICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgLnBvcHVwLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIGkge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgfVxuICB9XG5cbiAgLnBvcHVwLWNvbW1hbmRlcyB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjhmODtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2U2ZjRmZjtcbiAgICAgICAgY29sb3I6ICMxODkwZmY7XG4gICAgICB9XG5cbiAgICAgIGkge1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogTm91dmVhdXggc3R5bGVzIHBvdXIgbGEgcG9wdXAgKi9cbi5jb21tYW5kZS1wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuXG4uY29tbWFuZGUtcG9wdXAtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIC8vIGFuaW1hdGlvbjogcG9wdXAtYXBwZWFyIDAuM3MgZWFzZS1vdXQ7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA0cHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLy8gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbi8vIEBrZXlmcmFtZXMgcG9wdXAtYXBwZWFyIHtcbi8vICAgZnJvbSB7XG4vLyAgICAgb3BhY2l0eTogMDtcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4vLyAgIH1cbi8vICAgdG8ge1xuLy8gICAgIG9wYWNpdHk6IDE7XG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuLy8gICB9XG4vLyB9XG5cbi5wb3B1cC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgei1pbmRleDogMTA7XG4gIFxuICBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG4gIFxuICBpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogI2YwMDtcbiAgICB9XG4gIH1cbn1cblxuLnBvcHVwLWNvbW1hbmRlcyB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIFxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgbGkge1xuICAgIHBhZGRpbmc6IDEycHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xuICAgIH1cbiAgICBcbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmNGZmO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjOTFjYWZmO1xuICAgICAgY29sb3I6ICMxODkwZmY7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxufVxuXG4ucG9wdXAtY29tbWFuZGVzIHtcbiAgLmNvbW1hbmRlcy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDY1cHgsIDFmcikpO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICAgbGkge1xuICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDREUzRkE7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2EwYzVmMDtcbiAgICAgICAgY29sb3I6ICMxYTczZTg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiBQZXJtZXR0cmUgbGUgZMODwqlwbGFjZW1lbnQgc2FucyBzw4PCqWxlY3Rpb24gZGUgdGV4dGUgKi9cbltkcmFnZ2FibGVdIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIEN1cnNldXIgcG91ciBsZXMgem9uZXMgZMODwqlwbGHDg8KnYWJsZXMgKi9cbi5wb3B1cC1oZWFkZXJ7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuXG4uY2Fpc3NlLWluZm8taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIFxuICAucHJvZmlsIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICM0ZTczZGY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC5jYWlzc2UtaW5mby10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC5jYWlzc2UtaW5mby1zdWJ0aXRsZSB7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbi5jYWlzc2UtZGV0YWlscy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiAxNXB4O1xufVxuXG4uZGV0YWlsLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZGV0YWlsLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uZGV0YWlsLXZhbHVlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4udGV4dC1zdWNjZXNzLXN0YXR1cyB7XG4gIGNvbG9yOiAjMDA4MDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucG9wdXAtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgXG4gIC5idG4ge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICBcbiAgICAmLWNhbmNlbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJi1jb25maXJtIHtcbiAgICAgIGJhY2tncm91bmQ6ICNkYzM1NDU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYzgyMzMzO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2U5OWJhNDtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBcbiAgLnNwaW4ge1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuXG4uZXJyb3ItbWVzc2FnZSB7IHBhZGRpbmc6IDEwcHg7IGJhY2tncm91bmQ6ICNmOGQ3ZGE7IGNvbG9yOiAjNzIxYzI0OyBib3JkZXItcmFkaXVzOiA0cHg7IG1hcmdpbi10b3A6IDE1cHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGkgeyBtYXJnaW4tcmlnaHQ6IDhweDsgZm9udC1zaXplOiAxOHB4OyB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi5wb3B1cC1ib2R5IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmJvdXRpcXVlLWxvYWRpbmcgeyBvcGFjaXR5OiAwLjY7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM2NjY7IH1cbi5zcGluIHsgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuQGtleWZyYW1lcyBzcGluIHsgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9IHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG5cbi8vIHBvcy1hY2N1ZWlsLmNvbXBvbmVudC5zY3NzXG4ubWlpbl9sb2FkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIFxuICAuc2Nhbi1pbmRpY2F0b3Ige1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzRDQUY1MDtcbiAgICBhbmltYXRpb246IHB1bHNlIDAuMXM7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbn1cblxuLnJpLWNsb3NlLWxpbmV7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmNDA1MDU7XG59XG5cblxuXG5cblxuLmljb25fY2FsY3VsYXRyaWNlIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbl9jYWxjdWxhdHJpY2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhbGN1bGF0ZS1wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAxMDAwMDtcbn1cblxuLmNhbGN1bGF0b3Ige1xuICBwb2ludGVyLWV2ZW50czogYXV0bzsgIC8qIDwtIGxhIGNhbGN1bGF0cmljZSBjYXB0ZSBsZXMgY2xpY3MgZXQgbGUgZHJhZyAqL1xuICB6LWluZGV4OiAxMDAwMTtcbn1cblxuLmNhbGN1bGF0b3ItcG9wdXAtY29udGVudC1iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDI0RDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG4gIC8vIG92ZXJmbG93LXk6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbn1cblxuLmNhbGN1bGF0b3ItcG9wdXAtY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4NTg0ODk7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICM0OTRCNTc7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIC8vIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA4MHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIG1hcmdpbjogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYnJhbmQtaW1nIHsgd2lkdGg6IDkwcHg7IDsgfVxuLmJyYW5kLWltZyBpbWcgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvOyB9XG4uY2FsY3VsYXRvci1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IG1hcmdpbi1ib3R0b206IDVweDt9XG4uZGlnaXRzIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogI2NjYzsgfVxuXG5cbi8qIFNjb3BlOiB1bmlxdWVtZW50IMODwqAgbMOiwoDCmWludMODwqlyaWV1ciBkZSAuY2FsY3VsYXRvciBwb3VyIMODwql2aXRlciBsZXMgZnVpdGVzICovXG4uY2FsY3VsYXRvciAuY2FsYyB7XG4gIC0tYm9keTojMmUyZjMzO1xuICAtLWJlemVsOiMzYTNiNDA7XG4gIC0tc2NyZWVuOiNlZWYzZjY7XG4gIC0tc2NyZWVuLXRleHQ6IzIxM2E1MjtcbiAgLS1rZXktZGFyazojMTExMjE0O1xuICAtLWtleS1kYXJrLXRleHQ6I2ZmZmZmZjtcbiAgLS1rZXktbWlkOiNhOWFkYjM7XG4gIC0ta2V5LW1pZC10ZXh0OiMxYzFmMjM7XG4gIC0ta2V5LWJsdWU6IzA2NzJFNDtcbiAgLS1rZXktYmx1ZS10ZXh0OiNmZmZmZmY7XG4gIC0ta2V5LWdyZXk6I2NmZDNkNztcbiAgLS1hY2NlbnQ6IzlhYTBhNjtcbiAgLS1iYWRnZTojZmZmZmZmO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gd2lkdGg6IDEwMCU7XG4gIC8vIG1heC13aWR0aDogNDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA0MjBweDtcbiAgbWF4LXdpZHRoOiA5MnZ3O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5KTtcbiAgLy8gYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDAgMThweCAyMnB4O1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwwLDAsLjM1KSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC4wNSk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgQXJpYWwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBUb3AgbGluZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmNhbGN1bGF0b3IgLmNhbGMtdG9we1xuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206MTBweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG5cbiAgLmNhbGN1bGF0b3Ige1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIH1cbn1cblxuLmNhbGN1bGF0b3IgLmJyYW5ke1xuICBkaXNwbGF5OmZsZXg7XG4gIGdhcDoxMnB4O1xuICBhbGlnbi1pdGVtczpmbGV4LWVuZDtcbn1cbi5jYWxjdWxhdG9yIC5icmFuZCAubG9nb3tcbiAgZm9udC13ZWlnaHQ6ODAwO1xuICBsZXR0ZXItc3BhY2luZzouNnB4O1xuICBmb250LXNpemU6MjBweDtcbn1cbi5jYWxjdWxhdG9yIC5icmFuZCAubW9kZWx7XG4gIGZvbnQtc2l6ZToxMnB4O1xuICBvcGFjaXR5Oi43O1xufVxuLmNhbGN1bGF0b3IgLmRpZ2l0cy1iYWRnZXtcbiAgZm9udC1zaXplOjEycHg7XG4gIGNvbG9yOiB2YXIoLS1iYWRnZSk7XG4gIG9wYWNpdHk6Ljk7XG59XG5cbi8qIFNjcmVlbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uY2FsY3VsYXRvciAuc2NyZWVue1xuICBmb250LWZhbWlseTogJ0NhbGN1bGF0b3InLCBtb25vc3BhY2U7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNjcmVlbik7XG4gIGNvbG9yOiB2YXIoLS1zY3JlZW4tdGV4dCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogNzJweDtcbiAgZGlzcGxheTpmbGV4O1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDJweCA2cHggcmdiYSgwLDAsMCwuMTgpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXI6IDVweCBvdXRzZXQgI2Y0ZjRmNGRkO1xufVxuLmNhbGN1bGF0b3IgLnNjcmVlbi10ZXh0e1xuICBmb250LXNpemU6IDU1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG4uY2FsY3VsYXRvciAuc2NyZWVuLXRleHQtc3ViIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogI2MwYzBjMDtcbn1cblxuLyogU29sYXIgKyBsYWJlbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLmNhbGN1bGF0b3IgLm1ldGEtcm93e1xuICBkaXNwbGF5OmdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTQwcHggMWZyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGdhcDoxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuLmNhbGN1bGF0b3IgLnNvbGFye1xuICBmb250LWZhbWlseTogJ0NhbGN1bGF0b3InLCBtb25vc3BhY2U7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTpmbGV4O1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcbiAgYm9yZGVyLXJhZGl1czo2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZjRhM2E7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYWJhYmEyZjtcbiAgcGFkZGluZzogMCA1cHggMCAwO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDJweCA2cHggcmdiYSgwLDAsMCwuMzUpO1xufVxuLmNhbGN1bGF0b3IgLm1ldGF7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBmb250LXNpemU6MTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6LjRweDtcbiAgY29sb3I6I2FmYjFiMjc4O1xuICBvcGFjaXR5Oi45O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi8qIEtleXMgZ3JpZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uY2FsY3VsYXRvciAua2V5c3tcbiAgZGlzcGxheTpncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICBnYXA6MTBweDtcbn1cblxuLmNhbGN1bGF0b3IgLmtleXMtdHJ1ZXtcbiAgZGlzcGxheTpncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBnYXA6MTBweDtcbn1cblxuLyogQmFzZSBrZXkgKi9cbi5jYWxjdWxhdG9yIC5rZXl7XG4gIGhlaWdodDo1NHB4O1xuICBib3JkZXI6bm9uZTtcbiAgYm9yZGVyLXJhZGl1czoxMnB4O1xuICBmb250LXNpemU6MjJweDtcbiAgbGluZS1oZWlnaHQ6MTtcbiAgY3Vyc29yOmRlZmF1bHQ7ICAgICAgICAvKiBzdGF0aXF1ZSDDosKAwpMgcGFzIGRlIEpTICovXG4gIGJveC1zaGFkb3c6XG4gICAgMCAzcHggMCByZ2JhKDAsMCwwLC40NSksXG4gICAgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC4wNik7XG59XG5cbi8qIFZhcmlhbnRzICovXG4uY2FsY3VsYXRvciAua2V5Lm51bXtcbiAgYmFja2dyb3VuZDogdmFyKC0ta2V5LWRhcmspO1xuICBjb2xvcjogdmFyKC0ta2V5LWRhcmstdGV4dCk7XG59XG4uY2FsY3VsYXRvciAua2V5LmZue1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1rZXktbWlkKTtcbiAgY29sb3I6IHZhcigtLWtleS1taWQtdGV4dCk7XG4gIGZvbnQtc2l6ZToxOHB4O1xuICBmb250LXdlaWdodDo2MDA7XG59XG4uY2FsY3VsYXRvciAua2V5Lm9ue1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1rZXktYmx1ZSk7XG4gIGNvbG9yOiB2YXIoLS1rZXktYmx1ZS10ZXh0KTtcbiAgZm9udC13ZWlnaHQ6NzAwO1xufVxuLmNhbGN1bGF0b3IgLmtleS5vcHtcbiAgYmFja2dyb3VuZDogdmFyKC0ta2V5LW1pZCk7XG4gIGNvbG9yOiB2YXIoLS1rZXktbWlkLXRleHQpO1xuICBmb250LXNpemU6MjZweDtcbn1cbi5jYWxjdWxhdG9yIC5rZXkubmF2e1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1rZXktZ3JleSk7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXdlaWdodDo3MDA7XG59XG5cbi8qIFNwZWNpYWwgbGFyZ2Uga2V5cyAqL1xuLmNhbGN1bGF0b3IgLmtleS5wbHVze1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1rZXktYmx1ZSk7XG4gIGNvbG9yOiB2YXIoLS1rZXktYmx1ZS10ZXh0KTtcbiAgZm9udC13ZWlnaHQ6ODAwO1xuICBmb250LXNpemU6MjhweDtcbiAgZ3JpZC1jb2x1bW46IDQ7ICAgICAvKiA0ZSBjb2xvbm5lICovXG4gIGdyaWQtcm93OiA1IC8gc3BhbiAyOyAvKiBzdXIgMiBsaWduZXMgKi9cbiAgaGVpZ2h0OiBjYWxjKDU0cHgqMiArIDEwcHgpO1xufVxuLmNhbGN1bGF0b3IgLmtleS5lcXVhbHN7XG4gIGJhY2tncm91bmQ6IHZhcigtLWtleS1ncmV5KTtcbiAgY29sb3I6IzIyMjtcbiAgZm9udC13ZWlnaHQ6NzAwO1xuICBmb250LXNpemU6MjhweDtcbiAgZ3JpZC1jb2x1bW46IDU7ICAgICAgIC8qIDVlIGNvbG9ubmUgKi9cbiAgZ3JpZC1yb3c6IDUgLyBzcGFuIDI7IC8qIHN1ciAyIGxpZ25lcyAqL1xuICBoZWlnaHQ6IGNhbGMoNTRweCoyICsgMTBweCk7XG59XG5cbi8qIFJvdy02IGxheW91dCB0d2Vha3MgKi9cbi5jYWxjdWxhdG9yIC53aWRlMCB7IC8qIGp1c3RlIDAgc2ltcGxlLCBtYWlzIHVuIHBldSBwbHVzIGxhcmdlIHZpc3VlbGxlbWVudCAqL1xuICBsZXR0ZXItc3BhY2luZzouNXB4O1xufVxuXG4vKiBNYWtlIGJ1dHRvbnMgw6LCgMKccHJlc3NhYmxlw6LCgMKdIHZpc3VhbGx5IChwdXJlIENTUykgKi9cbi5jYWxjdWxhdG9yIC5rZXk6YWN0aXZle1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbiAgYm94LXNoYWRvdzpcbiAgICAwIDFweCAwIHJnYmEoMCwwLDAsLjQ1KSxcbiAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjA2KTtcbn1cblxuLyogQ29udGFpbmVyIGJhY2tncm91bmQgb2YgdGhlIHBvcHVwIGFyZWEgKi9cbi8vIC5jYWxjdWxhdGUtcG9wdXAtb3ZlcmxheSAuY2FsY3VsYXRvci1wb3B1cC1jb250ZW50IC5jYWxje1xuLy8gICBiYWNrZ3JvdW5kOiB2YXIoLS1iZXplbCwgIzNhM2I0MCkgbGluZWFyLWdyYWRpZW50KCMyZjMwMzQsICMyYTJiMmYpO1xuLy8gfVxuXG5cbi5kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8vIC5jYWxjdWxhdG9yIHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4vLyAgIHRvcDogMDtcbi8vICAgbGVmdDogMDtcbi8vICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbi8vICAgei1pbmRleDogMTEwMDA7XG4vLyAgIHVzZXItc2VsZWN0OiBub25lO1xuLy8gICB0b3VjaC1hY3Rpb246IG5vbmU7IC8qIGVtcMODwqpjaGUgbGVzIGdlc3RlcyBkZSBzY3JvbGxpbmcgbmF0aWYgcXVhbmQgb24gdG91Y2hlIGxhIGNhbGN1bGF0cmljZSAqL1xuLy8gfVxuXG5cbi8qIEhhbmRsZXMgcGx1cyB2aXNpYmxlcyBldCBwbHVzIGxhcmdlcyBwb3VyIGRlYnVnICovXG4ucmVzaXplLWhhbmRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEyKTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjg1KTtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwwLDAsMC4yNSk7XG4gIHotaW5kZXg6IDEyMDAwO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7IC8qIHV0aWxlIHBvdXIgbGUgdGFjdGlsZSAqL1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTJzLCB0cmFuc2Zvcm0gMC4wOHM7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBjb2luIGJhcy1kcm9pdCAqL1xuLnJlc2l6ZS1oYW5kbGUuYnIge1xuICByaWdodDogNnB4O1xuICBib3R0b206IDZweDtcbiAgY3Vyc29yOiBud3NlLXJlc2l6ZTtcbn1cblxuLyogY29pbiBiYXMtZ2F1Y2hlICovXG4ucmVzaXplLWhhbmRsZS5ibCB7XG4gIGxlZnQ6IDZweDtcbiAgYm90dG9tOiA2cHg7XG4gIGN1cnNvcjogbmVzdy1yZXNpemU7XG59XG5cbi8qIEhvdmVyIHBvdXIgY29uZmlybWVyIHZpc3VlbGxlbWVudCAqL1xuLnJlc2l6ZS1oYW5kbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMjIpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4ucG9wdXAtaGVhZGVyLWNsb3NlLWNhbGMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTI4cHg7XG4gIHJpZ2h0OiAwO1xufVxuXG4ucG9wdXAtaGVhZGVyLWNsb3NlLWNhbGMgc3BhbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlYzdjNztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWNhN2E3O1xuICB9XG59XG5cbi5jYWxjdWxhdG9yLXRpdGxlLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTNiNDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBtb3ZlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcblxuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgXG4gIC5jYWxjdWxhdG9yLXdpbmRvdy1jb250cm9scyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gICAgXG4gICAgaSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNhbGN1bGF0b3ItY29udGVudCB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICBcbiAgJi5taW5pbWl6ZWQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuLy8gTW9kaWZpY2F0aW9uIGRlIGwnb3ZlcmxheSBwb3VyIHBlcm1ldHRyZSBsZXMgaW50ZXJhY3Rpb25zXG4uY2FsY3VsYXRlLXBvcHVwLW92ZXJsYXkge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMTAwMDA7XG4gIFxuICAuY2FsY3VsYXRvciB7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 74864:
/*!*************************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/CaisseService/pos-caisse-service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PosCaisseService: () => (/* binding */ PosCaisseService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.service */ 88026);







class PosCaisseService {
  constructor(http, usersService) {
    this.http = http;
    this.usersService = usersService;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
  }
  ouvrirCaisse(request) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        throw new Error('Aucun token trouvé');
      }
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.post(`${this.apiUrl}/ouvrir`, request, {
        headers
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Erreur détaillée', error);
      // Essayez d'extraire le message d'erreur spécifique
      let errorMsg = 'Erreur lors de l\'ouverture de la caisse';
      if (error.error && error.error.error) {
        errorMsg = error.error.error;
      } else if (error.error && error.error.message) {
        errorMsg = error.error.message;
      } else if (error.message) {
        errorMsg = error.message;
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => ({
        message: errorMsg,
        originalError: error
      }));
    }));
  }
  fermerCaisse(boutiqueId) {
    console.log('Tentative de récupération du token...'); // Log avant de récupérer le token
    return this.usersService.getValidAccessToken().pipe(
    // On récupère le token valide de l'utilisateur
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) {
        console.error('Aucun token trouvé');
        throw new Error('Aucun token trouvé');
      }
      console.log('Token récupéré :', token); // Log du token récupéré
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}` // Envoi du token d'authentification
      });
      // Préparation du corps de la requête avec boutiqueId
      const body = {
        boutiqueId: boutiqueId
      };
      console.log('Envoi de la requête POST pour fermer la caisse...'); // Log avant de faire la requête
      return this.http.post(`${this.apiUrl}/fermer`, body, {
        headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
        console.error('Erreur lors de la requête pour fermer la caisse:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Erreur détaillée dans le service:', error);
      // Gestion des erreurs
      let errorMsg = 'Erreur lors de la fermeture de la caisse';
      if (error.error && error.error.error) {
        errorMsg = error.error.error;
      } else if (error.error && error.error.message) {
        errorMsg = error.error.message;
      } else if (error.message) {
        errorMsg = error.message;
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => ({
        message: errorMsg,
        originalError: error
      }));
    }));
  }
  getDerniereCaisseVendeur(boutiqueId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) throw new Error('Aucun token trouvé');
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      // pos-caisse-service.ts (extrait)
      return this.http.get(`${this.apiUrl}/caisse/derniere/${boutiqueId}`, {
        headers
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(resp => resp), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
        console.error('HTTP getDerniereCaisseVendeur error ->', err);
        let msg = 'Erreur inconnue';
        if (err?.error) {
          if (typeof err.error === 'string') {
            msg = err.error; // serveur renvoie directement un texte
          } else if (err.error?.message) {
            msg = err.error.message; // structure { message: "..." }
          } else {
            try {
              msg = JSON.stringify(err.error);
            } catch {
              msg = String(err.error);
            }
          }
        } else if (err?.message) {
          msg = err.message;
        } else {
          try {
            msg = JSON.stringify(err);
          } catch {
            msg = String(err);
          }
        }
        // Propager une string (évite new Error(obj) qui devient "[object Object]")
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => msg);
      }));
    }));
  }
  getCaissesByBoutique(boutiqueId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) throw new Error('Aucun token trouvé');
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/boutique/${boutiqueId}/caisses`, {
        headers
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      // Gestion d'erreur détaillée
      let errorMsg = 'Erreur lors du chargement des caisses';
      if (error?.error?.error) errorMsg = error.error.error;else if (error?.error?.message) errorMsg = error.error.message;else if (error.message) errorMsg = error.message;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => ({
        message: errorMsg,
        originalError: error
      }));
    }));
  }
  getHistoriqueCaissesByVendeur(vendeurId) {
    return this.usersService.getValidAccessToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(token => {
      if (!token) throw new Error('Aucun token trouvé');
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      return this.http.get(`${this.apiUrl}/vendeur/${vendeurId}`, {
        headers
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      let errorMsg = 'Erreur lors du chargement de l\'historique des caisses';
      if (error?.error?.error) errorMsg = error.error.error;else if (error?.error?.message) errorMsg = error.error.message;else if (error.message) errorMsg = error.message;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => ({
        message: errorMsg,
        originalError: error
      }));
    }));
  }
  static {
    this.ɵfac = function PosCaisseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PosCaisseService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: PosCaisseService,
      factory: PosCaisseService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_POS_pos-accueil_pos-accueil_component_ts.js.map