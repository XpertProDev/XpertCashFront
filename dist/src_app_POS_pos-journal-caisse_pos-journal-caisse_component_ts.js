"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_POS_pos-journal-caisse_pos-journal-caisse_component_ts"],{

/***/ 87817:
/*!************************************************************************!*\
  !*** ./src/app/POS/pos-journal-caisse/pos-journal-caisse.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PosJournalCaisseComponent: () => (/* binding */ PosJournalCaisseComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/admin-page/SERVICES/users.service */ 88026);
/* harmony import */ var src_app_admin_page_SERVICES_CaisseService_boutique_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin-page/SERVICES/CaisseService/boutique-state.service */ 37788);
/* harmony import */ var src_app_admin_page_SERVICES_CaisseService_pos_caisse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin-page/SERVICES/CaisseService/pos-caisse-service */ 74864);
/* harmony import */ var src_app_admin_page_SERVICES_boutique_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/admin-page/SERVICES/boutique-service */ 52719);
// pos-journal-caisse.component.ts










function PosJournalCaisseComponent_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const boutique_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", boutique_r1.id)("disabled", !boutique_r1.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", boutique_r1.nomBoutique, " ");
  }
}
function PosJournalCaisseComponent_i_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 43);
  }
}
function PosJournalCaisseComponent_i_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 44);
  }
}
function PosJournalCaisseComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PosJournalCaisseComponent_span_49_Template_i_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.statusFilter = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Statut: ", ctx_r2.statusFilter === "OUVERTE" ? "Ouvertes" : "Ferm\u00E9es", " ");
  }
}
function PosJournalCaisseComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PosJournalCaisseComponent_span_50_Template_i_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.searchTerm = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Recherche: \"", ctx_r2.searchTerm, "\" ");
  }
}
function PosJournalCaisseComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47)(1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Chargement de l'historique...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function PosJournalCaisseComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PosJournalCaisseComponent_div_55_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.loadCaisses());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "R\u00E9essayer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
  }
}
function PosJournalCaisseComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47)(1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Aucune op\u00E9ration de caisse trouv\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PosJournalCaisseComponent_div_56_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.loadCaisses());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Actualiser");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function PosJournalCaisseComponent_div_57_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57)(1, "div", 58)(2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 60)(5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div")(8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Ouverture");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div")(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Fermeture");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 64)(20, "div", 65)(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Initial");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 65)(27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Final");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const caisse_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("open", caisse_r7.statut === "OUVERTE")("closed", caisse_r7.statut === "FERMEE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", caisse_r7.statut === "OUVERTE" ? "Ouverte" : "Ferm\u00E9e", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.formatDate(caisse_r7.dateOuverture));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](caisse_r7.dateFermeture ? ctx_r2.formatDate(caisse_r7.dateFermeture) : "En cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](25, 9, caisse_r7.montantInitial, "XOF ", "symbol", "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](31, 14, caisse_r7.montantCourant, "XOF ", "symbol", "1.0-0"));
  }
}
function PosJournalCaisseComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PosJournalCaisseComponent_div_57_div_1_Template, 32, 19, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.filteredCaisses);
  }
}
function PosJournalCaisseComponent_div_58_i_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 71);
  }
}
function PosJournalCaisseComponent_div_58_i_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 72);
  }
}
function PosJournalCaisseComponent_div_58_i_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 71);
  }
}
function PosJournalCaisseComponent_div_58_i_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 72);
  }
}
function PosJournalCaisseComponent_div_58_i_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 71);
  }
}
function PosJournalCaisseComponent_div_58_i_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 72);
  }
}
function PosJournalCaisseComponent_div_58_i_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 71);
  }
}
function PosJournalCaisseComponent_div_58_i_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 72);
  }
}
function PosJournalCaisseComponent_div_58_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td")(6, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const caisse_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.formatDate(caisse_r9.dateOuverture));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](caisse_r9.dateFermeture ? ctx_r2.formatDate(caisse_r9.dateFermeture) : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("open", caisse_r9.statut === "OUVERTE")("closed", caisse_r9.statut === "FERMEE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", caisse_r9.statut === "OUVERTE" ? "Ouverte" : "Ferm\u00E9e", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](10, 9, caisse_r9.montantInitial, "XOF ", "symbol", "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind4"](13, 14, caisse_r9.montantCourant, "XOF ", "symbol", "1.0-0"));
  }
}
function PosJournalCaisseComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 66)(1, "table")(2, "thead")(3, "tr")(4, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PosJournalCaisseComponent_div_58_Template_th_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.sortCaisses("dateOuverture"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Date Ouverture ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, PosJournalCaisseComponent_div_58_i_7_Template, 1, 0, "i", 68)(8, PosJournalCaisseComponent_div_58_i_8_Template, 1, 0, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PosJournalCaisseComponent_div_58_Template_th_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.sortCaisses("dateFermeture"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Date Fermeture ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, PosJournalCaisseComponent_div_58_i_12_Template, 1, 0, "i", 68)(13, PosJournalCaisseComponent_div_58_i_13_Template, 1, 0, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PosJournalCaisseComponent_div_58_Template_th_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.sortCaisses("montantInitial"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Montant Initial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, PosJournalCaisseComponent_div_58_i_19_Template, 1, 0, "i", 68)(20, PosJournalCaisseComponent_div_58_i_20_Template, 1, 0, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PosJournalCaisseComponent_div_58_Template_th_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.sortCaisses("montantCourant"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Montant Final ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, PosJournalCaisseComponent_div_58_i_24_Template, 1, 0, "i", 68)(25, PosJournalCaisseComponent_div_58_i_25_Template, 1, 0, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, PosJournalCaisseComponent_div_58_tr_27_Template, 14, 19, "tr", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.sortField === "dateOuverture" && ctx_r2.sortDirection === "asc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.sortField === "dateOuverture" && ctx_r2.sortDirection === "desc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.sortField === "dateFermeture" && ctx_r2.sortDirection === "asc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.sortField === "dateFermeture" && ctx_r2.sortDirection === "desc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.sortField === "montantInitial" && ctx_r2.sortDirection === "asc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.sortField === "montantInitial" && ctx_r2.sortDirection === "desc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.sortField === "montantCourant" && ctx_r2.sortDirection === "asc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.sortField === "montantCourant" && ctx_r2.sortDirection === "desc");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.filteredCaisses);
  }
}
class PosJournalCaisseComponent {
  constructor(route, router, usersService, boutiqueState, posCaisseService, boutiqueService) {
    this.route = route;
    this.router = router;
    this.usersService = usersService;
    this.boutiqueState = boutiqueState;
    this.posCaisseService = posCaisseService;
    this.boutiqueService = boutiqueService;
    this.caisses = [];
    this.isLoading = true;
    this.errorMessage = null;
    this.currentBoutiqueId = null;
    this.sortField = 'dateOuverture';
    this.sortDirection = 'desc';
    this.searchTerm = '';
    this.statusFilter = '';
    this.viewMode = 'card'; // Nouvelle propriété pour le mode de vue
    this.selectedBoutiqueIdForList = null;
    this.isLoadingCaisses = false;
    this.boutiques = [];
  }
  ngOnInit() {
    this.loadBoutiques();
    this.boutiqueState.selectedBoutique$.subscribe(boutiqueId => {
      this.currentBoutiqueId = boutiqueId;
      this.loadCaisses();
    });
  }
  loadCaisses() {
    this.isLoading = true;
    this.errorMessage = null;
    const currentUser = this.usersService.getCurrentUser();
    if (!currentUser || !currentUser.id) {
      this.errorMessage = 'Utilisateur non identifié';
      this.isLoading = false;
      return;
    }
    this.posCaisseService.getHistoriqueCaissesByVendeur(currentUser.id).subscribe({
      next: caisses => {
        this.caisses = caisses.filter(c => c.boutiqueId == Number(this.currentBoutiqueId));
        this.sortCaisses();
        this.isLoading = false;
      },
      error: error => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Erreur lors du chargement des caisses';
      }
    });
  }
  loadBoutiques() {
    this.boutiques = [];
    this.usersService.getUserInfo().subscribe({
      next: user => {
        if (user && user.roleType === 'VENDEUR') {
          this.boutiques = user.boutiques || [];
          // Correction ici : utilise la valeur du state si elle existe
          const stateBoutiqueId = this.boutiqueState.getCurrentValue();
          this.selectedBoutiqueIdForList = stateBoutiqueId ?? (this.boutiques.length > 0 ? this.boutiques[0].id : null);
        } else {
          this.boutiqueService.getBoutiquesByEntreprise().subscribe({
            next: boutiques => {
              this.boutiques = boutiques || [];
              const stateBoutiqueId = this.boutiqueState.getCurrentValue();
              this.selectedBoutiqueIdForList = stateBoutiqueId ?? (this.boutiques.length > 0 ? this.boutiques[0].id : null);
            }
          });
        }
      }
    });
  }
  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortCaisses();
  }
  sortCaisses(field = this.sortField) {
    this.sortField = field;
    this.caisses.sort((a, b) => {
      const valueA = a[this.sortField];
      const valueB = b[this.sortField];
      if (valueA === null || valueA === undefined) return 1;
      if (valueB === null || valueB === undefined) return -1;
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return this.sortDirection === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      }
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return this.sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
      }
      if (valueA instanceof Date && valueB instanceof Date) {
        return this.sortDirection === 'asc' ? valueA.getTime() - valueB.getTime() : valueB.getTime() - valueA.getTime();
      }
      return 0;
    });
  }
  get filteredCaisses() {
    let filtered = this.caisses;
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(c => c.nomVendeur?.toLowerCase().includes(term) || c.statut?.toLowerCase().includes(term) || c.montantCourant?.toString().includes(term) || c.dateOuverture?.toString().includes(term));
    }
    if (this.statusFilter) {
      filtered = filtered.filter(c => c.statut === this.statusFilter);
    }
    return filtered;
  }
  goBack() {
    this.router.navigate(['/pos-caisse']);
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
  onBoutiqueChange() {
    if (this.selectedBoutiqueIdForList === null) return;
    this.boutiqueState.setSelectedBoutique(this.selectedBoutiqueIdForList);
    this.caisses = [];
    this.errorMessage = null;
    this.loadDerniereCaisseVendeur(this.selectedBoutiqueIdForList);
  }
  loadDerniereCaisseVendeur(boutiqueId) {
    this.isLoadingCaisses = true;
    this.caisses = [];
    this.errorMessage = null;
    const currentBoutiqueId = boutiqueId; // Sauvegarder l'ID actuel
    this.posCaisseService.getDerniereCaisseVendeur(boutiqueId).subscribe({
      next: response => {
        // Vérifier si la sélection n'a pas changé pendant la requête
        if (this.selectedBoutiqueIdForList !== currentBoutiqueId) {
          this.isLoadingCaisses = false;
          return;
        }
        if (typeof response === 'string') {
          this.errorMessage = response;
        } else if (response && response.boutiqueId === boutiqueId) {
          // Filtrer par boutique
          this.caisses = [response];
        } else {
          this.errorMessage = 'Aucune caisse disponible pour cette boutique';
        }
        this.isLoadingCaisses = false;
      },
      error: error => {
        // Vérifier si la sélection n'a pas changé pendant la requête
        if (this.selectedBoutiqueIdForList !== currentBoutiqueId) {
          this.isLoadingCaisses = false;
          return;
        }
        console.error('Erreur lors du chargement de la dernière caisse', error);
        this.isLoadingCaisses = false;
        this.errorMessage = error.message || 'Erreur lors du chargement de la dernière caisse';
      }
    });
  }
  static {
    this.ɵfac = function PosJournalCaisseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PosJournalCaisseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_CaisseService_boutique_state_service__WEBPACK_IMPORTED_MODULE_1__.BoutiqueStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_CaisseService_pos_caisse_service__WEBPACK_IMPORTED_MODULE_2__.PosCaisseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_admin_page_SERVICES_boutique_service__WEBPACK_IMPORTED_MODULE_3__.BoutiqueService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: PosJournalCaisseComponent,
      selectors: [["app-pos-journal-caisse"]],
      decls: 59,
      vars: 18,
      consts: [[1, "journal-container"], [1, "header_pos_caisse"], [1, "content_header_pos_caisse_left"], [1, "double"], [1, "icon_retour", 3, "click"], [1, "ri-arrow-left-s-line"], [1, "name_pos"], [2, "font-size", "16px"], ["name", "boutique", 1, "content_select", 3, "ngModelChange", "ngModel"], [3, "ngValue", "disabled", 4, "ngFor", "ngForOf"], [1, "content_header_pos_caisse_right"], [1, "o_pager_counter"], [1, ""], [1, "o_pager_limit"], ["aria-atomic", "true", 1, "btn-group", "d-print-none"], ["type", "button", "aria-label", "Pr\u00E9c\u00E9dent", "data-tooltip", "Pr\u00E9c\u00E9dent", 1, "o_pager_previous"], ["type", "button", "aria-label", "Suivant", "data-tooltip", "Suivant", 1, "o_pager_next"], [1, "ri-arrow-right-s-line"], [1, "barre"], [1, "header-actions"], [1, "search-container"], [1, "ri-search-line"], ["type", "text", "placeholder", "Rechercher...", 3, "ngModelChange", "ngModel"], [1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "OUVERTE"], ["value", "FERMEE"], [1, "view-toggle"], ["title", "Vue cartes", 1, "view-btn", 3, "click"], [1, "ri-grid-line"], ["title", "Vue liste", 1, "view-btn", 3, "click"], [1, "ri-table-line"], [1, "sort-button", 3, "click"], ["class", "ri-sort-desc", 4, "ngIf"], ["class", "ri-sort-asc", 4, "ngIf"], [1, "filters-section"], [1, "filter-tags"], ["class", "filter-tag", 4, "ngIf"], [1, "summary"], ["class", "state-container", 4, "ngIf"], ["class", "caisse-cards", 4, "ngIf"], ["class", "caisse-table", 4, "ngIf"], [3, "ngValue", "disabled"], [1, "ri-sort-desc"], [1, "ri-sort-asc"], [1, "filter-tag"], [1, "ri-close-line", 3, "click"], [1, "state-container"], [1, "loading-content"], [1, "spinner"], [1, "error-content"], [1, "ri-error-warning-fill"], [3, "click"], [1, "empty-content"], [1, "ri-file-list-3-line"], [1, "caisse-cards"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-header"], [1, "status-badge"], [1, "card-body"], [1, "info-row"], [1, "ri-calendar-event-line"], [1, "ri-calendar-check-line"], [1, "card-footer"], [1, "amount"], [1, "caisse-table"], [1, "th-content"], ["class", "ri-arrow-up-s-line", 4, "ngIf"], ["class", "ri-arrow-down-s-line", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ri-arrow-up-s-line"], [1, "ri-arrow-down-s-line"]],
      template: function PosJournalCaisseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "ul")(4, "li")(5, "div", 3)(6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PosJournalCaisseComponent_Template_div_click_6_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6)(9, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Journal des Caisses");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "select", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function PosJournalCaisseComponent_Template_select_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedBoutiqueIdForList, $event) || (ctx.selectedBoutiqueIdForList = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PosJournalCaisseComponent_Template_select_ngModelChange_11_listener() {
            return ctx.onBoutiqueChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, PosJournalCaisseComponent_option_12_Template, 2, 3, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10)(14, "span", 11)(15, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "1-1");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " / ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 14)(22, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 19)(28, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function PosJournalCaisseComponent_Template_input_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "select", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function PosJournalCaisseComponent_Template_select_ngModelChange_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.statusFilter, $event) || (ctx.statusFilter = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "option", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Tous les statuts");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Ouvertes");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Ferm\u00E9es");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 27)(40, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PosJournalCaisseComponent_Template_button_click_40_listener() {
            return ctx.viewMode = "card";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PosJournalCaisseComponent_Template_button_click_42_listener() {
            return ctx.viewMode = "list";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PosJournalCaisseComponent_Template_button_click_44_listener() {
            return ctx.toggleSortDirection();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, PosJournalCaisseComponent_i_45_Template, 1, 0, "i", 33)(46, PosJournalCaisseComponent_i_46_Template, 1, 0, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 35)(48, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, PosJournalCaisseComponent_span_49_Template, 3, 1, "span", 37)(50, PosJournalCaisseComponent_span_50_Template, 3, 1, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 38)(52, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, PosJournalCaisseComponent_div_54_Template, 5, 0, "div", 39)(55, PosJournalCaisseComponent_div_55_Template, 7, 1, "div", 39)(56, PosJournalCaisseComponent_div_56_Template, 7, 0, "div", 39)(57, PosJournalCaisseComponent_div_57_Template, 2, 1, "div", 40)(58, PosJournalCaisseComponent_div_58_Template, 28, 9, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedBoutiqueIdForList);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.boutiques);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.statusFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.viewMode === "card");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.viewMode === "list");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortDirection === "desc");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sortDirection === "asc");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.statusFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.filteredCaisses.length, " op\u00E9ration(s)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.errorMessage && ctx.filteredCaisses.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.errorMessage && ctx.filteredCaisses.length > 0 && ctx.viewMode === "card");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.errorMessage && ctx.filteredCaisses.length > 0 && ctx.viewMode === "list");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel],
      styles: ["@charset \"UTF-8\";\n.header_pos_caisse[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  width: 100%;\n  height: 60px;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;\n  padding: 0 15px;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.content_header_pos_caisse_right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.double[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.icon_retour[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.barre[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.2470588235);\n  margin: 8px 10px;\n}\n\n\n\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.o_pager_previous[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .o_pager_next[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 0 5px;\n}\n\n.d-print-none[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n}\n\n.d-print-none[_ngcontent-%COMP%]   .o_pager_previous[_ngcontent-%COMP%] {\n  border-top: 1px solid #000;\n  border-right: none;\n  border-bottom: 1px solid #000;\n  border-left: 1px solid #000;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.d-print-none[_ngcontent-%COMP%]   .o_pager_next[_ngcontent-%COMP%] {\n  border-top: 1px solid #000;\n  border-left: 1px solid #000;\n  border-bottom: 1px solid #000;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.content_select[_ngcontent-%COMP%] {\n  border: none;\n  padding: 6px 30px 6px 7px;\n  background: #efefef;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n  cursor: pointer;\n}\n\n.caisse-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  padding: 5px 20px 20px;\n}\n\n.caisse-card[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 20px;\n  border-radius: 4px;\n  min-height: 150px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n\n.journal-container[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.journal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.journal-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.journal-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #1e293b;\n  margin: 0;\n  font-weight: 600;\n}\n.journal-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  background: #0672E4;\n  color: white;\n  border: none;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s;\n}\n.journal-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover {\n  background: #0361c6;\n  transform: translateX(-2px);\n}\n\n.filters-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0;\n  align-items: center;\n  margin: 0 10px;\n}\n.filters-section[_ngcontent-%COMP%]   .filter-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.filters-section[_ngcontent-%COMP%]   .filter-tags[_ngcontent-%COMP%]   .filter-tag[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0369a1;\n  padding: 0.4rem 0.8rem;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.filters-section[_ngcontent-%COMP%]   .filter-tags[_ngcontent-%COMP%]   .filter-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: all 0.2s;\n}\n.filters-section[_ngcontent-%COMP%]   .filter-tags[_ngcontent-%COMP%]   .filter-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0c4a6e;\n}\n.filters-section[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #64748b;\n}\n\n.state-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 300px;\n}\n.state-container[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%], .state-container[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%], .state-container[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 400px;\n  padding: 2rem;\n}\n.state-container[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .state-container[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .state-container[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.state-container[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .state-container[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .state-container[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #475569;\n  margin-bottom: 1.5rem;\n}\n.state-container[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .state-container[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .state-container[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #0672E4;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: background 0.3s;\n}\n.state-container[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .state-container[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .state-container[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #0284c7;\n}\n.state-container[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0672E4;\n}\n.state-container[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.state-container[_ngcontent-%COMP%]   .empty-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.state-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 4px solid #e2e8f0;\n  border-top: 4px solid #0672E4;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 1.5rem;\n}\n\n.caisse-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.25rem;\n  padding-top: 0.5rem;\n}\n.caisse-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);\n  transition: transform 0.3s, box-shadow 0.3s;\n  overflow: hidden;\n  border: 1px solid #f1f5f9;\n  margin-bottom: 10px;\n}\n.caisse-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);\n}\n.caisse-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 1.25rem;\n  background: #f8fafc;\n  border-bottom: 1px solid #f1f5f9;\n}\n.caisse-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-id[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.caisse-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n.caisse-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.caisse-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.caisse-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #94a3b8;\n  margin-top: 3px;\n}\n.caisse-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.caisse-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  color: #64748b;\n  margin-bottom: 0.25rem;\n}\n.caisse-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #1e293b;\n  font-weight: 500;\n}\n.caisse-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f8fafc;\n  padding: 5px 1.25rem;\n  border-top: 1px solid #f1f5f9;\n}\n.caisse-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.caisse-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  display: block;\n  margin-bottom: 0.25rem;\n}\n.caisse-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.caisse-cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]:first-child {\n  border-right: 1px solid #e2e8f0;\n}\n\n.caisse-table[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);\n  overflow: hidden;\n  margin-top: 1rem;\n}\n.caisse-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.caisse-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .caisse-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  text-align: left;\n  border-bottom: 1px solid #f1f5f9;\n}\n.caisse-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  color: #64748b;\n  font-weight: 600;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  transition: background 0.2s;\n  font-size: 0.9rem;\n}\n.caisse-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover {\n  background-color: #f1f5f9;\n}\n.caisse-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .th-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.caisse-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.caisse-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.2s;\n}\n.caisse-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n}\n.caisse-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #334155;\n  font-size: 0.95rem;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.8rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  display: inline-block;\n}\n.status-badge.open[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.status-badge.closed[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #b91c1c;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .journal-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .journal-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .journal-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .journal-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .filters-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .caisse-table[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .caisse-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    min-width: 700px;\n  }\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.header-actions[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: white;\n  border-radius: 5px;\n  border: 1px solid #000;\n  overflow: hidden;\n}\n.header-actions[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  color: #94a3b8;\n}\n.header-actions[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px 1rem 10px 2.5rem;\n  border: none;\n  width: 250px;\n  font-size: 0.9rem;\n  background: transparent;\n}\n.header-actions[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.header-actions[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {\n  padding: 10px 1rem;\n  border: none;\n  border-left: 1px solid #000000;\n  background: #f8fafc;\n  appearance: none;\n  cursor: pointer;\n  font-size: 0.9rem;\n}\n.header-actions[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.header-actions[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  transition: all 0.2s;\n}\n.header-actions[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n}\n.header-actions[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]   .view-btn[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.header-actions[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]   .view-btn.active[_ngcontent-%COMP%] {\n  background: #0672E4;\n}\n.header-actions[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]   .view-btn.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n}\n.header-actions[_ngcontent-%COMP%]   .sort-button[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  border-radius: 5px;\n  width: 35px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.header-actions[_ngcontent-%COMP%]   .sort-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n}\n.header-actions[_ngcontent-%COMP%]   .sort-button[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcy1qb3VybmFsLWNhaXNzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFBcUIsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLDhCQUFBO0VBQWdDLFNBQUE7RUFBVyxXQUFBO0VBQWEsWUFBQTtFQUFjLHNCQUFBO0VBQXdCLCtDQUFBO0VBQWlELGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsTUFBQTtFQUFRLFlBQUE7QUFjblA7O0FBYkE7RUFBSyxnQkFBQTtFQUFrQixTQUFBO0VBQVcsVUFBQTtBQW1CbEM7O0FBbEJBO0VBQWtDLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixRQUFBO0FBd0J0RTs7QUF2QkE7RUFBSSxTQUFBO0FBMkJKOztBQTFCQTtFQUFVLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixTQUFBO0FBZ0M5Qzs7QUEvQkE7RUFBaUIsZUFBQTtFQUFpQixlQUFBO0FBb0NsQzs7QUFuQ0E7RUFBUyxZQUFBO0VBQWMsVUFBQTtFQUFZLDZDQUFBO0VBQTZCLGdCQUFBO0FBMENoRTs7QUF6Q0EsaURBQUE7QUFDQTtFQUFrQixZQUFBO0VBQWMsbUJBQUE7QUE4Q2hDOztBQTdDQTtFQUF1QyxlQUFBO0VBQWlCLGNBQUE7QUFrRHhEOztBQWpEQTtFQUFzQixzQkFBQTtBQXFEdEI7O0FBcERBO0VBQWtDLDBCQUFBO0VBQTRCLGtCQUFBO0VBQW9CLDZCQUFBO0VBQStCLDJCQUFBO0VBQTZCLDJCQUFBO0VBQTZCLDhCQUFBO0FBNkQzSzs7QUE1REE7RUFBOEIsMEJBQUE7RUFBNEIsMkJBQUE7RUFBNkIsNkJBQUE7RUFBK0IsNEJBQUE7RUFBOEIsK0JBQUE7QUFvRXBKOztBQW5FQTtFQUFrQixZQUFBO0VBQWMseUJBQUE7RUFBMkIsbUJBQUE7RUFBcUIsa0JBQUE7RUFBb0IscUZBQUE7RUFBdUYsZUFBQTtBQTRFM0w7O0FBM0VBO0VBQW9CLGFBQUE7RUFBZSxxQ0FBQTtFQUF1QyxTQUFBO0VBQVcsc0JBQUE7QUFrRnJGOztBQWpGQTtFQUFlLHNCQUFBO0VBQXdCLGFBQUE7RUFBZSxrQkFBQTtFQUFvQixpQkFBQTtFQUFtQixhQUFBO0VBQWUsc0JBQUE7RUFBd0IsOEJBQUE7QUEyRnBJOztBQXpGQSxzQ0FBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUE0RkY7O0FBekZBO0VBRUUseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQTJGRjs7QUF4RkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQTJGRjtBQXpGRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUEyRko7QUF6Rkk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUEyRk47QUF2RkU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBeUZKO0FBdkZJO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBQXlGTjs7QUFsRkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBcUZGO0FBbkZFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBcUZKO0FBbkZJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQXFGTjtBQW5GTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBcUZSO0FBbkZRO0VBQ0UsY0FBQTtBQXFGVjtBQS9FRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQWlGSjs7QUE3RUE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQWdGRjtBQTlFRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBZ0ZKO0FBOUVJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBZ0ZOO0FBN0VJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUErRU47QUE1RUk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBOEVOO0FBNUVNO0VBQ0UsbUJBQUE7QUE4RVI7QUF4RUk7RUFDRSxjQUFBO0FBMEVOO0FBckVJO0VBQ0UsY0FBQTtBQXVFTjtBQWxFSTtFQUNFLGNBQUE7QUFvRU47QUFoRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7QUFrRUo7O0FBOURBO0VBQ0UsYUFBQTtFQUNBLDREQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBaUVGO0FBL0RFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFpRUo7QUEvREk7RUFDRSwyQkFBQTtFQUNBLDJDQUFBO0FBaUVOO0FBOURJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFnRU47QUE5RE07RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWdFUjtBQTVESTtFQUNFLGdCQUFBO0FBOEROO0FBNURNO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQThEUjtBQTVEUTtFQUNFLGdCQUFBO0FBOERWO0FBM0RRO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQTZEVjtBQTFEUTtFQUNFLE9BQUE7QUE0RFY7QUExRFU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUE0RFo7QUF6RFU7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQTJEWjtBQXJESTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUF1RE47QUFyRE07RUFDRSxPQUFBO0VBQ0Esa0JBQUE7QUF1RFI7QUFyRFE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUF1RFY7QUFwRFE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXNEVjtBQW5EUTtFQUNFLCtCQUFBO0FBcURWOztBQTlDQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFpREY7QUEvQ0U7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFpREo7QUEvQ0k7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFpRE47QUE5Q0k7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQWdETjtBQTlDTTtFQUNFLHlCQUFBO0FBZ0RSO0FBN0NNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQStDUjtBQTVDTTtFQUNFLGVBQUE7QUE4Q1I7QUExQ0k7RUFDRSwyQkFBQTtBQTRDTjtBQTFDTTtFQUNFLHlCQUFBO0FBNENSO0FBekNNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBMkNSOztBQXJDQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUF3Q0Y7QUF0Q0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUF3Q0o7QUFyQ0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUF1Q0o7O0FBbkNBO0VBQ0U7SUFBSyx1QkFBQTtFQXVDTDtFQXRDQTtJQUFPLHlCQUFBO0VBeUNQO0FBQ0Y7QUF2Q0E7RUFDRTtJQUNFLHNCQUFBO0lBQ0Esb0JBQUE7RUF5Q0Y7RUF2Q0U7SUFDRSxXQUFBO0VBeUNKO0VBdkNJO0lBQ0UsT0FBQTtFQXlDTjtFQXZDTTtJQUNFLFdBQUE7RUF5Q1I7RUFuQ0E7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsU0FBQTtFQXFDRjtFQWxDQTtJQUNFLGdCQUFBO0VBb0NGO0VBbENFO0lBQ0UsZ0JBQUE7RUFvQ0o7QUFDRjtBQWhDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFrQ0o7QUFoQ0k7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxzQkFBQTtFQUNBLGdCQUFBO0FBaUNOO0FBL0JNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQWlDUjtBQTlCTTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBZ0NSO0FBOUJRO0VBQ0UsYUFBQTtBQWdDVjtBQTVCTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQThCUjtBQTFCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQTRCTjtBQTFCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUE0QlI7QUExQlE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQTRCVjtBQXpCUTtFQUNFLG1CQUFBO0FBMkJWO0FBeEJRO0VBQ0UsbUJBQUE7QUEwQlY7QUF4QlU7RUFDRSxZQUFBO0FBMEJaO0FBcEJJO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQXNCTjtBQXBCTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBc0JSO0FBbkJNO0VBQ0UsbUJBQUE7QUFxQlIiLCJmaWxlIjoicG9zLWpvdXJuYWwtY2Fpc3NlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcl9wb3NfY2Fpc3NlIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDEwcHg7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDYwcHg7IGJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDFweCAycHggMHB4OyBwYWRkaW5nOiAwIDE1cHg7IHBvc2l0aW9uOiBzdGlja3k7IHRvcDogMDsgei1pbmRleDogOTk5O31cbnVsIHsgbGlzdC1zdHlsZTogbm9uZTsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwO31cbi5jb250ZW50X2hlYWRlcl9wb3NfY2Fpc3NlX3JpZ2h0IHtkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweH1cbnAgeyBtYXJnaW46IDA7IH1cbi5kb3VibGUgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7fVxuLmljb25fcmV0b3VyIGkgeyBmb250LXNpemU6IDIwcHg7IGN1cnNvcjogcG9pbnRlcjt9XG4uYmFycmUgeyBoZWlnaHQ6IDI1cHg7IHdpZHRoOiAxcHg7IGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzZjsgbWFyZ2luOiA4cHggMTBweDt9XG4vKiBEw6lzYWN0aXZlciBsZXMgYm91dG9ucyBwZW5kYW50IGxlIGNoYXJnZW1lbnQgKi9cbmJ1dHRvbjpkaXNhYmxlZCB7IG9wYWNpdHk6IDAuNzsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuLm9fcGFnZXJfcHJldmlvdXMgaSwgLm9fcGFnZXJfbmV4dCBpIHsgZm9udC1zaXplOiAyMHB4OyBwYWRkaW5nOiAwIDVweDsgfVxuLmQtcHJpbnQtbm9uZSBidXR0b257IGJvcmRlcjogMXB4IHNvbGlkICMwMDA7IH1cbi5kLXByaW50LW5vbmUgLm9fcGFnZXJfcHJldmlvdXMgeyBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDsgYm9yZGVyLXJpZ2h0OiBub25lOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDsgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwOyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7IGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDsgfVxuLmQtcHJpbnQtbm9uZSAub19wYWdlcl9uZXh0IHsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7IGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7IGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7IGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IH1cbi5jb250ZW50X3NlbGVjdCB7IGJvcmRlcjogbm9uZTsgcGFkZGluZzogNnB4IDMwcHggNnB4IDdweDsgYmFja2dyb3VuZDogI2VmZWZlZjsgYm9yZGVyLXJhZGl1czogNXB4OyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4OyBjdXJzb3I6IHBvaW50ZXI7fVxuLmNhaXNzZS1jb250YWluZXIgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOyBnYXA6IDE2cHg7IHBhZGRpbmc6IDVweCAyMHB4IDIwcHg7fVxuLmNhaXNzZS1jYXJkIHsgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgcGFkZGluZzogMjBweDsgYm9yZGVyLXJhZGl1czogNHB4OyBtaW4taGVpZ2h0OiAxNTBweDsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO31cblxuLyogcG9zLWpvdXJuYWwtY2Fpc3NlLmNvbXBvbmVudC5zY3NzICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5qb3VybmFsLWNvbnRhaW5lciB7XG4gIC8vIHBhZGRpbmc6IDEuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5qb3VybmFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDtcblxuICAuaGVhZGVyLWxlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG5cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGNvbG9yOiAjMWUyOTNiO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cblxuICAuYmFjay1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICMwNjcyRTQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwMzYxYzY7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XG4gICAgfVxuICB9XG5cbiAgXG59XG5cbi5maWx0ZXJzLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDVweCAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgMTBweDtcblxuICAuZmlsdGVyLXRhZ3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLmZpbHRlci10YWcge1xuICAgICAgYmFja2dyb3VuZDogI2UwZjJmZTtcbiAgICAgIGNvbG9yOiAjMDM2OWExO1xuICAgICAgcGFkZGluZzogMC40cmVtIDAuOHJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMC41cmVtO1xuXG4gICAgICBpIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICMwYzRhNmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc3VtbWFyeSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6ICM2NDc0OGI7XG4gIH1cbn1cblxuLnN0YXRlLWNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcblxuICAubG9hZGluZy1jb250ZW50LCAuZXJyb3ItY29udGVudCwgLmVtcHR5LWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIHBhZGRpbmc6IDJyZW07XG5cbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIGNvbG9yOiAjNDc1NTY5O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDY3MkU0O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAyODRjNztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubG9hZGluZy1jb250ZW50IHtcbiAgICBpIHtcbiAgICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIH1cbiAgfVxuXG4gIC5lcnJvci1jb250ZW50IHtcbiAgICBpIHtcbiAgICAgIGNvbG9yOiAjZWY0NDQ0O1xuICAgIH1cbiAgfVxuXG4gIC5lbXB0eS1jb250ZW50IHtcbiAgICBpIHtcbiAgICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgIH1cbiAgfVxuXG4gIC5zcGlubmVyIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiA0cHggc29saWQgI2UyZThmMDtcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgIzA2NzJFNDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBtYXJnaW46IDAgYXV0byAxLjVyZW07XG4gIH1cbn1cblxuLmNhaXNzZS1jYXJkcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ2FwOiAxLjI1cmVtO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuXG4gIC5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsMCwwLDAuMDMpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBib3gtc2hhZG93IDAuM3M7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgfVxuXG4gICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogNXB4IDEuMjVyZW07XG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWY1Zjk7XG5cbiAgICAgIC5jYXJkLWlkIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgIHBhZGRpbmc6IDEuMjVyZW07XG5cbiAgICAgIC5pbmZvLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgY29sb3I6ICM5NGEzYjg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMWUyOTNiO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZC1mb290ZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gICAgICBwYWRkaW5nOiA1cHggMS4yNXJlbTtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmNWY5O1xuXG4gICAgICAuYW1vdW50IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiAjMWUyOTNiO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UyZThmMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY2Fpc3NlLXRhYmxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsMCwwLDAuMDMpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuXG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXG4gICAgdGgsIHRkIHtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xuICAgIH1cblxuICAgIHRoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XG4gICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcbiAgICAgIH1cblxuICAgICAgLnRoLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0Ym9keSB0ciB7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xuICAgICAgfVxuXG4gICAgICB0ZCB7XG4gICAgICAgIGNvbG9yOiAjMzM0MTU1O1xuICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zdGF0dXMtYmFkZ2Uge1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAmLm9wZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2ZjZTc7XG4gICAgY29sb3I6ICMxNjY1MzQ7XG4gIH1cblxuICAmLmNsb3NlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZTJlMjtcbiAgICBjb2xvcjogI2I5MWMxYztcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuam91cm5hbC1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cbiAgICAuaGVhZGVyLWFjdGlvbnMge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZmlsdGVycy1zZWN0aW9uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICBcbiAgLmNhaXNzZS10YWJsZSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBcbiAgICB0YWJsZSB7XG4gICAgICBtaW4td2lkdGg6IDcwMHB4O1xuICAgIH1cbiAgfVxufVxuXG4uaGVhZGVyLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjc1cmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgLy8gYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgaSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMTJweDtcbiAgICAgICAgY29sb3I6ICM5NGEzYjg7XG4gICAgICB9XG5cbiAgICAgIGlucHV0IHtcbiAgICAgICAgcGFkZGluZzogMTBweCAxcmVtIDEwcHggMi41cmVtO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmZpbHRlci1zZWxlY3Qge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDFyZW07XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC52aWV3LXRvZ2dsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgXG4gICAgICAudmlldy1idG4ge1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgICAgXG4gICAgICAgIGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2UyZThmMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwNjcyRTQ7XG4gICAgICAgICAgXG4gICAgICAgICAgaSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNvcnQtYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2UyZThmMDtcbiAgICAgIH1cbiAgICB9XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvUE9TL3Bvcy1qb3VybmFsLWNhaXNzZS9wb3Mtam91cm5hbC1jYWlzc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQXFCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQiw4QkFBQTtFQUFnQyxTQUFBO0VBQVcsV0FBQTtFQUFhLFlBQUE7RUFBYyxzQkFBQTtFQUF3QiwrQ0FBQTtFQUFpRCxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLE1BQUE7RUFBUSxZQUFBO0FBY25QOztBQWJBO0VBQUssZ0JBQUE7RUFBa0IsU0FBQTtFQUFXLFVBQUE7QUFtQmxDOztBQWxCQTtFQUFrQyxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsUUFBQTtBQXdCdEU7O0FBdkJBO0VBQUksU0FBQTtBQTJCSjs7QUExQkE7RUFBVSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsU0FBQTtBQWdDOUM7O0FBL0JBO0VBQWlCLGVBQUE7RUFBaUIsZUFBQTtBQW9DbEM7O0FBbkNBO0VBQVMsWUFBQTtFQUFjLFVBQUE7RUFBWSw2Q0FBQTtFQUE2QixnQkFBQTtBQTBDaEU7O0FBekNBLGlEQUFBO0FBQ0E7RUFBa0IsWUFBQTtFQUFjLG1CQUFBO0FBOENoQzs7QUE3Q0E7RUFBdUMsZUFBQTtFQUFpQixjQUFBO0FBa0R4RDs7QUFqREE7RUFBc0Isc0JBQUE7QUFxRHRCOztBQXBEQTtFQUFrQywwQkFBQTtFQUE0QixrQkFBQTtFQUFvQiw2QkFBQTtFQUErQiwyQkFBQTtFQUE2QiwyQkFBQTtFQUE2Qiw4QkFBQTtBQTZEM0s7O0FBNURBO0VBQThCLDBCQUFBO0VBQTRCLDJCQUFBO0VBQTZCLDZCQUFBO0VBQStCLDRCQUFBO0VBQThCLCtCQUFBO0FBb0VwSjs7QUFuRUE7RUFBa0IsWUFBQTtFQUFjLHlCQUFBO0VBQTJCLG1CQUFBO0VBQXFCLGtCQUFBO0VBQW9CLHFGQUFBO0VBQXVGLGVBQUE7QUE0RTNMOztBQTNFQTtFQUFv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QSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFzQk47QUFwQk07RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQXNCUjtBQW5CTTtFQUNFLG1CQUFBO0FBcUJSO0FBRUEsdzRuQkFBdzRuQiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJfcG9zX2NhaXNzZSB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAxMHB4OyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA2MHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMnB4IDBweDsgcGFkZGluZzogMCAxNXB4OyBwb3NpdGlvbjogc3RpY2t5OyB0b3A6IDA7IHotaW5kZXg6IDk5OTt9XG51bCB7IGxpc3Qtc3R5bGU6IG5vbmU7IG1hcmdpbjogMDsgcGFkZGluZzogMDt9XG4uY29udGVudF9oZWFkZXJfcG9zX2NhaXNzZV9yaWdodCB7ZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHh9XG5wIHsgbWFyZ2luOiAwOyB9XG4uZG91YmxlIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4O31cbi5pY29uX3JldG91ciBpIHsgZm9udC1zaXplOiAyMHB4OyBjdXJzb3I6IHBvaW50ZXI7fVxuLmJhcnJlIHsgaGVpZ2h0OiAyNXB4OyB3aWR0aDogMXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwM2Y7IG1hcmdpbjogOHB4IDEwcHg7fVxuLyogRMODwqlzYWN0aXZlciBsZXMgYm91dG9ucyBwZW5kYW50IGxlIGNoYXJnZW1lbnQgKi9cbmJ1dHRvbjpkaXNhYmxlZCB7IG9wYWNpdHk6IDAuNzsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuLm9fcGFnZXJfcHJldmlvdXMgaSwgLm9fcGFnZXJfbmV4dCBpIHsgZm9udC1zaXplOiAyMHB4OyBwYWRkaW5nOiAwIDVweDsgfVxuLmQtcHJpbnQtbm9uZSBidXR0b257IGJvcmRlcjogMXB4IHNvbGlkICMwMDA7IH1cbi5kLXByaW50LW5vbmUgLm9fcGFnZXJfcHJldmlvdXMgeyBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDsgYm9yZGVyLXJpZ2h0OiBub25lOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDsgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwOyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7IGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDsgfVxuLmQtcHJpbnQtbm9uZSAub19wYWdlcl9uZXh0IHsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7IGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7IGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7IGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IH1cbi5jb250ZW50X3NlbGVjdCB7IGJvcmRlcjogbm9uZTsgcGFkZGluZzogNnB4IDMwcHggNnB4IDdweDsgYmFja2dyb3VuZDogI2VmZWZlZjsgYm9yZGVyLXJhZGl1czogNXB4OyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4OyBjdXJzb3I6IHBvaW50ZXI7fVxuLmNhaXNzZS1jb250YWluZXIgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOyBnYXA6IDE2cHg7IHBhZGRpbmc6IDVweCAyMHB4IDIwcHg7fVxuLmNhaXNzZS1jYXJkIHsgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgcGFkZGluZzogMjBweDsgYm9yZGVyLXJhZGl1czogNHB4OyBtaW4taGVpZ2h0OiAxNTBweDsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO31cblxuLyogcG9zLWpvdXJuYWwtY2Fpc3NlLmNvbXBvbmVudC5zY3NzICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5qb3VybmFsLWNvbnRhaW5lciB7XG4gIC8vIHBhZGRpbmc6IDEuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5qb3VybmFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDtcblxuICAuaGVhZGVyLWxlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG5cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGNvbG9yOiAjMWUyOTNiO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gIH1cblxuICAuYmFjay1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICMwNjcyRTQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwMzYxYzY7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XG4gICAgfVxuICB9XG5cbiAgXG59XG5cbi5maWx0ZXJzLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDVweCAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgMTBweDtcblxuICAuZmlsdGVyLXRhZ3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLmZpbHRlci10YWcge1xuICAgICAgYmFja2dyb3VuZDogI2UwZjJmZTtcbiAgICAgIGNvbG9yOiAjMDM2OWExO1xuICAgICAgcGFkZGluZzogMC40cmVtIDAuOHJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMC41cmVtO1xuXG4gICAgICBpIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICMwYzRhNmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc3VtbWFyeSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6ICM2NDc0OGI7XG4gIH1cbn1cblxuLnN0YXRlLWNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcblxuICAubG9hZGluZy1jb250ZW50LCAuZXJyb3ItY29udGVudCwgLmVtcHR5LWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIHBhZGRpbmc6IDJyZW07XG5cbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIGNvbG9yOiAjNDc1NTY5O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDY3MkU0O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAyODRjNztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubG9hZGluZy1jb250ZW50IHtcbiAgICBpIHtcbiAgICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIH1cbiAgfVxuXG4gIC5lcnJvci1jb250ZW50IHtcbiAgICBpIHtcbiAgICAgIGNvbG9yOiAjZWY0NDQ0O1xuICAgIH1cbiAgfVxuXG4gIC5lbXB0eS1jb250ZW50IHtcbiAgICBpIHtcbiAgICAgIGNvbG9yOiAjOTRhM2I4O1xuICAgIH1cbiAgfVxuXG4gIC5zcGlubmVyIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiA0cHggc29saWQgI2UyZThmMDtcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgIzA2NzJFNDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBtYXJnaW46IDAgYXV0byAxLjVyZW07XG4gIH1cbn1cblxuLmNhaXNzZS1jYXJkcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ2FwOiAxLjI1cmVtO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuXG4gIC5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsMCwwLDAuMDMpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBib3gtc2hhZG93IDAuM3M7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgfVxuXG4gICAgLmNhcmQtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogNXB4IDEuMjVyZW07XG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWY1Zjk7XG5cbiAgICAgIC5jYXJkLWlkIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgIHBhZGRpbmc6IDEuMjVyZW07XG5cbiAgICAgIC5pbmZvLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgY29sb3I6ICM5NGEzYjg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMWUyOTNiO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZC1mb290ZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gICAgICBwYWRkaW5nOiA1cHggMS4yNXJlbTtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmNWY5O1xuXG4gICAgICAuYW1vdW50IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiAjMWUyOTNiO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UyZThmMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY2Fpc3NlLXRhYmxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsMCwwLDAuMDMpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuXG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXG4gICAgdGgsIHRkIHtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xuICAgIH1cblxuICAgIHRoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XG4gICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcbiAgICAgIH1cblxuICAgICAgLnRoLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0Ym9keSB0ciB7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xuICAgICAgfVxuXG4gICAgICB0ZCB7XG4gICAgICAgIGNvbG9yOiAjMzM0MTU1O1xuICAgICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5zdGF0dXMtYmFkZ2Uge1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAmLm9wZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2ZjZTc7XG4gICAgY29sb3I6ICMxNjY1MzQ7XG4gIH1cblxuICAmLmNsb3NlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZTJlMjtcbiAgICBjb2xvcjogI2I5MWMxYztcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuam91cm5hbC1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cbiAgICAuaGVhZGVyLWFjdGlvbnMge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZmlsdGVycy1zZWN0aW9uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICBcbiAgLmNhaXNzZS10YWJsZSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBcbiAgICB0YWJsZSB7XG4gICAgICBtaW4td2lkdGg6IDcwMHB4O1xuICAgIH1cbiAgfVxufVxuXG4uaGVhZGVyLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjc1cmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgLy8gYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgaSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMTJweDtcbiAgICAgICAgY29sb3I6ICM5NGEzYjg7XG4gICAgICB9XG5cbiAgICAgIGlucHV0IHtcbiAgICAgICAgcGFkZGluZzogMTBweCAxcmVtIDEwcHggMi41cmVtO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmZpbHRlci1zZWxlY3Qge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDFyZW07XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC52aWV3LXRvZ2dsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgXG4gICAgICAudmlldy1idG4ge1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgICAgXG4gICAgICAgIGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2UyZThmMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwNjcyRTQ7XG4gICAgICAgICAgXG4gICAgICAgICAgaSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNvcnQtYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG5cbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2UyZThmMDtcbiAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 37788:
/*!*****************************************************************************!*\
  !*** ./src/app/admin-page/SERVICES/CaisseService/boutique-state.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoutiqueStateService: () => (/* binding */ BoutiqueStateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class BoutiqueStateService {
  constructor() {
    this.STORAGE_KEY = 'selectedBoutiqueId';
    // initialisation avec la valeur sessionStorage (ou migration depuis localStorage)
    this.selectedBoutiqueSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.loadInitial());
    this.selectedBoutique$ = this.selectedBoutiqueSubject.asObservable();
    // rien d'autre à faire ici (loadInitial a déjà effectué la migration si nécessaire)
  }
  /** Charge la valeur initiale depuis sessionStorage.
   *  Si une valeur existe dans localStorage (ancienne app), on la migre vers sessionStorage. */
  loadInitial() {
    // migration depuis localStorage (si nécessaire)
    const legacy = localStorage.getItem(this.STORAGE_KEY);
    if (legacy !== null) {
      try {
        // transférer dans sessionStorage puis supprimer l'ancien
        sessionStorage.setItem(this.STORAGE_KEY, legacy);
      } catch (e) {
        console.warn('Impossible de migrer la boutique depuis localStorage', e);
      }
      localStorage.removeItem(this.STORAGE_KEY);
    }
    const saved = sessionStorage.getItem(this.STORAGE_KEY);
    return saved !== null ? Number(saved) : null;
  }
  setSelectedBoutique(boutiqueId) {
    if (boutiqueId !== null) {
      sessionStorage.setItem(this.STORAGE_KEY, boutiqueId.toString());
    } else {
      sessionStorage.removeItem(this.STORAGE_KEY);
    }
    this.selectedBoutiqueSubject.next(boutiqueId);
  }
  /** retourne la valeur actuelle (ou null si aucune) */
  getCurrentValue() {
    const saved = sessionStorage.getItem(this.STORAGE_KEY);
    return saved !== null ? Number(saved) : null;
  }
  static {
    this.ɵfac = function BoutiqueStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BoutiqueStateService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BoutiqueStateService,
      factory: BoutiqueStateService.ɵfac,
      providedIn: 'root'
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
//# sourceMappingURL=src_app_POS_pos-journal-caisse_pos-journal-caisse_component_ts.js.map