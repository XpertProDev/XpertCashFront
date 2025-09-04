"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_detail-boutique_detail-boutique_component_ts"],{

/***/ 30624:
/*!*************************************************************************!*\
  !*** ./src/app/admin-page/detail-boutique/detail-boutique.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailBoutiqueComponent: () => (/* binding */ DetailBoutiqueComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_boutique_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SERVICES/boutique-service */ 52719);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SERVICES/users.service */ 88026);











const _c0 = ["tableScrollContainer"];
const _c1 = ["searchInput"];
function DetailBoutiqueComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
function DetailBoutiqueComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.successMessage, " ");
  }
}
function DetailBoutiqueComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessageApi, " ");
  }
}
function DetailBoutiqueComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.copySuccessMessage, " ");
  }
}
function DetailBoutiqueComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.copyErrorMessage, " ");
  }
}
function DetailBoutiqueComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 94)(1, "div", 95)(2, "h4", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Informations");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Veuillez s\u00E9lectionner au moins ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "un produit \u00E0 copier.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 98)(9, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_6_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showCopyWarningModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function DetailBoutiqueComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 94)(1, "div", 95)(2, "h4", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Informations");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Veuillez s\u00E9lectionner au moins ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "un produit \u00E0 supprimer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 98)(9, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_7_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showDeleteWarningModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function DetailBoutiqueComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 100)(1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Creation en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function DetailBoutiqueComponent_span_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 106)(3, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function DetailBoutiqueComponent_span_25_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.boutique.actif ? "Actif" : "Inactif", " ");
  }
}
function DetailBoutiqueComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailBoutiqueComponent_span_25_ng_container_1_Template, 5, 0, "ng-container", 104)(2, DetailBoutiqueComponent_span_25_ng_template_2_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const statusText_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r1.boutique.actif ? "#008000" : "#ff0000");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isUpdating)("ngIfElse", statusText_r5);
  }
}
function DetailBoutiqueComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 108)(1, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function DetailBoutiqueComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 109)(1, "div", 110)(2, "h4", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 111)(7, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_38_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.confirmDeleteB());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "OUI");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_38_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.showConfirmationModalB = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "NON");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00CAtes-vous s\u00FBr de vouloir supprimer ", (ctx_r1.boutique == null ? null : ctx_r1.boutique.typeBoutique) === "ENTREPOT" ? "l'entrep\u00F4t" : "la boutique", " ?");
  }
}
function DetailBoutiqueComponent_i_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_i_45_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleEditing());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DetailBoutiqueComponent_i_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_i_46_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleEditing());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DetailBoutiqueComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "small", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Ce champ est obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function DetailBoutiqueComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 117)(3, "div", 118)(4, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_67_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.goToBoutique());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 120)(7, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_67_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onSubmitBoutique());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Confirmer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.isEditing ? "Annuler" : "Retour");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r1.boutiqueForm.valid ? "#0672E4" : "#0671e434")("color", ctx_r1.boutiqueForm.valid ? "#ffffff" : "#00000073")("cursor", ctx_r1.boutiqueForm.valid ? "pointer" : "no-drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.boutiqueForm.invalid || ctx_r1.isUpdating_boutique);
  }
}
function DetailBoutiqueComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.totalProductsCount, " ");
  }
}
function DetailBoutiqueComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 123);
  }
}
function DetailBoutiqueComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 124)(1, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_76_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.deleteSelectedProducts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function DetailBoutiqueComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 123);
  }
}
function DetailBoutiqueComponent_div_78_div_2_div_8_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 139);
  }
}
function DetailBoutiqueComponent_div_78_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_78_div_2_div_8_Template_div_click_0_listener() {
      const boutique_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.selectCopyBoutique(boutique_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DetailBoutiqueComponent_div_78_div_2_div_8_i_2_Template, 1, 0, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const boutique_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled-boutique", !boutique_r14.actif);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", boutique_r14.nomBoutique, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !boutique_r14.actif);
  }
}
function DetailBoutiqueComponent_div_78_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Aucune boutique trouv\u00E9e ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DetailBoutiqueComponent_div_78_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 129)(1, "div", 130)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Copier vers");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "i", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_78_div_2_Template_i_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeCopyModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 132)(6, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function DetailBoutiqueComponent_div_78_div_2_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.copySearchTerm, $event) || (ctx_r1.copySearchTerm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function DetailBoutiqueComponent_div_78_div_2_Template_input_input_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.filterCopyBoutiques());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, DetailBoutiqueComponent_div_78_div_2_div_8_Template, 3, 4, "div", 135)(9, DetailBoutiqueComponent_div_78_div_2_div_9_Template, 2, 0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.copySearchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.filteredCopyBoutiques);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.filteredCopyBoutiques.length === 0);
  }
}
function DetailBoutiqueComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 126)(1, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_78_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleCopyModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DetailBoutiqueComponent_div_78_div_2_Template, 10, 3, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.showCopyModal);
  }
}
function DetailBoutiqueComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 141)(1, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedProductIds.length, " ");
  }
}
function DetailBoutiqueComponent_span_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_span_83_Template_span_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r1.removeFilter(ctx_r1.selectedFilters[0]);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u2716");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedFilters[0].label, " ");
  }
}
function DetailBoutiqueComponent_i_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 145);
  }
}
function DetailBoutiqueComponent_i_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 146);
  }
}
function DetailBoutiqueComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_90_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 148)(2, "div", 149)(3, "h4", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Filtres");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div")(6, "button", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_90_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r1.resetFilters();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " R\u00E9initialiser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ul", 152)(9, "li", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_90_Template_li_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.addFilter({
        type: "nomCategorie",
        label: "Cat\u00E9gorie"
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Cat\u00E9gorie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_90_Template_li_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.addFilter({
        type: "nom",
        label: "Nom produit"
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Nom produit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", ctx_r1.isFilterSelected("nomCategorie") ? "#f0f0f0" : "transparent");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r1.isFilterSelected("nomCategorie"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background", ctx_r1.isFilterSelected("nom") ? "#f0f0f0" : "transparent");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r1.isFilterSelected("nom"));
  }
}
function DetailBoutiqueComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (ctx_r1.boutique == null ? null : ctx_r1.boutique.typeBoutique) === "ENTREPOT" ? "l'entrep\u00F4t" : "la boutique", " d\u00E9sactiv\u00E9e - Les produits ne sont pas visible ");
  }
}
function DetailBoutiqueComponent_tr_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 157)(2, "div", 158)(3, "div", 159)(4, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 160)(7, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Chargement des produits...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
}
function DetailBoutiqueComponent_tr_132_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r18.description, " ");
  }
}
function DetailBoutiqueComponent_tr_132_i_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 169);
  }
}
function DetailBoutiqueComponent_tr_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "label", 70)(3, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DetailBoutiqueComponent_tr_132_Template_input_change_3_listener($event) {
      const product_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]((ctx_r1.boutique == null ? null : ctx_r1.boutique.actif) ? ctx_r1.toggleProductSelection(product_r18.id, $event) : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 72)(5, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "svg", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "polyline", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 77)(10, "div", 77)(11, "div", 77)(12, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "div", 79)(15, "div", 80)(16, "div", 81)(17, "div", 82)(18, "div", 83)(19, "div", 84)(20, "div", 85)(21, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td")(23, "div", 162)(24, "img", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_tr_132_Template_img_click_24_listener() {
      const product_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]((ctx_r1.boutique == null ? null : ctx_r1.boutique.actif) ? ctx_r1.openImageModal(product_r18.photoUrl) : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "td", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "td", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, DetailBoutiqueComponent_tr_132_div_29_Template, 2, 1, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "td", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, DetailBoutiqueComponent_tr_132_i_36_Template, 1, 0, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r18 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r1.isProductSelected(product_r18.id))("disabled", !(ctx_r1.boutique == null ? null : ctx_r1.boutique.actif));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled-image", !(ctx_r1.boutique == null ? null : ctx_r1.boutique.actif));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", product_r18.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", product_r18.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(product_r18.nom || "Aucun nom"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r18.description ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](28, 15, product_r18.description, 0, 30) + (product_r18.description.length > 30 ? "..." : "") : "Aucune description", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", product_r18.description && product_r18.description.length > 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r1.highlightMatch(product_r18.nomCategorie || "sans cat\u00E9gorie"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](33, 19, product_r18.prixVente, "1.2-2"), " FCFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", product_r18.quantite <= product_r18.seuilAlert ? "red" : "inherit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r18.quantite, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", product_r18.quantite <= product_r18.seuilAlert);
  }
}
function DetailBoutiqueComponent_tr_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 157)(2, "div", 170)(3, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Chargement de plus de produits...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function DetailBoutiqueComponent_tr_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 157)(2, "p", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Tous les produits ont \u00E9t\u00E9 charg\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function DetailBoutiqueComponent_tr_135_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 157)(2, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Aucun produit dans ", (ctx_r1.boutique == null ? null : ctx_r1.boutique.typeBoutique) === "ENTREPOT" ? "l'entrep\u00F4t" : "la boutique", "");
  }
}
function DetailBoutiqueComponent_div_136_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_136_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeImageModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_136_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.selectedImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function DetailBoutiqueComponent_div_137_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "label", 70)(3, "input", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DetailBoutiqueComponent_div_137_tr_52_Template_input_change_3_listener($event) {
      const vendeur_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleSelectionCheckbox($event, vendeur_r22.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 72)(5, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "svg", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "polyline", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td")(9, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td")(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const vendeur_r22 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !(ctx_r1.boutique == null ? null : ctx_r1.boutique.actif))("checked", ctx_r1.selectedVendeurs.includes(vendeur_r22.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", vendeur_r22.nomComplet);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", vendeur_r22.photo, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vendeur_r22.nomComplet);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vendeur_r22.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](vendeur_r22.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDateOnly(vendeur_r22.assignedAt), " ");
  }
}
function DetailBoutiqueComponent_div_137_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 192)(2, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Aucun vendeur enregistr\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function DetailBoutiqueComponent_div_137_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47)(1, "div", 178)(2, "div", 49)(3, "div", 19)(4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Liste des vendeurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_137_Template_div_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.deleteSelectedVendeurs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 182)(13, "div", 130)(14, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "D\u00E9placer vers un autre groupe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 134)(20, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Groupe 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Groupe 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Groupe 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Aucun groupe trouv\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_137_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleUserList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 188)(31, "table")(32, "thead")(33, "tr", 69)(34, "th")(35, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "input", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span", 72)(38, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "svg", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "polyline", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "T\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Date d'assignation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, DetailBoutiqueComponent_div_137_tr_52_Template, 20, 8, "tr", 87)(53, DetailBoutiqueComponent_div_137_tr_53_Template, 6, 0, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", ctx_r1.showUserList ? "Fermer les utilisateurs" : "Ajouter un vendeur dans la boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.showUserList ? "Fermer les utilisateurs" : "Ajouter un vendeur", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.listeVendeurs);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.listeVendeurs.length === 0);
  }
}
function DetailBoutiqueComponent_div_138_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "label", 70)(3, "input", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DetailBoutiqueComponent_div_138_tr_36_Template_input_change_3_listener() {
      const user_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleUserSelection(user_r25.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 72)(5, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "svg", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "polyline", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td")(9, "div", 162)(10, "img", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_138_tr_36_Template_img_click_10_listener() {
      const user_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.openImageModal(user_r25.photoUrl));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td")(18, "span", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td")(21, "button", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_138_tr_36_Template_button_click_21_listener() {
      const user_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.associateUserToBoutique(user_r25.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Associer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r25 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r1.isUserSelected(user_r25.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", user_r25.nomComplet);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", user_r25.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r25.nomComplet);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r25.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](user_r25.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", user_r25.enabledLien ? "badge-success" : "badge-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", user_r25.enabledLien ? "Actif" : "Inactif", " ");
  }
}
function DetailBoutiqueComponent_div_138_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 157)(2, "div", 170)(3, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Chargement de plus de produits...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function DetailBoutiqueComponent_div_138_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 157)(2, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Aucun utilisateur disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function DetailBoutiqueComponent_div_138_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47)(1, "div", 178)(2, "div", 49)(3, "div", 19)(4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Liste des utilisateurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 194)(8, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " 23 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_138_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleUserList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 188)(13, "table")(14, "thead")(15, "tr", 69)(16, "th")(17, "label", 70)(18, "input", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DetailBoutiqueComponent_div_138_Template_input_change_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.toggleSelectAllUsers($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 72)(20, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "svg", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "polyline", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "T\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, DetailBoutiqueComponent_div_138_tr_36_Template, 23, 8, "tr", 87)(37, DetailBoutiqueComponent_div_138_tr_37_Template, 7, 0, "tr", 42)(38, DetailBoutiqueComponent_div_138_tr_38_Template, 6, 0, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", ctx_r1.showUserList ? "Fermer les utilisateurs" : "Ajouter un vendeur dans la boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.showUserList ? "Fermer les utilisateurs" : "Ajouter un vendeur", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.allUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isLoadingMore);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.allUsers.length === 0);
  }
}
function DetailBoutiqueComponent_div_139_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 199)(1, "div", 200)(2, "h4", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 202)(7, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_139_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.cancelAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_139_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.handleStatusChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Confirmer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.confirmationTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.confirmationMessage);
  }
}
function DetailBoutiqueComponent_div_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 100)(1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Connexion en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function DetailBoutiqueComponent_div_141_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Supprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DetailBoutiqueComponent_div_141_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Traitement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DetailBoutiqueComponent_div_141_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 199)(1, "div", 203)(2, "div", 204)(3, "h4", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Confirmation de suppression");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_141_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.cancelDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "svg", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "path", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 209)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 210)(12, "div", 211)(13, "button", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_141_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.cancelDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_div_141_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.confirmDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, DetailBoutiqueComponent_div_141_span_16_Template, 2, 0, "span", 42)(17, DetailBoutiqueComponent_div_141_span_17_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.deleteMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isDeleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.isDeleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isDeleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isDeleting);
  }
}
function DetailBoutiqueComponent_div_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 100)(1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Suppression en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
class DetailBoutiqueComponent {
  constructor(route, boutiqueService, router, fb, cd, usersService) {
    this.route = route;
    this.boutiqueService = boutiqueService;
    this.router = router;
    this.fb = fb;
    this.cd = cd;
    this.usersService = usersService;
    this.isModificationFormVisible = false;
    this.boutique = null;
    this.isLoading = false;
    this.errorMessage = null;
    this.successMessage = null;
    this.errorMessageApi = null;
    this.isEditing = false;
    this.showTransferModal = false;
    this.allBoutiques = [];
    this.filteredBoutiques = [];
    this.searchTerm = '';
    this.searchTerm1 = '';
    this.showCopyModal = false;
    this.copySearchTerm = '';
    this.filteredCopyBoutiques = [];
    this.selectedImageUrl = null;
    this.showImageModal = false;
    this.selectedProductIds = [];
    this.copyWarningMessage = null;
    this.deleteWarningMessage = null;
    this.showCopyWarningModal = false;
    this.showDeleteWarningModal = false;
    this.photo = '';
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.imgUrl;
    this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
    this.isUpdating = false;
    this.isUpdating_boutique = false;
    this.showConfirmationModal = false;
    this.confirmationTitle = '';
    this.confirmationMessage = '';
    this.pendingStatusChange = null;
    // productsInBoutique: any[] = [];
    this.productsInBoutique = [];
    this.isLoadingProducts = false;
    this.imgUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.imgUrl;
    this.isCopying = false;
    this.copySuccessMessage = null;
    this.copyErrorMessage = null;
    this.selectedCopyBoutique = null;
    this.showConfirmationModalB = false;
    this.isDeletingB = false;
    this.showDeleteModal = false;
    this.deleteMessage = '';
    this.isDeleting = false;
    this.listeVendeurs = [];
    this.imageActuelle = '';
    this.selectedFilters = [];
    this.showFilterDropdown = false;
    this.searchText = '';
    this.filteredProducts = [];
    this.showUserList = false;
    this.allUsers = [];
    this.selectedUserIds = [];
    this.currentPage = 0;
    this.pageSize = 20;
    this.totalPages = 0;
    this.isLoadingMore = false;
    this.allProductsLoaded = false;
    this.totalProductsCount = 0;
    this.selectedVendeurs = [];
  }
  ngOnInit() {
    this.initForm();
    this.loadBoutique();
    this.loadAllBoutiques();
    this.boutiqueForm.disable();
    this.loadAllVendeursBoutique();
    // Dans ngOnInit ou là où vous appelez loadProductsInBoutique pour la première fois
    if (this.boutique) {
      this.loadProductsInBoutique(this.boutique.id);
    }
  }
  initForm() {
    this.boutiqueForm = this.fb.group({
      nomBoutique: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      adresse: [''],
      email: [''],
      telephone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^\d{8,15}$/)]]
    });
  }
  loadBoutique() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.errorMessage = 'ID de boutique invalide';
      this.isLoading = false;
      return;
    }
    this.boutiqueId = +id;
    this.boutiqueService.getBoutiqueById(+id).subscribe({
      next: boutique => {
        this.boutique = boutique;
        this.boutiqueForm.patchValue({
          nomBoutique: boutique.nomBoutique,
          adresse: boutique.adresse,
          email: boutique.email,
          telephone: boutique.telephone
        });
        this.isLoading = false;
        this.loadProductsInBoutique(boutique.id);
        // this.loadAllVendeursBoutique();
        // Mise à jour du formulaire
        this.boutiqueForm.patchValue({
          nomBoutique: boutique.nomBoutique,
          adresse: boutique.adresse,
          email: boutique.email,
          telephone: boutique.telephone
        });
      },
      error: err => {
        this.errorMessage = 'Échec du chargement des données';
        this.isLoading = false;
      }
    });
  }
  getStatusText() {
    return this.boutique?.actif ? 'Actif' : 'Inactif';
  }
  getStatusColor() {
    return this.boutique?.actif ? '#008000' : '#ff0000';
  }
  // Méthodes pour gérer le popup de copie
  toggleCopyModal() {
    // Vérifier si des produits sont sélectionnés
    if (this.selectedProductIds.length === 0) {
      this.showCopyWarningModal = true;
      this.copyWarningMessage = "Veuillez sélectionner au moins un produit à copier.";
      // Effacer le message après 3 secondes
      setTimeout(() => this.copyWarningMessage = null, 3000);
      return;
    }
    // Fermer le modal de transfert si ouvert
    if (this.showTransferModal) {
      this.showTransferModal = false;
    }
    this.showCopyModal = !this.showCopyModal;
    if (this.showCopyModal) {
      this.loadAllBoutiques();
      this.copySearchTerm = '';
      this.filterCopyBoutiques();
    }
  }
  // Sélectionner une boutique pour la copie
  // selectCopyBoutique(boutique: Boutique): void {
  //     console.log('Boutique sélectionnée pour la copie :', boutique);
  //     this.closeCopyModal();
  //     // Afficher un message de succès
  //     this.successMessage = `Produits copiés vers ${boutique.nomBoutique} avec succès!`;
  //     setTimeout(() => this.successMessage = null, 5000);
  // }
  selectCopyBoutique(boutique) {
    // if (!boutique.actif) {
    //     const confirmCopy = confirm('Cette boutique est désactivée. Êtes-vous sûr de vouloir copier les produits vers cette boutique ?');
    //     if (!confirmCopy) return;
    // }
    this.selectedCopyBoutique = boutique;
    this.confirmCopyProducts();
  }
  confirmCopyProducts() {
    var _this = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.boutique || !_this.selectedCopyBoutique) return;
      _this.isCopying = true;
      _this.copyErrorMessage = null;
      _this.copySuccessMessage = null;
      try {
        const detailsCopie = {
          boutiqueSourceId: _this.boutique.id,
          boutiqueDestinationId: _this.selectedCopyBoutique.id,
          toutCopier: _this.selectedProductIds.length === 0,
          produitIds: _this.selectedProductIds.length > 0 ? _this.selectedProductIds : undefined
        };
        const response = yield _this.boutiqueService.copierProduits(detailsCopie).toPromise();
        // Gestion de la réponse
        if (response && response.success !== undefined) {
          if (response.success) {
            _this.copySuccessMessage = response.message; // Message de succès
          } else {
            // Assigner le message d'erreur lorsque success est false
            _this.copyErrorMessage = response.message; // Correction ici
          }
        } else if (response && response.message) {
          // Cas de fallback - supposons que c'est un succès
          _this.copySuccessMessage = response.message;
        } else {
          _this.copyErrorMessage = 'Réponse inattendue du serveur';
        }
        _this.selectedProductIds = [];
      } catch (error) {
        console.error('Erreur copie', error);
        // Gestion spécifique des différents formats d'erreur
        if (error.error && error.error.message) {
          _this.copyErrorMessage = error.error.message;
        } else if (error.message) {
          _this.copyErrorMessage = error.message;
        } else if (typeof error === 'string') {
          _this.copyErrorMessage = error;
        } else {
          _this.copyErrorMessage = 'Erreur lors de la copie des produits';
        }
      } finally {
        _this.isCopying = false;
        _this.closeCopyModal();
        // Effacer les messages après 8 secondes
        setTimeout(() => {
          _this.copySuccessMessage = null;
          _this.copyErrorMessage = null;
        }, 8000);
      }
    })();
  }
  // Filtrer les boutiques pour la copie
  filterCopyBoutiques() {
    if (!this.copySearchTerm) {
      this.filteredCopyBoutiques = [...this.allBoutiques];
      return;
    }
    const term = this.copySearchTerm.toLowerCase();
    this.filteredCopyBoutiques = this.allBoutiques.filter(b => b.nomBoutique.toLowerCase().includes(term));
  }
  closeCopyModal() {
    this.showCopyModal = false;
    this.copySearchTerm = '';
  }
  toggleEditing() {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.boutiqueForm.enable();
    } else {
      this.boutiqueForm.disable();
      // Réinitialiser le formulaire avec les valeurs originales
      if (this.boutique) {
        this.boutiqueForm.patchValue({
          nomBoutique: this.boutique.nomBoutique,
          adresse: this.boutique.adresse,
          email: this.boutique.email,
          telephone: this.boutique.telephone
        });
      }
    }
  }
  goToBoutique() {
    if (this.isEditing) {
      this.cancelEditing();
    } else {
      this.router.navigate(['/boutique']);
    }
  }
  cancelEditing() {
    this.isEditing = false;
    this.boutiqueForm.disable();
    this.loadBoutique();
  }
  getLoadingMessage() {
    if (this.isLoading) return 'Chargement en cours...';
    if (this.isUpdating) return 'Mise à jour du statut...';
    if (this.isUpdating_boutique) return 'Mise à jour des informations...';
    return 'Traitement en cours...';
  }
  // Modifiez la méthode existante
  toggleBoutiqueStatus(event) {
    event.preventDefault();
    this.checkboxRef = event.target;
    const newStatus = this.checkboxRef.checked;
    this.pendingStatusChange = newStatus;
    this.confirmationTitle = newStatus ? 'Activation de la boutique' : 'Désactivation de la boutique';
    this.confirmationMessage = newStatus ? 'Êtes-vous sûr de vouloir activer cette boutique ? Les utilisateurs pourront y accéder.' : 'Êtes-vous sûr de vouloir désactiver cette boutique ? L\'accès sera bloqué.';
    this.showConfirmationModal = true;
  }
  // Ajoutez ces nouvelles méthodes
  cancelAction() {
    this.showConfirmationModal = false;
    if (this.checkboxRef) {
      this.checkboxRef.checked = !this.checkboxRef.checked;
    }
    this.pendingStatusChange = null;
  }
  handleStatusChange() {
    if (!this.boutique || this.pendingStatusChange === null) return;
    this.isUpdating = true;
    this.showConfirmationModal = false;
    // Démarrer un timer pour le délai minimum de 3 secondes
    const minDelay = 3000;
    const startTime = Date.now();
    const operation$ = this.pendingStatusChange ? this.boutiqueService.activerBoutique(this.boutique.id) : this.boutiqueService.desactiverBoutique(this.boutique.id);
    operation$.subscribe({
      next: () => {
        const elapsed = Date.now() - startTime;
        const remainingDelay = Math.max(minDelay - elapsed, 0);
        // Attendre le temps restant pour compléter les 3 secondes
        setTimeout(() => {
          this.loadBoutique();
          this.isUpdating = false;
        }, remainingDelay);
      },
      error: err => {
        const elapsed = Date.now() - startTime;
        const remainingDelay = Math.max(minDelay - elapsed, 0);
        setTimeout(() => {
          console.error(err);
          this.isUpdating = false;
          if (this.checkboxRef) {
            this.checkboxRef.checked = !this.pendingStatusChange;
          }
          this.showErrorMessage();
        }, remainingDelay);
      }
    });
  }
  showSuccessMessage(action) {
    // Implémenter une notification ou message temporaire
    alert(`Boutique ${action} avec succès !`);
  }
  showErrorMessage() {
    alert('Échec de la mise à jour du statut');
  }
  onSubmitBoutique() {
    var _this2 = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.boutiqueForm.invalid || !_this2.boutique) return;
      _this2.isLoading = true;
      _this2.errorMessage = null;
      _this2.successMessage = null;
      try {
        // Délai minimum de 2 secondes pour le loading
        yield new Promise(resolve => setTimeout(resolve, 2000));
        // Appel au service
        const response = yield _this2.boutiqueService.updateBoutique(_this2.boutique.id, _this2.boutiqueForm.value).toPromise();
        // Mettre à jour la boutique locale
        if (_this2.boutique) {
          _this2.boutique = {
            ..._this2.boutique,
            ..._this2.boutiqueForm.value
          };
        }
        _this2.successMessage = 'Boutique mise à jour avec succès !';
        // Désactiver le mode édition après succès
        _this2.toggleEditing();
        // Effacer le message après 5 secondes
        setTimeout(() => _this2.successMessage = null, 5000);
      } catch (err) {
        console.error('Update error:', err);
        _this2.errorMessage = err.error?.message || 'Erreur lors de la mise à jour';
      } finally {
        _this2.isLoading = false;
      }
    })();
  }
  toggleModificationForm() {
    this.isModificationFormVisible = !this.isModificationFormVisible;
    this.cd.detectChanges(); // Force la mise à jour du DOM
  }
  navigateBack() {
    this.router.navigate(['/boutique']);
  }
  toggleTransferModal() {
    // Fermer le modal de copie si ouvert
    if (this.showCopyModal) {
      this.showCopyModal = false;
    }
    this.showTransferModal = !this.showTransferModal;
    if (this.showTransferModal) {
      this.loadAllBoutiques();
      this.searchTerm = '';
      this.filterBoutiques();
    }
  }
  toggleCopierModal() {
    this.showTransferModal = !this.showTransferModal;
    if (this.showTransferModal) {
      this.loadAllBoutiques();
    }
  }
  closeTransferModal() {
    this.showTransferModal = false;
    this.searchTerm = '';
  }
  // Ajoute ça dans DetailBoutiqueComponent (private helper)
  // private normalizeBoutique(b: any): Boutique {
  //   return {
  //     id: b.id,
  //     nomBoutique: b.nomBoutique ?? '',
  //     telephone: b.telephone ?? '',
  //     email: b.email ?? '',
  //     adresse: b.adresse ?? '',
  //     caisseId: b.caisseId ?? null,
  //     // propriétés manquantes : on fournit des valeurs par défaut
  //     actif: typeof b.actif === 'boolean' ? b.actif : false,
  //     type: b.type ?? 'BOUTIQUE',
  //     typeBoutique: b.typeBoutique ?? 'BOUTIQUE',
  //     // si ton interface Boutique contient d'autres champs, les ajouter ici aussi
  //   } as Boutique;
  // }
  // Charger toutes les boutiques (sauf la boutique actuelle)
  // loadAllBoutiques(): void {
  //   this.usersService.getUserInfo().pipe(take(1)).subscribe({
  //     next: (user) => {
  //       const mapAndFilter = (list: any[]) => {
  //         const arr = (list || []).map(b => this.normalizeBoutique(b));
  //         // Exclure la boutique courante si nécessaire
  //         this.allBoutiques = arr.filter(b => b.id !== this.boutique?.id);
  //         this.filteredCopyBoutiques = [...this.allBoutiques];
  //         this.filteredBoutiques = [...this.allBoutiques];
  //       };
  //       if (user && user.roleType === 'VENDEUR') {
  //         // vendeur : ne charger que ses boutiques (depuis user.boutiques)
  //         mapAndFilter(user.boutiques || []);
  //       } else {
  //         // admin/manager : charger toutes les boutiques de l'entreprise
  //         this.boutiqueService.getBoutiquesByEntreprise().subscribe({
  //           next: (boutiques) => mapAndFilter(boutiques),
  //           error: (err) => {
  //             console.error('Erreur lors du chargement des boutiques', err);
  //             this.allBoutiques = [];
  //             this.filteredCopyBoutiques = [];
  //             this.filteredBoutiques = [];
  //           }
  //         });
  //       }
  //     },
  //     error: (err) => {
  //       console.error('Erreur récupération user', err);
  //       // fallback : charger toutes les boutiques
  //       this.boutiqueService.getBoutiquesByEntreprise().subscribe({
  //         next: (boutiques) => {
  //           this.allBoutiques = (boutiques || []).map(b => this.normalizeBoutique(b));
  //           this.filteredCopyBoutiques = [...this.allBoutiques];
  //           this.filteredBoutiques = [...this.allBoutiques];
  //         },
  //         error: () => {
  //           this.allBoutiques = [];
  //           this.filteredCopyBoutiques = [];
  //           this.filteredBoutiques = [];
  //         }
  //       });
  //     }
  //   });
  // }
  loadAllBoutiques() {
    this.boutiqueService.getBoutiquesByEntreprise().subscribe({
      next: boutiques => {
        this.allBoutiques = boutiques.filter(b => b.id !== this.boutique?.id);
        // Initialiser les deux listes filtrées
        this.filteredCopyBoutiques = [...this.allBoutiques];
        this.filteredBoutiques = [...this.allBoutiques];
      },
      error: err => {
        console.error('Erreur lors du chargement des boutiques', err);
      }
    });
  }
  filterBoutiques() {
    if (!this.searchTerm) {
      this.filteredBoutiques = [...this.allBoutiques];
      return;
    }
    const term = this.searchTerm.toLowerCase();
    this.filteredBoutiques = this.allBoutiques.filter(b => b.nomBoutique.toLowerCase().includes(term));
  }
  // Sélectionner une boutique pour le transfert
  selectBoutique(boutique) {
    console.log('Boutique sélectionnée pour le transfert :', boutique);
    // Ici vous pouvez implémenter la logique de transfert
    // Fermer le modal après sélection
    this.closeTransferModal();
  }
  // loadProductsInBoutique(boutiqueId: number): void {
  //   this.isLoadingProducts = true;
  //   this.boutiqueService.getProductsByBoutiqueId(boutiqueId).subscribe({
  //     next: (produits) => {
  //       this.productsInBoutique = produits.map(produit => ({
  //         ...produit,
  //         photoUrl: produit.photo ? `${this.imgUrl}${produit.photo}` : this.generateInitialImage(produit.nom.charAt(0))
  //       }));
  //       this.isLoadingProducts = false;
  //     },
  //     error: (err) => {
  //       console.error('Erreur chargement produits', err);
  //       this.isLoadingProducts = false;
  //     }
  //   });
  // }
  loadProductsInBoutique(boutiqueId, loadMore = false) {
    if (loadMore) {
      this.isLoadingMore = true;
    } else {
      this.isLoadingProducts = true;
      this.currentPage = 0;
      this.allProductsLoaded = false;
    }
    this.boutiqueService.getProduitsBoutiquePaginated(boutiqueId, this.currentPage, this.pageSize).subscribe({
      next: response => {
        const newProducts = response.content.map(produit => ({
          ...produit,
          photoUrl: produit.photo ? `${this.imgUrl}${produit.photo}` : this.generateInitialImage(produit.nom.charAt(0)),
          nomCategorie: produit.categorie?.nom || '',
          nomUnite: produit.uniteDeMesure?.nom || ''
        }));
        if (loadMore) {
          this.productsInBoutique = [...this.productsInBoutique, ...newProducts];
        } else {
          this.productsInBoutique = newProducts;
          // Mettre à jour le compteur total avec la valeur de l'API
          this.totalProductsCount = response.totalElements;
        }
        this.filteredProducts = [...this.productsInBoutique];
        this.totalPages = response.totalPages;
        this.isLoadingProducts = false;
        this.isLoadingMore = false;
        this.allProductsLoaded = this.currentPage >= response.totalPages - 1;
      },
      error: err => {
        console.error('Erreur chargement produits', err);
        this.isLoadingProducts = false;
        this.isLoadingMore = false;
      }
    });
  }
  loadMoreProducts() {
    if (this.isLoadingMore || this.allProductsLoaded || !this.boutique) return;
    this.isLoadingMore = true;
    this.currentPage++;
    this.boutiqueService.getProduitsBoutiquePaginated(this.boutique.id, this.currentPage, this.pageSize).subscribe({
      next: response => {
        const newProducts = response.content.map(produit => ({
          ...produit,
          photoUrl: produit.photo ? `${this.imgUrl}${produit.photo}` : this.generateInitialImage(produit.nom.charAt(0)),
          nomCategorie: produit.categorie?.nom || '',
          nomUnite: produit.uniteDeMesure?.nom || ''
        }));
        this.productsInBoutique = [...this.productsInBoutique, ...newProducts];
        this.filteredProducts = [...this.productsInBoutique];
        this.totalPages = response.totalPages;
        // Délai de 3 secondes avant de masquer le loading
        setTimeout(() => {
          this.isLoadingMore = false;
        }, 3000);
        this.allProductsLoaded = this.currentPage >= response.totalPages - 1;
      },
      error: err => {
        console.error('Erreur chargement produits supplémentaires', err);
        // Délai de 3 secondes même en cas d'erreur
        setTimeout(() => {
          this.isLoadingMore = false;
        }, 3000);
        this.currentPage--; // Revenir à la page précédente en cas d'erreur
      }
    });
  }
  onTableScroll(event) {
    if (this.allProductsLoaded || this.isLoadingMore || !this.boutique) return;
    const threshold = 100;
    const container = event.target;
    const position = container.scrollTop + container.offsetHeight;
    const height = container.scrollHeight;
    if (position > height - threshold) {
      this.loadMoreProducts();
    }
  }
  highlightMatch(text) {
    if (!this.searchText) return text;
    const regex = new RegExp(`(${this.searchText})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }
  handleImageError(event, product) {
    const img = event.target;
    img.src = this.generateInitialImage(product.nom.charAt(0));
    img.onerror = null; // Empêcher les boucles d'erreur
  }
  // Méthode pour générer une image avec initiale
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
  // Implémentez les méthodes manquantes
  toggleSelectAll(event) {
    if (!this.boutique?.actif) return;
    const checkbox = event.target;
    if (checkbox.checked) {
      this.selectedProductIds = this.productsInBoutique.map(p => p.id);
    } else {
      this.selectedProductIds = [];
    }
  }
  isProductSelected(id) {
    return this.selectedProductIds.includes(id);
  }
  openImageModal(imageUrl) {
    if (!this.boutique?.actif) return;
    if (imageUrl) {
      this.selectedImageUrl = imageUrl;
      this.showImageModal = true;
    } else {
      // Gérer le cas où l'URL est undefined
      console.warn("Aucune URL d'image fournie");
    }
  }
  closeImageModal() {
    this.showImageModal = false;
    this.selectedImageUrl = null;
  }
  // Dans la classe DetailBoutiqueComponent
  toggleProductSelection(productId, event) {
    if (!this.boutique?.actif) return;
    event.stopPropagation();
    const index = this.selectedProductIds.indexOf(productId);
    if (index === -1) {
      this.selectedProductIds.push(productId);
    } else {
      this.selectedProductIds.splice(index, 1);
    }
  }
  loadAllVendeursBoutique() {
    if (!this.boutiqueId) {
      this.errorMessage = "Identifiant boutique manquant";
      console.log('Erreur : identifiant boutique manquant');
      return;
    }
    this.boutiqueService.getVendeursDeBoutique(this.boutiqueId).subscribe({
      next: response => {
        // Loguer la réponse brute pour vérifier son format
        console.log('Réponse brute de l\'API :', response);
        const vendeurs = response; // Si la réponse contient déjà un tableau de vendeurs
        console.log(`Liste des vendeurs récupérée (${vendeurs.length}) :`, vendeurs);
        const timestamp = new Date().getTime();
        // Map des vendeurs pour ajouter l'URL complète de la photo et la date d'affectation
        this.listeVendeurs = vendeurs.map(vendeur => {
          const fullImageUrl = vendeur.photo && vendeur.photo !== 'null' && vendeur.photo !== 'undefined' ? `${this.apiUrl}${vendeur.photo}?t=${timestamp}` : 'assets/img/profil.png'; // Photo par défaut si pas d'image
          // Formatage de la date d'affectation si nécessaire (par exemple : "YYYY-MM-DD HH:mm")
          const assignedAtFormatted = new Date(vendeur.assignedAt).toLocaleString();
          return {
            ...vendeur,
            photo: fullImageUrl,
            assignedAt: assignedAtFormatted // Ajout de la date formatée
          };
        });
        // Réinitialiser le message d'erreur
        this.errorMessage = '';
      },
      error: err => {
        console.error('Erreur lors du chargement des vendeurs', err);
        this.listeVendeurs = [];
        this.errorMessage = "Erreur lors du chargement des vendeurs.";
      }
    });
  }
  ouvrirImage(photoUrl) {
    this.imageActuelle = photoUrl || 'assets/defaultProfile/profil.png';
    this.showImageModal = true;
  }
  fermerImage() {
    this.showImageModal = false;
  }
  ajouterVendeur() {
    // Rediriger vers une page d'ajout ou ouvrir un modal
    console.log('Ajouter un vendeur cliqué');
  }
  clearSearch() {}
  deleteSelectedProducts() {
    if (this.selectedProductIds.length === 0) {
      this.deleteWarningMessage = "Veuillez sélectionner au moins un produit à supprimer.";
      this.showDeleteWarningModal = true;
      return;
    }
    this.deleteMessage = `Êtes-vous sûr de vouloir supprimer les ${this.selectedProductIds.length} produit(s) sélectionné(s) ?`;
    this.showDeleteModal = true;
  }
  // Confirmation de suppression
  confirmDelete() {
    var _this3 = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.showDeleteModal = false;
      _this3.isDeleting = true;
      const corbeilleIds = [];
      const errors = [];
      for (const id of _this3.selectedProductIds) {
        try {
          const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.lastValueFrom)(_this3.boutiqueService.mettreEnCorbeille(id));
          if (response.status === 'success') {
            corbeilleIds.push(id);
          } else {
            errors.push(`Réponse inattendue: ${response.message}`);
          }
        } catch (error) {
          errors.push(error.message || 'Erreur inconnue');
        }
      }
      _this3.isDeleting = false;
      if (corbeilleIds.length > 0) {
        _this3.successMessage = `${corbeilleIds.length} produit(s) mis en corbeille avec succès.`;
        // ✅ Mise à jour locale : on filtre les produits supprimés
        _this3.productsInBoutique = _this3.productsInBoutique.filter(p => !corbeilleIds.includes(p.id));
        _this3.filteredProducts = _this3.filteredProducts.filter(p => !corbeilleIds.includes(p.id));
        _this3.selectedProductIds = [];
      }
      if (errors.length > 0) {
        _this3.errorMessage = `${errors.join(', ')}`;
      }
      setTimeout(() => {
        _this3.successMessage = null;
        _this3.errorMessage = null;
      }, 5000);
    })();
  }
  cancelDelete() {
    this.showDeleteModal = false;
  }
  // Ajouter ces méthodes dans la classe
  toggleFilterDropdown() {
    this.showFilterDropdown = !this.showFilterDropdown;
  }
  applyFilters() {
    let filtered = [...this.productsInBoutique]; // Utilisez la source originale
    const searchLower = this.searchText.toLowerCase().trim();
    if (this.searchText) {
      if (this.selectedFilters.length > 0) {
        filtered = filtered.filter(product => {
          return this.selectedFilters.some(filter => {
            const key = filter.type;
            const value = product[key]?.toString().toLowerCase() || '';
            return value.includes(searchLower);
          });
        });
      } else {
        // Recherche dans toutes les propriétés
        filtered = filtered.filter(product => Object.values(product).some(val => val?.toString().toLowerCase().includes(searchLower)));
      }
    }
    this.filteredProducts = filtered;
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
      return `par ${this.selectedFilters[0].label.toLowerCase()}...`;
    }
    return "Rechercher...";
  }
  resetFilters() {
    this.selectedFilters = [];
    this.searchText = '';
    this.filteredProducts = [...this.productsInBoutique]; // Réinitialisez à la liste complète
    this.showFilterDropdown = false;
  }
  deleteBoutique() {
    if (!this.boutique) {
      console.error("La boutique n'est pas disponible.");
      return;
    }
    this.showConfirmationModalB = true;
  }
  confirmDeleteB() {
    var _this4 = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.showConfirmationModalB = false;
      if (!_this4.boutique) return;
      _this4.showConfirmationModal = false;
      _this4.isDeletingB = true;
      _this4.errorMessage = null;
      _this4.successMessage = null;
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.lastValueFrom)(_this4.boutiqueService.deleteBoutique(_this4.boutique.id));
        _this4.successMessage = 'Boutique supprimée avec succès.';
        _this4.router.navigate(['/boutique']);
      } catch (err) {
        let message = err?.error?.error || 'Erreur lors de la suppression.';
        const prefix = "Une erreur est survenue : ";
        if (message.startsWith(prefix)) {
          message = message.substring(prefix.length);
        }
        _this4.errorMessage = message;
      } finally {
        _this4.isDeletingB = false;
        setTimeout(() => {
          _this4.errorMessage = null;
          _this4.successMessage = null;
        }, 5000);
      }
    })();
  }
  toggleUserList() {
    this.showUserList = !this.showUserList;
    if (this.showUserList) {
      this.loadAllUsersOfEntreprise();
    }
  }
  loadAllUsersOfEntreprise() {
    this.usersService.getUserInfo().subscribe({
      next: userData => {
        if (userData && userData.id) {
          const entrepriseId = userData.id;
          const token = this.usersService.getToken();
          const connectedUserId = token ? this.usersService.extractUserIdFromToken(token) : null;
          this.usersService.getAllUsersOfEntreprise(entrepriseId).subscribe({
            next: data => {
              this.allUsers = data.filter(user => user.id !== connectedUserId).map(user => ({
                ...user,
                photoUrl: user.photo ? `${this.apiUrl}${user.photo}` : 'assets/img/profil.png'
              }));
            },
            error: err => {
              console.error('Erreur lors du chargement des utilisateurs', err);
            }
          });
        }
      },
      error: err => {
        console.error("Erreur lors de la récupération des informations utilisateur :", err);
      }
    });
  }
  // Méthodes pour gérer la sélection des utilisateurs
  toggleSelectAllUsers(event) {
    const checkbox = event.target;
    if (checkbox.checked) {
      this.selectedUserIds = this.allUsers.map(u => u.id).filter(id => id !== undefined);
    } else {
      this.selectedUserIds = [];
    }
  }
  isUserSelected(id) {
    return id !== undefined && this.selectedUserIds.includes(id);
  }
  toggleUserSelection(id) {
    if (id === undefined) return;
    const index = this.selectedUserIds.indexOf(id);
    if (index === -1) {
      this.selectedUserIds.push(id);
    } else {
      this.selectedUserIds.splice(index, 1);
    }
  }
  // Méthode pour associer un utilisateur à la boutique
  associateUserToBoutique(userId) {
    if (!this.boutiqueId) {
      console.error("Aucune boutique sélectionnée.");
      return;
    }
    if (userId === undefined || userId === null) {
      console.error("Aucun utilisateur sélectionné.");
      return;
    }
    // Préparer l'objet de la requête
    const request = {
      userId: userId,
      boutiqueIds: [this.boutiqueId]
    };
    this.boutiqueService.assignerVendeur(request).subscribe({
      next: response => {
        // Vérifier la réponse et afficher un message de succès
        if (response.status === 'success') {
          this.successMessage = 'Utilisateur associé à la boutique avec succès!';
        } else {
          this.successMessage = 'Aucune boutique n\'a été affectée.';
        }
        // Recharger la liste des vendeurs de la boutique si nécessaire
        // this.loadAllVendeursBoutique();
        // Effacer le message après 3 secondes
        setTimeout(() => this.successMessage = null, 3000);
        this.loadAllVendeursBoutique();
      },
      error: err => {
        // Gérer les erreurs de l'API
        this.errorMessage = "Erreur lors de l'association : " + (err.error?.message || err.message);
        setTimeout(() => this.errorMessage = null, 5000);
      }
    });
  }
  toggleSelectionCheckbox(event, id) {
    if (id === undefined) {
      console.warn("ID vendeur manquant.");
      return;
    }
    const checked = event.target.checked;
    if (checked) {
      this.selectedVendeurs.push(id);
    } else {
      this.selectedVendeurs = this.selectedVendeurs.filter(v => v !== id);
    }
    console.log('Vendeurs sélectionnés:', this.selectedVendeurs);
  }
  deleteSelectedVendeurs() {
    if (this.selectedVendeurs.length === 0) {
      console.warn("Aucun vendeur sélectionné.");
      return;
    }
    this.selectedVendeurs.forEach(userId => {
      this.dissociateUserFromBoutique(userId);
    });
    this.selectedVendeurs = []; // Réinitialise après suppression
  }
  // Methode pour retirer vendeur
  dissociateUserFromBoutique(userId) {
    if (!this.boutiqueId) {
      console.error("Aucune boutique sélectionnée.");
      return;
    }
    if (userId === undefined || userId === null) {
      console.error("Aucun utilisateur sélectionné.");
      return;
    }
    // Préparer l'objet de la requête
    const request = {
      userId: userId,
      boutiqueIds: [this.boutiqueId]
    };
    this.boutiqueService.retirerVendeur(request).subscribe({
      next: response => {
        // Vérifier la réponse et afficher un message de succès
        if (response.status === 'success') {
          this.successMessage = 'Utilisateur retiré de la boutique!';
        } else {
          this.successMessage = 'Aucune Utilisateur n\'a été retiré.';
        }
        // Recharger la liste des vendeurs de la boutique si nécessaire
        // this.loadAllVendeursBoutique();
        // Effacer le message après 3 secondes
        setTimeout(() => this.successMessage = null, 3000);
        this.loadAllVendeursBoutique();
      },
      error: err => {
        // Gérer les erreurs de l'API
        this.errorMessage = "Erreur lors de retrait : " + (err.error?.message || err.message);
        setTimeout(() => this.errorMessage = null, 5000);
      }
    });
  }
  formatDateOnly(dateString) {
    if (!dateString) return '';
    // Supposons format : "28/07/2025 10:48:52"
    const parts = dateString.split(' ')[0].split('/'); // ["28", "07", "2025"]
    if (parts.length !== 3) return '';
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // JS month index commence à 0
    const year = parseInt(parts[2], 10);
    const date = new Date(year, month, day);
    if (isNaN(date.getTime())) return '';
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }
  static {
    this.ɵfac = function DetailBoutiqueComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DetailBoutiqueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_SERVICES_boutique_service__WEBPACK_IMPORTED_MODULE_2__.BoutiqueService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: DetailBoutiqueComponent,
      selectors: [["app-detail-boutique"]],
      viewQuery: function DetailBoutiqueComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.tableScrollContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
        }
      },
      decls: 143,
      vars: 51,
      consts: [["loading", ""], ["searchInput", ""], ["tableScrollContainer", ""], ["statusText", ""], [1, "toast-container"], ["class", "alert alert-danger toast-message-danger", 4, "ngIf"], ["class", "alert alert-success toast-message-success", 4, "ngIf"], ["class", "alert alert-warning toast-message-success", 4, "ngIf"], ["class", "confirmation-modal-aver", 4, "ngIf"], ["title", "Retour sur la page boutique", 1, "retour_icon_text", 2, "cursor", "pointer", "color", "#0672E4", 3, "click"], [1, "ri-arrow-left-s-line"], [2, "margin-left", "8px", "font-size", "12px"], [1, "container_client"], ["class", "loading-overlay", 4, "ngIf"], [1, "information_cadre", 2, "margin-bottom", "20px", "padding", "20px"], [1, "info_personnel"], [1, "information_grid_two"], [1, "profil_section"], [1, "section_title"], [1, "title"], [1, "container_boutique_action"], [1, "name_permission"], ["class", "valueBoutique", "style", "font-size: 15px;", 3, "color", 4, "ngIf", "ngIfElse"], [1, "switch"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "slider", "round"], [1, "delete-boutique-container", 2, "margin-top", "22px"], [2, "font-size", "13px"], [1, "switch2"], ["aria-label", "Supprimer la boutique", "title", "Supprimer la boutique", 1, "delete-boutique-btn", 3, "click", "disabled"], [1, "fas", "fa-trash-alt"], ["class", "confirmation-modal-averB", 4, "ngIf"], [1, "info_section"], [1, "title", "title_display"], [1, "icon_edit"], ["class", "ri-edit-box-line", "title", "Cliquer ici pour modifier", 3, "click", 4, "ngIf"], ["style", "color: #ff0000;", "class", "ri-close-line", "title", "Fermer l'\u00E9dition", 3, "click", 4, "ngIf"], [1, "container_formulaire", 3, "formGroup"], [1, "champ_grid"], [1, "champ_input"], ["formControlName", "nomBoutique", "placeholder", "Saisis le nom de la boutique", 1, "input_focus"], [1, "label"], [4, "ngIf"], ["formControlName", "adresse", "placeholder", "Saisis l'adresse de la boutique", 1, "input_focus"], ["formControlName", "email", "placeholder", "Saisis l'email", 1, "input_focus"], ["formControlName", "telephone", "placeholder", "Saisis telephone", 1, "input_focus"], ["class", " information_cadre_save", 4, "ngIf"], [1, "content_copie_produit"], [2, "display", "flex", "justify-content", "space-between"], [1, "section_title", 2, "display", "flex", "align-items", "center"], [1, "title", 2, "display", "flex", "align-items", "center"], [2, "margin-right", "8px"], ["class", "facture-count", "style", "position: relative; top: -4px; right: 2px;", 4, "ngIf"], ["class", "barre", "style", "margin-bottom: 8px;", 4, "ngIf"], ["class", "icon_content icon_delete", "style", "margin-bottom: 8px;", 4, "ngIf"], ["class", "icon_content", "style", "margin-bottom: 8px; position: relative;", 4, "ngIf"], ["style", "position: relative; top: -4px; left: 10px;", 4, "ngIf"], [1, "container_inputSearch", 2, "display", "flex", "align-items", "center", "position", "relative"], [1, "inputSearch", 2, "flex", "1", "position", "relative", "top", "-7px"], [1, "tags-container", 2, "display", "flex", "flex-wrap", "wrap", "align-items", "center", "padding-left", "35px", "min-height", "40px", "border", "1.5px solid #000", "border-top-left-radius", "5px", "min-width", "250px", "border-bottom-left-radius", "5px", "border-top-right-radius", "0px", "border-bottom-right-radius", "0px", "background", "white", "cursor", "text", 3, "click"], ["class", "tag", "style", "display: flex; align-items: center; background: #e0e0e0; padding: 2px 8px; border-radius: 20px; margin: 2px 4px 2px 0; font-size: 12px; z-index: 12;", 4, "ngIf"], ["type", "text", 2, "border", "none", "outline", "none", "flex", "1", "padding", "5px 0", "min-width", "120px", 3, "ngModelChange", "click", "ngModel", "placeholder"], [1, "ri-search-2-line", 2, "position", "absolute", "left", "10px", "top", "50%", "transform", "translateY(-50%)", "z-index", "1"], ["title", "Trier et filtrer", 1, "trier", 2, "cursor", "pointer", 3, "click"], ["style", "font-size: 18px;", "class", "ri-arrow-down-s-fill", 4, "ngIf"], ["style", "font-size: 18px;", "class", "ri-close-line", 4, "ngIf"], ["class", "filter-dropdown", "style", "position: absolute; top: 100%; right: 0; background: white; \n                    border: 1px solid #ccc; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); \n                    z-index: 100; width: 100%; margin-top: 5px;", 3, "click", 4, "ngIf"], ["class", "alert alert-warning", "style", "margin-bottom: 0px; text-align: center;", 4, "ngIf"], [1, "table-scroll-container", 3, "scroll"], [1, "titleTableProduit"], [1, "cyber-checkbox"], ["type", "checkbox", 3, "change", "disabled"], [1, "cyber-checkbox__mark"], [1, "cyber-checkbox__box"], ["viewBox", "0 0 12 10", 1, "cyber-checkbox__check"], ["points", "1.5 6 4.5 9 10.5 1"], [1, "cyber-checkbox__effects"], [1, "cyber-checkbox__spark"], [1, "cyber-checkbox__particles"], [1, "particle-1"], [1, "particle-2"], [1, "particle-3"], [1, "particle-4"], [1, "particle-5"], [1, "particle-6"], [1, "particle-7"], [1, "particle-8"], [4, "ngFor", "ngForOf"], ["class", "modal", 3, "click", 4, "ngIf"], ["class", "content_copie_produit", 4, "ngIf"], ["class", "confirmation-modal", 4, "ngIf"], [1, "alert", "alert-danger", "toast-message-danger"], [1, "alert", "alert-success", "toast-message-success"], [1, "alert", "alert-warning", "toast-message-success"], [1, "confirmation-modal-aver"], [1, "modal-content-aver"], [2, "font-size", "16px", "margin-bottom", "10px"], [2, "margin", "0", "font-size", "12px"], [1, "modal-actions-aver"], [1, "btn-confirm", 2, "font-size", "12px", 3, "click"], [1, "loading-overlay"], [1, "loading-content"], [1, "spinner"], [1, "valueBoutique", 2, "font-size", "15px"], [4, "ngIf", "ngIfElse"], [1, "spinner-small"], ["role", "status", 1, "spinner-border", "text-primary", "spinner-small"], [1, "visually-hidden"], ["role", "status", 1, "spinner-border", "text-secondary", "spinner-small"], [1, "confirmation-modal-averB"], [1, "modal-content-averB"], [1, "modal-actions-averB"], [1, "btn-cancel", 2, "font-size", "12px", 3, "click"], ["title", "Cliquer ici pour modifier", 1, "ri-edit-box-line", 3, "click"], ["title", "Fermer l'\u00E9dition", 1, "ri-close-line", 2, "color", "#ff0000", 3, "click"], [1, "text-danger"], [1, "information_cadre_save"], [1, "info_titre_input", "info_titre_input_btn"], [1, "btn_annuler"], [1, "btn_cancel", 3, "click"], [1, "btn_ajouter"], [1, "btn_save", 3, "click", "disabled"], [1, "facture-count", 2, "position", "relative", "top", "-4px", "right", "2px"], [1, "barre", 2, "margin-bottom", "8px"], [1, "icon_content", "icon_delete", 2, "margin-bottom", "8px"], [1, "ri-delete-bin-6-line", 3, "click"], [1, "icon_content", 2, "margin-bottom", "8px", "position", "relative"], ["title", "Copier le produit vers une autre boutique", 1, "ri-file-copy-2-line", 3, "click"], ["class", "copy-modal", 4, "ngIf"], [1, "copy-modal"], [1, "modal-header"], [1, "ri-close-line", 3, "click"], [1, "modal-body"], ["type", "text", "placeholder", "Rechercher une boutique...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], [1, "boutique-list"], ["class", "boutique-item", 3, "disabled-boutique", "click", 4, "ngFor", "ngForOf"], ["class", "no-results", 4, "ngIf"], [1, "boutique-item", 3, "click"], ["style", "font-size: 13px;", "class", "ri-lock-line boutique-status-icon", "title", "Boutique d\u00E9sactiv\u00E9e", 4, "ngIf"], ["title", "Boutique d\u00E9sactiv\u00E9e", 1, "ri-lock-line", "boutique-status-icon", 2, "font-size", "13px"], [1, "no-results"], [2, "position", "relative", "top", "-4px", "left", "10px"], ["title", "Nombre s\u00E9lectionn\u00E9", 1, "facture-count", "facture-select"], [1, "tag", 2, "display", "flex", "align-items", "center", "background", "#e0e0e0", "padding", "2px 8px", "border-radius", "20px", "margin", "2px 4px 2px 0", "font-size", "12px", "z-index", "12"], [1, "remove-chip", 3, "click"], [1, "ri-arrow-down-s-fill", 2, "font-size", "18px"], [1, "ri-close-line", 2, "font-size", "18px"], [1, "filter-dropdown", 2, "position", "absolute", "top", "100%", "right", "0", "background", "white", "border", "1px solid #ccc", "border-radius", "5px", "box-shadow", "0 2px 10px rgba(0,0,0,0.1)", "z-index", "100", "width", "100%", "margin-top", "5px", 3, "click"], [1, "filter-section", 2, "padding", "10px"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "margin", "0", "font-size", "16px", "color", "#333"], [2, "background", "none", "border", "none", "color", "#0671e4", "cursor", "pointer", "font-size", "13px", 3, "click"], [2, "list-style", "none", "padding", "0", "margin", "10px 0 0 0"], [2, "padding", "8px 12px", "cursor", "pointer", "border-radius", "4px", "margin-bottom", "5px", "transition", "background 0.3s", 3, "click"], [2, "padding", "8px 12px", "cursor", "pointer", "border-radius", "4px", "transition", "background 0.3s", 3, "click"], [1, "alert", "alert-warning", 2, "margin-bottom", "0px", "text-align", "center"], [1, "ri-alert-line"], ["colspan", "7", 2, "text-align", "center", "padding", "20px"], [2, "text-align", "center"], ["role", "status", 1, "mini-spinner"], [1, "text-loading"], [2, "margin-left", "10px"], [1, "imgProduit"], [3, "click", "src", "alt"], [3, "innerHTML"], [1, "description-cell"], ["class", "description-tooltip", 4, "ngIf"], ["class", "ri-alarm-warning-fill", "style", "color: red; margin-left: 5px;", "title", "Stock bas!", 4, "ngIf"], [1, "description-tooltip"], ["title", "Stock bas!", 1, "ri-alarm-warning-fill", 2, "color", "red", "margin-left", "5px"], ["role", "status", 1, "mini-spinner", "text-primary"], [2, "margin", "0"], [2, "display", "flex", "flex-direction", "column", "align-items", "center"], [1, "ri-box-line", 2, "font-size", "48px", "color", "#6c757d"], [2, "margin-top", "10px", "margin-bottom", "5px"], [1, "modal", 3, "click"], [1, "modal-content", 3, "click"], ["alt", "Produit en gros plan", 3, "src"], [1, "header_vente", 2, "display", "flex", "align-items", "center", "justify-content", "space-between"], [1, "icon_content", "icon_delete", 2, "margin-bottom", "8px", 3, "click"], [1, "ri-delete-bin-6-line"], [1, "ri-folder-transfer-line"], [1, "transfer-modal", 2, "display", "none"], [1, "ri-close-line"], ["type", "text", "placeholder", "Rechercher un groupe...", 1, "search-input"], [1, "boutique-item"], [1, "no-results", 2, "display", "none"], [1, "add-task", 3, "click", "title"], [1, "table-scroll-container"], ["type", "checkbox"], ["type", "checkbox", 3, "change", "disabled", "checked"], [3, "src", "alt"], ["colspan", "6", 2, "text-align", "center", "padding", "20px"], [1, "ri-user-line", 2, "font-size", "48px", "color", "#6c757d"], [2, "position", "relative", "top", "-4px", "left", "0px"], ["type", "checkbox", 3, "change"], ["type", "checkbox", 3, "change", "checked"], [3, "ngClass"], ["title", "Associer \u00E0 la boutique", 1, "btn-associate", 3, "click"], [1, "confirmation-modal"], [1, "modal-content"], [2, "font-size", "12px"], [1, "modal-actions"], ["role", "dialog", 1, "ds-modal-content", "ds-elevated", "ds-modal-content--dialog", 2, "font-size", "var(--ds-font-size-m)", "line-height", "var(--ds-line-height-m)"], [1, "ds-modal-content__header-wrapper"], [1, "ds-modal-content__title"], ["tabindex", "0", 1, "ds-icon-button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24"], ["fill", "currentColor", "d", "M4.397 4.554l.073-.084a.75.75 0 0 1 .976-.073l.084.073L12 10.939l6.47-6.47a.75.75 0 1 1 1.06 1.061L13.061 12l6.47 6.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073L12 13.061l-6.47 6.47a.75.75 0 0 1-1.06-1.061L10.939 12l-6.47-6.47a.75.75 0 0 1-.072-.976l.073-.084z"], [1, "ds-modal-body"], [1, "ds-modal-content__footer"], [1, "ds-flex", 2, "justify-content", "flex-end", "gap", "12px"], ["tabindex", "0", 1, "ds-button", "ds-button--secondary", "ds-button--filled", "ds-button--rect", "ds-button--m", 3, "click", "disabled"], ["tabindex", "0", 1, "ds-button", "ds-button--error", "ds-button--filled", "ds-button--rect", "ds-button--m", 3, "click", "disabled"]],
      template: function DetailBoutiqueComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailBoutiqueComponent_div_1_Template, 2, 1, "div", 5)(2, DetailBoutiqueComponent_div_2_Template, 2, 1, "div", 6)(3, DetailBoutiqueComponent_div_3_Template, 2, 1, "div", 5)(4, DetailBoutiqueComponent_div_4_Template, 2, 1, "div", 7)(5, DetailBoutiqueComponent_div_5_Template, 2, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DetailBoutiqueComponent_div_6_Template, 11, 0, "div", 8)(7, DetailBoutiqueComponent_div_7_Template, 11, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_Template_p_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.navigateBack());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Boutique");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, DetailBoutiqueComponent_div_13_Template, 5, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 14)(15, "div", 15)(16, "div", 16)(17, "div", 17)(18, "div", 18)(19, "div", 19)(20, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 20)(23, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Status : ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, DetailBoutiqueComponent_span_25_Template, 4, 4, "span", 22)(26, DetailBoutiqueComponent_ng_template_26_Template, 3, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 23)(29, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DetailBoutiqueComponent_Template_input_change_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.toggleBoutiqueStatus($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 26)(32, "span", 27)(33, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "label", 28)(36, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_Template_button_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.deleteBoutique());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, DetailBoutiqueComponent_div_38_Template, 11, 1, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 32)(40, "div", 18)(41, "div", 33)(42, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, DetailBoutiqueComponent_i_45_Template, 1, 0, "i", 35)(46, DetailBoutiqueComponent_i_46_Template, 1, 0, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "form", 37)(48, "div", 38)(49, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "label", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Nouveau nom");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, DetailBoutiqueComponent_div_53_Template, 3, 0, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "input", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "label", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Nouvelle adresse");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 38)(59, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "label", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Nouvelle email");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "input", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "label", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Nouvelle telephone");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, DetailBoutiqueComponent_div_67_Template, 9, 8, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 47)(69, "div", 48)(70, "div", 49)(71, "div", 50)(72, "h6", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, DetailBoutiqueComponent_div_74_Template, 2, 1, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](75, DetailBoutiqueComponent_div_75_Template, 1, 0, "div", 53)(76, DetailBoutiqueComponent_div_76_Template, 2, 0, "div", 54)(77, DetailBoutiqueComponent_div_77_Template, 1, 0, "div", 53)(78, DetailBoutiqueComponent_div_78_Template, 3, 1, "div", 55)(79, DetailBoutiqueComponent_div_79_Template, 3, 1, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 57)(81, "div", 58)(82, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_Template_div_click_82_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.focusSearchInput());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](83, DetailBoutiqueComponent_span_83_Template, 4, 1, "span", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "input", 61, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function DetailBoutiqueComponent_Template_input_ngModelChange_84_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchText, $event) || (ctx.searchText = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DetailBoutiqueComponent_Template_input_ngModelChange_84_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.applyFilters());
          })("click", function DetailBoutiqueComponent_Template_input_click_84_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](86, "i", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailBoutiqueComponent_Template_div_click_87_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            ctx.toggleFilterDropdown();
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](88, DetailBoutiqueComponent_i_88_Template, 1, 0, "i", 64)(89, DetailBoutiqueComponent_i_89_Template, 1, 0, "i", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](90, DetailBoutiqueComponent_div_90_Template, 13, 8, "div", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](91, DetailBoutiqueComponent_div_91_Template, 3, 1, "div", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 68, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function DetailBoutiqueComponent_Template_div_scroll_92_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onTableScroll($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "table")(95, "thead")(96, "tr", 69)(97, "th")(98, "label", 70)(99, "input", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DetailBoutiqueComponent_Template_input_change_99_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]((ctx.boutique == null ? null : ctx.boutique.actif) ? ctx.toggleSelectAll($event) : null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "span", 72)(101, "div", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "svg", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "polyline", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "div", 77)(106, "div", 77)(107, "div", 77)(108, "div", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](110, "div", 79)(111, "div", 80)(112, "div", 81)(113, "div", 82)(114, "div", 83)(115, "div", 84)(116, "div", 85)(117, "div", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "Photo");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, "Nom produit");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, "Cat\u00E9gorie");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, "Prix Vente");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "En stock");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](131, DetailBoutiqueComponent_tr_131_Template, 9, 0, "tr", 42)(132, DetailBoutiqueComponent_tr_132_Template, 37, 22, "tr", 87)(133, DetailBoutiqueComponent_tr_133_Template, 7, 0, "tr", 42)(134, DetailBoutiqueComponent_tr_134_Template, 4, 0, "tr", 42)(135, DetailBoutiqueComponent_tr_135_Template, 6, 1, "tr", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](136, DetailBoutiqueComponent_div_136_Template, 3, 1, "div", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](137, DetailBoutiqueComponent_div_137_Template, 54, 4, "div", 89)(138, DetailBoutiqueComponent_div_138_Template, 39, 5, "div", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](139, DetailBoutiqueComponent_div_139_Template, 11, 2, "div", 90)(140, DetailBoutiqueComponent_div_140_Template, 5, 0, "div", 13)(141, DetailBoutiqueComponent_div_141_Template, 18, 5, "div", 90)(142, DetailBoutiqueComponent_div_142_Template, 5, 0, "div", 13);
        }
        if (rf & 2) {
          let tmp_23_0;
          const loading_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorMessageApi);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.copySuccessMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.copyErrorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showCopyWarningModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showDeleteWarningModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Action ", (ctx.boutique == null ? null : ctx.boutique.typeBoutique) === "ENTREPOT" ? "l'entrep\u00F4t" : "de la boutique", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.boutique)("ngIfElse", loading_r28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.boutique == null ? null : ctx.boutique.actif)("disabled", ctx.isUpdating);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Supprimer ", (ctx.boutique == null ? null : ctx.boutique.typeBoutique) === "ENTREPOT" ? "l'entrep\u00F4t" : "la boutique", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isDeleting);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showConfirmationModalB);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Informations sur ", (ctx.boutique == null ? null : ctx.boutique.typeBoutique) === "ENTREPOT" ? "l'entrep\u00F4t" : "la boutique", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isEditing);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isEditing);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.boutiqueForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_23_0 = ctx.boutiqueForm.get("nomBoutique")) == null ? null : tmp_23_0.invalid) && ((tmp_23_0 = ctx.boutiqueForm.get("nomBoutique")) == null ? null : tmp_23_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isEditing);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled-content", !(ctx.boutique == null ? null : ctx.boutique.actif));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Produits de ", (ctx.boutique == null ? null : ctx.boutique.typeBoutique) === "ENTREPOT" ? "l'entrep\u00F4t" : "la boutique", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.totalProductsCount > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.boutique == null ? null : ctx.boutique.actif);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.boutique == null ? null : ctx.boutique.actif);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.boutique == null ? null : ctx.boutique.actif);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.boutique == null ? null : ctx.boutique.actif);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedProductIds.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedFilters.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx.getSearchPlaceholder());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.showFilterDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showFilterDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showFilterDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx.boutique == null ? null : ctx.boutique.actif));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !(ctx.boutique == null ? null : ctx.boutique.actif));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoadingProducts);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filteredProducts);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoadingMore);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.allProductsLoaded && ctx.productsInBoutique.length > 0 && !ctx.isLoadingMore);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoadingProducts && ctx.productsInBoutique.length === 0 && (ctx.boutique == null ? null : ctx.boutique.actif));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showImageModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.showUserList);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showUserList);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showConfirmationModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showDeleteModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isDeleting);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
      styles: ["@charset \"UTF-8\";\n\n\n.cyber-checkbox[_ngcontent-%COMP%] {\n  --checkbox-size: 15px;\n  --checkbox-color: #0672E4;\n  --checkbox-check-color: #ffffff;\n  --checkbox-hover-color: #0360c3;\n  --checkbox-spark-offset: -20px;\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  margin-top: 8px;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cyber-checkbox__mark[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: var(--checkbox-size);\n  height: var(--checkbox-size);\n}\n\n.cyber-checkbox__box[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border: 1.5px solid var(--checkbox-color);\n  border-radius: 4px;\n  background: transparent;\n  transition: all 0.2s ease;\n}\n\n.cyber-checkbox__check[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  padding: 2px;\n  stroke: var(--checkbox-check-color);\n  stroke-width: 2px;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n  transform: scale(0);\n  transition: transform 0.2s ease;\n}\n\n.cyber-checkbox__effects[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: var(--checkbox-spark-offset);\n  pointer-events: none;\n}\n\n.cyber-checkbox__spark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 2px;\n  height: 2px;\n  background: var(--checkbox-color);\n  border-radius: 50%;\n  opacity: 0;\n  transform-origin: center center;\n}\n\n\n\n.cyber-checkbox[_ngcontent-%COMP%]:hover   .cyber-checkbox__box[_ngcontent-%COMP%] {\n  border-color: var(--checkbox-hover-color);\n  box-shadow: 0 0 0 2px rgba(92, 103, 255, 0.1);\n}\n\n\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .cyber-checkbox__box[_ngcontent-%COMP%] {\n  background: var(--checkbox-color);\n  border-color: var(--checkbox-color);\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .cyber-checkbox__check[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n\n\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .cyber-checkbox__spark[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spark 0.4s ease-out;\n}\n\n.cyber-checkbox__spark[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(0deg) translateX(var(--checkbox-spark-offset));\n}\n\n.cyber-checkbox__spark[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotate(90deg) translateX(var(--checkbox-spark-offset));\n}\n\n.cyber-checkbox__spark[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(180deg) translateX(var(--checkbox-spark-offset));\n}\n\n.cyber-checkbox__spark[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotate(270deg) translateX(var(--checkbox-spark-offset));\n}\n\n@keyframes _ngcontent-%COMP%_spark {\n  0% {\n    opacity: 0;\n    transform: scale(0) rotate(0deg) translateX(var(--checkbox-spark-offset));\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1) rotate(0deg) translateX(calc(var(--checkbox-spark-offset) * 1.5));\n  }\n}\n\n\n.cyber-checkbox[_ngcontent-%COMP%]:active   .cyber-checkbox__box[_ngcontent-%COMP%] {\n  transform: scale(0.9);\n}\n\n\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .cyber-checkbox__box[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 4px rgba(92, 103, 255, 0.2);\n}\n\n.cyber-checkbox__particles[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -50%;\n  pointer-events: none;\n}\n\n.cyber-checkbox__particles[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: var(--checkbox-color);\n  opacity: 0;\n}\n\n\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-1 0.4s ease-out forwards;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-2[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-2 0.4s ease-out forwards 0.1s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-3[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-3 0.4s ease-out forwards 0.15s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-4[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-4 0.4s ease-out forwards 0.05s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-5[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-5 0.4s ease-out forwards 0.12s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-6[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-6 0.4s ease-out forwards 0.08s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-7[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-7 0.4s ease-out forwards 0.18s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-8[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-8 0.4s ease-out forwards 0.15s;\n}\n\n\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-out-1 0.4s ease-out forwards;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-2[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-out-2 0.4s ease-out forwards 0.1s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-3[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-out-3 0.4s ease-out forwards 0.15s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-4[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-out-4 0.4s ease-out forwards 0.05s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-5[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-out-5 0.4s ease-out forwards 0.12s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-6[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-out-6 0.4s ease-out forwards 0.08s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-7[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-out-7 0.4s ease-out forwards 0.18s;\n}\n\n.cyber-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked)    + .cyber-checkbox__mark[_ngcontent-%COMP%]   .particle-8[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_particle-out-8 0.4s ease-out forwards 0.15s;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_particle-1 {\n  0% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(-20px, -20px) scale(1);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-2 {\n  0% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(20px, -20px) scale(1);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-3 {\n  0% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(20px, 20px) scale(1);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-4 {\n  0% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(-20px, 20px) scale(1);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-5 {\n  0% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(-30px, 0px) scale(1);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-6 {\n  0% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(30px, 0px) scale(1);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-7 {\n  0% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0px, -30px) scale(1);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-8 {\n  0% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0px, 30px) scale(1);\n    opacity: 0;\n  }\n}\n\n\n@keyframes _ngcontent-%COMP%_particle-out-1 {\n  0% {\n    transform: translate(-20px, -20px) scale(1);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-out-2 {\n  0% {\n    transform: translate(20px, -20px) scale(1);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-out-3 {\n  0% {\n    transform: translate(20px, 20px) scale(1);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-out-4 {\n  0% {\n    transform: translate(-20px, 20px) scale(1);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-out-5 {\n  0% {\n    transform: translate(-30px, 0px) scale(1);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-out-6 {\n  0% {\n    transform: translate(30px, 0px) scale(1);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-out-7 {\n  0% {\n    transform: translate(0px, -30px) scale(1);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_particle-out-8 {\n  0% {\n    transform: translate(0px, 30px) scale(1);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translate(0, 0) scale(0);\n    opacity: 0;\n  }\n}\n.transfer-modal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  width: 200px;\n  background: white;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  padding: 10px;\n}\n.transfer-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.transfer-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #333;\n}\n.transfer-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #666;\n  font-size: 18px;\n}\n.transfer-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #ff0000;\n}\n.transfer-modal[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  margin-bottom: 10px;\n  font-size: 12px;\n}\n.transfer-modal[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: #0672E4;\n  outline: none;\n}\n.transfer-modal[_ngcontent-%COMP%]   .boutique-list[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: auto;\n}\n.transfer-modal[_ngcontent-%COMP%]   .boutique-list[_ngcontent-%COMP%]   .boutique-item[_ngcontent-%COMP%] {\n  padding: 8px;\n  cursor: pointer;\n  font-size: 12px;\n  border-bottom: 1px solid #eee;\n}\n.transfer-modal[_ngcontent-%COMP%]   .boutique-list[_ngcontent-%COMP%]   .boutique-item[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n.transfer-modal[_ngcontent-%COMP%]   .boutique-list[_ngcontent-%COMP%]   .boutique-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.transfer-modal[_ngcontent-%COMP%]   .boutique-list[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: center;\n  color: #888;\n  font-size: 12px;\n}\n\n.copy-modal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 200px;\n  background: white;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  padding: 10px;\n}\n.copy-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.copy-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #333;\n}\n.copy-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #666;\n  font-size: 18px;\n}\n.copy-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #ff0000;\n}\n.copy-modal[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  margin-bottom: 10px;\n  font-size: 12px;\n}\n.copy-modal[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: #0672E4;\n  outline: none;\n}\n.copy-modal[_ngcontent-%COMP%]   .boutique-list[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: auto;\n}\n.copy-modal[_ngcontent-%COMP%]   .boutique-list[_ngcontent-%COMP%]   .boutique-item[_ngcontent-%COMP%] {\n  padding: 8px;\n  cursor: pointer;\n  font-size: 12px;\n  border-bottom: 1px solid #eee;\n}\n.copy-modal[_ngcontent-%COMP%]   .boutique-list[_ngcontent-%COMP%]   .boutique-item[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n.copy-modal[_ngcontent-%COMP%]   .boutique-list[_ngcontent-%COMP%]   .boutique-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.copy-modal[_ngcontent-%COMP%]   .boutique-list[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: center;\n  color: #888;\n  font-size: 12px;\n}\n\n.confirmation-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.confirmation-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2rem;\n  border-radius: 8px;\n  width: 400px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.confirmation-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: #333;\n}\n.confirmation-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: #666;\n}\n.confirmation-modal[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n.confirmation-modal[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: #f0f0f0;\n  color: #333;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.confirmation-modal[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n.confirmation-modal[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: #0672E4;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.confirmation-modal[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%]:hover {\n  background: #0560b7;\n}\n\n.description-cell[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 200px;\n}\n.description-cell[_ngcontent-%COMP%]:hover   .description-tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.description-tooltip[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  z-index: 100;\n  background: white;\n  border: 1px solid #ddd;\n  padding: 10px;\n  border-radius: 4px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  top: 100%;\n  left: 0;\n  width: 300px;\n  font-size: 14px;\n}\n\n.modal[_ngcontent-%COMP%] {\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 1000;\n  justify-content: center;\n  align-items: center;\n}\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 5px;\n  max-width: 20%;\n  max-height: 80%;\n}\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 70vh;\n}\n\n.badge-success[_ngcontent-%COMP%] {\n  background-color: #008000;\n  color: white;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 10px;\n}\n\n.badge-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: white;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 10px;\n}\n\n.confirmation-modal-aver[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1050;\n}\n\n.confirmation-modal-aver[_ngcontent-%COMP%]   .modal-content-aver[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  width: 300px;\n}\n\n.modal-actions-aver[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n\n.btn-confirm[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: white;\n  border: none;\n  padding: 4px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n\n\n.disabled-content[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  position: relative;\n}\n.disabled-content[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]   .cyber-checkbox[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n.disabled-content[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n.disabled-content[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]   .imgProduit[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: default;\n  filter: grayscale(100%);\n}\n\n\n\n.boutique-status-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  color: #ff9800;\n  font-size: 12px;\n  vertical-align: middle;\n}\n\n\n\n.disabled-boutique[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  position: relative;\n}\n\n\n\n.boutique-item[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n\n\n\n.disabled-boutique[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n\n\n.disabled-boutique[_ngcontent-%COMP%]   .boutique-status-icon[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  cursor: help;\n}\n\n.trier[_ngcontent-%COMP%] {\n  border-top: 1px solid #000;\n  border-right: 1px solid #000;\n  border-bottom: 1px solid #000;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  padding: 5.5px 10px;\n  cursor: pointer;\n  position: relative;\n  top: -7px;\n  left: 0px;\n}\n\n.tags-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  border-radius: 5px;\n  min-height: 40px;\n}\n\n.tag[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #e0e0e0;\n  padding: 2px 8px;\n  border-radius: 20px;\n  margin: 2px 4px 2px 0;\n  font-size: 12px;\n}\n\n.tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  cursor: pointer;\n}\n\n.inputSearch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  flex: 1;\n  padding: 8px 0;\n}\n\n.filter-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 100;\n  width: 250px;\n  margin-top: 5px;\n}\n\n.filter-section[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.filter-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  font-size: 16px;\n  color: #333;\n}\n\n.filter-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.filter-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  cursor: pointer;\n  border-radius: 4px;\n  margin-bottom: 5px;\n}\n\n.filter-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n\nth[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.remove-chip[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  cursor: pointer;\n}\n.remove-chip[_ngcontent-%COMP%]:hover {\n  color: #ff4444;\n}\n\n.filter-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 100;\n  width: 300px;\n  padding: 15px;\n}\n.filter-dropdown[_ngcontent-%COMP%]   .filter-option[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  display: flex;\n  flex-direction: column;\n}\n.filter-dropdown[_ngcontent-%COMP%]   .filter-select[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  padding: 8px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  background: white;\n  cursor: pointer;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed !important;\n  pointer-events: none;\n}\n\n\n\n.ds-modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  max-width: 400px;\n  width: 100%;\n  padding: 16px;\n}\n\n.ds-modal-content__header-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n\n.ds-modal-content__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.ds-icon-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  color: #666;\n}\n\n.ds-modal-body[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  color: #444;\n}\n\n\n\n.ds-button[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  padding: 8px 16px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: background 0.2s;\n}\n\n.ds-button--secondary[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  color: #333;\n}\n\n.ds-button--secondary[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n\n.ds-button--error[_ngcontent-%COMP%] {\n  background-color: #ff4444;\n  color: white;\n}\n\n.ds-button--error[_ngcontent-%COMP%]:hover {\n  background-color: #dd3333;\n}\n\n.ds-button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.ds-flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.facture-count[_ngcontent-%COMP%] {\n  background-color: #ddd;\n  color: #000;\n  border-radius: 50%;\n  font-size: 10px;\n  min-width: 18px;\n  height: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px;\n  margin-left: 10px;\n}\n\n.facture-select[_ngcontent-%COMP%] {\n  background-color: #E9D421 !important;\n  color: #000;\n}\n\n\n\n.draggable-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.confirmation-modal-averB[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1050;\n}\n\n.confirmation-modal-averB[_ngcontent-%COMP%]   .modal-content-averB[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  width: 300px;\n  color: #000; \n\n}\n\n.modal-actions-averB[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n\n.btn-confirmB[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: white;\n  border: none;\n  padding: 4px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.container_client[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f1f1f1;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n  border-radius: 5px;\n  margin-top: 0;\n  margin-bottom: 10px;\n  padding: 10px 0;\n}\n\n.content_client[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.information_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr 2fr;\n  gap: 20px;\n}\n\n.information_grid_two[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 20% 2fr;\n  gap: 20px;\n}\n\n.section_title[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  position: relative;\n  padding-bottom: 2px;\n}\n\n.section_title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #2c3e50;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.title_display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.section_title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 50px;\n  height: 3px;\n  background: linear-gradient(to right, #4b6cb7, #182848);\n  border-radius: 3px;\n}\n\n.section_title2[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 21px;\n  width: 50px;\n  height: 3px;\n  background: linear-gradient(to right, #4b6cb7, #182848);\n  border-radius: 3px;\n}\n\n.profil_section[_ngcontent-%COMP%] {\n  padding: 25px;\n  background-color: #fff;\n  border: 1px solid #e9e9e9;\n  box-shadow: rgba(0, 0, 0, 0.004) 0px 0px 0px 1px;\n  border-radius: 20px;\n}\n\n.profil_section_facture[_ngcontent-%COMP%] {\n  min-height: 50vh;\n  padding: 0 !important;\n}\n\n.info_section[_ngcontent-%COMP%] {\n  padding: 25px;\n  background-color: #fff;\n  border: 1px solid #e9e9e9;\n  box-shadow: rgba(0, 0, 0, 0.004) 0px 0px 0px 1px;\n  border-radius: 20px;\n}\n\n.info_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n\n.champ_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.champ_grid_true[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 5px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 10px;\n  background: none;\n  color: #000000;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: #999;\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 5px;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 10px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n.profile-img-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform 0.2s ease-in-out;\n  display: flex;\n  justify-content: center;\n  margin: 20px auto;\n}\n\n.profile-img-wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1.01);\n}\n\n.profile-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n\n.profile-img-wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.camera-icon[_ngcontent-%COMP%] {\n  width: 30px; \n\n  height: 30px;\n  background: #ffffff;\n  padding: 6px;\n  border-radius: 50%;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);\n}\n\n.icon_edit[_ngcontent-%COMP%] {\n  margin-top: -7px;\n}\n\n.icon_edit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  cursor: pointer;\n}\n\n@media (max-width: 768px) {\n  .information_grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .information_grid_two[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .info_grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.info_item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.info_label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6c757d;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n\n.info_value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #2c3e50;\n}\n\n.contact_info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.contact_item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 15px;\n}\n\n.contact_icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #e9ecef;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #4b6cb7;\n  font-size: 18px;\n}\n\n.tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 20px;\n}\n\n.tag[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1976d2;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 15px;\n}\n\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 2px;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 11px;\n  width: 11px;\n  left: 2px;\n  bottom: 2px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\n\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #0672E4; \n\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(13px);\n}\n\n.input_cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.icon_arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 25px;\n}\n\n.icon_arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #000;\n}\n\n\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.popup-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 50%;\n}\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.popup-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.popup-footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: right;\n}\n\n.btn-cancel[_ngcontent-%COMP%], .btn-submit[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: #ff0000;\n  padding: 6px 25px;\n  color: #fff;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  padding: 6px 25px;\n  color: #ffffff;\n  cursor: pointer;\n  cursor: no-drop;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all ease-in 0.5s;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  color: #ff4444;\n  font-size: 0.8rem;\n  margin-top: 4px;\n}\n\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.error-messageApi[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: red;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  left: -20px;\n}\n\n.success-messageApi[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #0672E4;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  left: -20px;\n}\n\n.error-messageApi2[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: red;\n  font-weight: bold;\n}\n\n.success-messageApi2[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #0672E4;\n  font-weight: bold;\n}\n\n.error[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #ff0000;\n  font-weight: bold;\n  position: relative;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n\n\n.table-container[_ngcontent-%COMP%] {\n  margin: 0px;\n  overflow: auto;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 2px;\n  height: 2px;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n}\n.table-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid #eee;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #fff;\n  font-weight: 600;\n  color: #000;\n  letter-spacing: 0.6px;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.2s;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\ntable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] {\n  background-color: #f1f3f5;\n}\ntable[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #212529;\n}\n\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.text-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 9px;\n  font-weight: 500;\n}\n.status-badge.draft[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  color: #495057;\n}\n.status-badge.sent[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.status-badge.approved[_ngcontent-%COMP%] {\n  background-color: #c5c5e2;\n  color: #0000ff;\n}\n.status-badge.valid[_ngcontent-%COMP%] {\n  background-color: #d5e6d5;\n  color: #008000;\n}\n\n.loading-indicator[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #6c757d;\n}\n.loading-indicator[_ngcontent-%COMP%]   .spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-right: 8px;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  text-align: center;\n  color: #6c757d;\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n  color: #ced4da;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #dc3545;\n  background-color: #fff8f8;\n  border-radius: 8px;\n  margin: 10px 0;\n}\n\n\n\n.table-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n\n.sticky-footer[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 0;\n  background: white;\n  z-index: 10;\n  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);\n  border-top: 1px solid #eee;\n}\n\n.sticky-footer[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 10;\n  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.logo_entreprise[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.logo_entreprise[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.para1[_ngcontent-%COMP%] {\n  font-size: 6px;\n  margin: 0;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n\n.titre[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 4px 0;\n  font-size: 12px;\n}\n\n.table[_ngcontent-%COMP%]   .th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 3px 5px;\n  text-align: center;\n}\n\n.table[_ngcontent-%COMP%]   .th[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  font-weight: 600;\n}\n\n.table[_ngcontent-%COMP%]   .tfoot[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background-color: #f9f9f9;\n}\n\n@media (max-width: 768px) {\n  table[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n@media (max-width: 480px) {\n  table[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 5px 3px;\n  }\n}\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%] {\n  padding: 6px 20px;\n  font-size: 10px;\n  letter-spacing: 0.6px;\n  border: none;\n  border-radius: 5px;\n  background-color: #ff0000;\n  color: #fff;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%] {\n  padding: 6px 20px;\n  font-size: 10px;\n  letter-spacing: 0.6px;\n  border: none;\n  border-radius: 5px;\n  background-color: #0672E4;\n  color: #fff;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all 0.5s;\n}\n\n.info_titre_input_btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 8px;\n  margin-top: 12px;\n}\n\n.grid_colonne[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.spinner-small[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-width: 2px;\n  margin-left: 10px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.div1[_ngcontent-%COMP%] {\n  grid-area: 1/1/2/2;\n}\n\n.div2[_ngcontent-%COMP%] {\n  grid-area: 1/2/2/3;\n}\n\n.div3[_ngcontent-%COMP%] {\n  grid-area: 1/3/2/4;\n}\n\n.selected-row[_ngcontent-%COMP%] {\n  border: 2px solid #0672E4;\n  background-color: #f0f8ff;\n}\n\n.tab-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.facture-count[_ngcontent-%COMP%] {\n  background-color: #ddd;\n  color: #000;\n  border-radius: 50%;\n  font-size: 12px;\n  min-width: 22px;\n  height: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 18px;\n  z-index: 1000;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid white;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.container_error_message[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.information_cadre_save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.success-messageApi2[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #0672E4;\n  font-weight: bold;\n}\n\n\n\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 60px;\n  right: 35px;\n  z-index: 9999;\n}\n\n\n\n.toast-message-warning[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  padding: 15px;\n  border-radius: 5px;\n  background-color: #77eb87;\n  border: 1px solid #ACCEBC;\n  color: #856404;\n  z-index: 1000;\n  max-width: 400px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n}\n\n.toast-message-success[_ngcontent-%COMP%] {\n  background-color: #77eb87;\n  border: 1px solid #ACCEBC;\n  color: #000000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n.toast-message-danger[_ngcontent-%COMP%] {\n  background-color: #F3D8DA;\n  border: 1px solid #E7B1B6;\n  color: #000;\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 13px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease-in-out;\n  transform: translateY(-20px);\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeInOut {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  20% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(2px); \n\n  }\n}\n.empty-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #6c757d;\n}\n.empty-preview[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 10px;\n}\n.empty-preview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  text-align: center;\n}\n\n.container_boutique_action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n\n.information_grid_two_copie_produit[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n\n.content_copie_produit[_ngcontent-%COMP%] {\n  position: relative;\n  height: 400px; \n\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  max-height: 400px;\n  overflow-y: auto;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  padding: 25px;\n  background-color: #fff;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  \n\n}\n.content_copie_produit[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 2px;\n}\n.content_copie_produit[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n.content_copie_produit[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 4px;\n}\n.content_copie_produit[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n\n.sticky-title[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 100;\n  padding: 10px 0;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.table-scroll-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  border-radius: 8px;\n}\n.table-scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 2px;\n}\n.table-scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.table-scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 4px;\n}\n.table-scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n\n.copie_produit_destination[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 25px;\n  background-color: #fff;\n  border: 1px solid #e9e9e9;\n  box-shadow: rgba(0, 0, 0, 0.004) 0px 0px 0px 1px;\n  border-radius: 20px;\n}\n\n\n\n.imgProduit[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f5f5f5;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.032);\n  cursor: pointer;\n}\n\n.imgProduit[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n  object-fit: cover;\n  border-radius: 50%;\n  transition: transform 0.2s;\n}\n\n.imgProduit[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.1); \n\n}\n\n.barre[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.2470588235);\n  margin: 0px 15px;\n}\n\n.icon_content[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.icon_content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.icon_delete[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #fa2a2a;\n  transition: all 0.5;\n}\n\n.delete-boutique-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.delete-boutique-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  color: rgba(122, 122, 122, 0.9058823529);\n  cursor: pointer;\n  font-size: 20px;\n  padding: 0;\n  transition: color 0.2s;\n  bottom: 10px;\n  position: relative;\n  left: 10px;\n}\n\n.delete-boutique-btn[_ngcontent-%COMP%]:hover {\n  color: #fa2a2a;\n}\n\n.btn-confirm[_ngcontent-%COMP%], \n.btn-cancel[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 0;\n  border: none;\n  border-radius: 5px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n\n.btn-confirm[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: #fff;\n}\n\n.btn-confirm[_ngcontent-%COMP%]:hover {\n  background-color: #1b83f2;\n  color: #fff;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: #333;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #c8c8c8;\n}\n\n.switch2[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 15px;\n}\n\n.add-task[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  background-color: #0672E4;\n  color: #ffffff;\n  border-radius: 5px;\n  border: none;\n  position: relative;\n  top: -5px;\n}\n\n.table-scroll-container[_ngcontent-%COMP%] {\n  max-height: 600px; \n\n  overflow-y: auto;\n}\n\n.mini-spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 3px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 3px solid #3498db;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1ib3V0aXF1ZS5jb21wb25lbnQuc2NzcyIsIl9kZXRhaWwtYm91dGlxdWUyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCLGFBQUE7QUFDQTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0FEQUo7O0FDR0U7RUFDRSxhQUFBO0FEQUo7O0FDR0U7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBREFKOztBQ0dFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QURBSjs7QUNHRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FEQUo7O0FDR0U7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0JBQUE7QURBSjs7QUNHRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7QURBSjs7QUNHRSxVQUFBO0FBQ0E7RUFDRSx5Q0FBQTtFQUNBLDZDQUFBO0FEQUo7O0FDR0UsWUFBQTtBQUNBO0VBQ0UsaUNBQUE7RUFDQSxtQ0FBQTtBREFKOztBQ0dFO0VBQ0UsbUJBQUE7QURBSjs7QUNHRSxvQkFBQTtBQUNBO0VBQ0UsOEJBQUE7QURBSjs7QUNHRTtFQUNFLGdFQUFBO0FEQUo7O0FDRUU7RUFDRSxpRUFBQTtBRENKOztBQ0NFO0VBQ0Usa0VBQUE7QURFSjs7QUNBRTtFQUNFLGtFQUFBO0FER0o7O0FDQUU7RUFDRTtJQUNFLFVBQUE7SUFDQSx5RUFBQTtFREdKO0VDREU7SUFDRSxVQUFBO0VER0o7RUNERTtJQUNFLFVBQUE7SUFDQSxxRkFBQTtFREdKO0FBQ0Y7QUNDRSxXQUFBO0FBQ0E7RUFDRSxxQkFBQTtBRENKOztBQ0VFLFVBQUE7QUFDQTtFQUNFLDZDQUFBO0FEQ0o7O0FDRUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBRENKOztBQ0VFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7QURDSjs7QUNFRSxrQ0FBQTtBQUNBO0VBQ0UsNENBQUE7QURDSjs7QUNDRTtFQUNFLGlEQUFBO0FERUo7O0FDQUU7RUFDRSxrREFBQTtBREdKOztBQ0RFO0VBQ0Usa0RBQUE7QURJSjs7QUNGRTtFQUNFLGtEQUFBO0FES0o7O0FDSEU7RUFDRSxrREFBQTtBRE1KOztBQ0pFO0VBQ0Usa0RBQUE7QURPSjs7QUNMRTtFQUNFLGtEQUFBO0FEUUo7O0FDTEUsb0NBQUE7QUFDQTtFQUNFLGdEQUFBO0FEUUo7O0FDTkU7RUFDRSxxREFBQTtBRFNKOztBQ1BFO0VBQ0Usc0RBQUE7QURVSjs7QUNSRTtFQUNFLHNEQUFBO0FEV0o7O0FDVEU7RUFDRSxzREFBQTtBRFlKOztBQ1ZFO0VBQ0Usc0RBQUE7QURhSjs7QUNYRTtFQUNFLHNEQUFBO0FEY0o7O0FDWkU7RUFDRSxzREFBQTtBRGVKOztBQ1pFLGlDQUFBO0FBQ0E7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsVUFBQTtFRGVKO0VDYkU7SUFDRSxVQUFBO0VEZUo7RUNiRTtJQUNFLDJDQUFBO0lBQ0EsVUFBQTtFRGVKO0FBQ0Y7QUNaRTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxVQUFBO0VEY0o7RUNaRTtJQUNFLFVBQUE7RURjSjtFQ1pFO0lBQ0UsMENBQUE7SUFDQSxVQUFBO0VEY0o7QUFDRjtBQ1hFO0VBQ0U7SUFDRSxtQ0FBQTtJQUNBLFVBQUE7RURhSjtFQ1hFO0lBQ0UsVUFBQTtFRGFKO0VDWEU7SUFDRSx5Q0FBQTtJQUNBLFVBQUE7RURhSjtBQUNGO0FDVkU7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsVUFBQTtFRFlKO0VDVkU7SUFDRSxVQUFBO0VEWUo7RUNWRTtJQUNFLDBDQUFBO0lBQ0EsVUFBQTtFRFlKO0FBQ0Y7QUNURTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxVQUFBO0VEV0o7RUNURTtJQUNFLFVBQUE7RURXSjtFQ1RFO0lBQ0UseUNBQUE7SUFDQSxVQUFBO0VEV0o7QUFDRjtBQ1JFO0VBQ0U7SUFDRSxtQ0FBQTtJQUNBLFVBQUE7RURVSjtFQ1JFO0lBQ0UsVUFBQTtFRFVKO0VDUkU7SUFDRSx3Q0FBQTtJQUNBLFVBQUE7RURVSjtBQUNGO0FDUEU7RUFDRTtJQUNFLG1DQUFBO0lBQ0EsVUFBQTtFRFNKO0VDUEU7SUFDRSxVQUFBO0VEU0o7RUNQRTtJQUNFLHlDQUFBO0lBQ0EsVUFBQTtFRFNKO0FBQ0Y7QUNORTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSxVQUFBO0VEUUo7RUNORTtJQUNFLFVBQUE7RURRSjtFQ05FO0lBQ0Usd0NBQUE7SUFDQSxVQUFBO0VEUUo7QUFDRjtBQ0xFLG1DQUFBO0FBQ0E7RUFDRTtJQUNFLDJDQUFBO0lBQ0EsVUFBQTtFRE9KO0VDTEU7SUFDRSxVQUFBO0VET0o7RUNMRTtJQUNFLG1DQUFBO0lBQ0EsVUFBQTtFRE9KO0FBQ0Y7QUNKRTtFQUNFO0lBQ0UsMENBQUE7SUFDQSxVQUFBO0VETUo7RUNKRTtJQUNFLFVBQUE7RURNSjtFQ0pFO0lBQ0UsbUNBQUE7SUFDQSxVQUFBO0VETUo7QUFDRjtBQ0hFO0VBQ0U7SUFDRSx5Q0FBQTtJQUNBLFVBQUE7RURLSjtFQ0hFO0lBQ0UsVUFBQTtFREtKO0VDSEU7SUFDRSxtQ0FBQTtJQUNBLFVBQUE7RURLSjtBQUNGO0FDRkU7RUFDRTtJQUNFLDBDQUFBO0lBQ0EsVUFBQTtFRElKO0VDRkU7SUFDRSxVQUFBO0VESUo7RUNGRTtJQUNFLG1DQUFBO0lBQ0EsVUFBQTtFRElKO0FBQ0Y7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QSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBbzVCRjs7QUFqNUJBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBbzVCRjs7QUFqNUJBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBbzVCRjs7QUFqNUJBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBbzVCRjs7QUFqNUJBO0VBQ0UseUJBQUE7QUFvNUJGOztBQWo1QkE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFvNUJGOztBQWo1QkE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQW81QkY7O0FBajVCQTtFQUNFLGlCQUFBLEVBQUEsb0NBQUE7RUFDQSxnQkFBQTtBQW81QkY7O0FBajVCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FBbzVCRjs7QUFqNUJBO0VBQ0U7SUFBSyx1QkFBQTtFQXE1Qkw7RUFwNUJBO0lBQU8seUJBQUE7RUF1NUJQO0FBQ0YiLCJmaWxlIjoiZGV0YWlsLWJvdXRpcXVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi9kZXRhaWwtYm91dGlxdWUyJztcblxuLmNvbnRhaW5lcl9jbGllbnQge1xuICB3aWR0aDogMTAwJTtcbiAgLy8gbWF4LXdpZHRoOiAxMDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmluZm9ybWF0aW9uX2NhZHJlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMDgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLmNvbnRlbnRfY2xpZW50IHtcbiAgICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uaW5mb3JtYXRpb25fZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMmZyO1xuICAgIGdhcDogMjBweDtcbn1cblxuLmluZm9ybWF0aW9uX2dyaWRfdHdvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDJmciA7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uc2VjdGlvbl90aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cblxuLnNlY3Rpb25fdGl0bGUgaDYge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMmMzZTUwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnRpdGxlX2Rpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zZWN0aW9uX3RpdGxlOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRiNmNiNywgIzE4Mjg0OCk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uc2VjdGlvbl90aXRsZTI6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDIxcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNGI2Y2I3LCAjMTgyODQ4KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5wcm9maWxfc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wMDQpIDBweCAwcHggMHB4IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnByb2ZpbF9zZWN0aW9uX2ZhY3R1cmUge1xuICBtaW4taGVpZ2h0OiA1MHZoO1xuICBwYWRkaW5nOiAwIWltcG9ydGFudDtcbn1cblxuLmluZm9fc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wMDQpIDBweCAwcHggMHB4IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmluZm9fZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdhcDogMjBweDtcbn1cblxuLmNoYW1wX2dyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgICBncmlkLXJvdy1nYXA6IDBweDtcbiAgICBnYXA6IDIwcHg7XG4gIH1cblxuLmNoYW1wX2dyaWRfdHJ1ZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICAgIGdyaWQtcm93LWdhcDogMHB4O1xuICAgIGdhcDogMjBweDtcbiAgfVxuXG4gIC5jaGFtcF9pbnB1dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvL21pbi13aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAvL3BhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQgLmxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb2xvcjogIzk5OTtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuICBcbiAgXG4gIC5pbnB1dF9mb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbiAgLmlucHV0X2ZvY3VzOmZvY3VzICsgLmxhYmVsIHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuXG4ucHJvZmlsZS1pbWctd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG4ucHJvZmlsZS1pbWctd3JhcHBlcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG59XG5cbi5wcm9maWxlLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4ucHJvZmlsZS1pbWctd3JhcHBlcjpob3ZlciAub3ZlcmxheSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jYW1lcmEtaWNvbiB7XG4gIHdpZHRoOiAzMHB4OyAvKiBhanVzdGUgc2Vsb24gbGEgdGFpbGxlIHZvdWx1ZSAqL1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5pY29uX2VkaXQge1xuICBtYXJnaW4tdG9wOiAtN3B4O1xufVxuXG4uaWNvbl9lZGl0IGkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmluZm9ybWF0aW9uX2dyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG5cbiAgICAuaW5mb3JtYXRpb25fZ3JpZF90d28ge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG4gICAgXG4gICAgLmluZm9fZ3JpZCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuLmluZm9faXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmluZm9fbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmluZm9fdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMmMzZTUwO1xufVxuXG4uY29udGFjdF9pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY29udGFjdF9pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4gICAgICAgIFxuLmNvbnRhY3RfaWNvbiB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogIzRiNmNiNztcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50YWdzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRhZyB7XG4gICAgYmFja2dyb3VuZDogI2UzZjJmZDtcbiAgICBjb2xvcjogIzE5NzZkMjtcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuICAgICAgICBcbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMTVweDtcbn1cblxuLyogTWFzcXVlciBsJ2lucHV0IGNoZWNrYm94IG9yaWdpbmFsICovXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogTGUgwqsgc2xpZGVyIMK7ICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDsgXG4gIGxlZnQ6IDJweDsgXG4gIHJpZ2h0OiAwOyBcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICB0cmFuc2l0aW9uOiAuNHM7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAvLyBjb250ZW50OiBcIlwiO1xuICAvLyBoZWlnaHQ6IDE4cHg7IFxuICAvLyB3aWR0aDogMThweDtcbiAgLy8gbGVmdDogM3B4OyBcbiAgLy8gYm90dG9tOiAzcHg7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAvLyB0cmFuc2l0aW9uOiAuNHM7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTFweDtcbiAgd2lkdGg6IDExcHg7XG4gIGxlZnQ6IDJweDtcbiAgYm90dG9tOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIFF1YW5kIGxlIGNoZWNrYm94IGVzdCBjb2Now6kgKi9cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgLyogQ291bGV1ciBhdSBjaG9peCAqL1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTNweCk7XG59XG5cbi5pbnB1dF9jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uX2Fycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAyNXB4O1xufVxuXG4uaWNvbl9hcnJvdyBpIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLyogU3R5bGVzIHBvdXIgbGUgcG9wdXAgKi9cbi5wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnBvcHVwLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBvcHVwLWhlYWRlciBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cC1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLy8gQnV0dG9uIFxuXG4uYnRuLWNhbmNlbCwgLmJ0bi1zdWJtaXQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICBwYWRkaW5nOiA2cHggMjVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MDEwMTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xufVxuXG4uYnRuLXN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNBQ0NFQkM7XG4gIHBhZGRpbmc6IDZweCAyNXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IG5vLWRyb3A7XG59XG5cbi5idG4tc3VibWl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gIGNvbG9yOiAjZmY0NDQ0O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uYnRuLXN1Ym1pdDpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmVycm9yLW1lc3NhZ2VBcGkge1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogLTIwcHg7XG59XG5cbi5zdWNjZXNzLW1lc3NhZ2VBcGkge1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IC0yMHB4O1xufVxuXG4uZXJyb3ItbWVzc2FnZUFwaTIge1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdWNjZXNzLW1lc3NhZ2VBcGkyIHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVycm9yIHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2hhbXBfaW5wdXRfaW52ZW50YWlyZSB7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbn1cbiAgXG4uY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBTdHlsZXMgY29tbXVucyBwb3VyIGxlcyBkZXV4IGNvbXBvc2FudHMgKi9cbi50YWJsZS1jb250YWluZXIge1xuICBtYXJnaW46IDBweDtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgLy8gYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgLy8gYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMDUpO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMnB4O1xuICAgIGhlaWdodDogMnB4O1xuICB9XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC8vIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIFxuICB0aCwgdGQge1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAvLyB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICB9XG4gIFxuICB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gIH1cbiAgXG4gIHRib2R5IHRyIHtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgIH1cbiAgfVxuICBcbiAgdGZvb3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYzZjU7XG4gICAgXG4gICAgdGQge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIH1cbiAgfVxufVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnN0YXR1cy1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIFxuICAmLmRyYWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICB9XG4gIFxuICAmLnNlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYzY2Q7XG4gICAgY29sb3I6ICM4NTY0MDQ7XG4gIH1cbiAgXG4gICYuYXBwcm92ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNWM1ZTI7XG4gICAgY29sb3I6ICMwMDAwZmY7XG4gIH1cbiAgXG4gICYudmFsaWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNWU2ZDU7XG4gICAgY29sb3I6ICMwMDgwMDA7XG4gIH1cbn1cblxuLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgXG4gIC5zcGluIHtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG59XG5cbi5lbXB0eS1zdGF0ZSB7XG4gIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGNvbG9yOiAjY2VkNGRhO1xuICB9XG4gIFxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOGY4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4vKiBTdHlsZXMgcG91ciBsZSB0YWJsZWF1IGF2ZWMgaGVhZGVyIGV0IGZvb3RlciBmaXhlcyAqL1xuLnRhYmxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRhYmxlLXdyYXBwZXIge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uc3RpY2t5LWZvb3RlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAwIC0ycHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5zdGlja3ktZm9vdGVyIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIFBvdXIgbCdlbi10w6p0ZSBmaXhlICovXG50aGVhZCB0ciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIDAuMDQpIDBweCAxcHggMHB4LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpIDBweCAxcHggMHB4IGluc2V0O1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi5sb2dvX2VudHJlcHJpc2Uge1xuICB3aWR0aDogNTBweDtcbiAgLy8gaGVpZ2h0OiA1MHB4O1xufVxuXG4ubG9nb19lbnRyZXByaXNlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYXJhMSB7XG4gIGZvbnQtc2l6ZTogNnB4O1xuICBtYXJnaW46IDA7XG59XG5cbmhyIHtcbiAgbWFyZ2luOiAzcHg7XG59XG5cbi50aXRyZSBoNiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLy8gLnRhYmxlIHtcbi8vICAgd2lkdGg6IDkzJTtcbi8vICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbi8vIH1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luOiA0cHggMDtcbiAgLy8gZm9udC1zaXplOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRhYmxlIC50aCwgLnRhYmxlIC50ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gZm9udC1zaXplOiA1cHg7XG59XG5cbi50YWJsZSAudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGFibGUgLnRmb290IC50ZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICB0YWJsZSB7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICBcbiAgdGFibGUge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIFxuICB0YWJsZSB0aCwgdGFibGUgdGQge1xuICAgICAgcGFkZGluZzogNXB4IDNweDtcbiAgfVxufVxuXG4vLyBidXR0b24gYW5udWxlclxuLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsIHtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8vIGJ1dHRvbiBhbm51bGVyIGhvdmVyXG4uYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG59XG5cbi8vIGJ1dHRvbiBham91dGVyIFxuLmJ0bl9ham91dGVyIC5idG5fc2F2ZSB7XG4gIHBhZGRpbmc6IDZweCAyMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vLyBidXR0b24gYWpvdXRlciBob3ZlclxuLmJ0bl9ham91dGVyIC5idG5fc2F2ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5pbmZvX3RpdHJlX2lucHV0X2J0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmdyaWRfY29sb25uZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gIGdhcDogMjBweDtcbn1cblxuLy8gLnNwaW5uZXItc21hbGwge1xuLy8gICB3aWR0aDogMjBweDtcbi8vICAgaGVpZ2h0OiAyMHB4O1xuLy8gICBtYXJnaW4tbGVmdDogMTBweDtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gfVxuXG4uc3Bpbm5lci1zbWFsbCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uZGl2MSB7IGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjsgfVxuLmRpdjIgeyBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7IH1cbi5kaXYzIHsgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0OyB9XG5cbi5zZWxlY3RlZC1yb3cge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDY3MkU0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmOGZmO1xufVxuXG4udGFiLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5mYWN0dXJlLWNvdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtaW4td2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmxvYWRpbmctb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxuICBcbiAgXG4gIC5sb2FkaW5nLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7IFxuICB9XG4gIFxuICAuc3Bpbm5lciB7XG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gIH1cblxuICAuY29udGFpbmVyX2Vycm9yX21lc3NhZ2Uge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAuaW5mb3JtYXRpb25fY2FkcmVfc2F2ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5zdWNjZXNzLW1lc3NhZ2VBcGkyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAvKiBDb250ZW5ldXIgZHUgdG9hc3QgKi9cbi50b2FzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjBweDtcbiAgcmlnaHQ6IDM1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi8qIEFqb3V0ZXogZGFucyB2b3RyZSBmaWNoaWVyIENTUyAqL1xuLnRvYXN0LW1lc3NhZ2Utd2FybmluZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2NkO1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZmZlZWJhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdlYjg3O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQUNDRUJDO1xuICBjb2xvcjogIzg1NjQwNDtcbiAgei1pbmRleDogMTAwMDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMSk7XG5cbiAgYW5pbWF0aW9uOiBmYWRlSW5PdXQgNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi50b2FzdC1tZXNzYWdlLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdlYjg3O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQUNDRUJDO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluT3V0IDRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuICBcbi8vdG9hc3Qgc3VjY2Vzc1xuLnRvYXN0LW1lc3NhZ2UtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRDhEQTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U3QjFCNjtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVJbk91dCA0cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbn1cblxuXG4gIC8vIEFqb3V0ZXIgbCdhbmltYXRpb24gcG91ciB0b3VzIGxlcyB0eXBlcyBkJ2FsZXJ0ZXNcbiAgLmFsZXJ0IHtcbiAgICAvLyAuLi4gc3R5bGVzIGV4aXN0YW50c1xuICAgIFxuICAgICYtd2FybmluZyB7XG4gICAgICBAZXh0ZW5kIC5hbGVydDtcbiAgICAgIC8vIC4uLiBzdHlsZXMgc3DDqWNpZmlxdWVzXG4gICAgfVxuICB9XG4gIFxuICAvKiBBbmltYXRpb24gcG91ciBmYWlyZSBhcHBhcmHDrnRyZSBldCBkaXNwYXJhw650cmUgbGUgdG9hc3QgKi9cbiAgQGtleWZyYW1lcyBmYWRlSW5PdXQge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpOyAvKiBMZSB0b2FzdCBkaXNwYXJhw650IGF2ZWMgdW4gbMOpZ2VyIG1vdXZlbWVudCB2ZXJzIGxlIGJhcyAqL1xuICAgIH1cbiAgfSAgXG5cblxuLmVtcHR5LXByZXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgXG4gIGkge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4uY29udGFpbmVyX2JvdXRpcXVlX2FjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmluZm9ybWF0aW9uX2dyaWRfdHdvX2NvcGllX3Byb2R1aXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBnYXA6IDIwcHg7XG59XG5cbi8vIC5jb250ZW50X2NvcGllX3Byb2R1aXQge1xuLy8gICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gICBwYWRkaW5nOiAyNXB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xuLy8gICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDA0KSAwcHggMHB4IDBweCAxcHg7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4vLyAgIGhlaWdodDogNDAwcHg7XG4vLyB9XG5cbi5jb250ZW50X2NvcGllX3Byb2R1aXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNDAwcHg7IC8qIEhhdXRldXIgZml4ZSBwb3VyIGxlIGNvbnRlbmV1ciBwcmluY2lwYWwgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuXG4gIC8qIFN0eWxlIHBvdXIgbGEgYmFycmUgZGUgZMOpZmlsZW1lbnQgKi9cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAycHg7XG4gIH1cbiAgXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICNjMWMxYzE7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2E4YThhODtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi5zdGlja3ktdGl0bGUge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiAxMDA7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuLnRhYmxlLXNjcm9sbC1jb250YWluZXIge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIC8vIHBhZGRpbmc6IDEwcHg7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIgeyB3aWR0aDogMnB4OyB9XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgYmFja2dyb3VuZDogI2YxZjFmMTsgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogI2MxYzFjMTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgXG4gICAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNhOGE4YTg7IH1cbiAgfVxufVxuXG4uY29waWVfcHJvZHVpdF9kZXN0aW5hdGlvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wMDQpIDBweCAwcHggMHB4IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLyogU3R5bGUgZGUgbCdpbWFnZSBjaXJjdWxhaXJlICovXG4uaW1nUHJvZHVpdCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wMzIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWdQcm9kdWl0IGltZyB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cblxuLmltZ1Byb2R1aXQ6aG92ZXIgaW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBFZmZldCB6b29tIGF1IHN1cnZvbCAqL1xufVxuXG4uYmFycmUge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzZjtcbiAgICBtYXJnaW46IDBweCAxNXB4O1xufVxuXG4uaWNvbl9jb250ZW50IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbl9jb250ZW50IGkge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5pY29uX2RlbGV0ZSBpOmhvdmVyIHtcbiAgY29sb3I6ICNmYTJhMmE7XG4gIHRyYW5zaXRpb246IGFsbCAuNTtcbn1cblxuXG4uZGVsZXRlLWJvdXRpcXVlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBcbn1cblxuLmRlbGV0ZS1ib3V0aXF1ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzdhN2E3YWU3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEwcHg7XG4gIFxufVxuXG4uZGVsZXRlLWJvdXRpcXVlLWJ0bjpob3ZlcntcbiAgY29sb3I6ICNmYTJhMmE7XG59XG5cbi5idG4tY29uZmlybSxcbi5idG4tY2FuY2VsIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XG59XG5cbi5idG4tY29uZmlybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWNvbmZpcm06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI4M2YyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmJ0bi1jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOGM4O1xufVxuXG4uc3dpdGNoMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG4uYWRkLXRhc2sge1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01cHg7XG59XG5cbi50YWJsZS1zY3JvbGwtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogNjAwcHg7IC8qIG91IGxhIGhhdXRldXIgcXVlIHZvdXMgcHLDqWbDqXJleiAqL1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubWluaS1zcGlubmVyIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgIzM0OThkYjtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn0iLCJcbi8qIEZyb20gU3ZnICovIFxuLmN5YmVyLWNoZWNrYm94IHtcbiAgICAtLWNoZWNrYm94LXNpemU6IDE1cHg7XG4gICAgLS1jaGVja2JveC1jb2xvcjogIzA2NzJFNDtcbiAgICAtLWNoZWNrYm94LWNoZWNrLWNvbG9yOiAjZmZmZmZmO1xuICAgIC0tY2hlY2tib3gtaG92ZXItY29sb3I6ICMwMzYwYzM7XG4gICAgLS1jaGVja2JveC1zcGFyay1vZmZzZXQ6IC0yMHB4O1xuICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbiAgXG4gIC5jeWJlci1jaGVja2JveCBpbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLmN5YmVyLWNoZWNrYm94X19tYXJrIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiB2YXIoLS1jaGVja2JveC1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWNoZWNrYm94LXNpemUpO1xuICB9XG4gIFxuICAuY3liZXItY2hlY2tib3hfX2JveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tY2hlY2tib3gtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB9XG4gIFxuICAuY3liZXItY2hlY2tib3hfX2NoZWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDA7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIHN0cm9rZTogdmFyKC0tY2hlY2tib3gtY2hlY2stY29sb3IpO1xuICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICAgIGZpbGw6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICB9XG4gIFxuICAuY3liZXItY2hlY2tib3hfX2VmZmVjdHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogdmFyKC0tY2hlY2tib3gtc3Bhcmstb2Zmc2V0KTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbiAgLmN5YmVyLWNoZWNrYm94X19zcGFyayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogMnB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICB9XG4gIFxuICAvKiBIb3ZlciAqL1xuICAuY3liZXItY2hlY2tib3g6aG92ZXIgLmN5YmVyLWNoZWNrYm94X19ib3gge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY2hlY2tib3gtaG92ZXItY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDkyLCAxMDMsIDI1NSwgMC4xKTtcbiAgfVxuICBcbiAgLyogQ2hlY2tlZCAqL1xuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIC5jeWJlci1jaGVja2JveF9fbWFyayAuY3liZXItY2hlY2tib3hfX2JveCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2hlY2tib3gtY29sb3IpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY2hlY2tib3gtY29sb3IpO1xuICB9XG4gIFxuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIC5jeWJlci1jaGVja2JveF9fbWFyayAuY3liZXItY2hlY2tib3hfX2NoZWNrIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIFxuICAvKiBTcGFyayBBbmltYXRpb24gKi9cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLmN5YmVyLWNoZWNrYm94X19zcGFyayB7XG4gICAgYW5pbWF0aW9uOiBzcGFyayAwLjRzIGVhc2Utb3V0O1xuICB9XG4gIFxuICAuY3liZXItY2hlY2tib3hfX3NwYXJrOm50aC1jaGlsZCgxKSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgdHJhbnNsYXRlWCh2YXIoLS1jaGVja2JveC1zcGFyay1vZmZzZXQpKTtcbiAgfVxuICAuY3liZXItY2hlY2tib3hfX3NwYXJrOm50aC1jaGlsZCgyKSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVgodmFyKC0tY2hlY2tib3gtc3Bhcmstb2Zmc2V0KSk7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94X19zcGFyazpudGgtY2hpbGQoMykge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgdHJhbnNsYXRlWCh2YXIoLS1jaGVja2JveC1zcGFyay1vZmZzZXQpKTtcbiAgfVxuICAuY3liZXItY2hlY2tib3hfX3NwYXJrOm50aC1jaGlsZCg0KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVYKHZhcigtLWNoZWNrYm94LXNwYXJrLW9mZnNldCkpO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNwYXJrIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoMGRlZykgdHJhbnNsYXRlWCh2YXIoLS1jaGVja2JveC1zcGFyay1vZmZzZXQpKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpXG4gICAgICAgIHRyYW5zbGF0ZVgoY2FsYyh2YXIoLS1jaGVja2JveC1zcGFyay1vZmZzZXQpICogMS41KSk7XG4gICAgfVxuICB9XG4gIFxuICAvKiBBY3RpdmUgKi9cbiAgLmN5YmVyLWNoZWNrYm94OmFjdGl2ZSAuY3liZXItY2hlY2tib3hfX2JveCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICB9XG4gIFxuICAvKiBGb2N1cyAqL1xuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6Zm9jdXMgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLmN5YmVyLWNoZWNrYm94X19ib3gge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDkyLCAxMDMsIDI1NSwgMC4yKTtcbiAgfVxuICBcbiAgLmN5YmVyLWNoZWNrYm94X19wYXJ0aWNsZXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogLTUwJTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbiAgLmN5YmVyLWNoZWNrYm94X19wYXJ0aWNsZXMgZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiAzcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LWNvbG9yKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIFxuICAvKiBQYXJ0aWNsZSBhbmltYXRpb25zIGZvciBjaGVjayAqL1xuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIC5jeWJlci1jaGVja2JveF9fbWFyayAucGFydGljbGUtMSB7XG4gICAgYW5pbWF0aW9uOiBwYXJ0aWNsZS0xIDAuNHMgZWFzZS1vdXQgZm9yd2FyZHM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTIge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtMiAwLjRzIGVhc2Utb3V0IGZvcndhcmRzIDAuMXM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTMge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtMyAwLjRzIGVhc2Utb3V0IGZvcndhcmRzIDAuMTVzO1xuICB9XG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpjaGVja2VkICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS00IHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLTQgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjA1cztcbiAgfVxuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIC5jeWJlci1jaGVja2JveF9fbWFyayAucGFydGljbGUtNSB7XG4gICAgYW5pbWF0aW9uOiBwYXJ0aWNsZS01IDAuNHMgZWFzZS1vdXQgZm9yd2FyZHMgMC4xMnM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTYge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtNiAwLjRzIGVhc2Utb3V0IGZvcndhcmRzIDAuMDhzO1xuICB9XG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpjaGVja2VkICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS03IHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLTcgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjE4cztcbiAgfVxuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIC5jeWJlci1jaGVja2JveF9fbWFyayAucGFydGljbGUtOCB7XG4gICAgYW5pbWF0aW9uOiBwYXJ0aWNsZS04IDAuNHMgZWFzZS1vdXQgZm9yd2FyZHMgMC4xNXM7XG4gIH1cbiAgXG4gIC8qIFBhcnRpY2xlIGFuaW1hdGlvbnMgZm9yIHVuY2hlY2sgKi9cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0Om5vdCg6Y2hlY2tlZCkgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTEge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtb3V0LTEgMC40cyBlYXNlLW91dCBmb3J3YXJkcztcbiAgfVxuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6bm90KDpjaGVja2VkKSArIC5jeWJlci1jaGVja2JveF9fbWFyayAucGFydGljbGUtMiB7XG4gICAgYW5pbWF0aW9uOiBwYXJ0aWNsZS1vdXQtMiAwLjRzIGVhc2Utb3V0IGZvcndhcmRzIDAuMXM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0Om5vdCg6Y2hlY2tlZCkgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTMge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtb3V0LTMgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjE1cztcbiAgfVxuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6bm90KDpjaGVja2VkKSArIC5jeWJlci1jaGVja2JveF9fbWFyayAucGFydGljbGUtNCB7XG4gICAgYW5pbWF0aW9uOiBwYXJ0aWNsZS1vdXQtNCAwLjRzIGVhc2Utb3V0IGZvcndhcmRzIDAuMDVzO1xuICB9XG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpub3QoOmNoZWNrZWQpICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS01IHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLW91dC01IDAuNHMgZWFzZS1vdXQgZm9yd2FyZHMgMC4xMnM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0Om5vdCg6Y2hlY2tlZCkgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTYge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtb3V0LTYgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjA4cztcbiAgfVxuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6bm90KDpjaGVja2VkKSArIC5jeWJlci1jaGVja2JveF9fbWFyayAucGFydGljbGUtNyB7XG4gICAgYW5pbWF0aW9uOiBwYXJ0aWNsZS1vdXQtNyAwLjRzIGVhc2Utb3V0IGZvcndhcmRzIDAuMThzO1xuICB9XG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpub3QoOmNoZWNrZWQpICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS04IHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLW91dC04IDAuNHMgZWFzZS1vdXQgZm9yd2FyZHMgMC4xNXM7XG4gIH1cbiAgXG4gIC8qIFBhcnRpY2xlIGtleWZyYW1lcyBmb3IgY2hlY2sgKi9cbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS0xIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4LCAtMjBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS0yIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIC0yMHB4KSBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHBhcnRpY2xlLTMge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgMjBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS00IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4LCAyMHB4KSBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHBhcnRpY2xlLTUge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwcHgsIDBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS02IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS03IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTMwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtOCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDMwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIC8qIFBhcnRpY2xlIGtleWZyYW1lcyBmb3IgdW5jaGVjayAqL1xuICBAa2V5ZnJhbWVzIHBhcnRpY2xlLW91dC0xIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjBweCwgLTIwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS1vdXQtMiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgLTIwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS1vdXQtMyB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgMjBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHBhcnRpY2xlLW91dC00IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjBweCwgMjBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHBhcnRpY2xlLW91dC01IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzBweCwgMHB4KSBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtb3V0LTYge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwcHgsIDBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHBhcnRpY2xlLW91dC03IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0zMHB4KSBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtb3V0LTgge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMzBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbiAgLnRyYW5zZmVyLW1vZGFsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgXG4gICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgXG4gICAgICAgIGg1IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuc2VhcmNoLWlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIFxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzA2NzJFNDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmJvdXRpcXVlLWxpc3Qge1xuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgXG4gICAgICAgIC5ib3V0aXF1ZS1pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5uby1yZXN1bHRzIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29weS1tb2RhbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgXG4gICAgLm1vZGFsLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgXG4gICAgICAgIGg1IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuc2VhcmNoLWlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIFxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzA2NzJFNDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmJvdXRpcXVlLWxpc3Qge1xuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgXG4gICAgICAgIC5ib3V0aXF1ZS1pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5uby1yZXN1bHRzIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29uZmlybWF0aW9uLW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG5cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICAgIGg0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICBjb2xvcjogIzMzMztcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgIH1cbiAgfVxuXG4gIC5tb2RhbC1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAxcmVtO1xuXG4gICAgLmJ0bi1jYW5jZWwge1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG4tY29uZmlybSB7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIGJhY2tncm91bmQ6ICMwNjcyRTQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDU2MGI3O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZGVzY3JpcHRpb24tY2VsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgXG4gICY6aG92ZXIgLmRlc2NyaXB0aW9uLXRvb2x0aXAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi5kZXNjcmlwdGlvbi10b29sdGlwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjEpO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAzMDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4vLyAuaW1nUHJvZHVpdCBpbWcge1xuLy8gICB3aWR0aDogNTBweDtcbi8vICAgaGVpZ2h0OiA1MHB4O1xuLy8gICBvYmplY3QtZml0OiBjb3Zlcjtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICBcbi8vICAgJjpob3ZlciB7XG4vLyAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjgpO1xuLy8gICAgIHotaW5kZXg6IDEwO1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgfVxuLy8gfVxuXG4ubW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB6LWluZGV4OiAxMDAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgXG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXgtd2lkdGg6IDIwJTtcbiAgICBtYXgtaGVpZ2h0OiA4MCU7XG4gICAgXG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDcwdmg7XG4gICAgfVxuICB9XG59XG5cbi5iYWRnZS1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uYmFkZ2UtZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG5cbi5jb25maXJtYXRpb24tbW9kYWwtYXZlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDUwO1xufVxuXG4uY29uZmlybWF0aW9uLW1vZGFsLWF2ZXIgLm1vZGFsLWNvbnRlbnQtYXZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4ubW9kYWwtYWN0aW9ucy1hdmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJ0bi1jb25maXJtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQWpvdXRlciBjZXMgc3R5bGVzICovXG4uZGlzYWJsZWQtY29udGVudCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgLnRhYmxlLXNjcm9sbC1jb250YWluZXIge1xuICAgIC5jeWJlci1jaGVja2JveCB7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cbiAgICBcbiAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG4gICAgXG4gICAgLmltZ1Byb2R1aXQgaW1nIHtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyAuYWxlcnQtd2FybmluZyB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY4ZTE7XG4vLyAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2ZmOTgwMDtcbi8vICAgY29sb3I6ICNmZjk4MDA7XG4vLyAgIHBhZGRpbmc6IDEwcHggMTVweDtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICBmb250LXdlaWdodDogNTAwO1xuLy8gfVxuXG4vKiBTdHlsZXMgcG91ciBsJ2ljw7RuZSBkJ8OpdGF0ICovXG4uYm91dGlxdWUtc3RhdHVzLWljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgY29sb3I6ICNmZjk4MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi8qIFN0eWxlIHBvdXIgbGVzIGJvdXRpcXVlcyBkw6lzYWN0aXbDqWVzICovXG4uZGlzYWJsZWQtYm91dGlxdWUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIE9wdGlvbm5lbCA6IGFqb3V0ZXIgdW4gZWZmZXQgYXUgc3Vydm9sICovXG4uYm91dGlxdWUtaXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLyogRMOpc2FjdGl2ZXIgbGUgY2xpYyBwb3VyIGxlcyBib3V0aXF1ZXMgZMOpc2FjdGl2w6llcyAqL1xuLmRpc2FibGVkLWJvdXRpcXVlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi8qIFLDqXRhYmxpciBsZSBjbGljIHVuaXF1ZW1lbnQgc3VyIGwnaWPDtG5lICovXG4uZGlzYWJsZWQtYm91dGlxdWUgLmJvdXRpcXVlLXN0YXR1cy1pY29uIHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBjdXJzb3I6IGhlbHA7XG59XG5cbi8vIC5pbnB1dFNlYXJjaCB7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIHRvcDogLTdweDtcbi8vICAgICB3aWR0aDogMjgwcHg7XG4vLyAgICAgaGVpZ2h0OiA0MHB4O1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4vLyAgICAgLy8gYm9yZGVyLXJhZGl1czogMjBweDtcbi8vICAgICBwYWRkaW5nOiAwIDE1cHg7XG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4vLyAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbi8vICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuXG4vLyAgICAgJjpob3ZlciB7XG4vLyAgICAgICAgIGJvcmRlci1jb2xvcjogIzA2NzJFNDtcbi8vICAgICB9XG5cbi8vICAgICBpbnB1dCB7XG4vLyAgICAgICAgIGZsZXg6IDE7XG4vLyAgICAgICAgIGhlaWdodDogMTAwJTtcbi8vICAgICAgICAgYm9yZGVyOiBub25lO1xuLy8gICAgICAgICBvdXRsaW5lOiBub25lO1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgICAgICBjb2xvcjogIzMzMztcbi8vICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuXG4vLyAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcbi8vICAgICAgICAgICAgIGNvbG9yOiAjYWFhO1xuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgaSB7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbi8vICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgICAgICBjb2xvcjogI2FhYTtcbi8vICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG5cbi8vICAgICAgICAgJjpob3ZlciB7XG4vLyAgICAgICAgICAgICBjb2xvcjogIzA2NzJFNDtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIC5yZWQtaWNvbiB7XG4vLyAgICAgICAgIGNvbG9yOiByZWQ7XG4vLyAgICAgfVxuLy8gfVxuICBcbi8vIC5pbnB1dFNlYXJjaCBpbnB1dCB7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgIHBhZGRpbmctbGVmdDogMTBweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4vLyB9XG4gIFxuLy8gLmlucHV0U2VhcmNoIGkge1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICByaWdodDogMDtcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4vLyAgICAgZm9udC1zaXplOiAxN3B4O1xuLy8gfVxuXG4udHJpZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDsgXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7IFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDsgXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7IFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyBcbiAgcGFkZGluZzogNS41cHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTdweDtcbiAgbGVmdDogMHB4O1xufVxuXG4vLyAuaW5wdXRTZWFyY2gge1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICB0b3A6IC03cHg7XG4vLyAgICAgd2lkdGg6IDMxMHB4O1xuLy8gICAgIGhlaWdodDogNDBweDtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuLy8gICAgIC8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4vLyAgICAgcGFkZGluZzogMCAxNXB4O1xuLy8gICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuLy8gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcblxuLy8gICAgICY6aG92ZXIge1xuLy8gICAgICAgICBib3JkZXItY29sb3I6ICMwNjcyRTQ7XG4vLyAgICAgfVxuXG4vLyAgICAgaW5wdXQge1xuLy8gICAgICAgICBmbGV4OiAxO1xuLy8gICAgICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgICAgIGJvcmRlcjogbm9uZTtcbi8vICAgICAgICAgb3V0bGluZTogbm9uZTtcbi8vICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICAgICAgY29sb3I6ICMzMzM7XG4vLyAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcblxuLy8gICAgICAgICAmOjpwbGFjZWhvbGRlciB7XG4vLyAgICAgICAgICAgICBjb2xvcjogI2FhYTtcbi8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIGkge1xuLy8gICAgICAgICBmb250LXNpemU6IDE4cHg7XG4vLyAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICAgICAgY29sb3I6ICNhYWE7XG4vLyAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuXG4vLyAgICAgICAgICY6aG92ZXIge1xuLy8gICAgICAgICAgICAgY29sb3I6ICMwNjcyRTQ7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAucmVkLWljb24ge1xuLy8gICAgICAgICBjb2xvcjogcmVkO1xuLy8gICAgIH1cbi8vIH1cbiAgXG4vLyAuaW5wdXRTZWFyY2ggaW5wdXQge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gfVxuICBcbi8vIC5pbnB1dFNlYXJjaCBpIHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgcmlnaHQ6IDA7XG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuLy8gICAgIGZvbnQtc2l6ZTogMTdweDtcbi8vIH1cblxuLy8gLnRyaWVyIHtcbi8vICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7IFxuLy8gICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkOyBcbi8vICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IFxuLy8gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4OyBcbi8vICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDsgXG4vLyAgIHBhZGRpbmc6IDUuNXB4IDEwcHg7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICB0b3A6IC03cHg7XG4vLyAgIGxlZnQ6IDBweDtcbi8vIH1cblxuXG4udGFncy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vIHBhZGRpbmc6IDVweCA1cHggNXB4IDM1cHg7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8gYmFja2dyb3VuZDogd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG59XG5cbi50YWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW46IDJweCA0cHggMnB4IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRhZyBpIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5wdXRTZWFyY2ggaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZsZXg6IDE7XG4gIC8vIG1pbi13aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuXG4uZmlsdGVyLWRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogMjUwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmZpbHRlci1zZWN0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmZpbHRlci1zZWN0aW9uIGg0IHtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZmlsdGVyLXNlY3Rpb24gdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5maWx0ZXItc2VjdGlvbiBsaSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZmlsdGVyLXNlY3Rpb24gbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xufVxuXG50aCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5yZW1vdmUtY2hpcCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogI2ZmNDQ0NDtcbiAgfVxufVxuXG4uZmlsdGVyLWRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgei1pbmRleDogMTAwO1xuICB3aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG5cbiAgLmZpbHRlci1vcHRpb24ge1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5maWx0ZXItc2VsZWN0IHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qIFN0eWxlcyBwb3VyIGxlIG1vZGFsIGRlIHN1cHByZXNzaW9uICovXG4uZHMtbW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5kcy1tb2RhbC1jb250ZW50X19oZWFkZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmRzLW1vZGFsLWNvbnRlbnRfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5kcy1pY29uLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA0cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uZHMtbW9kYWwtYm9keSB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGNvbG9yOiAjNDQ0O1xufVxuXG4vKiBCb3V0b25zICovXG4uZHMtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbn1cblxuLmRzLWJ1dHRvbi0tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5kcy1idXR0b24tLXNlY29uZGFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG59XG5cbi5kcy1idXR0b24tLWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDQ0NDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZHMtYnV0dG9uLS1lcnJvcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDMzMzM7XG59XG5cbi5kcy1idXR0b25bZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZHMtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mYWN0dXJlLWNvdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtaW4td2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5mYWN0dXJlLXNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUQ0MjEhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLyogUG91ciBhbGlnbmVyIGNvcnJlY3RlbWVudCBsZXMgw6lsw6ltZW50cyAqL1xuLmRyYWdnYWJsZS1pdGVtIHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi8vaWNpXG5cbi5jb25maXJtYXRpb24tbW9kYWwtYXZlckIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTA1MDtcbn1cblxuLmNvbmZpcm1hdGlvbi1tb2RhbC1hdmVyQiAubW9kYWwtY29udGVudC1hdmVyQiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgd2lkdGg6IDMwMHB4O1xuICBjb2xvcjogIzAwMDsgLyogcG91ciBzJ2Fzc3VyZXIgcXVlIGxlIHRleHRlIGVzdCB2aXNpYmxlICovXG59XG5cblxuLm1vZGFsLWFjdGlvbnMtYXZlckIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYnRuLWNvbmZpcm1CIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9kZXRhaWwtYm91dGlxdWUvZGV0YWlsLWJvdXRpcXVlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9hZG1pbi1wYWdlL2RldGFpbC1ib3V0aXF1ZS9fZGV0YWlsLWJvdXRpcXVlMi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQixhQUFBO0FBQ0E7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtBREFKOztBQ0dFO0VBQ0UsYUFBQTtBREFKOztBQ0dFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QURBSjs7QUNHRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FEQUo7O0FDR0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBREFKOztBQ0dFO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9CQUFBO0FEQUo7O0FDR0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0FEQUo7O0FDR0UsVUFBQTtBQUNBO0VBQ0UseUNBQUE7RUFDQSw2Q0FBQTtBREFKOztBQ0dFLFlBQUE7QUFDQTtFQUNFLGlDQUFBO0VBQ0EsbUNBQUE7QURBSjs7QUNHRTtFQUNFLG1CQUFBO0FEQUo7O0FDR0Usb0JBQUE7QUFDQTtFQUNF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QUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFxNUJGOztBQWo1QkE7RUFDRSxjQUFBO0FBbzVCRjs7QUFqNUJBOztFQUVFLE9BQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQW81QkY7O0FBajVCQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQW81QkY7O0FBajVCQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQW81QkY7O0FBajVCQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQW81QkY7O0FBajVCQTtFQUNFLHlCQUFBO0FBbzVCRjs7QUFqNUJBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBbzVCRjs7QUFqNUJBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFvNUJGOztBQWo1QkE7RUFDRSxpQkFBQSxFQUFBLG9DQUFBO0VBQ0EsZ0JBQUE7QUFvNUJGOztBQWo1QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtBQW81QkY7O0FBajVCQTtFQUNFO0lBQUssdUJBQUE7RUFxNUJMO0VBcDVCQTtJQUFPLHlCQUFBO0VBdTVCUDtBQUNGO0FBR0Esb3pvRkFBb3pvRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vZGV0YWlsLWJvdXRpcXVlMic7XG5cbi5jb250YWluZXJfY2xpZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIG1heC13aWR0aDogMTAwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pbmZvcm1hdGlvbl9jYWRyZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTA4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5jb250ZW50X2NsaWVudCB7XG4gICAgcGFkZGluZzogMzBweDtcbn1cblxuLmluZm9ybWF0aW9uX2dyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDJmcjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5pbmZvcm1hdGlvbl9ncmlkX3R3byB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSAyZnIgO1xuICAgIGdhcDogMjBweDtcbn1cblxuLnNlY3Rpb25fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG5cbi5zZWN0aW9uX3RpdGxlIGg2IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzJjM2U1MDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi50aXRsZV9kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc2VjdGlvbl90aXRsZTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0YjZjYjcsICMxODI4NDgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnNlY3Rpb25fdGl0bGUyOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAyMXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRiNmNiNywgIzE4Mjg0OCk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ucHJvZmlsX3NlY3Rpb24ge1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDA0KSAwcHggMHB4IDBweCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5wcm9maWxfc2VjdGlvbl9mYWN0dXJlIHtcbiAgbWluLWhlaWdodDogNTB2aDtcbiAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XG59XG5cbi5pbmZvX3NlY3Rpb24ge1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDA0KSAwcHggMHB4IDBweCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5pbmZvX2dyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBnYXA6IDIwcHg7XG59XG5cbi5jaGFtcF9ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG5cbi5jaGFtcF9ncmlkX3RydWUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgICBncmlkLXJvdy1nYXA6IDBweDtcbiAgICBnYXA6IDIwcHg7XG4gIH1cblxuICAuY2hhbXBfaW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy9taW4td2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgLy9wYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0IC5sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjJweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6ICM5OTk7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbiAgXG4gIFxuICAuaW5wdXRfZm9jdXM6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4gIC5pbnB1dF9mb2N1czpmb2N1cyArIC5sYWJlbCB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB9XG5cblxuLnByb2ZpbGUtaW1nLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLnByb2ZpbGUtaW1nLXdyYXBwZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xufVxuXG4ucHJvZmlsZS1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnByb2ZpbGUtaW1nLXdyYXBwZXI6aG92ZXIgLm92ZXJsYXkge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY2FtZXJhLWljb24ge1xuICB3aWR0aDogMzBweDsgLyogYWp1c3RlIHNlbG9uIGxhIHRhaWxsZSB2b3VsdWUgKi9cbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4uaWNvbl9lZGl0IHtcbiAgbWFyZ2luLXRvcDogLTdweDtcbn1cblxuLmljb25fZWRpdCBpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5pbmZvcm1hdGlvbl9ncmlkIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuXG4gICAgLmluZm9ybWF0aW9uX2dyaWRfdHdvIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuICAgIFxuICAgIC5pbmZvX2dyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cbi5pbmZvX2l0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pbmZvX2xhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5pbmZvX3ZhbHVlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzJjM2U1MDtcbn1cblxuLmNvbnRhY3RfaW5mbyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvbnRhY3RfaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuICAgICAgICBcbi5jb250YWN0X2ljb24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6ICM0YjZjYjc7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGFncyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi50YWcge1xuICAgIGJhY2tncm91bmQ6ICNlM2YyZmQ7XG4gICAgY29sb3I6ICMxOTc2ZDI7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbiAgICAgICAgXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cbi8qIE1hc3F1ZXIgbCdpbnB1dCBjaGVja2JveCBvcmlnaW5hbCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIExlIMOCwqsgc2xpZGVyIMOCwrsgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwOyBcbiAgbGVmdDogMnB4OyBcbiAgcmlnaHQ6IDA7IFxuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vIGNvbnRlbnQ6IFwiXCI7XG4gIC8vIGhlaWdodDogMThweDsgXG4gIC8vIHdpZHRoOiAxOHB4O1xuICAvLyBsZWZ0OiAzcHg7IFxuICAvLyBib3R0b206IDNweDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC8vIHRyYW5zaXRpb246IC40cztcbiAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMXB4O1xuICB3aWR0aDogMTFweDtcbiAgbGVmdDogMnB4O1xuICBib3R0b206IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogUXVhbmQgbGUgY2hlY2tib3ggZXN0IGNvY2jDg8KpICovXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7IC8qIENvdWxldXIgYXUgY2hvaXggKi9cbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzcHgpO1xufVxuXG4uaW5wdXRfY3Vyc29yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbl9hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMjVweDtcbn1cblxuLmljb25fYXJyb3cgaSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi8qIFN0eWxlcyBwb3VyIGxlIHBvcHVwICovXG4ucG9wdXAtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ucG9wdXAtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5wb3B1cC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wb3B1cC1oZWFkZXIgaDQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jbG9zZS1idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9wdXAtZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi8vIEJ1dHRvbiBcblxuLmJ0bi1jYW5jZWwsIC5idG4tc3VibWl0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgcGFkZGluZzogNnB4IDI1cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWNhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkODAxMDE7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbn1cblxuLmJ0bi1zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjQUNDRUJDO1xuICBwYWRkaW5nOiA2cHggMjVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBuby1kcm9wO1xufVxuXG4uYnRuLXN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbn1cblxuLmVycm9yLXRleHQge1xuICBjb2xvcjogI2ZmNDQ0NDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmJ0bi1zdWJtaXQ6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjc7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5lcnJvci1tZXNzYWdlQXBpIHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IC0yMHB4O1xufVxuXG4uc3VjY2Vzcy1tZXNzYWdlQXBpIHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtMjBweDtcbn1cblxuLmVycm9yLW1lc3NhZ2VBcGkyIHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3VjY2Vzcy1tZXNzYWdlQXBpMiB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogIzA2NzJFNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lcnJvciB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogI2ZmMDAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNoYW1wX2lucHV0X2ludmVudGFpcmUge1xuICBkaXNwbGF5OiBmbGV4OyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG59XG4gIFxuLmNoYW1wX2lucHV0X2ludmVudGFpcmUgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogU3R5bGVzIGNvbW11bnMgcG91ciBsZXMgZGV1eCBjb21wb3NhbnRzICovXG4udGFibGUtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8vIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjA1KTtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDJweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAvLyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBcbiAgdGgsIHRkIHtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgLy8gdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgfVxuICBcbiAgdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuICB9XG4gIFxuICB0Ym9keSB0ciB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICB9XG4gIH1cbiAgXG4gIHRmb290IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmM2Y1O1xuICAgIFxuICAgIHRkIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzIxMjUyOTtcbiAgICB9XG4gIH1cbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zdGF0dXMtYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBcbiAgJi5kcmFmdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgfVxuICBcbiAgJi5zZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2NkO1xuICAgIGNvbG9yOiAjODU2NDA0O1xuICB9XG4gIFxuICAmLmFwcHJvdmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjNWUyO1xuICAgIGNvbG9yOiAjMDAwMGZmO1xuICB9XG4gIFxuICAmLnZhbGlkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVlNmQ1O1xuICAgIGNvbG9yOiAjMDA4MDAwO1xuICB9XG59XG5cbi5sb2FkaW5nLWluZGljYXRvciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIFxuICAuc3BpbiB7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxufVxuXG4uZW1wdHktc3RhdGUge1xuICBwYWRkaW5nOiA0MHB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIFxuICBpIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBjb2xvcjogI2NlZDRkYTtcbiAgfVxuICBcbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2RjMzU0NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjhmODtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLyogU3R5bGVzIHBvdXIgbGUgdGFibGVhdSBhdmVjIGhlYWRlciBldCBmb290ZXIgZml4ZXMgKi9cbi50YWJsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YWJsZS13cmFwcGVyIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnN0aWNreS1mb290ZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiAxMDtcbiAgYm94LXNoYWRvdzogMCAtMnB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xufVxuXG4uc3RpY2t5LWZvb3RlciB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBQb3VyIGwnZW4tdMODwqp0ZSBmaXhlICovXG50aGVhZCB0ciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiByZ2JhKDI3LCAzMSwgMzUsIDAuMDQpIDBweCAxcHggMHB4LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpIDBweCAxcHggMHB4IGluc2V0O1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi5sb2dvX2VudHJlcHJpc2Uge1xuICB3aWR0aDogNTBweDtcbiAgLy8gaGVpZ2h0OiA1MHB4O1xufVxuXG4ubG9nb19lbnRyZXByaXNlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYXJhMSB7XG4gIGZvbnQtc2l6ZTogNnB4O1xuICBtYXJnaW46IDA7XG59XG5cbmhyIHtcbiAgbWFyZ2luOiAzcHg7XG59XG5cbi50aXRyZSBoNiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLy8gLnRhYmxlIHtcbi8vICAgd2lkdGg6IDkzJTtcbi8vICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbi8vIH1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luOiA0cHggMDtcbiAgLy8gZm9udC1zaXplOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRhYmxlIC50aCwgLnRhYmxlIC50ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gZm9udC1zaXplOiA1cHg7XG59XG5cbi50YWJsZSAudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGFibGUgLnRmb290IC50ZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICB0YWJsZSB7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICBcbiAgdGFibGUge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIFxuICB0YWJsZSB0aCwgdGFibGUgdGQge1xuICAgICAgcGFkZGluZzogNXB4IDNweDtcbiAgfVxufVxuXG4vLyBidXR0b24gYW5udWxlclxuLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsIHtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8vIGJ1dHRvbiBhbm51bGVyIGhvdmVyXG4uYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG59XG5cbi8vIGJ1dHRvbiBham91dGVyIFxuLmJ0bl9ham91dGVyIC5idG5fc2F2ZSB7XG4gIHBhZGRpbmc6IDZweCAyMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vLyBidXR0b24gYWpvdXRlciBob3ZlclxuLmJ0bl9ham91dGVyIC5idG5fc2F2ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5pbmZvX3RpdHJlX2lucHV0X2J0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmdyaWRfY29sb25uZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gIGdhcDogMjBweDtcbn1cblxuLy8gLnNwaW5uZXItc21hbGwge1xuLy8gICB3aWR0aDogMjBweDtcbi8vICAgaGVpZ2h0OiAyMHB4O1xuLy8gICBtYXJnaW4tbGVmdDogMTBweDtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gfVxuXG4uc3Bpbm5lci1zbWFsbCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uZGl2MSB7IGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjsgfVxuLmRpdjIgeyBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7IH1cbi5kaXYzIHsgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0OyB9XG5cbi5zZWxlY3RlZC1yb3cge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDY3MkU0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmOGZmO1xufVxuXG4udGFiLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5mYWN0dXJlLWNvdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtaW4td2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmxvYWRpbmctb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxuICBcbiAgXG4gIC5sb2FkaW5nLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7IFxuICB9XG4gIFxuICAuc3Bpbm5lciB7XG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gIH1cblxuICAuY29udGFpbmVyX2Vycm9yX21lc3NhZ2Uge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAuaW5mb3JtYXRpb25fY2FkcmVfc2F2ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5zdWNjZXNzLW1lc3NhZ2VBcGkyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAvKiBDb250ZW5ldXIgZHUgdG9hc3QgKi9cbi50b2FzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjBweDtcbiAgcmlnaHQ6IDM1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi8qIEFqb3V0ZXogZGFucyB2b3RyZSBmaWNoaWVyIENTUyAqL1xuLnRvYXN0LW1lc3NhZ2Utd2FybmluZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2NkO1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZmZlZWJhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdlYjg3O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQUNDRUJDO1xuICBjb2xvcjogIzg1NjQwNDtcbiAgei1pbmRleDogMTAwMDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMSk7XG5cbiAgYW5pbWF0aW9uOiBmYWRlSW5PdXQgNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi50b2FzdC1tZXNzYWdlLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdlYjg3O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQUNDRUJDO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogZmFkZUluT3V0IDRzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuICBcbi8vdG9hc3Qgc3VjY2Vzc1xuLnRvYXN0LW1lc3NhZ2UtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRDhEQTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U3QjFCNjtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IGZhZGVJbk91dCA0cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbn1cblxuXG4gIC8vIEFqb3V0ZXIgbCdhbmltYXRpb24gcG91ciB0b3VzIGxlcyB0eXBlcyBkJ2FsZXJ0ZXNcbiAgLmFsZXJ0IHtcbiAgICAvLyAuLi4gc3R5bGVzIGV4aXN0YW50c1xuICAgIFxuICAgICYtd2FybmluZyB7XG4gICAgICBAZXh0ZW5kIC5hbGVydDtcbiAgICAgIC8vIC4uLiBzdHlsZXMgc3DDg8KpY2lmaXF1ZXNcbiAgICB9XG4gIH1cbiAgXG4gIC8qIEFuaW1hdGlvbiBwb3VyIGZhaXJlIGFwcGFyYcODwq50cmUgZXQgZGlzcGFyYcODwq50cmUgbGUgdG9hc3QgKi9cbiAgQGtleWZyYW1lcyBmYWRlSW5PdXQge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpOyAvKiBMZSB0b2FzdCBkaXNwYXJhw4PCrnQgYXZlYyB1biBsw4PCqWdlciBtb3V2ZW1lbnQgdmVycyBsZSBiYXMgKi9cbiAgICB9XG4gIH0gIFxuXG5cbi5lbXB0eS1wcmV2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIFxuICBpIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICBcbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLmNvbnRhaW5lcl9ib3V0aXF1ZV9hY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5pbmZvcm1hdGlvbl9ncmlkX3R3b19jb3BpZV9wcm9kdWl0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiAyMHB4O1xufVxuXG4vLyAuY29udGVudF9jb3BpZV9wcm9kdWl0IHtcbi8vICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgcGFkZGluZzogMjVweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbi8vICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcbi8vICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjAwNCkgMHB4IDBweCAwcHggMXB4O1xuLy8gICBib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gICBoZWlnaHQ6IDQwMHB4O1xuLy8gfVxuXG4uY29udGVudF9jb3BpZV9wcm9kdWl0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQwMHB4OyAvKiBIYXV0ZXVyIGZpeGUgcG91ciBsZSBjb250ZW5ldXIgcHJpbmNpcGFsICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcblxuICAvKiBTdHlsZSBwb3VyIGxhIGJhcnJlIGRlIGTDg8KpZmlsZW1lbnQgKi9cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAycHg7XG4gIH1cbiAgXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICNjMWMxYzE7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2E4YThhODtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi5zdGlja3ktdGl0bGUge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiAxMDA7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuLnRhYmxlLXNjcm9sbC1jb250YWluZXIge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIC8vIHBhZGRpbmc6IDEwcHg7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIgeyB3aWR0aDogMnB4OyB9XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgYmFja2dyb3VuZDogI2YxZjFmMTsgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogI2MxYzFjMTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgXG4gICAgJjpob3ZlciB7IGJhY2tncm91bmQ6ICNhOGE4YTg7IH1cbiAgfVxufVxuXG4uY29waWVfcHJvZHVpdF9kZXN0aW5hdGlvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wMDQpIDBweCAwcHggMHB4IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLyogU3R5bGUgZGUgbCdpbWFnZSBjaXJjdWxhaXJlICovXG4uaW1nUHJvZHVpdCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wMzIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWdQcm9kdWl0IGltZyB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cblxuLmltZ1Byb2R1aXQ6aG92ZXIgaW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBFZmZldCB6b29tIGF1IHN1cnZvbCAqL1xufVxuXG4uYmFycmUge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzZjtcbiAgICBtYXJnaW46IDBweCAxNXB4O1xufVxuXG4uaWNvbl9jb250ZW50IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbl9jb250ZW50IGkge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5pY29uX2RlbGV0ZSBpOmhvdmVyIHtcbiAgY29sb3I6ICNmYTJhMmE7XG4gIHRyYW5zaXRpb246IGFsbCAuNTtcbn1cblxuXG4uZGVsZXRlLWJvdXRpcXVlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBcbn1cblxuLmRlbGV0ZS1ib3V0aXF1ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzdhN2E3YWU3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEwcHg7XG4gIFxufVxuXG4uZGVsZXRlLWJvdXRpcXVlLWJ0bjpob3ZlcntcbiAgY29sb3I6ICNmYTJhMmE7XG59XG5cbi5idG4tY29uZmlybSxcbi5idG4tY2FuY2VsIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XG59XG5cbi5idG4tY29uZmlybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWNvbmZpcm06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI4M2YyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmJ0bi1jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOGM4O1xufVxuXG4uc3dpdGNoMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG4uYWRkLXRhc2sge1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01cHg7XG59XG5cbi50YWJsZS1zY3JvbGwtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogNjAwcHg7IC8qIG91IGxhIGhhdXRldXIgcXVlIHZvdXMgcHLDg8KpZsODwqlyZXogKi9cbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm1pbmktc3Bpbm5lciB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzNDk4ZGI7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59IiwiXG4vKiBGcm9tIFN2ZyAqLyBcbi5jeWJlci1jaGVja2JveCB7XG4gICAgLS1jaGVja2JveC1zaXplOiAxNXB4O1xuICAgIC0tY2hlY2tib3gtY29sb3I6ICMwNjcyRTQ7XG4gICAgLS1jaGVja2JveC1jaGVjay1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWNoZWNrYm94LWhvdmVyLWNvbG9yOiAjMDM2MGMzO1xuICAgIC0tY2hlY2tib3gtc3Bhcmstb2Zmc2V0OiAtMjBweDtcbiAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG4gIFxuICAuY3liZXItY2hlY2tib3ggaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5jeWJlci1jaGVja2JveF9fbWFyayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogdmFyKC0tY2hlY2tib3gtc2l6ZSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1jaGVja2JveC1zaXplKTtcbiAgfVxuICBcbiAgLmN5YmVyLWNoZWNrYm94X19ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWNoZWNrYm94LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgfVxuICBcbiAgLmN5YmVyLWNoZWNrYm94X19jaGVjayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBzdHJva2U6IHZhcigtLWNoZWNrYm94LWNoZWNrLWNvbG9yKTtcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICBmaWxsOiBub25lO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgfVxuICBcbiAgLmN5YmVyLWNoZWNrYm94X19lZmZlY3RzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IHZhcigtLWNoZWNrYm94LXNwYXJrLW9mZnNldCk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gIC5jeWJlci1jaGVja2JveF9fc3Bhcmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDJweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgfVxuICBcbiAgLyogSG92ZXIgKi9cbiAgLmN5YmVyLWNoZWNrYm94OmhvdmVyIC5jeWJlci1jaGVja2JveF9fYm94IHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNoZWNrYm94LWhvdmVyLWNvbG9yKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSg5MiwgMTAzLCAyNTUsIDAuMSk7XG4gIH1cbiAgXG4gIC8qIENoZWNrZWQgKi9cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLmN5YmVyLWNoZWNrYm94X19ib3gge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LWNvbG9yKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNoZWNrYm94LWNvbG9yKTtcbiAgfVxuICBcbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLmN5YmVyLWNoZWNrYm94X19jaGVjayB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICBcbiAgLyogU3BhcmsgQW5pbWF0aW9uICovXG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpjaGVja2VkICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5jeWJlci1jaGVja2JveF9fc3Bhcmsge1xuICAgIGFuaW1hdGlvbjogc3BhcmsgMC40cyBlYXNlLW91dDtcbiAgfVxuICBcbiAgLmN5YmVyLWNoZWNrYm94X19zcGFyazpudGgtY2hpbGQoMSkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHRyYW5zbGF0ZVgodmFyKC0tY2hlY2tib3gtc3Bhcmstb2Zmc2V0KSk7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94X19zcGFyazpudGgtY2hpbGQoMikge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVYKHZhcigtLWNoZWNrYm94LXNwYXJrLW9mZnNldCkpO1xuICB9XG4gIC5jeWJlci1jaGVja2JveF9fc3Bhcms6bnRoLWNoaWxkKDMpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZVgodmFyKC0tY2hlY2tib3gtc3Bhcmstb2Zmc2V0KSk7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94X19zcGFyazpudGgtY2hpbGQoNCkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZykgdHJhbnNsYXRlWCh2YXIoLS1jaGVja2JveC1zcGFyay1vZmZzZXQpKTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzcGFyayB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDBkZWcpIHRyYW5zbGF0ZVgodmFyKC0tY2hlY2tib3gtc3Bhcmstb2Zmc2V0KSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKVxuICAgICAgICB0cmFuc2xhdGVYKGNhbGModmFyKC0tY2hlY2tib3gtc3Bhcmstb2Zmc2V0KSAqIDEuNSkpO1xuICAgIH1cbiAgfVxuICBcbiAgLyogQWN0aXZlICovXG4gIC5jeWJlci1jaGVja2JveDphY3RpdmUgLmN5YmVyLWNoZWNrYm94X19ib3gge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgfVxuICBcbiAgLyogRm9jdXMgKi9cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmZvY3VzICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5jeWJlci1jaGVja2JveF9fYm94IHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSg5MiwgMTAzLCAyNTUsIDAuMik7XG4gIH1cbiAgXG4gIC5jeWJlci1jaGVja2JveF9fcGFydGljbGVzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IC01MCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gIC5jeWJlci1jaGVja2JveF9fcGFydGljbGVzIGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogM3B4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC1jb2xvcik7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLyogUGFydGljbGUgYW5pbWF0aW9ucyBmb3IgY2hlY2sgKi9cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTEge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtMSAwLjRzIGVhc2Utb3V0IGZvcndhcmRzO1xuICB9XG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpjaGVja2VkICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS0yIHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLTIgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjFzO1xuICB9XG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpjaGVja2VkICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS0zIHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLTMgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjE1cztcbiAgfVxuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIC5jeWJlci1jaGVja2JveF9fbWFyayAucGFydGljbGUtNCB7XG4gICAgYW5pbWF0aW9uOiBwYXJ0aWNsZS00IDAuNHMgZWFzZS1vdXQgZm9yd2FyZHMgMC4wNXM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTUge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtNSAwLjRzIGVhc2Utb3V0IGZvcndhcmRzIDAuMTJzO1xuICB9XG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpjaGVja2VkICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS02IHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLTYgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjA4cztcbiAgfVxuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCArIC5jeWJlci1jaGVja2JveF9fbWFyayAucGFydGljbGUtNyB7XG4gICAgYW5pbWF0aW9uOiBwYXJ0aWNsZS03IDAuNHMgZWFzZS1vdXQgZm9yd2FyZHMgMC4xOHM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTgge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtOCAwLjRzIGVhc2Utb3V0IGZvcndhcmRzIDAuMTVzO1xuICB9XG4gIFxuICAvKiBQYXJ0aWNsZSBhbmltYXRpb25zIGZvciB1bmNoZWNrICovXG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpub3QoOmNoZWNrZWQpICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS0xIHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLW91dC0xIDAuNHMgZWFzZS1vdXQgZm9yd2FyZHM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0Om5vdCg6Y2hlY2tlZCkgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTIge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtb3V0LTIgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjFzO1xuICB9XG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpub3QoOmNoZWNrZWQpICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS0zIHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLW91dC0zIDAuNHMgZWFzZS1vdXQgZm9yd2FyZHMgMC4xNXM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0Om5vdCg6Y2hlY2tlZCkgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTQge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtb3V0LTQgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjA1cztcbiAgfVxuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6bm90KDpjaGVja2VkKSArIC5jeWJlci1jaGVja2JveF9fbWFyayAucGFydGljbGUtNSB7XG4gICAgYW5pbWF0aW9uOiBwYXJ0aWNsZS1vdXQtNSAwLjRzIGVhc2Utb3V0IGZvcndhcmRzIDAuMTJzO1xuICB9XG4gIC5jeWJlci1jaGVja2JveCBpbnB1dDpub3QoOmNoZWNrZWQpICsgLmN5YmVyLWNoZWNrYm94X19tYXJrIC5wYXJ0aWNsZS02IHtcbiAgICBhbmltYXRpb246IHBhcnRpY2xlLW91dC02IDAuNHMgZWFzZS1vdXQgZm9yd2FyZHMgMC4wOHM7XG4gIH1cbiAgLmN5YmVyLWNoZWNrYm94IGlucHV0Om5vdCg6Y2hlY2tlZCkgKyAuY3liZXItY2hlY2tib3hfX21hcmsgLnBhcnRpY2xlLTcge1xuICAgIGFuaW1hdGlvbjogcGFydGljbGUtb3V0LTcgMC40cyBlYXNlLW91dCBmb3J3YXJkcyAwLjE4cztcbiAgfVxuICAuY3liZXItY2hlY2tib3ggaW5wdXQ6bm90KDpjaGVja2VkKSArIC5jeWJlci1jaGVja2JveF9fbWFyayAucGFydGljbGUtOCB7XG4gICAgYW5pbWF0aW9uOiBwYXJ0aWNsZS1vdXQtOCAwLjRzIGVhc2Utb3V0IGZvcndhcmRzIDAuMTVzO1xuICB9XG4gIFxuICAvKiBQYXJ0aWNsZSBrZXlmcmFtZXMgZm9yIGNoZWNrICovXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtMSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjBweCwgLTIwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtMiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAtMjBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS0zIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIDIwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtNCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjBweCwgMjBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS01IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMHB4LCAwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtNiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtNyB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0zMHB4KSBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHBhcnRpY2xlLTgge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAzMHB4KSBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICAvKiBQYXJ0aWNsZSBrZXlmcmFtZXMgZm9yIHVuY2hlY2sgKi9cbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS1vdXQtMSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwcHgsIC0yMHB4KSBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtb3V0LTIge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIC0yMHB4KSBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDApO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcGFydGljbGUtb3V0LTMge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIDIwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS1vdXQtNCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwcHgsIDIwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS1vdXQtNSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwcHgsIDBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHBhcnRpY2xlLW91dC02IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMHB4LCAwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwYXJ0aWNsZS1vdXQtNyB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMzBweCkgc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgwKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHBhcnRpY2xlLW91dC04IHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDMwcHgpIHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuXG4gIC50cmFuc2Zlci1tb2RhbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIFxuICAgIC5tb2RhbC1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIFxuICAgICAgICBoNSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwNjcyRTQ7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5ib3V0aXF1ZS1saXN0IHtcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIFxuICAgICAgICAuYm91dGlxdWUtaXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubm8tcmVzdWx0cyB7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNvcHktbW9kYWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIFxuICAgIC5tb2RhbC1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIFxuICAgICAgICBoNSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwNjcyRTQ7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5ib3V0aXF1ZS1saXN0IHtcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIFxuICAgICAgICAuYm91dGlxdWUtaXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubm8tcmVzdWx0cyB7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNvbmZpcm1hdGlvbi1tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xuXG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgICBoNCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICB9XG4gIH1cblxuICAubW9kYWwtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogMXJlbTtcblxuICAgIC5idG4tY2FuY2VsIHtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLWNvbmZpcm0ge1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDY3MkU0O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzA1NjBiNztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmRlc2NyaXB0aW9uLWNlbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIFxuICAmOmhvdmVyIC5kZXNjcmlwdGlvbi10b29sdGlwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4uZGVzY3JpcHRpb24tdG9vbHRpcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMzAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLy8gLmltZ1Byb2R1aXQgaW1nIHtcbi8vICAgd2lkdGg6IDUwcHg7XG4vLyAgIGhlaWdodDogNTBweDtcbi8vICAgb2JqZWN0LWZpdDogY292ZXI7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgXG4vLyAgICY6aG92ZXIge1xuLy8gICAgIHRyYW5zZm9ybTogc2NhbGUoMS44KTtcbi8vICAgICB6LWluZGV4OiAxMDtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIH1cbi8vIH1cblxuLm1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgei1pbmRleDogMTAwMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxuICAubW9kYWwtY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWF4LXdpZHRoOiAyMCU7XG4gICAgbWF4LWhlaWdodDogODAlO1xuICAgIFxuICAgIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiA3MHZoO1xuICAgIH1cbiAgfVxufVxuXG4uYmFkZ2Utc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODAwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMnB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmJhZGdlLWRhbmdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMnB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuXG4uY29uZmlybWF0aW9uLW1vZGFsLWF2ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTA1MDtcbn1cblxuLmNvbmZpcm1hdGlvbi1tb2RhbC1hdmVyIC5tb2RhbC1jb250ZW50LWF2ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLm1vZGFsLWFjdGlvbnMtYXZlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5idG4tY29uZmlybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIEFqb3V0ZXIgY2VzIHN0eWxlcyAqL1xuLmRpc2FibGVkLWNvbnRlbnQge1xuICBvcGFjaXR5OiAwLjc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gIC50YWJsZS1zY3JvbGwtY29udGFpbmVyIHtcbiAgICAuY3liZXItY2hlY2tib3gge1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG4gICAgXG4gICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuICAgIFxuICAgIC5pbWdQcm9kdWl0IGltZyB7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gLmFsZXJ0LXdhcm5pbmcge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOGUxO1xuLy8gICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNmZjk4MDA7XG4vLyAgIGNvbG9yOiAjZmY5ODAwO1xuLy8gICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgZm9udC13ZWlnaHQ6IDUwMDtcbi8vIH1cblxuLyogU3R5bGVzIHBvdXIgbCdpY8ODwrRuZSBkJ8ODwql0YXQgKi9cbi5ib3V0aXF1ZS1zdGF0dXMtaWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBjb2xvcjogI2ZmOTgwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLyogU3R5bGUgcG91ciBsZXMgYm91dGlxdWVzIGTDg8Kpc2FjdGl2w4PCqWVzICovXG4uZGlzYWJsZWQtYm91dGlxdWUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIE9wdGlvbm5lbCA6IGFqb3V0ZXIgdW4gZWZmZXQgYXUgc3Vydm9sICovXG4uYm91dGlxdWUtaXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLyogRMODwqlzYWN0aXZlciBsZSBjbGljIHBvdXIgbGVzIGJvdXRpcXVlcyBkw4PCqXNhY3RpdsODwqllcyAqL1xuLmRpc2FibGVkLWJvdXRpcXVlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi8qIFLDg8KpdGFibGlyIGxlIGNsaWMgdW5pcXVlbWVudCBzdXIgbCdpY8ODwrRuZSAqL1xuLmRpc2FibGVkLWJvdXRpcXVlIC5ib3V0aXF1ZS1zdGF0dXMtaWNvbiB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgY3Vyc29yOiBoZWxwO1xufVxuXG4vLyAuaW5wdXRTZWFyY2gge1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICB0b3A6IC03cHg7XG4vLyAgICAgd2lkdGg6IDI4MHB4O1xuLy8gICAgIGhlaWdodDogNDBweDtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuLy8gICAgIC8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4vLyAgICAgcGFkZGluZzogMCAxNXB4O1xuLy8gICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuLy8gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcblxuLy8gICAgICY6aG92ZXIge1xuLy8gICAgICAgICBib3JkZXItY29sb3I6ICMwNjcyRTQ7XG4vLyAgICAgfVxuXG4vLyAgICAgaW5wdXQge1xuLy8gICAgICAgICBmbGV4OiAxO1xuLy8gICAgICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgICAgIGJvcmRlcjogbm9uZTtcbi8vICAgICAgICAgb3V0bGluZTogbm9uZTtcbi8vICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICAgICAgY29sb3I6ICMzMzM7XG4vLyAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcblxuLy8gICAgICAgICAmOjpwbGFjZWhvbGRlciB7XG4vLyAgICAgICAgICAgICBjb2xvcjogI2FhYTtcbi8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIGkge1xuLy8gICAgICAgICBmb250LXNpemU6IDE4cHg7XG4vLyAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICAgICAgY29sb3I6ICNhYWE7XG4vLyAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuXG4vLyAgICAgICAgICY6aG92ZXIge1xuLy8gICAgICAgICAgICAgY29sb3I6ICMwNjcyRTQ7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAucmVkLWljb24ge1xuLy8gICAgICAgICBjb2xvcjogcmVkO1xuLy8gICAgIH1cbi8vIH1cbiAgXG4vLyAuaW5wdXRTZWFyY2ggaW5wdXQge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gfVxuICBcbi8vIC5pbnB1dFNlYXJjaCBpIHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgcmlnaHQ6IDA7XG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuLy8gICAgIGZvbnQtc2l6ZTogMTdweDtcbi8vIH1cblxuLnRyaWVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7IFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwOyBcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7IFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4OyBcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDsgXG4gIHBhZGRpbmc6IDUuNXB4IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC03cHg7XG4gIGxlZnQ6IDBweDtcbn1cblxuLy8gLmlucHV0U2VhcmNoIHtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgdG9wOiAtN3B4O1xuLy8gICAgIHdpZHRoOiAzMTBweDtcbi8vICAgICBoZWlnaHQ6IDQwcHg7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbi8vICAgICAvLyBib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gICAgIHBhZGRpbmc6IDAgMTVweDtcbi8vICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbi8vICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuLy8gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG5cbi8vICAgICAmOmhvdmVyIHtcbi8vICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDY3MkU0O1xuLy8gICAgIH1cblxuLy8gICAgIGlucHV0IHtcbi8vICAgICAgICAgZmxleDogMTtcbi8vICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgICBib3JkZXI6IG5vbmU7XG4vLyAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgICAgICAgIGNvbG9yOiAjMzMzO1xuLy8gICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cbi8vICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xuLy8gICAgICAgICAgICAgY29sb3I6ICNhYWE7XG4vLyAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICBpIHtcbi8vICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuLy8gICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgICAgIGNvbG9yOiAjYWFhO1xuLy8gICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcblxuLy8gICAgICAgICAmOmhvdmVyIHtcbi8vICAgICAgICAgICAgIGNvbG9yOiAjMDY3MkU0O1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgLnJlZC1pY29uIHtcbi8vICAgICAgICAgY29sb3I6IHJlZDtcbi8vICAgICB9XG4vLyB9XG4gIFxuLy8gLmlucHV0U2VhcmNoIGlucHV0IHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vIH1cbiAgXG4vLyAuaW5wdXRTZWFyY2ggaSB7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHJpZ2h0OiAwO1xuLy8gICAgIG1hcmdpbi1yaWdodDogMTVweDtcbi8vICAgICBmb250LXNpemU6IDE3cHg7XG4vLyB9XG5cbi8vIC50cmllciB7XG4vLyAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkOyBcbi8vICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDsgXG4vLyAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkOyBcbi8vICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDsgXG4vLyAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IFxuLy8gICBwYWRkaW5nOiA1LjVweCAxMHB4O1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgdG9wOiAtN3B4O1xuLy8gICBsZWZ0OiAwcHg7XG4vLyB9XG5cblxuLnRhZ3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyBwYWRkaW5nOiA1cHggNXB4IDVweCAzNXB4O1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8vIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4udGFnIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgcGFkZGluZzogMnB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luOiAycHggNHB4IDJweCAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50YWcgaSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlucHV0U2VhcmNoIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmbGV4OiAxO1xuICAvLyBtaW4td2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiA4cHggMDtcbn1cblxuLmZpbHRlci1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5maWx0ZXItc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5maWx0ZXItc2VjdGlvbiBoNCB7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuLmZpbHRlci1zZWN0aW9uIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZmlsdGVyLXNlY3Rpb24gbGkge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmZpbHRlci1zZWN0aW9uIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbn1cblxudGgge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ucmVtb3ZlLWNoaXAge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICY6aG92ZXIge1xuICAgICAgY29sb3I6ICNmZjQ0NDQ7XG4gIH1cbn1cblxuLmZpbHRlci1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMSk7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuXG4gIC5maWx0ZXItb3B0aW9uIHtcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuZmlsdGVyLXNlbGVjdCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vKiBTdHlsZXMgcG91ciBsZSBtb2RhbCBkZSBzdXBwcmVzc2lvbiAqL1xuLmRzLW1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uZHMtbW9kYWwtY29udGVudF9faGVhZGVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5kcy1tb2RhbC1jb250ZW50X190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZHMtaWNvbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNHB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmRzLW1vZGFsLWJvZHkge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBjb2xvcjogIzQ0NDtcbn1cblxuLyogQm91dG9ucyAqL1xuLmRzLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG59XG5cbi5kcy1idXR0b24tLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZHMtYnV0dG9uLS1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xufVxuXG4uZHMtYnV0dG9uLS1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQ0NDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRzLWJ1dHRvbi0tZXJyb3I6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQzMzMzO1xufVxuXG4uZHMtYnV0dG9uW2Rpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmRzLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmFjdHVyZS1jb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWluLXdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZmFjdHVyZS1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlENDIxIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi8qIFBvdXIgYWxpZ25lciBjb3JyZWN0ZW1lbnQgbGVzIMODwqlsw4PCqW1lbnRzICovXG4uZHJhZ2dhYmxlLWl0ZW0gcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLy9pY2lcblxuLmNvbmZpcm1hdGlvbi1tb2RhbC1hdmVyQiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDUwO1xufVxuXG4uY29uZmlybWF0aW9uLW1vZGFsLWF2ZXJCIC5tb2RhbC1jb250ZW50LWF2ZXJCIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB3aWR0aDogMzAwcHg7XG4gIGNvbG9yOiAjMDAwOyAvKiBwb3VyIHMnYXNzdXJlciBxdWUgbGUgdGV4dGUgZXN0IHZpc2libGUgKi9cbn1cblxuXG4ubW9kYWwtYWN0aW9ucy1hdmVyQiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5idG4tY29uZmlybUIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5342:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/lastValueFrom.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lastValueFrom: () => (/* binding */ lastValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/EmptyError */ 93335);

function lastValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    let _hasValue = false;
    let _value;
    source.subscribe({
      next: value => {
        _value = value;
        _hasValue = true;
      },
      error: reject,
      complete: () => {
        if (_hasValue) {
          resolve(_value);
        } else if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__.EmptyError());
        }
      }
    });
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_detail-boutique_detail-boutique_component_ts.js.map