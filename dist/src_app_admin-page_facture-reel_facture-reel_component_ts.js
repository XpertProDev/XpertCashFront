"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_facture-reel_facture-reel_component_ts"],{

/***/ 66748:
/*!*******************************************************************!*\
  !*** ./src/app/admin-page/facture-reel/facture-reel.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FactureReelComponent: () => (/* binding */ FactureReelComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MODELS/customNumberPipe */ 96115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _SERVICES_facturereel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SERVICES/facturereel-service */ 97033);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SERVICES/users.service */ 88026);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_Module_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SERVICES/Module-Service */ 84173);












const _c0 = () => [6, 10, 25, 100];
function FactureReelComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FactureReelComponent_div_0_div_7_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleView("list"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FactureReelComponent_div_0_div_7_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleView("grid"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Liste ", ctx_r1.isListView ? "\u2713" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Cadre ", !ctx_r1.isListView ? "\u2713" : "", " ");
  }
}
function FactureReelComponent_div_0_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FactureReelComponent_div_0_div_8_div_3_Template_div_click_0_listener() {
      const type_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.choisirType(type_r6.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", type_r6.value === ctx_r1.typeSelectionne);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", type_r6.label, " ");
  }
}
function FactureReelComponent_div_0_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Date d\u00E9but");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function FactureReelComponent_div_0_div_8_div_4_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.dateDebut, $event) || (ctx_r1.dateDebut = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Date fin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function FactureReelComponent_div_0_div_8_div_4_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.dateFin, $event) || (ctx_r1.dateFin = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.dateDebut);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.dateFin);
  }
}
function FactureReelComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FactureReelComponent_div_0_div_8_div_3_Template, 2, 3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, FactureReelComponent_div_0_div_8_div_4_Template, 7, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FactureReelComponent_div_0_div_8_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.appliquerFiltre());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\uD83D\uDD0D Appliquer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.typesPeriode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.typeSelectionne === "personnalise");
  }
}
function FactureReelComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38)(1, "div", 39)(2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "path", 42)(5, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Acc\u00E8s restreint");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 44)(9, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Veuillez renouveler votre abonnement pour acc\u00E9der \u00E0 ce module.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FactureReelComponent_div_0_div_13_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.redirigerAccueil());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.messageErreur);
  }
}
function FactureReelComponent_div_0_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.totalAllFactures, " ");
  }
}
function FactureReelComponent_div_0_ng_container_22_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const statut_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.factureCounts[statut_r10.value], " ");
  }
}
function FactureReelComponent_div_0_ng_container_22_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 51);
  }
}
function FactureReelComponent_div_0_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FactureReelComponent_div_0_ng_container_22_Template_div_click_1_listener() {
      const statut_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selectStatut(statut_r10.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, FactureReelComponent_div_0_ng_container_22_span_4_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, FactureReelComponent_div_0_ng_container_22_div_5_Template, 1, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const statut_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("name_boutique_active", ctx_r1.selectedStatut === statut_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", statut_r10.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.factureCounts[statut_r10.value] > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r11 !== ctx_r1.statutsPaiement.length - 1);
  }
}
function FactureReelComponent_div_0_table_23_tr_19_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ligne_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ligne_r15.produit.nom, " (x", ligne_r15.quantite, ") ");
  }
}
function FactureReelComponent_div_0_table_23_tr_19_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FactureReelComponent_div_0_table_23_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FactureReelComponent_div_0_table_23_tr_19_Template_tr_click_0_listener() {
      const facture_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showDetails(facture_r14.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, FactureReelComponent_div_0_table_23_tr_19_div_9_Template, 2, 2, "div", 21)(10, FactureReelComponent_div_0_table_23_tr_19_div_10_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 57)(12, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const facture_r14 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](facture_r14.numeroFacture);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((facture_r14.client == null ? null : facture_r14.client.nomComplet) || (facture_r14.entrepriseClient == null ? null : facture_r14.entrepriseClient.nom));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 8, facture_r14.dateCreation, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", facture_r14.lignesFacture == null ? null : facture_r14.lignesFacture.slice(0, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (facture_r14.lignesFacture == null ? null : facture_r14.lignesFacture.length) > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.getStatutClass(facture_r14.statutPaiement));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getLibelleStatut(facture_r14.statutPaiement), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 11, facture_r14.totalFacture), " CFA ");
  }
}
function FactureReelComponent_div_0_table_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table")(1, "thead")(2, "tr", 52)(3, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FactureReelComponent_div_0_table_23_Template_th_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.sort("numeroFacture"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " N\u00B0 Facture ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FactureReelComponent_div_0_table_23_Template_th_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.sort("client.nom"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FactureReelComponent_div_0_table_23_Template_th_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.sort("dateCreation"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Produits");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, FactureReelComponent_div_0_table_23_tr_19_Template, 17, 13, "tr", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r1.sortField === "numeroFacture" ? ctx_r1.sortDirection === "asc" ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line" : "ri-arrow-up-down-line");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r1.sortField === "client.nom" ? ctx_r1.sortDirection === "asc" ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line" : "ri-arrow-up-down-line");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r1.sortField === "dateCreation" ? ctx_r1.sortDirection === "asc" ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line" : "ri-arrow-up-down-line");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.paginatedFacturesReel);
  }
}
function FactureReelComponent_div_0_div_24_div_1_ng_container_29_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ligne_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ligne_r18.produit.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ligne_r18.quantite);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, ligne_r18.montantTotal));
  }
}
function FactureReelComponent_div_0_div_24_div_1_ng_container_29_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 76)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "||");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "||");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "||");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function FactureReelComponent_div_0_div_24_div_1_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FactureReelComponent_div_0_div_24_div_1_ng_container_29_tr_1_Template, 8, 5, "tr", 21)(2, FactureReelComponent_div_0_div_24_div_1_ng_container_29_tr_2_Template, 7, 0, "tr", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const facture_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", facture_r17.lignesFacture.slice(0, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", facture_r17.lignesFacture.length > 2);
  }
}
function FactureReelComponent_div_0_div_24_div_1_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Aucun produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function FactureReelComponent_div_0_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FactureReelComponent_div_0_div_24_div_1_Template_div_click_0_listener() {
      const facture_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showDetails(facture_r17.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 62)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Facture ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 63)(5, "div", 64)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 65)(9, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Client :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 65)(14, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Date :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "table")(20, "thead")(21, "tr")(22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Quantit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, FactureReelComponent_div_0_div_24_div_1_ng_container_29_Template, 3, 2, "ng-container", 69)(30, FactureReelComponent_div_0_div_24_div_1_ng_template_30_Template, 3, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 72)(35, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "- \u00C9tat -");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const facture_r17 = ctx.$implicit;
    const noLines_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](31);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](facture_r17.numeroFacture);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (facture_r17.client == null ? null : facture_r17.client.nomComplet) || (facture_r17.entrepriseClient == null ? null : facture_r17.entrepriseClient.nom), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](18, 8, facture_r17.dateCreation, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", facture_r17.lignesFacture == null ? null : facture_r17.lignesFacture.length)("ngIfElse", noLines_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.getImageSrc(facture_r17.statutPaiement), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.getStatutClass(facture_r17.statutPaiement));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getLibelleStatut(facture_r17.statutPaiement));
  }
}
function FactureReelComponent_div_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FactureReelComponent_div_0_div_24_div_1_Template, 39, 11, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.paginatedFacturesReel);
  }
}
function FactureReelComponent_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Aucun facture trouv\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FactureReelComponent_div_0_mat_paginator_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-paginator", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function FactureReelComponent_div_0_mat_paginator_27_Template_mat_paginator_page_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx_r1.filteredFacturesReel.length)("pageSize", ctx_r1.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0));
  }
}
function FactureReelComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Factures r\u00E9elle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5)(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FactureReelComponent_div_0_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showDropdown = !ctx_r1.showDropdown);
    })("clickOutside", function FactureReelComponent_div_0_Template_div_clickOutside_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showDropdown = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, FactureReelComponent_div_0_div_7_Template, 5, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, FactureReelComponent_div_0_div_8_Template, 7, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 10)(11, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function FactureReelComponent_div_0_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FactureReelComponent_div_0_Template_i_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, FactureReelComponent_div_0_div_13_Template, 15, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 14)(15, "div", 15)(16, "div", 16)(17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FactureReelComponent_div_0_Template_div_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selectStatut(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Tous les statuts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, FactureReelComponent_div_0_span_20_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, FactureReelComponent_div_0_ng_container_22_Template, 6, 5, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, FactureReelComponent_div_0_table_23_Template, 20, 7, "table", 22)(24, FactureReelComponent_div_0_div_24_Template, 2, 1, "div", 23)(25, FactureReelComponent_div_0_div_25_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, FactureReelComponent_div_0_mat_paginator_27_Template, 1, 4, "mat-paginator", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx_r1.isListView ? "ri-list-check" : "ri-apps-fill");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.showDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.dropdownOuvert);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r1.searchTerm ? "ri-close-line red-icon" : "ri-  search-2-line");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.accesAutorise);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("name_boutique_active", ctx_r1.selectedStatut === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.totalAllFactures > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.statutsPaiement);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isListView);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isListView);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.facturesLoaded && ctx_r1.filteredFacturesReel.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.factureReel.length > ctx_r1.pageSize);
  }
}
class FactureReelComponent {
  constructor(factureReelService, usersService, router, moduleService) {
    this.factureReelService = factureReelService;
    this.usersService = usersService;
    this.router = router;
    this.moduleService = moduleService;
    this.factureReel = [];
    this.userEntrepriseId = null;
    this.errorMessage = '';
    this.facturesLoaded = false;
    this.searchTerm = '';
    this.accesAutorise = false;
    this.chargementFini = false;
    this.messageErreur = "";
    this.tempsRestantEssai = null;
    this.factureCounts = {};
    this.totalAllFactures = 0;
    // Pagination
    this.pageSize = 10;
    this.currentPage = 0;
    this.isListView = false;
    this.showDropdown = false;
    this.sortField = 'numeroFacture';
    this.sortDirection = 'asc';
    this.selectedStatut = null;
    this.statutsPaiement = [{
      value: 'EN_ATTENTE',
      label: 'Non payé'
    }, {
      value: 'PARTIELLEMENT_PAYEE',
      label: 'Part. Payé'
    }, {
      value: 'PAYEE',
      label: 'Payé'
    }];
    // Trier
    this.typeSelectionne = 'jour';
    this.dateDebut = '';
    this.dateFin = '';
    this.factures = [];
    this.dropdownOuvert = false;
    this.typesPeriode = [{
      value: 'jour',
      label: 'Par jour'
    }, {
      value: 'mois',
      label: 'Par mois'
    }, {
      value: 'annee',
      label: 'Par année'
    }, {
      value: 'personnalise',
      label: 'Personnalisé'
    }];
  }
  ngOnInit() {
    const savedView = localStorage.getItem('factureReelView');
    if (savedView) {
      this.isListView = savedView === 'list';
    }
    this.getUserInfo();
    this.verifierAcces();
  }
  toggleView(viewType) {
    this.isListView = viewType === 'list';
    this.showDropdown = false;
    // Sauvegarder la préférence
    localStorage.setItem('factureReelView', viewType);
  }
  sort(field) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.factureReel.sort((a, b) => {
      // Gestion des propriétés imbriquées
      const getValue = (obj, path) => path.split('.').reduce((o, p) => o?.[p], obj);
      const valueA = getValue(a, field)?.toString().toLowerCase() ?? '';
      const valueB = getValue(b, field)?.toString().toLowerCase() ?? '';
      return valueA.localeCompare(valueB) * (this.sortDirection === 'asc' ? 1 : -1);
    });
  }
  getUserInfo() {
    this.usersService.getUserInfo().subscribe({
      next: user => {
        this.userEntrepriseId = user.entrepriseId;
        this.getAllFactureReelOfEntreprise(this.userEntrepriseId);
      },
      error: err => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
        this.facturesLoaded = true;
      }
    });
  }
  getAllFactureReelOfEntreprise(entrepriseId) {
    this.facturesLoaded = false;
    this.factureReelService.getAlFactproreelOfEntreprise(entrepriseId).subscribe(response => {
      console.log("lollll", response);
      this.factureReel = response;
      this.errorMessage = "";
      this.facturesLoaded = true;
      this.calculateFactureCounts();
    }, error => {
      console.error('Erreur lors de la récupération des factures réelles:', error);
      if (error.error && error.error.error && typeof error.error.error === 'string') {
        let msg = error.error.error;
        // Supprime le début standardisé "Une erreur est survenue : " s'il est présent
        if (msg.startsWith("Une erreur est survenue :")) {
          msg = msg.replace("Une erreur est survenue :", "").trim();
        }
        this.errorMessage = msg;
      } else {
        this.errorMessage = "Une erreur est survenue.";
      }
      this.factureReel = [];
      this.facturesLoaded = true;
    });
  }
  calculateFactureCounts() {
    // Réinitialiser les compteurs
    this.factureCounts = {};
    this.totalAllFactures = this.factureReel.length;
    // Compter par statut
    this.factureReel.forEach(facture => {
      const statut = facture.statutPaiement;
      if (statut) {
        this.factureCounts[statut] = (this.factureCounts[statut] || 0) + 1;
      }
    });
  }
  selectStatut(statut) {
    this.selectedStatut = statut;
    this.currentPage = 0;
  }
  onPageChange(event) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }
  get paginatedFacturesReel() {
    const start = this.currentPage * this.pageSize;
    return this.filteredFacturesReel.slice(start, start + this.pageSize);
  }
  getLibelleStatut(statut) {
    switch (statut) {
      case 'EN_ATTENTE':
        return 'Non payé';
      case 'PARTIELLEMENT_PAYEE':
        return 'Part. payée';
      case 'PAYEE':
      case 'PAYE':
        return 'Payée';
      default:
        return 'Inconnu';
    }
  }
  clearSearch() {
    this.searchTerm = '';
  }
  getImageSrc(statut) {
    switch (statut) {
      case 'EN_ATTENTE':
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-orange.png';
      case 'PARTIELLEMENT_PAYEE':
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-bleu-.png';
      case 'PAYEE':
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-Vert.png';
      default:
        return 'assets/etiquette/Etiquette-Sy-XPERTPRO-Gris.png';
    }
  }
  getStatutClass(statut) {
    switch (statut) {
      case 'EN_ATTENTE':
        return 'etat-orange';
      case 'PARTIELLEMENT_PAYEE':
        return 'etat-bleu';
      case 'PAYEE':
        return 'etat-vert';
      default:
        return 'etat-gris';
    }
  }
  showDetails(factureId) {
    this.router.navigate(['/facture-reel-details', factureId]);
  }
  // Getter pour les factures filtrées
  get filteredFacturesReel() {
    let result = [...this.factureReel];
    // Filtre par statut
    if (this.selectedStatut) {
      result = result.filter(f => f.statutPaiement === this.selectedStatut);
    }
    // Filtre par recherche
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(f => f.numeroFacture?.toLowerCase().includes(term) || f.client?.nomComplet?.toLowerCase().includes(term) || f.entrepriseClient?.nom?.toLowerCase().includes(term));
    }
    return result;
  }
  verifierAcces() {
    this.moduleService.getModulesEntreprise().subscribe({
      next: modules => {
        const moduleFacturation = modules.find(m => m.code === 'GESTION_FACTURATION');
        if (moduleFacturation?.actif) {
          this.accesAutorise = true;
          this.tempsRestantEssai = moduleFacturation.tempsRestantEssai || null;
        } else {
          this.accesAutorise = false;
          this.messageErreur = moduleFacturation?.tempsRestantEssai ? "Votre période d'essai est terminée." : "Ce module est inactif.";
        }
        this.chargementFini = true;
      },
      error: err => {
        this.accesAutorise = false;
        this.messageErreur = "Erreur lors de la vérification d'accès.";
        this.chargementFini = true;
      }
    });
  }
  redirigerAccueil() {
    this.router.navigate(['/']);
  }
  get labelTypeSelectionne() {
    return this.typesPeriode.find(t => t.value === this.typeSelectionne)?.label || 'Filtrer';
  }
  toggleDropdown() {
    this.dropdownOuvert = !this.dropdownOuvert;
  }
  choisirType(type) {
    this.typeSelectionne = type;
    this.dateDebut = '';
    this.dateFin = '';
  }
  onClickOutside(target) {
    if (!target.closest('.filter-dropdown-wrapper') && !target.closest('.filter-toggle-icon')) {
      this.dropdownOuvert = false;
      this.reinitialiserFiltre();
    }
  }
  reinitialiserFiltre() {
    this.typeSelectionne = 'annee';
    this.dateDebut = '';
    this.dateFin = '';
    this.dropdownOuvert = false;
    this.factureReelService.getFacturesParPeriode('annee').subscribe({
      next: data => {
        this.factureReel = data;
        this.currentPage = 0;
      },
      error: err => {
        console.error('Erreur lors du chargement des factures:', err);
      }
    });
  }
  appliquerFiltre() {
    if (this.typeSelectionne === 'personnalise' && (!this.dateDebut || !this.dateFin)) {
      alert("Veuillez sélectionner une date de début et de fin.");
      return;
    }
    this.factureReelService.getFacturesParPeriode(this.typeSelectionne, this.dateDebut, this.dateFin).subscribe({
      next: data => {
        this.factureReel = data;
        this.currentPage = 0;
        this.dropdownOuvert = false;
      },
      error: err => {
        console.error('Erreur de chargement des factures:', err);
      }
    });
  }
  static {
    this.ɵfac = function FactureReelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FactureReelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_SERVICES_facturereel_service__WEBPACK_IMPORTED_MODULE_1__.FactureReelService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_SERVICES_Module_Service__WEBPACK_IMPORTED_MODULE_3__.ModuleService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FactureReelComponent,
      selectors: [["app-facture-reel"]],
      hostBindings: function FactureReelComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FactureReelComponent_click_HostBindingHandler($event) {
            return ctx.onClickOutside($event.target);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"]);
        }
      },
      decls: 1,
      vars: 1,
      consts: [["noLines", ""], ["class", "containerTable", 4, "ngIf"], [1, "containerTable"], [1, "tasks-header"], [1, "title"], [1, "actions"], ["clickOutside", "", 1, "contentIcon", 3, "click", "clickOutside"], ["class", "view-dropdown", 4, "ngIf"], ["class", "filter-dropdown-wrapper", 4, "ngIf"], [1, "contentIcon"], [1, "inputSearch"], ["type", "text", "placeholder", "Recherche...", 3, "ngModelChange", "ngModel"], [3, "click", "ngClass"], ["class", "access-overlay", 4, "ngIf"], [1, "container_list_boutique"], [1, "content_list_boutique"], [1, "name_boutique"], [1, "all_boutique", 3, "click"], [1, "all_boutique", 2, "display", "flex", "align-items", "center"], ["class", "facture-count", 4, "ngIf"], [1, "bare"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "parent", 4, "ngIf"], ["class", "no-client-message", 4, "ngIf"], [1, "pagination"], [3, "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], [1, "view-dropdown"], [1, "dropdown-item", 3, "click"], [1, "filter-dropdown-wrapper"], [1, "filter-dropdown"], [1, "filter-type"], ["class", "filter-option", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "filter-date", 4, "ngIf"], [1, "filter-btn", 3, "click"], [1, "filter-option", 3, "click"], [1, "filter-date"], ["type", "date", 3, "ngModelChange", "ngModel"], [1, "access-overlay"], [1, "access-card"], ["aria-hidden", "true", 1, "icon-container"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48"], ["d", "M18 6L6 18", "stroke", "white", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M6 6L18 18", "stroke", "white", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "description"], [1, "message-principal"], [1, "dashboard-button", 3, "click"], [1, "facture-count"], [1, "statut-option", 3, "click"], [2, "display", "flex", "align-items", "center"], ["class", "barre", 4, "ngIf"], [1, "barre"], [1, "tr"], [1, "th", 3, "click"], [1, "th"], ["class", "tr", 3, "click", 4, "ngFor", "ngForOf"], [1, "tr", 3, "click"], [1, "td"], [3, "ngClass"], [1, "parent"], ["class", "cadre_cahier", 3, "click", 4, "ngFor", "ngForOf"], [1, "cadre_cahier", 3, "click"], [1, "title_facture"], [1, "information_cadre"], [1, "num_facture"], [1, "double_info"], [1, "left_name"], [1, "right_name"], [1, "right_name", "date_name"], [4, "ngIf", "ngIfElse"], [1, "image_etiquette"], ["alt", "\u00C9tiquette", 3, "src"], [1, "etat", 3, "ngClass"], [1, "tilte_etat"], ["class", "facture_trois", 4, "ngIf"], [1, "tb_total"], [1, "facture_trois"], ["colspan", "3", 1, "text-center"], [1, "no-client-message"], [3, "page", "length", "pageSize", "pageSizeOptions"]],
      template: function FactureReelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, FactureReelComponent_div_0_Template, 28, 15, "div", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.chargementFini);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_0__.CustomNumberPipe],
      styles: ["@charset \"UTF-8\";\n.container_list_boutique[_ngcontent-%COMP%] {\n  scrollbar-width: auto;\n  overflow: auto;\n  scrollbar-color: #888 #f1f1f1;\n  scrollbar-width: thin;\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 2px;\n  height: 3px;\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1; \n\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: blue; \n\n  border-radius: 4px; \n\n}\n\n.container_list_boutique[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: red; \n\n}\n\n.name_boutique[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  margin: 30px 0 20px;\n}\n\n.name_boutique_active[_ngcontent-%COMP%] {\n  background-color: #E9D421;\n  border-radius: 5px;\n  color: #000000;\n}\n\n.barre[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.2470588235);\n  margin: 8px 0;\n}\n\n.name_boutique[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 4px 16px;\n  margin: 4px 0;\n  transition: all 0.3s ease;\n  font-weight: 500;\n  border-radius: 4px;\n}\n.name_boutique[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.name_boutique[_ngcontent-%COMP%]   p.name_boutique_active[_ngcontent-%COMP%] {\n  background-color: #E9D421;\n  color: #000 !important;\n}\n\n.title_return[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0 0 0 10px;\n}\n\ntr[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\ntr.tr[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\nth[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n  padding: 8px;\n}\n\nth.th[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n  padding: 10px;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 15px 8px;\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.containerTable[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.tasks-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 30px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.add-task[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  background-color: #0672E4;\n  color: #ffffff;\n  border-radius: 5px;\n  border: none;\n}\n\n.contentIcon[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  display: flex;\n  align-items: center;\n}\n\n.contentIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.contentIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #0672E4;\n  transition: all 0.5s ease;\n}\n\n.bare[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 30px;\n  background-color: #eee;\n}\n\n.inputSearch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n\n.inputSearch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-left: 10px;\n  border-radius: 5px;\n}\n\n.inputSearch[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 15px;\n  font-size: 17px;\n}\n\n.titleTableProduit[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.content_sort[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.btn_add_ligne[_ngcontent-%COMP%] {\n  background-color: #e6f2ff;\n  border: 1px solid #007bff;\n  padding: 5px 10px;\n  cursor: pointer;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.btn_remove[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n  color: red;\n}\n\n.content_cadre_double[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n\n\n.imgClient[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n\n.imgClient[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n  object-fit: cover;\n  border-radius: 50%;\n  transition: transform 0.2s;\n}\n\n.imgClient[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1); \n\n}\n\n\n\n.imgClient_grid[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  border: none;\n}\n\n.imgClient_grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 90%;\n  object-fit: cover;\n  border-radius: 50%;\n  transition: transform 0.2s;\n}\n\n.imgClient_grid[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1); \n\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n}\n\n.tasks-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.add-task[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  background-color: #0672E4;\n  color: #ffffff;\n  border-radius: 5px;\n  border: none;\n}\n\n.inputSearch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n\n.inputSearch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-left: 10px;\n  border-radius: 5px;\n}\n\n.inputSearch[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  margin-right: 15px;\n  font-size: 17px;\n}\n\n.contentIcon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  cursor: pointer;\n  position: relative;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.barre[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.2470588235);\n}\n\n.titleTableProduit[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\ntr[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 18px 8px;\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n  padding: 12px 8px;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.facture_trois[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n}\n\n\n\n.contentIcon[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n\n.view-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  z-index: 100;\n  min-width: 150px;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n\n.no-client-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  font-size: 13px;\n  color: #666;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  margin: 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n\n\n\n\n\n\nmat-paginator[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 5px;\n}\n\n.no-phone-text[_ngcontent-%COMP%] {\n  color: #c3c3c3; \n\n  font-style: italic; \n\n}\n\n.info_cadre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.cadreChoix[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  border-radius: 5px;\n  cursor: pointer;\n  color: #ffffff;\n}\n\n.sizeBox[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.statut[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-left: auto;\n  font-weight: bold;\n  color: #6c757d;\n}\n\n.parent[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n}\n\n.cadre_cahier[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 5px;\n  padding: 10px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  transition: transform 0.2s ease;\n  border: 1px solid #e0e0e0;\n  height: 287px;\n  position: relative;\n  cursor: pointer;\n}\n\n.cadre_cahier[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  margin-top: -5px;\n}\n\n.title_facture[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2px;\n}\n\n.num_facture[_ngcontent-%COMP%], \n.double_info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.left_name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.title_facture[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: 0.65px;\n}\n\n.num_facture[_ngcontent-%COMP%] {\n  margin: 20px 0 10px;\n}\n\n.num_facture[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0672E4;\n}\n\n.double_info[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  opacity: 0.7;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n  padding: 8px;\n  font-size: 8px;\n}\n\nth.th[_ngcontent-%COMP%], td.td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(221, 221, 221, 0.5803921569);\n  padding: 20px;\n  font-size: 11px;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #ffffff;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #fefefe;\n}\n\ntr.tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\ntr.tr[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.tb_total[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n\n\n.image_etiquette[_ngcontent-%COMP%] {\n  width: 147px;\n  height: 108px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: absolute;\n  left: -24px;\n  transform: rotate(-19deg);\n  bottom: -23px;\n}\n\n.image_etiquette[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 96%;\n  height: 90%;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n\n.etat[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: rotate(12deg);\n  top: 45px;\n  left: 58px;\n}\n\n\n\n.etat[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.etat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 10px;\n}\n\n.etat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-transform: lowercase !important;\n  font-size: 12px;\n  letter-spacing: 0.5px;\n  font-weight: 500;\n}\n\n.tilte_etat[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3px;\n  color: rgba(255, 255, 255, 0.537254902) !important;\n}\n\n\n\n.etat-gris[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.etat-gris[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.4823529412) !important;\n}\n\n.etat-orange[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.etat-orange[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.etat-bleu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.etat-bleu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.etat-vert[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.etat-vert[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n  margin-top: 20px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: red;\n  background: #ffe5e5;\n  padding: 10px;\n  border: 1px solid red;\n  border-radius: 5px;\n  margin: 10px 0;\n  text-align: center;\n}\n\n.access-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n  pointer-events: all;\n}\n\n.access-card[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  border-radius: 16px;\n  padding: 24px;\n  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);\n  max-width: 300px;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.icon-container[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #ff1515;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.icon-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.access-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1F2937;\n  margin: 0 0 10px 0;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.access-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  line-height: 1.4;\n  margin-bottom: 24px;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 11px;\n}\n\n.access-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  font-size: 11px;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.dashboard-button[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 12px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  width: 100%;\n  transition: background-color 0.2s ease-in-out;\n}\n\n.dashboard-button[_ngcontent-%COMP%]:hover {\n  background-color: #edcc3a;\n}\n\n.facture-count[_ngcontent-%COMP%] {\n  background-color: #ddd;\n  color: #000;\n  border-radius: 50%;\n  font-size: 10px;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px;\n  margin-left: 10px;\n}\n\n\n\n.draggable-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.filter-dropdown-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.filter-dropdown[_ngcontent-%COMP%] {\n  min-width: 260px;\n  background-color: white;\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);\n  padding: 16px;\n  margin-top: 8px;\n  position: absolute;\n  z-index: 1000;\n}\n\n.filter-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #eef1f4;\n}\n\n.filter-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.filter-arrow[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n\n.filter-type[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n\n.filter-option[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  font-size: 14px;\n  color: #333;\n}\n\n.filter-option[_ngcontent-%COMP%]:hover {\n  background-color: #f1f3f6;\n}\n\n.filter-option.active[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 500;\n}\n\n.filter-date[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  margin: 8px 0 4px;\n  color: #555;\n}\n\n.filter-date[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 10px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n}\n\n.filter-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 16px;\n  padding: 10px;\n  font-weight: 500;\n  background-color: #1976d2;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  transition: background-color 0.2s;\n  cursor: pointer;\n}\n\n.filter-btn[_ngcontent-%COMP%]:hover {\n  background-color: #155fa0;\n}\n\n.filter-toggle-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #f0f0f0;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3R1cmUtcmVlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUEsRUFBQSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUEsRUFBQSx1QkFBQTtFQUNBLGtCQUFBLEVBQUEsa0NBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUEsRUFBQSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNGOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsNkNBQUE7RUFFQSxhQUFBO0FBSkY7O0FBUUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTko7QUFRSTtFQUNFLHFDQUFBO0FBTk47QUFVSTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7QUFSTjs7QUFhQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQVZKOztBQWFBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBVko7O0FBYUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFWSjs7QUFjQTtFQUNJLGVBQUE7QUFYSjs7QUFjQTtFQUNJLGVBQUE7QUFYSjs7QUFjQTtFQUNJLDBEQUFBO0VBQ0EsWUFBQTtBQVhKOztBQWNBO0VBQ0ksMERBQUE7RUFDQSxhQUFBO0FBWEo7O0FBY0E7RUFDRSxpQkFBQTtFQUNBLDBEQUFBO0FBWEY7O0FBY0E7RUFDSSx5QkFBQTtBQVhKOztBQWNBO0VBQ0kseUJBQUE7QUFYSjs7QUFjQTtFQUNJLHNCQUFBO0FBWEo7O0FBY0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVhKOztBQWNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVhKOztBQWNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBWEo7O0FBY0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVhKOztBQWNBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVhKOztBQWVBO0VBRUksZUFBQTtFQUNBLGVBQUE7QUFiSjs7QUFnQkE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUFiSjs7QUFnQkE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBYko7O0FBZ0JBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQWRKOztBQWlCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWRKOztBQWlCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWRKOztBQWlCQTtFQUNJLGVBQUE7QUFkSjs7QUFpQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFkSjs7QUFrQkE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWZGOztBQWtCQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQWZGOztBQXFCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBbEJKOztBQXFCQSx5Q0FBQTtBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtBQWxCSjs7QUFxQkE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQWxCSjs7QUFxQkE7RUFDSSxxQkFBQSxFQUFBLHlCQUFBO0FBbEJKOztBQXFCQSx5Q0FBQTtBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBbkJKOztBQXNCQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBbkJKOztBQXNCQTtFQUNJLHFCQUFBLEVBQUEseUJBQUE7QUFuQko7O0FBc0JBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7QUFuQko7O0FBc0JBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQW5CSjs7QUFzQkE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQW5CSjs7QUFzQkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FBcEJKOztBQXVCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQXBCSjs7QUF1QkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFwQko7O0FBdUJBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXBCSjs7QUF1QkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFwQko7O0FBdUJBO0VBQ0ksV0FBQTtBQXBCSjs7QUF1QkE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDZDQUFBO0FBcEJKOztBQTBCQTtFQUNJLGVBQUE7QUF2Qko7O0FBMEJBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBdkJKOztBQTBCQTtFQUNJLGVBQUE7QUF2Qko7O0FBMEJBO0VBQ0UsaUJBQUE7RUFDQSwwREFBQTtBQXZCRjs7QUEwQkE7RUFDSSx5QkFBQTtFQUNBLDBEQUFBO0VBQ0EsaUJBQUE7QUF2Qko7O0FBMEJBO0VBQ0kseUJBQUE7QUF2Qko7O0FBMEJBO0VBQ0ksc0JBQUE7QUF2Qko7O0FBMEJBO0VBQ0ksZ0JBQUE7QUF2Qko7O0FBMkJBLG9CQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBeEJKOztBQTJCQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUF4Qko7O0FBMkJBO0VBQ0kseUJBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FBeEJKOztBQTJCQSxxQkFBQTtBQTREQSwyQkFBQTtBQTZCQSxvQkFBQTtBQW9EQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFsS0o7O0FBcUtBO0VBQ0ksY0FBQSxFQUFBLDBCQUFBO0VBQ0Esa0JBQUEsRUFBQSxjQUFBO0FBbEtKOztBQXFLQTtFQUNJLFdBQUE7QUFsS0o7O0FBcUtBO0VBQ0ksZUFBQTtBQWxLSjs7QUFxS0E7RUFDSSx5QkFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFsS0o7O0FBcUtBO0VBQ0ksY0FBQTtBQWxLSjs7QUFxS0E7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFuS0o7O0FBc0tBO0VBQ0ksYUFBQTtFQUNBLDREQUFBO0VBQ0EsU0FBQTtBQW5LSjs7QUFzS0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFuS0o7O0FBc0tBO0VBQ0ksMkJBQUE7RUFFQSx5Q0FBQTtBQXBLSjs7QUF1S0E7RUFDSSxnQkFBQTtBQXBLSjs7QUF1S0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFwS0o7O0FBdUtBOztFQUVJLGVBQUE7QUFwS0o7O0FBdUtBO0VBQ0ksZ0JBQUE7QUFwS0o7O0FBdUtBO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0FBcEtKOztBQXVLQTtFQUNJLG1CQUFBO0FBcEtKOztBQXVLQTtFQUNJLGNBQUE7QUFwS0o7O0FBdUtBO0VBQ0ksbUJBQUE7RUFLQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBM0tKOztBQThLQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFyS0o7O0FBd0tBO0VBQ0kseUJBQUE7QUFyS0o7O0FBd0tBO0VBQ0ksMERBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQXJLSjs7QUF3S0E7RUFDSSwwREFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBcktKOztBQXdLQTtFQUNJLHlCQUFBO0FBcktKOztBQXdLQTtFQUNJLHlCQUFBO0FBcktKOztBQXdLQTtFQUNJLHlCQUFBO0FBcktKOztBQXdLQTtFQUNJLHNCQUFBO0FBcktKOztBQXdLQTtFQUNJLGlCQUFBO0FBcktKOztBQXdLQSxnQ0FBQTtBQUNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQXRLSjs7QUF5S0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUF0S0o7O0FBeUtBO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtFQUdBLFNBQUE7RUFDQSxVQUFBO0FBeEtKOztBQTJLQSxxQkFBQTtBQUNBO0VBQ0ksZUFBQTtBQXhLSjs7QUEyS0U7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQXhLSjs7QUEyS0U7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBeEtKOztBQTJLRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtEQUFBO0FBeEtKOztBQTRLRSx1Q0FBQTtBQUVBO0VBQ0UsV0FBQTtBQTFLSjs7QUE2S0U7RUFDRSw2Q0FBQTtBQTFLSjs7QUE2S0U7O0VBRUUsV0FBQTtBQTFLSjs7QUE2S0U7O0VBRUUsV0FBQTtBQTFLSjs7QUE2S0U7O0VBRUUsV0FBQTtBQTFLSjs7QUE4S0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQTNLSjs7QUE4S0U7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTNLRjs7QUErS0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUE1S0o7O0FBK0tBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBNUtKOztBQStLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUE1S0o7O0FBK0tBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUE1S0o7O0FBK0tBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUE1S0o7O0FBK0tBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQTVLSjs7QUErS0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtBQTVLSjs7QUFnTEE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw2Q0FBQTtBQTdLSjs7QUFnTEE7RUFDSSx5QkFBQTtBQTdLSjs7QUFnTEE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBN0tGOztBQWdMQSwyQ0FBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBN0tGOztBQW1MQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFoTEY7O0FBbUxBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBaExGOztBQW1MQTtFQUNFLHlCQUFBO0FBaExGOztBQW1MQTtFQUNFLGdCQUFBO0FBaExGOztBQW1MQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBaExGOztBQW1MQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQWhMRjs7QUFtTEE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFoTEY7O0FBa0xBO0VBQ0UseUJBQUE7QUEvS0Y7O0FBa0xBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUEvS0Y7O0FBaUxBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUE5S0Y7O0FBZ0xBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUE3S0Y7O0FBZ0xBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FBN0tGOztBQWdMQTtFQUNFLHlCQUFBO0FBN0tGOztBQWdMQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUE3S0YiLCJmaWxlIjoiZmFjdHVyZS1yZWVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcl9saXN0X2JvdXRpcXVlIHtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBhdXRvO1xuICBvdmVyZmxvdzogYXV0bzsgXG4gIHNjcm9sbGJhci1jb2xvcjogIzg4OCAjZjFmMWYxO1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxufVxuXG4uY29udGFpbmVyX2xpc3RfYm91dGlxdWU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDJweDsgXG4gIGhlaWdodDogM3B4O1xufVxuXG4uY29udGFpbmVyX2xpc3RfYm91dGlxdWU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTsgLyogY291bGV1ciBkdSBmb25kIGRlIGxhIHNjcm9sbGJhciAqL1xufVxuXG4uY29udGFpbmVyX2xpc3RfYm91dGlxdWU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogYmx1ZTsgLyogY291bGV1ciBkdSBjdXJzZXVyICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgLyogYXJyb25kaXIgbGVzIGJvcmRzIGR1IGN1cnNldXIgKi9cbn1cblxuLmNvbnRhaW5lcl9saXN0X2JvdXRpcXVlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJlZDsgLyogY291bGV1ciBkdSBjdXJzZXVyIGF1IHN1cnZvbCAqL1xufVxuXG4ubmFtZV9ib3V0aXF1ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDMwcHggMCAyMHB4O1xufVxuXG4vLyAubmFtZV9ib3V0aXF1ZSBwIHtcbi8vICAgcGFkZGluZzogOHB4IDE1cHg7XG4vLyB9XG5cbi5uYW1lX2JvdXRpcXVlX2FjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUQ0MjE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5iYXJyZSB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDNmO1xuICAvLyBtYXJnaW46IDAgMXB4IDE2cHg7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbi5uYW1lX2JvdXRpcXVlIHtcbiAgcCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuICAgIC8vIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIG1hcmdpbjogNHB4IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjA1KTtcbiAgICAvLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICB9XG5cbiAgICAmLm5hbWVfYm91dGlxdWVfYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUQ0MjE7IC8vIENvdWxldXIgZGUgZm9uZCBxdWFuZCBhY3RpZlxuICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDsgLy8gRm9yY2UgbGEgY291bGV1ciBibGFuY2hlIHF1YW5kIGFjdGlmXG4gICAgfVxuICB9XG59XG5cbi50aXRsZV9yZXR1cm4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4gIFxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xuICAgIFxufVxuXG50ciB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG50ci50ciB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuICBcbnRoe1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkOTQ7XG4gICAgcGFkZGluZzogOHB4O1xufVxuICBcbnRoLnRoIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDk0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbnRkIHtcbiAgcGFkZGluZzogMTVweCA4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkOTQ7XG59XG4gIFxudGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG4gIFxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuICBcbnRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4uY29udGFpbmVyVGFibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4udGFza3MtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4gIFxuLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFkZC10YXNrIHtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuICBcbi5jb250ZW50SWNvbiB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuICBcbiAgXG4uY29udGVudEljb24gaXtcbiAgICAvLyBwYWRkaW5nOiAwIDE1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiAgXG4uY29udGVudEljb24gaTpob3ZlciB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cbiAgXG4uYmFyZSB7XG4gICAgd2lkdGg6IDJweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cbiAgXG4uaW5wdXRTZWFyY2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlucHV0U2VhcmNoIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmlucHV0U2VhcmNoIGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4udGl0bGVUYWJsZVByb2R1aXQgdGgge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvbnRlbnRfc29ydCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5idG5fYWRkX2xpZ25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjJmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwN2JmZjtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnRuX3JlbW92ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogcmVkO1xufVxuXG5cblxuXG4uY29udGVudF9jYWRyZV9kb3VibGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi8qIFN0eWxlIGRlIGwnaW1hZ2UgY2lyY3VsYWlyZSBpbWcgbGlzdCAqL1xuLmltZ0NsaWVudCB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4gIFxuLmltZ0NsaWVudCBpbWcge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuICBcbi5pbWdDbGllbnQ6aG92ZXIgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIEVmZmV0IHpvb20gYXUgc3Vydm9sICovXG59XG5cbi8qIFN0eWxlIGRlIGwnaW1hZ2UgY2lyY3VsYWlyZSBpbWcgZ3JpZCAqL1xuLmltZ0NsaWVudF9ncmlkIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4gIFxuLmltZ0NsaWVudF9ncmlkIGltZyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG4gIFxuLmltZ0NsaWVudF9ncmlkOmhvdmVyIGltZyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBFZmZldCB6b29tIGF1IHN1cnZvbCAqL1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi50YXNrcy1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmFkZC10YXNrIHtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uaW5wdXRTZWFyY2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiAgXG4uaW5wdXRTZWFyY2ggaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW5wdXRTZWFyY2ggaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5jb250ZW50SWNvbiBpIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiAgXG4uYWN0aW9ucyBpe1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uYmFycmUge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzZjtcbiAgICAvLyBtYXJnaW46IDhweCAxNXB4O1xufVxuXG4vLyB0YWJsZSBcblxuLnRpdGxlVGFibGVQcm9kdWl0IHRoIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50ciB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG50ZCB7XG4gIHBhZGRpbmc6IDE4cHggOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDk0O1xufVxuICBcbnRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkOTQ7XG4gICAgcGFkZGluZzogMTJweCA4cHg7XG59XG4gIFxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuICBcbnRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4uZmFjdHVyZV90cm9pcyB0ZCB7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIERyb3Bkb3duIHN0eWxlcyAqL1xuLmNvbnRlbnRJY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udmlldy1kcm9wZG93biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5uby1jbGllbnQtbWVzc2FnZSB7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuLyogR3JpZCB2aWV3IHN0eWxlcyAqL1xuLy8gLmdyaWQtdmlldyB7XG4vLyAgICAgZGlzcGxheTogZ3JpZDtcbi8vICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyODBweCwgMWZyKSk7XG4vLyAgICAgZ2FwOiAyMHB4O1xuLy8gfVxuXG5cbi8vIC5jbGllbnQtY2FyZCB7XG4vLyAgICAgYmFja2dyb3VuZDogI2ZmZjtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuLy8gICAgIHBhZGRpbmc6IDIwcHg7XG4vLyAgICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4vLyAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuLy8gICAgIG1hcmdpbjogMjBweCAwIC0yMHB4O1xuLy8gfVxuXG4vLyAuY2xpZW50LWNhcmQ6aG92ZXIge1xuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbi8vICAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbi8vIH1cblxuLy8gLmNsaWVudC1jYXJkIGgzIHtcbi8vICAgICBjb2xvcjogIzJjM2U1MDtcbi8vICAgICBmb250LXNpemU6IDExcHg7XG4vLyAgICAgbWFyZ2luOiAwO1xuLy8gICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbi8vICAgICBmb250LXdlaWdodDogNjAwO1xuLy8gfVxuXG4vLyAubmFtZV9pY29uIHtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuLy8gICAgIG1hcmdpbjogMCAwIDEycHggMDtcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbi8vIH1cblxuLy8gLm5hbWVfaWNvbiBpIHtcbi8vICAgICBmb250LXNpemU6IDE4cHg7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuLy8gfVxuXG4vLyAuY2xpZW50LWNhcmQgcCB7XG4vLyAgICAgbWFyZ2luOiA4cHggMDtcbi8vICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgICAgY29sb3I6ICM2NjY7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGdhcDogOHB4O1xuLy8gfVxuXG4vLyAuY2xpZW50LWNhcmQgcCBpIHtcbi8vICAgICBmb250LXNpemU6IDE2cHg7XG4vLyAgICAgY29sb3I6ICMwNjcyRTQ7XG4vLyB9XG5cbi8qIEFtw6lsaW9yYXRpb25zIGRyb3Bkb3duICovXG4vLyAudmlldy1kcm9wZG93biB7XG4vLyAgICAgLyogLi4uIHN0eWxlcyBleGlzdGFudHMgLi4uICovXG4vLyAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xuLy8gICAgIGFuaW1hdGlvbjogc2NhbGVJbiAwLjE1cyBlYXNlLW91dDtcbi8vIH1cblxuLy8gQGtleWZyYW1lcyBzY2FsZUluIHtcbi8vICAgICBmcm9tIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjkpOyBvcGFjaXR5OiAwOyB9XG4vLyAgICAgdG8geyB0cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAxOyB9XG4vLyB9XG5cbi8vIC5kcm9wZG93bi1pdGVtIHtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlO1xuLy8gfVxuXG4vLyAuZHJvcGRvd24taXRlbTo6YWZ0ZXIge1xuLy8gICAgIGNvbnRlbnQ6ICfinJMnO1xuLy8gICAgIG9wYWNpdHk6IDA7XG4vLyAgICAgY29sb3I6ICMwNjcyRTQ7XG4vLyB9XG5cbi8vIC5kcm9wZG93bi1pdGVtLmFjdGl2ZTo6YWZ0ZXIge1xuLy8gICAgIG9wYWNpdHk6IDE7XG4vLyB9XG5cbi8qIEFqb3V0ZSBkYW5zIENTUyAqL1xuLy8gLnN0YXR1cy1iYWRnZSB7XG4vLyAgICAgcGFkZGluZzogNHB4IDhweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIH1cbiAgXG4vLyAgIC5zdGF0dXMtYWN0aXZlIHtcbi8vICAgICBiYWNrZ3JvdW5kOiAjZTNmY2VmO1xuLy8gICAgIGNvbG9yOiAjMDA2NjQ0O1xuLy8gICB9XG4gIFxuLy8gICAuc3RhdHVzLWluYWN0aXZlIHtcbi8vICAgICBiYWNrZ3JvdW5kOiAjZmFlYWU1O1xuLy8gICAgIGNvbG9yOiAjYmYzNjBjO1xuLy8gICB9XG5cbi8vICAgLyogUG91ciBsZXMgbW9iaWxlcyAqL1xuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4vLyAgICAgLnRhc2tzLWhlYWRlciB7XG4vLyAgICAgLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgICAgIGdhcDogMTVweDtcbi8vICAgICB9XG5cbi8vICAgICAvLyAuYWRkLXRhc2sge1xuLy8gICAgIC8vIH1cbiAgICBcbi8vICAgICAuaW5wdXRTZWFyY2gge1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgfVxuICAgIFxuLy8gICAgIC8qIEZvcmNlIGwnYWZmaWNoYWdlIGRlcyBjYXJ0ZXMgKi9cbi8vICAgICAuZ3JpZC12aWV3IHtcbi8vICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIH1cbiAgICBcbi8vICAgICAuY2xpZW50LWNhcmQge1xuLy8gICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbi8vICAgICB9XG4vLyAgIH1cbiAgXG4vLyAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuLy8gICAgIC5tb2JpbGUtb25seSB7XG4vLyAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4vLyAgICAgfVxuLy8gICB9XG5cblxuICBcbm1hdC1wYWdpbmF0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubm8tcGhvbmUtdGV4dCB7XG4gICAgY29sb3I6ICNjM2MzYzM7IC8qIENvdWxldXIgZ3Jpc2UgZXhlbXBsZSAqL1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgLyogT3B0aW9ubmVsICovXG59XG4gIFxuLmluZm9fY2FkcmUgcCB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5wb3B1cC1oZWFkZXIgaDMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNhZHJlQ2hvaXgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2l6ZUJveCB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5zdGF0dXQge1xuICBcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbn1cblxuLnBhcmVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgZ2FwOiAyMHB4O1xufVxuICBcbi5jYWRyZV9jYWhpZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIGhlaWdodDogMjg3cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhZHJlX2NhaGllcjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIC8vIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5pbmZvcm1hdGlvbl9jYWRyZSB7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLnRpdGxlX2ZhY3R1cmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5udW1fZmFjdHVyZSxcbi5kb3VibGVfaW5mbyBzcGFuIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5sZWZ0X25hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50aXRsZV9mYWN0dXJlIGg1IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNjVweDtcbn1cblxuLm51bV9mYWN0dXJlIHtcbiAgICBtYXJnaW46IDIwcHggMCAxMHB4O1xufVxuXG4ubnVtX2ZhY3R1cmUgc3BhbiB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG59XG5cbi5kb3VibGVfaW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuXG4uZG91YmxlX2luZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG50aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxudGgsIHRkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDk0O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IDhweDtcbn1cblxudGgudGgsIHRkLnRkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDk0O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4gIFxudHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG59XG5cbnRyLnRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1cbiAgXG50ci50cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLnRiX3RvdGFsIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLyogU3R5bGUgZGUgbCdpbWFnZSBjaXJjdWxhaXJlICovXG4uaW1hZ2VfZXRpcXVldHRlIHtcbiAgICB3aWR0aDogMTQ3cHg7XG4gICAgaGVpZ2h0OiAxMDhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIGxlZnQ6IC03cHg7XG4gICAgbGVmdDogLTI0cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE5ZGVnKTtcbiAgICBib3R0b206IC0yM3B4O1xufVxuICBcbi5pbWFnZV9ldGlxdWV0dGUgaW1nIHtcbiAgICB3aWR0aDogOTYlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuXG4uZXRhdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEyZGVnKTtcbiAgICAvLyB0b3A6IDQ3cHg7XG4gICAgLy8gbGVmdDogNjBweDtcbiAgICB0b3A6IDQ1cHg7XG4gICAgbGVmdDogNThweDtcbn1cblxuLyogU3R5bGUgcGFyIGTDqWZhdXQgKi9cbi5ldGF0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgXG4gIC5ldGF0IHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgXG4gIC5ldGF0IHNwYW4ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIFxuICAudGlsdGVfZXRhdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogM3B4O1xuICAgIGNvbG9yOiAjZmZmZmZmODkgIWltcG9ydGFudDtcbiAgfVxuXG4gIFxuICAvKiBTdHlsZXMgc3DDqWNpZmlxdWVzIMOgIGNoYXF1ZSBzdGF0dXQgKi9cblxuICAuZXRhdC1ncmlzIHNwYW4ge1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG5cbiAgLmV0YXQtZ3JpcyBwIHtcbiAgICBjb2xvcjogIzAwMDAwMDdiICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5ldGF0LW9yYW5nZSBwLFxuICAuZXRhdC1vcmFuZ2Ugc3BhbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5ldGF0LWJsZXUgcCxcbiAgLmV0YXQtYmxldSBzcGFuIHtcbiAgICBjb2xvcjogI2ZmZjsgXG4gIH1cbiAgXG4gIC5ldGF0LXZlcnQgcCxcbiAgLmV0YXQtdmVydCBzcGFuIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcblxuICAucGFnaW5hdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICAuZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGJhY2tncm91bmQ6ICNmZmU1ZTU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi5hY2Nlc3Mtb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTA7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLmFjY2Vzcy1jYXJkIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBib3gtc2hhZG93OiAwIDEycHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaWNvbi1jb250YWluZXIge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxNTE1O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmljb24tY29udGFpbmVyIHN2ZyB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uYWNjZXNzLWNhcmQgaDEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMUYyOTM3O1xuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4uYWNjZXNzLWNhcmQgLmRlc2NyaXB0aW9uIHtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi5hY2Nlc3MtY2FyZCAuZGVzY3JpcHRpb24gcCB7XG4gICAgbWFyZ2luOiAwIDAgNnB4IDA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG5cbn1cblxuLmRhc2hib2FyZC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDZlZmQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uZGFzaGJvYXJkLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkY2MzYTtcbn1cblxuLmZhY3R1cmUtY291bnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1pbi13aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLyogUG91ciBhbGlnbmVyIGNvcnJlY3RlbWVudCBsZXMgw6lsw6ltZW50cyAqL1xuLmRyYWdnYWJsZS1pdGVtIHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cblxuLy8gaWNpXG4uZmlsdGVyLWRyb3Bkb3duLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZpbHRlci1kcm9wZG93biB7XG4gIG1pbi13aWR0aDogMjYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4uZmlsdGVyLXRvZ2dsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWYxZjQ7XG59XG5cbi5maWx0ZXItbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZmlsdGVyLWFycm93IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmZpbHRlci10eXBlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5maWx0ZXItb3B0aW9uIHtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzMzM7XG59XG4uZmlsdGVyLW9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYzZjY7XG59XG5cbi5maWx0ZXItb3B0aW9uLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5maWx0ZXItZGF0ZSBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogOHB4IDAgNHB4O1xuICBjb2xvcjogIzU1NTtcbn1cbi5maWx0ZXItZGF0ZSBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5maWx0ZXItYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmlsdGVyLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTVmYTA7XG59XG5cbi5maWx0ZXItdG9nZ2xlLWljb24geyBcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9mYWN0dXJlLXJlZWwvZmFjdHVyZS1yZWVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQSxFQUFBLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQSxFQUFBLHVCQUFBO0VBQ0Esa0JBQUEsRUFBQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQSxFQUFBLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBTUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSw2Q0FBQTtFQUVBLGFBQUE7QUFKRjs7QUFRRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVFJO0VBQ0UscUNBQUE7QUFOTjtBQVVJO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtBQVJOOztBQWFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBVko7O0FBYUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUFWSjs7QUFhQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQVZKOztBQWNBO0VBQ0ksZUFBQTtBQVhKOztBQWNBO0VBQ0ksZUFBQTtBQVhKOztBQWNBO0VBQ0ksMERBQUE7RUFDQSxZQUFBO0FBWEo7O0FBY0E7RUFDSSwwREFBQTtFQUNBLGFBQUE7QUFYSjs7QUFjQTtFQUNFLGlCQUFBO0VBQ0EsMERBQUE7QUFYRjs7QUFjQTtFQUNJLHlCQUFBO0FBWEo7O0FBY0E7RUFDSSx5QkFBQTtB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Q0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQTdLRjs7QUFnTEE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUE3S0Y7O0FBZ0xBO0VBQ0UseUJBQUE7QUE3S0Y7O0FBZ0xBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQTdLRjtBQURBLDQ5L0JBQTQ5L0IiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyX2xpc3RfYm91dGlxdWUge1xuICBzY3JvbGxiYXItd2lkdGg6IGF1dG87XG4gIG92ZXJmbG93OiBhdXRvOyBcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjODg4ICNmMWYxZjE7XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDsgXG59XG5cbi5jb250YWluZXJfbGlzdF9ib3V0aXF1ZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMnB4OyBcbiAgaGVpZ2h0OiAzcHg7XG59XG5cbi5jb250YWluZXJfbGlzdF9ib3V0aXF1ZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyAvKiBjb3VsZXVyIGR1IGZvbmQgZGUgbGEgc2Nyb2xsYmFyICovXG59XG5cbi5jb250YWluZXJfbGlzdF9ib3V0aXF1ZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiBibHVlOyAvKiBjb3VsZXVyIGR1IGN1cnNldXIgKi9cbiAgYm9yZGVyLXJhZGl1czogNHB4OyAvKiBhcnJvbmRpciBsZXMgYm9yZHMgZHUgY3Vyc2V1ciAqL1xufVxuXG4uY29udGFpbmVyX2xpc3RfYm91dGlxdWU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmVkOyAvKiBjb3VsZXVyIGR1IGN1cnNldXIgYXUgc3Vydm9sICovXG59XG5cbi5uYW1lX2JvdXRpcXVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMzBweCAwIDIwcHg7XG59XG5cbi8vIC5uYW1lX2JvdXRpcXVlIHAge1xuLy8gICBwYWRkaW5nOiA4cHggMTVweDtcbi8vIH1cblxuLm5hbWVfYm91dGlxdWVfYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RDQyMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmJhcnJlIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwM2Y7XG4gIC8vIG1hcmdpbjogMCAxcHggMTZweDtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxuLm5hbWVfYm91dGlxdWUge1xuICBwIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogNHB4IDE2cHg7XG4gICAgLy8gcGFkZGluZzogOHB4IDE2cHg7XG4gICAgbWFyZ2luOiA0cHggMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMDUpO1xuICAgIC8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIH1cblxuICAgICYubmFtZV9ib3V0aXF1ZV9hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RDQyMTsgLy8gQ291bGV1ciBkZSBmb25kIHF1YW5kIGFjdGlmXG4gICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50OyAvLyBGb3JjZSBsYSBjb3VsZXVyIGJsYW5jaGUgcXVhbmQgYWN0aWZcbiAgICB9XG4gIH1cbn1cblxuLnRpdGxlX3JldHVybiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbiAgXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDAgMCAwIDEwcHg7XG4gICAgXG59XG5cbnRyIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbnRyLnRyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4gIFxudGh7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ5NDtcbiAgICBwYWRkaW5nOiA4cHg7XG59XG4gIFxudGgudGgge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkOTQ7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxudGQge1xuICBwYWRkaW5nOiAxNXB4IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ5NDtcbn1cbiAgXG50aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cbiAgXG50cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG4gIFxudHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi5jb250YWluZXJUYWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi50YXNrcy1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbiAgXG4uYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkLXRhc2sge1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4gIFxuLmNvbnRlbnRJY29uIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4gIFxuICBcbi5jb250ZW50SWNvbiBpe1xuICAgIC8vIHBhZGRpbmc6IDAgMTVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuICBcbi5jb250ZW50SWNvbiBpOmhvdmVyIHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuICBcbi5iYXJlIHtcbiAgICB3aWR0aDogMnB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuICBcbi5pbnB1dFNlYXJjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5wdXRTZWFyY2ggaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW5wdXRTZWFyY2ggaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5cbi50aXRsZVRhYmxlUHJvZHVpdCB0aCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY29udGVudF9zb3J0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLmJ0bl9hZGRfbGlnbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmMmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YmZmO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idG5fcmVtb3ZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cblxuXG5cbi5jb250ZW50X2NhZHJlX2RvdWJsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLyogU3R5bGUgZGUgbCdpbWFnZSBjaXJjdWxhaXJlIGltZyBsaXN0ICovXG4uaW1nQ2xpZW50IHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiAgXG4uaW1nQ2xpZW50IGltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG4gIFxuLmltZ0NsaWVudDpob3ZlciBpbWcge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgLyogRWZmZXQgem9vbSBhdSBzdXJ2b2wgKi9cbn1cblxuLyogU3R5bGUgZGUgbCdpbWFnZSBjaXJjdWxhaXJlIGltZyBncmlkICovXG4uaW1nQ2xpZW50X2dyaWQge1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbiAgXG4uaW1nQ2xpZW50X2dyaWQgaW1nIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cbiAgXG4uaW1nQ2xpZW50X2dyaWQ6aG92ZXIgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qIEVmZmV0IHpvb20gYXUgc3Vydm9sICovXG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnRhc2tzLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYWRkLXRhc2sge1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5pbnB1dFNlYXJjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuICBcbi5pbnB1dFNlYXJjaCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbnB1dFNlYXJjaCBpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmNvbnRlbnRJY29uIGkge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuICBcbi5hY3Rpb25zIGl7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5iYXJyZSB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDNmO1xuICAgIC8vIG1hcmdpbjogOHB4IDE1cHg7XG59XG5cbi8vIHRhYmxlIFxuXG4udGl0bGVUYWJsZVByb2R1aXQgdGgge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRyIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbnRkIHtcbiAgcGFkZGluZzogMThweCA4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkOTQ7XG59XG4gIFxudGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ5NDtcbiAgICBwYWRkaW5nOiAxMnB4IDhweDtcbn1cbiAgXG50cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG4gIFxudHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi5mYWN0dXJlX3Ryb2lzIHRkIHtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogRHJvcGRvd24gc3R5bGVzICovXG4uY29udGVudEljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52aWV3LWRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgei1pbmRleDogMTAwO1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLm5vLWNsaWVudC1tZXNzYWdlIHsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xufVxuXG4vKiBHcmlkIHZpZXcgc3R5bGVzICovXG4vLyAuZ3JpZC12aWV3IHtcbi8vICAgICBkaXNwbGF5OiBncmlkO1xuLy8gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI4MHB4LCAxZnIpKTtcbi8vICAgICBnYXA6IDIwcHg7XG4vLyB9XG5cblxuLy8gLmNsaWVudC1jYXJkIHtcbi8vICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4vLyAgICAgcGFkZGluZzogMjBweDtcbi8vICAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbi8vICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4vLyAgICAgbWFyZ2luOiAyMHB4IDAgLTIwcHg7XG4vLyB9XG5cbi8vIC5jbGllbnQtY2FyZDpob3ZlciB7XG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuLy8gICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuLy8gfVxuXG4vLyAuY2xpZW50LWNhcmQgaDMge1xuLy8gICAgIGNvbG9yOiAjMmMzZTUwO1xuLy8gICAgIGZvbnQtc2l6ZTogMTFweDtcbi8vICAgICBtYXJnaW46IDA7XG4vLyAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyB9XG5cbi8vIC5uYW1lX2ljb24ge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4vLyAgICAgbWFyZ2luOiAwIDAgMTJweCAwO1xuLy8gICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuLy8gfVxuXG4vLyAubmFtZV9pY29uIGkge1xuLy8gICAgIGZvbnQtc2l6ZTogMThweDtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4vLyB9XG5cbi8vIC5jbGllbnQtY2FyZCBwIHtcbi8vICAgICBtYXJnaW46IDhweCAwO1xuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICBjb2xvcjogIzY2Njtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgZ2FwOiA4cHg7XG4vLyB9XG5cbi8vIC5jbGllbnQtY2FyZCBwIGkge1xuLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcbi8vICAgICBjb2xvcjogIzA2NzJFNDtcbi8vIH1cblxuLyogQW3Dg8KpbGlvcmF0aW9ucyBkcm9wZG93biAqL1xuLy8gLnZpZXctZHJvcGRvd24ge1xuLy8gICAgIC8qIC4uLiBzdHlsZXMgZXhpc3RhbnRzIC4uLiAqL1xuLy8gICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcbi8vICAgICBhbmltYXRpb246IHNjYWxlSW4gMC4xNXMgZWFzZS1vdXQ7XG4vLyB9XG5cbi8vIEBrZXlmcmFtZXMgc2NhbGVJbiB7XG4vLyAgICAgZnJvbSB7IHRyYW5zZm9ybTogc2NhbGUoMC45KTsgb3BhY2l0eTogMDsgfVxuLy8gICAgIHRvIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogMTsgfVxuLy8gfVxuXG4vLyAuZHJvcGRvd24taXRlbSB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcbi8vIH1cblxuLy8gLmRyb3Bkb3duLWl0ZW06OmFmdGVyIHtcbi8vICAgICBjb250ZW50OiAnw6LCnMKTJztcbi8vICAgICBvcGFjaXR5OiAwO1xuLy8gICAgIGNvbG9yOiAjMDY3MkU0O1xuLy8gfVxuXG4vLyAuZHJvcGRvd24taXRlbS5hY3RpdmU6OmFmdGVyIHtcbi8vICAgICBvcGFjaXR5OiAxO1xuLy8gfVxuXG4vKiBBam91dGUgZGFucyBDU1MgKi9cbi8vIC5zdGF0dXMtYmFkZ2Uge1xuLy8gICAgIHBhZGRpbmc6IDRweCA4cHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICB9XG4gIFxuLy8gICAuc3RhdHVzLWFjdGl2ZSB7XG4vLyAgICAgYmFja2dyb3VuZDogI2UzZmNlZjtcbi8vICAgICBjb2xvcjogIzAwNjY0NDtcbi8vICAgfVxuICBcbi8vICAgLnN0YXR1cy1pbmFjdGl2ZSB7XG4vLyAgICAgYmFja2dyb3VuZDogI2ZhZWFlNTtcbi8vICAgICBjb2xvcjogI2JmMzYwYztcbi8vICAgfVxuXG4vLyAgIC8qIFBvdXIgbGVzIG1vYmlsZXMgKi9cbi8vIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuLy8gICAgIC50YXNrcy1oZWFkZXIge1xuLy8gICAgIC8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgICAgICBnYXA6IDE1cHg7XG4vLyAgICAgfVxuXG4vLyAgICAgLy8gLmFkZC10YXNrIHtcbi8vICAgICAvLyB9XG4gICAgXG4vLyAgICAgLmlucHV0U2VhcmNoIHtcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIH1cbiAgICBcbi8vICAgICAvKiBGb3JjZSBsJ2FmZmljaGFnZSBkZXMgY2FydGVzICovXG4vLyAgICAgLmdyaWQtdmlldyB7XG4vLyAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICB9XG4gICAgXG4vLyAgICAgLmNsaWVudC1jYXJkIHtcbi8vICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4vLyAgICAgfVxuLy8gICB9XG4gIFxuLy8gICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcbi8vICAgICAubW9iaWxlLW9ubHkge1xuLy8gICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuLy8gICAgIH1cbi8vICAgfVxuXG5cbiAgXG5tYXQtcGFnaW5hdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm5vLXBob25lLXRleHQge1xuICAgIGNvbG9yOiAjYzNjM2MzOyAvKiBDb3VsZXVyIGdyaXNlIGV4ZW1wbGUgKi9cbiAgICBmb250LXN0eWxlOiBpdGFsaWM7IC8qIE9wdGlvbm5lbCAqL1xufVxuICBcbi5pbmZvX2NhZHJlIHAge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4ucG9wdXAtaGVhZGVyIGgzIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jYWRyZUNob2l4IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNpemVCb3gge1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG4uc3RhdHV0IHtcbiAgXG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5wYXJlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICAgIGdhcDogMjBweDtcbn1cbiAgXG4uY2FkcmVfY2FoaWVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICBoZWlnaHQ6IDI4N3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYWRyZV9jYWhpZXI6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAvLyB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaW5mb3JtYXRpb25fY2FkcmUge1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi50aXRsZV9mYWN0dXJlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4ubnVtX2ZhY3R1cmUsXG4uZG91YmxlX2luZm8gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ubGVmdF9uYW1lIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGl0bGVfZmFjdHVyZSBoNSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjY1cHg7XG59XG5cbi5udW1fZmFjdHVyZSB7XG4gICAgbWFyZ2luOiAyMHB4IDAgMTBweDtcbn1cblxuLm51bV9mYWN0dXJlIHNwYW4ge1xuICAgIGNvbG9yOiAjMDY3MkU0O1xufVxuXG4uZG91YmxlX2luZm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cblxuLmRvdWJsZV9pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIG9wYWNpdHk6IDAuNztcbn1cblxudGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbnRoLCB0ZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ5NDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC1zaXplOiA4cHg7XG59XG5cbnRoLnRoLCB0ZC50ZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ5NDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuICBcbnRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xufVxuXG50ci50cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG4gIFxudHIudHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi50Yl90b3RhbCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi8qIFN0eWxlIGRlIGwnaW1hZ2UgY2lyY3VsYWlyZSAqL1xuLmltYWdlX2V0aXF1ZXR0ZSB7XG4gICAgd2lkdGg6IDE0N3B4O1xuICAgIGhlaWdodDogMTA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyBsZWZ0OiAtN3B4O1xuICAgIGxlZnQ6IC0yNHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xOWRlZyk7XG4gICAgYm90dG9tOiAtMjNweDtcbn1cbiAgXG4uaW1hZ2VfZXRpcXVldHRlIGltZyB7XG4gICAgd2lkdGg6IDk2JTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cblxuLmV0YXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMmRlZyk7XG4gICAgLy8gdG9wOiA0N3B4O1xuICAgIC8vIGxlZnQ6IDYwcHg7XG4gICAgdG9wOiA0NXB4O1xuICAgIGxlZnQ6IDU4cHg7XG59XG5cbi8qIFN0eWxlIHBhciBkw4PCqWZhdXQgKi9cbi5ldGF0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgXG4gIC5ldGF0IHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgXG4gIC5ldGF0IHNwYW4ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIFxuICAudGlsdGVfZXRhdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogM3B4O1xuICAgIGNvbG9yOiAjZmZmZmZmODkgIWltcG9ydGFudDtcbiAgfVxuXG4gIFxuICAvKiBTdHlsZXMgc3DDg8KpY2lmaXF1ZXMgw4PCoCBjaGFxdWUgc3RhdHV0ICovXG5cbiAgLmV0YXQtZ3JpcyBzcGFuIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuXG4gIC5ldGF0LWdyaXMgcCB7XG4gICAgY29sb3I6ICMwMDAwMDA3YiAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuZXRhdC1vcmFuZ2UgcCxcbiAgLmV0YXQtb3JhbmdlIHNwYW4ge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAuZXRhdC1ibGV1IHAsXG4gIC5ldGF0LWJsZXUgc3BhbiB7XG4gICAgY29sb3I6ICNmZmY7IFxuICB9XG4gIFxuICAuZXRhdC12ZXJ0IHAsXG4gIC5ldGF0LXZlcnQgc3BhbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG5cbiAgLnBhZ2luYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbiAgLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xuICBiYWNrZ3JvdW5kOiAjZmZlNWU1O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4uYWNjZXNzLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbi5hY2Nlc3MtY2FyZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmljb24tY29udGFpbmVyIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTUxNTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5pY29uLWNvbnRhaW5lciBzdmcge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbn1cblxuLmFjY2Vzcy1jYXJkIGgxIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzFGMjkzNztcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLmFjY2Vzcy1jYXJkIC5kZXNjcmlwdGlvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uYWNjZXNzLWNhcmQgLmRlc2NyaXB0aW9uIHAge1xuICAgIG1hcmdpbjogMCAwIDZweCAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuXG59XG5cbi5kYXNoYm9hcmQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2ZWZkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmRhc2hib2FyZC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGNjM2E7XG59XG5cbi5mYWN0dXJlLWNvdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtaW4td2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi8qIFBvdXIgYWxpZ25lciBjb3JyZWN0ZW1lbnQgbGVzIMODwqlsw4PCqW1lbnRzICovXG4uZHJhZ2dhYmxlLWl0ZW0gcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuXG4vLyBpY2lcbi5maWx0ZXItZHJvcGRvd24td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZmlsdGVyLWRyb3Bkb3duIHtcbiAgbWluLXdpZHRoOiAyNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5maWx0ZXItdG9nZ2xlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjFmNDtcbn1cblxuLmZpbHRlci1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5maWx0ZXItYXJyb3cge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uZmlsdGVyLXR5cGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmZpbHRlci1vcHRpb24ge1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbn1cbi5maWx0ZXItb3B0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNjtcbn1cblxuLmZpbHRlci1vcHRpb24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZpbHRlci1kYXRlIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiA4cHggMCA0cHg7XG4gIGNvbG9yOiAjNTU1O1xufVxuLmZpbHRlci1kYXRlIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmZpbHRlci1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWx0ZXItYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1NWZhMDtcbn1cblxuLmZpbHRlci10b2dnbGUtaWNvbiB7IFxuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_facture-reel_facture-reel_component_ts.js.map