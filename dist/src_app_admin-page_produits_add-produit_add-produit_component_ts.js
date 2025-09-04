"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_produits_add-produit_add-produit_component_ts"],{

/***/ 96335:
/*!**************************************************************************!*\
  !*** ./src/app/admin-page/produits/add-produit/add-produit.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddProduitComponent: () => (/* binding */ AddProduitComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 52575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! browser-image-compression */ 92880);
/* harmony import */ var ngx_barcode6__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-barcode6 */ 23701);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 40211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _SERVICES_categorie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SERVICES/categorie.service */ 49293);
/* harmony import */ var _SERVICES_unite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SERVICES/unite.service */ 9599);
/* harmony import */ var _SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SERVICES/produit.service */ 66375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SERVICES/users.service */ 88026);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ 35255);



















const _c0 = () => ({
  standalone: true
});
const _c1 = a0 => ({
  "error": a0
});
function AddProduitComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76)(1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Connexion en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function AddProduitComponent_div_34_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Le nom produit est vide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddProduitComponent_div_34_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Le nom doit avoir au moins 2 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddProduitComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddProduitComponent_div_34_span_1_Template, 2, 0, "span", 80)(2, AddProduitComponent_div_34_span_2_Template, 2, 0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.f["nom"].errors == null ? null : ctx_r1.f["nom"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.f["nom"].errors == null ? null : ctx_r1.f["nom"].errors["minlength"]);
  }
}
function AddProduitComponent_mat_option_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 81)(1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", option_r3.nom, " ");
  }
}
function AddProduitComponent_mat_option_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 81)(1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", option_r4.nom, " ");
  }
}
function AddProduitComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 83)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.formattedPrixVente);
  }
}
function AddProduitComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Ce champ est obligatoire. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddProduitComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 83)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.formattedCoutProduit);
  }
}
function AddProduitComponent_div_80_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Le co\u00FBt ne peut pas \u00EAtre n\u00E9gatif.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddProduitComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddProduitComponent_div_80_span_1_Template, 2, 0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.f["prixAchat"].errors == null ? null : ctx_r1.f["prixAchat"].errors["min"]);
  }
}
function AddProduitComponent_div_90_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Le code barre doit avoir au moins 8 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddProduitComponent_div_90_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Le code barre ne doit pas d\u00E9passer 20 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddProduitComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddProduitComponent_div_90_span_1_Template, 2, 0, "span", 80)(2, AddProduitComponent_div_90_span_2_Template, 2, 0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.f["codeBare"].errors == null ? null : ctx_r1.f["codeBare"].errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.f["codeBare"].errors == null ? null : ctx_r1.f["codeBare"].errors["maxlength"]);
  }
}
function AddProduitComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "ngx-barcode6", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("bc-value", ctx_r1.f["codeBare"].value)("bc-line-color", "#000000")("bc-width", 1)("bc-height", 40)("bc-font-size", 12)("bc-display-value", true);
  }
}
function AddProduitComponent_div_105_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 96)(1, "label")(2, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddProduitComponent_div_105_div_11_Template_input_ngModelChange_2_listener($event) {
      const boutique_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](boutique_r7.selected, $event) || (boutique_r7.selected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AddProduitComponent_div_105_div_11_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.updateSelectedBoutiques());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const boutique_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", boutique_r7.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", boutique_r7.nomBoutique, " ");
  }
}
function AddProduitComponent_div_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 87)(1, "div", 88)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "S\u00E9lectionner des boutiques");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_div_105_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleBoutiqueSelectionPanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 90)(7, "div", 91)(8, "label")(9, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AddProduitComponent_div_105_Template_input_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.toggleSelectAllBoutiques($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " S\u00E9lectionner toutes les boutiques ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AddProduitComponent_div_105_div_11_Template, 4, 4, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 94)(13, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_div_105_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.confirmBoutiqueSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Confirmer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r1.areAllBoutiquesSelected());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.boutiquesList);
  }
}
function AddProduitComponent_div_109_div_10_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 103)(1, "div", 23)(2, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AddProduitComponent_div_109_div_10_ng_container_1_div_1_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const boutique_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.quantitesMap[boutique_r10.id] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 23)(6, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddProduitComponent_div_109_div_10_ng_container_1_div_1_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const boutique_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.seuilsMap[boutique_r10.id], $event) || (ctx_r1.seuilsMap[boutique_r10.id] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Date de pr\u00E9emption (Facultatif)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const boutique_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.quantitesMap[boutique_r10.id] || 0)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Quantit\u00E9 en stock pour ", boutique_r10.nomBoutique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("placeholder", "Seuil d'alerte pour ", boutique_r10.nomBoutique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.seuilsMap[boutique_r10.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Seuil d'alerte pour ", boutique_r10.nomBoutique, "");
  }
}
function AddProduitComponent_div_109_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddProduitComponent_div_109_div_10_ng_container_1_div_1_Template, 13, 10, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const boutique_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", boutique_r10.selected);
  }
}
function AddProduitComponent_div_109_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddProduitComponent_div_109_div_10_ng_container_1_Template, 2, 1, "ng-container", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.boutiquesList);
  }
}
function AddProduitComponent_div_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Inventaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 98)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Ajouter dans les stocks");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "label", 99)(8, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddProduitComponent_div_109_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.isChecked, $event) || (ctx_r1.isChecked = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AddProduitComponent_div_109_Template_input_change_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onToggleChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, AddProduitComponent_div_109_div_10_Template, 2, 1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.isChecked);
  }
}
function AddProduitComponent_button_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_button_117_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.clearImage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddProduitComponent_div_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
function AddProduitComponent_div_134_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 112)(1, "div", 113)(2, "div", 114)(3, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_div_134_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, ctx_r1.popupData.type === "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.popupData.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.popupData.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.popupData.message);
  }
}
function AddProduitComponent_div_135_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Ce champ est obligatoire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AddProduitComponent_div_135_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Email invalide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AddProduitComponent_div_135_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Ce champ est obligatoire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AddProduitComponent_div_135_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.apiMessageType === "success" ? "assets/img/succcccc.png" : "assets/img/error.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.messageAPI);
  }
}
function AddProduitComponent_div_135_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 118)(1, "div", 119)(2, "div", 120)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Ajouter une boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_div_135_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closePopupBoutique());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 121)(8, "div", 15)(9, "div", 16)(10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Boutique ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " Entrep\u00F4t ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 126)(21, "div", 127)(22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "label", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Nom de la boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, AddProduitComponent_div_135_div_26_Template, 3, 0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "label", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, AddProduitComponent_div_135_div_31_Template, 3, 0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 127)(33, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "input", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "label", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "T\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, AddProduitComponent_div_135_div_37_Template, 3, 0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "label", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Adresse boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, AddProduitComponent_div_135_div_42_Template, 4, 2, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 134)(44, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_div_135_Template_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closePopupBoutique());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_div_135_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.onSubmitBoutique());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, " Ajouter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.boutiqueForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r1.boutiqueForm.get("nomBoutique")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.boutiqueForm.get("nomBoutique")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r1.boutiqueForm.get("email")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.boutiqueForm.get("email")) == null ? null : tmp_5_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx_r1.boutiqueForm.get("telephone")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.boutiqueForm.get("telephone")) == null ? null : tmp_6_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.messageAPI);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r1.boutiqueForm.valid ? "#0672E4" : "#0671e434")("color", ctx_r1.boutiqueForm.valid ? "#ffffff" : "#00000073")("cursor", ctx_r1.boutiqueForm.valid ? "pointer" : "no-drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.boutiqueForm.invalid);
  }
}
function AddProduitComponent_div_136_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Le nom doit avoir au moins 3 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddProduitComponent_div_136_div_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Le nom ne doit pas d\u00E9passer 20 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddProduitComponent_div_136_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddProduitComponent_div_136_div_13_span_1_Template, 2, 0, "span", 80)(2, AddProduitComponent_div_136_div_13_span_2_Template, 2, 0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.c["categoryName"].errors == null ? null : ctx_r1.c["categoryName"].errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.c["categoryName"].errors == null ? null : ctx_r1.c["categoryName"].errors["maxlength"]);
  }
}
function AddProduitComponent_div_136_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessageCategory, " ");
  }
}
function AddProduitComponent_div_136_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.apiMessageType === "success" ? "assets/img/succcccc.png" : "assets/img/error.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.messageAPI);
  }
}
function AddProduitComponent_div_136_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 118)(1, "div", 140)(2, "div", 120)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Cr\u00E9er une cat\u00E9gorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_div_136_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closePopupCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 121)(8, "div", 126)(9, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Nom cat\u00E9gorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AddProduitComponent_div_136_div_13_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, AddProduitComponent_div_136_div_14_Template, 2, 1, "div", 144)(15, AddProduitComponent_div_136_div_15_Template, 4, 2, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 134)(17, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_div_136_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closePopupCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_div_136_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.submitFormCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Ajouter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.ajouteCategoryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.c["categoryName"].touched && ctx_r1.c["categoryName"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.errorMessageCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.messageAPI);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r1.ajouteCategoryForm.valid ? "#0672E4" : "#0671e434");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.ajouteCategoryForm.invalid);
  }
}
function AddProduitComponent_div_137_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Le nom doit avoir au moins 2 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddProduitComponent_div_137_div_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Le nom ne doit pas d\u00E9passer 20 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AddProduitComponent_div_137_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddProduitComponent_div_137_div_13_span_1_Template, 2, 0, "span", 80)(2, AddProduitComponent_div_137_div_13_span_2_Template, 2, 0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.u["unityName"].errors == null ? null : ctx_r1.u["unityName"].errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.u["unityName"].errors == null ? null : ctx_r1.u["unityName"].errors["maxlength"]);
  }
}
function AddProduitComponent_div_137_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessageUnity, " ");
  }
}
function AddProduitComponent_div_137_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.apiMessageType === "success" ? "assets/img/succcccc.png" : "assets/img/error.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.messageAPI);
  }
}
function AddProduitComponent_div_137_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 118)(1, "div", 140)(2, "div", 120)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Cr\u00E9er une unit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_div_137_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closePopupUnit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 121)(8, "div", 126)(9, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Nom unit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AddProduitComponent_div_137_div_13_Template, 3, 2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, AddProduitComponent_div_137_div_14_Template, 2, 1, "div", 144)(15, AddProduitComponent_div_137_div_15_Template, 4, 2, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 134)(17, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_div_137_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.closePopupUnit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_div_137_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.submitFormUnity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Ajouter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.ajouteUniteForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.u["unityName"].touched && ctx_r1.u["unityName"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.errorMessageUnity);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.messageAPI);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r1.ajouteUniteForm.valid ? "#0672E4" : "#0671e434");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.ajouteUniteForm.invalid);
  }
}
class AddProduitComponent {
  // Getter pour faciliter l'accès aux contrôles dans le template
  get c() {
    return this.ajouteCategoryForm.controls;
  }
  get u() {
    return this.ajouteUniteForm.controls;
  }
  get f() {
    return this.ajouteProduitForm.controls;
  }
  clearImage() {
    this.newPhotoUrl = null;
    this.imageFile = null;
  }
  testImageCompression(file) {
    var _this = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!file) {
        console.log('Aucun fichier sélectionné.');
        return;
      }
      console.log('Taille originale:', file.size / 1024, 'Ko');
      // Options de compression
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1000,
        useWebWorker: true
      };
      try {
        const compressedFile = yield (0,browser_image_compression__WEBPACK_IMPORTED_MODULE_1__["default"])(file, options);
        console.log('Taille après compression:', compressedFile.size / 1024, 'Ko');
        // Vérifier si le fichier est bien en PNG/JPEG après compression
        if (compressedFile.type !== 'image/png' && compressedFile.type !== 'image/jpeg') {
          console.error('Le fichier compressé n\'est pas un format supporté (PNG ou JPEG).');
          _this.errorMessage = 'Erreur de compression : Le format de l\'image n\'est pas valide.';
          return;
        }
        // Lire l'image compressée et afficher l'aperçu
        const reader = new FileReader();
        reader.onload = e => {
          _this.newPhotoUrl = e.target?.result;
          console.log('Image compressée prête à être affichée !');
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error('Erreur lors de la compression:', error);
      }
    })();
  }
  goToProduit() {
    this.router.navigate(['/produit']);
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
  // Méthode pour afficher le popup avec des données passées en paramètre
  showPopupMessage(data) {
    this.popupData = data;
    this.showPopup = true;
  }
  // Méthode pour fermer le popup
  closePopup() {
    this.showPopup = false;
  }
  constructor(
  // private sharedDataService: SharedDataService,
  categorieService, uniteMesureService, produitService, fb, router, usersService) {
    this.categorieService = categorieService;
    this.uniteMesureService = uniteMesureService;
    this.produitService = produitService;
    this.fb = fb;
    this.router = router;
    this.usersService = usersService;
    this.isChecked = false;
    this.showPopup = false;
    this.boutiqueName = '';
    this.boutiqueId = 1;
    this.messageAPI = '';
    this.apiMessageType = '';
    this.seuilsMap = {};
    this.errorMessage = '';
    this.errorMessageCategory = '';
    this.errorMessageUnity = '';
    this.boutiquesList = [];
    this.showPopupCategory = false;
    this.showPopupUnit = false;
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
    this.boutiqueIdSelected = [];
    this.quantitesMap = {};
    this.successMessage = null;
    // POUR UNITE
    this.UniterControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl();
    this.showCategoryCreation = false;
    this.showUniteCreation = false;
    // Variable initialisée vide
    this.formattedPrixVente = '';
    this.formattedCoutProduit = '';
    // users: any[] = [];
    this.filteredUsers = [];
    this.indicatif = '';
    this.maxPhoneLength = 8;
    this.isAscending = true;
    this.searchTerm = '';
    this.urllink = "assets/img/appareil.jpg";
    this.newPhotoUrl = null;
    this.selectedFile = null;
    //////// FOCUS CATEGORY
    this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl();
    this.uniteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl();
    this.options = []; // Liste des catégories récupérées
    this.optionsUnite = []; // Liste des unites récupérées
    this.filteredOptions = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
    this.filteredNomUnite = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
    this.controlBoutique = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('');
    this.streetsBoutique = []; // Associe les noms aux IDs
    this.showPopupBoutique = false;
    this.showBoutiqueSelectionPanel = false;
    this.selectedBoutiques = [];
    // Variable regroupant toutes les informations du popup
    this.popupData = {
      title: '',
      message: '',
      image: '',
      type: 'success'
    };
    this.formSubmitted = false;
    this.showBoutiqueError = false;
    this.preemptionDatesMap = {};
    // Options de configuration pour le code barre
    this.showBarcode = false;
  }
  // Méthodes d'ouverture/fermeture des popups
  openPopupCategory() {
    this.showPopupCategory = true;
    this.ajouteCategoryForm.reset();
    this.errorMessageCategory = '';
    this.messageAPI = '';
  }
  closePopupCategory() {
    this.showPopupCategory = false;
  }
  openPopupUnit() {
    this.showPopupUnit = true;
    this.ajouteUniteForm.reset();
    this.errorMessageUnity = '';
    this.messageAPI = '';
  }
  closePopupUnit() {
    this.showPopupUnit = false;
  }
  // onToggleChange(event: Event) {
  //   // event.target permet d’accéder au checkbox
  //   const checkbox = event.target as HTMLInputElement;
  //   console.log('isChecked:', checkbox.checked);
  // }
  onToggleChange(event) {
    const checkbox = event.target;
    const newValue = checkbox.checked;
    if (newValue && this.boutiqueIdSelected.length === 0) {
      this.errorMessage = "Veuillez sélectionner au moins une boutique avant d'ajouter des stocks.";
      this.showBoutiqueError = true;
      // Annule l'activation du switch
      setTimeout(() => {
        this.isChecked = false;
      }, 0);
    } else {
      this.isChecked = newValue;
      // Efface le message si le switch est désactivé
      if (this.errorMessage === "Veuillez sélectionner au moins une boutique avant d'ajouter des stocks.") {
        this.errorMessage = '';
      }
    }
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      // Vérification du format du fichier
      const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!allowedFormats.includes(file.type)) {
        this.errorMessage = 'Le fichier doit être une image (JPG, PNG)';
        return;
      }
      this.selectedFile = file;
      this.imageFile = file;
      // Tester la compression
      this.testImageCompression(file);
      const reader = new FileReader();
      reader.onload = e => {
        this.newPhotoUrl = e.target?.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
  navigateBack() {
    this.router.navigate(['/produit']);
  }
  setupFormSubscriptions() {
    // Réinitialisation des messages d'API (sécurité)
    this.messageAPI = '';
    this.apiMessageType = '';
    // Chargement des catégories depuis l'API et initialisation du filtre autocomplete
    this.categorieService.getCategories().subscribe({
      next: categories => {
        this.options = categories || [];
        // filteredOptions émettra une première fois grâce à startWith('')
        this.filteredOptions = this.myControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(value => {
          // value peut être une string saisie par l'utilisateur ou un objet Categorie
          const name = value ? typeof value === 'string' ? value : value.nom : '';
          return name;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(name => name ? this._filter(name) : this.options.slice()));
      },
      error: error => {
        console.error('Erreur lors de la récupération des catégories :', error);
        // garde options vide si erreur
        this.options = [];
        this.filteredOptions = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
      }
    });
    // Chargement des unités de mesure et initialisation du filtre autocomplete
    this.uniteMesureService.getUniteMesure().subscribe({
      next: uniteMesures => {
        this.optionsUnite = uniteMesures || [];
        this.filteredNomUnite = this.uniteControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(value => {
          const name = value ? typeof value === 'string' ? value : value.nom : '';
          return name;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(name => name ? this._filterUnite(name) : this.optionsUnite.slice()));
      },
      error: error => {
        console.error('Erreur lors de la récupération des unités :', error);
        this.optionsUnite = [];
        this.filteredNomUnite = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
      }
    });
    // Propagation automatique de la valeur sélectionnée dans myControl vers ajouteProduitForm.categorieId
    // Ceci gère à la fois les sélections UI (mat-option) et les valeurs définies programatiquement (setValue)
    this.myControl.valueChanges.subscribe(value => {
      if (value && typeof value !== 'string' && value.id !== undefined) {
        // L'utilisateur a sélectionné (ou on a programmé) un objet Categorie
        this.ajouteProduitForm.get('categorieId')?.setValue(value.id);
      } else {
        // texte libre ou vide => effacer l'id lié
        this.ajouteProduitForm.get('categorieId')?.setValue(null);
      }
    });
    // Même logique pour l'unité
    this.uniteControl.valueChanges.subscribe(value => {
      if (value && typeof value !== 'string' && value.id !== undefined) {
        this.ajouteProduitForm.get('uniteId')?.setValue(value.id);
      } else {
        this.ajouteProduitForm.get('uniteId')?.setValue(null);
      }
    });
    // (Optionnel mais utile) Si tu veux que l'input affiche directement 'nom' quand on met un objet dans le control
    // tu as déjà les displayFn() / displayFnUnite() utilisés par [displayWith] dans le template.
    // Remarque : l'event de création (onCreateCategoryClick / submitFormCategory) doit faire :
    // this.options.push(newCategory);
    // this.myControl.setValue(newCategory, { emitEvent: true });
    // this.ajouteProduitForm.get('categorieId')?.setValue(newCategory.id);
    // De cette façon, la subscription myControl.valueChanges ci-dessus propagera automatiquement l'id.
  }
  loadInitialData() {
    this.ajouteProduitForm = this.fb.group({
      nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2)]],
      prixVente: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      prixAchat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(0)]],
      quantite: ['0'],
      seuilAlert: ['0'],
      description: [''],
      codeBare: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(20)]],
      categorieId: [''],
      uniteId: [''],
      datePreemption: [''],
      typeProduit: ['PHYSIQUE', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
    this.formSubmitted = false;
    this.ajouteCategoryForm = this.fb.group({
      categoryName: ['', [/*Validators.required,*/_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(20)]]
    });
    // Formulaire pour ajouter une unite
    this.ajouteUniteForm = this.fb.group({
      unityName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(20)]]
    });
    // Abonnement pour mettre à jour l'image par défaut en fonction du nom du produit
    this.ajouteProduitForm.get('nom')?.valueChanges.subscribe(name => {
      // Si aucun fichier n'a été sélectionné manuellement
      // ou si le fichier actuel est le fichier généré par défaut (nommé 'default.svg')
      if (!this.selectedFile || this.selectedFile && this.selectedFile.name === 'default.svg') {
        if (name && name.trim().length > 0) {
          this.newPhotoUrl = this.generateImageFromLetter(name.trim()[0]);
          this.selectedFile = this.dataURLtoFile(this.newPhotoUrl, 'default.svg');
          this.imageFile = this.selectedFile;
        } else {
          // Si le champ est vide, affichez l'image par défaut
          this.newPhotoUrl = this.urllink;
        }
      }
    });
    // Remplacer l'abonnement existant par :
    this.ajouteProduitForm.get('codeBare')?.valueChanges.subscribe(value => {
      this.showBarcode = value && value.length >= 3;
    });
  }
  setupAutocompleteFilters() {
    // À chaque changement de valeur dans le champ "categoryName", on réinitialise l'erreur
    this.ajouteCategoryForm.get('categoryName')?.valueChanges.subscribe(() => {
      this.errorMessageCategory = '';
      this.messageAPI = '';
      this.apiMessageType = '';
    });
    // À chaque changement de valeur dans le champ "uniteName", on réinitialise l'erreur
    this.ajouteUniteForm.get('unityName')?.valueChanges.subscribe(() => {
      this.errorMessageUnity = '';
      this.messageAPI = '';
      this.apiMessageType = '';
    });
  }
  ngOnInit() {
    this.initForm();
    this.getBoutiqueName();
    this.setupFormSubscriptions();
    this.loadInitialData();
    this.setupAutocompleteFilters();
    this.getFilteredStreetsBoutique();
    this.getBoutiqueName();
    // Partage de donner de user
    // this.sharedDataService.boutiqueName$.subscribe(name => {
    //   console.log("AddProduitComponent - Nom boutique récupéré :", name);
    //   this.boutiqueName = name;
    // });
    // 🟢 Filtrage des catégories (OK)
    // Abonnement pour récupérer l'ID de la boutique active
    // this.sharedDataService.boutiqueId$.subscribe(id => {
    //   this.boutiqueId = id;
    // });
  }
  generateImageFromLetter(letter) {
    // Génération d'un SVG affichant la première lettre en majuscule
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
  dataURLtoFile(dataurl, filename) {
    const arr = dataurl.split(',');
    const mimeMatch = arr[0].match(/:(.*?);/);
    if (!mimeMatch) {
      throw new Error('Format de dataURL invalide');
    }
    const mime = mimeMatch[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {
      type: mime
    });
  }
  getBoutiqueName() {
    this.usersService.getUserInfo().subscribe(userInfo => {
      if (userInfo && userInfo.boutiques) {
        // this.streetsBoutique = userInfo.boutiques.map((boutique: any) => boutique.nomBoutique);
        this.boutiquesList = userInfo.boutiques; // Stocker les objets complets
        this.streetsBoutique = this.boutiquesList.map(b => b.nomBoutique);
        this.getFilteredStreetsBoutique();
      } else {
        console.error('Aucune boutique trouvée pour cet utilisateur');
        this.boutiqueName = 'Aucune boutique';
      }
    }, error => {
      console.error('Erreur lors de la récupération des informations utilisateur', error);
    });
  }
  // Méthode pour la sélection d'une catégorie
  onCategorySelected(event) {
    console.log('Option sélectionnée :', event.option.value);
    if (event.option && event.option.value) {
      this.ajouteProduitForm.get('categorieId')?.setValue(event.option.value.id);
    } else {
      this.ajouteProduitForm.get('categorieId')?.setValue(null);
    }
  }
  onUniteSelected(event) {
    console.log('Unité sélectionnée :', event.option.value);
    if (event.option && event.option.value) {
      this.ajouteProduitForm.get('uniteId')?.setValue(event.option.value.id);
    } else {
      this.ajouteProduitForm.get('uniteId')?.setValue(null);
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
    return this.optionsUnite.filter(optionNomUnite => optionNomUnite.nom.toLowerCase().includes(filterValue));
  }
  displayFnUnite(unityMesure) {
    return unityMesure ? unityMesure.nom : '';
  }
  // Lorsque l'utilisateur clique sur "Créer" pour une catégorie
  onCreateCategoryClick() {
    this.openPopupCategory();
  }
  // Lorsque l'utilisateur clique sur "Créer" pour une unité
  onCreateUniteClick() {
    this.openPopupUnit();
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
        if (response && response.message) {
          // Réinitialiser le formulaire
          this.ajouteCategoryForm.get('categoryName').setValue('');
          // Fermer le pop-up
          this.closePopupCategory();
          // Créer le nouvel objet catégorie
          const newCategory = {
            id: response.id,
            nom: categoryData.nom
          };
          // Ajouter à la liste des options
          this.options.push(newCategory);
          // Mettre la valeur dans l'input (et émettre l'événement valueChanges)
          this.myControl.setValue(newCategory, {
            emitEvent: true
          });
          // 1. Mettre à jour l'input d'autocomplete
          setTimeout(() => {
            this.myControl.setValue(newCategory); // Force la mise à jour de la valeur dans le champ autocomplete
          }, 100);
          // 2. Mettre à jour la valeur dans le formulaire principal
          this.ajouteProduitForm.get('categorieId')?.setValue(newCategory.id);
          // Mettre à jour les options filtrées
          this.filteredOptions = this.myControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(newCategory),
          // Pré-remplir avec la nouvelle valeur
          (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(value => typeof value === 'string' ? value : value?.nom), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(name => name ? this._filter(name) : this.options.slice()));
          // Afficher message
          this.apiMessageType = 'success';
          this.messageAPI = response.message || "La catégorie a été créée avec succès.";
        }
      },
      error: error => {
        console.log("Erreur complète :", error);
        let message = "Une erreur est survenue lors de la création de la catégorie.";
        if (error.error && error.error.error) {
          message = error.error.error;
        }
        this.apiMessageType = 'error';
        this.messageAPI = message;
      }
    });
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
          this.closePopupUnit();
          // Créer la nouvelle unité
          const newUnity = {
            id: response.id,
            nom: unityData.nom
          };
          this.showUniteCreation = false;
          // Ajouter à la liste
          this.optionsUnite.push(newUnity);
          // Force la mise à jour du filtre
          this.uniteControl.updateValueAndValidity();
          // 1. Mettre à jour l'input d'autocomplete
          this.uniteControl.setValue(newUnity);
          // 2. Mettre à jour le formulaire principal
          this.ajouteProduitForm.get('uniteId')?.setValue(newUnity.id);
          // 3. Mettre à jour les options filtrées
          // Corriger la structure du pipe RxJS
          // Corriger la structure du pipe RxJS
          this.filteredNomUnite = this.uniteControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(newUnity), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(value => typeof value === 'string' ? value : value?.nom), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(name => name ? this._filterUnite(name) : this.optionsUnite.slice()));
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
  onSubmit() {
    var _this2 = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.formSubmitted = true; // Active le mode "soumis"
      _this2.showBoutiqueError = false;
      // Vérifiez d'abord les boutiques avant le formulaire
      if (_this2.boutiqueIdSelected.length === 0) {
        _this2.showBoutiqueError = true;
        _this2.errorMessage = "Veuillez sélectionner au moins une boutique.";
        return;
      }
      if (_this2.ajouteProduitForm.invalid) {
        _this2.errorMessage = "Veuillez vérifier les informations saisies.";
        return;
      }
      _this2.isLoading = true;
      const produit = _this2.ajouteProduitForm.value;
      let date = _this2.ajouteProduitForm.get('datePreemption')?.value;
      if (date) {
        let dateISO;
        if (date instanceof Date) {
          const day = String(date.getDate()).padStart(2, '0');
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const year = date.getFullYear();
          dateISO = `${year}-${month}-${day}`;
        } else {
          const parts = date.split('-');
          if (parts[0].length === 4) {
            dateISO = date;
          } else {
            dateISO = `${parts[2]}-${parts[1]}-${parts[0]}`;
          }
        }
        produit.datePreemption = dateISO;
      }
      // Si le prix d'achat n'est pas fourni, mettez-le à null ou 0
      if (produit.prixAchat === '' || produit.prixAchat === null) {
        produit.prixAchat = null; // ou 0 selon vos besoins
      }
      console.log('Produit soumis:', produit);
      const tokenStored = localStorage.getItem('accessToken');
      if (!tokenStored) {
        _this2.showPopupMessage({
          title: 'Erreur',
          message: 'Aucun token trouvé !',
          image: 'assets/img/error.png',
          type: 'error'
        });
        _this2.isLoading = false;
        return;
      }
      // const token = `Bearer ${tokenStored}`;
      const addToStock = _this2.isChecked;
      try {
        let finalImage;
        // Si une image a été sélectionnée
        if (_this2.imageFile && _this2.imageFile.name !== 'default.svg') {
          console.log('Compression de l\'image en cours...');
          // Options de compression
          const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1000,
            useWebWorker: true
          };
          const compressedFile = yield (0,browser_image_compression__WEBPACK_IMPORTED_MODULE_1__["default"])(_this2.imageFile, options);
          console.log('Taille après compression:', compressedFile.size / 1024, 'Ko');
          // Vérification du type MIME du fichier compressé
          if (compressedFile.type !== 'image/png' && compressedFile.type !== 'image/jpeg') {
            _this2.errorMessage = 'Le fichier compressé n\'est pas un format valide (PNG ou JPEG).';
            _this2.isLoading = false;
            return;
          }
          // Changer le nom du fichier en fonction du type MIME
          const extension = compressedFile.type === 'image/png' ? '.png' : '.jpeg';
          finalImage = new File([compressedFile], _this2.imageFile.name.replace(/\..+$/, extension), {
            type: compressedFile.type,
            // Forcer le type MIME à PNG ou JPEG
            lastModified: Date.now()
          });
          console.log('Final Image:', finalImage);
        } else {
          // Si aucune image n'a été sélectionnée, utiliser l'image SVG générée
          const productName = produit.nom.trim()[0]; // Récupérer la première lettre du nom du produit
          finalImage = _this2.dataURLtoFile(_this2.generateImageFromLetter(productName), 'default.svg');
          console.log('Image par défaut utilisée:', finalImage);
        }
        const quantitesSelected = _this2.boutiqueIdSelected.map(id => Number(_this2.quantitesMap[id]) || 0);
        const seuilsSelected = _this2.boutiqueIdSelected.map(id => Number(_this2.seuilsMap[id]) || 0);
        _this2.produitService.ajouterProduit(_this2.boutiqueIdSelected, quantitesSelected, seuilsSelected, produit, finalImage, addToStock, produit.datePreemption).subscribe({
          next: data => {
            _this2.showPopupMessage({
              title: 'Succès',
              message: 'Produit créé avec succès',
              image: 'assets/img/succcccc.png',
              type: 'success'
            });
            _this2.ajouteProduitForm.reset();
            _this2.myControl.reset();
            _this2.uniteControl.reset();
            _this2.imageFile = null;
            _this2.selectedFile = null;
            _this2.newPhotoUrl = null;
            _this2.isLoading = false;
            _this2.router.navigate(['/produit']);
          },
          error: error => {
            let errorMessage = 'Erreur lors de la création du produit';
            if (error.error) {
              if (typeof error.error === 'object' && error.error.error) {
                errorMessage = error.error.error;
              } else if (typeof error.error === 'string') {
                errorMessage = error.error;
              }
            }
            errorMessage = errorMessage.replace('Une erreur est survenue : ', '');
            _this2.showPopupMessage({
              title: 'Erreur',
              message: errorMessage,
              image: 'assets/img/error.png',
              type: 'error'
            });
            _this2.isLoading = false;
          }
        });
      } catch (error) {
        console.error('Erreur lors de la compression:', error);
        _this2.errorMessage = 'Erreur lors de la compression de l\'image';
        _this2.isLoading = false;
      }
    })();
  }
  // Modifiez onCodeBarChange() :
  onCodeBarChange() {
    const codeBareValue = this.ajouteProduitForm.get('codeBare')?.value || '';
    this.showBarcode = codeBareValue.length >= 1;
  }
  validateNumericInput(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }
  getFilteredStreetsBoutique() {
    this.filteredStreetsBoutique = this.controlBoutique.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(200), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(value => {
      // value peut être une string ou un objet (si tu veux gérer object dans le futur)
      if (!value) return '';
      if (typeof value === 'string') return value;
      // si jamais tu passes un objet boutique ici, on essaie d'en extraire le nom
      return value.nomBoutique || value.nom || '';
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(v => this._filterBoutique(v || '')));
  }
  _filterBoutique(value) {
    const filterValue = this._normalizeValue(value);
    return this.boutiquesList.filter(b => this._normalizeValue(b.nomBoutique).includes(filterValue)).map(b => b.nomBoutique);
  }
  _normalizeValue(value) {
    return value.toLowerCase().replace(/\s/g, '');
  }
  onFocusBoutiqueInput() {
    this.controlBoutique.setValue(''); // Réinitialise la valeur pour afficher toutes les options
  }
  initForm() {
    this.boutiqueForm = this.fb.group({
      nomBoutique: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      adresse: [''],
      telephone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(/^\d{8,15}$/)]],
      type: ['BOUTIQUE', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required] // Ajout du champ type
    });
  }
  updatePhoneValidator(longueur) {
    this.boutiqueForm.controls['phone'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(`^\\+\\d{1,3}\\s?\\d{${longueur}}$`)]);
    this.boutiqueForm.controls['phone'].updateValueAndValidity();
  }
  openPopupBoutique() {
    this.showPopupBoutique = true;
  }
  closePopupBoutique() {
    this.showPopupBoutique = false;
    this.resetForm();
  }
  resetForm() {
    this.boutiqueForm.patchValue({
      nomBoutique: '',
      emailBoutique: '',
      adresseBoutique: '',
      telephoneBoutique: '',
      type: 'BOUTIQUE'
    });
    this.boutiqueForm.markAsPristine();
    this.boutiqueForm.markAsUntouched();
    this.boutiqueForm.updateValueAndValidity();
  }
  onBoutiqueSelected(event) {
    const selectedName = event.option.value;
    const selectedBoutique = this.boutiquesList.find(b => b.nomBoutique === selectedName);
    // Ajouter au tableau au lieu d'assigner une valeur unique
    if (selectedBoutique) {
      this.boutiqueIdSelected = [selectedBoutique.id]; // Tableau avec un seul élément
    } else {
      this.boutiqueIdSelected = []; // Tableau vide
    }
  }
  onSubmitBoutique() {
    // Marquer les champs comme touchés pour afficher les erreurs
    Object.keys(this.boutiqueForm.controls).forEach(field => {
      const control = this.boutiqueForm.get(field);
      control?.markAsTouched({
        onlySelf: true
      });
    });
    if (this.boutiqueForm.invalid) {
      return;
    }
    const formData = this.boutiqueForm.value;
    this.usersService.addBoutique(formData).subscribe({
      next: response => {
        // Essayer de récupérer l'objet boutique créé dans différentes formes possibles
        const created = response?.data || response?.boutique || response || null;
        // Construire un objet boutique minimal si nécessaire
        const newBoutique = {
          id: created?.id ?? created?.ID ?? Date.now(),
          // fallback if id missing
          nomBoutique: created?.nomBoutique ?? created?.nom ?? formData.nomBoutique ?? 'Nouvelle boutique',
          // preserve other fields if present
          email: created?.email ?? formData.email,
          adresse: created?.adresse ?? formData.adresse ?? '',
          telephone: created?.telephone ?? formData.telephone ?? ''
        };
        // Ajouter dans la liste locale (éviter les doublons)
        const exists = this.boutiquesList.some(b => b.id === newBoutique.id);
        if (!exists) {
          // marquer sélectionnée pour que l'utilisateur la voie tout de suite
          newBoutique.selected = true;
          this.boutiquesList.push(newBoutique);
        } else {
          // mettre à jour éventuellement l'objet existant
          this.boutiquesList = this.boutiquesList.map(b => b.id === newBoutique.id ? {
            ...b,
            ...newBoutique
          } : b);
          this.boutiquesList.find(b => b.id === newBoutique.id).selected = true;
        }
        // Mettre à jour selectedBoutiques et boutiqueIdSelected
        this.selectedBoutiques = this.boutiquesList.filter(b => b.selected);
        this.boutiqueIdSelected = this.selectedBoutiques.map(b => b.id);
        // Mettre le nom directement dans l'input (comme tu le fais pour categorie/unite)
        this.controlBoutique.setValue(newBoutique.nomBoutique, {
          emitEvent: true
        });
        // Recréer le filtre (pour être sûr que l'autocomplete a les dernières options)
        this.getFilteredStreetsBoutique();
        // Feedback à l'utilisateur
        this.showPopupMessage({
          title: 'Succès',
          message: 'Boutique créée avec succès',
          image: 'assets/img/succcccc.png',
          type: 'success'
        });
        // Fermer le popup et réinitialiser le formulaire
        this.closePopupBoutique();
        this.boutiqueForm.reset({
          type: 'BOUTIQUE'
        });
      },
      error: error => {
        let errorMessage = 'Erreur lors de la création de la boutique';
        if (error.error) {
          errorMessage = typeof error.error === 'string' ? error.error : error.error.message;
        }
        this.showPopupMessage({
          title: 'Erreur',
          message: errorMessage,
          image: 'assets/img/error.png',
          type: 'error'
        });
      }
    });
  }
  displayFnBoutique(boutique) {
    return boutique ? boutique : '';
  }
  toggleBoutiqueSelectionPanel() {
    this.showBoutiqueSelectionPanel = !this.showBoutiqueSelectionPanel;
  }
  updateSelectedBoutiques() {
    this.selectedBoutiques = this.boutiquesList.filter(b => b.selected);
  }
  confirmBoutiqueSelection() {
    this.selectedBoutiques = this.boutiquesList.filter(b => b.selected);
    this.boutiqueIdSelected = this.selectedBoutiques.map(b => b.id);
    const selectedNames = this.selectedBoutiques.map(b => b.nomBoutique);
    this.controlBoutique.setValue(selectedNames.join(', '));
    this.toggleBoutiqueSelectionPanel();
    // Réinitialisez l'erreur boutique
    if (this.boutiqueIdSelected.length > 0) {
      this.showBoutiqueError = false;
      if (this.errorMessage === "Veuillez sélectionner au moins une boutique.") {
        this.errorMessage = '';
      }
    }
  }
  // Vérifie si toutes les boutiques sont sélectionnées
  areAllBoutiquesSelected() {
    return this.boutiquesList.length > 0 && this.boutiquesList.every(b => b.selected);
  }
  // Sélectionne ou désélectionne toutes les boutiques
  toggleSelectAllBoutiques(event) {
    const isChecked = event.target.checked;
    this.boutiquesList.forEach(b => b.selected = isChecked);
    this.updateSelectedBoutiques();
  }
  // Ajouter cette méthode
  formatPrixVente() {
    const rawValue = this.ajouteProduitForm.get('prixVente')?.value;
    if (rawValue !== null && rawValue !== undefined && !isNaN(rawValue)) {
      const formattedValue = new Intl.NumberFormat('fr-FR').format(rawValue);
      this.formattedPrixVente = `${formattedValue} FCFA`;
    } else {
      this.formattedPrixVente = '';
    }
  }
  formatCoutProduit() {
    const rawValue = this.ajouteProduitForm.get('prixAchat')?.value; // <-- Correction ici
    if (rawValue !== null && rawValue !== undefined && !isNaN(rawValue)) {
      const formattedValue = new Intl.NumberFormat('fr-FR').format(rawValue);
      this.formattedCoutProduit = `${formattedValue} FCFA`;
    } else {
      this.formattedCoutProduit = '';
    }
  }
  static {
    this.ɵfac = function AddProduitComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddProduitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_categorie_service__WEBPACK_IMPORTED_MODULE_2__.CategorieService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_unite_service__WEBPACK_IMPORTED_MODULE_3__.UniteMesureService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_4__.ProduitService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_5__.UsersService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AddProduitComponent,
      selectors: [["app-add-produit"]],
      decls: 138,
      vars: 37,
      consts: [["auto", "matAutocomplete"], ["autoUnite", "matAutocomplete"], [1, "container_global"], ["class", "loading-overlay", 4, "ngIf"], [1, "content_formulaire"], [1, "modal-body"], [1, "container_formulaire", 3, "formGroup"], ["title", "Retour sur la page produit", 1, "retour_icon_text", 2, "cursor", "pointer", "color", "#0672E4", "margin-bottom", "15px", 3, "click"], [1, "ri-arrow-left-s-line"], [2, "margin-left", "8px", "font-size", "12px"], [1, "Title"], [1, "form_left_right"], [1, "formulaire"], [1, "information_cadre"], [1, "info_titre_input"], [1, "triple"], [1, "radio-group"], [1, "radio-option"], ["type", "radio", "id", "typePhysique", "formControlName", "typeProduit", "value", "PHYSIQUE", 1, "radio-input"], ["for", "typePhysique", 1, "radio-label"], [1, "radio-custom"], ["type", "radio", "id", "typeService", "formControlName", "typeProduit", "value", "SERVICE", 1, "radio-input"], ["for", "typeService", 1, "radio-label"], [1, "champ_input"], ["autocomplete", "off", "formControlName", "nom", "type", "text", "required", "", "id", "nom", "name", "nom", "placeholder", "Saisis le nom de produit", 1, "input_focus"], ["for", "nom", 1, "label"], ["class", "error-message", 4, "ngIf"], [1, "double_input_grid"], [1, "double_input2"], ["autocomplete", "off", "type", "text", "placeholder", "Saisis le nom de cat\u00E9gorie", "matInput", "", 1, "input_focus", 2, "cursor", "pointer", 3, "formControl", "matAutocomplete"], ["for", "categorieId", 1, "label"], [3, "optionSelected", "displayWith"], [1, "select-option", 3, "click"], [2, "display", "flex", "align-items", "center", "color", "#0672E4"], [1, "ri-add-circle-fill", 2, "font-size", "20px"], [2, "margin-left", "8px"], [3, "value", 4, "ngFor", "ngForOf"], [1, "arrow_bas", 2, "position", "absolute", "right", "5px", "top", "20px"], [1, "ri-arrow-down-s-line", 2, "font-size", "20px"], [1, "champ_input", "champ_input2"], ["autocomplete", "off", "type", "text", "placeholder", "Saisis l'unit\u00E9 de mesure", "matInput", "", 1, "input_focus", 2, "cursor", "pointer", 3, "formControl", "matAutocomplete"], ["for", "uniteId", 1, "label"], ["autocomplete", "off", "formControlName", "prixVente", "type", "number", "required", "", "id", "prixVente", "name", "prixVente", "placeholder", "Saisis le nom de magasin", 1, "input_focus", 3, "input"], ["for", "prixVente", 1, "label"], ["class", "nombreDevise", 4, "ngIf"], ["autocomplete", "off", "formControlName", "prixAchat", "type", "number", "id", "prixAchat", "name", "prixAchat", "placeholder", "Saisis le prix d'achat", 1, "input_focus", 3, "input"], ["for", "prixAchat", 1, "label"], ["class", "error-message divError", 4, "ngIf"], [1, "champs_code_bare_double"], ["type", "text", "formControlName", "codeBare", "autocomplete", "off", "id", "codeBar", "name", "codeBar", "placeholder", "Num\u00E9ro code barre", "inputmode", "numeric", "pattern", "[0-9]*", "maxlength", "20", 1, "input_focus", 3, "keypress"], ["for", "codeBare", 1, "label", "labelColor"], ["style", "margin-left: 15px;", 4, "ngIf"], ["formControlName", "description", "id", "description", "name", "description", "maxlength", "150", "placeholder", "Saisis Une description pour ce produit", 1, "input_focus2"], ["for", "description", 1, "label", "labelColor"], ["autocomplete", "off", "type", "text", "placeholder", "S\u00E9lectionner vos boutiques", "matInput", "", 1, "input_focus", 2, "cursor", "pointer", 3, "click", "formControl"], ["for", "boutiqueId", 1, "label"], ["class", "boutique-selection-panel", 4, "ngIf"], [1, "btn_add_categoryDiv2"], [1, "btn_add_category2", 3, "click"], ["class", "information_cadre", 4, "ngIf"], [1, "container_file"], [1, "header_file"], ["alt", "Aper\u00E7u de l'image", 1, "roudel", 2, "max-width", "200px", 3, "src"], ["class", "clear-image-btn", 3, "click", 4, "ngIf"], ["for", "file", 1, "footer_file"], [1, "ri-file-3-fill"], ["type", "file", "accept", "image/*", "id", "file", "hidden", "", 3, "change"], [1, "information_cadre", "information_cadre_save"], [1, "container_error_message"], [1, "info_titre_input", "info_titre_input_btn"], [1, "btn_annuler"], [1, "btn_cancel", 3, "click"], [1, "btn_ajouter"], [1, "btn_save", 3, "click"], ["class", "modal-overlay", 4, "ngIf"], ["class", "popup-overlay", 4, "ngIf"], [1, "loading-overlay"], [1, "loading-content"], [1, "spinner"], [1, "error-message"], [4, "ngIf"], [3, "value"], [1, "option-content"], [1, "nombreDevise"], [1, "error-message", "divError"], [2, "margin-left", "15px"], ["bc-format", "CODE128", 3, "bc-value", "bc-line-color", "bc-width", "bc-height", "bc-font-size", "bc-display-value"], [1, "boutique-selection-panel"], [1, "panel-header"], [1, "close-btn", 3, "click"], [1, "panel-body"], [1, "boutique-item", "select-all"], ["type", "checkbox", 3, "change", "checked"], ["class", "boutique-item", 4, "ngFor", "ngForOf"], [1, "panel-footer"], [1, "btn-confirm", 3, "click"], [1, "boutique-item"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel", "ngModelOptions"], [1, "champ_input_inventaire"], [1, "switch"], [1, "slider", "round"], [4, "ngFor", "ngForOf"], ["class", "double_input_grid_true", 4, "ngIf"], [1, "double_input_grid_true"], ["type", "number", "required", "", "placeholder", "Saisis la quantit\u00E9", 1, "input_focus", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "quantite", 1, "label", "labelColor"], ["type", "number", 1, "input_focus", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["for", "seuilAlert", 1, "label", "labelColor"], ["type", "date", "formControlName", "datePreemption", "id", "datePreemption", "name", "datePreemption", 1, "input_focus"], ["for", "datePreemption", 1, "label", "labelColor"], [1, "clear-image-btn", 3, "click"], [1, "ri-delete-bin-5-line"], [1, "modal-overlay"], [1, "modal-content", 3, "ngClass"], [1, "popup-header"], [1, "popup-img"], ["alt", "Icone", 1, "popup-icon2", 3, "src"], [3, "click"], [1, "popup-overlay"], [1, "popup-content"], [1, "popup-headerBoutique"], [3, "formGroup"], ["type", "radio", "id", "typeBoutique", "formControlName", "type", "name", "type", "value", "BOUTIQUE", 1, "radio-input"], ["for", "typeBoutique", 1, "radio-label"], ["type", "radio", "id", "typeEntrepot", "formControlName", "type", "name", "type", "value", "ENTREPOT", 1, "radio-input"], ["for", "typeEntrepot", 1, "radio-label"], [1, "popup-body"], [1, "champ_grid"], ["type", "text", "formControlName", "nomBoutique", "placeholder", "Saisis le nom de la boutique", 1, "input_focus", 2, "min-width", "150px"], [1, "label"], ["type", "email", "formControlName", "email", "placeholder", "Saisis l'email", 1, "input_focus", 2, "min-width", "150px"], ["type", "number", "formControlName", "telephone", "placeholder", "00 00 00 00", 1, "input_focus", 2, "min-width", "150px"], ["type", "text", "formControlName", "adresse", "placeholder", "Saisis l'adresse", 1, "input_focus", 2, "min-width", "150px"], ["class", "errorAPI", 4, "ngIf"], [1, "popup-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-submit", 3, "click", "disabled"], [1, "error"], [1, "errorAPI"], ["alt", "Message API", 3, "src"], [1, "popup-content", 2, "max-width", "350px"], [1, "champ_input", 2, "margin-top", "15px"], ["autocomplete", "off", "formControlName", "categoryName", "type", "text", "required", "", "id", "categoryName", "name", "categoryName", "placeholder", "Saisis le nom de cat\u00E9gorie", 1, "input_focus", "input_focus_cree_cate"], ["for", "categoryName", 1, "label", "labelColor"], ["class", "error-message-category", 4, "ngIf"], [1, "error-message-category"], ["autocomplete", "off", "formControlName", "unityName", "type", "text", "required", "", "id", "unityName", "name", "unityName", "placeholder", "Saisis le nom de unit\u00E9", 1, "input_focus", "input_focus_cree_cate"], ["for", "unityName", 1, "label", "labelColor"]],
      template: function AddProduitComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddProduitComponent_div_1_Template, 5, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 4)(3, "div", 5)(4, "form", 6)(5, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_Template_p_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.navigateBack());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Produit");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 10)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Ajouter des produits");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Information des produits");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 15)(19, "div", 16)(20, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " Produit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " Service ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Nom produit");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, AddProduitComponent_div_34_Template, 3, 2, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 27)(36, "div", 28)(37, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Cat\u00E9gorie");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "mat-autocomplete", 31, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("optionSelected", function AddProduitComponent_Template_mat_autocomplete_optionSelected_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onCategorySelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "mat-option", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_Template_mat_option_click_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            $event.stopPropagation();
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onCreateCategoryClick());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Cr\u00E9er une cat\u00E9gorie");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, AddProduitComponent_mat_option_48_Template, 3, 2, "mat-option", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](49, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 28)(53, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "label", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Unit\u00E9 de mesure");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "mat-autocomplete", 31, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("optionSelected", function AddProduitComponent_Template_mat_autocomplete_optionSelected_57_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onUniteSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "mat-option", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_Template_mat_option_click_59_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onCreateUniteClick());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Cr\u00E9er une unit\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, AddProduitComponent_mat_option_64_Template, 3, 2, "mat-option", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](65, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](67, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 27)(69, "div", 23)(70, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function AddProduitComponent_Template_input_input_70_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.formatPrixVente());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "label", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "Prix de vente");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](73, AddProduitComponent_div_73_Template, 3, 1, "div", 44)(74, AddProduitComponent_div_74_Template, 2, 0, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 23)(76, "input", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function AddProduitComponent_Template_input_input_76_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.formatCoutProduit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "label", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Co\u00FBt du produit (Facultatif)");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](79, AddProduitComponent_div_79_Template, 3, 1, "div", 44)(80, AddProduitComponent_div_80_Template, 2, 1, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 13)(82, "div", 14)(83, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "Identit\u00E9 de produit");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 48)(86, "div", 23)(87, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function AddProduitComponent_Template_input_keypress_87_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.validateNumericInput($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "label", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Num\u00E9ro code barre (Facultatif)");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](90, AddProduitComponent_div_90_Template, 3, 2, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](91, AddProduitComponent_div_91_Template, 2, 6, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](93, "textarea", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "label", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "Description (Facultatif)");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "div", 13)(97, "div", 14)(98, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, "Boutique");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "div", 28)(101, "div", 23)(102, "input", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_Template_input_click_102_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.toggleBoutiqueSelectionPanel());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "label", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "S\u00E9lectionner vos boutiques");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](105, AddProduitComponent_div_105_Template, 15, 2, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "div", 57)(107, "button", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_Template_button_click_107_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.openPopupBoutique());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](108, "Cr\u00E9er une boutique");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](109, AddProduitComponent_div_109_Template, 11, 4, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "div", 13)(111, "div", 14)(112, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113, "Ajouter une image");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "div", 60)(115, "div", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](116, "img", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](117, AddProduitComponent_button_117_Template, 2, 0, "button", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "div")(119, "label", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](120, "i", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122, "Choisir un fichier");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "input", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AddProduitComponent_Template_input_change_123_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onFileSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "div", 67)(125, "div", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](126, AddProduitComponent_div_126_Template, 2, 1, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "div", 69)(128, "div", 70)(129, "button", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_Template_button_click_129_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.goToProduit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](130, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "div", 72)(132, "button", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddProduitComponent_Template_button_click_132_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133, "Sauvegarder");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](134, AddProduitComponent_div_134_Template, 11, 6, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](135, AddProduitComponent_div_135_Template, 48, 12, "div", 75)(136, AddProduitComponent_div_136_Template, 21, 7, "div", 75)(137, AddProduitComponent_div_137_Template, 21, 7, "div", 75);
        }
        if (rf & 2) {
          let tmp_24_0;
          const auto_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](42);
          const autoUnite_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](58);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.ajouteProduitForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("invalid-field", ctx.f["nom"].invalid && (ctx.f["nom"].touched || ctx.formSubmitted));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f["nom"].touched && ctx.f["nom"].invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", auto_r16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayWith", ctx.displayFn);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](49, 33, ctx.filteredOptions));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.uniteControl)("matAutocomplete", autoUnite_r17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayWith", ctx.displayFnUnite);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](65, 35, ctx.filteredNomUnite));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("invalid-field", ctx.f["prixVente"].invalid && (ctx.f["prixVente"].touched || ctx.formSubmitted));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formattedPrixVente);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f["prixVente"].touched && ctx.f["prixVente"].invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formattedCoutProduit);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f["prixAchat"].touched && ctx.f["prixAchat"].invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f["codeBare"].touched && ctx.f["codeBare"].invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showBarcode);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("invalid-field", ctx.showBoutiqueError);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.controlBoutique);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showBoutiqueSelectionPanel);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_24_0 = ctx.ajouteProduitForm.get("typeProduit")) == null ? null : tmp_24_0.value) === "PHYSIQUE");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.newPhotoUrl || ctx.urllink, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.newPhotoUrl && ctx.newPhotoUrl !== ctx.urllink);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showPopup);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showPopupBoutique);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showPopupCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showPopupUnit);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.M, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteTrigger, ngx_barcode6__WEBPACK_IMPORTED_MODULE_17__.NgxBarcode6Module, ngx_barcode6__WEBPACK_IMPORTED_MODULE_17__.NgxBarcode6Component, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.M],
      styles: ["@charset \"UTF-8\";\n.container_global[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 72% 28%;\n  position: relative;\n}\n\n.content_formulaire[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n\n\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.champ_input_Categorie[_ngcontent-%COMP%] {\n  margin-bottom: 15px !important;\n}\n\n.formulaire[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.Title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 250px;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #695c5c;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: #000;\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n.input_focus2[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 250px;\n  height: 70px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  padding-left: 10px;\n  background: none;\n  color: #777474;\n  border-radius: 5px;\n  padding-top: 10px;\n  border-bottom: 1px solid rgb(53, 50, 50);\n}\n\n.input_focus2[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.champ_input2[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 0px;\n  pointer-events: none;\n  color: rgb(66, 56, 56);\n}\n\n.champ_input[_ngcontent-%COMP%]   .labelCategory[_ngcontent-%COMP%] {\n  color: rgb(66, 56, 56);\n  left: 0;\n  font-size: 14px;\n}\n\n.input_focus2[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus2[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus2[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus2[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 15px;\n  transition: all 0.2s ease-in-out;\n}\n\n.info_titre_input[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.info_titre_input[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 10px;\n  letter-spacing: 0.6px;\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n  border-radius: 5px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.information_cadre_save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.input_focus_magasin[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.input_focus_petit[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.double_input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.double_input_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\n.double_input_grid_true[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.double_inputh[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  position: relative;\n  top: 10px;\n}\n\n.champ_input2[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  box-sizing: border-box;\n  vertical-align: top;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\n\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #0672E4; \n\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n\n\n.container_file[_ngcontent-%COMP%] {\n  width: 150px;\n  border-radius: 10px;\n  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  gap: 5px;\n  background-color: rgba(0, 110, 255, 0.041);\n  margin-bottom: 10px;\n  margin-top: 20px;\n}\n\n.header_file[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 140px;\n  border: 1px dashed rgba(6, 113, 228, 0.6156862745);\n  border-radius: 10px;\n  flex-direction: column;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n\n.header_file[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.header_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n}\n\n.footer_file[_ngcontent-%COMP%] {\n  background-color: rgba(0, 110, 255, 0.075);\n  width: 140px;\n  height: 35px;\n  padding: 5px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: black;\n  border: none;\n  margin-top: 3px;\n}\n\n.footer_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  font-size: 10px;\n}\n\n.footer_file[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 7px;\n}\n\n#file[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.info_titre_input_btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 20px;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #ff0000;\n  color: #fff;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #0672E4;\n  color: #fff;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all 0.5s;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.btn_add_category2[_ngcontent-%COMP%] {\n  border: none;\n  padding: 2px 10px;\n  border-radius: 4px;\n  background-color: #0672E4;\n  color: #fff;\n  cursor: pointer;\n}\n\n.btn_add_category2[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all ease 0.5s;\n}\n\n.btn_add_categoryDiv2[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  justify-content: center;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.double_input2[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.ajouter_cadre_cree_c_u[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 230px;\n  background-color: #fff;\n  margin-top: 40px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n}\n\n.container_error_message[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: red;\n  font-weight: bold;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.input_focus_cree_cate[_ngcontent-%COMP%] {\n  min-width: auto;\n}\n\n.btn-c-s[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.btn_s_category[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 35px;\n  background-color: rgba(6, 113, 228, 0.7843137255);\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  letter-spacing: 0.6px;\n  padding: 0 25px;\n}\n\n.btn_c_category[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 35px;\n  background-color: rgba(255, 0, 0, 0.8078431373);\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  letter-spacing: 0.6px;\n  padding: 0 25px;\n}\n\n.btn_s_category[_ngcontent-%COMP%]:hover {\n  background-color: #0672E4;\n  transition: all ease 0.5s;\n}\n\n.btn_c_category[_ngcontent-%COMP%]:hover {\n  background-color: #ff0000;\n  transition: all ease 0.5s;\n}\n\n.error-message-category[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: red;\n  font-weight: bold;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.error-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-style: 10px;\n}\n\n.errorAPI[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  margin-top: -9px;\n}\n\n.errorAPI[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n}\n\n.errorAPI[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding-left: 5px;\n}\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n\n\n.modal-content[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 30px;\n  border-radius: 10px;\n  text-align: center;\n  width: 90%;\n  max-width: 400px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  animation: fadeInDown 0.3s ease;\n  position: relative;\n}\n\n\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.popup-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin-bottom: 10px;\n}\n\n.popup-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px;\n}\n\n.modal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5em;\n  color: #333;\n}\n\n.modal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: #555;\n  margin: 20px 0;\n}\n\n\n\n.modal-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  font-size: 1em;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n\n\n\n.modal-content.error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #e53935;\n}\n\n.modal-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n}\n\n.modal-content.error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #d32f2f;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 18px;\n  z-index: 1000;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid white;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.champs_code_bare_double[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 150px;\n}\n\n.clear-image-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: red;\n  font-size: 18px;\n  cursor: pointer;\n  position: relative;\n  left: 19%;\n  margin-left: 10px;\n  transform: translate(60px, -139px);\n  margin: -18px;\n}\n\n\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.popup-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 40%;\n}\n\n.popup-headerBoutique[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.popup-headerBoutique[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.popup-footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: right;\n}\n\n.btn-cancel[_ngcontent-%COMP%], .btn-submit[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  margin-left: 10px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer !important;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: rgba(255, 0, 0, 0.8078431373);\n  padding: 6px 25px;\n  color: #ffffff;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #ff0000;\n  transition: all 0.5s;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  background-color: rgba(6, 113, 228, 0.7843137255);\n  padding: 6px 25px;\n  color: #ffffff;\n  cursor: pointer;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: #0672E4;\n  transition: all 0.5s;\n}\n\n.champ_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.boutique-selection-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 400px;\n  margin-top: 8px;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n  padding: 12px;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .boutique-item[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-bottom: 1px solid #eee;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .boutique-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  width: 100%;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .boutique-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: right;\n  border-top: 1px solid #eee;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%]:hover {\n  background-color: #055cb3;\n}\n\n.two_input[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.nombreDevise[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -20px;\n  right: 10px;\n  transition: opacity 0.3s ease;\n}\n\n.nombreDevise[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin: 0;\n  font-family: monospace;\n}\n\n.option-with-icon[_ngcontent-%COMP%]   .option-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.option-with-icon[_ngcontent-%COMP%]   .option-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n\n.container_name_icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.option_icon_div[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 16px;\n}\n\n.container_name_icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.option_icon_div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n}\n\n.option-icon[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 18px;\n}\n\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-top: 10px;\n}\n\n.radio-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.radio-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.radio-input[_ngcontent-%COMP%]:checked    + .radio-label[_ngcontent-%COMP%]   .radio-custom[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  border-color: #0672E4;\n}\n.radio-input[_ngcontent-%COMP%]:checked    + .radio-label[_ngcontent-%COMP%]   .radio-custom[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 6px;\n  height: 6px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.radio-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  font-size: 14px;\n  color: #333;\n  position: relative;\n  padding-left: 28px;\n}\n\n.radio-custom[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 18px;\n  height: 18px;\n  border: 2px solid #ccc;\n  border-radius: 50%;\n  transition: all 0.3s;\n}\n\n.triple[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.select-all[_ngcontent-%COMP%] {\n  font-weight: bold;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 8px;\n  margin-bottom: 8px;\n}\n\n.select-all[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-right: 8px;\n  transform: scale(1.2);\n}\n\n\n\n.invalid-field[_ngcontent-%COMP%]   .input_focus[_ngcontent-%COMP%] {\n  border-color: red !important;\n}\n\n.invalid-field[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: red !important;\n}\n\n\n\n.error-message[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 12px;\n  margin-top: 4px;\n}\n\n\n\n.invalid-field[_ngcontent-%COMP%]   .input_focus[_ngcontent-%COMP%] {\n  border-color: red !important;\n}\n.invalid-field[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: red !important;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 12px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9kdWl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBT0E7RUFFRSxrQkFBQTtBQUxGOztBQVFBLGVBQUE7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFORjs7QUFTQTtFQUNFLDhCQUFBO0FBTkY7O0FBU0E7RUFDRSxrQkFBQTtBQU5GOztBQVNBO0VBQ0UsZUFBQTtBQU5GOztBQVNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBUEY7O0FBVUE7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVdBOztFQUVFLGNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQVJGOztBQVdBO0VBQ0UsVUFBQTtBQVJGOztBQVdBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBUkY7O0FBV0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7QUFSRjs7QUFXQTtFQUNF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RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUF6RkY7O0FBNEZBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUF6RkY7O0FBNEZBO0VBQ0UsZ0JBQUE7QUF6RkY7O0FBNEZBO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF6RkY7O0FBNEZBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQXpGRjs7QUE0RkEsb0NBQUE7QUFDQTtFQUNFLDRCQUFBO0FBekZGOztBQTRGQTtFQUNFLHFCQUFBO0FBekZGOztBQTRGQSw4QkFBQTtBQUNBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBekZGOztBQTRGQSxpQkFBQTtBQUVFO0VBQ0UsNEJBQUE7QUExRko7QUE2RkU7RUFDRSxxQkFBQTtBQTNGSjs7QUErRkE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUE1RkYiLCJmaWxlIjoiYWRkLXByb2R1aXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyX2dsb2JhbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzIlIDI4JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGVudF9mb3JtdWxhaXJlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLy8gLmZvcm11bGFpcmUge1xuLy8gICB3aWR0aDogMTAwcHg7XG4vLyAgIGhlaWdodDogMjAwcHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuLy8gfVxuXG4ubW9kYWwtYm9keSB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4vKiBmb3JtdWxhaXJlICovXG5cbi5jaGFtcF9pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNoYW1wX2lucHV0X0NhdGVnb3JpZSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1xufVxuXG4uZm9ybXVsYWlyZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLlRpdGxlIGgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaW5wdXRfZm9jdXMge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiA0OXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDUzLCA1MCwgNTApO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBtYXJnaW46IDEwcHggMCAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgZm9udC1zaXplOiAxNHB4O1xuICAvL3BhZGRpbmctbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICM2OTVjNWM7XG59XG5cbi5jaGFtcF9pbnB1dCAubGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjJweDtcbiAgbGVmdDogNHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5pbnB1dF9mb2N1czpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG5cbi5pbnB1dF9mb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbi5pbnB1dF9mb2N1czpmb2N1cyArIC5sYWJlbCB7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaW5wdXRfZm9jdXM6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmlucHV0X2ZvY3VzMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICM3Nzc0NzQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG59XG5cbi5pbnB1dF9mb2N1czI6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLmNoYW1wX2lucHV0MiAubGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjJweDtcbiAgbGVmdDogMHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY29sb3I6IHJnYig2NiwgNTYsIDU2KTtcbn1cblxuXG4uY2hhbXBfaW5wdXQgLmxhYmVsQ2F0ZWdvcnkge1xuICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbnB1dF9mb2N1czI6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4uaW5wdXRfZm9jdXMyOmZvY3VzICsgLmxhYmVsIHtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmlucHV0X2ZvY3VzMjo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaW5wdXRfZm9jdXMyOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pbmZvX3RpdHJlX2lucHV0IHtcbiAgcGFkZGluZzogMjBweDsgXG59XG5cbi5pbmZvX3RpdHJlX2lucHV0IGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xufVxuXG4vLyA8IS0tIExlcyBpbmZvcm1hdGlvbiBkZXMgbWFnYXNpbiAgLS0+XG4uaW5mb3JtYXRpb25fY2FkcmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmluZm9ybWF0aW9uX2NhZHJlX3NhdmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5pbnB1dF9mb2N1c19tYWdhc2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vbWluLXdpZHRoOiAxMDBweCFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dF9mb2N1c19wZXRpdCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cblxuLy8gLmNoYW1wX2lucHV0X21hcmdpbiB7XG4vLyAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuLy8gfVxuXG4uZG91YmxlX2lucHV0IHtcbiAgZGlzcGxheTogZmxleDsgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cblxuLmRvdWJsZV9pbnB1dF9ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDIwcHg7XG59XG5cbi5kb3VibGVfaW5wdXRfZ3JpZF90cnVlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uZG91YmxlX2lucHV0aCB7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xufVxuXG5cbi5jaGFtcF9pbnB1dDIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5cbi8vIC5pbnB1dF9mb2N1c19sYXJnZXtcbi8vICAgLy9taW4td2lkdGg6IDM4MHB4O1xuLy8gICB3aWR0aDogMTAwJTtcbi8vIH1cblxuXG4uY2hhbXBfaW5wdXRfaW52ZW50YWlyZSB7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbn1cblxuLmNoYW1wX2lucHV0X2ludmVudGFpcmUgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLy8gVG9nZ2xlIFxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi8qIE1hc3F1ZXIgbCdpbnB1dCBjaGVja2JveCBvcmlnaW5hbCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIExlIMKrIHNsaWRlciDCuyAqL1xuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMThweDsgXG4gIHdpZHRoOiAxOHB4O1xuICBsZWZ0OiAzcHg7IFxuICBib3R0b206IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBRdWFuZCBsZSBjaGVja2JveCBlc3QgY29jaMOpICovXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7IC8qIENvdWxldXIgYXUgY2hvaXggKi9cbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG4vKiBGcm9tIFVpdmVyc2UuaW8gYnkgWWF5YTEyMDg1ICovIFxuLmNvbnRhaW5lcl9maWxlIHtcbiAgLy8gaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiA0cHggNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweDtcbiAgZ2FwOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTEwLCAyNTUsIDAuMDQxKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmhlYWRlcl9maWxlIHtcbiAgLy8gZmxleDogMTtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgd2lkdGg6IDE0MHB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzA2NzFlNDlkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcbn1cblxuLmhlYWRlcl9maWxlIGltZ3tcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuXG4uaGVhZGVyX2ZpbGUgc3ZnIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmhlYWRlcl9maWxlIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmZvb3Rlcl9maWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTAsIDI1NSwgMC4wNzUpO1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5mb290ZXJfZmlsZSBwIHtcbiAgbWFyZ2luOiAwIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uZm9vdGVyX2ZpbGUgaSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG5cbiNmaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhlYWRlcl9maWxlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbmZvX3RpdHJlX2lucHV0X2J0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBnYXA6IDIwcHg7XG59XG5cbi8vIGJ1dHRvbiBhbm51bGVyXG4uYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWwge1xuICBwYWRkaW5nOiA4cHggMzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vLyBidXR0b24gYW5udWxlciBob3ZlclxuLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MDEwMTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xufVxuXG4vLyBidXR0b24gYWpvdXRlciBcbi5idG5fYWpvdXRlciAuYnRuX3NhdmUge1xuICBwYWRkaW5nOiA4cHggMzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vLyBidXR0b24gYWpvdXRlciBob3ZlclxuLmJ0bl9ham91dGVyIC5idG5fc2F2ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi8vIENhdGVnb3J5IFxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0bl9hZGRfY2F0ZWdvcnkyIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAycHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvL2JveC1zaGFkb3c6IDAgMnB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjA3OCk7XG59XG5cbi5idG5fYWRkX2NhdGVnb3J5Mjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcbn1cblxuXG4uYnRuX2FkZF9jYXRlZ29yeURpdjIge1xuICBtYXJnaW46IDEwcHggMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbn1cblxuLmRvdWJsZV9pbnB1dDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8gUEFSVElSIExFRlRcblxuXG4vLyAuYWpvdXRfYm9vbF9mb3JtIHtcbi8vICAgLy93aWR0aDogMTAwJTtcbiAgXG4vLyB9XG5cbi5ham91dGVyX2NhZHJlX2NyZWVfY191IHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDIzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTA4KTtcbn1cblxuLmNvbnRhaW5lcl9lcnJvcl9tZXNzYWdlIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLy8gbWFyZ2luLXRvcDogN3B4O1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4uaW5wdXRfZm9jdXNfY3JlZV9jYXRlIHtcbiAgLy93aWR0aDogNTAlO1xuICBtaW4td2lkdGg6IGF1dG87XG59XG5cbi5idG4tYy1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLmJ0bl9zX2NhdGVnb3J5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzFlNGM4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gIHBhZGRpbmc6IDAgMjVweDtcbn1cblxuLmJ0bl9jX2NhdGVnb3J5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMGNlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gIHBhZGRpbmc6IDAgMjVweDtcbn1cblxuLmJ0bl9zX2NhdGVnb3J5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xufVxuXG4uYnRuX2NfY2F0ZWdvcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XG59XG5cbi8vIENhdGVnb3J5IFxuXG4uZXJyb3ItbWVzc2FnZS1jYXRlZ29yeSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5lcnJvci1tZXNzYWdlIHNwYW4ge1xuICBmb250LXN0eWxlOiAxMHB4O1xufVxuXG4uZXJyb3JBUEkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtOXB4O1xufVxuXG4uZXJyb3JBUEkgaW1ne1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuXG4uZXJyb3JBUEkgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi8vIFBvcCB1cFxuXG4vKiBPdmVybGF5IGRlIGxhIHBvcHVwICovXG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG5cbi8qIENvbnRlbnUgZGUgbGEgcG9wdXAgKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgYW5pbWF0aW9uOiBmYWRlSW5Eb3duIDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBIZWFkZXIgZGUgbGEgcG9wdXAgYXZlYyBsJ2ltYWdlIGV0IGxlIHRpdHJlICovXG4ucG9wdXAtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBvcHVwLWltZyBpbWcge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucG9wdXAtaWNvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tb2RhbC1jb250ZW50IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogIzMzMztcbn1cblxuLm1vZGFsLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzU1NTtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi8qIFN0eWxlIGR1IGJvdXRvbiAqL1xuLm1vZGFsLWNvbnRlbnQgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xufVxuLyogU3R5bGUgZHUgYm91dG9uICovXG4vLyAuYnRuT0tPSyB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4vLyAgIGNvbG9yOiAjZmZmO1xuLy8gICBib3JkZXI6IG5vbmU7XG4vLyAgIHBhZGRpbmc6IDEwcHggMjBweDtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcbi8vIH1cblxuLm1vZGFsLWNvbnRlbnQuZXJyb3IgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MzkzNTtcbn1cblxuLm1vZGFsLWNvbnRlbnQgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbn1cblxuLm1vZGFsLWNvbnRlbnQuZXJyb3IgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzMmYyZjtcbn1cblxuLmxvYWRpbmctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuXG4ubG9hZGluZy1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDsgXG59XG5cbi5zcGlubmVyIHtcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4vLyBDb2RlIGJhcmVcbi5jaGFtcHNfY29kZV9iYXJlX2RvdWJsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE1MHB4O1xufVxuXG5cbi5jbGVhci1pbWFnZS1idG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxOSU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2MHB4LCAtMTM5cHgpO1xuICBtYXJnaW46IC0xOHB4O1xufVxuXG5cbi8qIFN0eWxlcyBwb3VyIGxlIHBvcHVwICovXG4ucG9wdXAtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ucG9wdXAtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5wb3B1cC1oZWFkZXJCb3V0aXF1ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBvcHVwLWhlYWRlckJvdXRpcXVlIGg0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYnRuLWNhbmNlbCwgLmJ0bi1zdWJtaXQge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXIhaW1wb3J0YW50O1xufVxuXG4uYnRuLWNhbmNlbCB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNGM0Q4REE7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMGNlO1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjRTdCMUI2O1xuICBwYWRkaW5nOiA2cHggMjVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5idG4tY2FuY2VsOmhvdmVyIHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0U3QjFCNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuLmJ0bi1zdWJtaXQge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MWU0MzQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcxZTRjODtcbiAgcGFkZGluZzogNnB4IDI1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8vY3Vyc29yOiBuby1kcm9wO1xufVxuXG4uYnRuLXN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5jaGFtcF9ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbiAgZ2FwOiAyMHB4O1xufVxuXG5cbi5ib3V0aXF1ZS1zZWxlY3Rpb24tcGFuZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMik7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgLnBhbmVsLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgaDQge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5jbG9zZS1idG4ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gIH1cblxuICAucGFuZWwtYm9keSB7XG4gICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuXG4gICAgICAuYm91dGlxdWUtaXRlbSB7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuXG4gICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIC5wYW5lbC1mb290ZXIge1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG5cbiAgICAgIC5idG4tY29uZmlybSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1NWNiMztcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cblxuLy8gLnNlbGVjdC1vcHRpb24ge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuLy8gICAmOmhvdmVyIHtcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4vLyAgIH1cbi8vIH1cblxuLnR3b19pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ub21icmVEZXZpc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTIwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuLm5vbWJyZURldmlzZSBwIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IFxuICAvLyBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5vcHRpb24td2l0aC1pY29uIC5vcHRpb24tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4ub3B0aW9uLXdpdGgtaWNvbiAub3B0aW9uLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbi5jb250YWluZXJfbmFtZV9pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm9wdGlvbl9pY29uX2RpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTZweDtcbiAgLy8gbGVmdDogNzcwcHg7XG59XG5cbi5jb250YWluZXJfbmFtZV9pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm9wdGlvbl9pY29uX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4OyBcbn1cblxuLm9wdGlvbi1pY29uIHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucmFkaW8tb3B0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJhZGlvLWlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgXG4gICY6Y2hlY2tlZCArIC5yYWRpby1sYWJlbCAucmFkaW8tY3VzdG9tIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIGJvcmRlci1jb2xvcjogIzA2NzJFNDtcbiAgICBcbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDZweDtcbiAgICAgIGhlaWdodDogNnB4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cbiAgfVxufVxuXG4ucmFkaW8tbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzMzM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAyOHB4O1xufVxuXG4ucmFkaW8tY3VzdG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4udHJpcGxlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnNlbGVjdC1hbGwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLnNlbGVjdC1hbGwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLyogU3R5bGUgcG91ciBsZXMgY2hhbXBzIGludmFsaWRlcyAqL1xuLmludmFsaWQtZmllbGQgLmlucHV0X2ZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLmludmFsaWQtZmllbGQgLmxhYmVsIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4vKiBNZXNzYWdlIGQnZXJyZXVyIGVuIHJvdWdlICovXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4vKiBGaWNoaWVyIFNDU1MgKi9cbi5pbnZhbGlkLWZpZWxkIHtcbiAgLmlucHV0X2ZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmxhYmVsIHtcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9wcm9kdWl0cy9hZGQtcHJvZHVpdC9hZGQtcHJvZHVpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtBQUVGOztBQU9BO0VBRUUsa0JBQUE7QUFMRjs7QUFRQSxlQUFBO0FBRUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBTkY7O0FBU0E7RUFDRSw4QkFBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7QUFORjs7QUFTQTtFQUNFLGVBQUE7QUFORjs7QUFTQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQVBGOztBQVVBO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFXQTs7RUFFRSxjQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFSRjs7QUFXQTtFQUNFLFVBQUE7QUFSRjs7QUFXQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQVJGOztBQVdBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxj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QSxnQ0FBQTtBQXZGTjs7QUE0RkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBekZGOztBQTRGQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBekZGOztBQTRGQTtFQUNFLGdCQUFBO0FBekZGOztBQTRGQTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBekZGOztBQTRGQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUF6RkY7O0FBNEZBLG9DQUFBO0FBQ0E7RUFDRSw0QkFBQTtBQXpGRjs7QUE0RkE7RUFDRSxxQkFBQTtBQXpGRjs7QUE0RkEsOEJBQUE7QUFDQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQXpGRjs7QUE0RkEsaUJBQUE7QUFFRTtFQUNFLDRCQUFBO0FBMUZKO0FBNkZFO0VBQ0UscUJBQUE7QUEzRko7O0FBK0ZBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBNUZGO0FBQ0EsZzVpQ0FBZzVpQyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJfZ2xvYmFsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MiUgMjglO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb250ZW50X2Zvcm11bGFpcmUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4vLyAuZm9ybXVsYWlyZSB7XG4vLyAgIHdpZHRoOiAxMDBweDtcbi8vICAgaGVpZ2h0OiAyMDBweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4vLyB9XG5cbi5tb2RhbC1ib2R5IHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi8qIGZvcm11bGFpcmUgKi9cblxuLmNoYW1wX2lucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2hhbXBfaW5wdXRfQ2F0ZWdvcmllIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtdWxhaXJlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uVGl0bGUgaDMge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pbnB1dF9mb2N1cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDQ5cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzY5NWM1Yztcbn1cblxuLmNoYW1wX2lucHV0IC5sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMnB4O1xuICBsZWZ0OiA0cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmlucHV0X2ZvY3VzOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cblxuLmlucHV0X2ZvY3VzOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuLmlucHV0X2ZvY3VzOmZvY3VzICsgLmxhYmVsIHtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5pbnB1dF9mb2N1czpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uaW5wdXRfZm9jdXMyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzc3NzQ3NDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbn1cblxuLmlucHV0X2ZvY3VzMjpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uY2hhbXBfaW5wdXQyIC5sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMnB4O1xuICBsZWZ0OiAwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xufVxuXG5cbi5jaGFtcF9pbnB1dCAubGFiZWxDYXRlZ29yeSB7XG4gIGNvbG9yOiByZ2IoNjYsIDU2LCA1Nik7XG4gIGxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmlucHV0X2ZvY3VzMjpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbi5pbnB1dF9mb2N1czI6Zm9jdXMgKyAubGFiZWwge1xuICBjb2xvcjogIzA2NzJFNDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaW5wdXRfZm9jdXMyOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5pbnB1dF9mb2N1czI6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmluZm9fdGl0cmVfaW5wdXQge1xuICBwYWRkaW5nOiAyMHB4OyBcbn1cblxuLmluZm9fdGl0cmVfaW5wdXQgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG59XG5cbi8vIDwhLS0gTGVzIGluZm9ybWF0aW9uIGRlcyBtYWdhc2luICAtLT5cbi5pbmZvcm1hdGlvbl9jYWRyZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTA4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaW5mb3JtYXRpb25fY2FkcmVfc2F2ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmlucHV0X2ZvY3VzX21hZ2FzaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgLy9taW4td2lkdGg6IDEwMHB4IWltcG9ydGFudDtcbn1cblxuLmlucHV0X2ZvY3VzX3BldGl0IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuXG4vLyAuY2hhbXBfaW5wdXRfbWFyZ2luIHtcbi8vICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4vLyB9XG5cbi5kb3VibGVfaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4OyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uZG91YmxlX2lucHV0X2dyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMjBweDtcbn1cblxuLmRvdWJsZV9pbnB1dF9ncmlkX3RydWUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gIGdyaWQtcm93LWdhcDogMHB4O1xuICBnYXA6IDIwcHg7XG59XG5cbi5kb3VibGVfaW5wdXRoIHtcbiAgZGlzcGxheTogZmxleDsgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG59XG5cblxuLmNoYW1wX2lucHV0MiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cblxuLy8gLmlucHV0X2ZvY3VzX2xhcmdle1xuLy8gICAvL21pbi13aWR0aDogMzgwcHg7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuXG5cbi5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHtcbiAgZGlzcGxheTogZmxleDsgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxufVxuXG4uY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vLyBUb2dnbGUgXG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLyogTWFzcXVlciBsJ2lucHV0IGNoZWNrYm94IG9yaWdpbmFsICovXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogTGUgw4LCqyBzbGlkZXIgw4LCuyAqL1xuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMThweDsgXG4gIHdpZHRoOiAxOHB4O1xuICBsZWZ0OiAzcHg7IFxuICBib3R0b206IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBRdWFuZCBsZSBjaGVja2JveCBlc3QgY29jaMODwqkgKi9cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgLyogQ291bGV1ciBhdSBjaG9peCAqL1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi8qIEZyb20gVWl2ZXJzZS5pbyBieSBZYXlhMTIwODUgKi8gXG4uY29udGFpbmVyX2ZpbGUge1xuICAvLyBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4O1xuICBnYXA6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTAsIDI1NSwgMC4wNDEpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uaGVhZGVyX2ZpbGUge1xuICAvLyBmbGV4OiAxO1xuICBoZWlnaHQ6IDE0MHB4O1xuICB3aWR0aDogMTQwcHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjMDY3MWU0OWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xufVxuXG4uaGVhZGVyX2ZpbGUgaW1ne1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG5cbi5oZWFkZXJfZmlsZSBzdmcge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uaGVhZGVyX2ZpbGUgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZm9vdGVyX2ZpbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA3NSk7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmZvb3Rlcl9maWxlIHAge1xuICBtYXJnaW46IDAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5mb290ZXJfZmlsZSBpIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cblxuI2ZpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGVhZGVyX2ZpbGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmluZm9fdGl0cmVfaW5wdXRfYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGdhcDogMjBweDtcbn1cblxuLy8gYnV0dG9uIGFubnVsZXJcbi5idG5fYW5udWxlciAuYnRuX2NhbmNlbCB7XG4gIHBhZGRpbmc6IDhweCAzMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8vIGJ1dHRvbiBhbm51bGVyIGhvdmVyXG4uYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG59XG5cbi8vIGJ1dHRvbiBham91dGVyIFxuLmJ0bl9ham91dGVyIC5idG5fc2F2ZSB7XG4gIHBhZGRpbmc6IDhweCAzMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8vIGJ1dHRvbiBham91dGVyIGhvdmVyXG4uYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuLy8gQ2F0ZWdvcnkgXG5cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuX2FkZF9jYXRlZ29yeTIge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8vYm94LXNoYWRvdzogMCAycHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDc4KTtcbn1cblxuLmJ0bl9hZGRfY2F0ZWdvcnkyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xufVxuXG5cbi5idG5fYWRkX2NhdGVnb3J5RGl2MiB7XG4gIG1hcmdpbjogMTBweCAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4uZG91YmxlX2lucHV0MiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLyBQQVJUSVIgTEVGVFxuXG5cbi8vIC5ham91dF9ib29sX2Zvcm0ge1xuLy8gICAvL3dpZHRoOiAxMDAlO1xuICBcbi8vIH1cblxuLmFqb3V0ZXJfY2FkcmVfY3JlZV9jX3Uge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMDgpO1xufVxuXG4uY29udGFpbmVyX2Vycm9yX21lc3NhZ2Uge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAvLyBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5pbnB1dF9mb2N1c19jcmVlX2NhdGUge1xuICAvL3dpZHRoOiA1MCU7XG4gIG1pbi13aWR0aDogYXV0bztcbn1cblxuLmJ0bi1jLXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uYnRuX3NfY2F0ZWdvcnkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MWU0Yzg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuXG4uYnRuX2NfY2F0ZWdvcnkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwY2U7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuXG4uYnRuX3NfY2F0ZWdvcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XG59XG5cbi5idG5fY19jYXRlZ29yeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcbn1cblxuLy8gQ2F0ZWdvcnkgXG5cbi5lcnJvci1tZXNzYWdlLWNhdGVnb3J5IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmVycm9yLW1lc3NhZ2Ugc3BhbiB7XG4gIGZvbnQtc3R5bGU6IDEwcHg7XG59XG5cbi5lcnJvckFQSSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IC05cHg7XG59XG5cbi5lcnJvckFQSSBpbWd7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG59XG5cbi5lcnJvckFQSSBzcGFuIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLy8gUG9wIHVwXG5cbi8qIE92ZXJsYXkgZGUgbGEgcG9wdXAgKi9cbi5tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cblxuLyogQ29udGVudSBkZSBsYSBwb3B1cCAqL1xuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLDAsMCwwLjMpO1xuICBhbmltYXRpb246IGZhZGVJbkRvd24gMC4zcyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIEhlYWRlciBkZSBsYSBwb3B1cCBhdmVjIGwnaW1hZ2UgZXQgbGUgdGl0cmUgKi9cbi5wb3B1cC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucG9wdXAtaW1nIGltZyB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wb3B1cC1pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4ubW9kYWwtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjNTU1O1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLyogU3R5bGUgZHUgYm91dG9uICovXG4ubW9kYWwtY29udGVudCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG59XG4vKiBTdHlsZSBkdSBib3V0b24gKi9cbi8vIC5idG5PS09LIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbi8vICAgY29sb3I6ICNmZmY7XG4vLyAgIGJvcmRlcjogbm9uZTtcbi8vICAgcGFkZGluZzogMTBweCAyMHB4O1xuLy8gICBmb250LXNpemU6IDFlbTtcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xuLy8gfVxuXG4ubW9kYWwtY29udGVudC5lcnJvciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUzOTM1O1xufVxuXG4ubW9kYWwtY29udGVudCBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xufVxuXG4ubW9kYWwtY29udGVudC5lcnJvciBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyZjJmO1xufVxuXG4ubG9hZGluZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG5cbi5sb2FkaW5nLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4OyBcbn1cblxuLnNwaW5uZXIge1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi8vIENvZGUgYmFyZVxuLmNoYW1wc19jb2RlX2JhcmVfZG91YmxlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTUwcHg7XG59XG5cblxuLmNsZWFyLWltYWdlLWJ0biB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE5JTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDYwcHgsIC0xMzlweCk7XG4gIG1hcmdpbjogLTE4cHg7XG59XG5cblxuLyogU3R5bGVzIHBvdXIgbGUgcG9wdXAgKi9cbi5wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLnBvcHVwLWhlYWRlckJvdXRpcXVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucG9wdXAtaGVhZGVyQm91dGlxdWUgaDQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jbG9zZS1idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9wdXAtZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5idG4tY2FuY2VsLCAuYnRuLXN1Ym1pdCB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlciFpbXBvcnRhbnQ7XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0YzRDhEQTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwY2U7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNFN0IxQjY7XG4gIHBhZGRpbmc6IDZweCAyNXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJ0bi1jYW5jZWw6aG92ZXIge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdCMUI2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4uYnRuLXN1Ym1pdCB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMwNjcxZTQzNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzFlNGM4O1xuICBwYWRkaW5nOiA2cHggMjVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLy9jdXJzb3I6IG5vLWRyb3A7XG59XG5cbi5idG4tc3VibWl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuLmNoYW1wX2dyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gIGdyaWQtcm93LWdhcDogMHB4O1xuICBnYXA6IDIwcHg7XG59XG5cblxuLmJvdXRpcXVlLXNlbGVjdGlvbi1wYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcblxuICAucGFuZWwtaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBoNCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIH1cblxuICAgICAgLmNsb3NlLWJ0biB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgfVxuXG4gIC5wYW5lbC1ib2R5IHtcbiAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIHBhZGRpbmc6IDEycHg7XG5cbiAgICAgIC5ib3V0aXF1ZS1pdGVtIHtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG5cbiAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgLnBhbmVsLWZvb3RlciB7XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcblxuICAgICAgLmJ0bi1jb25maXJtIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDU1Y2IzO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxufVxuXG4vLyAuc2VsZWN0LW9wdGlvbiB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4vLyAgICY6aG92ZXIge1xuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbi8vICAgfVxuLy8gfVxuXG4udHdvX2lucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm5vbWJyZURldmlzZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMjBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xufVxuXG4ubm9tYnJlRGV2aXNlIHAge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgXG4gIC8vIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLm9wdGlvbi13aXRoLWljb24gLm9wdGlvbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5vcHRpb24td2l0aC1pY29uIC5vcHRpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbn1cblxuLmNvbnRhaW5lcl9uYW1lX2ljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ub3B0aW9uX2ljb25fZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAxNnB4O1xuICAvLyBsZWZ0OiA3NzBweDtcbn1cblxuLmNvbnRhaW5lcl9uYW1lX2ljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ub3B0aW9uX2ljb25fZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7IFxufVxuXG4ub3B0aW9uLWljb24ge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5yYWRpby1vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmFkaW8taW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xuICBcbiAgJjpjaGVja2VkICsgLnJhZGlvLWxhYmVsIC5yYWRpby1jdXN0b20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDY3MkU0O1xuICAgIFxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogNnB4O1xuICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuICB9XG59XG5cbi5yYWRpby1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG59XG5cbi5yYWRpby1jdXN0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi50cmlwbGUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc2VsZWN0LWFsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uc2VsZWN0LWFsbCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4vKiBTdHlsZSBwb3VyIGxlcyBjaGFtcHMgaW52YWxpZGVzICovXG4uaW52YWxpZC1maWVsZCAuaW5wdXRfZm9jdXMge1xuICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4uaW52YWxpZC1maWVsZCAubGFiZWwge1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi8qIE1lc3NhZ2UgZCdlcnJldXIgZW4gcm91Z2UgKi9cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi8qIEZpY2hpZXIgU0NTUyAqL1xuLmludmFsaWQtZmllbGQge1xuICAuaW5wdXRfZm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubGFiZWwge1xuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_produits_add-produit_add-produit_component_ts.js.map