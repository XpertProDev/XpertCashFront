"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_produits_list-produit_list-produit_component_ts"],{

/***/ 72789:
/*!****************************************************************************!*\
  !*** ./src/app/admin-page/produits/list-produit/list-produit.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListProduitComponent: () => (/* binding */ ListProduitComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var ngx_barcode6__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-barcode6 */ 23701);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _SERVICES_categorie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SERVICES/categorie.service */ 49293);
/* harmony import */ var _SERVICES_unite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SERVICES/unite.service */ 9599);
/* harmony import */ var _SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SERVICES/produit.service */ 66375);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SERVICES/users.service */ 88026);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 35255);

















const _c0 = () => ({
  standalone: true
});
const _c1 = a0 => ({
  "error": a0
});
function ListProduitComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79)(1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Connexion en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function ListProduitComponent_i_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListProduitComponent_i_28_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.toggleEditing());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ListProduitComponent_i_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListProduitComponent_i_29_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.toggleEditing());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ListProduitComponent_div_35_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Le nom produit est vide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ListProduitComponent_div_35_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Le nom doit avoir au moins 2 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ListProduitComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ListProduitComponent_div_35_span_1_Template, 2, 0, "span", 70)(2, ListProduitComponent_div_35_span_2_Template, 2, 0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.f["nom"].errors == null ? null : ctx_r2.f["nom"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.f["nom"].errors == null ? null : ctx_r2.f["nom"].errors["minlength"]);
  }
}
function ListProduitComponent_mat_option_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r5.nom, " ");
  }
}
function ListProduitComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Le prix de vente est vide. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ListProduitComponent_mat_option_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const optionUnite_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", optionUnite_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", optionUnite_r6.nom, " ");
  }
}
function ListProduitComponent_div_104_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Le code barre doit avoir au moins 8 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ListProduitComponent_div_104_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Le code barre ne doit pas d\u00E9passer 13 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ListProduitComponent_div_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ListProduitComponent_div_104_span_1_Template, 2, 0, "span", 70)(2, ListProduitComponent_div_104_span_2_Template, 2, 0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.f["codeBare"].errors == null ? null : ctx_r2.f["codeBare"].errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.f["codeBare"].errors == null ? null : ctx_r2.f["codeBare"].errors["maxlength"]);
  }
}
function ListProduitComponent_div_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ngx-barcode6", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bc-value", ctx_r2.f["codeBare"].value)("bc-line-color", "#000000")("bc-width", 1)("bc-height", 40)("bc-font-size", 12)("bc-display-value", true);
  }
}
function ListProduitComponent_div_120_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Le alert seuil est vide. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ListProduitComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 88)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Seuil d'alerte");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ListProduitComponent_div_120_div_5_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "En stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.f["seuilAlert"].touched && ctx_r2.f["seuilAlert"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r2.getBoutiqueQuantity());
  }
}
function ListProduitComponent_p_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Taille : 2 Mo max");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ListProduitComponent_p_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
  }
}
function ListProduitComponent_button_130_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListProduitComponent_button_130_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.clearImage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ListProduitComponent_div_131_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Choisir un fichier");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ListProduitComponent_div_131_Template_input_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ListProduitComponent_div_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessage, " ");
  }
}
function ListProduitComponent_div_139_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 100)(1, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListProduitComponent_div_139_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.submitUpdateForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Modifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ListProduitComponent_div_140_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 102)(1, "div", 103)(2, "div", 104)(3, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListProduitComponent_div_140_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c1, ctx_r2.popupData.type === "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r2.popupData.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.popupData.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.popupData.message);
  }
}
function ListProduitComponent_div_141_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Le nom doit avoir au moins 3 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ListProduitComponent_div_141_div_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Le nom ne doit pas d\u00E9passer 20 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ListProduitComponent_div_141_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ListProduitComponent_div_141_div_13_span_1_Template, 2, 0, "span", 70)(2, ListProduitComponent_div_141_div_13_span_2_Template, 2, 0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.c["categoryName"].errors == null ? null : ctx_r2.c["categoryName"].errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.c["categoryName"].errors == null ? null : ctx_r2.c["categoryName"].errors["maxlength"]);
  }
}
function ListProduitComponent_div_141_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessageCategory, " ");
  }
}
function ListProduitComponent_div_141_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r2.apiMessageType === "success" ? "assets/img/succcccc.png" : "assets/img/error.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.messageAPI);
  }
}
function ListProduitComponent_div_141_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 108)(1, "div", 109)(2, "div", 110)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Cr\u00E9er une cat\u00E9gorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListProduitComponent_div_141_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.closePopupCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "form", 112)(8, "div", 113)(9, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "label", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Nom cat\u00E9gorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ListProduitComponent_div_141_div_13_Template, 3, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ListProduitComponent_div_141_div_14_Template, 2, 1, "div", 117)(15, ListProduitComponent_div_141_div_15_Template, 4, 2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 119)(17, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListProduitComponent_div_141_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.closePopupCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListProduitComponent_div_141_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.submitFormCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Ajouter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r2.ajouteCategoryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.c["categoryName"].touched && ctx_r2.c["categoryName"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.errorMessageCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.messageAPI);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx_r2.ajouteCategoryForm.valid ? "#0672E4" : "#0671e434");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.ajouteCategoryForm.invalid);
  }
}
function ListProduitComponent_div_142_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Le nom doit avoir au moins 2 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ListProduitComponent_div_142_div_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Le nom ne doit pas d\u00E9passer 20 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ListProduitComponent_div_142_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ListProduitComponent_div_142_div_13_span_1_Template, 2, 0, "span", 70)(2, ListProduitComponent_div_142_div_13_span_2_Template, 2, 0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.u["unityName"].errors == null ? null : ctx_r2.u["unityName"].errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.u["unityName"].errors == null ? null : ctx_r2.u["unityName"].errors["maxlength"]);
  }
}
function ListProduitComponent_div_142_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessageUnity, " ");
  }
}
function ListProduitComponent_div_142_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r2.apiMessageType === "success" ? "assets/img/succcccc.png" : "assets/img/error.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.messageAPI);
  }
}
function ListProduitComponent_div_142_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 108)(1, "div", 109)(2, "div", 110)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Cr\u00E9er une unit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListProduitComponent_div_142_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.closePopupUnit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "form", 112)(8, "div", 113)(9, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "label", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Nom unit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ListProduitComponent_div_142_div_13_Template, 3, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ListProduitComponent_div_142_div_14_Template, 2, 1, "div", 117)(15, ListProduitComponent_div_142_div_15_Template, 4, 2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 119)(17, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListProduitComponent_div_142_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.closePopupUnit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListProduitComponent_div_142_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.submitFormUnity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Ajouter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r2.ajouteUniteForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.u["unityName"].touched && ctx_r2.u["unityName"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.errorMessageUnity);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.messageAPI);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx_r2.ajouteUniteForm.valid ? "#0672E4" : "#0671e434");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.ajouteUniteForm.invalid);
  }
}
class ListProduitComponent {
  showPopupMessage(data) {
    this.popupData = data;
    this.showPopup = true;
  }
  // Méthode pour fermer le popup
  closePopup() {
    this.showPopup = false;
    this.router.navigate(['/produit']);
  }
  // Getter pour faciliter l'accès aux contrôles dans le template
  get c() {
    return this.ajouteCategoryForm.controls;
  }
  get u() {
    return this.ajouteUniteForm.controls;
  }
  get f() {
    return this.modifierProduitForm.controls;
  }
  constructor(
  // private sharedDataService: SharedDataService,
  categorieService, uniteMesureService, produitService, fb, router, route, usersService) {
    this.categorieService = categorieService;
    this.uniteMesureService = uniteMesureService;
    this.produitService = produitService;
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.usersService = usersService;
    this.boutiqueNames = [];
    this.selectedBoutique = null;
    this.previousSelectedBoutique = null;
    this.boutiqueActuelle = "Toutes les boutiques";
    this.boutiques = [];
    this.isChecked = true;
    this.allBoutiqueNames = [];
    this.boutiqueName = '';
    this.boutiqueId = 1;
    this.messageAPI = '';
    this.apiMessageType = '';
    this.errorMessage = '';
    this.errorMessageCategory = '';
    this.errorMessageUnity = '';
    this.popupTitle = '';
    this.popupMessage = '';
    this.popupImage = '';
    this.popupType = 'success';
    this.imagePopup = null;
    this.nomEntreprise = '';
    this.adresseEntreprise = '';
    this.logoEntreprise = '';
    // produitForm: FormGroup;
    this.imageFile = null;
    this.isLoading = false;
    // Variable pour gérer l'affichage du popup
    this.showPopup = false;
    // Gestion de l'image
    this.urllink = "assets/img/appareil.jpg";
    this.newPhotoUrl = null;
    this.backendUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imgUrl;
    this.selectedFile = null;
    this.selectedBoutiqueId = null;
    // Variable regroupant toutes les informations du popup
    this.popupData = {
      title: '',
      message: '',
      image: '',
      type: 'success'
    };
    this.showBarcode = false;
    this.showPopupCategory = false;
    this.showPopupUnit = false;
    this.isEditing = false;
    //////// FOCUS CATEGORY
    this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
    this.uniteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
    // Produit 
    this.produit = {
      id: 0,
      nom: '',
      prixVente: 0,
      description: '',
      codeGenerique: '',
      prixAchat: 0,
      quantite: 0,
      seuilAlert: 0,
      categorieId: null,
      uniteId: null,
      codeBare: '',
      photo: '',
      enStock: false,
      boutiqueId: null
      // Facultatif : nomCategorie, nomUnite, createdAt
    };
    this.options = []; // Liste des catégories récupérées
    this.optionsUnite = []; // Liste des unites récupérées
    this.filteredOptions = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
    this.filteredNomUnite = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
    // POUR UNITE
    this.UniterControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
    this.showCategoryCreation = false;
    this.showUniteCreation = false;
  }
  ngOnInit() {
    // this.getProduit();
    // this.getPartageNameBoutique();
    // this.getPartageIdBoutique();
    this.getFiltrageCategoriesUnites();
    this.getModifierProduitForm();
    this.getAjouteCategoryForm();
    this.getAjouteUniteForm();
    this.getAjouteCategoryFormCategoryName();
    this.getAjouteCategoryFormUnityName();
    this.getModifierProduitFormCodeBare();
    this.modifierProduitForm.disable();
    this.myControl.disable();
    this.uniteControl.disable();
    this.route.queryParams.subscribe(params => {
      this.selectedBoutiqueId = params['boutiqueId'] ? +params['boutiqueId'] : null;
      this.getProduit();
    });
  }
  // Exemple d'utilisation lors d'une réponse du backend
  onResponseFromBackend(response) {
    // Par exemple, si response contient { message, type } et que vous souhaitez afficher une image par défaut
    const defaultImage = response.type === 'success' ? 'assets/img/succes.png' : 'assets/img/error.png';
    this.showPopupMessage({
      title: response.type === 'success' ? 'Succès' : 'Erreur',
      message: response.message,
      image: defaultImage,
      type: response.type
    });
  }
  onToggleChange(event) {
    // event.target permet d’accéder au checkbox
    const checkbox = event.target;
    console.log('isChecked:', checkbox.checked);
    // Faites ce que vous voulez ici avec la valeur
  }
  clearImage() {
    this.newPhotoUrl = null;
    this.imageFile = null;
  }
  // Dans list-produit.component.ts
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const file = input.files[0]; // Récupère le fichier sélectionné
      // Vérification de la taille du fichier (2 Mo = 2 * 1024 * 1024 octets)
      const maxSize = 2 * 1024 * 1024;
      if (file.size > maxSize) {
        this.errorMessage = 'Le fichier est trop volumineux. Veuillez choisir un fichier de moins de 2 Mo.';
        this.selectedFile = null;
        this.imageFile = null; // Réinitialise l'image si le fichier est trop grand
        this.newPhotoUrl = null;
        return;
      }
      // Si le fichier est correct, on continue
      this.errorMessage = '';
      this.selectedFile = file;
      this.imageFile = file; // ✅ Associe le fichier sélectionné à imageFile
      const reader = new FileReader();
      reader.onload = e => {
        this.newPhotoUrl = e.target?.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
  getImageUrl(produit) {
    if (produit.photo) {
      return this.apiUrl + produit.photo; // Si le produit a une image, on la récupère
    } else if (produit.nom) {
      const firstLetter = produit.nom.charAt(0).toUpperCase(); // Si pas d'image, on prend la première lettre du nom du produit
      return `assets/img/letters/${firstLetter}.png`; // Assurez-vous d'avoir une image pour chaque lettre dans le dossier "assets/img/letters/"
    } else {
      return 'assets/img/appareil.jpg'; // Image par défaut si aucune image et nom
    }
  }
  // getPartageNameBoutique() {
  //   // Partage de donner de user
  //   this.sharedDataService.boutiqueName$.subscribe(name => {
  //     console.log("AddProduitComponent - Nom boutique récupéré :", name);
  //     this.boutiqueName = name;
  //   });
  // }
  // Méthodes pour ouvrir/fermer le popup
  openPopupCategory() {
    this.showPopupCategory = true;
    this.ajouteCategoryForm.reset();
    this.errorMessageCategory = '';
    this.messageAPI = '';
  }
  closePopupCategory() {
    this.showPopupCategory = false;
  }
  // Méthodes pour ouvrir/fermer le popup
  openPopupUnit() {
    this.showPopupUnit = true;
    this.ajouteUniteForm.reset();
    this.errorMessageUnity = '';
    this.messageAPI = '';
  }
  closePopupUnit() {
    this.showPopupUnit = false;
  }
  getFiltrageCategoriesUnites() {
    const token = this.usersService.getValidAccessToken(); // ✅ Centralisation de l’accès au token
    if (!token) {
      console.error('Aucun token trouvé !');
      return;
    }
    // 🟢 Filtrage des catégories
    this.categorieService.getCategories().subscribe({
      next: categories => {
        console.log('Catégories reçues depuis l\'API :', categories);
        this.options = categories;
        this.filteredOptions = this.myControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(value => value ? typeof value === 'string' ? value : value.nom : ''), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(name => name ? this._filter(name) : this.options.slice()));
      },
      error: error => {
        console.error('Erreur lors de la récupération des catégories :', error);
      }
    });
    // 🟢 Filtrage des unités de mesure
    this.uniteMesureService.getUniteMesure().subscribe({
      next: uniteMesures => {
        console.log('Unités de mesure reçues depuis l\'API :', uniteMesures);
        this.optionsUnite = uniteMesures;
        this.filteredNomUnite = this.uniteControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(value => value ? typeof value === 'string' ? value : value.nom : ''), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(name => name ? this._filterUnite(name) : this.optionsUnite.slice()));
      },
      error: error => {
        console.error('Erreur lors de la récupération des unités de mesure :', error);
      }
    });
  }
  getModifierProduitForm() {
    this.modifierProduitForm = this.fb.group({
      nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2)]],
      prixVente: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      prixAchat: [''],
      quantite: [''],
      seuilAlert: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      description: [''],
      codeBare: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(18)]],
      categorieId: [''],
      uniteId: ['']
    });
  }
  // getPartageIdBoutique() {
  //   // Abonnement pour récupérer l'ID de la boutique active
  //   this.sharedDataService.boutiqueId$.subscribe(id => {
  //     this.boutiqueId = id;
  //   });
  // }
  getAjouteCategoryForm() {
    // Formulaire pour ajouter une catégorie
    this.ajouteCategoryForm = this.fb.group({
      categoryName: ['', [/*Validators.required,*/_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(20)]]
    });
  }
  getAjouteUniteForm() {
    // Formulaire pour ajouter une unite
    this.ajouteUniteForm = this.fb.group({
      unityName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(20)]]
    });
  }
  getAjouteCategoryFormCategoryName() {
    // À chaque changement de valeur dans le champ "categoryName", on réinitialise l'erreur
    this.ajouteCategoryForm.get('categoryName')?.valueChanges.subscribe(() => {
      this.errorMessageCategory = '';
      this.messageAPI = '';
      this.apiMessageType = '';
    });
  }
  getAjouteCategoryFormUnityName() {
    // À chaque changement de valeur dans le champ "uniteName", on réinitialise l'erreur
    this.ajouteUniteForm.get('unityName')?.valueChanges.subscribe(() => {
      this.errorMessageUnity = '';
      this.messageAPI = '';
      this.apiMessageType = '';
    });
  }
  getModifierProduitFormCodeBare() {
    // Remplacer l'abonnement existant par :
    this.modifierProduitForm.get('codeBare')?.valueChanges.subscribe(value => {
      this.showBarcode = value && value.length >= 3;
    });
  }
  // Fonction pour récupérer le produit
  selectBoutique(boutique) {
    console.log("Boutique sélectionnée:", boutique);
    // Si une boutique est sélectionnée, met à jour selectedBoutique
    if (boutique === null) {
      this.selectedBoutique = null;
      this.boutiqueActuelle = "Toutes les boutiques"; // Si aucune boutique n'est sélectionnée
    } else {
      this.selectedBoutique = boutique;
      this.boutiqueActuelle = boutique.nom || "Boutique sans nom"; // Mise à jour de la boutique actuelle
    }
    console.log("selectedBoutique après mise à jour:", this.selectedBoutique);
    console.log("boutiqueActuelle après mise à jour:", this.boutiqueActuelle);
    // Après la mise à jour, appelle getProduit() pour récupérer les produits de la boutique sélectionnée
    this.getProduit();
  }
  getProduit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const productId = idParam ? +idParam : 0;
    this.produitService.getProduitById(productId).subscribe({
      next: data => {
        this.produit = data;
        this.modifierProduitForm.patchValue(this.produit);
        this.loadInitialValues();
        // Réinitialiser les contrôles après chargement
        this.myControl.disable();
        this.uniteControl.disable();
        // Mise à jour des noms de boutiques
        if (this.produit.boutiques && this.produit.boutiques.length > 0) {
          this.allBoutiqueNames = this.produit.boutiques.map(b => b.nom);
          if (this.selectedBoutiqueId) {
            const boutique = this.produit.boutiques.find(b => b.id === this.selectedBoutiqueId);
            this.boutiqueName = boutique ? boutique.nom : 'Boutique non trouvée';
          }
        } else {
          this.allBoutiqueNames = ['Aucune boutique'];
          this.boutiqueName = 'Aucune boutique';
        }
      },
      error: err => {
        console.error('Erreur lors de la récupération du produit', err);
      }
    });
  }
  getBoutiqueQuantity() {
    if (!this.selectedBoutiqueId || !this.produit.boutiques) return 0;
    const boutique = this.produit.boutiques.find(b => b.id === this.selectedBoutiqueId);
    return boutique?.quantite || 0;
  }
  getBoutiqueNames(boutiques) {
    if (boutiques && boutiques.length > 0) {
      return boutiques.map(b => `${b.nom} (ID: ${b.id}) - Quantité: ${b.quantite}`);
    }
    console.error('Aucune boutique trouvée pour ce produit');
    return ['Aucune boutique'];
  }
  // toggleEditing(): void {
  //   this.isEditing = !this.isEditing;
  //   if (this.isEditing) {
  //     this.modifierProduitForm.enable();
  //   } else {
  //     // Annuler les modifications et recharger les données originales
  //     this.modifierProduitForm.disable();
  //     this.getProduit();
  //   }
  // }
  toggleEditing() {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      // Activer tous les contrôles
      this.modifierProduitForm.enable();
      this.myControl.enable();
      this.uniteControl.enable();
    } else {
      // Désactiver et réinitialiser
      this.modifierProduitForm.disable();
      this.myControl.disable();
      this.uniteControl.disable();
      // Réinitialiser les valeurs aux données originales
      this.getProduit();
    }
  }
  // Méthode pour la sélection d'une catégorie
  onCategorySelected(event) {
    console.log('Option sélectionnée :', event.option.value);
    if (event.option && event.option.value) {
      this.modifierProduitForm.get('categorieId')?.setValue(event.option.value.id);
    } else {
      this.modifierProduitForm.get('categorieId')?.setValue(null);
    }
  }
  onUniteSelected(event) {
    console.log('Unité sélectionnée :', event.option.value);
    if (event.option && event.option.value) {
      this.modifierProduitForm.get('uniteId')?.setValue(event.option.value.id);
    } else {
      this.modifierProduitForm.get('uniteId')?.setValue(null);
    }
  }
  // Pour categorie 
  _filter(name) {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.nom.toLowerCase().includes(filterValue));
  }
  displayFn(category) {
    return category ? category.nom : '';
  }
  // Pour unite
  _filterUnite(name) {
    const filterValue = name.toLowerCase();
    return this.optionsUnite.filter(option => option.nom.toLowerCase().includes(filterValue));
  }
  displayFnUnite(unityMesure) {
    return unityMesure ? unityMesure.nom : '';
  }
  // Lorsque l'utilisateur clique sur "Créer" pour une catégorie
  onCreateCategoryClick() {
    this.showCategoryCreation = true;
    this.showUniteCreation = false;
    this.openPopupCategory();
    // this.ajouteUniteForm.get('unityName')!.setValue('');
    this.ajouteCategoryForm.get('categoryName').setValue('');
  }
  // Lorsque l'utilisateur clique sur "Créer" pour une unité
  onCreateUniteClick() {
    this.showUniteCreation = true;
    this.showCategoryCreation = false;
    this.openPopupUnit();
    this.ajouteUniteForm.get('unityName').setValue('');
    // this.ajouteCategoryForm.get('categoryName')!.setValue('');
  }
  // Méthodes pour annuler la création
  cancelCategoryCreation() {
    this.showCategoryCreation = false;
  }
  cancelUniteCreation() {
    this.showUniteCreation = false;
  }
  submitFormCategory() {
    const categoryData = {
      nom: this.ajouteCategoryForm.value.categoryName
    };
    this.categorieService.ajouterCategorie(categoryData).subscribe({
      next: response => {
        console.log('Catégorie ajoutée avec succès : ', response);
        if (response && response.id) {
          // Réinitialiser le formulaire
          this.ajouteCategoryForm.get('categoryName').setValue('');
          // Créer le nouvel objet catégorie
          const newCategory = {
            id: response.id,
            nom: categoryData.nom
          };
          // Ajouter à la liste des options
          this.options.push(newCategory);
          this.showPopupCategory = false;
          // 1. Mettre à jour l'input d'autocomplete
          this.myControl.setValue(newCategory);
          // 2. Mettre à jour la valeur dans le formulaire principal
          this.modifierProduitForm.get('categorieId')?.setValue(newCategory.id);
          // Mettre à jour les options filtrées
          this.filteredOptions = this.myControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.startWith)(newCategory),
          // Pré-remplir avec la nouvelle valeur
          (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(value => typeof value === 'string' ? value : value?.nom), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(name => name ? this._filter(name) : this.options.slice()));
          // Afficher message
          this.apiMessageType = 'success';
          this.messageAPI = response.message || "La catégorie a été créée avec succès.";
        }
      },
      error: error => {
        console.log("Erreur complète :", error);
        console.log("Réponse API :", error.error);
        let message = "Une erreur est survenue lors de la création de la catégorie.";
        if (error.error) {
          if (typeof error.error === "object" && error.error.error) {
            message = error.error.error;
          } else if (typeof error.error === "string") {
            message = error.error;
          }
        }
        this.apiMessageType = 'error';
        this.messageAPI = message;
      }
    });
  }
  loadInitialValues() {
    if (this.produit.uniteId) {
      const initialUnite = this.optionsUnite.find(u => u.id === this.produit.uniteId);
      if (initialUnite) this.uniteControl.setValue(initialUnite);
    }
    if (this.produit.categorieId) {
      const initialCategorie = this.options.find(c => c.id === this.produit.categorieId);
      if (initialCategorie) this.myControl.setValue(initialCategorie);
    }
  }
  submitFormUnity() {
    const unityData = {
      nom: this.ajouteUniteForm.value.unityName
    };
    this.uniteMesureService.ajouterUnite(unityData).subscribe({
      next: response => {
        console.log('Unité ajouté avec succès : ', response);
        if (response && response.id) {
          // Réinitialiser le formulaire
          this.ajouteUniteForm.get('unityName').setValue('');
          // Créer la nouvelle unité
          const newUnity = {
            id: response.id,
            nom: unityData.nom
          };
          // Ajouter à la liste
          this.optionsUnite.push(newUnity);
          this.showPopupUnit = false;
          // Mettre à jour le contrôle après l'ajout
          this.uniteControl.setValue(newUnity);
          this.modifierProduitForm.get('uniteId')?.setValue(newUnity.id);
          // Forcer la mise à jour des options filtrées
          this.filteredNomUnite = this.uniteControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.startWith)(newUnity), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(value => typeof value === 'string' ? value : value?.nom), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(name => name ? this._filterUnite(name) : this.optionsUnite.slice()));
          // Ajouter cette ligne pour actualiser l'affichage
          this.uniteControl.updateValueAndValidity();
          // Afficher message
          this.apiMessageType = 'success';
          this.messageAPI = response.message || "L'unité a été créée avec succès.";
        }
      },
      error: error => {
        console.log("Erreur complète :", error);
        console.log("Réponse API :", error.error);
        let message = "Une erreur est survenue lors de la création de l'unité.";
        if (error.error) {
          if (typeof error.error === "object" && error.error.error) {
            message = error.error.error;
          } else if (typeof error.error === "string") {
            message = error.error;
          }
        }
        this.apiMessageType = 'error';
        this.messageAPI = message;
      }
    });
  }
  // submitUpdateForm(): void {
  //   // Vérifier que le formulaire est valide
  //   if (this.modifierProduitForm.invalid) {
  //     this.errorMessage = "Veuillez remplir les champs obligatoires.";
  //     return;
  //   }
  //   // Fusionner les valeurs du formulaire avec le produit existant
  //   const updatedProduct: Produit = {
  //     ...this.produit,
  //     ...this.modifierProduitForm.value 
  //   };
  //   // Ajout de logs pour le debug
  //   console.log("Produit mis à jour (avant envoi) :", updatedProduct);
  //   console.log("Fichier sélectionné :", this.selectedFile);
  //   // Appel du service qui se charge de créer le FormData et d'envoyer la requête PATCH
  //   this.produitService.modifierProduit(updatedProduct, this.selectedFile ?? undefined)
  //     .subscribe({
  //       next: (response: Produit) => {
  //         console.log("Produit modifié avec succès", response);
  //         this.produit = response;
  //         this.showPopupMessage({
  //           title: 'Succès',
  //           message: 'Le produit a été modifié avec succès.',
  //           image: 'assets/img/succcccc.png',
  //           type: 'success'
  //         });
  //       },
  //       error: (error) => {
  //         console.error("Erreur lors de la modification du produit", error);
  //         let errorMessage = "Une erreur est survenue lors de la modification du produit.";
  //         if (error.error) {
  //           if (typeof error.error === "object" && error.error.error) {
  //             errorMessage = error.error.error;
  //           } else if (typeof error.error === "string") {
  //             errorMessage = error.error;
  //           }
  //         }
  //         this.showPopupMessage({
  //           title: 'Erreur',
  //           message: errorMessage,
  //           image: 'assets/img/error.png',
  //           type: 'error'
  //         });
  //       }
  //     });
  // }
  submitUpdateForm() {
    // 1. Vérifier si on est en mode édition
    if (!this.isEditing) return;
    // 2. Vérifier la validité du formulaire
    if (this.modifierProduitForm.invalid) {
      this.errorMessage = "Veuillez corriger les erreurs dans le formulaire.";
      // Marquer tous les champs comme "touched" pour afficher les erreurs
      this.markFormGroupTouched(this.modifierProduitForm);
      return;
    }
    // 3. Préparer les données à envoyer
    const updatedProduct = {
      ...this.produit,
      ...this.modifierProduitForm.value
    };
    // 4. Appel au service de mise à jour
    this.isLoading = true;
    this.produitService.modifierProduit(updatedProduct, this.selectedFile ?? undefined).subscribe({
      next: response => {
        this.isLoading = false;
        // Mettre à jour les données locales
        this.produit = response;
        // Réinitialiser l'état d'édition
        this.isEditing = false;
        this.modifierProduitForm.disable();
        // Réinitialiser la sélection de fichier
        this.selectedFile = null;
        this.newPhotoUrl = null;
        // Afficher message de succès
        this.showPopupMessage({
          title: 'Succès',
          message: 'Produit modifié avec succès',
          image: 'assets/img/succcccc.png',
          type: 'success'
        });
      },
      error: error => {
        this.isLoading = false;
        // Gestion des erreurs
        let errorMessage = "Erreur lors de la modification du produit";
        if (error.error?.message) {
          errorMessage += `: ${error.error.message}`;
        } else if (error.statusText) {
          errorMessage += `: ${error.statusText}`;
        }
        // Afficher message d'erreur
        this.showPopupMessage({
          title: 'Erreur',
          message: errorMessage,
          image: 'assets/img/error.png',
          type: 'error'
        });
      }
    });
  }
  // Méthode utilitaire pour marquer tous les champs comme "touched"
  markFormGroupTouched(formGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  // Modifiez onCodeBarChange() :
  onCodeBarChange() {
    const codeBareValue = this.modifierProduitForm.get('codeBare')?.value || '';
    this.showBarcode = codeBareValue.length >= 1;
  }
  validateNumericInput(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }
  navigateBack() {
    this.router.navigate(['/produit']);
  }
  static {
    this.ɵfac = function ListProduitComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ListProduitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_SERVICES_categorie_service__WEBPACK_IMPORTED_MODULE_1__.CategorieService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_SERVICES_unite_service__WEBPACK_IMPORTED_MODULE_2__.UniteMesureService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_3__.ProduitService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_4__.UsersService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ListProduitComponent,
      selectors: [["app-list-produit"]],
      decls: 143,
      vars: 53,
      consts: [["auto", "matAutocomplete"], ["autoUnite", "matAutocomplete"], [1, "container_global"], ["class", "loading-overlay", 4, "ngIf"], [1, "content_formulaire"], [1, "modal-body"], [1, "container_formulaire", 3, "formGroup"], ["title", "Retour sur la page produit", 1, "retour_icon_text", 2, "cursor", "pointer", "color", "#0672E4", 3, "click"], [1, "ri-arrow-left-s-line"], [2, "margin-left", "8px", "font-size", "12px"], [1, "Title"], [1, "form_left_right"], [1, "formulaire"], [1, "information_cadre"], [1, "info_titre_input"], [1, "champ_input"], ["type", "text", "disabled", "", "required", "", "id", "nomMagasin", "name", "nomMagasin", "placeholder", "Saisis le nom de magasin", 1, "input_focus", "input_focus_petit", 2, "cursor", "no-drop", "color", "#8d8d8d", 3, "value"], ["for", "nomMagasin", 1, "label", "labelColor"], [1, "content_return", 2, "display", "flex", "align-items", "center", "justify-content", "space-between"], [1, "icon_edit", 2, "cursor", "pointer"], ["style", "font-size: 16px;", "class", "ri-edit-box-line", "title", "Cliquer ici pour modifier", 3, "click", 4, "ngIf"], ["style", "color: #ff0000; font-size: 16px;", "class", "ri-close-line", "title", "Fermer l'\u00E9dition", 3, "click", 4, "ngIf"], [1, "champ_grid"], ["formControlName", "nom", "type", "text", "id", "nom", "name", "nom", "placeholder", "Saisis le nom de magasin", 1, "input_focus"], ["for", "nom", 1, "label", "labelColor"], ["class", "error-message", 4, "ngIf"], [1, "double_input2"], ["type", "text", "placeholder", "Saisis le nom de cat\u00E9gorie", "matInput", "", 1, "input_focus", 2, "cursor", "pointer", 3, "formControl", "matAutocomplete", "value"], ["for", "categorieId", 1, "label", "labelCategory"], [3, "optionSelected", "displayWith"], [1, "select-option", 3, "click"], [2, "display", "flex", "align-items", "center", "color", "#0672E4"], [1, "ri-add-circle-fill", 2, "font-size", "20px"], [2, "margin-left", "8px"], [3, "value", 4, "ngFor", "ngForOf"], [1, "arrow_bas", 2, "position", "absolute", "right", "5px", "top", "20px"], [1, "ri-arrow-down-s-line", 2, "font-size", "20px"], ["formControlName", "prixVente", "type", "text", "id", "prixVente", "name", "prixVente", "placeholder", "Saisis le nom de magasin", 1, "input_focus"], ["for", "prixVente", 1, "label", "labelColor"], ["formControlName", "prixAchat", "type", "text", "id", "prixAchat", "name", "prixAchat", "placeholder", "Saisis le prix d'achat", 1, "input_focus"], ["for", "prixAchat", 1, "label", "labelColor"], ["type", "text", "placeholder", "Saisis l'unit\u00E9 de mesure", "matInput", "", 1, "input_focus", 2, "cursor", "pointer", 3, "formControl", "matAutocomplete", "value"], ["for", "uniteId", 1, "label", "labelCategory"], ["autoActiveFirstOption", "", 3, "optionSelected", "displayWith"], [1, "triple", 2, "display", "flex", "gap", "20px"], ["type", "text", "id", "dateCreate", "name", "dateCreate", 1, "input_focus", 2, "cursor", "no-drop", "color", "#9c9c9c", "font-style", "italic", "letter-spacing", "0.50px", "min-width", "190px", 3, "value", "disabled"], ["for", "dateCreate", 1, "label", "labelColor"], ["type", "text", "id", "dateUpdate", "name", "dateUpdate", 1, "input_focus", 2, "cursor", "no-drop", "color", "#9c9c9c", "font-style", "italic", "letter-spacing", "0.50px", "min-width", "190px", 3, "value", "disabled"], ["for", "dateUpdate", 1, "label", "labelColor"], [1, "double_input"], [1, "champ_input", "champ_input2"], ["type", "text", "id", "codeGenerique", "name", "codeGenerique", "placeholder", "Num\u00E9ro code barre", 1, "input_focus", 2, "cursor", "no-drop", "color", "#9c9c9c", "letter-spacing", "0.50px", "min-width", "190px", 3, "value", "disabled"], ["for", "codeGenerique", 1, "label", "labelColor"], [1, "champs_code_bare_double"], ["type", "text", "formControlName", "codeBare", "autocomplete", "off", "id", "codeBar", "name", "codeBar", "placeholder", "Num\u00E9ro code barre", "inputmode", "numeric", "pattern", "[0-9]*", 1, "input_focus", 3, "keypress"], ["for", "codeBare", 1, "label", "labelColor"], ["style", "margin-left: 15px;", 4, "ngIf"], ["formControlName", "description", "id", "description", "name", "description", "placeholder", "Saisis Une description pour ce produit", 1, "input_focus2"], ["for", "description", 1, "label", "labelColor"], [1, "champ_input_inventaire"], [1, "switch"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel", "ngModelOptions"], [1, "slider", "round"], ["class", "double_inputh", 4, "ngIf"], ["style", "font-size: 12px; float: right;", 4, "ngIf"], ["style", "font-size: 12px; float: right; color: red;", 4, "ngIf"], [1, "container_file"], [1, "header_file"], ["alt", "Produit", 3, "src"], ["class", "clear-image-btn", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "information_cadre", "information_cadre_save"], [1, "container_error_message"], [1, "info_titre_input", "info_titre_input_btn"], [1, "btn_annuler"], ["routerLink", "/produit", 1, "btn_cancel"], ["class", "btn_ajouter", 4, "ngIf"], ["class", "modal-overlay", 4, "ngIf"], ["class", "popup-overlay", 4, "ngIf"], [1, "loading-overlay"], [1, "loading-content"], [1, "spinner"], ["title", "Cliquer ici pour modifier", 1, "ri-edit-box-line", 2, "font-size", "16px", 3, "click"], ["title", "Fermer l'\u00E9dition", 1, "ri-close-line", 2, "color", "#ff0000", "font-size", "16px", 3, "click"], [1, "error-message"], [3, "value"], [2, "margin-left", "15px"], ["bc-format", "CODE128", 3, "bc-value", "bc-line-color", "bc-width", "bc-height", "bc-font-size", "bc-display-value"], [1, "double_inputh"], ["formControlName", "seuilAlert", "type", "text", "required", "", "id", "seuilAlert", "name", "seuilAlert", "placeholder", "Saisis le montant d'alerte", 1, "input_focus"], ["for", "seuilAlert", 1, "label", "labelColor"], ["formControlName", "quantite", "type", "text", "readonly", "", 1, "input_focus", 2, "cursor", "no-drop", 3, "value"], ["for", "quantite", 1, "label", "labelColor"], [2, "font-size", "12px", "float", "right"], [2, "font-size", "12px", "float", "right", "color", "red"], [1, "clear-image-btn", 3, "click"], [1, "ri-delete-bin-5-line"], ["for", "file", 1, "footer_file"], [1, "ri-file-3-fill"], ["type", "file", "accept", "image/*", "id", "file", "hidden", "", 3, "change"], [1, "btn_ajouter"], ["type", "submit", 1, "btn_save", 3, "click"], [1, "modal-overlay"], [1, "modal-content", 3, "ngClass"], [1, "popup-header"], [1, "popup-img"], ["alt", "Icone", 1, "popup-icon2", 3, "src"], [3, "click"], [1, "popup-overlay"], [1, "popup-content", 2, "max-width", "350px"], [1, "popup-headerBoutique"], [1, "close-btn", 3, "click"], [3, "formGroup"], [1, "popup-body"], [1, "champ_input", 2, "margin-top", "15px"], ["autocomplete", "off", "formControlName", "categoryName", "type", "text", "required", "", "id", "categoryName", "name", "categoryName", "placeholder", "Saisis le nom de cat\u00E9gorie", 1, "input_focus", "input_focus_cree_cate"], ["for", "categoryName", 1, "label", "labelColor"], ["class", "error-message-category", 4, "ngIf"], ["class", "errorAPI", 4, "ngIf"], [1, "popup-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-submit", 3, "click", "disabled"], [1, "error-message-category"], [1, "errorAPI"], ["alt", "Message API", 3, "src"], ["autocomplete", "off", "formControlName", "unityName", "type", "text", "required", "", "id", "unityName", "name", "unityName", "placeholder", "Saisis le nom de unit\u00E9", 1, "input_focus", "input_focus_cree_cate"], ["for", "unityName", 1, "label", "labelColor"]],
      template: function ListProduitComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ListProduitComponent_div_1_Template, 5, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 4)(3, "div", 5)(4, "form", 6)(5, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListProduitComponent_Template_p_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.navigateBack());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Produit");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 10)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "D\u00E9tails du produits");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Boutique");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Nom boutique");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 13)(23, "div", 14)(24, "div", 18)(25, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Information des produits");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ListProduitComponent_i_28_Template, 1, 0, "i", 20)(29, ListProduitComponent_i_29_Template, 1, 0, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 22)(31, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Nom produit");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, ListProduitComponent_div_35_Template, 3, 2, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 26)(37, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Cat\u00E9gorie");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-autocomplete", 29, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("optionSelected", function ListProduitComponent_Template_mat_autocomplete_optionSelected_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onCategorySelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListProduitComponent_Template_mat_option_click_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onCreateCategoryClick());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Cr\u00E9er une cat\u00E9gorie");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, ListProduitComponent_mat_option_48_Template, 2, 2, "mat-option", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](49, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 22)(53, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Prix de vente");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, ListProduitComponent_div_57_Template, 2, 0, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "label", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Co\u00FBt du produit");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 22)(63, "div", 26)(64, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Unit\u00E9 de mesure");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "mat-autocomplete", 43, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("optionSelected", function ListProduitComponent_Template_mat_autocomplete_optionSelected_68_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onUniteSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "mat-option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListProduitComponent_Template_mat_option_click_70_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onCreateUniteClick());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Cr\u00E9er une unit\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](75, ListProduitComponent_mat_option_75_Template, 2, 2, "mat-option", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](76, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](78, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 44)(80, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "input", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](82, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "label", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "Date creation");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](86, "input", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](87, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "label", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Date modification");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 13)(91, "div", 14)(92, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "Identit\u00E9 de produit");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 49)(95, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](96, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "Code du produit");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div", 53)(100, "div", 15)(101, "input", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function ListProduitComponent_Template_input_keypress_101_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.validateNumericInput($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "label", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "Num\u00E9ro code barre (Facultatif)");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](104, ListProduitComponent_div_104_Template, 3, 2, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](105, ListProduitComponent_div_105_Template, 2, 6, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](107, "textarea", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "label", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109, "Description (Facultatif)");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 13)(111, "div", 14)(112, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, "Inventaire");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "div", 59)(115, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, "Ajouter dans les stocks");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "label", 60)(118, "input", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ListProduitComponent_Template_input_ngModelChange_118_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.isChecked, $event) || (ctx.isChecked = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ListProduitComponent_Template_input_change_118_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onToggleChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ListProduitComponent_Template_input_ngModelChange_118_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.produit.enStock, $event) || (ctx.produit.enStock = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ListProduitComponent_Template_input_change_118_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onToggleChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](119, "span", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](120, ListProduitComponent_div_120_Template, 10, 2, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "div", 13)(122, "div", 14)(123, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "Ajouter une image");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](125, ListProduitComponent_p_125_Template, 2, 0, "p", 64)(126, ListProduitComponent_p_126_Template, 2, 1, "p", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "div", 66)(128, "div", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](129, "img", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](130, ListProduitComponent_button_130_Template, 2, 0, "button", 69)(131, ListProduitComponent_div_131_Template, 6, 0, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "div", 71)(133, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](134, ListProduitComponent_div_134_Template, 2, 1, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "div", 73)(136, "div", 74)(137, "button", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](139, ListProduitComponent_div_139_Template, 3, 0, "div", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](140, ListProduitComponent_div_140_Template, 11, 6, "div", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](141, ListProduitComponent_div_141_Template, 21, 7, "div", 78)(142, ListProduitComponent_div_142_Template, 21, 7, "div", 78);
        }
        if (rf & 2) {
          const auto_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](42);
          const autoUnite_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.modifierProduitForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.selectedBoutiqueId ? ctx.boutiqueName : ctx.allBoutiqueNames.join(", "));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isEditing);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isEditing);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("disabled", !ctx.isEditing ? "" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["nom"].touched && ctx.f["nom"].invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", auto_r13)("value", ctx.produit.nomCategorie || "non categorie");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("disabled", !ctx.isEditing ? "" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("displayWith", ctx.displayFn);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](49, 42, ctx.filteredOptions));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["prixVente"].touched && ctx.f["prixVente"].invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.uniteControl)("matAutocomplete", autoUnite_r14)("value", ctx.produit.nomUnite || "sans unite");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("disabled", !ctx.isEditing ? "" : null);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("displayWith", ctx.displayFnUnite);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](76, 44, ctx.filteredNomUnite));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](82, 46, ctx.produit.createdAt, "dd-MM-yyyy '\u00E0' HH:mm"))("disabled", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](87, 49, ctx.produit.lastUpdated, "dd-MM-yyyy '\u00E0' HH:mm"))("disabled", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.produit.codeGenerique)("disabled", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f["codeBare"].touched && ctx.f["codeBare"].invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showBarcode);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.isChecked);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](52, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.produit.enStock);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isChecked);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.newPhotoUrl ? ctx.newPhotoUrl : ctx.getImageUrl(ctx.produit), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.newPhotoUrl && ctx.newPhotoUrl !== ctx.urllink);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isEditing);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isEditing);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showPopup);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showPopupCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showPopupUnit);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.M, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger, ngx_barcode6__WEBPACK_IMPORTED_MODULE_14__.NgxBarcode6Module, ngx_barcode6__WEBPACK_IMPORTED_MODULE_14__.NgxBarcode6Component, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink],
      styles: ["@charset \"UTF-8\";\n.content_formulaire[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n\n.container_global[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 72% 28%;\n  position: relative;\n}\n\n\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 25px;\n}\n\n.formulaire[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.Title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 250px;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #000;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: #000;\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: rgb(66, 56, 56);\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n.input_focus2[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 250px;\n  height: 70px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  border-radius: 5px;\n  padding-top: 10px;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  color: #000;\n}\n\n.input_focus2[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.champ_input2[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 0px;\n  pointer-events: none;\n  color: #000;\n}\n\n.champ_input[_ngcontent-%COMP%]   .labelCategory[_ngcontent-%COMP%] {\n  color: #000;\n  left: 0;\n  font-size: 14px;\n}\n\n.input_focus2[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus2[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #000;\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus2[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus2[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 15px;\n  transition: all 0.2s ease-in-out;\n}\n\n.info_titre_input[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.info_titre_input[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 10px;\n  letter-spacing: 0.6px;\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n  border-radius: 5px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.input_focus_magasin[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.input_focus_petit[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.double_input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.double_inputh[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  position: relative;\n  top: 10px;\n}\n\n.champ_input2[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50%;\n  box-sizing: border-box;\n  vertical-align: top;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\n\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #0672E4; \n\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(20px);\n}\n\n\n\n.container_file[_ngcontent-%COMP%] {\n  width: 150px;\n  border-radius: 10px;\n  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  gap: 5px;\n  background-color: rgba(0, 110, 255, 0.041);\n  margin-bottom: 10px;\n  margin-top: 20px;\n}\n\n.header_file[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 140px;\n  border: 1px dashed rgba(6, 113, 228, 0.6156862745);\n  border-radius: 10px;\n  flex-direction: column;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n\n.header_file[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.header_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n}\n\n.footer_file[_ngcontent-%COMP%] {\n  background-color: rgba(0, 110, 255, 0.075);\n  width: 140px;\n  height: 35px;\n  padding: 5px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: black;\n  border: none;\n  margin-top: 3px;\n}\n\n.footer_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  font-size: 10px;\n}\n\n.footer_file[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 7px;\n}\n\n#file[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.info_titre_input_btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 20px;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #ff0000;\n  color: #fff;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #0672E4;\n  color: #fff;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all 0.5s;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.btn_add_category2[_ngcontent-%COMP%] {\n  border: none;\n  padding: 2px 10px;\n  border-radius: 4px;\n  background-color: #0672E4;\n  color: #fff;\n  cursor: pointer;\n}\n\n.btn_add_category2[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all ease 0.5s;\n}\n\n.btn_add_categoryDiv2[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  justify-content: center;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.double_input2[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.ajouter_cadre_cree_c_u[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 230px;\n  background-color: #fff;\n  margin-top: 40px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n}\n\n.input_focus_cree_cate[_ngcontent-%COMP%] {\n  min-width: auto;\n}\n\n.btn-c-s[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.btn_s_category[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 35px;\n  background-color: rgba(6, 113, 228, 0.7843137255);\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  letter-spacing: 0.6px;\n  padding: 0 25px;\n}\n\n.btn_c_category[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 35px;\n  background-color: rgba(255, 0, 0, 0.8078431373);\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  letter-spacing: 0.6px;\n  padding: 0 25px;\n}\n\n.btn_s_category[_ngcontent-%COMP%]:hover {\n  background-color: #0672E4;\n  transition: all ease 0.5s;\n}\n\n.btn_c_category[_ngcontent-%COMP%]:hover {\n  background-color: #ff0000;\n  transition: all ease 0.5s;\n}\n\n.error-message-category[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: red;\n  font-weight: bold;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.error-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-style: 10px;\n}\n\n.errorAPI[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  margin-top: -9px;\n}\n\n.errorAPI[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n}\n\n.errorAPI[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding-left: 5px;\n}\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n\n\n.modal-content[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 30px;\n  border-radius: 10px;\n  text-align: center;\n  width: 90%;\n  max-width: 400px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  animation: fadeInDown 0.3s ease;\n  position: relative;\n}\n\n\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.popup-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin-bottom: 10px;\n}\n\n.popup-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px;\n}\n\n.modal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5em;\n  color: #333;\n}\n\n.modal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: #555;\n  margin: 20px 0;\n}\n\n\n\n.modal-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  font-size: 1em;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n\n\n\n.modal-content.error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #e53935;\n}\n\n.modal-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n}\n\n.modal-content.error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #d32f2f;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 18px;\n  z-index: 1000;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid white;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.champs_code_bare_double[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.clear-image-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: red;\n  font-size: 18px;\n  cursor: pointer;\n  position: absolute;\n  left: 14%;\n  margin-left: 10px;\n  transform: translateY(-50%);\n}\n\n.champ_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n  margin-top: 20px;\n}\n\n\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.popup-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 40%;\n}\n\n.popup-headerBoutique[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.popup-headerBoutique[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.popup-footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: right;\n}\n\n.btn-cancel[_ngcontent-%COMP%], .btn-submit[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  margin-left: 10px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: rgba(255, 0, 0, 0.8078431373);\n  padding: 6px 25px;\n  color: #ffffff;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #ff0000;\n  transition: all 0.5s;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  background-color: rgba(6, 113, 228, 0.7843137255);\n  padding: 6px 25px;\n  color: #ffffff;\n  cursor: pointer;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: #0672E4;\n  transition: all 0.5s;\n}\n\n.cadre_retour[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(60, 60, 60, 0.1607843137);\n  padding: 10px 10px 10px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtcHJvZHVpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxhQUFBO0FBRUo7O0FBT0U7RUFFRSxrQkFBQTtBQUxKOztBQVFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFRRSxlQUFBO0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0U7RUFDRSxrQkFBQTtBQU5KOztBQVNFO0VBQ0UsZUFBQTtBQU5KOztBQVNFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxXQUFBO0FBUEo7O0FBV0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBUko7O0FBV0U7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVJKOztBQVlFOztFQUdFLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFWSjs7QUFhRTtFQUNFLFVBQUE7QUFWSjs7QUFhRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQVZKOztBQWFFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0EsV0FBQTtBQVpKOztBQWVFO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VB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RSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTlERjs7QUFpRUE7RUFDRSwrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQTlERjs7QUFpRUE7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0FBOURGOztBQWlFQTtFQUNFLGlEQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQTlERjs7QUFpRUE7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0FBOURGOztBQWlFQTtFQUNFLFdBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVEQUFBO0VBQ0EsNEJBQUE7QUEvREYiLCJmaWxlIjoibGlzdC1wcm9kdWl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnRfZm9ybXVsYWlyZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgLy8gLmZvcm11bGFpcmUge1xuICAvLyAgIHdpZHRoOiAxMDBweDtcbiAgLy8gICBoZWlnaHQ6IDIwMHB4O1xuICAvLyAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAvLyB9XG4gIFxuICAubW9kYWwtYm9keSB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgfVxuXG4gIC5jb250YWluZXJfZ2xvYmFsIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzIlIDI4JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC8qIGZvcm11bGFpcmUgKi9cbiAgXG4gIC5jaGFtcF9pbnB1dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIH1cbiAgXG4gIC5mb3JtdWxhaXJlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5UaXRsZSBoMyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA0OXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvL3BhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIC8vIGNvbG9yOiAjMDY3MkU0O1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQgLmxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuICBcbiAgXG4gIC5pbnB1dF9mb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbiAgLmlucHV0X2ZvY3VzOmZvY3VzICsgLmxhYmVsIHtcbiAgICAvLyBjb2xvcjogIzA2NzJFNDtcbiAgICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgLy8gY29sb3I6ICM3Nzc0NzQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQyIC5sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjJweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbiAgXG4gIFxuICAuY2hhbXBfaW5wdXQgLmxhYmVsQ2F0ZWdvcnkge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuICAuaW5wdXRfZm9jdXMyOmZvY3VzICsgLmxhYmVsIHtcbiAgICAvLyBjb2xvcjogIzA2NzJFNDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5pbmZvX3RpdHJlX2lucHV0IHtcbiAgICBwYWRkaW5nOiAyMHB4OyBcbiAgfVxuICBcbiAgLmluZm9fdGl0cmVfaW5wdXQgaDQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gIH1cbiAgXG4gIC8vIDwhLS0gTGVzIGluZm9ybWF0aW9uIGRlcyBtYWdhc2luICAtLT5cbiAgLmluZm9ybWF0aW9uX2NhZHJlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzX21hZ2FzaW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vbWluLXdpZHRoOiAxMDBweCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1c19wZXRpdCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICBcbiAgXG4gIC8vIC5jaGFtcF9pbnB1dF9tYXJnaW4ge1xuICAvLyAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAvLyB9XG4gIFxuICAuZG91YmxlX2lucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgfVxuICBcbiAgLmRvdWJsZV9pbnB1dGgge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gIH1cbiAgXG4gIFxuICAuY2hhbXBfaW5wdXQyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbiAgXG4gIFxuICAvLyAuaW5wdXRfZm9jdXNfbGFyZ2V7XG4gIC8vICAgLy9taW4td2lkdGg6IDM4MHB4O1xuICAvLyAgIHdpZHRoOiAxMDAlO1xuICAvLyB9XG4gIFxuICBcbiAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIFxuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC8vIFRvZ2dsZSBcbiAgXG4gIC5zd2l0Y2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICB9XG4gIFxuICAvKiBNYXNxdWVyIGwnaW5wdXQgY2hlY2tib3ggb3JpZ2luYWwgKi9cbiAgLnN3aXRjaCBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgXG4gIC8qIExlIMKrIHNsaWRlciDCuyAqL1xuICAuc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICB9XG4gIFxuICAuc2xpZGVyOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxOHB4OyBcbiAgICB3aWR0aDogMThweDtcbiAgICBsZWZ0OiAzcHg7IFxuICAgIGJvdHRvbTogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgXG4gIC8qIFF1YW5kIGxlIGNoZWNrYm94IGVzdCBjb2Now6kgKi9cbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7IC8qIENvdWxldXIgYXUgY2hvaXggKi9cbiAgfVxuICBcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIH1cbiAgXG4gIC8qIEZyb20gVWl2ZXJzZS5pbyBieSBZYXlhMTIwODUgKi8gXG4gIC5jb250YWluZXJfZmlsZSB7XG4gICAgLy8gaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZ2FwOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTAsIDI1NSwgMC4wNDEpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBcbiAgLmhlYWRlcl9maWxlIHtcbiAgICAvLyBmbGV4OiAxO1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjMDY3MWU0OWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBpbWd7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgc3ZnIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLmZvb3Rlcl9maWxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA3NSk7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gIH1cbiAgXG4gIC5mb290ZXJfZmlsZSBwIHtcbiAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICBcbiAgLmZvb3Rlcl9maWxlIGkge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgfVxuICBcbiAgI2ZpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLmluZm9fdGl0cmVfaW5wdXRfYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG4gIFxuICAvLyBidXR0b24gYW5udWxlclxuICAuYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWwge1xuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLy8gYnV0dG9uIGFubnVsZXIgaG92ZXJcbiAgLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbiAgfVxuICBcbiAgLy8gYnV0dG9uIGFqb3V0ZXIgXG4gIC5idG5fYWpvdXRlciAuYnRuX3NhdmUge1xuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLy8gYnV0dG9uIGFqb3V0ZXIgaG92ZXJcbiAgLmJ0bl9ham91dGVyIC5idG5fc2F2ZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB9XG4gIFxuICAvLyBDYXRlZ29yeSBcbiAgXG4gIC5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5idG5fYWRkX2NhdGVnb3J5MiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvL2JveC1zaGFkb3c6IDAgMnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjA3OCk7XG4gIH1cbiAgXG4gIC5idG5fYWRkX2NhdGVnb3J5Mjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XG4gIH1cbiAgXG4gIFxuICAuYnRuX2FkZF9jYXRlZ29yeURpdjIge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gIH1cbiAgXG4gIC5kb3VibGVfaW5wdXQyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIFxuICAvLy8vLy8vLy8vLy8vLy8vLyBQQVJUSVIgTEVGVFxuICBcbiAgLmFqb3V0ZXJfY2FkcmVfY3JlZV9jX3Uge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDIzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMDgpO1xuICB9XG4gIFxuICBcbiAgLmlucHV0X2ZvY3VzX2NyZWVfY2F0ZSB7XG4gICAgLy93aWR0aDogNTAlO1xuICAgIG1pbi13aWR0aDogYXV0bztcbiAgfVxuICBcbiAgLmJ0bi1jLXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gIH1cbiAgXG4gIC5idG5fc19jYXRlZ29yeSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcxZTRjODtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gICAgcGFkZGluZzogMCAyNXB4O1xuICB9XG4gIFxuICAuYnRuX2NfY2F0ZWdvcnkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwY2U7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgfVxuICBcbiAgLmJ0bl9zX2NhdGVnb3J5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcbiAgfVxuICBcbiAgLmJ0bl9jX2NhdGVnb3J5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcbiAgfVxuXG4gIC5lcnJvci1tZXNzYWdlLWNhdGVnb3J5IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5lcnJvci1tZXNzYWdlIHNwYW4ge1xuICAgIGZvbnQtc3R5bGU6IDEwcHg7XG4gIH1cbiAgXG4gIC5lcnJvckFQSSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogLTlweDtcbiAgfVxuICBcbiAgLmVycm9yQVBJIGltZ3tcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gIH1cbiAgXG4gIC5lcnJvckFQSSBzcGFuIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cbiAgXG5cbiAgLy8gUG9wIHVwXG5cbi8qIE92ZXJsYXkgZGUgbGEgcG9wdXAgKi9cbi5tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cblxuLyogQ29udGVudSBkZSBsYSBwb3B1cCAqL1xuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLDAsMCwwLjMpO1xuICBhbmltYXRpb246IGZhZGVJbkRvd24gMC4zcyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIEhlYWRlciBkZSBsYSBwb3B1cCBhdmVjIGwnaW1hZ2UgZXQgbGUgdGl0cmUgKi9cbi5wb3B1cC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucG9wdXAtaW1nIGltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wb3B1cC1pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4ubW9kYWwtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjNTU1O1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLyogU3R5bGUgZHUgYm91dG9uICovXG4ubW9kYWwtY29udGVudCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG59XG4vKiBTdHlsZSBkdSBib3V0b24gKi9cbi8vIC5idG5PS09LIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbi8vICAgY29sb3I6ICNmZmY7XG4vLyAgIGJvcmRlcjogbm9uZTtcbi8vICAgcGFkZGluZzogMTBweCAyMHB4O1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xuLy8gfVxuXG4ubW9kYWwtY29udGVudC5lcnJvciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUzOTM1O1xufVxuXG4ubW9kYWwtY29udGVudCBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xufVxuXG4ubW9kYWwtY29udGVudC5lcnJvciBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyZjJmO1xufVxuXG4ubG9hZGluZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG5cbi5sb2FkaW5nLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4OyBcbn1cblxuLnNwaW5uZXIge1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cblxuLy8gQ29kZSBiYXJlXG4uY2hhbXBzX2NvZGVfYmFyZV9kb3VibGUge1xuICAvLyBkaXNwbGF5OiBncmlkO1xuICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgXG59XG5cbi5jbGVhci1pbWFnZS1idG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5jaGFtcF9ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4vKiBTdHlsZXMgcG91ciBsZSBwb3B1cCAqL1xuLnBvcHVwLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLnBvcHVwLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogNDAlO1xufVxuXG4ucG9wdXAtaGVhZGVyQm91dGlxdWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wb3B1cC1oZWFkZXJCb3V0aXF1ZSBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cC1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmJ0bi1jYW5jZWwsIC5idG4tc3VibWl0IHtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDBjZTtcbiAgcGFkZGluZzogNnB4IDI1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYnRuLWNhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5idG4tc3VibWl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzFlNGM4O1xuICBwYWRkaW5nOiA2cHggMjVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1zdWJtaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4uY2FkcmVfcmV0b3VyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNjM2MzYzI5O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxNXB4O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9wcm9kdWl0cy9saXN0LXByb2R1aXQvbGlzdC1wcm9kdWl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGFBQUE7QUFFSjs7QUFPRTtFQUVFLGtCQUFBO0FBTEo7O0FBUUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVFFLGVBQUE7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTRTtFQUNFLGtCQUFBO0FBTko7O0FBU0U7RUFDRSxlQUFBO0FBTko7O0FBU0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLFdBQUE7QUFQSjs7QUFXRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFSSjs7QUFXRTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBUko7O0FBWUU7O0VBR0Usc0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQVZKOztBQWFFO0VBQ0UsVUFBQTtBQVZKOztBQWFFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBVko7O0FBYUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFD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QTtBQTlERjs7QUFpRUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBOURGOztBQWlFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBOURGOztBQWlFQTtFQUNFLCtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBOURGOztBQWlFQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7QUE5REY7O0FBaUVBO0VBQ0UsaURBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBOURGOztBQWlFQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7QUE5REY7O0FBaUVBO0VBQ0UsV0FBQTtFQUVBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdURBQUE7RUFDQSw0QkFBQTtBQS9ERjtBQUNBLG82ekJBQW82ekIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudF9mb3JtdWxhaXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIFxuICAvLyAuZm9ybXVsYWlyZSB7XG4gIC8vICAgd2lkdGg6IDEwMHB4O1xuICAvLyAgIGhlaWdodDogMjAwcHg7XG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIC8vIH1cbiAgXG4gIC5tb2RhbC1ib2R5IHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLmNvbnRhaW5lcl9nbG9iYWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MiUgMjglO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLyogZm9ybXVsYWlyZSAqL1xuICBcbiAgLmNoYW1wX2lucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxuICBcbiAgLmZvcm11bGFpcmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLlRpdGxlIGgzIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDUzLCA1MCwgNTApO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgLy8gY29sb3I6ICMwNjcyRTQ7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dCAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIycHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIFxuICBcbiAgLmlucHV0X2ZvY3VzOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuICAuaW5wdXRfZm9jdXM6Zm9jdXMgKyAubGFiZWwge1xuICAgIC8vIGNvbG9yOiAjMDY3MkU0O1xuICAgIGNvbG9yOiByZ2IoNjYsIDU2LCA1Nik7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAvLyBjb2xvcjogIzc3NzQ3NDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dDIgLmxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMnB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuICBcbiAgXG4gIC5jaGFtcF9pbnB1dCAubGFiZWxDYXRlZ29yeSB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgbGVmdDogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4gIC5pbnB1dF9mb2N1czI6Zm9jdXMgKyAubGFiZWwge1xuICAgIC8vIGNvbG9yOiAjMDY3MkU0O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmluZm9fdGl0cmVfaW5wdXQge1xuICAgIHBhZGRpbmc6IDIwcHg7IFxuICB9XG4gIFxuICAuaW5mb190aXRyZV9pbnB1dCBoNCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbiAgfVxuICBcbiAgLy8gPCEtLSBMZXMgaW5mb3JtYXRpb24gZGVzIG1hZ2FzaW4gIC0tPlxuICAuaW5mb3JtYXRpb25fY2FkcmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTA4KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXNfbWFnYXNpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy9taW4td2lkdGg6IDEwMHB4IWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzX3BldGl0IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIFxuICBcbiAgLy8gLmNoYW1wX2lucHV0X21hcmdpbiB7XG4gIC8vICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIC8vIH1cbiAgXG4gIC5kb3VibGVfaW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG4gIFxuICAuZG91YmxlX2lucHV0aCB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTBweDtcbiAgfVxuICBcbiAgXG4gIC5jaGFtcF9pbnB1dDIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuICBcbiAgXG4gIC8vIC5pbnB1dF9mb2N1c19sYXJnZXtcbiAgLy8gICAvL21pbi13aWR0aDogMzgwcHg7XG4gIC8vICAgd2lkdGg6IDEwMCU7XG4gIC8vIH1cbiAgXG4gIFxuICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgXG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgLy8gVG9nZ2xlIFxuICBcbiAgLnN3aXRjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cbiAgXG4gIC8qIE1hc3F1ZXIgbCdpbnB1dCBjaGVja2JveCBvcmlnaW5hbCAqL1xuICAuc3dpdGNoIGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgfVxuICBcbiAgLyogTGUgw4LCqyBzbGlkZXIgw4LCuyAqL1xuICAuc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICB9XG4gIFxuICAuc2xpZGVyOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxOHB4OyBcbiAgICB3aWR0aDogMThweDtcbiAgICBsZWZ0OiAzcHg7IFxuICAgIGJvdHRvbTogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgXG4gIC8qIFF1YW5kIGxlIGNoZWNrYm94IGVzdCBjb2Now4PCqSAqL1xuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgLyogQ291bGV1ciBhdSBjaG9peCAqL1xuICB9XG4gIFxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgfVxuICBcbiAgLyogRnJvbSBVaXZlcnNlLmlvIGJ5IFlheWExMjA4NSAqLyBcbiAgLmNvbnRhaW5lcl9maWxlIHtcbiAgICAvLyBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBnYXA6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA0MSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUge1xuICAgIC8vIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICMwNjcxZTQ5ZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcbiAgfVxuICBcbiAgLmhlYWRlcl9maWxlIGltZ3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBzdmcge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICAuZm9vdGVyX2ZpbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTEwLCAyNTUsIDAuMDc1KTtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgfVxuICBcbiAgLmZvb3Rlcl9maWxlIHAge1xuICAgIG1hcmdpbjogMCFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIFxuICAuZm9vdGVyX2ZpbGUgaSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICB9XG4gIFxuICAjZmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLmhlYWRlcl9maWxlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAuaW5mb190aXRyZV9pbnB1dF9idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBnYXA6IDIwcHg7XG4gIH1cbiAgXG4gIC8vIGJ1dHRvbiBhbm51bGVyXG4gIC5idG5fYW5udWxlciAuYnRuX2NhbmNlbCB7XG4gICAgcGFkZGluZzogOHB4IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAvLyBidXR0b24gYW5udWxlciBob3ZlclxuICAuYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWw6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkODAxMDE7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xuICB9XG4gIFxuICAvLyBidXR0b24gYWpvdXRlciBcbiAgLmJ0bl9ham91dGVyIC5idG5fc2F2ZSB7XG4gICAgcGFkZGluZzogOHB4IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAvLyBidXR0b24gYWpvdXRlciBob3ZlclxuICAuYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gIH1cbiAgXG4gIC8vIENhdGVnb3J5IFxuICBcbiAgLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmJ0bl9hZGRfY2F0ZWdvcnkyIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMnB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC8vYm94LXNoYWRvdzogMCAycHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDc4KTtcbiAgfVxuICBcbiAgLmJ0bl9hZGRfY2F0ZWdvcnkyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcbiAgfVxuICBcbiAgXG4gIC5idG5fYWRkX2NhdGVnb3J5RGl2MiB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMTBweDtcbiAgfVxuICBcbiAgLmRvdWJsZV9pbnB1dDIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgXG4gIC8vLy8vLy8vLy8vLy8vLy8vIFBBUlRJUiBMRUZUXG4gIFxuICAuYWpvdXRlcl9jYWRyZV9jcmVlX2NfdSB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4gIH1cbiAgXG4gIFxuICAuaW5wdXRfZm9jdXNfY3JlZV9jYXRlIHtcbiAgICAvL3dpZHRoOiA1MCU7XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICB9XG4gIFxuICAuYnRuLWMtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgfVxuICBcbiAgLmJ0bl9zX2NhdGVnb3J5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzFlNGM4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG4gIH1cbiAgXG4gIC5idG5fY19jYXRlZ29yeSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDBjZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gICAgcGFkZGluZzogMCAyNXB4O1xuICB9XG4gIFxuICAuYnRuX3NfY2F0ZWdvcnk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xuICB9XG4gIFxuICAuYnRuX2NfY2F0ZWdvcnk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xuICB9XG5cbiAgLmVycm9yLW1lc3NhZ2UtY2F0ZWdvcnkge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICBcbiAgLmVycm9yLW1lc3NhZ2Ugc3BhbiB7XG4gICAgZm9udC1zdHlsZTogMTBweDtcbiAgfVxuICBcbiAgLmVycm9yQVBJIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAtOXB4O1xuICB9XG4gIFxuICAuZXJyb3JBUEkgaW1ne1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgfVxuICBcbiAgLmVycm9yQVBJIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxuICBcblxuICAvLyBQb3AgdXBcblxuLyogT3ZlcmxheSBkZSBsYSBwb3B1cCAqL1xuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuXG4vKiBDb250ZW51IGRlIGxhIHBvcHVwICovXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsMCwwLDAuMyk7XG4gIGFuaW1hdGlvbjogZmFkZUluRG93biAwLjNzIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogSGVhZGVyIGRlIGxhIHBvcHVwIGF2ZWMgbCdpbWFnZSBldCBsZSB0aXRyZSAqL1xuLnBvcHVwLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wb3B1cC1pbWcgaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnBvcHVwLWljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubW9kYWwtY29udGVudCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5tb2RhbC1jb250ZW50IHAge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICM1NTU7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4vKiBTdHlsZSBkdSBib3V0b24gKi9cbi5tb2RhbC1jb250ZW50IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcbn1cbi8qIFN0eWxlIGR1IGJvdXRvbiAqL1xuLy8gLmJ0bk9LT0sge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuLy8gICBjb2xvcjogI2ZmZjtcbi8vICAgYm9yZGVyOiBub25lO1xuLy8gICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBib3JkZXItcmFkaXVzOiA1cHg7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG4vLyB9XG5cbi5tb2RhbC1jb250ZW50LmVycm9yIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTM5MzU7XG59XG5cbi5tb2RhbC1jb250ZW50IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG59XG5cbi5tb2RhbC1jb250ZW50LmVycm9yIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzJmMmY7XG59XG5cbi5sb2FkaW5nLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cblxuLmxvYWRpbmctY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7IFxufVxuXG4uc3Bpbm5lciB7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuXG4vLyBDb2RlIGJhcmVcbi5jaGFtcHNfY29kZV9iYXJlX2RvdWJsZSB7XG4gIC8vIGRpc3BsYXk6IGdyaWQ7XG4gIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBcbn1cblxuLmNsZWFyLWltYWdlLWJ0biB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE0JTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmNoYW1wX2dyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gIGdyaWQtcm93LWdhcDogMHB4O1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi8qIFN0eWxlcyBwb3VyIGxlIHBvcHVwICovXG4ucG9wdXAtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ucG9wdXAtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5wb3B1cC1oZWFkZXJCb3V0aXF1ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBvcHVwLWhlYWRlckJvdXRpcXVlIGg0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYnRuLWNhbmNlbCwgLmJ0bi1zdWJtaXQge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMGNlO1xuICBwYWRkaW5nOiA2cHggMjVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5idG4tY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuLmJ0bi1zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MWU0Yzg7XG4gIHBhZGRpbmc6IDZweCAyNXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLXN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5jYWRyZV9yZXRvdXIge1xuICB3aWR0aDogMTAwJTtcbiAgLy8gaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2MzYzNjMjk7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDE1cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_produits_list-produit_list-produit_component_ts.js.map