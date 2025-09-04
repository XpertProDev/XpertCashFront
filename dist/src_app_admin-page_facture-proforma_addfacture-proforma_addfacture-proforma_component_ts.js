"use strict";
(self["webpackChunkskeleton"] = self["webpackChunkskeleton"] || []).push([["src_app_admin-page_facture-proforma_addfacture-proforma_addfacture-proforma_component_ts"],{

/***/ 90131:
/*!*************************************************************************!*\
  !*** ./src/app/admin-page/clients/client-form/client-form.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientFormComponent: () => (/* binding */ ClientFormComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! browser-image-compression */ 92880);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SERVICES/entreprise-service */ 92120);
/* harmony import */ var _SERVICES_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SERVICES/client-service */ 47746);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SERVICES/users.service */ 88026);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ 35255);















const _c0 = () => ({
  standalone: true
});
function ClientFormComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 50)(1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Creation en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function ClientFormComponent_div_17_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Champ requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ClientFormComponent_div_17_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Au moins 2 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ClientFormComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ClientFormComponent_div_17_small_1_Template, 2, 0, "small", 54)(2, ClientFormComponent_div_17_small_2_Template, 2, 0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.clientForm.get("nomComplet")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.clientForm.get("nomComplet")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
  }
}
function ClientFormComponent_div_22_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Format invalide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ClientFormComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ClientFormComponent_div_22_small_1_Template, 2, 0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.clientForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["email"]);
  }
}
function ClientFormComponent_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const nomPays_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", nomPays_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", nomPays_r2, " (", ctx_r0.paysIndicatifs[nomPays_r2].indicatif, ") ");
  }
}
function ClientFormComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 53)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Ce champ est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ClientFormComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 53)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pays_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Le num\u00E9ro doit contenir ", ctx_r0.paysIndicatifs[pays_r3].longueur, " chiffres apr\u00E8s l\u2019indicatif ", ctx_r0.paysIndicatifs[pays_r3].indicatif.trim(), ". ");
  }
}
function ClientFormComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 53)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Le t\u00E9l\u00E9phone est requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ClientFormComponent_div_61_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 55)(1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ent_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ent_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ent_r5.nom, " ");
  }
}
function ClientFormComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Mon entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-autocomplete", 59, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("optionSelected", function ClientFormComponent_div_61_Template_mat_autocomplete_optionSelected_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.onEntrepriseSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientFormComponent_div_61_Template_mat_option_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.openPopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Cr\u00E9er une entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ClientFormComponent_div_61_mat_option_13_Template, 3, 2, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const auto_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r0.control)("matAutocomplete", auto_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("displayWith", ctx_r0.displayFnEntreprise);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 4, ctx_r0.filteredOptions));
  }
}
function ClientFormComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function ClientFormComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.successMessage);
  }
}
function ClientFormComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 69)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Vous devez s\u00E9lectionner ou cr\u00E9er une entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ClientFormComponent_div_74_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ce champ est requis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ClientFormComponent_div_74_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessageApi, " ");
  }
}
function ClientFormComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 70)(1, "div", 71)(2, "div", 72)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Ajouter une entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientFormComponent_div_74_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "form", 74)(8, "div", 75)(9, "div", 76)(10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Nom entreprise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ClientFormComponent_div_74_div_16_Template, 2, 0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 76)(22, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Adresse");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Ville");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 22)(31, "div", 23)(32, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ClientFormComponent_div_74_Template_select_change_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.onEntreprisePaysChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Pays");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Mali");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "S\u00E9n\u00E9gal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "C\u00F4te d'Ivoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Pays");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 28)(44, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function ClientFormComponent_div_74_Template_input_input_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.formatEntreprisePhoneNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "T\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Secteur");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, ClientFormComponent_div_74_div_52_Template, 2, 1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 90)(54, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientFormComponent_div_74_Template_button_click_54_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientFormComponent_div_74_Template_button_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.ajouterEntreprise());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, " Ajouter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.entrepriseForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r0.entrepriseForm.get("nom")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.entrepriseForm.get("nom")) == null ? null : tmp_2_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.errorMessageApi);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx_r0.entrepriseForm.valid ? "#0672E4" : "#0671e434")("color", ctx_r0.entrepriseForm.valid ? "#ffffff" : "#00000073")("cursor", ctx_r0.entrepriseForm.valid ? "pointer" : "no-drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r0.entrepriseForm.invalid);
  }
}
function ClientFormComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientFormComponent_div_75_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.resetForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Ajouter un autre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.successMessage, " ");
  }
}
class ClientFormComponent {
  constructor(router, fb, entrepriseService, clientService, usersService) {
    this.router = router;
    this.fb = fb;
    this.entrepriseService = entrepriseService;
    this.clientService = clientService;
    this.usersService = usersService;
    this.clientAjoute = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.errorMessage = '';
    this.errorMessageApi = '';
    this.successMessage = '';
    this.isEntrepriseSelected = false;
    this.showPopup = false;
    this.urllink = "assets/img/appareil.jpg";
    this.newPhotoUrl = null;
    this.selectedFile = null;
    this.imageFile = null;
    this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
    this.filteredOptions = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
    this.loading = false;
    this.optionsEntreprise$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    this.entrepriseRequiredError = false;
    this.isLoading = false;
    this.indicatif = '';
    this.maxPhoneLength = 0;
    this.entrepriseIndicatif = '';
    this.entrepriseMaxPhoneLength = 0;
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
  }
  onPaysChange(event) {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
    if (paysInfo) {
      this.indicatif = `${paysInfo.indicatif} `;
      this.maxPhoneLength = this.indicatif.length + paysInfo.longueur;
      if (!this.clientForm.get('telephone')?.value.startsWith(this.indicatif)) {
        this.clientForm.get('telephone')?.setValue(this.indicatif);
      }
      this.updatePhoneValidator(paysInfo.longueur);
    }
  }
  updatePhoneValidator(longueur) {
    // on impose exactement {longueur} chiffres après l’indicatif
    const regex = new RegExp(`^\\${this.indicatif}\\d{${longueur}}$`);
    this.clientForm.controls['telephone'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(regex)]);
    this.clientForm.controls['telephone'].updateValueAndValidity();
  }
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
  goToStock() {
    this.router.navigate(['/clients']);
  }
  ngOnInit() {
    this.getListEntreprise();
    this.initEntreprise();
    this.getClientForm();
    // this.getEntrepriseForm();
    this.loadEntreprises();
  }
  getClientForm() {
    this.clientForm = this.fb.group({
      nomComplet: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
      telephone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      adresse: [''],
      poste: [''],
      pays: [''],
      ville: ['']
    });
  }
  // getEntrepriseForm() {
  //   this.entrepriseForm = this.fb.group({
  //     nom: ['', Validators.required],
  //     email: ['', Validators.email],
  //     telephone: [''],
  //     adresse: ['']
  //   });
  // }
  onEntreprisePaysChange(event) {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
    if (paysInfo) {
      this.entrepriseIndicatif = `${paysInfo.indicatif} `;
      this.entrepriseMaxPhoneLength = this.entrepriseIndicatif.length + paysInfo.longueur;
      if (!this.entrepriseForm.get('telephone')?.value.startsWith(this.entrepriseIndicatif)) {
        this.entrepriseForm.get('telephone')?.setValue(this.entrepriseIndicatif);
      }
      this.updateEntreprisePhoneValidator(paysInfo.longueur);
    }
  }
  updateEntreprisePhoneValidator(longueur) {
    this.entrepriseForm.controls['telephone'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(`^\\${this.entrepriseIndicatif}\\d{${longueur}}$`)]);
    this.entrepriseForm.controls['telephone'].updateValueAndValidity();
  }
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
  loadEntreprises() {
    const token = localStorage.getItem('accessToken') || '';
    if (!token) return;
    this.entrepriseService.getListEntreprise().subscribe(list => {
      this.optionsEntreprise$.next(list); // Mettre à jour le BehaviorSubject
      this.setupAutocomplete();
    }, err => {
      console.error('Erreur lors de la récupération des entreprises :', err);
      // this.errorMessage = err.error?.error || 'Client physiques';
    });
  }
  // Ajouter une nouvelle méthode pour configurer l'autocomplete :
  setupAutocomplete() {
    this.filteredOptions = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.control.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(value => typeof value === 'string' ? value : value?.nom)), this.optionsEntreprise$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(([name, entreprises]) => name ? this._filter(name, entreprises) : entreprises));
  }
  getListEntreprise() {
    this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.switchMap)(token => {
      if (!token) {
        console.error('Aucun token valide trouvé !');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.throwError)(() => new Error('Aucun token trouvé'));
      }
      return this.entrepriseService.getListEntreprise();
    })).subscribe(entreprises => {
      console.log('Entreprises reçues depuis l\'API :', entreprises);
      // Mettre à jour le BehaviorSubject
      this.optionsEntreprise$.next(entreprises);
      this.filteredOptions = this.control.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(value => value ? typeof value === 'string' ? value : value.nom : ''), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(name => name ? this._filter(name, this.optionsEntreprise$.value) : this.optionsEntreprise$.value.slice()));
    }, error => {
      console.error('Erreur lors de la récupération des entreprises :', error);
    });
  }
  _filter(name, entreprises) {
    const filterValue = name.toLowerCase();
    return entreprises.filter(e => e.nom.toLowerCase().includes(filterValue));
  }
  displayFnEntreprise(e) {
    return e ? e.nom : '';
  }
  // Methode pour la selection d'un entreprise
  onEntrepriseSelected(event) {
    // console.log("Entreprise selectionner :", event.entreprise.value);
    // if (event.entreprise && event.entreprise.value) {
    //   this.ajouteEntrepriseForm.get('entrepriseId')?.setValue(event.option.value.id);
    // } else {
    //   this.ajouteEntrepriseForm.get('entrepriseId')?.setValue(null);
    // }
  }
  // Ajoutez cette méthode
  resetForm() {
    this.clientForm.reset({
      pays: '' // Réinitialisez le champ pays si nécessaire
    });
    this.control.reset();
    this.isEntrepriseSelected = false;
    this.errorMessage = '';
    this.successMessage = '';
    this.entrepriseRequiredError = false;
  }
  // Ouvre/ferme le popup d’entreprise
  openPopup() {
    this.showPopup = true;
  }
  closePopup() {
    this.showPopup = false;
  }
  initEntreprise() {
    this.entrepriseForm = this.fb.group({
      nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      pays: [''],
      email: [''],
      telephone: [''],
      adresse: [''],
      siege: [''],
      secteur: ['']
    });
  }
  ajouterEntreprise() {
    if (this.entrepriseForm.invalid) return;
    const newEntreprise = {
      nom: this.entrepriseForm.value.nom,
      pays: this.entrepriseForm.value.pays,
      email: this.entrepriseForm.value.email,
      telephone: this.entrepriseForm.value.telephone,
      adresse: this.entrepriseForm.value.adresse,
      siege: this.entrepriseForm.value.siege,
      secteur: this.entrepriseForm.value.secteur,
      logo: this.entrepriseForm.value.logo,
      nif: this.entrepriseForm.value.nif,
      nina: this.entrepriseForm.value.nina,
      banque: this.entrepriseForm.value.banque,
      rccm: this.entrepriseForm.value.rccm,
      siteWeb: this.entrepriseForm.value.siteWeb,
      signataire: this.entrepriseForm.value.signataire,
      signataireNom: this.entrepriseForm.value.signataireNom,
      prefixe: this.entrepriseForm.value.prefixe,
      suffixe: this.entrepriseForm.value.suffixe,
      tauxTva: this.entrepriseForm.value.tauxTva,
      signaturNum: this.entrepriseForm.value.signaturNum,
      cachetNum: this.entrepriseForm.value.cachetNum
    };
    this.entrepriseService.addEntreprise(newEntreprise).subscribe({
      next: createdEntreprise => {
        const current = this.optionsEntreprise$.value;
        this.optionsEntreprise$.next([createdEntreprise, ...current]);
        this.control.setValue(createdEntreprise);
        this.closePopup();
        this.entrepriseForm.reset();
      },
      error: error => {
        this.errorMessageApi = error.message || 'Erreur lors de la création';
      }
    });
  }
  // Soumission du formulaire client
  ajouterClient() {
    this.errorMessage = '';
    this.successMessage = '';
    this.entrepriseRequiredError = false;
    // Vérification de la sélection d'entreprise
    if (this.isEntrepriseSelected) {
      const entrepriseSelectionnee = this.control.value;
      if (!entrepriseSelectionnee || !entrepriseSelectionnee.id) {
        this.entrepriseRequiredError = true;
        return;
      }
    }
    if (this.clientForm.invalid) {
      this.errorMessage = 'Veuillez corriger les erreurs du formulaire.';
      return;
    }
    this.isLoading = true; // Active le loading
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
      next: response => {
        this.isLoading = false;
        this.clientForm.reset();
        this.isEntrepriseSelected = false;
        // Convertir clientId en nombre
        const clientIdNum = parseInt(response.clientId, 10);
        // Vérifier si la conversion a réussi
        if (isNaN(clientIdNum)) {
          console.error('ID client invalide reçu :', response.clientId);
          this.errorMessage = 'Erreur : ID du client invalide';
          return;
        }
        // Créer un objet Clients avec l'ID converti
        const newClient = {
          id: clientIdNum,
          // Maintenant un nombre
          nomComplet: client.nomComplet,
          adresse: client.adresse,
          email: client.email,
          telephone: client.telephone,
          poste: client.poste,
          pays: client.pays,
          ville: client.ville,
          entrepriseClient: client.entrepriseClient,
          photo: client.photo || this.urllink // Utiliser l'URL par défaut si photo est vide
        };
        this.resetForm();
        // Émettre l'événement avec le nouveau client
        this.clientAjoute.emit(newClient);
        // Afficher un message de succès
        this.successMessage = 'Client créé avec succès !';
        this.closeForm();
      },
      error: err => {
        this.isLoading = false;
        this.errorMessage = err.error?.error || 'Erreur lors de la création';
      }
    });
  }
  // Annuler et revenir à la liste
  goToClients() {
    this.router.navigate(['/clients']);
  }
  closeForm() {
    this.close.emit();
  }
  // Méthode utilitaire pour marquer tous les champs comme touchés
  markFormGroupTouched(formGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  static {
    this.ɵfac = function ClientFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClientFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_2__.EntrepriseService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_SERVICES_client_service__WEBPACK_IMPORTED_MODULE_3__.ClientService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_4__.UsersService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ClientFormComponent,
      selectors: [["app-client-form"]],
      outputs: {
        clientAjoute: "clientAjoute",
        close: "close"
      },
      decls: 76,
      vars: 25,
      consts: [["auto", "matAutocomplete"], [1, "container_global"], ["class", "loading-overlay", 4, "ngIf"], [1, "content_formulaire"], [1, "modal-body"], [1, "container_formulaire", 3, "formGroup"], [1, "Title"], [1, "form_left_right"], [1, "formulaire"], [1, "information_cadre"], [1, "info_titre_input"], [1, "double_input"], [1, "champ_input", "champ_input2"], ["type", "text", "id", "nomComplet", "formControlName", "nomComplet", "name", "nomComplet", "placeholder", "Saisis le nom et pr\u00E9nom", 1, "input_focus"], ["for", "nomComplet", 1, "label"], ["class", "error", 4, "ngIf"], ["type", "email", "id", "email", "formControlName", "email", "name", "email", "placeholder", "Saisis l'email", 1, "input_focus"], ["for", "email", 1, "label"], ["id", "adresse", "formControlName", "adresse", "name", "adresse", "placeholder", "Saisis l'adresse", 1, "input_focus"], ["for", "adresse", 1, "label"], ["id", "poste", "formControlName", "poste", "name", "poste", "placeholder", "Saisissez votre poste ", 1, "input_focus"], ["for", "poste", 1, "label"], [1, "grid_colonne"], [1, "champ_input", "div1"], ["formControlName", "pays", 1, "input_focus", 3, "change"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "pays", 1, "label"], [1, "champ_input", "div2"], ["type", "tel", "id", "telephone", "formControlName", "telephone", "name", "telephone", "placeholder", "Saisis le num\u00E9ro de t\u00E9l\u00E9phone", 1, "input_focus", 3, "input"], ["for", "telephone", 1, "label"], [1, "champ_input", "div3"], ["id", "ville", "formControlName", "ville", "name", "ville", "placeholder", "Saisis la ville", 1, "input_focus"], ["for", "ville", 1, "label"], [1, "champ_input_inventaire"], [1, "switch"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "slider", "round"], ["class", "information_cadre", 4, "ngIf"], [1, "information_cadre", "information_cadre_save"], [1, "container_error_message"], ["class", "error-messageApi2", 4, "ngIf"], ["class", "success-messageApi2", 4, "ngIf"], ["class", "error", "style", "margin-top: 8px;", 4, "ngIf"], [1, "info_titre_input", "info_titre_input_btn"], [1, "btn_annuler"], [1, "btn_cancel", 3, "click"], [1, "btn_ajouter"], [1, "btn_save", 3, "click", "disabled"], ["class", "popup-overlay", 4, "ngIf"], [1, "loading-overlay"], [1, "loading-content"], [1, "spinner"], [1, "error"], [4, "ngIf"], [3, "value"], [1, "champ_input"], ["type", "text", "placeholder", "Selectionner un entreprise", "matInput", "", 1, "input_focus", "input_cursor", 3, "formControl", "matAutocomplete"], ["for", "categorieId", 1, "label"], [3, "optionSelected", "displayWith"], [1, "select-option", 3, "click"], [2, "display", "flex", "align-items", "center", "color", "#0672E4"], [1, "ri-community-line"], [2, "margin-left", "8px"], [1, "icon_arrow"], [1, "ri-arrow-down-s-line"], [1, "option-content"], [1, "error-messageApi2"], [1, "success-messageApi2"], [1, "error", 2, "margin-top", "8px"], [1, "popup-overlay"], [1, "popup-content"], [1, "popup-header"], [1, "close-btn", 3, "click"], [3, "formGroup"], [1, "popup-body"], [1, "champ_grid"], ["type", "text", "formControlName", "nom", "placeholder", "Saisis le nom de l'entreprise", 1, "input_focus"], [1, "label"], [2, "color", "#ff0000", "margin-left", "5px"], ["class", "error-text", 4, "ngIf"], ["type", "email", "formControlName", "email", "placeholder", "Saisis l'email", 1, "input_focus"], ["type", "text", "formControlName", "adresse", "placeholder", "Saisis l'adresse", 1, "input_focus"], ["type", "text", "formControlName", "siege", "placeholder", "Saisis le si\u00E8ge", 1, "input_focus"], ["value", "Mali"], ["value", "S\u00E9n\u00E9gal"], ["value", "C\u00F4te d'Ivoire"], ["type", "tel", "formControlName", "telephone", "placeholder", "Saisis le num\u00E9ro de t\u00E9l\u00E9phone", 1, "input_focus", 3, "input"], ["id", "ville", "formControlName", "secteur", "name", "ville", "placeholder", "Saisis la ville", 1, "input_focus"], ["class", "error-messageApi", 4, "ngIf"], [1, "popup-footer"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "submit", 1, "btn-submit", 3, "click", "disabled"], [1, "error-text"], [1, "error-messageApi"], [3, "click"]],
      template: function ClientFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ClientFormComponent_div_1_Template, 5, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 3)(3, "div", 4)(4, "form", 5)(5, "div", 6)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Ajouter un client");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Nom et pr\u00E9nom");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ClientFormComponent_div_17_Template, 3, 2, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ClientFormComponent_div_22_Template, 2, 1, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 11)(24, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Adresse");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Poste");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 22)(33, "div", 23)(34, "select", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ClientFormComponent_Template_select_change_34_listener($event) {
            return ctx.onPaysChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Pays");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, ClientFormComponent_option_37_Template, 2, 3, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Pays");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, ClientFormComponent_div_40_Template, 3, 0, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 28)(42, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function ClientFormComponent_Template_input_input_42_listener() {
            return ctx.formatPhoneNumber();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "T\u00E9l\u00E9phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, ClientFormComponent_div_45_Template, 3, 2, "div", 15)(46, ClientFormComponent_div_46_Template, 3, 0, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Ville");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 9)(52, "div", 10)(53, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Entreprise");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 34)(56, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "J'appartient \u00E0 une entreprise");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "label", 35)(59, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ClientFormComponent_Template_input_ngModelChange_59_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.isEntrepriseSelected, $event) || (ctx.isEntrepriseSelected = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](61, ClientFormComponent_div_61_Template, 17, 6, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 39)(63, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, ClientFormComponent_div_64_Template, 2, 1, "div", 41)(65, ClientFormComponent_div_65_Template, 2, 1, "div", 42)(66, ClientFormComponent_div_66_Template, 3, 0, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 44)(68, "div", 45)(69, "button", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientFormComponent_Template_button_click_69_listener() {
            return ctx.closeForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 47)(72, "button", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientFormComponent_Template_button_click_72_listener() {
            return ctx.ajouterClient();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, " Ajouter ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, ClientFormComponent_div_74_Template, 58, 10, "div", 49)(75, ClientFormComponent_div_75_Template, 4, 1, "div", 42);
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.clientForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.clientForm.get("nomComplet")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.clientForm.get("nomComplet")) == null ? null : tmp_2_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.clientForm.get("email")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.clientForm.get("email")) == null ? null : tmp_3_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.paysKeys);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.clientForm.get("pays")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.clientForm.get("pays")) == null ? null : tmp_5_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.clientForm.get("telephone")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.clientForm.get("telephone")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["pattern"]) && ((tmp_6_0 = ctx.clientForm.get("pays")) == null ? null : tmp_6_0.value));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.clientForm.get("telephone")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.clientForm.get("telephone")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.isEntrepriseSelected);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](24, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isEntrepriseSelected);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.entrepriseRequiredError);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx.clientForm.valid ? "#0672E4" : "#0671e434")("color", ctx.clientForm.valid ? "#ffffff" : "#00000073")("cursor", ctx.clientForm.valid ? "pointer" : "no-drop");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.clientForm.invalid)("disabled", ctx.clientForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showPopup);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.successMessage);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__.M, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteTrigger],
      styles: ["@charset \"UTF-8\";\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 18px;\n  z-index: 1000;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid white;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.container_global[_ngcontent-%COMP%] {\n  position: relative;\n  margin-right: 5%;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.champ_input_list_stock[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.champ_input[_ngcontent-%COMP%]   .title_input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -18px;\n}\n\n.champ_input_Categorie[_ngcontent-%COMP%] {\n  margin-bottom: 15px !important;\n}\n\n.formulaire[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.Title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #695c5c;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: rgb(107, 102, 102);\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 5px;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n.input_focus2[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 250px;\n  height: 57px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  padding-left: 10px;\n  background: none;\n  color: #777474;\n  border-radius: 5px;\n  padding-top: 10px;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  resize: none;\n}\n\n.input_focus2[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.champ_input2[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 0px;\n  pointer-events: none;\n  color: rgb(66, 56, 56);\n}\n\n.champ_input[_ngcontent-%COMP%]   .labelCategory[_ngcontent-%COMP%] {\n  color: rgb(66, 56, 56);\n  left: 0;\n  font-size: 14px;\n}\n\n.input_focus2[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus2[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n  background-color: #fff;\n}\n\n.input_focus2[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus2[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 15px;\n  transition: all 0.2s ease-in-out;\n}\n\n.info_titre_input[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.info_titre_input[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 10px;\n  letter-spacing: 0.6px;\n}\n\n.champ_input2[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50%;\n  box-sizing: border-box;\n  vertical-align: top;\n}\n\n.champ_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n  border-radius: 5px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.double_input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-top: 10px;\n}\n\n\n\n.container_file[_ngcontent-%COMP%] {\n  width: 150px;\n  border-radius: 10px;\n  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  gap: 5px;\n  background-color: rgba(0, 110, 255, 0.041);\n  margin-bottom: 10px;\n  margin-top: 20px;\n}\n\n.header_file[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 140px;\n  border: 1px dashed rgba(6, 113, 228, 0.6156862745);\n  border-radius: 10px;\n  flex-direction: column;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n\n.header_file[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.header_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n}\n\n.footer_file[_ngcontent-%COMP%] {\n  background-color: rgba(0, 110, 255, 0.075);\n  width: 140px;\n  height: 35px;\n  padding: 5px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: black;\n  border: none;\n  margin-top: 3px;\n}\n\n.footer_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  font-size: 10px;\n}\n\n.footer_file[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 7px;\n}\n\n#file[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container_error_message[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: red;\n  font-weight: bold;\n}\n\n.information_cadre_save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.info_titre_input_btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 20px;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #ff0000;\n  color: #fff;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #0672E4;\n  color: #fff;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all 0.5s;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\n\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #0672E4; \n\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n.input_cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.icon_arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 25px;\n}\n\n.icon_arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #000;\n}\n\n\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.popup-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 50%;\n}\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.popup-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.popup-footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: right;\n}\n\n.btn-cancel[_ngcontent-%COMP%], .btn-submit[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: #ff0000;\n  padding: 6px 25px;\n  color: #fff;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  padding: 6px 25px;\n  color: #ffffff;\n  cursor: pointer;\n  cursor: no-drop;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all ease-in 0.5s;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  color: #ff4444;\n  font-size: 0.8rem;\n  margin-top: 4px;\n}\n\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.error-messageApi[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: red;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  left: -20px;\n}\n\n.success-messageApi[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0672E4;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  left: -20px;\n}\n\n.error-messageApi2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: red;\n  font-weight: bold;\n}\n\n.success-messageApi2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0672E4;\n  font-weight: bold;\n}\n\n.error[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #ff0000;\n  font-weight: bold;\n  position: relative;\n}\n\n.grid_colonne[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.div1[_ngcontent-%COMP%] {\n  grid-area: 1/1/2/2;\n}\n\n.div2[_ngcontent-%COMP%] {\n  grid-area: 1/2/2/3;\n}\n\n.div3[_ngcontent-%COMP%] {\n  grid-area: 1/3/2/4;\n}\n\ninput[type=tel][_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUFLLHVCQUFBO0VBRUw7RUFEQTtJQUFPLHlCQUFBO0VBSVA7QUFDRjtBQURBO0VBR0Usa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVFLGVBQUE7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdFO0VBQ0UsOEJBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQUZKOztBQUtFO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFNRTs7RUFFRSxj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QUNBLGtCQUFBO0FBeEJGOztBQTJCQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUF4QkY7O0FBMkJBO0VBQVEsa0JBQUE7QUF2QlI7O0FBd0JBO0VBQVEsa0JBQUE7QUFwQlI7O0FBcUJBO0VBQVEsa0JBQUE7QUFqQlI7O0FBbUJBO0VBQ0UscUJBQUE7QUFoQkYiLCJmaWxlIjoiY2xpZW50LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG5cbi5sb2FkaW5nLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4OyBcbn1cblxuLnNwaW5uZXIge1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cblxuLmNvbnRhaW5lcl9nbG9iYWwge1xuICAvLyBkaXNwbGF5OiBncmlkO1xuICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcyJSAyOCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAvKiBmb3JtdWxhaXJlICovXG4gIFxuICAuY2hhbXBfaW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfbGlzdF9zdG9jayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAuY2hhbXBfaW5wdXQgLnRpdGxlX2lucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMThweDtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0X0NhdGVnb3JpZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5mb3JtdWxhaXJlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5UaXRsZSBoMyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIG1pbi13aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA0OXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvL3BhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjNjk1YzVjO1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQgLmxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb2xvcjogcmdiKDEwNywgMTAyLCAxMDIpO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIFxuICBcbiAgLmlucHV0X2ZvY3VzOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuICAuaW5wdXRfZm9jdXM6Zm9jdXMgKyAubGFiZWwge1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDU3cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzc3NzQ3NDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICByZXNpemU6IG5vbmU7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQyIC5sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjJweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6IHJnYig2NiwgNTYsIDU2KTtcbiAgfVxuICBcbiAgXG4gIC5jaGFtcF9pbnB1dCAubGFiZWxDYXRlZ29yeSB7XG4gICAgY29sb3I6IHJnYig2NiwgNTYsIDU2KTtcbiAgICBsZWZ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbiAgLmlucHV0X2ZvY3VzMjpmb2N1cyArIC5sYWJlbCB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5pbmZvX3RpdHJlX2lucHV0IHtcbiAgICBwYWRkaW5nOiAyMHB4OyBcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5pbmZvX3RpdHJlX2lucHV0IGg0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbiAgXG4gIC5jaGFtcF9ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG4gIFxuICAvLyAuaW5wdXRfZm9jdXNfbGFyZ2V7XG4gIC8vICAgLy9taW4td2lkdGg6IDM4MHB4O1xuICAvLyAgIHdpZHRoOiAxMDAlO1xuICAvLyB9XG4gIFxuICBcbiAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIFxuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAgLy8gPCEtLSBMZXMgaW5mb3JtYXRpb24gZGVzIG1hZ2FzaW4gIC0tPlxuICAgLmluZm9ybWF0aW9uX2NhZHJlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5kb3VibGVfaW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuLyogRnJvbSBVaXZlcnNlLmlvIGJ5IFlheWExMjA4NSAqLyBcbi5jb250YWluZXJfZmlsZSB7XG4gICAgLy8gaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZ2FwOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTAsIDI1NSwgMC4wNDEpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmhlYWRlcl9maWxlIHtcbiAgICAvLyBmbGV4OiAxO1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjMDY3MWU0OWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBpbWd7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgc3ZnIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLmZvb3Rlcl9maWxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA3NSk7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gIH1cbiAgXG4gIC5mb290ZXJfZmlsZSBwIHtcbiAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICBcbiAgLmZvb3Rlcl9maWxlIGkge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgfVxuICBcbiAgI2ZpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jb250YWluZXJfZXJyb3JfbWVzc2FnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbiAgXG4gIC5lcnJvci1tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyBtYXJnaW4tdG9wOiA3cHg7XG4gIH1cblxuICAuaW5mb3JtYXRpb25fY2FkcmVfc2F2ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5pbmZvX3RpdHJlX2lucHV0X2J0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGdhcDogMjBweDtcbiAgfVxuXG4gIC8vIGJ1dHRvbiBhbm51bGVyXG4uYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWwge1xuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLy8gYnV0dG9uIGFubnVsZXIgaG92ZXJcbiAgLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbiAgfVxuXG4vLyBidXR0b24gYWpvdXRlciBcbi5idG5fYWpvdXRlciAuYnRuX3NhdmUge1xuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLy8gYnV0dG9uIGFqb3V0ZXIgaG92ZXJcbiAgLmJ0bl9ham91dGVyIC5idG5fc2F2ZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB9XG5cbiAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIFxuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAvLyBUb2dnbGUgXG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLyogTWFzcXVlciBsJ2lucHV0IGNoZWNrYm94IG9yaWdpbmFsICovXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogTGUgwqsgc2xpZGVyIMK7ICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgdHJhbnNpdGlvbjogLjRzO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxOHB4OyBcbiAgd2lkdGg6IDE4cHg7XG4gIGxlZnQ6IDNweDsgXG4gIGJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogLjRzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIFF1YW5kIGxlIGNoZWNrYm94IGVzdCBjb2Now6kgKi9cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgLyogQ291bGV1ciBhdSBjaG9peCAqL1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi5pbnB1dF9jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uX2Fycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAyNXB4O1xufVxuXG4uaWNvbl9hcnJvdyBpIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLyogU3R5bGVzIHBvdXIgbGUgcG9wdXAgKi9cbi5wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnBvcHVwLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBvcHVwLWhlYWRlciBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cC1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLy8gQnV0dG9uIFxuXG4uYnRuLWNhbmNlbCwgLmJ0bi1zdWJtaXQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICBwYWRkaW5nOiA2cHggMjVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MDEwMTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xufVxuXG4uYnRuLXN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNBQ0NFQkM7XG4gIHBhZGRpbmc6IDZweCAyNXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IG5vLWRyb3A7XG59XG5cbi5idG4tc3VibWl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gIGNvbG9yOiAjZmY0NDQ0O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uYnRuLXN1Ym1pdDpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmVycm9yLW1lc3NhZ2VBcGkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IC0yMHB4O1xufVxuXG4uc3VjY2Vzcy1tZXNzYWdlQXBpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzA2NzJFNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogLTIwcHg7XG59XG5cbi5lcnJvci1tZXNzYWdlQXBpMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdWNjZXNzLW1lc3NhZ2VBcGkyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzA2NzJFNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ncmlkX2NvbG9ubmUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gIGdyaWQtcm93LWdhcDogMHB4O1xuICBnYXA6IDIwcHg7XG59XG4gIFxuLmRpdjEgeyBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7IH1cbi5kaXYyIHsgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzOyB9XG4uZGl2MyB7IGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDsgfVxuXG5pbnB1dFt0eXBlPVwidGVsXCJdIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9jbGllbnRzL2NsaWVudC1mb3JtL2NsaWVudC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUFLLHVCQUFBO0VBRUw7RUFEQTtJQUFPLHlCQUFBO0VBSVA7QUFDRjtBQURBO0VBR0Usa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVFLGVBQUE7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdFO0VBQ0UsOEJBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQUZKOztBQUtFO0VBQ0UsZ0NBQUE7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aUJBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBeEJGOztBQTJCQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUF4QkY7O0FBMkJBO0VBQVEsa0JBQUE7QUF2QlI7O0FBd0JBO0VBQVEsa0JBQUE7QUFwQlI7O0FBcUJBO0VBQVEsa0JBQUE7QUFqQlI7O0FBbUJBO0VBQ0UscUJBQUE7QUFoQkY7QUFDQSx3aHBCQUF3aHBCIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuXG4ubG9hZGluZy1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDsgXG59XG5cbi5zcGlubmVyIHtcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG5cbi5jb250YWluZXJfZ2xvYmFsIHtcbiAgLy8gZGlzcGxheTogZ3JpZDtcbiAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MiUgMjglO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLyogZm9ybXVsYWlyZSAqL1xuICBcbiAgLmNoYW1wX2lucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0X2xpc3Rfc3RvY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLmNoYW1wX2lucHV0IC50aXRsZV9pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTE4cHg7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dF9DYXRlZ29yaWUge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1xuICB9XG4gIFxuICAuZm9ybXVsYWlyZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuVGl0bGUgaDMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBtaW4td2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNDlweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLy9wYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzY5NWM1YztcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0IC5sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjJweDtcbiAgICBsZWZ0OiA0cHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6IHJnYigxMDcsIDEwMiwgMTAyKTtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuICBcbiAgXG4gIC5pbnB1dF9mb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbiAgLmlucHV0X2ZvY3VzOmZvY3VzICsgLmxhYmVsIHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA1N3B4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICM3Nzc0NzQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gICAgcmVzaXplOiBub25lO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0MiAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIycHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiByZ2IoNjYsIDU2LCA1Nik7XG4gIH1cbiAgXG4gIFxuICAuY2hhbXBfaW5wdXQgLmxhYmVsQ2F0ZWdvcnkge1xuICAgIGNvbG9yOiByZ2IoNjYsIDU2LCA1Nik7XG4gICAgbGVmdDogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4gIC5pbnB1dF9mb2N1czI6Zm9jdXMgKyAubGFiZWwge1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICAuaW5mb190aXRyZV9pbnB1dCB7XG4gICAgcGFkZGluZzogMjBweDsgXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cblxuICAuaW5mb190aXRyZV9pbnB1dCBoNCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0MiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG4gIFxuICAuY2hhbXBfZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICAgIGdyaWQtcm93LWdhcDogMHB4O1xuICAgIGdhcDogMjBweDtcbiAgfVxuICBcbiAgLy8gLmlucHV0X2ZvY3VzX2xhcmdle1xuICAvLyAgIC8vbWluLXdpZHRoOiAzODBweDtcbiAgLy8gICB3aWR0aDogMTAwJTtcbiAgLy8gfVxuICBcbiAgXG4gIC5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgIC8vIDwhLS0gTGVzIGluZm9ybWF0aW9uIGRlcyBtYWdhc2luICAtLT5cbiAgIC5pbmZvcm1hdGlvbl9jYWRyZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMDgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuZG91YmxlX2lucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbi8qIEZyb20gVWl2ZXJzZS5pbyBieSBZYXlhMTIwODUgKi8gXG4uY29udGFpbmVyX2ZpbGUge1xuICAgIC8vIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGdhcDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTEwLCAyNTUsIDAuMDQxKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5oZWFkZXJfZmlsZSB7XG4gICAgLy8gZmxleDogMTtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzA2NzFlNDlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgaW1ne1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgfVxuICBcbiAgLmhlYWRlcl9maWxlIHN2ZyB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICBcbiAgLmhlYWRlcl9maWxlIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgXG4gIC5mb290ZXJfZmlsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTAsIDI1NSwgMC4wNzUpO1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICB9XG4gIFxuICAuZm9vdGVyX2ZpbGUgcCB7XG4gICAgbWFyZ2luOiAwIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgXG4gIC5mb290ZXJfZmlsZSBpIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gIH1cbiAgXG4gICNmaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuY29udGFpbmVyX2Vycm9yX21lc3NhZ2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG4gIFxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLy8gbWFyZ2luLXRvcDogN3B4O1xuICB9XG5cbiAgLmluZm9ybWF0aW9uX2NhZHJlX3NhdmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuaW5mb190aXRyZV9pbnB1dF9idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBnYXA6IDIwcHg7XG4gIH1cblxuICAvLyBidXR0b24gYW5udWxlclxuLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsIHtcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC8vIGJ1dHRvbiBhbm51bGVyIGhvdmVyXG4gIC5idG5fYW5udWxlciAuYnRuX2NhbmNlbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MDEwMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG4gIH1cblxuLy8gYnV0dG9uIGFqb3V0ZXIgXG4uYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlIHtcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC8vIGJ1dHRvbiBham91dGVyIGhvdmVyXG4gIC5idG5fYWpvdXRlciAuYnRuX3NhdmU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgfVxuXG4gIC5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLy8gVG9nZ2xlIFxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi8qIE1hc3F1ZXIgbCdpbnB1dCBjaGVja2JveCBvcmlnaW5hbCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIExlIMOCwqsgc2xpZGVyIMOCwrsgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwOyBsZWZ0OiAwOyByaWdodDogMDsgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICB0cmFuc2l0aW9uOiAuNHM7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDE4cHg7IFxuICB3aWR0aDogMThweDtcbiAgbGVmdDogM3B4OyBcbiAgYm90dG9tOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAuNHM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogUXVhbmQgbGUgY2hlY2tib3ggZXN0IGNvY2jDg8KpICovXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7IC8qIENvdWxldXIgYXUgY2hvaXggKi9cbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG4uaW5wdXRfY3Vyc29yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbl9hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMjVweDtcbn1cblxuLmljb25fYXJyb3cgaSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi8qIFN0eWxlcyBwb3VyIGxlIHBvcHVwICovXG4ucG9wdXAtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ucG9wdXAtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5wb3B1cC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wb3B1cC1oZWFkZXIgaDQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jbG9zZS1idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9wdXAtZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi8vIEJ1dHRvbiBcblxuLmJ0bi1jYW5jZWwsIC5idG4tc3VibWl0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgcGFkZGluZzogNnB4IDI1cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWNhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkODAxMDE7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbn1cblxuLmJ0bi1zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjQUNDRUJDO1xuICBwYWRkaW5nOiA2cHggMjVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBuby1kcm9wO1xufVxuXG4uYnRuLXN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbn1cblxuLmVycm9yLXRleHQge1xuICBjb2xvcjogI2ZmNDQ0NDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmJ0bi1zdWJtaXQ6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjc7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5lcnJvci1tZXNzYWdlQXBpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtMjBweDtcbn1cblxuLnN1Y2Nlc3MtbWVzc2FnZUFwaSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IC0yMHB4O1xufVxuXG4uZXJyb3ItbWVzc2FnZUFwaTIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3VjY2Vzcy1tZXNzYWdlQXBpMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZXJyb3Ige1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZ3JpZF9jb2xvbm5lIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbiAgZ2FwOiAyMHB4O1xufVxuICBcbi5kaXYxIHsgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyOyB9XG4uZGl2MiB7IGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMzsgfVxuLmRpdjMgeyBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7IH1cblxuaW5wdXRbdHlwZT1cInRlbFwiXSB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 63507:
/*!*********************************************************************************!*\
  !*** ./src/app/admin-page/clients/entreprise-form/entreprise-form.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntrepriseFormComponent: () => (/* binding */ EntrepriseFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_entreprise_clients_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../SERVICES/entreprise-clients-service */ 31673);










function EntrepriseFormComponent_div_16_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ce champ est obligatoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EntrepriseFormComponent_div_16_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Minimum 2 caract\u00E8res ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EntrepriseFormComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EntrepriseFormComponent_div_16_small_1_Template, 2, 0, "small", 41)(2, EntrepriseFormComponent_div_16_small_2_Template, 2, 0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.entrepriseClientForm.get("nom")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.entrepriseClientForm.get("nom")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
  }
}
function EntrepriseFormComponent_div_21_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Format d'email invalide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function EntrepriseFormComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EntrepriseFormComponent_div_21_small_1_Template, 2, 0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.entrepriseClientForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["email"]);
  }
}
function EntrepriseFormComponent_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const nomPays_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", nomPays_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", nomPays_r2, " (", ctx_r0.paysIndicatifs[nomPays_r2].indicatif, ") ");
  }
}
function EntrepriseFormComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pays_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Le num\u00E9ro doit contenir ", ctx_r0.paysIndicatifs[pays_r3].longueur, " chiffres apr\u00E8s l\u2019indicatif ", ctx_r0.paysIndicatifs[pays_r3].indicatif.trim(), ". ");
  }
}
function EntrepriseFormComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Le t\u00E9l\u00E9phone est requis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function EntrepriseFormComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessageApi);
  }
}
function EntrepriseFormComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.successMessage);
  }
}
class EntrepriseFormComponent {
  constructor(router, fb, entrepriseClientService) {
    this.router = router;
    this.fb = fb;
    this.entrepriseClientService = entrepriseClientService;
    this.entrepriseAjoute = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.errorMessageApi = '';
    this.errorMessage = '';
    this.successMessage = '';
    this.isSubmitting = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.entrepriseIndicatif = '';
    this.entrepriseMaxPhoneLength = 0;
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
  }
  ngOnInit() {
    this.initializeForm();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // Ajoutez cette méthode
  resetForm() {
    this.entrepriseClientForm.reset({
      pays: '' // Réinitialisez le champ pays
    });
    this.errorMessageApi = '';
    this.successMessage = '';
    this.entrepriseIndicatif = '';
    this.entrepriseMaxPhoneLength = 0;
  }
  // Ajouter ces méthodes
  onEntreprisePaysChange(event) {
    const paysSelectionne = event.target.value;
    const paysInfo = this.paysIndicatifs[paysSelectionne];
    if (!paysInfo) return;
    this.entrepriseIndicatif = paysInfo.indicatif;
    this.entrepriseMaxPhoneLength = paysInfo.longueur;
    const ctrl = this.entrepriseClientForm.get('telephone');
    if (!ctrl.value?.startsWith(this.entrepriseIndicatif)) {
      ctrl.setValue(this.entrepriseIndicatif);
    }
    this.updatePhoneValidator(paysInfo.longueur);
  }
  // Méthode de mise à jour du validateur
  updatePhoneValidator(longueur) {
    const ctrl = this.entrepriseClientForm.get('telephone');
    const regex = new RegExp(`^\\${this.entrepriseIndicatif.trim()}\\s\\d{${longueur}}$`);
    ctrl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(regex)]);
    ctrl.updateValueAndValidity();
  }
  // Formatage "en direct" du numéro
  formatEntreprisePhoneNumber() {
    const ctrl = this.entrepriseClientForm.get('telephone');
    let valeur = ctrl.value;
    if (!valeur.startsWith(this.entrepriseIndicatif)) {
      ctrl.setValue(this.entrepriseIndicatif);
      return;
    }
    // Retirer tout sauf les chiffres après l’indicatif
    const chiffres = valeur.replace(this.entrepriseIndicatif, '').replace(/\D/g, '');
    // Reformater avec espace conservé
    const numeroFormate = `${this.entrepriseIndicatif}${chiffres}`.slice(0, this.entrepriseIndicatif.length + this.entrepriseMaxPhoneLength);
    ctrl.setValue(numeroFormate, {
      emitEvent: false
    });
  }
  initializeForm() {
    this.entrepriseClientForm = this.fb.group({
      nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)]],
      adresse: [''],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      telephone: [''],
      pays: [''],
      siege: [''],
      secteur: ['']
    });
  }
  ajouterEntrepriseClient() {
    this.errorMessageApi = '';
    this.successMessage = '';
    if (this.entrepriseClientForm.invalid) {
      this.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    const entrepriseClient = this.entrepriseClientForm.value;
    this.entrepriseClientService.addEntrepriseClient(entrepriseClient).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe({
      next: response => {
        this.successMessage = 'Entreprise ajoutée avec succès!';
        this.isSubmitting = false;
        // Créer un objet Entreprise à partir des données du formulaire et de la réponse
        const newEntreprise = {
          id: response.id || response.id,
          // Ajustez selon la structure de la réponse
          nom: entrepriseClient.nom,
          adresse: entrepriseClient.adresse,
          email: entrepriseClient.email,
          telephone: entrepriseClient.telephone,
          pays: entrepriseClient.pays,
          siege: entrepriseClient.siege,
          secteur: entrepriseClient.secteur
          // Ajoutez d'autres propriétés si nécessaire
        };
        // Émettre l'événement avec la nouvelle entreprise
        this.entrepriseAjoute.emit(newEntreprise);
        this.resetForm();
        this.entrepriseClientForm.reset();
        this.closeForm();
      },
      error: err => {
        this.errorMessageApi = err.error?.error || err.message || 'Erreur lors de l\'ajout de l\'entreprise';
        this.isSubmitting = false;
      }
    });
  }
  markAllAsTouched() {
    Object.values(this.entrepriseClientForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
  // Annuler et revenir à la liste
  closeForm() {
    this.close.emit();
  }
  // Méthode utilitaire pour marquer tous les champs comme touchés
  markFormGroupTouched(formGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  static {
    this.ɵfac = function EntrepriseFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EntrepriseFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_SERVICES_entreprise_clients_service__WEBPACK_IMPORTED_MODULE_0__.EntrepriseClientService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EntrepriseFormComponent,
      selectors: [["app-entreprise-form"]],
      outputs: {
        entrepriseAjoute: "entrepriseAjoute",
        close: "close"
      },
      decls: 60,
      vars: 16,
      consts: [[1, "container_global"], [1, "content_formulaire"], [1, "modal-body"], [1, "container_formulaire", 3, "formGroup"], [1, "Title"], [1, "form_left_right"], [1, "formulaire"], [1, "information_cadre"], [1, "info_titre_input"], [1, "double_input"], [1, "champ_input", "champ_input2"], ["type", "text", "id", "nomComplet", "formControlName", "nom", "name", "nomComplet", "placeholder", "Saisis le nom d'entreprise", 1, "input_focus"], ["for", "nomComplet", 1, "label"], ["class", "error", 4, "ngIf"], ["type", "email", "id", "email", "formControlName", "email", "name", "email", "placeholder", "Saisis l'email", 1, "input_focus"], ["for", "email", 1, "label"], ["autocomplete", "off", "id", "adresse", "formControlName", "adresse", "name", "adresse", "placeholder", "Saisis l'adresse", 1, "input_focus"], ["for", "adresse", 1, "label"], ["type", "text", "id", "siege", "formControlName", "siege", "name", "siege", "placeholder", "Saisis le si\u00E8ge", 1, "input_focus"], ["for", "telephone", 1, "label"], [1, "grid_colonne"], [1, "champ_input", "div1"], ["formControlName", "pays", 1, "input_focus", 3, "change"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "pays", 1, "label"], [1, "champ_input", "div2"], ["type", "tel", "formControlName", "telephone", "placeholder", "Saisis le num\u00E9ro de t\u00E9l\u00E9phone", 1, "input_focus", 3, "input"], [1, "champ_input", "div3"], ["id", "ville", "formControlName", "secteur", "name", "ville", "placeholder", "Saisis la ville", 1, "input_focus"], ["for", "ville", 1, "label"], [1, "information_cadre", "information_cadre_save"], [1, "container_error_message"], ["class", "error-messageApi2", 4, "ngIf"], ["class", "success-messageApi2", 4, "ngIf"], [1, "info_titre_input", "info_titre_input_btn"], [1, "btn_annuler"], [1, "btn_cancel", 3, "click"], [1, "btn_ajouter"], [1, "btn_save", 3, "click", "disabled"], [1, "error"], [4, "ngIf"], [3, "value"], [1, "error-messageApi2"], [1, "success-messageApi2"]],
      template: function EntrepriseFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "div", 4)(5, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Ajouter un client entreprise");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Nom d'entreprise");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, EntrepriseFormComponent_div_16_Template, 3, 2, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, EntrepriseFormComponent_div_21_Template, 2, 1, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9)(23, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Adresse");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Ville");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20)(32, "div", 21)(33, "select", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EntrepriseFormComponent_Template_select_change_33_listener($event) {
            return ctx.onEntreprisePaysChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Pays");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, EntrepriseFormComponent_option_36_Template, 2, 3, "option", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Pays");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 26)(40, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function EntrepriseFormComponent_Template_input_input_40_listener() {
            return ctx.formatEntreprisePhoneNumber();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "T\u00E9l\u00E9phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, EntrepriseFormComponent_div_43_Template, 3, 2, "div", 13)(44, EntrepriseFormComponent_div_44_Template, 3, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Secteur");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 31)(50, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, EntrepriseFormComponent_div_51_Template, 2, 1, "div", 33)(52, EntrepriseFormComponent_div_52_Template, 2, 1, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 35)(54, "div", 36)(55, "button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EntrepriseFormComponent_Template_button_click_55_listener() {
            return ctx.closeForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 38)(58, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EntrepriseFormComponent_Template_button_click_58_listener() {
            return ctx.ajouterEntrepriseClient();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Ajouter ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_4_0;
          let tmp_5_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.entrepriseClientForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.entrepriseClientForm.get("nom")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.entrepriseClientForm.get("nom")) == null ? null : tmp_1_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.entrepriseClientForm.get("email")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.entrepriseClientForm.get("email")) == null ? null : tmp_2_0.invalid));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.paysKeys);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.entrepriseClientForm.get("telephone")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx.entrepriseClientForm.get("telephone")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["pattern"]) && ((tmp_4_0 = ctx.entrepriseClientForm.get("pays")) == null ? null : tmp_4_0.value));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.entrepriseClientForm.get("telephone")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.entrepriseClientForm.get("telephone")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessageApi);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx.entrepriseClientForm.valid ? "#0672E4" : "#0671e434")("color", ctx.entrepriseClientForm.valid ? "#ffffff" : "#00000073")("cursor", ctx.entrepriseClientForm.valid ? "pointer" : "no-drop");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.entrepriseClientForm.invalid)("disabled", ctx.entrepriseClientForm.invalid);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteModule],
      styles: ["@charset \"UTF-8\";\n.container_global[_ngcontent-%COMP%] {\n  position: relative;\n  margin-right: 5%;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.champ_input_list_stock[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.champ_input[_ngcontent-%COMP%]   .title_input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -18px;\n}\n\n.champ_input_Categorie[_ngcontent-%COMP%] {\n  margin-bottom: 15px !important;\n}\n\n.formulaire[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.Title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #695c5c;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: rgb(107, 102, 102);\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 5px;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n.input_focus2[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 250px;\n  height: 57px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  padding-left: 10px;\n  background: none;\n  color: #777474;\n  border-radius: 5px;\n  padding-top: 10px;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  resize: none;\n}\n\n.input_focus2[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.champ_input2[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 0px;\n  pointer-events: none;\n  color: rgb(66, 56, 56);\n}\n\n.champ_input[_ngcontent-%COMP%]   .labelCategory[_ngcontent-%COMP%] {\n  color: rgb(66, 56, 56);\n  left: 0;\n  font-size: 14px;\n}\n\n.input_focus2[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus2[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n  background-color: #fff;\n}\n\n.input_focus2[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus2[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 15px;\n  transition: all 0.2s ease-in-out;\n}\n\n.info_titre_input[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.info_titre_input[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 10px;\n  letter-spacing: 0.6px;\n}\n\n.champ_input2[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50%;\n  box-sizing: border-box;\n  vertical-align: top;\n}\n\n.champ_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n  border-radius: 5px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.double_input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-top: 30px;\n}\n\n\n\n.container_file[_ngcontent-%COMP%] {\n  width: 150px;\n  border-radius: 10px;\n  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  gap: 5px;\n  background-color: rgba(0, 110, 255, 0.041);\n  margin-bottom: 10px;\n  margin-top: 20px;\n}\n\n.header_file[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 140px;\n  border: 1px dashed rgba(6, 113, 228, 0.6156862745);\n  border-radius: 10px;\n  flex-direction: column;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n\n.header_file[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.header_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n}\n\n.footer_file[_ngcontent-%COMP%] {\n  background-color: rgba(0, 110, 255, 0.075);\n  width: 140px;\n  height: 35px;\n  padding: 5px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: black;\n  border: none;\n  margin-top: 3px;\n}\n\n.footer_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  font-size: 10px;\n}\n\n.footer_file[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 7px;\n}\n\n#file[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container_error_message[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: red;\n  font-weight: bold;\n}\n\n.information_cadre_save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.info_titre_input_btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 20px;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #ff0000;\n  color: #fff;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #0672E4;\n  color: #fff;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all 0.5s;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\n\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #0672E4; \n\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n.input_cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.icon_arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 25px;\n}\n\n.icon_arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #000;\n}\n\n\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.popup-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  width: 50%;\n}\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.popup-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.popup-footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: right;\n}\n\n.btn-cancel[_ngcontent-%COMP%], .btn-submit[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: #ff0000;\n  padding: 6px 25px;\n  color: #fff;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  padding: 6px 25px;\n  color: #ffffff;\n  cursor: pointer;\n  cursor: no-drop;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all ease-in 0.5s;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  color: #ff4444;\n  font-size: 0.8rem;\n  margin-top: 4px;\n}\n\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.error-messageApi[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: red;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  left: -20px;\n}\n\n.success-messageApi[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0672E4;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  left: -20px;\n}\n\n.error-messageApi2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: red;\n  font-weight: bold;\n}\n\n.success-messageApi2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0672E4;\n  font-weight: bold;\n}\n\n.error[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #ff0000;\n  font-weight: bold;\n  position: relative;\n}\n\n.grid_colonne[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.div1[_ngcontent-%COMP%] {\n  grid-area: 1/1/2/2;\n}\n\n.div2[_ngcontent-%COMP%] {\n  grid-area: 1/2/2/3;\n}\n\n.div3[_ngcontent-%COMP%] {\n  grid-area: 1/3/2/4;\n}\n\ninput[type=tel][_ngcontent-%COMP%] {\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJlcHJpc2UtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFFaEI7RUFHRSxrQkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDSSxlQUFBO0FBRko7O0FBS0UsZUFBQTtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBSEo7O0FBTUU7RUFDRSw4QkFBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7QUFISjs7QUFNRTtFQUNFLGVBQUE7QUFISjs7QUFNRTtFQUNFLFdBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7QUFMSjs7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBTEo7O0FBUUU7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVNFOztFQUVFLGNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQU5KOztBQVNFO0VBQ0UsVUFBQTtBQU5KOztBQVNFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBTko7O0FBU0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFB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QUE7QUF4QkY7O0FBNkJBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBMUJGOztBQTZCQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBMUJGOztBQTZCQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUExQkY7O0FBNkJBO0VBQ0UseUJBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQTNCRjs7QUE4QkE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FBM0JGOztBQThCQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBM0JGOztBQThCQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBM0JGOztBQThCQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBM0JGOztBQThCQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQTNCRjs7QUE4QkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQTNCRjs7QUE4QkE7RUFBUSxrQkFBQTtBQTFCUjs7QUEyQkE7RUFBUSxrQkFBQTtBQXZCUjs7QUF3QkE7RUFBUSxrQkFBQTtBQXBCUjs7QUFzQkE7RUFDRSxxQkFBQTtBQW5CRiIsImZpbGUiOiJlbnRyZXByaXNlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmNvbnRhaW5lcl9nbG9iYWwge1xuICAvLyBkaXNwbGF5OiBncmlkO1xuICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcyJSAyOCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAvKiBmb3JtdWxhaXJlICovXG4gIFxuICAuY2hhbXBfaW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfbGlzdF9zdG9jayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAuY2hhbXBfaW5wdXQgLnRpdGxlX2lucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMThweDtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0X0NhdGVnb3JpZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5mb3JtdWxhaXJlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5UaXRsZSBoMyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vbWluLXdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDUzLCA1MCwgNTApO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICM2OTVjNWM7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dCAubGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIycHg7XG4gICAgbGVmdDogNHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiByZ2IoMTA3LCAxMDIsIDEwMik7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbiAgXG4gIFxuICAuaW5wdXRfZm9jdXM6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4gIC5pbnB1dF9mb2N1czpmb2N1cyArIC5sYWJlbCB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNTdweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjNzc3NDc0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDUzLCA1MCwgNTApO1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dDIgLmxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMnB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xuICB9XG4gIFxuICBcbiAgLmNoYW1wX2lucHV0IC5sYWJlbENhdGVnb3J5IHtcbiAgICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xuICAgIGxlZnQ6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuICAuaW5wdXRfZm9jdXMyOmZvY3VzICsgLmxhYmVsIHtcbiAgICBjb2xvcjogIzA2NzJFNDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmluZm9fdGl0cmVfaW5wdXQge1xuICAgIHBhZGRpbmc6IDIwcHg7IFxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLmluZm9fdGl0cmVfaW5wdXQgaDQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dDIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuICBcbiAgLmNoYW1wX2dyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgICBncmlkLXJvdy1nYXA6IDBweDtcbiAgICBnYXA6IDIwcHg7XG4gIH1cbiAgXG4gIC8vIC5pbnB1dF9mb2N1c19sYXJnZXtcbiAgLy8gICAvL21pbi13aWR0aDogMzgwcHg7XG4gIC8vICAgd2lkdGg6IDEwMCU7XG4gIC8vIH1cbiAgXG4gIFxuICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgXG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICAvLyA8IS0tIExlcyBpbmZvcm1hdGlvbiBkZXMgbWFnYXNpbiAgLS0+XG4gICAuaW5mb3JtYXRpb25fY2FkcmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTA4KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmRvdWJsZV9pbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuXG4vKiBGcm9tIFVpdmVyc2UuaW8gYnkgWWF5YTEyMDg1ICovIFxuLmNvbnRhaW5lcl9maWxlIHtcbiAgICAvLyBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBnYXA6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA0MSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uaGVhZGVyX2ZpbGUge1xuICAgIC8vIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICMwNjcxZTQ5ZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcbiAgfVxuICBcbiAgLmhlYWRlcl9maWxlIGltZ3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBzdmcge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICAuZm9vdGVyX2ZpbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTEwLCAyNTUsIDAuMDc1KTtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgfVxuICBcbiAgLmZvb3Rlcl9maWxlIHAge1xuICAgIG1hcmdpbjogMCFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIFxuICAuZm9vdGVyX2ZpbGUgaSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICB9XG4gIFxuICAjZmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLmhlYWRlcl9maWxlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNvbnRhaW5lcl9lcnJvcl9tZXNzYWdlIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuICBcbiAgLmVycm9yLW1lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vIG1hcmdpbi10b3A6IDdweDtcbiAgfVxuXG4gIC5pbmZvcm1hdGlvbl9jYWRyZV9zYXZlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmluZm9fdGl0cmVfaW5wdXRfYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG5cbiAgLy8gYnV0dG9uIGFubnVsZXJcbi5idG5fYW5udWxlciAuYnRuX2NhbmNlbCB7XG4gICAgcGFkZGluZzogOHB4IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAvLyBidXR0b24gYW5udWxlciBob3ZlclxuICAuYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWw6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkODAxMDE7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xuICB9XG5cbi8vIGJ1dHRvbiBham91dGVyIFxuLmJ0bl9ham91dGVyIC5idG5fc2F2ZSB7XG4gICAgcGFkZGluZzogOHB4IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAvLyBidXR0b24gYWpvdXRlciBob3ZlclxuICAuYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gIH1cblxuICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSB7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgXG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBcblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4vKiBNYXNxdWVyIGwnaW5wdXQgY2hlY2tib3ggb3JpZ2luYWwgKi9cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBMZSDCqyBzbGlkZXIgwrsgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwOyBsZWZ0OiAwOyByaWdodDogMDsgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICB0cmFuc2l0aW9uOiAuNHM7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDE4cHg7IFxuICB3aWR0aDogMThweDtcbiAgbGVmdDogM3B4OyBcbiAgYm90dG9tOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAuNHM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogUXVhbmQgbGUgY2hlY2tib3ggZXN0IGNvY2jDqSAqL1xuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0OyAvKiBDb3VsZXVyIGF1IGNob2l4ICovXG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLmlucHV0X2N1cnNvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb25fYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDI1cHg7XG59XG5cbi5pY29uX2Fycm93IGkge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4vKiBTdHlsZXMgcG91ciBsZSBwb3B1cCAqL1xuLnBvcHVwLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLnBvcHVwLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG4ucG9wdXAtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucG9wdXAtaGVhZGVyIGg0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4vLyBCdXR0b24gXG5cbi5idG4tY2FuY2VsLCAuYnRuLXN1Ym1pdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gIHBhZGRpbmc6IDZweCAyNXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi1jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG59XG5cbi5idG4tc3VibWl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI0FDQ0VCQztcbiAgcGFkZGluZzogNnB4IDI1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogbm8tZHJvcDtcbn1cblxuLmJ0bi1zdWJtaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG59XG5cbi5lcnJvci10ZXh0IHtcbiAgY29sb3I6ICNmZjQ0NDQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5idG4tc3VibWl0OmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC43O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZXJyb3ItbWVzc2FnZUFwaSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogLTIwcHg7XG59XG5cbi5zdWNjZXNzLW1lc3NhZ2VBcGkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtMjBweDtcbn1cblxuLmVycm9yLW1lc3NhZ2VBcGkyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN1Y2Nlc3MtbWVzc2FnZUFwaTIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVycm9yIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmMDAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmdyaWRfY29sb25uZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gIGdhcDogMjBweDtcbn1cblxuLmRpdjEgeyBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7IH1cbi5kaXYyIHsgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzOyB9XG4uZGl2MyB7IGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDsgfVxuXG5pbnB1dFt0eXBlPVwidGVsXCJdIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9jbGllbnRzL2VudHJlcHJpc2UtZm9ybS9lbnRyZXByaXNlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBRWhCO0VBR0Usa0JBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0ksZUFBQTtBQUZKOztBQUtFLGVBQUE7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUhKOztBQU1FO0VBQ0UsOEJBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0FBSEo7O0FBTUU7RUFDRSxlQUFBO0FBSEo7O0FBTUU7RUFDRSxXQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0FBTEo7O0FBUUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQUxKOztBQVFFO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFTRTs7RUFFRSxjQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFOSjs7QUFTRTtFQUNFLFVBQUE7QUFOSjs7QUFTRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQU5KOztBQVNFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFB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IHtcbiAgLy8gZGlzcGxheTogZ3JpZDtcbiAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MiUgMjglO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLyogZm9ybXVsYWlyZSAqL1xuICBcbiAgLmNoYW1wX2lucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICBcbiAgLmNoYW1wX2lucHV0X2xpc3Rfc3RvY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLmNoYW1wX2lucHV0IC50aXRsZV9pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTE4cHg7XG4gIH1cbiAgXG4gIC5jaGFtcF9pbnB1dF9DYXRlZ29yaWUge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1xuICB9XG4gIFxuICAuZm9ybXVsYWlyZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuVGl0bGUgaDMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvL21pbi13aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA0OXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvL3BhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiAjNjk1YzVjO1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQgLmxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb2xvcjogcmdiKDEwNywgMTAyLCAxMDIpO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXM6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIFxuICBcbiAgLmlucHV0X2ZvY3VzOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuICAuaW5wdXRfZm9jdXM6Zm9jdXMgKyAubGFiZWwge1xuICAgIGNvbG9yOiAjMDY3MkU0O1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDU3cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzc3NzQ3NDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgICByZXNpemU6IG5vbmU7XG4gIH1cbiAgXG4gIC5pbnB1dF9mb2N1czI6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQyIC5sYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjJweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6IHJnYig2NiwgNTYsIDU2KTtcbiAgfVxuICBcbiAgXG4gIC5jaGFtcF9pbnB1dCAubGFiZWxDYXRlZ29yeSB7XG4gICAgY29sb3I6IHJnYig2NiwgNTYsIDU2KTtcbiAgICBsZWZ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbiAgLmlucHV0X2ZvY3VzMjpmb2N1cyArIC5sYWJlbCB7XG4gICAgY29sb3I6ICMwNjcyRTQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICAuaW5wdXRfZm9jdXMyOjpwbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmlucHV0X2ZvY3VzMjpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5pbmZvX3RpdHJlX2lucHV0IHtcbiAgICBwYWRkaW5nOiAyMHB4OyBcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5pbmZvX3RpdHJlX2lucHV0IGg0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuICB9XG4gIFxuICAuY2hhbXBfaW5wdXQyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cbiAgXG4gIC5jaGFtcF9ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gICAgZ2FwOiAyMHB4O1xuICB9XG4gIFxuICAvLyAuaW5wdXRfZm9jdXNfbGFyZ2V7XG4gIC8vICAgLy9taW4td2lkdGg6IDM4MHB4O1xuICAvLyAgIHdpZHRoOiAxMDAlO1xuICAvLyB9XG4gIFxuICBcbiAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIFxuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAgLy8gPCEtLSBMZXMgaW5mb3JtYXRpb24gZGVzIG1hZ2FzaW4gIC0tPlxuICAgLmluZm9ybWF0aW9uX2NhZHJlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5kb3VibGVfaW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cblxuLyogRnJvbSBVaXZlcnNlLmlvIGJ5IFlheWExMjA4NSAqLyBcbi5jb250YWluZXJfZmlsZSB7XG4gICAgLy8gaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZ2FwOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTAsIDI1NSwgMC4wNDEpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmhlYWRlcl9maWxlIHtcbiAgICAvLyBmbGV4OiAxO1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjMDY3MWU0OWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBpbWd7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgc3ZnIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIFxuICAuaGVhZGVyX2ZpbGUgcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLmZvb3Rlcl9maWxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA3NSk7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gIH1cbiAgXG4gIC5mb290ZXJfZmlsZSBwIHtcbiAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICBcbiAgLmZvb3Rlcl9maWxlIGkge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgfVxuICBcbiAgI2ZpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5oZWFkZXJfZmlsZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jb250YWluZXJfZXJyb3JfbWVzc2FnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbiAgXG4gIC5lcnJvci1tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyBtYXJnaW4tdG9wOiA3cHg7XG4gIH1cblxuICAuaW5mb3JtYXRpb25fY2FkcmVfc2F2ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5pbmZvX3RpdHJlX2lucHV0X2J0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGdhcDogMjBweDtcbiAgfVxuXG4gIC8vIGJ1dHRvbiBhbm51bGVyXG4uYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWwge1xuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLy8gYnV0dG9uIGFubnVsZXIgaG92ZXJcbiAgLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbiAgfVxuXG4vLyBidXR0b24gYWpvdXRlciBcbi5idG5fYWpvdXRlciAuYnRuX3NhdmUge1xuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLy8gYnV0dG9uIGFqb3V0ZXIgaG92ZXJcbiAgLmJ0bl9ham91dGVyIC5idG5fc2F2ZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICB9XG5cbiAgLmNoYW1wX2lucHV0X2ludmVudGFpcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIFxuICB9XG4gIFxuICAuY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAvLyBUb2dnbGUgXG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLyogTWFzcXVlciBsJ2lucHV0IGNoZWNrYm94IG9yaWdpbmFsICovXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogTGUgw4LCqyBzbGlkZXIgw4LCuyAqL1xuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMThweDsgXG4gIHdpZHRoOiAxOHB4O1xuICBsZWZ0OiAzcHg7IFxuICBib3R0b206IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBRdWFuZCBsZSBjaGVja2JveCBlc3QgY29jaMODwqkgKi9cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgLyogQ291bGV1ciBhdSBjaG9peCAqL1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi5pbnB1dF9jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uX2Fycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAyNXB4O1xufVxuXG4uaWNvbl9hcnJvdyBpIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLyogU3R5bGVzIHBvdXIgbGUgcG9wdXAgKi9cbi5wb3B1cC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnBvcHVwLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBvcHVwLWhlYWRlciBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cC1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLy8gQnV0dG9uIFxuXG4uYnRuLWNhbmNlbCwgLmJ0bi1zdWJtaXQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICBwYWRkaW5nOiA2cHggMjVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MDEwMTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xufVxuXG4uYnRuLXN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNBQ0NFQkM7XG4gIHBhZGRpbmc6IDZweCAyNXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IG5vLWRyb3A7XG59XG5cbi5idG4tc3VibWl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gIGNvbG9yOiAjZmY0NDQ0O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uYnRuLXN1Ym1pdDpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmVycm9yLW1lc3NhZ2VBcGkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IC0yMHB4O1xufVxuXG4uc3VjY2Vzcy1tZXNzYWdlQXBpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzA2NzJFNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogLTIwcHg7XG59XG5cbi5lcnJvci1tZXNzYWdlQXBpMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdWNjZXNzLW1lc3NhZ2VBcGkyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzA2NzJFNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ncmlkX2NvbG9ubmUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gIGdyaWQtcm93LWdhcDogMHB4O1xuICBnYXA6IDIwcHg7XG59XG5cbi5kaXYxIHsgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyOyB9XG4uZGl2MiB7IGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMzsgfVxuLmRpdjMgeyBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7IH1cblxuaW5wdXRbdHlwZT1cInRlbFwiXSB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 86846:
/*!**************************************************************************************************!*\
  !*** ./src/app/admin-page/facture-proforma/addfacture-proforma/addfacture-proforma.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddfactureProformaComponent: () => (/* binding */ AddfactureProformaComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../MODELS/customNumberPipe */ 96115);
/* harmony import */ var _produits_produit_form_produit_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../produits/produit-form/produit-form.component */ 16157);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var ngx_barcode6__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-barcode6 */ 23701);
/* harmony import */ var _clients_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../clients/client-form/client-form.component */ 90131);
/* harmony import */ var _clients_entreprise_form_entreprise_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../clients/entreprise-form/entreprise-form.component */ 63507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SERVICES/client-service */ 47746);
/* harmony import */ var _SERVICES_factureproforma_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../SERVICES/factureproforma-service */ 72409);
/* harmony import */ var _SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../SERVICES/produit.service */ 66375);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../SERVICES/users.service */ 88026);
/* harmony import */ var _SERVICES_facture_preview_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../SERVICES/facture-preview-service */ 61068);
/* harmony import */ var _SERVICES_form_state_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../SERVICES/form-state.service */ 88704);
/* harmony import */ var _SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../SERVICES/entreprise-service */ 92120);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ 35255);























const _c0 = () => ({
  standalone: true
});
const _c1 = a0 => ({
  "duplicate": a0
});
function AddfactureProformaComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 64)(1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Connexion en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function AddfactureProformaComponent_div_25_mat_option_12_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("- ", client_r3.entrepriseClient.nom, "");
  }
}
function AddfactureProformaComponent_div_25_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 69)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, AddfactureProformaComponent_div_25_mat_option_12_span_3_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const client_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", client_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", client_r3.nomComplet, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", client_r3.entrepriseClient);
  }
}
function AddfactureProformaComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "div", 35)(2, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("focus", function AddfactureProformaComponent_div_25_Template_input_focus_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onClientFocus());
    })("blur", function AddfactureProformaComponent_div_25_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onClientBlur());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Clients");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "mat-autocomplete", 68, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("optionSelected", function AddfactureProformaComponent_div_25_Template_mat_autocomplete_optionSelected_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onClientSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "mat-option", 69)(8, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "Cr\u00E9er un client");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, AddfactureProformaComponent_div_25_mat_option_12_Template, 4, 3, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const autoClients_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.clientControl)("matAutocomplete", autoClients_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("displayWith", ctx_r1.displayClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 5, ctx_r1.filteredClients));
  }
}
function AddfactureProformaComponent_div_26_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 69)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const entreprise_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", entreprise_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", entreprise_r6.nom, " ");
  }
}
function AddfactureProformaComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "div", 35)(2, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("focus", function AddfactureProformaComponent_div_26_Template_input_focus_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onEntrepriseFocus());
    })("blur", function AddfactureProformaComponent_div_26_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onEntrepriseBlur());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "mat-autocomplete", 68, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("optionSelected", function AddfactureProformaComponent_div_26_Template_mat_autocomplete_optionSelected_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onEntrepriseSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "mat-option", 69)(8, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "Cr\u00E9er une entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, AddfactureProformaComponent_div_26_mat_option_12_Template, 3, 2, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const autoEntreprises_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.entrepriseControl)("matAutocomplete", autoEntreprises_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("displayWith", ctx_r1.displayEntreprise);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 5, ctx_r1.filteredEntreprises));
  }
}
function AddfactureProformaComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 76)(1, "td")(2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td")(5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "textarea", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td")(8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "td")(11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "td")(15, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](17, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "td")(19, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddfactureProformaComponent_tr_55_Template_div_click_19_listener() {
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.supprimerLigneConfirmee(i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ligne_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx_r1.getProduitNom(ligne_r10.produitId));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ligne_r10.ligneDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ligne_r10.quantite);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 5, ctx_r1.getPrixVente(ligne_r10.produitId)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](17, 7, ctx_r1.getMontantTotal(ligne_r10)));
  }
}
function AddfactureProformaComponent_tr_57_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 69)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const produit_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", produit_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", produit_r12.nom, " ");
  }
}
function AddfactureProformaComponent_tr_57_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddfactureProformaComponent_tr_57_div_28_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.ajouterLigneFacture(i_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AddfactureProformaComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 76)(1, "td")(2, "div", 35)(3, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("focus", function AddfactureProformaComponent_tr_57_Template_input_focus_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onFocus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "mat-autocomplete", 68, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("optionSelected", function AddfactureProformaComponent_tr_57_Template_mat_autocomplete_optionSelected_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onProduitSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-option", 69)(7, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Cr\u00E9er un produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, AddfactureProformaComponent_tr_57_mat_option_11_Template, 3, 2, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "td")(14, "div", 35)(15, "textarea", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function AddfactureProformaComponent_tr_57_Template_textarea_ngModelChange_15_listener($event) {
      const ligne_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ligne_r13.ligneDescription, $event) || (ligne_r13.ligneDescription = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "td")(17, "div", 35)(18, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function AddfactureProformaComponent_tr_57_Template_input_ngModelChange_18_listener($event) {
      const ligne_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ligne_r13.quantite, $event) || (ligne_r13.quantite = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AddfactureProformaComponent_tr_57_Template_input_ngModelChange_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.updateCalculs());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "td")(20, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](22, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "td")(24, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](25, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](26, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, AddfactureProformaComponent_tr_57_div_28_Template, 2, 0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ligne_r13 = ctx.$implicit;
    const i_r15 = ctx.index;
    const autoProduits_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx_r1.productControl)("matAutocomplete", autoProduits_r16)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](19, _c1, ctx_r1.inputLignes[0].isDuplicate));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("displayWith", ctx_r1.displayProduit);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](12, 13, ctx_r1.filteredProduits));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ligne_r13.ligneDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](21, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ligne_r13.quantite);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](22, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](22, 15, ctx_r1.getPrixVente(ligne_r13.produitId)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](26, 17, ctx_r1.getMontantTotal(ligne_r13)));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", i_r15 === ctx_r1.inputLignes.length - 1);
  }
}
function AddfactureProformaComponent_div_79_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("(", ctx_r1.remisePourcentage, "%)");
  }
}
function AddfactureProformaComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 91)(1, "div", 15)(2, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function AddfactureProformaComponent_div_79_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx_r1.remisePourcentage, $event) || (ctx_r1.remisePourcentage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("input", function AddfactureProformaComponent_div_79_Template_input_input_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onRemiseChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " REMISE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, AddfactureProformaComponent_div_79_span_5_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Montant (CFA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.remisePourcentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.remisePourcentage !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 3, ctx_r1.getMontantRemise()));
  }
}
function AddfactureProformaComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 91)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "TVA (%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "customNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Montant (CFA)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](3, 2, ((tmp_1_0 = ctx_r1.form.get("tauxTva")) == null ? null : tmp_1_0.value) * 100, "1.0-2") + " %");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 5, ctx_r1.getMontantTVA()));
  }
}
function AddfactureProformaComponent_app_produit_form_122_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-produit-form", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("produitAjoute", function AddfactureProformaComponent_app_produit_form_122_Template_app_produit_form_produitAjoute_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onProduitAjoute($event));
    })("close", function AddfactureProformaComponent_app_produit_form_122_Template_app_produit_form_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r18);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.closeProductFormPanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AddfactureProformaComponent_app_client_form_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-client-form", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("clientAjoute", function AddfactureProformaComponent_app_client_form_128_Template_app_client_form_clientAjoute_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.onClientAjoute($event));
    })("close", function AddfactureProformaComponent_app_client_form_128_Template_app_client_form_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r19);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.closeClientFormPanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AddfactureProformaComponent_div_135_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 98)(1, "div", 99)(2, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Ce produit est d\u00E9j\u00E0 dans la liste.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddfactureProformaComponent_div_135_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.closePopup());
    })("keyup.enter", function AddfactureProformaComponent_div_135_Template_button_keyup_enter_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function AddfactureProformaComponent_div_136_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 98)(1, "div", 99)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddfactureProformaComponent_div_136_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.showExistingInvoiceError = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
class AddfactureProformaComponent {
  constructor(router, clientService, factureProFormaService, produitService, usersService, previewService, formStateService, cdr, entrepriseService, cdRef, fb) {
    this.router = router;
    this.clientService = clientService;
    this.factureProFormaService = factureProFormaService;
    this.produitService = produitService;
    this.usersService = usersService;
    this.previewService = previewService;
    this.formStateService = formStateService;
    this.cdr = cdr;
    this.entrepriseService = entrepriseService;
    this.cdRef = cdRef;
    this.fb = fb;
    this.pendingAdjustments = [];
    this.description = '';
    this.dateFacture = '';
    this.siege = '';
    this.typeDestinataire = 'client';
    this.selectedClientId = null;
    this.selectedEntrepriseId = null;
    this.selectedEntreprise = null;
    this.nomEntreprise = '';
    this.produits = [];
    this.inputLignes = [{
      produitId: null,
      quantite: 0,
      ligneDescription: null,
      isDuplicate: false
    }];
    this.confirmedLignes = [];
    this.clients = [];
    this.totalClients = 0;
    this.noClientsAvailable = false;
    this.entreprises = [];
    this.activeRemise = false;
    this.activeTva = false;
    this.remisePourcentage = 0;
    this.tva = 0;
    this.entrepriseId = 0;
    this.userEntrepriseId = null;
    this.isLoading = false;
    this.facturesproforma = [];
    this.totalHT = 0;
    this.showDuplicatePopup = false;
    this.showExistingInvoiceError = false;
    this.errorMessage = '';
    this.hasDuplicateError = false;
    this.duplicateIndex = null;
    // Ajouts pour mat-autocomplete
    this.productControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl();
    // Ajouter ces variables
    this.showProductFormPanel = false;
    this.panelAnimationState = 'hidden';
    this.clientControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl();
    this.showClientFormPanel = false;
    this.entrepriseControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl();
    this.showEntrepriseFormPanel = false;
    // Initialisation du filtre pour l'autocomplete
    this.filteredProduits = this.productControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.startWith)(null), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(value => typeof value === 'string' ? value : value?.nom), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(name => name ? this._filterProduits(name) : this.produits.slice()));
    this.filteredClients = this.clientControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(value => typeof value === 'string' ? value : value?.nomComplet), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(name => name ? this._filterClients(name) : this.clients.slice()));
    // Ajoutez après les autres initialisations
    this.filteredEntreprises = this.entrepriseControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(value => typeof value === 'string' ? value : value?.nom), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(name => name ? this._filterEntreprises(name) : this.entreprises.slice()));
  }
  _filterClients(name) {
    const filterValue = name.toLowerCase();
    return this.clients.filter(client => client.nomComplet.toLowerCase().includes(filterValue) || client.entrepriseClient?.nom.toLowerCase().includes(filterValue));
  }
  // displayClient(client: Clients): string {
  //   if (!client) return '';
  //   return client.entrepriseClient 
  //     ? `${client.nomComplet} - ${client.entrepriseClient.nom}`
  //     : client.nomComplet;
  // }
  displayClient(client) {
    if (!client) return '';
    return client.entrepriseClient ? `${client.nomComplet} - ${client.entrepriseClient.nom}` : client.nomComplet;
  }
  // onClientSelected(event: MatAutocompleteSelectedEvent) { 
  //   if (event.option.value === null) {
  //     this.openClientFormPanel(); // Ouvre le formulaire pour créer un client
  //   } else {
  //     this.selectedClientId = event.option.value.id;
  //     // Optionnel : autres actions liées à la sélection
  //   }
  // }
  onClientBlur() {
    const selectedClient = this.clientControl.value;
    if (selectedClient && typeof selectedClient === 'object' && 'id' in selectedClient) {
      this.selectedClientId = selectedClient.id;
    } else {
      // Réinitialiser si la valeur n'est pas un objet client valide
      this.selectedClientId = null;
      this.clientControl.setValue(null);
    }
  }
  onClientSelected(event) {
    if (event.option.value === null) {
      this.openClientFormPanel();
    } else {
      this.selectedClientId = event.option.value.id;
      // Mettre à jour le contrôle pour afficher correctement le client
      this.clientControl.setValue(event.option.value);
    }
  }
  onClientFocus() {
    if (!this.clientControl.value) {
      this.clientControl.setValue('');
    }
  }
  _filterEntreprises(name) {
    const filterValue = name.toLowerCase();
    return this.entreprises.filter(entreprise => entreprise.nom.toLowerCase().includes(filterValue));
  }
  displayEntreprise(entreprise) {
    return entreprise && entreprise.nom ? entreprise.nom : '';
  }
  onEntrepriseSelected(event) {
    if (event.option.value === null) {
      this.openEntrepriseFormPanel();
    } else {
      this.selectedEntreprise = event.option.value;
    }
  }
  onEntrepriseFocus() {
    if (!this.entrepriseControl.value) {
      this.entrepriseControl.setValue('');
    }
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.getUserInfo();
      yield Promise.all([_this.getListClients(), _this.getListEntreprise(), _this.getProduits(), _this.getFormInit(), _this.getEntrepriseInfo()]);
      const savedState = _this.formStateService.getState();
      if (savedState) {
        _this.typeDestinataire = savedState.typeDestinataire;
        _this.selectedClientId = savedState.selectedClientId;
        _this.selectedEntreprise = savedState.selectedEntreprise;
        _this.description = savedState.description;
        _this.inputLignes = savedState.inputLignes;
        _this.confirmedLignes = savedState.confirmedLignes;
        _this.activeRemise = savedState.activeRemise;
        _this.remisePourcentage = savedState.remisePourcentage;
        _this.activeTva = savedState.activeTva;
        if (savedState.clientControl) {
          _this.clientControl.setValue(savedState.clientControl);
        }
        if (savedState.entrepriseControl) {
          _this.entrepriseControl.setValue(savedState.entrepriseControl);
        }
      }
    })();
  }
  navigateBack() {
    // this.router.navigate(['/addfacture-proforma']);
    this.router.navigate(['/facture-proforma']);
  }
  onToggleRemise() {
    if (!this.activeRemise) {
      this.remisePourcentage = 0;
    }
  }
  onToggleTVA() {
    if (!this.activeTva) {
      this.tva = 0;
    }
  }
  onRemiseChange() {
    this.remisePourcentage = Number(this.remisePourcentage);
  }
  getMontantRemise() {
    return this.getTotalHT() * this.remisePourcentage / 100;
  }
  getTotalApresRemise() {
    return this.getTotalHT() - this.getMontantRemise();
  }
  getMontantTVA() {
    if (!this.activeTva) return 0;
    const taux = this.form.get('tauxTva')?.value || 0;
    const montant = this.getTotalApresRemise() * taux;
    return Math.round(montant * 100) / 100;
  }
  getTotalCommercial() {
    return this.getTotalApresRemise();
  }
  getTotalTTC() {
    return this.getTotalApresRemise() + this.getMontantTVA();
  }
  updateCalculs() {
    this.inputLignes = [...this.inputLignes];
    this.confirmedLignes = [...this.confirmedLignes];
  }
  closePopup() {
    if (this.duplicateIndex !== null) {
      const idx = this.duplicateIndex;
      this.inputLignes[idx] = {
        produitId: null,
        quantite: 1,
        ligneDescription: null,
        isDuplicate: false
      };
      this.duplicateIndex = null;
    }
    this.showDuplicatePopup = false;
    this.updateCalculs();
    this.cdr.detectChanges();
  }
  trackByFn(index, item) {
    return index;
  }
  supprimerLigneConfirmee(index) {
    this.confirmedLignes.splice(index, 1);
    this.confirmedLignes = [...this.confirmedLignes];
  }
  getProduitNom(produitId) {
    if (!produitId) return '';
    const produit = this.produits.find(p => p.id === produitId);
    return produit?.nom || '';
  }
  goToFacture() {
    this.description = '';
    this.typeDestinataire = 'client';
    this.selectedClientId = null;
    this.selectedEntrepriseId = null;
    this.selectedEntreprise = null;
    this.inputLignes = [{
      produitId: null,
      quantite: 0,
      ligneDescription: null,
      isDuplicate: false
    }];
    this.confirmedLignes = [];
    this.activeRemise = false;
    this.remisePourcentage = 0;
    this.activeTva = false;
    this.formStateService.clearState();
    this.router.navigate(['/facture-proforma']);
  }
  getListClients() {
    this.usersService.getValidAccessToken().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.switchMap)(token => {
      if (!token) {
        console.error('Token manquant pour clients');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.throwError)(() => new Error('Token manquant'));
      }
      return this.clientService.getListClients();
    })).subscribe({
      next: data => {
        this.clients = data.map(client => ({
          ...client,
          entrepriseClient: client.entrepriseClient ? {
            id: client.entrepriseClient.id,
            nom: client.entrepriseClient.nom
          } : null
        })).sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
        this.clientControl.setValue(null);
        this.totalClients = this.clients.length;
        this.noClientsAvailable = this.clients.length === 0;
      },
      error: err => {
        console.error('Erreur récupération clients :', err);
      }
    });
  }
  getListEntreprise() {
    const token = this.usersService.getToken();
    if (!token) {
      console.error('Token manquant pour entreprises');
      return;
    }
    this.clientService.getListEntreprises().subscribe({
      next: data => {
        this.entreprises = data.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
        this.entrepriseControl.setValue(null);
      },
      error: err => {
        console.error('Erreur récupération entreprises :', err);
      }
    });
  }
  getProduits() {
    this.usersService.getValidAccessToken().subscribe({
      next: token => {
        if (!token) {
          console.error('Token manquant pour récupérer les produits');
          return;
        }
        if (!this.userEntrepriseId) {
          console.error('ID entreprise utilisateur manquant');
          return;
        }
        this.produitService.getProduitsParEntreprise(this.userEntrepriseId).subscribe({
          next: data => {
            console.log('Produits récupérés :', data);
            this.produits = data;
            // Filtrer uniquement les produits liés à au moins une boutique non entrepôt
            const produitsBoutiques = this.produits.filter(p => Array.isArray(p.boutiques) && p.boutiques.some(b => (b.typeBoutique || '').toUpperCase() !== 'ENTREPOT'));
            // Mettre à jour filteredProduits pour l'autocomplete
            this.filteredProduits = this.productControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.startWith)(null), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(value => typeof value === 'string' ? value : value?.nom), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(name => {
              if (!name) return produitsBoutiques;
              const lowerName = name.toLowerCase();
              return produitsBoutiques.filter(p => p.nom?.toLowerCase().includes(lowerName));
            }));
            console.log("Produits visibles dans autocomplete :", produitsBoutiques);
          },
          error: err => console.error('Erreur récupération produits :', err)
        });
      },
      error: err => console.error('Erreur récupération token :', err)
    });
  }
  getPrixVente(produitId) {
    if (!produitId) return 0;
    const produit = this.produits.find(p => p.id === produitId);
    return produit?.prixVente || 0;
  }
  getMontantTotal(ligne) {
    const prix = this.getPrixVente(ligne.produitId);
    return prix * (ligne.quantite || 0);
  }
  getTotalHT() {
    const totalConfirmed = this.confirmedLignes.reduce((total, ligne) => total + this.getMontantTotal(ligne), 0);
    const totalInput = this.inputLignes.reduce((total, ligne) => {
      if (ligne.produitId && ligne.quantite > 0) {
        return total + this.getMontantTotal(ligne);
      }
      return total;
    }, 0);
    return totalConfirmed + totalInput;
  }
  creerFactureProforma() {
    this.usersService.getValidAccessToken().subscribe({
      next: token => {
        if (!token) {
          console.error('Token manquant');
          return;
        }
        // Validation des destinataires
        if (!this.selectedClientId && !this.selectedEntreprise) {
          this.errorMessage = 'Sélectionnez un client ou une entreprise';
          this.showExistingInvoiceError = true;
          return;
        }
        // Préparation des lignes de facture
        const allLignes = [...this.confirmedLignes];
        const currentLine = this.inputLignes[0];
        // Ajout de la ligne courante si valide et non dupliquée
        if (currentLine.produitId && currentLine.quantite > 0) {
          const produitExiste = allLignes.some(l => l.produitId === currentLine.produitId);
          if (produitExiste) {
            this.showDuplicatePopup = true;
            return;
          }
          allLignes.push(currentLine);
        }
        if (allLignes.length === 0) {
          alert('Ajoutez au moins un produit');
          return;
        }
        // Formatage de la date (seulement la partie date sans heure)
        const dateSeule = this.dateFacture.includes('T') ? this.dateFacture.split('T')[0] : this.dateFacture;
        // Construction de l’objet facture à envoyer
        const facture = {
          description: this.description,
          lignesFacture: allLignes.map(ligne => ({
            produit: {
              id: ligne.produitId
            },
            quantite: ligne.quantite,
            ligneDescription: ligne.ligneDescription
          }))
        };
        if (this.dateFacture) {
          facture.dateFacture = dateSeule;
        }
        // Définir le client ou l’entreprise selon le type destinataire
        if (this.typeDestinataire === 'client' && this.selectedClientId) {
          facture.client = {
            id: this.selectedClientId
          };
        } else if (this.typeDestinataire === 'entreprise' && this.selectedEntreprise) {
          facture.entrepriseClient = {
            id: this.selectedEntreprise.id
          };
        } else {
          console.error('Destinataire non spécifié');
          return;
        }
        // Appel au service pour créer la facture proforma avec le token
        this.factureProFormaService.creerFactureProforma(facture, this.activeRemise ? this.remisePourcentage : undefined, this.activeTva, this.activeRemise || this.activeTva).subscribe({
          next: res => {
            console.log('Facture créée avec succès:', res);
            // Réinitialisation du formulaire et de l’état local
            this.formStateService.clearState();
            this.confirmedLignes = [];
            this.inputLignes = [{
              produitId: null,
              quantite: 1,
              ligneDescription: null,
              isDuplicate: false
            }];
            // Navigation vers la liste des factures
            this.router.navigate(['/facture-proforma']);
          },
          error: err => {
            const serverMessage = typeof err.error === 'string' ? err.error : err.error?.message;
            this.errorMessage = serverMessage || 'Erreur lors de la création : erreur inconnue';
            this.showExistingInvoiceError = true;
          }
        });
      },
      error: err => {
        console.error('Erreur récupération token :', err);
      }
    });
  }
  removePendingAdjustment(index) {
    this.pendingAdjustments.splice(index, 1);
  }
  getUserInfo() {
    this.usersService.getUserInfo().subscribe({
      next: user => {
        this.nomEntreprise = user.nomEntreprise;
        this.userEntrepriseId = user.entrepriseId;
        console.log("Infos utilisateur récupérées :", user);
        this.getProduits();
      },
      error: err => {
        console.error("Erreur lors de la récupération des infos utilisateur :", err);
      }
    });
  }
  onProduitChange(produitId, ligne, index) {
    ligne.produitId = produitId;
    ligne.isDuplicate = false;
    if (produitId) {
      const isInConfirmed = this.confirmedLignes.some(l => l.produitId === produitId);
      const isInInput = this.inputLignes.some((l, i) => i !== index && l.produitId === produitId);
      if (isInConfirmed || isInInput) {
        this.duplicateIndex = index;
        this.showDuplicatePopup = true;
        setTimeout(() => {
          ligne.produitId = null;
          ligne.ligneDescription = null;
          this.updateCalculs();
          this.cdr.detectChanges();
        }, 0);
        return;
      }
      const produit = this.produits.find(p => p.id === produitId);
      ligne.ligneDescription = produit?.description || null;
    } else {
      ligne.ligneDescription = null;
    }
    this.updateCalculs();
  }
  ajouterLigneFacture(index) {
    const ligne = this.inputLignes[index];
    if (ligne.produitId && ligne.quantite > 0) {
      const allLignes = [...this.confirmedLignes, ...this.inputLignes];
      const produitExiste = allLignes.filter(l => l !== ligne).some(l => l.produitId === ligne.produitId);
      if (produitExiste) {
        this.duplicateIndex = index;
        this.showDuplicatePopup = true;
        ligne.isDuplicate = true;
        setTimeout(() => ligne.isDuplicate = false, 500);
        return;
      }
      this.confirmedLignes.push({
        ...ligne
      });
      this.inputLignes = [{
        produitId: null,
        quantite: 1,
        ligneDescription: null,
        isDuplicate: false
      }];
      this.productControl.setValue(null); // Réinitialiser l'autocomplete
    }
  }
  apercuFactureProforma() {
    this.formStateService.saveState({
      typeDestinataire: this.typeDestinataire,
      selectedClientId: this.selectedClientId,
      selectedEntreprise: this.selectedEntreprise,
      description: this.description,
      inputLignes: this.inputLignes,
      confirmedLignes: this.confirmedLignes,
      activeRemise: this.activeRemise,
      remisePourcentage: this.remisePourcentage,
      activeTva: this.activeTva,
      clientControl: this.clientControl.value,
      entrepriseControl: this.entrepriseControl.value
    });
    const lignes = [...this.confirmedLignes.map(l => ({
      produit: {
        id: l.produitId,
        nom: this.getProduitNom(l.produitId)
      },
      quantite: l.quantite,
      ligneDescription: l.ligneDescription,
      prixUnitaire: this.getPrixVente(l.produitId)
    })), ...this.inputLignes.filter(l => l.produitId && l.quantite > 0).map(l => ({
      produit: {
        id: l.produitId,
        nom: this.getProduitNom(l.produitId)
      },
      quantite: l.quantite,
      ligneDescription: l.ligneDescription,
      prixUnitaire: this.getPrixVente(l.produitId)
    }))];
    const preview = {
      id: 0,
      numeroFacture: '—',
      dateCreation: new Date().toISOString(),
      siege: this.siege,
      description: this.description,
      totalHT: this.getTotalHT(),
      remise: this.activeRemise ? this.remisePourcentage : 0,
      tva: this.activeTva,
      totalFacture: this.getTotalTTC(),
      lignesFacture: lignes,
      client: this.typeDestinataire === 'client' && this.selectedClientId ? {
        id: this.selectedClientId,
        nomComplet: this.getClientName(this.selectedClientId)
      } : undefined,
      entrepriseClient: this.typeDestinataire === 'entreprise' && this.selectedEntreprise ? {
        id: this.selectedEntreprise.id,
        nom: this.selectedEntreprise.nom
      } : undefined
    };
    this.previewService.setPreview(preview);
    this.router.navigate(['/facture-proforma-apercu']);
  }
  getClientName(id) {
    const c = this.clients.find(c => c.id === id);
    return c ? c.nomComplet : '';
  }
  getEntrepriseName(id) {
    const e = this.entreprises.find(e => e.id === id);
    return e ? e.nom : '';
  }
  onProduitAjoute(nouveauProduit) {
    // Ajouter le nouveau produit à la liste des produits
    this.produits.push(nouveauProduit);
    // Mettre à jour la ligne de facture actuelle
    if (this.inputLignes.length > 0) {
      this.inputLignes[0].produitId = nouveauProduit.id;
      this.inputLignes[0].ligneDescription = nouveauProduit.description || null;
      this.inputLignes[0].quantite = 1; // Quantité par défaut
      this.inputLignes[0].isDuplicate = false;
      // Mettre à jour l'autocomplete pour afficher le nom du nouveau produit
      this.productControl.setValue(nouveauProduit);
      // FORCER LA MISE À JOUR DE L'AUTOCOMPLÉTION
      // this.productControl.setValue('');
      // Forcer la mise à jour des options filtrées
      this.filteredProduits = this.productControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(value => typeof value === 'string' ? value : value?.nom), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(name => name ? this._filterProduits(name) : this.produits.slice()));
      // Déclencher une mise à jour de l'interface utilisateur
      this.updateCalculs();
      this.cdr.detectChanges();
    }
    // Fermer le panneau du formulaire
    this.closeProductFormPanel();
  }
  // Méthode appelée au focus
  onFocus() {
    if (!this.productControl.value) {
      this.productControl.setValue('');
    }
  }
  // Méthodes pour mat-autocomplete
  // private _filterProduits(name: string): Produit[] {
  //   const filterValue = name.toLowerCase();
  //   return this.produits.filter(produit => produit.nom.toLowerCase().includes(filterValue));
  // }
  // Logique de filtrage
  _filterProduits(name) {
    if (!name) {
      return this.produits.slice();
    }
    const filterValue = name.toLowerCase();
    return this.produits.filter(produit => produit.nom.toLowerCase().includes(filterValue));
  }
  // displayProduit(produit: Produit): string {
  //   return produit ? produit.nom : '';
  // }
  // Affichage du nom du produit dans l'input
  displayProduit(produit) {
    return produit && produit.nom ? produit.nom : '';
  }
  // Méthode pour ouvrir le panneau
  openProductFormPanel() {
    this.showProductFormPanel = true;
    this.panelAnimationState = 'visible';
  }
  // Méthode pour fermer le panneau
  closeProductFormPanel() {
    this.panelAnimationState = 'hidden';
    setTimeout(() => {
      this.showProductFormPanel = false;
    }, 300); // Correspond à la durée de l'animation
  }
  openClientFormPanel() {
    this.showClientFormPanel = true;
    this.panelAnimationState = 'visible';
  }
  closeClientFormPanel() {
    this.panelAnimationState = 'hidden';
    setTimeout(() => {
      this.showClientFormPanel = false;
    }, 300);
  }
  openEntrepriseFormPanel() {
    this.showEntrepriseFormPanel = true;
    this.panelAnimationState = 'visible';
  }
  closeEntrepriseFormPanel() {
    this.panelAnimationState = 'hidden';
    setTimeout(() => {
      this.showEntrepriseFormPanel = false;
    }, 300);
  }
  onProduitSelected(event) {
    const selectedProduit = event.option.value;
    // Si c'est l'option de création de produit
    if (selectedProduit === null) {
      this.openProductFormPanel();
      return;
    }
    if (selectedProduit && selectedProduit.id) {
      const ligne = this.inputLignes[0];
      ligne.produitId = selectedProduit.id;
      ligne.ligneDescription = selectedProduit.description || null;
      ligne.quantite = ligne.quantite || 1; // Assurer une quantité par défaut
      ligne.isDuplicate = false;
      // Vérifier les doublons
      const isInConfirmed = this.confirmedLignes.some(l => l.produitId === selectedProduit.id);
      if (isInConfirmed) {
        this.duplicateIndex = 0;
        this.showDuplicatePopup = true;
        setTimeout(() => {
          ligne.produitId = null;
          ligne.ligneDescription = null;
          ligne.quantite = 1;
          this.productControl.setValue(null);
          this.updateCalculs();
          this.cdr.detectChanges();
        }, 0);
        return;
      }
      // Mettre à jour l'autocomplete
      this.productControl.setValue(selectedProduit);
      this.updateCalculs();
      this.cdr.detectChanges();
    }
  }
  // Méthode appelée lors de la réception de l’événement clientAjoute
  onClientAjoute(nouveauClient) {
    // Ajouter le nouveau client à la liste
    this.clients.push(nouveauClient);
    // Optionnel : trier par ID décroissant
    this.clients.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
    // Pré-sélectionner le nouveau client dans l’autocomplete
    this.selectedClientId = nouveauClient.id;
    this.clientControl.setValue(nouveauClient);
    // Mettre à jour les options filtrées
    this.filteredClients = this.clientControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.startWith)(nouveauClient), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(value => typeof value === 'string' ? value : value?.nomComplet), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(name => name ? this._filterClients(name) : this.clients.slice()));
    this.filteredClients = this.clientControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(value => typeof value === 'string' ? value : value?.nomComplet), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(name => name ? this._filterClients(name) : this.clients.slice()));
    // Forcer la mise à jour de l’interface utilisateur
    this.cdr.detectChanges();
    // Fermer le panneau du formulaire client (si applicable)
    this.closeClientFormPanel();
  }
  // Méthode appelée lors de la réception de l’événement entrepriseAjoute
  // onEntrepriseAjoute(nouvelleEntreprise: Entreprise) {
  //   // Ajouter la nouvelle entreprise à la liste
  //   this.entreprises.push(nouvelleEntreprise);
  //   // Optionnel : trier par ID décroissant
  //   this.entreprises.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
  //   // Pré-sélectionner la nouvelle entreprise dans l’autocomplete
  //   this.entrepriseControl.setValue(nouvelleEntreprise);
  //   // Mettre à jour les options filtrées
  //   this.filteredEntreprises = this.entrepriseControl.valueChanges.pipe(
  //     startWith(nouvelleEntreprise),
  //     map(value => (typeof value === 'string' ? value : value?.nom)),
  //     map(name => (name ? this._filterEntreprises(name) : this.entreprises.slice()))
  //   );
  //   // Forcer la mise à jour de l’interface utilisateur
  //   this.cdr.detectChanges();
  //   // Fermer le panneau du formulaire
  //   this.closeEntrepriseFormPanel();
  // }
  onEntrepriseAjoute(nouvelleEntreprise) {
    this.entreprises.push(nouvelleEntreprise);
    this.entreprises.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));
    // Mettre à jour la sélection immédiatement
    this.selectedEntreprise = nouvelleEntreprise;
    this.entrepriseControl.setValue(nouvelleEntreprise);
    // FORCER LA MISE À JOUR DE L'AUTOCOMPLÉTION
    this.filteredEntreprises = this.entrepriseControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(value => typeof value === 'string' ? value : value?.nom), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(name => name ? this._filterEntreprises(name) : this.entreprises.slice()));
    this.cdr.detectChanges();
  }
  // onEntrepriseBlur() {
  //   const selectedEntreprise = this.entrepriseControl.value;
  //   if (selectedEntreprise && typeof selectedEntreprise === 'object' && 'id' in selectedEntreprise) {
  //     this.selectedEntreprise = selectedEntreprise;
  //   } else {
  //     this.selectedEntreprise = null;
  //     this.entrepriseControl.setValue(null);
  //   }
  // }
  onEntrepriseBlur() {
    const selectedEntreprise = this.entrepriseControl.value;
    if (selectedEntreprise && typeof selectedEntreprise === 'object' && 'id' in selectedEntreprise) {
      this.selectedEntreprise = selectedEntreprise;
    } else {
      this.selectedEntreprise = null;
      this.entrepriseControl.setValue(null);
    }
  }
  getFormInit() {
    this.form = this.fb.group({
      tauxTva: [null]
    });
  }
  getEntrepriseInfo() {
    this.entrepriseService.getEntrepriseInfo().subscribe({
      next: entreprise => {
        this.form.patchValue({
          tauxTva: entreprise.tauxTva
        });
        console.log("data dentreprise", entreprise);
      },
      error: error => {
        console.error('Erreur lors de la récupération des informations de l\'entreprise', error);
      }
    });
  }
  static {
    this.ɵfac = function AddfactureProformaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddfactureProformaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_SERVICES_client_service__WEBPACK_IMPORTED_MODULE_5__.ClientService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_SERVICES_factureproforma_service__WEBPACK_IMPORTED_MODULE_6__.FactureProFormaService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_7__.ProduitService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_8__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_SERVICES_facture_preview_service__WEBPACK_IMPORTED_MODULE_9__.FacturePreviewService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_SERVICES_form_state_service__WEBPACK_IMPORTED_MODULE_10__.FormStateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_SERVICES_entreprise_service__WEBPACK_IMPORTED_MODULE_11__.EntrepriseService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
      type: AddfactureProformaComponent,
      selectors: [["app-addfacture-proforma"]],
      decls: 137,
      vars: 56,
      consts: [["autoClients", "matAutocomplete"], ["autoEntreprises", "matAutocomplete"], ["autoProduits", "matAutocomplete"], [1, "container_global"], ["class", "loading-overlay", 4, "ngIf"], [1, "content_formulaire"], [1, "modal-body"], [1, "container_formulaire"], ["title", "Retour sur la page facture pro forma", 1, "retour_icon_text", 2, "cursor", "pointer", "color", "#0672E4", "margin-bottom", "15px", 3, "click"], [1, "ri-arrow-left-s-line"], [2, "margin-left", "8px", "font-size", "12px"], [1, "Title"], [1, "information_cadre"], [1, "info_titre_input"], [2, "margin-bottom", "8px", "font-size", "18px"], [1, "champ_input", "champ_input2"], [1, "title_input"], ["type", "radio", "name", "typeDestinataire", "value", "client", 3, "ngModelChange", "ngModel", "ngModelOptions"], [2, "margin-left", "20px"], ["type", "radio", "name", "typeDestinataire", "value", "entreprise", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "champ_grid"], [4, "ngIf"], [1, "champ_input"], ["for", "dateFacture", 2, "font-size", "12px", "position", "relative", "top", "0"], ["lass", "input_focus", "type", "date", "id", "dateFacture", "name", "dateFacture", 1, "input_focus", 2, "position", "relative", "top", "-21px", 3, "ngModelChange", "ngModel"], ["type", "text", "id", "description", "name", "description", "placeholder", "Saisis l'object", 1, "input_focus2", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "description", 1, "label"], [1, "add_new_quantite_stock"], [1, "containerTable"], [1, "titleTableProduit"], [1, "title_table_name"], [1, ""], ["class", "tr_stock", "style", "border-top: 1px solid #f0f2f5;", 4, "ngFor", "ngForOf"], ["class", "tr_stock", "style", "border-top: 1px solid #f0f2f5;", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "tr_stock"], [1, "champ_input", 2, "margin-right", "15px"], ["type", "text", "disabled", "", 1, "input_focus_type", 2, "cursor", "no-drop", "text-align", "center", 3, "value"], [1, "champ_input_inventaire"], [1, "switch"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel", "ngModelOptions"], [1, "slider", "round"], ["class", "double_input_grid", "style", "margin-top: 15px;", 4, "ngIf"], [1, "double_input_ttc"], [1, "montantTTC"], [1, "information_cadre", "information_cadre_save", 2, "display", "flex", "align-items", "center", "justify-content", "space-between"], [2, "cursor", "pointer", "text-align", "right", "margin-left", "20px", 3, "click"], ["title", "Voir l'aper\u00E7u de facture proforma", 1, "btn_apercu"], [1, "ri-eye-2-line"], [1, "info_titre_input", "info_titre_input_btn", 2, "display", "flex", "justify-content", "flex-end", "gap", "10px"], [1, "btn_annuler"], ["type", "button", 1, "btn_cancel", 3, "click"], [1, "btn_ajouter"], ["type", "button", 1, "btn_save", 3, "click"], [1, "container_cadre_facture"], [1, "overlay", 3, "click"], [1, "content_cadre_right", 3, "click"], [1, "cadre_right"], [1, "add_produit"], [3, "produitAjoute", "close", 4, "ngIf"], [1, "add_client", 2, "margin", "10% 0 0 5%"], [3, "clientAjoute", "close", 4, "ngIf"], [1, "add_entreprise", 2, "margin", "10% 0 0 5%"], [3, "entrepriseAjoute", "close"], ["class", "duplicate-popup", 4, "ngIf"], [1, "loading-overlay"], [1, "loading-content"], [1, "spinner"], ["matInput", "", "placeholder", "S\u00E9lectionner un client", 1, "input_focus", 3, "focus", "blur", "formControl", "matAutocomplete"], [3, "optionSelected", "displayWith"], [3, "value"], [2, "display", "flex", "align-items", "center", "color", "#0672E4"], [1, "ri-add-circle-fill", 2, "font-size", "20px"], [2, "margin-left", "8px"], [3, "value", 4, "ngFor", "ngForOf"], [1, "option-content"], ["matInput", "", "placeholder", "S\u00E9lectionner une entreprise", 1, "input_focus", 3, "focus", "blur", "formControl", "matAutocomplete"], [1, "tr_stock", 2, "border-top", "1px solid #f0f2f5"], ["type", "text", "readonly", "", 1, "input_focus_type", 3, "value"], ["type", "text", "readonly", "", "placeholder", "Description", 1, "input_focus_type", 2, "margin-bottom", "-7px", "min-width", "120px", "resize", "none", 3, "value"], ["type", "number", "readonly", "", 1, "input_focus_type", "input_focus_type_quantite", 3, "value"], ["type", "text", "placeholder", "Prix unitaire", 1, "input_focus_type", 2, "cursor", "no-drop", 3, "value"], ["type", "text", "disabled", "", "id", "prixTotal", 1, "input_focus_type", 2, "cursor", "no-drop", "text-align", "center", 3, "value"], [1, "btn_delete_icon_add", 3, "click"], [1, "ri-delete-bin-5-fill"], ["matInput", "", "placeholder", "S\u00E9lectionner un produit", 1, "input_focus_type", "input_focus_type_select", 3, "focus", "formControl", "matAutocomplete", "ngClass"], ["type", "text", "placeholder", "Description", 1, "input_focus_type", 2, "margin-bottom", "-7px", "min-width", "120px", "resize", "none", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "number", "placeholder", "Quantit\u00E9", 1, "input_focus_type", "input_focus_type_quantite", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "text", "placeholder", "Prix unitaire", "readonly", "", 1, "input_focus_type", 2, "cursor", "no-drop", 3, "value"], ["class", "btn_ajouter_icon_add", 3, "click", 4, "ngIf"], [1, "btn_ajouter_icon_add", 3, "click"], [1, "ri-add-fill"], [1, "double_input_grid", 2, "margin-top", "15px"], ["type", "number", "step", "0.01", "name", "remisePourcentage", "placeholder", "Remise en %", 1, "input_focus", 3, "ngModelChange", "input", "ngModel"], [1, "label"], ["type", "text", "readonly", "", 1, "input_focus", 2, "cursor", "no-drop", 3, "value"], ["type", "text", "readonly", "", 1, "input_focus", 3, "value"], [3, "produitAjoute", "close"], [3, "clientAjoute", "close"], [1, "duplicate-popup"], [1, "popup-content"], [1, "modal-content-text"], [1, "modal-content-text-button", 3, "click", "keyup.enter"], [3, "click"]],
      template: function AddfactureProformaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AddfactureProformaComponent_div_1_Template, 5, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 5)(3, "div", 6)(4, "form", 7)(5, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddfactureProformaComponent_Template_p_click_5_listener() {
            return ctx.navigateBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Facture pro forma");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 11)(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "Cr\u00E9er une facture pro forma");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 12)(13, "div", 13)(14, "h5", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "Client(e)");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 15)(17, "div", 16)(18, "label")(19, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function AddfactureProformaComponent_Template_input_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx.typeDestinataire, $event) || (ctx.typeDestinataire = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, " Client ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "label", 18)(22, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function AddfactureProformaComponent_Template_input_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx.typeDestinataire, $event) || (ctx.typeDestinataire = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, " Entreprise ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, AddfactureProformaComponent_div_25_Template, 14, 7, "div", 21)(26, AddfactureProformaComponent_div_26_Template, 14, 7, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 22)(28, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, " Date de facture ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function AddfactureProformaComponent_Template_input_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx.dateFacture, $event) || (ctx.dateFacture = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 22)(32, "textarea", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function AddfactureProformaComponent_Template_textarea_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx.description, $event) || (ctx.description = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, "Objet");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "div", 12)(36, "div", 13)(37, "div", 27)(38, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, "Produits");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div", 28)(41, "table")(42, "thead")(43, "tr", 29)(44, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45, "D\u00E9signation");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "th", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "th", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, "Quantit\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "th", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](51, "Prix Unitaire");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "th", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](53, "Montant (FCFA)");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](55, AddfactureProformaComponent_tr_55_Template, 21, 9, "tr", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](57, AddfactureProformaComponent_tr_57_Template, 29, 23, "tr", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "tfoot")(59, "tr", 34)(60, "td")(61, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62, "MONTANT TOTAL HT ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](63, "td")(64, "td")(65, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "td")(67, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](68, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](69, "customNumber");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](70, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](71, "div", 12)(72, "div", 13)(73, "div", 37)(74, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](75, "Application de REMISE");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "label", 38)(77, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function AddfactureProformaComponent_Template_input_ngModelChange_77_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx.activeRemise, $event) || (ctx.activeRemise = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function AddfactureProformaComponent_Template_input_change_77_listener() {
            return ctx.onToggleRemise();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](78, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](79, AddfactureProformaComponent_div_79_Template, 11, 5, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](80, "div", 12)(81, "div", 13)(82, "div", 42)(83, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](84, " MONTANT COMMERCIAL ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](85, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](86);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](87, "customNumber");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](88, "div", 12)(89, "div", 13)(90, "div", 37)(91, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](92, "Application de TVA");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](93, "label", 38)(94, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayListener"]("ngModelChange", function AddfactureProformaComponent_Template_input_ngModelChange_94_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayBindingSet"](ctx.activeTva, $event) || (ctx.activeTva = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function AddfactureProformaComponent_Template_input_change_94_listener() {
            return ctx.onToggleTVA();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](95, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](96, AddfactureProformaComponent_div_96_Template, 11, 7, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](97, "div", 12)(98, "div", 13)(99, "div", 42)(100, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](101, "MONTANT TOTAL TTC ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](102, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](103);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](104, "customNumber");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](105, "div", 44)(106, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddfactureProformaComponent_Template_div_click_106_listener() {
            return ctx.apercuFactureProforma();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](107, "button", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](108, "Aper\u00E7u ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](109, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](110, "div", 48)(111, "div", 49)(112, "button", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddfactureProformaComponent_Template_button_click_112_listener() {
            return ctx.goToFacture();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](113, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](114, "div", 51)(115, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddfactureProformaComponent_Template_button_click_115_listener() {
            return ctx.creerFactureProforma();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](116);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](117, "div", 53)(118, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddfactureProformaComponent_Template_div_click_118_listener() {
            return ctx.closeProductFormPanel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](119, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddfactureProformaComponent_Template_div_click_119_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](120, "div", 56)(121, "div", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](122, AddfactureProformaComponent_app_produit_form_122_Template, 1, 0, "app-produit-form", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](123, "div", 53)(124, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddfactureProformaComponent_Template_div_click_124_listener() {
            return ctx.closeClientFormPanel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](125, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddfactureProformaComponent_Template_div_click_125_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](126, "div", 56)(127, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](128, AddfactureProformaComponent_app_client_form_128_Template, 1, 0, "app-client-form", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](129, "div", 53)(130, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddfactureProformaComponent_Template_div_click_130_listener() {
            return ctx.closeEntrepriseFormPanel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](131, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddfactureProformaComponent_Template_div_click_131_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](132, "div", 56)(133, "div", 61)(134, "app-entreprise-form", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("entrepriseAjoute", function AddfactureProformaComponent_Template_app_entreprise_form_entrepriseAjoute_134_listener($event) {
            return ctx.onEntrepriseAjoute($event);
          })("close", function AddfactureProformaComponent_Template_app_entreprise_form_close_134_listener() {
            return ctx.closeEntrepriseFormPanel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](135, AddfactureProformaComponent_div_135_Template, 6, 0, "div", 63)(136, AddfactureProformaComponent_div_136_Template, 6, 1, "div", 63);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx.typeDestinataire);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](51, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx.typeDestinataire);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](52, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.typeDestinataire === "client");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.typeDestinataire === "entreprise");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx.dateFacture);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](53, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.confirmedLignes);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.inputLignes)("ngForTrackBy", ctx.trackByFn);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](69, 45, ctx.getTotalHT()));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx.activeRemise);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](54, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.activeRemise);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](87, 47, ctx.getTotalCommercial()), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtwoWayProperty"]("ngModel", ctx.activeTva);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](55, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.activeTva);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](104, 49, ctx.getTotalTTC()), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.inputLignes.length > 0 ? "Ajouter la facture" : "Cr\u00E9er facture", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("show", ctx.showProductFormPanel)("slide-in", ctx.panelAnimationState === "visible")("slide-out", ctx.panelAnimationState === "hidden");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showProductFormPanel);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("show", ctx.showClientFormPanel)("slide-in", ctx.panelAnimationState === "visible")("slide-out", ctx.panelAnimationState === "hidden");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showClientFormPanel);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("show", ctx.showEntrepriseFormPanel)("slide-in", ctx.panelAnimationState === "visible")("slide-out", ctx.panelAnimationState === "hidden");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showDuplicatePopup);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showExistingInvoiceError);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DecimalPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.M, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteTrigger, _MODELS_customNumberPipe__WEBPACK_IMPORTED_MODULE_1__.CustomNumberPipe, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, ngx_barcode6__WEBPACK_IMPORTED_MODULE_23__.NgxBarcode6Module, _produits_produit_form_produit_form_component__WEBPACK_IMPORTED_MODULE_2__.ProduitFormComponent, _clients_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_3__.ClientFormComponent, _clients_entreprise_form_entreprise_form_component__WEBPACK_IMPORTED_MODULE_4__.EntrepriseFormComponent],
      styles: ["@charset \"UTF-8\";\n.container_global[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 72% 28%;\n  position: relative;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n\n.title_input[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 18px;\n  z-index: 1000;\n}\n\n.name_icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.iconEntrepriseList[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.iconEntrepriseList[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid white;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.content_formulaire[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.Title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n  border-radius: 5px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.info_titre_etat[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n}\n\n.etat_content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.btn_etat[_ngcontent-%COMP%] {\n  border: none;\n  padding: 6px 20px;\n  background-color: rgba(0, 0, 0, 0.1882352941);\n  color: #fff;\n  border-radius: 5px;\n}\n\n.btn_etat[_ngcontent-%COMP%]:hover {\n  background-color: #E9D421;\n  transition: all ease 0.2s;\n  color: #000;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #E9D421 !important;\n  border: none;\n  padding: 6px 20px;\n  color: #000;\n  border-radius: 5px;\n}\n\n.info_titre_input[_ngcontent-%COMP%] {\n  padding: 10px 20px 10px;\n}\n\n.info_titre_input[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 0px;\n  letter-spacing: 0.6px;\n}\n\n\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 6px;\n  margin-right: 0;\n}\n\n.double_input_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 250px;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #000000;\n}\n\n.btn_apercu[_ngcontent-%COMP%] {\n  border: none;\n  padding: 2px 20px;\n  border-radius: 5px;\n  background-color: #d0d0d0;\n  color: #001225;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: rgb(107, 102, 102);\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: rgb(66, 56, 56);\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n.input_focus2[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 250px;\n  height: 70px;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  border-radius: 5px;\n  padding-top: 10px;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  color: #000000;\n}\n\n.input_focus2[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.champ_input2[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 0px;\n  pointer-events: none;\n  color: rgb(66, 56, 56);\n}\n\n.champ_input[_ngcontent-%COMP%]   .labelCategory[_ngcontent-%COMP%] {\n  color: rgb(66, 56, 56);\n  left: 0;\n  font-size: 14px;\n}\n\n.input_focus2[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus2[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: rgb(66, 56, 56);\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus2[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus2[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n.input_focus_type_select[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.champ_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n}\n\n.input_focus_type[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #000;\n}\n\n.input_table[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 14px;\n  background: none;\n  color: #695c5c;\n}\n\n.add_new_quantite_stock[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.add_new_quantite_stock[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 13px;\n  letter-spacing: 0.6px;\n  color: rgba(0, 0, 0, 0.5568627451);\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\n\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #0672E4; \n\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n.input_cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.icon_arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 25px;\n}\n\n.icon_arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #000;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: red;\n  font-weight: bold;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.info_titre_input_btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 20px;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #ff0000;\n  color: #fff;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #0672E4;\n  color: #fff;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all 0.5s;\n}\n\n.containerTable[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #ffffff;\n  border-radius: 10px;\n}\n\n.titleTableProduit[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.btn_ajouter_icon_add[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n\n.btn_ajouter_icon_add[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background-color: transparent;\n  color: #0672E4;\n  padding: 2px;\n  border-radius: 50%;\n  cursor: pointer;\n  border: 3px solid #0672E4;\n}\n\n.btn_ajouter_icon_add[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  background-color: rgba(8, 99, 197, 0.0549019608);\n  transition: all ease 0.5s;\n}\n\n.btn_delete_icon_add[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  margin-top: 10px;\n}\n\n.btn_delete_icon_add[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #ff0000;\n  cursor: pointer;\n}\n\n.btn_delete_icon_add[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #ca0000;\n  transition: all ease 0.5s;\n}\n\n.champ_input_list_stock[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  margin-bottom: 6px;\n}\n\n.double_input_ttc[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.duplicate-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  border-radius: 4px;\n  gap: 15px;\n  color: #d32f2f;\n  animation: _ngcontent-%COMP%_shake 0.4s ease-in-out;\n}\n\n.popup-content[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 30px;\n  border-radius: 10px;\n  text-align: center;\n  width: 90%;\n  max-width: 400px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  animation: fadeInDown 0.3s ease;\n  position: relative;\n}\n\n.popup-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 15px;\n  background: #007bff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n.modal-content-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n\n.modal-content-text-button[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #d32f2f;\n  color: #d32f2f;\n  padding: 5px 15px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.modal-content-text-button[_ngcontent-%COMP%]:hover {\n  background: #d32f2f;\n  color: white;\n}\n\n.input_focus_type_select.duplicate[_ngcontent-%COMP%] {\n  border-color: #ff4444 !important;\n  animation: _ngcontent-%COMP%_shake 0.5s;\n}\n\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(5px);\n  }\n  75% {\n    transform: translateX(-5px);\n  }\n}\n.container_cadre_facture[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: flex-end;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s ease, visibility 0.3s;\n}\n.container_cadre_facture.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.container_cadre_facture[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}\n.container_cadre_facture[_ngcontent-%COMP%]   .content_cadre_right[_ngcontent-%COMP%] {\n  width: 700px;\n  height: 100%;\n  background-color: #fff;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  position: relative;\n  z-index: 2;\n  overflow-y: auto;\n  transform: translateX(100%);\n  transition: transform 0.3s ease-in-out;\n}\n.container_cadre_facture.slide-in[_ngcontent-%COMP%]   .content_cadre_right[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.container_cadre_facture.slide-out[_ngcontent-%COMP%]   .content_cadre_right[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n\nmat-option[_ngcontent-%COMP%] {\n  align-items: center;\n  background: rgba(0, 0, 0, 0);\n  \n\n  \n\n  \n\n  font-size: 13px;\n  min-height: 30px !important;\n  padding: 0 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGZhY3R1cmUtcHJvZm9ybWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUNBO0VBRUUsZUFBQTtBQUNGOztBQUVFO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsMENBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFBSyx1QkFBQTtFQUVMO0VBREE7SUFBTyx5QkFBQTtFQUlQO0FBQ0Y7QUFEQTtFQUNFLGFBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFBQTtFQUVFLGtCQUFBO0FBRUY7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFD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O0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBMUJGOztBQTZCQTtFQUNFLGdDQUFBO0VBQ0EscUJBQUE7QUExQkY7O0FBNkJBO0VBQ0U7SUFBVyx3QkFBQTtFQXpCWDtFQTBCQTtJQUFNLDBCQUFBO0VBdkJOO0VBd0JBO0lBQU0sMkJBQUE7RUFyQk47QUFDRjtBQXdCQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBRUEsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7QUF2QkY7QUF5QkU7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUF2Qko7QUEwQkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUF4Qko7QUEyQkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7QUF6Qko7QUE2QkU7RUFDRSx3QkFBQTtBQTNCSjtBQStCRTtFQUNFLDJCQUFBO0FBN0JKOztBQWtDQTtFQUNJLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBL0JKIiwiZmlsZSI6ImFkZGZhY3R1cmUtcHJvZm9ybWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyX2dsb2JhbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzIlIDI4JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50aCB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuICB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuXG4udGl0bGVfaW5wdXQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ubG9hZGluZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubmFtZV9pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaWNvbkVudHJlcHJpc2VMaXN0IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uaWNvbkVudHJlcHJpc2VMaXN0IGkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvYWRpbmctY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7IFxufVxuXG4uc3Bpbm5lciB7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLy8gY2FkcmUgXG4uY29udGVudF9mb3JtdWxhaXJlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLlRpdGxlIGgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4vLyBjYWRyZSBpbmZvcm1hdGlvblxuLmluZm9ybWF0aW9uX2NhZHJlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMDgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pbmZvX3RpdHJlX2V0YXQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZXRhdF9jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uYnRuX2V0YXQge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDZweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMzA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idG5fZXRhdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUQ0MjE7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMnM7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RDQyMSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDZweCAyMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW5mb190aXRyZV9pbnB1dCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4OyBcbn1cblxuLmluZm9fdGl0cmVfaW5wdXQgaDQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbn1cblxuLyogZm9ybXVsYWlyZSAqL1xuXG4uY2hhbXBfaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uZG91YmxlX2lucHV0X2dyaWQge1xuZGlzcGxheTogZ3JpZDtcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbmdhcDogMjBweDtcbn1cblxuLmlucHV0X2ZvY3VzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIGhlaWdodDogNDlweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLy9wYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIC8vIGNvbG9yOiAjNjk1YzVjO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgLy8gY29sb3I6ICMwNjcyRTQ7XG59XG5cbi5idG5fYXBlcmN1IHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAycHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkMGQwO1xuICBjb2xvcjogIzAwMTIyNTtcbiAgLy8gY29sb3I6ICMwNjcyRTQ7XG59XG5cbi5jaGFtcF9pbnB1dCAubGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjJweDtcbiAgbGVmdDogNHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY29sb3I6IHJnYigxMDcsIDEwMiwgMTAyKTtcbn1cblxuLmlucHV0X2ZvY3VzOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cblxuLmlucHV0X2ZvY3VzOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuLmlucHV0X2ZvY3VzOmZvY3VzICsgLmxhYmVsIHtcbiAgLy8gY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiByZ2IoNjYsIDU2LCA1Nik7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5pbnB1dF9mb2N1czpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uaW5wdXRfZm9jdXMyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICAvLyBjb2xvcjogIzc3NzQ3NDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgLy8gY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uaW5wdXRfZm9jdXMyOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5jaGFtcF9pbnB1dDIgLmxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIycHg7XG4gIGxlZnQ6IDBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbG9yOiByZ2IoNjYsIDU2LCA1Nik7XG59XG5cblxuLmNoYW1wX2lucHV0IC5sYWJlbENhdGVnb3J5IHtcbiAgY29sb3I6IHJnYig2NiwgNTYsIDU2KTtcbiAgbGVmdDogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW5wdXRfZm9jdXMyOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuLmlucHV0X2ZvY3VzMjpmb2N1cyArIC5sYWJlbCB7XG4gIC8vIGNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pbnB1dF9mb2N1czI6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmlucHV0X2ZvY3VzMjpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uaW5wdXRfZm9jdXNfdHlwZV9zZWxlY3Qge1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4uY2hhbXBfZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICAgIGdyaWQtcm93LWdhcDogMHB4O1xuICAgIC8vIGdhcDogMjBweDtcbn1cblxuLy8gLmlucHV0X2ZvY3VzX3R5cGVfcXVhbnRpdGUge1xuLy8gICBtYXgtd2lkdGg6IDkwcHg7XG4vLyB9XG5cbi5pbnB1dF9mb2N1c190eXBlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIG1pbi13aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNDlweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLy9wYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uaW5wdXRfdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgLy8gbWluLXdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA0OXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDUzLCA1MCwgNTApO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBtYXJnaW46IDEwcHggMCAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzY5NWM1Yztcbn1cblxuLmFkZF9uZXdfcXVhbnRpdGVfc3RvY2sge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYWRkX25ld19xdWFudGl0ZV9zdG9jayBoNCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbiAgY29sb3I6ICMwMDAwMDA4ZTtcbn1cblxuLy8gVG9nZ2xlIFxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi8qIE1hc3F1ZXIgbCdpbnB1dCBjaGVja2JveCBvcmlnaW5hbCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIExlIMKrIHNsaWRlciDCuyAqL1xuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMThweDsgXG4gIHdpZHRoOiAxOHB4O1xuICBsZWZ0OiAzcHg7IFxuICBib3R0b206IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBRdWFuZCBsZSBjaGVja2JveCBlc3QgY29jaMOpICovXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7IC8qIENvdWxldXIgYXUgY2hvaXggKi9cbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG4uaW5wdXRfY3Vyc29yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbl9hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMjVweDtcbn1cblxuLmljb25fYXJyb3cgaSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHtcbiAgZGlzcGxheTogZmxleDsgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLy8gbWFyZ2luLWJvdHRvbTogLThweDtcblxufVxuXG4uY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbmZvX3RpdHJlX2lucHV0X2J0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBnYXA6IDIwcHg7XG59XG5cbi8vIGJ1dHRvbiBhbm51bGVyXG4uYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWwge1xuICBwYWRkaW5nOiA4cHggMzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vLyBidXR0b24gYW5udWxlciBob3ZlclxuLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MDEwMTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjVzO1xufVxuXG4vLyBidXR0b24gYWpvdXRlciBcbi5idG5fYWpvdXRlciAuYnRuX3NhdmUge1xuICBwYWRkaW5nOiA4cHggMzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vLyBidXR0b24gYWpvdXRlciBob3ZlclxuLmJ0bl9ham91dGVyIC5idG5fc2F2ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5jb250YWluZXJUYWJsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0gXG5cbi50aXRsZVRhYmxlUHJvZHVpdCB0aCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLy8gYnRuIGFqb3V0ZXJcbi5idG5fYWpvdXRlcl9pY29uX2FkZCB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uYnRuX2Fqb3V0ZXJfaWNvbl9hZGQgaSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDNweCBzb2xpZCAjMDY3MkU0O1xufVxuXG4uYnRuX2Fqb3V0ZXJfaWNvbl9hZGQgaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzUwZTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xufVxuXG4vLyBidG4gc3VwcHJpbWVyXG4uYnRuX2RlbGV0ZV9pY29uX2FkZCB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYnRuX2RlbGV0ZV9pY29uX2FkZCBpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmMDAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuX2RlbGV0ZV9pY29uX2FkZCBpOmhvdmVyIHtcbiAgY29sb3I6ICNjYTAwMDA7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcbn1cblxuLmNoYW1wX2lucHV0X2xpc3Rfc3RvY2sge1xuICBkaXNwbGF5OiBibG9jazsgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uZG91YmxlX2lucHV0X3R0YyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmR1cGxpY2F0ZS1wb3B1cCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGdhcDogMTVweDtcbiAgY29sb3I6ICNkMzJmMmY7XG4gIGFuaW1hdGlvbjogc2hha2UgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLnBvcHVwLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLDAsMCwwLjMpO1xuICBhbmltYXRpb246IGZhZGVJbkRvd24gMC4zcyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wb3B1cC1jb250ZW50IGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xufVxuXG4ubW9kYWwtY29udGVudC10ZXh0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tb2RhbC1jb250ZW50LXRleHQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzMmYyZjtcbiAgY29sb3I6ICNkMzJmMmY7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5tb2RhbC1jb250ZW50LXRleHQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2QzMmYyZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW5wdXRfZm9jdXNfdHlwZV9zZWxlY3QuZHVwbGljYXRlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmY0NDQ0ICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogc2hha2UgMC41cztcbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpOyB9XG4gIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTsgfVxufVxuXG4vLyBjYWRyZSBhZGQgcHJvZHVpdFxuLmNvbnRhaW5lcl9jYWRyZV9mYWN0dXJlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IC8vIEFsaWduZXIgw6AgZHJvaXRlXG4gIC8vIHotaW5kZXg6IDEwMDA7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UsIHZpc2liaWxpdHkgMC4zcztcblxuICAmLnNob3cge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIC5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgLmNvbnRlbnRfY2FkcmVfcmlnaHQge1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC8vIEFuaW1hdGlvbiBkJ2VudHLDqWVcbiAgJi5zbGlkZS1pbiAuY29udGVudF9jYWRyZV9yaWdodCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG5cbiAgLy8gQW5pbWF0aW9uIGRlIHNvcnRpZVxuICAmLnNsaWRlLW91dCAuY29udGVudF9jYWRyZV9yaWdodCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG59XG5cblxubWF0LW9wdGlvbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xuICAgIC8qIG1hcmdpbjogM3B4OyAqL1xuICAgIC8qIGJhY2tncm91bmQ6IHJlZDsgKi9cbiAgICAvKiBoZWlnaHQ6IDBweDsgKi9cbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWluLWhlaWdodDogMzBweCFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAxMnB4O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9mYWN0dXJlLXByb2Zvcm1hL2FkZGZhY3R1cmUtcHJvZm9ybWEvYWRkZmFjdHVyZS1wcm9mb3JtYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQ0E7RUFFRSxlQUFBO0FBQ0Y7O0FBRUU7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUFLLHVCQUFBO0VBRUw7RUFEQTtJQUFPLHlCQUFBO0VBSVA7QUFDRjtBQURBO0VBQ0UsYUFBQTtBQUdGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQUFBO0VBRUUsa0JBQUE7QUFFRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUEsZUFBQTtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUFBQTs7QUFHQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBRUEsY0FBQTtBQUZGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBSkY7O0FBT0E7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUpGOztBQVFBOztFQUdFLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFORjs7QUFTQTtFQUNFLFVBQUE7QUFORjs7QUFTQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQU5GOztBQVNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0VBRUEsY0FBQTtBQVRGOztBQVlBO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFURjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBVEY7O0FBYUE7RUFDRSxzQkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0FBVkY7O0FBYUE7O0VBR0Usc0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQVhGOztBQWNBO0VBQ0UsVUFBQTtBQVhGOztBQWNBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBWEY7O0FBY0E7RUFDRSxnQkFBQTtBQVhGOztBQWNBO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBWEo7O0FBbUJBO0VBQ0UsV0FBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsV0FBQTtBQWxCRjs7QUFxQkE7RUFDRSxXQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBbkJGOztBQXNCQTtFQUNFLG1CQUFBO0FBbkJGOztBQXNCQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtDQUFBO0FBbkJGOztBQXdCQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXJCRjs7QUF3QkEsc0NBQUE7QUFDQTtFQUNFLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQXJCRjs7QUF3QkEsa0JBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFBUSxPQUFBO0VBQVMsUUFBQTtFQUFVLFNBQUE7RUFDM0Isc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBbEJGOztBQXFCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFsQkY7O0FBcUJBLGdDQUFBO0FBQ0E7RUFDRSx5QkFBQSxFQUFBLHFCQUFBO0FBbEJGOztBQXFCQTtFQUNFLDJCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGVBQUE7QUFsQkY7O0FBcUJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQWxCRjs7QUFxQkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQWxCRjs7QUFxQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQWxCRjs7QUF1QkE7RUFDRSxTQUFBO0FBcEJGOztBQXVCQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBcEJGOztBQXVCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtBQXBCRjs7QUF3QkE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQXJCRjs7QUF5QkE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FBdEJGOztBQTBCQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBdkJGOztBQTJCQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7QUF4QkY7O0FBMkJBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBeEJGOztBQTJCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXhCRjs7QUE0QkE7RUFDRSxpQkFBQTtBQXpCRjs7QUE0QkE7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBekJGOztBQTRCQTtFQUNFLGdEQUFBO0VBQ0EseUJBQUE7QUF6QkY7O0FBNkJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQTFCRjs7QUE2QkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUExQkY7O0FBNkJBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FBMUJGOztBQTZCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBMUJGOztBQTZCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBMUJGOztBQTZCQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QUExQkY7O0FBNkJBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQTFCRjs7QUE2QkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTFCRjs7QUE2QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBMUJGOztBQTZCQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBMUJGOztBQTZCQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQTFCRjs7QUE2QkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUExQkY7O0FBNkJBO0VBQ0UsZ0NBQUE7RUFDQSxxQkFBQTtBQTFCRjs7QUE2QkE7RUFDRTtJQUFXLHdCQUFBO0VBekJYO0VBMEJBO0lBQU0sMEJBQUE7RUF2Qk47RUF3QkE7SUFBTSwyQkFBQTtFQXJCTjtBQUNGO0FBd0JBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFFQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtBQXZCRjtBQXlCRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQXZCSjtBQTBCRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQXhCSjtBQTJCRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtBQXpCSjtBQTZCRTtFQUNFLHdCQUFBO0FBM0JKO0FBK0JFO0VBQ0UsMkJBQUE7QUE3Qko7O0FBa0NBO0VBQ0ksbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUEvQko7QUFDQSxnbXNCQUFnbXNCIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcl9nbG9iYWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcyJSAyOCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGgge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbiAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1cblxuLnRpdGxlX2lucHV0IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmxvYWRpbmctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLm5hbWVfaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmljb25FbnRyZXByaXNlTGlzdCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmljb25FbnRyZXByaXNlTGlzdCBpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2FkaW5nLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4OyBcbn1cblxuLnNwaW5uZXIge1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi8vIGNhZHJlIFxuLmNvbnRlbnRfZm9ybXVsYWlyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5UaXRsZSBoMyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm1vZGFsLWJvZHkge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuLy8gY2FkcmUgaW5mb3JtYXRpb25cbi5pbmZvcm1hdGlvbl9jYWRyZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTA4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaW5mb190aXRyZV9ldGF0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmV0YXRfY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cblxuLmJ0bl9ldGF0IHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA2cHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDMwO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnRuX2V0YXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlENDIxO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjJzO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUQ0MjEgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA2cHggMjBweDtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmluZm9fdGl0cmVfaW5wdXQge1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweDsgXG59XG5cbi5pbmZvX3RpdHJlX2lucHV0IGg0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG59XG5cbi8qIGZvcm11bGFpcmUgKi9cblxuLmNoYW1wX2lucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmRvdWJsZV9pbnB1dF9ncmlkIHtcbmRpc3BsYXk6IGdyaWQ7XG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG5nYXA6IDIwcHg7XG59XG5cbi5pbnB1dF9mb2N1cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDQ5cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICAvLyBjb2xvcjogIzY5NWM1YztcbiAgY29sb3I6ICMwMDAwMDA7XG4gIC8vIGNvbG9yOiAjMDY3MkU0O1xufVxuXG4uYnRuX2FwZXJjdSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMnB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwZDBkMDtcbiAgY29sb3I6ICMwMDEyMjU7XG4gIC8vIGNvbG9yOiAjMDY3MkU0O1xufVxuXG4uY2hhbXBfaW5wdXQgLmxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIycHg7XG4gIGxlZnQ6IDRweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbG9yOiByZ2IoMTA3LCAxMDIsIDEwMik7XG59XG5cbi5pbnB1dF9mb2N1czpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG5cbi5pbnB1dF9mb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbi5pbnB1dF9mb2N1czpmb2N1cyArIC5sYWJlbCB7XG4gIC8vIGNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaW5wdXRfZm9jdXM6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmlucHV0X2ZvY3VzMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC8vIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgLy8gY29sb3I6ICM3Nzc0NzQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gIC8vIGNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmlucHV0X2ZvY3VzMjpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uY2hhbXBfaW5wdXQyIC5sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMnB4O1xuICBsZWZ0OiAwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xufVxuXG5cbi5jaGFtcF9pbnB1dCAubGFiZWxDYXRlZ29yeSB7XG4gIGNvbG9yOiByZ2IoNjYsIDU2LCA1Nik7XG4gIGxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmlucHV0X2ZvY3VzMjpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbi5pbnB1dF9mb2N1czI6Zm9jdXMgKyAubGFiZWwge1xuICAvLyBjb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6IHJnYig2NiwgNTYsIDU2KTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaW5wdXRfZm9jdXMyOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5pbnB1dF9mb2N1czI6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmlucHV0X2ZvY3VzX3R5cGVfc2VsZWN0IHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLmNoYW1wX2dyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgICBncmlkLXJvdy1nYXA6IDBweDtcbiAgICAvLyBnYXA6IDIwcHg7XG59XG5cbi8vIC5pbnB1dF9mb2N1c190eXBlX3F1YW50aXRlIHtcbi8vICAgbWF4LXdpZHRoOiA5MHB4O1xuLy8gfVxuXG4uaW5wdXRfZm9jdXNfdHlwZSB7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyBtaW4td2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDQ5cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmlucHV0X3RhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIG1pbi13aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNDlweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICM2OTVjNWM7XG59XG5cbi5hZGRfbmV3X3F1YW50aXRlX3N0b2NrIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmFkZF9uZXdfcXVhbnRpdGVfc3RvY2sgaDQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG4gIGNvbG9yOiAjMDAwMDAwOGU7XG59XG5cbi8vIFRvZ2dsZSBcblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4vKiBNYXNxdWVyIGwnaW5wdXQgY2hlY2tib3ggb3JpZ2luYWwgKi9cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBMZSDDgsKrIHNsaWRlciDDgsK7ICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgdHJhbnNpdGlvbjogLjRzO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxOHB4OyBcbiAgd2lkdGg6IDE4cHg7XG4gIGxlZnQ6IDNweDsgXG4gIGJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogLjRzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIFF1YW5kIGxlIGNoZWNrYm94IGVzdCBjb2Now4PCqSAqL1xuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0OyAvKiBDb3VsZXVyIGF1IGNob2l4ICovXG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLmlucHV0X2N1cnNvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb25fYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDI1cHg7XG59XG5cbi5pY29uX2Fycm93IGkge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uY2hhbXBfaW5wdXRfaW52ZW50YWlyZSB7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC8vIG1hcmdpbi1ib3R0b206IC04cHg7XG5cbn1cblxuLmNoYW1wX2lucHV0X2ludmVudGFpcmUgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaW5mb190aXRyZV9pbnB1dF9idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4vLyBidXR0b24gYW5udWxlclxuLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsIHtcbiAgcGFkZGluZzogOHB4IDMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLy8gYnV0dG9uIGFubnVsZXIgaG92ZXJcbi5idG5fYW5udWxlciAuYnRuX2NhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkODAxMDE7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbn1cblxuLy8gYnV0dG9uIGFqb3V0ZXIgXG4uYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlIHtcbiAgcGFkZGluZzogOHB4IDMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLy8gYnV0dG9uIGFqb3V0ZXIgaG92ZXJcbi5idG5fYWpvdXRlciAuYnRuX3NhdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4uY29udGFpbmVyVGFibGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59IFxuXG4udGl0bGVUYWJsZVByb2R1aXQgdGgge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8vIGJ0biBham91dGVyXG4uYnRuX2Fqb3V0ZXJfaWNvbl9hZGQge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmJ0bl9ham91dGVyX2ljb25fYWRkIGkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzA2NzJFNDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAzcHggc29saWQgIzA2NzJFNDtcbn1cblxuLmJ0bl9ham91dGVyX2ljb25fYWRkIGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1MGU7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcbn1cblxuLy8gYnRuIHN1cHByaW1lclxuLmJ0bl9kZWxldGVfaWNvbl9hZGQge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJ0bl9kZWxldGVfaWNvbl9hZGQgaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bl9kZWxldGVfaWNvbl9hZGQgaTpob3ZlciB7XG4gIGNvbG9yOiAjY2EwMDAwO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XG59XG5cbi5jaGFtcF9pbnB1dF9saXN0X3N0b2NrIHtcbiAgZGlzcGxheTogYmxvY2s7IFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLmRvdWJsZV9pbnB1dF90dGMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kdXBsaWNhdGUtcG9wdXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBnYXA6IDE1cHg7XG4gIGNvbG9yOiAjZDMyZjJmO1xuICBhbmltYXRpb246IHNoYWtlIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgYW5pbWF0aW9uOiBmYWRlSW5Eb3duIDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucG9wdXAtY29udGVudCBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbn1cblxuLm1vZGFsLWNvbnRlbnQtdGV4dCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubW9kYWwtY29udGVudC10ZXh0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMzJmMmY7XG4gIGNvbG9yOiAjZDMyZjJmO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ubW9kYWwtY29udGVudC10ZXh0LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNkMzJmMmY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmlucHV0X2ZvY3VzX3R5cGVfc2VsZWN0LmR1cGxpY2F0ZSB7XG4gIGJvcmRlci1jb2xvcjogI2ZmNDQ0NCAhaW1wb3J0YW50O1xuICBhbmltYXRpb246IHNoYWtlIDAuNXM7XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTsgfVxuICA3NSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7IH1cbn1cblxuLy8gY2FkcmUgYWRkIHByb2R1aXRcbi5jb250YWluZXJfY2FkcmVfZmFjdHVyZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAvLyBBbGlnbmVyIMODwqAgZHJvaXRlXG4gIC8vIHotaW5kZXg6IDEwMDA7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UsIHZpc2liaWxpdHkgMC4zcztcblxuICAmLnNob3cge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIC5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgLmNvbnRlbnRfY2FkcmVfcmlnaHQge1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC8vIEFuaW1hdGlvbiBkJ2VudHLDg8KpZVxuICAmLnNsaWRlLWluIC5jb250ZW50X2NhZHJlX3JpZ2h0IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cblxuICAvLyBBbmltYXRpb24gZGUgc29ydGllXG4gICYuc2xpZGUtb3V0IC5jb250ZW50X2NhZHJlX3JpZ2h0IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbn1cblxuXG5tYXQtb3B0aW9uIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XG4gICAgLyogbWFyZ2luOiAzcHg7ICovXG4gICAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xuICAgIC8qIGhlaWdodDogMHB4OyAqL1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtaW4taGVpZ2h0OiAzMHB4IWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 16157:
/*!****************************************************************************!*\
  !*** ./src/app/admin-page/produits/produit-form/produit-form.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProduitFormComponent: () => (/* binding */ ProduitFormComponent)
/* harmony export */ });
/* harmony import */ var _Users_apple_Desktop_XpertCashFront_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! browser-image-compression */ 92880);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var ngx_barcode6__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-barcode6 */ 23701);
/* harmony import */ var _SERVICES_categorie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SERVICES/categorie.service */ 49293);
/* harmony import */ var _SERVICES_unite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SERVICES/unite.service */ 9599);
/* harmony import */ var _SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SERVICES/produit.service */ 66375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _SERVICES_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SERVICES/users.service */ 88026);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 35255);


















const _c0 = ["autoUnite"];
const _c1 = ["autoCategory"];
const _c2 = () => ({
  standalone: true
});
const _c3 = a0 => ({
  "error": a0
});
function ProduitFormComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 65)(1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Connexion en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function ProduitFormComponent_div_19_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 77)(1, "label")(2, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ProduitFormComponent_div_19_div_11_Template_input_ngModelChange_2_listener($event) {
      const boutique_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](boutique_r5.selected, $event) || (boutique_r5.selected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ProduitFormComponent_div_19_div_11_Template_input_change_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.updateSelectedBoutiques());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const boutique_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", boutique_r5.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", boutique_r5.nomBoutique, " ");
  }
}
function ProduitFormComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 68)(1, "div", 69)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "S\u00E9lectionner des boutiques");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_div_19_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.toggleBoutiqueSelectionPanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 71)(7, "div", 72)(8, "label")(9, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ProduitFormComponent_div_19_Template_input_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.toggleSelectAllBoutiques($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " S\u00E9lectionner toutes les boutiques ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ProduitFormComponent_div_19_div_11_Template, 4, 4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 75)(13, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_div_19_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.confirmBoutiqueSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Confirmer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r2.areAllBoutiquesSelected());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.boutiquesList);
  }
}
function ProduitFormComponent_div_41_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Le nom produit est vide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProduitFormComponent_div_41_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Le nom doit avoir au moins 2 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProduitFormComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProduitFormComponent_div_41_span_1_Template, 2, 0, "span", 80)(2, ProduitFormComponent_div_41_span_2_Template, 2, 0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.f["nom"].errors == null ? null : ctx_r2.f["nom"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.f["nom"].errors == null ? null : ctx_r2.f["nom"].errors["minlength"]);
  }
}
function ProduitFormComponent_mat_option_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 81)(1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", option_r6.nom, " ");
  }
}
function ProduitFormComponent_i_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_i_57_Template_i_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r2.toggleUniteDropdown();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProduitFormComponent_i_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_i_58_Template_i_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r2.closeUniteDropdown();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProduitFormComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.formattedPrixVente);
  }
}
function ProduitFormComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Ce champ est obligatoire. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProduitFormComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.formattedCoutProduit);
  }
}
function ProduitFormComponent_div_71_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Le co\u00FBt ne peut pas \u00EAtre n\u00E9gatif.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProduitFormComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProduitFormComponent_div_71_span_1_Template, 2, 0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.f["prixAchat"].errors == null ? null : ctx_r2.f["prixAchat"].errors["min"]);
  }
}
function ProduitFormComponent_div_80_div_10_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 92)(1, "div", 93)(2, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProduitFormComponent_div_80_div_10_ng_container_1_div_1_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const boutique_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.quantitesMap[boutique_r11.id] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 93)(6, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ProduitFormComponent_div_80_div_10_ng_container_1_div_1_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const boutique_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.seuilsMap[boutique_r11.id], $event) || (ctx_r2.seuilsMap[boutique_r11.id] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Seuil d'alerte");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Date de pr\u00E9emption (Facultatif)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const boutique_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.quantitesMap[boutique_r11.id] || 0)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Quantit\u00E9 en stock pour ", boutique_r11.nomBoutique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("placeholder", "Seuil d'alerte pour ", boutique_r11.nomBoutique, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.seuilsMap[boutique_r11.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c2));
  }
}
function ProduitFormComponent_div_80_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProduitFormComponent_div_80_div_10_ng_container_1_div_1_Template, 13, 9, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const boutique_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", boutique_r11.selected);
  }
}
function ProduitFormComponent_div_80_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProduitFormComponent_div_80_div_10_ng_container_1_Template, 2, 1, "ng-container", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.boutiquesList);
  }
}
function ProduitFormComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Inventaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 87)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Ajouter dans les stocks");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "label", 88)(8, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ProduitFormComponent_div_80_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.isChecked, $event) || (ctx_r2.isChecked = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ProduitFormComponent_div_80_Template_input_change_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onToggleChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ProduitFormComponent_div_80_div_10_Template, 2, 1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isChecked);
  }
}
function ProduitFormComponent_button_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_button_88_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.clearImage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProduitFormComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessage, " ");
  }
}
function ProduitFormComponent_div_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 102)(1, "div", 103)(2, "div", 104)(3, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_div_105_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c3, ctx_r2.popupData.type === "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r2.popupData.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.popupData.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.popupData.message);
  }
}
function ProduitFormComponent_div_106_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Ce champ est obligatoire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ProduitFormComponent_div_106_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Email invalide.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ProduitFormComponent_div_106_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "small", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Ce champ est obligatoire.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ProduitFormComponent_div_106_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r2.apiMessageType === "success" ? "assets/img/succcccc.png" : "assets/img/error.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.messageAPI);
  }
}
function ProduitFormComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 108)(1, "div", 109)(2, "div", 110)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Ajouter une boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_div_106_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closePopupBoutique());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 111)(8, "div", 112)(9, "div", 113)(10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Nom boutque");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ProduitFormComponent_div_106_div_14_Template, 3, 0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ProduitFormComponent_div_106_div_19_Template, 3, 0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 113)(21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ProduitFormComponent_div_106_div_25_Template, 3, 0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Adresse boutique");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, ProduitFormComponent_div_106_div_30_Template, 4, 2, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 120)(32, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_div_106_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closePopupBoutique());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_div_106_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onSubmitBoutique());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, " Ajouter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.boutiqueForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r2.boutiqueForm.get("nomBoutique")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r2.boutiqueForm.get("nomBoutique")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r2.boutiqueForm.get("emailBoutique")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r2.boutiqueForm.get("emailBoutique")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r2.boutiqueForm.get("telephoneBoutique")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r2.boutiqueForm.get("telephoneBoutique")) == null ? null : tmp_5_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.messageAPI);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r2.boutiqueForm.valid ? "#0672E4" : "#0671e434")("color", ctx_r2.boutiqueForm.valid ? "#ffffff" : "#00000073")("cursor", ctx_r2.boutiqueForm.valid ? "pointer" : "no-drop");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.boutiqueForm.invalid);
  }
}
function ProduitFormComponent_div_107_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Le nom doit avoir au moins 3 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProduitFormComponent_div_107_div_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Le nom ne doit pas d\u00E9passer 20 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProduitFormComponent_div_107_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProduitFormComponent_div_107_div_13_span_1_Template, 2, 0, "span", 80)(2, ProduitFormComponent_div_107_div_13_span_2_Template, 2, 0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.c["categoryName"].errors == null ? null : ctx_r2.c["categoryName"].errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.c["categoryName"].errors == null ? null : ctx_r2.c["categoryName"].errors["maxlength"]);
  }
}
function ProduitFormComponent_div_107_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessageCategory, " ");
  }
}
function ProduitFormComponent_div_107_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r2.apiMessageType === "success" ? "assets/img/succcccc.png" : "assets/img/error.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.messageAPI);
  }
}
function ProduitFormComponent_div_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 108)(1, "div", 126)(2, "div", 110)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Cr\u00E9er une cat\u00E9gorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_div_107_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closePopupCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 111)(8, "div", 112)(9, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "label", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Nom cat\u00E9gorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ProduitFormComponent_div_107_div_13_Template, 3, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ProduitFormComponent_div_107_div_14_Template, 2, 1, "div", 130)(15, ProduitFormComponent_div_107_div_15_Template, 4, 2, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 120)(17, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_div_107_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closePopupCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_div_107_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.submitFormCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Ajouter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.ajouteCategoryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.c["categoryName"].touched && ctx_r2.c["categoryName"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.errorMessageCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.messageAPI);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r2.ajouteCategoryForm.valid ? "#0672E4" : "#0671e434");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.ajouteCategoryForm.invalid);
  }
}
function ProduitFormComponent_div_108_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Le nom doit avoir au moins 2 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProduitFormComponent_div_108_div_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Le nom ne doit pas d\u00E9passer 20 caract\u00E8res.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProduitFormComponent_div_108_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProduitFormComponent_div_108_div_13_span_1_Template, 2, 0, "span", 80)(2, ProduitFormComponent_div_108_div_13_span_2_Template, 2, 0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.u["unityName"].errors == null ? null : ctx_r2.u["unityName"].errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.u["unityName"].errors == null ? null : ctx_r2.u["unityName"].errors["maxlength"]);
  }
}
function ProduitFormComponent_div_108_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessageUnity, " ");
  }
}
function ProduitFormComponent_div_108_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r2.apiMessageType === "success" ? "assets/img/succcccc.png" : "assets/img/error.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.messageAPI);
  }
}
function ProduitFormComponent_div_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 108)(1, "div", 126)(2, "div", 110)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Cr\u00E9er une unit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_div_108_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closePopupUnit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 111)(8, "div", 112)(9, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "label", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Nom unit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ProduitFormComponent_div_108_div_13_Template, 3, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ProduitFormComponent_div_108_div_14_Template, 2, 1, "div", 130)(15, ProduitFormComponent_div_108_div_15_Template, 4, 2, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 120)(17, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_div_108_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.closePopupUnit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Annuler");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_div_108_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.submitFormUnity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Ajouter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.ajouteUniteForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.u["unityName"].touched && ctx_r2.u["unityName"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.errorMessageUnity);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.messageAPI);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r2.ajouteUniteForm.valid ? "#0672E4" : "#0671e434");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.ajouteUniteForm.invalid);
  }
}
class ProduitFormComponent {
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
    this.produitAjoute = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
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
    this.formSubmitted = false;
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
    this.isSending = false;
    this.showBarcode = false;
    this.showBoutiqueError = false;
    // Variable regroupant toutes les informations du popup
    this.popupData = {
      title: '',
      message: '',
      image: '',
      type: 'success'
    };
    this.isUniteDropdownOpen = false;
    this.isCategoryDropdownOpen = false;
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
  setupFormSubscriptions() {
    const token = this.usersService.getValidAccessToken(); // ou via un service d'authentification
    if (token) {
      this.categorieService.getCategories().subscribe(categories => {
        console.log('Catégories reçues depuis l\'API :', categories); // Debug ici
        this.options = categories;
        this.filteredOptions = this.myControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(''),
        // map(value => (typeof value === 'string' ? value : value.nom)),
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(value => value ? typeof value === 'string' ? value : value.nom : ''), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(name => name ? this._filter(name) : this.options.slice()));
      }, error => {
        console.error('Erreur lors de la récupération des catégories :', error);
      });
    } else {
      console.error('Aucun token trouvé !');
    }
    // 🟢 Filtrage des unité de mesure (OK)
    if (token) {
      this.uniteMesureService.getUniteMesure().subscribe(uniteMesures => {
        console.log('Unité de mesure reçues depuis l\'API :', uniteMesures); // Debug ici
        this.optionsUnite = uniteMesures;
        this.filteredNomUnite = this.uniteControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(''),
        // map(value => (typeof value === 'string' ? value : value.nom)),
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(value => value ? typeof value === 'string' ? value : value.nom : ''), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(name => name ? this._filterUnite(name) : this.optionsUnite.slice()));
      }, error => {
        console.error('Erreur lors de la récupération des catégories :', error);
      });
    } else {
      console.error('Aucun token trouvé !');
    }
  }
  loadInitialData() {
    this.ajouteProduitForm = this.fb.group({
      nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2)]],
      prixVente: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      prixAchat: [''],
      quantite: ['0'],
      seuilAlert: ['0'],
      description: [''],
      codeBare: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(13)]],
      categorieId: [''],
      uniteId: [''],
      datePreemption: [''],
      typeProduit: ['PHYSIQUE', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
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
    document.addEventListener('click', event => {
      const target = event.target;
      // Fermer le dropdown catégorie
      if (!target.closest('.champ_input_cate') && this.isCategoryDropdownOpen) {
        this.closeCategoryDropdown();
      }
      // Fermer le dropdown unité
      if (!target.closest('.champ_input_uni') && this.isUniteDropdownOpen) {
        this.closeUniteDropdown();
      }
    });
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
        if (response && response.id) {
          // Réinitialiser le formulaire
          this.ajouteCategoryForm.get('categoryName').setValue('');
          this.closePopupCategory();
          // Créer le nouvel objet catégorie
          const newCategory = {
            id: response.id,
            nom: categoryData.nom
          };
          // Ajouter à la liste des options
          this.options.push(newCategory);
          this.showCategoryCreation = false;
          // 1. Mettre à jour l'input d'autocomplete
          this.myControl.setValue(newCategory);
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
      if (_this2.ajouteProduitForm.value.prixAchat === '') {
        _this2.ajouteProduitForm.patchValue({
          prixAchat: null
        });
      }
      if (_this2.ajouteProduitForm.invalid) {
        _this2.errorMessage = "Veuillez vérifier les informations saisies.";
        return;
      }
      _this2.isSending = true;
      const produit = _this2.ajouteProduitForm.value;
      const tokenStored = localStorage.getItem('accessToken');
      if (!tokenStored) {
        _this2.showPopupMessage({
          title: 'Erreur',
          message: 'Aucun token trouvé !',
          image: 'assets/img/error.png',
          type: 'error'
        });
        _this2.isSending = false;
        return;
      }
      const addToStock = _this2.isChecked;
      const datePreemption = _this2.ajouteProduitForm.get('datePreemption')?.value;
      try {
        let finalImage;
        if (_this2.imageFile && _this2.imageFile.name !== 'default.svg') {
          const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1000,
            useWebWorker: true
          };
          const compressedFile = yield (0,browser_image_compression__WEBPACK_IMPORTED_MODULE_1__["default"])(_this2.imageFile, options);
          if (compressedFile.type !== 'image/png' && compressedFile.type !== 'image/jpeg') {
            _this2.errorMessage = 'Le fichier compressé n\'est pas un format valide (PNG ou JPEG).';
            _this2.isSending = false;
            return;
          }
          const extension = compressedFile.type === 'image/png' ? '.png' : '.jpeg';
          finalImage = new File([compressedFile], _this2.imageFile.name.replace(/\..+$/, extension), {
            type: compressedFile.type,
            lastModified: Date.now()
          });
        } else {
          const productName = produit.nom.trim()[0];
          finalImage = _this2.dataURLtoFile(_this2.generateImageFromLetter(productName), 'default.svg');
        }
        if (_this2.boutiqueIdSelected.length === 0) {
          _this2.errorMessage = "Veuillez sélectionner au moins une boutique.";
          _this2.isSending = false;
          return;
        }
        const quantitesSelected = _this2.boutiqueIdSelected.map(id => Number(_this2.quantitesMap[id]) || 0);
        const seuilsSelected = _this2.boutiqueIdSelected.map(id => Number(_this2.seuilsMap[id]) || 0);
        _this2.produitService.ajouterProduit(_this2.boutiqueIdSelected, quantitesSelected, seuilsSelected, produit, finalImage, addToStock, datePreemption).subscribe({
          next: produits => {
            const newProduit = produits[0];
            if (newProduit) {
              const updatedProduit = {
                id: newProduit.id,
                nom: produit.nom,
                description: produit.description || '',
                // Valeur par défaut si undefined
                prixVente: produit.prixVente,
                prixAchat: produit.prixAchat,
                datePreemption: produit.datePreemption,
                categorieId: produit.categorieId,
                uniteId: produit.uniteId,
                typeProduit: produit.typeProduit,
                codeBare: produit.codeBare || '',
                // Valeur par défaut si undefined
                codeGenerique: newProduit.codeGenerique || '',
                // Valeur par défaut si undefined
                quantite: quantitesSelected[0] || 0,
                // Valeur par défaut si undefined
                seuilAlert: seuilsSelected[0] || 0,
                // Valeur par défaut si undefined
                photo: newProduit.photo || '',
                // Valeur par défaut si undefined
                enStock: addToStock,
                boutiqueId: _this2.boutiqueIdSelected?.length > 0 ? _this2.boutiqueIdSelected[0] : null // Ajout de boutiqueId
              };
              _this2.resetForm();
              _this2.ajouteProduitForm.reset();
              _this2.myControl.reset();
              _this2.uniteControl.reset();
              _this2.imageFile = null;
              _this2.selectedFile = null;
              _this2.newPhotoUrl = null;
              _this2.isSending = false;
              _this2.produitAjoute.emit(updatedProduit);
              _this2.close.emit();
            } else {
              console.error('Aucun produit retourné par l\'API');
              _this2.isSending = false;
            }
          },
          error: error => {
            let message;
            if (error.status === 409) {
              // Si le back-end renvoie un 409, c'est un doublon
              message = 'Un produit portant ce nom existe déjà.';
            } else if (error.error && typeof error.error === 'string') {
              // Si le back-end renvoie un message d’erreur au format texte
              message = error.error;
            } else if (error.error && error.error.message) {
              // Si le back-end renvoie un objet { message: string }
              message = error.error.message;
            } else {
              // Cas général
              message = 'Une erreur est survenue lors de la création du produit.';
            }
            // Affichage du popup d’erreur
            _this2.errorMessage = "Un produit portant ce nom existe déjà.";
            _this2.isSending = false;
          }
        });
      } catch (error) {
        console.error('Erreur lors de la compression:', error);
        _this2.errorMessage = 'Erreur lors de la compression de l\'image';
        _this2.isSending = false;
      }
    })();
  }
  // async onSubmit() {
  //     this.formSubmitted = true; // Active le mode "soumis"
  //     this.showBoutiqueError = false; 
  //     // Vérifiez d'abord les boutiques avant le formulaire
  //     if (this.boutiqueIdSelected.length === 0) {
  //       this.showBoutiqueError = true;
  //       this.errorMessage = "Veuillez sélectionner au moins une boutique.";
  //       return;
  //     }
  //     if (this.ajouteProduitForm.invalid) {
  //       this.errorMessage = "Veuillez vérifier les informations saisies.";
  //       return;
  //     }
  //     this.isLoading = true;
  //     const produit = this.ajouteProduitForm.value;
  //     // Si le prix d'achat n'est pas fourni, mettez-le à null ou 0
  //     if (produit.prixAchat === '' || produit.prixAchat === null) {
  //       produit.prixAchat = null; // ou 0 selon vos besoins
  //     }
  //     console.log('Produit soumis:', produit);
  //     const tokenStored = localStorage.getItem('accessToken');
  //     if (!tokenStored) {
  //       this.showPopupMessage({
  //         title: 'Erreur',
  //         message: 'Aucun token trouvé !',
  //         image: 'assets/img/error.png',
  //         type: 'error'
  //       });
  //       this.isLoading = false;
  //       return;
  //     }
  //     // const token = `Bearer ${tokenStored}`;
  //     const addToStock = this.isChecked;
  //     try {
  //       let finalImage: File;
  //       // Si une image a été sélectionnée
  //       if (this.imageFile && this.imageFile.name !== 'default.svg') {
  //         console.log('Compression de l\'image en cours...');
  //         // Options de compression
  //         const options = {
  //           maxSizeMB: 1,
  //           maxWidthOrHeight: 1000,
  //           useWebWorker: true,
  //         };
  //         const compressedFile = await imageCompression(this.imageFile, options);
  //         console.log('Taille après compression:', compressedFile.size / 1024, 'Ko');
  //         // Vérification du type MIME du fichier compressé
  //         if (compressedFile.type !== 'image/png' && compressedFile.type !== 'image/jpeg') {
  //           this.errorMessage = 'Le fichier compressé n\'est pas un format valide (PNG ou JPEG).';
  //           this.isLoading = false;
  //           return;
  //         }
  //         // Changer le nom du fichier en fonction du type MIME
  //         const extension = compressedFile.type === 'image/png' ? '.png' : '.jpeg';
  //         finalImage = new File([compressedFile], this.imageFile.name.replace(/\..+$/, extension), {
  //           type: compressedFile.type, // Forcer le type MIME à PNG ou JPEG
  //           lastModified: Date.now()
  //         });
  //         console.log('Final Image:', finalImage);
  //       } else {
  //         // Si aucune image n'a été sélectionnée, utiliser l'image SVG générée
  //         const productName = produit.nom.trim()[0]; // Récupérer la première lettre du nom du produit
  //         finalImage = this.dataURLtoFile(this.generateImageFromLetter(productName), 'default.svg');
  //         console.log('Image par défaut utilisée:', finalImage);
  //       }
  //       const quantitesSelected = this.boutiqueIdSelected.map(id => Number(this.quantitesMap[id]) || 0);
  //       const seuilsSelected = this.boutiqueIdSelected.map(id => Number(this.seuilsMap[id]) || 0);
  //       this.produitService
  //         .ajouterProduit(
  //             this.boutiqueIdSelected, 
  //             quantitesSelected, 
  //             seuilsSelected,
  //             produit, 
  //             finalImage, 
  //             addToStock
  //         ).subscribe({
  //           next: data => {
  //             this.showPopupMessage({
  //               title: 'Succès',
  //               message: 'Produit créé avec succès',
  //               image: 'assets/img/succcccc.png',
  //               type: 'success',
  //             });
  //             this.ajouteProduitForm.reset();
  //             this.myControl.reset();
  //             this.uniteControl.reset();
  //             this.imageFile = null;
  //             this.selectedFile = null;
  //             this.newPhotoUrl = null;
  //             this.isLoading = false;
  //             this.router.navigate(['/produit']);
  //           },
  //           error: error => {
  //             let errorMessage = 'Erreur lors de la création du produit';
  //             if (error.error) {
  //               if (typeof error.error === 'object' && error.error.error) {
  //                 errorMessage = error.error.error;
  //               } else if (typeof error.error === 'string') {
  //                 errorMessage = error.error;
  //               }
  //             }
  //             errorMessage = errorMessage.replace('Une erreur est survenue : ', '');
  //             this.showPopupMessage({
  //               title: 'Erreur',
  //               message: errorMessage,
  //               image: 'assets/img/error.png',
  //               type: 'error'
  //             });
  //             this.isLoading = false;
  //           }
  //         });
  //     } catch (error) {
  //       console.error('Erreur lors de la compression:', error);
  //       this.errorMessage = 'Erreur lors de la compression de l\'image';
  //       this.isLoading = false;
  //     }
  //   }
  // Options de configuration pour le code barre
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
    this.filteredStreetsBoutique = this.controlBoutique.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(value => this._filterBoutique(value || '')));
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
      emailBoutique: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      adresseBoutique: [''],
      telephoneBoutique: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(/^\d{8,15}$/)]
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
  // private resetForm() {
  //   this.boutiqueForm.patchValue({
  //     nomBoutique: '',
  //     emailBoutique: '',
  //     adresseBoutique: '',
  //     telephoneBoutique: ''
  //   });
  //   this.boutiqueForm.markAsPristine();
  //   this.boutiqueForm.markAsUntouched();
  //   this.boutiqueForm.updateValueAndValidity();
  // }
  // Ajoutez cette méthode
  resetForm() {
    this.ajouteProduitForm.reset({
      typeProduit: 'PHYSIQUE' // Réinitialisez à la valeur par défaut
    });
    this.myControl.reset();
    this.uniteControl.reset();
    this.imageFile = null;
    this.selectedFile = null;
    this.newPhotoUrl = this.urllink; // Réinitialise à l'image par défaut
    this.isChecked = false;
    this.boutiqueIdSelected = [];
    this.quantitesMap = {};
    this.seuilsMap = {};
    this.controlBoutique.reset();
    this.showBoutiqueSelectionPanel = false;
    this.selectedBoutiques = [];
    this.errorMessage = '';
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
        this.showPopupMessage({
          title: 'Succès',
          message: 'Boutique créée avec succès',
          image: 'assets/img/succcccc.png',
          type: 'success'
        });
        this.closePopupBoutique();
        this.getBoutiqueName(); // Rafraîchir la liste
        this.boutiqueForm.reset();
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
  // Sélectionne ou désélectionne toutes les boutiques
  toggleSelectAllBoutiques(event) {
    const isChecked = event.target.checked;
    this.boutiquesList.forEach(b => b.selected = isChecked);
    this.updateSelectedBoutiques();
  }
  updateSelectedBoutiques() {
    this.selectedBoutiques = this.boutiquesList.filter(b => b.selected);
  }
  // confirmBoutiqueSelection(): void {
  //   this.selectedBoutiques = this.boutiquesList.filter(b => b.selected);
  //   this.boutiqueIdSelected = this.selectedBoutiques.map(b => b.id);
  //   const selectedNames = this.selectedBoutiques.map(b => b.nomBoutique);
  //   this.controlBoutique.setValue(selectedNames.join(', '));
  //   this.toggleBoutiqueSelectionPanel();
  // }
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
  closeForm() {
    this.close.emit();
  }
  // Méthode utilitaire pour marquer tous les champs comme touchés
  markFormGroupTouched(formGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  gotToReturn() {
    this.router.navigate(['/addfacture-proforma']);
  }
  toggleUniteDropdown(event) {
    if (event) event.stopPropagation();
    if (this.uniteAutocompleteTrigger) {
      this.uniteAutocompleteTrigger.openPanel();
    }
  }
  closeUniteDropdown() {
    if (this.uniteAutocompleteTrigger) {
      this.uniteAutocompleteTrigger.closePanel();
      this.isUniteDropdownOpen = false;
    }
  }
  toggleCategoryDropdown(event) {
    if (event) event.stopPropagation();
    if (this.categoryAutocompleteTrigger) {
      this.categoryAutocompleteTrigger.openPanel();
    }
  }
  closeCategoryDropdown() {
    if (this.categoryAutocompleteTrigger) {
      this.categoryAutocompleteTrigger.closePanel();
      this.isCategoryDropdownOpen = false;
    }
  }
  static {
    this.ɵfac = function ProduitFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProduitFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_categorie_service__WEBPACK_IMPORTED_MODULE_2__.CategorieService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_unite_service__WEBPACK_IMPORTED_MODULE_3__.UniteMesureService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_produit_service__WEBPACK_IMPORTED_MODULE_4__.ProduitService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_SERVICES_users_service__WEBPACK_IMPORTED_MODULE_5__.UsersService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ProduitFormComponent,
      selectors: [["app-produit-form"]],
      viewQuery: function ProduitFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.autoUnite = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.uniteAutocompleteTrigger = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.autoCategory = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.categoryAutocompleteTrigger = _t.first);
        }
      },
      outputs: {
        produitAjoute: "produitAjoute",
        close: "close"
      },
      decls: 109,
      vars: 31,
      consts: [["autoUnite", "matAutocomplete"], [1, "container_global"], ["class", "loading-overlay", 4, "ngIf"], [1, "content_formulaire"], [1, "modal-body"], [1, "container_formulaire", 3, "formGroup"], [1, "Title"], [1, "form_left_right"], [1, "formulaire"], [1, "information_cadre"], [1, "info_titre_input"], [1, "double_input2"], [1, "champ_input"], ["autocomplete", "off", "type", "text", "placeholder", "S\u00E9lectionner vos boutiques", "matInput", "", 1, "input_focus", 2, "cursor", "pointer", 3, "click", "formControl"], ["for", "boutiqueId", 1, "label"], ["class", "boutique-selection-panel", 4, "ngIf"], [1, "triple"], [1, "radio-group"], [1, "radio-option"], ["type", "radio", "id", "typePhysique", "formControlName", "typeProduit", "value", "PHYSIQUE", 1, "radio-input"], ["for", "typePhysique", 1, "radio-label"], [1, "radio-custom"], ["type", "radio", "id", "typeService", "formControlName", "typeProduit", "value", "SERVICE", 1, "radio-input"], ["for", "typeService", 1, "radio-label"], [1, "double_input_grid"], ["autocomplete", "off", "formControlName", "nom", "type", "text", "required", "", "id", "nom", "name", "nom", "placeholder", "Saisis le nom de produit", 1, "input_focus"], ["for", "nom", 1, "label"], ["class", "error-message", 4, "ngIf"], [1, "champ_input_uni", "champ_input", "champ_input2"], ["autocomplete", "off", "type", "text", "placeholder", "Saisis l'unit\u00E9 de mesure", "matInput", "", 1, "input_focus", 2, "cursor", "pointer", 3, "click", "formControl", "matAutocomplete"], ["for", "uniteId", 1, "label"], [3, "optionSelected", "opened", "closed", "displayWith"], [1, "select-option", 3, "click"], [2, "display", "flex", "align-items", "center", "color", "#0672E4"], [1, "ri-add-circle-fill", 2, "font-size", "20px"], [2, "margin-left", "8px"], [3, "value", 4, "ngFor", "ngForOf"], [1, "arrow_bas", 2, "position", "absolute", "right", "5px", "top", "20px", "cursor", "pointer"], ["class", "ri-arrow-down-s-line", "style", "font-size: 20px; z-index: 999;", 3, "click", 4, "ngIf"], ["class", "ri-close-line", "style", "font-size: 20px; z-index: 999;", 3, "click", 4, "ngIf"], ["autocomplete", "off", "formControlName", "prixVente", "type", "number", "required", "", "id", "prixVente", "name", "prixVente", "placeholder", "Saisis le nom de magasin", 1, "input_focus", 3, "input"], ["for", "prixVente", 1, "label"], ["class", "nombreDevise", 4, "ngIf"], ["autocomplete", "off", "formControlName", "prixAchat", "type", "number", "id", "prixAchat", "name", "prixAchat", "placeholder", "Saisis le prix d'achat", 1, "input_focus", 3, "input"], ["for", "prixAchat", 1, "label"], ["class", "error-message divError", 4, "ngIf"], ["formControlName", "description", "id", "description", "name", "description", "maxlength", "150", "placeholder", "Saisis Une description pour ce produit", 1, "input_focus2"], ["for", "description", 1, "label", "labelColor"], ["class", "information_cadre", 4, "ngIf"], [1, "container_file"], [1, "header_file"], ["alt", "Aper\u00E7u de l'image", 1, "roudel", 2, "max-width", "200px", 3, "src"], ["class", "clear-image-btn", 3, "click", 4, "ngIf"], ["for", "file", 1, "footer_file"], [1, "ri-file-3-fill"], ["type", "file", "accept", "image/*", "id", "file", "hidden", "", 3, "change"], [1, "information_cadre", "information_cadre_save"], [1, "container_error_message"], [1, "info_titre_input", "info_titre_input_btn"], [1, "btn_annuler"], [1, "btn_cancel", 3, "click"], [1, "btn_ajouter"], [1, "btn_save", 3, "click"], ["class", "modal-overlay", 4, "ngIf"], ["class", "popup-overlay", 4, "ngIf"], [1, "loading-overlay"], [1, "loading-content"], [1, "spinner"], [1, "boutique-selection-panel"], [1, "panel-header"], [1, "close-btn", 3, "click"], [1, "panel-body"], [1, "boutique-item", "select-all"], ["type", "checkbox", 3, "change", "checked"], ["class", "boutique-item", 4, "ngFor", "ngForOf"], [1, "panel-footer"], [1, "btn-confirm", 3, "click"], [1, "boutique-item"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel", "ngModelOptions"], [1, "error-message"], [4, "ngIf"], [3, "value"], [1, "option-content"], [1, "ri-arrow-down-s-line", 2, "font-size", "20px", "z-index", "999", 3, "click"], [1, "ri-close-line", 2, "font-size", "20px", "z-index", "999", 3, "click"], [1, "nombreDevise"], [1, "error-message", "divError"], [1, "champ_input_inventaire"], [1, "switch"], [1, "slider", "round"], [4, "ngFor", "ngForOf"], ["class", " double_input_grid_true", 4, "ngIf"], [1, "double_input_grid_true"], [1, "champ_input", "champ_input2"], ["type", "number", "required", "", "placeholder", "Saisis la quantit\u00E9", 1, "input_focus", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "quantite", 1, "label", "labelColor"], ["type", "number", 1, "input_focus", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["for", "seuilAlert", 1, "label", "labelColor"], ["type", "date", "formControlName", "datePreemption", "id", "datePreemption", "name", "datePreemption", 1, "input_focus"], ["for", "datePreemption", 1, "label", "labelColor"], [1, "clear-image-btn", 3, "click"], [1, "ri-delete-bin-5-line"], [1, "modal-overlay"], [1, "modal-content", 3, "ngClass"], [1, "popup-header"], [1, "popup-img"], ["alt", "Icone", 1, "popup-icon2", 3, "src"], [3, "click"], [1, "popup-overlay"], [1, "popup-content"], [1, "popup-headerBoutique"], [3, "formGroup"], [1, "popup-body"], [1, "champ_grid"], ["type", "text", "formControlName", "nomBoutique", "placeholder", "Saisis le nom de boutique", 1, "input_focus", 2, "min-width", "150px"], [1, "label"], ["type", "email", "formControlName", "emailBoutique", "placeholder", "Saisis l'email", 1, "input_focus", 2, "min-width", "150px"], ["type", "number", "formControlName", "telephoneBoutique", "placeholder", "00 00 00 00", 1, "input_focus", 2, "min-width", "150px"], ["type", "text", "formControlName", "adresseBoutique", "placeholder", "Saisis l'adresse", 1, "input_focus", 2, "min-width", "150px"], ["class", "errorAPI", 4, "ngIf"], [1, "popup-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-submit", 3, "click", "disabled"], [1, "error"], [1, "errorAPI"], ["alt", "Message API", 3, "src"], [1, "popup-content", 2, "max-width", "350px"], [1, "champ_input", 2, "margin-top", "15px"], ["autocomplete", "off", "formControlName", "categoryName", "type", "text", "required", "", "id", "categoryName", "name", "categoryName", "placeholder", "Saisis le nom de cat\u00E9gorie", 1, "input_focus", "input_focus_cree_cate"], ["for", "categoryName", 1, "label", "labelColor"], ["class", "error-message-category", 4, "ngIf"], [1, "error-message-category"], ["autocomplete", "off", "formControlName", "unityName", "type", "text", "required", "", "id", "unityName", "name", "unityName", "placeholder", "Saisis le nom de unit\u00E9", 1, "input_focus", "input_focus_cree_cate"], ["for", "unityName", 1, "label", "labelColor"]],
      template: function ProduitFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProduitFormComponent_div_1_Template, 5, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 3)(3, "div", 4)(4, "form", 5)(5, "div", 6)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Ajouter des produits");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Boutique");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_Template_input_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.toggleBoutiqueSelectionPanel());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "S\u00E9lectionner vos boutiques");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ProduitFormComponent_div_19_Template, 15, 2, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 9)(21, "div", 10)(22, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Information des produits");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 16)(25, "div", 17)(26, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, " Produit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, " Service ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 24)(37, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Nom produit");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, ProduitFormComponent_div_41_Template, 3, 2, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 11)(43, "div", 28)(44, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_Template_input_click_44_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.toggleUniteDropdown($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Unit\u00E9 de mesure");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "mat-autocomplete", 31, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("optionSelected", function ProduitFormComponent_Template_mat_autocomplete_optionSelected_47_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onUniteSelected($event));
          })("opened", function ProduitFormComponent_Template_mat_autocomplete_opened_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.isUniteDropdownOpen = true);
          })("closed", function ProduitFormComponent_Template_mat_autocomplete_closed_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.isUniteDropdownOpen = false);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "mat-option", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_Template_mat_option_click_49_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onCreateUniteClick());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Cr\u00E9er une unit\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, ProduitFormComponent_mat_option_54_Template, 3, 2, "mat-option", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](55, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, ProduitFormComponent_i_57_Template, 1, 0, "i", 38)(58, ProduitFormComponent_i_58_Template, 1, 0, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 24)(60, "div", 12)(61, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function ProduitFormComponent_Template_input_input_61_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.formatPrixVente());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "label", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Prix de vente");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, ProduitFormComponent_div_64_Template, 3, 1, "div", 42)(65, ProduitFormComponent_div_65_Template, 2, 0, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 12)(67, "input", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function ProduitFormComponent_Template_input_input_67_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.formatCoutProduit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "label", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Co\u00FBt du produit (Facultatif)");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, ProduitFormComponent_div_70_Template, 3, 1, "div", 42)(71, ProduitFormComponent_div_71_Template, 2, 1, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 9)(73, "div", 10)(74, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "Identit\u00E9 de produit");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](77, "textarea", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "label", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "Description (Facultatif)");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, ProduitFormComponent_div_80_Template, 11, 4, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 9)(82, "div", 10)(83, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "Ajouter une image");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 49)(86, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](87, "img", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](88, ProduitFormComponent_button_88_Template, 2, 0, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div")(90, "label", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](91, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "Choisir un fichier");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "input", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ProduitFormComponent_Template_input_change_94_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onFileSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 56)(96, "div", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](97, ProduitFormComponent_div_97_Template, 2, 1, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "div", 58)(99, "div", 59)(100, "button", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_Template_button_click_100_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.goToProduit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "div", 61)(103, "button", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProduitFormComponent_Template_button_click_103_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "Sauvegarder");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](105, ProduitFormComponent_div_105_Template, 11, 6, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](106, ProduitFormComponent_div_106_Template, 36, 12, "div", 64)(107, ProduitFormComponent_div_107_Template, 21, 7, "div", 64)(108, ProduitFormComponent_div_108_Template, 21, 7, "div", 64);
        }
        if (rf & 2) {
          let tmp_19_0;
          const autoUnite_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.ajouteProduitForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("invalid-field", ctx.showBoutiqueError);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.controlBoutique);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showBoutiqueSelectionPanel);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("invalid-field", ctx.f["nom"].invalid && (ctx.f["nom"].touched || ctx.formSubmitted));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f["nom"].touched && ctx.f["nom"].invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.uniteControl)("matAutocomplete", autoUnite_r17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayWith", ctx.displayFnUnite);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](55, 29, ctx.filteredNomUnite));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isUniteDropdownOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isUniteDropdownOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("invalid-field", ctx.f["prixVente"].invalid && (ctx.f["prixVente"].touched || ctx.formSubmitted));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formattedPrixVente);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f["prixVente"].touched && ctx.f["prixVente"].invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formattedCoutProduit);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.f["prixAchat"].touched && ctx.f["prixAchat"].invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_19_0 = ctx.ajouteProduitForm.get("typeProduit")) == null ? null : tmp_19_0.value) === "PHYSIQUE");
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
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.M, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger, ngx_barcode6__WEBPACK_IMPORTED_MODULE_15__.NgxBarcode6Module, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule],
      styles: ["@charset \"UTF-8\";\n.content_formulaire[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n\n\n\n.champ_input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.champ_input_Categorie[_ngcontent-%COMP%] {\n  margin-bottom: 15px !important;\n}\n\n.formulaire[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.Title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 72px 20px 15px 20px;\n}\n\n.input_focus[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 49px;\n  outline: none;\n  border-bottom: 1px solid rgb(53, 50, 50);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 12px;\n  background: none;\n  color: #695c5c;\n}\n\n.double_input_grid_true[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.champ_input[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 4px;\n  pointer-events: none;\n  color: #000;\n}\n\n.input_focus[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.input_focus[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 12px;\n  transition: all 0.2s ease-in-out;\n}\n\n.input_focus2[_ngcontent-%COMP%] {\n  width: 100%;\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin: 10px 0 0;\n  transition: all 0.3s;\n  font-size: 12px;\n  padding-left: 10px;\n  background: none;\n  color: #777474;\n  border-radius: 5px;\n  padding-top: 10px;\n  border-bottom: 1px solid rgb(53, 50, 50);\n}\n\n.input_focus2[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #0672E4;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\n.champ_input2[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22px;\n  left: 0px;\n  pointer-events: none;\n  color: rgb(66, 56, 56);\n}\n\n.champ_input[_ngcontent-%COMP%]   .labelCategory[_ngcontent-%COMP%] {\n  color: rgb(66, 56, 56);\n  left: 0;\n  font-size: 14px;\n}\n\n.input_focus2[_ngcontent-%COMP%]:not(:placeholder-shown)    + .label[_ngcontent-%COMP%], \n.input_focus2[_ngcontent-%COMP%]:focus    + .label[_ngcontent-%COMP%] {\n  color: #0672E4;\n  top: 0;\n  left: 0;\n  transition: all 0.3s ease-in-out;\n  background: none;\n  font-size: 11px;\n  padding: 0;\n}\n\n.input_focus2[_ngcontent-%COMP%]::placeholder {\n  opacity: 0;\n}\n\n.input_focus2[_ngcontent-%COMP%]:focus::placeholder {\n  opacity: 1;\n  animation-delay: 1s;\n  font-size: 15px;\n  transition: all 0.2s ease-in-out;\n}\n\n.info_titre_input[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n\n.info_titre_input[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-bottom: 10px;\n  letter-spacing: 0.6px;\n}\n\n.information_cadre[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background-color: #fff;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n  border-radius: 5px;\n  margin-bottom: 10px;\n  margin-left: 10px;\n}\n\n.information_cadre_save[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.input_focus_magasin[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.input_focus_petit[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.double_input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.double_input_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\n.double_inputh[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  position: relative;\n  top: 10px;\n}\n\n.champ_input2[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  box-sizing: border-box;\n  vertical-align: top;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.champ_input_inventaire[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\n\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #0672E4; \n\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n\n\n.container_file[_ngcontent-%COMP%] {\n  width: 150px;\n  border-radius: 10px;\n  box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  gap: 5px;\n  background-color: rgba(0, 110, 255, 0.041);\n  margin-bottom: 10px;\n  margin-top: 20px;\n}\n\n.header_file[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 140px;\n  border: 1px dashed rgba(6, 113, 228, 0.6156862745);\n  border-radius: 10px;\n  flex-direction: column;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n\n.header_file[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.header_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n}\n\n.footer_file[_ngcontent-%COMP%] {\n  background-color: rgba(0, 110, 255, 0.075);\n  width: 140px;\n  height: 35px;\n  padding: 5px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: black;\n  border: none;\n  margin-top: 3px;\n}\n\n.footer_file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  font-size: 10px;\n}\n\n.footer_file[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 7px;\n}\n\n#file[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header_file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.info_titre_input_btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 20px;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #ff0000;\n  color: #fff;\n}\n\n.btn_annuler[_ngcontent-%COMP%]   .btn_cancel[_ngcontent-%COMP%]:hover {\n  background-color: #d80101;\n  transition: all ease-in 0.5s;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%] {\n  padding: 8px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: #0672E4;\n  color: #fff;\n}\n\n.btn_ajouter[_ngcontent-%COMP%]   .btn_save[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all 0.5s;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.btn_add_category2[_ngcontent-%COMP%] {\n  border: none;\n  padding: 2px 10px;\n  border-radius: 4px;\n  background-color: #0672E4;\n  color: #fff;\n  cursor: pointer;\n}\n\n.btn_add_category2[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n  transition: all ease 0.5s;\n}\n\n.btn_add_categoryDiv2[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  justify-content: center;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.double_input2[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.ajouter_cadre_cree_c_u[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 230px;\n  background-color: #fff;\n  margin-top: 40px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.108);\n}\n\n.container_error_message[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: red;\n  font-weight: bold;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.input_focus_cree_cate[_ngcontent-%COMP%] {\n  min-width: auto;\n}\n\n.btn-c-s[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.btn_s_category[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 35px;\n  background-color: rgba(6, 113, 228, 0.7843137255);\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  letter-spacing: 0.6px;\n  padding: 0 25px;\n}\n\n.btn_c_category[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 35px;\n  background-color: rgba(255, 0, 0, 0.8078431373);\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  letter-spacing: 0.6px;\n  padding: 0 25px;\n}\n\n.btn_s_category[_ngcontent-%COMP%]:hover {\n  background-color: #0672E4;\n  transition: all ease 0.5s;\n}\n\n.btn_c_category[_ngcontent-%COMP%]:hover {\n  background-color: #ff0000;\n  transition: all ease 0.5s;\n}\n\n.error-message-category[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: red;\n  font-weight: bold;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.error-message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.errorAPI[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  margin-top: -9px;\n}\n\n.errorAPI[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n}\n\n.errorAPI[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding-left: 5px;\n}\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n\n\n.modal-content[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 30px;\n  border-radius: 10px;\n  text-align: center;\n  width: 90%;\n  max-width: 400px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  animation: fadeInDown 0.3s ease;\n  position: relative;\n}\n\n\n\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.popup-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin-bottom: 10px;\n}\n\n.popup-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px;\n}\n\n.modal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5em;\n  color: #333;\n}\n\n.modal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: #555;\n  margin: 20px 0;\n}\n\n\n\n.modal-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  font-size: 1em;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n\n\n\n.modal-content.error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #e53935;\n}\n\n.modal-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0863c5;\n}\n\n.modal-content.error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #d32f2f;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 18px;\n  z-index: 1000;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-top: 4px solid white;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.champs_code_bare_double[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 150px;\n}\n\n.clear-image-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: red;\n  font-size: 18px;\n  cursor: pointer;\n  position: relative;\n  left: 19%;\n  margin-left: 10px;\n  transform: translate(60px, -139px);\n  margin: -18px;\n}\n\n\n\n.popup-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.popup-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n}\n\n.popup-headerBoutique[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.popup-headerBoutique[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n.popup-footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: right;\n}\n\n.btn-cancel[_ngcontent-%COMP%], .btn-submit[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  margin-left: 10px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer !important;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: rgba(255, 0, 0, 0.8078431373);\n  padding: 6px 25px;\n  color: #ffffff;\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: #ff0000;\n  transition: all 0.5s;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  background-color: rgba(6, 113, 228, 0.7843137255);\n  padding: 6px 25px;\n  color: #ffffff;\n  cursor: pointer;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: #0672E4;\n  transition: all 0.5s;\n}\n\n.champ_grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  gap: 20px;\n}\n\n.boutique-selection-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 400px;\n  margin-top: 8px;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  cursor: pointer;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n  padding: 12px;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .boutique-item[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-bottom: 1px solid #eee;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .boutique-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  width: 100%;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .boutique-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: right;\n  border-top: 1px solid #eee;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.boutique-selection-panel[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%]:hover {\n  background-color: #055cb3;\n}\n\n.two_input[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.nombreDevise[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -20px;\n  right: 10px;\n  transition: opacity 0.3s ease;\n}\n\n.nombreDevise[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin: 0;\n  font-family: monospace;\n}\n\n.option-with-icon[_ngcontent-%COMP%]   .option-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.option-with-icon[_ngcontent-%COMP%]   .option-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n\n.container_name_icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.option_icon_div[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 16px;\n}\n\n.container_name_icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.option_icon_div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n}\n\n.option-icon[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 18px;\n}\n\n.mini-spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 3px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 3px solid #3498db;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-top: 10px;\n}\n\n.radio-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.radio-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.radio-input[_ngcontent-%COMP%]:checked    + .radio-label[_ngcontent-%COMP%]   .radio-custom[_ngcontent-%COMP%] {\n  background-color: #0672E4;\n  border-color: #0672E4;\n}\n.radio-input[_ngcontent-%COMP%]:checked    + .radio-label[_ngcontent-%COMP%]   .radio-custom[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 6px;\n  height: 6px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.radio-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  font-size: 14px;\n  color: #333;\n  position: relative;\n  padding-left: 28px;\n}\n\n.radio-custom[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 18px;\n  height: 18px;\n  border: 2px solid #ccc;\n  border-radius: 50%;\n  transition: all 0.3s;\n}\n\n.triple[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.ferme_mat_option[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n\n\n\n.mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  padding: 0 !important;\n}\n\n\n\n.champ_input_categorie[_ngcontent-%COMP%], \n.champ_input_unite[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.champ_input_categorie[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.champ_input_unite[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n\n\n.mat-autocomplete-panel[_ngcontent-%COMP%] {\n  pointer-events: auto !important;\n}\n\n\n\n.arrow_bas[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  z-index: 1000;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1aXQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxhQUFBO0FBRUY7O0FBT0E7RUFFRSxrQkFBQTtBQUxGOztBQVFBLGVBQUE7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFORjs7QUFTQTtFQUNFLDhCQUFBO0FBTkY7O0FBU0E7RUFDRSxrQkFBQTtBQU5GOztBQVNBO0VBQ0UsZUFBQTtFQUVBLDJCQUFBO0FBUEY7O0FBVUE7RUFDRSxXQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBVEY7O0FBWUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBVEY7O0FBWUE7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVRGOztBQWFBOztFQUVFLGNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQVZGOztBQWFBO0VBQ0UsVUFBQTtBQVZGOztBQWFBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBVkY7O0FBYUE7RUFDRSxXQUFBO0VBR0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7QUFa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QUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQTFGTjs7QUErRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBNUZGOztBQStGQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBNUZGOztBQStGQTtFQUNFLGdCQUFBO0FBNUZGOztBQStGQTtFQUNFLGVBQUE7QUE1RkY7O0FBK0ZBLGdEQUFBO0FBQ0E7RUFDRSx3QkFBQTtBQTVGRjs7QUErRkE7RUFDRSx3Q0FBQTtFQUNBLHFCQUFBO0FBNUZGOztBQStGQSwrQ0FBQTtBQUNBOztFQUVFLG9CQUFBO0FBNUZGOztBQStGQTs7RUFFRSxvQkFBQTtBQTVGRjs7QUErRkEsaURBQUE7QUFDQTtFQUNFLCtCQUFBO0FBNUZGOztBQStGQSx1Q0FBQTtBQUNBO0VBQ0Usb0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUE1RkYiLCJmaWxlIjoicHJvZHVpdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnRfZm9ybXVsYWlyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi8vIC5mb3JtdWxhaXJlIHtcbi8vICAgd2lkdGg6IDEwMHB4O1xuLy8gICBoZWlnaHQ6IDIwMHB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbi8vIH1cblxuLm1vZGFsLWJvZHkge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuLyogZm9ybXVsYWlyZSAqL1xuXG4uY2hhbXBfaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jaGFtcF9pbnB1dF9DYXRlZ29yaWUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4IWltcG9ydGFudDtcbn1cblxuLmZvcm11bGFpcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5UaXRsZSBoMyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgLy8gbWFyZ2luOiAyMHB4O1xuICBtYXJnaW46IDcycHggMjBweCAxNXB4IDIwcHg7XG59XG5cbi5pbnB1dF9mb2N1cyB7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyBtaW4td2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDQ5cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBmb250LXNpemU6IDEycHg7XG4gIC8vcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzY5NWM1Yztcbn1cblxuLmRvdWJsZV9pbnB1dF9ncmlkX3RydWUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gIGdyaWQtcm93LWdhcDogMHB4O1xuICBnYXA6IDIwcHg7XG59XG5cbi5jaGFtcF9pbnB1dCAubGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjJweDtcbiAgbGVmdDogNHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5pbnB1dF9mb2N1czpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG5cbi5pbnB1dF9mb2N1czpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbi5pbnB1dF9mb2N1czpmb2N1cyArIC5sYWJlbCB7XG4gIGNvbG9yOiAjMDY3MkU0O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pbnB1dF9mb2N1czo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaW5wdXRfZm9jdXM6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmlucHV0X2ZvY3VzMiB7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyBtaW4td2lkdGg6IDI1MHB4O1xuICAvLyBoZWlnaHQ6IDcwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICM3Nzc0NzQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTMsIDUwLCA1MCk7XG59XG5cbi5pbnB1dF9mb2N1czI6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA2NzJFNDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLmNoYW1wX2lucHV0MiAubGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjJweDtcbiAgbGVmdDogMHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY29sb3I6IHJnYig2NiwgNTYsIDU2KTtcbn1cblxuXG4uY2hhbXBfaW5wdXQgLmxhYmVsQ2F0ZWdvcnkge1xuICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbnB1dF9mb2N1czI6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiZWwsXG4uaW5wdXRfZm9jdXMyOmZvY3VzICsgLmxhYmVsIHtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmlucHV0X2ZvY3VzMjo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaW5wdXRfZm9jdXMyOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pbmZvX3RpdHJlX2lucHV0IHtcbiAgcGFkZGluZzogMTBweCAyMHB4OyBcbn1cblxuLmluZm9fdGl0cmVfaW5wdXQgaDQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjYwcHg7XG59XG5cbi8vIDwhLS0gTGVzIGluZm9ybWF0aW9uIGRlcyBtYWdhc2luICAtLT5cbi5pbmZvcm1hdGlvbl9jYWRyZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTA4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmluZm9ybWF0aW9uX2NhZHJlX3NhdmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5pbnB1dF9mb2N1c19tYWdhc2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vbWluLXdpZHRoOiAxMDBweCFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dF9mb2N1c19wZXRpdCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cblxuLy8gLmNoYW1wX2lucHV0X21hcmdpbiB7XG4vLyAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuLy8gfVxuXG4uZG91YmxlX2lucHV0IHtcbiAgZGlzcGxheTogZmxleDsgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cblxuLmRvdWJsZV9pbnB1dF9ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDIwcHg7XG59XG5cbi5kb3VibGVfaW5wdXRoIHtcbiAgZGlzcGxheTogZmxleDsgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG59XG5cblxuLmNoYW1wX2lucHV0MiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cblxuLy8gLmlucHV0X2ZvY3VzX2xhcmdle1xuLy8gICAvL21pbi13aWR0aDogMzgwcHg7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gfVxuXG5cbi5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHtcbiAgZGlzcGxheTogZmxleDsgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxufVxuXG4uY2hhbXBfaW5wdXRfaW52ZW50YWlyZSBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vLyBUb2dnbGUgXG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLyogTWFzcXVlciBsJ2lucHV0IGNoZWNrYm94IG9yaWdpbmFsICovXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogTGUgwqsgc2xpZGVyIMK7ICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgdHJhbnNpdGlvbjogLjRzO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxOHB4OyBcbiAgd2lkdGg6IDE4cHg7XG4gIGxlZnQ6IDNweDsgXG4gIGJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogLjRzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIFF1YW5kIGxlIGNoZWNrYm94IGVzdCBjb2Now6kgKi9cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDsgLyogQ291bGV1ciBhdSBjaG9peCAqL1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG5cbi8qIEZyb20gVWl2ZXJzZS5pbyBieSBZYXlhMTIwODUgKi8gXG4uY29udGFpbmVyX2ZpbGUge1xuICAvLyBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4O1xuICBnYXA6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMTAsIDI1NSwgMC4wNDEpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uaGVhZGVyX2ZpbGUge1xuICAvLyBmbGV4OiAxO1xuICBoZWlnaHQ6IDE0MHB4O1xuICB3aWR0aDogMTQwcHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjMDY3MWU0OWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xufVxuXG4uaGVhZGVyX2ZpbGUgaW1ne1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG5cbi5oZWFkZXJfZmlsZSBzdmcge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uaGVhZGVyX2ZpbGUgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZm9vdGVyX2ZpbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA3NSk7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmZvb3Rlcl9maWxlIHAge1xuICBtYXJnaW46IDAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5mb290ZXJfZmlsZSBpIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cblxuI2ZpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGVhZGVyX2ZpbGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmluZm9fdGl0cmVfaW5wdXRfYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGdhcDogMjBweDtcbn1cblxuLy8gYnV0dG9uIGFubnVsZXJcbi5idG5fYW5udWxlciAuYnRuX2NhbmNlbCB7XG4gIHBhZGRpbmc6IDhweCAzMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8vIGJ1dHRvbiBhbm51bGVyIGhvdmVyXG4uYnRuX2FubnVsZXIgLmJ0bl9jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgwMTAxO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAuNXM7XG59XG5cbi8vIGJ1dHRvbiBham91dGVyIFxuLmJ0bl9ham91dGVyIC5idG5fc2F2ZSB7XG4gIHBhZGRpbmc6IDhweCAzMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8vIGJ1dHRvbiBham91dGVyIGhvdmVyXG4uYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuLy8gQ2F0ZWdvcnkgXG5cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuX2FkZF9jYXRlZ29yeTIge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8vYm94LXNoYWRvdzogMCAycHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDc4KTtcbn1cblxuLmJ0bl9hZGRfY2F0ZWdvcnkyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xufVxuXG5cbi5idG5fYWRkX2NhdGVnb3J5RGl2MiB7XG4gIG1hcmdpbjogMTBweCAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4uZG91YmxlX2lucHV0MiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLyBQQVJUSVIgTEVGVFxuXG5cbi8vIC5ham91dF9ib29sX2Zvcm0ge1xuLy8gICAvL3dpZHRoOiAxMDAlO1xuICBcbi8vIH1cblxuLmFqb3V0ZXJfY2FkcmVfY3JlZV9jX3Uge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMDgpO1xufVxuXG4uY29udGFpbmVyX2Vycm9yX21lc3NhZ2Uge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAvLyBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5pbnB1dF9mb2N1c19jcmVlX2NhdGUge1xuICAvL3dpZHRoOiA1MCU7XG4gIG1pbi13aWR0aDogYXV0bztcbn1cblxuLmJ0bi1jLXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uYnRuX3NfY2F0ZWdvcnkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MWU0Yzg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuXG4uYnRuX2NfY2F0ZWdvcnkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwY2U7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuXG4uYnRuX3NfY2F0ZWdvcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XG59XG5cbi5idG5fY19jYXRlZ29yeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcbn1cblxuLy8gQ2F0ZWdvcnkgXG5cbi5lcnJvci1tZXNzYWdlLWNhdGVnb3J5IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmVycm9yLW1lc3NhZ2Ugc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmVycm9yQVBJIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogLTlweDtcbn1cblxuLmVycm9yQVBJIGltZ3tcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbn1cblxuLmVycm9yQVBJIHNwYW4ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4vLyBQb3AgdXBcblxuLyogT3ZlcmxheSBkZSBsYSBwb3B1cCAqL1xuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuXG4vKiBDb250ZW51IGRlIGxhIHBvcHVwICovXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsMCwwLDAuMyk7XG4gIGFuaW1hdGlvbjogZmFkZUluRG93biAwLjNzIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogSGVhZGVyIGRlIGxhIHBvcHVwIGF2ZWMgbCdpbWFnZSBldCBsZSB0aXRyZSAqL1xuLnBvcHVwLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wb3B1cC1pbWcgaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnBvcHVwLWljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubW9kYWwtY29udGVudCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5tb2RhbC1jb250ZW50IHAge1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICM1NTU7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4vKiBTdHlsZSBkdSBib3V0b24gKi9cbi5tb2RhbC1jb250ZW50IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcbn1cbi8qIFN0eWxlIGR1IGJvdXRvbiAqL1xuLy8gLmJ0bk9LT0sge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuLy8gICBjb2xvcjogI2ZmZjtcbi8vICAgYm9yZGVyOiBub25lO1xuLy8gICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xuLy8gICBib3JkZXItcmFkaXVzOiA1cHg7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG4vLyB9XG5cbi5tb2RhbC1jb250ZW50LmVycm9yIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTM5MzU7XG59XG5cbi5tb2RhbC1jb250ZW50IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODYzYzU7XG59XG5cbi5tb2RhbC1jb250ZW50LmVycm9yIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzJmMmY7XG59XG5cbi5sb2FkaW5nLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cblxuLmxvYWRpbmctY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7IFxufVxuXG4uc3Bpbm5lciB7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLy8gQ29kZSBiYXJlXG4uY2hhbXBzX2NvZGVfYmFyZV9kb3VibGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxNTBweDtcbn1cblxuXG4uY2xlYXItaW1hZ2UtYnRuIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTklO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNjBweCwgLTEzOXB4KTtcbiAgbWFyZ2luOiAtMThweDtcbn1cblxuXG4vKiBTdHlsZXMgcG91ciBsZSBwb3B1cCAqL1xuLnBvcHVwLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLnBvcHVwLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAvLyB3aWR0aDogNDAlO1xufVxuXG4ucG9wdXAtaGVhZGVyQm91dGlxdWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wb3B1cC1oZWFkZXJCb3V0aXF1ZSBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3B1cC1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmJ0bi1jYW5jZWwsIC5idG4tc3VibWl0IHtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyIWltcG9ydGFudDtcbn1cblxuLmJ0bi1jYW5jZWwge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNEOERBO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDBjZTtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI0U3QjFCNjtcbiAgcGFkZGluZzogNnB4IDI1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYnRuLWNhbmNlbDpob3ZlciB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNFN0IxQjY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5idG4tc3VibWl0IHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzA2NzFlNDM0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MWU0Yzg7XG4gIHBhZGRpbmc6IDZweCAyNXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvL2N1cnNvcjogbm8tZHJvcDtcbn1cblxuLmJ0bi1zdWJtaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4uY2hhbXBfZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gIGdhcDogMjBweDtcbn1cblxuXG4uYm91dGlxdWUtc2VsZWN0aW9uLXBhbmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjIpO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuXG4gIC5wYW5lbC1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIGg0IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuY2xvc2UtYnRuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICB9XG5cbiAgLnBhbmVsLWJvZHkge1xuICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgcGFkZGluZzogMTJweDtcblxuICAgICAgLmJvdXRpcXVlLWl0ZW0ge1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcblxuICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICAucGFuZWwtZm9vdGVyIHtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuXG4gICAgICAuYnRuLWNvbmZpcm0ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTVjYjM7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG59XG5cbi8vIC5zZWxlY3Qtb3B0aW9uIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbi8vICAgJjpob3ZlciB7XG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuLy8gICB9XG4vLyB9XG5cbi50d29faW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubm9tYnJlRGV2aXNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0yMHB4O1xuICByaWdodDogMTBweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG59XG5cbi5ub21icmVEZXZpc2UgcCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlOyBcbiAgLy8gbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4ub3B0aW9uLXdpdGgtaWNvbiAub3B0aW9uLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLm9wdGlvbi13aXRoLWljb24gLm9wdGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xufVxuXG4uY29udGFpbmVyX25hbWVfaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vcHRpb25faWNvbl9kaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDE2cHg7XG4gIC8vIGxlZnQ6IDc3MHB4O1xufVxuXG4uY29udGFpbmVyX25hbWVfaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vcHRpb25faWNvbl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMjBweDsgXG59XG5cbi5vcHRpb24taWNvbiB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5taW5pLXNwaW5uZXIge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMzQ5OGRiO1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4ucmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5yYWRpby1vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmFkaW8taW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xuICBcbiAgJjpjaGVja2VkICsgLnJhZGlvLWxhYmVsIC5yYWRpby1jdXN0b20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDY3MkU0O1xuICAgIFxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogNnB4O1xuICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuICB9XG59XG5cbi5yYWRpby1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG59XG5cbi5yYWRpby1jdXN0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi50cmlwbGUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZmVybWVfbWF0X29wdGlvbiBpIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4vKiBEYW5zIHZvdHJlIGZpY2hpZXIgU0NTUyBnbG9iYWwgb3UgY29tcG9zYW50ICovXG4ubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLyogRGFucyB2b3RyZSBmaWNoaWVyIENTUyBnbG9iYWwgb3UgY29tcG9zYW50ICovXG4uY2hhbXBfaW5wdXRfY2F0ZWdvcmllLCBcbi5jaGFtcF9pbnB1dF91bml0ZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY2hhbXBfaW5wdXRfY2F0ZWdvcmllID4gKiwgXG4uY2hhbXBfaW5wdXRfdW5pdGUgPiAqIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi8qIEVtcMOqY2hlciBsZSBjb21wb3J0ZW1lbnQgcGFyIGTDqWZhdXQgZHUgcGFuZWwgKi9cbi5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLyogU3R5bGUgcG91ciBsZXMgaWPDtG5lcyBkZSBmZXJtZXR1cmUgKi9cbi5hcnJvd19iYXMgaSB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB6LWluZGV4OiAxMDAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4tcGFnZS9wcm9kdWl0cy9wcm9kdWl0LWZvcm0vcHJvZHVpdC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGFBQUE7QUFFRjs7QUFPQTtFQUVFLGtCQUFBO0FBTEY7O0FBUUEsZUFBQTtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVNBO0VBQ0UsOEJBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBRUEsMkJBQUE7QUFQRjs7QUFVQTtFQUNFLFdBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7QUFURjs7QUFZQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFURjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFURjs7QUFZQTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBVEY7O0FBYUE7O0VBRUUsY0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBVkY7O0FBYUE7RUFDRSxVQUFBO0FBVkY7O0FBYUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFWRjs7QUFhQTtFQUNFLFdBQUE7RUFHQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNB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QUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBMUZOOztBQStGQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUE1RkY7O0FBK0ZBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUE1RkY7O0FBK0ZBO0VBQ0UsZ0JBQUE7QUE1RkY7O0FBK0ZBO0VBQ0UsZUFBQTtBQTVGRjs7QUErRkEsZ0RBQUE7QUFDQTtFQUNFLHdCQUFBO0FBNUZGOztBQStGQTtFQUNFLHdDQUFBO0VBQ0EscUJBQUE7QUE1RkY7O0FBK0ZBLCtDQUFBO0FBQ0E7O0VBRUUsb0JBQUE7QUE1RkY7O0FBK0ZBOztFQUVFLG9CQUFBO0FBNUZGOztBQStGQSxpREFBQTtBQUNBO0VBQ0UsK0JBQUE7QUE1RkY7O0FBK0ZBLHVDQUFBO0FBQ0E7RUFDRSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQTVGRjtBQUNBLDQyakNBQTQyakMiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudF9mb3JtdWxhaXJlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLy8gLmZvcm11bGFpcmUge1xuLy8gICB3aWR0aDogMTAwcHg7XG4vLyAgIGhlaWdodDogMjAwcHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuLy8gfVxuXG4ubW9kYWwtYm9keSB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4vKiBmb3JtdWxhaXJlICovXG5cbi5jaGFtcF9pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNoYW1wX2lucHV0X0NhdGVnb3JpZSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1xufVxuXG4uZm9ybXVsYWlyZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLlRpdGxlIGgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICAvLyBtYXJnaW46IDIwcHg7XG4gIG1hcmdpbjogNzJweCAyMHB4IDE1cHggMjBweDtcbn1cblxuLmlucHV0X2ZvY3VzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIG1pbi13aWR0aDogMjUwcHg7XG4gIGhlaWdodDogNDlweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLy9wYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiAjNjk1YzVjO1xufVxuXG4uZG91YmxlX2lucHV0X2dyaWRfdHJ1ZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG4gIGdhcDogMjBweDtcbn1cblxuLmNoYW1wX2lucHV0IC5sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMnB4O1xuICBsZWZ0OiA0cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmlucHV0X2ZvY3VzOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNjcyRTQ7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cblxuLmlucHV0X2ZvY3VzOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYmVsLFxuLmlucHV0X2ZvY3VzOmZvY3VzICsgLmxhYmVsIHtcbiAgY29sb3I6ICMwNjcyRTQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmlucHV0X2ZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5pbnB1dF9mb2N1czpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uaW5wdXRfZm9jdXMyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIG1pbi13aWR0aDogMjUwcHg7XG4gIC8vIGhlaWdodDogNzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogIzc3NzQ3NDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1MywgNTAsIDUwKTtcbn1cblxuLmlucHV0X2ZvY3VzMjpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDY3MkU0O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uY2hhbXBfaW5wdXQyIC5sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMnB4O1xuICBsZWZ0OiAwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogcmdiKDY2LCA1NiwgNTYpO1xufVxuXG5cbi5jaGFtcF9pbnB1dCAubGFiZWxDYXRlZ29yeSB7XG4gIGNvbG9yOiByZ2IoNjYsIDU2LCA1Nik7XG4gIGxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmlucHV0X2ZvY3VzMjpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWJlbCxcbi5pbnB1dF9mb2N1czI6Zm9jdXMgKyAubGFiZWwge1xuICBjb2xvcjogIzA2NzJFNDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaW5wdXRfZm9jdXMyOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5pbnB1dF9mb2N1czI6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmluZm9fdGl0cmVfaW5wdXQge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7IFxufVxuXG4uaW5mb190aXRyZV9pbnB1dCBoNCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNjBweDtcbn1cblxuLy8gPCEtLSBMZXMgaW5mb3JtYXRpb24gZGVzIG1hZ2FzaW4gIC0tPlxuLmluZm9ybWF0aW9uX2NhZHJlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMDgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8vIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uaW5mb3JtYXRpb25fY2FkcmVfc2F2ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmlucHV0X2ZvY3VzX21hZ2FzaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgLy9taW4td2lkdGg6IDEwMHB4IWltcG9ydGFudDtcbn1cblxuLmlucHV0X2ZvY3VzX3BldGl0IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuXG4vLyAuY2hhbXBfaW5wdXRfbWFyZ2luIHtcbi8vICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4vLyB9XG5cbi5kb3VibGVfaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4OyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uZG91YmxlX2lucHV0X2dyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMjBweDtcbn1cblxuLmRvdWJsZV9pbnB1dGgge1xuICBkaXNwbGF5OiBmbGV4OyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbn1cblxuXG4uY2hhbXBfaW5wdXQyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuXG4vLyAuaW5wdXRfZm9jdXNfbGFyZ2V7XG4vLyAgIC8vbWluLXdpZHRoOiAzODBweDtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyB9XG5cblxuLmNoYW1wX2lucHV0X2ludmVudGFpcmUge1xuICBkaXNwbGF5OiBmbGV4OyBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG59XG5cbi5jaGFtcF9pbnB1dF9pbnZlbnRhaXJlIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi8vIFRvZ2dsZSBcblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4vKiBNYXNxdWVyIGwnaW5wdXQgY2hlY2tib3ggb3JpZ2luYWwgKi9cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBMZSDDgsKrIHNsaWRlciDDgsK7ICovXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDsgbGVmdDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgdHJhbnNpdGlvbjogLjRzO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxOHB4OyBcbiAgd2lkdGg6IDE4cHg7XG4gIGxlZnQ6IDNweDsgXG4gIGJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogLjRzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIFF1YW5kIGxlIGNoZWNrYm94IGVzdCBjb2Now4PCqSAqL1xuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0OyAvKiBDb3VsZXVyIGF1IGNob2l4ICovXG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLyogRnJvbSBVaXZlcnNlLmlvIGJ5IFlheWExMjA4NSAqLyBcbi5jb250YWluZXJfZmlsZSB7XG4gIC8vIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGdhcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExMCwgMjU1LCAwLjA0MSk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5oZWFkZXJfZmlsZSB7XG4gIC8vIGZsZXg6IDE7XG4gIGhlaWdodDogMTQwcHg7XG4gIHdpZHRoOiAxNDBweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICMwNjcxZTQ5ZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG59XG5cbi5oZWFkZXJfZmlsZSBpbWd7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cblxuLmhlYWRlcl9maWxlIHN2ZyB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5oZWFkZXJfZmlsZSBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5mb290ZXJfZmlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTEwLCAyNTUsIDAuMDc1KTtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uZm9vdGVyX2ZpbGUgcCB7XG4gIG1hcmdpbjogMCFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmZvb3Rlcl9maWxlIGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuXG4jZmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oZWFkZXJfZmlsZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW5mb190aXRyZV9pbnB1dF9idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4vLyBidXR0b24gYW5udWxlclxuLmJ0bl9hbm51bGVyIC5idG5fY2FuY2VsIHtcbiAgcGFkZGluZzogOHB4IDMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLy8gYnV0dG9uIGFubnVsZXIgaG92ZXJcbi5idG5fYW5udWxlciAuYnRuX2NhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkODAxMDE7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluIC41cztcbn1cblxuLy8gYnV0dG9uIGFqb3V0ZXIgXG4uYnRuX2Fqb3V0ZXIgLmJ0bl9zYXZlIHtcbiAgcGFkZGluZzogOHB4IDMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MkU0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLy8gYnV0dG9uIGFqb3V0ZXIgaG92ZXJcbi5idG5fYWpvdXRlciAuYnRuX3NhdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4vLyBDYXRlZ29yeSBcblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG5fYWRkX2NhdGVnb3J5MiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLy9ib3gtc2hhZG93OiAwIDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4wNzgpO1xufVxuXG4uYnRuX2FkZF9jYXRlZ29yeTI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2M2M1O1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XG59XG5cblxuLmJ0bl9hZGRfY2F0ZWdvcnlEaXYyIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG59XG5cbi5kb3VibGVfaW5wdXQyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vIFBBUlRJUiBMRUZUXG5cblxuLy8gLmFqb3V0X2Jvb2xfZm9ybSB7XG4vLyAgIC8vd2lkdGg6IDEwMCU7XG4gIFxuLy8gfVxuXG4uYWpvdXRlcl9jYWRyZV9jcmVlX2NfdSB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEwOCk7XG59XG5cbi5jb250YWluZXJfZXJyb3JfbWVzc2FnZSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8vIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmlucHV0X2ZvY3VzX2NyZWVfY2F0ZSB7XG4gIC8vd2lkdGg6IDUwJTtcbiAgbWluLXdpZHRoOiBhdXRvO1xufVxuXG4uYnRuLWMtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5idG5fc19jYXRlZ29yeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcxZTRjODtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG5cbi5idG5fY19jYXRlZ29yeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDBjZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC42MHB4O1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG5cbi5idG5fc19jYXRlZ29yeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcbn1cblxuLmJ0bl9jX2NhdGVnb3J5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xufVxuXG4vLyBDYXRlZ29yeSBcblxuLmVycm9yLW1lc3NhZ2UtY2F0ZWdvcnkge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZXJyb3ItbWVzc2FnZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uZXJyb3JBUEkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtOXB4O1xufVxuXG4uZXJyb3JBUEkgaW1ne1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuXG4uZXJyb3JBUEkgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi8vIFBvcCB1cFxuXG4vKiBPdmVybGF5IGRlIGxhIHBvcHVwICovXG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG5cbi8qIENvbnRlbnUgZGUgbGEgcG9wdXAgKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgYW5pbWF0aW9uOiBmYWRlSW5Eb3duIDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBIZWFkZXIgZGUgbGEgcG9wdXAgYXZlYyBsJ2ltYWdlIGV0IGxlIHRpdHJlICovXG4ucG9wdXAtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBvcHVwLWltZyBpbWcge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucG9wdXAtaWNvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tb2RhbC1jb250ZW50IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogIzMzMztcbn1cblxuLm1vZGFsLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzU1NTtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi8qIFN0eWxlIGR1IGJvdXRvbiAqL1xuLm1vZGFsLWNvbnRlbnQgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xufVxuLyogU3R5bGUgZHUgYm91dG9uICovXG4vLyAuYnRuT0tPSyB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4vLyAgIGNvbG9yOiAjZmZmO1xuLy8gICBib3JkZXI6IG5vbmU7XG4vLyAgIHBhZGRpbmc6IDEwcHggMjBweDtcbi8vICAgZm9udC1zaXplOiAxZW07XG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcbi8vIH1cblxuLm1vZGFsLWNvbnRlbnQuZXJyb3IgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MzkzNTtcbn1cblxuLm1vZGFsLWNvbnRlbnQgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4NjNjNTtcbn1cblxuLm1vZGFsLWNvbnRlbnQuZXJyb3IgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzMmYyZjtcbn1cblxuLmxvYWRpbmctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuXG4ubG9hZGluZy1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDsgXG59XG5cbi5zcGlubmVyIHtcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4vLyBDb2RlIGJhcmVcbi5jaGFtcHNfY29kZV9iYXJlX2RvdWJsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE1MHB4O1xufVxuXG5cbi5jbGVhci1pbWFnZS1idG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxOSU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2MHB4LCAtMTM5cHgpO1xuICBtYXJnaW46IC0xOHB4O1xufVxuXG5cbi8qIFN0eWxlcyBwb3VyIGxlIHBvcHVwICovXG4ucG9wdXAtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ucG9wdXAtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIC8vIHdpZHRoOiA0MCU7XG59XG5cbi5wb3B1cC1oZWFkZXJCb3V0aXF1ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBvcHVwLWhlYWRlckJvdXRpcXVlIGg0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvcHVwLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYnRuLWNhbmNlbCwgLmJ0bi1zdWJtaXQge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXIhaW1wb3J0YW50O1xufVxuXG4uYnRuLWNhbmNlbCB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNGM0Q4REE7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMGNlO1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjRTdCMUI2O1xuICBwYWRkaW5nOiA2cHggMjVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5idG4tY2FuY2VsOmhvdmVyIHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0U3QjFCNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuLmJ0bi1zdWJtaXQge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3MWU0MzQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcxZTRjODtcbiAgcGFkZGluZzogNnB4IDI1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8vY3Vyc29yOiBuby1kcm9wO1xufVxuXG4uYnRuLXN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjcyRTQ7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5jaGFtcF9ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbiAgZ2FwOiAyMHB4O1xufVxuXG5cbi5ib3V0aXF1ZS1zZWxlY3Rpb24tcGFuZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMik7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgLnBhbmVsLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgaDQge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5jbG9zZS1idG4ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gIH1cblxuICAucGFuZWwtYm9keSB7XG4gICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuXG4gICAgICAuYm91dGlxdWUtaXRlbSB7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuXG4gICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIC5wYW5lbC1mb290ZXIge1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG5cbiAgICAgIC5idG4tY29uZmlybSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1NWNiMztcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cblxuLy8gLnNlbGVjdC1vcHRpb24ge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuLy8gICAmOmhvdmVyIHtcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4vLyAgIH1cbi8vIH1cblxuLnR3b19pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ub21icmVEZXZpc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTIwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuLm5vbWJyZURldmlzZSBwIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IFxuICAvLyBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5vcHRpb24td2l0aC1pY29uIC5vcHRpb24tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4ub3B0aW9uLXdpdGgtaWNvbiAub3B0aW9uLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG59XG5cbi5jb250YWluZXJfbmFtZV9pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm9wdGlvbl9pY29uX2RpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTZweDtcbiAgLy8gbGVmdDogNzcwcHg7XG59XG5cbi5jb250YWluZXJfbmFtZV9pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm9wdGlvbl9pY29uX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4OyBcbn1cblxuLm9wdGlvbi1pY29uIHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm1pbmktc3Bpbm5lciB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzNDk4ZGI7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi5yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnJhZGlvLW9wdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yYWRpby1pbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIFxuICAmOmNoZWNrZWQgKyAucmFkaW8tbGFiZWwgLnJhZGlvLWN1c3RvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NzJFNDtcbiAgICBib3JkZXItY29sb3I6ICMwNjcyRTQ7XG4gICAgXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiA2cHg7XG4gICAgICBoZWlnaHQ6IDZweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG4gIH1cbn1cblxuLnJhZGlvLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjhweDtcbn1cblxuLnJhZGlvLWN1c3RvbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLnRyaXBsZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5mZXJtZV9tYXRfb3B0aW9uIGkge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi8qIERhbnMgdm90cmUgZmljaGllciBTQ1NTIGdsb2JhbCBvdSBjb21wb3NhbnQgKi9cbi5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4vKiBEYW5zIHZvdHJlIGZpY2hpZXIgQ1NTIGdsb2JhbCBvdSBjb21wb3NhbnQgKi9cbi5jaGFtcF9pbnB1dF9jYXRlZ29yaWUsIFxuLmNoYW1wX2lucHV0X3VuaXRlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jaGFtcF9pbnB1dF9jYXRlZ29yaWUgPiAqLCBcbi5jaGFtcF9pbnB1dF91bml0ZSA+ICoge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLyogRW1ww4PCqmNoZXIgbGUgY29tcG9ydGVtZW50IHBhciBkw4PCqWZhdXQgZHUgcGFuZWwgKi9cbi5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLyogU3R5bGUgcG91ciBsZXMgaWPDg8K0bmVzIGRlIGZlcm1ldHVyZSAqL1xuLmFycm93X2JhcyBpIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_admin-page_facture-proforma_addfacture-proforma_addfacture-proforma_component_ts.js.map